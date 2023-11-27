"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[478],{40478:function(e,t,o){o.r(t);var a=o(29439),n=o(72791),i=o(79271),r=o(74569),d=o.n(r),l=o(3986),c=(o(2468),o(24518)),s=o(29818),u=o(64554),p=o(39157),h=o(13239),f=o(80184);t.default=(0,i.EN)((function(e){var t=(0,n.useState)([]),o=(0,a.Z)(t,2),i=o[0],r=o[1],m=(0,n.useState)(),b=(0,a.Z)(m,2),v=b[0],g=b[1],x=(0,n.useState)(!1),S=(0,a.Z)(x,2),w=S[0],z=S[1],y=d().create({baseURL:"http://localhost:8072/"});return(0,n.useEffect)((function(){z(!0),y.get("projonline/gettasks/toBeModifiedTask",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(e){r(e.data.tasks.filter((function(e){return"Task handed over"!==e.taskStatus&&"Task rejected"!==e.taskStatus&&"BOQ Approved"!==e.taskStatus&&"PR Raised"!==e.taskStatus&&"Withdraw"!==e.taskStatus}))),z(!1)})).catch((function(e){console.log(e)}))}),[]),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"content-wrapper",children:[(0,f.jsx)("div",{className:"content-header",children:(0,f.jsx)("section",{className:"content-header",children:(0,f.jsx)("div",{className:"container-fluid",children:(0,f.jsx)("div",{className:"row mb-2",children:(0,f.jsx)("div",{className:"col-sm-6",children:(0,f.jsx)("h1",{children:"All Tasks to be modified"})})})})})}),(0,f.jsx)("div",{style:{height:450,width:"100%"},children:(0,f.jsx)(l._$r,{getRowId:function(e){return e.taskRef},rows:i,columns:[{field:"taskRef",headerName:"Task ID",width:400},{field:"siteID",headerName:"Site ID",width:130},{field:"siteName",headerName:"Site Name",width:200},{field:"project",headerName:"Project",width:150},{field:"subProject",headerName:"Sub Project",width:200},{field:"taskStatus",headerName:"Task Status",width:200},{field:"companyName",headerName:"Assigned Subcon / Vender",width:290,valueGetter:function(e){return"undefined"===typeof e.row.assignedSubcon?"NA":e.row.assignedSubcon.companyName}},{field:"assignedMobitelOfficer",headerName:"Assinged  Officer",width:270,valueGetter:function(e){return"undefined"===typeof e.row.assignedMobitelOfficer?"NA":e.row.assignedMobitelOfficer.name}}],pageSize:10,rowsPerPageOptions:[10],rowHeight:30,headerHeight:40,components:{Toolbar:l.npt},checkboxSelection:!0,onSelectionModelChange:function(e){for(var t=[],o=0;o<e.length;o++)t.push(i.filter((function(t){return t.taskRef===e[o]}))[0]);g(t)}})}),(0,f.jsx)(c.Z,{variant:"contained",color:"primary",onClick:function(t){!function(t,o){e.history.push({pathname:"/modifySpecificTask",data:o})}(0,v)},children:"Modify"})]}),(0,f.jsx)(s.Z,{open:w,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,f.jsx)(p.Z,{children:(0,f.jsx)(u.Z,{sx:{display:"flex"},children:(0,f.jsx)(h.Z,{})})})})]})}))},24518:function(e,t,o){o.d(t,{Z:function(){return y}});var a=o(4942),n=o(63366),i=o(87462),r=o(72791),d=o(28182),l=o(85683),c=o(12065),s=o(47630),u=o(61046),p=o(72480),h=o(14036),f=o(89500);function m(e){return(0,f.Z)("MuiButton",e)}var b=(0,o(72823).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),v=o(80184),g=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=function(e){return(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},S=(0,s.ZP)(p.Z,{shouldForwardProp:function(e){return(0,s.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,h.Z)(o.color))],t["size".concat((0,h.Z)(o.size))],t["".concat(o.variant,"Size").concat((0,h.Z)(o.size))],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((function(e){var t,o=e.theme,n=e.ownerState;return(0,i.Z)({},o.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:o.shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:(0,c.Fq)(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===n.variant&&"inherit"!==n.color&&{backgroundColor:(0,c.Fq)(o.palette[n.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===n.variant&&"inherit"!==n.color&&{border:"1px solid ".concat(o.palette[n.color].main),backgroundColor:(0,c.Fq)(o.palette[n.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===n.variant&&{backgroundColor:o.palette.grey.A100,boxShadow:o.shadows[4],"@media (hover: none)":{boxShadow:o.shadows[2],backgroundColor:o.palette.grey[300]}},"contained"===n.variant&&"inherit"!==n.color&&{backgroundColor:o.palette[n.color].dark,"@media (hover: none)":{backgroundColor:o.palette[n.color].main}}),"&:active":(0,i.Z)({},"contained"===n.variant&&{boxShadow:o.shadows[8]})},(0,a.Z)(t,"&.".concat(b.focusVisible),(0,i.Z)({},"contained"===n.variant&&{boxShadow:o.shadows[6]})),(0,a.Z)(t,"&.".concat(b.disabled),(0,i.Z)({color:o.palette.action.disabled},"outlined"===n.variant&&{border:"1px solid ".concat(o.palette.action.disabledBackground)},"outlined"===n.variant&&"secondary"===n.color&&{border:"1px solid ".concat(o.palette.action.disabled)},"contained"===n.variant&&{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground})),t),"text"===n.variant&&{padding:"6px 8px"},"text"===n.variant&&"inherit"!==n.color&&{color:o.palette[n.color].main},"outlined"===n.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===n.variant&&"inherit"!==n.color&&{color:o.palette[n.color].main,border:"1px solid ".concat((0,c.Fq)(o.palette[n.color].main,.5))},"contained"===n.variant&&{color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],boxShadow:o.shadows[2]},"contained"===n.variant&&"inherit"!==n.color&&{color:o.palette[n.color].contrastText,backgroundColor:o.palette[n.color].main},"inherit"===n.color&&{color:"inherit",borderColor:"currentColor"},"small"===n.size&&"text"===n.variant&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},"large"===n.size&&"text"===n.variant&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},"small"===n.size&&"outlined"===n.variant&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},"large"===n.size&&"outlined"===n.variant&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},"small"===n.size&&"contained"===n.variant&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},"large"===n.size&&"contained"===n.variant&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},n.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,a.Z)(t,"&.".concat(b.focusVisible),{boxShadow:"none"}),(0,a.Z)(t,"&:active",{boxShadow:"none"}),(0,a.Z)(t,"&.".concat(b.disabled),{boxShadow:"none"}),t)})),w=(0,s.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.startIcon,t["iconSize".concat((0,h.Z)(o.size))]]}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},x(t))})),z=(0,s.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.endIcon,t["iconSize".concat((0,h.Z)(o.size))]]}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},x(t))})),y=r.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiButton"}),a=o.children,r=o.color,c=void 0===r?"primary":r,s=o.component,p=void 0===s?"button":s,f=o.disabled,b=void 0!==f&&f,x=o.disableElevation,y=void 0!==x&&x,Z=o.disableFocusRipple,k=void 0!==Z&&Z,I=o.endIcon,N=o.focusVisibleClassName,R=o.fullWidth,j=void 0!==R&&R,C=o.size,M=void 0===C?"medium":C,T=o.startIcon,P=o.type,E=o.variant,B=void 0===E?"text":E,O=(0,n.Z)(o,g),W=(0,i.Z)({},o,{color:c,component:p,disabled:b,disableElevation:y,disableFocusRipple:k,fullWidth:j,size:M,type:P,variant:B}),F=function(e){var t=e.color,o=e.disableElevation,a=e.fullWidth,n=e.size,r=e.variant,d=e.classes,c={root:["root",r,"".concat(r).concat((0,h.Z)(t)),"size".concat((0,h.Z)(n)),"".concat(r,"Size").concat((0,h.Z)(n)),"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(n))],endIcon:["endIcon","iconSize".concat((0,h.Z)(n))]},s=(0,l.Z)(c,m,d);return(0,i.Z)({},d,s)}(W),L=T&&(0,v.jsx)(w,{className:F.startIcon,ownerState:W,children:T}),V=I&&(0,v.jsx)(z,{className:F.endIcon,ownerState:W,children:I});return(0,v.jsxs)(S,(0,i.Z)({ownerState:W,component:p,disabled:b,focusRipple:!k,focusVisibleClassName:(0,d.Z)(F.focusVisible,N),ref:t,type:P},O,{classes:F,children:[L,a,V]}))}))},2468:function(){}}]);
//# sourceMappingURL=478.0d785f6e.chunk.js.map