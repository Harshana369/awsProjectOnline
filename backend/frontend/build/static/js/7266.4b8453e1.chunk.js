"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7266],{17266:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var s=a(72791),r=a(79271),n=a(74569),o=a.n(n),c=a(3986),l=(a(2468),a(43360)),d=a(39474),i=a(16149),h=a(89743),u=a(2677),p=a(34575),m=a(19658),j=a(29818),x=a(64554),v=a(39157),g=a(13239),Z=a(80184);const k=s.forwardRef((function(e,t){return(0,Z.jsx)(m.Z,{elevation:6,ref:t,variant:"filled",...e})}));const S=(0,r.EN)((function(){let[e,t]=(0,s.useState)([]),[a,r]=(0,s.useState)([]),[n,m]=(0,s.useState)([]),[S,f]=(0,s.useState)([]),[N,w]=(0,s.useState)(!1),[y,b]=(0,s.useState)(""),[C,I]=(0,s.useState)(""),[O,H]=(0,s.useState)(""),[P,D]=(0,s.useState)({}),[T,R]=(0,s.useState)(!1);const B=(e,t)=>{m({...n,[t]:e.target.value})},[A,L]=(0,s.useState)(!1),q=()=>L(!1),E=o().create({baseURL:"http://ec2-65-2-5-82.ap-south-1.compute.amazonaws.com/"});(0,s.useEffect)((()=>{J()}),[]);const G=()=>{const e={};return O&&""!==O||(e.comment="cannot be blank!"),console.log(e),e},J=()=>{R(!0),E.get("projonline/pendinghandoverchanges",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{t(e.data),R(!1)})).catch((e=>{console.log(e)}))},z=(e,t)=>{"clickaway"!==t&&w(!1)},_=[{field:"taskRef",headerName:"TaskID",width:250},{field:"siteID",headerName:"SiteID",width:150},{field:"siteName",headerName:"Site Name",width:175},{field:"project",headerName:"Project",width:250},{field:"subProject",headerName:"Sub Project",width:250},{field:"Approve handover changes",width:250,align:"center",renderCell:e=>(0,Z.jsx)(l.Z,{variant:"primary",style:{width:100},onClick:()=>{return t=e.row,r(t),m(t.newProperties),f(t.headerProperties),H(""),void L(!0);var t},children:"To Approve"})}];return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"content-wrapper",children:[(0,Z.jsx)("div",{className:"content-header",children:(0,Z.jsx)("section",{className:"content-header",children:(0,Z.jsx)("div",{className:"container-fluid",children:(0,Z.jsx)("div",{className:"row mb-2",children:(0,Z.jsx)("div",{className:"col-sm-6",children:(0,Z.jsx)("h1",{children:"Approve Handover Changes"})})})})})}),(0,Z.jsx)("div",{style:{height:610,width:"100%"},children:(0,Z.jsx)(c._$r,{getRowId:e=>e._id,rows:e,columns:_,pageSize:15,rowsPerPageOptions:[15],rowHeight:30,headerHeight:40,components:{Toolbar:c.npt}})})]}),(0,Z.jsxs)(d.Z,{show:A,onHide:q,size:"lg",animation:!1,children:[(0,Z.jsx)(d.Z.Header,{closeButton:!0,children:(0,Z.jsx)(d.Z.Title,{children:"Edit Handover"})}),(0,Z.jsx)(d.Z.Body,{children:(0,Z.jsxs)(i.Z,{onSubmit:q,children:[null===S||void 0===S?void 0:S.map(((e,t)=>t<3?(0,Z.jsx)(h.Z,{children:(0,Z.jsxs)(i.Z.Group,{className:"m-2",controlId:"refid",as:u.Z,children:[(0,Z.jsx)(i.Z.Label,{children:e}),(0,Z.jsx)(i.Z.Control,{className:"mr-1 ml-1",value:n[t],onChange:e=>B(e,t),type:"text",readOnly:!0})]})}):(0,Z.jsx)(h.Z,{children:(0,Z.jsxs)(i.Z.Group,{className:"m-2",controlId:"refid",as:u.Z,children:[(0,Z.jsx)(i.Z.Label,{children:e}),(0,Z.jsxs)("div",{className:"d-flex flex-row",children:[(0,Z.jsx)(i.Z.Control,{className:"mr-1 ml-1",value:a.existingProperties[t],type:"text",readOnly:!0}),(0,Z.jsx)(i.Z.Control,{className:"mr-1 ml-1 ".concat(a.existingProperties[t]!=n[t]?"text-danger":""),value:n[t],onChange:e=>B(e,t),type:"text",readOnly:!0})]})]})}))),a.taskStatus&&(0,Z.jsx)(h.Z,{children:(0,Z.jsxs)(i.Z.Group,{className:"m-3",controlId:"refid",as:u.Z,children:[(0,Z.jsx)(i.Z.Label,{children:"Requested Status"}),(0,Z.jsx)(i.Z.Control,{type:"text",rows:3,required:!0,value:a.taskStatus,readonly:!0})]})}),(0,Z.jsx)(h.Z,{children:(0,Z.jsxs)(i.Z.Group,{className:"m-3",controlId:"refid",as:u.Z,children:[(0,Z.jsx)(i.Z.Label,{children:"Reason for the change request"}),(0,Z.jsx)(i.Z.Control,{as:"textarea",rows:3,required:!0,value:a.comment,readonly:!0})]})}),(0,Z.jsx)(h.Z,{children:(0,Z.jsxs)(i.Z.Group,{className:"m-3",controlId:"refid",as:u.Z,children:[(0,Z.jsx)(i.Z.Label,{children:"Approval Comment"}),(0,Z.jsx)(i.Z.Control,{as:"textarea",value:O,rows:3,required:!0,onChange:e=>H(e.target.value),isInvalid:!!P.comment}),(0,Z.jsx)(i.Z.Control.Feedback,{type:"invalid",children:"Please provide comment"})]})})]})}),(0,Z.jsxs)(d.Z.Footer,{children:[(0,Z.jsx)(l.Z,{variant:"danger",onClick:()=>{const e=G();Object.keys(e).length>0?D(e):E.put("projonline/updatehandoverchanges/".concat(a._id),{approveComment:O,status:"Deny"},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{E.put("projonline/update/".concat(a.taskRefID),{taskObject:{},taskHistory:{taskStatus:"Handover change denied",comment:O}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{w(!0),b("success"),I("Handover Denied"),L(!1),J()})).catch((e=>{console.log(e),w(!0),b("error"),I("Error occured")}))})).catch((e=>{console.log(e)}))},children:"Deny"}),(0,Z.jsx)(l.Z,{variant:"primary",onClick:()=>{const e=G();if(Object.keys(e).length>0)D(e);else{var t=Object.values(n);E.put("projonline/updatehandoverchanges/".concat(a._id),{approveComment:O,status:"Approved"},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{E.put("projonline/update/".concat(a.taskRefID),{taskObject:{properties:t,taskStatus:a.taskStatus},taskHistory:{taskStatus:a.taskStatus?"".concat(a.taskStatus," approved"):"Handover change approved",comment:O}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{w(!0),b("success"),I(a.taskStatus?"".concat(a.taskStatus," approved"):"Handover change approved"),L(!1),J()})).catch((e=>{console.log(e),w(!0),b("error"),I("Error occured")}))})).catch((e=>{console.log(e)}))}},children:"Approve"})]})]}),(0,Z.jsx)(p.Z,{open:N,autoHideDuration:6e3,onClose:z,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,Z.jsx)(k,{onClose:z,severity:y,sx:{width:"100%"},children:C})}),(0,Z.jsx)(j.Z,{open:T,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,Z.jsx)(v.Z,{children:(0,Z.jsx)(x.Z,{sx:{display:"flex"},children:(0,Z.jsx)(g.Z,{})})})})]})}))},2468:(e,t,a)=>{a.d(t,{Z:()=>s});const s={}}}]);
//# sourceMappingURL=7266.4b8453e1.chunk.js.map