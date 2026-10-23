/* Contrôle structurel des données ; ne valide pas leur couverture pédagogique. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const sandbox = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'contents.js'),'utf8'), sandbox);
const subjects = sandbox.window.CM2_CONTENT;
assert(Array.isArray(subjects) && subjects.length === 11, '11 disciplines attendues');
const ids = new Set(); let steps = 0, exercises = 0;
function unique(id) { assert(typeof id === 'string' && id.length, 'Identifiant manquant'); assert(!ids.has(id), `Identifiant dupliqué ${id}`); ids.add(id); }
for (const subject of subjects) {
 unique(subject.id); assert(subject.title); assert(subject.chapters?.length, `${subject.id}: chapitre absent`);
 for (const chapter of subject.chapters) {
  unique(chapter.id); assert(chapter.title); assert(chapter.steps?.length, `${chapter.id}: étape absente`);
  for (const step of chapter.steps) {
   unique(step.id); steps++; for(const field of ['title','objective','lesson','example']) assert(step[field], `${step.id}: ${field} absent`);
   assert(step.exercises?.length, `${step.id}: exercice absent`);
   for (const ex of step.exercises) {
    unique(ex.id); exercises++; assert(ex.prompt && ex.hint && ex.explanation, `${ex.id}: consigne/indice/correction absent`);
    assert(['choice','number','text','order','guided'].includes(ex.type), `${ex.id}: type inconnu`);
    if (ex.type === 'guided') assert(ex.criteria?.length, `${ex.id}: critères absents`);
    else assert(ex.answer !== undefined && ex.answer !== null, `${ex.id}: réponse absente`);
    if (ex.type === 'choice') assert(ex.options?.length >= 2, `${ex.id}: choix insuffisants`);
   }
  }
 }
}
console.log(`${subjects.length} disciplines, ${steps} étapes, ${exercises} exercices : structure valide. Couverture officielle NON vérifiée ; données techniques de recette.`);
