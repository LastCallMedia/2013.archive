/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function(e,t){typeof module!="undefined"?module.exports=t():typeof define=="function"&&typeof define.amd=="object"?define(t):this[e]=t()}("domready",function(){var e=[],t,n=document,r=n.documentElement.doScroll,i="DOMContentLoaded",s=(r?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return s||n.addEventListener(i,t=function(){n.removeEventListener(i,t),s=1;while(t=e.shift())t()}),function(t){s?setTimeout(t,0):e.push(t)}});
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*!
 * jQuery Once v2.1.1 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new Error("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

/**
 * @file
 * Parse inline JSON and initialize the drupalSettings global object.
 */

(function () {

  'use strict';

  // Use direct child elements to harden against XSS exploits when CSP is on.
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  /**
   * Variable generated by Drupal with all the configuration created from PHP.
   *
   * @global
   *
   * @type {object}
   */
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();
;
/**
 * @file
 * Defines the Drupal JavaScript API.
 */

/**
 * A jQuery object, typically the return value from a `$(selector)` call.
 *
 * Holds an HTMLElement or a collection of HTMLElements.
 *
 * @typedef {object} jQuery
 *
 * @prop {number} length=0
 *   Number of elements contained in the jQuery object.
 */

/**
 * Variable generated by Drupal that holds all translated strings from PHP.
 *
 * Content of this variable is automatically created by Drupal when using the
 * Interface Translation module. It holds the translation of strings used on
 * the page.
 *
 * This variable is used to pass data from the backend to the frontend. Data
 * contained in `drupalSettings` is used during behavior initialization.
 *
 * @global
 *
 * @var {object} drupalTranslations
 */

/**
 * Global Drupal object.
 *
 * All Drupal JavaScript APIs are contained in this namespace.
 *
 * @global
 *
 * @namespace
 */
window.Drupal = {behaviors: {}, locale: {}};

// Class indicating that JavaScript is enabled; used for styling purpose.
document.documentElement.className += ' js';

// Allow other JavaScript libraries to use $.
if (window.jQuery) {
  jQuery.noConflict();
}

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (domready, Drupal, drupalSettings, drupalTranslations) {

  'use strict';

  /**
   * Helper to rethrow errors asynchronously.
   *
   * This way Errors bubbles up outside of the original callstack, making it
   * easier to debug errors in the browser.
   *
   * @param {Error|string} error
   *   The error to be thrown.
   */
  Drupal.throwError = function (error) {
    setTimeout(function () { throw error; }, 0);
  };

  /**
   * Custom error thrown after attach/detach if one or more behaviors failed.
   * Initializes the JavaScript behaviors for page loads and Ajax requests.
   *
   * @callback Drupal~behaviorAttach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to detach behaviors from.
   * @param {?object} settings
   *   An object containing settings for the current context. It is rarely used.
   *
   * @see Drupal.attachBehaviors
   */

  /**
   * Reverts and cleans up JavaScript behavior initialization.
   *
   * @callback Drupal~behaviorDetach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to attach behaviors to.
   * @param {object} settings
   *   An object containing settings for the current context.
   * @param {string} trigger
   *   One of `'unload'`, `'move'`, or `'serialize'`.
   *
   * @see Drupal.detachBehaviors
   */

  /**
   * @typedef {object} Drupal~behavior
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Function run on page load and after an Ajax call.
   * @prop {Drupal~behaviorDetach} detach
   *   Function run when content is serialized or removed from the page.
   */

  /**
   * Holds all initialization methods.
   *
   * @namespace Drupal.behaviors
   *
   * @type {Object.<string, Drupal~behavior>}
   */

  /**
   * Defines a behavior to be run during attach and detach phases.
   *
   * Attaches all registered behaviors to a page element.
   *
   * Behaviors are event-triggered actions that attach to page elements,
   * enhancing default non-JavaScript UIs. Behaviors are registered in the
   * {@link Drupal.behaviors} object using the method 'attach' and optionally
   * also 'detach'.
   *
   * {@link Drupal.attachBehaviors} is added below to the `jQuery.ready` event
   * and therefore runs on initial page load. Developers implementing Ajax in
   * their solutions should also call this function after new page content has
   * been loaded, feeding in an element to be processed, in order to attach all
   * behaviors to the new content.
   *
   * Behaviors should use `var elements =
   * $(context).find(selector).once('behavior-name');` to ensure the behavior is
   * attached only once to a given element. (Doing so enables the reprocessing
   * of given elements, which may be needed on occasion despite the ability to
   * limit behavior attachment to a particular element.)
   *
   * @example
   * Drupal.behaviors.behaviorName = {
   *   attach: function (context, settings) {
   *     // ...
   *   },
   *   detach: function (context, settings, trigger) {
   *     // ...
   *   }
   * };
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to attach behaviors to.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none is given,
   *   the global {@link drupalSettings} object is used.
   *
   * @see Drupal~behaviorAttach
   * @see Drupal.detachBehaviors
   *
   * @throws {Drupal~DrupalBehaviorError}
   */
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    // Execute all of them.
    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        }
        catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  // Attach all behaviors.
  domready(function () { Drupal.attachBehaviors(document, drupalSettings); });

  /**
   * Detaches registered behaviors from a page element.
   *
   * Developers implementing Ajax in their solutions should call this function
   * before page content is about to be removed, feeding in an element to be
   * processed, in order to allow special behaviors to detach from the content.
   *
   * Such implementations should use `.findOnce()` and `.removeOnce()` to find
   * elements with their corresponding `Drupal.behaviors.behaviorName.attach`
   * implementation, i.e. `.removeOnce('behaviorName')`, to ensure the behavior
   * is detached only from previously processed elements.
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none given,
   *   the global {@link drupalSettings} object is used.
   * @param {string} [trigger='unload']
   *   A string containing what's causing the behaviors to be detached. The
   *   possible triggers are:
   *   - `'unload'`: The context element is being removed from the DOM.
   *   - `'move'`: The element is about to be moved within the DOM (for example,
   *     during a tabledrag row swap). After the move is completed,
   *     {@link Drupal.attachBehaviors} is called, so that the behavior can undo
   *     whatever it did in response to the move. Many behaviors won't need to
   *     do anything simply in response to the element being moved, but because
   *     IFRAME elements reload their "src" when being moved within the DOM,
   *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
   *     take some action.
   *   - `'serialize'`: When an Ajax form is submitted, this is called with the
   *     form as the context. This provides every behavior within the form an
   *     opportunity to ensure that the field elements have correct content
   *     in them before the form is serialized. The canonical use-case is so
   *     that WYSIWYG editors can update the hidden textarea to which they are
   *     bound.
   *
   * @throws {Drupal~DrupalBehaviorError}
   *
   * @see Drupal~behaviorDetach
   * @see Drupal.attachBehaviors
   */
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    // Execute all of them.
    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].detach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].detach(context, settings, trigger);
        }
        catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  /**
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.checkPlain = function (str) {
    str = str.toString()
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return str;
  };

  /**
   * Replaces placeholders with sanitized values in a string.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   An object of replacements pairs to make. Incidences of any key in this
   *   array are replaced with the corresponding value. Based on the first
   *   character of the key, the value is escaped and/or themed:
   *    - `'!variable'`: inserted as is.
   *    - `'@variable'`: escape plain text to HTML ({@link Drupal.checkPlain}).
   *    - `'%variable'`: escape text and theme as a placeholder for user-
   *      submitted content ({@link Drupal.checkPlain} +
   *      `{@link Drupal.theme}('placeholder')`).
   *
   * @return {string}
   *   The formatted string.
   *
   * @see Drupal.t
   */
  Drupal.formatString = function (str, args) {
    // Keep args intact.
    var processedArgs = {};
    // Transform arguments before inserting them.
    for (var key in args) {
      if (args.hasOwnProperty(key)) {
        switch (key.charAt(0)) {
          // Escaped only.
          case '@':
            processedArgs[key] = Drupal.checkPlain(args[key]);
            break;

          // Pass-through.
          case '!':
            processedArgs[key] = args[key];
            break;

          // Escaped and placeholder.
          default:
            processedArgs[key] = Drupal.theme('placeholder', args[key]);
            break;
        }
      }
    }

    return Drupal.stringReplace(str, processedArgs, null);
  };

  /**
   * Replaces substring.
   *
   * The longest keys will be tried first. Once a substring has been replaced,
   * its new value will not be searched again.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   Key-value pairs.
   * @param {Array|null} keys
   *   Array of keys from `args`. Internal use only.
   *
   * @return {string}
   *   The replaced string.
   */
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    // If the array of keys is not passed then collect the keys from the args.
    if (!Array.isArray(keys)) {
      keys = [];
      for (var k in args) {
        if (args.hasOwnProperty(k)) {
          keys.push(k);
        }
      }

      // Order the keys by the character length. The shortest one is the first.
      keys.sort(function (a, b) { return a.length - b.length; });
    }

    if (keys.length === 0) {
      return str;
    }

    // Take next longest one from the end.
    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        // Process each fragment with a copy of remaining keys.
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  /**
   * Translates strings to the page language, or a given language.
   *
   * See the documentation of the server-side t() function for further details.
   *
   * @param {string} str
   *   A string containing the English text to translate.
   * @param {Object.<string, string>} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   * @param {object} [options]
   *   Additional options for translation.
   * @param {string} [options.context='']
   *   The context the source string belongs to.
   *
   * @return {string}
   *   The formatted string.
   *   The translated string.
   */
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    // Fetch the localized version of the string.
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  /**
   * Returns the URL to a Drupal page.
   *
   * @param {string} path
   *   Drupal path to transform to URL.
   *
   * @return {string}
   *   The full URL.
   */
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  /**
   * Returns the passed in URL as an absolute URL.
   *
   * @param {string} url
   *   The URL string to be normalized to an absolute URL.
   *
   * @return {string}
   *   The normalized, absolute URL.
   *
   * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
   * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
   */
  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
    // strings may throw an exception.
    try {
      url = decodeURIComponent(url);
    }
    catch (e) {
      // Empty.
    }

    urlParsingNode.setAttribute('href', url);

    // IE <= 7 normalizes the URL when assigned to the anchor node similar to
    // the other browsers.
    return urlParsingNode.cloneNode(false).href;
  };

  /**
   * Returns true if the URL is within Drupal's base path.
   *
   * @param {string} url
   *   The URL string to be tested.
   *
   * @return {bool}
   *   `true` if local.
   *
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
   */
  Drupal.url.isLocal = function (url) {
    // Always use browser-derived absolute URLs in the comparison, to avoid
    // attempts to break out of the base path using directory traversal.
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = location.protocol;

    // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
    // as local as well.
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + location.host + drupalSettings.path.baseUrl.slice(0, -1);

    // Decoding non-UTF-8 strings may throw an exception.
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    }
    catch (e) {
      // Empty.
    }
    try {
      baseUrl = decodeURIComponent(baseUrl);
    }
    catch (e) {
      // Empty.
    }

    // The given URL matches the site's base URL, or has a path under the site's
    // base URL.
    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  /**
   * Formats a string containing a count of items.
   *
   * This function ensures that the string is pluralized correctly. Since
   * {@link Drupal.t} is called by this function, make sure not to pass
   * already-localized strings to it.
   *
   * See the documentation of the server-side
   * \Drupal\Core\StringTranslation\TranslationInterface::formatPlural()
   * function for more details.
   *
   * @param {number} count
   *   The item count to display.
   * @param {string} singular
   *   The string for the singular case. Please make sure it is clear this is
   *   singular, to ease translation (e.g. use "1 new comment" instead of "1
   *   new"). Do not use @count in the singular string.
   * @param {string} plural
   *   The string for the plural case. Please make sure it is clear this is
   *   plural, to ease translation. Use @count in place of the item count, as in
   *   "@count new comments".
   * @param {object} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   *   Note that you do not need to include @count in this array.
   *   This replacement is done automatically for the plural case.
   * @param {object} [options]
   *   The options to pass to the {@link Drupal.t} function.
   *
   * @return {string}
   *   A translated string.
   */
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    // Determine the index of the plural form.
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula['default'];
    }
    else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  /**
   * Encodes a Drupal path for use in a URL.
   *
   * For aesthetic reasons slashes are not escaped.
   *
   * @param {string} item
   *   Unencoded path.
   *
   * @return {string}
   *   The encoded path.
   */
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  /**
   * Generates the themed representation of a Drupal object.
   *
   * All requests for themed output must go through this function. It examines
   * the request and routes it to the appropriate theme function. If the current
   * theme does not provide an override function, the generic theme function is
   * called.
   *
   * @example
   * <caption>To retrieve the HTML for text that should be emphasized and
   * displayed as a placeholder inside a sentence.</caption>
   * Drupal.theme('placeholder', text);
   *
   * @namespace
   *
   * @param {function} func
   *   The name of the theme function to call.
   * @param {...args}
   *   Additional arguments to pass along to the theme function.
   *
   * @return {string|object|HTMLElement|jQuery}
   *   Any data the theme function returns. This could be a plain HTML string,
   *   but also a complex object.
   */
  Drupal.theme = function (func) {
    var args = Array.prototype.slice.apply(arguments, [1]);
    if (func in Drupal.theme) {
      return Drupal.theme[func].apply(this, args);
    }
  };

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param {string} str
   *   The text to format (plain-text).
   *
   * @return {string}
   *   The formatted text (html).
   */
  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };

})(domready, Drupal, window.drupalSettings, window.drupalTranslations);
;
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,r){var i,s,o,u=t.nodeName.toLowerCase();return"area"===u?(i=t.parentNode,s=i.name,!t.href||!s||i.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap='#"+s+"']")[0],!!o&&n(o))):(/^(input|select|textarea|button|object)$/.test(u)?!t.disabled:"a"===u?t.href||r:r)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var n=this.css("position"),r=n==="absolute",i=t?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var t=e(this);return r&&t.css("position")==="static"?!1:i.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return n==="fixed"||!s.length?e(this[0].ownerDocument||document):s},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(n){return t(n,!isNaN(e.attr(n,"tabindex")))},tabbable:function(n){var r=e.attr(n,"tabindex"),i=isNaN(r);return(i||r>=0)&&t(n,!i)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,n){function o(t,n,i,s){return e.each(r,function(){n-=parseFloat(e.css(t,"padding"+this))||0,i&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var r=n==="Width"?["Left","Right"]:["Top","Bottom"],i=n.toLowerCase(),s={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(t){return t===undefined?s["inner"+n].call(this):this.each(function(){e(this).css(i,o(this,t)+"px")})},e.fn["outer"+n]=function(t,r){return typeof t!="number"?s["outer"+n].call(this,t):this.each(function(){e(this).css(i,o(this,t,!0,r)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(n,r){return typeof n=="number"?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),r&&r.call(t)},n)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(t!==undefined)return this.css("zIndex",t);if(this.length){var n=e(this[0]),r,i;while(n.length&&n[0]!==document){r=n.css("position");if(r==="absolute"||r==="relative"||r==="fixed"){i=parseInt(n.css("zIndex"),10);if(!isNaN(i)&&i!==0)return i}n=n.parent()}}return 0}}),e.ui.plugin={add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n,r){var i,s=e.plugins[t];if(!s)return;if(!r&&(!e.element[0].parentNode||e.element[0].parentNode.nodeType===11))return;for(i=0;i<s.length;i++)e.options[s[i][0]]&&s[i][1].apply(e.element,n)}}});;
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){var t=0,n=Array.prototype.slice;return e.cleanData=function(t){return function(n){var r,i,s;for(s=0;(i=n[s])!=null;s++)try{r=e._data(i,"events"),r&&r.remove&&e(i).triggerHandler("remove")}catch(o){}t(n)}}(e.cleanData),e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];return t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix||t:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){var r=n.call(arguments,1),i=0,s=r.length,o,u;for(;i<s;i++)for(o in r[i])u=r[i][o],r[i].hasOwnProperty(o)&&u!==undefined&&(e.isPlainObject(u)?t[o]=e.isPlainObject(t[o])?e.widget.extend({},t[o],u):e.widget.extend({},u):t[o]=u);return t},e.widget.bridge=function(t,r){var i=r.prototype.widgetFullName||t;e.fn[t]=function(s){var o=typeof s=="string",u=n.call(arguments,1),a=this;return o?this.each(function(){var n,r=e.data(this,i);if(s==="instance")return a=r,!1;if(!r)return e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+s+"'");if(!e.isFunction(r[s])||s.charAt(0)==="_")return e.error("no such method '"+s+"' for "+t+" widget instance");n=r[s].apply(r,u);if(n!==r&&n!==undefined)return a=n&&n.jquery?a.pushStack(n.get()):n,!1}):(u.length&&(s=e.widget.extend.apply(null,[s].concat(u))),this.each(function(){var t=e.data(this,i);t?(t.option(s||{}),t._init&&t._init()):e.data(this,i,new r(s,this))})),a}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(n,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var r=t,i,s,o;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof t=="string"){r={},i=t.split("."),t=i.shift();if(i.length){s=r[t]=e.widget.extend({},this.options[t]);for(o=0;o<i.length-1;o++)s[i[o]]=s[i[o]]||{},s=s[i[o]];t=i.pop();if(arguments.length===1)return s[t]===undefined?null:s[t];s[t]=n}else{if(arguments.length===1)return this.options[t]===undefined?null:this.options[t];r[t]=n}}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^([\w:-]*)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(n).undelegate(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.widget});;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
!function(t,e){"use strict";function a(e){if(!r){r=!0,c=t("body"),t.extend(p,e||{}),c.find("a").not("[data-scout-event]").each(o),c.on("click.scout","*[data-scout-event]",n);for(var a in t.scout.extensions)t.scout.extensions.hasOwnProperty(a)&&t.scout.extensions[a](p.extensions[a]||null)}}function n(a){if("function"==typeof e.ga){a.preventDefault();var n=t(this),o=n.attr("href"),c=n.data("scout-event").split(",");for(var r in c)c.hasOwnProperty(r)&&(c[r]=t.trim(c[r]));i(c[0],c[1],c[2]||o,c[3],c[4],n)}}function o(){var e,a=t(this),n="undefined"!=typeof a[0].href?a[0].href:"",o=document.domain.split(".").reverse(),i=null!==n.match(o[1]+"."+o[0]);if(n.match(/^mailto\:/i))e="Email, Click, "+n.replace(/^mailto\:/i,"");else if(n.match(/^tel\:/i))e="Telephone, Click, "+n.replace(/^tel\:/i,"");else if(n.match(p.filetypes)){var c=/[.]/.exec(n)?/[^.]+$/.exec(n):void 0;e="File, Download:"+c[0]+", "+n.replace(/ /g,"-")}else i||(e="ExternalLink, Click, "+n);e&&a.attr("data-scout-event",e)}function i(t,a,n,o,i,c){if("function"==typeof e.ga){var r={hitType:"event",location:e.location,title:e.document.title};if(t&&(r.eventCategory=t),a&&(r.eventAction=a),n&&(r.eventLabel=n),o&&(r.eventValue=o),i&&(r.nonInteraction=i),"undefined"!=typeof c&&!c.attr("data-scout-stop")){var p="undefined"!=typeof c[0].href?c[0].href:"",s=!p.match(/^mailto\:/i)&&!p.match(/^tel\:/i)&&p.indexOf(":")<0?e.location.protocol+"//"+e.location.hostname+"/"+p:p;""!==p&&(c.attr("target")?e.open(s,c.attr("target")):r.hitCallback=function(){document.location=s})}e.ga("send",r)}}var c,r=!1,p={delay:100,extensions:{},filetypes:/\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i};t.scout=function(){arguments.length&&"object"!=typeof arguments[0]?i.apply(this,arguments):a.apply(this,arguments)},t.scout.extensions={}}(jQuery,window),function(t,e){"use strict";function a(){return"undefined"==typeof e.drupalSettings||0===e.drupalSettings.user.uid}Drupal.behaviors.analyticsEvents={attach:function(n){a()&&(t.scout(),t("#contact-message-feedback-form",n).each(function(){var a=t("input.button--primary",this);if("undefined"!=typeof Drupal.ajax["#"+a.prop("id")]){var n=Drupal.ajax["#"+a.prop("id")].success;Drupal.ajax["#"+a.prop("id")].success=function(){n.apply(this,arguments),e.ga&&e.ga("send","event","Contact Form","Submitted")}}}))}}}(jQuery,window),function(t,e){"use strict";function a(t){var a=window.location.origin+e.path.baseUrl+e.path.pathPrefix;return 0===t.indexOf(a)}Drupal.behaviors.backLinks={attach:function(e){t("body.path-frontpage",e).once("backlinks",function(){t.removeCookie("backPath")}),t("body.path-frontpage .pane",e).on("click","a",function(){var e=t(this);if(a(e.prop("href"))){var n=e.parents(".pane");t.cookie("backPath",n.prop("id").replace("pane-",""))}}),t("body.path-frontpage a[data-back-pane]",e).click(function(){var e=t(this).data("back-pane");t.cookie("backPath",e)}),t("#back-home",e).each(function(){t.cookie("backPath")&&t(this).prop("href",t(this).prop("href")+"#pane-"+t.cookie("backPath"))})}}}(jQuery,drupalSettings);;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
/**
 * @file
 * Progress bar.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Theme function for the progress bar.
   *
   * @param {string} id
   *   The id for the progress bar.
   *
   * @return {string}
   *   The HTML for the progress bar.
   */
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' +
      '<div class="progress__label">&nbsp;</div>' +
      '<div class="progress__track"><div class="progress__bar"></div></div>' +
      '<div class="progress__percentage"></div>' +
      '<div class="progress__description">&nbsp;</div>' +
      '</div>';
  };

  /**
   * A progressbar object. Initialized with the given id. Must be inserted into
   * the DOM afterwards through progressBar.element.
   *
   * Method is the function which will perform the HTTP request to get the
   * progress bar state. Either "GET" or "POST".
   *
   * @example
   * pb = new Drupal.ProgressBar('myProgressBar');
   * some_element.appendChild(pb.element);
   *
   * @constructor
   *
   * @param {string} id
   *   The id for the progressbar.
   * @param {function} updateCallback
   *   Callback to run on update.
   * @param {string} method
   *   HTTP method to use.
   * @param {function} errorCallback
   *   Callback to call on error.
   */
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    // The WAI-ARIA setting aria-live="polite" will announce changes after
    // users
    // have completed their current activity and not interrupt the screen
    // reader.
    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, /** @lends Drupal.ProgressBar# */{

    /**
     * Set the percentage and status message for the progressbar.
     *
     * @param {number} percentage
     *   The progress percentage.
     * @param {string} message
     *   The message to show the user.
     * @param {string} label
     *   The text for the progressbar label.
     */
    setProgress: function (percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },

    /**
     * Start monitoring progress via Ajax.
     *
     * @param {string} uri
     *   The URI to use for monitoring.
     * @param {number} delay
     *   The delay for calling the monitoring URI.
     */
    startMonitoring: function (uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },

    /**
     * Stop monitoring progress via Ajax.
     */
    stopMonitoring: function () {
      clearTimeout(this.timer);
      // This allows monitoring to be stopped from within the callback.
      this.uri = null;
    },

    /**
     * Request progress data from server.
     */
    sendPing: function () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;
        // When doing a post request, you need non-null data. Otherwise a
        // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        }
        else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function (progress) {
            // Display errors.
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }
            // Update display.
            pb.setProgress(progress.percentage, progress.message, progress.label);
            // Schedule next timer.
            pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
          },
          error: function (xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },

    /**
     * Display errors on the page.
     *
     * @param {string} string
     *   The error message to show the user.
     */
    displayError: function (string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });

})(jQuery, Drupal);
;
/**
 * @file
 * Provides Ajax page updating via jQuery $.ajax.
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with `#ajax['url']` and
 * `#ajax['wrapper']` properties. If set, this file will automatically be
 * included to provide Ajax capabilities.
 */

