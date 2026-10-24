/* Vérifie les liens de la matrice ; ne remplace pas la lecture des textes officiels. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),sandbox={window:{CM2_SUBJECTS:[]},console};
for(const m of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script\b[^>]*src=["']([^"']+)["'][^>]*><\/script>/g))if(m[1]!=='app.js')vm.runInNewContext(fs.readFileSync(path.join(root,m[1]),'utf8'),sandbox,{filename:m[1]});
const steps=new Map(sandbox.window.CM2_CONTENT.flatMap(s=>s.chapters.flatMap(c=>c.steps.map(t=>[t.id,t]))));
const map=JSON.parse(fs.readFileSync(path.join(root,'coverage-map.json'),'utf8'));
assert(Array.isArray(map)&&map.length,'Matrice structurée vide');let links=0;const linked=new Set();
for(const row of map){assert(typeof row.source==='string'&&row.source.trim(),'Référence officielle absente');assert(typeof row.competence==='string'&&row.competence.trim(),'Compétence absente');assert(typeof row.status==='string'&&row.status.trim(),'Statut CM2/cycle/proposition absent');assert(Array.isArray(row.stepIds)&&row.stepIds.length,'Compétence déclarée sans activité : '+row.competence);for(const id of row.stepIds){assert(steps.has(id),'Étape référencée inexistante '+id);assert(steps.get(id).exercises.length>=2,'Étape sans exercices suffisants '+id);links++;linked.add(id)}}
const unlinked=[...steps.keys()].filter(id=>!linked.has(id));
assert.equal(unlinked.length,0,'Étapes sans rattachement à la matrice : '+unlinked.join(', '));
console.log(map.length+' entrées de compétences ; '+links+' liens vers '+linked.size+' étapes existantes. Aucune référence orpheline.');
fs.writeFileSync(path.join(__dirname,'coverage-results.json'),JSON.stringify({date:new Date().toISOString(),competences:map.length,links,linkedSteps:linked.size,unlinked,scope:'Intégrité de la matrice, pas preuve indépendante de l’exhaustivité de la transcription officielle.'},null,2)+'\n');
