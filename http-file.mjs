import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {brotliCompress,gzip,constants} from 'node:zlib';
import {promisify} from 'node:util';
const compress={br:promisify(brotliCompress),gzip:promisify(gzip)};
const cache=new Map();
function encoding(header=''){
  const values=new Map(header.split(',').map(part=>{const [name,...params]=part.trim().split(';');const q=params.find(p=>p.trim().startsWith('q='));return [name,q?Number(q.split('=')[1]):1];}));
  return ['br','gzip'].filter(name=>(values.get(name)??values.get('*')??0)>0).sort((a,b)=>(values.get(b)??values.get('*'))-(values.get(a)??values.get('*')))[0];
}
export async function sendFile(req,res,file,type){
  const stat=await fs.stat(file);
  const codec=/\.(html|css|js|mjs|json|svg)$/.test(path.extname(file))?encoding(req.headers['accept-encoding']):undefined;
  const key=file+':'+(codec||'identity');
  let entry=cache.get(key);
  if(!entry||entry.mtime!==stat.mtimeMs||entry.size!==stat.size){
    let body=await fs.readFile(file);
    if(codec)body=await compress[codec](body,codec==='br'?{params:{[constants.BROTLI_PARAM_QUALITY]:4}}:{level:6});
    entry={body,mtime:stat.mtimeMs,size:stat.size,etag:'"'+createHash('sha256').update(body).digest('hex').slice(0,24)+'"'};
    if(cache.size>=128)cache.clear();
    cache.set(key,entry);
  }
  const headers={'Content-Type':type,'Cache-Control':'no-cache','Vary':'Accept-Encoding','ETag':entry.etag};
  if(codec)headers['Content-Encoding']=codec;
  if(req.headers['if-none-match']===entry.etag){res.writeHead(304,headers).end();return;}
  res.writeHead(200,{...headers,'Content-Length':entry.body.length});
  res.end(req.method==='HEAD'?undefined:entry.body);
}
