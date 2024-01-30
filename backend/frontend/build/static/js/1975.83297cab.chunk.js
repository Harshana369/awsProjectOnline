"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1975],{53063:(e,t,a)=>{a.d(t,{Z:()=>B});var i=a(83837),o=a(94026),r=a(1288),s=a(20269),l=a(26513),n=a(82159),d=a(72791),c=a(15617),h=a.n(c),m=a(63727),f=a(51859),x=a(74569),p=a.n(x),u=a(5936),j=a(3395),g=a(872),b=a(31009),Z=a(38996),w=a(5130),S=a(82271),C=a(41286),k=a(91903),v=a(12715),y=a(10111),R=a(35585),D=a(16346),O=a(5403),T=a(97911),P=a(80184);let N=[];function B(e){const[t,a]=(0,d.useState)(N),[c,x]=(0,d.useState)("all"),{openPopup:B,setOpenPopup:I}=e,[W,V]=(0,d.useState)([]),L=p().create({baseURL:"http://35.78.68.113:8072"});(0,d.useEffect)((()=>{N=[],L.get("projonline/allRateCards",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((t=>{t.data.filter((t=>t.rateCardSubcon._id===JSON.parse(localStorage.getItem("user")).company._id&&t.rateCardValidTo>=e.acceptedDate&&t.rateCardValidFrom<=e.acceptedDate)).forEach((e=>{e.rateCardItems.forEach((t=>{t.rateCardDiv=e.rateCardDiv,N.push(t)}))}))})).catch((e=>{console.log(e)}))}),[]);const F={Add:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(u.Z,{...e,ref:t}))),Check:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(g.Z,{...e,ref:t}))),Clear:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(w.Z,{...e,ref:t}))),Delete:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(S.Z,{...e,ref:t}))),DetailPanel:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(Z.Z,{...e,ref:t}))),Edit:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(C.Z,{...e,ref:t}))),Export:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(D.Z,{...e,ref:t}))),Filter:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(k.Z,{...e,ref:t}))),FirstPage:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(v.Z,{...e,ref:t}))),LastPage:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(y.Z,{...e,ref:t}))),NextPage:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(Z.Z,{...e,ref:t}))),PreviousPage:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(b.Z,{...e,ref:t}))),ResetSearch:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(w.Z,{...e,ref:t}))),Search:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(O.Z,{...e,ref:t}))),SortArrow:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(j.Z,{...e,ref:t}))),ThirdStateCheck:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(R.Z,{...e,ref:t}))),ViewColumn:(0,d.forwardRef)(((e,t)=>(0,P.jsx)(T.Z,{...e,ref:t})))},A=()=>{Array.isArray(W)&&W.length&&e.callBk(t.filter((e=>W.includes(e)))),I(!1);const i=N.map((e=>({...e,tableData:{checked:!1}})));a(i),V([])},_=()=>{I(!1);const e=N.map((e=>({...e,tableData:{checked:!1}})));a(e),V([])};return(0,d.useEffect)((()=>{a("all"===c?N:N.filter((e=>e.rateCard===c)))}),[c]),(0,P.jsx)(i.Z,{open:B,fullWidth:!0,maxWidth:"lg",children:(0,P.jsx)(o.Z,{children:(0,P.jsx)(h(),{title:"BOQ Line Items",columns:[{title:"ERP Code",field:"erpCode",cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}},{title:"Rate Card Div",field:"rateCardDiv",cellStyle:{width:150,minWidth:150,maxWidth:150,height:1}},{title:"Item Discreption",field:"itemDiscreption",cellStyle:{width:400,minWidth:400,maxWidth:400,height:1}},{title:"UoM",field:"itemUom",cellStyle:{width:150,minWidth:150,maxWidth:150,height:1}},{title:"Unit Rate",field:"itemRate",type:"currency",currencySetting:{currencyCode:"LKR"},cellStyle:{width:200,minWidth:200,maxWidth:200,height:1}}],data:t,icons:F,onSelectionChange:e=>V(e),options:{exportButton:!0,pageSizeOptions:[5,10,20],paginationType:"stepped",showTextRowsSelected:!1,actionsColumnIndex:-1,filtering:!0,selection:!0,tableLayout:"auto",selectionProps:{},rowStyle:{backgroundColor:"#EEE"},headerStyle:{backgroundColor:"#01579b",color:"#FFF"}},actions:[{icon:()=>(0,P.jsxs)(m.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:c,onChange:e=>x(e.target.value),style:{width:100},children:[(0,P.jsx)(f.Z,{value:"all",children:(0,P.jsx)("em",{children:"All"})}),(0,P.jsx)(f.Z,{value:"TX",children:"TX"}),(0,P.jsx)(f.Z,{value:"IBS",children:"IBS"}),(0,P.jsx)(f.Z,{value:"BTS",children:"BTS"})]}),tooltip:"Select Rate Card",isFreeAction:!0}],components:{Pagination:e=>(0,P.jsxs)("div",{children:[(0,P.jsxs)(r.Z,{container:!0,style:{pading:15,background:"#f5f5f5"},children:[(0,P.jsx)(r.Z,{sm:11,align:"right",item:!0,children:(0,P.jsx)(s.Z,{children:(0,P.jsx)(l.Z,{variant:"contained",type:"submit",color:"primary",onClick:A,children:"Submit"})})}),(0,P.jsx)(r.Z,{sm:1,align:"center",item:!0,children:(0,P.jsx)(s.Z,{children:(0,P.jsx)(l.Z,{variant:"contained",color:"default",onClick:_,children:"Close"})})})]}),(0,P.jsx)(n.Z,{...e})]})}})})})}},61975:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var i=a(72791),o=a(79271),r=a(74569),s=a.n(r),l=a(16149),n=a(89743),d=a(2677),c=a(43360),h=a(34575),m=a(19658),f=a(61889),x=a(20890),p=a(15617),u=a.n(p),j=a(82159),g=(a(53063),a(3986)),b=a(29818),Z=a(64554),w=a(39157),S=a(13239),C=a(5936),k=a(3395),v=a(872),y=a(31009),R=a(38996),D=a(5130),O=a(82271),T=a(41286),P=a(91903),N=a(12715),B=a(10111),I=a(35585),W=a(16346),V=a(5403),L=a(97911),F=a(80184);const A=i.forwardRef((function(e,t){return(0,F.jsx)(m.Z,{elevation:6,ref:t,variant:"filled",...e})}));const _=(0,o.EN)((function(e){let[t,a]=(0,i.useState)([]),[o,r]=(0,i.useState)([]);const[m,p]=(0,i.useState)(!1),[_,Q]=(0,i.useState)([]),[E,q]=(0,i.useState)(),[G,M]=(0,i.useState)(),[U,H]=(0,i.useState)([]);let[J,K]=(0,i.useState)(""),[z,X]=(0,i.useState)("");const Y=s().create({baseURL:"http://35.78.68.113:8072"});let[$,ee]=(0,i.useState)({}),[te,ae]=(0,i.useState)({}),[ie,oe]=(0,i.useState)(!1),[re,se]=(0,i.useState)(!1);const[le,ne]=(0,i.useState)(0),[de,ce]=(0,i.useState)(0),he={Add:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(C.Z,{...e,ref:t}))),Check:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(v.Z,{...e,ref:t}))),Clear:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(D.Z,{...e,ref:t}))),Delete:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(O.Z,{...e,ref:t}))),DetailPanel:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(R.Z,{...e,ref:t}))),Edit:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(T.Z,{...e,ref:t}))),Export:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(W.Z,{...e,ref:t}))),Filter:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(P.Z,{...e,ref:t}))),FirstPage:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(N.Z,{...e,ref:t}))),LastPage:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(B.Z,{...e,ref:t}))),NextPage:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(R.Z,{...e,ref:t}))),PreviousPage:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(y.Z,{...e,ref:t}))),ResetSearch:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(D.Z,{...e,ref:t}))),Search:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(V.Z,{...e,ref:t}))),SortArrow:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(k.Z,{...e,ref:t}))),ThirdStateCheck:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(I.Z,{...e,ref:t}))),ViewColumn:(0,i.forwardRef)(((e,t)=>(0,F.jsx)(L.Z,{...e,ref:t})))},me=()=>{const e=_.map((e=>({...e,capexopexLine:"Capex"})));Q(e)},fe=()=>{const e=_.map((e=>({...e,capexopexLine:"Opex"})));Q(e)};function xe(){var e=0;for(let t=0;t<_.length;t++)e+=_[t].itemTotal;return M(e),e}function pe(){let e=0;for(let t=0;t<_.length;t++){"Capex"===_[t].capexopexLine&&(e+=_[t].itemTotal)}return ne(e),e}function ue(){var e=0;for(let t=0;t<_.length;t++){"Opex"===_[t].capexopexLine&&(e+=_[t].itemTotal)}return ce(e),e}(0,i.useEffect)((()=>{a([{name:e.location.data.row.assignedMobitelOfficer.name}]),r([{companyName:e.location.data.row.assignedSubcon.companyName}]),ee({taskRef:e.location.data.row.taskRef,siteID:e.location.data.row.siteID,siteName:e.location.data.row.siteName,actualTaskStartDate:e.location.data.row.taskHistory.find((e=>"Task commenced"===e.taskStatus)).performedDate.split("T")[0],actualTaskCompletedDate:e.location.data.row.taskHistory.find((e=>"Task completed"===e.taskStatus)).performedDate.split("T")[0],taskAssignedDiv:e.location.data.row.taskAssignedDiv,assignedMobitelOfficer:e.location.data.row.assignedMobitelOfficer.name,workScope:e.location.data.row.workScope,assignedSubcon:e.location.data.row.assignedSubcon.companyName}),Q(e.location.data.row.boqs[e.location.data.row.boqs.length-1].boqData),q(e.location.data.row.boqs[e.location.data.row.boqs.length-1].totalCost),H(e.location.data.row.taskHistory.filter((e=>"BOQ Verified_0"===e.taskStatus||"BOQ Verified_1"===e.taskStatus||"BOQ Verified_2"===e.taskStatus||"BOQ Rejected"===e.taskStatus||"BOQ submitted"===e.taskStatus)))}),[]);const je=async e=>{const t={username:"smsdigisvc_sci",password:"Sci@#25",from:"Mobitel-PMS",to:"0"+e,text:"You have new BOQ to review. Please login to https://projectonline.mobitel.lk/",mesageType:0},a={method:"POST",body:JSON.stringify(t),mode:"no-cors"};await fetch("https://msmsenterpriseapi.mobitel.lk/EnterpriseSMSV3/esmsproxyURL.php",a)},ge=(e,t)=>{"clickaway"!==t&&oe(!1)};return(0,F.jsxs)("div",{children:[(0,F.jsxs)("div",{className:"content-wrapper",children:[(0,F.jsx)("div",{className:"content-header",children:(0,F.jsx)("section",{className:"content-header",children:(0,F.jsx)("div",{className:"container-fluid",children:(0,F.jsx)("div",{className:"row mb-2",children:(0,F.jsx)("div",{className:"col-sm-6",children:(0,F.jsxs)("h1",{children:["Verify BOQ Task ID: ",$.taskRef," "]})})})})})}),(0,F.jsx)("section",{className:"content",children:(0,F.jsxs)("div",{className:"container-fluid",children:[(0,F.jsxs)(l.Z,{children:[(0,F.jsxs)(n.Z,{children:[(0,F.jsxs)(l.Z.Group,{as:d.Z,children:[(0,F.jsx)(l.Z.Label,{children:"Site ID"}),(0,F.jsx)(l.Z.Control,{disabled:!0,value:$.siteID,className:"col-md-9",type:"text",placeholder:"Enter site ID",isInvalid:!!te.siteID}),(0,F.jsx)(l.Z.Control.Feedback,{type:"invalid",children:te.siteID})]}),(0,F.jsxs)(l.Z.Group,{as:d.Z,children:[(0,F.jsx)(l.Z.Label,{children:"Site Name"}),(0,F.jsx)(l.Z.Control,{disabled:!0,value:$.siteName,type:"text",placeholder:"Enter site Name",isInvalid:!!te.siteName}),(0,F.jsx)(l.Z.Control.Feedback,{type:"invalid",children:te.siteName})]}),(0,F.jsx)(l.Z.Group,{as:d.Z,controlId:""})]}),(0,F.jsxs)(n.Z,{className:"mb-3",children:[(0,F.jsxs)(l.Z.Group,{as:d.Z,children:[(0,F.jsx)(l.Z.Label,{children:"Actual Work Commencement Date"}),(0,F.jsx)(l.Z.Control,{disabled:!0,value:$.actualTaskStartDate,className:"col-md-9",type:"date",isInvalid:!!te.actualTaskStartDate}),(0,F.jsx)(l.Z.Control.Feedback,{type:"invalid",children:te.actualTaskStartDate})]}),(0,F.jsxs)(l.Z.Group,{as:d.Z,children:[(0,F.jsx)(l.Z.Label,{children:"Actual Work Completed Date"}),(0,F.jsx)(l.Z.Control,{disabled:!0,value:$.actualTaskCompletedDate,className:"col-md-9",type:"date",isInvalid:!!te.actualTaskCompletedDate}),(0,F.jsx)(l.Z.Control.Feedback,{type:"invalid",children:te.actualTaskCompletedDate})]}),(0,F.jsx)(l.Z.Group,{as:d.Z})]}),(0,F.jsxs)(n.Z,{children:[(0,F.jsxs)(l.Z.Group,{as:d.Z,children:[(0,F.jsx)(l.Z.Label,{children:"Task Assigned Division"}),(0,F.jsxs)(l.Z.Control,{disabled:!0,value:$.taskAssignedDiv,as:"select",defaultValue:"Choose...",isInvalid:!!te.taskAssignedDiv,children:[(0,F.jsx)("option",{children:"Choose..."}),(0,F.jsx)("option",{children:"Project_Radio"}),(0,F.jsx)("option",{children:"Project_Core"}),(0,F.jsx)("option",{children:"Project_TX"}),(0,F.jsx)("option",{children:"Project_IBS"}),(0,F.jsx)("option",{children:"Project_WiFi"})]}),(0,F.jsx)(l.Z.Control.Feedback,{type:"invalid",children:te.taskAssignedDiv})]}),(0,F.jsxs)(l.Z.Group,{as:d.Z,children:[(0,F.jsx)(l.Z.Label,{children:"Assigned Mobitel Officer"}),(0,F.jsxs)(l.Z.Control,{disabled:!0,as:"select",value:$.assignedMobitelOfficer,defaultValue:"Choose...",isInvalid:!!te.assignedMobitelOfficer,children:[(0,F.jsx)("option",{children:"Choose..."}),t.map((e=>(0,F.jsx)("option",{value:e._id,children:e.name})))]}),(0,F.jsx)(l.Z.Control.Feedback,{type:"invalid",children:te.assignedMobitelOfficer})]}),(0,F.jsxs)(l.Z.Group,{as:d.Z,children:[(0,F.jsx)(l.Z.Label,{children:"Assigned subcontractor"}),(0,F.jsxs)(l.Z.Control,{disabled:!0,value:$.assignedSubcon,as:"select",defaultValue:"Choose...",isInvalid:!!te.assignedSubcon,children:[(0,F.jsx)("option",{children:"Choose..."}),o.map((e=>(0,F.jsx)("option",{value:e._id,children:e.companyName})))]}),(0,F.jsx)(l.Z.Control.Feedback,{type:"invalid",children:te.assignedSubcon})]})]}),(0,F.jsx)(n.Z,{children:(0,F.jsxs)(l.Z.Group,{as:d.Z,children:[(0,F.jsx)(l.Z.Label,{children:"High level work scope"}),(0,F.jsx)(l.Z.Control,{disabled:!0,value:$.workScope,as:"textarea",rows:2,placeholder:"",isInvalid:!!te.workScope}),(0,F.jsx)(l.Z.Control.Feedback,{type:"invalid",children:te.workScope})]})})]}),(0,F.jsx)(u(),{title:"Verify BOQ-"+$.siteID+"_"+$.taskRef,data:_,columns:[{title:"ERP Code",field:"erpCode",filtering:!1,editable:!1,cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}},{title:"Rate Card Div",field:"rateCardDiv",editable:!1,cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}},{title:"Item Discreption",field:"itemDiscreption",filtering:!1,editable:!1,cellStyle:{width:300,minWidth:300,maxWidth:300,height:1}},{title:"UoM",field:"itemUom",editable:!1,cellStyle:{width:50,minWidth:50,maxWidth:50,height:1}},{title:"Unit Rate",field:"itemRate",editable:!1,filtering:!1,cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}},{title:"Quantity",field:"itemQty",editable:!1,cellStyle:{width:50,minWidth:50,maxWidth:50,height:1}},{title:"Item Total",field:"itemTotal",type:"currency",currencySetting:{currencyCode:"LKR"},editable:!1,cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}},{title:"Capex/Opex",field:"capexopexLine",lookup:{Capex:"Capex",Opex:"Opex"},cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}},{title:"Comment",field:"itemComment",editable:"onUpdate",cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}}],icons:he,editable:{onRowUpdate:(e,t)=>new Promise(((a,i)=>{const o=t.tableData.id,r=[..._];e.itemTotal=e.itemRate*e.itemQty,r[o]=e,setTimeout((()=>{Q(r),a()}),1e3)}))},options:{exportButton:!0,pageSizeOptions:[_.length,5,10,20],paginationType:"stepped",showTextRowsSelected:!1,actionsColumnIndex:-1,filtering:!1,tableLayout:"auto",rowStyle:{backgroundColor:"#EEE"},headerStyle:{backgroundColor:"#01579b",color:"#FFF"}},components:{Pagination:e=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(f.ZP,{container:!0,justifyContent:"flex-end",children:[(0,F.jsx)(c.Z,{variant:"primary",style:{marginRight:"8px"},onClick:me,children:"All Capex"}),(0,F.jsx)(c.Z,{variant:"primary",onClick:fe,children:"All Opex"})]}),(0,F.jsxs)(f.ZP,{container:!0,style:{pading:300,background:"#f5f5f5"},children:[(0,F.jsxs)(f.ZP,{sm:9,item:!0,children:[(0,F.jsx)(x.Z,{align:"right",variant:"subtitle1",children:"Capex Amount"}),(0,F.jsx)(x.Z,{align:"right",variant:"subtitle1",children:"Opex Amount"}),(0,F.jsx)(x.Z,{align:"right",fontWeight:"bold",variant:"subtitle1",children:"Total Amount"})]}),(0,F.jsxs)(f.ZP,{sm:3,align:"center",children:[(0,F.jsx)(x.Z,{align:"right",variant:"subtitle1",children:"LKR "+pe().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}),(0,F.jsx)(x.Z,{align:"right",variant:"subtitle1",children:"LKR "+ue().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}),(0,F.jsx)(x.Z,{align:"right",variant:"subtitle1",fontWeight:"bold",children:"LKR "+xe().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})})]})]}),(0,F.jsx)(j.Z,{...e})]})}}),(0,F.jsx)("br",{}),(0,F.jsx)(n.Z,{children:(0,F.jsxs)(l.Z.Group,{as:d.Z,children:[(0,F.jsx)(l.Z.Label,{children:"Approval History"}),(0,F.jsx)("div",{style:{height:250,width:"100%"},children:(0,F.jsx)(g._$r,{getRowId:e=>e._id,rows:U,columns:[{field:"taskStatus",headerName:"Status",width:250},{field:"performedDate",headerName:"Performed Date",width:200,valueGetter:e=>e.row.performedDate.split("T")[0]},{field:"performedBy",headerName:"Performed by",width:200,valueGetter:e=>e.row.performedBy.name},{field:"comment",headerName:"Comment",width:500}],pageSize:5,rowsPerPageOptions:[5],rowHeight:30,headerHeight:40})})]})}),(0,F.jsx)(n.Z,{children:(0,F.jsxs)(l.Z.Group,{as:d.Z,children:[(0,F.jsx)(l.Z.Label,{children:"Comments"}),(0,F.jsx)(l.Z.Control,{onChange:e=>{return t="boqVerifiedComment",a=e.target.value,ee({...$,[t]:a}),void(te[t]&&ae({...te,[t]:null}));var t,a},as:"textarea",rows:2,value:$.boqVerifiedComment,placeholder:"Enter your comments",isInvalid:!!te.boqVerifiedComment}),(0,F.jsx)(l.Z.Control.Feedback,{type:"invalid",children:te.boqVerifiedComment})]})}),(0,F.jsx)(c.Z,{variant:"warning",onClick:t=>{t.preventDefault();const a=(()=>{const{boqVerifiedComment:e}=$,t={};return e&&""!==e||(t.boqVerifiedComment="cannot be blank!"),t})();if(Object.keys(a).length>0)ae(a);else{const t={taskStatus:"BOQ Rejected"};Y.put("projonline/update/"+e.location.data.row._id,{totalCost:E,boqData:_,taskObject:t,taskHistory:{taskStatus:"BOQ Rejected",comment:$.boqVerifiedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((t=>{se(!0),setTimeout((()=>{X(t.data.alart),K(t.data.severity),oe(!0)}),2e3),setTimeout((()=>{se(!1),oe(!1),e.history.push({pathname:"/verifyBoqTasks"})}),5e3)})).catch((e=>{console.log(e)}))}},children:"Reject BOQ"})," ",(0,F.jsx)(c.Z,{variant:"primary",onClick:t=>{t.preventDefault();const a=(()=>{const{boqVerifiedComment:e}=$,t={};switch(!0){case(!e||""===e)&&pe()+ue()!==xe():t.boqVerifiedComment="Capex/Opex type and Comment cannot be blank!";break;case!e||""===e:t.boqVerifiedComment="Comment cannot be blank!";break;case pe()+ue()!==xe():t.boqVerifiedComment="Capex/Opex type cannot be blank!"}return t})();var i;Object.keys(a).length>0?ae(a):("BOQ submitted"===e.location.data.row.taskStatus?(i={taskStatus:"BOQ Verified_0"},je(e.location.data.row.approvalPath[1].assignedOfficer.mobileNo)):"BOQ Verified_0"===e.location.data.row.taskStatus&&4===e.location.data.row.approvalPath.length?(i={taskStatus:"BOQ Verified_1"},je(e.location.data.row.approvalPath[2].assignedOfficer.mobileNo)):("BOQ Verified_1"===e.location.data.row.taskStatus||"BOQ Verified_0"===e.location.data.row.taskStatus&&3===e.location.data.row.approvalPath.length)&&(i={taskStatus:"BOQ Verified_2"},"BOQ Verified_1"===e.location.data.row.taskStatus?je(e.location.data.row.approvalPath[3].assignedOfficer.mobileNo):je(e.location.data.row.approvalPath[2].assignedOfficer.mobileNo)),Y.put("projonline/update/"+e.location.data.row._id,{CapexPrAmount:le,OpexPrAmount:de,totalCost:E,boqData:_,taskObject:i,taskHistory:{taskStatus:i.taskStatus,comment:$.boqVerifiedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((t=>{se(!0),setTimeout((()=>{X(t.data.alart),K(t.data.severity),oe(!0)}),2e3),setTimeout((()=>{se(!1),oe(!1),e.history.push({pathname:"/verifyBoqTasks"})}),5e3)})).catch((e=>{console.log(e)})))},children:"BOQ Verified"})]})})]}),(0,F.jsx)(h.Z,{open:ie,autoHideDuration:6e3,onClose:ge,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,F.jsx)(A,{onClose:ge,severity:J,sx:{width:"100%"},children:z})}),(0,F.jsx)(b.Z,{open:re,onClose:ge,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,F.jsx)(w.Z,{children:(0,F.jsx)(Z.Z,{sx:{display:"flex"},children:(0,F.jsx)(S.Z,{})})})})]})}))}}]);
//# sourceMappingURL=1975.83297cab.chunk.js.map