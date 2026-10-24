/* Illustrations et manipulations originales, sans ressources externes ni progression ajoutée. */
(function () {
  'use strict';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const interactive = new Set(['fraction','numberline','symmetry','circuit','timeline']);
  const instances = new Set();
  let sequence = 0;
  const fmt = n => Number(n.toFixed(4)).toLocaleString('fr-FR', {maximumFractionDigits:4});
  const text = (x,y,value,extra='') => `<text x="${x}" y="${y}" ${extra}>${esc(value)}</text>`;
  const line = (x1,y1,x2,y2,extra='') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${extra}/>`;
  const rect = (x,y,w,h,extra='') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" ${extra}/>`;
  function wrapped(x,y,value,width,fontSize=15) {
    const max=Math.max(8,Math.floor(width/(fontSize*.57))),rows=[];
    let row='';
    for(const word of String(value).split(/\s+/)){if(row&&row.length+word.length+1>max){rows.push(row);row=word;}else row+=(row?' ':'')+word;}
    if(row)rows.push(row);
    return `<text x="${x}" y="${y}" text-anchor="middle" font-size="${fontSize}">${rows.map((part,i)=>`<tspan x="${x}" dy="${i?fontSize+4:0}">${esc(part)}</tspan>`).join('')}</text>`;
  }

  const circle = (x,y,r,extra='') => `<circle cx="${x}" cy="${y}" r="${r}" ${extra}/>`;
  const colors = ['#7542a4','#136d82','#ad4c22','#276d40'];
  function svg(body, config, height=280) {
    const id='cm2-svg-'+(++sequence);
    return `<svg class="support-svg" viewBox="0 0 600 ${height}" role="img" aria-labelledby="${id}-title ${id}-description"><title id="${id}-title">${esc(config.title)}</title><desc id="${id}-description">${esc(config.description)}</desc>${body}</svg>`;
  }
  function fractionBand(n,d,y,label) {
    let html=text(40,y-15,label,'class="support-key"');
    for(let i=0;i<d;i++) html+=rect(40+i*520/d,y,520/d,52,`fill="${i<n?'#b9dfe8':'#fff'}" stroke="#263c49" stroke-width="2"`)+(i<n?text(40+(i+.5)*520/d,y+35,'✓','text-anchor="middle"'):'');
    return html;
  }
  function initial(config) {
    if(config.kind==='fraction')return{n:config.numerator,d:config.denominator};
    if(config.kind==='numberline')return{index:config.index};
    if(config.kind==='symmetry')return{visible:0};
    if(config.kind==='circuit')return{closed:false};
    if(config.kind==='timeline')return{index:0};
    return{};
  }
  function icon(kind) {
    const stroke='stroke="#263c49" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"';
    if(kind==='sun')return circle(60,48,21,'fill="#f7d46e" '+stroke)+Array.from({length:8},(_,i)=>{const a=i*Math.PI/4;return line(60+30*Math.cos(a),48+30*Math.sin(a),60+42*Math.cos(a),48+42*Math.sin(a),stroke)}).join('');
    if(kind==='rain'||kind==='snow')return `<path d="M25 51 C9 34 29 14 44 25 C54 5 86 12 84 32 C111 26 116 59 91 60 H27" fill="#dce9ef" ${stroke}/>`+[34,58,82].map(x=>kind==='rain'?line(x,73,x-7,91,stroke):text(x,94,'❄','text-anchor="middle"')).join('');
    if(kind==='wind')return `<path d="M10 34 H83 Q110 34 99 16 Q90 7 81 18 M5 56 H102 M18 77 H72 Q98 78 89 94" fill="none" ${stroke}/>`;
    if(kind==='book')return `<path d="M60 29 Q32 12 8 25 V88 Q33 76 60 91 Q88 76 112 88 V25 Q87 12 60 29Z" fill="#ebd8f4" ${stroke}/>`+line(60,29,60,91,stroke);
    if(kind==='pencil')return `<path d="M17 83 L77 23 L94 40 L34 100 L11 106 Z" fill="#f7d46e" ${stroke}/>`+line(77,23,85,15,stroke);
    if(kind==='ruler')return rect(8,34,106,38,'rx="3" fill="#f7d46e" '+stroke)+[20,35,50,65,80,95].map(x=>line(x,34,x,49,stroke)).join('');
    if(kind==='chair')return `<path d="M29 12 V65 H91 V12 M29 45 H91 M29 65 V103 M91 65 V103 M45 66 V94 M76 66 V94" fill="none" ${stroke}/>`;
    if(kind==='cat')return `<path d="M24 59 L22 15 L46 34 Q62 27 76 34 L97 15 L99 59 Q105 94 61 99 Q18 94 24 59Z" fill="#343438" ${stroke}/>`+circle(45,55,4,'fill="#fff"')+circle(78,55,4,'fill="#fff"')+`<path d="M57 68 L66 68 L61 75Z" fill="#eec7bf"/>`;
    if(kind==='dog')return `<path d="M30 35 Q9 20 9 60 Q14 87 30 69 V82 Q60 112 92 82 V67 Q109 87 113 59 Q116 21 91 35 Q60 10 30 35Z" fill="#ac7149" ${stroke}/>`+circle(45,55,4,'fill="#263c49"')+circle(78,55,4,'fill="#263c49"')+circle(61,77,8,'fill="#263c49"');
    return'';
  }
  function drawing(config,state) {
    let html='';
    switch(config.kind) {
      case 'fraction': return svg(fractionBand(state.n,state.d,80,`${state.n} / ${state.d} de l’unité`)+text(300,205,`1 unité = ${state.d} parts égales`,'text-anchor="middle" class="support-key"'),config);
      case 'fractionCompare':
        html=fractionBand(...config.a,55,`${config.a[0]} / ${config.a[1]}`)+fractionBand(...config.b,165,`${config.b[0]} / ${config.b[1]}`);
        if(config.sum)html+=fractionBand(...config.sum,275,`Somme : ${config.sum[0]} / ${config.sum[1]}`);
        return svg(html,config,config.sum?365:270);
      case 'numberline': {
        html=line(40,125,560,125,'stroke="#263c49" stroke-width="4"');
        const step=(config.max-config.min)/config.divisions;
        for(let i=0;i<=config.divisions;i++)html+=line(40+i*520/config.divisions,110,40+i*520/config.divisions,140,'stroke="#263c49" stroke-width="2"')+((i===0||i===config.divisions||config.divisions<=5)?text(40+i*520/config.divisions,175,fmt(config.min+i*step),'text-anchor="middle" class="support-key"'):'');
        const x=40+state.index*520/config.divisions;
        html+=`<path d="M${x-12} 76 H${x+12} L${x} 98Z" fill="#7542a4"/>`+text(x,58,'P','text-anchor="middle" class="support-key"')+text(300,230,`P = ${fmt(config.min+state.index*step)}`,'text-anchor="middle" class="support-key"');
        return svg(html,config);
      }
      case 'symmetry': {
        for(let x=0;x<=12;x++)html+=line(60+x*40,30,60+x*40,350,'stroke="#cad7df"');
        for(let y=0;y<=8;y++)html+=line(60,30+y*40,540,30+y*40,'stroke="#cad7df"');
        html+=line(300,15,300,365,'stroke="#263c49" stroke-width="4" stroke-dasharray="9 6"')+text(307,385,'Axe');
        const pts=[[2,2],[4,2],[3,5]];
        html+=`<polygon points="${pts.map(p=>`${60+p[0]*40},${30+p[1]*40}`).join(' ')}" fill="#d9c7ed" stroke="#7542a4" stroke-width="3"/>`;
        pts.forEach((p,i)=>{html+=circle(60+p[0]*40,30+p[1]*40,6,'fill="#7542a4"')+text(60+p[0]*40-20,30+p[1]*40-14,['A','B','C'][i]);if(i<state.visible)html+=line(60+p[0]*40,30+p[1]*40,60+(12-p[0])*40,30+p[1]*40,'stroke="#567680" stroke-dasharray="5 5"')+circle(60+(12-p[0])*40,30+p[1]*40,7,'fill="#136d82"')+text(60+(12-p[0])*40+10,30+p[1]*40-12,['A′','B′','C′'][i]);});
        if(state.visible===3)html+=`<polygon points="${pts.map(p=>`${60+(12-p[0])*40},${30+p[1]*40}`).join(' ')}" fill="#c2e5eb" stroke="#136d82" stroke-width="3"/>`;
        return svg(html,config,405);
      }
      case 'circuit':
        html=`<path d="M90 105 V45 H265 M335 45 H510 V95 M510 155 V205 H90 V155" stroke="#263c49" stroke-width="5" fill="none"/>`+line(65,119,115,119,'stroke="#263c49" stroke-width="6"')+line(75,143,105,143,'stroke="#263c49" stroke-width="4"')+line(90,105,90,119,'stroke="#263c49" stroke-width="4"')+line(90,143,90,155,'stroke="#263c49" stroke-width="4"');
        html+=line(265,45,state.closed?335:328,state.closed?45:14,'stroke="#263c49" stroke-width="5"')+circle(265,45,5,'fill="#263c49"')+circle(335,45,5,'fill="#263c49"');
        html+=circle(510,125,30,`fill="${state.closed?'#ffe77d':'#fff'}" stroke="#263c49" stroke-width="4"`)+line(490,105,530,145,'stroke="#263c49" stroke-width="3"')+line(490,145,530,105,'stroke="#263c49" stroke-width="3"')+text(43,190,'Pile')+text(300,88,state.closed?'Fermé':'Ouvert','text-anchor="middle"')+text(450,245,state.closed?'Lampe allumée':'Lampe éteinte','text-anchor="middle"');
        return svg(html,config);
      case 'timeline': {
        const dates=config.events.map(e=>e[0]),min=Math.min(...dates),max=Math.max(...dates),span=Math.max(1,max-min);
        html=line(45,130,555,130,'stroke="#263c49" stroke-width="4"')+text(45,185,min,'text-anchor="middle" class="support-key"')+text(555,185,max,'text-anchor="middle" class="support-key"');
        config.events.forEach((event,i)=>{const x=45+(event[0]-min)*510/span;html+=line(x,115,x,145,'stroke="#263c49" stroke-width="2"')+circle(x,130,i===state.index?12:6,`fill="${i===state.index?'#7542a4':'#263c49'}"`)+text(x,i%2?85:55,i+1,'text-anchor="middle"');});
        return svg(html,config,220);
      }
      case 'placevalue': {
        const width=520/config.columns.length;
        config.columns.forEach((column,i)=>{const x=40+i*width;html+=rect(x,35,width,215,`fill="${i%2?'#e6f3f3':'#f1e9f7'}" stroke="#627a84"`)+wrapped(x+width/2,72,column,width-14,17)+text(x+width/2,125,config.digits[i],'text-anchor="middle" font-size="25"')+wrapped(x+width/2,165,config.values[i],width-16,15);});
        return svg(html,config,275);
      }
      case 'area': {
        const size=Math.min(38,480/config.cols,220/config.rows),x0=(600-config.cols*size)/2;
        for(let y=0;y<config.rows;y++)for(let x=0;x<config.cols;x++)html+=rect(x0+x*size,25+y*size,size,size,`fill="${x<config.split?'#d7c5ec':'#b9dfe8'}" stroke="#526976"`);
        html+=text(300,265,`${config.rows} × ${config.cols} = ${config.rows*config.cols} carreaux`,'text-anchor="middle"');return svg(html,config,295);
      }
      case 'rectangle': return svg(rect(90,40,420,180,'fill="#e6f3f3" stroke="#7542a4" stroke-width="7"')+text(300,28,`${config.width} cm`,'text-anchor="middle"')+text(55,135,`${config.height} cm`,'text-anchor="middle"')+text(300,145,'Aire : intérieur','text-anchor="middle"')+text(300,265,'Périmètre : contour','text-anchor="middle"'),config,300);
      case 'conversion': return svg(config.units.map((unit,i)=>rect(30+i*145,60,105,90,'rx="10" fill="#e6f3f3" stroke="#526976"')+text(82+i*145,115,unit,'text-anchor="middle"')+(i<config.units.length-1?text(155+i*145,110,`×${config.factor} →`,'text-anchor="middle" font-size="15"'):'')).join('')+text(300,215,config.example,'text-anchor="middle"')+text(300,260,'Sens inverse : ÷ 10 à chaque passage','text-anchor="middle" font-size="18"'),config,290);
      case 'angles': return svg([45,90,120].map((angle,i)=>{const cx=90+i*200,cy=180,x=cx+75*Math.cos(angle*Math.PI/180),y=cy-75*Math.sin(angle*Math.PI/180);return line(cx,cy,cx+85,cy,'stroke="#263c49" stroke-width="4"')+line(cx,cy,x,y,'stroke="#7542a4" stroke-width="4"')+text(cx+20,230,[`Aigu : ${angle}°`,`Droit : ${angle}°`,`Obtus : ${angle}°`][i],'text-anchor="middle" font-size="19"');}).join(''),config,270);
      case 'triangles': return svg(`<path d="M30 175 L165 175 L97.5 58.1Z M230 175 L365 175 L297.5 65Z M430 175 H565 V65Z" fill="#e6f3f3" stroke="#263c49" stroke-width="3"/>`+line(87,168,87,182,'stroke="#7542a4" stroke-width="3"')+line(58,110,70,117,'stroke="#7542a4" stroke-width="3"')+line(126,117,138,110,'stroke="#7542a4" stroke-width="3"')+line(257,111,269,118,'stroke="#7542a4" stroke-width="3"')+line(326,118,338,111,'stroke="#7542a4" stroke-width="3"')+`<path d="M550 175 V160 H565" fill="none" stroke="#7542a4" stroke-width="3"/>`+text(98,230,'Équilatéral','text-anchor="middle" font-size="20"')+text(298,230,'Isocèle','text-anchor="middle" font-size="20"')+text(498,230,'Rectangle','text-anchor="middle" font-size="20"'),config);
      case 'circle': return svg(circle(290,130,95,'fill="#e6f3f3" stroke="#263c49" stroke-width="4"')+line(195,130,385,130,'stroke="#136d82" stroke-width="4"')+line(290,130,290,35,'stroke="#7542a4" stroke-width="4"')+circle(290,130,5,'fill="#263c49"')+text(300,153,'O')+text(310,83,'Rayon','font-size="19"')+text(290,113,'Diamètre','text-anchor="middle" font-size="19"')+text(290,262,'Disque : le bord et l’intérieur','text-anchor="middle" font-size="19"'),config,290);
      case 'lines': return svg(line(45,85,245,85,'stroke="#7542a4" stroke-width="4"')+line(45,165,245,165,'stroke="#7542a4" stroke-width="4"')+line(345,125,555,125,'stroke="#136d82" stroke-width="4"')+line(445,30,445,220,'stroke="#136d82" stroke-width="4"')+`<path d="M445 105 H465 V125" fill="none" stroke="#263c49" stroke-width="3"/>`+text(145,260,'Parallèles','text-anchor="middle"')+text(445,260,'Perpendiculaires','text-anchor="middle"'),config,290);
      case 'cube': return svg(`<path d="M180 100 H350 V250 H180Z M180 100 L260 35 H430 V185 L350 250 M350 100 L430 35" fill="#e2eff2" stroke="#263c49" stroke-width="4"/><path d="M180 250 L260 185 H430 M260 185 V35" fill="none" stroke="#627a84" stroke-width="3" stroke-dasharray="7 6"/>`+text(300,290,'6 faces · 12 arêtes · 8 sommets','text-anchor="middle"'),config,320);
      case 'net': return svg([[0,1],[1,1],[2,1],[3,1],[1,0],[1,2]].map((p,i)=>rect(100+p[0]*100,15+p[1]*100,100,100,`fill="${i%2?'#e2eff2':'#ebd8f4'}" stroke="#263c49" stroke-width="2"`)+text(150+p[0]*100,75+p[1]*100,i+1,'text-anchor="middle"')).join(''),config,340);
      case 'map':
        html=rect(40,20,520,270,'fill="#edf5ee" stroke="#8fa39b"')+`<path d="M40 110 H560 M40 200 H560 M170 20 V290 M300 20 V290 M430 20 V290" stroke="#bacbc3" stroke-width="4"/>`+text(510,50,'N ↑','font-size="18"');
        config.places.forEach((p,i)=>html+=circle(105+p[0]*130,65+p[1]*90,15,'fill="#7542a4"')+text(105+p[0]*130,72+p[1]*90,i+1,'fill="#fff" text-anchor="middle" font-size="18"'));
        return svg(html,config,320);
      case 'network': {
        const pos=[[70,145],[290,145],[515,55],[515,235]];config.edges.forEach(([a,b])=>html+=line(...pos[a],...pos[b],'stroke="#136d82" stroke-width="8"'));config.nodes.forEach((n,i)=>html+=circle(...pos[i],16,'fill="#fff" stroke="#7542a4" stroke-width="5"')+text(pos[i][0],pos[i][1]+40,n,'text-anchor="middle" font-size="16"'));return svg(html,config,310);
      }
      case 'scales': return svg(config.groups.map((g,i)=>rect(25+i*300,20,275,225,'rx="18" fill="#edf5ee" stroke="#526976"')+text(162+i*300,65,g[0],'text-anchor="middle"')+g.slice(1).map((item,j)=>rect(45+i*300,90+j*60,235,45,'rx="8" fill="#fff" stroke="#758a91"')+text(162+i*300,120+j*60,item,'text-anchor="middle" font-size="17"')).join('')).join(''),config);
      case 'states':
        ['Solide','Liquide','Gaz'].forEach((state,i)=>{html+=rect(15+i*200,50,170,170,'rx="9" fill="#f4f8fa" stroke="#627a84"')+text(100+i*200,30,state,'text-anchor="middle"');for(let j=0;j<16;j++){const x=i===2?30+(j*43)%140:35+(j%4)*24+(i===1?(j%3)*4:0),y=i===0?85+Math.floor(j/4)*24:i===1?115+Math.floor(j/4)*23:75+(j*67)%130;html+=circle(i*200+x,y,6,'fill="#136d82"')}});return svg(html,config,250);
      case 'dissolve': return svg([0,1].map(i=>rect(70+i*300,30,160,170,'rx="6" fill="#e2f2f8" stroke="#627a84"')+Array.from({length:12},(_,j)=>circle(90+i*300+(j%4)*35,65+Math.floor(j/4)*42,8,'fill="#679bad"')).join('')+Array.from({length:6},(_,j)=>rect(95+i*300+(i?(j*41)%108:(j%3)*20),i?65+(j*23)%100:172-Math.floor(j/3)*16,10,10,'fill="#7542a4"')).join('')+text(150+i*300,245,i?'Sel réparti dans l’eau':'Sel ajouté au fond','text-anchor="middle" font-size="18"')).join(''),config);
      case 'volume': return svg([30,48].map((v,i)=>{const x=80+i*300;let h=rect(x,25,130,190,'fill="#fff" stroke="#263c49" stroke-width="3"')+rect(x+2,215-v*3,126,v*3,'fill="#b9dfe8"');for(let n=0;n<=60;n+=10)h+=line(x+100,215-n*3,x+130,215-n*3,'stroke="#263c49" stroke-width="2"')+text(x+145,221-n*3,n,'font-size="15"');if(i)h+=rect(x+40,133,40,62,'rx="8" fill="#9e8ab4" stroke="#263c49"');return h+text(x+65,255,v+' mL','text-anchor="middle"')}).join(''),config,290);
      case 'solar': {
        const names=['Mercure','Vénus','Terre','Mars','Jupiter','Saturne','Uranus','Neptune'];html=circle(35,90,28,'fill="#f7d46e" stroke="#9a691b"')+text(35,35,'Soleil','text-anchor="middle" font-size="16"');names.forEach((n,i)=>{const x=100+i*65;html+=circle(x,90,[8,12,13,9,22,20,16,16][i],`fill="${['#a6a0a0','#dda25a','#4a8fa3','#c96f4d','#c5a07f','#d9bd78','#87b7c1','#6686b8'][i]}" stroke="#263c49"`)+text(x,150+(i%2)*38,i+1,'text-anchor="middle" font-size="18"')});html+=text(300,235,'1 Mercure · 2 Vénus · 3 Terre · 4 Mars','text-anchor="middle" font-size="17"')+text(300,268,'5 Jupiter · 6 Saturne · 7 Uranus · 8 Neptune','text-anchor="middle" font-size="17"');return svg(html,config,300);
      }
      case 'foodweb': {
        const arrow='cm2-food-arrow-'+(++sequence);
        return svg(`<defs><marker id="${arrow}" markerWidth="9" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L8 4 L0 8" fill="none" stroke="#263c49" stroke-width="2"/></marker></defs>`+[[150,140,280,60],[150,140,280,220],[380,60,480,60],[380,220,480,220]].map(p=>`<path d="M${p[0]} ${p[1]} L${p[2]} ${p[3]}" fill="none" stroke="#263c49" stroke-width="4" marker-end="url(#${arrow})"/>`).join('')+text(70,145,'Herbe','text-anchor="middle"')+text(330,65,'Sauterelle','text-anchor="middle" font-size="19"')+text(330,225,'Lapin','text-anchor="middle"')+text(535,65,'Grenouille','text-anchor="middle" font-size="18"')+text(535,225,'Renard','text-anchor="middle"')+text(300,280,'→ signifie « est mangé par »','text-anchor="middle"'),config,310);
      }
      case 'lifecycle': return svg(['Graine','Plantule','Plante fleurie','Nouvelles graines'].map((v,i)=>rect(20+i*150,65,130,100,'rx="18" fill="#e5f0dd" stroke="#526976"')+text(85+i*150,110,v,'text-anchor="middle" font-size="15"')+(i<3?text(162+i*150,127,'→','text-anchor="middle"'):'')).join('')+text(300,230,'Les nouvelles graines commencent une nouvelle génération.','text-anchor="middle" font-size="17"'),config);
      case 'shadow': return svg(`<path d="M55 130 L525 31.0526 M55 130 L525 228.9474" stroke="#c59836" stroke-width="3" fill="none"/><path d="M245 90 L525 31.0526 V228.9474 L245 170Z" fill="#d1d5dd" opacity=".85"/>`+circle(55,130,22,'fill="#ffe58a" stroke="#9a691b"')+rect(245,90,20,80,'fill="#4e566c"')+line(525,15,525,245,'stroke="#263c49" stroke-width="5"')+text(55,190,'Source','text-anchor="middle" font-size="18"')+text(255,215,'Objet opaque','text-anchor="middle" font-size="17"')+text(525,275,'Écran','text-anchor="middle" font-size="18"'),config,300);
      case 'energy': return svg(['Pile','Transfert électrique','Lampe'].map((v,i)=>rect(20+i*200,70,165,90,'rx="12" fill="#e4f0f1" stroke="#526976"')+text(102+i*200,120,v,'text-anchor="middle" font-size="17"')+(i<2?text(202+i*200,125,'→','text-anchor="middle"'):'')).join('')+text(100,215,'Énergie chimique','text-anchor="middle" font-size="17"')+text(500,215,'Lumière + chaleur','text-anchor="middle" font-size="17"'),config);
      case 'vocabulary': return `<div class="support-word-grid">${config.words.map(([kind,en,fr])=>`<figure><svg viewBox="0 0 120 120" role="img" aria-label="${esc(fr)}">${kind==='cat'?`<g transform="translate(24 40) scale(.6)">${icon(kind)}</g>`:icon(kind)}</svg><figcaption><strong lang="en">${esc(en)}</strong><span>${esc(fr)}</span></figcaption></figure>`).join('')}</div>`;
      case 'positions': return `<div class="support-word-grid">${['On the table','Under the table','Next to the table'].map((v,i)=>`<figure><svg viewBox="0 0 180 150" role="img" aria-label="${esc(['Balle sur la table','Balle sous la table','Balle à côté de la table'][i])}"><path d="M35 65 H140 M45 65 V135 M130 65 V135" stroke="#263c49" stroke-width="6" fill="none"/>${circle(i===2?160:85,i===0?46:112,15,'fill="#7542a4"')}</svg><figcaption lang="en">${v}</figcaption></figure>`).join('')}</div>`;
      case 'coins': return svg(`<g transform="translate(70 25) scale(1.5)">${icon('book')}</g>`+rect(335,70,170,110,'rx="15" fill="#fff1be" stroke="#263c49" stroke-width="3"')+text(420,140,'£5','text-anchor="middle" font-size="42"')+text(300,260,'Five pounds — cinq livres sterling','text-anchor="middle"'),config,290);
      case 'directions': return svg(`<path d="M300 250 V70 M50 110 H550" stroke="#d7dfe1" stroke-width="45" fill="none"/><path d="M300 240 V110 H90" stroke="#136d82" stroke-width="8" fill="none"/><path d="M110 95 L90 110 L110 125" stroke="#136d82" stroke-width="6" fill="none"/>`+text(300,285,'Start ↑','text-anchor="middle"')+text(90,55,'Park','text-anchor="middle"')+text(440,195,'Straight on, then left.','text-anchor="middle" font-size="17"'),config,310);
      default:return'';
    }
  }
  function valueText(config,state) {
    if(config.kind==='fraction')return`${state.n} part${state.n>1?'s':''} colorée${state.n>1?'s':''} sur ${state.d} : ${state.n}/${state.d} de l’unité.`;
    if(config.kind==='numberline'){const value=config.min+state.index*(config.max-config.min)/config.divisions;return`P est au trait ${state.index} après le début : ${fmt(value)}.`;}
    if(config.kind==='symmetry')return`${state.visible} point${state.visible>1?'s':''} image${state.visible>1?'s':''} construit${state.visible>1?'s':''} sur 3. Axe vertical : les abscisses 2, 4 et 3 deviennent 10, 8 et 9 sur cette grille de 12 colonnes.`;
    if(config.kind==='circuit')return state.closed?'Le trajet est fermé : la lampe du modèle est allumée.':'Le trajet est ouvert : la lampe du modèle est éteinte.';
    if(config.kind==='timeline')return`${config.events[state.index][0]} : ${config.events[state.index][1]}.`;
    return'';
  }
  function controls(config,state) {
    let manual='';
    if(config.kind==='fraction')manual=`<label>Nombre de parts égales<select data-visual-denominator>${Array.from({length:12},(_,i)=>`<option value="${i+1}" ${state.d===i+1?'selected':''}>${i+1}</option>`).join('')}</select></label><label>Parts colorées<input type="range" data-visual-range min="0" max="${state.d}" value="${state.n}" aria-label="Nombre de parts colorées"></label>`;
    if(config.kind==='numberline')manual=`<label>Position du point P<input type="range" data-visual-range min="0" max="${config.divisions}" value="${state.index}" aria-label="Position du point P"></label>`;
    if(config.kind==='symmetry')manual='<button type="button" data-visual-action="next">Construire le point suivant</button>';
    if(config.kind==='circuit')manual='<button type="button" data-visual-action="toggle">Ouvrir / fermer l’interrupteur</button>';
    if(config.kind==='timeline')manual='<button type="button" data-visual-action="previous">← Repère précédent</button><button type="button" data-visual-action="next">Repère suivant →</button>';
    return `<div class="support-manual">${manual}</div><div class="support-playback"><button type="button" data-visual-action="start">Démarrer la démonstration</button><button type="button" data-visual-action="pause" disabled>Pause</button><button type="button" data-visual-action="reset">Recommencer</button></div><p class="support-motion-note"></p>`;
  }
  function finalState(config) {
    const state=initial(config);
    if(config.kind==='symmetry')state.visible=3;
    if(config.kind==='circuit')state.closed=true;
    if(config.kind==='timeline')state.index=config.events.length-1;
    return state;
  }
  function render(item) {
    const config=window.CM2_SUPPORTS?.[item.id];if(!config)return'';
    const state=initial(config),isInteractive=interactive.has(config.kind);
    let supplement='';
    if(config.kind==='timeline')supplement=`<ol class="support-event-list">${config.events.map(([year,label])=>`<li><strong>${year}</strong> — ${esc(label)}</li>`).join('')}</ol>`;
    if(config.kind==='map')supplement=`<ol>${config.places.map(p=>`<li>${esc(p[2])}</li>`).join('')}</ol>`;
    return `<section class="pedagogical-support" data-support="${esc(item.id)}" data-support-kind="${esc(config.kind)}" aria-label="${esc(config.title)}"><h3>${esc(config.title)}</h3><p class="support-description">${esc(config.description)}</p><div data-support-drawing>${drawing(config,state)}</div>${isInteractive?`<p class="support-value" data-visual-state role="status" aria-live="polite">${esc(valueText(config,state))}</p>${controls(config,state)}`:''}${supplement}<details class="support-static"><summary>Voir la version statique et son explication</summary>${isInteractive?drawing(config,finalState(config)):''}<p>${esc(config.description)}</p>${isInteractive?`<p>${esc(valueText(config,finalState(config)))}</p>`:''}</details><p class="support-purpose">Observe et manipule pour comprendre. Ces essais ne modifient ni tes points ni la validation des exercices.</p></section>`;
  }
  function stop() {for(const instance of instances)instance.dispose();instances.clear();}
  function bind(root) {
    root.querySelectorAll('[data-support]').forEach(node=>{
      const config=window.CM2_SUPPORTS[node.dataset.support];if(!config||!interactive.has(config.kind))return;
      let state=initial(config),timer=null;
      const media=window.matchMedia('(prefers-reduced-motion: reduce)');
      const reduce=()=>media.matches||document.body.classList.contains('reduce-motion');
      const start=node.querySelector('[data-visual-action="start"]'),pause=node.querySelector('[data-visual-action="pause"]'),note=node.querySelector('.support-motion-note');
      function repaint(){node.querySelector('[data-support-drawing]').innerHTML=drawing(config,state);node.querySelector('[data-visual-state]').textContent=valueText(config,state);const range=node.querySelector('[data-visual-range]');if(range){range.value=config.kind==='fraction'?state.n:state.index;if(config.kind==='fraction')range.max=state.d;}const select=node.querySelector('[data-visual-denominator]');if(select)select.value=state.d;const nextButton=node.querySelector('[data-visual-action=next]'),previousButton=node.querySelector('[data-visual-action=previous]');if(config.kind==='symmetry'&&nextButton)nextButton.disabled=state.visible===3;if(config.kind==='timeline'){nextButton.disabled=state.index===config.events.length-1;previousButton.disabled=state.index===0;}}
      function halt(){if(timer!==null){clearInterval(timer);timer=null;}pause.disabled=true;start.disabled=reduce();}
      function preferences(){if(reduce())halt();start.disabled=reduce()||timer!==null;note.textContent=reduce()?'Les animations sont désactivées par ton réglage. Les commandes manuelles et la version statique fonctionnent toujours.':'La démonstration ne démarre que si tu le demandes. Tu peux la mettre en pause à tout moment.';}
      function next(delta=1){if(config.kind==='fraction')state.n=Math.max(0,Math.min(state.d,state.n+delta));if(config.kind==='numberline')state.index=Math.max(0,Math.min(config.divisions,state.index+delta));if(config.kind==='symmetry')state.visible=Math.max(0,Math.min(3,state.visible+delta));if(config.kind==='circuit')state.closed=!state.closed;if(config.kind==='timeline')state.index=Math.max(0,Math.min(config.events.length-1,state.index+delta));repaint();}
      node.querySelectorAll('[data-visual-action]').forEach(button=>button.addEventListener('click',()=>{
        const action=button.dataset.visualAction;
        if(action==='start'){
          if(reduce())return preferences();
          halt();
          const atEnd=()=>config.kind==='fraction'?state.n===state.d:config.kind==='numberline'?state.index===config.divisions:config.kind==='symmetry'?state.visible===3:config.kind==='circuit'?state.closed:state.index===config.events.length-1;
          if(atEnd()){if(config.kind==='fraction')state.n=0;else if(config.kind==='numberline'||config.kind==='timeline')state.index=0;else if(config.kind==='symmetry')state.visible=0;else state.closed=false;repaint();}
          timer=setInterval(()=>{if(reduce()){halt();preferences();return;}next();if(atEnd()){halt();note.textContent='Démonstration terminée. Tu peux recommencer ou utiliser les commandes manuelles.';}},1200);
          start.disabled=true;pause.disabled=false;
        }
        else if(action==='pause')halt();
        else if(action==='reset'){halt();state=initial(config);repaint();}
        else {halt();next(action==='previous'?-1:1);}
      }));
      const range=node.querySelector('[data-visual-range]');if(range)range.addEventListener('input',()=>{halt();if(config.kind==='fraction')state.n=Number(range.value);else state.index=Number(range.value);repaint();});
      const select=node.querySelector('[data-visual-denominator]');if(select)select.addEventListener('change',()=>{halt();state.d=Number(select.value);state.n=Math.min(state.n,state.d);repaint();});
      const observer=new MutationObserver(preferences);observer.observe(document.body,{attributes:true,attributeFilter:['class']});media.addEventListener('change',preferences);repaint();preferences();
      const instance={dispose(){halt();observer.disconnect();media.removeEventListener('change',preferences);}};instances.add(instance);
    });
  }
  window.CM2_VISUALS={render,bind,stop};
})();
