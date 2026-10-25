/* Winheller 3D Manufaktur – Seitenlogik */
(function(){
"use strict";
const $ = id => document.getElementById(id);
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fmtEUR = n => n.toLocaleString('de-DE')+' €';
$('year').textContent = new Date().getFullYear();

/* Navigation: Linie erst nach dem Scrollen */
const nav = $('nav');
const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 8);
addEventListener('scroll', onScroll, {passive:true}); onScroll();

/* Abschnitte: Überschrift, Text, Inhalt treten nacheinander ein */
if(!reduce && 'IntersectionObserver' in window){
  window.__rv=true;
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }),{rootMargin:'0px 0px -12% 0px'});
  document.querySelectorAll('.band').forEach(sec=>{
    sec.querySelectorAll('.head h2, .head .lede, .flow__step, .opts, .ticket, form, .mail, .faq > div:first-child, .faq__list').forEach((el,i)=>{ el.classList.add('rv'); el.style.setProperty('--i',i); io.observe(el); });
  });
} else document.documentElement.classList.remove('js');

/* Glas: Lichtreflex folgt dem Zeiger (nur mit Maus) */
if(matchMedia('(hover:hover) and (pointer:fine)').matches){
  document.querySelectorAll('.glass').forEach(el=>{
    el.addEventListener('pointermove',e=>{ const r=el.getBoundingClientRect(); el.style.setProperty('--mx',(e.clientX-r.left)+'px'); el.style.setProperty('--my',(e.clientY-r.top)+'px'); });
  });
}

/* ---------- Konfigurator (PLATZHALTERPREISE: hier anpassen) ---------- */
const PREISE = {
  groesse: { 10:{basis:79, weiterePerson:49}, 15:{basis:119, weiterePerson:69}, 20:{basis:159, weiterePerson:89}, 25:{basis:209, weiterePerson:119} },
  sockel:  { rund:{name:'Rund, schwarz', info:'klassisch', preis:0}, stein:{name:'Steinsockel', info:'Felsen-Optik', preis:15}, gravur:{name:'Mit Gravur', info:'Name oder Datum', preis:12} },
  extras:  { box:{name:'Geschenkbox', preis:9}, zweite:{name:'Zweite Figur gleich mitdrucken', preis:'50%'}, express:{name:'Express-Fertigung', preis:29} }
};
const SCHICHT_MM = 0.12;
const state = {size:15, persons:1, base:'rund', extras:new Set()};

Object.keys(PREISE.groesse).forEach(cm=>{
  const h = 26 + (cm-10)*2.5;
  $('sizes').insertAdjacentHTML('beforeend',`<label class="opt"><input type="radio" name="size" value="${cm}" ${+cm===state.size?'checked':''}><span class="opt__box"><span class="opt__fig"><svg viewBox="0 0 40 100" style="height:${h}px"><use href="#figur"/></svg></span><b>${cm} cm</b><span>ab ${fmtEUR(PREISE.groesse[cm].basis)}</span></span></label>`);
});
Object.entries(PREISE.sockel).forEach(([k,v])=>{
  $('bases').insertAdjacentHTML('beforeend',`<label class="opt"><input type="radio" name="base" value="${k}" ${k===state.base?'checked':''}><span class="opt__box"><b style="font-size:21px">${v.name}</b><span>${v.info}, ${v.preis?'+ '+fmtEUR(v.preis):'inklusive'}</span></span></label>`);
});
Object.entries(PREISE.extras).forEach(([k,v])=>{
  $('extras').insertAdjacentHTML('beforeend',`<label class="check"><input type="checkbox" value="${k}"><span>${v.name}</span><em>+ ${typeof v.preis==='string'?v.preis:fmtEUR(v.preis)}</em></label>`);
});
$('sizes').addEventListener('change',e=>{state.size=+e.target.value;update();studio.setSize(state.size)});
$('bases').addEventListener('change',e=>{state.base=e.target.value;update()});
$('extras').addEventListener('change',e=>{e.target.checked?state.extras.add(e.target.value):state.extras.delete(e.target.value);update()});
$('pMinus').onclick=()=>{if(state.persons>1){state.persons--;update()}};
$('pPlus').onclick=()=>{if(state.persons<6){state.persons++;update()}};

