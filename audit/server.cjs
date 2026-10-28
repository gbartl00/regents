// Development-only audit server. Not part of the website or its preview server.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.ttf':'font/ttf'};
http.createServer((req,res)=>{
 let url, file;
 try {url=new URL(req.url,'http://localhost');file=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));}catch{res.writeHead(400);res.end();return;}
 if(!file.startsWith(root+path.sep)||!['index.html','styles.css','app.js'].includes(path.relative(root,file))&&!['assets'+path.sep,'audit'+path.sep].some(p=>path.relative(root,file).startsWith(p))){res.writeHead(404);res.end();return;}
 fs.readFile(file,(err,data)=>{
  if(err){res.writeHead(404);res.end();return;}
  if(path.basename(file)==='index.html'&&url.searchParams.has('audit')) data=Buffer.from(data.toString().replace('</head>','<script defer src="audit/axe.min.js"></script><script defer src="audit/run.js"></script></head>'));
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);
 });
}).listen(3001,'127.0.0.1',()=>console.log('Audit preview: http://localhost:3001/?audit=1'));
