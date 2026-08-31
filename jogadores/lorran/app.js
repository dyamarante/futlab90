const W=216;
const LORRAN_IMG='https://images.fotmob.com/image_resources/playerimages/1435445.png';
const ANTHONY_IMG='https://images.fotmob.com/image_resources/playerimages/1353364.png';
const JOAQUIN_IMG='https://images.fotmob.com/image_resources/playerimages/1847899.png';
const fmt=(n,d=2)=>n.toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});
const local=n=>`assets/${n}.png`;
const remote=id=>`https://images.fotmob.com/image_resources/playerimages/${id}.png`;
const makeAvatar=(src,initials,name)=>src?`<span class="avatar" data-initials="${initials}"><img src="${src}" alt="${name}" onerror="const p=this.parentElement;this.remove();if(p)p.textContent='${initials}'"></span>`:`<span class="avatar" data-initials="${initials}">${initials}</span>`;
const signings=[
 {name:'Anthony Valencia',age:23,mins:139,g:3,a:0,photo:ANTHONY_IMG,initials:'AV',note:'216 min pós-Copa · taxa ajustada',normalized:true,color:'var(--teal)'},
 {name:'Lorran',age:20,mins:216,g:3,a:1,photo:LORRAN_IMG,initials:'LO',note:'216 min pós-Copa · observado',featured:true,color:'var(--blue)'},
 {name:'Joaquín Freitas',age:19,mins:487,g:0,a:0,photo:JOAQUIN_IMG,initials:'JF',note:'216 min pós-Copa · taxa ajustada',normalized:true,color:'var(--violet)'}
].map(d=>({...d,geq:d.g*W/d.mins,aeq:d.a*W/d.mins,total:(d.g+d.a)*W/d.mins}));
const signingTarget=document.getElementById('signingHero');
const signingMax=Math.max(...signings.map(d=>d.total),1);
signingTarget.innerHTML=[...signings].sort((a,b)=>b.total-a.total).map(d=>`<div class="head-row${d.featured?' featured':''}">
 <div class="person">${makeAvatar(d.photo,d.initials,d.name)}<span class="person-copy"><strong>${d.name} · ${d.age} anos</strong><span>${d.note}</span></span></div>
 <div class="stack-track" title="${d.name}: ${fmt(d.total)} G+A no cenário de 216 min pós-Copa"><i class="goal" style="width:${d.geq/signingMax*100}%"></i><i class="assist" style="width:${d.aeq/signingMax*100}%"></i></div>
 <div class="head-value"><strong>${fmt(d.total)}</strong><span>G+A / 216</span></div></div>`).join('');

const games=[
 {date:'03 JUL',short:'RIV',name:'River Plate',type:'Amistoso',min:14,g:0,a:0},
 {date:'08 JUL',short:'LAU',name:'Lausanne',type:'Amistoso',min:34,g:1,a:0},
 {date:'11 JUL',short:'BEN',name:'Benfica',type:'Amistoso',min:4,g:0,a:0},
 {date:'17 JUL',short:'OLI',name:'Olimpia',type:'Amistoso',min:45,g:1,a:1},
 {date:'23 JUL',short:'CHA',name:'Chapecoense',type:'Oficial',min:57,g:1,a:0},
 {date:'26 JUL',short:'SAO',name:'São Paulo',type:'Oficial',min:58,g:0,a:0},
 {date:'09 AGO',short:'VIT',name:'Vitória',type:'Oficial',min:4,g:0,a:0}
];
document.getElementById('timelineTrack').innerHTML=games.map(g=>`<div class="time-segment ${g.type==='Amistoso'?'friendly':'official'} ${(g.g+g.a)?'has-event':''}" style="width:${g.min/W*100}%" title="${g.name}: ${g.min} min, ${g.g} gol, ${g.a} assistência"><span class="event-dot">${g.g?'<b>G</b>':''}${g.a?'<b>A</b>':''}</span>${g.short}</div>`).join('');
document.getElementById('gameGrid').innerHTML=games.map(g=>`<div class="game"><b>${g.date} · ${g.short}</b><span>${g.type}</span><strong>${g.min} min</strong><span>${g.g?'⚽ '+g.g+' gol':''}${g.g&&g.a?' · ':''}${g.a?'A '+g.a+' assist.':''}${!g.g&&!g.a?'sem G+A':''}</span></div>`).join('');

