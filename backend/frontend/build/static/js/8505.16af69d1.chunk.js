"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8505],{91745:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var o=a(72791),r=a(74569),s=a.n(r),n=a(3986),c=(a(2468),a(76897),a(25498),a(31052),a(80184));const i=function(e){let[t,a]=(0,o.useState)(!1),[r,i]=(0,o.useState)([]);const l=s().create({baseURL:"http://ec2-65-2-5-82.ap-south-1.compute.amazonaws.com/"});let[d,h]=(0,o.useState)([]);(0,o.useEffect)((()=>{a(!0),l.get("projonline/gettasks/alreadyCompletedTaskVender",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{i(e.data.tasks),a(!1)})).catch((e=>{console.log(e)}))}),[]),JSON.parse(localStorage.getItem("user")).visbilityBasedOn;const f=[{field:"taskRef",headerName:"Task ID",width:300},{field:"siteID",headerName:"Site ID",width:130},{field:"companyName",headerName:"Subcon / Vender",width:210,valueGetter:e=>e.row.assignedSubcon.companyName},{field:"assignedMobitelOfficer",headerName:"Assigned Officer",width:205,valueGetter:e=>e.row.assignedMobitelOfficer.name},{field:"Taskhandedover",headerName:"Task Handover Date",width:250,valueGetter:e=>{for(let t=0;t<e.row.taskHistory.length;t++){if("Task handed over"===e.row.taskHistory[t].taskStatus){const a=e.row.taskHistory[t].performedDate,o=new Date(a),r=o.getFullYear(),s=o.getMonth()+1,n=o.getDate();return"".concat(r,"-").concat(s<10?"0":"").concat(s,"-").concat(n<10?"0":"").concat(n)}}}},{field:"Subconallocated",headerName:"Subcon Allocated Date",width:280,valueGetter:e=>{for(let t=0;t<e.row.taskHistory.length;t++){if("Subcon allocated"===e.row.taskHistory[t].taskStatus){const a=e.row.taskHistory[t].performedDate,o=new Date(a),r=o.getFullYear(),s=o.getMonth()+1,n=o.getDate();return"".concat(r,"-").concat(s<10?"0":"").concat(s,"-").concat(n<10?"0":"").concat(n)}}}},{field:"Task accepted",headerName:"Task Accepted Date",width:250,valueGetter:e=>{for(let t=0;t<e.row.taskHistory.length;t++){if("Task accepted"===e.row.taskHistory[t].taskStatus){const a=e.row.taskHistory[t].performedDate,o=new Date(a),r=o.getFullYear(),s=o.getMonth()+1,n=o.getDate();return"".concat(r,"-").concat(s<10?"0":"").concat(s,"-").concat(n<10?"0":"").concat(n)}}}},{field:"Taskcommenced",headerName:"Task commenced Date",width:280,valueGetter:e=>{for(let t=0;t<e.row.taskHistory.length;t++){if("Task commenced"===e.row.taskHistory[t].taskStatus){const a=e.row.taskHistory[t].performedDate,o=new Date(a),r=o.getFullYear(),s=o.getMonth()+1,n=o.getDate();return"".concat(r,"-").concat(s<10?"0":"").concat(s,"-").concat(n<10?"0":"").concat(n)}}}},{field:"Taskcompleted",headerName:"Task completed Date",width:280,valueGetter:e=>{for(let t=0;t<e.row.taskHistory.length;t++){if("Task completed"===e.row.taskHistory[t].taskStatus){const a=e.row.taskHistory[t].performedDate,o=new Date(a),r=o.getFullYear(),s=o.getMonth()+1,n=o.getDate();return"".concat(r,"-").concat(s<10?"0":"").concat(s,"-").concat(n<10?"0":"").concat(n)}}}},{field:"Sitecommissioned",headerName:"Commissioned Date",width:250,valueGetter:e=>{for(let t=0;t<e.row.taskHistory.length;t++){if("Site Commissioned"===e.row.taskHistory[t].comStatus){const a=e.row.taskHistory[t].performedDate,o=new Date(a),r=o.getFullYear(),s=o.getMonth()+1,n=o.getDate();return"".concat(r,"-").concat(s<10?"0":"").concat(s,"-").concat(n<10?"0":"").concat(n)}}}},{field:"PATPass",headerName:"PAT Pass Date",width:250,valueGetter:e=>{for(let t=0;t<e.row.taskHistory.length;t++){if("PAT Pass"===e.row.taskHistory[t].patStatus){const a=e.row.taskHistory[t].performedDate,o=new Date(a),r=o.getFullYear(),s=o.getMonth()+1,n=o.getDate();return"".concat(r,"-").concat(s<10?"0":"").concat(s,"-").concat(n<10?"0":"").concat(n)}}}},{field:"SAR Pass",headerName:"SAR Pass Date",width:250,valueGetter:e=>{for(let t=0;t<e.row.taskHistory.length;t++){if("SAR Pass"===e.row.taskHistory[t].sarStatus){const a=e.row.taskHistory[t].performedDate,o=new Date(a),r=o.getFullYear(),s=o.getMonth()+1,n=o.getDate();return"".concat(r,"-").concat(s<10?"0":"").concat(s,"-").concat(n<10?"0":"").concat(n)}}}},{field:"SiteOn-Air",headerName:"Site On-Air Date",width:250,valueGetter:e=>{for(let t=0;t<e.row.taskHistory.length;t++){if("Site On-Air"===e.row.taskHistory[t].onairStatus){const a=e.row.taskHistory[t].performedDate,o=new Date(a),r=o.getFullYear(),s=o.getMonth()+1,n=o.getDate();return"".concat(r,"-").concat(s<10?"0":"").concat(s,"-").concat(n<10?"0":"").concat(n)}}}}];return(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"content-wrapper",children:[(0,c.jsx)("div",{className:"content-header",children:(0,c.jsx)("section",{className:"content-header",children:(0,c.jsx)("div",{className:"container-fluid",children:(0,c.jsx)("div",{className:"row mb-2",children:(0,c.jsx)("div",{className:"col-sm-6",children:(0,c.jsx)("h1",{children:"All Completed Tasks"})})})})})}),(0,c.jsx)("div",{style:{height:610,width:"100%"},children:(0,c.jsx)(n._$r,{getRowId:e=>e._id,rows:r,columns:f,pageSize:15,rowsPerPageOptions:[15],rowHeight:30,headerHeight:40,components:{Toolbar:n.npt}})})]})})}},28182:(e,t,a)=>{function o(e){var t,a,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=o(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:()=>r})},2468:(e,t,a)=>{a.d(t,{Z:()=>o});const o={}},97326:(e,t,a)=>{function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,{Z:()=>o})}}]);
//# sourceMappingURL=8505.16af69d1.chunk.js.map