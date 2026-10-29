// Optional local file server. No API, build tools or third-party packages.
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {sendFile} from './http-file.mjs';
const root=path.dirname(fileURLToPath(import.meta.url));
const port=Number(process.env.PORT||5179);
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.jpg':'image/jpeg','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2'};
const server=http.createServer(async(req,res)=>{
  try{
    const url=new URL(req.url,'http://localhost');
    let file=path.resolve(root,'.'+decodeURIComponent(url.pathname));
    if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
    if((await fs.stat(file)).isDirectory()){
      if(!url.pathname.endsWith('/')){res.writeHead(301,{Location:url.pathname+'/'+url.search}).end();return;}
      file=path.join(file,'index.html');
    }
    await sendFile(req,res,file,mime[path.extname(file)]||'application/octet-stream');
  }catch{
    const html=(await fs.readFile(path.join(root,'404.html'),'utf8')).replaceAll('="./','="/');
    res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'}).end(html);
  }
}).listen(port,'127.0.0.1',()=>console.log(`ABOPC static demo: http://127.0.0.1:${server.address().port} (Ctrl+C để dừng)`));
