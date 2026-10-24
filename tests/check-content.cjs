/* Contrôle de toutes les données locales réellement chargées par index.html.
   Ce contrôle ne remplace pas l'audit des textes officiels et des corrigés. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const sandbox={window:{CM2_SUBJECTS:[]},console};
const loaded=[];
for(const match of html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*><\/script>/g)) {
 const src=match[1];assert(!/^(?:https?:)?\/\//.test(src),'Dépendance réseau interdite : '+src);
 if(src==='app.js')continue;
 const file=path.resolve(root,src);assert(file.startsWith(root+path.sep),'Chemin de contenu externe');assert(fs.existsSync(file),'Script local absent '+src);
 vm.runInNewContext(fs.readFileSync(file,'utf8'),sandbox,{filename:src});loaded.push(src);
}
const subjects=sandbox.window.CM2_CONTENT;
assert(Array.isArray(subjects),'CM2_CONTENT absent après les scripts locaux');
const required=['francais','mathematiques','histoire','geographie','sciences','anglais','emc','arts-plastiques','musique','histoire-arts','eps','transversaux'];
assert.deepEqual(Array.from(subjects,s=>s.id).sort(),required.sort(),'Toutes les disciplines et transversaux doivent être présents une seule fois');
const ids=new Set(),stepIds=new Set(),exerciseIds=new Set(),audioRefs=new Set(),summary=[],types={};let steps=0,exercises=0;
function unique(id){assert(typeof id==='string'&&/^[a-z0-9][a-z0-9-]*$/.test(id),'Identifiant stable invalide '+id);assert(!ids.has(id),'Identifiant dupliqué '+id);assert(!id.includes('technique-v1'),'Fixture technique non remplacée '+id);ids.add(id);}
function text(v,label){assert(typeof v==='string'&&v.trim().length,label+' absent');assert(!/bientôt disponible|à rédiger|lorem ipsum/i.test(v),label+' contient une attente de contenu');}
function visual(v,id){if(!v)return;assert(v&&typeof v==='object'&&['table','timeline','map','chart'].includes(v.type),id+' visuel inconnu');text(v.caption,id+' légende du visuel');if(v.type==='chart'){assert(['bar','line','pie'].includes(v.kind),id+' diagramme inconnu');assert(Array.isArray(v.labels)&&Array.isArray(v.values)&&v.labels.length===v.values.length&&v.values.length>=2,id+' données de diagramme incohérentes');v.labels.forEach(label=>text(label,id+' étiquette de diagramme'));assert(v.values.every(n=>Number.isFinite(n)&&n>=0),id+' valeur de diagramme invalide');if(v.kind==='pie'){assert(v.values.reduce((a,b)=>a+b,0)>0,id+' disque sans valeur positive');if(v.total!==undefined)assert.equal(v.values.reduce((a,b)=>a+b,0),v.total,id+' total du disque incohérent');}}
if(v.type==='table'){assert(Array.isArray(v.headers)&&v.headers.length>=2&&Array.isArray(v.rows)&&v.rows.length,id+' tableau vide');v.rows.forEach(r=>assert(Array.isArray(r)&&r.length===v.headers.length,id+' ligne de tableau incohérente'));}if(v.type==='timeline'){assert(Array.isArray(v.events)&&v.events.length>=2,id+' frise sans repères');v.events.forEach(e=>{text(String(e.date),id+' date de frise');text(e.label,id+' repère de frise')});}if(v.type==='map'){text(v.description,id+' description alternative de carte');assert(Array.isArray(v.points)&&v.points.length,id+' carte sans points');v.points.forEach(p=>{assert(Number.isFinite(p.x)&&Number.isFinite(p.y)&&p.x>=0&&p.x<=100&&p.y>=0&&p.y<=100,id+' point hors carte');text(p.label,id+' libellé de carte')});}}
for(const subject of subjects){
 unique(subject.id);text(subject.title,subject.id+' titre');assert(subject.chapters?.length,subject.id+' chapitre absent');let sn=0,en=0;
 for(const chapter of subject.chapters){unique(chapter.id);text(chapter.title,chapter.id+' titre');assert(chapter.steps?.length,chapter.id+' chapitre vide');
  for(const step of chapter.steps){unique(step.id);stepIds.add(step.id);steps++;sn++;for(const f of ['title','objective','lesson','example'])text(step[f],step.id+' '+f);assert(step.exercises?.length>=2,step.id+' doit proposer plusieurs exercices');visual(step.visual,step.id);if(step.audio)audioRefs.add(step.audio);
   for(const ex of step.exercises){unique(ex.id);exerciseIds.add(ex.id);exercises++;en++;for(const f of ['prompt','hint','explanation'])text(ex[f],ex.id+' '+f);assert(['choice','number','text','order','match','guided'].includes(ex.type),ex.id+' type inconnu '+ex.type);types[ex.type]=(types[ex.type]||0)+1;visual(ex.visual,ex.id);if(ex.audio)audioRefs.add(ex.audio);
    if(ex.type==='guided'){assert(Array.isArray(ex.criteria)&&ex.criteria.length>=2,ex.id+' grille insuffisante');ex.criteria.forEach(c=>text(c,ex.id+' critère'));}
    else assert(ex.answer!==undefined&&ex.answer!==null,ex.id+' corrigé absent');
    if(ex.type==='choice'){assert(ex.options?.length>=2,ex.id+' choix insuffisants');assert(new Set(ex.options).size===ex.options.length,ex.id+' choix dupliqués');assert(ex.options.includes(ex.answer),ex.id+' solution hors choix');}
    if(ex.type==='number'){const a=String(ex.answer).replace(',','.');assert(/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:\s*\/\s*[+-]?(?:\d+(?:\.\d+)?|\.\d+))?(?:\s*[a-zA-Zéè²³%€°]*)$/.test(a),ex.id+' solution numérique illisible');}
    if(ex.type==='match'){const left=ex.pairs?ex.pairs.map(p=>Array.isArray(p)?p[0]:p.left):ex.options;const right=ex.pairs?ex.pairs.map(p=>Array.isArray(p)?p[1]:p.right):(ex.choices||ex.answer);assert(Array.isArray(left)&&left.length>=2&&Array.isArray(right)&&right.length>=2,ex.id+' association sans éléments');assert(Array.isArray(ex.answer)&&ex.answer.length===left.length&&ex.answer.every(v=>right.includes(v)),ex.id+' association/corrigé incohérents');}
    if(ex.type==='order'){assert(Array.isArray(ex.answer)&&ex.answer.length>=2,ex.id+' ordre sans éléments');assert(new Set(ex.answer).size===ex.answer.length,ex.id+' ordre ambigu, éléments répétés');assert(ex.options?.length===ex.answer.length&&ex.answer.every(a=>ex.options.includes(a)),ex.id+' ordre/options incohérents');}
   }
  }
 }
 summary.push({id:subject.id,chapters:subject.chapters.length,steps:sn,exercises:en});
}
/* Les éventuels prérequis explicites doivent cibler des étapes existantes. */
for(const s of subjects)for(const c of s.chapters)for(const t of c.steps)for(const ref of t.prerequisites||[])assert(stepIds.has(ref),t.id+' prérequis inexistant '+ref);
for(const ref of audioRefs){assert(typeof ref==='string'&&!/^(?:https?:)?\/\//.test(ref),'Piste audio distante interdite '+ref);const file=path.resolve(root,ref);assert(file.startsWith(root+path.sep)&&fs.existsSync(file),'Piste audio locale absente '+ref);const bytes=fs.readFileSync(file);assert.equal(bytes.toString('ascii',0,4),'RIFF','WAV non RIFF '+ref);assert.equal(bytes.toString('ascii',8,12),'WAVE','WAV non WAVE '+ref);const embedded=sandbox.window.CM2_AUDIO?.[ref];assert(typeof embedded==='string'&&embedded.startsWith('data:audio/wav;base64,'),'Piste non embarquée '+ref);assert(Buffer.from(embedded.split(',')[1],'base64').equals(bytes),'Audio embarqué différent du WAV '+ref);}
const result={date:new Date().toISOString(),scripts:loaded,subjects:summary,total:{subjects:subjects.length,steps,exercises,audioTracks:audioRefs.size},types,scope:'Structure des données et solutions déclarées ; ne certifie pas à elle seule l’exhaustivité officielle ou les corrigés.'};
fs.writeFileSync(path.join(__dirname,'content-results.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