const squad=[
 {name:'Lorran',mins:216,g:3,a:1,initials:'LO',photo:LORRAN_IMG,special:true},
 {name:'Carrascal',mins:376,g:2,a:4,initials:'JC',photo:remote(784834)},
 {name:'Samuel Lino',mins:952,g:7,a:6,initials:'SL',photo:remote(1082941)},
 {name:'Bruno Henrique',mins:476,g:3,a:2,initials:'BH',photo:remote(638778)},
 {name:'Pedro',mins:902,g:6,a:2,initials:'PE',photo:remote(750067)},
 {name:'Arrascaeta',mins:490,g:1,a:2,initials:'GA',photo:remote(438647)},
 {name:'Luiz Araújo',mins:349,g:2,a:0,initials:'LA',photo:remote(750913)},
 {name:'Everton Cebolinha',mins:192,g:0,a:1,initials:'EC',photo:remote(528348)},
 {name:'Lucas Paquetá',mins:256,g:1,a:0,initials:'LP',photo:remote(766435)}
].map(d=>({...d,geq:d.g*W/d.mins,aeq:d.a*W/d.mins,total:(d.g+d.a)*W/d.mins,coverage:Math.min(1,d.mins/W)}));

const world=[
 {name:'Rayan',age:20,club:'Bournemouth',mins:179,g:0,a:0,initials:'RA',photo:remote(1478295),source:'Premier League 2026/27'},
 {name:'Can Uzun',age:20,club:'Eintracht Frankfurt',mins:79,g:0,a:0,initials:'CU',photo:remote(1367924),source:'Bundesliga 2026/27'},
 {name:'Assane Diao',age:20,club:'Como',mins:110,g:0,a:1,initials:'AD',photo:remote(1434889),source:'Serie A 2026/27'},
 {name:'Jesús Rodríguez',age:20,club:'Como',mins:71,g:0,a:0,initials:'JR',photo:remote(1624039),source:'Serie A 2026/27'},
 {name:'Luís Guilherme',age:20,club:'Sporting CP',mins:83,g:0,a:0,initials:'LG',photo:remote(1458757),source:'Liga Portugal 2026/27'},
 {name:'Othmane Maamma',age:20,club:'Watford',mins:208,g:0,a:0,initials:'OM',photo:remote(1579894),source:'Championship 2026/27'},
 {name:'Adam Daghim',age:20,club:'Hoffenheim',mins:87,g:1,a:0,initials:'AD',photo:remote(1353000),source:'Bundesliga 2026/27'},
 {name:'Alisson Santana',age:20,club:'Shakhtar Donetsk',mins:268,g:1,a:2,initials:'AS',photo:remote(1503318),source:'Premier League UCR 2026/27'},
 {name:'George Ilenikhena',age:20,club:'Al-Ittihad',mins:109,g:1,a:0,initials:'GI',photo:remote(1431516),source:'Saudi Pro League 2026/27'},
 {name:'Adriano Jagusic',age:20,club:'Panathinaikos',mins:324,g:2,a:0,initials:'AJ',photo:remote(1515990),source:'Qualificatórias europeias 2026/27'}
].map(d=>({...d,geq:d.g*W/d.mins,aeq:d.a*W/d.mins,total:(d.g+d.a)*W/d.mins,coverage:Math.min(1,d.mins/W)}));
world.push({name:'Lorran',age:20,club:'Flamengo',mins:216,g:3,a:1,initials:'LO',photo:LORRAN_IMG,source:'recorte completo pós-Copa',geq:3,aeq:1,total:4,coverage:1,special:true});

function rankAvatar(d){return `<span class="rank-avatar">${makeAvatar(d.photo,d.initials,d.name)}</span>`}
function renderRank(targetId,data){const target=document.getElementById(targetId);const sorted=[...data].sort((a,b)=>b.total-a.total||b.geq-a.geq);const max=Math.max(...sorted.map(d=>d.total),1);target.innerHTML=sorted.map((d,i)=>`<div class="rank-row${d.special?' featured':''}" title="${d.name}: ${fmt(d.total)} G+A no cenário de 216 minutos pós-Copa">
 <div class="rank-person"><span class="rank-index">${i+1}</span>${rankAvatar(d)}<span class="rank-copy"><strong>${d.name}</strong><span>216 min · pós-Copa</span></span></div>
 <div class="bar-track"><i class="g" style="width:${d.geq/max*100}%"></i><i class="a" style="width:${d.aeq/max*100}%"></i></div>
 <div class="bar-value"><strong>${fmt(d.total)}</strong><span>G+A / 216</span></div></div>`).join('')}
