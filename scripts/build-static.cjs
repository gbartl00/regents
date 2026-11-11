const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const code = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const navigation = code.slice(code.indexOf('// Keep the keyboard path'));
fs.writeFileSync(path.join(root, 'site-navigation.js'), navigation);
const ids = [...code.matchAll(/id:'([^']+)',name:/g)].map(m => m[1]);
const routes = [['index-static.html', ''], ['members-static.html', '?page=members'], ['components.html', '?page=components'], ['footer-options.html', '?page=footer-options'], ...ids.map(id => [`member-${id}-static.html`, `?page=member&id=${id}`]), ['member-static.html', '?page=member&id=cary-baetz']];
const template = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const [filename, search] of routes) {
 const nodes = new Map();
 const document = { title: '', querySelector(selector) { if(!nodes.has(selector))nodes.set(selector,{innerHTML:'',addEventListener(){}}); return nodes.get(selector); } };
 vm.runInNewContext(code, {document, location:{search}, URLSearchParams, window:{matchMedia(){return {addEventListener(){}}}}});
 let html = template.replace(/<title>.*?<\/title>/, `<title>${document.title.replaceAll('&', '&amp;')}</title>`)
  .replace('<header id="header"></header>', `<header id="header">${nodes.get('#header').innerHTML}</header>`)
  .replace('<main id="main-content" tabindex="-1" aria-label="Main content"></main>', `<main id="main-content" tabindex="-1" aria-label="Main content">${nodes.get('#main-content').innerHTML}</main>`)
  .replace('<footer id="footer"></footer>', `<footer id="footer">${nodes.get('#footer').innerHTML}</footer>`)
  .replace('src="app.js"', 'src="site-navigation.js"');
 html = html.replace(/href="\?page=member&amp;id=([a-z-]+)"/g, 'href="member-$1-static.html"')
  .replaceAll('href="?page=members"', 'href="members-static.html"').replaceAll('href="./"', 'href="index-static.html"')
  .replace(/href="\?page=/g, 'href="index.html?page=').replace(/class="(site-search[^"]*)" action=""/g, 'class="$1" action="index.html"');
 fs.writeFileSync(path.join(root,filename), html);
}
console.log(`Updated ${routes.length} static reference pages.`);
