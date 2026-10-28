const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.ttf':'font/ttf'};
const staticPages = ["/index-static.html", "/members-static.html", "/member-cary-baetz-static.html", "/member-billy-taylor-static.html", "/member-jennifer-callahan-static.html", "/member-tracy-poole-static.html", "/member-chris-franklin-static.html", "/member-joe-hall-static.html", "/member-jimmy-harrel-static.html", "/member-rick-walker-static.html", "/member-static.html"];
const server = http.createServer((req,res) => {
  let pathname;
  try { pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch {res.writeHead(400);res.end('Bad request');return;}
  const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return;}
  if(!['/index.html','/styles.css','/app.js',...staticPages].includes(pathname==='/'?'/index.html':pathname)&&!pathname.startsWith('/assets/')){res.writeHead(404);res.end('Not found');return;}
  fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);res.end('Not found');return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);});
});
server.listen(3000,'127.0.0.1',()=>console.log('Local preview: http://localhost:3000'));
