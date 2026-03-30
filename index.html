import { useState, useRef, useEffect } from "react";

const STORAGE_KEY       = "magesco_data_v1";
const AI_CONFIG_KEY     = "magesco_ai_configs_v1";
const GENERATIONS_KEY   = "magesco_generations_v1";
const INSTRUCTIONS_KEY  = "magesco_instructions_v1";

async function loadKey(k) { try { var r = await window.storage.get(k); return r ? JSON.parse(r.value) : null; } catch(e) { return null; } }
async function saveKey(k, d) { try { await window.storage.set(k, JSON.stringify(d)); } catch(e) {} }

const INIT_AOS = [
  { id:1, titre:"Développement plateforme RH", client:"Ministère de l'Éducation", budget:"120 000 €", deadline:"2026-04-05", statut:"En cours", secteur:"IT", description:"Développement d'une plateforme RH pour 5000 agents.", cloudUrl:"" },
  { id:2, titre:"Audit & Conseil SI", client:"Groupe Énergies Plus", budget:"45 000 €", deadline:"2026-03-31", statut:"Envoyé", secteur:"Conseil", description:"Mission d'audit du système d'information.", cloudUrl:"" },
];
const INIT_ENTS = [
  { id:1, nom:"TechSoft SAS", siret:"123 456 789 00010", forme:"SAS", adresse:"12 rue de la Paix, 75001 Paris", activite:"Développement logiciel", effectif:"45", ca:"3 200 000 €", certifications:"ISO 9001", references:"Ministère de l'Intérieur (2024)", couleur:"#6c3de8", cloudUrl:"", docs:{kbis:null,assurance:null,qualification:null,reference1:null,reference2:null,reference3:null,activite:null,bilan:null,attestation:null,autres:null} },
  { id:2, nom:"FormaPro SARL", siret:"987 654 321 00025", forme:"SARL", adresse:"8 av. Victor Hugo, 69002 Lyon", activite:"Formation professionnelle", effectif:"12", ca:"980 000 €", certifications:"Qualiopi", references:"CHU de Lyon (2024)", couleur:"#3b82f6", cloudUrl:"", docs:{kbis:null,assurance:null,qualification:null,reference1:null,reference2:null,reference3:null,activite:null,bilan:null,attestation:null,autres:null} },
];
const INIT_LOTS = [
  { id:1, nom:"Lot 1 – Développement informatique", mandataireId:1, cocontractantIds:[], docs:[], cloudUrl:"", aoId:"" },
  { id:2, nom:"Lot 2 – Formation & Conseil", mandataireId:2, cocontractantIds:[], docs:[], cloudUrl:"", aoId:"" },
];

const DOC_SLOTS = [
  {key:"kbis",label:"Kbis",icon:"🏛️"},{key:"assurance",label:"Assurance RC Pro",icon:"🛡️"},
  {key:"qualification",label:"Qualification",icon:"🏅"},{key:"reference1",label:"Référence client 1",icon:"📋"},
  {key:"reference2",label:"Référence client 2",icon:"📋"},{key:"reference3",label:"Référence client 3",icon:"📋"},
  {key:"activite",label:"Présentation activité",icon:"🏢"},{key:"bilan",label:"Bilan financier",icon:"💰"},
  {key:"attestation",label:"Attestations fiscales",icon:"📜"},{key:"autres",label:"Autres",icon:"📎"},
];
const DOC_TYPES_LOT = ["Kbis","Bilan financier","Référence client","Attestation fiscale","Attestation sociale","CV intervenant","Assurance RC Pro","Autre"];
const STATUTS = ["En cours","Envoyé","Gagné","Perdu"];
const STATUT_COLORS = {"En cours":"bg-blue-100 text-blue-700","Envoyé":"bg-yellow-100 text-yellow-700","Gagné":"bg-green-100 text-green-700","Perdu":"bg-red-100 text-red-700"};
const GRADIENT = "linear-gradient(135deg,#6c3de8 0%,#3b82f6 100%)";
const ENT_COLORS = ["#6c3de8","#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#f97316"];
const AI_MODES = ["analyse","memoire","dc1","dc2","prix"];
const INSTR_LABELS = {analyse:"Analyse AO",memoire:"Mémoire technique",dc1:"DC1",dc2:"DC2",prix:"Prix & Planning"};
const MEMOIRE_TABS = [{id:"mandataire",label:"👑 Mandataire"},{id:"coco1",label:"🤝 Co-contractant 1"},{id:"coco2",label:"🤝 Co-contractant 2"}];
const PRIX_TABS = [{id:"dpgf",label:"📊 DPGF"},{id:"bpu",label:"📋 BPU"},{id:"dqe",label:"🔢 DQE"},{id:"gantt",label:"📅 Gantt"}];

function defaultAiConfig() {
  return {
    analyse:{prompt:"",docMetas:[]},
    memoire:{globalPrompt:"",mandataire:{entId:"",prompt:"",docMetas:[]},coco1:{entId:"",prompt:"",docMetas:[]},coco2:{entId:"",prompt:"",docMetas:[]}},
    dc1:{entIds:[],prompt:"",docMetas:[]},
    dc2:{entIds:[],prompt:"",docMetas:[]},
    prix:{dpgf:{prompt:"",docMetas:[]},bpu:{prompt:"",docMetas:[]},dqe:{prompt:"",docMetas:[]},gantt:{prompt:"",docMetas:[]}},
  };
}

function detectCloud(url) {
  if (!url) return "";
  if (url.includes("onedrive")||url.includes("1drv.ms")||url.includes("sharepoint")) return "onedrive";
  if (url.includes("drive.google")||url.includes("docs.google")) return "google";
  return "other";
}

function Avatar({nom,couleur,size}) {
  var s=(size||8)*4;
  return <div className="rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{width:s,height:s,background:couleur||GRADIENT}}>{nom?nom.charAt(0).toUpperCase():"?"}</div>;
}
function CloudBadge({url}) {
  var type=detectCloud(url);
  var icon=type==="onedrive"?"☁️":type==="google"?"🟢":"🔗";
  var label=type==="onedrive"?"OneDrive":type==="google"?"Google Drive":"Lien";
  var cls=type==="onedrive"?"border-blue-200 bg-blue-50 text-blue-700":type==="google"?"border-green-200 bg-green-50 text-green-700":"border-gray-200 bg-gray-50 text-gray-600";
  return <a href={url} target="_blank" rel="noreferrer" onClick={function(e){e.stopPropagation();}} className={"inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg border "+cls}>{icon} {label} ↗</a>;
}
function CloudEditor({value,onChange}) {
  var [open,setOpen]=useState(false);
  var [draft,setDraft]=useState("");
  if (open) return (
    <div className="flex gap-1 items-center mt-1" onClick={function(e){e.stopPropagation();}}>
      <input value={draft} onChange={function(e){setDraft(e.target.value);}} placeholder="Lien OneDrive ou Google Drive..." className="border border-purple-300 rounded-lg px-2 py-1 text-xs flex-1 focus:outline-none" autoFocus/>
      <button onClick={function(e){e.stopPropagation();onChange(draft.trim());setOpen(false);}} className="text-xs px-2 py-1 rounded-lg text-white" style={{background:GRADIENT}}>OK</button>
      <button onClick={function(e){e.stopPropagation();setOpen(false);}} className="text-xs px-2 py-1 rounded-lg border text-gray-400">✕</button>
    </div>
  );
  return (
    <div className="flex items-center gap-2 mt-1" onClick={function(e){e.stopPropagation();}}>
      {value&&<CloudBadge url={value}/>}
      <button onClick={function(e){e.stopPropagation();setDraft(value||"");setOpen(true);}} className={"text-xs px-2 py-1 rounded-lg border transition-all "+(value?"border-gray-200 text-gray-400":"border-dashed border-gray-300 text-gray-400 hover:border-purple-400 hover:text-purple-600")}>{value?"✏️ Modifier":"🔗 Lien cloud"}</button>
    </div>
  );
}

// ── Confirmation dialog ──────────────────────────────────────────────────────
function ConfirmDialog({msg, onConfirm, onCancel}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full mx-4">
        <div className="text-2xl mb-3 text-center">⚠️</div>
        <p className="text-sm text-gray-700 text-center mb-5">{msg}</p>
        <div className="flex gap-3 justify-center">
          <button onClick={onConfirm} className="px-5 py-2 rounded-xl text-white text-sm font-semibold bg-red-500">Supprimer</button>
          <button onClick={onCancel} className="px-5 py-2 rounded-xl text-sm border text-gray-600 bg-white">Annuler</button>
        </div>
      </div>
    </div>
  );
}

// ── Notifications panel ──────────────────────────────────────────────────────
function NotifPanel({aos, onClose, onNavigate}) {
  var now = new Date();
  var items = aos.map(function(a){
    var d=(new Date(a.deadline)-now)/86400000;
    return {ao:a, days:d};
  }).filter(function(x){return x.days>=0&&x.days<=14;}).sort(function(a,b){return a.days-b.days;});
  return (
    <div className="absolute right-0 top-10 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden">
      <div className="px-4 py-3 border-b flex justify-between items-center" style={{background:GRADIENT}}>
        <span className="text-white font-semibold text-sm">🔔 Rappels d'échéances</span>
        <button onClick={onClose} className="text-white/70 hover:text-white text-lg">✕</button>
      </div>
      {items.length===0
        ? <div className="p-6 text-center text-gray-400 text-sm">Aucune échéance dans les 14 jours.</div>
        : items.map(function(x){
            var urgency=x.days<=3?"bg-red-50 border-red-200":x.days<=7?"bg-orange-50 border-orange-200":"bg-yellow-50 border-yellow-200";
            var tc=x.days<=3?"text-red-600":x.days<=7?"text-orange-600":"text-yellow-600";
            return (
              <div key={x.ao.id} className={"p-3 border-b last:border-0 "+urgency+" border cursor-pointer hover:opacity-80"} onClick={function(){onNavigate(x.ao.id);onClose();}}>
                <div className="flex justify-between items-start gap-2">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">{x.ao.titre}</div>
                    <div className="text-xs text-gray-500">{x.ao.client}</div>
                  </div>
                  <div className={"text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 "+tc}>
                    {x.days<1?"Aujourd'hui":x.days<2?"Demain":Math.ceil(x.days)+"j"}
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">📅 {new Date(x.ao.deadline).toLocaleDateString("fr-FR")}</div>
              </div>
            );
          })
      }
    </div>
  );
}

var fileStore = {};
function storeFile(f) { var id="f_"+Date.now()+"_"+Math.random().toString(36).slice(2); fileStore[id]=f; return {id,name:f.name,size:f.size,type:f.type}; }
function getFile(id) { return fileStore[id]||null; }
function readFileAsBase64(f) { return new Promise(function(res,rej){ var r=new FileReader(); r.onload=function(){res(r.result.split(",")[1]);}; r.onerror=rej; r.readAsDataURL(f); }); }
function readFileAsText(f) { return new Promise(function(res,rej){ var r=new FileReader(); r.onload=function(){res(r.result);}; r.onerror=rej; r.readAsText(f); }); }

function FileUploadArea({metas,onChange,maxFiles,label}) {
  var ref=useRef();
  var mf=maxFiles||20;
  function handleFiles(files) {
    var cur=metas||[];
    var newM=Array.from(files).slice(0,mf-cur.length).map(storeFile);
    onChange(cur.concat(newM));
  }
  function remove(idx){ onChange((metas||[]).filter(function(_,i){return i!==idx;})); }
  return (
    <div>
      <div className="border-2 border-dashed border-purple-200 rounded-xl p-3 text-center cursor-pointer hover:border-purple-400 bg-purple-50/30 mb-2" onClick={function(){ref.current.click();}}>
        <div className="text-xl mb-0.5">☁️</div>
        <div className="text-xs text-gray-500">{label||"Ajouter des documents"} (max {mf})</div>
      </div>
      {(metas||[]).length>0&&(
        <div className="space-y-1">
          {(metas||[]).map(function(m,i){
            var hasFile=!!getFile(m.id);
            return (
              <div key={m.id} className={"flex items-center gap-2 text-xs rounded-lg px-2 py-1 border "+(hasFile?"bg-purple-50 border-purple-100":"bg-orange-50 border-orange-200")}>
                <span>{hasFile?"📄":"⚠️"}</span>
                <span className={"font-medium truncate flex-1 "+(hasFile?"text-purple-700":"text-orange-600")}>{m.name}</span>
                {!hasFile&&<span className="text-orange-500 text-xs">non chargé</span>}
                <span className="text-gray-400">{(m.size/1024).toFixed(0)}Ko</span>
                <button onClick={function(){remove(i);}} className="text-red-400 ml-1">✕</button>
              </div>
            );
          })}
        </div>
      )}
      <input ref={ref} type="file" accept=".pdf,.doc,.docx,.txt" multiple className="hidden" onChange={function(e){handleFiles(e.target.files);e.target.value="";}}/>
    </div>
  );
}

