"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[178],{6946:function(n,e,t){t.d(e,{Z:function(){return jn}});var r,i,o,l,a,c,s,d,p,x,h,u,g,f,m,v,b,w,Z,j,k,y,C,P,L,z,S,M,F,B=t(9439),T=t(2791),R=t(3855),I=t(8560),E=t(4164),A=function(n){var e={},t=n.split("\n")[0].split(" ");return e.conditionText=t.slice(0,2).join(" "),e.minAge=t[t.length-1],e},W=t(168),V=t(6487),H=V.ZP.div(r||(r=(0,W.Z)(["\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--light-text-cl);\n  backdrop-filter: blur(2px);\n"]))),_=V.ZP.div(i||(i=(0,W.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  border-radius: 14px;\n  background-color: var(--white-cl);\n  padding: 40px 20px;\n  width: 380px;\n  max-height: 90vh;\n  overflow: auto;\n\n  @media screen and (min-width: 760px) {\n    width: 541px;\n    max-height: 752px;\n    margin-top: 0;\n    padding: 40px;\n  }\n"]))),N=V.ZP.div(o||(o=(0,W.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  z-index: 999; \n  cursor: pointer;\n"]))),U=V.ZP.img(l||(l=(0,W.Z)(["\n  height: 248px;\n  border-radius: 14px;\n"]))),D=V.ZP.div(a||(a=(0,W.Z)(["\n  margin-top: 14px;\n  margin-bottom: 24px;\n"]))),O=V.ZP.div(c||(c=(0,W.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 14px;\n  padding-bottom: 8px;\n"]))),$=V.ZP.h2(s||(s=(0,W.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.33;\n  color: var(--dark-text-cl);\n"]))),G=V.ZP.span(d||(d=(0,W.Z)(["\n  color: var(--normal-state-bg-cl);\n"]))),J=V.ZP.ul(p||(p=(0,W.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),K=V.ZP.li(x||(x=(0,W.Z)(['\n  font-size: 12px;\n  color: var(--light-text-cl);\n  display: flex;\n  align-items: center;\n\n  &:not(:last-child)::after {\n    content: "";\n    display: inline-block;\n    width: 1px;\n    height: 16px;\n    background-color: var(--stroke-text-cl);\n    margin-left: 6px;\n    margin-right: 6px;\n  }\n']))),Y=V.ZP.p(h||(h=(0,W.Z)(["\n  line-height: 1.43;\n  margin-top: 14px;\n  width: 300px;\n\n  @media screen and (min-width: 760px) {\n    width: 461px;\n  }\n"]))),q=V.ZP.h3(u||(u=(0,W.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--dark-text-cl);\n  margin-top: 24px;\n  margin-bottom: 8px;\n"]))),Q=V.ZP.ul(g||(g=(0,W.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  font-size: 12px;\n  letter-spacing: -0.24px;\n  width: 300px;\n\n  @media screen and (min-width: 760px) {\n    width: 461px;\n  }\n"]))),X=V.ZP.li(f||(f=(0,W.Z)(["\n  border-radius: 35px;\n  color: var(--condition-text-cl);\n  background-color: var(--condition-bg-cl);\n  padding: 7px 14px;\n"]))),nn=V.ZP.span(m||(m=(0,W.Z)(["\n  color: var(--normal-state-bg-cl);\n  font-weight: 600;\n"]))),en=V.ZP.a(v||(v=(0,W.Z)(["\n  width: 168px;\n  height: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 12px;\n  background-color: var(--normal-state-bg-cl);\n  color: var(--white-cl);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n  transition: background-color 0.3s ease;\n\n  &:hover,\n  &:focus {\n    background-color: var(--pressed-state-bg-cl);\n  }\n"]))),tn=t(3329),rn=document.getElementById("modal-root"),on=function(n){var e=n.car,t=n.onClose,r=e.id,i=e.make,o=e.model,l=e.year,a=e.rentalPrice,c=e.address,s=e.type,d=e.accessories,p=e.mileage,x=e.img,h=e.fuelConsumption,u=e.engineSize,g=e.description,f=e.functionalities,m=e.rentalConditions,v=c.split(",")[1],b=c.split(",")[2],w=A(m);(0,T.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n),document.body.style.overflow="visible"}}),[t]);return(0,E.createPortal)((0,tn.jsx)(H,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,tn.jsxs)(_,{children:[(0,tn.jsx)(N,{onClick:t,children:(0,tn.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,tn.jsx)("path",{d:"M18 6L6 18",stroke:"#121417",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,tn.jsx)("path",{d:"M6 6L18 18",stroke:"#121417",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}),(0,tn.jsx)(U,{src:x,alt:i,loading:"lazy",width:"469",height:"314"}),(0,tn.jsxs)(D,{children:[(0,tn.jsx)(O,{children:(0,tn.jsxs)($,{children:[i," ",(0,tn.jsxs)(G,{children:[o,", "]}),l]})}),(0,tn.jsxs)(J,{children:[(0,tn.jsx)(K,{children:v}),(0,tn.jsx)(K,{children:b}),(0,tn.jsxs)(K,{children:["Id: ",r]}),(0,tn.jsxs)(K,{children:["Year: ",l]}),(0,tn.jsxs)(K,{children:["Type: ",s]})]}),(0,tn.jsxs)(J,{children:[(0,tn.jsxs)(K,{children:["Fuel Consumption: ",h]}),(0,tn.jsxs)(K,{children:["Engine Size: ",u]})]}),(0,tn.jsx)(Y,{children:g}),(0,tn.jsx)(q,{children:"Accessories and functionalities:"}),(0,tn.jsx)(J,{children:d.map((function(n){return(0,tn.jsx)(K,{children:n},n)}))}),(0,tn.jsx)(J,{children:f.map((function(n){return(0,tn.jsx)(K,{children:n},n)}))}),(0,tn.jsx)(q,{children:"Rental Conditions:"}),(0,tn.jsxs)(Q,{children:[(0,tn.jsx)(X,{children:(0,tn.jsxs)("p",{children:[w.conditionText,(0,tn.jsxs)(nn,{children:[" ",w.minAge]})]})}),(0,tn.jsx)(X,{children:m.split("\n")[1]}),(0,tn.jsx)(X,{children:m.split("\n")[2]}),(0,tn.jsxs)(X,{children:["Mileage:"," ",(0,tn.jsx)(nn,{children:p.toLocaleString("en-US")})]}),(0,tn.jsxs)(X,{children:["Price: ",(0,tn.jsx)(nn,{children:a})]})]})]}),(0,tn.jsx)(en,{href:"tel:+380730000000",onTouchStart:function(){return window.location.href="tel:380730000000"},children:"Rental car"})]})}),rn)},ln=t(6351),an=t(838),cn=V.ZP.div(b||(b=(0,W.Z)(["\n  width: 274px;\n  height: 426px;\n  display: flex;\n  flex-direction: column;\n"]))),sn=V.ZP.div(w||(w=(0,W.Z)(["\n  position: relative;\n  width: 274px; \n  height: 274px;\n"]))),dn=V.ZP.img(Z||(Z=(0,W.Z)(["\n  width: 100%;\n  height: 268px;\n  border-radius: 14px;\n"]))),pn=V.ZP.button(j||(j=(0,W.Z)(["\n  position: absolute;\n  padding: 0;\n  border: none;\n  top: 14px;\n  right: 14px;\n  width: 18px;\n  height: 18px;\n  background: none;\n  cursor: pointer;\n"]))),xn=V.ZP.div(k||(k=(0,W.Z)(["\n  display: flex;\n  justify-content: space-between;\n  color: var(--dark-text-cl);\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px; \n  margin-top: 14px;\n  margin-bottom: 8px;\n"]))),hn=V.ZP.h2(y||(y=(0,W.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  color: var(--dark-text-cl);\n"]))),un=V.ZP.span(C||(C=(0,W.Z)(["\n  color:  var(--normal-state-bg-cl);\n"]))),gn=V.ZP.div(P||(P=(0,W.Z)(["\n  width: 274px;\n"]))),fn=V.ZP.ul(L||(L=(0,W.Z)(["\n  display: flex;\n  text-align: left;\n  color: var(--light-text-cl);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  margin-bottom: 4px; \n"]))),mn=V.ZP.li(z||(z=(0,W.Z)(['\n  display: flex;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  &:not(:last-child)::after {\n    content: "";\n    display: inline-block;\n    width: 1px;\n    height: 16px;\n    background-color: var(--stroke-text-cl);\n    margin-left: 6px;\n    margin-right: 6px;\n  }\n']))),vn=V.ZP.button(S||(S=(0,W.Z)(["\n  display: flex;\n  width: 274px;\n  height: 44px;\n  padding: 12px 99px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background: var(--normal-state-bg-cl);\n  color:  var(--white-cl);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  margin-top: auto;\n  transition: background-color 0.3s ease;\n\n  &:hover,\n  &.active {\n    background-color: var(--pressed-state-bg-cl);\n  }\n"]))),bn=function(n){var e=n.car,t=(0,R.I0)(),r=(0,I.v9)(ln.Tc),i=(0,T.useState)(!1),o=(0,B.Z)(i,2),l=o[0],a=o[1],c=function(){return a((function(n){return!n}))},s=r.find((function(n){return n.id===e.id}));return(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsxs)(cn,{children:[(0,tn.jsxs)(sn,{children:[(0,tn.jsx)(dn,{src:e.img,width:"274px",alt:"car",loading:"lazy"}),s?(0,tn.jsx)(pn,{type:"button",onClick:function(){t((0,an.r7)(e))},children:(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,tn.jsx)("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",fill:"#3470FF",stroke:"#3470FF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}):(0,tn.jsx)(pn,{type:"button",onClick:function(){t((0,an.a3)(e))},children:(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,tn.jsx)("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",stroke:"white",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,tn.jsxs)(gn,{children:[(0,tn.jsxs)(xn,{children:[(0,tn.jsxs)(hn,{children:[e.make," ",(0,tn.jsx)(un,{children:e.model}),", ",e.year]}),(0,tn.jsx)("p",{children:e.rentalPrice})]}),(0,tn.jsxs)(fn,{children:[(0,tn.jsx)(mn,{children:e.address.split(",")[1]}),(0,tn.jsx)(mn,{children:e.address.split(",")[2]}),(0,tn.jsx)(mn,{children:e.rentalCompany})]}),(0,tn.jsxs)(fn,{children:[(0,tn.jsx)(mn,{children:e.mileage}),(0,tn.jsx)(mn,{children:e.type}),(0,tn.jsx)(mn,{children:e.id}),(0,tn.jsx)(mn,{children:e.accessories[0]})]})]}),(0,tn.jsx)(vn,{type:"button",onClick:c,children:"Learn more"})]}),l&&(0,tn.jsx)(on,{onClose:c,car:e})]})},wn=V.ZP.div(M||(M=(0,W.Z)(["\n  max-width: 1210px;\n  margin: 0 auto;  \n"]))),Zn=V.ZP.ul(F||(F=(0,W.Z)(["\n  display: flex;\n  justify-content: center;\n  column-gap: 29px;\n  row-gap: 50px;\n  flex-wrap: wrap;\n  margin-top: 50px; \n"]))),jn=function(n){var e=n.cars;return(0,tn.jsx)(wn,{children:(0,tn.jsx)(Zn,{children:e.map((function(n){return(0,tn.jsx)(bn,{car:n},n.id)}))})})}},4520:function(n,e,t){t.d(e,{Z:function(){return H}});var r,i,o,l,a,c,s,d,p,x,h=t(4942),u=t(1413),g=t(9439),f=t(2791),m=t(3855),v=t(7915),b=JSON.parse('["Toyota","Honda","Ford","Volkswagen","Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),w=t(7234),Z=t(6895),j=function(){return Array.from({length:50},(function(n,e){return{value:String(10*(e+1)),label:String(10*(e+1))}}))},k=t(168),y=t(6487),C=y.ZP.form(r||(r=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 65px;\n\n  @media screen and (min-width: 880px) {\n    flex-direction: row;\n    align-items: flex-end;\n    gap: 18px;\n  }\n"]))),P=y.ZP.div(i||(i=(0,k.Z)(["\n  display: flex;\n  gap: 18px;\n"]))),L=y.ZP.div(o||(o=(0,k.Z)(["\n  display: flex;\n"]))),z=y.ZP.label(l||(l=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: var(--label-text-cl);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  position: relative;\n"]))),S=y.ZP.p(a||(a=(0,k.Z)(["\n  position: absolute;\n  top: 40px;\n  left: 22px;\n  color: var(--dark-text-cl);\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.11;\n"]))),M="\n  width: 160px;\n  padding: 13px 0 13px 88px;\n  font-size: 18px;\n  border: 1px solid transparent;\n  background-color: var(--input-bg-cl);\n  color: var(--dark-text-cl);\n  font-weight: 500;\n  line-height: 20px;\n  margin-top: 8px;\n\n  &::placeholder {\n    opacity: 1;\n  }\n\n  &:hover {\n    border-color: var(--backdrop-text-cl);\n  }\n  &:focus {\n    outline: none;\n    border-color: var(--normal-state-bg-cl);\n  }\n",F=y.ZP.input(c||(c=(0,k.Z)(["\n  ","\n  border-radius: 14px 0px 0px 14px;\n  border-right: 1px solid var(--border-text-cl);\n  margin-left: 0px;\n"])),M),B=y.ZP.input(s||(s=(0,k.Z)(["\n  ","\n  border-radius: 0px 14px 14px 0px;\n  margin-right: 0px;\n"])),M),T=y.ZP.div(d||(d=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n  margin-top: 20px;\n\n  @media screen and (min-width: 880px) {\n    margin-top: 0;\n  }\n"]))),R=y.ZP.button(p||(p=(0,k.Z)(["\n  color: var(--white-cl);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px; \n  border-radius: 12px;\n  background-color: var(--normal-state-bg-cl);\n  width: 136px;\n  height: 48px;\n  padding: 14px 44px;\n  transition: background-color 0.3s ease;\n\n  &:hover,\n  &:focus {\n    background-color: var(--pressed-state-bg-cl);\n  }\n"]))),I=y.ZP.div(x||(x=(0,k.Z)(["\n  width: 24px;\n  height: 24px;\n"]))),E=function(n){return{control:function(e){return(0,u.Z)((0,u.Z)({},e),{},{backgroundColor:"var(--input-bg-cl)",border:"1px solid transparent",borderRadius:"14px",color:"var(--dark-text-cl)",fontSize:"18px",fontWeight:"500",lineHeight:"20px",padding:"5px 0",width:n,cursor:"pointer",marginTop:"8px"})},option:function(n,e){var t=e.isDisabled,r=e.isSelected;return(0,u.Z)((0,u.Z)({},n),{},{backgroundColor:r?"var(--normal-state-bg-cl)":"var(--white-cl)",color:t?"var(--white-cl)":r?"var(--dark-text-cl)":"var(--backdrop-text-cl)",fontSize:t?"16px":"18px",borderRadius:"14px"})},singleValue:function(n){return(0,u.Z)((0,u.Z)({},n),{},{color:"var(--dark-text-cl)",fontSize:"18px"})},placeholder:function(n){return(0,u.Z)((0,u.Z)({},n),{},{color:"var(--dark-text-cl)",fontSize:"18px"})},menu:function(n){return(0,u.Z)((0,u.Z)({},n),{},{borderRadius:"14px",border:"1px solid var(--backdrop-border-cl)",background:"var(--white-cl)",boxShadow:"0px 4px 36px 0px rgba(0, 0, 0, 0.02)",overflow:"hidden",padding:"14px 8px 14px 18px"})},dropdownIndicator:function(n,e){return(0,u.Z)((0,u.Z)({},n),{},{color:"var(--primary-text-color)",cursor:"pointer",transform:e.isFocused?"rotate(180deg)":null})},indicatorSeparator:function(n){return(0,u.Z)((0,u.Z)({},n),{},{backgroundColor:"transparent"})},menuList:function(n){return(0,u.Z)((0,u.Z)({},n),{},{"::-webkit-scrollbar":{width:"8px",height:"130px"},"::-webkit-scrollbar-thumb":{background:"var(--backdrop-border-cl)",borderRadius:"10px"}})}}},A=t(3329),W=b.map((function(n){return{value:n,label:n}})),V=j(),H=function(){var n=(0,m.I0)(),e=(0,f.useRef)(null),t=(0,f.useRef)(null),r=(0,f.useState)(""),i=(0,g.Z)(r,2),o=i[0],l=i[1],a=(0,f.useState)([]),c=(0,g.Z)(a,2),s=(c[0],c[1]),d=(0,f.useState)({from:"",to:""}),p=(0,g.Z)(d,2),x=p[0],b=p[1],k=function(n,e){var t=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");b((function(e){return(0,u.Z)((0,u.Z)({},e),{},(0,h.Z)({},n,t))}))};return(0,A.jsxs)(C,{onSubmit:function(r){r.preventDefault();var i=r.target,o=i.elements.brand.value.trim(),l=i.elements.price.value,a=parseFloat(i.elements.mileageFrom.value.replace(/,/g,"")),c=parseFloat(i.elements.mileageTo.value.replace(/,/g,""));n((0,Z.a8)({brand:o,price:l,mileageFrom:a,mileageTo:c})),n((0,w.c)()),i.reset(),b({from:"",to:""}),e.current.clearValue(),t.current.clearValue()},children:[(0,A.jsxs)(P,{children:[(0,A.jsxs)(z,{children:["Car Brand",(0,A.jsx)(v.ZP,{name:"brand",options:W,ref:function(n){return e.current=n},styles:E(224),placeholder:"Enter the text"})]}),(0,A.jsxs)(z,{children:["Price/1 hour",(0,A.jsx)(v.ZP,{name:"price",defaultValue:o,options:V,onChange:function(n){n&&(l(n.value),s(j(n.value)))},ref:function(n){return t.current=n},styles:E(125),placeholder:"To $"})]})]}),(0,A.jsxs)(L,{children:[(0,A.jsxs)(z,{children:["\u0421ar mileage / km",(0,A.jsx)(S,{children:"From"}),(0,A.jsx)(F,{type:"text",name:"mileageFrom",value:x.from,onChange:function(n){return k("from",n.target.value)},autoComplete:"off"})]}),(0,A.jsxs)(z,{style:{color:"white"},children:["\u0421ar mileage / km",(0,A.jsx)(S,{children:"To"}),(0,A.jsx)(B,{type:"text",name:"mileageTo",value:x.to,onChange:function(n){return k("to",n.target.value)},autoComplete:"off"})]})]}),(0,A.jsxs)(T,{children:[(0,A.jsx)(R,{type:"submit",children:"Search"}),(0,A.jsx)(I,{onClick:function(){n((0,Z.sx)())},children:(0,A.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:[(0,A.jsx)("g",{id:"icomoon-ignore"}),(0,A.jsx)("path",{d:"M128 512h-60c0.022-245.198 198.799-443.961 444-443.961 140.612 0 265.958 65.364 347.31 167.365l0.69 0.896v-66.3h60v210h-210v-60h134.54c-67.689-115.526-191.184-191.903-332.526-192h-0.014c-211.74 0-384 172.26-384 384zM896 512c0 211.74-172.26 384-384 384-141.356-0.097-264.851-76.474-331.559-190.19l-0.981-1.81h134.54v-60h-210v210h60v-66.3c82.042 102.897 207.388 168.261 348 168.261 245.201 0 443.978-198.763 444-443.959v-0.002z"})]})})]})]})}},5479:function(n,e,t){t.d(e,{L:function(){return c},t:function(){return s}});var r,i,o=t(168),l=t(6487),a=t.p+"static/media/noResultsFound1.5a6e031b2ad5dbd0ba5a.png",c=l.ZP.div(r||(r=(0,o.Z)(["\n  position: relative;\n"]))),s=l.ZP.img(i||(i=(0,o.Z)(["\n  position: absolute;\n  top: 260px;\n  left: 0px;\n  width: 100%;\n  height: 100vh;\n\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: -1;\n\n  @media screen and (min-width: 880px) {\n    top: 100px;\n  }\n"])),a)},6351:function(n,e,t){t.d(e,{AS:function(){return a},Tc:function(){return o},Wz:function(){return i},dB:function(){return c},xU:function(){return l}});var r=t(6916),i=function(n){return n.cars.items},o=function(n){return n.favorites.items},l=function(n){return n.cars.isLoading},a=function(n){return n.filter.isFiltered},c=(0,r.P1)([i,function(n){return n.filter.filterBrand},function(n){return n.filter.filterPrice},function(n){return n.filter.filterMileage.from},function(n){return n.filter.filterMileage.to}],(function(n,e,t,r,i){return n.filter((function(n){var o=parseInt(n.rentalPrice.replace("$","")),l=parseInt(t);return(!e||n.make.toLowerCase()===e.toLowerCase())&&(!(t&&o>l)&&!(r&&i&&(n.mileage<r||n.mileage>i)))}))}))}}]);
//# sourceMappingURL=178.5636a9d4.chunk.js.map