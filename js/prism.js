var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,a={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,i;switch(n=n||{},r.util.type(t)){case"Object":if(i=r.util.objId(t),n[i])return n[i];for(var s in a={},n[i]=a,t)t.hasOwnProperty(s)&&(a[s]=e(t[s],n));return a;case"Array":return i=r.util.objId(t),n[i]?n[i]:(a=[],n[i]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||r.languages)[e],s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(o)||(s[o]=i[o])}var u=a[e];return a[e]=s,r.languages.DFS(r.languages,(function(t,n){n===u&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,a,i){i=i||{};var s=r.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],a||o);var l=t[o],u=r.util.type(l);"Object"!==u||i[s(l)]?"Array"!==u||i[s(l)]||(i[s(l)]=!0,e(l,n,o,i)):(i[s(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var i,s=0;i=a.elements[s++];)r.highlightElement(i,!0===t,a.callback)},highlightElement:function(t,n,a){var i=r.util.getLanguage(t),s=r.languages[i];r.util.setLanguage(t,i);var o=t.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&r.util.setLanguage(o,i);var l={element:t,language:i,grammar:s,code:t.textContent};function u(e){l.highlightedCode=e,r.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,r.hooks.run("after-highlight",l),r.hooks.run("complete",l),a&&a.call(l.element)}if(r.hooks.run("before-sanity-check",l),(o=l.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!l.code)return r.hooks.run("complete",l),void(a&&a.call(l.element));if(r.hooks.run("before-highlight",l),l.grammar)if(n&&e.Worker){var c=new Worker(r.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(r.highlight(l.code,l.grammar,l.language));else u(r.util.encode(l.code))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};if(r.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),i.stringify(r.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var r=new l;return u(r,r.head,e),o(e,r,t,r.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:i};function i(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function s(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var i=r[1].length;r.index+=i,r[0]=r[0].slice(i)}return r}function o(e,t,n,a,l,d){for(var p in n)if(n.hasOwnProperty(p)&&n[p]){var g=n[p];g=Array.isArray(g)?g:[g];for(var m=0;m<g.length;++m){if(d&&d.cause==p+","+m)return;var f=g[m],b=f.inside,E=!!f.lookbehind,h=!!f.greedy,y=f.alias;if(h&&!f.pattern.global){var A=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,A+"g")}for(var k=f.pattern||f,T=a.next,v=l;T!==t.tail&&!(d&&v>=d.reach);v+=T.value.length,T=T.next){var S=T.value;if(t.length>e.length)return;if(!(S instanceof i)){var I,N=1;if(h){if(!(I=s(k,v,e,E))||I.index>=e.length)break;var w=I.index,R=I.index+I[0].length,O=v;for(O+=T.value.length;w>=O;)O+=(T=T.next).value.length;if(v=O-=T.value.length,T.value instanceof i)continue;for(var L=T;L!==t.tail&&(O<R||"string"==typeof L.value);L=L.next)N++,O+=L.value.length;N--,S=e.slice(v,O),I.index-=v}else if(!(I=s(k,0,S,E)))continue;w=I.index;var P=I[0],F=S.slice(0,w),C=S.slice(w+P.length),x=v+S.length;d&&x>d.reach&&(d.reach=x);var _=T.prev;if(F&&(_=u(t,_,F),v+=F.length),c(t,_,N),T=u(t,_,new i(p,b?r.tokenize(P,b):P,y,P)),C&&u(t,T,C),N>1){var D={cause:p+","+m,reach:x};o(e,t,n,T.prev,v,D),d&&D.reach>d.reach&&(d.reach=D.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function u(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function c(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=r,i.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},s=t.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(i.classes,s):i.classes.push(s)),r.hooks.run("wrap",i);var o="";for(var l in i.attributes)o+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,i=n.code,s=n.immediateClose;e.postMessage(r.highlight(i,r.languages[a],a)),s&&e.close()}),!1),r):r;var d=r.util.currentScript();function p(){r.manual||r.highlightAll()}if(d&&(r.filename=d.src,d.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var g=document.readyState;"loading"===g||"interactive"===g&&d&&d.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return r}(_self);
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(e){return e=e.replace(/<inner>/g,(function(){return t})),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+e+")")}var a=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,r=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,(function(){return a})),i=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+r+i+"(?:"+r+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+r+i+")(?:"+r+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(a),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+r+")"+i+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+r+"$"),inside:{"table-header":{pattern:RegExp(a),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach((function(t){["url","bold","italic","strike","code-snippet"].forEach((function(n){t!==n&&(e.languages.markdown[t].inside.content.inside[n]=e.languages.markdown[n])}))})),e.hooks.add("after-tokenize",(function(e){"markdown"!==e.language&&"md"!==e.language||function e(t){if(t&&"string"!=typeof t)for(var n=0,a=t.length;n<a;n++){var r=t[n];if("code"===r.type){var i=r.content[1],s=r.content[3];if(i&&s&&"code-language"===i.type&&"code-block"===s.type&&"string"==typeof i.content){var o=i.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),l="language-"+(o=(/[a-z][\w-]*/i.exec(o)||[""])[0].toLowerCase());s.alias?"string"==typeof s.alias?s.alias=[s.alias,l]:s.alias.push(l):s.alias=[l]}}else e(r.content)}}(e.tokens)})),e.hooks.add("wrap",(function(t){if("code-block"===t.type){for(var n="",a=0,r=t.classes.length;a<r;a++){var i=t.classes[a],u=/language-(.+)/.exec(i);if(u){n=u[1];break}}var c=e.languages[n];if(c)t.content=e.highlight(t.content.replace(s,"").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,(function(e,t){var n;return"#"===(t=t.toLowerCase())[0]?(n="x"===t[1]?parseInt(t.slice(2),16):Number(t.slice(1)),l(n)):o[t]||e})),c,n);else if(n&&"none"!==n&&e.plugins.autoloader){var d="md-"+(new Date).valueOf()+"-"+Math.floor(1e16*Math.random());t.attributes.id=d,e.plugins.autoloader.loadLanguages(n,(function(){var t=document.getElementById(d);t&&(t.innerHTML=e.highlight(t.textContent,e.languages[n],n))}))}}}));var s=RegExp(e.languages.markup.tag.pattern.source,"gi"),o={amp:"&",lt:"<",gt:">",quot:'"'},l=String.fromCodePoint||String.fromCharCode;e.languages.md=e.languages.markdown}(Prism),function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,r,i){if(n.language===a){var s=n.tokenStack=[];n.code=n.code.replace(r,(function(e){if("function"==typeof i&&!i(e))return e;for(var r,o=s.length;-1!==n.code.indexOf(r=t(a,o));)++o;return s[o]=e,r})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var r=0,i=Object.keys(n.tokenStack);!function s(o){for(var l=0;l<o.length&&!(r>=i.length);l++){var u=o[l];if("string"==typeof u||u.content&&"string"==typeof u.content){var c=i[r],d=n.tokenStack[c],p="string"==typeof u?u:u.content,g=t(a,c),m=p.indexOf(g);if(m>-1){++r;var f=p.substring(0,m),b=new e.Token(a,e.tokenize(d,n.grammar),"language-"+a,d),E=p.substring(m+g.length),h=[];f&&h.push.apply(h,s([f])),h.push(b),E&&h.push.apply(h,s([E])),"string"==typeof u?o.splice.apply(o,[l,1].concat(h)):u.content=h}}else u.content&&s(u.content)}return o}(n.tokens)}}}})}(Prism),function(e){var t=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,n=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],a=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,r=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,i=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:t,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:n,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:a,operator:r,punctuation:i};var s={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},o=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:s}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:s}}];e.languages.insertBefore("php","variable",{string:o,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:t,string:o,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:n,number:a,operator:r,punctuation:i}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",(function(t){/<\?/.test(t.code)&&e.languages["markup-templating"].buildPlaceholders(t,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g)})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"php")}))}(Prism),Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss,Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(){if(void 0!==Prism&&"undefined"!=typeof document){var e=[],t={},n=function(){};Prism.plugins.toolbar={};var a=Prism.plugins.toolbar.registerButton=function(n,a){var r;r="function"==typeof a?a:function(e){var t;return"function"==typeof a.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",(function(){a.onClick.call(this,e)}))):"string"==typeof a.url?(t=document.createElement("a")).href=a.url:t=document.createElement("span"),a.className&&t.classList.add(a.className),t.textContent=a.text,t},n in t?console.warn('There is a button with the key "'+n+'" registered already.'):e.push(t[n]=r)},r=Prism.plugins.toolbar.hook=function(a){var r=a.element.parentNode;if(r&&/pre/i.test(r.nodeName)&&!r.parentNode.classList.contains("code-toolbar")){var i=document.createElement("div");i.classList.add("code-toolbar"),r.parentNode.insertBefore(i,r),i.appendChild(r);var s=document.createElement("div");s.classList.add("toolbar");var o=e,l=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t)return(t=t.trim()).length?t.split(/\s*,\s*/g):[];e=e.parentElement}}(a.element);l&&(o=l.map((function(e){return t[e]||n}))),o.forEach((function(e){var t=e(a);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),s.appendChild(n)}})),i.appendChild(s)}};a("label",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,a,r=t.getAttribute("data-label");try{a=document.querySelector("template#"+r)}catch(e){}return a?n=a.content:(t.hasAttribute("data-url")?(n=document.createElement("a")).href=t.getAttribute("data-url"):n=document.createElement("span"),n.textContent=r),n}})),Prism.hooks.add("complete",r)}}(),function(){function e(e,n){e.addEventListener("click",(function(){!function(e){navigator.clipboard?navigator.clipboard.writeText(e.getText()).then(e.success,(function(){t(e)})):t(e)}(n)}))}function t(e){var t=document.createElement("textarea");t.value=e.getText(),t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy");setTimeout((function(){n?e.success():e.error()}),1)}catch(t){setTimeout((function(){e.error(t)}),1)}document.body.removeChild(t)}void 0!==Prism&&"undefined"!=typeof document&&(Prism.plugins.toolbar?Prism.plugins.toolbar.registerButton("copy-to-clipboard",(function(t){var n=t.element,a=function(e){var t={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(var n in t){for(var a="data-prismjs-"+n,r=e;r&&!r.hasAttribute(a);)r=r.parentElement;r&&(t[n]=r.getAttribute(a))}return t}(n),r=document.createElement("button");r.className="copy-to-clipboard-button",r.setAttribute("type","button");var i=document.createElement("span");return r.appendChild(i),o("copy"),e(r,{getText:function(){return n.textContent},success:function(){o("copy-success"),s()},error:function(){o("copy-error"),setTimeout((function(){!function(e){window.getSelection().selectAllChildren(e)}(n)}),1),s()}}),r;function s(){setTimeout((function(){o("copy")}),a["copy-timeout"])}function o(e){i.textContent=a[e],r.setAttribute("data-copy-state",e)}})):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))}();