(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5375],{61896:function(e,a,s){"use strict";s.r(a);var t=s(74165),n=s(15861),o=s(4942),i=s(29439),l=s(1413),r=s(72791),c=s(79271),d=s(74569),u=s.n(d),p=s(16149),m=s(89743),h=s(2677),x=s(43360),Z=s(34575),j=s(19658),k=s(58484),b=s.n(k),f=s(29818),v=s(64554),C=s(39157),g=s(13239),S=s(80184),y=r.forwardRef((function(e,a){return(0,S.jsx)(j.Z,(0,l.Z)({elevation:6,ref:a,variant:"filled"},e))}));a.default=(0,c.EN)((function(e){var a=(0,r.useState)([]),s=(0,i.Z)(a,2),c=s[0],d=s[1],j=(0,r.useState)([]),k=(0,i.Z)(j,2),w=k[0],D=k[1],N=(0,r.useState)(""),T=(0,i.Z)(N,2),I=T[0],O=T[1],M=(0,r.useState)(""),G=(0,i.Z)(M,2),L=G[0],_=G[1],F=u().create({baseURL:"http://localhost:8072/"}),A=(0,r.useState)({}),P=(0,i.Z)(A,2),E=P[0],R=P[1],H=(0,r.useState)({}),V=(0,i.Z)(H,2),W=V[0],U=V[1],B=(0,r.useState)(!1),J=(0,i.Z)(B,2),z=J[0],X=J[1],q=(0,r.useState)(!1),K=(0,i.Z)(q,2),Q=K[0],Y=K[1],$=function(e,a){R((0,l.Z)((0,l.Z)({},E),{},(0,o.Z)({},e,a))),W[e]&&U((0,l.Z)((0,l.Z)({},W),{},(0,o.Z)({},e,null)))};(0,r.useEffect)((function(){d([{name:e.location.data.row.assignedMobitelOfficer.name}]),D([{companyName:e.location.data.row.assignedSubcon.companyName}]),R({taskRef:e.location.data.row.taskRef,siteID:e.location.data.row.siteID,siteName:e.location.data.row.siteName,plannedTaskStartDate:e.location.data.row.plannedTaskStartDate.split("T")[0],actualTaskStartDate:e.location.data.row.taskHistory.find((function(e){return"Task commenced"===e.taskStatus})).performedDate.split("T")[0],targetTaskComDate:e.location.data.row.targetTaskComDate.split("T")[0],taskAssignedDiv:e.location.data.row.taskAssignedDiv,assignedMobitelOfficer:e.location.data.row.assignedMobitelOfficer.name,workScope:e.location.data.row.workScope,assignedSubcon:e.location.data.row.assignedSubcon.companyName,taskassignedSubconOfficer:e.location.data.row.taskassignedSubconOfficer,taskassignedMobileNo:e.location.data.row.taskassignedMobileNo})}),[]);var ee=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(a){var s,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://msmsenterpriseapi.mobitel.lk/EnterpriseSMSV3/esmsproxyURL.php",s={username:"smsdigisvc_sci",password:"Sci@#25",from:"Mobitel-PMS",to:"0"+a,text:"Task ID: "+E.taskRef+" task is completed now.",mesageType:0},n={method:"POST",body:JSON.stringify(s),mode:"no-cors"},e.next=5,fetch("https://msmsenterpriseapi.mobitel.lk/EnterpriseSMSV3/esmsproxyURL.php",n);case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),ae=function(e,a){"clickaway"!==a&&X(!1)};return(0,S.jsxs)("div",{children:[(0,S.jsxs)("div",{className:"content-wrapper",children:[(0,S.jsx)("div",{className:"content-header",children:(0,S.jsx)("section",{className:"content-header",children:(0,S.jsx)("div",{className:"container-fluid",children:(0,S.jsx)("div",{children:(0,S.jsxs)("h1",{children:["Complete Task ID: ",E.taskRef," "]})})})})}),(0,S.jsx)("section",{className:"content",children:(0,S.jsx)("div",{className:"container-fluid",children:(0,S.jsxs)(p.Z,{children:[(0,S.jsxs)(m.Z,{children:[(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Site ID"}),(0,S.jsx)(p.Z.Control,{disabled:!0,value:E.siteID,className:"col-md-9",type:"text",placeholder:"Enter site ID",isInvalid:!!W.siteID}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:W.siteID})]}),(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Site Name"}),(0,S.jsx)(p.Z.Control,{disabled:!0,value:E.siteName,type:"text",placeholder:"Enter site Name",isInvalid:!!W.siteName}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:W.siteName})]}),(0,S.jsx)(p.Z.Group,{as:h.Z,controlId:""})]}),(0,S.jsxs)(m.Z,{className:"mb-3",children:[(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Planned Work Commencement Date"}),(0,S.jsx)(p.Z.Control,{disabled:!0,value:E.plannedTaskStartDate,className:"col-md-9",type:"date",isInvalid:!!W.plannedTaskStartDate}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:W.plannedTaskStartDate})]}),(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Actual Work Commencement Date"}),(0,S.jsx)(p.Z.Control,{disabled:!0,value:E.actualTaskStartDate,className:"col-md-9",type:"date",isInvalid:!!W.actualTaskStartDate}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:W.actualTaskStartDate})]}),(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Planned Work Completion Date"}),(0,S.jsx)(p.Z.Control,{disabled:!0,value:E.targetTaskComDate,className:"col-md-9",type:"date",isInvalid:!!W.targetTaskComDate}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:W.targetTaskComDate})]})]}),(0,S.jsxs)(m.Z,{children:[(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Task Assigned Division"}),(0,S.jsxs)(p.Z.Control,{disabled:!0,value:E.taskAssignedDiv,as:"select",defaultValue:"Choose...",isInvalid:!!W.taskAssignedDiv,children:[(0,S.jsx)("option",{children:"Choose..."}),(0,S.jsx)("option",{children:"Project_Radio"}),(0,S.jsx)("option",{children:"Project_Core"}),(0,S.jsx)("option",{children:"Project_TX"}),(0,S.jsx)("option",{children:"Project_IBS"}),(0,S.jsx)("option",{children:"Project_WiFi"})]}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:W.taskAssignedDiv})]}),(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Assigned Mobitel Officer"}),(0,S.jsxs)(p.Z.Control,{disabled:!0,as:"select",value:E.assignedMobitelOfficer,defaultValue:"Choose...",isInvalid:!!W.assignedMobitelOfficer,children:[(0,S.jsx)("option",{children:"Choose..."}),c.map((function(e){return(0,S.jsx)("option",{value:e._id,children:e.name})}))]}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:W.assignedMobitelOfficer})]}),(0,S.jsx)(p.Z.Group,{as:h.Z})]}),(0,S.jsx)(m.Z,{children:(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"High level work scope"}),(0,S.jsx)(p.Z.Control,{disabled:!0,value:E.workScope,as:"textarea",rows:2,placeholder:"",isInvalid:!!W.workScope}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:W.workScope})]})}),(0,S.jsxs)(m.Z,{className:"mb-3",children:[(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Assigned subcontractor"}),(0,S.jsxs)(p.Z.Control,{disabled:!0,value:E.assignedSubcon,as:"select",defaultValue:"Choose...",isInvalid:!!W.assignedSubcon,children:[(0,S.jsx)("option",{children:"Choose..."}),w.map((function(e){return(0,S.jsx)("option",{value:e._id,children:e.companyName})}))]}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:W.assignedSubcon})]}),(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Handover Details"}),(0,S.jsx)("br",{}),(0,S.jsx)(x.Z,{onClick:function(a){var s=b().utils.book_new(),t=[];t.push(e.location.data.row.properties),t.unshift(e.location.data.row.headerProperties);var n=b().utils.aoa_to_sheet(t);b().utils.book_append_sheet(s,n,"HO Details"),b().writeFile(s,e.location.data.row.siteID+"_Handover details.xlsx")},variant:"primary",type:"button",children:"Click to Download"})]}),(0,S.jsx)(p.Z.Group,{as:h.Z})]}),(0,S.jsxs)(m.Z,{children:[(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Task Assigned Subcon Officer"}),(0,S.jsx)(p.Z.Control,{disabled:!0,onChange:function(e){return $("taskassignedSubconOfficer",e.target.value)},value:E.taskassignedSubconOfficer,className:"col-md-9",type:"text",placeholder:"Enter name",isInvalid:!!W.taskassignedSubconOfficer}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:W.taskassignedSubconOfficer})]}),(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Mobile Number"}),(0,S.jsx)(p.Z.Control,{disabled:!0,onChange:function(e){return $("taskassignedMobileNo",e.target.value)},className:"col-md-9",value:E.taskassignedMobileNo,type:"number",placeholder:"Enter mobile number",isInvalid:!!W.taskassignedMobileNo}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:W.taskassignedMobileNo})]}),(0,S.jsx)(p.Z.Group,{as:h.Z})]}),(0,S.jsx)(m.Z,{children:(0,S.jsxs)(p.Z.Group,{as:h.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Comments"}),(0,S.jsx)(p.Z.Control,{onChange:function(e){return $("taskCommencedComment",e.target.value)},as:"textarea",rows:2,value:E.taskCommencedComment,placeholder:"Enter your comments",isInvalid:!!W.taskCommencedComment}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:W.taskCommencedComment})]})}),(0,S.jsx)(x.Z,{variant:"primary",onClick:function(a){a.preventDefault();var s=function(){var e=E.taskCommencedComment,a={};return e&&""!==e||(a.taskCommencedComment="cannot be blank!"),a}();if(Object.keys(s).length>0)U(s);else{F.put("projonline/update/"+e.location.data.row._id,{taskObject:{taskStatus:"Task completed"},taskHistory:{taskStatus:"Task completed",comment:E.taskCommencedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(a){Y(!0),ee(E.taskassignedMobileNo),setTimeout((function(){_(a.data.alart),O(a.data.severity),X(!0)}),2e3),setTimeout((function(){Y(!1),X(!1),e.history.push({pathname:"/completeNewTasks"})}),5e3)})).catch((function(e){console.log(e)}))}},children:"Task complete"})]})})})]}),(0,S.jsx)(Z.Z,{open:z,autoHideDuration:6e3,onClose:ae,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,S.jsx)(y,{onClose:ae,severity:I,sx:{width:"100%"},children:L})}),(0,S.jsx)(f.Z,{open:Q,onClose:ae,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,S.jsx)(C.Z,{children:(0,S.jsx)(v.Z,{sx:{display:"flex"},children:(0,S.jsx)(g.Z,{})})})})]})}))},55382:function(){},72095:function(){},61219:function(){}}]);
//# sourceMappingURL=5375.757ff5c1.chunk.js.map