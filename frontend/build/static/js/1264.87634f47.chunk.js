(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1264],{95073:function(e,t,o){"use strict";o.r(t);var n=o(4942),a=o(29439),r=o(1413),i=o(72791),c=o(79271),l=o(74569),s=o.n(l),d=o(3986),u=(o(2468),o(24518)),p=o(47022),h=o(89743),v=o(2677),x=o(39474),m=o(16149),f=o(34575),j=o(19658),b=o(58484),g=o.n(b),Z=o(64554),S=o(39157),y=o(13239),w=o(29818),z=o(80184),P=i.forwardRef((function(e,t){return(0,z.jsx)(j.Z,(0,r.Z)({elevation:6,ref:t,variant:"filled"},e))}));t.default=(0,c.EN)((function(e){var t=(0,i.useState)([]),o=(0,a.Z)(t,2),c=(o[0],o[1],(0,i.useState)([])),l=(0,a.Z)(c,2),j=l[0],b=l[1],C=(0,i.useState)(!1),I=(0,a.Z)(C,2),k=I[0],N=I[1],R=(0,i.useState)(""),M=(0,a.Z)(R,2),T=(M[0],M[1],(0,i.useState)("")),E=(0,a.Z)(T,2),D=(E[0],E[1],(0,i.useState)("")),F=(0,a.Z)(D,2),B=(F[0],F[1],(0,i.useState)(!1)),L=(0,a.Z)(B,2),_=L[0],O=L[1],W=(0,i.useState)(""),V=(0,a.Z)(W,2),G=V[0],H=V[1],q=(0,i.useState)(""),A=(0,a.Z)(q,2),J=A[0],U=A[1],$=(0,i.useState)(!1),K=(0,a.Z)($,2),Q=K[0],X=K[1],Y=(0,i.useState)({}),ee=(0,a.Z)(Y,2),te=ee[0],oe=ee[1],ne=(0,i.useState)({}),ae=(0,a.Z)(ne,2),re=ae[0],ie=ae[1],ce=(0,i.useState)([]),le=(0,a.Z)(ce,2),se=le[0],de=le[1],ue=function(e,t){oe((0,r.Z)((0,r.Z)({},te),{},(0,n.Z)({},e,t))),re[e]&&ie((0,r.Z)((0,r.Z)({},re),{},(0,n.Z)({},e,null)))},pe=s().create({baseURL:"http://localhost:8072/"});(0,i.useEffect)((function(){he()}),[]);var he=function(e,t){X(!0),pe.get("projonline/project",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(e){b(e.data.projTemplates),X(!1)})).catch((function(e){console.log(e)})),pe.get("projonline/mobitelusers",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(e){de(e.data)})).catch((function(e){console.log(e)}))},ve=[{field:"projectID",headerName:"Project ID",width:250},{field:"project",headerName:"Project",width:200},{field:"subProject",headerName:"Sub Project",width:250},{field:"name",headerName:"Assigned Project Manager",valueGetter:function(e){var t;return null===(t=e.row.assignedProjectManager)||void 0===t?void 0:t.name},width:250},{field:"To Edit",width:150,renderCell:function(e){return(0,z.jsx)(u.Z,{variant:"contained",color:"primary",onClick:function(t){return function(e){var t;N(!0),oe({_id:e._id,project:e.project,subProject:e.subProject,projectID:e.projectID,assignedProjectManager:null===(t=e.assignedProjectManager)||void 0===t?void 0:t._id})}(e.row)},children:"To Edit"})}},{field:"Download",width:150,renderCell:function(e){return(0,z.jsx)(u.Z,{variant:"contained",color:"primary",onClick:function(t){return function(e){var t=g().utils.book_new(),o=[];o.unshift(e.properties);var n=g().utils.aoa_to_sheet(o);g().utils.book_append_sheet(t,n,"Project Template Properties"),g().writeFile(t,"Project Template.xlsx")}(e.row)},children:"Download"})}}];return(0,z.jsxs)("div",{children:[(0,z.jsxs)("div",{className:"content-wrapper",children:[(0,z.jsx)("div",{className:"content-header",children:(0,z.jsx)("section",{className:"content-header",children:(0,z.jsx)("div",{className:"container-fluid",children:(0,z.jsx)("div",{children:(0,z.jsx)("div",{children:(0,z.jsx)(p.Z,{children:(0,z.jsxs)(h.Z,{children:[(0,z.jsx)(v.Z,{xs:4,children:(0,z.jsx)("h1",{children:"All Project Templates"})}),(0,z.jsx)(v.Z,{xs:2}),(0,z.jsx)(v.Z,{children:(0,z.jsx)("div",{className:"vr"})}),(0,z.jsx)(v.Z,{children:(0,z.jsx)(u.Z,{variant:"contained",color:"primary",onClick:function(t){return e.history.push({pathname:"/CreateProjectTemplate"})},children:"Add a new project template"})})]})})})})})})}),(0,z.jsx)("div",{style:{height:610,width:"100%"},children:(0,z.jsx)(d._$r,{getRowId:function(e){return e._id},rows:j,columns:ve,pageSize:15,rowsPerPageOptions:[15],rowHeight:30,headerHeight:40,components:{Toolbar:d.npt}})})]}),(0,z.jsxs)(x.Z,{show:k,onHide:function(){N(!1)},animation:!1,children:[(0,z.jsx)(x.Z.Header,{closeButton:!0,children:(0,z.jsx)(x.Z.Title,{children:"Edit Project Template"})}),(0,z.jsx)(x.Z.Body,{children:(0,z.jsxs)(m.Z,{onSubmit:function(e){e.preventDefault(),X(!0);var t=function(){var e=te.subProject,t=te.project,o={};return e&&""!==e||(o.subProject="cannot be blank!"),t&&""!==t||(o.project="cannot be blank!"),o}();if(Object.keys(t).length>0)ie(t),X(!1);else{var o={projectID:te.projectID,assignedProjectManager:te.assignedProjectManager,taskStatus:"Project template created"};pe.put("projonline/updateprojecttemp/".concat(te._id),o,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(e){H(e.data.msg),U(e.data.variant),O(!0),oe({_id:"",project:"",subProject:"",projectID:"",assignedProjectManager:""}),he(),N(!1),X(!1)})).catch((function(e){console.log(e)}))}},children:[(0,z.jsxs)(h.Z,{className:"mb-3",children:[(0,z.jsxs)(m.Z.Group,{as:v.Z,children:[(0,z.jsx)(m.Z.Label,{children:"Project ID"}),(0,z.jsx)(m.Z.Control,{disabled:!0,onChange:function(e){return ue("projectID",e.target.value)},value:te.projectID,className:"col-md-9",type:"text",placeholder:"Enter Project Name",isInvalid:!!re.projectID}),(0,z.jsx)(m.Z.Control.Feedback,{type:"invalid",children:re.projectID})]}),(0,z.jsxs)(m.Z.Group,{as:v.Z,children:[(0,z.jsx)(m.Z.Label,{children:"Project Manager"}),(0,z.jsxs)(m.Z.Control,{onChange:function(e){return ue("assignedProjectManager",e.target.value)},value:te.assignedProjectManager,className:"col-md-9",as:"select",defaultValue:"Choose...",isInvalid:!!re.assignedProjectManager,children:[(0,z.jsx)("option",{children:"Choose..."}),se.map((function(e){return(0,z.jsx)("option",{value:e._id,children:e.name})}))]}),(0,z.jsx)(m.Z.Control.Feedback,{type:"invalid",children:re.assignedMobitelOfficer})]})]}),(0,z.jsxs)(h.Z,{className:"mb-3",children:[(0,z.jsxs)(m.Z.Group,{as:v.Z,children:[(0,z.jsx)(m.Z.Label,{children:"Project Name"}),(0,z.jsx)(m.Z.Control,{disabled:!0,onChange:function(e){return ue("project",e.target.value)},value:te.project,className:"col-md-9",type:"text",placeholder:"Enter Project Name",isInvalid:!!re.project}),(0,z.jsx)(m.Z.Control.Feedback,{type:"invalid",children:re.project})]}),(0,z.jsxs)(m.Z.Group,{as:v.Z,children:[(0,z.jsx)(m.Z.Label,{children:"Sub-Project Name"}),(0,z.jsx)(m.Z.Control,{disabled:!0,onChange:function(e){return ue("subProject",e.target.value)},value:te.subProject,className:"col-md-9",type:"text",placeholder:"Enter Sub-Project Name",isInvalid:!!re.subProject}),(0,z.jsx)(m.Z.Control.Feedback,{type:"invalid",children:re.subProject})]})]}),(0,z.jsx)(x.Z.Footer,{children:(0,z.jsx)(u.Z,{variant:"contained",color:"primary",type:"submit",children:"Save"})})]})})]}),(0,z.jsx)(f.Z,{open:_,autoHideDuration:6e3,onClose:function(){return O(!1)},anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,z.jsx)(P,{onClose:function(){return O(!1)},severity:J,sx:{width:"100%"},children:G})}),(0,z.jsx)(w.Z,{open:Q,onClose:function(e,t){"clickaway"!==t&&O(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,z.jsx)(S.Z,{children:(0,z.jsx)(Z.Z,{sx:{display:"flex"},children:(0,z.jsx)(y.Z,{})})})})]})}))},24518:function(e,t,o){"use strict";o.d(t,{Z:function(){return y}});var n=o(4942),a=o(63366),r=o(87462),i=o(72791),c=o(28182),l=o(85683),s=o(12065),d=o(47630),u=o(61046),p=o(72480),h=o(14036),v=o(89500);function x(e){return(0,v.Z)("MuiButton",e)}var m=(0,o(72823).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),f=o(80184),j=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],b=function(e){return(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},g=(0,d.ZP)(p.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,h.Z)(o.color))],t["size".concat((0,h.Z)(o.size))],t["".concat(o.variant,"Size").concat((0,h.Z)(o.size))],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((function(e){var t,o=e.theme,a=e.ownerState;return(0,r.Z)({},o.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:o.shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:(0,s.Fq)(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:(0,s.Fq)(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:"1px solid ".concat(o.palette[a.color].main),backgroundColor:(0,s.Fq)(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:o.palette.grey.A100,boxShadow:o.shadows[4],"@media (hover: none)":{boxShadow:o.shadows[2],backgroundColor:o.palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:o.palette[a.color].dark,"@media (hover: none)":{backgroundColor:o.palette[a.color].main}}),"&:active":(0,r.Z)({},"contained"===a.variant&&{boxShadow:o.shadows[8]})},(0,n.Z)(t,"&.".concat(m.focusVisible),(0,r.Z)({},"contained"===a.variant&&{boxShadow:o.shadows[6]})),(0,n.Z)(t,"&.".concat(m.disabled),(0,r.Z)({color:o.palette.action.disabled},"outlined"===a.variant&&{border:"1px solid ".concat(o.palette.action.disabledBackground)},"outlined"===a.variant&&"secondary"===a.color&&{border:"1px solid ".concat(o.palette.action.disabled)},"contained"===a.variant&&{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground})),t),"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:o.palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===a.variant&&"inherit"!==a.color&&{color:o.palette[a.color].main,border:"1px solid ".concat((0,s.Fq)(o.palette[a.color].main,.5))},"contained"===a.variant&&{color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],boxShadow:o.shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:o.palette[a.color].contrastText,backgroundColor:o.palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,n.Z)(t,"&.".concat(m.focusVisible),{boxShadow:"none"}),(0,n.Z)(t,"&:active",{boxShadow:"none"}),(0,n.Z)(t,"&.".concat(m.disabled),{boxShadow:"none"}),t)})),Z=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.startIcon,t["iconSize".concat((0,h.Z)(o.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},b(t))})),S=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.endIcon,t["iconSize".concat((0,h.Z)(o.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},b(t))})),y=i.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiButton"}),n=o.children,i=o.color,s=void 0===i?"primary":i,d=o.component,p=void 0===d?"button":d,v=o.disabled,m=void 0!==v&&v,b=o.disableElevation,y=void 0!==b&&b,w=o.disableFocusRipple,z=void 0!==w&&w,P=o.endIcon,C=o.focusVisibleClassName,I=o.fullWidth,k=void 0!==I&&I,N=o.size,R=void 0===N?"medium":N,M=o.startIcon,T=o.type,E=o.variant,D=void 0===E?"text":E,F=(0,a.Z)(o,j),B=(0,r.Z)({},o,{color:s,component:p,disabled:m,disableElevation:y,disableFocusRipple:z,fullWidth:k,size:R,type:T,variant:D}),L=function(e){var t=e.color,o=e.disableElevation,n=e.fullWidth,a=e.size,i=e.variant,c=e.classes,s={root:["root",i,"".concat(i).concat((0,h.Z)(t)),"size".concat((0,h.Z)(a)),"".concat(i,"Size").concat((0,h.Z)(a)),"inherit"===t&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(a))],endIcon:["endIcon","iconSize".concat((0,h.Z)(a))]},d=(0,l.Z)(s,x,c);return(0,r.Z)({},c,d)}(B),_=M&&(0,f.jsx)(Z,{className:L.startIcon,ownerState:B,children:M}),O=P&&(0,f.jsx)(S,{className:L.endIcon,ownerState:B,children:P});return(0,f.jsxs)(g,(0,r.Z)({ownerState:B,component:p,disabled:m,focusRipple:!z,focusVisibleClassName:(0,c.Z)(L.focusVisible,C),ref:t,type:T},F,{classes:L,children:[_,n,O]}))}))},47022:function(e,t,o){"use strict";var n=o(87462),a=o(63366),r=o(81694),i=o.n(r),c=o(72791),l=o(10162),s=["bsPrefix","fluid","as","className"],d=c.forwardRef((function(e,t){var o=e.bsPrefix,r=e.fluid,d=e.as,u=void 0===d?"div":d,p=e.className,h=(0,a.Z)(e,s),v=(0,l.vE)(o,"container"),x="string"===typeof r?"-"+r:"-fluid";return c.createElement(u,(0,n.Z)({ref:t},h,{className:i()(p,r?""+v+x:v)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.Z=d},2468:function(){},55382:function(){},72095:function(){},61219:function(){}}]);
//# sourceMappingURL=1264.87634f47.chunk.js.map