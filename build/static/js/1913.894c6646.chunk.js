(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1913],{70162:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>T});var t=i(72791),o=i(79271),s=i(74569),n=i.n(s),r=i(89743),l=i(62591),d=i(16149),c=i(2677),p=i(43360),h=i(34575),v=i(19658),f=i(58484),u=i.n(f),m=i(97473),g=i.n(m),b=i(64554),j=i(39157),x=i(13239),k=i(29818),C=i(80184);const _=t.forwardRef((function(e,a){return(0,C.jsx)(v.Z,{elevation:6,ref:a,variant:"filled",...e})}));let Z=null,S=null;const T=(0,o.EN)((function(e){let[a,i]=(0,t.useState)([]),[o,s]=(0,t.useState)([]),[v,f]=(0,t.useState)([]),[m,T]=(0,t.useState)([]),[y,I]=(0,t.useState)([]),[D,O]=(0,t.useState)([]),[w,P]=(0,t.useState)([]),[N,M]=(0,t.useState)(""),[L,A]=(0,t.useState)(""),[F,G]=(0,t.useState)([]),[V,R]=(0,t.useState)([]);const[B,E]=(0,t.useState)(!0),q=n().create({baseURL:"http://35.78.68.113:8072/"});let[z,H]=(0,t.useState)({}),[J,U]=(0,t.useState)([]),[W,X]=(0,t.useState)({}),[K,Q]=(0,t.useState)(!1),[Y,$]=(0,t.useState)(!1),ee=(e,a)=>{H({...z,[e]:a}),W[e]&&X({...W,[e]:null})};const ae=a.filter((e=>e._id===z.assignedMobitelOfficer))[0],ie=v.filter((e=>e._id===z.assignedSubcon))[0];ie&&(Z=ae.name,S=ie.companyName),(0,t.useEffect)((()=>{q.get("projonline/users",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((a=>{U(e.location.data),s(a.data.users.filter((e=>"Mobitel"!==e.company.companyName))),i(a.data.users.filter((e=>!0===e.userCanAssignForTask))),f(a.data.companys.filter((e=>"Mobitel"!==e.companyName))),T(a.data.users),I([{_id:"",name:"Choose..."}]),O([{_id:"",name:"Choose..."}]),P([{_id:"",name:"Choose..."}]),H({taskAssignedDiv:e.location.data[0].taskAssignedDiv}),G(a.data.projects)})).catch((e=>{console.log(e)}))}),[]);const te=async(e,a)=>{const i={username:"smsdigisvc_sci",password:"Sci@#25",from:"Mobitel-PMS",to:"0"+e.toString(),text:"New "+J.length+a,mesageType:0},t={method:"POST",body:JSON.stringify(i),mode:"no-cors"};await fetch("https://msmsenterpriseapi.mobitel.lk/EnterpriseSMSV3/esmsproxyURL.php",t)},oe=(e,a)=>{"clickaway"!==a&&Q(!1)};return(0,C.jsxs)("div",{children:[(0,C.jsxs)("div",{className:"content-wrapper",children:[(0,C.jsx)("div",{className:"content-header",children:(0,C.jsx)("section",{className:"content-header",children:(0,C.jsx)("div",{className:"container-fluid",children:(0,C.jsx)("div",{className:"row mb-2",children:(0,C.jsx)("div",{className:"col-sm-6",children:(0,C.jsx)("h1",{children:"Initiate Sub-Contractor Allocation"})})})})})}),(0,C.jsx)("section",{className:"content",children:(0,C.jsx)("div",{className:"container-fluid",children:(0,C.jsxs)("form",{onSubmit:i=>{i.preventDefault();const t=(()=>{const{plannedTaskStartDate:e,targetTaskComDate:a,taskAssignedDiv:i,assignedMobitelOfficer:t,workScope:o,assignedSubcon:s,verificationOneId:n,approvalId:r}=z,l={};return e&&""!==e?new Date(e).getTime()<=(new Date).getTime()&&(l.plannedTaskStartDate="Select a correct date!"):l.plannedTaskStartDate="cannot be blank!",a&&""!==a?(new Date(a).getTime()<=(new Date).getTime()||new Date(a).getTime()<=new Date(e).getTime())&&(l.targetTaskComDate="Select a correct date!"):l.targetTaskComDate="cannot be blank!",i&&""!==i&&"Choose..."!==i||(l.taskAssignedDiv="Choose a division!"),t&&""!==t&&"Choose..."!==t||(l.assignedMobitelOfficer="Choose a Mobitel Officer!"),o&&""!==o||(l.workScope="cannot be blank!"),s&&""!==s||(l.assignedSubcon="Choose a Subcontractor!"),l})();if(Object.keys(t).length>0)X(t);else{for(var s=new(g()),n=0;n<V.length;n++)s.append("files",V[n]);var r=[{approvalLevel:"Verification Level 0",assignedOfficer:z.assignedMobitelOfficer},{approvalLevel:"Verification Level 1",assignedOfficer:z.verificationOneId},{approvalLevel:"Verification Level 2",assignedOfficer:z.verificationTwoId},{approvalLevel:"Final approval",assignedOfficer:z.approvalId}].filter((e=>""!=e.assignedOfficer));const i={plannedTaskStartDate:z.plannedTaskStartDate,targetTaskComDate:z.targetTaskComDate,taskAssignedDiv:z.taskAssignedDiv,assignedMobitelOfficer:z.assignedMobitelOfficer,workScope:z.workScope,assignedSubcon:z.assignedSubcon,taskStatus:"Subcon allocated",approvalPath:r,boqprojectrequirement:B};$(!0),q.post("projonline/upload",s,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,"Content-type":"multipart/form-data"}}).then((t=>{i.files=t.data,q.post("projonline/update",{tasks:J,taskObject:i,taskHistory:{taskStatus:i.taskStatus,comment:"Officer: "+Z+" || Subcon: "+S}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((i=>{te(a.filter((e=>e._id===z.assignedMobitelOfficer))[0].mobileNo," task/s were assigned to you."),o.forEach((e=>{e.company._id===z.assignedSubcon&&te(e.mobileNo," task/s were handedover to "+e.company.companyName)})),setTimeout((()=>{M(i.data.msg),A(i.data.variant),Q(!0)}),2e3),setTimeout((()=>{$(!1),Q(!1),I([{_id:"",name:"Choose..."}]),O([{_id:"",name:"Choose..."}]),P([{_id:"",name:"Choose..."}]),U([]),H({plannedTaskStartDate:"",targetTaskComDate:"",taskAssignedDiv:"",verificationOneId:"",verificationTwoId:"",approvalId:"",assignedMobitelOfficer:"",workScope:"",assignedSubcon:"",approvalType:"Default",isBoqRequired:B}),e.history.push({pathname:"/initiateSubconAllocationBody"})}),5e3)})).catch((e=>{console.log(e)}))})).catch((e=>{console.log(e)}))}},enctype:"multipart/form-data",children:[(0,C.jsx)("div",{children:(0,C.jsx)(r.Z,{children:(0,C.jsxs)(l.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[(0,C.jsx)("thead",{children:(0,C.jsxs)("tr",{children:[(0,C.jsx)("th",{children:"Task Ref"}),(0,C.jsx)("th",{children:"Site ID"}),(0,C.jsx)("th",{children:"Site Name"}),(0,C.jsx)("th",{children:"Task Assigned Div"})]})}),(0,C.jsx)("tbody",{children:J.map((e=>(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:e.taskRef}),(0,C.jsx)("td",{children:e.siteID}),(0,C.jsx)("td",{children:e.siteName}),(0,C.jsx)("td",{children:e.taskAssignedDiv})]})))})]})})}),(0,C.jsxs)(r.Z,{className:"mb-3",children:[(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:"Planned Work Commencement Date"}),(0,C.jsx)(d.Z.Control,{onChange:e=>ee("plannedTaskStartDate",e.target.value),value:z.plannedTaskStartDate,className:"col-md-9",type:"date",isInvalid:!!W.plannedTaskStartDate}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:W.plannedTaskStartDate})]}),(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:"Planned Work Completion Date"}),(0,C.jsx)(d.Z.Control,{onChange:e=>ee("targetTaskComDate",e.target.value),value:z.targetTaskComDate,className:"col-md-9",type:"date",isInvalid:!!W.targetTaskComDate}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:W.targetTaskComDate})]}),(0,C.jsx)(d.Z.Group,{as:c.Z})]}),(0,C.jsxs)(r.Z,{children:[(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:"Task Assigned Division"}),(0,C.jsxs)(d.Z.Control,{onChange:e=>ee("taskAssignedDiv",e.target.value),value:z.taskAssignedDiv,as:"select",defaultValue:"Choose...",isInvalid:!!W.taskAssignedDiv,children:[(0,C.jsx)("option",{children:"Choose..."}),(0,C.jsx)("option",{children:"Project_Radio"}),(0,C.jsx)("option",{children:"Project_Core"}),(0,C.jsx)("option",{children:"Project_TX"}),(0,C.jsx)("option",{children:"Project_IBS"}),(0,C.jsx)("option",{children:"Project_WiFi"})]}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:W.taskAssignedDiv})]}),(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:"Assigned Officer"}),(0,C.jsxs)(d.Z.Control,{onChange:e=>{"Choose..."===e.target.value&&(ee("assignedMobitelOfficer",e.target.value),I([{_id:"",name:"Choose..."}]),O([{_id:"",name:"Choose..."}]),P([{_id:"",name:"Choose..."}]));for(let a=0;a<m.length;a++)if(m[a]._id===e.target.value)switch(m[a].approvalPath.length){case 0:I([{_id:"",name:"Choose..."}]),O([{_id:"",name:"Choose..."}]),P([{_id:"",name:"Choose..."}]),H({...z,verificationOneId:"",verificationTwoId:"",approvalId:"",assignedMobitelOfficer:e.target.value,approvalType:"Default"}),W.assignedMobitelOfficer&&X({...W,assignedMobitelOfficer:null});break;case 1:I([{_id:m[a].approvalPath[0]._id,name:m[a].approvalPath[0].name}]),ee("verificationOneId",m[a].approvalPath[0]._id),O([{_id:"",name:"Choose..."}]),P([{_id:"",name:"Choose..."}]),H({...z,verificationOneId:m[a].approvalPath[0]._id,verificationTwoId:"",approvalId:"",assignedMobitelOfficer:e.target.value,approvalType:"Default"}),W.assignedMobitelOfficer&&X({...W,assignedMobitelOfficer:null});break;case 2:I([{_id:m[a].approvalPath[0]._id,name:m[a].approvalPath[0].name}]),O([{_id:"",name:"Choose...."}]),P([{_id:m[a].approvalPath[1]._id,name:m[a].approvalPath[1].name}]),H({...z,verificationOneId:m[a].approvalPath[0]._id,verificationTwoId:"",approvalId:m[a].approvalPath[1]._id,assignedMobitelOfficer:e.target.value,approvalType:"Default"}),W.assignedMobitelOfficer&&X({...W,assignedMobitelOfficer:null});break;case 3:I([{_id:m[a].approvalPath[0]._id,name:m[a].approvalPath[0].name}]),O([{_id:m[a].approvalPath[1]._id,name:m[a].approvalPath[1].name}]),P([{_id:m[a].approvalPath[2]._id,name:m[a].approvalPath[2].name}]),H({...z,verificationOneId:m[a].approvalPath[0]._id,verificationTwoId:m[a].approvalPath[1]._id,approvalId:m[a].approvalPath[2]._id,assignedMobitelOfficer:e.target.value,approvalType:"Default"}),W.assignedMobitelOfficer&&X({...W,assignedMobitelOfficer:null})}},as:"select",value:z.assignedMobitelOfficer,defaultValue:"Choose...",isInvalid:!!W.assignedMobitelOfficer,children:[(0,C.jsx)("option",{children:"Choose..."}),a.map((e=>(0,C.jsx)("option",{value:e._id,children:e.name})))]}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:W.assignedMobitelOfficer})]}),(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:"Approval Path"}),(0,C.jsxs)(d.Z.Control,{onChange:e=>{if("New"===e.target.value){let a=m.filter((e=>"Mobitel"===e.company.companyName));I(a),O(a),P(a),H({...z,verificationOneId:a[0]._id,verificationTwoId:a[0]._id,approvalId:a[0]._id,approvalType:e.target.value}),W.approvalType&&X({...W,assignedMobitelOfficer:null})}else if("Default"===e.target.value)for(let a=0;a<m.length;a++)if(m[a]._id===z.assignedMobitelOfficer)switch(m[a].approvalPath.length){case 0:I([{_id:"",name:"Choose..."}]),O([{_id:"",name:"Choose..."}]),P([{_id:"",name:"Choose..."}]),H({...z,verificationOneId:"",verificationTwoId:"",approvalId:"",approvalType:e.target.value}),W.approvalType&&X({...W,approvalType:null});break;case 1:I([{_id:m[a].approvalPath[0]._id,name:m[a].approvalPath[0].name}]),ee("verificationOneId",m[a].approvalPath[0]._id),O([{_id:"",name:"Choose..."}]),P([{_id:"",name:"Choose..."}]),H({...z,verificationOneId:m[a].approvalPath[0]._id,verificationTwoId:"",approvalId:"",approvalType:e.target.value}),W.approvalType&&X({...W,approvalType:null});break;case 2:I([{_id:m[a].approvalPath[0]._id,name:m[a].approvalPath[0].name}]),O([{_id:"",name:"Choose...."}]),P([{_id:m[a].approvalPath[1]._id,name:m[a].approvalPath[1].name}]),H({...z,verificationOneId:m[a].approvalPath[0]._id,verificationTwoId:"",approvalId:m[a].approvalPath[1]._id,approvalType:e.target.value}),W.approvalType&&X({...W,approvalType:null});break;case 3:I([{_id:m[a].approvalPath[0]._id,name:m[a].approvalPath[0].name}]),O([{_id:m[a].approvalPath[1]._id,name:m[a].approvalPath[1].name}]),P([{_id:m[a].approvalPath[2]._id,name:m[a].approvalPath[2].name}]),H({...z,verificationOneId:m[a].approvalPath[0]._id,verificationTwoId:m[a].approvalPath[1]._id,approvalId:m[a].approvalPath[2]._id,approvalType:e.target.value}),W.approvalType&&X({...W,approvalType:null})}},as:"select",value:z.approvalType,defaultValue:"Choose...",isInvalid:!!W.name,children:[(0,C.jsx)("option",{children:"Default"}),(0,C.jsx)("option",{children:"New"})]})]})]}),(0,C.jsxs)(r.Z,{children:[(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:"Verification by (Level 1)"}),(0,C.jsx)(d.Z.Control,{as:"select",onChange:e=>ee("verificationOneId",e.target.value),value:z.verificationOneId,defaultValue:"Choose...",isInvalid:!!W.verificationOneId,children:y.map((e=>(0,C.jsx)("option",{value:e._id,children:e.name})))}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:W.verificationOneId})]}),(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:"Verification by (Level 2)"}),(0,C.jsx)(d.Z.Control,{as:"select",onChange:e=>ee("verificationTwoId",e.target.value),value:z.verificationTwoId,defaultValue:"Choose...",children:D.map((e=>(0,C.jsx)("option",{value:e._id,children:e.name})))})]}),(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:"Approval by"}),(0,C.jsx)(d.Z.Control,{as:"select",onChange:e=>ee("approvalId",e.target.value),value:z.approvalId,defaultValue:"Choose...",isInvalid:!!W.approvalId,children:w.map((e=>(0,C.jsx)("option",{value:e._id,children:e.name})))}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:W.approvalId})]})]}),(0,C.jsx)(r.Z,{children:(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:"High level work scope"}),(0,C.jsx)(d.Z.Control,{onChange:e=>ee("workScope",e.target.value),value:z.workScope,as:"textarea",rows:2,placeholder:"",isInvalid:!!W.workScope}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:W.workScope})]})}),(0,C.jsxs)(r.Z,{className:"mb-3",children:[(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:"Assigned subcontractor"}),(0,C.jsxs)(d.Z.Control,{onChange:e=>ee("assignedSubcon",e.target.value),value:z.assignedSubcon,as:"select",defaultValue:"Choose...",isInvalid:!!W.assignedSubcon,children:[(0,C.jsx)("option",{children:"Choose..."}),v.map((e=>(0,C.jsx)("option",{value:e._id,children:e.companyName})))]}),(0,C.jsx)(d.Z.Control.Feedback,{type:"invalid",children:W.assignedSubcon})]}),(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:"Handover Details"}),(0,C.jsx)("br",{}),(0,C.jsx)(p.Z,{onClick:a=>{for(var i=u().utils.book_new(),t=[...new Set(e.location.data.map((e=>e.projectID)))],o=0;o<F.length;o++)for(var s=0;s<t.length;s++)if(t[s]===F[o].projectID){var n=[];(n=e.location.data.filter((e=>e.projectID===t[s])).map((e=>e.properties))).unshift(F[o].properties);var r=u().utils.aoa_to_sheet(n);u().utils.book_append_sheet(i,r,F[o].subProject+"_"+F[o].projectID)}u().writeFile(i,"Handover details.xlsx")},variant:"primary",type:"button",children:"Click to Download"})]}),(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:" Boq project requirement"}),(0,C.jsx)(d.Z.Check,{onChange:e=>E(!B),value:B,checked:B,className:"col-md-9",id:"custom-switch-3",type:"switch"})]}),(0,C.jsxs)(d.Z.Group,{as:c.Z,children:[(0,C.jsx)(d.Z.Label,{children:"Upload Supporting Documents"}),(0,C.jsx)("br",{}),(0,C.jsx)(d.Z.Control,{type:"file",multiple:!0,onChange:e=>{R(e.target.files)},size:"lg"})]})]}),(0,C.jsx)(p.Z,{variant:"primary",type:"submit",children:"Assign Subcontractor"})]})})})]}),(0,C.jsx)(h.Z,{open:K,autoHideDuration:6e3,onClose:oe,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,C.jsx)(_,{onClose:oe,severity:L,sx:{width:"100%"},children:N})}),(0,C.jsx)(k.Z,{open:Y,onClose:oe,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,C.jsx)(j.Z,{children:(0,C.jsx)(b.Z,{sx:{display:"flex"},children:(0,C.jsx)(x.Z,{})})})})]})}))},97473:e=>{e.exports="object"==typeof self?self.FormData:window.FormData},62591:(e,a,i)=>{"use strict";i.d(a,{Z:()=>c});var t=i(87462),o=i(63366),s=i(81694),n=i.n(s),r=i(72791),l=i(10162),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"];const c=r.forwardRef((function(e,a){var i=e.bsPrefix,s=e.className,c=e.striped,p=e.bordered,h=e.borderless,v=e.hover,f=e.size,u=e.variant,m=e.responsive,g=(0,o.Z)(e,d),b=(0,l.vE)(i,"table"),j=n()(s,b,u&&b+"-"+u,f&&b+"-"+f,c&&b+"-striped",p&&b+"-bordered",h&&b+"-borderless",v&&b+"-hover"),x=r.createElement("table",(0,t.Z)({},g,{className:j,ref:a}));if(m){var k=b+"-responsive";return"string"===typeof m&&(k=k+"-"+m),r.createElement("div",{className:k},x)}return x}))},55382:()=>{},72095:()=>{},61219:()=>{}}]);
//# sourceMappingURL=1913.894c6646.chunk.js.map