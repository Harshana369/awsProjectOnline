(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8096],{96419:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>v});var t=a(72791),n=a(79271),i=a(74569),o=a.n(i),l=a(16149),r=a(89743),d=a(2677),c=a(43360),m=a(34575),h=a(19658),j=(a(58484),a(29818)),x=a(64554),u=a(39157),p=a(13239),Z=a(80184);const f=t.forwardRef((function(e,s){return(0,Z.jsx)(h.Z,{elevation:6,ref:s,variant:"filled",...e})}));const v=(0,n.EN)((function(e){let[s,a]=(0,t.useState)([]),[n,i]=(0,t.useState)([]),[h,v]=(0,t.useState)(""),[C,b]=(0,t.useState)("");const k=o().create({baseURL:"http://35.78.68.113:8072/projonline"});let[g,S]=(0,t.useState)({}),[y,N]=(0,t.useState)({}),[w,D]=(0,t.useState)(!1),[I,A]=(0,t.useState)(!1);(0,t.useEffect)((()=>{a([{name:e.location.data.row.assignedMobitelOfficer.name}]),i([{companyName:e.location.data.row.assignedSubcon.companyName}]),S({taskRef:e.location.data.row.taskRef,siteID:e.location.data.row.siteID,siteName:e.location.data.row.siteName,taskAssignedDiv:e.location.data.row.taskAssignedDiv,assignedMobitelOfficer:e.location.data.row.assignedMobitelOfficer.name,assignedSubcon:e.location.data.row.assignedSubcon.companyName})}),[]);const P=(e,s)=>{"clickaway"!==s&&D(!1)};return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"content-wrapper",children:[(0,Z.jsx)("div",{className:"content-header",children:(0,Z.jsx)("section",{className:"content-header",children:(0,Z.jsx)("div",{className:"container-fluid",children:(0,Z.jsx)("div",{children:(0,Z.jsxs)("h1",{children:["Task ID: ",g.taskRef," "]})})})})}),(0,Z.jsx)("section",{className:"content",children:(0,Z.jsx)("div",{className:"container-fluid",children:(0,Z.jsxs)(l.Z,{children:[(0,Z.jsxs)(r.Z,{children:[(0,Z.jsxs)(l.Z.Group,{as:d.Z,sm:3,children:[(0,Z.jsx)(l.Z.Label,{children:"Site ID"}),(0,Z.jsx)(l.Z.Control,{disabled:!0,value:g.siteID,className:"col-md-9",type:"text",placeholder:"Enter site ID",isInvalid:!!y.siteID}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:y.siteID})]}),(0,Z.jsxs)(l.Z.Group,{as:d.Z,sm:3,children:[(0,Z.jsx)(l.Z.Label,{children:"Site Name"}),(0,Z.jsx)(l.Z.Control,{disabled:!0,value:g.siteName,type:"text",placeholder:"Enter site Name",isInvalid:!!y.siteName}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:y.siteName})]}),(0,Z.jsx)(l.Z.Group,{as:d.Z,sm:3})]}),(0,Z.jsxs)(r.Z,{children:[(0,Z.jsxs)(l.Z.Group,{as:d.Z,sm:3,children:[(0,Z.jsx)(l.Z.Label,{children:"Task Assigned Division"}),(0,Z.jsxs)(l.Z.Control,{disabled:!0,value:g.taskAssignedDiv,as:"select",defaultValue:"Choose...",isInvalid:!!y.taskAssignedDiv,children:[(0,Z.jsx)("option",{children:"Choose..."}),(0,Z.jsx)("option",{children:"Project_Radio"}),(0,Z.jsx)("option",{children:"Project_Core"}),(0,Z.jsx)("option",{children:"Project_TX"}),(0,Z.jsx)("option",{children:"Project_IBS"}),(0,Z.jsx)("option",{children:"Project_WiFi"})]}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:y.taskAssignedDiv}),(0,Z.jsx)(l.Z.Group,{as:d.Z,sm:3})]}),(0,Z.jsxs)(l.Z.Group,{as:d.Z,sm:3,children:[(0,Z.jsx)(l.Z.Label,{children:"Assigned Mobitel Officer"}),(0,Z.jsxs)(l.Z.Control,{disabled:!0,as:"select",value:g.assignedMobitelOfficer,defaultValue:"Choose...",isInvalid:!!y.assignedMobitelOfficer,children:[(0,Z.jsx)("option",{children:"Choose..."}),s.map((e=>(0,Z.jsx)("option",{value:e._id,children:e.name})))]}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:y.assignedMobitelOfficer})]}),(0,Z.jsx)(l.Z.Group,{as:d.Z})]}),(0,Z.jsx)(r.Z,{className:"mb-3"}),(0,Z.jsx)(r.Z,{children:(0,Z.jsxs)(l.Z.Group,{as:d.Z,sm:6,children:[(0,Z.jsx)(l.Z.Label,{children:"Comments"}),(0,Z.jsx)(l.Z.Control,{onChange:e=>{return s="taskCommencedComment",a=e.target.value,S({...g,[s]:a}),void(y[s]&&N({...y,[s]:null}));var s,a},as:"textarea",rows:2,value:g.taskCommencedComment,placeholder:"Enter your comments or actual SAR Pass date if not Pass today",isInvalid:!!y.taskCommencedComment}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:y.taskCommencedComment})]})}),(0,Z.jsx)(r.Z,{}),(0,Z.jsx)(c.Z,{variant:"primary",onClick:s=>{s.preventDefault();const a=(()=>{const{taskCommencedComment:e}=g,s={};return e&&""!==e||(s.taskCommencedComment="cannot be blank!   Note-Please comment the actual SAR Pass date if not Pass today "),s})();if(Object.keys(a).length>0)N(a);else{const s={sarStatus:"SAR Pass"};k.put("projonline/update/"+e.location.data.row._id,{taskObject:s,taskHistory:{sarStatus:"SAR Pass",comment:g.taskCommencedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((s=>{A(!0),setTimeout((()=>{b(s.data.alart),v(s.data.severity),D(!0)}),2e3),setTimeout((()=>{A(!1),D(!1),e.history.push({pathname:"/pendingSARTask"})}),5e3)})).catch((e=>{console.log(e)}))}},children:"SAR Pass Now"})]})})})]}),(0,Z.jsx)(m.Z,{open:w,autoHideDuration:6e3,onClose:P,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,Z.jsx)(f,{onClose:P,severity:h,sx:{width:"100%"},children:C})}),(0,Z.jsx)(j.Z,{open:I,onClose:P,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,Z.jsx)(u.Z,{children:(0,Z.jsx)(x.Z,{sx:{display:"flex"},children:(0,Z.jsx)(p.Z,{})})})})]})}))},55382:()=>{},72095:()=>{},61219:()=>{}}]);
//# sourceMappingURL=8096.d96cb8c1.chunk.js.map