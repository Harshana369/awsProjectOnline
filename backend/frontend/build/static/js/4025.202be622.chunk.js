(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4025],{798:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>f});var a=t(72791),i=t(79271),n=t(74569),o=t.n(n),l=t(16149),d=t(89743),c=t(2677),r=t(43360),m=t(34575),h=t(19658),j=(t(58484),t(29818)),x=t(64554),u=t(39157),p=t(13239),Z=t(80184);const C=a.forwardRef((function(e,s){return(0,Z.jsx)(h.Z,{elevation:6,ref:s,variant:"filled",...e})}));const f=(0,i.EN)((function(e){let[s,t]=(0,a.useState)([]),[i,n]=(0,a.useState)([]),[h,f]=(0,a.useState)(""),[v,b]=(0,a.useState)("");const k=o().create({baseURL:"http://35.78.68.113:8072"});let[g,y]=(0,a.useState)({}),[N,S]=(0,a.useState)({}),[w,D]=(0,a.useState)(!1),[I,O]=(0,a.useState)(!1);(0,a.useEffect)((()=>{t([{name:e.location.data.row.assignedMobitelOfficer.name}]),n([{companyName:e.location.data.row.assignedSubcon.companyName}]),y({taskRef:e.location.data.row.taskRef,siteID:e.location.data.row.siteID,siteName:e.location.data.row.siteName,taskAssignedDiv:e.location.data.row.taskAssignedDiv,assignedMobitelOfficer:e.location.data.row.assignedMobitelOfficer.name,assignedSubcon:e.location.data.row.assignedSubcon.companyName})}),[]);const G=(e,s)=>{"clickaway"!==s&&D(!1)};return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"content-wrapper",children:[(0,Z.jsx)("div",{className:"content-header",children:(0,Z.jsx)("section",{className:"content-header",children:(0,Z.jsx)("div",{className:"container-fluid",children:(0,Z.jsx)("div",{children:(0,Z.jsxs)("h1",{children:["Task ID: ",g.taskRef," "]})})})})}),(0,Z.jsx)("section",{className:"content",children:(0,Z.jsx)("div",{className:"container-fluid",children:(0,Z.jsxs)(l.Z,{children:[(0,Z.jsxs)(d.Z,{children:[(0,Z.jsxs)(l.Z.Group,{as:c.Z,sm:3,children:[(0,Z.jsx)(l.Z.Label,{children:"Site ID"}),(0,Z.jsx)(l.Z.Control,{disabled:!0,value:g.siteID,className:"col-md-9",type:"text",placeholder:"Enter site ID",isInvalid:!!N.siteID}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N.siteID})]}),(0,Z.jsxs)(l.Z.Group,{as:c.Z,sm:3,children:[(0,Z.jsx)(l.Z.Label,{children:"Site Name"}),(0,Z.jsx)(l.Z.Control,{disabled:!0,value:g.siteName,type:"text",placeholder:"Enter site Name",isInvalid:!!N.siteName}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N.siteName})]}),(0,Z.jsx)(l.Z.Group,{as:c.Z,sm:3})]}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsxs)(l.Z.Group,{as:c.Z,sm:3,children:[(0,Z.jsx)(l.Z.Label,{children:"Task Assigned Division"}),(0,Z.jsxs)(l.Z.Control,{disabled:!0,value:g.taskAssignedDiv,as:"select",defaultValue:"Choose...",isInvalid:!!N.taskAssignedDiv,children:[(0,Z.jsx)("option",{children:"Choose..."}),(0,Z.jsx)("option",{children:"Project_Radio"}),(0,Z.jsx)("option",{children:"Project_Core"}),(0,Z.jsx)("option",{children:"Project_TX"}),(0,Z.jsx)("option",{children:"Project_IBS"}),(0,Z.jsx)("option",{children:"Project_WiFi"})]}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N.taskAssignedDiv}),(0,Z.jsx)(l.Z.Group,{as:c.Z,sm:3})]}),(0,Z.jsxs)(l.Z.Group,{as:c.Z,sm:3,children:[(0,Z.jsx)(l.Z.Label,{children:"Assigned Mobitel Officer"}),(0,Z.jsxs)(l.Z.Control,{disabled:!0,as:"select",value:g.assignedMobitelOfficer,defaultValue:"Choose...",isInvalid:!!N.assignedMobitelOfficer,children:[(0,Z.jsx)("option",{children:"Choose..."}),s.map((e=>(0,Z.jsx)("option",{value:e._id,children:e.name})))]}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N.assignedMobitelOfficer})]}),(0,Z.jsx)(l.Z.Group,{as:c.Z})]}),(0,Z.jsx)(d.Z,{className:"mb-3"}),(0,Z.jsx)(d.Z,{children:(0,Z.jsxs)(l.Z.Group,{as:c.Z,sm:6,children:[(0,Z.jsx)(l.Z.Label,{children:"Comments"}),(0,Z.jsx)(l.Z.Control,{onChange:e=>{return s="taskCommencedComment",t=e.target.value,y({...g,[s]:t}),void(N[s]&&S({...N,[s]:null}));var s,t},as:"textarea",rows:2,value:g.taskCommencedComment,placeholder:"Enter your comments or actual commissioned date if not commissioned today",isInvalid:!!N.taskCommencedComment}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N.taskCommencedComment})]})}),(0,Z.jsx)(d.Z,{}),(0,Z.jsx)(r.Z,{variant:"primary",onClick:s=>{s.preventDefault();const t=(()=>{const{taskCommencedComment:e}=g,s={};return e&&""!==e||(s.taskCommencedComment="cannot be blank!   Note-Please comment the actual commissioning date if not commissioned today "),s})();if(Object.keys(t).length>0)S(t);else{const s={comStatus:"Site Commissioned"};k.put("projonline/update/"+e.location.data.row._id,{taskObject:s,taskHistory:{comStatus:"Site Commissioned",comment:g.taskCommencedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((s=>{O(!0),setTimeout((()=>{b(s.data.alart),f(s.data.severity),D(!0)}),2e3),setTimeout((()=>{O(!1),D(!1),e.history.push({pathname:"/pendingCommissioningTask"})}),5e3)})).catch((e=>{console.log(e)}))}},children:"Commissioning Task completed"})]})})})]}),(0,Z.jsx)(m.Z,{open:w,autoHideDuration:6e3,onClose:G,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,Z.jsx)(C,{onClose:G,severity:h,sx:{width:"100%"},children:v})}),(0,Z.jsx)(j.Z,{open:I,onClose:G,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,Z.jsx)(u.Z,{children:(0,Z.jsx)(x.Z,{sx:{display:"flex"},children:(0,Z.jsx)(p.Z,{})})})})]})}))},55382:()=>{},72095:()=>{},61219:()=>{}}]);
//# sourceMappingURL=4025.202be622.chunk.js.map