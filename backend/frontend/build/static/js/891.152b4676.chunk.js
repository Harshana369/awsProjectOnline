(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[891],{61524:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>S});var r=t(72791),o=t(79271),n=t(74569),a=t.n(n),i=t(16149),l=t(89743),c=t(2677),d=t(43360),h=t(34575),j=t(19658),p=t(3986),u=t(58484),g=t.n(u),x=t(29818),v=t(64554),b=t(39157),m=t(97473),f=t.n(m),k=t(13239),Z=t(80184);const C=r.forwardRef((function(e,s){return(0,Z.jsx)(j.Z,{elevation:6,ref:s,variant:"filled",...e})})),P=["csv","xls","xlsx"];function y(e,s){return Array.isArray(e)&&Array.isArray(s)&&e.length===s.length&&e.every(((e,t)=>e===s[t]))}const S=(0,o.EN)((function(e){let[s,t]=(0,r.useState)([]),[o,n]=(0,r.useState)([]),[j,u]=(0,r.useState)(""),[m,S]=(0,r.useState)([]),[D,A]=(0,r.useState)([]),[w,F]=(0,r.useState)([]),[I,N]=(0,r.useState)(0),[_,T]=(0,r.useState)(""),[V,L]=(0,r.useState)(""),[G,R]=(0,r.useState)(""),[O,B]=(0,r.useState)([]),[H,M]=(0,r.useState)([]),[E,W]=(0,r.useState)([]);const z=a().create({baseURL:"http://ec2-65-2-5-82.ap-south-1.compute.amazonaws.com/"});let[J,U]=(0,r.useState)({}),[X,$]=(0,r.useState)({}),[q,K]=(0,r.useState)(!1),[Q,Y]=(0,r.useState)(!1),ee=(0,r.useRef)(),se=(e,s)=>{U({...J,[e]:s}),X[e]&&$({...X,[e]:null})};(0,r.useEffect)((()=>{z.get("projonline/project",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{U({}),S([...new Set(e.data.projTemplates.map((e=>e.project)))]),F([...new Set(e.data.projTemplates.map((e=>e.subProject)))]),A(e.data.projTemplates);const s=e.data.tasks.filter((e=>{if("Withdraw"!=e.taskStatus)return e}));B(s),M(s)})).catch((e=>{console.log(e)}))}),[]);const te=(e,s)=>{const t=[];return s.forEach(((s,r)=>{let o={};o.id=r,s.forEach(((s,t)=>{o[e[t]]=s})),t.push(o)})),t},re=(e,s)=>{"clickaway"!==s&&K(!1)};return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"content-wrapper",children:[(0,Z.jsx)("div",{className:"content-header",children:(0,Z.jsx)("section",{className:"content-header",children:(0,Z.jsx)("div",{className:"container-fluid",children:(0,Z.jsx)("div",{className:"row mb-2",children:(0,Z.jsx)("div",{className:"col-sm-6",children:(0,Z.jsx)("h1",{children:"Handover New Tasks"})})})})})}),(0,Z.jsx)("section",{className:"content",children:(0,Z.jsxs)("div",{className:"container-fluid",children:[(0,Z.jsxs)(i.Z,{onSubmit:e=>{e.preventDefault();const s=(()=>{const{project:e,subProject:s,taskAssignedFromDiV:t,taskAssignedDiv:r}=J,n={};return e&&""!==e&&"Choose..."!==t||(n.project="cannot be blank!"),s&&""!==s&&"Choose..."!==t||(n.subProject="cannot be blank!"),t&&""!==t&&"Choose..."!==t||(n.taskAssignedFromDiV="Choose a division!"),r&&""!==r&&"Choose..."!==r||(n.taskAssignedDiv="Choose a division!"),o&&0!==o.length||(n.file="Attachment missing!"),n})();if(Object.keys(s).length>0)$(s),console.log(s);else{var r=new(f());r.append("files",E[0]);const e={taskAssignedFromDiV:J.taskAssignedFromDiV,taskAssignedDiv:J.taskAssignedDiv,assignedProjectManager:_._id,project:J.project,subProject:J.subProject,projectID:I,taskStatus:"Task handed over",properties:G,priority:J.priority,headerProperties:o.map((e=>e.field))};Y(!0),z.post("projonline/upload",r,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,"Content-type":"multipart/form-data"}}).then((s=>{e.handoverFiles=s.data,z.post("projonline/addTask",e,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{setTimeout((()=>{u(e.data.msg),L(e.data.variant),U({taskAssignedFromDiV:"",taskAssignedDiv:"",project:"",subProject:"",priority:"None"}),N(""),T(""),K(!0)}),2e3),setTimeout((()=>{Y(!1),K(!1),t([]),n([]),ee.current.value=""}),5e3)})).catch((e=>{console.log(e)}))})).catch((e=>{console.log(e)}))}},children:[(0,Z.jsxs)(l.Z,{className:"mb-3",children:[(0,Z.jsxs)(i.Z.Group,{as:c.Z,children:[(0,Z.jsx)(i.Z.Label,{children:"From: Division"}),(0,Z.jsxs)(i.Z.Control,{onChange:e=>se("taskAssignedFromDiV",e.target.value),value:J.taskAssignedFromDiV,as:"select",defaultValue:"Choose...",isInvalid:!!X.taskAssignedFromDiV,children:[(0,Z.jsx)("option",{children:"Choose..."}),(0,Z.jsx)("option",{children:"Planning_Radio"}),(0,Z.jsx)("option",{children:"Planning_Core"}),(0,Z.jsx)("option",{children:"Planning_TX"}),(0,Z.jsx)("option",{children:"Planning_IBS"}),(0,Z.jsx)("option",{children:"Planning_WiFi"})]}),(0,Z.jsx)(i.Z.Control.Feedback,{type:"invalid",children:X.taskAssignedFromDiV})]}),(0,Z.jsxs)(i.Z.Group,{as:c.Z,children:[(0,Z.jsx)(i.Z.Label,{children:"Assign to: Division"}),(0,Z.jsxs)(i.Z.Control,{onChange:e=>se("taskAssignedDiv",e.target.value),value:J.taskAssignedDiv,as:"select",defaultValue:"Choose...",isInvalid:!!X.taskAssignedDiv,children:[(0,Z.jsx)("option",{children:"Choose..."}),(0,Z.jsx)("option",{children:"Project_Radio"}),(0,Z.jsx)("option",{children:"Project_Core"}),(0,Z.jsx)("option",{children:"Project_TX"}),(0,Z.jsx)("option",{children:"Project_IBS"}),(0,Z.jsx)("option",{children:"Project_WiFi"})]}),(0,Z.jsx)(i.Z.Control.Feedback,{type:"invalid",children:X.taskAssignedDiv})]}),(0,Z.jsxs)(i.Z.Group,{as:c.Z,children:[(0,Z.jsx)(i.Z.Label,{children:"Project Manager"}),(0,Z.jsx)(i.Z.Control,{disabled:!0,value:_.name,className:"",type:"text",placeholder:"Project Manager",isInvalid:!!X.assignedProjectManager}),(0,Z.jsx)(i.Z.Control.Feedback,{type:"invalid",children:X.taskAssignedDiv})]})]}),(0,Z.jsxs)(l.Z,{className:"mb-3",children:[(0,Z.jsx)(c.Z,{sm:4,children:(0,Z.jsxs)(i.Z.Group,{children:[(0,Z.jsx)(i.Z.Label,{children:"Project"}),(0,Z.jsxs)(i.Z.Control,{onChange:e=>{se("project",e.target.value);let s=D.filter((s=>s.project==e.target.value));F([...new Set(s.map((e=>e.subProject)))]);for(var t=0;t<D.length;t++)e.target.value==D[t].project&&J.subProject==D[t].subProject?(N(D[t].projectID),t=D.length):t==D.length-1&&N("")},value:J.project,as:"select",defaultValue:"Choose...",isInvalid:!!X.project,children:[(0,Z.jsx)("option",{value:"",children:"Choose..."}),m.map((e=>(0,Z.jsx)("option",{value:e,children:e})))]}),(0,Z.jsx)(i.Z.Control.Feedback,{type:"invalid",children:X.project})]})}),(0,Z.jsx)(c.Z,{sm:4,children:(0,Z.jsxs)(i.Z.Group,{children:[(0,Z.jsx)(i.Z.Label,{children:"Sub Project"}),(0,Z.jsxs)(i.Z.Control,{onChange:e=>{se("subProject",e.target.value);for(var s=0;s<D.length;s++)J.project==D[s].project&&e.target.value==D[s].subProject?(T(D[s].assignedProjectManager),N(D[s].projectID),s=D.length):s==D.length-1&&(N(""),T(""))},disabled:!J.project,value:J.subProject,as:"select",defaultValue:"Choose...",isInvalid:!!X.subProject,children:[(0,Z.jsx)("option",{children:"Choose..."}),w.map((e=>(0,Z.jsx)("option",{value:e,children:e})))]}),(0,Z.jsx)(i.Z.Control.Feedback,{type:"invalid",children:X.subProject})]})}),(0,Z.jsx)(c.Z,{sm:2,children:(0,Z.jsxs)(i.Z.Group,{children:[(0,Z.jsx)(i.Z.Label,{children:"Project ID"}),(0,Z.jsx)(i.Z.Control,{disabled:!0,value:I,className:"",type:"text",placeholder:"Project ID",isInvalid:!!X.projectID}),(0,Z.jsx)(i.Z.Control.Feedback,{type:"invalid",children:X.projectID})]})}),(0,Z.jsx)(c.Z,{sm:2,children:(0,Z.jsxs)(i.Z.Group,{children:[(0,Z.jsx)(i.Z.Label,{children:"Priority"}),(0,Z.jsxs)(i.Z.Control,{onChange:e=>se("priority",e.target.value),disabled:!J.project,value:J.priority,as:"select",defaultValue:"None",isInvalid:!!X.priority,children:[(0,Z.jsx)("option",{children:"None"}),(0,Z.jsx)("option",{children:"High Priority"}),(0,Z.jsx)("option",{children:"VIP"})]}),(0,Z.jsx)(i.Z.Control.Feedback,{type:"invalid",children:X.priority})]})})]}),(0,Z.jsx)(l.Z,{className:"mb-3",children:(0,Z.jsxs)(i.Z.Group,{as:c.Z,children:[(0,Z.jsx)(i.Z.Label,{children:"Upload new task handover"}),(0,Z.jsx)(i.Z.Control,{onChange:e=>{const s=e.target.files[0];$({...X,file:null}),W(e.target.files);const r=new FileReader;r.onload=e=>{const s=e.target.result,r=g().read(s,{type:"binary"}),o=r.SheetNames[0],a=r.Sheets[o],i=g().utils.sheet_to_json(a,{header:1}),l=i[0],c=[];for(let h=0;h<D.length;h++)if(D[h].projectID===I)if(y(D[h].properties,l)){for(var d=0;d<i[0].length;d++){let e={field:i[0][d],headerName:i[0][d],minWidth:150,flex:1};c.push(e)}n(c),i.splice(0,1),R(i),t(te(l,i)),h=D.length}else K(!0),L("error"),u("Project Template is different"),t([]),n([]),h=D.length;else h==D.length-1&&(K(!0),L("error"),u("Project Supproject combination is not available"),t([]),n([]))},s?(e=>{const s=e.name.split("."),t=s[s.length-1];return P.includes(t)})(s)?r.readAsBinaryString(s):alert("Invalid file"):t([])},ref:ee,type:"file",isInvalid:!!X.file}),(0,Z.jsx)(i.Z.Control.Feedback,{type:"invalid",children:X.file})]})}),(0,Z.jsxs)(l.Z,{className:"mb-3",children:[(0,Z.jsx)(d.Z,{variant:"primary",type:"submit",children:"Handover new tasks"}),(0,Z.jsxs)(c.Z,{children:[" ",(0,Z.jsx)(d.Z,{variant:"outline-success",onClick:e=>{const s=(()=>{const{project:e,subProject:s,taskAssignedFromDiV:t,taskAssignedDiv:r}=J,o={};return e&&""!==e&&"Choose..."!==t||(o.project="cannot be blank!"),s&&""!==s&&"Choose..."!==t||(o.subProject="cannot be blank!"),o})();if(Object.keys(s).length>0)$(s);else if(H.length>0){for(var t=g().utils.book_new(),r=[],o=O.filter((e=>e.project==J.project&&e.subProject==J.subProject)),n=0;n<o.length;n++){let e=o[n].properties;e.unshift(o[n].taskRef),r.unshift(e)}let e=o[0].headerProperties;e.unshift("Task ID"),r.unshift(e);var a=g().utils.aoa_to_sheet(r);g().utils.book_append_sheet(t,a,"sheet1"),g().writeFile(t,"Already handedover tasks.xlsx"),r=[],o=[],e=[],B(H)}else K(!0),L("error"),u("Project Supproject combination is not available")},children:"Dowanload already handed over tasks"})]})]})]}),(0,Z.jsx)("div",{style:{height:610,width:"100%"},children:(0,Z.jsx)(p._$r,{getRowId:e=>e.id,rows:s,columns:o,pageSize:15,rowsPerPageOptions:[15],rowHeight:30,headerHeight:40,components:{Toolbar:p.npt}})})]})})]}),(0,Z.jsx)(h.Z,{open:q,autoHideDuration:6e3,onClose:re,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,Z.jsx)(C,{onClose:re,severity:V,sx:{width:"100%"},children:j})}),(0,Z.jsx)(x.Z,{open:Q,onClose:re,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,Z.jsx)(b.Z,{children:(0,Z.jsx)(v.Z,{sx:{display:"flex"},children:(0,Z.jsx)(k.Z,{})})})})]})}))},97473:e=>{e.exports="object"==typeof self?self.FormData:window.FormData},55382:()=>{},72095:()=>{},61219:()=>{}}]);
//# sourceMappingURL=891.152b4676.chunk.js.map