define("ace/ext/textarea",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/net","ace/ace","ace/theme/textmate","ace/mode/text"],(function(e,t,i){function n(e,t){for(var i in t)e.style[i]=t[i]}function o(e,t){if("textarea"!=e.type)throw new Error("Textarea required!");var i=e.parentNode,n=document.createElement("div"),o=function(){var t="position:relative;";["margin-top","margin-left","margin-right","margin-bottom"].forEach((function(i){t+=i+":"+d(e,n,i)+";"}));var i=d(e,n,"width")||e.clientWidth+"px",o=d(e,n,"height")||e.clientHeight+"px";t+="height:"+o+";width:"+i+";",t+="display:inline-block;",n.setAttribute("style",t)};for(s.addListener(window,"resize",o),o(),i.insertBefore(n,e.nextSibling);i!==document;){if("FORM"===i.tagName.toUpperCase()){var r=i.onsubmit;i.onsubmit=function(i){e.value=t(),r&&r.call(this,i)};break}i=i.parentNode}return n}function r(t,i,n){c.loadScript(t,(function(){e([i],n)}))}function a(i,n,o,a,s,l){var c=i.getSession(),u=i.renderer;return l=l||r,i.setDisplaySettings=function(e){null==e&&(e="none"==o.style.display),e?(o.style.display="block",o.hideButton.focus(),i.on("focus",(function e(){i.removeListener("focus",e),o.style.display="none"}))):i.focus()},i.$setOption=i.setOption,i.setOption=function(t,o){if(s[t]!=o){switch(t){case"mode":"text"!=o?l("mode-"+o+".js","ace/mode/"+o,(function(){var t=e("../mode/"+o).Mode;c.setMode(new t)})):c.setMode(new(e("../mode/text").Mode));break;case"theme":"textmate"!=o?l("theme-"+o+".js","ace/theme/"+o,(function(){i.setTheme("ace/theme/"+o)})):i.setTheme("ace/theme/textmate");break;case"fontSize":n.style.fontSize=o;break;case"keybindings":switch(o){case"vim":i.setKeyboardHandler("ace/keyboard/vim");break;case"emacs":i.setKeyboardHandler("ace/keyboard/emacs");break;default:i.setKeyboardHandler(null)}break;case"softWrap":switch(o){case"off":c.setUseWrapMode(!1),u.setPrintMarginColumn(80);break;case"40":c.setUseWrapMode(!0),c.setWrapLimitRange(40,40),u.setPrintMarginColumn(40);break;case"80":c.setUseWrapMode(!0),c.setWrapLimitRange(80,80),u.setPrintMarginColumn(80);break;case"free":c.setUseWrapMode(!0),c.setWrapLimitRange(null,null),u.setPrintMarginColumn(80)}break;default:i.$setOption(t,function(e){return"true"===e||1==e}(o))}s[t]=o}},i.getOption=function(e){return s[e]},i.getOptions=function(){return s},i.setOptions(t.options),i}var s=e("../lib/event"),l=e("../lib/useragent"),c=e("../lib/net"),u=e("../ace");e("../theme/textmate"),i.exports=t=u;var d=function(e,t,i){var n=e.style[i];return n||(n=window.getComputedStyle?window.getComputedStyle(e,"").getPropertyValue(i):e.currentStyle[i]),n&&"auto"!=n&&"intrinsic"!=n||(n=t.style[i]),n};t.transformTextarea=function(e,t){var i,r=o(e,(function(){return i.getValue()}));e.style.display="none",r.style.background="white";var c=document.createElement("div");n(c,{top:"0px",left:"0px",right:"0px",bottom:"0px",border:"1px solid gray",position:"absolute"}),r.appendChild(c);var d=document.createElement("div");n(d,{position:"absolute",right:"0px",bottom:"0px",background:"red",cursor:"nw-resize",borderStyle:"solid",borderWidth:"9px 8px 10px 9px",width:"2px",borderColor:"lightblue gray gray lightblue",zIndex:101});var p=document.createElement("div"),h={top:"0px",left:"20%",right:"0px",bottom:"0px",position:"absolute",padding:"5px",zIndex:100,color:"white",display:"none",overflow:"auto",fontSize:"14px",boxShadow:"-5px 2px 3px gray"};l.isOldIE?h.backgroundColor="#333":h.backgroundColor="rgba(0, 0, 0, 0.6)",n(p,h),r.appendChild(p);var f={},m=u.edit(c);(i=m.getSession()).setValue(e.value||e.innerHTML),m.focus(),r.appendChild(d),a(m,c,p,0,f,t),function(e,t,i,n){function o(e,t,i,n){if(i){for(var o in e.push("<select title='"+t+"'>"),i)e.push("<option value='"+o+"' "),n==o&&e.push(" selected "),e.push(">",i[o],"</option>");e.push("</select>")}else e.push("<input type='checkbox' title='",t,"' ","true"==n?"checked='true'":"","'></input>")}var r=null,a={mode:"Mode:",gutter:"Display Gutter:",theme:"Theme:",fontSize:"Font Size:",softWrap:"Soft Wrap:",keybindings:"Keyboard",showPrintMargin:"Show Print Margin:",useSoftTabs:"Use Soft Tabs:",showInvisibles:"Show Invisibles"},l={mode:{text:"Plain",javascript:"JavaScript",xml:"XML",html:"HTML",css:"CSS",scss:"SCSS",python:"Python",php:"PHP",java:"Java",ruby:"Ruby",c_cpp:"C/C++",coffee:"CoffeeScript",json:"json",perl:"Perl",clojure:"Clojure",ocaml:"OCaml",csharp:"C#",haxe:"haXe",svg:"SVG",textile:"Textile",groovy:"Groovy",liquid:"Liquid",Scala:"Scala"},theme:{clouds:"Clouds",clouds_midnight:"Clouds Midnight",cobalt:"Cobalt",crimson_editor:"Crimson Editor",dawn:"Dawn",eclipse:"Eclipse",idle_fingers:"Idle Fingers",kr_theme:"Kr Theme",merbivore:"Merbivore",merbivore_soft:"Merbivore Soft",mono_industrial:"Mono Industrial",monokai:"Monokai",pastel_on_dark:"Pastel On Dark",solarized_dark:"Solarized Dark",solarized_light:"Solarized Light",textmate:"Textmate",twilight:"Twilight",vibrant_ink:"Vibrant Ink"},gutter:r,fontSize:{"10px":"10px","11px":"11px","12px":"12px","14px":"14px","16px":"16px"},softWrap:{off:"Off",40:"40",80:"80",free:"Free"},keybindings:{ace:"ace",vim:"vim",emacs:"emacs"},showPrintMargin:r,useSoftTabs:r,showInvisibles:r},c=[];for(var u in c.push("<table><tr><th>Setting</th><th>Value</th></tr>"),n)c.push("<tr><td>",a[u],"</td>"),c.push("<td>"),o(c,u,l[u],n[u]),c.push("</td></tr>");c.push("</table>"),e.innerHTML=c.join("");for(var d=function(e){var t=e.currentTarget;i.setOption(t.title,t.value)},p=function(e){var t=e.currentTarget;i.setOption(t.title,t.checked)},h=e.getElementsByTagName("select"),f=0;f<h.length;f++)h[f].onchange=d;var m=e.getElementsByTagName("input");for(f=0;f<m.length;f++)m[f].onclick=p;var g=document.createElement("input");g.type="button",g.value="Hide",s.addListener(g,"click",(function(){i.setDisplaySettings(!1)})),e.appendChild(g),e.hideButton=g}(p,0,m,f);var g="";return s.addListener(d,"mousemove",(function(e){var t=this.getBoundingClientRect();e.clientX-t.left+(e.clientY-t.top)<(t.width+t.height)/2?(this.style.cursor="pointer",g="toggle"):(g="resize",this.style.cursor="nw-resize")})),s.addListener(d,"mousedown",(function(e){if("toggle"!=g){r.style.zIndex=1e5;var t=r.getBoundingClientRect(),i=t.width+t.left-e.clientX,n=t.height+t.top-e.clientY;s.capture(d,(function(e){r.style.width=e.clientX-t.left+i+"px",r.style.height=e.clientY-t.top+n+"px",m.resize()}),(function(){}))}else m.setDisplaySettings()})),m},t.options={mode:"text",theme:"textmate",gutter:"false",fontSize:"12px",softWrap:"off",keybindings:"ace",showPrintMargin:"false",useSoftTabs:"true",showInvisibles:"false"}})),window.require(["ace/ext/textarea"],(function(){}));