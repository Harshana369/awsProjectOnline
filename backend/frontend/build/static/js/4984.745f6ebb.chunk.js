"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4984],{46872:(e,s,a)=>{a.r(s),a.d(s,{default:()=>f});var i=a(72791),n=a(79271),t=a(74569),r=a.n(t),d=a(3986),l=(a(2468),a(29818)),o=a(64554),c=a(39157),h=a(13239),u=a(80184);const f=(0,n.EN)((function(e){let[s,a]=(0,i.useState)(!1),[n,t]=(0,i.useState)([]);const f=r().create({baseURL:"http://35.78.68.113:8072/projonline"});(0,i.useEffect)((()=>{a(!0),f.get("projonline/gettasks/alreadyWithdrawTask",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{t(e.data.tasks),console.log(e.data.tasks),a(!1)})).catch((e=>{console.log(e)}))}),[]);const v=[{field:"taskRef",headerName:"Task ID",width:350},{field:"siteID",headerName:"Site ID",width:130},{field:"assignedSubcon",headerName:"Assigned Subcon / Vendor",width:290,valueGetter:e=>{var s,a;return null!==(s=null===(a=e.row.assignedSubcon)||void 0===a?void 0:a.companyName)&&void 0!==s?s:void 0}},{field:"assignedMobitelOfficer",headerName:"Assigned Officer",width:250,valueGetter:e=>{var s,a;return null!==(s=null===(a=e.row.assignedMobitelOfficer)||void 0===a?void 0:a.name)&&void 0!==s?s:void 0}}];return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"content-wrapper",children:[(0,u.jsx)("div",{className:"content-header",children:(0,u.jsx)("section",{className:"content-header",children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsx)("div",{className:"row mb-2",children:(0,u.jsx)("div",{className:"col-sm-6",children:(0,u.jsx)("h1",{children:"Withdraw Tasks"})})})})})}),(0,u.jsx)("div",{style:{height:610,width:"100%"},children:(0,u.jsx)(d._$r,{getRowId:e=>e._id,rows:n,columns:v,pageSize:15,rowsPerPageOptions:[15],rowHeight:30,headerHeight:40,components:{Toolbar:d.npt}})})]}),(0,u.jsx)(l.Z,{open:s,onClose:(e,s)=>{"clickaway"!==s&&a(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,u.jsx)(c.Z,{children:(0,u.jsx)(o.Z,{sx:{display:"flex"},children:(0,u.jsx)(h.Z,{})})})})]})}))},2468:(e,s,a)=>{a.d(s,{Z:()=>i});const i={}},97326:(e,s,a)=>{function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(s,{Z:()=>i})}}]);
//# sourceMappingURL=4984.745f6ebb.chunk.js.map