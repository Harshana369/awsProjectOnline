(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6669],{21020:function(e,t,n){"use strict";n.r(t);var s=n(93433),a=n(74165),o=n(15861),r=n(4942),i=n(29439),c=n(1413),l=n(72791),d=n(79271),u=n(74569),f=n.n(u),p=n(89743),h=n(62591),m=n(16149),k=n(2677),v=n(34575),b=n(19658),j=n(58484),g=n.n(j),x=n(64802),Z=n(3986),w=n(29818),y=n(64554),S=n(39157),N=n(13239),C=n(26513),T=n(80184),O=l.forwardRef((function(e,t){return(0,T.jsx)(b.Z,(0,c.Z)({elevation:6,ref:t,variant:"filled"},e))}));t.default=(0,d.EN)((function(e){var t=(0,l.useState)([]),n=(0,i.Z)(t,2),d=(n[0],n[1],(0,l.useState)([])),u=(0,i.Z)(d,2),b=(u[0],u[1],(0,l.useState)("")),j=(0,i.Z)(b,2),A=j[0],D=j[1],M=(0,l.useState)(""),E=(0,i.Z)(M,2),L=E[0],R=E[1],I=(0,l.useState)([]),H=(0,i.Z)(I,2),_=H[0],U=H[1],B=(0,l.useState)({}),G=(0,i.Z)(B,2),P=G[0],F=G[1],z=(0,l.useState)({}),J=(0,i.Z)(z,2),W=J[0],q=J[1],V=(0,l.useState)(!1),X=(0,i.Z)(V,2),K=X[0],$=X[1],Q=(0,l.useState)([]),Y=(0,i.Z)(Q,2),ee=Y[0],te=Y[1],ne=(0,l.useState)(!1),se=(0,i.Z)(ne,2),ae=se[0],oe=se[1],re=[],ie=f().create({baseURL:"http://localhost:8072/"}),ce=function(e,t){F((0,c.Z)((0,c.Z)({},P),{},(0,r.Z)({},e,t))),W[e]&&q((0,c.Z)((0,c.Z)({},W),{},(0,r.Z)({},e,null)))};(0,l.useEffect)((function(){ie.get("projonline/users",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(t){te(t.data.projects),U(e.location.data)})).catch((function(e){console.log(e)}))}),[]);var le=[{field:"id",headerName:"File Name",width:350},{field:"Download File",width:200,renderCell:function(e){return(0,T.jsx)(C.Z,{variant:"contained",color:"primary",onClick:function(t){!function(e,t){de.apply(this,arguments)}(t,e)},children:"Click to Download"})}}];function de(){return(de=(0,o.Z)((0,a.Z)().mark((function e(t,n){var s,o,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue(n.row.id);case 2:s=e.sent,o=s.data,r=new Blob([o]),(0,x.saveAs)(r,n.row.id);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ue=function(e){return ie.get("projonline/file/"+e,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,"Content-Type":"multipart/form-data"},responseType:"arraybuffer",withCredentials:!0})},fe=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://msmsenterpriseapi.mobitel.lk/EnterpriseSMSV3/esmsproxyURL.php",n={username:"smsdigisvc_sci",password:"Sci@#25",from:"Mobitel-PMS",to:"0"+t,text:"Site ID: "+re+" task is assigned to you now.",mesageType:0},s={method:"POST",body:JSON.stringify(n),mode:"no-cors"},e.next=5,fetch("https://msmsenterpriseapi.mobitel.lk/EnterpriseSMSV3/esmsproxyURL.php",s);case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(e,t){"clickaway"!==t&&$(!1)};return(0,T.jsxs)("div",{children:[(0,T.jsxs)("div",{className:"content-wrapper",children:[(0,T.jsx)("div",{className:"content-header",children:(0,T.jsx)("section",{className:"content-header",children:(0,T.jsx)("div",{className:"container-fluid",children:(0,T.jsx)("div",{children:(0,T.jsx)(p.Z,{children:(0,T.jsxs)(h.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{children:"Task Ref"}),(0,T.jsx)("th",{children:"Site ID"}),(0,T.jsx)("th",{children:"Site Name"}),(0,T.jsx)("th",{children:"Planned Work Commencement Date"}),(0,T.jsx)("th",{children:"Planned Work Completion Date"}),(0,T.jsx)("th",{children:"Task Assigned Division"}),(0,T.jsx)("th",{children:"Assigned Officer"}),(0,T.jsx)("th",{children:"High level work scope"}),(0,T.jsx)("th",{children:"Assigned subcontractor"})]})}),(0,T.jsx)("tbody",{children:_.map((function(e){return(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:e.taskRef}),(0,T.jsx)("td",{children:e.siteID}),(0,T.jsx)("td",{children:e.siteName}),(0,T.jsx)("td",{children:e.plannedTaskStartDate.split("T")[0]}),(0,T.jsx)("td",{children:e.targetTaskComDate.split("T")[0]}),(0,T.jsx)("td",{children:e.taskAssignedDiv}),(0,T.jsx)("td",{children:e.assignedMobitelOfficer.name}),(0,T.jsx)("td",{children:e.workScope}),(0,T.jsx)("td",{children:e.assignedSubcon.companyName})]})}))})]})})})})})}),(0,T.jsx)("section",{className:"content",children:(0,T.jsx)("div",{className:"container-fluid",children:(0,T.jsxs)(m.Z,{children:[(0,T.jsxs)(p.Z,{children:[(0,T.jsx)(m.Z.Group,{as:k.Z,children:(0,T.jsxs)(m.Z.Group,{as:k.Z,children:[(0,T.jsx)(m.Z.Label,{children:"Handover Details"}),(0,T.jsx)("br",{}),(0,T.jsx)(C.Z,{onClick:function(t){for(var n=g().utils.book_new(),a=(0,s.Z)(new Set(e.location.data.map((function(e){return e.projectID})))),o=0;o<ee.length;o++)for(var r=0;r<a.length;r++)if(a[r]===ee[o].projectID){var i=[];(i=e.location.data.filter((function(e){return e.projectID===a[r]})).map((function(e){return e.properties}))).unshift(ee[o].properties);var c=g().utils.aoa_to_sheet(i);g().utils.book_append_sheet(n,c,ee[o].subProject+"_"+ee[o].projectID)}n.SheetNames.length>0?g().writeFile(n,"Handover details.xlsx"):console.error("No data to write to the workbook.")},color:"primary",variant:"contained",children:"Click to Download"})]})}),(0,T.jsx)(m.Z.Group,{as:k.Z})]}),(0,T.jsx)(p.Z,{children:(0,T.jsxs)(m.Z.Group,{as:k.Z,children:[(0,T.jsx)(m.Z.Label,{children:"Download other supporting docs"}),(0,T.jsx)("div",{style:{height:200,width:"50%"},children:(0,T.jsx)(Z._$r,{getRowId:function(e){return e.fileName},rows:e.location.data[0].files.map((function(e){return{id:e}})),columns:le,pageSize:3,rowsPerPageOptions:[3],rowHeight:30,headerHeight:40})})]})}),(0,T.jsxs)(p.Z,{children:[(0,T.jsxs)(m.Z.Group,{as:k.Z,children:[(0,T.jsx)(m.Z.Label,{children:"Task Assigned Subcon Officer"}),(0,T.jsx)(m.Z.Control,{onChange:function(e){return ce("taskassignedSubconOfficer",e.target.value)},value:P.taskassignedSubconOfficer,className:"col-md-9",type:"text",placeholder:"Enter name",isInvalid:!!W.taskassignedSubconOfficer}),(0,T.jsx)(m.Z.Control.Feedback,{type:"invalid",children:W.taskassignedSubconOfficer})]}),(0,T.jsxs)(m.Z.Group,{as:k.Z,children:[(0,T.jsx)(m.Z.Label,{children:"Mobile Number (Without initial zero)"}),(0,T.jsx)(m.Z.Control,{onChange:function(e){return ce("taskassignedMobileNo",e.target.value)},className:"col-md-9",value:P.taskassignedMobileNo,type:"tel",maxLength:"9",placeholder:"Enter mobile number",isInvalid:!!W.taskassignedMobileNo}),(0,T.jsx)(m.Z.Control.Feedback,{type:"invalid",children:W.taskassignedMobileNo})]}),(0,T.jsx)(m.Z.Group,{as:k.Z})]}),(0,T.jsx)(p.Z,{children:(0,T.jsxs)(m.Z.Group,{as:k.Z,children:[(0,T.jsx)(m.Z.Label,{children:"Comments"}),(0,T.jsx)(m.Z.Control,{onChange:function(e){return ce("taskAcceptedComment",e.target.value)},as:"textarea",rows:2,value:P.taskAcceptedComment,placeholder:"Enter your comments",isInvalid:!!W.taskAcceptedComment}),(0,T.jsx)(m.Z.Control.Feedback,{type:"invalid",children:W.taskAcceptedComment})]})}),(0,T.jsx)(C.Z,{color:"primary",variant:"contained",onClick:function(t){t.preventDefault();var n=function(){var e=P.taskAcceptedComment,t={};return e&&""!==e||(t.taskAcceptedComment="cannot be blank!"),t}();if(Object.keys(n).length>0)q(n);else{var s={taskassignedSubconOfficer:P.taskassignedSubconOfficer,taskassignedMobileNo:P.taskassignedMobileNo,taskStatus:"Task rejected"};ie.put("projonline/update/"+e.location.data.row._id,{taskObject:s,taskHistory:{taskStatus:"Task rejected",comment:P.taskAcceptedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(t){oe(!0),setTimeout((function(){R(t.data.alart),D(t.data.severity),$(!0)}),2e3),setTimeout((function(){oe(!1),$(!1),e.history.push({pathname:"/acceptNewTasks"})}),5e3)})).catch((function(e){console.log(e)}))}},children:"Reject Task"})," ",(0,T.jsx)(C.Z,{color:"primary",variant:"contained",onClick:function(t){t.preventDefault();var n=function(){var e=P.taskassignedSubconOfficer,t=P.taskassignedMobileNo,n=P.taskAcceptedComment,s={};return e&&""!==e||(s.taskassignedSubconOfficer="cannot be blank!"),t&&""!==t||(s.taskassignedMobileNo="cannot be blank!"),n&&""!==n||(s.taskAcceptedComment="cannot be blank!"),s}();if(Object.keys(n).length>0)q(n);else{var s={taskassignedSubconOfficer:P.taskassignedSubconOfficer,taskassignedMobileNo:P.taskassignedMobileNo,taskStatus:"Task accepted"};_.forEach((function(t){re.push(t.siteID),ie.put("projonline/update/"+t._id,{taskObject:s,taskHistory:{taskStatus:"Task accepted",comment:P.taskAcceptedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(t){oe(!0),setTimeout((function(){R(t.data.alart),D(t.data.severity),$(!0)}),2e3),setTimeout((function(){oe(!1),$(!1),e.history.push({pathname:"/acceptNewTasks"})}),5e3)})).catch((function(e){console.log(e)}))})),fe(P.taskassignedMobileNo)}},children:"Accept Task"})]})})})]}),(0,T.jsx)(v.Z,{open:K,autoHideDuration:6e3,onClose:pe,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,T.jsx)(O,{onClose:pe,severity:A,sx:{width:"100%"},children:L})}),(0,T.jsx)(w.Z,{open:ae,onClose:pe,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,T.jsx)(S.Z,{children:(0,T.jsx)(y.Z,{sx:{display:"flex"},children:(0,T.jsx)(N.Z,{})})})})]})}))},64802:function(e,t,n){var s,a,o;a=[],void 0===(o="function"===typeof(s=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function s(e,t,n){var s=new XMLHttpRequest;s.open("GET",e),s.responseType="blob",s.onload=function(){c(s.response,t,n)},s.onerror=function(){console.error("could not download file")},s.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(s){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,i=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,n){var i=r.URL||r.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):a(c.href)?s(e,t,n):o(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(a(e))s(e,n,r);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){o(i)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return s(e,t,n);var o="application/octet-stream"===e.type,c=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||o&&c||i)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(e)}else{var u=r.URL||r.webkitURL,f=u.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){u.revokeObjectURL(f)}),4e4)}});r.saveAs=c.saveAs=c,e.exports=c})?s.apply(t,a):s)||(e.exports=o)},62591:function(e,t,n){"use strict";var s=n(87462),a=n(63366),o=n(81694),r=n.n(o),i=n(72791),c=n(10162),l=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=i.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,d=e.striped,u=e.bordered,f=e.borderless,p=e.hover,h=e.size,m=e.variant,k=e.responsive,v=(0,a.Z)(e,l),b=(0,c.vE)(n,"table"),j=r()(o,b,m&&b+"-"+m,h&&b+"-"+h,d&&b+"-striped",u&&b+"-bordered",f&&b+"-borderless",p&&b+"-hover"),g=i.createElement("table",(0,s.Z)({},v,{className:j,ref:t}));if(k){var x=b+"-responsive";return"string"===typeof k&&(x=x+"-"+k),i.createElement("div",{className:x},g)}return g}));t.Z=d},55382:function(){},72095:function(){},61219:function(){}}]);
//# sourceMappingURL=6669.6d0a9725.chunk.js.map