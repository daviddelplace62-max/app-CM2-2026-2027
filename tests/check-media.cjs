/* Vérification des ressources livrées. Elle ne remplace pas une écoute humaine. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto'),cp=require('node:child_process'),vm=require('node:vm');
const {load,root}=require('./media-fixtures.cjs');
const {sandbox,steps,spoken,scripts}=load();
const voices=sandbox.window.CM2_VOICES;
assert(Array.isArray(voices)&&voices.length,'Voix préenregistrées absentes');
assert.equal(voices.length,spoken.length,'Une piste pour chaque champ anglais à écouter');
const seen=new Set(),tracks=[];
for(const entry of spoken){
 const matches=voices.filter(v=>v.text===entry.text);assert.equal(matches.length,1,'Phrase sans piste unique : '+entry.id);
 const voice=matches[0];assert(typeof voice.id==='string'&&!seen.has(voice.id),'Identifiant de voix absent ou dupliqué');seen.add(voice.id);
 assert(typeof voice.spokenText==='string'&&voice.spokenText.trim(),'Texte de production absent '+voice.id);
 assert(typeof voice.file==='string'&&voice.file.startsWith('ressources/voix/')&&voice.file.endsWith('.mp3'),'Chemin voix non local '+voice.id);
 const file=path.resolve(root,voice.file);assert(file.startsWith(root+path.sep)&&fs.existsSync(file),'MP3 manquant '+voice.id);
 const data=voice.data;assert(typeof data==='string'&&/^data:audio\/(?:mpeg|mp3);base64,/.test(data),'Audio vocal non embarqué '+voice.id);
 const bytes=fs.readFileSync(file),embedded=Buffer.from(data.slice(data.indexOf(',')+1),'base64');assert(bytes.equals(embedded),'MP3 et données embarquées divergent '+voice.id);
 const probe=cp.spawnSync('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',file],{encoding:'utf8'});assert.equal(probe.status,0,'MP3 illisible '+voice.id+probe.stderr);const meta=JSON.parse(probe.stdout),duration=Number(meta.format?.duration),stream=meta.streams?.[0];assert(duration>0.4&&duration<120,'Durée vocale improbable '+voice.id);assert.equal(stream.codec_name,'mp3');assert.equal(stream.channels,1,'Voix attendue mono pour maîtriser le poids');assert(Number(stream.sample_rate)>=16000,'Fréquence insuffisante '+voice.id);
 const volume=cp.spawnSync('ffmpeg',['-hide_banner','-nostats','-i',file,'-af','volumedetect','-f','null','-'],{encoding:'utf8'});assert.equal(volume.status,0,'Décodage volume échoué '+voice.id);const mean=Number(volume.stderr.match(/mean_volume:\s*([+-]?[\d.]+) dB/)?.[1]),peak=Number(volume.stderr.match(/max_volume:\s*([+-]?[\d.]+) dB/)?.[1]);assert(Number.isFinite(mean)&&mean>-50&&Number.isFinite(peak)&&peak<=0,'Piste muette ou mesure invalide '+voice.id);
 const loudness=cp.spawnSync('ffmpeg',['-hide_banner','-nostats','-i',file,'-af','loudnorm=I=-18:TP=-2:LRA=7:print_format=json','-f','null','-'],{encoding:'utf8'});assert.equal(loudness.status,0,'Mesure LUFS échouée '+voice.id);const measured=JSON.parse(loudness.stderr.slice(loudness.stderr.lastIndexOf('{'),loudness.stderr.lastIndexOf('}')+1));const lufs=Number(measured.input_i),truePeak=Number(measured.input_tp);assert(Number.isFinite(lufs)&&Math.abs(lufs+18)<=2,'Volume intégré hors cible homogène '+voice.id+' : '+lufs);assert(Number.isFinite(truePeak)&&truePeak<=-0.5,'Crête vocale excessive '+voice.id+' : '+truePeak);
 tracks.push({id:voice.id,stepId:entry.stepId,file:voice.file,bytes:bytes.length,duration,sampleRate:Number(stream.sample_rate),meanDb:mean,peakDb:peak,lufs,truePeak,sha256:crypto.createHash('sha256').update(bytes).digest('hex')});
}
/* Compare les identifiants et corrigés à la livraison antérieure : les médias
   ne doivent pas transformer les anciennes validations en autres exercices. */
