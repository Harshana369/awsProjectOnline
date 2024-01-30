"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9682],{39682:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var a=o(72791),n=o(79271),i=o(74569),r=o.n(i),l=o(3986),d=(o(2468),o(24518)),c=o(29818),s=o(64554),p=o(39157),h=o(13239),u=o(80184);const m=(0,n.EN)((function(e){let[t,o]=(0,a.useState)([]),[n,i]=(0,a.useState)(),[m,b]=(0,a.useState)(!1);const x=r().create({baseURL:"http://35.78.68.113:8072/"});return(0,a.useEffect)((()=>{console.time("getISA"),b(!0),x.get("projonline/getalltasksfortable/toBeSubconAllocated",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{o(e.data.tasks.filter((e=>"Task handed over"===e.taskStatus||"Task rejected"===e.taskStatus))),b(!1),console.timeEnd("getISA")})).catch((e=>{console.log(e)}))}),[]),(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"content-wrapper",children:[(0,u.jsx)("div",{className:"content-header",children:(0,u.jsx)("section",{className:"content-header",children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsx)("div",{className:"row mb-2",children:(0,u.jsx)("div",{className:"col-sm-6",children:(0,u.jsx)("h1",{children:"All New Tasks"})})})})})}),(0,u.jsx)("div",{style:{height:450,width:"100%"},children:(0,u.jsx)(l._$r,{getRowId:e=>e.taskRef,rows:t,columns:[{field:"taskRef",headerName:"Task ID",width:250},{field:"siteID",headerName:"Site ID",width:130},{field:"siteName",headerName:"Site Name",width:200},{field:"project",headerName:"Project",width:150},{field:"subProject",headerName:"Sub Project",width:200},{field:"taskHandoverDate",headerName:"Handover date",width:150,valueGetter:e=>e.row.taskHistory.find((e=>"Task handed over"===e.taskStatus)).performedDate.split("T")[0]}],pageSize:10,rowsPerPageOptions:[10],rowHeight:30,headerHeight:40,components:{Toolbar:l.npt},checkboxSelection:!0,onSelectionModelChange:e=>{for(var o=[],a=0;a<e.length;a++)o.push(t.filter((t=>t.taskRef===e[a]))[0]);i(o)}})}),(0,u.jsx)(d.Z,{variant:"contained",color:"primary",onClick:t=>{((t,o)=>{e.history.push({pathname:"/initiateSpecificSubconAllocation",data:o})})(0,n)},children:"To Assign"})]}),(0,u.jsx)(c.Z,{open:m,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,u.jsx)(p.Z,{children:(0,u.jsx)(s.Z,{sx:{display:"flex"},children:(0,u.jsx)(h.Z,{})})})})]})}))},24518:(e,t,o)=>{o.d(t,{Z:()=>w});var a=o(63366),n=o(87462),i=o(72791),r=o(28182),l=o(85683),d=o(12065),c=o(47630),s=o(61046),p=o(72480),h=o(14036),u=o(89500);function m(e){return(0,u.Z)("MuiButton",e)}const b=(0,o(72823).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var x=o(80184);const g=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),v=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,h.Z)(o.color))],t["size".concat((0,h.Z)(o.size))],t["".concat(o.variant,"Size").concat((0,h.Z)(o.size))],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((e=>{let{theme:t,ownerState:o}=e;return(0,n.Z)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:t.shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:(0,d.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:(0,d.Fq)(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:"1px solid ".concat(t.palette[o.color].main),backgroundColor:(0,d.Fq)(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:t.palette.grey.A100,boxShadow:t.shadows[4],"@media (hover: none)":{boxShadow:t.shadows[2],backgroundColor:t.palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:t.palette[o.color].dark,"@media (hover: none)":{backgroundColor:t.palette[o.color].main}}),"&:active":(0,n.Z)({},"contained"===o.variant&&{boxShadow:t.shadows[8]}),["&.".concat(b.focusVisible)]:(0,n.Z)({},"contained"===o.variant&&{boxShadow:t.shadows[6]}),["&.".concat(b.disabled)]:(0,n.Z)({color:t.palette.action.disabled},"outlined"===o.variant&&{border:"1px solid ".concat(t.palette.action.disabledBackground)},"outlined"===o.variant&&"secondary"===o.color&&{border:"1px solid ".concat(t.palette.action.disabled)},"contained"===o.variant&&{color:t.palette.action.disabled,boxShadow:t.shadows[0],backgroundColor:t.palette.action.disabledBackground})},"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:t.palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===o.variant&&"inherit"!==o.color&&{color:t.palette[o.color].main,border:"1px solid ".concat((0,d.Fq)(t.palette[o.color].main,.5))},"contained"===o.variant&&{color:t.palette.getContrastText(t.palette.grey[300]),backgroundColor:t.palette.grey[300],boxShadow:t.shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:t.palette[o.color].contrastText,backgroundColor:t.palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})}),(e=>{let{ownerState:t}=e;return t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(b.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(b.disabled)]:{boxShadow:"none"}}})),f=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t["iconSize".concat((0,h.Z)(o.size))]]}})((e=>{let{ownerState:t}=e;return(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},S(t))})),z=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t["iconSize".concat((0,h.Z)(o.size))]]}})((e=>{let{ownerState:t}=e;return(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},S(t))})),w=i.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiButton"}),{children:i,color:d="primary",component:c="button",disabled:p=!1,disableElevation:u=!1,disableFocusRipple:b=!1,endIcon:S,focusVisibleClassName:w,fullWidth:y=!1,size:k="medium",startIcon:Z,type:I,variant:R="text"}=o,j=(0,a.Z)(o,g),C=(0,n.Z)({},o,{color:d,component:c,disabled:p,disableElevation:u,disableFocusRipple:b,fullWidth:y,size:k,type:I,variant:R}),N=(e=>{const{color:t,disableElevation:o,fullWidth:a,size:i,variant:r,classes:d}=e,c={root:["root",r,"".concat(r).concat((0,h.Z)(t)),"size".concat((0,h.Z)(i)),"".concat(r,"Size").concat((0,h.Z)(i)),"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(i))],endIcon:["endIcon","iconSize".concat((0,h.Z)(i))]},s=(0,l.Z)(c,m,d);return(0,n.Z)({},d,s)})(C),T=Z&&(0,x.jsx)(f,{className:N.startIcon,ownerState:C,children:Z}),E=S&&(0,x.jsx)(z,{className:N.endIcon,ownerState:C,children:S});return(0,x.jsxs)(v,(0,n.Z)({ownerState:C,component:c,disabled:p,focusRipple:!b,focusVisibleClassName:(0,r.Z)(N.focusVisible,w),ref:t,type:I},j,{classes:N,children:[T,i,E]}))}))},2468:(e,t,o)=>{o.d(t,{Z:()=>a});const a={}}}]);
//# sourceMappingURL=9682.e612149f.chunk.js.map