"use strict";(self.webpackChunkpersonal_webapp=self.webpackChunkpersonal_webapp||[]).push([[597],{7431:(e,o,a)=>{var t=a(5318);o.Z=void 0;var r=t(a(4938)),n=a(5893),l=(0,r.default)((0,n.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");o.Z=l},6914:(e,o,a)=>{a.d(o,{Z:()=>$});var t=a(3366),r=a(7462),n=a(7294),l=(a(5697),a(6010)),i=a(7925),c=a(7192),s=a(1796),d=a(9602),p=a(1657),u=a(9327),m=a(8216),b=a(8979);function h(e){return(0,b.Z)("MuiButton",e)}const v=(0,a(6087).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=n.createContext({});var Z=a(5893);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,o[a.variant],o[`${a.variant}${(0,m.Z)(a.color)}`],o[`size${(0,m.Z)(a.size)}`],o[`${a.variant}Size${(0,m.Z)(a.size)}`],"inherit"===a.color&&o.colorInherit,a.disableElevation&&o.disableElevation,a.fullWidth&&o.fullWidth]}})((({theme:e,ownerState:o})=>(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:(0,s.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:(0,s.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:`1px solid ${e.palette[o.color].main}`,backgroundColor:(0,s.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:e.palette[o.color].dark,"@media (hover: none)":{backgroundColor:e.palette[o.color].main}}),"&:active":(0,r.Z)({},"contained"===o.variant&&{boxShadow:e.shadows[8]}),[`&.${v.focusVisible}`]:(0,r.Z)({},"contained"===o.variant&&{boxShadow:e.shadows[6]}),[`&.${v.disabled}`]:(0,r.Z)({color:e.palette.action.disabled},"outlined"===o.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===o.variant&&"secondary"===o.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===o.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:e.palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===o.variant&&"inherit"!==o.color&&{color:e.palette[o.color].main,border:`1px solid ${(0,s.Fq)(e.palette[o.color].main,.5)}`},"contained"===o.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:e.palette[o.color].contrastText,backgroundColor:e.palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}})),x=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.startIcon,o[`iconSize${(0,m.Z)(a.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e)))),C=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.endIcon,o[`iconSize${(0,m.Z)(a.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e)))),$=n.forwardRef((function(e,o){const a=n.useContext(g),s=(0,i.Z)(a,e),d=(0,p.Z)({props:s,name:"MuiButton"}),{children:u,color:b="primary",component:v="button",className:y,disabled:$=!1,disableElevation:z=!1,disableFocusRipple:w=!1,endIcon:k,focusVisibleClassName:I,fullWidth:R=!1,size:M="medium",startIcon:N,type:P,variant:T="text"}=d,L=(0,t.Z)(d,f),V=(0,r.Z)({},d,{color:b,component:v,disabled:$,disableElevation:z,disableFocusRipple:w,fullWidth:R,size:M,type:P,variant:T}),F=(e=>{const{color:o,disableElevation:a,fullWidth:t,size:n,variant:l,classes:i}=e,s={root:["root",l,`${l}${(0,m.Z)(o)}`,`size${(0,m.Z)(n)}`,`${l}Size${(0,m.Z)(n)}`,"inherit"===o&&"colorInherit",a&&"disableElevation",t&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(n)}`]},d=(0,c.Z)(s,h,i);return(0,r.Z)({},i,d)})(V),O=N&&(0,Z.jsx)(x,{className:F.startIcon,ownerState:V,children:N}),j=k&&(0,Z.jsx)(C,{className:F.endIcon,ownerState:V,children:k});return(0,Z.jsxs)(S,(0,r.Z)({ownerState:V,className:(0,l.Z)(y,a.className),component:v,disabled:$,focusRipple:!w,focusVisibleClassName:(0,l.Z)(F.focusVisible,I),ref:o,type:P},L,{classes:F,children:[O,u,j]}))}))},5295:(e,o,a)=>{a.d(o,{Z:()=>v});var t=a(7462),r=a(3366),n=a(7294),l=(a(5697),a(6010)),i=a(7192),c=a(9602),s=a(1657),d=a(6501),p=a(8979);function u(e){return(0,p.Z)("MuiCard",e)}(0,a(6087).Z)("MuiCard",["root"]);var m=a(5893);const b=["className","raised"],h=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,o)=>o.root})((()=>({overflow:"hidden"}))),v=n.forwardRef((function(e,o){const a=(0,s.Z)({props:e,name:"MuiCard"}),{className:n,raised:c=!1}=a,d=(0,r.Z)(a,b),p=(0,t.Z)({},a,{raised:c}),v=(e=>{const{classes:o}=e;return(0,i.Z)({root:["root"]},u,o)})(p);return(0,m.jsx)(h,(0,t.Z)({className:(0,l.Z)(v.root,n),elevation:c?8:void 0,ref:o,ownerState:p},d))}))},9161:(e,o,a)=>{a.d(o,{Z:()=>h});var t=a(3366),r=a(7462),n=a(7294),l=(a(5697),a(6010)),i=a(7192),c=a(9602),s=a(1657),d=a(8979);function p(e){return(0,d.Z)("MuiCardActions",e)}(0,a(6087).Z)("MuiCardActions",["root","spacing"]);var u=a(5893);const m=["disableSpacing","className"],b=(0,c.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,!a.disableSpacing&&o.spacing]}})((({ownerState:e})=>(0,r.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}))),h=n.forwardRef((function(e,o){const a=(0,s.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:n=!1,className:c}=a,d=(0,t.Z)(a,m),h=(0,r.Z)({},a,{disableSpacing:n}),v=(e=>{const{classes:o,disableSpacing:a}=e,t={root:["root",!a&&"spacing"]};return(0,i.Z)(t,p,o)})(h);return(0,u.jsx)(b,(0,r.Z)({className:(0,l.Z)(v.root,c),ownerState:h,ref:o},d))}))},2643:(e,o,a)=>{a.d(o,{Z:()=>h});var t=a(7462),r=a(3366),n=a(7294),l=(a(5697),a(6010)),i=a(7192),c=a(9602),s=a(1657),d=a(8979);function p(e){return(0,d.Z)("MuiCardContent",e)}(0,a(6087).Z)("MuiCardContent",["root"]);var u=a(5893);const m=["className","component"],b=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,o)=>o.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),h=n.forwardRef((function(e,o){const a=(0,s.Z)({props:e,name:"MuiCardContent"}),{className:n,component:c="div"}=a,d=(0,r.Z)(a,m),h=(0,t.Z)({},a,{component:c}),v=(e=>{const{classes:o}=e;return(0,i.Z)({root:["root"]},p,o)})(h);return(0,u.jsx)(b,(0,t.Z)({as:c,className:(0,l.Z)(v.root,n),ownerState:h,ref:o},d))}))},8515:(e,o,a)=>{a.d(o,{Z:()=>y});var t=a(3366),r=a(7462),n=a(7294),l=(a(5697),a(6010)),i=a(7192),c=a(2658),s=a(1657),d=a(9602),p=a(8979);function u(e){return(0,p.Z)("MuiCardHeader",e)}const m=(0,a(6087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var b=a(5893);const h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,o)=>(0,r.Z)({[`& .${m.title}`]:o.title,[`& .${m.subheader}`]:o.subheader},o.root)})({display:"flex",alignItems:"center",padding:16}),g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,o)=>o.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Z=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,o)=>o.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,o)=>o.content})({flex:"1 1 auto"}),y=n.forwardRef((function(e,o){const a=(0,s.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:d,className:p,component:m="div",disableTypography:y=!1,subheader:S,subheaderTypographyProps:x,title:C,titleTypographyProps:$}=a,z=(0,t.Z)(a,h),w=(0,r.Z)({},a,{component:m,disableTypography:y}),k=(e=>{const{classes:o}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,o)})(w);let I=C;null==I||I.type===c.Z||y||(I=(0,b.jsx)(c.Z,(0,r.Z)({variant:d?"body2":"h5",className:k.title,component:"span",display:"block"},$,{children:I})));let R=S;return null==R||R.type===c.Z||y||(R=(0,b.jsx)(c.Z,(0,r.Z)({variant:d?"body2":"body1",className:k.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:R}))),(0,b.jsxs)(v,(0,r.Z)({className:(0,l.Z)(k.root,p),as:m,ref:o,ownerState:w},z,{children:[d&&(0,b.jsx)(g,{className:k.avatar,ownerState:w,children:d}),(0,b.jsxs)(f,{className:k.content,ownerState:w,children:[I,R]}),n&&(0,b.jsx)(Z,{className:k.action,ownerState:w,children:n})]}))}))},461:(e,o,a)=>{a.d(o,{Z:()=>$});var t=a(3366),r=a(7462),n=a(7294),l=(a(5697),a(6010)),i=a(7192),c=a(1796),s=a(5949),d=a(5893);const p=(0,s.Z)((0,d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var u=a(1705),m=a(8216),b=a(9327),h=a(1657),v=a(9602),g=a(8979);function Z(e){return(0,g.Z)("MuiChip",e)}const f=(0,a(6087).Z)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),y=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],S=(0,v.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e,{color:t,clickable:r,onDelete:n,size:l,variant:i}=a;return[{[`& .${f.avatar}`]:o.avatar},{[`& .${f.avatar}`]:o[`avatar${(0,m.Z)(l)}`]},{[`& .${f.avatar}`]:o[`avatarColor${(0,m.Z)(t)}`]},{[`& .${f.icon}`]:o.icon},{[`& .${f.icon}`]:o[`icon${(0,m.Z)(l)}`]},{[`& .${f.icon}`]:o[`iconColor${(0,m.Z)(t)}`]},{[`& .${f.deleteIcon}`]:o.deleteIcon},{[`& .${f.deleteIcon}`]:o[`deleteIcon${(0,m.Z)(l)}`]},{[`& .${f.deleteIcon}`]:o[`deleteIconColor${(0,m.Z)(t)}`]},{[`& .${f.deleteIcon}`]:o[`deleteIconOutlinedColor${(0,m.Z)(t)}`]},o.root,o[`size${(0,m.Z)(l)}`],o[`color${(0,m.Z)(t)}`],r&&o.clickable,r&&"default"!==t&&o[`clickableColor${(0,m.Z)(t)})`],n&&o.deletable,n&&"default"!==t&&o[`deletableColor${(0,m.Z)(t)}`],o[i],"outlined"===i&&o[`outlined${(0,m.Z)(t)}`]]}})((({theme:e,ownerState:o})=>{const a=(0,c.Fq)(e.palette.text.primary,.26);return(0,r.Z)({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.text.primary,backgroundColor:e.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${f.disabled}`]:{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`& .${f.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},[`& .${f.avatarColorPrimary}`]:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},[`& .${f.avatarColorSecondary}`]:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},[`& .${f.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${f.icon}`]:(0,r.Z)({color:"light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==o.color&&{color:"inherit"}),[`& .${f.deleteIcon}`]:(0,r.Z)({WebkitTapHighlightColor:"transparent",color:a,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,c.Fq)(a,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:(0,c.Fq)(e.palette[o.color].contrastText,.7),"&:hover, &:active":{color:e.palette[o.color].contrastText}})},"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:e.palette[o.color].main,color:e.palette[o.color].contrastText},o.onDelete&&{[`&.${f.focusVisible}`]:{backgroundColor:(0,c.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},o.onDelete&&"default"!==o.color&&{[`&.${f.focusVisible}`]:{backgroundColor:e.palette[o.color].dark}})}),(({theme:e,ownerState:o})=>(0,r.Z)({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:(0,c.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${f.focusVisible}`]:{backgroundColor:(0,c.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:e.shadows[1]}},o.clickable&&"default"!==o.color&&{[`&:hover, &.${f.focusVisible}`]:{backgroundColor:e.palette[o.color].dark}})),(({theme:e,ownerState:o})=>(0,r.Z)({},"outlined"===o.variant&&{backgroundColor:"transparent",border:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${f.clickable}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${f.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`& .${f.avatar}`]:{marginLeft:4},[`& .${f.avatarSmall}`]:{marginLeft:2},[`& .${f.icon}`]:{marginLeft:4},[`& .${f.iconSmall}`]:{marginLeft:2},[`& .${f.deleteIcon}`]:{marginRight:5},[`& .${f.deleteIconSmall}`]:{marginRight:3}},"outlined"===o.variant&&"default"!==o.color&&{color:e.palette[o.color].main,border:`1px solid ${(0,c.Fq)(e.palette[o.color].main,.7)}`,[`&.${f.clickable}:hover`]:{backgroundColor:(0,c.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity)},[`&.${f.focusVisible}`]:{backgroundColor:(0,c.Fq)(e.palette[o.color].main,e.palette.action.focusOpacity)},[`& .${f.deleteIcon}`]:{color:(0,c.Fq)(e.palette[o.color].main,.7),"&:hover, &:active":{color:e.palette[o.color].main}}}))),x=(0,v.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,o)=>{const{ownerState:a}=e,{size:t}=a;return[o.label,o[`label${(0,m.Z)(t)}`]]}})((({ownerState:e})=>(0,r.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===e.size&&{paddingLeft:8,paddingRight:8})));function C(e){return"Backspace"===e.key||"Delete"===e.key}const $=n.forwardRef((function(e,o){const a=(0,h.Z)({props:e,name:"MuiChip"}),{avatar:c,className:s,clickable:v,color:g="default",component:f,deleteIcon:$,disabled:z=!1,icon:w,label:k,onClick:I,onDelete:R,onKeyDown:M,onKeyUp:N,size:P="medium",variant:T="filled"}=a,L=(0,t.Z)(a,y),V=n.useRef(null),F=(0,u.Z)(V,o),O=e=>{e.stopPropagation(),R&&R(e)},j=!(!1===v||!I)||v,E="small"===P,q=j||R?b.Z:f||"div",D=(0,r.Z)({},a,{component:q,disabled:z,size:P,color:g,onDelete:!!R,clickable:j,variant:T}),W=(e=>{const{classes:o,disabled:a,size:t,color:r,onDelete:n,clickable:l,variant:c}=e,s={root:["root",c,a&&"disabled",`size${(0,m.Z)(t)}`,`color${(0,m.Z)(r)}`,l&&"clickable",l&&`clickableColor${(0,m.Z)(r)}`,n&&"deletable",n&&`deletableColor${(0,m.Z)(r)}`,`${c}${(0,m.Z)(r)}`],label:["label",`label${(0,m.Z)(t)}`],avatar:["avatar",`avatar${(0,m.Z)(t)}`,`avatarColor${(0,m.Z)(r)}`],icon:["icon",`icon${(0,m.Z)(t)}`,`iconColor${(0,m.Z)(r)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,m.Z)(t)}`,`deleteIconColor${(0,m.Z)(r)}`,`deleteIconOutlinedColor${(0,m.Z)(r)}`]};return(0,i.Z)(s,Z,o)})(D),B=q===b.Z?(0,r.Z)({component:f||"div",focusVisibleClassName:W.focusVisible},R&&{disableRipple:!0}):{};let H=null;if(R){const e=(0,l.Z)("default"!==g&&("outlined"===T?W[`deleteIconOutlinedColor${(0,m.Z)(g)}`]:W[`deleteIconColor${(0,m.Z)(g)}`]),E&&W.deleteIconSmall);H=$&&n.isValidElement($)?n.cloneElement($,{className:(0,l.Z)($.props.className,W.deleteIcon,e),onClick:O}):(0,d.jsx)(p,{className:(0,l.Z)(W.deleteIcon,e),onClick:O})}let A=null;c&&n.isValidElement(c)&&(A=n.cloneElement(c,{className:(0,l.Z)(W.avatar,c.props.className)}));let K=null;return w&&n.isValidElement(w)&&(K=n.cloneElement(w,{className:(0,l.Z)(W.icon,w.props.className)})),(0,d.jsxs)(S,(0,r.Z)({as:q,className:(0,l.Z)(W.root,s),disabled:!(!j||!z)||void 0,onClick:I,onKeyDown:e=>{e.currentTarget===e.target&&C(e)&&e.preventDefault(),M&&M(e)},onKeyUp:e=>{e.currentTarget===e.target&&(R&&C(e)?R(e):"Escape"===e.key&&V.current&&V.current.blur()),N&&N(e)},ref:F,ownerState:D},B,L,{children:[A||K,(0,d.jsx)(x,{className:(0,l.Z)(W.label),ownerState:D,children:k}),H]}))}))}}]);