(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6669],{21020:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>S});var a=s(72791),n=s(79271),o=s(74569),r=s.n(o),i=s(89743),c=s(62591),l=s(16149),d=s(2677),p=s(34575),h=s(19658),u=s(58484),f=s.n(u),m=s(64802),b=s(3986),k=s(29818),g=s(64554),j=s(39157),v=s(13239),x=s(26513),w=s(80184);const y=a.forwardRef((function(e,t){return(0,w.jsx)(h.Z,{elevation:6,ref:t,variant:"filled",...e})}));const S=(0,n.EN)((function(e){let[t,s]=(0,a.useState)([]),[n,o]=(0,a.useState)([]),[h,u]=(0,a.useState)(""),[S,Z]=(0,a.useState)(""),[N,C]=(0,a.useState)([]),[T,O]=(0,a.useState)({}),[A,M]=(0,a.useState)({}),[D,E]=(0,a.useState)(!1),[R,L]=(0,a.useState)([]),[I,_]=(0,a.useState)(!1),H=[];const U=r().create({baseURL:"http://35.78.68.113:8072"});let B=(e,t)=>{O({...T,[e]:t}),A[e]&&M({...A,[e]:null})};(0,a.useEffect)((()=>{U.get("projonline/users",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((t=>{L(t.data.projects),C(e.location.data)})).catch((e=>{console.log(e)}))}),[]);const P=[{field:"id",headerName:"File Name",width:350},{field:"Download File",width:200,renderCell:e=>(0,w.jsx)(x.Z,{variant:"contained",color:"primary",onClick:t=>{!async function(e,t){const{data:s}=await G(t.row.id),a=new Blob([s]);(0,m.saveAs)(a,t.row.id)}(0,e)},children:"Click to Download"})}],G=e=>U.get("projonline/file/"+e,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,"Content-Type":"multipart/form-data"},responseType:"arraybuffer",withCredentials:!0}),F=(e,t)=>{"clickaway"!==t&&E(!1)};return(0,w.jsxs)("div",{children:[(0,w.jsxs)("div",{className:"content-wrapper",children:[(0,w.jsx)("div",{className:"content-header",children:(0,w.jsx)("section",{className:"content-header",children:(0,w.jsx)("div",{className:"container-fluid",children:(0,w.jsx)("div",{children:(0,w.jsx)(i.Z,{children:(0,w.jsxs)(c.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[(0,w.jsx)("thead",{children:(0,w.jsxs)("tr",{children:[(0,w.jsx)("th",{children:"Task Ref"}),(0,w.jsx)("th",{children:"Site ID"}),(0,w.jsx)("th",{children:"Site Name"}),(0,w.jsx)("th",{children:"Planned Work Commencement Date"}),(0,w.jsx)("th",{children:"Planned Work Completion Date"}),(0,w.jsx)("th",{children:"Task Assigned Division"}),(0,w.jsx)("th",{children:"Assigned Officer"}),(0,w.jsx)("th",{children:"High level work scope"}),(0,w.jsx)("th",{children:"Assigned subcontractor"})]})}),(0,w.jsx)("tbody",{children:N.map((e=>(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{children:e.taskRef}),(0,w.jsx)("td",{children:e.siteID}),(0,w.jsx)("td",{children:e.siteName}),(0,w.jsx)("td",{children:e.plannedTaskStartDate.split("T")[0]}),(0,w.jsx)("td",{children:e.targetTaskComDate.split("T")[0]}),(0,w.jsx)("td",{children:e.taskAssignedDiv}),(0,w.jsx)("td",{children:e.assignedMobitelOfficer.name}),(0,w.jsx)("td",{children:e.workScope}),(0,w.jsx)("td",{children:e.assignedSubcon.companyName})]})))})]})})})})})}),(0,w.jsx)("section",{className:"content",children:(0,w.jsx)("div",{className:"container-fluid",children:(0,w.jsxs)(l.Z,{children:[(0,w.jsxs)(i.Z,{children:[(0,w.jsx)(l.Z.Group,{as:d.Z,children:(0,w.jsxs)(l.Z.Group,{as:d.Z,children:[(0,w.jsx)(l.Z.Label,{children:"Handover Details"}),(0,w.jsx)("br",{}),(0,w.jsx)(x.Z,{onClick:t=>{for(var s=f().utils.book_new(),a=[...new Set(e.location.data.map((e=>e.projectID)))],n=0;n<R.length;n++)for(var o=0;o<a.length;o++)if(a[o]===R[n].projectID){var r=[];(r=e.location.data.filter((e=>e.projectID===a[o])).map((e=>e.properties))).unshift(R[n].properties);var i=f().utils.aoa_to_sheet(r);f().utils.book_append_sheet(s,i,R[n].subProject+"_"+R[n].projectID)}s.SheetNames.length>0?f().writeFile(s,"Handover details.xlsx"):console.error("No data to write to the workbook.")},color:"primary",variant:"contained",children:"Click to Download"})]})}),(0,w.jsx)(l.Z.Group,{as:d.Z})]}),(0,w.jsx)(i.Z,{children:(0,w.jsxs)(l.Z.Group,{as:d.Z,children:[(0,w.jsx)(l.Z.Label,{children:"Download other supporting docs"}),(0,w.jsx)("div",{style:{height:200,width:"50%"},children:(0,w.jsx)(b._$r,{getRowId:e=>e.fileName,rows:e.location.data[0].files.map((e=>({id:e}))),columns:P,pageSize:3,rowsPerPageOptions:[3],rowHeight:30,headerHeight:40})})]})}),(0,w.jsxs)(i.Z,{children:[(0,w.jsxs)(l.Z.Group,{as:d.Z,children:[(0,w.jsx)(l.Z.Label,{children:"Task Assigned Subcon Officer"}),(0,w.jsx)(l.Z.Control,{onChange:e=>B("taskassignedSubconOfficer",e.target.value),value:T.taskassignedSubconOfficer,className:"col-md-9",type:"text",placeholder:"Enter name",isInvalid:!!A.taskassignedSubconOfficer}),(0,w.jsx)(l.Z.Control.Feedback,{type:"invalid",children:A.taskassignedSubconOfficer})]}),(0,w.jsxs)(l.Z.Group,{as:d.Z,children:[(0,w.jsx)(l.Z.Label,{children:"Mobile Number (Without initial zero)"}),(0,w.jsx)(l.Z.Control,{onChange:e=>B("taskassignedMobileNo",e.target.value),className:"col-md-9",value:T.taskassignedMobileNo,type:"tel",maxLength:"9",placeholder:"Enter mobile number",isInvalid:!!A.taskassignedMobileNo}),(0,w.jsx)(l.Z.Control.Feedback,{type:"invalid",children:A.taskassignedMobileNo})]}),(0,w.jsx)(l.Z.Group,{as:d.Z})]}),(0,w.jsx)(i.Z,{children:(0,w.jsxs)(l.Z.Group,{as:d.Z,children:[(0,w.jsx)(l.Z.Label,{children:"Comments"}),(0,w.jsx)(l.Z.Control,{onChange:e=>B("taskAcceptedComment",e.target.value),as:"textarea",rows:2,value:T.taskAcceptedComment,placeholder:"Enter your comments",isInvalid:!!A.taskAcceptedComment}),(0,w.jsx)(l.Z.Control.Feedback,{type:"invalid",children:A.taskAcceptedComment})]})}),(0,w.jsx)(x.Z,{color:"primary",variant:"contained",onClick:t=>{t.preventDefault();const s=(()=>{const{taskAcceptedComment:e}=T,t={};return e&&""!==e||(t.taskAcceptedComment="cannot be blank!"),t})();if(Object.keys(s).length>0)M(s);else{const t={taskassignedSubconOfficer:T.taskassignedSubconOfficer,taskassignedMobileNo:T.taskassignedMobileNo,taskStatus:"Task rejected"};N.forEach((s=>{H.push(s.siteID),U.put("projonline/update/"+s._id,{taskObject:t,taskHistory:{taskStatus:"Task rejected",comment:T.taskAcceptedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((t=>{_(!0),setTimeout((()=>{Z(t.data.alart),u(t.data.severity),E(!0)}),2e3),setTimeout((()=>{_(!1),E(!1),e.history.push({pathname:"/acceptNewTasks"})}),5e3)})).catch((e=>{console.log(e)}))})),(async e=>{const t={username:"smsdigisvc_sci",password:"Sci@#25",from:"Mobitel-PMS",to:"0"+e,text:"Site ID: "+H+" task is Reject to you now.",mesageType:0},s={method:"POST",body:JSON.stringify(t),mode:"no-cors"};await fetch("https://msmsenterpriseapi.mobitel.lk/EnterpriseSMSV3/esmsproxyURL.php",s)})(T.taskassignedMobileNo)}},children:"Reject Task"})," ",(0,w.jsx)(x.Z,{color:"primary",variant:"contained",onClick:t=>{t.preventDefault();const s=(()=>{const{taskassignedSubconOfficer:e,taskassignedMobileNo:t,taskAcceptedComment:s}=T,a={};return e&&""!==e||(a.taskassignedSubconOfficer="cannot be blank!"),t&&""!==t||(a.taskassignedMobileNo="cannot be blank!"),s&&""!==s||(a.taskAcceptedComment="cannot be blank!"),a})();if(Object.keys(s).length>0)M(s);else{const t={taskassignedSubconOfficer:T.taskassignedSubconOfficer,taskassignedMobileNo:T.taskassignedMobileNo,taskStatus:"Task accepted"};N.forEach((s=>{H.push(s.siteID),U.put("projonline/update/"+s._id,{taskObject:t,taskHistory:{taskStatus:"Task accepted",comment:T.taskAcceptedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((t=>{_(!0),setTimeout((()=>{Z(t.data.alart),u(t.data.severity),E(!0)}),2e3),setTimeout((()=>{_(!1),E(!1),e.history.push({pathname:"/acceptNewTasks"})}),5e3)})).catch((e=>{console.log(e)}))})),(async e=>{const t={username:"smsdigisvc_sci",password:"Sci@#25",from:"Mobitel-PMS",to:"0"+e,text:"Site ID: "+H+" task is assigned to you now.",mesageType:0},s={method:"POST",body:JSON.stringify(t),mode:"no-cors"};await fetch("https://msmsenterpriseapi.mobitel.lk/EnterpriseSMSV3/esmsproxyURL.php",s)})(T.taskassignedMobileNo)}},children:"Accept Task"})]})})})]}),(0,w.jsx)(p.Z,{open:D,autoHideDuration:6e3,onClose:F,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,w.jsx)(y,{onClose:F,severity:h,sx:{width:"100%"},children:S})}),(0,w.jsx)(k.Z,{open:I,onClose:F,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,w.jsx)(j.Z,{children:(0,w.jsx)(g.Z,{sx:{display:"flex"},children:(0,w.jsx)(v.Z,{})})})})]})}))},64802:function(e,t,s){var a,n,o;n=[],void 0===(o="function"===typeof(a=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,s){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){c(a.response,t,s)},a.onerror=function(){console.error("could not download file")},a.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof s.g&&s.g.global===s.g?s.g:void 0,i=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,s){var i=r.URL||r.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):n(c.href)?a(e,t,s):o(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,s,r){if(s=s||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),s);else if(n(e))a(e,s,r);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){o(i)}))}}:function(e,t,s,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,s);var o="application/octet-stream"===e.type,c=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||o&&c||i)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},d.readAsDataURL(e)}else{var p=r.URL||r.webkitURL,h=p.createObjectURL(e);n?n.location=h:location.href=h,n=null,setTimeout((function(){p.revokeObjectURL(h)}),4e4)}});r.saveAs=c.saveAs=c,e.exports=c})?a.apply(t,n):a)||(e.exports=o)},62591:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var a=s(87462),n=s(63366),o=s(81694),r=s.n(o),i=s(72791),c=s(10162),l=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"];const d=i.forwardRef((function(e,t){var s=e.bsPrefix,o=e.className,d=e.striped,p=e.bordered,h=e.borderless,u=e.hover,f=e.size,m=e.variant,b=e.responsive,k=(0,n.Z)(e,l),g=(0,c.vE)(s,"table"),j=r()(o,g,m&&g+"-"+m,f&&g+"-"+f,d&&g+"-striped",p&&g+"-bordered",h&&g+"-borderless",u&&g+"-hover"),v=i.createElement("table",(0,a.Z)({},k,{className:j,ref:t}));if(b){var x=g+"-responsive";return"string"===typeof b&&(x=x+"-"+b),i.createElement("div",{className:x},v)}return v}))},55382:()=>{},72095:()=>{},61219:()=>{}}]);
//# sourceMappingURL=6669.49e7a680.chunk.js.map