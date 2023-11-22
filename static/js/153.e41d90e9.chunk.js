"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[153],{6946:function(n,e,r){r.d(e,{Z:function(){return jn}});var t,i,o,l,a,c,s,d,p,x,h,u,g,f,m,v,b,Z,w,j,k,y,C,P,L,z,S,M,B,F=r(9439),E=r(2791),T=r(3855),R=r(8560),W=r(4164),A=function(n){var e={},r=n.split("\n")[0].split(" ");return e.conditionText=r.slice(0,2).join(" "),e.minAge=r[r.length-1],e},I=r(168),H=r(6487),V=H.ZP.div(t||(t=(0,I.Z)(["\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--light-text-cl);\n  backdrop-filter: blur(2px);\n"]))),_=H.ZP.div(i||(i=(0,I.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  border-radius: 14px;\n  background-color: var(--white-cl);\n  padding: 40px;\n  width: 380px;\n  max-height: 800px;\n  margin-top: 20px;\n\n  @media screen and (min-width: 760px) {\n    width: 541px;\n    max-height: 752px;\n    margin-top: 0;\n  }\n"]))),N=H.ZP.div(o||(o=(0,I.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  z-index: 999; \n  cursor: pointer;\n"]))),U=H.ZP.img(l||(l=(0,I.Z)(["\n  height: 248px;\n  border-radius: 14px;\n"]))),O=H.ZP.div(a||(a=(0,I.Z)(["\n  margin-top: 14px;\n  margin-bottom: 24px;\n"]))),$=H.ZP.div(c||(c=(0,I.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 14px;\n  padding-bottom: 8px;\n"]))),D=H.ZP.h2(s||(s=(0,I.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.33;\n  color: var(--dark-text-cl);\n"]))),G=H.ZP.span(d||(d=(0,I.Z)(["\n  color: var(--normal-state-bg-cl);\n"]))),J=H.ZP.ul(p||(p=(0,I.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),K=H.ZP.li(x||(x=(0,I.Z)(['\n  font-size: 12px;\n  color: var(--light-text-cl);\n  display: flex;\n  align-items: center;\n\n  &:not(:last-child)::after {\n    content: "";\n    display: inline-block;\n    width: 1px;\n    height: 16px;\n    background-color: var(--stroke-text-cl);\n    margin-left: 6px;\n    margin-right: 6px;\n  }\n']))),Y=H.ZP.p(h||(h=(0,I.Z)(["\n  line-height: 1.43;\n  margin-top: 14px;\n  width: 300px;\n\n  @media screen and (min-width: 760px) {\n    width: 461px;\n  }\n"]))),q=H.ZP.h3(u||(u=(0,I.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--dark-text-cl);\n  margin-top: 24px;\n  margin-bottom: 8px;\n"]))),Q=H.ZP.ul(g||(g=(0,I.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  font-size: 12px;\n  letter-spacing: -0.24px;\n  width: 300px;\n\n  @media screen and (min-width: 760px) {\n    width: 461px;\n  }\n"]))),X=H.ZP.li(f||(f=(0,I.Z)(["\n  border-radius: 35px;\n  color: var(--condition-text-cl);\n  background-color: var(--condition-bg-cl);\n  padding: 7px 14px;\n"]))),nn=H.ZP.span(m||(m=(0,I.Z)(["\n  color: var(--normal-state-bg-cl);\n  font-weight: 600;\n"]))),en=H.ZP.a(v||(v=(0,I.Z)(["\n  width: 168px;\n  height: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 12px;\n  background-color: var(--normal-state-bg-cl);\n  color: var(--white-cl);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n  transition: background-color 0.3s ease;\n\n  &:hover,\n  &:focus {\n    background-color: var(--pressed-state-bg-cl);\n  }\n"]))),rn=r(3329),tn=document.getElementById("modal-root"),on=function(n){var e=n.car,r=n.onClose,t=e.id,i=e.make,o=e.model,l=e.year,a=e.rentalPrice,c=e.address,s=e.type,d=e.accessories,p=e.mileage,x=e.img,h=e.fuelConsumption,u=e.engineSize,g=e.description,f=e.functionalities,m=e.rentalConditions,v=c.split(",")[1],b=c.split(",")[2],Z=A(m);(0,E.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n),document.body.style.overflow="visible"}}),[r]);return(0,W.createPortal)((0,rn.jsx)(V,{onClick:function(n){n.target===n.currentTarget&&r()},children:(0,rn.jsxs)(_,{children:[(0,rn.jsx)(N,{onClick:r,children:(0,rn.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,rn.jsx)("path",{d:"M18 6L6 18",stroke:"#121417",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,rn.jsx)("path",{d:"M6 6L18 18",stroke:"#121417",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}),(0,rn.jsx)(U,{src:x,alt:i,loading:"lazy",width:"469",height:"314"}),(0,rn.jsxs)(O,{children:[(0,rn.jsx)($,{children:(0,rn.jsxs)(D,{children:[i," ",(0,rn.jsxs)(G,{children:[o,", "]}),l]})}),(0,rn.jsxs)(J,{children:[(0,rn.jsx)(K,{children:v}),(0,rn.jsx)(K,{children:b}),(0,rn.jsxs)(K,{children:["Id: ",t]}),(0,rn.jsxs)(K,{children:["Year: ",l]}),(0,rn.jsxs)(K,{children:["Type: ",s]})]}),(0,rn.jsxs)(J,{children:[(0,rn.jsxs)(K,{children:["Fuel Consumption: ",h]}),(0,rn.jsxs)(K,{children:["Engine Size: ",u]})]}),(0,rn.jsx)(Y,{children:g}),(0,rn.jsx)(q,{children:"Accessories and functionalities:"}),(0,rn.jsx)(J,{children:d.map((function(n){return(0,rn.jsx)(K,{children:n},n)}))}),(0,rn.jsx)(J,{children:f.map((function(n){return(0,rn.jsx)(K,{children:n},n)}))}),(0,rn.jsx)(q,{children:"Rental Conditions:"}),(0,rn.jsxs)(Q,{children:[(0,rn.jsx)(X,{children:(0,rn.jsxs)("p",{children:[Z.conditionText,(0,rn.jsxs)(nn,{children:[" ",Z.minAge]})]})}),(0,rn.jsx)(X,{children:m.split("\n")[1]}),(0,rn.jsx)(X,{children:m.split("\n")[2]}),(0,rn.jsxs)(X,{children:["Mileage:"," ",(0,rn.jsx)(nn,{children:p.toLocaleString("en-US")})]}),(0,rn.jsxs)(X,{children:["Price: ",(0,rn.jsx)(nn,{children:a})]})]})]}),(0,rn.jsx)(en,{href:"tel:+380730000000",children:"Rental car"})]})}),tn)},ln=r(6351),an=r(838),cn=H.ZP.div(b||(b=(0,I.Z)(["\n  width: 274px;\n  height: 426px;\n  display: flex;\n  flex-direction: column;\n"]))),sn=H.ZP.div(Z||(Z=(0,I.Z)(["\n  position: relative;\n  width: 274px; \n  height: 274px;\n"]))),dn=H.ZP.img(w||(w=(0,I.Z)(["\n  width: 100%;\n  height: 268px;\n  border-radius: 14px;\n"]))),pn=H.ZP.button(j||(j=(0,I.Z)(["\n  position: absolute;\n  padding: 0;\n  border: none;\n  top: 14px;\n  right: 14px;\n  width: 18px;\n  height: 18px;\n  background: none;\n  cursor: pointer;\n"]))),xn=H.ZP.div(k||(k=(0,I.Z)(["\n  display: flex;\n  justify-content: space-between;\n  color: var(--dark-text-cl);\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px; \n  margin-top: 14px;\n  margin-bottom: 8px;\n"]))),hn=H.ZP.h2(y||(y=(0,I.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  color: var(--dark-text-cl);\n"]))),un=H.ZP.span(C||(C=(0,I.Z)(["\n  color:  var(--normal-state-bg-cl);\n"]))),gn=H.ZP.div(P||(P=(0,I.Z)(["\n  width: 274px;\n"]))),fn=H.ZP.ul(L||(L=(0,I.Z)(["\n  display: flex;\n  text-align: left;\n  color: var(--light-text-cl);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  margin-bottom: 4px; \n"]))),mn=H.ZP.li(z||(z=(0,I.Z)(['\n  display: flex;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  &:not(:last-child)::after {\n    content: "";\n    display: inline-block;\n    width: 1px;\n    height: 16px;\n    background-color: var(--stroke-text-cl);\n    margin-left: 6px;\n    margin-right: 6px;\n  }\n']))),vn=H.ZP.button(S||(S=(0,I.Z)(["\n  display: flex;\n  width: 274px;\n  height: 44px;\n  padding: 12px 99px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background: var(--normal-state-bg-cl);\n  color:  var(--white-cl);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  margin-top: auto;\n  transition: background-color 0.3s ease;\n\n  &:hover,\n  &.active {\n    background-color: var(--pressed-state-bg-cl);\n  }\n"]))),bn=function(n){var e=n.car,r=(0,T.I0)(),t=(0,R.v9)(ln.Tc),i=(0,E.useState)(!1),o=(0,F.Z)(i,2),l=o[0],a=o[1],c=function(){return a((function(n){return!n}))},s=t.find((function(n){return n.id===e.id}));return(0,rn.jsxs)(rn.Fragment,{children:[(0,rn.jsxs)(cn,{children:[(0,rn.jsxs)(sn,{children:[(0,rn.jsx)(dn,{src:e.img,width:"274px",alt:"car",loading:"lazy"}),s?(0,rn.jsx)(pn,{type:"button",onClick:function(){r((0,an.r7)(e))},children:(0,rn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,rn.jsx)("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",fill:"#3470FF",stroke:"#3470FF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}):(0,rn.jsx)(pn,{type:"button",onClick:function(){r((0,an.a3)(e))},children:(0,rn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,rn.jsx)("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",stroke:"white",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,rn.jsxs)(gn,{children:[(0,rn.jsxs)(xn,{children:[(0,rn.jsxs)(hn,{children:[e.make," ",(0,rn.jsx)(un,{children:e.model}),", ",e.year]}),(0,rn.jsx)("p",{children:e.rentalPrice})]}),(0,rn.jsxs)(fn,{children:[(0,rn.jsx)(mn,{children:e.address.split(",")[1]}),(0,rn.jsx)(mn,{children:e.address.split(",")[2]}),(0,rn.jsx)(mn,{children:e.rentalCompany})]}),(0,rn.jsxs)(fn,{children:[(0,rn.jsx)(mn,{children:e.mileage}),(0,rn.jsx)(mn,{children:e.type}),(0,rn.jsx)(mn,{children:e.id}),(0,rn.jsx)(mn,{children:e.accessories[0]})]})]}),(0,rn.jsx)(vn,{type:"button",onClick:c,children:"Learn more"})]}),l&&(0,rn.jsx)(on,{onClose:c,car:e})]})},Zn=H.ZP.div(M||(M=(0,I.Z)(["\n  max-width: 1210px;\n  margin: 0 auto;  \n"]))),wn=H.ZP.ul(B||(B=(0,I.Z)(["\n  display: flex;\n  justify-content: center;\n  column-gap: 29px;\n  row-gap: 50px;\n  flex-wrap: wrap;\n  margin-top: 50px; \n"]))),jn=function(n){var e=n.cars;return(0,rn.jsx)(Zn,{children:(0,rn.jsx)(wn,{children:e.map((function(n){return(0,rn.jsx)(bn,{car:n},n.id)}))})})}},4660:function(n,e,r){r.d(e,{Z:function(){return L}});var t,i,o,l,a,c,s=r(4942),d=r(1413),p=r(9439),x=r(2791),h=r(7915),u=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),g=r(168),f=r(6487),m=f.ZP.form(t||(t=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 65px;\n\n  @media screen and (min-width: 880px) {\n    flex-direction: row;\n    align-items: flex-end;\n    gap: 18px;\n  }\n"]))),v=f.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n  gap: 18px;\n"]))),b=f.ZP.label(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: var(--label-text-cl);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  margin-bottom: 8px; \n"]))),Z="\n  width: 140px;\n  padding: 13px 0 13px 18px;\n  font-size: 18px;\n  border: 1px solid transparent;\n  background-color: var(--input-bg-cl);\n  color: var(--dark-text-cl);\n  font-weight: 500;\n  line-height: 20px;\n\n  &::placeholder {\n    opacity: 1;\n  }\n  &:hover {\n    border-color: var(--backdrop-text-cl);\n  }\n  &:focus {\n    outline: none;\n    border: 2px solid var(--normal-state-bg-cl);\n  }\n",w=f.ZP.input(l||(l=(0,g.Z)(["\n  ","\n  border-radius: 14px 0px 0px 14px;\n  border-right: 1px solid var(--border-text-cl);\n  margin-left: 0px;\n"])),Z),j=f.ZP.input(a||(a=(0,g.Z)(["\n  ","\n  border-radius: 0px 14px 14px 0px;\n  margin-right: 0px;\n"])),Z),k=f.ZP.button(c||(c=(0,g.Z)(["\n  color: var(--white-cl);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px; \n  border-radius: 12px;\n  background-color: var(--normal-state-bg-cl);\n  width: 136px;\n  height: 48px;\n  padding: 14px 44px;\n  margin-top: 20px;\n  transition: background-color 0.3s ease;\n\n  &:hover,\n  &:focus {\n    background-color: var(--pressed-state-bg-cl);\n  }\n\n  @media screen and (min-width: 880px) {\n    margin-top: 0;\n  }\n"]))),y=function(n){return{control:function(e){return(0,d.Z)((0,d.Z)({},e),{},{backgroundColor:"var(--input-bg-cl)",border:"1px solid transparent",borderRadius:"14px",color:"var(--dark-text-cl)",fontSize:"18px",fontWeight:"500",lineHeight:"20px",padding:"5px 0",width:n,cursor:"pointer"})},option:function(n,e){var r=e.isDisabled,t=e.isSelected;return(0,d.Z)((0,d.Z)({},n),{},{backgroundColor:t?"var(--normal-state-bg-cl)":"var(--white-cl)",color:r?"var(--white-cl)":t?"var(--dark-text-cl)":"var(--backdrop-text-cl)",fontSize:r?"16px":"18px",borderRadius:"14px"})},singleValue:function(n){return(0,d.Z)((0,d.Z)({},n),{},{color:"var(--dark-text-cl)",fontSize:"18px"})},placeholder:function(n){return(0,d.Z)((0,d.Z)({},n),{},{color:"var(--dark-text-cl)",fontSize:"18px"})},menu:function(n){return(0,d.Z)((0,d.Z)({},n),{},{borderRadius:"14px",border:"1px solid var(--backdrop-border-cl)",background:"var(--white-cl)",boxShadow:"0px 4px 36px 0px rgba(0, 0, 0, 0.02)",overflow:"hidden",padding:"14px 8px 14px 18px"})},dropdownIndicator:function(n,e){return(0,d.Z)((0,d.Z)({},n),{},{color:"var(--primary-text-color)",cursor:"pointer",transform:e.isFocused?"rotate(180deg)":null})},indicatorSeparator:function(n){return(0,d.Z)((0,d.Z)({},n),{},{backgroundColor:"transparent"})},menuList:function(n){return(0,d.Z)((0,d.Z)({},n),{},{"::-webkit-scrollbar":{width:"8px",height:"130px"},"::-webkit-scrollbar-thumb":{background:"var(--backdrop-border-cl)",borderRadius:"10px"}})}}},C=r(3329),P=u.map((function(n){return{value:n,label:n}})),L=function(n){var e=n.onSearch,r=(0,x.useState)(""),t=(0,p.Z)(r,2),i=t[0],o=t[1],l=(0,x.useState)(""),a=(0,p.Z)(l,2),c=a[0],u=a[1],g=(0,x.useState)({from:"",to:""}),f=(0,p.Z)(g,2),Z=f[0],L=f[1],z=function(n,e){L((function(r){return(0,d.Z)((0,d.Z)({},r),{},(0,s.Z)({},n,e))}))},S=Array.from({length:10},(function(n,e){return 10*(e+1)}));return(0,C.jsxs)(m,{children:[(0,C.jsxs)(v,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)(b,{htmlFor:"carBrand",children:"Car Brand"}),(0,C.jsx)(h.ZP,{defaultValue:i,options:P,onChange:o,styles:y(224),placeholder:"Enter the text"})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)(b,{htmlFor:"pricePerHour",children:"Price/1 hour"}),(0,C.jsx)(h.ZP,{defaultValue:c,options:S.map((function(n){return{value:n,label:"$".concat(n)}})),onChange:function(n){return u(n.value)},styles:y(125),placeholder:"To $"})]})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)(b,{htmlFor:"mileage",children:"Car Mileage"}),(0,C.jsxs)("div",{children:[(0,C.jsx)(w,{type:"text",placeholder:"From",value:Z.from,onChange:function(n){return z("from",n.target.value)}}),(0,C.jsx)(j,{type:"text",placeholder:"To",value:Z.to,onChange:function(n){return z("to",n.target.value)}})]})]}),(0,C.jsx)(k,{type:"submit",onClick:function(){e({carBrand:i,pricePerHour:c})},children:"Search"})]})}},6351:function(n,e,r){r.d(e,{Tc:function(){return i},Wz:function(){return t},xU:function(){return o}});var t=function(n){return n.cars.items},i=function(n){return n.favorites.items},o=function(n){return n.cars.isLoading}}}]);
//# sourceMappingURL=153.e41d90e9.chunk.js.map