(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[43],{65438:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>v});var a=t(72791),n=t(79271),i=t(74569),o=t.n(i),l=t(16149),r=t(89743),d=t(2677),c=t(43360),m=t(34575),h=t(19658),j=(t(58484),t(29818)),x=t(64554),u=t(39157),p=t(13239),Z=t(80184);const f=a.forwardRef((function(e,s){return(0,Z.jsx)(h.Z,{elevation:6,ref:s,variant:"filled",...e})}));const v=(0,n.EN)((function(e){let[s,t]=(0,a.useState)([]),[n,i]=(0,a.useState)([]),[h,v]=(0,a.useState)(""),[C,b]=(0,a.useState)("");const k=o().create({baseURL:"http://35.78.68.113:8072"});let[g,y]=(0,a.useState)({}),[N,S]=(0,a.useState)({}),[O,w]=(0,a.useState)(!1),[D,I]=(0,a.useState)(!1);(0,a.useEffect)((()=>{t([{name:e.location.data.row.assignedMobitelOfficer.name}]),i([{companyName:e.location.data.row.assignedSubcon.companyName}]),y({taskRef:e.location.data.row.taskRef,siteID:e.location.data.row.siteID,siteName:e.location.data.row.siteName,taskAssignedDiv:e.location.data.row.taskAssignedDiv,assignedMobitelOfficer:e.location.data.row.assignedMobitelOfficer.name,assignedSubcon:e.location.data.row.assignedSubcon.companyName})}),[]);const A=(e,s)=>{"clickaway"!==s&&w(!1)};return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"content-wrapper",children:[(0,Z.jsx)("div",{className:"content-header",children:(0,Z.jsx)("section",{className:"content-header",children:(0,Z.jsx)("div",{className:"container-fluid",children:(0,Z.jsx)("div",{children:(0,Z.jsxs)("h1",{children:["Task ID: ",g.taskRef," "]})})})})}),(0,Z.jsx)("section",{className:"content",children:(0,Z.jsx)("div",{className:"container-fluid",children:(0,Z.jsxs)(l.Z,{children:[(0,Z.jsxs)(r.Z,{children:[(0,Z.jsxs)(l.Z.Group,{as:d.Z,sm:3,children:[(0,Z.jsx)(l.Z.Label,{children:"Site ID"}),(0,Z.jsx)(l.Z.Control,{disabled:!0,value:g.siteID,className:"col-md-9",type:"text",placeholder:"Enter site ID",isInvalid:!!N.siteID}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N.siteID})]}),(0,Z.jsxs)(l.Z.Group,{as:d.Z,sm:3,children:[(0,Z.jsx)(l.Z.Label,{children:"Site Name"}),(0,Z.jsx)(l.Z.Control,{disabled:!0,value:g.siteName,type:"text",placeholder:"Enter site Name",isInvalid:!!N.siteName}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N.siteName})]}),(0,Z.jsx)(l.Z.Group,{as:d.Z,sm:3})]}),(0,Z.jsxs)(r.Z,{children:[(0,Z.jsxs)(l.Z.Group,{as:d.Z,sm:3,children:[(0,Z.jsx)(l.Z.Label,{children:"Task Assigned Division"}),(0,Z.jsxs)(l.Z.Control,{disabled:!0,value:g.taskAssignedDiv,as:"select",defaultValue:"Choose...",isInvalid:!!N.taskAssignedDiv,children:[(0,Z.jsx)("option",{children:"Choose..."}),(0,Z.jsx)("option",{children:"Project_Radio"}),(0,Z.jsx)("option",{children:"Project_Core"}),(0,Z.jsx)("option",{children:"Project_TX"}),(0,Z.jsx)("option",{children:"Project_IBS"}),(0,Z.jsx)("option",{children:"Project_WiFi"})]}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N.taskAssignedDiv}),(0,Z.jsx)(l.Z.Group,{as:d.Z,sm:3})]}),(0,Z.jsxs)(l.Z.Group,{as:d.Z,sm:3,children:[(0,Z.jsx)(l.Z.Label,{children:"Assigned Mobitel Officer"}),(0,Z.jsxs)(l.Z.Control,{disabled:!0,as:"select",value:g.assignedMobitelOfficer,defaultValue:"Choose...",isInvalid:!!N.assignedMobitelOfficer,children:[(0,Z.jsx)("option",{children:"Choose..."}),s.map((e=>(0,Z.jsx)("option",{value:e._id,children:e.name})))]}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N.assignedMobitelOfficer})]}),(0,Z.jsx)(l.Z.Group,{as:d.Z})]}),(0,Z.jsx)(r.Z,{className:"mb-3"}),(0,Z.jsx)(r.Z,{children:(0,Z.jsxs)(l.Z.Group,{as:d.Z,sm:6,children:[(0,Z.jsx)(l.Z.Label,{children:"Comments"}),(0,Z.jsx)(l.Z.Control,{onChange:e=>{return s="taskCommencedComment",t=e.target.value,y({...g,[s]:t}),void(N[s]&&S({...N,[s]:null}));var s,t},as:"textarea",rows:2,value:g.taskCommencedComment,placeholder:"Enter your comments or actual On-Air date if not On-Air today",isInvalid:!!N.taskCommencedComment}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N.taskCommencedComment})]})}),(0,Z.jsx)(r.Z,{}),(0,Z.jsx)(c.Z,{variant:"primary",onClick:s=>{s.preventDefault();const t=(()=>{const{taskCommencedComment:e}=g,s={};return e&&""!==e||(s.taskCommencedComment="cannot be blank!   Note-Please comment the actual On-Air date if not On-Air today "),s})();if(Object.keys(t).length>0)S(t);else{const s={onairStatus:"Site On-Air"};k.put("projonline/update/"+e.location.data.row._id,{taskObject:s,taskHistory:{onairStatus:"Site On-Air",comment:g.taskCommencedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((s=>{I(!0),setTimeout((()=>{b(s.data.alart),v(s.data.severity),w(!0)}),2e3),setTimeout((()=>{I(!1),w(!1),e.history.push({pathname:"/pendingOnairTask"})}),5e3)})).catch((e=>{console.log(e)}))}},children:"Site On-Air Now"})]})})})]}),(0,Z.jsx)(m.Z,{open:O,autoHideDuration:6e3,onClose:A,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,Z.jsx)(f,{onClose:A,severity:h,sx:{width:"100%"},children:C})}),(0,Z.jsx)(j.Z,{open:D,onClose:A,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,Z.jsx)(u.Z,{children:(0,Z.jsx)(x.Z,{sx:{display:"flex"},children:(0,Z.jsx)(p.Z,{})})})})]})}))},55382:()=>{},72095:()=>{},61219:()=>{}}]);
//# sourceMappingURL=43.96b2da90.chunk.js.map