(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[872],{31029:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>N});var t=r(72791),s=r(79271),o=r(74569),i=r.n(o),l=r(16149),d=r(89743),n=r(2677),c=r(43360),h=r(34575),C=r(19658),u=r(3986),m=r(58484),j=r.n(m),p=r(64554),x=r(39157),v=r(13239),b=r(29818),Z=r(80184);const f=t.forwardRef((function(e,a){return(0,Z.jsx)(C.Z,{elevation:6,ref:a,variant:"filled",...e})})),g=["csv","xls","xlsx"];const N=(0,s.EN)((function(e){let[a,r]=(0,t.useState)([]),[s,o]=(0,t.useState)([]),[C,m]=(0,t.useState)(!1);const N=i().create({baseURL:"http://ec2-65-2-5-82.ap-south-1.compute.amazonaws.com/"});let[S,y]=(0,t.useState)({}),[V,w]=(0,t.useState)({}),[k,F]=(0,t.useState)(!1),R=(e,a)=>{y({...S,[e]:a}),V[e]&&w({...V,[e]:null})};(0,t.useEffect)((()=>{N.get("projonline/users",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{r(e.data.companys.filter((e=>"Mobitel"!==e.companyName))),y({})})).catch((e=>{console.log(e)}))}),[]);const D=(e,a)=>{"clickaway"!==a&&F(!1)};return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"content-wrapper",children:[(0,Z.jsx)("div",{className:"content-header",children:(0,Z.jsx)("section",{className:"content-header",children:(0,Z.jsx)("div",{className:"container-fluid",children:(0,Z.jsx)("div",{className:"row mb-2",children:(0,Z.jsx)("div",{className:"col-sm-6",children:(0,Z.jsx)("h1",{children:"Upload New Rate Card"})})})})})}),(0,Z.jsx)("section",{className:"content",children:(0,Z.jsxs)("div",{className:"container-fluid",children:[(0,Z.jsxs)(l.Z,{onSubmit:e=>{e.preventDefault(),m(!0);const a=(()=>{const{rateCardValidFrom:e,rateCardValidTo:a,rateCardDiv:r,rateCardSubcon:t}=S,s={};return e&&""!==e||(s.rateCardValidFrom="cannot be blank!"),a&&""!==a||(s.rateCardValidTo="cannot be blank!"),r&&""!==r&&"Choose..."!==r||(s.rateCardDiv="Choose a division!"),t&&""!==t||(s.rateCardSubcon="Choose a Subcontractor!"),s})();if(Object.keys(a).length>0)w(a),m(!1);else{const e={rateCardValidFrom:S.rateCardValidFrom,rateCardValidTo:S.rateCardValidTo,rateCardDiv:S.rateCardDiv,rateCardSubcon:S.rateCardSubcon,rateCardItems:s};N.post("projonline/addRateCard",e,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}).then((e=>{F(!0),y({rateCardValidFrom:"",rateCardValidTo:"",rateCardDiv:"",rateCardSubcon:""}),o([]),m(!1)})).catch((e=>{console.log(e)}))}},children:[(0,Z.jsxs)(d.Z,{className:"mb-3",children:[(0,Z.jsxs)(l.Z.Group,{as:n.Z,children:[(0,Z.jsx)(l.Z.Label,{children:"Division"}),(0,Z.jsxs)(l.Z.Control,{onChange:e=>R("rateCardDiv",e.target.value),value:S.rateCardDiv,as:"select",defaultValue:"Choose...",isInvalid:!!V.rateCardDiv,children:[(0,Z.jsx)("option",{children:"Choose..."}),(0,Z.jsx)("option",{children:"Project_Radio"}),(0,Z.jsx)("option",{children:"Project_Core"}),(0,Z.jsx)("option",{children:"Project_TX"}),(0,Z.jsx)("option",{children:"Project_IBS"}),(0,Z.jsx)("option",{children:"Project_WiFi"})]}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:V.rateCardDiv})]}),(0,Z.jsxs)(l.Z.Group,{as:n.Z,children:[(0,Z.jsx)(l.Z.Label,{children:"Subcontractor"}),(0,Z.jsxs)(l.Z.Control,{onChange:e=>R("rateCardSubcon",e.target.value),value:S.rateCardSubcon,as:"select",defaultValue:"Choose...",isInvalid:!!V.rateCardSubcon,children:[(0,Z.jsx)("option",{children:"Choose..."}),a.map((e=>(0,Z.jsx)("option",{value:e._id,children:e.companyName})))]}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:V.rateCardSubcon})]}),(0,Z.jsx)(l.Z.Group,{as:n.Z})]}),(0,Z.jsxs)(d.Z,{className:"mb-3",children:[(0,Z.jsxs)(l.Z.Group,{as:n.Z,children:[(0,Z.jsx)(l.Z.Label,{children:"Rate Card Valid From"}),(0,Z.jsx)(l.Z.Control,{onChange:e=>R("rateCardValidFrom",e.target.value),value:S.rateCardValidFrom,className:"col-md-9",type:"date",isInvalid:!!V.rateCardValidFrom}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:V.rateCardValidFrom})]}),(0,Z.jsxs)(l.Z.Group,{as:n.Z,children:[(0,Z.jsx)(l.Z.Label,{children:"Rate Card Valid To"}),(0,Z.jsx)(l.Z.Control,{onChange:e=>R("rateCardValidTo",e.target.value),value:S.rateCardValidTo,className:"col-md-9",type:"date",isInvalid:!!V.rateCardValidTo}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:V.rateCardValidTo})]}),(0,Z.jsx)(l.Z.Group,{as:n.Z})]}),(0,Z.jsx)(d.Z,{className:"mb-3",children:(0,Z.jsxs)(l.Z.Group,{as:n.Z,children:[(0,Z.jsx)(l.Z.Label,{children:"Upload the rate sheet"}),(0,Z.jsx)(l.Z.Control,{onChange:e=>{const a=e.target.files[0],r=new FileReader;r.onload=e=>{const a=e.target.result,r=j().read(a,{type:"binary"}),t=r.SheetNames[0],s=r.Sheets[t],i=j().utils.sheet_to_json(s,{header:1}),l=i[0];i.splice(0,1),o(((e,a)=>{const r=[];return a.forEach(((a,t)=>{let s={};s.id=t,a.forEach(((a,r)=>{s[e[r]]=a})),r.push(s)})),r})(l,i))},a?(e=>{const a=e.name.split("."),r=a[a.length-1];return g.includes(r)})(a)?r.readAsBinaryString(a):alert("Invalid file"):o([])},type:"file",isInvalid:!!V.file}),(0,Z.jsx)(l.Z.Control.Feedback,{type:"invalid",children:V.fi})]})}),(0,Z.jsx)(d.Z,{className:"mb-3",children:(0,Z.jsx)(c.Z,{variant:"primary",type:"submit",children:"Submit a Rate Card"})})]}),(0,Z.jsx)("div",{style:{height:610,width:"100%"},children:(0,Z.jsx)(u._$r,{getRowId:e=>e.id,rows:s,columns:[{field:"erpCode",headerName:"ERP Code",width:130},{field:"itemNo",headerName:"Item No",width:130},{field:"itemDiscreption",headerName:"Item Discreption",width:400},{field:"itemUom",headerName:"Item UoM",width:180},{field:"itemRate",headerName:"Rate (LKR)",width:180}],pageSize:15,rowsPerPageOptions:[15],rowHeight:30,headerHeight:40,components:{Toolbar:u.npt}})})]})})]}),(0,Z.jsx)(h.Z,{open:k,autoHideDuration:6e3,onClose:D,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,Z.jsx)(f,{onClose:D,severity:"success",sx:{width:"100%"},children:"Rate Card Uploaded successfully!!!"})}),(0,Z.jsx)(b.Z,{open:C,onClose:(e,a)=>{"clickaway"!==a&&F(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,Z.jsx)(x.Z,{children:(0,Z.jsx)(p.Z,{sx:{display:"flex"},children:(0,Z.jsx)(v.Z,{})})})})]})}))},55382:()=>{},72095:()=>{},61219:()=>{}}]);
//# sourceMappingURL=872.373c646b.chunk.js.map