function DocSlotUploader({slots,docs,onChange}) {
  return (
    <div className="space-y-2">
      {slots.map(function(slot){
        return (
          <div key={slot.key} className="flex items-center gap-3 p-2 rounded-xl bg-gray-50 border border-gray-100">
            <span className="text-lg">{slot.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-gray-600 mb-0.5">{slot.label}</div>
              {docs[slot.key]
                ? <div className="flex items-center gap-1"><span className="text-xs text-purple-700 truncate font-medium">{docs[slot.key].name}</span><button onClick={function(){onChange(slot.key,null);}} className="text-red-400 text-xs ml-1">✕</button></div>
                : <label className="text-xs text-blue-500 cursor-pointer hover:underline">+ Ajouter<input type="file" accept=".pdf,.doc,.docx,.txt,.xls,.xlsx" className="hidden" onChange={function(e){if(e.target.files[0])onChange(slot.key,e.target.files[0]);}}/></label>
              }
            </div>
            {docs[slot.key]&&<span className="text-green-500 text-sm">✅</span>}
          </div>
        );
      })}
    </div>
  );
}

function copyToClipboard(text) {
  try {
    if (navigator.clipboard&&navigator.clipboard.writeText) { navigator.clipboard.writeText(text).catch(function(){ fallbackCopy(text); }); }
    else fallbackCopy(text);
  } catch(e) { fallbackCopy(text); }
}
function fallbackCopy(text) {
  var ta=document.createElement("textarea"); ta.value=text; ta.style.position="fixed"; ta.style.opacity="0";
  document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
}

// ── Export helpers ────────────────────────────────────────────────────────────
function exportAsTxt(text, filename) {
  var blob=new Blob([text],{type:"text/plain;charset=utf-8"});
  var url=URL.createObjectURL(blob);
  var a=document.createElement("a"); a.href=url; a.download=filename+".txt";
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
}
function exportAsHtml(text, filename) {
  var escaped=text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  var html=`<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>${filename}</title>
<style>body{font-family:Arial,sans-serif;max-width:800px;margin:40px auto;padding:20px;color:#1a1a1a;line-height:1.7}
pre{white-space:pre-wrap;font-family:inherit;font-size:14px}
h1{color:#6c3de8;border-bottom:2px solid #6c3de8;padding-bottom:8px}
@media print{body{margin:0}}</style></head>
<body><h1>${filename}</h1><pre>${escaped}</pre></body></html>`;
  var blob=new Blob([html],{type:"text/html;charset=utf-8"});
  var url=URL.createObjectURL(blob);
  var a=document.createElement("a"); a.href=url; a.download=filename+".html";
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
}

// ── Search bar ────────────────────────────────────────────────────────────────
function SearchBar({value, onChange, placeholder}) {
  return (
    <div className="relative flex-1">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
      <input value={value} onChange={function(e){onChange(e.target.value);}} placeholder={placeholder||"Rechercher..."} className="border border-gray-200 rounded-xl pl-8 pr-3 py-2 text-sm w-full focus:outline-none focus:border-purple-400 bg-white"/>
      {value&&<button onClick={function(){onChange("");}} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">✕</button>}
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  var [ready,setReady]=useState(false);
  var [page,setPage]=useState("dashboard");
  var [aos,setAos]=useState(INIT_AOS);
  var [lots,setLots]=useState(INIT_LOTS);
  var [entreprises,setEntreprises]=useState(INIT_ENTS);
  var [filterStatut,setFilterStatut]=useState("Tous");
  var [selectedAoId,setSelectedAoId]=useState(null);
  var [showAddAo,setShowAddAo]=useState(false);
  var [newAo,setNewAo]=useState({titre:"",client:"",budget:"",deadline:"",secteur:"",description:""});
  var [aiMode,setAiMode]=useState("analyse");
  var [aiAoId,setAiAoId]=useState("");
  var [aiConfigs,setAiConfigs]=useState({});
  var [aiResult,setAiResult]=useState("");
  var [aiLoading,setAiLoading]=useState(false);
  var aiCancelledRef = useRef(false);
  var [copiedResult,setCopiedResult]=useState(false);
  var [memoireTab,setMemoireTab]=useState("mandataire");
  var [prixTab,setPrixTab]=useState("dpgf");
  var [generations,setGenerations]=useState({});
  var [showGenHistory,setShowGenHistory]=useState(false);
  var [instructions,setInstructions]=useState({analyse:[],memoire:[],dc1:[],dc2:[],prix:[]});
  var [instrMode,setInstrMode]=useState("memoire");
  var [newInstr,setNewInstr]=useState({titre:"",contenu:""});
  var [showAddInstr,setShowAddInstr]=useState(false);
  var [showAddLot,setShowAddLot]=useState(false);
  var [newLot,setNewLot]=useState({nom:"",mandataireId:"",cocontractantIds:[],aoId:""});
  var [expandedLot,setExpandedLot]=useState(null);
  var [addingDocLot,setAddingDocLot]=useState(null);
  var [newDocTypeLot,setNewDocTypeLot]=useState("Kbis");
  var [showAddEnt,setShowAddEnt]=useState(false);
  var [expandedEnt,setExpandedEnt]=useState(null);
  var [editingEnt,setEditingEnt]=useState(null);
  var [newEnt,setNewEnt]=useState({nom:"",siret:"",forme:"",adresse:"",activite:"",effectif:"",ca:"",certifications:"",references:""});
  var [sidebarOpen,setSidebarOpen]=useState(true);
  var [apiKey,setApiKey]=useState("");
  var [confirm,setConfirm]=useState(null); // {msg, onConfirm}
  var [showNotif,setShowNotif]=useState(false);
  var [searchEnt,setSearchEnt]=useState("");
  var [searchLot,setSearchLot]=useState("");
  var [filterLotAo,setFilterLotAo]=useState("");
  var [showExportMenu,setShowExportMenu]=useState(false);
  var docLotRef=useRef();

  useEffect(function(){
    // ── Migration unique depuis données importées ──────────────────────────
    var MIGRATED_KEY = "magesco_migrated_v3";
    var IMPORT = {"magesco_data_v1":"{\"aos\":[{\"id\":1,\"titre\":\"Développement plateforme RH\",\"client\":\"Ministère de l'Éducation\",\"budget\":\"120 000 €\",\"deadline\":\"2026-03-15\",\"statut\":\"En cours\",\"secteur\":\"IT\",\"description\":\"Développement d'une plateforme RH pour 5000 agents.\",\"cloudUrl\":\"\"},{\"id\":2,\"titre\":\"Audit & Conseil SI\",\"client\":\"Groupe Énergies Plus\",\"budget\":\"45 000 €\",\"deadline\":\"2026-03-05\",\"statut\":\"Envoyé\",\"secteur\":\"Conseil\",\"description\":\"Mission d'audit du système d'information.\",\"cloudUrl\":\"\"},{\"titre\":\"TRAVAUX DE VÉGÉTALISATION ET D'AMÉNAGEMENT PAYSAGER DU TERRITOIRE DE LA VILLE DE FRESNES\",\"client\":\"VILLE DE FRESNES\",\"budget\":\"\",\"deadline\":\"2026-03-09\",\"secteur\":\"\",\"description\":\"Travaux de végétalisation et d'aménagement paysager du territoire communal\",\"id\":1772642867990,\"statut\":\"En cours\",\"cloudUrl\":\"\"},{\"titre\":\"Travaux de réaménagement de l'école (périscolaire et sanitaires)\",\"client\":\"Commune de Goupillières\",\"budget\":\"\",\"deadline\":\"2026-03-28\",\"secteur\":\"Plomberie\",\"description\":\"Marché public de travaux portant sur la construction d'un accueil périscolaire et réaménagement sanitaires.\",\"id\":1773329364311,\"statut\":\"En cours\",\"cloudUrl\":\"\"},{\"titre\":\"Rénovation du Gymnase Guimier\",\"client\":\"Mantes-la-Ville\",\"budget\":\"\",\"deadline\":\"\",\"secteur\":\"Plomberie – Chauffage – Ventilation\",\"description\":\"Rénovation complète du gymnase Guimier, 16 rue de la Lyre – 78711 Mantes-la-Ville.\",\"id\":1773993204787,\"statut\":\"En cours\",\"cloudUrl\":\"\"},{\"titre\":\"Services d'impression et de livraison - Magazine Calvados\",\"client\":\"CONSEIL DEPARTEMENTAL DU CALVADOS (CD 14)\",\"budget\":\"\",\"deadline\":\"\",\"secteur\":\"Presse\",\"description\":\"Conception, impression et distribution du magazine d'information du Département du Calvados\",\"id\":1774002985927,\"statut\":\"En cours\",\"cloudUrl\":\"C:\\\\Users\\\\steph\\\\OneDrive - MAGESCO\\\\Appels d'offre - Documents\\\\Artisans - Magesco\\\\Mediadatafeed\\\\Calvados\\\\Docs d'AO\"},{\"titre\":\"Conception nouvelle maquette magazine municipal Sannois mag\",\"client\":\"Ville de Sannois\",\"budget\":\"\",\"deadline\":\"\",\"secteur\":\"PRESSE\",\"description\":\"Création d'une nouvelle maquette du magazine municipal de la ville de Sannois.\",\"id\":1774602721200,\"statut\":\"En cours\",\"cloudUrl\":\"\"},{\"titre\":\"CONCEPTION - REALISATION - IMPRESSION JOURNAL MUNICIPAL\",\"client\":\"Mairie de La Salvetat-Saint-Gilles\",\"budget\":\"\",\"deadline\":\"\",\"secteur\":\"\",\"description\":\"Conception graphique, maquettage, suivi de production, impression et livraison du journal municipal.\",\"id\":1774608199550,\"statut\":\"En cours\",\"cloudUrl\":\"\"},{\"titre\":\"SERVICES WEBMARKETING GROUPE CCI NICE COTE D'AZUR\",\"client\":\"La Chambre de Commerce et d'Industrie Nice – Côte\",\"budget\":\"\",\"deadline\":\"\",\"secteur\":\"\",\"description\":\"Services webmarketing pour l'ensemble du Groupe CCI Nice Côte d'Azur et ses filiales.\",\"id\":1774817511235,\"statut\":\"En cours\",\"cloudUrl\":\"\"}],\"lots\":[{\"id\":1,\"nom\":\"Lot 1 – Développement informatique\",\"mandataireId\":1,\"cocontractantIds\":[],\"docs\":[],\"cloudUrl\":\"\",\"aoId\":\"\"},{\"id\":2,\"nom\":\"Lot 2 – Formation & Conseil\",\"mandataireId\":2,\"cocontractantIds\":[],\"docs\":[],\"cloudUrl\":\"\",\"aoId\":\"\"}],\"entreprises\":[{\"id\":1,\"nom\":\"TechSoft SAS\",\"siret\":\"123 456 789 00010\",\"forme\":\"SAS\",\"adresse\":\"12 rue de la Paix, 75001 Paris\",\"activite\":\"Développement logiciel\",\"effectif\":\"45\",\"ca\":\"3 200 000 €\",\"certifications\":\"ISO 9001\",\"references\":\"Ministère de l'Intérieur (2024)\",\"couleur\":\"#6c3de8\",\"cloudUrl\":\"\",\"docs\":{\"kbis\":null,\"assurance\":null,\"qualification\":null,\"reference1\":null,\"reference2\":null,\"reference3\":null,\"activite\":null,\"bilan\":null,\"attestation\":null,\"autres\":null}},{\"id\":2,\"nom\":\"FormaPro SARL\",\"siret\":\"987 654 321 00025\",\"forme\":\"SARL\",\"adresse\":\"8 av. Victor Hugo, 69002 Lyon\",\"activite\":\"Formation professionnelle\",\"effectif\":\"12\",\"ca\":\"980 000 €\",\"certifications\":\"Qualiopi\",\"references\":\"CHU de Lyon (2024)\",\"couleur\":\"#3b82f6\",\"cloudUrl\":\"\",\"docs\":{\"kbis\":null,\"assurance\":null,\"qualification\":null,\"reference1\":null,\"reference2\":null,\"reference3\":null,\"activite\":null,\"bilan\":null,\"attestation\":null,\"autres\":null}},{\"nom\":\"LEMAITRE ET CIE\",\"siret\":\"35402111500010\",\"forme\":\"SARL\",\"adresse\":\"13 rue des Essarts, 78490 Les Mesnuls\",\"activite\":\"\",\"effectif\":\"1 à 2\",\"ca\":\"127 000\",\"certifications\":\"\",\"references\":\"\",\"id\":1772642592622,\"couleur\":\"#10b981\",\"cloudUrl\":\"C:\\\\Users\\\\steph\\\\OneDrive - MAGESCO\\\\Appels d'offre - Documents\\\\Artisans - Magesco\\\\LEMAITRE et Cie\\\\MODELES Lemaitre et Cie\",\"docs\":{\"kbis\":{},\"assurance\":{},\"qualification\":null,\"reference1\":{},\"reference2\":null,\"reference3\":null,\"activite\":null,\"bilan\":{},\"attestation\":{},\"autres\":{}}},{\"nom\":\"KD ESPACES VERTS\",\"siret\":\"93538978300017\",\"forme\":\"SAS\",\"adresse\":\"8 résidence les brulions 78730 Ponthévrard\",\"activite\":\"\",\"effectif\":\"1 à 2\",\"ca\":\"70000\",\"certifications\":\"\",\"references\":\"\",\"id\":1772643040816,\"couleur\":\"#f59e0b\",\"cloudUrl\":\"\",\"docs\":{\"kbis\":{},\"assurance\":{},\"qualification\":null,\"reference1\":{},\"reference2\":{},\"reference3\":{},\"activite\":null,\"bilan\":null,\"attestation\":null,\"autres\":null}},{\"nom\":\"CARLOS SERVICES\",\"siret\":\"837 703 396\",\"forme\":\"SAS\",\"adresse\":\"16 Rue Des Plaisances 28700 Levainville\",\"activite\":\"Tous travaux du bâtiment de second oeuvre : électricité, plomberie, carrelage, plâtrerie...\",\"effectif\":\"1 à 2\",\"ca\":\"150000\",\"certifications\":\"\",\"references\":\"\",\"id\":1773329525435,\"couleur\":\"#ef4444\",\"cloudUrl\":\"\",\"docs\":{\"kbis\":{},\"assurance\":{},\"qualification\":{},\"reference1\":null,\"reference2\":null,\"reference3\":null,\"activite\":null,\"bilan\":null,\"attestation\":{},\"autres\":{}}},{\"nom\":\"BENET CHAUFFAGE SERVICES\",\"siret\":\"790 750 657\",\"forme\":\"SAS, société par actions simplifiée\",\"adresse\":\"9 RUE BOURGEOISE 28230 EPERNON FRANCE\",\"activite\":\"Plomberie, chauffage, installation sanitaire.\",\"effectif\":\"\",\"ca\":\"\",\"certifications\":\"\",\"references\":\"\",\"id\":1773993342293,\"couleur\":\"#8b5cf6\",\"cloudUrl\":\"\",\"docs\":{\"kbis\":{},\"assurance\":{},\"qualification\":{},\"reference1\":null,\"reference2\":null,\"reference3\":null,\"activite\":{},\"bilan\":null,\"attestation\":{},\"autres\":null}},{\"nom\":\"MEDIA DATA FEED\",\"siret\":\"87889611700016\",\"forme\":\"SAS\",\"adresse\":\"19 RUE DE L'ALEU 78730 SAINT-ARNOULT-EN-YVELINES\",\"activite\":\"Edition de solutions digitales et accompagnement en transformation numérique.\",\"effectif\":\"4\",\"ca\":\"2500000\",\"certifications\":\"\",\"references\":\"Stéphane Desclouds – Directeur Digital éditorial & expert en transformation des médias\",\"id\":1774000174891,\"couleur\":\"#06b6d4\",\"cloudUrl\":\"\",\"docs\":{\"kbis\":{},\"assurance\":{},\"qualification\":{},\"reference1\":{},\"reference2\":{},\"reference3\":{},\"activite\":{},\"bilan\":null,\"attestation\":null,\"autres\":{}}}]}"};

    Promise.all([loadKey(STORAGE_KEY),loadKey(AI_CONFIG_KEY),loadKey(GENERATIONS_KEY),loadKey(INSTRUCTIONS_KEY),loadKey(MIGRATED_KEY)]).then(async function(res){
      var saved=res[0],savedCfg=res[1],savedGen=res[2],savedInstr=res[3],migrated=res[4];

      // Si pas encore migré ET pas de vraies données utilisateur, on importe
      if (!migrated) {
        try {
          var importData = JSON.parse(IMPORT["magesco_data_v1"]);
          await saveKey(STORAGE_KEY, importData);
          saved = importData;

          // Import configs IA
          var cfgImport = {"1773329364311":{"analyse":{"prompt":"Rédige un mémoire technique complet pour un appel d'offres d'entretien d'espaces verts ou paysagisme destiné à une collectivité publique.","docMetas":[]},"memoire":{"globalPrompt":"Rédaction d'un mémoire technique pour appel d'offres\nLorsque je demande la rédaction d'un mémoire technique pour un appel d'offres, tu dois appliquer strictement les règles suivantes.\n1. Format général\nLe mémoire doit :\nêtre rédigé directement dans le chat\nêtre structuré en sections claires\nêtre immédiatement copiable dans Word\nêtre rédigé comme un document professionnel final\nêtre détaillé, argumenté et crédible","mandataire":{"entId":"1772642592622","prompt":"","docMetas":[]},"coco1":{"entId":"1773329525435","prompt":"","docMetas":[]},"coco2":{"entId":"","prompt":"","docMetas":[]}},"dc1":{"entIds":[],"prompt":"","docMetas":[]},"dc2":{"entIds":[],"prompt":"","docMetas":[]},"prix":{"dpgf":{"prompt":"","docMetas":[]},"bpu":{"prompt":"","docMetas":[]},"dqe":{"prompt":"","docMetas":[]},"gantt":{"prompt":"","docMetas":[]}}},"1772642867990":{"analyse":{"prompt":"","docMetas":[]},"memoire":{"globalPrompt":"Rédige un mémoire technique complet pour un appel d'offres d'entretien d'espaces verts ou paysagisme destiné à une collectivité publique.","mandataire":{"entId":"","prompt":"","docMetas":[]},"coco1":{"entId":"","prompt":"","docMetas":[]},"coco2":{"entId":"","prompt":"","docMetas":[]}},"dc1":{"entIds":[],"prompt":"","docMetas":[]},"dc2":{"entIds":[],"prompt":"","docMetas":[]},"prix":{"dpgf":{"prompt":"","docMetas":[]},"bpu":{"prompt":"","docMetas":[]},"dqe":{"prompt":"","docMetas":[]},"gantt":{"prompt":"","docMetas":[]}}},"1773993204787":{"analyse":{"prompt":"","docMetas":[]},"memoire":{"globalPrompt":"Rédaction d'un mémoire technique pour appel d'offres CVC / plomberie / chauffage.\nGroupement Lemaitre & Cie (mandataire) – Carlos Services – Benet Chauffage Services.","mandataire":{"entId":"1772642592622","prompt":"","docMetas":[]},"coco1":{"entId":"1773329525435","prompt":"","docMetas":[]},"coco2":{"entId":"1773993342293","prompt":"Lot 5 CVC / plomberie → Lemaitre & Cie / Benet / Carlos","docMetas":[]}},"dc1":{"entIds":[],"prompt":"","docMetas":[]},"dc2":{"entIds":[],"prompt":"","docMetas":[]},"prix":{"dpgf":{"prompt":"","docMetas":[]},"bpu":{"prompt":"","docMetas":[]},"dqe":{"prompt":"","docMetas":[]},"gantt":{"prompt":"","docMetas":[]}}},"1774002985927":{"analyse":{"prompt":"","docMetas":[]},"memoire":{"globalPrompt":"NOTE DE SYNTHÈSE DE L'OFFRE\nMedia Data Feed intervient en véritable chef d'orchestre éditorial, en assurant l'ensemble des étapes, depuis la définition de la ligne éditoriale jusqu'à la livraison finale.","mandataire":{"entId":"1774000174891","prompt":"","docMetas":[]},"coco1":{"entId":"","prompt":"","docMetas":[]},"coco2":{"entId":"","prompt":"","docMetas":[]}},"dc1":{"entIds":[],"prompt":"","docMetas":[]},"dc2":{"entIds":[],"prompt":"","docMetas":[]},"prix":{"dpgf":{"prompt":"","docMetas":[]},"bpu":{"prompt":"","docMetas":[]},"dqe":{"prompt":"","docMetas":[]},"gantt":{"prompt":"","docMetas":[]}}},"1774602721200":{"analyse":{"prompt":"","docMetas":[]},"memoire":{"globalPrompt":"NOTE DE SYNTHÈSE DE L'OFFRE\nMedia Data Feed – magazine municipal Sannois Mag.","mandataire":{"entId":"","prompt":"","docMetas":[]},"coco1":{"entId":"","prompt":"","docMetas":[]},"coco2":{"entId":"","prompt":"","docMetas":[]}},"dc1":{"entIds":[],"prompt":"","docMetas":[]},"dc2":{"entIds":[],"prompt":"","docMetas":[]},"prix":{"dpgf":{"prompt":"","docMetas":[]},"bpu":{"prompt":"","docMetas":[]},"dqe":{"prompt":"","docMetas":[]},"gantt":{"prompt":"","docMetas":[]}}},"1774608199550":{"analyse":{"prompt":"","docMetas":[]},"memoire":{"globalPrompt":"","mandataire":{"entId":"1774000174891","prompt":"","docMetas":[]},"coco1":{"entId":"","prompt":"","docMetas":[]},"coco2":{"entId":"","prompt":"","docMetas":[]}},"dc1":{"entIds":[],"prompt":"","docMetas":[]},"dc2":{"entIds":[],"prompt":"","docMetas":[]},"prix":{"dpgf":{"prompt":"","docMetas":[]},"bpu":{"prompt":"","docMetas":[]},"dqe":{"prompt":"","docMetas":[]},"gantt":{"prompt":"","docMetas":[]}}},"1774817511235":{"analyse":{"prompt":"","docMetas":[]},"memoire":{"globalPrompt":"","mandataire":{"entId":"","prompt":"","docMetas":[]},"coco1":{"entId":"","prompt":"","docMetas":[]},"coco2":{"entId":"","prompt":"","docMetas":[]}},"dc1":{"entIds":[],"prompt":"","docMetas":[]},"dc2":{"entIds":[],"prompt":"","docMetas":[]},"prix":{"dpgf":{"prompt":"Agis comme un expert en réponse aux marchés publics, en chiffrage BPU et en cohérence mémoire technique / offre financière.","docMetas":[]},"bpu":{"prompt":"","docMetas":[]},"dqe":{"prompt":"","docMetas":[]},"gantt":{"prompt":"","docMetas":[]}}}};
          await saveKey(AI_CONFIG_KEY, cfgImport);
          savedCfg = cfgImport;

          // Import instructions
          var instrImport = {"analyse":[],"memoire":[{"id":1773340936075,"titre":"Prompt mémoire std Plomberie-Maçonnerie","contenu":"Rédaction d'un mémoire technique pour appel d'offres\nLorsque je demande la rédaction d'un mémoire technique pour un appel d'offres, tu dois appliquer strictement les règles suivantes.\n1. Format général : rédigé directement dans le chat, structuré, copiable dans Word, professionnel, détaillé.\n2. Style rédactionnel : professionnel, fluide, pédagogique, crédible pour un jury d'acheteurs publics.\n3. Adapter à la grille de notation de l'acheteur en priorité.\nJamais de mentions RC, CCTP, CCAP, DCE dans le mémoire."},{"id":1773414049225,"titre":"Mémoire technique AO Espaces Verts / Paysagisme","contenu":"Rédige un mémoire technique complet pour un appel d'offres d'entretien d'espaces verts ou paysagisme destiné à une collectivité publique.\nStyle narratif, professionnel, crédible, orienté terrain.\nStructure : 1.Présentation entreprise 2.Compréhension enjeux 3.Organisation 4.Méthodologie 5.Moyens humains 6.Moyens matériels 7.Gestion environnementale 8.Planning 9.Contrôle qualité 10.Références.\nJamais de mentions RC, CCTP, CCAP, DCE."},{"id":1773415102198,"titre":"Groupement Lemaitre & Cie – Carlos Services","contenu":"Rédige un mémoire technique CVC / plomberie / chauffage pour collectivité publique.\nGroupement : Lemaitre & Cie (mandataire, Les Mesnuls, Yvelines) + Carlos Services (Levainville, Eure-et-Loir, RGE QualiPAC).\nChef de chantier : Joël Lemaitre. Responsables Carlos : Carlos Murca & Maxime Murca.\nStyle narratif, professionnel, sans bullet points systématiques.\nJamais de mentions RC, CCTP, CCAP, DCE."},{"id":1774001290745,"titre":"MÉMOIRE TECHNIQUE AO Media Data Feed","contenu":"Rédiger un mémoire technique complet pour appel d'offres public digital (site web, multisite, portail, UX, CRM).\nPositionner Media Data Feed : expert WordPress multisite, conformité RGAA/RGESN, UX centrée utilisateur, hébergement souverain.\nÉquipe : Véronique Martin (contenus/marque), Laurianne Samozino (SEA), Stéphane Desclouds (SEO).\nJamais de mentions RC, CCTP, CCAP, DCE."},{"id":1774002073211,"titre":"MÉMOIRE TECHNIQUE MAG Media Data Feed","contenu":"NOTE DE SYNTHÈSE : Media Data Feed, chef d'orchestre éditorial, prise en charge globale de la conception, production et diffusion du magazine.\nObjectif : qualité éditoriale + rigueur opérationnelle + respect des délais.\nÉquipe : Véronique Martin, Laurianne Samozino, Stéphane Desclouds.\nApproche magazine augmenté : déclinaisons web, réseaux sociaux, SEO.\nJamais de mentions RC, CCTP, CCAP, DCE."}],"dc1":[],"dc2":[],"prix":[]};
          await saveKey(INSTRUCTIONS_KEY, instrImport);
          savedInstr = instrImport;

          await saveKey(MIGRATED_KEY, true);
        } catch(e) { console.error("Import error:", e); }
      }

      if (saved) {
        if (saved.aos) setAos(saved.aos);
        if (saved.lots) setLots(saved.lots.map(function(l){return Object.assign({aoId:""},l);}));
        if (saved.entreprises) setEntreprises(saved.entreprises.map(function(e){return Object.assign({},e,{docs:Object.assign({kbis:null,assurance:null,qualification:null,reference1:null,reference2:null,reference3:null,activite:null,bilan:null,attestation:null,autres:null},e.docs||{})});}));
      }
      if (savedCfg) setAiConfigs(savedCfg);
      if (savedGen) setGenerations(savedGen);
      if (savedInstr) setInstructions(savedInstr);
      setAiLoading(false); setAiResult(""); setReady(true);
    });
  },[]);

  useEffect(function(){if(!ready)return;saveKey(STORAGE_KEY,{aos,lots,entreprises});},[aos,lots,entreprises,ready]);
  useEffect(function(){if(!ready)return;saveKey(AI_CONFIG_KEY,aiConfigs);},[aiConfigs,ready]);
  useEffect(function(){if(!ready)return;saveKey(GENERATIONS_KEY,generations);},[generations,ready]);
  useEffect(function(){if(!ready)return;saveKey(INSTRUCTIONS_KEY,instructions);},[instructions,ready]);

  if (!ready) return <div className="flex h-screen items-center justify-center bg-gray-50"><div className="text-center"><div className="text-4xl mb-3">🏆</div><div className="text-gray-600 font-medium">Chargement...</div></div></div>;

  function askConfirm(msg, cb) { setConfirm({msg,onConfirm:cb}); }

  // ── Config IA ──────────────────────────────────────────────────────────────
  function getConfig() { return Object.assign({},defaultAiConfig(),aiConfigs[aiAoId]||{}); }
  function setConfig(upd) { setAiConfigs(function(prev){ var cur=Object.assign({},defaultAiConfig(),prev[aiAoId]||{}); var next=typeof upd==="function"?upd(cur):upd; return Object.assign({},prev,{[aiAoId]:next}); }); }
  function setAnalyseField(f,v){ setConfig(function(c){return Object.assign({},c,{analyse:Object.assign({},c.analyse,{[f]:v})});}); }
  function setMemoireGlobal(v){ setConfig(function(c){return Object.assign({},c,{memoire:Object.assign({},c.memoire,{globalPrompt:v})});}); }
  function setMemoireTabField(tab,f,v){ setConfig(function(c){return Object.assign({},c,{memoire:Object.assign({},c.memoire,{[tab]:Object.assign({},c.memoire[tab],{[f]:v})})});}); }
  function setDcField(mode,f,v){ setConfig(function(c){return Object.assign({},c,{[mode]:Object.assign({},c[mode],{[f]:v})});}); }
  function setPrixField(tab,f,v){ setConfig(function(c){return Object.assign({},c,{prix:Object.assign({},c.prix,{[tab]:Object.assign({},c.prix[tab],{[f]:v})})});}); }
  var cfg=getConfig();

  // ── Helpers ────────────────────────────────────────────────────────────────
  function buildEntCtx(entId) {
    var e=entreprises.find(function(x){return x.id===Number(entId);});
    if (!e) return "";
    return "\n"+e.nom+" | "+e.forme+" | SIRET: "+e.siret+"\nActivite: "+e.activite+" | Effectif: "+e.effectif+" | CA: "+e.ca+"\nCertifications: "+e.certifications+"\nReferences: "+e.references;
  }
  function saveGeneration(mode,text) {
    var entry={id:Date.now(),date:new Date().toISOString(),mode,text};
    setGenerations(function(prev){ var aoGens=Object.assign({},prev[aiAoId]||{}); var mg=(aoGens[mode]||[]).slice(); mg.unshift(entry); aoGens[mode]=mg.slice(0,10); return Object.assign({},prev,{[aiAoId]:aoGens}); });
  }

  // ── CRUD ───────────────────────────────────────────────────────────────────
  function deleteAo(id) { askConfirm("Supprimer cet appel d'offres ?",function(){ setAos(function(prev){return prev.filter(function(a){return a.id!==id;});}); }); }
  function duplicateAo(a) {
    var copy=Object.assign({},a,{id:Date.now(),titre:a.titre+" (copie)",statut:"En cours"});
    setAos(function(prev){return prev.concat([copy]);});
  }
  function deleteLot(id) { askConfirm("Supprimer ce lot ?",function(){ setLots(function(prev){return prev.filter(function(l){return l.id!==id;});}); }); }
  function deleteEnt(id) { askConfirm("Supprimer cette entreprise ? Ses liens dans les lots et mémoires seront conservés.",function(){ setEntreprises(function(prev){return prev.filter(function(e){return e.id!==id;});}); }); }
  function updateStatut(id,s){ setAos(function(prev){return prev.map(function(a){return a.id===id?Object.assign({},a,{statut:s}):a;});}); }
  function addAo() { if (!newAo.titre||!newAo.client) return; setAos(function(prev){return prev.concat([Object.assign({},newAo,{id:Date.now(),statut:"En cours",cloudUrl:""})]);}) ; setNewAo({titre:"",client:"",budget:"",deadline:"",secteur:"",description:""}); setShowAddAo(false); }
  function setAoCloud(id,url){ setAos(function(prev){return prev.map(function(a){return a.id===id?Object.assign({},a,{cloudUrl:url}):a;});}); }
  function setLotCloud(id,url){ setLots(function(prev){return prev.map(function(l){return l.id===id?Object.assign({},l,{cloudUrl:url}):l;});}); }
  function setEntCloud(id,url){ setEntreprises(function(prev){return prev.map(function(e){return e.id===id?Object.assign({},e,{cloudUrl:url}):e;});}); }
  function updateEntDoc(entId,k,f){ setEntreprises(function(prev){return prev.map(function(e){return e.id!==entId?e:Object.assign({},e,{docs:Object.assign({},e.docs,{[k]:f})});});}); }
  function addLot() { if (!newLot.nom) return; setLots(function(prev){return prev.concat([{id:Date.now(),nom:newLot.nom,mandataireId:newLot.mandataireId?Number(newLot.mandataireId):null,cocontractantIds:newLot.cocontractantIds.map(Number),docs:[],cloudUrl:"",aoId:newLot.aoId}]);}) ; setNewLot({nom:"",mandataireId:"",cocontractantIds:[],aoId:""}); setShowAddLot(false); }
  function toggleCoco(id) { var n=Number(id); setNewLot(function(prev){return Object.assign({},prev,{cocontractantIds:prev.cocontractantIds.includes(n)?prev.cocontractantIds.filter(function(x){return x!==n;}):[...prev.cocontractantIds,n]});}); }
  function handleLotDocUpload(e,lotId) { var f=e.target.files[0]; if(!f) return; var doc={id:Date.now(),nom:f.name,type:newDocTypeLot,date:new Date().toISOString().slice(0,10),size:(f.size/1024).toFixed(1)+" Ko"}; setLots(function(prev){return prev.map(function(l){return l.id===lotId?Object.assign({},l,{docs:l.docs.concat([doc])}):l;});}); setAddingDocLot(null); }
  function removeDocLot(lotId,docId){ setLots(function(prev){return prev.map(function(l){return l.id===lotId?Object.assign({},l,{docs:l.docs.filter(function(d){return d.id!==docId;})}):l;});}); }
  function setLotAo(lotId,aoId){ setLots(function(prev){return prev.map(function(l){return l.id===lotId?Object.assign({},l,{aoId:aoId}):l;});}); }
  function addEnt() { if (!newEnt.nom) return; setEntreprises(function(prev){return prev.concat([Object.assign({},newEnt,{id:Date.now(),couleur:ENT_COLORS[prev.length%ENT_COLORS.length],cloudUrl:"",docs:{kbis:null,assurance:null,qualification:null,reference1:null,reference2:null,reference3:null,activite:null,bilan:null,attestation:null,autres:null}})]);}) ; setNewEnt({nom:"",siret:"",forme:"",adresse:"",activite:"",effectif:"",ca:"",certifications:"",references:""}); setShowAddEnt(false); }
  function saveEnt(){ setEntreprises(function(prev){return prev.map(function(e){return e.id===editingEnt.id?editingEnt:e;});}); setEditingEnt(null); }

  function addInstruction() { if (!newInstr.titre||!newInstr.contenu) return; var entry={id:Date.now(),titre:newInstr.titre,contenu:newInstr.contenu}; setInstructions(function(prev){var list=(prev[instrMode]||[]).slice();list.push(entry);return Object.assign({},prev,{[instrMode]:list});}); setNewInstr({titre:"",contenu:""}); setShowAddInstr(false); }
  function deleteInstruction(mode,id){ setInstructions(function(prev){return Object.assign({},prev,{[mode]:(prev[mode]||[]).filter(function(i){return i.id!==id;})});}); }
  function applyInstruction(instr) {
    if (aiMode==="analyse") setAnalyseField("prompt",(cfg.analyse.prompt?(cfg.analyse.prompt+"\n\n"):"")+instr.contenu);
    else if (aiMode==="memoire") setMemoireGlobal((cfg.memoire.globalPrompt?(cfg.memoire.globalPrompt+"\n\n"):"")+instr.contenu);
    else if (aiMode==="dc1"||aiMode==="dc2") setDcField(aiMode,"prompt",(cfg[aiMode].prompt?(cfg[aiMode].prompt+"\n\n"):"")+instr.contenu);
    else if (aiMode==="prix") setPrixField(prixTab,"prompt",(cfg.prix[prixTab].prompt?(cfg.prix[prixTab].prompt+"\n\n"):"")+instr.contenu);
  }

  // ── Generate AI ────────────────────────────────────────────────────────────
  function buildPromptText() {
    var ao=aos.find(function(a){return a.id===Number(aiAoId);});
    var aoInfo=ao?("AO: "+ao.titre+" | Client: "+ao.client+"\n"+ao.description):"";
    if (aiMode==="analyse") return "Analyse cet appel d'offres.\n"+aoInfo+"\n1.RESUME 2.EXIGENCES 3.CRITERES 4.VIGILANCE 5.RECOMMANDATIONS"+(cfg.analyse.prompt?"\n\n"+cfg.analyse.prompt:"");
    if (aiMode==="memoire") {
      var md=cfg.memoire;
      var lines=["Tu es expert en marches publics. Redige un memoire technique professionnel en style narratif.",aoInfo];
      [["mandataire","MANDATAIRE"],["coco1","CO-CONTRACTANT 1"],["coco2","CO-CONTRACTANT 2"]].forEach(function(t){
        if (md[t[0]]&&(md[t[0]].entId||md[t[0]].prompt)){lines.push("=== "+t[1]+" ==="+buildEntCtx(md[t[0]].entId));if(md[t[0]].prompt)lines.push(md[t[0]].prompt);}
      });
      lines.push("STRUCTURE: 1.Presentation 2.Comprehension 3.Methodologie 4.Moyens humains 5.Moyens materiels 6.Planning 7.Qualite 8.Risques");
      if (md.globalPrompt) lines.push(md.globalPrompt);
      return lines.join("\n");
    }
    if (aiMode==="prix"){var pp={dpgf:"Genere une DPGF complete en tableau.",bpu:"Genere un BPU complet.",dqe:"Genere une DQE complete.",gantt:"Genere un planning Gantt en tableau markdown."};return (pp[prixTab]||pp.dpgf)+(cfg.prix[prixTab].prompt?"\n\n"+cfg.prix[prixTab].prompt:"");}
    if (aiMode==="dc1") return "Genere un DC1 officiel francais."+(cfg.dc1.prompt?"\n\n"+cfg.dc1.prompt:"")+(cfg.dc1.entIds||[]).map(buildEntCtx).join("");
    if (aiMode==="dc2") return "Genere un DC2 officiel francais."+(cfg.dc2.prompt?"\n\n"+cfg.dc2.prompt:"")+(cfg.dc2.entIds||[]).map(buildEntCtx).join("");
    return "";
  }

  async function callAPI(contentParts) {
    var textParts = contentParts.map(function(p){
      if (p.type==="text") return p.text;
      if (p.type==="document") return "[Document PDF joint]";
      return "";
    }).filter(Boolean).join("\n\n");
    var maxTokens = aiMode==="memoire" ? 4096 : 2048;

    // ── Essai 1 : route Vercel /api/generate (app déployée) ──────────────
    try {
      var ctrl = new AbortController();
      var timer = setTimeout(function(){ ctrl.abort(); }, 60000);
      var resp = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: textParts, mode: aiMode, maxTokens: maxTokens }),
        signal: ctrl.signal
      });
      clearTimeout(timer);
      if (resp.ok) {
        var data = await resp.json();
        if (data.result) return data.result;
        throw new Error(data.error || "Réponse vide");
      }
    } catch(e1) {
      // /api/generate non disponible (mode artifact) → essai 2
    }

    // ── Essai 2 : appel direct avec clé API saisie ────────────────────────
    if (apiKey && apiKey.startsWith("sk-ant-")) {
      var ctrl2 = new AbortController();
      var timer2 = setTimeout(function(){ ctrl2.abort(); }, 60000);
      var resp2 = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-dangerous-direct-browser-access": "true",
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: maxTokens,
          messages: [{ role: "user", content: contentParts }]
        }),
        signal: ctrl2.signal
      });
      clearTimeout(timer2);
      var data2 = await resp2.json();
      if (data2.content && data2.content[0]) return data2.content[0].text;
      throw new Error("Erreur API ("+resp2.status+"): "+(data2.error&&data2.error.message||"inconnue"));
    }

    throw new Error("Ni /api/generate ni clé API disponibles");
  }

  async function generateAI() {
    aiCancelledRef.current = false;
    setAiLoading(true); setAiResult("Préparation..."); setCopiedResult(false);
    var promptText = buildPromptText();

    var contentParts=[];
    var docMetas=aiMode==="analyse"?(cfg.analyse.docMetas||[]):aiMode==="memoire"?[].concat(cfg.memoire.mandataire.docMetas||[],cfg.memoire.coco1.docMetas||[],cfg.memoire.coco2.docMetas||[]):aiMode==="prix"?(cfg.prix[prixTab].docMetas||[]):(cfg[aiMode]&&cfg[aiMode].docMetas||[]);
    for (var j=0;j<Math.min(docMetas.length,10);j++){
      if (aiCancelledRef.current) { setAiResult("Annulé."); setAiLoading(false); return; }
      var meta=docMetas[j]; var file=getFile(meta.id); if(!file) continue;
      try {
        if(file.type==="application/pdf"){var b64=await readFileAsBase64(file);contentParts.push({type:"document",source:{type:"base64",media_type:"application/pdf",data:b64}});}
        else{var txt=await readFileAsText(file);contentParts.push({type:"text",text:"--- "+meta.name+" ---\n"+txt.slice(0,6000)});}
      } catch(fe){}
    }
    contentParts.push({type:"text",text:promptText});

    var MAX_ATTEMPTS = 3;
    var lastErr = "";
    for (var attempt=1; attempt<=MAX_ATTEMPTS; attempt++) {
      if (aiCancelledRef.current) { setAiResult("Annulé."); setAiLoading(false); return; }
      setAiResult("Tentative "+attempt+"/"+MAX_ATTEMPTS+" — appel API en cours...");
      try {
        var resp = await callAPI(contentParts, attempt);
        if (aiCancelledRef.current) { setAiResult("Annulé."); setAiLoading(false); return; }
        setAiResult("Réponse HTTP "+resp.status+"...");
        var data = await resp.json();
        if (data.content&&data.content[0]&&data.content[0].text) {
          var result=data.content[0].text;
          setAiResult(result);
          saveGeneration(aiMode==="prix"?prixTab:aiMode, result);
          setAiLoading(false);
          return;
        } else {
          lastErr = "Erreur API ("+resp.status+"): "+JSON.stringify(data).slice(0,200);
        }
      } catch(err) {
        if (aiCancelledRef.current) { setAiResult("Annulé."); setAiLoading(false); return; }
        lastErr = err.name==="AbortError" ? "Timeout 120s" : err.message;
        if (attempt < MAX_ATTEMPTS) {
          setAiResult("Échec tentative "+attempt+" ("+lastErr+") — nouvel essai dans 3s...");
          await new Promise(function(r){setTimeout(r,3000);});
        }
      }
    }

    if (aiCancelledRef.current) { setAiResult("Annulé."); setAiLoading(false); return; }
    setAiResult(
      "⚠️ L'API n'est pas accessible depuis cet environnement ("+lastErr+").\n\n" +
      "━━━ PROMPT PRÊT À COLLER ━━━\n" +
      "Copiez ce prompt et collez-le dans une nouvelle conversation Claude :\n\n" +
      promptText
    );
    setAiLoading(false);
  }

  // ── Stats ──────────────────────────────────────────────────────────────────
  var stats={total:aos.length,enCours:aos.filter(function(a){return a.statut==="En cours";}).length,envoyes:aos.filter(function(a){return a.statut==="Envoyé";}).length,tauxSucces:aos.length?Math.round(aos.filter(function(a){return a.statut==="Gagné";}).length/aos.length*100):0};
  var now=new Date();
  var soon=aos.filter(function(a){var d=(new Date(a.deadline)-now)/86400000;return d>=0&&d<=7;});
  var soon14=aos.filter(function(a){var d=(new Date(a.deadline)-now)/86400000;return d>=0&&d<=14;});

  var aoGens=generations[aiAoId]||{};
  var currentGenKey=aiMode==="prix"?prixTab:aiMode;
  var currentHistory=aoGens[currentGenKey]||[];
  var inp="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-purple-400 w-full bg-white";
  var navItems=[
    {id:"dashboard",label:"Dashboard",icon:"📊"},
    {id:"aos",label:"Appels d'offres",icon:"📁"},
    {id:"redaction",label:"Rédaction IA",icon:"✍️"},
    {id:"suivi",label:"Suivi Kanban",icon:"📌"},
    {id:"lots",label:"Dossiers Lots",icon:"📦"},
    {id:"entreprises",label:"Références",icon:"🏗️"},
    {id:"instructions",label:"Instructions",icon:"📚"},
  ];

  // ── Filtered lists ─────────────────────────────────────────────────────────
  var filteredEnts=entreprises.filter(function(e){ var q=searchEnt.toLowerCase(); return !q||e.nom.toLowerCase().includes(q)||e.activite.toLowerCase().includes(q)||(e.siret&&e.siret.includes(q)); });
  var filteredLots=lots.filter(function(l){
    var q=searchLot.toLowerCase();
    var matchQ=!q||l.nom.toLowerCase().includes(q);
    var matchAo=!filterLotAo||String(l.aoId)===filterLotAo;
    return matchQ&&matchAo;
  });

  var currentAoTitle=aiAoId?(aos.find(function(a){return a.id===Number(aiAoId);})||{}).titre||"":"";

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{fontFamily:"system-ui,sans-serif"}}>

      {/* Confirm Dialog */}
      {confirm&&<ConfirmDialog msg={confirm.msg} onConfirm={function(){confirm.onConfirm();setConfirm(null);}} onCancel={function(){setConfirm(null);}}/>}

      {/* SIDEBAR */}
      <div className={"flex-shrink-0 flex flex-col transition-all duration-200 "+(sidebarOpen?"w-52":"w-14")} style={{background:GRADIENT}}>
        <div className="p-3 pb-2 flex items-center justify-between">
          {sidebarOpen&&<div><div className="text-white font-bold text-sm">🏆 MagescoPro</div><div className="text-blue-200 text-xs mt-0.5">Gestion AO</div></div>}
          <button onClick={function(){setSidebarOpen(!sidebarOpen);}} className="text-white/70 hover:text-white text-lg ml-auto">{sidebarOpen?"◀":"▶"}</button>
        </div>
        <nav className="flex-1 px-2 py-1 space-y-0.5">
          {navItems.map(function(n){
            return (
              <button key={n.id} onClick={function(){setPage(n.id);}} className={"w-full text-left px-2 py-2 rounded-xl text-xs font-medium flex items-center gap-2 transition-all "+(page===n.id?"bg-white text-purple-700 shadow":"text-white hover:bg-white/20")} title={!sidebarOpen?n.label:""}>
                <span className="text-base flex-shrink-0">{n.icon}</span>
                {sidebarOpen&&<span>{n.label}</span>}
              </button>
            );
          })}
        </nav>
        {sidebarOpen&&(
          <div className="p-3 border-t border-white/20">
            <div className="text-xs text-blue-200 mb-1 font-semibold">🔑 Clé API</div>
            <input
              type="password"
              value={apiKey}
              onChange={function(e){setApiKey(e.target.value.trim());}}
              placeholder="sk-ant-..."
              className="w-full text-xs px-2 py-1.5 rounded-lg bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-white/60"
            />
            {apiKey&&apiKey.startsWith("sk-ant-")
              ? <div className="text-xs text-green-300 mt-1">✅ Clé valide</div>
              : apiKey
              ? <div className="text-xs text-orange-300 mt-1">⚠️ Format invalide</div>
              : <div className="text-xs text-blue-300 mt-1"><a href="https://console.anthropic.com" target="_blank" rel="noreferrer" className="underline">Obtenir une clé →</a></div>
            }
          </div>
        )}
        {sidebarOpen && <div className="p-3 pt-1 text-xs text-blue-200">{new Date().toLocaleDateString("fr-FR")}</div>}
      </div>

      {/* MAIN */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b px-5 py-3 flex items-center justify-between shadow-sm">
          <h1 className="text-base font-bold text-gray-800">{(navItems.find(function(n){return n.id===page;})||{}).label}</h1>
          <div className="flex items-center gap-3">
            {/* Notif bell */}
            <div className="relative">
              <button onClick={function(){setShowNotif(!showNotif);}} className={"relative text-xl p-1 rounded-xl transition-colors "+(showNotif?"bg-orange-100":"hover:bg-gray-100")}>
                🔔
                {soon14.length>0&&<span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">{soon14.length}</span>}
              </button>
              {showNotif&&<NotifPanel aos={aos} onClose={function(){setShowNotif(false);}} onNavigate={function(id){setSelectedAoId(id);setPage("aos");}}/>}
            </div>
            {soon.length>0&&<span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">⚠️ {soon.length} échéance(s)</span>}
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{background:GRADIENT}}>M</div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">

          {/* ── DASHBOARD ───────────────────────────────────────────────── */}
          {page==="dashboard"&&(
            <div>
              <div className="grid grid-cols-4 gap-3 mb-5">
                {[{label:"Total AO",val:stats.total,color:"#6c3de8",bg:"#f3eeff",icon:"📁"},{label:"En cours",val:stats.enCours,color:"#3b82f6",bg:"#eff6ff",icon:"🔄"},{label:"Envoyés",val:stats.envoyes,color:"#f59e0b",bg:"#fffbeb",icon:"📤"},{label:"Taux succès",val:stats.tauxSucces+"%",color:"#10b981",bg:"#ecfdf5",icon:"🏆"}].map(function(c){
                  return <div key={c.label} className="rounded-2xl p-4 shadow-sm flex items-center gap-3" style={{background:c.bg}}><div className="text-3xl">{c.icon}</div><div><div className="text-2xl font-bold" style={{color:c.color}}>{c.val}</div><div className="text-xs text-gray-500">{c.label}</div></div></div>;
                })}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <h2 className="font-semibold text-gray-700 mb-3 text-sm">📋 Derniers AO</h2>
                  {aos.slice(0,5).map(function(a){
                    return <div key={a.id} className="flex items-center justify-between p-2 rounded-xl bg-gray-50 mb-1.5 border border-gray-100 cursor-pointer hover:border-purple-200" onClick={function(){setPage("aos");setSelectedAoId(a.id);}}><div className="min-w-0 flex-1 mr-2"><div className="text-sm font-medium truncate">{a.titre}</div><div className="text-xs text-gray-400">{a.client}</div></div><span className={"text-xs font-semibold px-2 py-0.5 rounded-full "+STATUT_COLORS[a.statut]}>{a.statut}</span></div>;
                  })}
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <h2 className="font-semibold text-gray-700 mb-2 text-sm">📊 Statuts</h2>
                  {STATUTS.map(function(s){
                    var pct=aos.length?Math.round(aos.filter(function(a){return a.statut===s;}).length/aos.length*100):0;
                    var col=s==="Gagné"?"#10b981":s==="Perdu"?"#ef4444":s==="Envoyé"?"#f59e0b":"#6c3de8";
                    return <div key={s} className="mb-2"><div className="flex justify-between text-xs mb-0.5"><span>{s}</span><span style={{color:col}} className="font-semibold">{pct}%</span></div><div className="h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 rounded-full" style={{width:pct+"%",background:col}}></div></div></div>;
                  })}
                </div>
              </div>
              {soon.length>0&&(
                <div className="mt-4 bg-orange-50 border border-orange-200 rounded-2xl p-4">
                  <h2 className="font-semibold text-orange-700 mb-2 text-sm">⚠️ Échéances &lt;7j</h2>
                  {soon.map(function(a){return <div key={a.id} className="flex justify-between text-sm py-0.5"><span className="font-medium">{a.titre}</span><span className="text-orange-600 font-semibold">{new Date(a.deadline).toLocaleDateString("fr-FR")}</span></div>;})}
                </div>
              )}
            </div>
          )}

          {/* ── APPELS D'OFFRES ──────────────────────────────────────────── */}
          {page==="aos"&&(
            <div>
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <div className="flex gap-2 flex-wrap">
                  {["Tous"].concat(STATUTS).map(function(s){
                    return <button key={s} onClick={function(){setFilterStatut(s);}} className={"px-3 py-1 rounded-full text-sm font-medium border transition-all "+(filterStatut===s?"text-white border-transparent":"bg-white text-gray-600 border-gray-200")} style={filterStatut===s?{background:GRADIENT}:{}}>{s}</button>;
                  })}
                </div>
                <button onClick={function(){setShowAddAo(true);}} className="px-4 py-2 rounded-xl text-white text-sm font-semibold shadow" style={{background:GRADIENT}}>+ Nouvel AO</button>
              </div>
              {showAddAo&&(
                <div className="bg-white rounded-2xl shadow p-4 mb-4 border border-purple-100">
                  <h3 className="font-bold text-gray-700 mb-3 text-sm">Ajouter un AO</h3>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {[["titre","Titre *"],["client","Client *"],["budget","Budget"],["secteur","Secteur"]].map(function(pair){return <input key={pair[0]} placeholder={pair[1]} value={newAo[pair[0]]} onChange={function(e){setNewAo(Object.assign({},newAo,{[pair[0]]:e.target.value}));}} className={inp}/>;})}<input type="date" value={newAo.deadline} onChange={function(e){setNewAo(Object.assign({},newAo,{deadline:e.target.value}));}} className={inp}/>
                  </div>
                  <textarea placeholder="Description" value={newAo.description} onChange={function(e){setNewAo(Object.assign({},newAo,{description:e.target.value}));}} className={inp+" mb-3"} rows={2}/>
                  <div className="flex gap-2"><button onClick={addAo} className="px-4 py-2 rounded-xl text-white text-sm font-semibold" style={{background:GRADIENT}}>Ajouter</button><button onClick={function(){setShowAddAo(false);}} className="px-4 py-2 rounded-xl text-sm text-gray-500 border bg-white">Annuler</button></div>
                </div>
              )}
              <div className="space-y-3">
                {aos.filter(function(a){return filterStatut==="Tous"||a.statut===filterStatut;}).map(function(a){
                  return (
                    <div key={a.id} className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer" onClick={function(){setSelectedAoId(selectedAoId===a.id?null:a.id);}}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-semibold text-gray-800">{a.titre}</span>
                            <span className={"text-xs font-semibold px-2 py-0.5 rounded-full "+STATUT_COLORS[a.statut]}>{a.statut}</span>
                          </div>
                          <div className="text-sm text-gray-500 flex gap-3 flex-wrap">
                            <span>🏢 {a.client}</span>
                            {a.budget&&<span>💰 {a.budget}</span>}
                            {a.deadline&&<span>📅 {new Date(a.deadline).toLocaleDateString("fr-FR")}</span>}
                          </div>
                          <CloudEditor value={a.cloudUrl} onChange={function(url){setAoCloud(a.id,url);}}/>
                        </div>
                        <div className="flex gap-2 flex-shrink-0 flex-wrap justify-end" onClick={function(e){e.stopPropagation();}}>
                          <select value={a.statut} onChange={function(e){updateStatut(a.id,e.target.value);}} className="text-xs border border-gray-200 rounded-lg px-2 py-1 bg-white">
                            {STATUTS.map(function(s){return <option key={s}>{s}</option>;})}
                          </select>
                          <button onClick={function(){setAiMode("analyse");setAiAoId(String(a.id));setPage("redaction");}} className="text-xs px-2 py-1 rounded-lg text-white" style={{background:GRADIENT}}>✍️ IA</button>
                          <button onClick={function(){duplicateAo(a);}} title="Dupliquer" className="text-xs px-2 py-1 rounded-lg border border-gray-200 text-gray-500 bg-white hover:text-purple-600">⧉</button>
                          <button onClick={function(e){e.stopPropagation();deleteAo(a.id);}} title="Supprimer" className="text-xs px-2 py-1 rounded-lg border border-red-200 text-red-400 bg-white hover:bg-red-50">🗑</button>
                        </div>
                      </div>
                      {selectedAoId===a.id&&<div className="mt-3 pt-3 border-t text-sm text-gray-600">{a.description||"Aucune description."}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── RÉDACTION IA ─────────────────────────────────────────────── */}
          {page==="redaction"&&(
            <div className="max-w-3xl">
              <div className="bg-white rounded-2xl shadow-sm p-4 mb-4 border border-purple-100">
                <label className="text-xs font-semibold text-gray-700 mb-1 block">📁 Appel d'offres <span className="text-red-500">*</span></label>
                <select value={aiAoId} onChange={function(e){setAiAoId(e.target.value);setAiResult("");}} className={inp}>
                  <option value="">— Sélectionner un AO —</option>
                  {aos.map(function(a){return <option key={a.id} value={String(a.id)}>{a.titre} · {a.client}</option>;})}
                </select>
                {aiAoId&&<div className="text-xs text-green-600 mt-1">✅ Configuration sauvegardée automatiquement.</div>}
              </div>
              <div className="flex gap-2 mb-4 flex-wrap">
                {[{id:"analyse",label:"📋 Analyse"},{id:"memoire",label:"📝 Mémoire"},{id:"dc1",label:"📄 DC1"},{id:"dc2",label:"📄 DC2"},{id:"prix",label:"💰 Prix & Planning"}].map(function(m){
                  return <button key={m.id} onClick={function(){setAiMode(m.id);setAiResult("");setShowGenHistory(false);}} className={"px-4 py-2 rounded-xl text-sm font-semibold border transition-all "+(aiMode===m.id?"text-white border-transparent shadow":"bg-white text-gray-600 border-gray-200")} style={aiMode===m.id?{background:GRADIENT}:{}}>{m.label}</button>;
                })}
              </div>
              {aiAoId&&(instructions[aiMode==="prix"?"prix":aiMode]||[]).length>0&&(
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-3 mb-4">
                  <div className="text-xs font-semibold text-blue-700 mb-2">📚 Instructions sauvegardées</div>
                  <div className="flex flex-wrap gap-2">
                    {(instructions[aiMode==="prix"?"prix":aiMode]||[]).map(function(instr){return <button key={instr.id} onClick={function(){applyInstruction(instr);}} className="text-xs px-3 py-1.5 rounded-lg bg-white border border-blue-200 text-blue-700 hover:bg-blue-100">+ {instr.titre}</button>;})}
                  </div>
                </div>
              )}

              {aiMode==="analyse"&&(
                <div className="bg-white rounded-2xl shadow-sm p-5 mb-4 border border-purple-100">
                  <h2 className="font-bold text-gray-700 mb-4 text-sm">📋 Analyse AO</h2>
                  <div className="mb-3"><label className="text-xs font-semibold text-gray-700 mb-1 block">📎 Documents</label><FileUploadArea metas={cfg.analyse.docMetas} onChange={function(v){setAnalyseField("docMetas",v);}}/></div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Instructions</label>
                  <textarea value={cfg.analyse.prompt} onChange={function(e){setAnalyseField("prompt",e.target.value);}} rows={3} placeholder="Ex : Focus sur les critères d'attribution..." className={inp}/>
                </div>
              )}
              {aiMode==="memoire"&&(
                <div>
                  <div className="bg-white rounded-2xl shadow-sm p-4 mb-3 border border-purple-100">
                    <label className="text-xs font-semibold text-gray-700 mb-1 block">📝 Instructions générales</label>
                    <textarea value={cfg.memoire.globalPrompt} onChange={function(e){setMemoireGlobal(e.target.value);}} rows={3} placeholder="Ex : Approche agile, expérience secteur public..." className={inp}/>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm border border-purple-100 mb-4 overflow-hidden">
                    <div className="flex border-b border-gray-100">
                      {MEMOIRE_TABS.map(function(t){return <button key={t.id} onClick={function(){setMemoireTab(t.id);}} className={"flex-1 px-3 py-3 text-xs font-semibold transition-all "+(memoireTab===t.id?"text-purple-700 border-b-2 border-purple-600 bg-purple-50":"text-gray-500 hover:bg-gray-50")}>{t.label}{cfg.memoire[t.id].entId&&<span className="ml-1 text-green-500">✓</span>}</button>;})}
                    </div>
                    {MEMOIRE_TABS.map(function(t){
                      if (memoireTab!==t.id) return null;
                      var td=cfg.memoire[t.id]; var se=entreprises.find(function(e){return e.id===Number(td.entId);});
                      return (
                        <div key={t.id} className="p-5">
                          <div className="mb-3"><label className="text-xs font-semibold text-gray-700 mb-1 block">Entreprise</label><select value={td.entId} onChange={function(e){setMemoireTabField(t.id,"entId",e.target.value);}} className={inp}><option value="">— Sélectionner —</option>{entreprises.map(function(e){return <option key={e.id} value={String(e.id)}>{e.nom}</option>;})}</select>{se&&<div className="mt-2 flex items-center gap-2 p-2 bg-purple-50 rounded-xl border border-purple-100"><Avatar nom={se.nom} couleur={se.couleur} size={7}/><div><div className="text-sm font-semibold">{se.nom}</div><div className="text-xs text-gray-400">{se.forme} · {se.ca}</div></div></div>}</div>
                          <div className="mb-3"><label className="text-xs font-semibold text-gray-700 mb-1 block">📎 Documents</label><FileUploadArea metas={td.docMetas} onChange={function(v){setMemoireTabField(t.id,"docMetas",v);}}/></div>
                          <textarea value={td.prompt} onChange={function(e){setMemoireTabField(t.id,"prompt",e.target.value);}} rows={2} placeholder="Instructions spécifiques..." className={inp}/>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {aiMode==="prix"&&(
                <div className="bg-white rounded-2xl shadow-sm border border-purple-100 mb-4 overflow-hidden">
                  <div className="flex border-b border-gray-100">
                    {PRIX_TABS.map(function(t){return <button key={t.id} onClick={function(){setPrixTab(t.id);setAiResult("");}} className={"flex-1 px-2 py-3 text-xs font-semibold transition-all "+(prixTab===t.id?"text-purple-700 border-b-2 border-purple-600 bg-purple-50":"text-gray-500 hover:bg-gray-50")}>{t.label}</button>;})}
                  </div>
                  <div className="p-4">
                    <div className="mb-3"><label className="text-xs font-semibold text-gray-700 mb-1 block">📎 Fichiers (max 5)</label><FileUploadArea metas={cfg.prix[prixTab].docMetas} onChange={function(v){setPrixField(prixTab,"docMetas",v);}} maxFiles={5}/></div>
                    <label className="text-xs font-semibold text-gray-700 mb-1 block">Instructions</label>
                    <textarea value={cfg.prix[prixTab].prompt} onChange={function(e){setPrixField(prixTab,"prompt",e.target.value);}} rows={3} placeholder="Ex : Projet 18 mois..." className={inp}/>
                  </div>
                </div>
              )}
              {(aiMode==="dc1"||aiMode==="dc2")&&(
                <div className="bg-white rounded-2xl shadow-sm p-5 mb-4 border border-purple-100">
                  <h2 className="font-bold text-gray-700 mb-4 text-sm">📄 {aiMode==="dc1"?"DC1 – Lettre de candidature":"DC2 – Déclaration du candidat"}</h2>
                  <div className="mb-3"><label className="text-xs font-semibold text-gray-700 mb-2 block">Entreprises</label><div className="grid grid-cols-2 gap-2">{entreprises.map(function(e){var sel=(cfg[aiMode].entIds||[]).includes(e.id);return <div key={e.id} onClick={function(){var ids=cfg[aiMode].entIds||[];setDcField(aiMode,"entIds",sel?ids.filter(function(x){return x!==e.id;}):[].concat(ids,[e.id]));}} className={"cursor-pointer rounded-xl p-2 border-2 flex items-center gap-2 "+(sel?"border-purple-400 bg-purple-50":"border-gray-200 bg-white")}><Avatar nom={e.nom} couleur={e.couleur} size={6}/><span className="text-sm flex-1 truncate">{e.nom}</span>{sel&&<span className="text-purple-600">✓</span>}</div>;})}</div></div>
                  <div className="mb-3"><label className="text-xs font-semibold text-gray-700 mb-1 block">📎 Documents</label><FileUploadArea metas={cfg[aiMode].docMetas} onChange={function(v){setDcField(aiMode,"docMetas",v);}}/></div>
                  <textarea value={cfg[aiMode].prompt} onChange={function(e){setDcField(aiMode,"prompt",e.target.value);}} rows={2} placeholder="Instructions..." className={inp}/>
                </div>
              )}

              <div className="flex gap-3 mb-4 flex-wrap items-center">
                {!aiLoading&&aiAoId&&(
                  <button onClick={function(){generateAI();}} disabled={!apiKey||!apiKey.startsWith("sk-ant-")} className={"px-6 py-3 rounded-xl font-semibold shadow text-white flex items-center gap-2 "+((!apiKey||!apiKey.startsWith("sk-ant-"))?"opacity-40 cursor-not-allowed":"")} style={{background:GRADIENT}}>
                    ✨ Générer
                  </button>
                )}
                {!aiLoading&&aiAoId&&(!apiKey||!apiKey.startsWith("sk-ant-"))&&(
                  <span className="text-xs text-orange-500">🔑 Saisissez votre clé API dans la sidebar</span>
                )}
                {/* Bouton secondaire : prompt copiable */}
                {!aiLoading&&aiAoId&&(
                  <button onClick={function(){
                    var p=buildPromptText();
                    var docMetas=aiMode==="analyse"?(cfg.analyse.docMetas||[]):aiMode==="memoire"?[].concat(cfg.memoire.mandataire.docMetas||[],cfg.memoire.coco1.docMetas||[],cfg.memoire.coco2.docMetas||[]):aiMode==="prix"?(cfg.prix[prixTab].docMetas||[]):(cfg[aiMode]&&cfg[aiMode].docMetas||[]);
                    var availableDocs=docMetas.filter(function(m){return !!getFile(m.id);});
                    var unavailableDocs=docMetas.filter(function(m){return !getFile(m.id);});
                    var header="━━━ PROMPT PRÊT À COLLER ━━━\n";
                    if (availableDocs.length>0){header+="📎 Joinds ces fichiers dans Claude.ai :\n";availableDocs.forEach(function(m){header+="  • "+m.name+"\n";});header+="\n";}
                    if (unavailableDocs.length>0){header+="⚠️ Fichiers à re-uploader :\n";unavailableDocs.forEach(function(m){header+="  • "+m.name+"\n";});header+="\n";}
                    header+="Collez ce texte dans une nouvelle conversation Claude.ai :\n\n";
                    setAiResult(header+p); setCopiedResult(false);
                  }} className="px-4 py-3 rounded-xl border-2 border-purple-300 text-purple-600 text-sm bg-white font-medium hover:bg-purple-50">
                    📋 Prompt manuel
                  </button>
                )}
                {aiLoading&&<button onClick={function(){aiCancelledRef.current=true;setAiLoading(false);setAiResult("Annulé.");}} className="px-4 py-3 rounded-xl border border-red-300 text-red-500 text-sm bg-white">✕ Annuler</button>}
                {aiLoading&&<span className="text-sm text-gray-500 animate-pulse">⏳ Tentative API en cours...</span>}
                {currentHistory.length>0&&<button onClick={function(){setShowGenHistory(!showGenHistory);}} className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-600 text-sm">🕓 Historique ({currentHistory.length})</button>}
                {aiResult&&!aiLoading&&(
                  <div className="relative">
                    <button onClick={function(){setShowExportMenu(!showExportMenu);}} className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-600 text-sm flex items-center gap-1">💾 Exporter ▾</button>
                    {showExportMenu&&(
                      <div className="absolute left-0 top-12 bg-white rounded-xl shadow-xl border border-gray-100 z-10 w-48 overflow-hidden">
                        <button onClick={function(){exportAsTxt(aiResult,(currentAoTitle||"resultat")+"_"+currentGenKey);setShowExportMenu(false);}} className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-2">📄 Exporter .txt</button>
                        <button onClick={function(){exportAsHtml(aiResult,(currentAoTitle||"resultat")+"_"+currentGenKey);setShowExportMenu(false);}} className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-2">🌐 Exporter .html <span className="text-xs text-gray-400">(imprimable)</span></button>
                        <button onClick={function(){copyToClipboard(aiResult);setCopiedResult(true);setTimeout(function(){setCopiedResult(false);},2000);setShowExportMenu(false);}} className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-2">📋 Copier tout</button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {!aiAoId&&<div className="text-sm text-orange-500 mb-4">⚠️ Sélectionnez un AO pour activer la génération.</div>}

              {showGenHistory&&currentHistory.length>0&&(
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 overflow-hidden">
                  <div className="px-4 py-3 border-b flex justify-between items-center"><span className="text-sm font-semibold text-gray-700">🕓 Historique</span><button onClick={function(){setShowGenHistory(false);}} className="text-gray-400 text-xs">Fermer</button></div>
                  {currentHistory.map(function(gen,idx){
                    return (
                      <div key={gen.id} className="p-4 border-b border-gray-50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-500">Version {currentHistory.length-idx} — {new Date(gen.date).toLocaleString("fr-FR")}</span>
                          <div className="flex gap-2">
                            <button onClick={function(){setAiResult(gen.text);setShowGenHistory(false);}} className="text-xs px-2 py-1 rounded-lg border border-purple-200 text-purple-600">Restaurer</button>
                            <button onClick={function(){exportAsTxt(gen.text,"version_"+(currentHistory.length-idx));}} className="text-xs px-2 py-1 rounded-lg border border-gray-200 text-gray-600">💾 .txt</button>
                            <button onClick={function(){copyToClipboard(gen.text);}} className="text-xs px-2 py-1 rounded-lg border border-gray-200 text-gray-600">📋</button>
                          </div>
                        </div>
                        <pre className="text-xs text-gray-500 whitespace-pre-wrap max-h-20 overflow-hidden">{gen.text.slice(0,200)}...</pre>
                      </div>
                    );
                  })}
                </div>
              )}

              {aiResult&&(
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-green-100">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-700 text-sm">📄 Résultat</h3>
                    <button onClick={function(){copyToClipboard(aiResult);setCopiedResult(true);setTimeout(function(){setCopiedResult(false);},2000);}} className={"text-xs px-3 py-1.5 rounded-lg border transition-all "+(copiedResult?"bg-green-100 border-green-300 text-green-700":"border-purple-200 text-purple-600 hover:bg-purple-50")}>{copiedResult?"✅ Copié !":"📋 Copier"}</button>
                  </div>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed max-h-96 overflow-y-auto">{aiResult}</pre>
                </div>
              )}
            </div>
          )}

          {/* ── SUIVI KANBAN ─────────────────────────────────────────────── */}
          {page==="suivi"&&(
            <div className="grid grid-cols-4 gap-3">
              {STATUTS.map(function(col){
                return (
                  <div key={col} className="bg-white rounded-2xl shadow-sm p-3 border border-gray-100">
                    <div className={"text-xs font-bold px-2 py-1 rounded-full mb-3 inline-block "+STATUT_COLORS[col]}>{col} ({aos.filter(function(a){return a.statut===col;}).length})</div>
                    {aos.filter(function(a){return a.statut===col;}).map(function(a){
                      return (
                        <div key={a.id} className="p-3 rounded-xl border border-gray-100 bg-gray-50 mb-2">
                          <div className="text-sm font-semibold mb-0.5">{a.titre}</div>
                          <div className="text-xs text-gray-400 mb-2">{a.client}</div>
                          <div className="flex gap-1 flex-wrap">
                            {STATUTS.filter(function(s){return s!==col;}).map(function(s){return <button key={s} onClick={function(){updateStatut(a.id,s);}} className="text-xs px-2 py-0.5 rounded-full border border-gray-200 text-gray-500 bg-white hover:text-purple-600">→ {s}</button>;})}
                          </div>
                        </div>
                      );
                    })}
                    {aos.filter(function(a){return a.statut===col;}).length===0&&<div className="text-xs text-gray-300 text-center py-6 border-2 border-dashed border-gray-100 rounded-xl">Vide</div>}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── DOSSIERS LOTS ────────────────────────────────────────────── */}
          {page==="lots"&&(
            <div>
              <div className="flex justify-between items-center mb-4 gap-2 flex-wrap">
                <div className="flex gap-2 flex-1 min-w-0">
                  <SearchBar value={searchLot} onChange={setSearchLot} placeholder="Rechercher un lot..."/>
                  <select value={filterLotAo} onChange={function(e){setFilterLotAo(e.target.value);}} className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-purple-400 flex-shrink-0">
                    <option value="">Tous les AO</option>
                    {aos.map(function(a){return <option key={a.id} value={String(a.id)}>{a.titre}</option>;})}
                  </select>
                </div>
                <button onClick={function(){setShowAddLot(true);}} className="px-4 py-2 rounded-xl text-white text-sm font-semibold shadow flex-shrink-0" style={{background:GRADIENT}}>+ Nouveau lot</button>
              </div>
              {showAddLot&&(
                <div className="bg-white rounded-2xl shadow p-4 mb-4 border border-purple-100">
                  <h3 className="font-bold text-gray-700 mb-3 text-sm">Créer un lot</h3>
                  <input placeholder="Nom du lot *" value={newLot.nom} onChange={function(e){setNewLot(Object.assign({},newLot,{nom:e.target.value}));}} className={inp+" mb-3"}/>
                  <div className="mb-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Association AO</label><select value={newLot.aoId} onChange={function(e){setNewLot(Object.assign({},newLot,{aoId:e.target.value}));}} className={inp}><option value="">— Aucun —</option>{aos.map(function(a){return <option key={a.id} value={String(a.id)}>{a.titre}</option>;})}</select></div>
                  <div className="mb-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Mandataire</label><select value={newLot.mandataireId} onChange={function(e){setNewLot(Object.assign({},newLot,{mandataireId:e.target.value}));}} className={inp}><option value="">— Sélectionner —</option>{entreprises.map(function(e){return <option key={e.id} value={e.id}>{e.nom}</option>;})}</select></div>
                  <div className="mb-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Cocontractants</label><div className="grid grid-cols-2 gap-2">{entreprises.filter(function(e){return String(e.id)!==String(newLot.mandataireId);}).map(function(e){return <div key={e.id} onClick={function(){toggleCoco(e.id);}} className={"cursor-pointer rounded-xl p-2 border-2 flex items-center gap-2 "+(newLot.cocontractantIds.includes(e.id)?"border-blue-400 bg-blue-50":"border-gray-200 bg-white")}><Avatar nom={e.nom} couleur={e.couleur} size={6}/><span className="text-sm">{e.nom}</span>{newLot.cocontractantIds.includes(e.id)&&<span className="ml-auto text-blue-500">✓</span>}</div>;})}</div></div>
                  <div className="flex gap-2"><button onClick={addLot} className="px-4 py-2 rounded-xl text-white text-sm font-semibold" style={{background:GRADIENT}}>Créer</button><button onClick={function(){setShowAddLot(false);}} className="px-4 py-2 rounded-xl text-sm text-gray-500 border bg-white">Annuler</button></div>
                </div>
              )}
              {filteredLots.length===0&&<div className="text-center py-10 text-gray-400 text-sm">Aucun lot trouvé.</div>}
              <div className="space-y-3">
                {filteredLots.map(function(lot){
                  var mand=entreprises.find(function(e){return e.id===lot.mandataireId;});
                  var cocos=(lot.cocontractantIds||[]).map(function(id){return entreprises.find(function(e){return e.id===id;});}).filter(Boolean);
                  var linkedAo=aos.find(function(a){return String(a.id)===String(lot.aoId);});
                  return (
                    <div key={lot.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-center justify-between cursor-pointer" onClick={function(){setExpandedLot(expandedLot===lot.id?null:lot.id);}}>
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0" style={{background:GRADIENT}}>📦</div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-gray-800">{lot.nom}</div>
                              <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                                {linkedAo&&<span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">📁 {linkedAo.titre}</span>}
                                {mand&&<span className="text-xs font-medium px-2 py-0.5 rounded-full text-white" style={{background:mand.couleur}}>👑 {mand.nom}</span>}
                                {cocos.map(function(c){return <span key={c.id} className="text-xs px-2 py-0.5 rounded-full border text-gray-600">🤝 {c.nom}</span>;})}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0" onClick={function(e){e.stopPropagation();}}>
                            <button onClick={function(){deleteLot(lot.id);}} title="Supprimer" className="text-xs px-2 py-1 rounded-lg border border-red-200 text-red-400 bg-white hover:bg-red-50">🗑</button>
                            <span className="text-gray-400 text-sm cursor-pointer" onClick={function(){setExpandedLot(expandedLot===lot.id?null:lot.id);}}>{expandedLot===lot.id?"▲":"▼"}</span>
                          </div>
                        </div>
                        <div className="mt-1 pl-14">
                          <CloudEditor value={lot.cloudUrl} onChange={function(url){setLotCloud(lot.id,url);}}/>
                        </div>
                      </div>
                      {expandedLot===lot.id&&(
                        <div className="border-t border-gray-100 p-4">
                          {/* AO association inline */}
                          <div className="mb-3">
                            <label className="text-xs font-semibold text-gray-600 mb-1 block">🔗 AO associé</label>
                            <select value={lot.aoId||""} onChange={function(e){setLotAo(lot.id,e.target.value);}} className={inp}>
                              <option value="">— Aucun —</option>
                              {aos.map(function(a){return <option key={a.id} value={String(a.id)}>{a.titre}</option>;})}
                            </select>
                          </div>
                          {addingDocLot===lot.id?(
                            <div className="border border-purple-200 rounded-xl p-3 bg-purple-50/30 mb-3">
                              <div className="flex gap-2 mb-2"><select value={newDocTypeLot} onChange={function(e){setNewDocTypeLot(e.target.value);}} className="border border-gray-200 rounded-lg px-2 py-1.5 text-sm flex-1 bg-white">{DOC_TYPES_LOT.map(function(t){return <option key={t}>{t}</option>;})}</select><button onClick={function(){setAddingDocLot(null);}} className="text-xs text-gray-400 px-2">Annuler</button></div>
                              <div className="border-2 border-dashed border-purple-300 rounded-xl p-3 text-center cursor-pointer bg-white" onClick={function(){docLotRef.current.click();}}><div className="text-xs text-gray-500">📎 Cliquer pour sélectionner</div></div>
                              <input ref={docLotRef} type="file" className="hidden" onChange={function(e){handleLotDocUpload(e,lot.id);}}/>
                            </div>
                          ):(
                            <button onClick={function(){setAddingDocLot(lot.id);}} className="w-full border-2 border-dashed border-gray-200 rounded-xl p-3 text-sm text-gray-500 hover:border-purple-300 mb-3">+ Ajouter un document</button>
                          )}
                          {lot.docs.length>0&&<div className="space-y-2 mb-3">{lot.docs.map(function(doc){return <div key={doc.id} className="flex items-center justify-between p-2 rounded-xl bg-gray-50 border border-gray-100"><div className="flex items-center gap-2"><span>📄</span><div><div className="text-sm font-medium">{doc.nom}</div><span className="text-xs bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded-full">{doc.type}</span></div></div><button onClick={function(){removeDocLot(lot.id,doc.id);}} className="text-xs text-red-400">✕</button></div>;})}</div>}
                          <div className="p-3 bg-gray-50 rounded-xl"><div className="text-xs font-semibold text-gray-600 mb-2">✅ Checklist</div><div className="grid grid-cols-2 gap-1">{["Kbis","Bilan financier","Attestation fiscale","Attestation sociale","Assurance RC Pro"].map(function(t){var ok=lot.docs.some(function(d){return d.type===t;});return <div key={t} className={"text-xs flex items-center gap-1 "+(ok?"text-green-600":"text-gray-400")}><span>{ok?"✅":"⬜"}</span>{t}</div>;})}</div></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── RÉFÉRENCES ENTREPRISES ───────────────────────────────────── */}
          {page==="entreprises"&&(
            <div>
              <div className="flex justify-between items-center mb-4 gap-2 flex-wrap">
                <SearchBar value={searchEnt} onChange={setSearchEnt} placeholder="Rechercher par nom, activité, SIRET..."/>
                <button onClick={function(){setShowAddEnt(true);}} className="px-4 py-2 rounded-xl text-white text-sm font-semibold shadow flex-shrink-0" style={{background:GRADIENT}}>+ Nouvelle entreprise</button>
              </div>
              {showAddEnt&&(
                <div className="bg-white rounded-2xl shadow p-5 mb-4 border border-purple-100">
                  <h3 className="font-bold text-gray-700 mb-3 text-sm">Ajouter une entreprise</h3>
                  <div className="grid grid-cols-2 gap-3 mb-3">{[["nom","Nom *"],["siret","SIRET"],["forme","Forme"],["adresse","Adresse"],["effectif","Effectif"],["ca","CA"]].map(function(pair){return <input key={pair[0]} placeholder={pair[1]} value={newEnt[pair[0]]} onChange={function(e){setNewEnt(Object.assign({},newEnt,{[pair[0]]:e.target.value}));}} className={inp}/>;})}</div>
                  {[["activite","Activité"],["certifications","Certifications"],["references","Références"]].map(function(pair){return <textarea key={pair[0]} placeholder={pair[1]} value={newEnt[pair[0]]} onChange={function(e){setNewEnt(Object.assign({},newEnt,{[pair[0]]:e.target.value}));}} className={inp+" mb-2"} rows={2}/>;})}
                  <div className="flex gap-2 mt-1"><button onClick={addEnt} className="px-4 py-2 rounded-xl text-white text-sm font-semibold" style={{background:GRADIENT}}>Ajouter</button><button onClick={function(){setShowAddEnt(false);}} className="px-4 py-2 rounded-xl text-sm text-gray-500 border bg-white">Annuler</button></div>
                </div>
              )}
              {filteredEnts.length===0&&<div className="text-center py-10 text-gray-400 text-sm">Aucune entreprise trouvée.</div>}
              <div className="space-y-3">
                {filteredEnts.map(function(e){
                  var dc=Object.values(e.docs).filter(Boolean).length;
                  return (
                    <div key={e.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-center justify-between cursor-pointer" onClick={function(){setExpandedEnt(expandedEnt===e.id?null:e.id);}}>
                          <div className="flex items-center gap-3 min-w-0">
                            <Avatar nom={e.nom} couleur={e.couleur} size={10}/>
                            <div className="min-w-0">
                              <div className="font-semibold text-gray-800">{e.nom}</div>
                              <div className="text-xs text-gray-400 flex gap-3 mt-0.5">
                                {e.forme&&<span>🏛️ {e.forme}</span>}
                                {e.ca&&<span>💰 {e.ca}</span>}
                                <span className={dc===10?"text-green-600 font-medium":"text-orange-500"}>📎 {dc}/10</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button onClick={function(ev){ev.stopPropagation();setEditingEnt(Object.assign({},e));setExpandedEnt(e.id);}} className="text-xs px-3 py-1 rounded-lg border border-gray-200 text-gray-500 bg-white">✏️</button>
                            <button onClick={function(ev){ev.stopPropagation();deleteEnt(e.id);}} title="Supprimer" className="text-xs px-2 py-1 rounded-lg border border-red-200 text-red-400 bg-white hover:bg-red-50">🗑</button>
                            <span className="text-gray-400">{expandedEnt===e.id?"▲":"▼"}</span>
                          </div>
                        </div>
                        <div className="mt-2" style={{paddingLeft:"52px"}}>
                          <CloudEditor value={e.cloudUrl} onChange={function(url){setEntCloud(e.id,url);}}/>
                        </div>
                      </div>
                      {expandedEnt===e.id&&(
                        <div className="border-t border-gray-100 p-5">
                          {editingEnt&&editingEnt.id===e.id?(
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-3 text-sm">Modifier</h4>
                              <div className="grid grid-cols-2 gap-3 mb-3">{[["nom","Nom"],["siret","SIRET"],["forme","Forme"],["adresse","Adresse"],["effectif","Effectif"],["ca","CA"]].map(function(pair){return <input key={pair[0]} placeholder={pair[1]} value={editingEnt[pair[0]]||""} onChange={function(ev){setEditingEnt(Object.assign({},editingEnt,{[pair[0]]:ev.target.value}));}} className={inp}/>;})}</div>
                              {[["activite","Activité"],["certifications","Certifications"],["references","Références"]].map(function(pair){return <textarea key={pair[0]} placeholder={pair[1]} value={editingEnt[pair[0]]||""} onChange={function(ev){setEditingEnt(Object.assign({},editingEnt,{[pair[0]]:ev.target.value}));}} className={inp+" mb-2"} rows={2}/>;})}
                              <div className="flex gap-2 mt-2"><button onClick={saveEnt} className="px-4 py-2 rounded-xl text-white text-sm font-semibold" style={{background:GRADIENT}}>Sauvegarder</button><button onClick={function(){setEditingEnt(null);}} className="px-4 py-2 rounded-xl text-sm text-gray-500 border bg-white">Annuler</button></div>
                            </div>
                          ):(
                            <div>
                              <div className="grid grid-cols-2 gap-4 mb-4">{[["Activité",e.activite],["SIRET",e.siret],["Adresse",e.adresse],["Certifications",e.certifications],["Références",e.references]].filter(function(p){return !!p[1];}).map(function(p){return <div key={p[0]}><div className="text-xs font-semibold text-gray-500 mb-0.5">{p[0]}</div><div className="text-sm text-gray-700">{p[1]}</div></div>;})}</div>
                              <div className="border-t pt-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">📎 Documents officiels</h4>
                                <DocSlotUploader slots={DOC_SLOTS} docs={e.docs} onChange={function(k,f){updateEntDoc(e.id,k,f);}}/>
                                <div className="mt-3 p-3 rounded-xl" style={{background:dc===10?"#f0fdf4":"#fefce8"}}>
                                  <div className="flex items-center gap-2"><div className="flex-1 h-2 bg-gray-200 rounded-full"><div className="h-2 rounded-full" style={{width:(dc/10*100)+"%",background:dc===10?"#10b981":"#f59e0b"}}></div></div><span className={"text-xs font-bold "+(dc===10?"text-green-700":"text-orange-600")}>{dc}/10</span>{dc===10&&<span className="text-green-600">✅</span>}</div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── INSTRUCTIONS ─────────────────────────────────────────────── */}
          {page==="instructions"&&(
            <div className="max-w-3xl">
              <div className="bg-white rounded-2xl shadow-sm p-5 mb-4 border border-purple-100">
                <div className="flex items-center justify-between mb-4">
                  <div><h2 className="font-bold text-gray-800">📚 Bibliothèque d'instructions</h2><p className="text-xs text-gray-500 mt-0.5">Sauvegardez vos instructions types et appliquez-les en un clic.</p></div>
                  <button onClick={function(){setShowAddInstr(true);}} className="px-4 py-2 rounded-xl text-white text-sm font-semibold shadow" style={{background:GRADIENT}}>+ Nouvelle</button>
                </div>
                <div className="flex gap-2 flex-wrap mb-4">
                  {AI_MODES.map(function(m){return <button key={m} onClick={function(){setInstrMode(m);}} className={"px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all "+(instrMode===m?"text-white border-transparent":"bg-white text-gray-600 border-gray-200")} style={instrMode===m?{background:GRADIENT}:{}}>{INSTR_LABELS[m]} ({(instructions[m]||[]).length})</button>;})}
                </div>
                {showAddInstr&&(
                  <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-4">
                    <h3 className="font-semibold text-gray-700 mb-3 text-sm">Nouvelle instruction — {INSTR_LABELS[instrMode]}</h3>
                    <input placeholder="Titre *" value={newInstr.titre} onChange={function(e){setNewInstr(Object.assign({},newInstr,{titre:e.target.value}));}} className={inp+" mb-2"}/>
                    <textarea placeholder="Contenu de l'instruction..." value={newInstr.contenu} onChange={function(e){setNewInstr(Object.assign({},newInstr,{contenu:e.target.value}));}} rows={5} className={inp+" mb-3"}/>
                    <div className="flex gap-2"><button onClick={addInstruction} className="px-4 py-2 rounded-xl text-white text-sm font-semibold" style={{background:GRADIENT}}>Sauvegarder</button><button onClick={function(){setShowAddInstr(false);setNewInstr({titre:"",contenu:""});}} className="px-4 py-2 rounded-xl text-sm text-gray-500 border bg-white">Annuler</button></div>
                  </div>
                )}
                {(instructions[instrMode]||[]).length===0?(
                  <div className="text-center py-10 text-gray-400"><div className="text-4xl mb-2">📭</div><div className="text-sm">Aucune instruction pour {INSTR_LABELS[instrMode]}</div><button onClick={function(){setShowAddInstr(true);}} className="mt-3 text-xs text-purple-600 hover:underline">+ Créer la première</button></div>
                ):(
                  <div className="space-y-3">
                    {(instructions[instrMode]||[]).map(function(instr){
                      return (
                        <div key={instr.id} className="border border-gray-100 rounded-2xl p-4 bg-gray-50 hover:border-purple-200 transition-colors">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="font-semibold text-gray-800 text-sm">{instr.titre}</div>
                            <div className="flex gap-2 flex-shrink-0">
                              <button onClick={function(){setAiMode(instrMode==="prix"?"prix":instrMode);setPage("redaction");applyInstruction(instr);}} className="text-xs px-3 py-1 rounded-lg text-white" style={{background:GRADIENT}}>Utiliser →</button>
                              <button onClick={function(){deleteInstruction(instrMode,instr.id);}} className="text-xs px-2 py-1 rounded-lg border border-red-200 text-red-400">✕</button>
                            </div>
                          </div>
                          <pre className="text-xs text-gray-600 whitespace-pre-wrap font-sans leading-relaxed max-h-32 overflow-hidden">{instr.contenu}</pre>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
