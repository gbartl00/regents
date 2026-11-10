import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const config = JSON.parse(await readFile(new URL('../cloudflare-deployment.json', import.meta.url), 'utf8'));

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, '.cloudflare', 'output', 'v0');
const worker = path.join(output, 'workers', 'default');
const assets = path.join(worker, 'assets');
// Rebuild only this project's generated deployment output.
if (!output.startsWith(path.resolve(root) + path.sep)) throw new Error('Invalid output path');
await rm(output, { recursive: true, force: true });
await mkdir(assets, { recursive: true });
const files = (await readdir(root)).filter(name => name.endsWith('.html') || ['app.js', 'styles.css', 'regents-components.css', 'site-navigation.js', 'components.js'].includes(name));
for (const file of [...files, 'assets']) {
  await cp(path.join(root, file), path.join(assets, file), { recursive: true });
}
await writeFile(path.join(output, 'config.json'), JSON.stringify({
  accountId: config.accountId,
  buildContext: { isPreview: false },
}, null, 2));
await writeFile(path.join(worker, 'worker.config.json'), JSON.stringify(config.worker, null, 2));
console.log(`Prepared ${config.worker.name}: ${files.length} public files plus assets.`);
