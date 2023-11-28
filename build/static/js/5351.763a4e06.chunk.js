"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5351],{91745:function(e,t,a){a.r(t);var r=a(29439),o=a(72791),n=a(74569),c=a.n(n),s=a(3986),i=(a(2468),a(76897),a(25498),a(31052),a(80184));t.default=function(e){var t=(0,o.useState)(!1),a=(0,r.Z)(t,2),n=(a[0],a[1]),d=(0,o.useState)([]),l=(0,r.Z)(d,2),u=l[0],f=l[1],h=c().create({baseURL:"http://ec2-65-2-5-82.ap-south-1.compute.amazonaws.com/"}),m=(0,o.useState)([]),w=(0,r.Z)(m,2);w[0],w[1],(0,o.useEffect)((function(){n(!0),h.get("projonline/gettasks/alreadyCompletedTaskVender",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(e){console.log(e.data.tasks),f(e.data.tasks),n(!1)})).catch((function(e){console.log(e)}))}),[]);var g=JSON.parse(localStorage.getItem("user")).visbilityBasedOn;console.log(g);var k=[{field:"taskRef",headerName:"Task ID",width:300},{field:"siteID",headerName:"Site ID",width:130},{field:"companyName",headerName:"Subcon / Vender",width:210,valueGetter:function(e){return e.row.assignedSubcon.companyName}},{field:"assignedMobitelOfficer",headerName:"Assigned Officer",width:205,valueGetter:function(e){return e.row.assignedMobitelOfficer.name}},{field:"Taskhandedover",headerName:"Task Handover Date",width:250,valueGetter:function(e){for(var t=0;t<e.row.taskHistory.length;t++){if("Task handed over"===e.row.taskHistory[t].taskStatus){var a=e.row.taskHistory[t].performedDate,r=new Date(a),o=r.getFullYear(),n=r.getMonth()+1,c=r.getDate();return"".concat(o,"-").concat(n<10?"0":"").concat(n,"-").concat(c<10?"0":"").concat(c)}}}},{field:"Subconallocated",headerName:"Subcon Allocated Date",width:280,valueGetter:function(e){for(var t=0;t<e.row.taskHistory.length;t++){if("Subcon allocated"===e.row.taskHistory[t].taskStatus){var a=e.row.taskHistory[t].performedDate,r=new Date(a),o=r.getFullYear(),n=r.getMonth()+1,c=r.getDate();return"".concat(o,"-").concat(n<10?"0":"").concat(n,"-").concat(c<10?"0":"").concat(c)}}}},{field:"Taskcommenced",headerName:"Task commenced Date",width:280,valueGetter:function(e){for(var t=0;t<e.row.taskHistory.length;t++){if("Task commenced"===e.row.taskHistory[t].taskStatus){var a=e.row.taskHistory[t].performedDate,r=new Date(a),o=r.getFullYear(),n=r.getMonth()+1,c=r.getDate();return"".concat(o,"-").concat(n<10?"0":"").concat(n,"-").concat(c<10?"0":"").concat(c)}}}},{field:"Taskcompleted",headerName:"Task completed Date",width:280,valueGetter:function(e){for(var t=0;t<e.row.taskHistory.length;t++){if("Task completed"===e.row.taskHistory[t].taskStatus){var a=e.row.taskHistory[t].performedDate,r=new Date(a),o=r.getFullYear(),n=r.getMonth()+1,c=r.getDate();return"".concat(o,"-").concat(n<10?"0":"").concat(n,"-").concat(c<10?"0":"").concat(c)}}}},{field:"Sitecommissioned",headerName:"Commissioned Date",width:250,valueGetter:function(e){for(var t=0;t<e.row.taskHistory.length;t++){if("Site Commissioned"===e.row.taskHistory[t].comStatus){var a=e.row.taskHistory[t].performedDate,r=new Date(a),o=r.getFullYear(),n=r.getMonth()+1,c=r.getDate();return"".concat(o,"-").concat(n<10?"0":"").concat(n,"-").concat(c<10?"0":"").concat(c)}}}},{field:"PATPass",headerName:"PAT Pass Date",width:250,valueGetter:function(e){for(var t=0;t<e.row.taskHistory.length;t++){if("PAT Pass"===e.row.taskHistory[t].patStatus){var a=e.row.taskHistory[t].performedDate,r=new Date(a),o=r.getFullYear(),n=r.getMonth()+1,c=r.getDate();return"".concat(o,"-").concat(n<10?"0":"").concat(n,"-").concat(c<10?"0":"").concat(c)}}}},{field:"SiteOn-Air",headerName:"Site On-Air Date",width:250,valueGetter:function(e){for(var t=0;t<e.row.taskHistory.length;t++){if("Site On-Air"===e.row.taskHistory[t].onairStatus){var a=e.row.taskHistory[t].performedDate,r=new Date(a),o=r.getFullYear(),n=r.getMonth()+1,c=r.getDate();return"".concat(o,"-").concat(n<10?"0":"").concat(n,"-").concat(c<10?"0":"").concat(c)}}}},{field:"Task accepted",headerName:"Task Accepted Date",width:250,valueGetter:function(e){for(var t=0;t<e.row.taskHistory.length;t++){if("Task accepted"===e.row.taskHistory[t].taskStatus){var a=e.row.taskHistory[t].performedDate,r=new Date(a),o=r.getFullYear(),n=r.getMonth()+1,c=r.getDate();return"".concat(o,"-").concat(n<10?"0":"").concat(n,"-").concat(c<10?"0":"").concat(c)}}}},{field:"SAR Pass",headerName:"Sar Pass Date",width:250,valueGetter:function(e){for(var t=0;t<e.row.taskHistory.length;t++){if("SAR Pass"===e.row.taskHistory[t].sarStatus){var a=e.row.taskHistory[t].performedDate,r=new Date(a),o=r.getFullYear(),n=r.getMonth()+1,c=r.getDate();return"".concat(o,"-").concat(n<10?"0":"").concat(n,"-").concat(c<10?"0":"").concat(c)}}}}];return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"content-wrapper",children:[(0,i.jsx)("div",{className:"content-header",children:(0,i.jsx)("section",{className:"content-header",children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsx)("div",{className:"row mb-2",children:(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("h1",{children:"All Completed Tasks"})})})})})}),(0,i.jsx)("div",{style:{height:610,width:"100%"},children:(0,i.jsx)(s._$r,{getRowId:function(e){return e._id},rows:u,columns:k,pageSize:15,rowsPerPageOptions:[15],rowHeight:30,headerHeight:40,components:{Toolbar:s.npt}})})]})})}},28182:function(e,t,a){function r(e){var t,a,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})},2468:function(){},97326:function(e,t,a){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,{Z:function(){return r}})},59199:function(e,t,a){function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}a.d(t,{Z:function(){return r}})},93433:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(30907);var o=a(59199),n=a(40181);function c(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,o.Z)(e)||(0,n.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=5351.763a4e06.chunk.js.map