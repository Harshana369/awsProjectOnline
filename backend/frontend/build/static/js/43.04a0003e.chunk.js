(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[43],{65438:function(e,n,t){"use strict";t.r(n);var a=t(4942),s=t(29439),i=t(1413),o=t(72791),r=t(79271),l=t(74569),c=t.n(l),d=t(16149),m=t(89743),u=t(2677),h=t(43360),j=t(34575),x=t(19658),Z=(t(58484),t(29818)),f=t(64554),p=t(39157),v=t(13239),C=t(80184),b=o.forwardRef((function(e,n){return(0,C.jsx)(x.Z,(0,i.Z)({elevation:6,ref:n,variant:"filled"},e))}));n.default=(0,r.EN)((function(e){var n=(0,o.useState)([]),t=(0,s.Z)(n,2),r=t[0],l=t[1],x=(0,o.useState)([]),k=(0,s.Z)(x,2),g=(k[0],k[1]),y=(0,o.useState)(""),N=(0,s.Z)(y,2),S=N[0],O=N[1],w=(0,o.useState)(""),D=(0,s.Z)(w,2),I=D[0],A=D[1],G=c().create({baseURL:"http://ec2-65-2-5-82.ap-south-1.compute.amazonaws.com/"}),M=(0,o.useState)({}),T=(0,s.Z)(M,2),_=T[0],F=T[1],L=(0,o.useState)({}),P=(0,s.Z)(L,2),R=P[0],E=P[1],z=(0,o.useState)(!1),B=(0,s.Z)(z,2),H=B[0],V=B[1],J=(0,o.useState)(!1),U=(0,s.Z)(J,2),W=U[0],X=U[1];(0,o.useEffect)((function(){l([{name:e.location.data.row.assignedMobitelOfficer.name}]),g([{companyName:e.location.data.row.assignedSubcon.companyName}]),F({taskRef:e.location.data.row.taskRef,siteID:e.location.data.row.siteID,siteName:e.location.data.row.siteName,taskAssignedDiv:e.location.data.row.taskAssignedDiv,assignedMobitelOfficer:e.location.data.row.assignedMobitelOfficer.name,assignedSubcon:e.location.data.row.assignedSubcon.companyName})}),[]);var q=function(e,n){"clickaway"!==n&&V(!1)};return(0,C.jsxs)("div",{children:[(0,C.jsxs)("div",{className:"content-wrapper",children:[(0,C.jsx)("div",{className:"content-header",children:(0,C.jsx)("section",{className:"content-header",children:(0,C.jsx)("div",{className:"container-fluid",children:(0,C.jsx)("div",{children:(0,C.jsxs)("h1",{children:["Task ID: ",_.taskRef," "]})})})})}),(0,C.jsx)("section",{className:"content",children:(0,C.jsx)("div",{className:"container-fluid",children:(0,C.jsxs)(d.Z,{children:[(0,C.jsxs)(m.Z,{children:[(0,C.jsxs)(d.Z.Group,{as:u.Z,sm:3,children:[(0,C.jsx)(d.Z.Label,{children:"Site ID"}),(0,C.jsx)(d.Z.Control,{disabled:!0,value:_.siteID,className:"col-md-9",type:"text",placeholder:"Enter site ID",isInvalid:!!R.siteID}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:R.siteID})]}),(0,C.jsxs)(d.Z.Group,{as:u.Z,sm:3,children:[(0,C.jsx)(d.Z.Label,{children:"Site Name"}),(0,C.jsx)(d.Z.Control,{disabled:!0,value:_.siteName,type:"text",placeholder:"Enter site Name",isInvalid:!!R.siteName}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:R.siteName})]}),(0,C.jsx)(d.Z.Group,{as:u.Z,sm:3})]}),(0,C.jsxs)(m.Z,{children:[(0,C.jsxs)(d.Z.Group,{as:u.Z,sm:3,children:[(0,C.jsx)(d.Z.Label,{children:"Task Assigned Division"}),(0,C.jsxs)(d.Z.Control,{disabled:!0,value:_.taskAssignedDiv,as:"select",defaultValue:"Choose...",isInvalid:!!R.taskAssignedDiv,children:[(0,C.jsx)("option",{children:"Choose..."}),(0,C.jsx)("option",{children:"Project_Radio"}),(0,C.jsx)("option",{children:"Project_Core"}),(0,C.jsx)("option",{children:"Project_TX"}),(0,C.jsx)("option",{children:"Project_IBS"}),(0,C.jsx)("option",{children:"Project_WiFi"})]}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:R.taskAssignedDiv}),(0,C.jsx)(d.Z.Group,{as:u.Z,sm:3})]}),(0,C.jsxs)(d.Z.Group,{as:u.Z,sm:3,children:[(0,C.jsx)(d.Z.Label,{children:"Assigned Mobitel Officer"}),(0,C.jsxs)(d.Z.Control,{disabled:!0,as:"select",value:_.assignedMobitelOfficer,defaultValue:"Choose...",isInvalid:!!R.assignedMobitelOfficer,children:[(0,C.jsx)("option",{children:"Choose..."}),r.map((function(e){return(0,C.jsx)("option",{value:e._id,children:e.name})}))]}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:R.assignedMobitelOfficer})]}),(0,C.jsx)(d.Z.Group,{as:u.Z})]}),(0,C.jsx)(m.Z,{className:"mb-3"}),(0,C.jsx)(m.Z,{children:(0,C.jsxs)(d.Z.Group,{as:u.Z,sm:6,children:[(0,C.jsx)(d.Z.Label,{children:"Comments"}),(0,C.jsx)(d.Z.Control,{onChange:function(e){return n="taskCommencedComment",t=e.target.value,F((0,i.Z)((0,i.Z)({},_),{},(0,a.Z)({},n,t))),void(R[n]&&E((0,i.Z)((0,i.Z)({},R),{},(0,a.Z)({},n,null))));var n,t},as:"textarea",rows:2,value:_.taskCommencedComment,placeholder:"Enter your comments or actual On-Air date if not On-Air today",isInvalid:!!R.taskCommencedComment}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:R.taskCommencedComment})]})}),(0,C.jsx)(m.Z,{}),(0,C.jsx)(h.Z,{variant:"primary",onClick:function(n){n.preventDefault();var t=function(){var e=_.taskCommencedComment,n={};return e&&""!==e||(n.taskCommencedComment="cannot be blank!   Note-Please comment the actual On-Air date if not On-Air today "),n}();if(Object.keys(t).length>0)E(t);else{G.put("projonline/update/"+e.location.data.row._id,{taskObject:{onairStatus:"Site On-Air"},taskHistory:{onairStatus:"Site On-Air",comment:_.taskCommencedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(n){X(!0),setTimeout((function(){A(n.data.alart),O(n.data.severity),V(!0)}),2e3),setTimeout((function(){X(!1),V(!1),e.history.push({pathname:"/pendingOnairTask"})}),5e3)})).catch((function(e){console.log(e)}))}},children:"Site On-Air Now"})]})})})]}),(0,C.jsx)(j.Z,{open:H,autoHideDuration:6e3,onClose:q,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,C.jsx)(b,{onClose:q,severity:S,sx:{width:"100%"},children:I})}),(0,C.jsx)(Z.Z,{open:W,onClose:q,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,C.jsx)(p.Z,{children:(0,C.jsx)(f.Z,{sx:{display:"flex"},children:(0,C.jsx)(v.Z,{})})})})]})}))},55382:function(){},72095:function(){},61219:function(){}}]);
//# sourceMappingURL=43.04a0003e.chunk.js.map