function renderWorldRank(){const target=document.getElementById('worldChart');const sorted=[...world].sort((a,b)=>b.total-a.total||b.geq-a.geq);const max=Math.max(...sorted.map(d=>d.total),1);target.innerHTML=sorted.map((d,i)=>`<div class="rank-row${d.special?' featured':''}" title="${d.name}, ${d.age} anos: ${fmt(d.total)} G+A equivalentes em 216 minutos">
 <div class="rank-person"><span class="rank-index">${i+1}</span>${rankAvatar(d)}<span class="rank-copy"><strong>${d.name}</strong><span class="peer-meta"><b class="age-inline">${d.age} anos</b><span class="peer-club">${d.club}</span> · base ${d.mins} min</span></span></div>
 <div class="bar-track"><i class="g" style="width:${d.geq/max*100}%"></i><i class="a" style="width:${d.aeq/max*100}%"></i></div>
 <div class="bar-value"><strong>${fmt(d.total)}</strong><span>G+A / 216</span></div></div>`).join('')}
renderRank('squadChart',squad);
renderWorldRank();

const adv={
 'Lorran':{photo:LORRAN_IMG,initials:'LO',color:'#3169d8',xgxa:.92*2.4,sot:3.03*2.4,chances:1.51*2.4,dribbles:.76*2.4,recoveries:3.78*2.4,box:5.29*2.4},
 'Anthony Valencia':{photo:ANTHONY_IMG,initials:'AV',color:'#159b98',xgxa:.69*2.4,sot:2.59*2.4,chances:3.24*2.4,dribbles:4.53*2.4,recoveries:8.42*2.4,box:5.83*2.4},
 'Joaquín Freitas':{photo:JOAQUIN_IMG,initials:'JF',color:'#765ad8',xgxa:.31*2.4,sot:.41*2.4,chances:1.98*2.4,dribbles:1.49*2.4,recoveries:3.88*2.4,box:3.39*2.4}
};
const metricMeta=[['xgxa','xG+xA'],['sot','No alvo'],['chances','Chances'],['dribbles','Dribles'],['recoveries','Recuperações'],['box','Toques na área']];
function drawRadar(){const svg=document.getElementById('radar'),cx=280,cy=245,R=168,N=metricMeta.length;const angle=i=>-Math.PI/2+i*2*Math.PI/N;const pt=(r,i)=>[cx+Math.cos(angle(i))*r,cy+Math.sin(angle(i))*r];const maxes=Object.fromEntries(metricMeta.map(([k])=>[k,Math.max(...Object.values(adv).map(p=>p[k]))]));let out='';for(let ring=1;ring<=5;ring++){const pts=metricMeta.map((_,i)=>pt(R*ring/5,i).join(',')).join(' ');out+=`<polygon points="${pts}" fill="${ring%2?'#f8fafc':'#f2f5f9'}" stroke="#dbe3ed"/>`}metricMeta.forEach((_,i)=>{const [x,y]=pt(R,i);out+=`<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#dbe3ed"/>`});Object.entries(adv).forEach(([name,p])=>{const pts=metricMeta.map(([k],i)=>pt(R*p[k]/maxes[k],i).join(',')).join(' ');out+=`<polygon points="${pts}" fill="${p.color}22" stroke="${p.color}" stroke-width="3" stroke-linejoin="round"><title>${name}</title></polygon>`;metricMeta.forEach(([k],i)=>{const [x,y]=pt(R*p[k]/maxes[k],i);out+=`<circle cx="${x}" cy="${y}" r="4" fill="${p.color}"/>`})});metricMeta.forEach(([k,label],i)=>{const [x,y]=pt(R+42,i),anc=x<cx-15?'end':x>cx+15?'start':'middle';out+=`<text x="${x}" y="${y}" text-anchor="${anc}" fill="#526177" font-size="13" font-weight="800">${label}</text>`});svg.innerHTML=out}
drawRadar();
document.getElementById('playerLegend').innerHTML=Object.entries(adv).map(([name,p])=>`<div class="person">${makeAvatar(p.photo,p.initials,name)}<span class="person-copy"><strong style="color:${p.color}">${name}</strong><span>equivalente / 216</span></span></div>`).join('');
const metricTarget=document.getElementById('metricGroups');
metricTarget.innerHTML=metricMeta.map(([k,label])=>{const max=Math.max(...Object.values(adv).map(p=>p[k]));return `<div class="metric-group"><div class="metric-title"><strong>${label}</strong><span>quantidade equivalente em 216 min</span></div>${Object.entries(adv).map(([name,p])=>`<div class="triple"><b>${name.split(' ')[0]}</b><div class="track"><i class="${name==='Lorran'?'lo':name.startsWith('Anthony')?'av':'jf'}" style="width:${p[k]/max*100}%"></i></div><em>${fmt(p[k])}</em></div>`).join('')}</div>`}).join('');