(function ($, window, Drupal, drupalSettings) {

  'use strict';

  /**
   * Attaches the Ajax behavior to each Ajax form element.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Initialize all {@link Drupal.Ajax} objects declared in
   *   `drupalSettings.ajax` or initialize {@link Drupal.Ajax} objects from
   *   DOM elements having the `use-ajax-submit` or `use-ajax` css class.
   * @prop {Drupal~behaviorDetach} detach
   *   During `unload` remove all {@link Drupal.Ajax} objects related to
   *   the removed content.
   */
  Drupal.behaviors.AJAX = {
    attach: function (context, settings) {

      function loadAjaxBehavior(base) {
        var element_settings = settings.ajax[base];
        if (typeof element_settings.selector === 'undefined') {
          element_settings.selector = '#' + base;
        }
        $(element_settings.selector).once('drupal-ajax').each(function () {
          element_settings.element = this;
          element_settings.base = base;
          Drupal.ajax(element_settings);
        });
      }

      // Load all Ajax behaviors specified in the settings.
      for (var base in settings.ajax) {
        if (settings.ajax.hasOwnProperty(base)) {
          loadAjaxBehavior(base);
        }
      }

      // Bind Ajax behaviors to all items showing the class.
      $('.use-ajax').once('ajax').each(function () {
        var element_settings = {};
        // Clicked links look better with the throbber than the progress bar.
        element_settings.progress = {type: 'throbber'};

        // For anchor tags, these will go to the target of the anchor rather
        // than the usual location.
        var href = $(this).attr('href');
        if (href) {
          element_settings.url = href;
          element_settings.event = 'click';
        }
        element_settings.dialogType = $(this).data('dialog-type');
        element_settings.dialog = $(this).data('dialog-options');
        element_settings.base = $(this).attr('id');
        element_settings.element = this;
        Drupal.ajax(element_settings);
      });

      // This class means to submit the form to the action using Ajax.
      $('.use-ajax-submit').once('ajax').each(function () {
        var element_settings = {};

        // Ajax submits specified in this manner automatically submit to the
        // normal form action.
        element_settings.url = $(this.form).attr('action');
        // Form submit button clicks need to tell the form what was clicked so
        // it gets passed in the POST request.
        element_settings.setClick = true;
        // Form buttons use the 'click' event rather than mousedown.
        element_settings.event = 'click';
        // Clicked form buttons look better with the throbber than the progress
        // bar.
        element_settings.progress = {type: 'throbber'};
        element_settings.base = $(this).attr('id');
        element_settings.element = this;

        Drupal.ajax(element_settings);
      });
    },

    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          // Set this to null and allow garbage collection to reclaim
          // the memory.
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  /**
   * Extends Error to provide handling for Errors in Ajax.
   *
   * @constructor
   *
   * @augments Error
   *
   * @param {XMLHttpRequest} xmlhttp
   *   XMLHttpRequest object used for the failed request.
   * @param {string} uri
   *   The URI where the error occurred.
   * @param {string} customMessage
   *   The custom message.
   */
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {

    var statusCode;
    var statusText;
    var pathText;
    var responseText;
    var readyStateText;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', {'!status': xmlhttp.status});
    }
    else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    pathText = '\n' + Drupal.t('Path: !uri', {'!uri': uri});
    statusText = '';
    // In some cases, when statusCode === 0, xmlhttp.statusText may not be
    // defined. Unfortunately, testing for it with typeof, etc, doesn't seem to
    // catch that and the test causes an exception. So we need to catch the
    // exception here.
    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {'!statusText': $.trim(xmlhttp.statusText)});
    }
    catch (e) {
      // Empty.
    }

    responseText = '';
    // Again, we don't have a way to know for sure whether accessing
    // xmlhttp.responseText is going to throw an exception. So we'll catch it.
    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {'!responseText': $.trim(xmlhttp.responseText)});
    }
    catch (e) {
      // Empty.
    }

    // Make the responseText more readable by stripping HTML tags and newlines.
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    // We don't need readyState except for status == 0.
    readyStateText = xmlhttp.status === 0 ? ('\n' + Drupal.t('ReadyState: !readyState', {'!readyState': xmlhttp.readyState})) : '';

    customMessage = customMessage ? ('\n' + Drupal.t('CustomMessage: !customMessage', {'!customMessage': customMessage})) : '';

    /**
     * Formatted and translated error message.
     *
     * @type {string}
     */
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    /**
     * Used by some browsers to display a more accurate stack trace.
     *
     * @type {string}
     */
    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  /**
   * Provides Ajax page updating via jQuery $.ajax.
   *
   * This function is designed to improve developer experience by wrapping the
   * initialization of {@link Drupal.Ajax} objects and storing all created
   * objects in the {@link Drupal.ajax.instances} array.
   *
   * @example
   * Drupal.behaviors.myCustomAJAXStuff = {
   *   attach: function (context, settings) {
   *
   *     var ajaxSettings = {
   *       url: 'my/url/path',
   *       // If the old version of Drupal.ajax() needs to be used those
   *       // properties can be added
   *       base: 'myBase',
   *       element: $(context).find('.someElement')
   *     };
   *
   *     var myAjaxObject = Drupal.ajax(ajaxSettings);
   *
   *     // Declare a new Ajax command specifically for this Ajax object.
   *     myAjaxObject.commands.insert = function (ajax, response, status) {
   *       $('#my-wrapper').append(response.data);
   *       alert('New content was appended to #my-wrapper');
   *     };
   *
   *     // This command will remove this Ajax object from the page.
   *     myAjaxObject.commands.destroyObject = function (ajax, response, status) {
   *       Drupal.ajax.instances[this.instanceIndex] = null;
   *     };
   *
   *     // Programmatically trigger the Ajax request.
   *     myAjaxObject.execute();
   *   }
   * };
   *
   * @param {object} settings
   *   The settings object passed to {@link Drupal.Ajax} constructor.
   * @param {string} [settings.base]
   *   Base is passed to {@link Drupal.Ajax} constructor as the 'base'
   *   parameter.
   * @param {HTMLElement} [settings.element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   *
   * @return {Drupal.Ajax}
   *   The created Ajax object.
   *
   * @see Drupal.AjaxCommands
   */
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }
    // Map those config keys to variables for the old Drupal.ajax function.
    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    // By default do not display progress for ajax calls without an element.
    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  /**
   * Contains all created Ajax objects.
   *
   * @type {Array.<Drupal.Ajax|null>}
   */
  Drupal.ajax.instances = [];

  /**
   * List all objects where the associated element is not in the DOM
   *
   * This method ignores {@link Drupal.Ajax} objects not bound to DOM elements
   * when created with {@link Drupal.ajax}.
   *
   * @return {Array.<Drupal.Ajax>}
   *   The list of expired {@link Drupal.Ajax} objects.
   */
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  /**
   * Settings for an Ajax object.
   *
   * @typedef {object} Drupal.Ajax~element_settings
   *
   * @prop {string} url
   *   Target of the Ajax request.
   * @prop {?string} [event]
   *   Event bound to settings.element which will trigger the Ajax request.
   * @prop {bool} [keypress=true]
   *   Triggers a request on keypress events.
   * @prop {?string} selector
   *   jQuery selector targeting the element to bind events to or used with
   *   {@link Drupal.AjaxCommands}.
   * @prop {string} [effect='none']
   *   Name of the jQuery method to use for displaying new Ajax content.
   * @prop {string|number} [speed='none']
   *   Speed with which to apply the effect.
   * @prop {string} [method]
   *   Name of the jQuery method used to insert new content in the targeted
   *   element.
   * @prop {object} [progress]
   *   Settings for the display of a user-friendly loader.
   * @prop {string} [progress.type='throbber']
   *   Type of progress element, core provides `'bar'`, `'throbber'` and
   *   `'fullscreen'`.
   * @prop {string} [progress.message=Drupal.t('Please wait...')]
   *   Custom message to be used with the bar indicator.
   * @prop {object} [submit]
   *   Extra data to be sent with the Ajax request.
   * @prop {bool} [submit.js=true]
   *   Allows the PHP side to know this comes from an Ajax request.
   * @prop {object} [dialog]
   *   Options for {@link Drupal.dialog}.
   * @prop {string} [dialogType]
   *   One of `'modal'` or `'dialog'`.
   * @prop {string} [prevent]
   *   List of events on which to stop default action and stop propagation.
   */

  /**
   * Ajax constructor.
   *
   * The Ajax request returns an array of commands encoded in JSON, which is
   * then executed to make any changes that are necessary to the page.
   *
   * Drupal uses this file to enhance form elements with `#ajax['url']` and
   * `#ajax['wrapper']` properties. If set, this file will automatically be
   * included to provide Ajax capabilities.
   *
   * @constructor
   *
   * @param {string} [base]
   *   Base parameter of {@link Drupal.Ajax} constructor
   * @param {HTMLElement} [element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   * @param {Drupal.Ajax~element_settings} element_settings
   *   Settings for this Ajax object.
   */
  Drupal.Ajax = function (base, element, element_settings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, element_settings);

    /**
     * @type {Drupal.AjaxCommands}
     */
    this.commands = new Drupal.AjaxCommands();

    /**
     * @type {bool|number}
     */
    this.instanceIndex = false;

    // @todo Remove this after refactoring the PHP code to:
    //   - Call this 'selector'.
    //   - Include the '#' for ID-based selectors.
    //   - Support non-ID-based selectors.
    if (this.wrapper) {

      /**
       * @type {string}
       */
      this.wrapper = '#' + this.wrapper;
    }

    /**
     * @type {HTMLElement}
     */
    this.element = element;

    /**
     * @type {Drupal.Ajax~element_settings}
     */
    this.element_settings = element_settings;

    // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
    // bind Ajax to links as well.
    if (this.element && this.element.form) {

      /**
       * @type {jQuery}
       */
      this.$form = $(this.element.form);
    }

    // If no Ajax callback URL was given, use the link href or form action.
    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      }
      else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
    // the server detect when it needs to degrade gracefully.
    // There are four scenarios to check for:
    // 1. /nojs/
    // 2. /nojs$ - The end of a URL string.
    // 3. /nojs? - Followed by a query (e.g. path/nojs?destination=foobar).
    // 4. /nojs# - Followed by a fragment (e.g.: path/nojs#myfragment).
    var originalUrl = this.url;

    /**
     * Processed Ajax URL.
     *
     * @type {string}
     */
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/g, '/ajax$1');
    // If the 'nojs' version of the URL is trusted, also trust the 'ajax'
    // version.
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    // Set the options for the ajaxSubmit function.
    // The 'this' variable will not persist inside of the options object.
    var ajax = this;

    /**
     * Options for the jQuery.ajax function.
     *
     * @name Drupal.Ajax#options
     *
     * @type {object}
     *
     * @prop {string} url
     *   Ajax URL to be called.
     * @prop {object} data
     *   Ajax payload.
     * @prop {function} beforeSerialize
     *   Implement jQuery beforeSerialize function to call
     *   {@link Drupal.Ajax#beforeSerialize}.
     * @prop {function} beforeSubmit
     *   Implement jQuery beforeSubmit function to call
     *   {@link Drupal.Ajax#beforeSubmit}.
     * @prop {function} beforeSend
     *   Implement jQuery beforeSend function to call
     *   {@link Drupal.Ajax#beforeSend}.
     * @prop {function} success
     *   Implement jQuery success function to call
     *   {@link Drupal.Ajax#success}.
     * @prop {function} complete
     *   Implement jQuery success function to clean up ajax state and trigger an
     *   error if needed.
     * @prop {string} dataType='json'
     *   Type of the response expected.
     * @prop {string} type='POST'
     *   HTTP method to use for the Ajax request.
     */
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function (element_settings, options) {
        return ajax.beforeSerialize(element_settings, options);
      },
      beforeSubmit: function (form_values, element_settings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(form_values, element_settings, options);
      },
      beforeSend: function (xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function (response, status, xmlhttprequest) {
        // Sanity check for browser support (object expected).
        // When using iFrame uploads, responses must be returned as a string.
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        // Prior to invoking the response's commands, verify that they can be
        // trusted by checking for a response header. See
        // \Drupal\Core\EventSubscriber\AjaxResponseSubscriber for details.
        // - Empty responses are harmless so can bypass verification. This
        //   avoids an alert message for server-generated no-op responses that
        //   skip Ajax rendering.
        // - Ajax objects with trusted URLs (e.g., ones defined server-side via
        //   #ajax) can bypass header verification. This is especially useful
        //   for Ajax with multipart forms. Because IFRAME transport is used,
        //   the response headers cannot be accessed for verification.
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function (xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      type: 'POST'
    };

    if (element_settings.dialog) {
      ajax.options.data.dialogOptions = element_settings.dialog;
    }

    // Ensure that we have a valid URL by adding ? when no query parameter is
    // yet available, otherwise append using &.
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    }
    else {
      ajax.options.url += '&';
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=drupal_' + (element_settings.dialogType || 'ajax');

    // Bind the ajaxSubmit function to the element event.
    $(ajax.element).on(element_settings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {'!url': ajax.url}));
      }
      return ajax.eventResponse(this, event);
    });

    // If necessary, enable keyboard submission so that Ajax behaviors
    // can be triggered through keyboard input as well as e.g. a mousedown
    // action.
    if (element_settings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    // If necessary, prevent the browser default action of an additional event.
    // For example, prevent the browser default action of a click, even if the
    // Ajax behavior binds to mousedown.
    if (element_settings.prevent) {
      $(ajax.element).on(element_settings.prevent, false);
    }
  };

  /**
   * URL query attribute to indicate the wrapper used to render a request.
   *
   * The wrapper format determines how the HTML is wrapped, for example in a
   * modal dialog.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  /**
   * Request parameter to indicate that a request is a Drupal Ajax request.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  /**
   * Execute the ajax request.
   *
   * Allows developers to execute an Ajax request manually without specifying
   * an event to respond to.
   *
   * @return {object}
   *   Returns the jQuery.Deferred object underlying the Ajax request. If
   *   pre-serialization fails, the Deferred will be returned in the rejected
   *   state.
   */
  Drupal.Ajax.prototype.execute = function () {
    // Do not perform another ajax command if one is already in progress.
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      // Return the jqXHR so that external code can hook into the Deferred API.
      return $.ajax(this.options);
    }
    catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);
      // For consistency, return a rejected Deferred (i.e., jqXHR's superclass)
      // so that calling code can take appropriate action.
      return $.Deferred().reject();
    }
  };

  /**
   * Handle a key press.
   *
   * The Ajax object will, if instructed, bind to a key press response. This
   * will test to see if the key press is valid to trigger this event and
   * if it is, trigger it for us and prevent other keypresses from triggering.
   * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
   * and 32. RETURN is often used to submit a form when in a textfield, and
   * SPACE is often used to activate an element without submitting.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    // Create a synonym for this to reduce code confusion.
    var ajax = this;

    // Detect enter key and space bar and allow the standard response for them,
    // except for form elements of type 'text', 'tel', 'number' and 'textarea',
    // where the spacebar activation causes inappropriate activation if
    // #ajax['keypress'] is TRUE. On a text-type widget a space should always
    // be a space.
    if (event.which === 13 || (event.which === 32 && element.type !== 'text' &&
      element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number')) {
      event.preventDefault();
      event.stopPropagation();
      $(ajax.element_settings.element).trigger(ajax.element_settings.event);
    }
  };

  /**
   * Handle an event that triggers an Ajax response.
   *
   * When an event that triggers an Ajax response happens, this method will
   * perform the actual Ajax call. It is bound to the event using
   * bind() in the constructor, and it uses the options specified on the
   * Ajax object.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    // Create a synonym for this to reduce code confusion.
    var ajax = this;

    // Do not perform another Ajax command if one is already in progress.
    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        // If setClick is set, we must set this to ensure that the button's
        // value is passed.
        if (ajax.setClick) {
          // Mark the clicked button. 'form.clk' is a special variable for
          // ajaxSubmit that tells the system which element got clicked to
          // trigger the submit. Without it there would be no 'op' or
          // equivalent.
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      }
      else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    }
    catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  /**
   * Handler for the form serialization.
   *
   * Runs before the beforeSend() handler (see below), and unlike that one, runs
   * before field data is collected.
   *
   * @param {object} [element]
   *   Ajax object's `element_settings`.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    // Allow detaching behaviors to update field values before collecting them.
    // This is only needed when field values are added to the POST data, so only
    // when there is a form such that this.$form.ajaxSubmit() is used instead of
    // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
    // isn't called, but don't rely on that: explicitly check this.$form.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    // Inform Drupal that this is an AJAX request.
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    // Allow Drupal to return new JavaScript and CSS files to load without
    // returning the ones already loaded.
    // @see \Drupal\Core\Theme\AjaxBasePageNegotiator
    // @see \Drupal\Core\Asset\LibraryDependencyResolverInterface::getMinimalRepresentativeSubset()
    // @see system_js_settings_alter()
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  /**
   * Modify form values prior to form submission.
   *
   * @param {Array.<object>} form_values
   *   Processed form values.
   * @param {jQuery} element
   *   The form node as a jQuery object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSubmit = function (form_values, element, options) {
    // This function is left empty to make it simple to override for modules
    // that wish to add functionality here.
  };

  /**
   * Prepare the Ajax request before it is sent.
   *
   * @param {XMLHttpRequest} xmlhttprequest
   *   Native Ajax object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    // For forms without file inputs, the jQuery Form plugin serializes the
    // form values, and then calls jQuery's $.ajax() function, which invokes
    // this handler. In this circumstance, options.extraData is never used. For
    // forms with file inputs, the jQuery Form plugin uses the browser's normal
    // form submission mechanism, but captures the response in a hidden IFRAME.
    // In this circumstance, it calls this handler first, and then appends
    // hidden fields to the form to submit the values in options.extraData.
    // There is no simple way to know which submission mechanism will be used,
    // so we add to extraData regardless, and allow it to be ignored in the
    // former case.
    if (this.$form) {
      options.extraData = options.extraData || {};

      // Let the server know when the IFRAME submission mechanism is used. The
      // server can use this information to wrap the JSON response in a
      // TEXTAREA, as per http://jquery.malsup.com/form/#file-upload.
      options.extraData.ajax_iframe_upload = '1';

      // The triggering element is about to be disabled (see below), but if it
      // contains a value (e.g., a checkbox, textfield, select, etc.), ensure
      // that value is included in the submission. As per above, submissions
      // that use $.ajax() are already serialized prior to the element being
      // disabled, so this is only needed for IFRAME submissions.
      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    // Disable the element that received the change to prevent user interface
    // interaction while the Ajax request is in progress. ajax.ajaxing prevents
    // the element from triggering a new request, but does not prevent the user
    // from changing its value.
    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    // Insert progress indicator.
    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  /**
   * Sets the progress bar progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the throbber progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      this.progress.element.find('.throbber').after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the fullscreen progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
    $('body').after(this.progress.element);
  };

  /**
   * Handler for the form redirection completion.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   *   Drupal Ajax response.
   * @param {number} status
   *   XMLHttpRequest status.
   */
  Drupal.Ajax.prototype.success = function (response, status) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    // Save element's ancestors tree so if the element is removed from the dom
    // we can try to refocus one of its parents. Using addBack reverse the
    // result array, meaning that index 0 is the highest parent in the hierarchy
    // in this situation it is usually a <form> element.
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    // Track if any command is altering the focus so we can avoid changing the
    // focus set by the Ajax command.
    var focusChanged = false;
    for (var i in response) {
      if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
        this.commands[response[i].command](this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    }

    // If the focus hasn't be changed by the ajax commands, try to refocus the
    // triggering element or one of its parents if that element does not exist
    // anymore.
    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n > 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    // Reattach behaviors, if they were detached in beforeSerialize(). The
    // attachBehaviors() called on the new content from processing the response
    // commands is not sufficient, because behaviors from the entire form need
    // to be reattached.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    // Remove any response-specific settings so they don't get used on the next
    // call by mistake.
    this.settings = null;
  };

  /**
   * Build an effect object to apply an effect when adding new HTML.
   *
   * @param {object} response
   *   Drupal Ajax response.
   * @param {string} [response.effect]
   *   Override the default value of {@link Drupal.Ajax#element_settings}.
   * @param {string|number} [response.speed]
   *   Override the default value of {@link Drupal.Ajax#element_settings}.
   *
   * @return {object}
   *   Returns an object with `showEffect`, `hideEffect` and `showSpeed`
   *   properties.
   */
  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    }
    else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    }
    else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  /**
   * Handler for the form redirection error.
   *
   * @param {object} xmlhttprequest
   *   Native XMLHttpRequest object.
   * @param {string} uri
   *   Ajax Request URI.
   * @param {string} [customMessage]
   *   Extra message to print with the Ajax error.
   */
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    // Undo hide.
    $(this.wrapper).show();
    // Re-enable the element.
    $(this.element).prop('disabled', false);
    // Reattach behaviors, if they were detached in beforeSerialize().
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  /**
   * @typedef {object} Drupal.AjaxCommands~commandDefinition
   *
   * @prop {string} command
   * @prop {string} [method]
   * @prop {string} [selector]
   * @prop {string} [data]
   * @prop {object} [settings]
   * @prop {bool} [asterisk]
   * @prop {string} [text]
   * @prop {string} [title]
   * @prop {string} [url]
   * @prop {object} [argument]
   * @prop {string} [name]
   * @prop {string} [value]
   * @prop {string} [old]
   * @prop {string} [new]
   * @prop {bool} [merge]
   * @prop {Array} [args]
   *
   * @see Drupal.AjaxCommands
   */

  /**
   * Provide a series of commands that the client will perform.
   *
   * @constructor
   */
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {

    /**
     * Command to insert new content into the DOM.
     *
     * @param {Drupal.Ajax} ajax
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   The data to use with the jQuery method.
     * @param {string} [response.method]
     *   The jQuery DOM manipulation method to be used.
     * @param {string} [response.selector]
     *   A optional jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    insert: function (ajax, response, status) {
      // Get information from the response. If it is not there, default to
      // our presets.
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings;

      // We don't know what response.data contains: it might be a string of text
      // without HTML, so don't rely on jQuery correctly interpreting
      // $(response.data) as new HTML rather than a CSS selector. Also, if
      // response.data contains top-level text nodes, they get lost with either
      // $(response.data) or $('<div></div>').replaceWith(response.data).
      var $new_content_wrapped = $('<div></div>').html(response.data);
      var $new_content = $new_content_wrapped.contents();

      // For legacy reasons, the effects processing code assumes that
      // $new_content consists of a single top-level element. Also, it has not
      // been sufficiently tested whether attachBehaviors() can be successfully
      // called with a context object that includes top-level text nodes.
      // However, to give developers full control of the HTML appearing in the
      // page, and to enable Ajax content to be inserted in places where <div>
      // elements are not allowed (e.g., within <table>, <tr>, and <span>
      // parents), we check if the new content satisfies the requirement
      // of a single top-level element, and only use the container <div> created
      // above when it doesn't. For more information, please see
      // https://www.drupal.org/node/736066.
      if ($new_content.length !== 1 || $new_content.get(0).nodeType !== 1) {
        $new_content = $new_content_wrapped;
      }

      // If removing content from the wrapper, detach behaviors first.
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          settings = response.settings || ajax.settings || drupalSettings;
          Drupal.detachBehaviors($wrapper.get(0), settings);
      }

      // Add the new content to the page.
      $wrapper[method]($new_content);

      // Immediately hide the new content if we're using any effects.
      if (effect.showEffect !== 'show') {
        $new_content.hide();
      }

      // Determine which effect to use and what content will receive the
      // effect, then show the new content.
      if ($new_content.find('.ajax-new-content').length > 0) {
        $new_content.find('.ajax-new-content').hide();
        $new_content.show();
        $new_content.find('.ajax-new-content')[effect.showEffect](effect.showSpeed);
      }
      else if (effect.showEffect !== 'show') {
        $new_content[effect.showEffect](effect.showSpeed);
      }

      // Attach all JavaScript behaviors to the new content, if it was
      // successfully added to the page, this if statement allows
      // `#ajax['wrapper']` to be optional.
      if ($new_content.parents('html').length > 0) {
        // Apply any settings from the returned JSON if available.
        settings = response.settings || ajax.settings || drupalSettings;
        Drupal.attachBehaviors($new_content.get(0), settings);
      }
    },

    /**
     * Command to remove a chunk from the page.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    remove: function (ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      })
        .remove();
    },

    /**
     * Command to mark a chunk changed.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response object from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {bool} [response.asterisk]
     *   An optional CSS selector. If specified, an asterisk will be
     *   appended to the HTML inside the provided selector.
     * @param {number} [status]
     *   The request status.
     */
    changed: function (ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },

    /**
     * Command to provide an alert.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response from the Ajax request.
     * @param {string} response.text
     *   The text that will be displayed in an alert dialog.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    alert: function (ajax, response, status) {
      window.alert(response.text, response.title);
    },

    /**
     * Command to set the window.location, redirecting the browser.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.url
     *   The URL to redirect to.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    redirect: function (ajax, response, status) {
      window.location = response.url;
    },

    /**
     * Command to provide the jQuery css() function.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} response.argument
     *   An array of key/value pairs to set in the CSS for the selector.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    css: function (ajax, response, status) {
      $(response.selector).css(response.argument);
    },

    /**
     * Command to set the settings used for other commands in this response.
     *
     * This method will also remove expired `drupalSettings.ajax` settings.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {bool} response.merge
     *   Determines whether the additional settings should be merged to the
     *   global settings.
     * @param {object} response.settings
     *   Contains additional settings to add to the global settings.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    settings: function (ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      // Clean up drupalSettings.ajax.
      Drupal.ajax.expired().forEach(function (instance) {
        // If the Ajax object has been created through drupalSettings.ajax
        // it will have a selector. When there is no selector the object
        // has been initialized with a special class name picked up by the
        // Ajax behavior.
        if (instance.selector) {
          var selector = instance.selector.replace('#', '');
          if (ajaxSettings && selector in ajaxSettings) {
            delete ajaxSettings[selector];
          }
        }
      });

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      }
      else {
        ajax.settings = response.settings;
      }
    },

    /**
     * Command to attach data using jQuery's data API.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.name
     *   The name or key (in the key value pair) of the data attached to this
     *   selector.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {string|object} response.value
     *   The value of to be attached.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    data: function (ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },

    /**
     * Command to apply a jQuery method.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {Array} response.args
     *   An array of arguments to the jQuery method, if any.
     * @param {string} response.method
     *   The jQuery method to invoke.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    invoke: function (ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, response.args);
    },

    /**
     * Command to restripe a table.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    restripe: function (ajax, response, status) {
      // :even and :odd are reversed because jQuery counts from 0 and
      // we count from 1, so we're out of sync.
      // Match immediate children of the parent element to allow nesting.
      $(response.selector).find('> tbody > tr:visible, > tr:visible')
        .removeClass('odd even')
        .filter(':even').addClass('odd').end()
        .filter(':odd').addClass('even');
    },

    /**
     * Command to update a form's build ID.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.old
     *   The old form build ID.
     * @param {string} response.new
     *   The new form build ID.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    update_build_id: function (ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },

    /**
     * Command to add css.
     *
     * Uses the proprietary addImport method if available as browsers which
     * support that method ignore @import statements in dynamically added
     * stylesheets.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   A string that contains the styles to be added.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    add_css: function (ajax, response, status) {
      // Add the styles in the normal way.
      $('head').prepend(response.data);
      // Add imports in the styles using the addImport method if available.
      var match;
      var importMatch = /^@import url\("(.*)"\);$/igm;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    }
  };

})(jQuery, window, Drupal, drupalSettings);
;
/**
 * @file
 * Adapted from underscore.js with the addition Drupal namespace.
 */

/**
 * Limits the invocations of a function in a given time frame.
 *
 * The debounce function wrapper should be used sparingly. One clear use case
 * is limiting the invocation of a callback attached to the window resize event.
 *
 * Before using the debounce function wrapper, consider first whether the
 * callback could be attached to an event that fires less frequently or if the
 * function can be written in such a way that it is only invoked under specific
 * conditions.
 *
 * @param {function} func
 *   The function to be invoked.
 * @param {number} wait
 *   The time period within which the callback function should only be
 *   invoked once. For example if the wait period is 250ms, then the callback
 *   will only be called at most 4 times per second.
 * @param {bool} immediate
 *   Whether we wait at the beginning or end to execute the function.
 *
 * @return {function}
 *   The debounced function.
 */
Drupal.debounce = function (func, wait, immediate) {

  'use strict';

  var timeout;
  var result;
  return function () {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};
;
/**
 * @file
 * Manages elements that can offset the size of the viewport.
 *
 * Measures and reports viewport offset dimensions from elements like the
 * toolbar that can potentially displace the positioning of other elements.
 */

/**
 * @typedef {object} Drupal~displaceOffset
 *
 * @prop {number} top
 * @prop {number} left
 * @prop {number} right
 * @prop {number} bottom
 */

/**
 * Triggers when layout of the page changes.
 *
 * This is used to position fixed element on the page during page resize and
 * Toolbar toggling.
 *
 * @event drupalViewportOffsetChange
 */

(function ($, Drupal, debounce) {

  'use strict';

  /**
   * @name Drupal.displace.offsets
   *
   * @type {Drupal~displaceOffset}
   */
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  /**
   * Registers a resize handler on the window.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.drupalDisplace = {
    attach: function () {
      // Mark this behavior as processed on the first pass.
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  /**
   * Informs listeners of the current offset dimensions.
   *
   * @function Drupal.displace
   *
   * @prop {Drupal~displaceOffset} offsets
   *
   * @param {bool} [broadcast]
   *   When true or undefined, causes the recalculated offsets values to be
   *   broadcast to listeners.
   *
   * @return {Drupal~displaceOffset}
   *   An object whose keys are the for sides an element -- top, right, bottom
   *   and left. The value of each key is the viewport displacement distance for
   *   that edge.
   *
   * @fires event:drupalViewportOffsetChange
   */
  function displace(broadcast) {
    offsets = Drupal.displace.offsets = calculateOffsets();
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  /**
   * Determines the viewport offsets.
   *
   * @return {Drupal~displaceOffset}
   *   An object whose keys are the for sides an element -- top, right, bottom
   *   and left. The value of each key is the viewport displacement distance for
   *   that edge.
   */
  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  /**
   * Gets a specific edge's offset.
   *
   * Any element with the attribute data-offset-{edge} e.g. data-offset-top will
   * be considered in the viewport offset calculations. If the attribute has a
   * numeric value, that value will be used. If no value is provided, one will
   * be calculated using the element's dimensions and placement.
   *
   * @function Drupal.displace.calculateOffset
   *
   * @param {string} edge
   *   The name of the edge to calculate. Can be 'top', 'right',
   *   'bottom' or 'left'.
   *
   * @return {number}
   *   The viewport displacement distance for the requested edge.
   */
  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];
      // If the element is not visible, do consider its dimensions.
      if (el.style.display === 'none') {
        continue;
      }
      // If the offset data attribute contains a displacing value, use it.
      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);
      // If the element's offset data attribute exits
      // but is not a valid number then get the displacement
      // dimensions directly from the element.
      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }
      // If the displacement value is larger than the current value for this
      // edge, use the displacement value.
      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  /**
   * Calculates displacement for element based on its dimensions and placement.
   *
   * @param {HTMLElement} el
   *   The jQuery element whose dimensions and placement will be measured.
   *
   * @param {string} edge
   *   The name of the edge of the viewport that the element is associated
   *   with.
   *
   * @return {number}
   *   The viewport displacement distance for the requested edge.
   */
  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = (edge === 'left' || edge === 'right');
    // Get the offset of the element itself.
    var placement = $el.offset()[horizontal ? 'left' : 'top'];
    // Subtract scroll distance from placement to get the distance
    // to the edge of the viewport.
    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal) ? 'Left' : 'Top'] || 0;
    // Find the displacement value according to the edge.
    switch (edge) {
      // Left and top elements displace as a sum of their own offset value
      // plus their size.
      case 'top':
        // Total displacement is the sum of the elements placement and size.
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        // Total displacement is the sum of the elements placement and size.
        displacement = placement + $el.outerWidth();
        break;

      // Right and bottom elements displace according to their left and
      // top offset. Their size isn't important.
      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  /**
   * Assign the displace function to a property of the Drupal global object.
   *
   * @ignore
   */
  Drupal.displace = displace;
  $.extend(Drupal.displace, {

    /**
     * Expose offsets to other scripts to avoid having to recalculate offsets.
     *
     * @ignore
     */
    offsets: offsets,

    /**
     * Expose method to compute a single edge offsets.
     *
     * @ignore
     */
    calculateOffset: calculateOffset
  });

})(jQuery, Drupal, Drupal.debounce);
;
/*!
 * jQuery UI Button 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./widget"],e):e(jQuery)})(function(e){var t,n="ui-button ui-widget ui-state-default ui-corner-all",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",i=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},s=function(t){var n=t.name,r=t.form,i=e([]);return n&&(n=n.replace(/'/g,"\\'"),r?i=e(r).find("[name='"+n+"'][type=radio]"):i=e("[name='"+n+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),i};return e.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,i),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var r=this,o=this.options,u=this.type==="checkbox"||this.type==="radio",a=u?"":"ui-state-active";o.label===null&&(o.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(n).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(o.disabled)return;this===t&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(o.disabled)return;e(this).removeClass(a)}).bind("click"+this.eventNamespace,function(e){o.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),u&&this.element.bind("change"+this.eventNamespace,function(){r.refresh()}),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled)return!1}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled)return!1;e(this).addClass("ui-state-active"),r.buttonElement.attr("aria-pressed","true");var t=r.element[0];s(t).not(t).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(o.disabled)return!1;e(this).addClass("ui-state-active"),t=this,r.document.one("mouseup",function(){t=null})}).bind("mouseup"+this.eventNamespace,function(){if(o.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(o.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",o.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(n+" ui-state-active "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&(this.type==="checkbox"||this.type==="radio"?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active"));return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?s(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(r),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),i=this.options.icons,s=i.primary&&i.secondary,o=[];i.primary||i.secondary?(this.options.text&&o.push("ui-button-text-icon"+(s?"s":i.primary?"-primary":"-secondary")),i.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+i.primary+"'></span>"),i.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+i.secondary+"'></span>"),this.options.text||(o.push(s?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):o.push("ui-button-text-only"),t.addClass(o.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl",n=this.element.find(this.options.items),r=n.filter(":ui-button");n.not(":ui-button").button(),r.button("refresh"),this.buttons=n.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button});;
/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./widget"],e):e(jQuery)})(function(e){var t=!1;return e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(n){if(t)return;this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(n),this._mouseDownEvent=n;var r=this,i=n.which===1,s=typeof this.options.cancel=="string"&&n.target.nodeName?e(n.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(n))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(n)&&this._mouseDelayMet(n)){this._mouseStarted=this._mouseStart(n)!==!1;if(!this._mouseStarted)return n.preventDefault(),!0}return!0===e.data(n.target,this.widgetName+".preventClickEvent")&&e.removeData(n.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),n.preventDefault(),t=!0,!0},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}if(t.which||t.button)this._mouseMoved=!0;return this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(n){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,n.target===this._mouseDownEvent.target&&e.data(n.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(n)),t=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});;
/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./mouse","./widget"],e):e(jQuery)})(function(e){return e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),e==="handle"&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=!0;return}this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this._blurActiveElement(t),this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(n.iframeFix===!0?"iframe":n.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var n=this.document[0];if(!this.handleElement.is(t.target))return;try{n.activeElement&&n.activeElement.nodeName.toLowerCase()!=="body"&&e(n.activeElement).blur()}catch(r){}},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return e(this).css("position")==="fixed"}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,n){this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=this,r=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(r=e.ui.ddmanager.drop(this,t)),this.dropped&&(r=this.dropped,this.dropped=!1),this.options.revert==="invalid"&&!r||this.options.revert==="valid"&&r||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,r)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){n._trigger("stop",t)!==!1&&n._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper),i=r?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return i.parents("body").length||i.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo),r&&i[0]===this.element[0]&&this._setPositionRelative(),i[0]!==this.element[0]&&!/(fixed|absolute)/.test(i.css("position"))&&i.css("position","absolute"),i},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),n=this.document[0];return this.cssPosition==="absolute"&&this.scrollParent[0]!==n&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition!=="relative")return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options,s=this.document[0];this.relativeContainer=null;if(!i.containment){this.containment=null;return}if(i.containment==="window"){this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(i.containment==="document"){this.containment=[0,0,e(s).width()-this.helperProportions.width-this.margins.left,(e(s).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(i.containment.constructor===Array){this.containment=i.containment;return}i.containment==="parent"&&(i.containment=this.helper[0].parentNode),n=e(i.containment),r=n[0];if(!r)return;t=/(scroll|auto)/.test(n.css("overflow")),this.containment=[(parseInt(n.css("borderLeftWidth"),10)||0)+(parseInt(n.css("paddingLeft"),10)||0),(parseInt(n.css("borderTopWidth"),10)||0)+(parseInt(n.css("paddingTop"),10)||0),(t?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(n.css("borderRightWidth"),10)||0)-(parseInt(n.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(n.css("borderBottomWidth"),10)||0)-(parseInt(n.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=n},_convertPositionTo:function(e,t){t||(t=this.position);var n=e==="absolute"?1:-1,r=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*n+this.offset.parent.top*n-(this.cssPosition==="fixed"?-this.offset.scroll.top:r?0:this.offset.scroll.top)*n,left:t.left+this.offset.relative.left*n+this.offset.parent.left*n-(this.cssPosition==="fixed"?-this.offset.scroll.left:r?0:this.offset.scroll.left)*n}},_generatePosition:function(e,t){var n,r,i,s,o=this.options,u=this._isRootNode(this.scrollParent[0]),a=e.pageX,f=e.pageY;if(!u||!this.offset.scroll)this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()};return t&&(this.containment&&(this.relativeContainer?(r=this.relativeContainer.offset(),n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]):n=this.containment,e.pageX-this.offset.click.left<n[0]&&(a=n[0]+this.offset.click.left),e.pageY-this.offset.click.top<n[1]&&(f=n[1]+this.offset.click.top),e.pageX-this.offset.click.left>n[2]&&(a=n[2]+this.offset.click.left),e.pageY-this.offset.click.top>n[3]&&(f=n[3]+this.offset.click.top)),o.grid&&(i=o.grid[1]?this.originalPageY+Math.round((f-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,f=n?i-this.offset.click.top>=n[1]||i-this.offset.click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i,s=o.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,a=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s),o.axis==="y"&&(a=this.originalPageX),o.axis==="x"&&(f=this.originalPageY)),{top:f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:u?0:this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:u?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){this.options.axis!=="y"&&this.helper.css("right")!=="auto"&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),this.options.axis!=="x"&&this.helper.css("bottom")!=="auto"&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),r.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n,r){var i=e.extend({},n,{item:r.element});r.sortables=[],e(r.options.connectToSortable).each(function(){var n=e(this).sortable("instance");n&&!n.options.disabled&&(r.sortables.push(n),n.refreshPositions(),n._trigger("activate",t,i))})},stop:function(t,n,r){var i=e.extend({},n,{item:r.element});r.cancelHelperRemoval=!1,e.each(r.sortables,function(){var e=this;e.isOver?(e.isOver=0,r.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,i))})},drag:function(t,n,r){e.each(r.sortables,function(){var i=!1,s=this;s.positionAbs=r.positionAbs,s.helperProportions=r.helperProportions,s.offset.click=r.offset.click,s._intersectsWith(s.containerCache)&&(i=!0,e.each(r.sortables,function(){return this.positionAbs=r.positionAbs,this.helperProportions=r.helperProportions,this.offset.click=r.offset.click,this!==s&&this._intersectsWith(this.containerCache)&&e.contains(s.element[0],this.element[0])&&(i=!1),i})),i?(s.isOver||(s.isOver=1,r._parent=n.helper.parent(),s.currentItem=n.helper.appendTo(s.element).data("ui-sortable-item",!0),s.options._helper=s.options.helper,s.options.helper=function(){return n.helper[0]},t.target=s.currentItem[0],s._mouseCapture(t,!0),s._mouseStart(t,!0,!0),s.offset.click.top=r.offset.click.top,s.offset.click.left=r.offset.click.left,s.offset.parent.left-=r.offset.parent.left-s.offset.parent.left,s.offset.parent.top-=r.offset.parent.top-s.offset.parent.top,r._trigger("toSortable",t),r.dropped=s.element,e.each(r.sortables,function(){this.refreshPositions()}),r.currentItem=r.element,s.fromOutside=r),s.currentItem&&(s._mouseDrag(t),n.position=s.position)):s.isOver&&(s.isOver=0,s.cancelHelperRemoval=!0,s.options._revert=s.options.revert,s.options.revert=!1,s._trigger("out",t,s._uiHash(s)),s._mouseStop(t,!0),s.options.revert=s.options._revert,s.options.helper=s.options._helper,s.placeholder&&s.placeholder.remove(),n.helper.appendTo(r._parent),r._refreshOffsets(t),n.position=r._generatePosition(t,!0),r._trigger("fromSortable",t),r.dropped=!1,e.each(r.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n,r){var i=e("body"),s=r.options;i.css("cursor")&&(s._cursor=i.css("cursor")),i.css("cursor",s.cursor)},stop:function(t,n,r){var i=r.options;i._cursor&&e("body").css("cursor",i._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n,r){var i=e(n.helper),s=r.options;i.css("opacity")&&(s._opacity=i.css("opacity")),i.css("opacity",s.opacity)},stop:function(t,n,r){var i=r.options;i._opacity&&e(n.helper).css("opacity",i._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,n){n.scrollParentNotHidden||(n.scrollParentNotHidden=n.helper.scrollParent(!1)),n.scrollParentNotHidden[0]!==n.document[0]&&n.scrollParentNotHidden[0].tagName!=="HTML"&&(n.overflowOffset=n.scrollParentNotHidden.offset())},drag:function(t,n,r){var i=r.options,s=!1,o=r.scrollParentNotHidden[0],u=r.document[0];if(o!==u&&o.tagName!=="HTML"){if(!i.axis||i.axis!=="x")r.overflowOffset.top+o.offsetHeight-t.pageY<i.scrollSensitivity?o.scrollTop=s=o.scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(o.scrollTop=s=o.scrollTop-i.scrollSpeed);if(!i.axis||i.axis!=="y")r.overflowOffset.left+o.offsetWidth-t.pageX<i.scrollSensitivity?o.scrollLeft=s=o.scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(o.scrollLeft=s=o.scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!=="x")t.pageY-e(u).scrollTop()<i.scrollSensitivity?s=e(u).scrollTop(e(u).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(u).scrollTop())<i.scrollSensitivity&&(s=e(u).scrollTop(e(u).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!=="y")t.pageX-e(u).scrollLeft()<i.scrollSensitivity?s=e(u).scrollLeft(e(u).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(u).scrollLeft())<i.scrollSensitivity&&(s=e(u).scrollLeft(e(u).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n,r){var i=r.options;r.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var t=e(this),n=t.offset();this!==r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n,r){var i,s,o,u,a,f,l,c,h,p,d=r.options,v=d.snapTolerance,m=n.offset.left,g=m+r.helperProportions.width,y=n.offset.top,b=y+r.helperProportions.height;for(h=r.snapElements.length-1;h>=0;h--){a=r.snapElements[h].left-r.margins.left,f=a+r.snapElements[h].width,l=r.snapElements[h].top-r.margins.top,c=l+r.snapElements[h].height;if(g<a-v||m>f+v||b<l-v||y>c+v||!e.contains(r.snapElements[h].item.ownerDocument,r.snapElements[h].item)){r.snapElements[h].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[h].item})),r.snapElements[h].snapping=!1;continue}d.snapMode!=="inner"&&(i=Math.abs(l-b)<=v,s=Math.abs(c-y)<=v,o=Math.abs(a-g)<=v,u=Math.abs(f-m)<=v,i&&(n.position.top=r._convertPositionTo("relative",{top:l-r.helperProportions.height,left:0}).top),s&&(n.position.top=r._convertPositionTo("relative",{top:c,left:0}).top),o&&(n.position.left=r._convertPositionTo("relative",{top:0,left:a-r.helperProportions.width}).left),u&&(n.position.left=r._convertPositionTo("relative",{top:0,left:f}).left)),p=i||s||o||u,d.snapMode!=="outer"&&(i=Math.abs(l-y)<=v,s=Math.abs(c-b)<=v,o=Math.abs(a-m)<=v,u=Math.abs(f-g)<=v,i&&(n.position.top=r._convertPositionTo("relative",{top:l,left:0}).top),s&&(n.position.top=r._convertPositionTo("relative",{top:c-r.helperProportions.height,left:0}).top),o&&(n.position.left=r._convertPositionTo("relative",{top:0,left:a}).left),u&&(n.position.left=r._convertPositionTo("relative",{top:0,left:f-r.helperProportions.width}).left)),!r.snapElements[h].snapping&&(i||s||o||u||p)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[h].item})),r.snapElements[h].snapping=i||s||o||u||p}}}),e.ui.plugin.add("draggable","stack",{start:function(t,n,r){var i,s=r.options,o=e.makeArray(e(s.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!o.length)return;i=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",i+t)}),this.css("zIndex",i+o.length)}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n,r){var i=e(n.helper),s=r.options;i.css("zIndex")&&(s._zIndex=i.css("zIndex")),i.css("zIndex",s.zIndex)},stop:function(t,n,r){var i=r.options;i._zIndex&&e(n.helper).css("zIndex",i._zIndex)}}),e.ui.draggable});;
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){return function(){function h(e,t,n){return[parseFloat(e[0])*(l.test(e[0])?t/100:1),parseFloat(e[1])*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}function d(t){var n=t[0];return n.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var t,n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(t!==undefined)return t;var n,r,i=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=i.children()[0];return e("body").append(i),n=s.offsetWidth,i.css("overflow","scroll"),r=s.offsetWidth,n===r&&(r=i[0].clientWidth),i.remove(),t=n-r},getScrollInfo:function(t){var n=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),r=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:s?e.position.scrollbarWidth():0,height:i?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]),i=!!n[0]&&n[0].nodeType===9;return{element:n,isWindow:r,isDocument:i,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r||i?n.width():n.outerWidth(),height:r||i?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var l,v,m,g,y,b,w=e(t.of),E=e.position.getWithinInfo(t.within),S=e.position.getScrollInfo(E),x=(t.collision||"flip").split(" "),T={};return b=d(w),w[0].preventDefault&&(t.at="left top"),v=b.width,m=b.height,g=b.offset,y=e.extend({},g),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),T[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),x.length===1&&(x[1]=x[0]),t.at[0]==="right"?y.left+=v:t.at[0]==="center"&&(y.left+=v/2),t.at[1]==="bottom"?y.top+=m:t.at[1]==="center"&&(y.top+=m/2),l=h(T.at,v,m),y.left+=l[0],y.top+=l[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),d=p(this,"marginLeft"),b=p(this,"marginTop"),N=f+d+p(this,"marginRight")+S.width,C=c+b+p(this,"marginBottom")+S.height,k=e.extend({},y),L=h(T.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?k.left-=f:t.my[0]==="center"&&(k.left-=f/2),t.my[1]==="bottom"?k.top-=c:t.my[1]==="center"&&(k.top-=c/2),k.left+=L[0],k.top+=L[1],n||(k.left=s(k.left),k.top=s(k.top)),o={marginLeft:d,marginTop:b},e.each(["left","top"],function(n,r){e.ui.position[x[n]]&&e.ui.position[x[n]][r](k,{targetWidth:v,targetHeight:m,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:N,collisionHeight:C,offset:[l[0]+L[0],l[1]+L[1]],my:t.my,at:t.at,within:E,elem:a})}),t.using&&(u=function(e){var n=g.left-k.left,s=n+v-f,o=g.top-k.top,u=o+m-c,l={target:{element:w,left:g.left,top:g.top,width:v,height:m},element:{element:a,left:k.left,top:k.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};v<f&&i(n+s)<v&&(l.horizontal="center"),m<c&&i(o+u)<m&&(l.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?l.important="horizontal":l.important="vertical",t.using.call(this,e,l)}),a.offset(e.extend(k,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;if(a<0){v=e.top+c+h+p+t.collisionHeight-s-r;if(v<0||v<i(a))e.top+=c+h+p}else if(f>0){d=e.top-t.collisionPosition.marginTop+c+h+p-o;if(d>0||i(d)<f)e.top+=c+h+p}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,r,i,s,o,u=document.getElementsByTagName("body")[0],a=document.createElement("div");t=document.createElement(u?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},u&&e.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in i)t.style[o]=i[o];t.appendChild(a),r=u||document.documentElement,r.insertBefore(t,r.firstChild),a.style.cssText="position: absolute; left: 10.7432222px;",s=e(a).offset().left,n=s>10&&s<11,t.innerHTML="",r.removeChild(t)}()}(),e.ui.position});;
/*!
 * jQuery UI Resizable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./mouse","./widget"],e):e(jQuery)})(function(e){return e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},_create:function(){var t,n,r,i,s,o=this,u=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!u.aspectRatio,aspectRatio:u.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:u.helper||u.ghost||u.animate?u.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=u.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e();if(this.handles.constructor===String){this.handles==="all"&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={};for(n=0;n<t.length;n++)r=e.trim(t[n]),s="ui-resizable-"+r,i=e("<div class='ui-resizable-handle "+s+"'></div>"),i.css({zIndex:u.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i)}this._renderAxis=function(t){var n,r,i,s;t=t||this.element;for(n in this.handles){if(this.handles[n].constructor===String)this.handles[n]=this.element.children(this.handles[n]).first().show();else if(this.handles[n].jquery||this.handles[n].nodeType)this.handles[n]=e(this.handles[n]),this._on(this.handles[n],{mousedown:o._mouseDown});this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(r=e(this.handles[n],this.element),s=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth(),i=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize()),this._handles=this._handles.add(this.handles[n])}},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=i&&i[1]?i[1]:"se")}),u.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(u.disabled)return;e(this).removeClass("ui-resizable-autohide"),o._handles.show()}).mouseleave(function(){if(u.disabled)return;o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(n(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),n(this.originalElement),this},_mouseCapture:function(t){var n,r,i=!1;for(n in this.handles){r=e(this.handles[n])[0];if(r===t.target||e.contains(r,t.target))i=!0}return!this.options.disabled&&i},_mouseStart:function(t){var n,r,i,s=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),n=this._num(this.helper.css("left")),r=this._num(this.helper.css("top")),s.containment&&(n+=e(s.containment).scrollLeft()||0,r+=e(s.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:n,top:r},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:n,top:r},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof s.aspectRatio=="number"?s.aspectRatio:this.originalSize.width/this.originalSize.height||1,i=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor",i==="auto"?this.axis+"-resize":i),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var n,r,i=this.originalMousePosition,s=this.axis,o=t.pageX-i.left||0,u=t.pageY-i.top||0,a=this._change[s];this._updatePrevProperties();if(!a)return!1;n=a.apply(this,[t,o,u]),this._updateVirtualBoundaries(t.shiftKey);if(this._aspectRatio||t.shiftKey)n=this._updateRatio(n,t);return n=this._respectSize(n,t),this._updateCache(n),this._propagate("resize",t),r=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(r)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1},_mouseStop:function(t){this.resizing=!1;var n,r,i,s,o,u,a,f=this.options,l=this;return this._helper&&(n=this._proportionallyResizeElements,r=n.length&&/textarea/i.test(n[0].nodeName),i=r&&this._hasScroll(n[0],"left")?0:l.sizeDiff.height,s=r?0:l.sizeDiff.width,o={width:l.helper.width()-s,height:l.helper.height()-i},u=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,f.animate||this.element.css(e.extend(o,{top:a,left:u})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!f.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,n,r,i,s,o=this.options;s={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:Infinity,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:Infinity};if(this._aspectRatio||e)t=s.minHeight*this.aspectRatio,r=s.minWidth/this.aspectRatio,n=s.maxHeight*this.aspectRatio,i=s.maxWidth/this.aspectRatio,t>s.minWidth&&(s.minWidth=t),r>s.minHeight&&(s.minHeight=r),n<s.maxWidth&&(s.maxWidth=n),i<s.maxHeight&&(s.maxHeight=i);this._vBoundaries=s},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,n=this.size,r=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),r==="sw"&&(e.left=t.left+(n.width-e.width),e.top=null),r==="nw"&&(e.top=t.top+(n.height-e.height),e.left=t.left+(n.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,r=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,i=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,s=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,u=this.originalPosition.left+this.originalSize.width,a=this.position.top+this.size.height,f=/sw|nw|w/.test(n),l=/nw|ne|n/.test(n);return s&&(e.width=t.minWidth),o&&(e.height=t.minHeight),r&&(e.width=t.maxWidth),i&&(e.height=t.maxHeight),s&&f&&(e.left=u-t.minWidth),r&&f&&(e.left=u-t.maxWidth),o&&l&&(e.top=a-t.minHeight),i&&l&&(e.top=a-t.maxHeight),!e.width&&!e.height&&!e.left&&e.top?e.top=null:!e.width&&!e.height&&!e.top&&e.left&&(e.left=null),e},_getPaddingPlusBorderDimensions:function(e){var t=0,n=[],r=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],i=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];for(;t<4;t++)n[t]=parseInt(r[t],10)||0,n[t]+=parseInt(i[t],10)||0;return{height:n[0]+n[2],width:n[1]+n[3]}},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length)return;var e,t=0,n=this.helper||this.element;for(;t<this._proportionallyResizeElements.length;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:n.height()-this.outerDimensions.height||0,width:n.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:n.width-t}},n:function(e,t,n){var r=this.originalSize,i=this.originalPosition;return{top:i.top+n,height:r.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!=="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).resizable("instance"),r=n.options,i=n._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&n._hasScroll(i[0],"left")?0:n.sizeDiff.height,u=s?0:n.sizeDiff.width,a={width:n.size.width-u,height:n.size.height-o},f=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,l=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;n.element.animate(e.extend(a,l&&f?{top:l,left:f}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var r={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};i&&i.length&&e(i[0]).css({width:r.width,height:r.height}),n._updateCache(r),n._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,n,r,i,s,o,u,a=e(this).resizable("instance"),f=a.options,l=a.element,c=f.containment,h=c instanceof e?c.get(0):/parent/.test(c)?l.parent().get(0):c;if(!h)return;a.containerElement=e(h),/document/.test(c)||c===document?(a.containerOffset={left:0,top:0},a.containerPosition={left:0,top:0},a.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(h),n=[],e(["Top","Right","Left","Bottom"]).each(function(e,r){n[e]=a._num(t.css("padding"+r))}),a.containerOffset=t.offset(),a.containerPosition=t.position(),a.containerSize={height:t.innerHeight()-n[3],width:t.innerWidth()-n[1]},r=a.containerOffset,i=a.containerSize.height,s=a.containerSize.width,o=a._hasScroll(h,"left")?h.scrollWidth:s,u=a._hasScroll(h)?h.scrollHeight:i,a.parentData={element:h,left:r.left,top:r.top,width:o,height:u})},resize:function(t){var n,r,i,s,o=e(this).resizable("instance"),u=o.options,a=o.containerOffset,f=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},h=o.containerElement,p=!0;h[0]!==document&&/static/.test(h.css("position"))&&(c=a),f.left<(o._helper?a.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-c.left),l&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=u.helper?a.left:0),f.top<(o._helper?a.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?a.top:0),i=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),i&&s?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),n=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-c.left:o.offset.left-a.left)),r=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-c.top:o.offset.top-a.top)),n+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-n,l&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),r+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-r,l&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),n=t.options,r=t.containerOffset,i=t.containerPosition,s=t.containerElement,o=e(t.helper),u=o.offset(),a=o.outerWidth()-t.sizeDiff.width,f=o.outerHeight()-t.sizeDiff.height;t._helper&&!n.animate&&/relative/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f}),t._helper&&!n.animate&&/static/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),n=t.options;e(n.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,n){var r=e(this).resizable("instance"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0};e(i.alsoResize).each(function(){var t=e(this),r=e(this).data("ui-resizable-alsoresize"),i={},s=t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(s,function(e,t){var n=(r[t]||0)+(u[t]||0);n&&n>=0&&(i[t]=n||null)}),t.css(i)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),n=t.options,r=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost=="string"?n.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,n=e(this).resizable("instance"),r=n.options,i=n.size,s=n.originalSize,o=n.originalPosition,u=n.axis,a=typeof r.grid=="number"?[r.grid,r.grid]:r.grid,f=a[0]||1,l=a[1]||1,c=Math.round((i.width-s.width)/f)*f,h=Math.round((i.height-s.height)/l)*l,p=s.width+c,d=s.height+h,v=r.maxWidth&&r.maxWidth<p,m=r.maxHeight&&r.maxHeight<d,g=r.minWidth&&r.minWidth>p,y=r.minHeight&&r.minHeight>d;r.grid=a,g&&(p+=f),y&&(d+=l),v&&(p-=f),m&&(d-=l);if(/^(se|s|e)$/.test(u))n.size.width=p,n.size.height=d;else if(/^(ne)$/.test(u))n.size.width=p,n.size.height=d,n.position.top=o.top-h;else if(/^(sw)$/.test(u))n.size.width=p,n.size.height=d,n.position.left=o.left-c;else{if(d-l<=0||p-f<=0)t=n._getPaddingPlusBorderDimensions(this);d-l>0?(n.size.height=d,n.position.top=o.top-h):(d=l-t.height,n.size.height=d,n.position.top=o.top+s.height-d),p-f>0?(n.size.width=p,n.position.left=o.left-c):(p=f-t.width,n.size.width=p,n.position.left=o.left+s.width-p)}}}),e.ui.resizable});;
/*!
 * jQuery UI Dialog 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./widget","./button","./draggable","./mouse","./position","./resizable"],e):e(jQuery)})(function(e){return e.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var n,r=this;if(!this._isOpen||this._trigger("beforeClose",t)===!1)return;this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance();if(!this.opener.filter(":focusable").focus().length)try{n=this.document[0].activeElement,n&&n.nodeName.toLowerCase()!=="body"&&e(n).blur()}catch(i){}this._hide(this.uiDialog,this.options.hide,function(){r._trigger("close",t)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,n){var r=!1,i=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),s=Math.max.apply(null,i);return s>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",s+1),r=!0),r&&!n&&this._trigger("focus",t),r},open:function(){var t=this;if(this._isOpen){this._moveToTop()&&this._focusTabbable();return}this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open")},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function n(){var t=this.document[0].activeElement,n=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);n||this._focusTabbable()}t.preventDefault(),n.call(this),this._delay(n)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE){t.preventDefault(),this.close(t);return}if(t.keyCode!==e.ui.keyCode.TAB||t.isDefaultPrevented())return;var n=this.uiDialog.find(":tabbable"),r=n.filter(":first"),i=n.filter(":last");t.target!==i[0]&&t.target!==this.uiDialog[0]||!!t.shiftKey?(t.target===r[0]||t.target===this.uiDialog[0])&&t.shiftKey&&(this._delay(function(){i.focus()}),t.preventDefault()):(this._delay(function(){r.focus()}),t.preventDefault())},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,n=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty();if(e.isEmptyObject(n)||e.isArray(n)&&!n.length){this.uiDialog.removeClass("ui-dialog-buttons");return}e.each(n,function(n,r){var i,s;r=e.isFunction(r)?{click:r,text:n}:r,r=e.extend({type:"button"},r),i=r.click,r.click=function(){i.apply(t.element[0],arguments)},s={icons:r.icons,text:r.showText},delete r.icons,delete r.showText,e("<button></button>",r).button(s).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging"),t._blockFrames(),t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){var o=s.offset.left-t.document.scrollLeft(),u=s.offset.top-t.document.scrollTop();n.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(u>=0?"+":"")+u,of:t.window},e(this).removeClass("ui-dialog-dragging"),t._unblockFrames(),t._trigger("dragStop",i,r(s))}})},_makeResizable:function(){function o(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var t=this,n=this.options,r=n.resizable,i=this.uiDialog.css("position"),s=typeof r=="string"?r:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:s,start:function(n,r){e(this).addClass("ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",n,o(r))},resize:function(e,n){t._trigger("resize",e,o(n))},stop:function(r,i){var s=t.uiDialog.offset(),u=s.left-t.document.scrollLeft(),a=s.top-t.document.scrollTop();n.height=t.uiDialog.height(),n.width=t.uiDialog.width(),n.position={my:"left top",at:"left"+(u>=0?"+":"")+u+" "+"top"+(a>=0?"+":"")+a,of:t.window},e(this).removeClass("ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",r,o(i))}}).css("position",i)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),n=e.inArray(this,t);n!==-1&&t.splice(n,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var n=this,r=!1,i={};e.each(t,function(e,t){n._setOption(e,t),e in n.sizeRelatedOptions&&(r=!0),e in n.resizableRelatedOptions&&(i[e]=t)}),r&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",i)},_setOption:function(e,t){var n,r,i=this.uiDialog;e==="dialogClass"&&i.removeClass(this.options.dialogClass).addClass(t);if(e==="disabled")return;this._super(e,t),e==="appendTo"&&this.uiDialog.appendTo(this._appendTo()),e==="buttons"&&this._createButtons(),e==="closeText"&&this.uiDialogTitlebarClose.button({label:""+t}),e==="draggable"&&(n=i.is(":data(ui-draggable)"),n&&!t&&i.draggable("destroy"),!n&&t&&this._makeDraggable()),e==="position"&&this._position(),e==="resizable"&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&typeof t=="string"&&i.resizable("option","handles",t),!r&&t!==!1&&this._makeResizable()),e==="title"&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))},_size:function(){var e,t,n,r=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),r.minWidth>r.width&&(r.width=r.minWidth),e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight(),t=Math.max(0,r.minHeight-e),n=typeof r.maxHeight=="number"?Math.max(0,r.maxHeight-e):"none",r.height==="auto"?this.element.css({minHeight:t,maxHeight:n,height:"auto"}):this.element.height(Math.max(0,r.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(!this.options.modal)return;var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){if(t)return;this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)},_destroyOverlay:function(){if(!this.options.modal)return;if(this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}})});;
/**
 * @file
 * Dialog API inspired by HTML5 dialog element.
 *
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#the-dialog-element
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Default dialog options.
   *
   * @type {object}
   *
   * @prop {bool} [autoOpen=true]
   * @prop {string} [dialogClass='']
   * @prop {string} [buttonClass='button']
   * @prop {string} [buttonPrimaryClass='button--primary']
   * @prop {function} close
   */
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',
    // Drupal-specific extensions: see dialog.jquery-ui.js.
    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    // When using this API directly (when generating dialogs on the client
    // side), you may want to override this method and do
    // `jQuery(event.target).remove()` as well, to remove the dialog on
    // closing.
    close: function (event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  /**
   * @typedef {object} Drupal.dialog~dialogDefinition
   *
   * @prop {boolean} open
   *   Is the dialog open or not.
   * @prop {*} returnValue
   *   Return value of the dialog.
   * @prop {function} show
   *   Method to display the dialog on the page.
   * @prop {function} showModal
   *   Method to display the dialog as a modal on the page.
   * @prop {function} close
   *   Method to hide the dialog from the page.
   */

  /**
   * Polyfill HTML5 dialog element with jQueryUI.
   *
   * @param {HTMLElement} element
   *   The element that holds the dialog.
   * @param {object} options
   *   jQuery UI options to be passed to the dialog.
   *
   * @return {Drupal.dialog~dialogDefinition}
   *   The dialog instance.
   */
  Drupal.dialog = function (element, options) {
    var undef;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef,
      show: function () {
        openDialog({modal: false});
      },
      showModal: function () {
        openDialog({modal: true});
      },
      close: closeDialog
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);
      // Trigger a global event to allow scripts to bind events to the dialog.
      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    return dialog;
  };

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Positioning extensions for dialogs.
 */

