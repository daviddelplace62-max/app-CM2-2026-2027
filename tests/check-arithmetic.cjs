/* Vérification indépendante des corrigés dont la consigne est un calcul binaire explicite.
   Les problèmes rédigés, figures et explications demandent une relecture distincte. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),sandbox={window:{CM2_SUBJECTS:[]},console};
for(const m of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script\b[^>]*src=["']([^"']+)["'][^>]*><\/script>/g))if(m[1]!=='app.js')vm.runInNewContext(fs.readFileSync(path.join(root,m[1]),'utf8'),sandbox,{filename:m[1]});
function number(v){const s=String(v).trim().replace(/\s+/g,'').replace(',','.');const f=s.match(/^([+-]?(?:\d+(?:\.\d+)?|\.\d+))(?:\/([+-]?(?:\d+(?:\.\d+)?|\.\d+)))?$/);if(!f)return null;const n=Number(f[1])/(f[2]===undefined?1:Number(f[2]));return Number.isFinite(n)?n:null}
const checked=[],unverified=[];
for(const s of sandbox.window.CM2_CONTENT)for(const c of s.chapters)for(const t of c.steps)for(const e of t.exercises){
 if(e.type!=='number')continue;
 const expression=e.prompt.match(/^(?:Calcule|Effectue)(?:\s+mentalement)?\s*:?\s*([+-]?[\d\s]+(?:[.,]\d+)?)\s*([+×x÷−-])\s*([+-]?[\d\s]+(?:[.,]\d+)?)\s*[.?]?$/i);
 if(!expression){unverified.push(e.id);continue}
 const a=number(expression[1]),b=number(expression[3]),actual=number(e.answer);assert(a!==null&&b!==null&&actual!==null,e.id+' corrigé illisible pour calcul explicite');let expected;
 switch(expression[2]){case '+':expected=a+b;break;case '−':case '-':expected=a-b;break;case '×':case'x':expected=a*b;break;case'÷':expected=a/b;break;}
 assert(Number.isFinite(expected)&&Math.abs(expected-actual)<1e-9,e.id+' corrigé incorrect : '+expected+' attendu, '+actual+' fourni');checked.push({id:e.id,prompt:e.prompt,expected});
}
fs.writeFileSync(path.join(__dirname,'arithmetic-results.json'),JSON.stringify({date:new Date().toISOString(),checked,notAutomaticallyChecked:unverified,scope:'Uniquement calculs binaires explicites correspondant au motif ; les autres corrigés ne sont pas certifiés par ce test.'},null,2)+'\n');
console.log(checked.length+' calculs explicites contrôlés indépendamment ; '+unverified.length+' autres réponses numériques hors du motif automatique (voir relecture dans le rapport).' );
