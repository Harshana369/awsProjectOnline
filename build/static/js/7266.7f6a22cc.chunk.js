"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7266],{17266:function(e,t,n){n.r(t);n(74165),n(15861);var a=n(4942),r=n(29439),s=n(1413),o=n(72791),c=n(79271),i=n(74569),l=n.n(i),d=n(3986),u=(n(2468),n(43360)),h=n(39474),p=n(16149),m=n(89743),j=n(2677),x=n(34575),f=n(19658),v=n(29818),Z=n(64554),g=n(39157),k=n(13239),S=n(80184),N=o.forwardRef((function(e,t){return(0,S.jsx)(f.Z,(0,s.Z)({elevation:6,ref:t,variant:"filled"},e))}));t.default=(0,c.EN)((function(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),n=t[0],c=t[1],i=(0,o.useState)([]),f=(0,r.Z)(i,2),w=f[0],y=f[1],b=(0,o.useState)([]),C=(0,r.Z)(b,2),I=C[0],O=C[1],H=(0,o.useState)([]),P=(0,r.Z)(H,2),D=P[0],T=P[1],R=(0,o.useState)(!1),B=(0,r.Z)(R,2),A=B[0],L=B[1],q=(0,o.useState)(""),E=(0,r.Z)(q,2),G=E[0],J=E[1],z=(0,o.useState)(""),_=(0,r.Z)(z,2),F=_[0],U=_[1],$=(0,o.useState)(""),K=(0,r.Z)($,2),M=K[0],Q=K[1],V=(0,o.useState)({}),W=(0,r.Z)(V,2),X=W[0],Y=W[1],ee=(0,o.useState)(!1),te=(0,r.Z)(ee,2),ne=te[0],ae=te[1],re=function(e,t){O((0,s.Z)((0,s.Z)({},I),{},(0,a.Z)({},t,e.target.value)))},se=(0,o.useState)(!1),oe=(0,r.Z)(se,2),ce=oe[0],ie=oe[1],le=function(){return ie(!1)},de=l().create({baseURL:"http://ec2-65-2-5-82.ap-south-1.compute.amazonaws.com/"});(0,o.useEffect)((function(){he()}),[]);var ue=function(){var e={};return M&&""!==M||(e.comment="cannot be blank!"),console.log(e),e},he=function(){ae(!0),de.get("projonline/pendinghandoverchanges",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(e){c(e.data),ae(!1)})).catch((function(e){console.log(e)}))},pe=function(e,t){"clickaway"!==t&&L(!1)},me=[{field:"taskRef",headerName:"TaskID",width:250},{field:"siteID",headerName:"SiteID",width:150},{field:"siteName",headerName:"Site Name",width:175},{field:"project",headerName:"Project",width:250},{field:"subProject",headerName:"Sub Project",width:250},{field:"Approve handover changes",width:250,align:"center",renderCell:function(e){return(0,S.jsx)(u.Z,{variant:"primary",style:{width:100},onClick:function(){return t=e.row,y(t),O(t.newProperties),T(t.headerProperties),Q(""),void ie(!0);var t},children:"To Approve"})}}];return(0,S.jsxs)("div",{children:[(0,S.jsxs)("div",{className:"content-wrapper",children:[(0,S.jsx)("div",{className:"content-header",children:(0,S.jsx)("section",{className:"content-header",children:(0,S.jsx)("div",{className:"container-fluid",children:(0,S.jsx)("div",{className:"row mb-2",children:(0,S.jsx)("div",{className:"col-sm-6",children:(0,S.jsx)("h1",{children:"Approve Handover Changes"})})})})})}),(0,S.jsx)("div",{style:{height:610,width:"100%"},children:(0,S.jsx)(d._$r,{getRowId:function(e){return e._id},rows:n,columns:me,pageSize:15,rowsPerPageOptions:[15],rowHeight:30,headerHeight:40,components:{Toolbar:d.npt}})})]}),(0,S.jsxs)(h.Z,{show:ce,onHide:le,size:"lg",animation:!1,children:[(0,S.jsx)(h.Z.Header,{closeButton:!0,children:(0,S.jsx)(h.Z.Title,{children:"Edit Handover"})}),(0,S.jsx)(h.Z.Body,{children:(0,S.jsxs)(p.Z,{onSubmit:le,children:[null===D||void 0===D?void 0:D.map((function(e,t){return t<3?(0,S.jsx)(m.Z,{children:(0,S.jsxs)(p.Z.Group,{className:"m-2",controlId:"refid",as:j.Z,children:[(0,S.jsx)(p.Z.Label,{children:e}),(0,S.jsx)(p.Z.Control,{className:"mr-1 ml-1",value:I[t],onChange:function(e){return re(e,t)},type:"text",readOnly:!0})]})}):(0,S.jsx)(m.Z,{children:(0,S.jsxs)(p.Z.Group,{className:"m-2",controlId:"refid",as:j.Z,children:[(0,S.jsx)(p.Z.Label,{children:e}),(0,S.jsxs)("div",{className:"d-flex flex-row",children:[(0,S.jsx)(p.Z.Control,{className:"mr-1 ml-1",value:w.existingProperties[t],type:"text",readOnly:!0}),(0,S.jsx)(p.Z.Control,{className:"mr-1 ml-1 ".concat(w.existingProperties[t]!=I[t]?"text-danger":""),value:I[t],onChange:function(e){return re(e,t)},type:"text",readOnly:!0})]})]})})})),w.taskStatus&&(0,S.jsx)(m.Z,{children:(0,S.jsxs)(p.Z.Group,{className:"m-3",controlId:"refid",as:j.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Requested Status"}),(0,S.jsx)(p.Z.Control,{type:"text",rows:3,required:!0,value:w.taskStatus,readonly:!0})]})}),(0,S.jsx)(m.Z,{children:(0,S.jsxs)(p.Z.Group,{className:"m-3",controlId:"refid",as:j.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Reason for the change request"}),(0,S.jsx)(p.Z.Control,{as:"textarea",rows:3,required:!0,value:w.comment,readonly:!0})]})}),(0,S.jsx)(m.Z,{children:(0,S.jsxs)(p.Z.Group,{className:"m-3",controlId:"refid",as:j.Z,children:[(0,S.jsx)(p.Z.Label,{children:"Approval Comment"}),(0,S.jsx)(p.Z.Control,{as:"textarea",value:M,rows:3,required:!0,onChange:function(e){return Q(e.target.value)},isInvalid:!!X.comment}),(0,S.jsx)(p.Z.Control.Feedback,{type:"invalid",children:"Please provide comment"})]})})]})}),(0,S.jsxs)(h.Z.Footer,{children:[(0,S.jsx)(u.Z,{variant:"danger",onClick:function(){var e=ue();Object.keys(e).length>0?Y(e):de.put("projonline/updatehandoverchanges/".concat(w._id),{approveComment:M,status:"Deny"},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(e){de.put("projonline/update/".concat(w.taskRefID),{taskObject:{},taskHistory:{taskStatus:"Handover change denied",comment:M}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(e){L(!0),J("success"),U("Handover Denied"),ie(!1),he()})).catch((function(e){console.log(e),L(!0),J("error"),U("Error occured")}))})).catch((function(e){console.log(e)}))},children:"Deny"}),(0,S.jsx)(u.Z,{variant:"primary",onClick:function(){var e=ue();if(Object.keys(e).length>0)Y(e);else{var t=Object.values(I);de.put("projonline/updatehandoverchanges/".concat(w._id),{approveComment:M,status:"Approved"},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(e){de.put("projonline/update/".concat(w.taskRefID),{taskObject:{properties:t,taskStatus:w.taskStatus},taskHistory:{taskStatus:w.taskStatus?"".concat(w.taskStatus," approved"):"Handover change approved",comment:M}},{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((function(e){L(!0),J("success"),U(w.taskStatus?"".concat(w.taskStatus," approved"):"Handover change approved"),ie(!1),he()})).catch((function(e){console.log(e),L(!0),J("error"),U("Error occured")}))})).catch((function(e){console.log(e)}))}},children:"Approve"})]})]}),(0,S.jsx)(x.Z,{open:A,autoHideDuration:6e3,onClose:pe,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,S.jsx)(N,{onClose:pe,severity:G,sx:{width:"100%"},children:F})}),(0,S.jsx)(v.Z,{open:ne,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,S.jsx)(g.Z,{children:(0,S.jsx)(Z.Z,{sx:{display:"flex"},children:(0,S.jsx)(k.Z,{})})})})]})}))},2468:function(){}}]);
//# sourceMappingURL=7266.7f6a22cc.chunk.js.map