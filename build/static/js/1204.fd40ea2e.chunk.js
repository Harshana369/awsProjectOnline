(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1204],{51011:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>S});var s=a(72791),r=a(79271),n=a(74569),l=a.n(n),o=a(16149),c=a(89743),i=a(2677),d=a(43360),j=a(34575),h=a(19658),p=a(3986),u=a(58484),m=a.n(u),x=a(64554),g=a(39157),b=a(13239),v=a(29818),Z=a(80184);const f=s.forwardRef((function(e,t){return(0,Z.jsx)(h.Z,{elevation:6,ref:t,variant:"filled",...e})})),N=["csv","xls","xlsx"];const S=(0,r.EN)((function(e){let[t,a]=(0,s.useState)([]),[r,n]=(0,s.useState)([]),[h,u]=(0,s.useState)(),[S,P]=(0,s.useState)([]),[y,C]=(0,s.useState)(""),[k,I]=(0,s.useState)(""),[w,D]=(0,s.useState)([]),[M,O]=(0,s.useState)([]),[E,F]=(0,s.useState)(!1);const L=l().create({baseURL:"http://35.78.68.113:8072/"});let[T,G]=(0,s.useState)({}),[B,H]=(0,s.useState)({}),[R,_]=(0,s.useState)(!1),J=(e,t)=>{G({...T,[e]:t}),B[e]&&H({...B,[e]:null})};(0,s.useEffect)((()=>{L.get("projonline/users",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{a(e.data.companys.filter((e=>"Mobitel"!==e.companyName))),D(e.data.projects),J("projectID",e.data.projects.length+1)})).catch((e=>{console.log(e)})),L.get("projonline/mobitelusers",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{O(e.data)})).catch((e=>{console.log(e)}))}),[]);const U=(e,t)=>{"clickaway"!==t&&_(!1)};return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"content-wrapper",children:[(0,Z.jsx)("div",{className:"content-header",children:(0,Z.jsx)("section",{className:"content-header",children:(0,Z.jsx)("div",{className:"container-fluid",children:(0,Z.jsx)("div",{className:"row mb-2",children:(0,Z.jsx)("div",{className:"col-sm-6",children:(0,Z.jsx)("h1",{children:"Upload New Project Temptate"})})})})})}),(0,Z.jsx)("section",{className:"content",children:(0,Z.jsxs)("div",{className:"container-fluid",children:[(0,Z.jsxs)(o.Z,{onSubmit:e=>{e.preventDefault(),F(!0);const t=(()=>{const{subProject:e,project:t}=T,a={};return e&&""!==e||(a.subProject="cannot be blank!"),t&&""!==t||(a.project="cannot be blank!"),S&&0!==S.length||(a.file="Attachment missing!"),a})();if(Object.keys(t).length>0)H(t),F(!1);else{const e={projectID:T.projectID,subProject:T.subProject,project:T.project,properties:S.map((e=>e.field)),assignedProjectManager:T.assignedProjectManager,taskStatus:"Project template created"};L.post("projonline/addProjectTemplate",e,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{C(e.data.msg),I(e.data.variant),_(!0),G({project:"",subProject:"",projectID:"",assignedProjectManager:""}),n([]),P([]),F(!1)})).catch((e=>{console.log(e)}))}},children:[(0,Z.jsxs)(c.Z,{className:"mb-3",children:[(0,Z.jsxs)(o.Z.Group,{as:i.Z,children:[(0,Z.jsx)(o.Z.Label,{children:"Project ID"}),(0,Z.jsx)(o.Z.Control,{disabled:!0,onChange:e=>J("projectID",e.target.value),value:T.projectID,className:"col-md-9",type:"text",placeholder:"Enter Project Name",isInvalid:!!B.projectID}),(0,Z.jsx)(o.Z.Control.Feedback,{type:"invalid",children:B.projectID})]}),(0,Z.jsxs)(o.Z.Group,{as:i.Z,children:[(0,Z.jsx)(o.Z.Label,{children:"Project Manager"}),(0,Z.jsxs)(o.Z.Control,{onChange:e=>J("assignedProjectManager",e.target.value),value:T.assignedProjectManager,className:"col-md-9",as:"select",defaultValue:"Choose...",isInvalid:!!B.assignedProjectManager,children:[(0,Z.jsx)("option",{children:"Choose..."}),M.map((e=>(0,Z.jsx)("option",{value:e._id,children:e.name})))]}),(0,Z.jsx)(o.Z.Control.Feedback,{type:"invalid",children:B.assignedMobitelOfficer})]})]}),(0,Z.jsxs)(c.Z,{className:"mb-3",children:[(0,Z.jsxs)(o.Z.Group,{as:i.Z,children:[(0,Z.jsx)(o.Z.Label,{children:"Project Name"}),(0,Z.jsx)(o.Z.Control,{onChange:e=>J("project",e.target.value),value:T.project,className:"col-md-9",type:"text",placeholder:"Enter Project Name",isInvalid:!!B.project}),(0,Z.jsx)(o.Z.Control.Feedback,{type:"invalid",children:B.project})]}),(0,Z.jsxs)(o.Z.Group,{as:i.Z,children:[(0,Z.jsx)(o.Z.Label,{children:"Sub-Project Name"}),(0,Z.jsx)(o.Z.Control,{onChange:e=>J("subProject",e.target.value),value:T.subProject,className:"col-md-9",type:"text",placeholder:"Enter Sub-Project Name",isInvalid:!!B.subProject}),(0,Z.jsx)(o.Z.Control.Feedback,{type:"invalid",children:B.subProject})]})]}),(0,Z.jsx)(c.Z,{className:"mb-3",children:(0,Z.jsxs)(o.Z.Group,{as:i.Z,children:[(0,Z.jsx)(o.Z.Label,{children:"Upload the project HO template"}),(0,Z.jsx)(o.Z.Control,{onChange:e=>{const t=e.target.files[0];H({...B,file:null});const a=new FileReader;a.onload=e=>{const t=e.target.result,a=m().read(t,{type:"binary"}),s=a.SheetNames[0],r=a.Sheets[s],l=m().utils.sheet_to_json(r,{header:1}),o=l[0],c=[];if("Site ID"===l[0][1]&&"Site Name"===l[0][2]){for(var i=0;i<l[0].length;i++){let e={field:l[0][i],headerName:l[0][i],minWidth:150,flex:1};c.push(e)}P(c),l.splice(0,1),n(((e,t)=>{const a=[];return t.forEach(((t,s)=>{let r={};r.id=s,t.forEach(((t,a)=>{r[e[a]]=t})),a.push(r)})),a})(o,l))}else _(!0),I("error"),C("Site ID and Site Name should be in Column No 2 and 3"),n([]),P([])},t?(e=>{const t=e.name.split("."),a=t[t.length-1];return N.includes(a)})(t)?a.readAsBinaryString(t):alert("Invalid file"):n([])},type:"file",isInvalid:!!B.file}),(0,Z.jsx)(o.Z.Control.Feedback,{type:"invalid",children:B.file})]})}),(0,Z.jsx)(c.Z,{className:"mb-3",children:(0,Z.jsx)(d.Z,{variant:"primary",type:"submit",children:"Create the template"})})]}),(0,Z.jsx)("div",{style:{height:610,width:"100%"},children:(0,Z.jsx)(p._$r,{getRowId:e=>e.id,rows:r,columns:S,pageSize:15,rowsPerPageOptions:[15],rowHeight:30,headerHeight:40,components:{Toolbar:p.npt}})})]})})]}),(0,Z.jsx)(j.Z,{open:R,autoHideDuration:6e3,onClose:U,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,Z.jsx)(f,{onClose:U,severity:k,sx:{width:"100%"},children:y})}),(0,Z.jsx)(v.Z,{open:E,onClose:(e,t)=>{"clickaway"!==t&&_(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,Z.jsx)(g.Z,{children:(0,Z.jsx)(x.Z,{sx:{display:"flex"},children:(0,Z.jsx)(b.Z,{})})})})]})}))},55382:()=>{},72095:()=>{},61219:()=>{}}]);
//# sourceMappingURL=1204.fd40ea2e.chunk.js.map