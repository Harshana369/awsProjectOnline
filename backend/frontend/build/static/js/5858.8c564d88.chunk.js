"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5858],{85858:(e,o,t)=>{t.r(o),t.d(o,{default:()=>m});var a=t(72791),n=t(79271),i=t(74569),r=t.n(i),l=t(3986),d=(t(2468),t(24518)),c=t(64554),s=t(39157),p=t(13239),h=t(29818),u=t(80184);const m=(0,n.EN)((function(e){let[o,t]=(0,a.useState)([]),[n,i]=(0,a.useState)(!1);const m=r().create({baseURL:"http://ec2-65-2-5-82.ap-south-1.compute.amazonaws.com/"});(0,a.useEffect)((()=>{i(!0),m.get("projonline/gettasks/toSubmitCommission",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{t(e.data.tasks),i(!1)})).catch((e=>{console.log(e)}))}),[]);const b=[{field:"taskRef",headerName:"Task ID",width:350},{field:"siteID",headerName:"Site ID",width:130},{field:"companyName",headerName:"Assigned Subcon / Vender",width:220,valueGetter:e=>e.row.assignedSubcon.companyName,width:350},{field:"assignedMobitelOfficer",headerName:"Assinged Officer",width:270,valueGetter:e=>e.row.assignedMobitelOfficer.name},{field:"To Submit Commission",width:270,renderCell:o=>(0,u.jsx)(d.Z,{variant:"contained",color:"primary",onClick:t=>{((o,t)=>{e.history.push({pathname:"/pendingCommissioningSpecificTaskBody",data:t})})(0,o)},children:"To Submit Commission"})}];return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"content-wrapper",children:[(0,u.jsx)("div",{className:"content-header",children:(0,u.jsx)("section",{className:"content-header",children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsx)("div",{className:"row mb-2",children:(0,u.jsx)("div",{className:"col-sm-6",children:(0,u.jsx)("h1",{children:"All Tasks to Submit Commissioning"})})})})})}),(0,u.jsx)("div",{style:{height:610,width:"100%"},children:(0,u.jsx)(l._$r,{getRowId:e=>e._id,rows:o,columns:b,pageSize:15,rowsPerPageOptions:[15],rowHeight:30,headerHeight:40,components:{Toolbar:l.npt}})})]}),(0,u.jsx)(h.Z,{open:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,u.jsx)(s.Z,{children:(0,u.jsx)(c.Z,{sx:{display:"flex"},children:(0,u.jsx)(p.Z,{})})})})]})}))},24518:(e,o,t)=>{t.d(o,{Z:()=>w});var a=t(63366),n=t(87462),i=t(72791),r=t(28182),l=t(85683),d=t(12065),c=t(47630),s=t(61046),p=t(72480),h=t(14036),u=t(89500);function m(e){return(0,u.Z)("MuiButton",e)}const b=(0,t(72823).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var g=t(80184);const x=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),v=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],o["".concat(t.variant).concat((0,h.Z)(t.color))],o["size".concat((0,h.Z)(t.size))],o["".concat(t.variant,"Size").concat((0,h.Z)(t.size))],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})((e=>{let{theme:o,ownerState:t}=e;return(0,n.Z)({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:o.shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:(0,d.Fq)(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,d.Fq)(o.palette[t.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:"1px solid ".concat(o.palette[t.color].main),backgroundColor:(0,d.Fq)(o.palette[t.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:o.palette.grey.A100,boxShadow:o.shadows[4],"@media (hover: none)":{boxShadow:o.shadows[2],backgroundColor:o.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:o.palette[t.color].dark,"@media (hover: none)":{backgroundColor:o.palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:o.shadows[8]}),["&.".concat(b.focusVisible)]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:o.shadows[6]}),["&.".concat(b.disabled)]:(0,n.Z)({color:o.palette.action.disabled},"outlined"===t.variant&&{border:"1px solid ".concat(o.palette.action.disabledBackground)},"outlined"===t.variant&&"secondary"===t.color&&{border:"1px solid ".concat(o.palette.action.disabled)},"contained"===t.variant&&{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:o.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:o.palette[t.color].main,border:"1px solid ".concat((0,d.Fq)(o.palette[t.color].main,.5))},"contained"===t.variant&&{color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],boxShadow:o.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:o.palette[t.color].contrastText,backgroundColor:o.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(e=>{let{ownerState:o}=e;return o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(b.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(b.disabled)]:{boxShadow:"none"}}})),f=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.startIcon,o["iconSize".concat((0,h.Z)(t.size))]]}})((e=>{let{ownerState:o}=e;return(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===o.size&&{marginLeft:-2},S(o))})),z=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.endIcon,o["iconSize".concat((0,h.Z)(t.size))]]}})((e=>{let{ownerState:o}=e;return(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===o.size&&{marginRight:-2},S(o))})),w=i.forwardRef((function(e,o){const t=(0,s.Z)({props:e,name:"MuiButton"}),{children:i,color:d="primary",component:c="button",disabled:p=!1,disableElevation:u=!1,disableFocusRipple:b=!1,endIcon:S,focusVisibleClassName:w,fullWidth:y=!1,size:Z="medium",startIcon:k,type:C,variant:I="text"}=t,R=(0,a.Z)(t,x),j=(0,n.Z)({},t,{color:d,component:c,disabled:p,disableElevation:u,disableFocusRipple:b,fullWidth:y,size:Z,type:C,variant:I}),N=(e=>{const{color:o,disableElevation:t,fullWidth:a,size:i,variant:r,classes:d}=e,c={root:["root",r,"".concat(r).concat((0,h.Z)(o)),"size".concat((0,h.Z)(i)),"".concat(r,"Size").concat((0,h.Z)(i)),"inherit"===o&&"colorInherit",t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(i))],endIcon:["endIcon","iconSize".concat((0,h.Z)(i))]},s=(0,l.Z)(c,m,d);return(0,n.Z)({},d,s)})(j),T=k&&(0,g.jsx)(f,{className:N.startIcon,ownerState:j,children:k}),M=S&&(0,g.jsx)(z,{className:N.endIcon,ownerState:j,children:S});return(0,g.jsxs)(v,(0,n.Z)({ownerState:j,component:c,disabled:p,focusRipple:!b,focusVisibleClassName:(0,r.Z)(N.focusVisible,w),ref:o,type:C},R,{classes:N,children:[T,i,M]}))}))},2468:(e,o,t)=>{t.d(o,{Z:()=>a});const a={}}}]);
//# sourceMappingURL=5858.8c564d88.chunk.js.map