/**
 * Triggers when content inside a dialog changes.
 *
 * @event dialogContentResize
 */

(function ($, Drupal, drupalSettings, debounce, displace) {

  'use strict';

  // autoResize option will turn off resizable and draggable.
  drupalSettings.dialog = $.extend({autoResize: true, maxHeight: '95%'}, drupalSettings.dialog);

  /**
   * Resets the current options for positioning.
   *
   * This is used as a window resize and scroll callback to reposition the
   * jQuery UI dialog. Although not a built-in jQuery UI option, this can
   * be disabled by setting autoResize: false in the options array when creating
   * a new {@link Drupal.dialog}.
   *
   * @function Drupal.dialog~resetSize
   *
   * @param {jQuery.Event} event
   *   The event triggered.
   *
   * @fires event:dialogContentResize
   */
  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option;
    var optionValue;
    var adjustedValue;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        // jQuery UI does not support percentages on heights, convert to pixels.
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          // Take offsets in account.
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);
          // Don't force the dialog to be bigger vertically than needed.
          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }
    // Offset the dialog center to be at the center of Drupal.displace.offsets.
    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }
    event.data.$element
      .dialog('option', adjustedOptions)
      .trigger('dialogContentResize');
  }

  /**
   * Position the dialog's center at the center of displace.offsets boundaries.
   *
   * @function Drupal.dialog~resetPosition
   *
   * @param {object} options
   *   Options object.
   *
   * @return {object}
   *   Altered options object.
   */
  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;

    var leftString = (left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)) + 'px';
    var topString = (top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)) + 'px';
    options.position = {
      my: 'center' + (left !== 0 ? leftString : '') + ' center' + (top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  $(window).on({
    'dialog:aftercreate': function (event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = {settings: settings, $element: $element};
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element
          .dialog('option', {resizable: false, draggable: false})
          .dialog('widget').css('position', 'fixed');
        $(window)
          .on('resize.dialogResize scroll.dialogResize', eventData, autoResize)
          .trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function (event, dialog, $element) {
      $(window).off('.dialogResize');
    }
  });

})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);
;
/**
 * @file
 * Adds default classes to buttons for styling purposes.
 */