const market=[
 {name:'Lorran',photo:LORRAN_IMG,initials:'LO',low:4.5,high:8.2,fee:0,note:'valor público',sources:[
   {name:'Transfermarkt',value:'€4,5 mi',url:'https://www.transfermarkt.com/lorran/profil/spieler/1009030'},
   {name:'FotMob',value:'€8,2 mi',url:'https://www.fotmob.com/players/1435445/lorran'}
 ]},
 {name:'Anthony Valencia',photo:ANTHONY_IMG,initials:'AV',low:1.1,high:1.8,fee:5,note:'valor público',sources:[
   {name:'FotMob',value:'€1,1 mi',url:'https://www.fotmob.com/players/1353364/anthony-valencia'},
   {name:'Transfermarkt',value:'€1,8 mi',url:'https://www.transfermarkt.com/anthony-valencia/profil/spieler/974374'}
 ],feeSource:{name:'UOL',value:'€5 mi',url:'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2026/08/31/mauro-cezar-apos-ponta-equatoriano-flamengo-contrata-argentino-para-ser-9.ghtm'}},
 {name:'Joaquín Freitas',photo:JOAQUIN_IMG,initials:'JF',low:1.0,high:2.1,fee:8,note:'valor público',sources:[
   {name:'Transfermarkt',value:'€1,0 mi',url:'https://www.transfermarkt.com/joaquin-freitas/profil/spieler/1324003'},
   {name:'FotMob',value:'€2,1 mi',url:'https://www.fotmob.com/players/1847899/joaquin-freitas'}
 ],feeSource:{name:'UOL',value:'€8 mi',url:'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2026/08/31/mauro-cezar-apos-ponta-equatoriano-flamengo-contrata-argentino-para-ser-9.ghtm'}}
];
const marketMax=8.5;
document.getElementById('marketRows').innerHTML=market.map(d=>`<div class="range-row"><div class="range-label">${makeAvatar(d.photo,d.initials,d.name)}<div><strong>${d.name}</strong><span>${d.note}</span></div></div><div class="range-track"><i class="market" style="left:${d.low/marketMax*100}%;width:${(d.high-d.low)/marketMax*100}%"></i>${d.fee?`<i class="fee" style="left:calc(${d.fee/marketMax*100}% - 5px);width:10px"></i>`:''}</div><div class="range-value"><strong>€${fmt(d.low,1)}–${fmt(d.high,1)}m</strong><span>${d.fee?'negócio: €'+fmt(d.fee,1)+'m':'sem compra externa'}</span></div><div class="market-sources"><b>Fontes:</b>${d.sources.map(src=>`<a class="market-source" href="${src.url}" target="_blank" rel="noopener">${src.name} <em>${src.value}</em></a>`).join('')}${d.feeSource?`<a class="market-source" href="${d.feeSource.url}" target="_blank" rel="noopener">Negócio · ${d.feeSource.name} <em>${d.feeSource.value}</em></a>`:''}</div></div>`).join('');

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('printBtn').addEventListener('click',()=>window.print());
document.getElementById('csvBtn').addEventListener('click',()=>{const rows=[['grupo','jogador','minutos_base_pos_copa','gols','assistencias','ga_equivalente_216']];squad.forEach(d=>rows.push(['Flamengo',d.name,d.mins,d.g,d.a,d.total.toFixed(4)]));world.filter(d=>!d.special).forEach(d=>rows.push(['Pares globais 20 anos',d.name,d.mins,d.g,d.a,d.total.toFixed(4)]));signings.forEach(d=>rows.push(['Lorran e reforços',d.name,d.mins,d.g,d.a,d.total.toFixed(4)]));const csv='\uFEFF'+rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(';')).join('\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='futlab90-lorran-pos-copa-2026.csv';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)});