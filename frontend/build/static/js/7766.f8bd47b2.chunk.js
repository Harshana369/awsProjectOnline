(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7766],{89217:function(e,s,a){"use strict";a.r(s);var t=a(4942),n=a(29439),i=a(1413),o=a(72791),l=a(79271),r=a(74569),c=a.n(r),d=a(16149),m=a(89743),u=a(2677),h=a(43360),j=a(34575),x=a(19658),Z=(a(58484),a(29818)),f=a(64554),p=a(39157),v=a(13239),C=a(80184),b=o.forwardRef((function(e,s){return(0,C.jsx)(x.Z,(0,i.Z)({elevation:6,ref:s,variant:"filled"},e))}));s.default=(0,l.EN)((function(e){var s=(0,o.useState)([]),a=(0,n.Z)(s,2),l=a[0],r=a[1],x=(0,o.useState)([]),k=(0,n.Z)(x,2),g=(k[0],k[1]),y=(0,o.useState)(""),N=(0,n.Z)(y,2),P=N[0],S=N[1],w=(0,o.useState)(""),D=(0,n.Z)(w,2),I=D[0],A=D[1],T=c().create({baseURL:"http://localhost:8072/"}),O=(0,o.useState)({}),G=(0,n.Z)(O,2),M=G[0],_=G[1],F=(0,o.useState)({}),L=(0,n.Z)(F,2),R=L[0],E=L[1],B=(0,o.useState)(!1),H=(0,n.Z)(B,2),V=H[0],z=H[1],J=(0,o.useState)(!1),U=(0,n.Z)(J,2),W=U[0],X=U[1];(0,o.useEffect)((function(){r([{name:e.location.data.row.assignedMobitelOfficer.name}]),g([{companyName:e.location.data.row.assignedSubcon.companyName}]),_({taskRef:e.location.data.row.taskRef,siteID:e.location.data.row.siteID,siteName:e.location.data.row.siteName,taskAssignedDiv:e.location.data.row.taskAssignedDiv,assignedMobitelOfficer:e.location.data.row.assignedMobitelOfficer.name,assignedSubcon:e.location.data.row.assignedSubcon.companyName})}),[]);var q=function(e,s){"clickaway"!==s&&z(!1)};return(0,C.jsxs)("div",{children:[(0,C.jsxs)("div",{className:"content-wrapper",children:[(0,C.jsx)("div",{className:"content-header",children:(0,C.jsx)("section",{className:"content-header",children:(0,C.jsx)("div",{className:"container-fluid",children:(0,C.jsx)("div",{children:(0,C.jsxs)("h1",{children:["Task ID: ",M.taskRef," "]})})})})}),(0,C.jsx)("section",{className:"content",children:(0,C.jsx)("div",{className:"container-fluid",children:(0,C.jsxs)(d.Z,{children:[(0,C.jsxs)(m.Z,{children:[(0,C.jsxs)(d.Z.Group,{as:u.Z,sm:3,children:[(0,C.jsx)(d.Z.Label,{children:"Site ID"}),(0,C.jsx)(d.Z.Control,{disabled:!0,value:M.siteID,className:"col-md-9",type:"text",placeholder:"Enter site ID",isInvalid:!!R.siteID}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:R.siteID})]}),(0,C.jsxs)(d.Z.Group,{as:u.Z,sm:3,children:[(0,C.jsx)(d.Z.Label,{children:"Site Name"}),(0,C.jsx)(d.Z.Control,{disabled:!0,value:M.siteName,type:"text",placeholder:"Enter site Name",isInvalid:!!R.siteName}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:R.siteName})]}),(0,C.jsx)(d.Z.Group,{as:u.Z,sm:3})]}),(0,C.jsxs)(m.Z,{children:[(0,C.jsxs)(d.Z.Group,{as:u.Z,sm:3,children:[(0,C.jsx)(d.Z.Label,{children:"Task Assigned Division"}),(0,C.jsxs)(d.Z.Control,{disabled:!0,value:M.taskAssignedDiv,as:"select",defaultValue:"Choose...",isInvalid:!!R.taskAssignedDiv,children:[(0,C.jsx)("option",{children:"Choose..."}),(0,C.jsx)("option",{children:"Project_Radio"}),(0,C.jsx)("option",{children:"Project_Core"}),(0,C.jsx)("option",{children:"Project_TX"}),(0,C.jsx)("option",{children:"Project_IBS"}),(0,C.jsx)("option",{children:"Project_WiFi"})]}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:R.taskAssignedDiv}),(0,C.jsx)(d.Z.Group,{as:u.Z,sm:3})]}),(0,C.jsxs)(d.Z.Group,{as:u.Z,sm:3,children:[(0,C.jsx)(d.Z.Label,{children:"Assigned Mobitel Officer"}),(0,C.jsxs)(d.Z.Control,{disabled:!0,as:"select",value:M.assignedMobitelOfficer,defaultValue:"Choose...",isInvalid:!!R.assignedMobitelOfficer,children:[(0,C.jsx)("option",{children:"Choose..."}),l.map((function(e){return(0,C.jsx)("option",{value:e._id,children:e.name})}))]}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:R.assignedMobitelOfficer})]}),(0,C.jsx)(d.Z.Group,{as:u.Z})]}),(0,C.jsx)(m.Z,{className:"mb-3"}),(0,C.jsx)(m.Z,{children:(0,C.jsxs)(d.Z.Group,{as:u.Z,sm:6,children:[(0,C.jsx)(d.Z.Label,{children:"Comments"}),(0,C.jsx)(d.Z.Control,{onChange:function(e){return s="taskCommencedComment",a=e.target.value,_((0,i.Z)((0,i.Z)({},M),{},(0,t.Z)({},s,a))),void(R[s]&&E((0,i.Z)((0,i.Z)({},R),{},(0,t.Z)({},s,null))));var s,a},as:"textarea",rows:2,value:M.taskCommencedComment,placeholder:"Enter your comments or actual PAT Pass date if not Pass today",isInvalid:!!R.taskCommencedComment}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:R.taskCommencedComment})]})}),(0,C.jsx)(m.Z,{}),(0,C.jsx)(h.Z,{variant:"primary",onClick:function(s){s.preventDefault();var a=function(){var e=M.taskCommencedComment,s={};return e&&""!==e||(s.taskCommencedComment="cannot be blank!   Note-Please comment the actual PAT Pass date if not Pass today "),s}();if(Object.keys(a).length>0)E(a);else{T.put("projonline/update/"+e.location.data.row._id,{taskObject:{patStatus:"PAT Pass"},taskHistory:{patStatus:"PAT Pass",comment:M.taskCommencedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(s){X(!0),setTimeout((function(){A(s.data.alart),S(s.data.severity),z(!0)}),2e3),setTimeout((function(){X(!1),z(!1),e.history.push({pathname:"/pendingPATTask"})}),5e3)})).catch((function(e){console.log(e)}))}},children:"PAT Pass Now"})]})})})]}),(0,C.jsx)(j.Z,{open:V,autoHideDuration:6e3,onClose:q,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,C.jsx)(b,{onClose:q,severity:P,sx:{width:"100%"},children:I})}),(0,C.jsx)(Z.Z,{open:W,onClose:q,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,C.jsx)(p.Z,{children:(0,C.jsx)(f.Z,{sx:{display:"flex"},children:(0,C.jsx)(v.Z,{})})})})]})}))},55382:function(){},72095:function(){},61219:function(){}}]);
//# sourceMappingURL=7766.f8bd47b2.chunk.js.map