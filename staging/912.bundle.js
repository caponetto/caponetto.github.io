"use strict";(self.webpackChunkpersonal_webapp=self.webpackChunkpersonal_webapp||[]).push([[912],{3355:(e,t,n)=>{n.d(t,{T:()=>o});var s=n(7294);function o(e,t){return(0,s.useMemo)((()=>(t.isAnySelected?e.filter((e=>e.keywordKeys.some((e=>t.selectionMap.get(e))))):e).sort(((e,t)=>t.releaseDate.getTime()-e.releaseDate.getTime()))),[t.isAnySelected,t.selectionMap,e])}},2391:(e,t,n)=>{n.d(t,{C:()=>a});var s,o=n(7294),r=n(6974);function c(){var e,t;return null!==(t=null===(e=function(e){const t=(0,r.TH)(),n=new URLSearchParams(t.search).get(e);if(n)return decodeURIComponent(n)}(s.KEYWORDS))||void 0===e?void 0:e.split(","))&&void 0!==t?t:[]}function a(...e){const t=(0,r.s0)(),n=c(),[a,i]=(0,o.useState)((()=>{const t=function(...e){const t=new Map;return e.forEach((e=>{e.reduce(((e,t)=>e.concat(t.keywordKeys)),[]).forEach((e=>{t.has(e)||t.set(e,!1)}))})),t}(...e);return n.forEach((e=>{t.has(e)&&t.set(e,!0)})),t})),[l,u]=(0,o.useState)((()=>[...a.entries()].filter((([,e])=>e)).map((([e])=>e)))),d=(0,o.useMemo)((()=>l.length>0),[l]);return(0,o.useEffect)((()=>{var e;t({search:d?"?"+(e=l,`${s.KEYWORDS}=${encodeURIComponent(e.join(","))}`):""},{replace:!0})}),[t,l,d]),{selectionMap:a,onToggleSelection:e=>{if(!a.has(e))return;const t=!!a.get(e);i((n=>new Map([...n.entries(),[e,!t]]))),u((n=>t?n.filter((t=>t!==e)):[...n,e]))},onClearSelection:()=>{i((e=>{const t=new Map(e);return l.forEach((e=>t.set(e,!1))),t})),u([])},isAnySelected:d}}!function(e){e.KEYWORDS="k"}(s||(s={}))},1912:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var s=n(5893),o=n(4056),r=n(8616),c=n(7711),a=n(1587),i=n(1431),l=n(3355),u=n(2391);function d(){const{schema:{code:e}}=(0,i.q)(),{t}=(0,o.$)(),n=(0,u.C)(e.repositories),d=(0,l.T)(e.repositories,n);return(0,s.jsxs)(a.T3,Object.assign({name:"code",headerContent:(0,s.jsxs)(r.c,Object.assign({i18nKey:"code:header"},{children:["Here you can find some of my ",(0,s.jsx)("strong",{children:"code"})]}))},{children:[(0,s.jsx)(c.x,{keywordSelection:n}),(0,s.jsx)(a.Wt,{title:t("literal:repositories"),keywordSelection:n,mediaItems:d})]}))}}}]);