(function ($) {

  'use strict';

  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function () {
      var opts = this.options;
      var primaryIndex;
      var $buttons;
      var index;
      var il = opts.buttons.length;
      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }
      this._super();
      $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });

})(jQuery);
;
/**
 * @file
 * Extends the Drupal AJAX functionality to integrate the dialog API.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Initialize dialogs for Ajax purposes.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behaviors for dialog ajax functionality.
   */
  Drupal.behaviors.dialog = {
    attach: function (context, settings) {
      var $context = $(context);

      // Provide a known 'drupal-modal' DOM element for Drupal-based modal
      // dialogs. Non-modal dialogs are responsible for creating their own
      // elements, since there can be multiple non-modal dialogs at a time.
      if (!$('#drupal-modal').length) {
        // Add 'ui-front' jQuery UI class so jQuery UI widgets like autocomplete
        // sit on top of dialogs. For more information see
        // http://api.jqueryui.com/theming/stacking-elements/.
        $('<div id="drupal-modal" class="ui-front"/>').hide().appendTo('body');
      }

      // Special behaviors specific when attaching content within a dialog.
      // These behaviors usually fire after a validation error inside a dialog.
      var $dialog = $context.closest('.ui-dialog-content');
      if ($dialog.length) {
        // Remove and replace the dialog buttons with those from the new form.
        if ($dialog.dialog('option', 'drupalAutoButtons')) {
          // Trigger an event to detect/sync changes to buttons.
          $dialog.trigger('dialogButtonsChange');
        }

        // Force focus on the modal when the behavior is run.
        $dialog.dialog('widget').trigger('focus');
      }

      var originalClose = settings.dialog.close;
      // Overwrite the close method to remove the dialog on closing.
      settings.dialog.close = function (event) {
        originalClose.apply(settings.dialog, arguments);
        $(event.target).remove();
      };
    },

    /**
     * Scan a dialog for any primary buttons and move them to the button area.
     *
     * @param {jQuery} $dialog
     *   An jQuery object containing the element that is the dialog target.
     *
     * @return {Array}
     *   An array of buttons that need to be added to the button area.
     */
    prepareDialogButtons: function ($dialog) {
      var buttons = [];
      var $buttons = $dialog.find('.form-actions input[type=submit], .form-actions a.button');
      $buttons.each(function () {
        // Hidden form buttons need special attention. For browser consistency,
        // the button needs to be "visible" in order to have the enter key fire
        // the form submit event. So instead of a simple "hide" or
        // "display: none", we set its dimensions to zero.
        // See http://mattsnider.com/how-forms-submit-when-pressing-enter/
        var $originalButton = $(this).css({
          display: 'block',
          width: 0,
          height: 0,
          padding: 0,
          border: 0,
          overflow: 'hidden'
        });
        buttons.push({
          text: $originalButton.html() || $originalButton.attr('value'),
          class: $originalButton.attr('class'),
          click: function (e) {
            // If the original button is an anchor tag, triggering the "click"
            // event will not simulate a click. Use the click method instead.
            if ($originalButton.is('a')) {
              $originalButton[0].click();
            }
            else {
              $originalButton.trigger('mousedown').trigger('mouseup').trigger('click');
              e.preventDefault();
            }
          }
        });
      });
      return buttons;
    }
  };

  /**
   * Command to open a dialog.
   *
   * @param {Drupal.Ajax} ajax
   *   The Drupal Ajax object.
   * @param {object} response
   *   Object holding the server response.
   * @param {number} [status]
   *   The HTTP status code.
   *
   * @return {bool|undefined}
   *   Returns false if there was no selector property in the response object.
   */
  Drupal.AjaxCommands.prototype.openDialog = function (ajax, response, status) {
    if (!response.selector) {
      return false;
    }
    var $dialog = $(response.selector);
    if (!$dialog.length) {
      // Create the element if needed.
      $dialog = $('<div id="' + response.selector.replace(/^#/, '') + '" class="ui-front"/>').appendTo('body');
    }
    // Set up the wrapper, if there isn't one.
    if (!ajax.wrapper) {
      ajax.wrapper = $dialog.attr('id');
    }

    // Use the ajax.js insert command to populate the dialog contents.
    response.command = 'insert';
    response.method = 'html';
    ajax.commands.insert(ajax, response, status);

    // Move the buttons to the jQuery UI dialog buttons area.
    if (!response.dialogOptions.buttons) {
      response.dialogOptions.drupalAutoButtons = true;
      response.dialogOptions.buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
    }

    // Bind dialogButtonsChange.
    $dialog.on('dialogButtonsChange', function () {
      var buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
      $dialog.dialog('option', 'buttons', buttons);
    });

    // Open the dialog itself.
    response.dialogOptions = response.dialogOptions || {};
    var dialog = Drupal.dialog($dialog.get(0), response.dialogOptions);
    if (response.dialogOptions.modal) {
      dialog.showModal();
    }
    else {
      dialog.show();
    }

    // Add the standard Drupal class for buttons for style consistency.
    $dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions');
  };

  /**
   * Command to close a dialog.
   *
   * If no selector is given, it defaults to trying to close the modal.
   *
   * @param {Drupal.Ajax} [ajax]
   *   The ajax object.
   * @param {object} response
   *   Object holding the server response.
   * @param {string} response.selector
   *   The selector of the dialog.
   * @param {bool} response.persist
   *   Whether to persist the dialog element or not.
   * @param {number} [status]
   *   The HTTP status code.
   */
  Drupal.AjaxCommands.prototype.closeDialog = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      Drupal.dialog($dialog.get(0)).close();
      if (!response.persist) {
        $dialog.remove();
      }
    }

    // Unbind dialogButtonsChange.
    $dialog.off('dialogButtonsChange');
  };

  /**
   * Command to set a dialog property.
   *
   * JQuery UI specific way of setting dialog options.
   *
   * @param {Drupal.Ajax} [ajax]
   *   The Drupal Ajax object.
   * @param {object} response
   *   Object holding the server response.
   * @param {string} response.selector
   *   Selector for the dialog element.
   * @param {string} response.optionsName
   *   Name of a key to set.
   * @param {string} response.optionValue
   *   Value to set.
   * @param {number} [status]
   *   The HTTP status code.
   */
  Drupal.AjaxCommands.prototype.setDialogOption = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      $dialog.dialog('option', response.optionName, response.optionValue);
    }
  };

  /**
   * Binds a listener on dialog creation to handle the cancel link.
   *
   * @param {jQuery.Event} e
   *   The event triggered.
   * @param {Drupal.dialog~dialogDefinition} dialog
   *   The dialog instance.
   * @param {jQuery} $element
   *   The jQuery collection of the dialog element.
   * @param {object} [settings]
   *   Dialog settings.
   */
  $(window).on('dialog:aftercreate', function (e, dialog, $element, settings) {
    $element.on('click.dialog', '.dialog-cancel', function (e) {
      dialog.close('cancel');
      e.preventDefault();
      e.stopPropagation();
    });
  });

  /**
   * Removes all 'dialog' listeners.
   *
   * @param {jQuery.Event} e
   *   The event triggered.
   * @param {Drupal.dialog~dialogDefinition} dialog
   *   The dialog instance.
   * @param {jQuery} $element
   *   jQuery collection of the dialog element.
   */
  $(window).on('dialog:beforeclose', function (e, dialog, $element) {
    $element.off('.dialog');
  });

})(jQuery, Drupal);
;
!function(e){"use strict";function t(e){return(e||"").toLowerCase()}var o="2.1.6";e.fn.cycle=function(o){var i;return 0!==this.length||e.isReady?this.each(function(){var i,n,s,r,l=e(this),a=e.fn.cycle.log;if(!l.data("cycle.opts")){(l.data("cycle-log")===!1||o&&o.log===!1||n&&n.log===!1)&&(a=e.noop),a("--c2 init--"),i=l.data();for(var c in i)i.hasOwnProperty(c)&&/^cycle[A-Z]+/.test(c)&&(r=i[c],s=c.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),a(s+":",r,"("+typeof r+")"),i[s]=r);n=e.extend({},e.fn.cycle.defaults,i,o||{}),n.timeoutId=0,n.paused=n.paused||!1,n.container=l,n._maxZ=n.maxZ,n.API=e.extend({_container:l},e.fn.cycle.API),n.API.log=a,n.API.trigger=function(e,t){return n.container.trigger(e,t),n.API},l.data("cycle.opts",n),l.data("cycle.API",n.API),n.API.trigger("cycle-bootstrap",[n,n.API]),n.API.addInitialSlides(),n.API.preInitSlideshow(),n.slides.length&&n.API.initSlideshow()}}):(i={s:this.selector,c:this.context},e.fn.cycle.log("requeuing slideshow (dom not ready)"),e(function(){e(i.s,i.c).cycle(o)}),this)},e.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var t=this.opts(),o=t.slides;t.slideCount=0,t.slides=e(),o=o.jquery?o:t.container.find(o),t.random&&o.sort(function(){return Math.random()-.5}),t.API.add(o)},preInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-pre-initialize",[t]);var o=e.fn.cycle.transitions[t.fx];o&&e.isFunction(o.preInit)&&o.preInit(t),t._preInitialized=!0},postInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-post-initialize",[t]);var o=e.fn.cycle.transitions[t.fx];o&&e.isFunction(o.postInit)&&o.postInit(t)},initSlideshow:function(){var t,o=this.opts(),i=o.container;o.API.calcFirstSlide(),"static"==o.container.css("position")&&o.container.css("position","relative"),e(o.slides[o.currSlide]).css({opacity:1,display:"block",visibility:"visible"}),o.API.stackSlides(o.slides[o.currSlide],o.slides[o.nextSlide],!o.reverse),o.pauseOnHover&&(o.pauseOnHover!==!0&&(i=e(o.pauseOnHover)),i.hover(function(){o.API.pause(!0)},function(){o.API.resume(!0)})),o.timeout&&(t=o.API.getSlideOpts(o.currSlide),o.API.queueTransition(t,t.timeout+o.delay)),o._initialized=!0,o.API.updateView(!0),o.API.trigger("cycle-initialized",[o]),o.API.postInitSlideshow()},pause:function(t){var o=this.opts(),i=o.API.getSlideOpts(),n=o.hoverPaused||o.paused;t?o.hoverPaused=!0:o.paused=!0,n||(o.container.addClass("cycle-paused"),o.API.trigger("cycle-paused",[o]).log("cycle-paused"),i.timeout&&(clearTimeout(o.timeoutId),o.timeoutId=0,o._remainingTimeout-=e.now()-o._lastQueue,(o._remainingTimeout<0||isNaN(o._remainingTimeout))&&(o._remainingTimeout=void 0)))},resume:function(e){var t=this.opts(),o=!t.hoverPaused&&!t.paused;e?t.hoverPaused=!1:t.paused=!1,o||(t.container.removeClass("cycle-paused"),0===t.slides.filter(":animated").length&&t.API.queueTransition(t.API.getSlideOpts(),t._remainingTimeout),t.API.trigger("cycle-resumed",[t,t._remainingTimeout]).log("cycle-resumed"))},add:function(t,o){var i,n=this.opts(),s=n.slideCount,r=!1;"string"==e.type(t)&&(t=e.trim(t)),e(t).each(function(t){var i,s=e(this);o?n.container.prepend(s):n.container.append(s),n.slideCount++,i=n.API.buildSlideOpts(s),o?n.slides=e(s).add(n.slides):n.slides=n.slides.add(s),n.API.initSlide(i,s,--n._maxZ),s.data("cycle.opts",i),n.API.trigger("cycle-slide-added",[n,i,s])}),n.API.updateView(!0),r=n._preInitialized&&s<2&&n.slideCount>=1,r&&(n._initialized?n.timeout&&(i=n.slides.length,n.nextSlide=n.reverse?i-1:1,n.timeoutId||n.API.queueTransition(n)):n.API.initSlideshow())},calcFirstSlide:function(){var e,t=this.opts();e=parseInt(t.startingSlide||0,10),(e>=t.slides.length||e<0)&&(e=0),t.currSlide=e,t.reverse?(t.nextSlide=e-1,t.nextSlide<0&&(t.nextSlide=t.slides.length-1)):(t.nextSlide=e+1,t.nextSlide==t.slides.length&&(t.nextSlide=0))},calcNextSlide:function(){var e,t=this.opts();t.reverse?(e=t.nextSlide-1<0,t.nextSlide=e?t.slideCount-1:t.nextSlide-1,t.currSlide=e?0:t.nextSlide+1):(e=t.nextSlide+1==t.slides.length,t.nextSlide=e?0:t.nextSlide+1,t.currSlide=e?t.slides.length-1:t.nextSlide-1)},calcTx:function(t,o){var i,n=t;return n._tempFx?i=e.fn.cycle.transitions[n._tempFx]:o&&n.manualFx&&(i=e.fn.cycle.transitions[n.manualFx]),i||(i=e.fn.cycle.transitions[n.fx]),n._tempFx=null,this.opts()._tempFx=null,i||(i=e.fn.cycle.transitions.fade,n.API.log('Transition "'+n.fx+'" not found.  Using fade.')),i},prepareTx:function(e,t){var o,i,n,s,r,l=this.opts();return l.slideCount<2?void(l.timeoutId=0):(!e||l.busy&&!l.manualTrump||(l.API.stopTransition(),l.busy=!1,clearTimeout(l.timeoutId),l.timeoutId=0),void(l.busy||(0!==l.timeoutId||e)&&(i=l.slides[l.currSlide],n=l.slides[l.nextSlide],s=l.API.getSlideOpts(l.nextSlide),r=l.API.calcTx(s,e),l._tx=r,e&&void 0!==s.manualSpeed&&(s.speed=s.manualSpeed),l.nextSlide!=l.currSlide&&(e||!l.paused&&!l.hoverPaused&&l.timeout)?(l.API.trigger("cycle-before",[s,i,n,t]),r.before&&r.before(s,i,n,t),o=function(){l.busy=!1,l.container.data("cycle.opts")&&(r.after&&r.after(s,i,n,t),l.API.trigger("cycle-after",[s,i,n,t]),l.API.queueTransition(s),l.API.updateView(!0))},l.busy=!0,r.transition?r.transition(s,i,n,t,o):l.API.doTransition(s,i,n,t,o),l.API.calcNextSlide(),l.API.updateView()):l.API.queueTransition(s))))},doTransition:function(t,o,i,n,s){var r=t,l=e(o),a=e(i),c=function(){a.animate(r.animIn||{opacity:1},r.speed,r.easeIn||r.easing,s)};a.css(r.cssBefore||{}),l.animate(r.animOut||{},r.speed,r.easeOut||r.easing,function(){l.css(r.cssAfter||{}),r.sync||c()}),r.sync&&c()},queueTransition:function(t,o){var i=this.opts(),n=void 0!==o?o:t.timeout;return 0===i.nextSlide&&0===--i.loop?(i.API.log("terminating; loop=0"),i.timeout=0,n?setTimeout(function(){i.API.trigger("cycle-finished",[i])},n):i.API.trigger("cycle-finished",[i]),void(i.nextSlide=i.currSlide)):void 0!==i.continueAuto&&(i.continueAuto===!1||e.isFunction(i.continueAuto)&&i.continueAuto()===!1)?(i.API.log("terminating automatic transitions"),i.timeout=0,void(i.timeoutId&&clearTimeout(i.timeoutId))):void(n&&(i._lastQueue=e.now(),void 0===o&&(i._remainingTimeout=t.timeout),i.paused||i.hoverPaused||(i.timeoutId=setTimeout(function(){i.API.prepareTx(!1,!i.reverse)},n))))},stopTransition:function(){var e=this.opts();e.slides.filter(":animated").length&&(e.slides.stop(!1,!0),e.API.trigger("cycle-transition-stopped",[e])),e._tx&&e._tx.stopTransition&&e._tx.stopTransition(e)},advanceSlide:function(e){var t=this.opts();return clearTimeout(t.timeoutId),t.timeoutId=0,t.nextSlide=t.currSlide+e,t.nextSlide<0?t.nextSlide=t.slides.length-1:t.nextSlide>=t.slides.length&&(t.nextSlide=0),t.API.prepareTx(!0,e>=0),!1},buildSlideOpts:function(o){var i,n,s=this.opts(),r=o.data()||{};for(var l in r)r.hasOwnProperty(l)&&/^cycle[A-Z]+/.test(l)&&(i=r[l],n=l.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),s.API.log("["+(s.slideCount-1)+"]",n+":",i,"("+typeof i+")"),r[n]=i);r=e.extend({},e.fn.cycle.defaults,s,r),r.slideNum=s.slideCount;try{delete r.API,delete r.slideCount,delete r.currSlide,delete r.nextSlide,delete r.slides}catch(e){}return r},getSlideOpts:function(t){var o=this.opts();void 0===t&&(t=o.currSlide);var i=o.slides[t],n=e(i).data("cycle.opts");return e.extend({},o,n)},initSlide:function(t,o,i){var n=this.opts();o.css(t.slideCss||{}),i>0&&o.css("zIndex",i),isNaN(t.speed)&&(t.speed=e.fx.speeds[t.speed]||e.fx.speeds._default),t.sync||(t.speed=t.speed/2),o.addClass(n.slideClass)},updateView:function(e,t,o){var i=this.opts();if(i._initialized){var n=i.API.getSlideOpts(),s=i.slides[i.currSlide];!e&&t!==!0&&(i.API.trigger("cycle-update-view-before",[i,n,s]),i.updateView<0)||(i.slideActiveClass&&i.slides.removeClass(i.slideActiveClass).eq(i.currSlide).addClass(i.slideActiveClass),e&&i.hideNonActive&&i.slides.filter(":not(."+i.slideActiveClass+")").css("visibility","hidden"),0===i.updateView&&setTimeout(function(){i.API.trigger("cycle-update-view",[i,n,s,e])},n.speed/(i.sync?2:1)),0!==i.updateView&&i.API.trigger("cycle-update-view",[i,n,s,e]),e&&i.API.trigger("cycle-update-view-after",[i,n,s]))}},getComponent:function(t){var o=this.opts(),i=o[t];return"string"==typeof i?/^\s*[\>|\+|~]/.test(i)?o.container.find(i):e(i):i.jquery?i:e(i)},stackSlides:function(t,o,i){var n=this.opts();t||(t=n.slides[n.currSlide],o=n.slides[n.nextSlide],i=!n.reverse),e(t).css("zIndex",n.maxZ);var s,r=n.maxZ-2,l=n.slideCount;if(i){for(s=n.currSlide+1;s<l;s++)e(n.slides[s]).css("zIndex",r--);for(s=0;s<n.currSlide;s++)e(n.slides[s]).css("zIndex",r--)}else{for(s=n.currSlide-1;s>=0;s--)e(n.slides[s]).css("zIndex",r--);for(s=l-1;s>n.currSlide;s--)e(n.slides[s]).css("zIndex",r--)}e(o).css("zIndex",n.maxZ-1)},getSlideIndex:function(e){return this.opts().slides.index(e)}},e.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},e.fn.cycle.version=function(){return"Cycle2: "+o},e.fn.cycle.transitions={custom:{},none:{before:function(e,t,o,i){e.API.stackSlides(o,t,i),e.cssBefore={opacity:1,visibility:"visible",display:"block"}}},fade:{before:function(t,o,i,n){var s=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(o,i,n),t.cssBefore=e.extend(s,{opacity:0,visibility:"visible",display:"block"}),t.animIn={opacity:1},t.animOut={opacity:0}}},fadeout:{before:function(t,o,i,n){var s=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(o,i,n),t.cssBefore=e.extend(s,{opacity:1,visibility:"visible",display:"block"}),t.animOut={opacity:0}}},scrollHorz:{before:function(e,t,o,i){e.API.stackSlides(t,o,i);var n=e.container.css("overflow","hidden").width();e.cssBefore={left:i?n:-n,top:0,opacity:1,visibility:"visible",display:"block"},e.cssAfter={zIndex:e._maxZ-2,left:0},e.animIn={left:0},e.animOut={left:i?-n:n}}}},e.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},e(document).ready(function(){e(e.fn.cycle.defaults.autoSelector).cycle()})}(jQuery),function(e){"use strict";function t(t,i){var n,s,r,l=i.autoHeight;if("container"==l)s=e(i.slides[i.currSlide]).outerHeight(),i.container.height(s);else if(i._autoHeightRatio)i.container.height(i.container.width()/i._autoHeightRatio);else if("calc"===l||"number"==e.type(l)&&l>=0){if(r="calc"===l?o(t,i):l>=i.slides.length?0:l,r==i._sentinelIndex)return;i._sentinelIndex=r,i._sentinel&&i._sentinel.remove(),n=e(i.slides[r].cloneNode(!0)),n.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),n.css({position:"static",visibility:"hidden",display:"block"}).prependTo(i.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),n.find("*").css("visibility","hidden"),i._sentinel=n}}function o(t,o){var i=0,n=-1;return o.slides.each(function(t){var o=e(this).height();o>n&&(n=o,i=t)}),i}function i(t,o,i,n,s){var r=e(n).outerHeight();o.container.animate({height:r},o.autoHeightSpeed,o.autoHeightEasing)}function n(o,s){s._autoHeightOnResize&&(e(window).off("resize orientationchange",s._autoHeightOnResize),s._autoHeightOnResize=null),s.container.off("cycle-slide-added cycle-slide-removed",t),s.container.off("cycle-destroyed",n),s.container.off("cycle-before",i),s._sentinel&&(s._sentinel.remove(),s._sentinel=null)}e.extend(e.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null}),e(document).on("cycle-initialized",function(o,s){function r(){t(o,s)}var l,a=s.autoHeight,c=e.type(a),d=null;"string"!==c&&"number"!==c||(s.container.on("cycle-slide-added cycle-slide-removed",t),s.container.on("cycle-destroyed",n),"container"==a?s.container.on("cycle-before",i):"string"===c&&/\d+\:\d+/.test(a)&&(l=a.match(/(\d+)\:(\d+)/),l=l[1]/l[2],s._autoHeightRatio=l),"number"!==c&&(s._autoHeightOnResize=function(){clearTimeout(d),d=setTimeout(r,50)},e(window).on("resize orientationchange",s._autoHeightOnResize)),setTimeout(r,30))})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),e(document).on("cycle-update-view",function(t,o,i,n){if("caption"===o.captionModule){e.each(["caption","overlay"],function(){var e=this,t=i[e+"Template"],s=o.API.getComponent(e);s.length&&t?(s.html(o.API.tmpl(t,i,o,n)),s.show()):s.hide()})}}),e(document).on("cycle-destroyed",function(t,o){var i;e.each(["caption","overlay"],function(){var e=this,t=o[e+"Template"];o[e]&&t&&(i=o.API.getComponent("caption"),i.empty())})})}(jQuery),function(e){"use strict";var t=e.fn.cycle;e.fn.cycle=function(o){var i,n,s,r=e.makeArray(arguments);return"number"==e.type(o)?this.cycle("goto",o):"string"==e.type(o)?this.each(function(){var l;return i=o,s=e(this).data("cycle.opts"),void 0===s?void t.log('slideshow must be initialized before sending commands; "'+i+'" ignored'):(i="goto"==i?"jump":i,n=s.API[i],e.isFunction(n)?(l=e.makeArray(r),l.shift(),n.apply(s.API,l)):void t.log("unknown command: ",i))}):t.apply(this,arguments)},e.extend(e.fn.cycle,t),e.extend(t.API,{next:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?-1:1;e.allowWrap===!1&&e.currSlide+t>=e.slideCount||(e.API.advanceSlide(t),e.API.trigger("cycle-next",[e]).log("cycle-next"))}},prev:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?1:-1;e.allowWrap===!1&&e.currSlide+t<0||(e.API.advanceSlide(t),e.API.trigger("cycle-prev",[e]).log("cycle-prev"))}},destroy:function(){this.stop();var t=this.opts(),o=e.isFunction(e._data)?e._data:e.noop;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stop(),t.API.trigger("cycle-destroyed",[t]).log("cycle-destroyed"),t.container.removeData(),o(t.container[0],"parsedAttrs",!1),t.retainStylesOnDestroy||(t.container.removeAttr("style"),t.slides.removeAttr("style"),t.slides.removeClass(t.slideActiveClass)),t.slides.each(function(){var i=e(this);i.removeData(),i.removeClass(t.slideClass),o(this,"parsedAttrs",!1)})},jump:function(e,t){var o,i=this.opts();if(!i.busy||i.manualTrump){var n=parseInt(e,10);if(isNaN(n)||n<0||n>=i.slides.length)return void i.API.log("goto: invalid slide index: "+n);if(n==i.currSlide)return void i.API.log("goto: skipping, already on slide",n);i.nextSlide=n,clearTimeout(i.timeoutId),i.timeoutId=0,i.API.log("goto: ",n," (zero-index)"),o=i.currSlide<i.nextSlide,i._tempFx=t,i.API.prepareTx(!0,o)}},stop:function(){var t=this.opts(),o=t.container;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stopTransition(),t.pauseOnHover&&(t.pauseOnHover!==!0&&(o=e(t.pauseOnHover)),o.off("mouseenter mouseleave")),t.API.trigger("cycle-stopped",[t]).log("cycle-stopped")},reinit:function(){var e=this.opts();e.API.destroy(),e.container.cycle()},remove:function(t){for(var o,i,n=this.opts(),s=[],r=1,l=0;l<n.slides.length;l++)o=n.slides[l],l==t?i=o:(s.push(o),e(o).data("cycle.opts").slideNum=r,r++);i&&(n.slides=e(s),n.slideCount--,e(i).remove(),t==n.currSlide?n.API.advanceSlide(1):t<n.currSlide?n.currSlide--:n.currSlide++,n.API.trigger("cycle-slide-removed",[n,t,i]).log("cycle-slide-removed"),n.API.updateView())}}),e(document).on("click.cycle","[data-cycle-cmd]",function(t){t.preventDefault();var o=e(this),i=o.data("cycle-cmd"),n=o.data("cycle-context")||".cycle-slideshow";e(n).cycle(i,o.data("cycle-arg"))})}(jQuery),function(e){"use strict";function t(t,o){var i;return t._hashFence?void(t._hashFence=!1):(i=window.location.hash.substring(1),void t.slides.each(function(n){if(e(this).data("cycle-hash")==i){if(o===!0)t.startingSlide=n;else{var s=t.currSlide<n;t.nextSlide=n,t.API.prepareTx(!0,s)}return!1}}))}e(document).on("cycle-pre-initialize",function(o,i){t(i,!0),i._onHashChange=function(){t(i,!1)},e(window).on("hashchange",i._onHashChange)}),e(document).on("cycle-update-view",function(e,t,o){o.hash&&"#"+o.hash!=window.location.hash&&(t._hashFence=!0,window.location.hash=o.hash)}),e(document).on("cycle-destroyed",function(t,o){o._onHashChange&&e(window).off("hashchange",o._onHashChange)})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{loader:!1}),e(document).on("cycle-bootstrap",function(t,o){function i(t,i){function s(t){var s;"wait"==o.loader?(l.push(t),0===c&&(l.sort(r),n.apply(o.API,[l,i]),o.container.removeClass("cycle-loading"))):(s=e(o.slides[o.currSlide]),n.apply(o.API,[t,i]),s.show(),o.container.removeClass("cycle-loading"))}function r(e,t){return e.data("index")-t.data("index")}var l=[];if("string"==e.type(t))t=e.trim(t);else if("array"===e.type(t))for(var a=0;a<t.length;a++)t[a]=e(t[a])[0];t=e(t);var c=t.length;c&&(t.css("visibility","hidden").appendTo("body").each(function(t){function r(){0===--a&&(--c,s(d))}var a=0,d=e(this),p=d.is("img")?d:d.find("img");return d.data("index",t),p=p.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),p.length?(a=p.length,void p.each(function(){this.complete?r():e(this).load(function(){r()}).on("error",function(){0===--a&&(o.API.log("slide skipped; img not loaded:",this.src),0===--c&&"wait"==o.loader&&n.apply(o.API,[l,i]))})})):(--c,void l.push(d))}),c&&o.container.addClass("cycle-loading"))}var n;o.loader&&(n=o.API.add,o.API.add=i)})}(jQuery),function(e){"use strict";function t(t,o,i){var n,s=t.API.getComponent("pager");s.each(function(){var s=e(this);if(o.pagerTemplate){var r=t.API.tmpl(o.pagerTemplate,o,t,i[0]);n=e(r).appendTo(s)}else n=s.children().eq(t.slideCount-1);n.on(t.pagerEvent,function(e){t.pagerEventBubble||e.preventDefault(),t.API.page(s,e.currentTarget)})})}function o(e,t){var o=this.opts();if(!o.busy||o.manualTrump){var i=e.children().index(t),n=i,s=o.currSlide<n;o.currSlide!=n&&(o.nextSlide=n,o._tempFx=o.pagerFx,o.API.prepareTx(!0,s),o.API.trigger("cycle-pager-activated",[o,e,t]))}}e.extend(e.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerEventBubble:void 0,pagerTemplate:"<span>&bull;</span>"}),e(document).on("cycle-bootstrap",function(e,o,i){i.buildPagerLink=t}),e(document).on("cycle-slide-added",function(e,t,i,n){t.pager&&(t.API.buildPagerLink(t,i,n),t.API.page=o)}),e(document).on("cycle-slide-removed",function(t,o,i,n){if(o.pager){var s=o.API.getComponent("pager");s.each(function(){var t=e(this);e(t.children()[i]).remove()})}}),e(document).on("cycle-update-view",function(t,o,i){var n;o.pager&&(n=o.API.getComponent("pager"),n.each(function(){e(this).children().removeClass(o.pagerActiveClass).eq(o.currSlide).addClass(o.pagerActiveClass)}))}),e(document).on("cycle-destroyed",function(e,t){var o=t.API.getComponent("pager");o&&(o.children().off(t.pagerEvent),t.pagerTemplate&&o.empty())})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),e(document).on("cycle-initialized",function(e,t){if(t.API.getComponent("next").on(t.nextEvent,function(e){e.preventDefault(),t.API.next()}),t.API.getComponent("prev").on(t.prevEvent,function(e){e.preventDefault(),t.API.prev()}),t.swipe){var o=t.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",i=t.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";t.container.on(o,function(e){t._tempFx=t.swipeFx,t.API.next()}),t.container.on(i,function(){t._tempFx=t.swipeFx,t.API.prev()})}}),e(document).on("cycle-update-view",function(e,t,o,i){if(!t.allowWrap){var n=t.disabledClass,s=t.API.getComponent("next"),r=t.API.getComponent("prev"),l=t._prevBoundry||0,a=void 0!==t._nextBoundry?t._nextBoundry:t.slideCount-1;t.currSlide==a?s.addClass(n).prop("disabled",!0):s.removeClass(n).prop("disabled",!1),t.currSlide===l?r.addClass(n).prop("disabled",!0):r.removeClass(n).prop("disabled",!1)}}),e(document).on("cycle-destroyed",function(e,t){t.API.getComponent("prev").off(t.nextEvent),t.API.getComponent("next").off(t.prevEvent),t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{progressive:!1}),e(document).on("cycle-pre-initialize",function(t,o){if(o.progressive){var i,n,s=o.API,r=s.next,l=s.prev,a=s.prepareTx,c=e.type(o.progressive);if("array"==c)i=o.progressive;else if(e.isFunction(o.progressive))i=o.progressive(o);else if("string"==c){if(n=e(o.progressive),i=e.trim(n.html()),!i)return;if(/^(\[)/.test(i))try{i=e.parseJSON(i)}catch(e){return void s.log("error parsing progressive slides",e)}else i=i.split(new RegExp(n.data("cycle-split")||"\n")),i[i.length-1]||i.pop()}a&&(s.prepareTx=function(e,t){var n,s;return e||0===i.length?void a.apply(o.API,[e,t]):void(t&&o.currSlide==o.slideCount-1?(s=i[0],i=i.slice(1),o.container.one("cycle-slide-added",function(e,t){setTimeout(function(){t.API.advanceSlide(1)},50)}),o.API.add(s)):t||0!==o.currSlide?a.apply(o.API,[e,t]):(n=i.length-1,s=i[n],i=i.slice(0,n),o.container.one("cycle-slide-added",function(e,t){setTimeout(function(){t.currSlide=1,t.API.advanceSlide(-1)},50)}),o.API.add(s,!0)))}),r&&(s.next=function(){var e=this.opts();if(i.length&&e.currSlide==e.slideCount-1){var t=i[0];i=i.slice(1),e.container.one("cycle-slide-added",function(e,t){r.apply(t.API),t.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(t)}else r.apply(e.API)}),l&&(s.prev=function(){var e=this.opts();if(i.length&&0===e.currSlide){var t=i.length-1,o=i[t];i=i.slice(0,t),e.container.one("cycle-slide-added",function(e,t){t.currSlide=1,t.API.advanceSlide(-1),t.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(o,!0)}else l.apply(e.API)})}})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),e.extend(e.fn.cycle.API,{tmpl:function(t,o){var i=new RegExp(o.tmplRegex||e.fn.cycle.defaults.tmplRegex,"g"),n=e.makeArray(arguments);return n.shift(),t.replace(i,function(t,o){var i,s,r,l,a=o.split(".");for(i=0;i<n.length;i++)if(r=n[i]){if(a.length>1)for(l=r,s=0;s<a.length;s++)r=l,l=l[a[s]]||o;else l=r[o];if(e.isFunction(l))return l.apply(r,n);if(void 0!==l&&null!==l&&l!=o)return l}return o})}})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{centerHorz:!1,centerVert:!1}),e(document).on("cycle-pre-initialize",function(t,o){function i(){clearTimeout(a),a=setTimeout(r,50)}function n(t,o){clearTimeout(a),clearTimeout(c),e(window).off("resize orientationchange",i)}function s(){o.slides.each(l)}function r(){l.apply(o.container.find("."+o.slideActiveClass)),clearTimeout(c),c=setTimeout(s,50)}function l(){var t=e(this),i=o.container.width(),n=o.container.height(),s=t.outerWidth(),r=t.outerHeight();s&&(o.centerHorz&&s<=i&&t.css("marginLeft",(i-s)/2),o.centerVert&&r<=n&&t.css("marginTop",(n-r)/2))}if(o.centerHorz||o.centerVert){var a,c;e(window).on("resize orientationchange load",i),o.container.on("cycle-destroyed",n),o.container.on("cycle-initialized cycle-slide-added cycle-slide-removed",function(e,t,o,n){i()}),r()}})}(jQuery),function(e){"use strict";"ontouchend"in document;e.event.special.swipe=e.event.special.swipe||{scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var t=e(this);t.bind("touchstart",function(o){function i(t){if(r){var o=t.originalEvent.touches?t.originalEvent.touches[0]:t;n={time:(new Date).getTime(),coords:[o.pageX,o.pageY]},Math.abs(r.coords[0]-n.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()}}var n,s=o.originalEvent.touches?o.originalEvent.touches[0]:o,r={time:(new Date).getTime(),coords:[s.pageX,s.pageY],origin:e(o.target)};t.bind("touchmove",i).one("touchend",function(o){t.unbind("touchmove",i),r&&n&&n.time-r.time<e.event.special.swipe.durationThreshold&&Math.abs(r.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(r.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold&&r.origin.trigger("swipe").trigger(r.coords[0]>n.coords[0]?"swipeleft":"swiperight"),r=n=void 0})})}},e.event.special.swipeleft=e.event.special.swipeleft||{setup:function(){e(this).bind("swipe",e.noop)}},e.event.special.swiperight=e.event.special.swiperight||e.event.special.swipeleft}(jQuery),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";function t(t){return!t.nodeName||e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])!==-1}function o(t){return e.isFunction(t)||e.isPlainObject(t)?t:{top:t,left:t}}var i=e.scrollTo=function(t,o,i){return e(window).scrollTo(t,o,i)};return i.defaults={axis:"xy",duration:0,limit:!0},e.fn.scrollTo=function(n,s,r){"object"==typeof s&&(r=s,s=0),"function"==typeof r&&(r={onAfter:r}),"max"===n&&(n=9e9),r=e.extend({},i.defaults,r),s=s||r.duration;var l=r.queue&&r.axis.length>1;return l&&(s/=2),r.offset=o(r.offset),r.over=o(r.over),this.each(function(){function a(t){var o=e.extend({},r,{queue:!0,duration:s,complete:t&&function(){t.call(p,f,r)}});u.animate(h,o)}if(null!==n){var c,d=t(this),p=d?this.contentWindow||window:this,u=e(p),f=n,h={};switch(typeof f){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)){f=o(f);break}f=d?e(f):e(f,p);case"object":if(0===f.length)return;(f.is||f.style)&&(c=(f=e(f)).offset())}var m=e.isFunction(r.offset)&&r.offset(p,f)||r.offset;e.each(r.axis.split(""),function(e,t){var o="x"===t?"Left":"Top",n=o.toLowerCase(),s="scroll"+o,g=u[s](),v=i.max(p,t);if(c)h[s]=c[n]+(d?0:g-u.offset()[n]),r.margin&&(h[s]-=parseInt(f.css("margin"+o),10)||0,h[s]-=parseInt(f.css("border"+o+"Width"),10)||0),h[s]+=m[n]||0,r.over[n]&&(h[s]+=f["x"===t?"width":"height"]()*r.over[n]);else{var y=f[n];h[s]=y.slice&&"%"===y.slice(-1)?parseFloat(y)/100*v:y}r.limit&&/^\d+$/.test(h[s])&&(h[s]=h[s]<=0?0:Math.min(h[s],v)),!e&&r.axis.length>1&&(g===h[s]?h={}:l&&(a(r.onAfterFirst),h={}))}),a(r.onAfter)}})},i.max=function(o,i){var n="x"===i?"Width":"Height",s="scroll"+n;if(!t(o))return o[s]-e(o)[n.toLowerCase()]();var r="client"+n,l=o.ownerDocument||o.document,a=l.documentElement,c=l.body;return Math.max(a[s],c[s])-Math.min(a[r],c[r])},e.Tween.propHooks.scrollLeft=e.Tween.propHooks.scrollTop={get:function(t){return e(t.elem)[t.prop]()},set:function(t){var o=this.get(t);if(t.options.interrupt&&t._last&&t._last!==o)return e(t.elem).stop();var i=Math.round(t.now);o!==i&&(e(t.elem)[t.prop](i),t._last=this.get(t))}},i}),function(e,t){function o(e){return""===s?e:(e=e.charAt(0).toUpperCase()+e.substr(1),s+e)}var i=Math,n=t.createElement("div").style,s=function(){for(var e,t="t,webkitT,MozT,msT,OT".split(","),o=0,i=t.length;o<i;o++)if(e=t[o]+"ransform",e in n)return t[o].substr(0,t[o].length-1);return!1}(),r=s?"-"+s.toLowerCase()+"-":"",l=o("transform"),a=o("transitionProperty"),c=o("transitionDuration"),d=o("transformOrigin"),p=o("transitionTimingFunction"),u=o("transitionDelay"),f=/android/gi.test(navigator.appVersion),h=/iphone|ipad/gi.test(navigator.appVersion),m=/hp-tablet/gi.test(navigator.appVersion),g=o("perspective")in n,v="ontouchstart"in e&&!m,y=s!==!1,S=o("transition")in n,x="onorientationchange"in e?"orientationchange":"resize",b=v?"touchstart":"mousedown",w=v?"touchmove":"mousemove",T=v?"touchend":"mouseup",I=v?"touchcancel":"mouseup",P=function(){if(s===!1)return!1;var e={"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"};return e[s]}(),A=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){return setTimeout(e,1)}}(),_=function(){return e.cancelRequestAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame||e.mozCancelRequestAnimationFrame||e.oCancelRequestAnimationFrame||e.msCancelRequestAnimationFrame||clearTimeout}(),z=g?" translateZ(0)":"",C=function(o,i){var n,s=this;s.wrapper="object"==typeof o?o:t.getElementById(o),s.wrapper.style.overflow="hidden",s.scroller=s.wrapper.children[0],s.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:f,hideScrollbar:h,fadeScrollbar:h&&g,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(e){e.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(n in i)s.options[n]=i[n];s.x=s.options.x,s.y=s.options.y,s.options.useTransform=y&&s.options.useTransform,s.options.hScrollbar=s.options.hScroll&&s.options.hScrollbar,s.options.vScrollbar=s.options.vScroll&&s.options.vScrollbar,s.options.zoom=s.options.useTransform&&s.options.zoom,s.options.useTransition=S&&s.options.useTransition,s.options.zoom&&f&&(z=""),s.scroller.style[a]=s.options.useTransform?r+"transform":"top left",s.scroller.style[c]="0",s.scroller.style[d]="0 0",s.options.useTransition&&(s.scroller.style[p]="cubic-bezier(0.33,0.66,0.66,1)"),s.options.useTransform?s.scroller.style[l]="translate("+s.x+"px,"+s.y+"px)"+z:s.scroller.style.cssText+=";position:absolute;top:"+s.y+"px;left:"+s.x+"px",s.options.useTransition&&(s.options.fixedScrollbar=!0),s.refresh(),s._bind(x,e),s._bind(b),v||"none"!=s.options.wheelAction&&(s._bind("DOMMouseScroll"),s._bind("mousewheel")),s.options.checkDOMChanges&&(s.checkDOMTime=setInterval(function(){s._checkDOMChanges()},500))};C.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(e){var t=this;switch(e.type){case b:if(!v&&0!==e.button)return;t._start(e);break;case w:t._move(e);break;case T:case I:t._end(e);break;case x:t._resize();break;case"DOMMouseScroll":case"mousewheel":t._wheel(e);break;case P:t._transitionEnd(e)}},_checkDOMChanges:function(){this.moved||this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale||this.refresh()},_scrollbar:function(e){var o,n=this;return n[e+"Scrollbar"]?(n[e+"ScrollbarWrapper"]||(o=t.createElement("div"),n.options.scrollbarClass?o.className=n.options.scrollbarClass+e.toUpperCase():o.style.cssText="position:absolute;z-index:100;"+("h"==e?"height:7px;bottom:1px;left:2px;right:"+(n.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(n.hScrollbar?"7":"2")+"px;top:2px;right:1px"),o.style.cssText+=";pointer-events:none;"+r+"transition-property:opacity;"+r+"transition-duration:"+(n.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(n.options.hideScrollbar?"0":"1"),n.wrapper.appendChild(o),n[e+"ScrollbarWrapper"]=o,o=t.createElement("div"),n.options.scrollbarClass||(o.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+r+"background-clip:padding-box;"+r+"box-sizing:border-box;"+("h"==e?"height:100%":"width:100%")+";"+r+"border-radius:3px;border-radius:3px"),o.style.cssText+=";pointer-events:none;"+r+"transition-property:"+r+"transform;"+r+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+r+"transition-duration:0;"+r+"transform: translate(0,0)"+z,n.options.useTransition&&(o.style.cssText+=";"+r+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),n[e+"ScrollbarWrapper"].appendChild(o),n[e+"ScrollbarIndicator"]=o),"h"==e?(n.hScrollbarSize=n.hScrollbarWrapper.clientWidth,n.hScrollbarIndicatorSize=i.max(i.round(n.hScrollbarSize*n.hScrollbarSize/n.scrollerW),8),n.hScrollbarIndicator.style.width=n.hScrollbarIndicatorSize+"px",n.hScrollbarMaxScroll=n.hScrollbarSize-n.hScrollbarIndicatorSize,
n.hScrollbarProp=n.hScrollbarMaxScroll/n.maxScrollX):(n.vScrollbarSize=n.vScrollbarWrapper.clientHeight,n.vScrollbarIndicatorSize=i.max(i.round(n.vScrollbarSize*n.vScrollbarSize/n.scrollerH),8),n.vScrollbarIndicator.style.height=n.vScrollbarIndicatorSize+"px",n.vScrollbarMaxScroll=n.vScrollbarSize-n.vScrollbarIndicatorSize,n.vScrollbarProp=n.vScrollbarMaxScroll/n.maxScrollY),void n._scrollbarPos(e,!0)):void(n[e+"ScrollbarWrapper"]&&(y&&(n[e+"ScrollbarIndicator"].style[l]=""),n[e+"ScrollbarWrapper"].parentNode.removeChild(n[e+"ScrollbarWrapper"]),n[e+"ScrollbarWrapper"]=null,n[e+"ScrollbarIndicator"]=null))},_resize:function(){var e=this;setTimeout(function(){e.refresh()},f?200:0)},_pos:function(e,t){this.zoomed||(e=this.hScroll?e:0,t=this.vScroll?t:0,this.options.useTransform?this.scroller.style[l]="translate("+e+"px,"+t+"px) scale("+this.scale+")"+z:(e=i.round(e),t=i.round(t),this.scroller.style.left=e+"px",this.scroller.style.top=t+"px"),this.x=e,this.y=t,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(e,t){var o,n=this,s="h"==e?n.x:n.y;n[e+"Scrollbar"]&&(s=n[e+"ScrollbarProp"]*s,s<0?(n.options.fixedScrollbar||(o=n[e+"ScrollbarIndicatorSize"]+i.round(3*s),o<8&&(o=8),n[e+"ScrollbarIndicator"].style["h"==e?"width":"height"]=o+"px"),s=0):s>n[e+"ScrollbarMaxScroll"]&&(n.options.fixedScrollbar?s=n[e+"ScrollbarMaxScroll"]:(o=n[e+"ScrollbarIndicatorSize"]-i.round(3*(s-n[e+"ScrollbarMaxScroll"])),o<8&&(o=8),n[e+"ScrollbarIndicator"].style["h"==e?"width":"height"]=o+"px",s=n[e+"ScrollbarMaxScroll"]+(n[e+"ScrollbarIndicatorSize"]-o))),n[e+"ScrollbarWrapper"].style[u]="0",n[e+"ScrollbarWrapper"].style.opacity=t&&n.options.hideScrollbar?"0":"1",n[e+"ScrollbarIndicator"].style[l]="translate("+("h"==e?s+"px,0)":"0,"+s+"px)")+z)},_start:function(t){var o,n,s,r,a,c=this,d=v?t.touches[0]:t;c.enabled&&(c.options.onBeforeScrollStart&&c.options.onBeforeScrollStart.call(c,t),(c.options.useTransition||c.options.zoom)&&c._transitionTime(0),c.moved=!1,c.animating=!1,c.zoomed=!1,c.distX=0,c.distY=0,c.absDistX=0,c.absDistY=0,c.dirX=0,c.dirY=0,c.options.zoom&&v&&t.touches.length>1&&(r=i.abs(t.touches[0].pageX-t.touches[1].pageX),a=i.abs(t.touches[0].pageY-t.touches[1].pageY),c.touchesDistStart=i.sqrt(r*r+a*a),c.originX=i.abs(t.touches[0].pageX+t.touches[1].pageX-2*c.wrapperOffsetLeft)/2-c.x,c.originY=i.abs(t.touches[0].pageY+t.touches[1].pageY-2*c.wrapperOffsetTop)/2-c.y,c.options.onZoomStart&&c.options.onZoomStart.call(c,t)),c.options.momentum&&(c.options.useTransform?(o=getComputedStyle(c.scroller,null)[l].replace(/[^0-9\-.,]/g,"").split(","),n=+(o[12]||o[4]),s=+(o[13]||o[5])):(n=+getComputedStyle(c.scroller,null).left.replace(/[^0-9-]/g,""),s=+getComputedStyle(c.scroller,null).top.replace(/[^0-9-]/g,"")),n==c.x&&s==c.y||(c.options.useTransition?c._unbind(P):_(c.aniTime),c.steps=[],c._pos(n,s),c.options.onScrollEnd&&c.options.onScrollEnd.call(c))),c.absStartX=c.x,c.absStartY=c.y,c.startX=c.x,c.startY=c.y,c.pointX=d.pageX,c.pointY=d.pageY,c.startTime=t.timeStamp||Date.now(),c.options.onScrollStart&&c.options.onScrollStart.call(c,t),c._bind(w,e),c._bind(T,e),c._bind(I,e))},_move:function(e){var t,o,n,s=this,r=v?e.touches[0]:e,a=r.pageX-s.pointX,c=r.pageY-s.pointY,d=s.x+a,p=s.y+c,u=e.timeStamp||Date.now();return s.options.onBeforeScrollMove&&s.options.onBeforeScrollMove.call(s,e),s.options.zoom&&v&&e.touches.length>1?(t=i.abs(e.touches[0].pageX-e.touches[1].pageX),o=i.abs(e.touches[0].pageY-e.touches[1].pageY),s.touchesDist=i.sqrt(t*t+o*o),s.zoomed=!0,n=1/s.touchesDistStart*s.touchesDist*this.scale,n<s.options.zoomMin?n=.5*s.options.zoomMin*Math.pow(2,n/s.options.zoomMin):n>s.options.zoomMax&&(n=2*s.options.zoomMax*Math.pow(.5,s.options.zoomMax/n)),s.lastScale=n/this.scale,d=this.originX-this.originX*s.lastScale+this.x,p=this.originY-this.originY*s.lastScale+this.y,this.scroller.style[l]="translate("+d+"px,"+p+"px) scale("+n+")"+z,void(s.options.onZoom&&s.options.onZoom.call(s,e))):(s.pointX=r.pageX,s.pointY=r.pageY,(d>0||d<s.maxScrollX)&&(d=s.options.bounce?s.x+a/2:d>=0||s.maxScrollX>=0?0:s.maxScrollX),(p>s.minScrollY||p<s.maxScrollY)&&(p=s.options.bounce?s.y+c/2:p>=s.minScrollY||s.maxScrollY>=0?s.minScrollY:s.maxScrollY),s.distX+=a,s.distY+=c,s.absDistX=i.abs(s.distX),s.absDistY=i.abs(s.distY),void(s.absDistX<6&&s.absDistY<6||(s.options.lockDirection&&(s.absDistX>s.absDistY+5?(p=s.y,c=0):s.absDistY>s.absDistX+5&&(d=s.x,a=0)),s.moved=!0,s._pos(d,p),s.dirX=a>0?-1:a<0?1:0,s.dirY=c>0?-1:c<0?1:0,u-s.startTime>300&&(s.startTime=u,s.startX=s.x,s.startY=s.y),s.options.onScrollMove&&s.options.onScrollMove.call(s,e))))},_end:function(o){if(!v||0===o.touches.length){var n,s,r,a,d,p,u,f=this,h=v?o.changedTouches[0]:o,m={dist:0,time:0},g={dist:0,time:0},y=(o.timeStamp||Date.now())-f.startTime,S=f.x,x=f.y;if(f._unbind(w,e),f._unbind(T,e),f._unbind(I,e),f.options.onBeforeScrollEnd&&f.options.onBeforeScrollEnd.call(f,o),f.zoomed)return u=f.scale*f.lastScale,u=Math.max(f.options.zoomMin,u),u=Math.min(f.options.zoomMax,u),f.lastScale=u/f.scale,f.scale=u,f.x=f.originX-f.originX*f.lastScale+f.x,f.y=f.originY-f.originY*f.lastScale+f.y,f.scroller.style[c]="200ms",f.scroller.style[l]="translate("+f.x+"px,"+f.y+"px) scale("+f.scale+")"+z,f.zoomed=!1,f.refresh(),void(f.options.onZoomEnd&&f.options.onZoomEnd.call(f,o));if(!f.moved)return v&&(f.doubleTapTimer&&f.options.zoom?(clearTimeout(f.doubleTapTimer),f.doubleTapTimer=null,f.options.onZoomStart&&f.options.onZoomStart.call(f,o),f.zoom(f.pointX,f.pointY,1==f.scale?f.options.doubleTapZoom:1),f.options.onZoomEnd&&setTimeout(function(){f.options.onZoomEnd.call(f,o)},200)):this.options.handleClick&&(f.doubleTapTimer=setTimeout(function(){for(f.doubleTapTimer=null,n=h.target;1!=n.nodeType;)n=n.parentNode;"SELECT"!=n.tagName&&"INPUT"!=n.tagName&&"TEXTAREA"!=n.tagName&&(s=t.createEvent("MouseEvents"),s.initMouseEvent("click",!0,!0,o.view,1,h.screenX,h.screenY,h.clientX,h.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,0,null),s._fake=!0,n.dispatchEvent(s))},f.options.zoom?250:0))),f._resetPos(400),void(f.options.onTouchEnd&&f.options.onTouchEnd.call(f,o));if(y<300&&f.options.momentum&&(m=S?f._momentum(S-f.startX,y,-f.x,f.scrollerW-f.wrapperW+f.x,f.options.bounce?f.wrapperW:0):m,g=x?f._momentum(x-f.startY,y,-f.y,f.maxScrollY<0?f.scrollerH-f.wrapperH+f.y-f.minScrollY:0,f.options.bounce?f.wrapperH:0):g,S=f.x+m.dist,x=f.y+g.dist,(f.x>0&&S>0||f.x<f.maxScrollX&&S<f.maxScrollX)&&(m={dist:0,time:0}),(f.y>f.minScrollY&&x>f.minScrollY||f.y<f.maxScrollY&&x<f.maxScrollY)&&(g={dist:0,time:0})),m.dist||g.dist)return d=i.max(i.max(m.time,g.time),10),f.options.snap&&(r=S-f.absStartX,a=x-f.absStartY,i.abs(r)<f.options.snapThreshold&&i.abs(a)<f.options.snapThreshold?f.scrollTo(f.absStartX,f.absStartY,200):(p=f._snap(S,x),S=p.x,x=p.y,d=i.max(p.time,d))),f.scrollTo(i.round(S),i.round(x),d),void(f.options.onTouchEnd&&f.options.onTouchEnd.call(f,o));if(f.options.snap)return r=S-f.absStartX,a=x-f.absStartY,i.abs(r)<f.options.snapThreshold&&i.abs(a)<f.options.snapThreshold?f.scrollTo(f.absStartX,f.absStartY,200):(p=f._snap(f.x,f.y),p.x==f.x&&p.y==f.y||f.scrollTo(p.x,p.y,p.time)),void(f.options.onTouchEnd&&f.options.onTouchEnd.call(f,o));f._resetPos(200),f.options.onTouchEnd&&f.options.onTouchEnd.call(f,o)}},_resetPos:function(e){var t=this,o=t.x>=0?0:t.x<t.maxScrollX?t.maxScrollX:t.x,i=t.y>=t.minScrollY||t.maxScrollY>0?t.minScrollY:t.y<t.maxScrollY?t.maxScrollY:t.y;return o==t.x&&i==t.y?(t.moved&&(t.moved=!1,t.options.onScrollEnd&&t.options.onScrollEnd.call(t)),t.hScrollbar&&t.options.hideScrollbar&&("webkit"==s&&(t.hScrollbarWrapper.style[u]="300ms"),t.hScrollbarWrapper.style.opacity="0"),void(t.vScrollbar&&t.options.hideScrollbar&&("webkit"==s&&(t.vScrollbarWrapper.style[u]="300ms"),t.vScrollbarWrapper.style.opacity="0"))):void t.scrollTo(o,i,e||0)},_wheel:function(e){var t,o,i,n,s,r=this;if("wheelDeltaX"in e)t=e.wheelDeltaX/12,o=e.wheelDeltaY/12;else if("wheelDelta"in e)t=o=e.wheelDelta/12;else{if(!("detail"in e))return;t=o=3*-e.detail}return"zoom"==r.options.wheelAction?(s=r.scale*Math.pow(2,1/3*(o?o/Math.abs(o):0)),s<r.options.zoomMin&&(s=r.options.zoomMin),s>r.options.zoomMax&&(s=r.options.zoomMax),void(s!=r.scale&&(!r.wheelZoomCount&&r.options.onZoomStart&&r.options.onZoomStart.call(r,e),r.wheelZoomCount++,r.zoom(e.pageX,e.pageY,s,400),setTimeout(function(){r.wheelZoomCount--,!r.wheelZoomCount&&r.options.onZoomEnd&&r.options.onZoomEnd.call(r,e)},400)))):(i=r.x+t,n=r.y+o,i>0?i=0:i<r.maxScrollX&&(i=r.maxScrollX),n>r.minScrollY?n=r.minScrollY:n<r.maxScrollY&&(n=r.maxScrollY),void(r.maxScrollY<0&&r.scrollTo(i,n,0)))},_transitionEnd:function(e){var t=this;e.target==t.scroller&&(t._unbind(P),t._startAni())},_startAni:function(){var e,t,o,n=this,s=n.x,r=n.y,l=Date.now();if(!n.animating){if(!n.steps.length)return void n._resetPos(400);if(e=n.steps.shift(),e.x==s&&e.y==r&&(e.time=0),n.animating=!0,n.moved=!0,n.options.useTransition)return n._transitionTime(e.time),n._pos(e.x,e.y),n.animating=!1,void(e.time?n._bind(P):n._resetPos(0));o=function(){var a,c,d=Date.now();return d>=l+e.time?(n._pos(e.x,e.y),n.animating=!1,n.options.onAnimationEnd&&n.options.onAnimationEnd.call(n),void n._startAni()):(d=(d-l)/e.time-1,t=i.sqrt(1-d*d),a=(e.x-s)*t+s,c=(e.y-r)*t+r,n._pos(a,c),void(n.animating&&(n.aniTime=A(o))))},o()}},_transitionTime:function(e){e+="ms",this.scroller.style[c]=e,this.hScrollbar&&(this.hScrollbarIndicator.style[c]=e),this.vScrollbar&&(this.vScrollbarIndicator.style[c]=e)},_momentum:function(e,t,o,n,s){var r=6e-4,l=i.abs(e)/t,a=l*l/(2*r),c=0,d=0;return e>0&&a>o?(d=s/(6/(a/l*r)),o+=d,l=l*o/a,a=o):e<0&&a>n&&(d=s/(6/(a/l*r)),n+=d,l=l*n/a,a=n),a*=e<0?-1:1,c=l/r,{dist:a,time:i.round(c)}},_offset:function(e){for(var t=-e.offsetLeft,o=-e.offsetTop;e=e.offsetParent;)t-=e.offsetLeft,o-=e.offsetTop;return e!=this.wrapper&&(t*=this.scale,o*=this.scale),{left:t,top:o}},_snap:function(e,t){var o,n,s,r,l,a,c=this;for(s=c.pagesX.length-1,o=0,n=c.pagesX.length;o<n;o++)if(e>=c.pagesX[o]){s=o;break}for(s==c.currPageX&&s>0&&c.dirX<0&&s--,e=c.pagesX[s],l=i.abs(e-c.pagesX[c.currPageX]),l=l?i.abs(c.x-e)/l*500:0,c.currPageX=s,s=c.pagesY.length-1,o=0;o<s;o++)if(t>=c.pagesY[o]){s=o;break}return s==c.currPageY&&s>0&&c.dirY<0&&s--,t=c.pagesY[s],a=i.abs(t-c.pagesY[c.currPageY]),a=a?i.abs(c.y-t)/a*500:0,c.currPageY=s,r=i.round(i.max(l,a))||200,{x:e,y:t,time:r}},_bind:function(e,t,o){(t||this.scroller).addEventListener(e,this,!!o)},_unbind:function(e,t,o){(t||this.scroller).removeEventListener(e,this,!!o)},destroy:function(){var t=this;t.scroller.style[l]="",t.hScrollbar=!1,t.vScrollbar=!1,t._scrollbar("h"),t._scrollbar("v"),t._unbind(x,e),t._unbind(b),t._unbind(w,e),t._unbind(T,e),t._unbind(I,e),t.options.hasTouch||(t._unbind("DOMMouseScroll"),t._unbind("mousewheel")),t.options.useTransition&&t._unbind(P),t.options.checkDOMChanges&&clearInterval(t.checkDOMTime),t.options.onDestroy&&t.options.onDestroy.call(t)},refresh:function(){var e,t,o,n,s=this,r=0,l=0;if(s.scale<s.options.zoomMin&&(s.scale=s.options.zoomMin),s.wrapperW=s.wrapper.clientWidth||1,s.wrapperH=s.wrapper.clientHeight||1,s.minScrollY=-s.options.topOffset||0,s.scrollerW=i.round(s.scroller.offsetWidth*s.scale),s.scrollerH=i.round((s.scroller.offsetHeight+s.minScrollY)*s.scale),s.maxScrollX=s.wrapperW-s.scrollerW,s.maxScrollY=s.wrapperH-s.scrollerH+s.minScrollY,s.dirX=0,s.dirY=0,s.options.onRefresh&&s.options.onRefresh.call(s),s.hScroll=s.options.hScroll&&s.maxScrollX<0,s.vScroll=s.options.vScroll&&(!s.options.bounceLock&&!s.hScroll||s.scrollerH>s.wrapperH),s.hScrollbar=s.hScroll&&s.options.hScrollbar,s.vScrollbar=s.vScroll&&s.options.vScrollbar&&s.scrollerH>s.wrapperH,e=s._offset(s.wrapper),s.wrapperOffsetLeft=-e.left,s.wrapperOffsetTop=-e.top,"string"==typeof s.options.snap)for(s.pagesX=[],s.pagesY=[],n=s.scroller.querySelectorAll(s.options.snap),t=0,o=n.length;t<o;t++)r=s._offset(n[t]),r.left+=s.wrapperOffsetLeft,r.top+=s.wrapperOffsetTop,s.pagesX[t]=r.left<s.maxScrollX?s.maxScrollX:r.left*s.scale,s.pagesY[t]=r.top<s.maxScrollY?s.maxScrollY:r.top*s.scale;else if(s.options.snap){for(s.pagesX=[];r>=s.maxScrollX;)s.pagesX[l]=r,r-=s.wrapperW,l++;for(s.maxScrollX%s.wrapperW&&(s.pagesX[s.pagesX.length]=s.maxScrollX-s.pagesX[s.pagesX.length-1]+s.pagesX[s.pagesX.length-1]),r=0,l=0,s.pagesY=[];r>=s.maxScrollY;)s.pagesY[l]=r,r-=s.wrapperH,l++;s.maxScrollY%s.wrapperH&&(s.pagesY[s.pagesY.length]=s.maxScrollY-s.pagesY[s.pagesY.length-1]+s.pagesY[s.pagesY.length-1])}s._scrollbar("h"),s._scrollbar("v"),s.zoomed||(s.scroller.style[c]="0",s._resetPos(400))},scrollTo:function(e,t,o,i){var n,s,r=this,l=e;for(r.stop(),l.length||(l=[{x:e,y:t,time:o,relative:i}]),n=0,s=l.length;n<s;n++)l[n].relative&&(l[n].x=r.x-l[n].x,l[n].y=r.y-l[n].y),r.steps.push({x:l[n].x,y:l[n].y,time:l[n].time||0});r._startAni()},scrollToElement:function(e,t){var o,n=this;e=e.nodeType?e:n.scroller.querySelector(e),e&&(o=n._offset(e),o.left+=n.wrapperOffsetLeft,o.top+=n.wrapperOffsetTop,o.left=o.left>0?0:o.left<n.maxScrollX?n.maxScrollX:o.left,o.top=o.top>n.minScrollY?n.minScrollY:o.top<n.maxScrollY?n.maxScrollY:o.top,t=void 0===t?i.max(2*i.abs(o.left),2*i.abs(o.top)):t,n.scrollTo(o.left,o.top,t))},scrollToPage:function(e,t,o){var i,n,s=this;o=void 0===o?400:o,s.options.onScrollStart&&s.options.onScrollStart.call(s),s.options.snap?(e="next"==e?s.currPageX+1:"prev"==e?s.currPageX-1:e,t="next"==t?s.currPageY+1:"prev"==t?s.currPageY-1:t,e=e<0?0:e>s.pagesX.length-1?s.pagesX.length-1:e,t=t<0?0:t>s.pagesY.length-1?s.pagesY.length-1:t,s.currPageX=e,s.currPageY=t,i=s.pagesX[e],n=s.pagesY[t]):(i=-s.wrapperW*e,n=-s.wrapperH*t,i<s.maxScrollX&&(i=s.maxScrollX),n<s.maxScrollY&&(n=s.maxScrollY)),s.scrollTo(i,n,o)},disable:function(){this.stop(),this._resetPos(0),this.enabled=!1,this._unbind(w,e),this._unbind(T,e),this._unbind(I,e)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(P):_(this.aniTime),this.steps=[],this.moved=!1,this.animating=!1},zoom:function(e,t,o,i){var n=this,s=o/n.scale;n.options.useTransform&&(n.zoomed=!0,i=void 0===i?200:i,e=e-n.wrapperOffsetLeft-n.x,t=t-n.wrapperOffsetTop-n.y,n.x=e-e*s+n.x,n.y=t-t*s+n.y,n.scale=o,n.refresh(),n.x=n.x>0?0:n.x<n.maxScrollX?n.maxScrollX:n.x,n.y=n.y>n.minScrollY?n.minScrollY:n.y<n.maxScrollY?n.maxScrollY:n.y,n.scroller.style[c]=i+"ms",n.scroller.style[l]="translate("+n.x+"px,"+n.y+"px) scale("+o+")"+z,n.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}},n=null,"undefined"!=typeof exports?exports.iScroll=C:e.iScroll=C}(window,document),function(e,t,o,i){function n(t,o){this.element=t,this.options=e.extend({},r,o),this._defaults=r,this._name=s,this.init()}var s="stellar",r={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(e){e.hide()},showElement:function(e){e.show()}},l={scroll:{getLeft:function(e){return e.scrollLeft()},setLeft:function(e,t){e.scrollLeft(t)},getTop:function(e){return e.scrollTop()},setTop:function(e,t){e.scrollTop(t)}},position:{getLeft:function(e){return parseInt(e.css("left"),10)*-1},getTop:function(e){return parseInt(e.css("top"),10)*-1}},margin:{getLeft:function(e){return parseInt(e.css("margin-left"),10)*-1},getTop:function(e){return parseInt(e.css("margin-top"),10)*-1}},transform:{getLeft:function(e){var t=getComputedStyle(e[0])[d];return"none"!==t?parseInt(t.match(/(-?[0-9]+)/g)[4],10)*-1:0},getTop:function(e){var t=getComputedStyle(e[0])[d];return"none"!==t?parseInt(t.match(/(-?[0-9]+)/g)[5],10)*-1:0}}},a={position:{setLeft:function(e,t){e.css("left",t)},setTop:function(e,t){e.css("top",t)}},transform:{setPosition:function(e,t,o,i,n){e[0].style[d]="translate3d("+(t-o)+"px, "+(i-n)+"px, 0)"}}},c=function(){var t,o=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,i=e("script")[0].style,n="";for(t in i)if(o.test(t)){n=t.match(o)[0];break}return"WebkitOpacity"in i&&(n="Webkit"),"KhtmlOpacity"in i&&(n="Khtml"),function(e){return n+(n.length>0?e.charAt(0).toUpperCase()+e.slice(1):e)}}(),d=c("transform"),p=e("<div />",{style:"background:#fff"}).css("background-position-x")!==i,u=p?function(e,t,o){e.css({"background-position-x":t,"background-position-y":o})}:function(e,t,o){e.css("background-position",t+" "+o)},f=p?function(e){return[e.css("background-position-x"),e.css("background-position-y")]}:function(e){return e.css("background-position").split(" ")},h=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};n.prototype={init:function(){this.options.name=s+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===o.body&&(this.element=t),this.$scrollElement=e(this.element),this.$element=this.element===t?e("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==i?e(this.options.viewportElement):this.$scrollElement[0]===t||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var e=this,t=l[e.options.scrollProperty];this._getScrollLeft=function(){return t.getLeft(e.$scrollElement)},this._getScrollTop=function(){return t.getTop(e.$scrollElement)}},_defineSetters:function(){var t=this,o=l[t.options.scrollProperty],i=a[t.options.positionProperty],n=o.setLeft,s=o.setTop;this._setScrollLeft="function"==typeof n?function(e){n(t.$scrollElement,e)}:e.noop,this._setScrollTop="function"==typeof s?function(e){s(t.$scrollElement,e)}:e.noop,this._setPosition=i.setPosition||function(e,o,n,s,r){t.options.horizontalScrolling&&i.setLeft(e,o,n),t.options.verticalScrolling&&i.setTop(e,s,r)}},_handleWindowLoadAndResize:function(){var o=this,i=e(t);o.options.responsive&&i.bind("load."+this.name,function(){o.refresh()}),i.bind("resize."+this.name,function(){o._detectViewport(),o.options.responsive&&o.refresh()})},refresh:function(o){var i=this,n=i._getScrollLeft(),s=i._getScrollTop();o&&o.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),o&&o.firstLoad&&/WebKit/.test(navigator.userAgent)&&e(t).load(function(){var e=i._getScrollLeft(),t=i._getScrollTop();i._setScrollLeft(e+1),i._setScrollTop(t+1),i._setScrollLeft(e),i._setScrollTop(t)}),this._setScrollLeft(n),this._setScrollTop(s)},_detectViewport:function(){var e=this.$viewportElement.offset(),t=null!==e&&e!==i;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=t?e.top:0,this.viewportOffsetLeft=t?e.left:0},_findParticles:function(){var t=this;this._getScrollLeft(),this._getScrollTop();if(this.particles!==i)for(var o=this.particles.length-1;o>=0;o--)this.particles[o].$element.data("stellar-elementIsActive",i);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(o){var n,s,r,l,a,c,d,p,u,f=e(this),h=0,m=0,g=0,v=0;if(f.data("stellar-elementIsActive")){if(f.data("stellar-elementIsActive")!==this)return}else f.data("stellar-elementIsActive",this);t.options.showElement(f),f.data("stellar-startingLeft")?(f.css("left",f.data("stellar-startingLeft")),f.css("top",f.data("stellar-startingTop"))):(f.data("stellar-startingLeft",f.css("left")),f.data("stellar-startingTop",f.css("top"))),r=f.position().left,l=f.position().top,a="auto"===f.css("margin-left")?0:parseInt(f.css("margin-left"),10),c="auto"===f.css("margin-top")?0:parseInt(f.css("margin-top"),10),p=f.offset().left-a,u=f.offset().top-c,f.parents().each(function(){var t=e(this);return t.data("stellar-offset-parent")===!0?(h=g,m=v,d=t,!1):(g+=t.position().left,void(v+=t.position().top))}),n=f.data("stellar-horizontal-offset")!==i?f.data("stellar-horizontal-offset"):d!==i&&d.data("stellar-horizontal-offset")!==i?d.data("stellar-horizontal-offset"):t.horizontalOffset,s=f.data("stellar-vertical-offset")!==i?f.data("stellar-vertical-offset"):d!==i&&d.data("stellar-vertical-offset")!==i?d.data("stellar-vertical-offset"):t.verticalOffset,t.particles.push({$element:f,$offsetParent:d,isFixed:"fixed"===f.css("position"),horizontalOffset:n,verticalOffset:s,startingPositionLeft:r,startingPositionTop:l,startingOffsetLeft:p,startingOffsetTop:u,parentOffsetLeft:h,parentOffsetTop:m,stellarRatio:f.data("stellar-ratio")!==i?f.data("stellar-ratio"):1,width:f.outerWidth(!0),height:f.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var t,o=this,n=this._getScrollLeft(),s=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(t=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(t=t.add(this.$element)),t.each(function(){var t,r,l,a,c,d,p,h=e(this),m=f(h),g=0,v=0,y=0,S=0;if(h.data("stellar-backgroundIsActive")){if(h.data("stellar-backgroundIsActive")!==this)return}else h.data("stellar-backgroundIsActive",this);h.data("stellar-backgroundStartingLeft")?u(h,h.data("stellar-backgroundStartingLeft"),h.data("stellar-backgroundStartingTop")):(h.data("stellar-backgroundStartingLeft",m[0]),h.data("stellar-backgroundStartingTop",m[1])),l="auto"===h.css("margin-left")?0:parseInt(h.css("margin-left"),10),a="auto"===h.css("margin-top")?0:parseInt(h.css("margin-top"),10),c=h.offset().left-l-n,d=h.offset().top-a-s,h.parents().each(function(){var t=e(this);return t.data("stellar-offset-parent")===!0?(g=y,v=S,p=t,!1):(y+=t.position().left,void(S+=t.position().top))}),t=h.data("stellar-horizontal-offset")!==i?h.data("stellar-horizontal-offset"):p!==i&&p.data("stellar-horizontal-offset")!==i?p.data("stellar-horizontal-offset"):o.horizontalOffset,r=h.data("stellar-vertical-offset")!==i?h.data("stellar-vertical-offset"):p!==i&&p.data("stellar-vertical-offset")!==i?p.data("stellar-vertical-offset"):o.verticalOffset,o.backgrounds.push({$element:h,$offsetParent:p,isFixed:"fixed"===h.css("background-attachment"),horizontalOffset:t,verticalOffset:r,startingValueLeft:m[0],startingValueTop:m[1],startingBackgroundPositionLeft:isNaN(parseInt(m[0],10))?0:parseInt(m[0],10),startingBackgroundPositionTop:isNaN(parseInt(m[1],10))?0:parseInt(m[1],10),startingPositionLeft:h.position().left,startingPositionTop:h.position().top,startingOffsetLeft:c,startingOffsetTop:d,parentOffsetLeft:g,parentOffsetTop:v,stellarRatio:h.data("stellar-background-ratio")===i?1:h.data("stellar-background-ratio")})}))},_reset:function(){var e,t,o,i,n;for(n=this.particles.length-1;n>=0;n--)e=this.particles[n],t=e.$element.data("stellar-startingLeft"),o=e.$element.data("stellar-startingTop"),this._setPosition(e.$element,t,t,o,o),this.options.showElement(e.$element),e.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(n=this.backgrounds.length-1;n>=0;n--)i=this.backgrounds[n],i.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),u(i.$element,i.startingValueLeft,i.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=e.noop,e(t).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var o=this,i=e(t);i.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),i.bind("resize.horizontal-"+this.name,function(){o.horizontalOffset=o.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),i.bind("resize.vertical-"+this.name,function(){o.verticalOffset=o.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var e,t,o,i,n,s,r,l,a,c,d=this._getScrollLeft(),p=this._getScrollTop(),f=!0,h=!0;if(this.currentScrollLeft!==d||this.currentScrollTop!==p||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=d,this.currentScrollTop=p,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,c=this.particles.length-1;c>=0;c--)e=this.particles[c],t=e.isFixed?1:0,this.options.horizontalScrolling?(s=(d+e.horizontalOffset+this.viewportOffsetLeft+e.startingPositionLeft-e.startingOffsetLeft+e.parentOffsetLeft)*-(e.stellarRatio+t-1)+e.startingPositionLeft,l=s-e.startingPositionLeft+e.startingOffsetLeft):(s=e.startingPositionLeft,l=e.startingOffsetLeft),this.options.verticalScrolling?(r=(p+e.verticalOffset+this.viewportOffsetTop+e.startingPositionTop-e.startingOffsetTop+e.parentOffsetTop)*-(e.stellarRatio+t-1)+e.startingPositionTop,a=r-e.startingPositionTop+e.startingOffsetTop):(r=e.startingPositionTop,a=e.startingOffsetTop),this.options.hideDistantElements&&(h=!this.options.horizontalScrolling||l+e.width>(e.isFixed?0:d)&&l<(e.isFixed?0:d)+this.viewportWidth+this.viewportOffsetLeft,f=!this.options.verticalScrolling||a+e.height>(e.isFixed?0:p)&&a<(e.isFixed?0:p)+this.viewportHeight+this.viewportOffsetTop),h&&f?(e.isHidden&&(this.options.showElement(e.$element),e.isHidden=!1),this._setPosition(e.$element,s,e.startingPositionLeft,r,e.startingPositionTop)):e.isHidden||(this.options.hideElement(e.$element),e.isHidden=!0);for(c=this.backgrounds.length-1;c>=0;c--)o=this.backgrounds[c],t=o.isFixed?0:1,i=this.options.horizontalScrolling?(d+o.horizontalOffset-this.viewportOffsetLeft-o.startingOffsetLeft+o.parentOffsetLeft-o.startingBackgroundPositionLeft)*(t-o.stellarRatio)+"px":o.startingValueLeft,n=this.options.verticalScrolling?(p+o.verticalOffset-this.viewportOffsetTop-o.startingOffsetTop+o.parentOffsetTop-o.startingBackgroundPositionTop)*(t-o.stellarRatio)+"px":o.startingValueTop,u(o.$element,i,n)}},_handleScrollEvent:function(){var e=this,t=!1,o=function(){e._repositionElements(),t=!1},i=function(){t||(h(o),t=!0)};this.$scrollElement.bind("scroll."+this.name,i),i()},_startAnimationLoop:function(){var e=this;this._animationLoop=function(){h(e._animationLoop),e._repositionElements()},this._animationLoop()}},e.fn[s]=function(t){var o=arguments;return t===i||"object"==typeof t?this.each(function(){e.data(this,"plugin_"+s)||e.data(this,"plugin_"+s,new n(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?this.each(function(){var i=e.data(this,"plugin_"+s);i instanceof n&&"function"==typeof i[t]&&i[t].apply(i,Array.prototype.slice.call(o,1)),"destroy"===t&&e.data(this,"plugin_"+s,null)}):void 0},e[s]=function(o){var i=e(t);return i.stellar.apply(i,Array.prototype.slice.call(arguments,0))},e[s].scrollProperty=l,e[s].positionProperty=a,t.Stellar=n}(jQuery,this,document),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var r=t||window.event,l=a.call(arguments,1),c=0,p=0,u=0,f=0,h=0,m=0;if(t=e.event.fix(r),t.type="mousewheel","detail"in r&&(u=r.detail*-1),"wheelDelta"in r&&(u=r.wheelDelta),"wheelDeltaY"in r&&(u=r.wheelDeltaY),"wheelDeltaX"in r&&(p=r.wheelDeltaX*-1),"axis"in r&&r.axis===r.HORIZONTAL_AXIS&&(p=u*-1,u=0),c=0===u?p:u,"deltaY"in r&&(u=r.deltaY*-1,c=u),"deltaX"in r&&(p=r.deltaX,0===u&&(c=p*-1)),0!==u||0!==p){if(1===r.deltaMode){var g=e.data(this,"mousewheel-line-height");c*=g,u*=g,p*=g}else if(2===r.deltaMode){var v=e.data(this,"mousewheel-page-height");c*=v,u*=v,p*=v}if(f=Math.max(Math.abs(u),Math.abs(p)),(!s||f<s)&&(s=f,i(r,f)&&(s/=40)),i(r,f)&&(c/=40,p/=40,u/=40),c=Math[c>=1?"floor":"ceil"](c/s),p=Math[p>=1?"floor":"ceil"](p/s),u=Math[u>=1?"floor":"ceil"](u/s),d.settings.normalizeOffset&&this.getBoundingClientRect){var y=this.getBoundingClientRect();h=t.clientX-y.left,m=t.clientY-y.top}return t.deltaX=p,t.deltaY=u,t.deltaFactor=s,t.offsetX=h,t.offsetY=m,t.deltaMode=0,l.unshift(t,c,p,u),n&&clearTimeout(n),n=setTimeout(o,200),(e.event.dispatch||e.event.handle).apply(this,l)}}function o(){s=null}function i(e,t){return d.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var n,s,r=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],l="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],a=Array.prototype.slice;if(e.event.fixHooks)for(var c=r.length;c;)e.event.fixHooks[r[--c]]=e.event.mouseHooks;var d=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var o=l.length;o;)this.addEventListener(l[--o],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",d.getLineHeight(this)),e.data(this,"mousewheel-page-height",d.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var o=l.length;o;)this.removeEventListener(l[--o],t,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height"),e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var o=e(t),i=o["offsetParent"in e.fn?"offsetParent":"parent"]();return i.length||(i=e("body")),parseInt(i.css("fontSize"),10)||parseInt(o.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}),function(e){function t(){this.isField=!0,this.down=!1,this.inFocus=!1,this.disabled=!1,this.cutOff=!1,this.hasLabel=!1,this.keyboardMode=!1,this.nativeTouch=!0,this.wrapperClass="dropdown",this.onChange=null}t.prototype={constructor:t,instances:{},init:function(t,o){var i=this;e.extend(i,o),i.$select=e(t),i.id=t.id,i.options=[],i.$options=i.$select.find("option"),i.isTouch="ontouchend"in document,i.$select.removeClass(i.wrapperClass+" dropdown"),i.$select.is(":disabled")&&(i.disabled=!0),i.$options.length&&(i.$options.each(function(t){var o=e(this);o.is(":selected")&&(i.selected={index:t,title:o.text()},i.focusIndex=t),o.hasClass("label")&&0==t?(i.hasLabel=!0,i.label=o.text(),o.attr("value","")):i.options.push({domNode:o[0],title:o.text(),value:o.val(),selected:o.is(":selected")})}),i.selected||(i.selected={index:0,title:i.$options.eq(0).text()},i.focusIndex=0),i.render())},render:function(){var t=this,o=t.isTouch&&t.nativeTouch?" touch":"",i=t.disabled?" disabled":"";t.$container=t.$select.wrap('<div class="'+t.wrapperClass+o+i+'"><span class="old"/></div>').parent().parent(),t.$active=e('<span class="selected">'+t.selected.title+"</span>").appendTo(t.$container),t.$carat=e('<span class="carat"/>').appendTo(t.$container),t.$scrollWrapper=e("<div><ul/></div>").appendTo(t.$container),t.$dropDown=t.$scrollWrapper.find("ul"),t.$form=t.$container.closest("form"),e.each(t.options,function(){var e=this,o=e.selected?' class="active"':"";t.$dropDown.append("<li"+o+">"+e.title+"</li>")}),t.$items=t.$dropDown.find("li"),t.cutOff&&t.$items.length>t.cutOff&&t.$container.addClass("scrollable"),t.getMaxHeight(),t.isTouch&&t.nativeTouch?t.bindTouchHandlers():t.bindHandlers()},getMaxHeight:function(){var e=this;for(e.maxHeight=0,i=0;i<e.$items.length;i++){var t=e.$items.eq(i);if(e.maxHeight+=t.outerHeight(),e.cutOff==i+1)break}},bindTouchHandlers:function(){var t=this;t.$container.on("click.easyDropDown",function(){t.$select.focus()}),t.$select.on({change:function(){var o=e(this).find("option:selected"),i=o.text(),n=o.val();t.$active.text(i),"function"==typeof t.onChange&&t.onChange.call(t.$select[0],{title:i,value:n})},focus:function(){t.$container.addClass("focus")},blur:function(){t.$container.removeClass("focus")}})},bindHandlers:function(){var t=this;t.query="",t.$container.on({"click.easyDropDown":function(){t.down||t.disabled?t.close():t.open()},"mousemove.easyDropDown":function(){t.keyboardMode&&(t.keyboardMode=!1);
}}),e("body").on("click.easyDropDown."+t.id,function(o){var i=e(o.target),n=t.wrapperClass.split(" ").join(".");!i.closest("."+n).length&&t.down&&t.close()}),t.$items.on({"click.easyDropDown":function(){var o=e(this).index();t.select(o),t.$select.focus()},"mouseover.easyDropDown":function(){if(!t.keyboardMode){var o=e(this);o.addClass("focus").siblings().removeClass("focus"),t.focusIndex=o.index()}},"mouseout.easyDropDown":function(){t.keyboardMode||e(this).removeClass("focus")}}),t.$select.on({"focus.easyDropDown":function(){t.$container.addClass("focus"),t.inFocus=!0},"blur.easyDropDown":function(){t.$container.removeClass("focus"),t.inFocus=!1},"keydown.easyDropDown":function(e){if(t.inFocus){t.keyboardMode=!0;var o=e.keyCode;if(38!=o&&40!=o&&32!=o||(e.preventDefault(),38==o?(t.focusIndex--,t.focusIndex=t.focusIndex<0?t.$items.length-1:t.focusIndex):40==o&&(t.focusIndex++,t.focusIndex=t.focusIndex>t.$items.length-1?0:t.focusIndex),t.down||t.open(),t.$items.removeClass("focus").eq(t.focusIndex).addClass("focus"),t.cutOff&&t.scrollToView(),t.query=""),t.down)if(9==o||27==o)t.close();else{if(13==o)return e.preventDefault(),t.select(t.focusIndex),t.close(),!1;if(8==o)return e.preventDefault(),t.query=t.query.slice(0,-1),t.search(),clearTimeout(t.resetQuery),!1;if(38!=o&&40!=o){var i=String.fromCharCode(o);t.query+=i,t.search(),clearTimeout(t.resetQuery)}}}},"keyup.easyDropDown":function(){t.resetQuery=setTimeout(function(){t.query=""},1200)}}),t.$dropDown.on("scroll.easyDropDown",function(e){t.$dropDown[0].scrollTop>=t.$dropDown[0].scrollHeight-t.maxHeight?t.$container.addClass("bottom"):t.$container.removeClass("bottom")}),t.$form.length&&t.$form.on("reset.easyDropDown",function(){var e=t.hasLabel?t.label:t.options[0].title;t.$active.text(e)})},unbindHandlers:function(){var t=this;t.$container.add(t.$select).add(t.$items).add(t.$form).add(t.$dropDown).off(".easyDropDown"),e("body").off("."+t.id)},open:function(){var e=this,t=window.scrollY||document.documentElement.scrollTop,o=window.scrollX||document.documentElement.scrollLeft,i=e.notInViewport(t);e.closeAll(),e.getMaxHeight(),e.$select.focus(),window.scrollTo(o,t+i),e.$container.addClass("open"),e.$scrollWrapper.css("height",e.maxHeight+"px"),e.down=!0},close:function(){var e=this;e.$container.removeClass("open"),e.$scrollWrapper.css("height","0px"),e.focusIndex=e.selected.index,e.query="",e.down=!1},closeAll:function(){var e=this,t=Object.getPrototypeOf(e).instances;for(var o in t){var i=t[o];i.close()}},select:function(e){var t=this;"string"==typeof e&&(e=t.$select.find("option[value="+e+"]").index()-1);var o=t.options[e],n=t.hasLabel?e+1:e;t.$items.removeClass("active").eq(e).addClass("active"),t.$active.text(o.title),t.$select.find("option").removeAttr("selected").eq(n).prop("selected",!0).parent().trigger("change"),t.selected={index:e,title:o.title},t.focusIndex=i,"function"==typeof t.onChange&&t.onChange.call(t.$select[0],{title:o.title,value:o.value})},search:function(){var e=this,t=function(t){e.focusIndex=t,e.$items.removeClass("focus").eq(e.focusIndex).addClass("focus"),e.scrollToView()},o=function(t){return e.options[t].title.toUpperCase()};for(i=0;i<e.options.length;i++){var n=o(i);if(0==n.indexOf(e.query))return void t(i)}for(i=0;i<e.options.length;i++){var n=o(i);if(n.indexOf(e.query)>-1){t(i);break}}},scrollToView:function(){var e=this;if(e.focusIndex>=e.cutOff){var t=e.$items.eq(e.focusIndex),o=t.outerHeight()*(e.focusIndex+1)-e.maxHeight;e.$dropDown.scrollTop(o)}},notInViewport:function(e){var t=this,o={min:e,max:e+(window.innerHeight||document.documentElement.clientHeight)},i=t.$dropDown.offset().top+t.maxHeight;return i>=o.min&&i<=o.max?0:i-o.max+5},destroy:function(){var e=this;e.unbindHandlers(),e.$select.unwrap().siblings().remove(),e.$select.unwrap(),delete Object.getPrototypeOf(e).instances[e.$select[0].id]},disable:function(){var e=this;e.disabled=!0,e.$container.addClass("disabled"),e.$select.attr("disabled",!0),e.down||e.close()},enable:function(){var e=this;e.disabled=!1,e.$container.removeClass("disabled"),e.$select.attr("disabled",!1)}};var o=function(e,o){e.id=e.id?e.id:"EasyDropDown"+n();var i=new t;i.instances[e.id]||(i.instances[e.id]=i,i.init(e,o))},n=function(){return("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6).toUpperCase()};e.fn.easyDropDown=function(){var e,i=arguments,n=[];return e=this.each(function(){if(i&&"string"==typeof i[0]){var e=t.prototype.instances[this.id][i[0]](i[1],i[2]);e&&n.push(e)}else o(this,i[0])}),n.length?n.length>1?n:n[0]:e},e(function(){"function"!=typeof Object.getPrototypeOf&&("object"==typeof"test".__proto__?Object.getPrototypeOf=function(e){return e.__proto__}:Object.getPrototypeOf=function(e){return e.constructor.prototype}),e("select.dropdown").each(function(){var t=e(this).attr("data-settings");settings=t?e.parseJSON(t):{},o(this,settings)})})}(jQuery);;
!function(t,e){"use strict";e.behaviors.dialog.prepareDialogButtons=function(e){var o=[],i=e.find(".form-actions input[type=submit], a.dialog-button");return i.each(function(){var e=t(this).css({width:0,height:0,padding:0,border:0});o.push({text:e.html()||e.attr("value"),class:e.attr("class"),click:function(t){e.trigger("mousedown").trigger("click").trigger("mouseup"),t.preventDefault()}})}),o},t(window).on("dialog:beforecreate",function(e,o,i,a){t(window).data("scrollroadTracks").ignore=!0}),t(window).on("dialogclose",function(e,o,i,a){t(window).data("scrollroadTracks").ignore=!1})}(jQuery,Drupal),function(t,e){"use strict";var o={self:this,init:function(){var e=this.checkMobileWebkit();e&&t(window).width()>740?(this.addIScroll(),t("#bg-background, #bg-foreground, #bg-tracks, #bg-train").css("position","absolute")):t("main").addClass("no-iscroll"),this.setStellarRatio(),this.setAverageStellarRatio(),this.initParallax(),this.overrideStellar()},addIScroll:function(){t("main").once("iscroll").each(function(){function o(t){t.target.nodeName.toUpperCase().match(/^(INPUT|TEXTAREA|BUTTON|SELECT|X-WIDGET)/)||t.preventDefault()}t(".pane").find(".region").each(function(){var e=t(this);e.height(e[0].scrollHeight).css("minHeight","100%")}),new e("pane-work",{vScroll:!0,hScroll:!1,onBeforeScrollStart:o,handleClick:!1}),new e("pane-about",{vScroll:!0,hScroll:!1,onBeforeScrollStart:o,handleClick:!1}),new e("pane-blog",{vScroll:!0,hScroll:!1,onBeforeScrollStart:o,handleClick:!1}),new e("pane-contact",{vScroll:!0,hScroll:!1,onBeforeScrollStart:o,handleClick:!1});var i=location.hash;location.hash="",Drupal.iScroll=new e("scroll-wrapper",{onBeforeScrollStart:o,bounce:!1}),i&&setTimeout(function(){location.hash=i,Drupal.iScroll.scrollToElement(i,0)},50)})},overrideStellar:function(){if("undefined"!==window.Stellar){var e=this,o=window.Stellar.prototype.refresh;window.Stellar.prototype.refresh=function(t){e.setStellarRatio(),e.setAverageStellarRatio(),o.call(this,t)};var i=window.Stellar.prototype._repositionElements;window.Stellar.prototype._repositionElements=function(){i.call(this)},window.Stellar.prototype._findParticles=function(){var e=this;if(t.isArray(this.particles))for(var o=this.particles.length-1;o>=0;o--)this.particles[o].$element.data("stellar-elementIsActive",!1);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-use-stellar]").each(function(o){var i,a,n,s,r,l,c,d,f,h=t(this),u=0,p=0,w=0,v=0;if(h.data("stellar-elementIsActive")){if(h.data("stellar-elementIsActive")!==this)return}else h.data("stellar-elementIsActive",this);e.options.showElement(h),h.data("stellar-startingLeft")?(h.css("left",h.data("stellar-startingLeft")),h.css("top",h.data("stellar-startingTop"))):(h.data("stellar-startingLeft",h.css("left")),h.data("stellar-startingTop",h.css("top"))),n=h.position().left,s=h.position().top,r="auto"===h.css("margin-left")?0:parseInt(h.css("margin-left"),10),l="auto"===h.css("margin-top")?0:parseInt(h.css("margin-top"),10),d=h.offset().left-r,f=h.offset().top-l,h.parents().each(function(){var e=t(this);return e.data("stellar-offset-parent")===!0?(u=w,p=v,c=e,!1):(w+=e.position().left,void(v+=e.position().top))}),i=void 0!==h.data("stellar-horizontal-offset")?h.data("stellar-horizontal-offset"):void 0!==c&&void 0!==c.data("stellar-horizontal-offset")?c.data("stellar-horizontal-offset"):e.horizontalOffset,a=void 0!==h.data("stellar-vertical-offset")?h.data("stellar-vertical-offset"):void 0!==c&&void 0!==c.data("stellar-vertical-offset")?c.data("stellar-vertical-offset"):e.verticalOffset,e.particles.push({$element:h,$offsetParent:c,isFixed:"fixed"===h.css("position"),horizontalOffset:i,verticalOffset:a,startingPositionLeft:n,startingPositionTop:s,startingOffsetLeft:d,startingOffsetTop:f,parentOffsetLeft:u,parentOffsetTop:p,stellarRatio:void 0!==h.data("stellar-ratio")?h.data("stellar-ratio"):1,width:h.outerWidth(!0),height:h.outerHeight(!0),isHidden:!1})})}}},initParallax:function(){this.checkMobileWebkit()?t("main").stellar({scrollProperty:"transform",positionProperty:"transform",responsive:!1,verticalScrolling:!1,hideDistantElements:!1}):t.stellar({scrollProperty:"scroll",positionProperty:"transform",responsive:!0,verticalScrolling:!1,hideDistantElements:!1})},setStellarRatio:function(){t("[data-use-stellar]").not("[data-avg-ratio-updates]").each(function(){var e=t(this).width(),o=t("#bg-container").width(),i=t(window).width(),a=void 0!==t(this).data("stellar-ratio-fixed")?t(this).data("stellar-ratio-fixed"):(e-i)/(o-i);t(this).data("stellar-ratio",a),t(this).attr("data-stellar-ratio",a)})},setAverageStellarRatio:function(){var e=t("[data-use-stellar]").not("[data-avg-ratio-updates], [data-stellar-ratio-fixed]"),o=e.length,i=0,a=0;e.each(function(){var e=t(this);i+=e.data("stellar-ratio"),a+=e.width()}),t("[data-use-stellar][data-avg-ratio-updates]").data("stellar-ratio",i/o).width(a/o)},checkMobileWebkit:function(){var t=navigator.userAgent,e=/WebKit/.test(t)&&/Mobile/.test(t);return e}};Drupal.behaviors.lastCallParallax={attach:function(e){t("main").once("parallax").each(function(){o.init()})}}}(jQuery,window.iScroll),function(t){"use strict";t.fn.scrollControl=function(e){var o={paneSelector:".region"},i={options:t.extend({},o,e),panes:[],windowPos:{},preventFocusSet:!1,processed:!1,focused:"",$focusedElement:"",init:function(){this.getPanes(this.options.paneSelector),t(window).data("scroll-control",this),this.refresh()},getPanes:function(e){var o=this;t(e).each(function(){o.panes.push(this),t(this).attr("data-sc-pane",!0)})},getOffsets:function(e){var o=t(e),i=o.width(),a=o.offset().left,n=Math.round(a+i/2),s=a+i,r=o.offset().top,l=r+o.height();return o.data("offset-left",a).data("offset-center",n).data("offset-right",s).data("offset-top",r).data("offset-bottom",l),e},refresh:function(){var e=this,o=this.windowPos.center,i=this.windowPos.middle,a=this.windowPos.top,n=this.getWindowPosition(),s=n.center,r=n.middle,l=n.top,c=0;t(this.panes).each(function(){var n=t(e.getOffsets(this)),d=n.data("offset-center"),f=n.data("offset-top"),h=n.data("offset-bottom");t(window).data("scroll-control-desktop")===!0?(o<d&&s>=d||o>d&&s<=d)&&!e.preventFocusSet&&e.processed&&e._windowTrigger("scrollcontrol.focusSet",[this]):i>=h&&r<=h||i<=f&&r>=f?e._windowTrigger("scrollcontrol.focusSet",[this]):l<=0?e._windowTrigger("scrollcontrol.focusSet",[e.panes[0]]):a<=h&&l>=h&&0===c&&e._windowTrigger("scrollcontrol.focusSet",[e.panes[1]]),c++,e.processed||(e.processed=!0)})},getWindowDimensions:function(){var e=t(window);t.extend(this.windowPos,{width:e.width(),height:e.height()})},getWindowPosition:function(){this.windowPos.height||this.getWindowDimensions();var e=t(window),o=this.windowPos.width,i=e.scrollLeft(),a=e.scrollTop(),n=this.windowPos.height,s={left:i,right:i+o,center:Math.round(i+o/2),top:a,bottom:a+n,middle:Math.round(a+n/2)};return t.extend(this.windowPos,s),s},isScrolledIntoView:function(e){var o=t(e),i=o.data("offset-top"),a=i+o.height(),n=o.data("offset-left"),s=o.data("offset-right");return!(this.windowPos.left>=n&&this.windowPos.left>=s||this.windowPos.right<=n&&this.windowPos.right<=s||this.windowPos.top>=i&&this.windowPos.top>=a||this.windowPos.bottom<=i&&this.windowPos.bottom<=a)},updateMQStatus:function(){window.matchMedia("all and (min-width: 721px)").matches?t(window).data("scroll-control-desktop",!0):t(window).data("scroll-control-desktop",!1)},_windowTrigger:function(e,o){1===arguments.length?t(window).trigger(e):2===arguments.length&&t(window).trigger(e,o)}};i.init(),t(window).on("scroll",function(t){i.refresh()}),t(window).on("resize",function(){i.getWindowDimensions()}),t(window).on("scrollcontrol.focusSet",function(e,o){var a=t(o).data("sc-element");i.focused=a,i.$focusedElement=t(o)}),t(window).on("resize.scrollControl",function(){i.updateMQStatus(),t(".pane").each(function(){var e=t(this);e.data("centerscroll",Math.round(e.offset().left+e.width()/2))})}).trigger("resize.scrollControl")}}(jQuery),function(t){"use strict";t.fn.scrollRoadTracks=function(){var e={$scrollLocker:!1,preventScrollThrough:!1,ignore:!1,lastDelta:0,lockReleased:!1,scrollControl:t(window).data("scroll-control"),setLastDelta:function(t,e){return this.lastDelta=t,this.lastDelta},controlledScroll:function(e){if(this.setLastDelta(e),this.$scrollLocker!==!1)if(this.scrollLockerAtEnd(e))this.lockReleased?this.$scrollLocker=!1:this.preventScrollThrough=!0;else{this.lockReleased=!1;var o=this.$scrollLocker.scrollTop();this.$scrollLocker.scrollTop(Math.round(o-e/4))}else t(window).scrollLeft(t(window).scrollLeft()-e)},scrollLockerAtEnd:function(t,e){if(this.$scrollLocker){var o=this.$scrollLocker.scrollTop(),i=this.$scrollLocker.innerHeight(),a=this.$scrollLocker[0].scrollHeight;return i>=a||(this.movingForward(t)?!(o+i<a-1||this.$scrollLocker.hasClass("region-contact")):o<=0)}},releaseLock:function(){this.preventScrollThrough=!1,this.lockReleased=!0},getScrollDistance:function(t,e,o){var i=Math.abs(e)>Math.abs(o)?-e:o;return t*i},movingForward:function(t){return t<=0}};t(window).data("scrollroadTracks",e),t(window).on("scrollcontrol.focusSet",function(o,i){e.$scrollLocker=t(i)});var o=0;return t(window).on("mousewheel",function(i,a,n,s){if(t(this).data("scroll-control-desktop")===!0&&e.ignore!==!0){i.preventDefault();var r=e.getScrollDistance(i.deltaFactor,n,s),l=t(window),c=Math.round(l.scrollLeft()+l.width()/2);t(".pane").filter(function(){return r<0?t(this).data("centerscroll")>c:t(this).data("centerscroll")<c}).each(function(){r<0?c-r>t(this).data("centerscroll")&&!e.$scrollLocker&&(r=c-t(this).data("centerscroll")):c-r<t(this).data("centerscroll")&&(r=c-t(this).data("centerscroll"))}),e.preventScrollThrough===!0&&Math.abs(r)>Math.abs(o)&&e.releaseLock(),e.preventScrollThrough!==!0&&e.controlledScroll(r),o=r}}),this}}(jQuery),function(t){"use strict";function e(t){this.$el=t.$el,this.baseClass=t.$el.data("animation-class"),this.finish=t.finish,this.start=t.start,this.stepClass="",this.steps=t.$el.data("animation-steps")}e.prototype.setSprite=function(){var o=this.start,i=this.finish,a=t(document).scrollLeft()/e.timeline*100;if(o<=a&&a<=i){var n=a-o,s=i-o,r=Math.round(n/s*this.steps);r+=r<1?1:0,this.setAnimationStep(r)}else this.setAnimationStep(0)},e.prototype.setAnimationStep=function(t){var e=parseInt(t,10),o=e>9?e:"0"+e;this.$el.removeClass(this.stepClass),this.stepClass=this.baseClass+o,this.$el.addClass(this.stepClass);var i=o<1||this.steps<o;this.$el.toggleClass("animation-hidden",i)},Drupal.behaviors.lastcallAnimations={attach:function(){var o=[new e({$el:t("#allaboard-animation"),start:0,finish:9.5}),new e({$el:t("#bird-animation"),start:2.6,finish:25}),new e({$el:t("#dog-animation"),start:18,finish:28.7}),new e({$el:t("#surfing-animation"),start:31.43,finish:69.98}),new e({$el:t("#jump-animation"),start:38.09,finish:60.5}),new e({$el:t("#wave-animation"),start:68.6,finish:91.8}),new e({$el:t("#robot-animation"),start:90.29,finish:100})],i=function(i){e.timeline=t(document).width()-t(window).width(),o.map(function(t){t.setSprite()})};i(),t(document).on("scroll",i)}}}(jQuery),function(t,e){"use strict";Drupal.behaviors.lastcallFrontpage={attach:function(e,o){function i(e,o){var i=t(e).find("a").parent(),a=t(e).find("a");if(i.length){var n={};"#pane-home"!==a.attr("href")?(n.width=i.width(),n.left=i.position().left+parseInt(i.css("padding-left"),10),t(".scroll.scroll-active").removeClass("scroll-active"),a.addClass("scroll-active")):(t(".scroll.scroll-active").removeClass("scroll-active"),n.width=35,n.left=i.position().left+parseInt(i.css("padding-left"),10)+50),t(this).stop(!0,!1),o?t(this).animate(n):t(this).css(n)}}if(t("body.path-frontpage").length){var a;if(t(".pane").each(function(){a=t(this).attr("id"),a&&a.length>0&&t(this).children(".region:first-child").data("sc-element",a)}),t("html").once("scroll-control").each(function(){t(window).scrollControl(),t(window).scrollRoadTracks()}),!t("#active-indicator").length){var n=t('<span id="active-indicator"></span>');t("#page-header").append(n)}t(window,e).on("scrollcontrol.focusSet",function(e,o){var a=t("#active-indicator"),n=t(o).parent().attr("id"),s=t('header ul.desktop-menu li a[href="#'+n+'"]').parent(),r=t('header ul.mobile-menu li a[href="#'+n+'"]').parent().text();"Home"===r&&(r=""),t("#title").text(r),a.data("active-item",s),i.apply(a,[s,!0])}),t("#page-header .menu a",e).hover(function(){var e=t("#active-indicator"),o=t(this).parent();i.apply(e,[o,!0])},function(){var e=t("#active-indicator");i.apply(e,[e.data("active-item"),!0])}),t("a.scroll",e).on("click",function(e){e.preventDefault();var o=t(this),i=t(window).data("scrollroadTracks").$scrollLocker,a=i?i.parent().attr("id"):"none",n=t(o.attr("href"));if(a!==n.attr("id")){var s,r;if(n.offset().left<t(window).scrollLeft()?(s="forward",r="behind"):(s="behind",r="forward"),t("#bg-train").addClass("train-dislodged-"+s).removeClass("train-dislodged-"+r),Drupal.iScroll)Drupal.iScroll.scrollToElement(o.attr("href"),2500);else{var l=window.matchMedia("all and (min-width: 721px)").matches?"x":"y",c=t(window).data("scroll-control"),d=2500,f={axis:l,onAfter:function(e){var o=t(window).data("scrollroadTracks");o.$scrollLocker=t(e.find(".region")),c.preventFocusSet=!1,t("#bg-train").removeClass("train-dislodged-"+s).addClass("train-dislodged-"+r).removeClass("train-dislodged-"+s)}};"y"===l&&(d=1e3),c._windowTrigger("scrollcontrol.focusSet",t(t(o.attr("href")).find(".region"))),c.preventFocusSet=!0,t(window).scrollTo(o.attr("href"),d,f)}}}),t(window).off("resize.lastcall.activeIndicator").on("resize.lastcall.activeIndicator",function(e){t("#active-indicator").each(function(){var e=t(this).data("active-item");e&&i.apply(this,[e,!1])})})}}},Drupal.behaviors.slotLinkStyle={attach:function(e,o){t(".more-link",e).wrap(t("<div>",{class:"slot-links-container"})).add(".field--name-field-site-url",e).each(function(){var e=t(this).find("a"),o=e.text();e.text(null),e.append(t("<span>",{class:"slot-link--normal",text:o})),e.append(t("<span>",{class:"slot-link--hover",text:o}))})}},Drupal.behaviors.fancySelects={attach:function(e){var o=t("#ajax-contact-form-wrapper select",e);o.find("option:first-child").addClass("label"),o.easyDropDown()}},Drupal.behaviors.pagerManipulate={attach:function(e){t(".pager__item--previous a[href]",e).length&&t(".pager__item--last",e).css("display","none"),t(".pager__item--next a",e).length&&t(".pager__item--first",e).css("display","none")}},Drupal.behaviors.viewsExposedFormSelectAsTab={attach:function(e,o){t(".select-as-tabs",e).hide().each(function(){var e=t(this),o=t("<ul />").addClass("views-exposed-filter-tabs-processed");e.find("option").each(function(i){var a=t(this),n=t("<li />"),s=null!=t(this).attr("selected")?" active":"";n.addClass("tab tab-"+i+s).html(a.html()).click(function(){e.val(a.val()),e.closest("form").find("input[type=submit]").click()}),o.append(n)}).parents(".form--inline").append(o)})}},Drupal.behaviors.portfolioSlideshow={attach:function(o,i){var a=t(".node--view-mode-full .field--name-field-site-screenshots",o),n=t(".node--view-mode-full .field--name-field-cover-image",o);(a.length||n.length)&&(a.on("cycle-bootstrap",function(e,o,i){i.customGetImageSrc=function(e,o,i){return t(i).find("img").attr("src")}}),a.prepend(n),a.append('<div class="cycle-pager"></div>'),a.cycle({log:!1,fx:e.touch?"scrollHorz":"fade",speed:600,slides:">.field__item",pagerTemplate:'<img src="{{API.customGetImageSrc}}" width=135 height=100>',delay:1e3,swipe:!0,maxZ:9,pagerEvent:"mouseover"}),a.after('<div class="swipe-indicator"><i class="icon-left"></i>Swipe<i class="icon-right"></i></div>'))}},Drupal.behaviors.responsiveMenu={attach:function(e,o){var i=!1;t("#navigation",e).find(".menu-title").on("click",function(e){e.preventDefault(),i?t(this).toggleClass("show-menu"):(t(this).addClass("show-menu"),i=!0)}).on("focus",function(e){i||(t(this).addClass("show-menu"),i=!1)}).end().find(".mobile-menu a").on("click",function(){t("#navigation",e).find(".menu-title").removeClass("show-menu")}).on("focus",function(){t("#navigation",e).find(".menu-title").addClass("show-menu")}),t(document).on("click focus keyup",function(o){t(o.target).parents("#navigation").length||(t("#navigation",e).find(".menu-title").removeClass("show-menu"),i=!1)})}},Drupal.behaviors.lcmOverridePrototypes={attach:function(){Drupal.AjaxCommands.prototype.viewsScrollTop=function(t,e){}}},Drupal.behaviors.chromeTelLinks={attach:function(e){navigator.userAgent.match(/(iPhone|iPod|iPad)/)&&t("span.tel",e).telEnhance()}},Drupal.behaviors.stickyPager={attach:function(e){function o(){var e=a.$focusedElement.find("div.item-list:visible"),o=e.siblings(".view-content");if(e.length>0){var s=t(window).scrollTop()-(o.offset().top+o.height())+n,r=s>0,l=t(window).scrollTop()-e.offset().top+n,c=l>0,d=e.find("ul");c&&!r&&e.data("fixed")!==!0?(e.addClass("fixed-pager"),e.data("fixed",!0)):c||e.data("fixed")!==!0?r&&e.data("fixed")===!0&&i(e,d):i(e,d)}}function i(t,e){t.data("fixed",!1),e.animate({marginTop:"-40"},300,function(){e.css("margin-top",""),t.removeClass("fixed-pager")})}var a=t(window).data("scroll-control");if(a){var n=t("#page-header").height();""!==a.focused&&o(),t(window).on("scroll",function(e){t(window).data("scroll-control-desktop")||o()})}}},Drupal.behaviors.joinUsLink={attach:function(e,o){t("#block-views-block-employees-staff-block .views-row:last",e).css("cursor","pointer").click(function(){t.cookie("backPath","about"),window.location.href="careers"})}},t.fn.telEnhance=function(e){t(this).each(function(){var e=t(this);if(0===e.find('a[href^="tel:"]').length){var o=e.text().replace(/[()-]/g,""),i=t("<a>"+e.html()+"</a>").attr("href","tel://"+o);e.html(i)}})},Drupal.behaviors.lcmAnimations={attach:function(e,o){t("#robot-animation").on("click",function(){t("#contact-message-feedback-form").find('textarea[name="message"]').focus()})}}}(jQuery,Modernizr);;
