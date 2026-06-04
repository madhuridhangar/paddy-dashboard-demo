function showTab(id, el) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  el.classList.add('active');
  el.classList.add("active"); if (id === "maps") { setTimeout(function(){ initMap(); if(window._leafMap) window._leafMap.invalidateSize(); }, 300); } return;
}
function toggleTheme() {
  const h = document.documentElement;
  h.setAttribute('data-theme', h.getAttribute('data-theme')==='dark' ? 'light' : 'dark');
}

const legend = { position:'bottom', labels:{ usePointStyle:true, boxWidth:10, padding:14, font:{family:'Satoshi, Inter, sans-serif',size:12} } };
const cats = ['Simant Kisan (≤1.01 ha)','Laghu Kisan (1.01–2.02 ha)','Dirgh Kisan (2.02–4.05 ha)','Dirgh-1 Kisan (4.05–8.1 ha)'];
const colors = ['#1d4ed8','#10b981','#f59e0b','#f43f5e'];

new Chart(document.getElementById('donut1'), { type:'doughnut', data:{labels:cats,datasets:[{data:[22.4,24.1,19.6,33.9],backgroundColor:colors,borderWidth:0,hoverOffset:6}]}, options:{plugins:{legend},cutout:'65%'} });
new Chart(document.getElementById('donut2'), { type:'doughnut', data:{labels:cats,datasets:[{data:[21.2,24.1,19.9,34.8],backgroundColor:colors,borderWidth:0,hoverOffset:6}]}, options:{plugins:{legend},cutout:'65%'} });
new Chart(document.getElementById('farmerDonut'), { type:'doughnut', data:{labels:['Simant','Laghu','Dirgh','Dirgh-1'],datasets:[{data:[28,30,22,20],backgroundColor:colors,borderWidth:0}]}, options:{plugins:{legend},cutout:'60%'} });
new Chart(document.getElementById('procPie'), { type:'pie', data:{labels:['Mota Paddy','Patla Paddy','Sarna Paddy'],datasets:[{data:[55.2,6.4,38.4],backgroundColor:['#1d4ed8','#10b981','#f59e0b'],borderWidth:0}]}, options:{plugins:{legend}} });
new Chart(document.getElementById('farmerBar'), { type:'bar', data:{labels:['Simant','Laghu','Dirgh','Dirgh-1'], datasets:[{label:'Purchase %',data:[22.4,24.1,19.6,33.9],backgroundColor:colors,borderRadius:8}]}, options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,max:40}}} });
new Chart(document.getElementById('stackedBar'), { type:'bar', data:{labels:['Procurement','Issued DO','Lifted DO','Issued from Soc.','Lifted from Soc.','Issued TO','Lifted TO','Paddy Recv.'],datasets:[
  {label:'Mota',data:[55.2,56.3,56.2,56.4,56.2,6.1,6.1,6.0],backgroundColor:'#1d4ed8'},
  {label:'Patla',data:[6.4,6.4,6.1,6.1,6.1,5.9,5.9,6.1],backgroundColor:'#10b981'},
  {label:'Sarna',data:[38.5,37.2,37.7,37.5,37.7,0,0,0],backgroundColor:'#f59e0b'}
]}, options:{indexAxis:'y',plugins:{legend},responsive:true,scales:{x:{stacked:true},y:{stacked:true}}} });

