define("ace/mode/svg",["require","exports","module","ace/lib/oop","ace/mode/xml","ace/mode/javascript","ace/mode/svg_highlight_rules","ace/mode/folding/mixed","ace/mode/folding/xml","ace/mode/folding/cstyle"],(function(e,t,n){var r=e("../lib/oop"),o=e("./xml").Mode,a=e("./javascript").Mode,i=e("./svg_highlight_rules").SvgHighlightRules,s=e("./folding/mixed").FoldMode,l=e("./folding/xml").FoldMode,u=e("./folding/cstyle").FoldMode,g=function(){o.call(this),this.HighlightRules=i,this.createModeDelegates({"js-":a}),this.foldingRules=new s(new l,{"js-":new u})};r.inherits(g,o),function(){this.getNextLineIndent=function(e,t,n){return this.$getIndent(t)},this.$id="ace/mode/svg"}.call(g.prototype),t.Mode=g})),define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator"],(function(e,t,n){function r(e,t){return e.type.lastIndexOf(t+".xml")>-1}var o=e("../../lib/oop"),a=e("../behaviour").Behaviour,i=e("../../token_iterator").TokenIterator,s=function(){this.add("string_dquotes","insertion",(function(e,t,n,o,a){if('"'==a||"'"==a){var s=a,l=o.doc.getTextRange(n.getSelectionRange());if(""!==l&&"'"!==l&&'"'!=l&&n.getWrapBehavioursEnabled())return{text:s+l+s,selection:!1};var u=n.getCursorPosition(),g=o.doc.getLine(u.row).substring(u.column,u.column+1),c=new i(o,u.row,u.column),d=c.getCurrentToken();if(g==s&&(r(d,"attribute-value")||r(d,"string")))return{text:"",selection:[1,1]};if(d||(d=c.stepBackward()),!d)return;for(;r(d,"tag-whitespace")||r(d,"whitespace");)d=c.stepBackward();var m=!g||g.match(/\s/);if(r(d,"attribute-equals")&&(m||">"==g)||r(d,"decl-attribute-equals")&&(m||"?"==g))return{text:s+s,selection:[1,1]}}})),this.add("string_dquotes","deletion",(function(e,t,n,r,o){var a=r.doc.getTextRange(o);if(!o.isMultiLine()&&('"'==a||"'"==a)&&r.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)==a)return o.end.column++,o})),this.add("autoclosing","insertion",(function(e,t,n,o,a){if(">"==a){var s=n.getCursorPosition(),l=new i(o,s.row,s.column),u=l.getCurrentToken()||l.stepBackward();if(!u||!(r(u,"tag-name")||r(u,"tag-whitespace")||r(u,"attribute-name")||r(u,"attribute-equals")||r(u,"attribute-value")))return;if(r(u,"reference.attribute-value"))return;if(r(u,"attribute-value")){var g=u.value.charAt(0);if('"'==g||"'"==g){var c=u.value.charAt(u.value.length-1),d=l.getCurrentTokenColumn()+u.value.length;if(d>s.column||d==s.column&&g!=c)return}}for(;!r(u,"tag-name");)u=l.stepBackward();var m=l.getCurrentTokenRow(),x=l.getCurrentTokenColumn();if(r(l.stepBackward(),"end-tag-open"))return;var h=u.value;if(m==s.row&&(h=h.substring(0,s.column-x)),this.voidElements.hasOwnProperty(h.toLowerCase()))return;return{text:"></"+h+">",selection:[1,1]}}})),this.add("autoindent","insertion",(function(e,t,n,r,o){if("\n"==o){var a=n.getCursorPosition(),i=r.getLine(a.row);if("</"==i.substring(a.column,a.column+2)){var s=this.$getIndent(i),l=s+r.getTabString();return{text:"\n"+l+"\n"+s,selection:[1,l.length,1,l.length]}}}}))};o.inherits(s,a),t.XmlBehaviour=s})),define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/range","ace/mode/folding/fold_mode","ace/token_iterator"],(function(e,t,n){function r(e,t){return e.type.lastIndexOf(t+".xml")>-1}var o=e("../../lib/oop"),a=(e("../../lib/lang"),e("../../range").Range),i=e("./fold_mode").FoldMode,s=e("../../token_iterator").TokenIterator,l=t.FoldMode=function(e,t){i.call(this),this.voidElements=o.mixin(e||{},t||{})};o.inherits(l,i);var u=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};(function(){this.getFoldWidget=function(e,t,n){var r=this._getFirstTagInLine(e,n);return r?r.closing||!r.tagName&&r.selfClosing?"markbeginend"==t?"end":"":!r.tagName||r.selfClosing||this.voidElements.hasOwnProperty(r.tagName.toLowerCase())||this._findEndTagInLine(e,n,r.tagName,r.end.column)?"":"start":""},this._getFirstTagInLine=function(e,t){for(var n=e.getTokens(t),o=new u,a=0;a<n.length;a++){var i=n[a];if(r(i,"tag-open")){if(o.end.column=o.start.column+i.value.length,o.closing=r(i,"end-tag-open"),!(i=n[++a]))return null;for(o.tagName=i.value,o.end.column+=i.value.length,a++;a<n.length;a++)if(i=n[a],o.end.column+=i.value.length,r(i,"tag-close")){o.selfClosing="/>"==i.value;break}return o}if(r(i,"tag-close"))return o.selfClosing="/>"==i.value,o;o.start.column+=i.value.length}return null},this._findEndTagInLine=function(e,t,n,o){for(var a=e.getTokens(t),i=0,s=0;s<a.length;s++){var l=a[s];if(!((i+=l.value.length)<o)&&r(l,"end-tag-open")&&(l=a[s+1])&&l.value==n)return!0}return!1},this._readTagForward=function(e){var t=e.getCurrentToken();if(!t)return null;var n=new u;do{if(r(t,"tag-open"))n.closing=r(t,"end-tag-open"),n.start.row=e.getCurrentTokenRow(),n.start.column=e.getCurrentTokenColumn();else if(r(t,"tag-name"))n.tagName=t.value;else if(r(t,"tag-close"))return n.selfClosing="/>"==t.value,n.end.row=e.getCurrentTokenRow(),n.end.column=e.getCurrentTokenColumn()+t.value.length,e.stepForward(),n}while(t=e.stepForward());return null},this._readTagBackward=function(e){var t=e.getCurrentToken();if(!t)return null;var n=new u;do{if(r(t,"tag-open"))return n.closing=r(t,"end-tag-open"),n.start.row=e.getCurrentTokenRow(),n.start.column=e.getCurrentTokenColumn(),e.stepBackward(),n;r(t,"tag-name")?n.tagName=t.value:r(t,"tag-close")&&(n.selfClosing="/>"==t.value,n.end.row=e.getCurrentTokenRow(),n.end.column=e.getCurrentTokenColumn()+t.value.length)}while(t=e.stepBackward());return null},this._pop=function(e,t){for(;e.length;){var n=e[e.length-1];if(!t||n.tagName==t.tagName)return e.pop();if(this.voidElements.hasOwnProperty(t.tagName))return;if(!this.voidElements.hasOwnProperty(n.tagName))return null;e.pop()}},this.getFoldWidgetRange=function(e,t,n){var r=this._getFirstTagInLine(e,n);if(!r)return null;var o,i=[];if(r.closing||r.selfClosing){u=new s(e,n,r.end.column);for(var l={row:n,column:r.start.column};o=this._readTagBackward(u);)if(o.selfClosing){if(!i.length)return o.start.column+=o.tagName.length+2,o.end.column-=2,a.fromPoints(o.start,o.end)}else if(o.closing)i.push(o);else if(this._pop(i,o),0==i.length)return o.start.column+=o.tagName.length+2,a.fromPoints(o.start,l)}else for(var u=new s(e,n,r.start.column),g={row:n,column:r.start.column+r.tagName.length+2};o=this._readTagForward(u);)if(o.selfClosing){if(!i.length)return o.start.column+=o.tagName.length+2,o.end.column-=2,a.fromPoints(o.start,o.end)}else if(o.closing){if(this._pop(i,o),0==i.length)return a.fromPoints(g,o.start)}else i.push(o)}}).call(l.prototype)})),define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],(function(e,t,n){var r=e("../lib/oop"),o=e("./text").Mode,a=e("./javascript_highlight_rules").JavaScriptHighlightRules,i=e("./matching_brace_outdent").MatchingBraceOutdent,s=(e("../range").Range,e("../worker/worker_client").WorkerClient),l=e("./behaviour/cstyle").CstyleBehaviour,u=e("./folding/cstyle").FoldMode,g=function(){this.HighlightRules=a,this.$outdent=new i,this.$behaviour=new l,this.foldingRules=new u};r.inherits(g,o),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),o=this.getTokenizer().getLineTokens(t,e),a=o.tokens,i=o.state;if(a.length&&"comment"==a[a.length-1].type)return r;if("start"==e||"no_regex"==e)(s=t.match(/^.*(?:\bcase\b.*\:|[\{\(\[])\s*$/))&&(r+=n);else if("doc-start"==e){if("start"==i||"no_regex"==i)return"";var s;(s=t.match(/^\s*(\/?)\*/))&&(s[1]&&(r+=" "),r+="* ")}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new s(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return t.attachToDocument(e.getDocument()),t.on("jslint",(function(t){e.setAnnotations(t.data)})),t.on("terminate",(function(){e.clearAnnotations()})),t},this.$id="ace/mode/javascript"}.call(g.prototype),t.Mode=g})),define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,a=function(e){this.$rules={start:[{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:["punctuation.xml-decl.xml","keyword.xml-decl.xml"],regex:"(<\\?)(xml)(?=[\\s])",next:"xml_decl",caseInsensitive:!0},{token:["punctuation.instruction.xml","keyword.instruction.xml"],regex:"(<\\?)([-_a-zA-Z0-9]+)",next:"processing_instruction"},{token:"comment.xml",regex:"<\\!--",next:"comment"},{token:["xml-pe.doctype.xml","xml-pe.doctype.xml"],regex:"(<\\!)(DOCTYPE)(?=[\\s])",next:"doctype",caseInsensitive:!0},{include:"tag"},{token:"text.end-tag-open.xml",regex:"</"},{token:"text.tag-open.xml",regex:"<"},{include:"reference"},{defaultToken:"text.xml"}],xml_decl:[{token:"entity.other.attribute-name.decl-attribute-name.xml",regex:"(?:[-_a-zA-Z0-9]+:)?[-_a-zA-Z0-9]+"},{token:"keyword.operator.decl-attribute-equals.xml",regex:"="},{include:"whitespace"},{include:"string"},{token:"punctuation.xml-decl.xml",regex:"\\?>",next:"start"}],processing_instruction:[{token:"punctuation.instruction.xml",regex:"\\?>",next:"start"},{defaultToken:"instruction.xml"}],doctype:[{include:"whitespace"},{include:"string"},{token:"xml-pe.doctype.xml",regex:">",next:"start"},{token:"xml-pe.xml",regex:"[-_a-zA-Z0-9:]+"},{token:"punctuation.int-subset",regex:"\\[",push:"int_subset"}],int_subset:[{token:"text.xml",regex:"\\s+"},{token:"punctuation.int-subset.xml",regex:"]",next:"pop"},{token:["punctuation.markup-decl.xml","keyword.markup-decl.xml"],regex:"(<\\!)([-_a-zA-Z0-9]+)",push:[{token:"text",regex:"\\s+"},{token:"punctuation.markup-decl.xml",regex:">",next:"pop"},{include:"string"}]}],cdata:[{token:"string.cdata.xml",regex:"\\]\\]>",next:"start"},{token:"text.xml",regex:"\\s+"},{token:"text.xml",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment.xml",regex:"--\x3e",next:"start"},{defaultToken:"comment.xml"}],reference:[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],attr_reference:[{token:"constant.language.escape.reference.attribute-value.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],tag:[{token:["meta.tag.punctuation.tag-open.xml","meta.tag.punctuation.end-tag-open.xml","meta.tag.tag-name.xml"],regex:"(?:(<)|(</))((?:[-_a-zA-Z0-9]+:)?[-_a-zA-Z0-9]+)",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}],tag_whitespace:[{token:"text.tag-whitespace.xml",regex:"\\s+"}],whitespace:[{token:"text.whitespace.xml",regex:"\\s+"}],string:[{token:"string.xml",regex:"'",push:[{token:"string.xml",regex:"'",next:"pop"},{defaultToken:"string.xml"}]},{token:"string.xml",regex:'"',push:[{token:"string.xml",regex:'"',next:"pop"},{defaultToken:"string.xml"}]}],attributes:[{token:"entity.other.attribute-name.xml",regex:"(?:[-_a-zA-Z0-9]+:)?[-_a-zA-Z0-9]+"},{token:"keyword.operator.attribute-equals.xml",regex:"="},{include:"tag_whitespace"},{include:"attribute_value"}],attribute_value:[{token:"string.attribute-value.xml",regex:"'",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]}]},this.constructor===a&&this.normalizeRules()};(function(){this.embedTagRules=function(e,t,n){this.$rules.tag.unshift({token:["meta.tag.punctuation.tag-open.xml","meta.tag."+n+".tag-name.xml"],regex:"(<)("+n+"(?=\\s|>|$))",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:t+"start"}]}),this.$rules[n+"-end"]=[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start",onMatch:function(e,t,n){return n.splice(0),this.token}}],this.embedRules(e,t,[{token:["meta.tag.punctuation.end-tag-open.xml","meta.tag."+n+".tag-name.xml"],regex:"(</)("+n+"(?=\\s|>|$))",next:n+"-end"},{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\["},{token:"string.cdata.xml",regex:"\\]\\]>"}])}}).call(o.prototype),r.inherits(a,o),t.XmlHighlightRules=a})),define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},{token:"comment.doc.tag",regex:"\\bTODO\\b"},{defaultToken:"comment.doc"}]}};r.inherits(a,o),a.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},a.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=a})),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){var r=e("../range").Range,o=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,a=e.findMatchingBracket({row:t,column:o});if(!a||a.row==t)return 0;var i=this.$getIndent(e.getLine(a.row));e.replace(new r(t,0,t,o-1),i)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(o.prototype),t.MatchingBraceOutdent=o})),define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],(function(e,t,n){var r,o=e("../../lib/oop"),a=e("../behaviour").Behaviour,i=e("../../token_iterator").TokenIterator,s=e("../../lib/lang"),l=["text","paren.rparen","punctuation.operator"],u=["text","paren.rparen","punctuation.operator","comment"],g={},c=function(e){var t=-1;if(e.multiSelect&&(t=e.selection.id,g.rangeCount!=e.multiSelect.rangeCount&&(g={rangeCount:e.multiSelect.rangeCount})),g[t])return r=g[t];r=g[t]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:"",maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:"",maybeInsertedLineEnd:""}},d=function(){this.add("braces","insertion",(function(e,t,n,o,a){var i=n.getCursorPosition(),l=o.doc.getLine(i.row);if("{"==a){c(n);var u=n.getSelectionRange(),g=o.doc.getTextRange(u);if(""!==g&&"{"!==g&&n.getWrapBehavioursEnabled())return{text:"{"+g+"}",selection:!1};if(d.isSaneInsertion(n,o))return/[\]\}\)]/.test(l[i.column])||n.inMultiSelectMode?(d.recordAutoInsert(n,o,"}"),{text:"{}",selection:[1,1]}):(d.recordMaybeInsert(n,o,"{"),{text:"{",selection:[1,1]})}else if("}"==a){if(c(n),"}"==l.substring(i.column,i.column+1)&&null!==o.$findOpeningBracket("}",{column:i.column+1,row:i.row})&&d.isAutoInsertedClosing(i,l,a))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}else{if("\n"==a||"\r\n"==a){c(n);var m="";if(d.isMaybeInsertedClosing(i,l)&&(m=s.stringRepeat("}",r.maybeInsertedBrackets),d.clearMaybeInsertedClosing()),"}"===l.substring(i.column,i.column+1)){var x=o.findMatchingBracket({row:i.row,column:i.column+1},"}");if(!x)return null;var h=this.$getIndent(o.getLine(x.row))}else{if(!m)return void d.clearMaybeInsertedClosing();h=this.$getIndent(l)}var p=h+o.getTabString();return{text:"\n"+p+"\n"+h+m,selection:[1,p.length,1,p.length]}}d.clearMaybeInsertedClosing()}})),this.add("braces","deletion",(function(e,t,n,o,a){var i=o.doc.getTextRange(a);if(!a.isMultiLine()&&"{"==i){if(c(n),"}"==o.doc.getLine(a.start.row).substring(a.end.column,a.end.column+1))return a.end.column++,a;r.maybeInsertedBrackets--}})),this.add("parens","insertion",(function(e,t,n,r,o){if("("==o){c(n);var a=n.getSelectionRange(),i=r.doc.getTextRange(a);if(""!==i&&n.getWrapBehavioursEnabled())return{text:"("+i+")",selection:!1};if(d.isSaneInsertion(n,r))return d.recordAutoInsert(n,r,")"),{text:"()",selection:[1,1]}}else if(")"==o){c(n);var s=n.getCursorPosition(),l=r.doc.getLine(s.row);if(")"==l.substring(s.column,s.column+1)&&null!==r.$findOpeningBracket(")",{column:s.column+1,row:s.row})&&d.isAutoInsertedClosing(s,l,o))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}})),this.add("parens","deletion",(function(e,t,n,r,o){var a=r.doc.getTextRange(o);if(!o.isMultiLine()&&"("==a&&(c(n),")"==r.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)))return o.end.column++,o})),this.add("brackets","insertion",(function(e,t,n,r,o){if("["==o){c(n);var a=n.getSelectionRange(),i=r.doc.getTextRange(a);if(""!==i&&n.getWrapBehavioursEnabled())return{text:"["+i+"]",selection:!1};if(d.isSaneInsertion(n,r))return d.recordAutoInsert(n,r,"]"),{text:"[]",selection:[1,1]}}else if("]"==o){c(n);var s=n.getCursorPosition(),l=r.doc.getLine(s.row);if("]"==l.substring(s.column,s.column+1)&&null!==r.$findOpeningBracket("]",{column:s.column+1,row:s.row})&&d.isAutoInsertedClosing(s,l,o))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}})),this.add("brackets","deletion",(function(e,t,n,r,o){var a=r.doc.getTextRange(o);if(!o.isMultiLine()&&"["==a&&(c(n),"]"==r.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)))return o.end.column++,o})),this.add("string_dquotes","insertion",(function(e,t,n,r,o){if('"'==o||"'"==o){c(n);var a=o,i=n.getSelectionRange(),s=r.doc.getTextRange(i);if(""!==s&&"'"!==s&&'"'!=s&&n.getWrapBehavioursEnabled())return{text:a+s+a,selection:!1};var l=n.getCursorPosition(),u=r.doc.getLine(l.row);if("\\"==u.substring(l.column-1,l.column))return null;for(var g,m=r.getTokens(i.start.row),x=0,h=-1,p=0;p<m.length&&("string"==(g=m[p]).type?h=-1:h<0&&(h=g.value.indexOf(a)),!(g.value.length+x>i.start.column));p++)x+=m[p].value.length;if(!g||h<0&&"comment"!==g.type&&("string"!==g.type||i.start.column!==g.value.length+x-1&&g.value.lastIndexOf(a)===g.value.length-1)){if(!d.isSaneInsertion(n,r))return;return{text:a+a,selection:[1,1]}}if(g&&"string"===g.type&&u.substring(l.column,l.column+1)==a)return{text:"",selection:[1,1]}}})),this.add("string_dquotes","deletion",(function(e,t,n,r,o){var a=r.doc.getTextRange(o);if(!o.isMultiLine()&&('"'==a||"'"==a)&&(c(n),r.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)==a))return o.end.column++,o}))};d.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new i(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||"text",l)){var o=new i(t,n.row,n.column+1);if(!this.$matchTokenType(o.getCurrentToken()||"text",l))return!1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||"text",u)},d.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},d.recordAutoInsert=function(e,t,n){var o=e.getCursorPosition(),a=t.doc.getLine(o.row);this.isAutoInsertedClosing(o,a,r.autoInsertedLineEnd[0])||(r.autoInsertedBrackets=0),r.autoInsertedRow=o.row,r.autoInsertedLineEnd=n+a.substr(o.column),r.autoInsertedBrackets++},d.recordMaybeInsert=function(e,t,n){var o=e.getCursorPosition(),a=t.doc.getLine(o.row);this.isMaybeInsertedClosing(o,a)||(r.maybeInsertedBrackets=0),r.maybeInsertedRow=o.row,r.maybeInsertedLineStart=a.substr(0,o.column)+n,r.maybeInsertedLineEnd=a.substr(o.column),r.maybeInsertedBrackets++},d.isAutoInsertedClosing=function(e,t,n){return r.autoInsertedBrackets>0&&e.row===r.autoInsertedRow&&n===r.autoInsertedLineEnd[0]&&t.substr(e.column)===r.autoInsertedLineEnd},d.isMaybeInsertedClosing=function(e,t){return r.maybeInsertedBrackets>0&&e.row===r.maybeInsertedRow&&t.substr(e.column)===r.maybeInsertedLineEnd&&t.substr(0,e.column)==r.maybeInsertedLineStart},d.popAutoInsertedClosing=function(){r.autoInsertedLineEnd=r.autoInsertedLineEnd.substr(1),r.autoInsertedBrackets--},d.clearMaybeInsertedClosing=function(){r&&(r.maybeInsertedBrackets=0,r.maybeInsertedRow=-1)},o.inherits(d,a),t.CstyleBehaviour=d})),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){var r=e("../../lib/oop"),o=e("../../range").Range,a=e("./fold_mode").FoldMode,i=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(i,a),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,n,r){var o,a=e.getLine(n);if(o=a.match(this.foldingStartMarker)){var i=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,i);var s=e.getCommentFoldRange(n,i+o[0].length,1);return s&&!s.isMultiLine()&&(r?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}if("markbegin"!==t&&(o=a.match(this.foldingStopMarker)))return i=o.index+o[0].length,o[1]?this.closingBracketBlock(e,o[1],n,i):e.getCommentFoldRange(n,i,-1)},this.getSectionRange=function(e,t){for(var n=e.getLine(t),r=n.search(/\S/),a=t,i=n.length,s=t+=1,l=e.getLength();++t<l;){var u=(n=e.getLine(t)).search(/\S/);if(-1!==u){if(r>u)break;var g=this.getFoldWidgetRange(e,"all",t);if(g){if(g.start.row<=a)break;if(g.isMultiLine())t=g.end.row;else if(r==u)break}s=t}}return new o(a,i,s,e.getLine(s).length)}}.call(i.prototype)})),define("ace/mode/svg_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/javascript_highlight_rules","ace/mode/xml_highlight_rules"],(function(e,t,n){var r=e("../lib/oop"),o=e("./javascript_highlight_rules").JavaScriptHighlightRules,a=e("./xml_highlight_rules").XmlHighlightRules,i=function(){a.call(this),this.embedTagRules(o,"js-","script"),this.normalizeRules()};r.inherits(i,a),t.SvgHighlightRules=i})),define("ace/mode/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/xml_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/xml"],(function(e,t,n){var r=e("../lib/oop"),o=e("../lib/lang"),a=e("./text").Mode,i=e("./xml_highlight_rules").XmlHighlightRules,s=e("./behaviour/xml").XmlBehaviour,l=e("./folding/xml").FoldMode,u=function(){this.HighlightRules=i,this.$behaviour=new s,this.foldingRules=new l};r.inherits(u,a),function(){this.voidElements=o.arrayToMap([]),this.blockComment={start:"\x3c!--",end:"--\x3e"},this.$id="ace/mode/xml"}.call(u.prototype),t.Mode=u})),define("ace/mode/folding/mixed",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"],(function(e,t,n){var r=e("../../lib/oop"),o=e("./fold_mode").FoldMode,a=t.FoldMode=function(e,t){this.defaultMode=e,this.subModes=t};r.inherits(a,o),function(){this.$getMode=function(e){for(var t in"string"!=typeof e&&(e=e[0]),this.subModes)if(0===e.indexOf(t))return this.subModes[t];return null},this.$tryMode=function(e,t,n,r){var o=this.$getMode(e);return o?o.getFoldWidget(t,n,r):""},this.getFoldWidget=function(e,t,n){return this.$tryMode(e.getState(n-1),e,t,n)||this.$tryMode(e.getState(n),e,t,n)||this.defaultMode.getFoldWidget(e,t,n)},this.getFoldWidgetRange=function(e,t,n){var r=this.$getMode(e.getState(n-1));return r&&r.getFoldWidget(e,t,n)||(r=this.$getMode(e.getState(n))),r&&r.getFoldWidget(e,t,n)||(r=this.defaultMode),r.getFoldWidgetRange(e,t,n)}}.call(a.prototype)})),define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],(function(e,t,n){var r=e("../lib/oop"),o=e("./doc_comment_highlight_rules").DocCommentHighlightRules,a=e("./text_highlight_rules").TextHighlightRules,i=function(){var e=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),t="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*\\b",n="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[{token:"comment",regex:"\\/\\/",next:"line_comment"},o.getStartRule("doc-start"),{token:"comment",regex:/\/\*/,next:"comment"},{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0[xX][0-9a-fA-F]+\b/},{token:"constant.numeric",regex:/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+t+")(\\.)(prototype)(\\.)("+t+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+t+")(\\.)("+t+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+t+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+t+")(\\.)("+t+")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function)(\\s+)("+t+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+t+")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:"(?:case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void)\\b",next:"start"},{token:["punctuation.operator","support.function"],regex:/(\.)(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:["punctuation.operator","support.function.dom"],regex:/(\.)(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:["punctuation.operator","support.constant"],regex:/(\.)(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:["support.constant"],regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:e,regex:t},{token:"keyword.operator",regex:/--|\+\+|[!$%&*+\-~]|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?\:|\*=|%=|\+=|\-=|&=|\^=/,next:"start"},{token:"punctuation.operator",regex:/\?|\:|\,|\;|\./,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"keyword.operator",regex:/\/=?/,next:"start"},{token:"comment",regex:/^#!.*$/}],start:[o.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment_regex_allowed"},{token:"comment",regex:"\\/\\/",next:"line_comment_regex_allowed"},{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],function_arguments:[{token:"variable.parameter",regex:t},{token:"punctuation.operator",regex:"[, ]+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],comment_regex_allowed:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],comment:[{token:"comment",regex:"\\*\\/",next:"no_regex"},{defaultToken:"comment"}],line_comment_regex_allowed:[{token:"comment",regex:"$|^",next:"start"},{defaultToken:"comment"}],line_comment:[{token:"comment",regex:"$|^",next:"no_regex"},{defaultToken:"comment"}],qqstring:[{token:"constant.language.escape",regex:n},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:n},{token:"string",regex:"\\\\$",next:"qstring"},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},this.embedRules(o,"doc-",[o.getEndRule("no_regex")])};r.inherits(i,a),t.JavaScriptHighlightRules=i}));