function calc(){
  const g = PREISE.groesse[state.size];
  const rows = [[`Figur, ${state.size} cm`, g.basis]];
  if(state.persons>1) rows.push([`${state.persons-1} weitere Person${state.persons>2?'en':''}`, g.weiterePerson*(state.persons-1)]);
  const s = PREISE.sockel[state.base]; rows.push([`Sockel: ${s.name}`, s.preis]);
  const sub = rows.reduce((a,r)=>a+r[1],0);
  state.extras.forEach(k=>{const x=PREISE.extras[k]; rows.push([x.name, typeof x.preis==='string' ? Math.round(sub*parseFloat(x.preis)/100) : x.preis]);});
  return {rows,total:rows.reduce((a,r)=>a+r[1],0)};
}
function tween(el,to,fmt){
  const from = +el.dataset.v || 0; el.dataset.v = to;
  if(reduce || from===to){ el.textContent = fmt(to); return; }
  const t0 = performance.now();
  const tick = t => { const k=Math.min(1,(t-t0)/420), e=1-Math.pow(1-k,3); el.textContent = fmt(Math.round(from+(to-from)*e)); if(k<1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}
function update(){
  const {rows,total} = calc();
  $('sumList').innerHTML = rows.map(r=>`<dt>${r[0]}</dt><dd class="num">${r[1]?fmtEUR(r[1]):'inklusive'}</dd>`).join('');
  $('pOut').textContent = state.persons+(state.persons>1?' Personen':' Person');
  $('crowd').innerHTML = Array.from({length:state.persons},()=>'<svg viewBox="0 0 40 100"><use href="#figur"/></svg>').join('');
  tween($('total'), total, fmtEUR);
  tween($('layerCount'), Math.round(state.size*10/SCHICHT_MM), n=>n.toLocaleString('de-DE'));
  const figs = state.extras.has('zweite') ? 2 : 1;
  $('figCount').textContent = figs;
  $('figCount').nextSibling.textContent = state.persons>1 ? `Figur${figs>1?'en':''} mit ${state.persons} Personen` : `Figur${figs>1?'en':''} auf einem Sockel`;
  $('cfgText').textContent = cfgSummary(total);
  buildMail(false);
}
function cfgSummary(total){
  const ex=[...state.extras].map(k=>PREISE.extras[k].name);
  return `${state.size} cm, ${state.persons} ${state.persons>1?'Personen':'Person'}, ${PREISE.sockel[state.base].name}${ex.length?', '+ex.join(', '):''} (Richtpreis ${fmtEUR(total)})`;
}

/* ---------- Anfrage ---------- */
const form=$('inq'), ADDR='info@winheller-3d.com';
let mailReady=false;
function buildMail(fromSubmit){
  const name=form.name.value.trim(), mail=form.email.value.trim();
  const okName=!!name, okMail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  if(fromSubmit){
    $('eName').textContent = okName?'':'Bitte gib deinen Namen ein.';
    $('eMail').textContent = okMail?'':'Bitte gib eine gültige E-Mail-Adresse ein, zum Beispiel name@beispiel.de.';
  }
  if(!(okName&&okMail)){ if(fromSubmit){ $('status').textContent=''; (okName?form.email:form.name).focus(); } return; }
  if(!fromSubmit && !mailReady) return;
  const {total}=calc();
  const d=form.termin.value?new Date(form.termin.value).toLocaleDateString('de-DE'):'flexibel';
  const subject=`Figurenanfrage von ${name}`;
  const body=`Hallo Winheller 3D Manufaktur,

ich möchte gern eine Figur anfragen.

Name: ${name}
E-Mail: ${mail}
Anlass: ${form.anlass.value}
Wunschtermin: ${d}

Auswahl: ${cfgSummary(total)}

Das soll die Figur zeigen:
${form.nachricht.value.trim()||'(siehe Fotos)'}

Meine Fotos hänge ich an diese E-Mail an.

Viele Grüße
${name}`;
  $('mailText').textContent=`Betreff: ${subject}\n\n${body}`;
  const mt=$('mailto'); mt.href=`mailto:${ADDR}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; mt.hidden=false;
  $('copyMail').disabled=false;
  mailReady=true;
  if(fromSubmit) $('status').textContent='E-Mail erstellt. Öffne sie im Mailprogramm oder kopiere den Text, und häng deine Fotos an.';
}
form.addEventListener('submit',e=>{e.preventDefault(); buildMail(true);});
form.addEventListener('input',()=>{ if(mailReady) buildMail(false); });
function copy(text,btn,el){
  const label=btn.textContent;
  const done=()=>{btn.textContent='Kopiert';setTimeout(()=>btn.textContent=label,1600)};
  const fallback=()=>{const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r);$('status').textContent='Text ist markiert. Kopiere ihn mit Strg+C oder ⌘+C.'};
  try{ navigator.clipboard.writeText(text).then(done,fallback); }catch(_){ fallback(); }
}
$('copyAddr').onclick=e=>copy(ADDR,e.currentTarget,$('addr'));
$('copyMail').onclick=e=>copy($('mailText').textContent,e.currentTarget,$('mailText'));
$('mailto').addEventListener('click',()=>{$('status').textContent='Kein Mailprogramm geöffnet? Kopiere den Text und schick ihn an info@winheller-3d.com.'});

/* ---------- 3D-Druckplatte im Hero ---------- */
const studio = (function(){
  const stage=$('stage');
  const api={setSize(){}};
  if(!window.THREE) return api;
  let renderer;
  try{ renderer=new THREE.WebGLRenderer({antialias:true,alpha:true}); }catch(e){ return api; }
  if(!renderer.getContext()) return api;
  $('fallback').remove();
  ['hint','readout','dock'].forEach(id=>$(id).hidden=false);
  renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1));
  renderer.setClearColor(0x000000,0);
  renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.localClippingEnabled=true;
  renderer.outputEncoding=THREE.sRGBEncoding;
  stage.prepend(renderer.domElement);
  const scene=new THREE.Scene();
  const cam=new THREE.PerspectiveCamera(30,1,.1,200); cam.position.set(0,9,42); cam.lookAt(0,8,0);

  scene.add(new THREE.HemisphereLight(0xfff4e0,0x8a8070,.8));
  const key=new THREE.DirectionalLight(0xffe2b0,1.1); key.position.set(-12,22,10); key.castShadow=true; key.shadow.mapSize.set(1024,1024);
  Object.assign(key.shadow.camera,{left:-18,right:18,top:22,bottom:-8,far:80}); key.shadow.bias=-.0005; key.shadow.radius=6; scene.add(key);
  const fill=new THREE.DirectionalLight(0xffffff,.55); fill.position.set(12,10,18); scene.add(fill);
  const rim=new THREE.PointLight(0xD5A34A,1.1,60); rim.position.set(8,14,-12); scene.add(rim);

  // Boden: nur der Schatten, die Fläche ist der Marmor der Seite
  const table=new THREE.Mesh(new THREE.CircleGeometry(30,64),new THREE.ShadowMaterial({opacity:.16}));
  table.rotation.x=-Math.PI/2; table.receiveShadow=true; scene.add(table);

  const clip=new THREE.Plane(new THREE.Vector3(0,-1,0),100);
  const mats=[];
  function mat(color,opt){ const mm=new THREE.MeshStandardMaterial(Object.assign({color,roughness:.7,metalness:0,clippingPlanes:[clip],clipShadows:true,side:THREE.DoubleSide},opt||{})); mm.userData.orig={color:new THREE.Color(color),roughness:mm.roughness,metalness:mm.metalness}; mats.push(mm); return mm; }
  // Echte Druckmodelle (aus den 3MF-Dateien reduziert), Farben je Filament für Licht im Browser abgestimmt
  const C={base:mat(0x1E1E1E,{roughness:.45})};
  const MODELS={
    figur:{url:'models/handwerker-farbe.glb',rot:-1.45,sockel:false,textured:true},
    drache:{url:'models/drache.glb',rot:Math.PI-1.45,sockel:false,textured:true}
  };

  const fig=new THREE.Group(); scene.add(fig);
  const box=(w,h,d)=>new THREE.BoxGeometry(w,h,d);
  // Runder schwarzer Sockel wie bei den gedruckten Figuren (der Drache bringt seinen eigenen mit)
  const sockel=new THREE.Mesh(new THREE.CylinderGeometry(5,5.15,.8,96),C.base); sockel.position.y=.4; sockel.castShadow=sockel.receiveShadow=true; fig.add(sockel);

  const loader=new THREE.GLTFLoader(), cache={};
  let current=null, ready=false, onReady=()=>{};
  function load(key,cb){
    if(cache[key]) return cb(cache[key]);
    const M=MODELS[key];
    loader.load(M.url,gltf=>{
      const model=gltf.scene;
      model.traverse(o=>{
        if(!o.isMesh) return;
        if(M.textured){
          // Textur-Modell (z. B. aus Tripo): Farbbild behalten, Schnittebene für die Druck-Animation dazu
          const tm=mat(0xffffff,{roughness:.75}); tm.map=o.material.map; tm.userData.map=tm.map; o.material=tm;
          if(!o.geometry.attributes.normal) o.geometry.computeVertexNormals();
        } else {
          const k=parseInt((o.name.match(/(\d)$/)||[,1])[1],10)-1;
          o.geometry.computeVertexNormals();
          o.material=M.fil[k]||M.fil[1];
        }
        o.castShadow=true; o.receiveShadow=true;
      });
      // auf 15 cm Figurenhöhe bringen
      const b0=new THREE.Box3().setFromObject(model); model.scale.multiplyScalar(15/(b0.max.y-b0.min.y));
      // auf dem Sockel bzw. Boden mittig ausrichten
      const bb=new THREE.Box3().setFromObject(model), c=bb.getCenter(new THREE.Vector3());
      model.position.set(-c.x,(M.sockel?.8:0)-bb.min.y,-c.z);
      M.h=(M.sockel?.8:0)+(bb.max.y-bb.min.y);
      cache[key]=model; cb(model);
    },undefined,()=>{ stage.classList.add('is-error'); });
  }
  function show(key,print){
    load(key,model=>{
      if(current) fig.remove(current);
      current=model; fig.add(model);
      const M=MODELS[key]; sockel.visible=M.sockel;
      const fin=document.querySelector('[data-finish][aria-pressed="true"]'); if(fin) mats.forEach(finishes[fin.dataset.finish]); FIG_H=M.h; rotY=M.rot; vel=0;
      document.querySelectorAll('[data-model]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.model===key)));
      if(!ready){ ready=true; onReady(); } else if(print) startPrint();
    });
  }
  document.querySelectorAll('[data-model]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.model,true)));
  show('figur');

  // Druckdüse / Lage-Ring
  const ring=new THREE.Mesh(new THREE.TorusGeometry(5.8,.06,8,96),new THREE.MeshBasicMaterial({color:0xD5A34A}));
  ring.rotation.x=Math.PI/2; ring.visible=false; scene.add(ring);
  const nozzle=new THREE.Group(); nozzle.visible=false; scene.add(nozzle);
  const nz=new THREE.Mesh(new THREE.ConeGeometry(.35,.9,16),new THREE.MeshStandardMaterial({color:0xD5A34A,metalness:.8,roughness:.3})); nz.rotation.x=Math.PI; nozzle.add(nz);
  const nzb=new THREE.Mesh(box(1.4,1,1.4),new THREE.MeshStandardMaterial({color:0x3A3939,roughness:.5})); nzb.position.y=.9; nozzle.add(nzb);

  let FIG_H=15.8; let sizeCm=15, printing=false, pStart=0; const P_DUR=reduce?1:5200;
  function setHud(h){
    const k=Math.max(0,Math.min(1,h/FIG_H));
    $('hVal').textContent=(k*sizeCm).toFixed(1).replace('.',',');
    $('hOf').textContent='von '+sizeCm+' cm';
    $('hBar').style.setProperty('--p',(k*100).toFixed(1)+'%');
  }
  api.setSize=cm=>{sizeCm=cm; if(!printing) setHud(FIG_H);};

  const finishes={
    farbe:mm=>{mm.color.copy(mm.userData.orig.color);mm.roughness=mm.userData.orig.roughness;mm.metalness=mm.userData.orig.metalness;if(mm.userData.map){mm.map=mm.userData.map;mm.needsUpdate=true}},
    gold:mm=>{ if(mm===C.base){finishes.farbe(mm);return} if(mm.map){mm.map=null;mm.needsUpdate=true} mm.color.set(0xD5A34A);mm.roughness=.32;mm.metalness=.85},
    weiss:mm=>{ if(mm===C.base){finishes.farbe(mm);return} if(mm.map){mm.map=null;mm.needsUpdate=true} mm.color.set(0xF3F1ED);mm.roughness=.55;mm.metalness=0}
  };
  document.querySelectorAll('[data-finish]').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('[data-finish]').forEach(x=>x.setAttribute('aria-pressed',x===b));
    mats.forEach(finishes[b.dataset.finish]);
  }));

  let rotY=Math.PI-.45, vel=0, dragging=false, lastX=0, idle=0;
  fig.rotation.y=rotY;
  stage.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;stage.setPointerCapture(e.pointerId)});
  stage.addEventListener('pointermove',e=>{ if(!dragging) return; const dx=e.clientX-lastX; lastX=e.clientX; vel=dx*.008; rotY+=vel; idle=0; $('hint').hidden=true; });
  const end=()=>{dragging=false}; stage.addEventListener('pointerup',end); stage.addEventListener('pointercancel',end);
  stage.addEventListener('keydown',e=>{ if(e.key==='ArrowLeft'||e.key==='ArrowRight'){ e.preventDefault(); vel=0; rotY+=e.key==='ArrowLeft'?-.25:.25; idle=0; } });
  let spinning=!reduce; const spinBtn=$('spinBtn');
  const setSpin=v=>{ spinning=v; spinBtn.setAttribute('aria-pressed',String(!v)); spinBtn.textContent=v?'Drehung anhalten':'Drehung starten'; };
  setSpin(spinning); spinBtn.onclick=()=>setSpin(!spinning);

  function startPrint(){ printing=true; pStart=performance.now(); ring.visible=nozzle.visible=true; $('printBtn').disabled=true; }
  $('printBtn').onclick=startPrint;
  clip.constant=0; setHud(0);
  let seen=false;
  onReady=()=>{ if(seen) startPrint(); };
  new IntersectionObserver((es,o)=>{ if(es[0].isIntersecting){ seen=true; if(ready) startPrint(); o.disconnect(); } },{threshold:.45}).observe(stage);

  function resize(){ const w=stage.clientWidth, h=stage.clientHeight; renderer.setSize(w,h,false); cam.aspect=w/h; cam.fov = w/h<.9 ? 36 : 30; cam.updateProjectionMatrix(); }
  new ResizeObserver(resize).observe(stage); resize();

  let visible=true; new IntersectionObserver(es=>{visible=es[0].isIntersecting}).observe(stage);
  let last=performance.now();
  function loop(t){
    requestAnimationFrame(loop);
    const dt=Math.min(.05,(t-last)/1000); last=t;
    if(!visible) return;
    if(!dragging){ vel*=.93; rotY+=vel; idle+=dt; if(spinning && idle>.6) rotY+=dt*.3; }
    fig.rotation.y=rotY;
    if(printing){
      const k=Math.min(1,(t-pStart)/P_DUR), e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
      const layered=Math.floor((.02+e*(FIG_H+.4))/.12)*.12; clip.constant=layered;
      ring.position.y=layered; nozzle.position.y=layered+.45;
      nozzle.position.x=Math.sin(t*.012)*3.2; nozzle.position.z=Math.cos(t*.017)*2.4;
      setHud(layered);
      if(k>=1){ printing=false; clip.constant=100; ring.visible=nozzle.visible=false; $('printBtn').disabled=false; setHud(FIG_H); }
    }
    renderer.render(scene,cam);
  }
  requestAnimationFrame(loop);
  return api;
})();

update();
studio.setSize(state.size);
})();
