"use strict";(self.webpackChunkpersonal_webapp=self.webpackChunkpersonal_webapp||[]).push([[350],{5295:(e,n,t)=>{t.d(n,{Z:()=>g});var s=t(7462),i=t(3366),o=t(7294),r=(t(5697),t(6010)),a=t(7192),c=t(9602),d=t(1657),l=t(6501),u=t(8979);function p(e){return(0,u.Z)("MuiCard",e)}(0,t(6087).Z)("MuiCard",["root"]);var v=t(5893);const x=["className","raised"],f=(0,c.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"}))),g=o.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiCard"}),{className:o,raised:c=!1}=t,l=(0,i.Z)(t,x),u=(0,s.Z)({},t,{raised:c}),g=(e=>{const{classes:n}=e;return(0,a.Z)({root:["root"]},p,n)})(u);return(0,v.jsx)(f,(0,s.Z)({className:(0,r.Z)(g.root,o),elevation:c?8:void 0,ref:n,ownerState:u},l))}))},9161:(e,n,t)=>{t.d(n,{Z:()=>f});var s=t(3366),i=t(7462),o=t(7294),r=(t(5697),t(6010)),a=t(7192),c=t(9602),d=t(1657),l=t(8979);function u(e){return(0,l.Z)("MuiCardActions",e)}(0,t(6087).Z)("MuiCardActions",["root","spacing"]);var p=t(5893);const v=["disableSpacing","className"],x=(0,c.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disableSpacing&&n.spacing]}})((({ownerState:e})=>(0,i.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}))),f=o.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:o=!1,className:c}=t,l=(0,s.Z)(t,v),f=(0,i.Z)({},t,{disableSpacing:o}),g=(e=>{const{classes:n,disableSpacing:t}=e,s={root:["root",!t&&"spacing"]};return(0,a.Z)(s,u,n)})(f);return(0,p.jsx)(x,(0,i.Z)({className:(0,r.Z)(g.root,c),ownerState:f,ref:n},l))}))},4089:(e,n,t)=>{t.d(n,{s:()=>r});var s=t(5893),i=t(5295),o=t(7294);function r(e){const[n,t]=(0,o.useState)(!1);return(0,s.jsx)(i.Z,Object.assign({sx:e.sx,elevation:n?5:2,onMouseOver:()=>t(!0),onMouseLeave:()=>t(!1)},{children:e.children}),void 0)}},9027:(e,n,t)=>{t.d(n,{T:()=>o});var s=t(5893),i=t(1508);function o(e){return(0,s.jsx)(i.Z,Object.assign({sx:{p:"16px 24px"}},{children:e.children}),void 0)}},2490:(e,n,t)=>{t.d(n,{t:()=>i});var s=t(7294);function i(){const[e,n]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{setTimeout((()=>{n(!0)}),0)}),[]),e}},2350:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var s=t(5893),i=t(1508),o=t(9161),r=t(6628),a=t(3366),c=t(7462),d=t(7294),l=(t(5697),t(5408)),u=t(2605),p=t(9707),v=t(9766),x=t(9602),f=t(1657);const g=["component","direction","spacing","divider","children"];function m(e,n){const t=d.Children.toArray(e).filter(Boolean);return t.reduce(((e,s,i)=>(e.push(s),i<t.length-1&&e.push(d.cloneElement(n,{key:`separator-${i}`})),e)),[])}const h=(0,x.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>[n.root]})((({ownerState:e,theme:n})=>{let t=(0,c.Z)({display:"flex"},(0,l.k9)({theme:n},(0,l.P$)({values:e.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const s=(0,u.hB)(n),i=Object.keys(n.breakpoints.values).reduce(((n,t)=>(null==e.spacing[t]&&null==e.direction[t]||(n[t]=!0),n)),{}),o=(0,l.P$)({values:e.direction,base:i}),r=(0,l.P$)({values:e.spacing,base:i}),a=(n,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${i=t?o[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,u.NA)(s,n)}};var i};t=(0,v.Z)(t,(0,l.k9)({theme:n},r,a))}return t})),Z=d.forwardRef((function(e,n){const t=(0,f.Z)({props:e,name:"MuiStack"}),i=(0,p.Z)(t),{component:o="div",direction:r="column",spacing:d=0,divider:l,children:u}=i,v=(0,a.Z)(i,g),x={direction:r,spacing:d};return(0,s.jsx)(h,(0,c.Z)({as:o,ownerState:x,ref:n},v,{children:l?m(u,l):u}))})),b=Z;var j=t(2658),S=t(1797),w=t(4089),O=t(9027),k=t(7378),y=t(1431),M=t(2490);function C(){const e=(0,y.qD)(),n=(0,M.t)();return(0,s.jsx)(O.T,{children:n&&(0,s.jsxs)(w.s,Object.assign({sx:{p:"28px",width:{xs:"100%",xl:"1170px"},margin:"0 auto"}},{children:[(0,s.jsx)(r.Z,Object.assign({in:!0,timeout:500},{children:(0,s.jsxs)(b,Object.assign({spacing:4},{children:[(0,s.jsx)(j.Z,Object.assign({component:"div",sx:{textAlign:"center",fontWeight:"bold",fontFamily:S.a.PHILOSOPHER,fontSize:{xs:"16px",sm:"20px"}}},{children:"Welcome to my personal space 👋"}),void 0),e.data.about.paragraphs.map(((e,n)=>(0,s.jsx)(R,{children:e},`about-paragraph-${n}`)))]}),void 0)}),void 0),(0,s.jsx)(o.Z,Object.assign({disableSpacing:!0,sx:{display:{xs:"auto",md:"none"}}},{children:(0,s.jsx)(i.Z,Object.assign({sx:{width:1}},{children:(0,s.jsx)(k.Y,{sx:{width:"150px",mx:"auto",float:"center"}},void 0)}),void 0)}),void 0)]}),void 0)},void 0)}function R(e){return(0,s.jsx)(j.Z,Object.assign({component:"div"},{children:(0,s.jsx)(i.Z,Object.assign({sx:{textAlign:"justify",lineHeight:1.7,fontFamily:S.a.NUNITO,fontSize:{xs:"13px",sm:"16px"}}},{children:e.children}),void 0)}),void 0)}}}]);