const labels=['16 Nov','23 Nov','30 Nov','07 Dec','14 Dec','21 Dec','28 Dec','04 Jan','11 Jan','18 Jan','25 Jan','01 Feb','08 Feb'];
const baseData = {
  'Kabirdham (Kawardha)':{m:[0,3,10,26,42,60,80,117,145,178,204,218,223],p:[0,4,15,30,46,64,77,111,136,156,174,188,195],s:[0,3,10,29,52,70,83,117,141,166,186,200,205]},
  'Raipur':{m:[0,5,18,40,70,100,130,170,200,230,260,280,290],p:[0,4,15,35,60,90,115,150,175,200,220,240,248],s:[0,5,17,38,65,94,122,160,185,215,240,260,268]},
  'Durg':{m:[0,3,12,28,52,80,105,140,165,190,212,228,235],p:[0,3,10,25,45,68,90,120,142,162,180,194,200],s:[0,3,11,26,50,76,100,132,155,178,198,214,220]},
  'Bilaspur':{m:[0,6,20,44,78,110,142,185,218,252,284,306,316],p:[0,5,17,38,67,96,124,162,190,220,246,265,274],s:[0,5,18,40,72,102,130,170,200,230,258,278,286]},
  'Rajnandgaon':{m:[0,4,14,32,58,85,112,148,175,202,226,244,252],p:[0,3,11,27,48,72,94,124,146,168,188,202,208],s:[0,4,13,30,54,80,106,140,165,190,212,228,236]},
  'Korba':{m:[0,2,8,20,36,54,72,96,115,134,150,162,168],p:[0,2,7,17,30,46,60,80,96,110,124,134,138],s:[0,2,8,19,34,52,68,92,110,128,142,153,158]}
};
let lineChartInst;
function updateDistrictChart() {
  const d = document.getElementById('districtSel').value;
  const data = baseData[d] || baseData['Kabirdham (Kawardha)'];
  if (lineChartInst) lineChartInst.destroy();
  lineChartInst = new Chart(document.getElementById('lineChart'), { type:'line', data:{labels, datasets:[
    {label:'Mota Paddy',data:data.m.map(v=>v*1000),borderColor:'#1d4ed8',backgroundColor:'rgba(29,78,216,.08)',fill:true,tension:.35,pointRadius:3},
    {label:'Patla Paddy',data:data.p.map(v=>v*1000),borderColor:'#10b981',backgroundColor:'rgba(16,185,129,.06)',fill:true,tension:.35,pointRadius:3},
    {label:'Sarna Paddy',data:data.s.map(v=>v*1000),borderColor:'#f59e0b',backgroundColor:'rgba(245,158,11,.06)',fill:true,tension:.35,pointRadius:3}
  ]}, options:{responsive:true,plugins:{legend},scales:{y:{beginAtZero:true,ticks:{callback:v=>v>=1000?(v/1000)+'K':v}}}} });
}
updateDistrictChart();

let mapInited = false; window._leafMap = null;
function initMap() {
  if (mapInited) { if(window._leafMap) window._leafMap.invalidateSize(); return; } mapInited = true;
  window._leafMap = L.map('procMap').setView([21.2, 81.6], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:18, attribution:'© OpenStreetMap' }).addTo(window._leafMap);
  const mIcon = (color,label) => L.divIcon({ className:'', html:`<div style="background:${color};color:#fff;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:700;box-shadow:0 4px 12px rgba(0,0,0,.2);white-space:nowrap">${label}</div>` });
  const mills = [[21.2514,81.6296,'Raipur Mill'],[21.1904,81.2849,'Durg Mill'],[22.0796,82.1409,'Bilaspur Mill'],[21.0974,81.0337,'Rajnandgaon Mill'],[21.9145,83.1330,'Raigarh Mill'],[22.3595,82.1529,'Korba Mill']];
  const pcs = [[21.5483,81.6763,'Tilda PC'],[21.1103,82.0994,'Mahasamund PC'],[20.9078,81.9274,'Gariaband PC'],[21.4728,80.9731,'Kawardha PC'],[22.5526,82.5781,'Mungeli PC'],[21.8867,83.3712,'Sarangarh PC']];
  mills.forEach(([lat,lng,name])=>L.marker([lat,lng],{icon:mIcon('#0f766e','🏭 '+name)}).addTo(window._leafMap).bindPopup(`<b>${name}</b><br>Rice Mill`));
  pcs.forEach(([lat,lng,name])=>L.marker([lat,lng],{icon:mIcon('#d97706','🏪 '+name)}).addTo(window._leafMap).bindPopup(`<b>${name}</b><br>Procurement Center`));
  L.polyline([[21.0974,81.0337],[21.25,81.35],[21.5483,81.6763]],{color:'#ef4444',weight:4,opacity:.8,dashArray:'8,6'}).addTo(window._leafMap).bindPopup('Sample route: Rajnandgaon → Tilda (35.7 km, 46 min)');
}
