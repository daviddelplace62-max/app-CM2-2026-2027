/* Recette réelle des voix et supports ; ne certifie pas une prononciation humaine. */
'use strict';
let playwright;try{playwright=require('playwright')}catch{playwright=require('/workspace/cm2-tools/node_modules/playwright')}
const {chromium}=playwright,assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const {load,root}=require('./media-fixtures.cjs'),base=process.env.CM2_TEST_URL||'http://127.0.0.1:8080/';
const data=load(),results=[];
const hashes=()=>Object.fromEntries(['index.html',...Array.from(fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<(?:script|link)\b[^>]*(?:src|href)=["']([^"']+\.(?:js|css))["']/g),m=>m[1])].map(f=>[f,crypto.createHash('sha256').update(fs.readFileSync(path.join(root,f))).digest('hex')]));
const testedAssets=hashes();
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
 const context=await browser.newContext({viewport:{width:1440,height:1000},hasTouch:true});
 await context.addInitScript(()=>{Object.defineProperty(window,'speechSynthesis',{value:undefined,configurable:true});Object.defineProperty(window,'SpeechSynthesisUtterance',{value:undefined,configurable:true});});
 const page=await context.newPage();page.setDefaultTimeout(7000);const errors=[],lateNetwork=[],external=[];let loaded=false;
 page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url())){if(loaded&&!r.url().endsWith('/favicon.ico'))lateNetwork.push(r.url());if(new URL(r.url()).origin!==new URL(base).origin)external.push(r.url())}});
 async function test(name,fn){try{await fn();results.push({name,status:'réussi'});console.log('✓ '+name)}catch(e){results.push({name,status:'échec',detail:e.message});console.error('✗ '+name+': '+e.message)}}
 await page.goto(base);await page.evaluate(()=>localStorage.clear());await page.reload();loaded=true;
 await page.getByTestId('nickname').fill('Recette médias');await page.getByTestId('create-profile').click();
 const active=()=>page.evaluate(()=>{const s=CM2.getState();return s.profiles.find(p=>p.id===s.active)});
 async function subject(id){if(await page.locator('#menu-toggle').isVisible()&&await page.locator('#menu-toggle').getAttribute('aria-expanded')!=='true')await page.locator('#menu-toggle').click();await page.getByTestId('subject-'+id).click()}
 async function openStep(t){await subject(t.subjectId);await page.locator('[data-step="'+t.id+'"]').click()}
 async function solve(ex){const sec=page.locator('[data-exercise="'+ex.id+'"]');
  if(ex.type==='guided'){await sec.locator('[data-realized]').click();for(const c of await sec.locator('[data-criterion]').all())await c.check();page.once('dialog',d=>d.accept());await sec.locator('[data-observe]').click();return;}
  if(ex.type==='choice')await sec.getByRole('radio',{name:String(ex.answer),exact:true}).check();
  else if(ex.type==='number'||ex.type==='text')await sec.getByTestId('answer').fill(String(Array.isArray(ex.answer)?ex.answer[0]:ex.answer));
  else if(ex.type==='match'){for(const [i,v]of ex.answer.entries())await sec.locator('select').nth(i).selectOption(String(v));}
  else if(ex.type==='order'){const rows=sec.locator('[data-order-value]');for(let i=0;i<ex.answer.length;i++){let at=(await rows.evaluateAll(ns=>ns.map(n=>n.dataset.orderValue))).indexOf(String(ex.answer[i]));while(at>i){await rows.nth(at).locator('[data-order-up]').click();at--;}}}
  await sec.getByTestId('submit-answer').click();assert((await sec.getByTestId('feedback').textContent()).match(/bravo|réussi|correct/i));
 }
 async function unlockAndOpen(t){const chapter=data.subjects.find(s=>s.id===t.subjectId).chapters.find(c=>c.id===t.chapterId);for(const earlier of chapter.steps.slice(0,chapter.steps.findIndex(x=>x.id===t.id))){if(!(await active()).completed[earlier.id]?.validated){await openStep({...earlier,subjectId:t.subjectId});for(const e of earlier.exercises)await solve(e);}}await openStep(t);}
 await test('Toutes les voix anglaises sont utilisables sans aucune synthèse vocale du navigateur',async()=>{
  assert.equal(await page.evaluate(()=>typeof speechSynthesis),'undefined');assert.equal(data.spoken.length,23);const records=[];
  for(const spoken of data.spoken){const t=data.steps.find(t=>t.id===spoken.stepId);await unlockAndOpen(t);const player=page.locator('.voice-player').filter({has:page.locator('audio.voice-audio')}).first();assert(await player.count());const audio=player.locator('audio.voice-audio');await page.waitForFunction(()=>[...document.querySelectorAll('.voice-audio')].every(a=>a.readyState>=2&&Number.isFinite(a.duration)&&a.duration>0));
   const src=await audio.getAttribute('src'),voice=data.sandbox.window.CM2_VOICES.find(v=>v.text===spoken.text);assert(src===voice.data,'La piste doit correspondre exactement au texte de cette leçon : '+voice.id);await player.locator('[data-voice-rate]').selectOption('0.8');assert.equal(await audio.evaluate(a=>a.playbackRate),0.8);await player.locator('[data-voice-rate]').selectOption('1');assert.equal(await audio.evaluate(a=>a.playbackRate),1);
   await player.locator('[data-voice-play]').click();await page.waitForFunction(()=>document.querySelector('.voice-audio').currentTime>0.08&&!document.querySelector('.voice-audio').paused);await player.locator('[data-voice-pause]').click();assert(await audio.evaluate(a=>a.paused));const pausedAt=await audio.evaluate(a=>a.currentTime);await page.waitForTimeout(120);assert(Math.abs((await audio.evaluate(a=>a.currentTime))-pausedAt)<0.02,'Pause effective');
   await audio.evaluate(a=>a.currentTime=Math.min(1.2,a.duration/2));await player.locator('[data-voice-repeat]').click();await page.waitForFunction(()=>{const a=document.querySelector('.voice-audio');return !a.paused&&a.currentTime<0.6});await player.locator('[data-voice-stop]').click();assert(await audio.evaluate(a=>a.paused&&a.currentTime<0.04));assert((await player.textContent()).match(/prononciation.*pas|aucune.*prononciation/i));records.push({id:voice.id,duration:await audio.evaluate(a=>a.duration)});
  }
  fs.writeFileSync(path.join(__dirname,'voice-playback-results.json'),JSON.stringify({date:new Date().toISOString(),records,scope:'Décodage et commandes de lecture, sans évaluation humaine de prononciation.'},null,2)+'\n');
 });
 await test('La navigation arrête le lecteur vocal et ne modifie pas la validation de la leçon',async()=>{const t=data.steps.find(t=>t.speak);await unlockAndOpen(t);const before=JSON.stringify((await active()).completed[t.id]||null);const audio=await page.locator('.voice-audio').elementHandle();await page.locator('[data-voice-play]').first().click();await page.waitForFunction(()=>!document.querySelector('.voice-audio').paused);await page.locator('#profile-button').click();assert(await audio.evaluate(a=>a.paused));assert.equal(JSON.stringify((await active()).completed[t.id]||null),before);await page.getByTestId('profile-choice').click();});
 await test('Audio absent ou illisible : message explicite et texte conservé',async()=>{
  const t=data.steps.find(t=>t.speak);await unlockAndOpen(t);await page.locator('.voice-audio').evaluate(a=>{a.src='data:audio/mpeg;base64,AAAA';a.load()});await page.waitForFunction(()=>document.querySelector('.voice-status').textContent.includes('ne peut pas être lu'));assert.equal(await page.locator('.voice-transcript').textContent(),t.speak);await page.locator('[data-voice-play]').click();assert((await page.locator('.voice-status').textContent()).includes('ne peut pas être lu'));
  try{await page.evaluate(t=>{window.__testVoices=CM2_VOICES;window.CM2_VOICES=[];CM2.go({page:'step',subject:t.subjectId,step:t.id})},t);assert.equal(await page.locator('.voice-audio').count(),0);assert((await page.locator('.voice-status').textContent()).match(/indisponible/));assert((await page.locator('#main').textContent()).includes(t.speak),'Le texte à lire demeure disponible même sans fichier');}
  finally{await page.evaluate(()=>{window.CM2_VOICES=window.__testVoices;delete window.__testVoices;CM2.go({page:'dashboard'})});}
 });
 await test('Fractions à compléter : numérateur seul ou fraction entière correcte acceptés',async()=>{
  const ex=data.steps.flatMap(t=>t.exercises).find(e=>e.id==='mathematiques-fractions-equivalentes-ex1');assert(ex,'Exercice utilisateur retrouvé avec le même identifiant');
  const report=await page.evaluate(ex=>({bare:CM2.checkAnswer(ex,'9'),full:CM2.checkAnswer(ex,'9/12'),wrong:CM2.checkAnswer(ex,'8/12'),empty:CM2.checkAnswer(ex,''),zero:CM2.checkAnswer(ex,'9/0'),general:CM2.checkAnswer({type:'number',answer:1.5},'3/2')}),ex);
  assert(report.bare.correct&&report.full.correct,'9 et9/12 doivent être acceptés pour3/4=…/12');assert(report.wrong.valid&&!report.wrong.correct);assert(!report.empty.valid&&!report.zero.valid);assert(report.general.correct,'Les fractions numériques ordinaires restent évaluées comme quotients');
  const milli=data.steps.flatMap(t=>t.exercises).find(e=>e.id==='mathematiques-decimaux-ecritures-ex3');assert(milli);assert(await page.evaluate(ex=>CM2.checkAnswer(ex,'32').correct&&CM2.checkAnswer(ex,'32/1000').correct&&!CM2.checkAnswer(ex,'31/1000').correct,milli));
  const step=data.steps.find(t=>t.exercises.some(e=>e.id===ex.id));await unlockAndOpen(step);const section=page.locator('[data-exercise="'+ex.id+'"]');await section.getByTestId('answer').fill('9/12');await section.getByTestId('submit-answer').click();assert((await section.getByTestId('feedback').textContent()).match(/bravo|réussi|correct/i),'Le formulaire réel accepte9/12');
 });
 async function preview(id){await page.evaluate(id=>{window.CM2_VISUALS.stop();document.querySelector('#media-support-preview')?.remove();const host=document.createElement('section');host.id='media-support-preview';host.className='lesson';host.innerHTML=CM2_VISUALS.render({id});document.querySelector('#main').prepend(host);CM2_VISUALS.bind(host)},id);return page.locator('#media-support-preview [data-support]');}
 await test('Tous les supports déclarés possèdent un rendu local lisible et une description',async()=>{
  const record=[];for(const [id,config]of Object.entries(data.sandbox.window.CM2_SUPPORTS)){const support=await preview(id);assert.equal(await support.count(),1,id);assert.equal(await support.getAttribute('data-support-kind'),config.kind);assert((await support.locator('.support-description').innerText()).trim().length>0);assert(await support.locator('svg[role="img"]').count()>0,'SVG absent '+id);assert(await support.locator('.support-static summary').count());record.push({id,kind:config.kind});}
  fs.writeFileSync(path.join(__dirname,'support-render-results.json'),JSON.stringify({date:new Date().toISOString(),records:record},null,2)+'\n');
 });
 for(const kind of ['fraction','numberline','symmetry','circuit','timeline'])await test('Manipulation '+kind+' : clavier/toucher, démarrer, pause, recommencer et version statique',async()=>{
  await page.emulateMedia({reducedMotion:'no-preference'});const [id,config]=Object.entries(data.sandbox.window.CM2_SUPPORTS).find(([,v])=>v.kind===kind);const before=JSON.stringify((await active()).completed);const support=await preview(id),state=support.locator('[data-visual-state]'),initial=await state.textContent();
  await page.waitForTimeout(150);assert.equal(await state.textContent(),initial,'Aucun démarrage automatique');
  if(kind==='fraction'){await support.locator('[data-visual-denominator]').selectOption('8');await support.locator('[data-visual-range]').focus();await page.keyboard.press('Home');await page.keyboard.press('ArrowRight');assert((await state.textContent()).includes('1/8'),'Partage et coloration manuels au clavier');}
  else if(kind==='numberline'){await support.locator('[data-visual-range]').focus();await page.keyboard.press('Home');await page.keyboard.press('ArrowRight');assert((await state.textContent()).includes('trait 1'),'Déplacement du point au clavier');}
  else if(kind==='circuit'){await support.locator('[data-visual-action="toggle"]').tap();assert((await state.textContent()).includes('allumée'),'Fermeture du circuit au toucher');}
  else {await support.locator('[data-visual-action="next"]').focus();await page.keyboard.press('Enter');assert.notEqual(await state.textContent(),initial,'Progression manuelle au clavier');}
  await support.locator('[data-visual-action="reset"]').click();assert.equal(await state.textContent(),initial,'Retour à la situation initiale');
  await support.locator('[data-visual-action="start"]').click();await page.waitForFunction(id=>!document.querySelector('[data-support="'+id+'"] [data-visual-action="pause"]').disabled,id);await support.locator('[data-visual-action="pause"]').click();await page.waitForTimeout(1300);assert.equal(await state.textContent(),initial,'Pause avant le premier changement');
  await support.locator('[data-visual-action="start"]').click();await page.waitForTimeout(1350);assert.notEqual(await state.textContent(),initial,'Une étape de démonstration est réellement passée');if(await support.locator('[data-visual-action="pause"]').isEnabled())await support.locator('[data-visual-action="pause"]').click();const paused=await state.textContent();await page.waitForTimeout(1300);assert.equal(await state.textContent(),paused,'Pause ou fin de démonstration effective');
  await support.locator('.support-static summary').click();assert(await support.locator('.support-static').evaluate(e=>e.open));assert((await support.locator('.support-static').textContent()).includes(config.description));assert(await support.locator('.support-static svg').count()>0,'Version statique illustrée');
  await support.locator('[data-visual-action="reset"]').click();assert.equal(await state.textContent(),initial);assert.equal(JSON.stringify((await active()).completed),before,'La manipulation ne valide aucun exercice');
 });
 await test('Réduction des mouvements : démonstrations désactivées mais commandes manuelles actives',async()=>{
  const kinds=['fraction','numberline','symmetry','circuit','timeline'];await page.emulateMedia({reducedMotion:'reduce'});
  for(const kind of kinds){const [id]=Object.entries(data.sandbox.window.CM2_SUPPORTS).find(([,v])=>v.kind===kind);const support=await preview(id);assert(await support.locator('[data-visual-action="start"]').isDisabled(),kind);assert((await support.locator('.support-motion-note').textContent()).match(/désactivées/));assert(await support.locator('.support-static summary').isVisible());if(kind==='circuit'){await support.locator('[data-visual-action="toggle"]').click();assert((await support.locator('[data-visual-state]').textContent()).includes('allumée'));}}
  await page.emulateMedia({reducedMotion:'no-preference'});await page.evaluate(()=>document.body.classList.add('reduce-motion'));const [id]=Object.entries(data.sandbox.window.CM2_SUPPORTS).find(([,v])=>v.kind==='fraction');const support=await preview(id);assert(await support.locator('[data-visual-action="start"]').isDisabled());await page.evaluate(()=>document.body.classList.remove('reduce-motion'));
 });
 await test('La navigation arrête les démonstrations et conserve les sauvegardes',async()=>{
  const [id]=Object.entries(data.sandbox.window.CM2_SUPPORTS).find(([,v])=>v.kind==='fraction');const support=await preview(id),state=await support.locator('[data-visual-state]').elementHandle();await support.locator('[data-visual-action="start"]').click();await page.evaluate(()=>CM2.go({page:'dashboard'}));const stopped=await state.textContent();await page.waitForTimeout(1350);assert.equal(await state.textContent(),stopped,'Aucun minuteur actif après navigation');
  const saved=await page.evaluate(()=>JSON.stringify(CM2.getState()));loaded=false;await page.reload();loaded=true;assert.equal(await page.evaluate(()=>JSON.stringify(CM2.getState())),saved,'Même état enregistré après rechargement');
 });
 await test('Supports et lecteurs : aucun débordement aux largeurs360,390et1440',async()=>{
  for(const width of [360,390,1440]){await page.setViewportSize({width,height:1000});for(const [id]of Object.entries(data.sandbox.window.CM2_SUPPORTS)){await preview(id);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Débordement du support '+id+' à'+width);}}
  await page.evaluate(()=>CM2_VISUALS.stop());await page.locator('#media-support-preview').evaluate(e=>e.remove());
 });
 await test('Aucun service distant, requête tardive ou erreur JavaScript pendant les médias',async()=>{assert.deepEqual(external,[]);assert.deepEqual(lateNetwork,[]);assert.deepEqual(errors,[])});
 await test('Les médias testés correspondent aux fichiers gelés',async()=>assert.deepEqual(hashes(),testedAssets));
 fs.writeFileSync(path.join(__dirname,'media-browser-results.json'),JSON.stringify({date:new Date().toISOString(),browser:await browser.version(),testedAssets,results,external,lateNetwork,errors,scope:'Interactions réellement exécutées ; prononciation et lecture sur haut-parleurs physiques non certifiées.'},null,2)+'\n');
 await browser.close();if(results.some(r=>r.status==='échec'))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
