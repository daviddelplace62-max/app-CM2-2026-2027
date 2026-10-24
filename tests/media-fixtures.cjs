'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
function load(){
 const sandbox={window:{CM2_SUBJECTS:[]},console};
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const scripts=Array.from(html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*><\/script>/g),m=>m[1]);
 for(const src of scripts){if(src==='app.js')continue;vm.runInNewContext(fs.readFileSync(path.join(root,src),'utf8'),sandbox,{filename:src});}
 const subjects=sandbox.window.CM2_CONTENT;
 const steps=subjects.flatMap(s=>s.chapters.flatMap(c=>c.steps.map(t=>({...t,subjectId:s.id,chapterId:c.id}))));
 const spoken=steps.flatMap(t=>[t,...t.exercises].filter(item=>item.speak).map(item=>({id:item.id,stepId:t.id,subjectId:t.subjectId,text:item.speak})));
 return {root,html,scripts,sandbox,subjects,steps,spoken};
}
module.exports={root,load};
