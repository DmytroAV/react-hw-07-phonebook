"use strict";(self.webpackChunkreact_hw_07_phonebook=self.webpackChunkreact_hw_07_phonebook||[]).push([[103],{8445:function(e,n,r){r.d(n,{c:function(){return a}});var t,o=r(168),a=r(5867).ZP.button(t||(t=(0,o.Z)(["\n  border: none;\n  cursor: pointer;\n  width: 130px;\n  height: 30px;\n  font-weight: 600;\n  background: #ff8500;\n  color: #f6f8f9;\n  border-radius: 3px;\n  text-transform: uppercase;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  &:hover {\n    background: #ea7b00;\n    color: #f6f8f9;\n  }\n"])))},1280:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var t,o,a,i=r(4165),s=r(1413),l=r(5861),u=r(9439),d=r(7748),c=r(7689),m=r(5657),p=r(168),f=r(5867),x=f.ZP.div(t||(t=(0,p.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),h=f.ZP.div(o||(o=(0,p.Z)(["\n  display: grid;\n  grid-template-rows: 25px 1fr;\n  row-gap: 5px;\n  padding: 10px;\n  background-color: #dadada;\n  border-radius: 5px;\n"]))),g=f.ZP.button(a||(a=(0,p.Z)(["\n  /* display: grid;\n  justify-content: center;\n  align-items: center; */\n  justify-self: end;\n  border: none;\n  background-color: unset;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  /* width: 25px;\n  height: 25px;\n  border: 2px solid #121212;\n  border-radius: 50%; */\n"]))),b=r(7322),v=r(9085),j=r(184),y={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"},_=function(){var e=(0,c.UO)().contactId,n=(0,c.s0)(),r=(0,d.W1)(e).data,t=(0,d.wv)(),o=(0,u.Z)(t,1)[0],a=function(){return n("/contacts")},p=function(){var n=(0,l.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o((0,s.Z)({id:e},t));case 3:a(),v.Am.success("Contact ".concat(r.firstName," ").concat(r.lastName," has updated your phone book"),y),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,j.jsx)(x,{children:r&&(0,j.jsxs)(h,{children:[(0,j.jsx)(g,{type:"button",onClick:a,children:(0,j.jsx)(b.FU5,{size:25})}),(0,j.jsx)(m.Z,{initialValues:r,onSubmit:p,title:"Update Contact",textBtn:"update"})]})})}},5657:function(e,n,r){r.d(n,{Z:function(){return z}});var t,o,a=r(2791),i=r(7689),s=r(1134),l=r(4695),u=r(6727),d=r(168),c=r(5867),m=c.ZP.div(t||(t=(0,d.Z)(["\n  width: 100%;\n"]))),p=c.ZP.p(o||(o=(0,d.Z)(["\n  position: absolute;\n  z-index: 5;\n  color: red;\n  font-size: 14px;\n  font-style: italic;\n  grid-column: span 2;\n  justify-self: center;\n  font-weight: 400;\n  margin: 0;\n  top: 50px;\n"]))),f=r(184);function x(e){var n=e.message;return(0,f.jsx)(m,{children:(0,f.jsx)(p,{children:n})})}var h,g,b,v,j,y,_,C=r(1424),Z=r(5338),w=r(3634),N=r(8445),B=c.ZP.div(h||(h=(0,d.Z)(["\n  display: grid;\n  justify-content: stretch;\n  row-gap: 20px;\n  padding: 15px;\n  /* width: 100%; */\n  background-color: #f8f8f8;\n  border: 2px solid #c2c2c2;\n  border-radius: 3px;\n  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);\n"]))),P=c.ZP.h2(g||(g=(0,d.Z)(["\n  font-weight: bold;\n  font-style: italic;\n  border-bottom: 2px solid #ddd;\n  margin: 20px 0 0;\n  font-size: 22px;\n  padding-left: 40px;\n  padding-bottom: 10px;\n  color: #ff8500;\n"]))),q=c.ZP.form(b||(b=(0,d.Z)(['\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n  grid-template-areas:\n  "firstName avatar"\n  "lastName avatar"\n  "job_title avatar"\n  "user_country user_region"\n  "code_country address_street"\n  "email phone"\n  "button button";\n  justify-content: center;\n  max-width: 700px;\n  padding: 20px 12px 10px 20px;\n  row-gap: 30px;\n']))),F=c.ZP.label(v||(v=(0,d.Z)(["\n  display: grid;\n  grid-area: ",";\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 0 15px;\n  font-weight: bold;\n  font-style: italic;\n  position: relative;\n  color: #ff8500;\n    select {\n      width: 250px;\n      height: 30px;\n    }\n    .PhoneInput{\n      width: 250px;\n      .PhoneInputInput {\n        width: 100%;\n      }\n      .PhoneInputCountrySelect {\n          width: 40px;\n      }\n    }\n"])),(function(e){return e.htmlFor})),k=c.ZP.img(j||(j=(0,d.Z)(["\n  grid-area: avatar;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  border: 1px solid;\n  justify-self: center;\n  align-self: center;\n"]))),S=c.ZP.input(y||(y=(0,d.Z)(["\n  border: 1px solid #c2c2c2;\n  box-shadow: 1px 1px 4px #ebebeb;\n  border-radius: 3px;\n  padding: 7px;\n  outline: none;\n  width: 250px;\n  height: 30px;\n  &:focus {\n    border: ",";\n  }\n  text-transform: ",";\n"])),(function(e){return e.$mode&&"1px solid red"}),(function(e){return e.$capitalize&&"capitalize"})),$=(0,c.ZP)(N.c)(_||(_=(0,d.Z)(["\n  grid-area: button;\n  justify-self: end;\n"]))),E=(r(4719),u.Ry().shape({firstName:u.Z_().label("First Name").trim().min(3).max(10).required(),lastName:u.Z_().label("Last Name").trim().min(3).max(10).required(),job_title:u.Z_().label("Address Street").required(),user_country:u.Z_().label("Country").required(),user_region:u.Z_().label("Region").required(),code_country:u.Z_().label("Code Country").required(),address_street:u.Z_().label("Address Street").required(),email:u.Z_().email().label("Email").required(),phone:u.Z_().matches(/^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/im,"Phone number is not valid").required("Mobile Phone is required")})),z=function(e){var n=e.initialValues,r=e.onSubmit,t=e.title,o=e.textBtn,u=(0,s.cI)({defaultValues:n,resolver:(0,l.X)(E),mode:"onChange"}),d=u.handleSubmit,c=u.control,m=u.reset,p=u.formState,h=u.watch,g=u.formState,b=g.errors,v=g.isValid,j=g.isSubmitting;(0,a.useEffect)((function(){p.isSubmitSuccessful&&m()}),[p.isSubmitSuccessful,m]);var y=function(e){return w.Xd.filter((function(n){return n[0]===e}))[0][1]};return(0,f.jsxs)(B,{children:[p.isSubmitSuccessful&&(0,f.jsx)(i.Fg,{to:"/contacts"}),(0,f.jsx)(P,{children:t}),(0,f.jsxs)(q,{onSubmit:d(r),children:[(0,f.jsx)(s.Qr,{name:"avatar",control:c,rules:{required:!0},render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value,a=n.name;return(0,f.jsxs)(F,{htmlFor:a,children:[(0,f.jsx)(k,{name:a,autoComplete:"off",src:o,onBlur:t,onChange:r,autoFocus:!0,$mode:b.name,$capitalize:!0,type:"text",placeholder:"avatar"}),b.name&&(0,f.jsx)(x,{message:null===b||void 0===b?void 0:b.firstName.message})]})}}),(0,f.jsx)(s.Qr,{name:"firstName",control:c,rules:{required:!0},render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value,a=n.name;return(0,f.jsxs)(F,{htmlFor:"firstName",children:["First Name",(0,f.jsx)(S,{name:a,autoComplete:"off",value:o,onBlur:t,onChange:r,autoFocus:!0,$mode:b.firstName,$capitalize:!0,type:"text",placeholder:"Enter First Name"}),b.firstName&&(0,f.jsx)(x,{message:null===b||void 0===b?void 0:b.firstName.message})]})}}),(0,f.jsx)(s.Qr,{name:"lastName",control:c,rules:{required:!0},render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value;return(0,f.jsxs)(F,{htmlFor:"lastName",children:["Last Name",(0,f.jsx)(S,{name:"lastName",autoComplete:"off",value:o,onBlur:t,onChange:r,$mode:b.lastName,$capitalize:!0,type:"text",placeholder:"Enter Last Name"}),b.lastName&&(0,f.jsx)(x,{message:null===b||void 0===b?void 0:b.lastName.message})]})}}),(0,f.jsx)(s.Qr,{name:"job_title",control:c,rules:{required:!0},render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value,a=n.name;return(0,f.jsxs)(F,{htmlFor:"job_title",children:["job_title",(0,f.jsx)(S,{name:a,autoComplete:"off",value:o,onBlur:t,onChange:r,$mode:b.job_title,$capitalize:!0,type:"job_title",placeholder:"Enter job title"}),b.job_title&&(0,f.jsx)(x,{message:null===b||void 0===b?void 0:b.job_title.message})]})}}),(0,f.jsx)(s.Qr,{name:"user_country",control:c,rules:{required:!0},render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value,a=n.name;return(0,f.jsxs)(F,{htmlFor:"user_country",children:["Country",(0,f.jsx)(w.Px,{name:a,autoComplete:"off",value:o,onBlur:t,onChange:r,$mode:b.country,type:"text",defaultOptionLabel:"Enter country"}),b.user_country&&(0,f.jsx)(x,{message:null===b||void 0===b?void 0:b.user_country.message})]})}}),(0,f.jsx)(s.Qr,{name:"user_region",control:c,rules:{required:!0},render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value,a=n.name;return(0,f.jsxs)(F,{htmlFor:"user_region",children:["Region",(0,f.jsx)(w.Xz,{name:a,autoComplete:"off",country:h("user_country"),value:o,onBlur:t,onChange:r,$mode:b.user_region,type:"text",defaultOptionLabel:"Enter region"}),b.user_region&&(0,f.jsx)(x,{message:null===b||void 0===b?void 0:b.user_region.message})]})}}),(0,f.jsx)(s.Qr,{name:"code_country",control:c,rules:{required:!0},render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value,a=n.name;return(0,f.jsxs)(F,{htmlFor:"code_country",children:["Code Country",(0,f.jsx)(S,{name:a,autoComplete:"off",value:o,onBlur:t,onChange:r,$mode:b.code_country,type:"code_country",placeholder:"Enter code country"}),b.code_country&&(0,f.jsx)(x,{message:null===b||void 0===b?void 0:b.code_country.message})]})}}),(0,f.jsx)(s.Qr,{name:"address_street",control:c,rules:{required:!0},render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value,a=n.name;return(0,f.jsxs)(F,{htmlFor:"address_street",children:["Address Street",(0,f.jsx)(S,{name:a,autoComplete:"off",value:o,onBlur:t,onChange:r,$mode:b.address_street,type:"address_street",placeholder:"Enter address street"}),b.address_street&&(0,f.jsx)(x,{message:null===b||void 0===b?void 0:b.address_street.message})]})}}),(0,f.jsx)(s.Qr,{name:"phone",control:c,rules:{validate:function(e){return(0,Z.yf)(e)}},render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value,a=n.name;return(0,f.jsxs)(F,{htmlFor:"phone",children:["Phone",(0,f.jsx)(C.Z,{name:a,placeholder:"Enter phone number",control:c,rules:{required:!0},defaultCountry:h("user_country")&&y(h("user_country")),onChange:r,onBlur:t,value:o,inputComponent:S,initialValueFormat:"national",international:!0,limitMaxLength:!0,autoComplete:"off",id:"phone"}),b.phone&&(0,f.jsx)(x,{message:null===b||void 0===b?void 0:b.phone.message})]})}}),(0,f.jsx)(s.Qr,{name:"email",control:c,rules:{required:!0},render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value,a=n.name;return(0,f.jsxs)(F,{htmlFor:"email",children:["Email",(0,f.jsx)(S,{name:a,autoComplete:"off",value:o,onBlur:t,onChange:r,$mode:b.email,type:"email",placeholder:"Enter Email"}),b.email&&(0,f.jsx)(x,{message:null===b||void 0===b?void 0:b.email.message})]})}}),(0,f.jsx)($,{type:"submit",disabled:j||!v,children:o})]})]})}}}]);
//# sourceMappingURL=103.4eb78232.chunk.js.map