const baselineIndex=cp.execFileSync('git',['show','7eab643:index.html'],{cwd:root,encoding:'utf8'}),baseline={window:{CM2_SUBJECTS:[]},console};
for(const m of baselineIndex.matchAll(/<script\b[^>]*src=["']([^"']+)["'][^>]*><\/script>/g))if(m[1]!=='app.js')vm.runInNewContext(cp.execFileSync('git',['show','7eab643:'+m[1]],{cwd:root,encoding:'utf8',maxBuffer:20e6}),baseline,{filename:m[1]});
const signature=subjects=>JSON.parse(JSON.stringify(subjects.map(s=>({id:s.id,chapters:s.chapters.map(c=>({id:c.id,steps:c.steps.map(t=>({id:t.id,required:t.required,exercises:t.exercises.map(e=>({id:e.id,type:e.type,answer:e.answer,criteria:e.criteria}))}))}))}))));
assert.deepEqual(signature(sandbox.window.CM2_CONTENT),signature(baseline.window.CM2_CONTENT),'Identifiants/corrigés modifiés pendant enrichissement');
const supports=sandbox.window.CM2_SUPPORTS;
assert(supports&&typeof supports==='object','Inventaire de supports absent');
const stepIds=new Set(steps.map(t=>t.id));
const supportEntries=Array.isArray(supports)?supports.map(s=>[s.stepId,s]):Object.entries(supports);
assert(supportEntries.length>=20,'Supports trop peu nombreux pour les domaines prioritaires');
for(const [id,value]of supportEntries){assert(stepIds.has(id),'Support vers étape inexistante '+id);assert(value&&typeof value==='object','Support vide '+id);assert(typeof value.title==='string'&&value.title.trim(),'Titre du support absent '+id);assert(typeof value.description==='string'&&value.description.trim(),'Description alternative absente '+id);}
for(const [id,value]of supportEntries){
 if(value.kind==='fraction')assert(Number.isInteger(value.denominator)&&value.denominator>0&&Number.isInteger(value.numerator)&&value.numerator>=0&&value.numerator<=value.denominator,'Partage invalide '+id);
 if(value.kind==='numberline')assert(Number.isFinite(value.min)&&Number.isFinite(value.max)&&value.max>value.min&&Number.isInteger(value.divisions)&&value.divisions>0&&Number.isInteger(value.index)&&value.index>=0&&value.index<=value.divisions,'Graduation invalide '+id);
 if(value.kind==='timeline')assert(Array.isArray(value.events)&&value.events.length>=2&&value.events.every((e,i)=>Number.isFinite(e[0])&&typeof e[1]==='string'&&e[1].trim()&&(i===0||e[0]>=value.events[i-1][0])),'Frise sans repères chronologiques ordonnés '+id);
 if(value.kind==='network')assert(value.edges.every(e=>e.length===2&&e.every(n=>Number.isInteger(n)&&n>=0&&n<value.nodes.length)),'Réseau avec relation orpheline '+id);
 if(value.kind==='fractionCompare'&&value.sum)assert(Math.abs(value.a[0]/value.a[1]+value.b[0]/value.b[1]-value.sum[0]/value.sum[1])<1e-9,'Somme illustrée incohérente '+id);
}
const equivalent=supports['mathematiques-fractions-equivalentes'];assert(equivalent&&equivalent.a[0]===3&&equivalent.a[1]===4&&equivalent.b[0]===9&&equivalent.b[1]===12&&equivalent.a[0]*equivalent.b[1]===equivalent.b[0]*equivalent.a[1],'Illustration3/4=9/12 incohérente');
assert(Math.max(...tracks.map(t=>t.lufs))-Math.min(...tracks.map(t=>t.lufs))<=2,'Les niveaux intégrés des voix doivent rester dans une plage de2LU');
const result={date:new Date().toISOString(),phrases:spoken.length,voiceTracks:tracks.length,totalBytes:tracks.reduce((n,t)=>n+t.bytes,0),totalSeconds:tracks.reduce((n,t)=>n+t.duration,0),meanRangeDb:Math.max(...tracks.map(t=>t.meanDb))-Math.min(...tracks.map(t=>t.meanDb)),loudnessRangeLU:Math.max(...tracks.map(t=>t.lufs))-Math.min(...tracks.map(t=>t.lufs)),supportSteps:supportEntries.length,tracks,baseline:'7eab643',idsAndCorrectionsPreserved:true,scope:'Formats, intégrité, présence et mesures techniques. La prononciation, l’intelligibilité et les graphismes doivent être relus/écoutés séparément.'};
fs.writeFileSync(path.join(__dirname,'media-content-results.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({phrases:result.phrases,voiceTracks:result.voiceTracks,supportSteps:result.supportSteps,totalBytes:result.totalBytes,meanRangeDb:result.meanRangeDb,idsAndCorrectionsPreserved:true},null,2));
