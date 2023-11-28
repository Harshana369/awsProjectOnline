"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3462],{53462:function(e,o,t){t.r(o);var a=t(29439),n=t(72791),i=t(79271),r=t(74569),d=t.n(r),l=t(3986),c=(t(2468),t(24518)),s=(t(76897),t(25498),t(31052),t(80184));o.default=(0,i.EN)((function(e){var o=(0,n.useState)(!1),t=(0,a.Z)(o,2),i=(t[0],t[1]),r=(0,n.useState)([]),u=(0,a.Z)(r,2),p=u[0],h=u[1],x=d().create({baseURL:"http://ec2-65-2-5-82.ap-south-1.compute.amazonaws.com/"}),m=(0,n.useState)([]),f=(0,a.Z)(m,2);f[0],f[1],(0,n.useEffect)((function(){i(!0),x.get("projonline/gettasks/alreadyCompletedTask",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(e){h(e.data.tasks),i(!1)})).catch((function(e){console.log(e)}))}),[]);var g=JSON.parse(localStorage.getItem("user")).visbilityBasedOn;console.log(g);var v=[{field:"taskRef",headerName:"Task ID",width:400},{field:"siteID",headerName:"Site ID",width:130},{field:"companyName",headerName:"Subcon / Vender",width:250,valueGetter:function(e){return e.row.assignedSubcon.companyName}},{field:"assignedMobitelOfficer",headerName:"Assigned Officer",width:250,valueGetter:function(e){return e.row.assignedMobitelOfficer.name}},{field:"taskRaisedDate",headerName:"PR Raised date",width:200,valueGetter:function(e){return e.row.taskHistory.find((function(e){return"PR Raised"===e.taskStatus})).performedDate.split("T")[0]}},{field:"PRnumber",headerName:"PR Number",width:170},{field:"budgetCodeCapex",headerName:"Capex Budget Code",width:240,valueGetter:function(e){return"Copex"===e.row.capexopex?e.row.budgetCode||e.row.budgetCodeCapex:"Capex+Opex"===e.row.capexopex?e.row.budgetCodeCapex:"N/A"}},{field:"budgetCodeOpex",headerName:"Opex Budget Code",width:230,valueGetter:function(e){return"Opex"===e.row.capexopex?e.row.budgetCode||e.row.budgetCodeOpex:"Capex+Opex"===e.row.capexopex?e.row.budgetCodeOpex:"N/A"}},{field:"CapexPrAmount",headerName:"Capex Amount",width:190,align:"right",valueGetter:function(e){var o=e.row.boqs,t=o.length>0?o[o.length-1].totalCost:0;return"Copex"===e.row.capexopex||"Capex+Opex"===e.row.capexopex?e.row.CapexPrAmount>0?e.row.CapexPrAmount:t:"N/A"}},{field:"OpexPrAmount",headerName:"Opex Amount",width:190,align:"right",valueGetter:function(e){var o=e.row.boqs,t=o.length>0?o[o.length-1].totalCost:0;return"Opex"===e.row.capexopex||"Capex+Opex"===e.row.capexopex?e.row.OpexPrAmount>0?e.row.OpexPrAmount:t:"N/A"}},{field:"totalCost",headerName:"Total Value",width:190,align:"right",valueGetter:function(e){var o=e.row.boqs,t=e.row.totalCost,a=o.length>0?o[o.length-1].totalCost:0;return t||a||0}},{field:"BOQ",width:110,renderCell:function(o){return(0,s.jsx)(c.Z,{variant:"contained",color:"primary",onClick:function(t){!function(o,t){e.history.push({pathname:"/approvedSpecificBoq",data:t})}(0,o)},children:"BOQ"})}}];if("Subcon"===g){["taskRaisedDate","PRnumber","budgetCodeCapex","budgetCodeOpex","CapexPrAmount","OpexPrAmount"].forEach((function(e){var o=v.findIndex((function(o){return o.field===e}));-1!==o&&v.splice(o,1)}))}return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"content-wrapper",children:[(0,s.jsx)("div",{className:"content-header",children:(0,s.jsx)("section",{className:"content-header",children:(0,s.jsx)("div",{className:"container-fluid",children:(0,s.jsx)("div",{className:"row mb-2",children:(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsx)("h1",{children:"All Completed Tasks"})})})})})}),(0,s.jsx)("div",{style:{height:610,width:"100%"},children:(0,s.jsx)(l._$r,{getRowId:function(e){return e._id},rows:p,columns:v,pageSize:15,rowsPerPageOptions:[15],rowHeight:30,headerHeight:40,components:{Toolbar:l.npt}})})]})})}))},24518:function(e,o,t){t.d(o,{Z:function(){return z}});var a=t(4942),n=t(63366),i=t(87462),r=t(72791),d=t(28182),l=t(85683),c=t(12065),s=t(47630),u=t(61046),p=t(72480),h=t(14036),x=t(89500);function m(e){return(0,x.Z)("MuiButton",e)}var f=(0,t(72823).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=t(80184),v=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],b=function(e){return(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},w=(0,s.ZP)(p.Z,{shouldForwardProp:function(e){return(0,s.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o[t.variant],o["".concat(t.variant).concat((0,h.Z)(t.color))],o["size".concat((0,h.Z)(t.size))],o["".concat(t.variant,"Size").concat((0,h.Z)(t.size))],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})((function(e){var o,t=e.theme,n=e.ownerState;return(0,i.Z)({},t.typography.button,(o={minWidth:64,padding:"6px 16px",borderRadius:t.shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:(0,c.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===n.variant&&"inherit"!==n.color&&{backgroundColor:(0,c.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===n.variant&&"inherit"!==n.color&&{border:"1px solid ".concat(t.palette[n.color].main),backgroundColor:(0,c.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===n.variant&&{backgroundColor:t.palette.grey.A100,boxShadow:t.shadows[4],"@media (hover: none)":{boxShadow:t.shadows[2],backgroundColor:t.palette.grey[300]}},"contained"===n.variant&&"inherit"!==n.color&&{backgroundColor:t.palette[n.color].dark,"@media (hover: none)":{backgroundColor:t.palette[n.color].main}}),"&:active":(0,i.Z)({},"contained"===n.variant&&{boxShadow:t.shadows[8]})},(0,a.Z)(o,"&.".concat(f.focusVisible),(0,i.Z)({},"contained"===n.variant&&{boxShadow:t.shadows[6]})),(0,a.Z)(o,"&.".concat(f.disabled),(0,i.Z)({color:t.palette.action.disabled},"outlined"===n.variant&&{border:"1px solid ".concat(t.palette.action.disabledBackground)},"outlined"===n.variant&&"secondary"===n.color&&{border:"1px solid ".concat(t.palette.action.disabled)},"contained"===n.variant&&{color:t.palette.action.disabled,boxShadow:t.shadows[0],backgroundColor:t.palette.action.disabledBackground})),o),"text"===n.variant&&{padding:"6px 8px"},"text"===n.variant&&"inherit"!==n.color&&{color:t.palette[n.color].main},"outlined"===n.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===n.variant&&"inherit"!==n.color&&{color:t.palette[n.color].main,border:"1px solid ".concat((0,c.Fq)(t.palette[n.color].main,.5))},"contained"===n.variant&&{color:t.palette.getContrastText(t.palette.grey[300]),backgroundColor:t.palette.grey[300],boxShadow:t.shadows[2]},"contained"===n.variant&&"inherit"!==n.color&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main},"inherit"===n.color&&{color:"inherit",borderColor:"currentColor"},"small"===n.size&&"text"===n.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===n.size&&"text"===n.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===n.size&&"outlined"===n.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===n.size&&"outlined"===n.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===n.size&&"contained"===n.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===n.size&&"contained"===n.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},n.fullWidth&&{width:"100%"})}),(function(e){var o;return e.ownerState.disableElevation&&(o={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,a.Z)(o,"&.".concat(f.focusVisible),{boxShadow:"none"}),(0,a.Z)(o,"&:active",{boxShadow:"none"}),(0,a.Z)(o,"&.".concat(f.disabled),{boxShadow:"none"}),o)})),S=(0,s.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,o){var t=e.ownerState;return[o.startIcon,o["iconSize".concat((0,h.Z)(t.size))]]}})((function(e){var o=e.ownerState;return(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===o.size&&{marginLeft:-2},b(o))})),C=(0,s.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,o){var t=e.ownerState;return[o.endIcon,o["iconSize".concat((0,h.Z)(t.size))]]}})((function(e){var o=e.ownerState;return(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===o.size&&{marginRight:-2},b(o))})),z=r.forwardRef((function(e,o){var t=(0,u.Z)({props:e,name:"MuiButton"}),a=t.children,r=t.color,c=void 0===r?"primary":r,s=t.component,p=void 0===s?"button":s,x=t.disabled,f=void 0!==x&&x,b=t.disableElevation,z=void 0!==b&&b,y=t.disableFocusRipple,Z=void 0!==y&&y,k=t.endIcon,N=t.focusVisibleClassName,R=t.fullWidth,I=void 0!==R&&R,O=t.size,P=void 0===O?"medium":O,A=t.startIcon,j=t.type,B=t.variant,T=void 0===B?"text":B,E=(0,n.Z)(t,v),M=(0,i.Z)({},t,{color:c,component:p,disabled:f,disableElevation:z,disableFocusRipple:Z,fullWidth:I,size:P,type:j,variant:T}),W=function(e){var o=e.color,t=e.disableElevation,a=e.fullWidth,n=e.size,r=e.variant,d=e.classes,c={root:["root",r,"".concat(r).concat((0,h.Z)(o)),"size".concat((0,h.Z)(n)),"".concat(r,"Size").concat((0,h.Z)(n)),"inherit"===o&&"colorInherit",t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(n))],endIcon:["endIcon","iconSize".concat((0,h.Z)(n))]},s=(0,l.Z)(c,m,d);return(0,i.Z)({},d,s)}(M),F=A&&(0,g.jsx)(S,{className:W.startIcon,ownerState:M,children:A}),L=k&&(0,g.jsx)(C,{className:W.endIcon,ownerState:M,children:k});return(0,g.jsxs)(w,(0,i.Z)({ownerState:M,component:p,disabled:f,focusRipple:!Z,focusVisibleClassName:(0,d.Z)(W.focusVisible,N),ref:o,type:j},E,{classes:W,children:[F,a,L]}))}))},2468:function(){}}]);
//# sourceMappingURL=3462.726e840c.chunk.js.map