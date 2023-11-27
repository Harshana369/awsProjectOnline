"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7197],{53063:function(e,t,i){i.d(t,{Z:function(){return B}});var r=i(1413),a=i(29439),n=i(83837),o=i(94026),s=i(1288),l=i(20269),d=i(26513),c=i(82159),u=i(72791),f=i(15617),h=i.n(f),Z=i(63727),m=i(51859),p=i(74569),x=i.n(p),j=i(5936),w=i(3395),b=i(872),g=i(31009),S=i(38996),v=i(5130),k=i(82271),C=i(41286),y=i(91903),R=i(12715),D=i(10111),T=i(35585),P=i(16346),N=i(5403),I=i(97911),O=i(80184),W=[];function B(e){var t=(0,u.useState)(W),i=(0,a.Z)(t,2),f=i[0],p=i[1],B=(0,u.useState)("all"),F=(0,a.Z)(B,2),A=F[0],E=F[1],L=e.openPopup,Q=e.setOpenPopup,_=(0,u.useState)([]),M=(0,a.Z)(_,2),U=M[0],G=M[1],V=x().create({baseURL:"http://localhost:8072/"});(0,u.useEffect)((function(){W=[],V.get("projonline/allRateCards",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(t){console.log(t.data),t.data.filter((function(t){return t.rateCardSubcon._id===JSON.parse(localStorage.getItem("user")).company._id&&t.rateCardValidTo>=e.acceptedDate&&t.rateCardValidFrom<=e.acceptedDate})).forEach((function(e){e.rateCardItems.forEach((function(t){t.rateCardDiv=e.rateCardDiv,W.push(t)}))}))})).catch((function(e){console.log(e)}))}),[]);var H={Add:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(j.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),Check:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(b.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),Clear:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(v.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),Delete:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(k.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),DetailPanel:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(S.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),Edit:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(C.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),Export:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(P.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),Filter:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(y.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),FirstPage:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(R.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),LastPage:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(D.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),NextPage:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(S.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),PreviousPage:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(g.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),ResetSearch:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(v.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),Search:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(N.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),SortArrow:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(w.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),ThirdStateCheck:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(T.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))})),ViewColumn:(0,u.forwardRef)((function(e,t){return(0,O.jsx)(I.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t}))}))},q=function(){Array.isArray(U)&&U.length&&e.callBk(f.filter((function(e){return U.includes(e)}))),Q(!1);var t=W.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{tableData:{checked:!1}})}));p(t),G([])},z=function(){Q(!1);var e=W.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{tableData:{checked:!1}})}));p(e),G([])};return(0,u.useEffect)((function(){p("all"===A?W:W.filter((function(e){return e.rateCard===A})))}),[A]),(0,O.jsx)(n.Z,{open:L,fullWidth:!0,maxWidth:"lg",children:(0,O.jsx)(o.Z,{children:(0,O.jsx)(h(),{title:"BOQ Line Items",columns:[{title:"ERP Code",field:"erpCode",cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}},{title:"Rate Card Div",field:"rateCardDiv",cellStyle:{width:150,minWidth:150,maxWidth:150,height:1}},{title:"Item Discreption",field:"itemDiscreption",cellStyle:{width:400,minWidth:400,maxWidth:400,height:1}},{title:"UoM",field:"itemUom",cellStyle:{width:150,minWidth:150,maxWidth:150,height:1}},{title:"Unit Rate",field:"itemRate",type:"currency",currencySetting:{currencyCode:"LKR"},cellStyle:{width:200,minWidth:200,maxWidth:200,height:1}}],data:f,icons:H,onSelectionChange:function(e){return G(e)},options:{exportButton:!0,pageSizeOptions:[5,10,20],paginationType:"stepped",showTextRowsSelected:!1,actionsColumnIndex:-1,filtering:!0,selection:!0,tableLayout:"auto",selectionProps:{},rowStyle:{backgroundColor:"#EEE"},headerStyle:{backgroundColor:"#01579b",color:"#FFF"}},actions:[{icon:function(){return(0,O.jsxs)(Z.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:A,onChange:function(e){return E(e.target.value)},style:{width:100},children:[(0,O.jsx)(m.Z,{value:"all",children:(0,O.jsx)("em",{children:"All"})}),(0,O.jsx)(m.Z,{value:"TX",children:"TX"}),(0,O.jsx)(m.Z,{value:"IBS",children:"IBS"}),(0,O.jsx)(m.Z,{value:"BTS",children:"BTS"})]})},tooltip:"Select Rate Card",isFreeAction:!0}],components:{Pagination:function(e){return(0,O.jsxs)("div",{children:[(0,O.jsxs)(s.Z,{container:!0,style:{pading:15,background:"#f5f5f5"},children:[(0,O.jsx)(s.Z,{sm:11,align:"right",item:!0,children:(0,O.jsx)(l.Z,{children:(0,O.jsx)(d.Z,{variant:"contained",type:"submit",color:"primary",onClick:q,children:"Submit"})})}),(0,O.jsx)(s.Z,{sm:1,align:"center",item:!0,children:(0,O.jsx)(l.Z,{children:(0,O.jsx)(d.Z,{variant:"contained",color:"default",onClick:z,children:"Close"})})})]}),(0,O.jsx)(c.Z,(0,r.Z)({},e))]})}}})})})}},57197:function(e,t,i){i.r(t);var r=i(74165),a=i(15861),n=i(93433),o=(i(4942),i(29439)),s=i(1413),l=i(72791),d=i(79271),c=i(74569),u=i.n(c),f=i(16149),h=i(89743),Z=i(2677),m=i(43360),p=i(34575),x=i(19658),j=i(61889),w=i(20890),b=i(15617),g=i.n(b),S=i(82159),v=i(53063),k=i(3986),C=i(29818),y=i(64554),R=i(39157),D=i(13239),T=i(5936),P=i(3395),N=i(872),I=i(31009),O=i(38996),W=i(5130),B=i(82271),F=i(41286),A=i(91903),E=i(12715),L=i(10111),Q=i(35585),_=i(16346),M=i(5403),U=i(97911),G=i(80184),V=l.forwardRef((function(e,t){return(0,G.jsx)(x.Z,(0,s.Z)({elevation:6,ref:t,variant:"filled"},e))}));t.default=(0,d.EN)((function(e){var t=(0,l.useState)([]),i=(0,o.Z)(t,2),d=i[0],c=i[1],x=(0,l.useState)([]),b=(0,o.Z)(x,2),H=b[0],q=b[1],z=(0,l.useState)(!1),J=(0,o.Z)(z,2),K=J[0],X=J[1],Y=(0,l.useState)([]),$=(0,o.Z)(Y,2),ee=$[0],te=$[1],ie=(0,l.useState)(),re=(0,o.Z)(ie,2),ae=re[0],ne=re[1],oe=(0,l.useState)([]),se=(0,o.Z)(oe,2),le=se[0],de=se[1],ce=(0,l.useState)(""),ue=(0,o.Z)(ce,2),fe=ue[0],he=ue[1],Ze=(0,l.useState)(""),me=(0,o.Z)(Ze,2),pe=me[0],xe=me[1],je=u().create({baseURL:"http://localhost:8072/"}),we=(0,l.useState)({}),be=(0,o.Z)(we,2),ge=be[0],Se=be[1],ve=(0,l.useState)({}),ke=(0,o.Z)(ve,2),Ce=ke[0],ye=ke[1],Re=(0,l.useState)(!1),De=(0,o.Z)(Re,2),Te=De[0],Pe=De[1],Ne=(0,l.useState)(!1),Ie=(0,o.Z)(Ne,2),Oe=Ie[0],We=Ie[1],Be={Add:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(T.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),Check:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(N.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),Clear:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(W.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),Delete:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(B.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),DetailPanel:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(O.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),Edit:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(F.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),Export:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(_.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),Filter:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(A.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),FirstPage:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(E.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),LastPage:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(L.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),NextPage:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(O.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),PreviousPage:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(I.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),ResetSearch:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(W.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),Search:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(M.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),SortArrow:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(P.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),ThirdStateCheck:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(Q.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))})),ViewColumn:(0,l.forwardRef)((function(e,t){return(0,G.jsx)(U.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t}))}))};function Fe(){for(var e=0,t=0;t<ee.length;t++)e+=ee[t].itemRate*ee[t].itemQty;return ne(e),e}(0,l.useEffect)((function(){c([{name:e.location.data.row.assignedMobitelOfficer.name}]),q([{companyName:e.location.data.row.assignedSubcon.companyName}]),Se({taskRef:e.location.data.row.taskRef,siteID:e.location.data.row.siteID,siteName:e.location.data.row.siteName,actualTaskStartDate:e.location.data.row.taskHistory.find((function(e){return"Task commenced"===e.taskStatus})).performedDate.split("T")[0],actualTaskCompletedDate:e.location.data.row.taskHistory.find((function(e){return"Task completed"===e.taskStatus})).performedDate.split("T")[0],taskAssignedDiv:e.location.data.row.taskAssignedDiv,assignedMobitelOfficer:e.location.data.row.assignedMobitelOfficer.name,workScope:e.location.data.row.workScope,assignedSubcon:e.location.data.row.assignedSubcon.companyName}),de(e.location.data.row.taskHistory.filter((function(e){return"BOQ Verified_0"===e.taskStatus||"BOQ Verified_1"===e.taskStatus||"BOQ Verified_2"===e.taskStatus||"BOQ Rejected"===e.taskStatus||"BOQ submitted"===e.taskStatus}))),"BOQ Rejected"===e.location.data.row.taskStatus&&(te(e.location.data.row.boqs[e.location.data.row.boqs.length-1].boqData),ne(e.location.data.row.boqs[e.location.data.row.boqs.length-1].totalCost))}),[]);var Ae=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var i,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://msmsenterpriseapi.mobitel.lk/EnterpriseSMSV3/esmsproxyURL.php",i={username:"smsdigisvc_sci",password:"Sci@#25",from:"Mobitel-PMS",to:"0"+t,text:"You have new BOQ to review. Please login to https://projectonline.mobitel.lk/",mesageType:0},a={method:"POST",body:JSON.stringify(i),mode:"no-cors"},e.next=5,fetch("https://msmsenterpriseapi.mobitel.lk/EnterpriseSMSV3/esmsproxyURL.php",a);case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ee=function(e,t){"clickaway"!==t&&Pe(!1)};return(0,G.jsxs)("div",{children:[(0,G.jsxs)("div",{className:"content-wrapper",children:[(0,G.jsx)("div",{className:"content-header",children:(0,G.jsx)("section",{className:"content-header",children:(0,G.jsx)("div",{className:"container-fluid",children:(0,G.jsx)("div",{className:"row mb-2",children:(0,G.jsx)("div",{className:"col-sm-6",children:(0,G.jsxs)("h1",{children:["Sumbit BOQ Task ID: ",ge.taskRef," "]})})})})})}),(0,G.jsxs)("section",{className:"content",children:[(0,G.jsxs)("div",{className:"container-fluid",children:[(0,G.jsxs)(f.Z,{children:[(0,G.jsxs)(h.Z,{children:[(0,G.jsxs)(f.Z.Group,{as:Z.Z,children:[(0,G.jsx)(f.Z.Label,{children:"Site ID"}),(0,G.jsx)(f.Z.Control,{disabled:!0,value:ge.siteID,className:"col-md-9",type:"text",placeholder:"Enter site ID",isInvalid:!!Ce.siteID}),(0,G.jsx)(f.Z.Control.Feedback,{type:"invalid",children:Ce.siteID})]}),(0,G.jsxs)(f.Z.Group,{as:Z.Z,children:[(0,G.jsx)(f.Z.Label,{children:"Site Name"}),(0,G.jsx)(f.Z.Control,{disabled:!0,value:ge.siteName,type:"text",placeholder:"Enter site Name",isInvalid:!!Ce.siteName}),(0,G.jsx)(f.Z.Control.Feedback,{type:"invalid",children:Ce.siteName})]}),(0,G.jsx)(f.Z.Group,{as:Z.Z,controlId:""})]}),(0,G.jsxs)(h.Z,{className:"mb-3",children:[(0,G.jsxs)(f.Z.Group,{as:Z.Z,children:[(0,G.jsx)(f.Z.Label,{children:"Actual Work Commencement Date"}),(0,G.jsx)(f.Z.Control,{disabled:!0,value:ge.actualTaskStartDate,className:"col-md-9",type:"date",isInvalid:!!Ce.actualTaskStartDate}),(0,G.jsx)(f.Z.Control.Feedback,{type:"invalid",children:Ce.actualTaskStartDate})]}),(0,G.jsxs)(f.Z.Group,{as:Z.Z,children:[(0,G.jsx)(f.Z.Label,{children:"Actual Work Completed Date"}),(0,G.jsx)(f.Z.Control,{disabled:!0,value:ge.actualTaskCompletedDate,className:"col-md-9",type:"date",isInvalid:!!Ce.actualTaskCompletedDate}),(0,G.jsx)(f.Z.Control.Feedback,{type:"invalid",children:Ce.actualTaskCompletedDate})]}),(0,G.jsx)(f.Z.Group,{as:Z.Z})]}),(0,G.jsxs)(h.Z,{children:[(0,G.jsxs)(f.Z.Group,{as:Z.Z,children:[(0,G.jsx)(f.Z.Label,{children:"Task Assigned Division"}),(0,G.jsxs)(f.Z.Control,{disabled:!0,value:ge.taskAssignedDiv,as:"select",defaultValue:"Choose...",isInvalid:!!Ce.taskAssignedDiv,children:[(0,G.jsx)("option",{children:"Choose..."}),(0,G.jsx)("option",{children:"Project_Radio"}),(0,G.jsx)("option",{children:"Project_Core"}),(0,G.jsx)("option",{children:"Project_TX"}),(0,G.jsx)("option",{children:"Project_IBS"}),(0,G.jsx)("option",{children:"Project_WiFi"})]}),(0,G.jsx)(f.Z.Control.Feedback,{type:"invalid",children:Ce.taskAssignedDiv})]}),(0,G.jsxs)(f.Z.Group,{as:Z.Z,children:[(0,G.jsx)(f.Z.Label,{children:"Assigned Mobitel Officer"}),(0,G.jsxs)(f.Z.Control,{disabled:!0,as:"select",value:ge.assignedMobitelOfficer,defaultValue:"Choose...",isInvalid:!!Ce.assignedMobitelOfficer,children:[(0,G.jsx)("option",{children:"Choose..."}),d.map((function(e){return(0,G.jsx)("option",{value:e._id,children:e.name})}))]}),(0,G.jsx)(f.Z.Control.Feedback,{type:"invalid",children:Ce.assignedMobitelOfficer})]}),(0,G.jsxs)(f.Z.Group,{as:Z.Z,children:[(0,G.jsx)(f.Z.Label,{children:"Assigned subcontractor"}),(0,G.jsxs)(f.Z.Control,{disabled:!0,value:ge.assignedSubcon,as:"select",defaultValue:"Choose...",isInvalid:!!Ce.assignedSubcon,children:[(0,G.jsx)("option",{children:"Choose..."}),H.map((function(e){return(0,G.jsx)("option",{value:e._id,children:e.companyName})}))]}),(0,G.jsx)(f.Z.Control.Feedback,{type:"invalid",children:Ce.assignedSubcon})]})]}),(0,G.jsx)(h.Z,{children:(0,G.jsxs)(f.Z.Group,{as:Z.Z,children:[(0,G.jsx)(f.Z.Label,{children:"High level work scope"}),(0,G.jsx)(f.Z.Control,{disabled:!0,value:ge.workScope,as:"textarea",rows:2,placeholder:"",isInvalid:!!Ce.workScope}),(0,G.jsx)(f.Z.Control.Feedback,{type:"invalid",children:Ce.workScope})]})})]}),(0,G.jsx)(g(),{title:"New BOQ Submission-"+ge.siteID+"_"+ge.taskRef,data:ee,columns:[{title:"ERP Code",field:"erpCode",filtering:!1,editable:!1,cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}},{title:"Rate Card Div",field:"rateCardDiv",editable:!1,cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}},{title:"Item Discreption",field:"itemDiscreption",filtering:!1,editable:!1,cellStyle:{width:350,minWidth:350,maxWidth:350,height:1}},{title:"UoM",field:"itemUom",editable:!1,cellStyle:{width:50,minWidth:50,maxWidth:50,height:1}},{title:"Unit Rate",field:"itemRate",editable:!1,filtering:!1,cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}},{title:"Quantity",field:"itemQty",cellStyle:{width:50,minWidth:50,maxWidth:50,height:1}},{title:"Item Total",field:"itemTotal",type:"currency",currencySetting:{currencyCode:"LKR"},editable:!1,cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}},{title:"Comment",field:"itemComment",editable:"onUpdate",cellStyle:{width:100,minWidth:100,maxWidth:100,height:1}}],icons:Be,editable:{onRowDelete:function(e){return new Promise((function(t,i){var r=e.tableData.id,a=(0,n.Z)(ee);a.splice(r,1),setTimeout((function(){te(a),t()}),2e3)}))},onRowUpdate:function(e,t){return new Promise((function(i,r){var a=t.tableData.id,o=(0,n.Z)(ee);e.itemTotal=e.itemRate*e.itemQty,o[a]=e,setTimeout((function(){te(o),i()}),2e3)}))}},options:{exportButton:!0,pageSizeOptions:[ee.length,5,10,20],paginationType:"stepped",showTextRowsSelected:!1,actionsColumnIndex:-1,filtering:!1,tableLayout:"auto",rowStyle:{backgroundColor:"#EEE"},headerStyle:{backgroundColor:"#01579b",color:"#FFF"}},components:{Pagination:function(e){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(j.ZP,{container:!0,style:{pading:300,background:"#f5f5f5"},children:[(0,G.jsx)(j.ZP,{sm:9,item:!0,children:(0,G.jsx)(w.Z,{align:"right",variant:"subtitle1",fontWeight:"bold",children:"Total"})}),(0,G.jsx)(j.ZP,{sm:3,align:"right",fontWeight:"bold",children:"LKR "+Fe().toFixed(2)})]}),(0,G.jsx)(S.Z,(0,s.Z)({},e))]})}},actions:[{icon:function(){return(0,G.jsx)(m.Z,{variant:"contained",children:"Add"})},tooltip:"Add Line Item",onClick:function(){return X(!0)},isFreeAction:!0}]}),(0,G.jsx)("br",{}),(0,G.jsx)(h.Z,{children:(0,G.jsxs)(f.Z.Group,{as:Z.Z,children:[(0,G.jsx)(f.Z.Label,{children:"Approval History"}),(0,G.jsx)("div",{style:{height:250,width:"100%"},children:(0,G.jsx)(k._$r,{getRowId:function(e){return e._id},rows:le,columns:[{field:"taskStatus",headerName:"Status",width:250},{field:"performedDate",headerName:"Performed Date",width:200,valueGetter:function(e){return e.row.performedDate.split("T")[0]}},{field:"performedBy",headerName:"Performed by",width:200,valueGetter:function(e){return e.row.performedBy.name}},{field:"comment",headerName:"Comment",width:500}],pageSize:5,rowsPerPageOptions:[5],rowHeight:30,headerHeight:40})})]})}),(0,G.jsx)("br",{}),(0,G.jsx)(m.Z,{variant:"primary",onClick:function(t){t.preventDefault();var i=(ge.taskCommencedComment,{});if(Object.keys(i).length>0)ye(i);else{je.put("projonline/update/"+e.location.data.row._id,{totalCost:ae,boqData:ee,taskObject:{taskStatus:"BOQ submitted"},taskHistory:{taskStatus:"BOQ submitted",comment:ge.boqSubmittedComment}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(t){Ae(e.location.data.row.assignedMobitelOfficer.mobileNo),We(!0),setTimeout((function(){xe(t.data.alart),he(t.data.severity),Pe(!0)}),2e3),setTimeout((function(){We(!1),Pe(!1),e.history.push({pathname:"/submitBoqTasks"})}),5e3)})).catch((function(e){console.log(e)}))}},children:"Submit BOQ"}),(0,G.jsx)("br",{})]}),(0,G.jsx)("br",{})]})]}),(0,G.jsx)(v.Z,{openPopup:K,setOpenPopup:X,acceptedDate:e.location.data?e.location.data.row.taskHistory.find((function(e){return"Task accepted"===e.taskStatus})).performedDate:null,callBk:function(e){var t=(0,n.Z)(ee);e.map((function(e){var i={erpCode:e.erpCode,rateCardDiv:e.rateCardDiv,itemDiscreption:e.itemDiscreption,itemRate:e.itemRate.toFixed(2),itemUom:e.itemUom,itemQty:1,area:"Colombo",itemTotal:e.itemRate.toFixed(2)};t.push(i)})),te(t)}}),(0,G.jsx)(p.Z,{open:Te,autoHideDuration:6e3,onClose:Ee,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,G.jsx)(V,{onClose:Ee,severity:fe,sx:{width:"100%"},children:pe})}),(0,G.jsx)(C.Z,{open:Oe,onClose:Ee,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,G.jsx)(R.Z,{children:(0,G.jsx)(y.Z,{sx:{display:"flex"},children:(0,G.jsx)(D.Z,{})})})})]})}))}}]);
//# sourceMappingURL=7197.d761cc9b.chunk.js.map