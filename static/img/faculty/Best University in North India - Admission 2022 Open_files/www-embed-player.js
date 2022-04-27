(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function n(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ha(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ha(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ia});
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ja(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function r(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ba=b.prototype}
function ra(){this.D=!1;this.m=null;this.j=void 0;this.i=1;this.s=this.o=0;this.B=this.l=null}
function sa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
ra.prototype.v=function(a){this.j=a};
function ta(a,b){a.l={ub:b,zb:!0};a.i=a.o||a.s}
ra.prototype.return=function(a){this.l={return:a};this.i=this.s};
function t(a,b,c){a.i=c;return{value:b}}
ra.prototype.u=function(a){this.i=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.s=c)}
function xa(a,b){a.i=b;a.o=0}
function ya(a){a.o=0;var b=a.l.ub;a.l=null;return b}
function za(a){a.B=[a.l];a.o=0;a.s=0}
function Aa(a){var b=a.B.splice(0)[0];(b=a.l=a.l||b)?b.zb?a.i=a.o||a.s:void 0!=b.u&&a.s<b.u?(a.i=b.u,a.l=null):a.i=a.s:a.i=0}
function Ba(a){this.i=new ra;this.j=a}
function Ea(a,b){sa(a.i);var c=a.i.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.D=!1,e;var f=e.value}catch(g){return a.i.m=null,ta(a.i,g),Ga(a)}a.i.m=null;d.call(a.i,f);return Ga(a)}
function Ga(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.D=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,ta(a.i,c)}a.i.D=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.zb)throw b.ub;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){sa(a.i);a.i.m?b=Fa(a,a.i.m.next,b,a.i.v):(a.i.v(b),b=Ga(a));return b};
this.throw=function(b){sa(a.i);a.i.m?b=Fa(a,a.i.m["throw"],b,a.i.v):(ta(a.i,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ia(new Ha(new Ba(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return la});
n("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.D=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.s()})}this.i.push(g)};
var e=da.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.s=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.m(m)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.s)}};
b.prototype.U=function(g){if(g===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ga(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.N(g):this.o(g)}};
b.prototype.N=function(g){var h=void 0;try{h=g.then}catch(k){this.s(k);return}"function"==typeof h?this.oa(h,g):this.o(g)};
b.prototype.s=function(g){this.v(2,g)};
b.prototype.o=function(g){this.v(1,g)};
b.prototype.v=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.Z();this.B()};
b.prototype.Z=function(){var g=this;e(function(){if(g.M()){var h=da.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.M=function(){if(this.D)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.B=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.ga=function(g){var h=this.m();g.Ja(h.resolve,h.reject)};
b.prototype.oa=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(B,v){return"function"==typeof B?function(E){try{m(B(E))}catch(F){q(F)}}:v}
var m,q,u=new b(function(B,v){m=B;q=v});
this.Ja(k(g,m),k(h,q));return u};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ja=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.D=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Ja(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function u(E){return function(F){B[E]=F;v--;0==v&&m(B)}}
var B=[],v=0;do B.push(void 0),v++,d(k.value).Ja(u(B.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ha(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(u){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ha(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ha(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return ea(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ha(h.data_,m))for(h=0;h<q.length;h++){var u=q[h];if(k!==k&&u.key!==u.key||k===u.key)return{id:m,list:q,index:h,entry:u}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(u){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Object.setPrototypeOf",function(a){return a||qa});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push([d,b[d]]);return c}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push(b[d]);return c}});
var x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function z(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){a.cb=void 0;a.getInstance=function(){return a.cb?a.cb:a.cb=new a}}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Vo=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Pb=b)}
Ya($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function bb(){}
function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function sb(){var a=A("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function tb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ub(a){var b={},c;for(c in a)b[c]=a[c];return b}
function vb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var wb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<wb.length;f++)c=wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var yb;function zb(){if(void 0===yb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){x.console&&x.console.error(c.message)}yb=a}else yb=a}return yb}
;function Ab(a,b){this.l=a===Bb&&b||""}
Ab.prototype.j=!0;Ab.prototype.i=function(){return this.l};
function Cb(a){return new Ab(Bb,a)}
var Bb={};Cb("");var Db={};function Eb(a){this.l=Db===Db?a:"";this.j=!0}
Eb.prototype.i=function(){return this.l.toString()};
Eb.prototype.toString=function(){return this.l.toString()};function Fb(a,b){this.l=b===Gb?a:""}
Fb.prototype.j=!0;Fb.prototype.i=function(){return this.l.toString()};
Fb.prototype.toString=function(){return this.l+""};
function Hb(a){if(a instanceof Fb&&a.constructor===Fb)return a.l;Na(a);return"type_error:TrustedResourceUrl"}
var Gb={};function Ib(a){var b=zb();a=b?b.createScriptURL(a):a;return new Fb(a,Gb)}
;var Lb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Mb(a,b){this.l=b===Nb?a:""}
Mb.prototype.j=!0;Mb.prototype.i=function(){return this.l.toString()};
Mb.prototype.toString=function(){return this.l.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.l;Na(a);return"type_error:SafeUrl"}
var Pb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Nb={};function Qb(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Qb().indexOf(a)}
;function Rb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
;var Sb={};function Tb(a){this.l=Sb===Sb?a:"";this.j=!0}
Tb.prototype.i=function(){return this.l.toString()};
Tb.prototype.toString=function(){return this.l.toString()};function Ub(a,b){b instanceof Mb||b instanceof Mb||(b="object"==typeof b&&b.j?b.i():String(b),Pb.test(b)||(b="about:invalid#zClosurez"),b=new Mb(b,Nb));a.href=Ob(b)}
function Vb(a,b){a.rel="stylesheet";a.href=Hb(b).toString();(b=Wb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Xb(){return Wb("script[nonce]")}
var Yb=/^[\w+/_-]+[=]{0,2}$/;function Wb(a,b){b=(b||x).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Yb.test(a)?a:"":""}
;function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function gc(a,b){b=fc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function hc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var ic=/#|$/,mc=/[?&]($|#)/;function nc(a){for(var b=a.search(ic),c=0,d,e=[];0<=(d=hc(a,c,"key",b));)e.push(a.substring(c,d)),c=Math.min(a.indexOf("&",d)+1||b,b);e.push(a.slice(c));return e.join("").replace(mc,"$1")}
;function oc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
;function pc(a){pc[" "](a);return a}
pc[" "]=function(){};var qc=C("Opera"),rc=C("Trident")||C("MSIE"),sc=C("Edge"),tc=C("Gecko")&&!(-1!=Qb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),uc=-1!=Qb().toLowerCase().indexOf("webkit")&&!C("Edge"),vc=C("Android");function wc(){var a=x.document;return a?a.documentMode:void 0}
var xc;a:{var yc="",zc=function(){var a=Qb();if(tc)return/rv:([^\);]+)(\)|;)/.exec(a);if(sc)return/Edge\/([\d\.]+)/.exec(a);if(rc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(uc)return/WebKit\/(\S+)/.exec(a);if(qc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
zc&&(yc=zc?zc[1]:"");if(rc){var Ac=wc();if(null!=Ac&&Ac>parseFloat(yc)){xc=String(Ac);break a}}xc=yc}var Bc=xc,Cc;if(x.document&&rc){var Dc=wc();Cc=Dc?Dc:parseInt(Bc,10)||void 0}else Cc=void 0;var Ec=Cc;var Fc=oc()||C("iPod"),Gc=C("iPad");!C("Android")||Rb();Rb();var Hc=C("Safari")&&!(Rb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||C("Firefox")||C("FxiOS")||C("Silk")||C("Android"))&&!(oc()||C("iPad")||C("iPod"));var Ic={},Jc=null;
function Kc(a,b){Pa(a);void 0===b&&(b=0);if(!Jc){Jc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ic[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Jc[h]&&(Jc[h]=g)}}}b=Ic[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Lc="undefined"!==typeof Uint8Array;var Mc={};var Nc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Oc(a,b){Object.isFrozen(a)||(Nc?a[Nc]|=b:void 0!==a.Na?a.Na|=b:Object.defineProperties(a,{Na:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Pc(a){var b;Nc?b=a[Nc]:b=a.Na;return null==b?0:b}
function Qc(a){Oc(a,1);return a}
function Rc(a){return Array.isArray(a)?!!(Pc(a)&2):!1}
function Sc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Oc(a,2)}
;function Tc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Uc,Yc=Object.freeze(Qc([]));function Zc(a){if(Rc(a.H))throw Error("Cannot mutate an immutable Message");}
var $c="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function ad(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function bd(a){x.setTimeout(function(){throw a;},0)}
;function cd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Lc&&null!=a&&a instanceof Uint8Array)return Kc(a)}return a}
;function dd(a,b){b=void 0===b?ed:b;return fd(a,b)}
function gd(a,b){if(null!=a){if(Array.isArray(a))a=fd(a,b);else if(Tc(a)){var c={},d;for(d in a)c[d]=gd(a[d],b);a=c}else a=b(a);return a}}
function fd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=gd(c[d],b);Array.isArray(a)&&Pc(a)&1&&Qc(c);return c}
function hd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=cd(a);return Array.isArray(a)?dd(a,hd):a}
function ed(a){return Lc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function id(a,b,c){return-1===b?null:b>=a.m?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.H[b+a.l]}
function D(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Zc(a);b<a.m&&!d?a.H[b+a.l]=c:(a.j||(a.j=a.H[a.m+a.l]={}))[b]=c;return a}
function jd(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=id(a,b,d);null==e&&(e=Yc);if(Rc(a.H))c&&(Sc(e),Object.freeze(e));else if(e===Yc||Rc(e))e=Qc(e.slice()),D(a,b,e,d);return e}
function kd(a,b,c,d){Zc(a);(c=ld(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),D(a,c));return D(a,b,d)}
function ld(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=id(a,e)&&(0!==c&&D(a,c,void 0,!1,!0),c=e)}return c}
function md(a,b,c,d,e){if(-1===c)return null;a.i||(a.i={});var f=a.i[c];if(f)return f;e=id(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);Rc(a.H)&&Sc(b.H);return a.i[c]=b}
function nd(a,b,c,d){d=void 0===d?!1:d;a.i||(a.i={});var e=Rc(a.H),f=a.i[c];if(!f){d=jd(a,c,!0,d);f=[];e=e||Rc(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&Sc(f[g].H);e&&(Sc(f),Object.freeze(f));a.i[c]=f}return f}
function I(a,b,c){var d=void 0===d?!1:d;Zc(a);a.i||(a.i={});var e=null!=c?c.H:c;a.i[b]=c;return D(a,b,e,d)}
function od(a,b,c,d){Zc(a);a.i||(a.i={});var e=null!=d?d.H:d;a.i[b]=d;kd(a,b,c,e)}
function pd(a,b,c,d){var e=void 0===e?!1:e;Zc(a);e=nd(a,c,b,e);c=null!=d?d:new c;a=jd(a,b);e.push(c);a.push(c.H)}
function qd(a,b){a=id(a,b);return null==a?"":a}
;function rd(a,b,c){a||(a=sd);sd=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.l=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.H=a;a:{d=this.H.length;a=d-1;if(d&&(d=this.H[a],Tc(d))){this.m=a-this.l;this.j=d;break a}void 0!==b&&-1<b?(this.m=Math.max(b,a+1-this.l),this.j=void 0):this.m=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.m)a+=this.l,(d=this.H[a])?Array.isArray(d)&&Qc(d):this.H[a]=Yc;else{d=this.j||(this.j=this.H[this.m+this.l]={});var e=d[a];e?Array.isArray(e)&&
Qc(e):d[a]=Yc}}
rd.prototype.toJSON=function(){var a=this.H;return Uc?a:dd(a,hd)};
rd.prototype.clone=function(){var a=dd(this.H);sd=a;a=new this.constructor(a);sd=null;td(a,this);return a};
rd.prototype.isMutable=function(a){if(a!==Mc)throw Error("requires a valid immutable API token");return!Rc(this.H)};
rd.prototype.toString=function(){return this.H.toString()};
function ud(a,b){return cd(b)}
function td(a,b){b.s&&(a.s=b.s.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=nd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)td(f[g],e[g])}else(f=md(a,e.constructor,g,void 0,f))&&td(f,e)}}}}
var sd;function vd(){rd.apply(this,arguments)}
r(vd,rd);if($c){var wd={};Object.defineProperties(vd,(wd[Symbol.hasInstance]=ad(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),wd))};function J(){vd.apply(this,arguments)}
r(J,vd);if($c){var xd={};Object.defineProperties(J,(xd[Symbol.hasInstance]=ad(Object[Symbol.hasInstance]),xd))};function yd(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function zd(a){this.j=!1;var b=a.program;a=a.globalName;var c=new yd;this.l=c.promise;this.m=p((0,x[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Ob:d,xc:e})})},!0)).next().value;
this.wc=c.promise.then(function(){})}
zd.prototype.snapshot=function(a){if(this.j)throw Error("Already disposed");return this.l.then(function(b){var c=b.Ob;return new Promise(function(d){c(function(e){d(e)},[a.pb,
a.yc])})})};
zd.prototype.dispose=function(){this.j=!0;this.l.then(function(a){(a=a.xc)&&a()})};
zd.prototype.i=function(){return this.j};var Ad=window;Cb("csi.gstatic.com");Cb("googleads.g.doubleclick.net");Cb("partner.googleadservices.com");Cb("pubads.g.doubleclick.net");Cb("securepubads.g.doubleclick.net");Cb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Bd={};function Cd(){}
function Dd(a){this.i=a}
r(Dd,Cd);Dd.prototype.toString=function(){return this.i};
var Ed=new Dd("about:invalid#zTSz",Bd);function Fd(a){if(a instanceof Cd)if(a instanceof Dd)a=a.i;else throw Error("");else a=Ob(a);return a}
;function Gd(a,b){a.src=Hb(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Hd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=Hd.prototype;l.clone=function(){return new Hd(this.x,this.y)};
l.equals=function(a){return a instanceof Hd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Id(a,b){this.width=a;this.height=b}
l=Id.prototype;l.clone=function(){return new Id(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Jd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Kd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ld(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Md(a){var b=Nd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Od(){var a=[];Md(function(b){a.push(b)});
return a}
var Nd={Pc:"allow-forms",Qc:"allow-modals",Rc:"allow-orientation-lock",Sc:"allow-pointer-lock",Tc:"allow-popups",Uc:"allow-popups-to-escape-sandbox",Vc:"allow-presentation",Wc:"allow-same-origin",Xc:"allow-scripts",Yc:"allow-top-navigation",Zc:"allow-top-navigation-by-user-activation"},Pd=cb(function(){return Od()});
function Qd(){var a=Rd(),b={};eb(Pd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Rd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Sd(a){this.isValid=a}
function Wd(a){return new Sd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Xd=[Wd("data"),Wd("http"),Wd("https"),Wd("mailto"),Wd("ftp"),new Sd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Yd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Zd=(new Date).getTime();function $d(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var ae="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");fa(ae);function be(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(u){for(var B=g,v=0;64>v;v+=4)B[v/4]=u[v]<<24|u[v+1]<<16|u[v+2]<<8|u[v+3];for(v=16;80>v;v++)u=B[v-3]^B[v-8]^B[v-14]^B[v-16],B[v]=(u<<1|u>>>31)&4294967295;u=e[0];var E=e[1],F=e[2],H=e[3],R=e[4];for(v=0;80>v;v++){if(40>v)if(20>v){var O=H^E&(F^H);var S=1518500249}else O=E^F^H,S=1859775393;else 60>v?(O=E&F|H&(E|F),S=2400959708):(O=E^F^H,S=3395469782);O=((u<<5|u>>>27)&4294967295)+O+R+S+B[v]&4294967295;R=H;H=F;F=(E<<30|E>>>2)&4294967295;E=u;u=O}e[0]=e[0]+u&4294967295;e[1]=e[1]+E&4294967295;e[2]=
e[2]+F&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+R&4294967295}
function c(u,B){if("string"===typeof u){u=unescape(encodeURIComponent(u));for(var v=[],E=0,F=u.length;E<F;++E)v.push(u.charCodeAt(E));u=v}B||(B=u.length);v=0;if(0==m)for(;v+64<B;)b(u.slice(v,v+64)),v+=64,q+=64;for(;v<B;)if(f[m++]=u[v++],q++,64==m)for(m=0,b(f);v+64<B;)b(u.slice(v,v+64)),v+=64,q+=64}
function d(){var u=[],B=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var v=63;56<=v;v--)f[v]=B&255,B>>>=8;b(f);for(v=B=0;5>v;v++)for(var E=24;0<=E;E-=8)u[B++]=e[v]>>E&255;return u}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Sb:function(){for(var u=d(),B="",v=0;v<u.length;v++)B+="0123456789ABCDEF".charAt(Math.floor(u[v]/16))+"0123456789ABCDEF".charAt(u[v]%16);return B}}}
;function ce(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,de($d(d),a,c||null)].join(" "):null}
function de(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),ee(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=ee(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ee(a){var b=be();b.update(a);return b.Sb().toLowerCase()}
;var fe={};function ge(a){this.i=a||{cookie:""}}
l=ge.prototype;l.isEnabled=function(){if(!x.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Pa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.hp;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Pa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Lb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Pa:0,path:b,domain:c});return d};
l.Za=function(){return he(this).keys};
l.isEmpty=function(){return!this.i.cookie};
l.clear=function(){for(var a=he(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function he(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Lb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ie=new ge("undefined"==typeof document?null:document);function je(a){return!!fe.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ke(a){a=void 0===a?!1:a;var b=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;je(a)&&(b=b||x.__1PSAPISID);if(b)return!0;var c=new ge(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");je(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function le(a,b,c,d){(a=x[a])||(a=(new ge(document)).get(b));return a?ce(a,c,d):null}
function me(a){var b=void 0===b?!1:b;var c=$d(String(x.location.href)),d=[];if(ke(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?x.__SAPISID:x.__APISID;e||(e=new ge(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?ce(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&je(b)&&((b=le("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=le("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function ne(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function oe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?oe.apply(null,d):ne(d)}}
;function K(){this.D=this.D;this.s=this.s}
K.prototype.D=!1;K.prototype.i=function(){return this.D};
K.prototype.dispose=function(){this.D||(this.D=!0,this.J())};
function pe(a,b){a.D?b():(a.s||(a.s=[]),a.s.push(b))}
K.prototype.J=function(){if(this.s)for(;this.s.length;)this.s.shift()()};function qe(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
qe.prototype.stopPropagation=function(){this.l=!0};
qe.prototype.preventDefault=function(){this.defaultPrevented=!0};function re(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=se(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,te[c])c=te[c];else{c=String(c);if(!te[c]){var f=/function\s+([^\(]+)/m.exec(c);te[c]=f?f[1]:"[Anonymous]"}c=te[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function se(a,b){b||(b={});b[ue(a)]=!0;var c=a.stack||"";(a=a.Pb)&&!b[ue(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=se(a,b));return c}
function ue(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var te={};var ve=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{x.addEventListener("test",function(){},b),x.removeEventListener("test",function(){},b)}catch(c){}return a}();function we(a,b){qe.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Ya(we,qe);var xe={2:"touch",3:"pen",4:"mouse"};
we.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(tc){a:{try{pc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:xe[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&we.ba.preventDefault.call(this)};
we.prototype.stopPropagation=function(){we.ba.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
we.prototype.preventDefault=function(){we.ba.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var ye="closure_listenable_"+(1E6*Math.random()|0);var ze=0;function Ae(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ma=e;this.key=++ze;this.za=this.Ia=!1}
function Be(a){a.za=!0;a.listener=null;a.proxy=null;a.src=null;a.Ma=null}
;function Ce(a){this.src=a;this.listeners={};this.i=0}
Ce.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=De(a,b,d,e);-1<g?(b=a[g],c||(b.Ia=!1)):(b=new Ae(b,this.src,f,!!d,e),b.Ia=c,a.push(b));return b};
Ce.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=De(e,b,c,d);return-1<b?(Be(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Ee(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(Be(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function De(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.za&&f.listener==b&&f.capture==!!c&&f.Ma==d)return e}return-1}
;var Fe="closure_lm_"+(1E6*Math.random()|0),Ge={},He=0;function Ie(a,b,c,d,e){if(d&&d.once)Je(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ie(a,b[f],c,d,e);else c=Ke(c),a&&a[ye]?a.X(b,c,Qa(d)?!!d.capture:!!d,e):Le(a,b,c,!1,d,e)}
function Le(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Me(a);h||(a[Fe]=h=new Ce(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ne();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ve||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Oe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");He++}}
function Ne(){function a(c){return b.call(a.src,a.listener,c)}
var b=Pe;return a}
function Je(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else c=Ke(c),a&&a[ye]?a.m.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Le(a,b,c,!0,d,e)}
function Qe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Qe(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Ke(c),a&&a[ye])?a.m.remove(String(b),c,d,e):a&&(a=Me(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=De(b,c,d,e)),(c=-1<a?b[a]:null)&&Re(c))}
function Re(a){if("number"!==typeof a&&a&&!a.za){var b=a.src;if(b&&b[ye])Ee(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Oe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);He--;(c=Me(b))?(Ee(c,a),0==c.i&&(c.src=null,b[Fe]=null)):Be(a)}}}
function Oe(a){return a in Ge?Ge[a]:Ge[a]="on"+a}
function Pe(a,b){if(a.za)a=!0;else{b=new we(b,this);var c=a.listener,d=a.Ma||a.src;a.Ia&&Re(a);a=c.call(d,b)}return a}
function Me(a){a=a[Fe];return a instanceof Ce?a:null}
var Se="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ke(a){if("function"===typeof a)return a;a[Se]||(a[Se]=function(b){return a.handleEvent(b)});
return a[Se]}
;function Te(){K.call(this);this.m=new Ce(this);this.Z=this;this.M=null}
Ya(Te,K);Te.prototype[ye]=!0;Te.prototype.addEventListener=function(a,b,c,d){Ie(this,a,b,c,d)};
Te.prototype.removeEventListener=function(a,b,c,d){Qe(this,a,b,c,d)};
function Ue(a,b){var c=a.M;if(c){var d=[];for(var e=1;c;c=c.M)d.push(c),++e}a=a.Z;c=b.type||b;"string"===typeof b?b=new qe(b,a):b instanceof qe?b.target=b.target||a:(e=b,b=new qe(c,a),xb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=Ve(g,c,!0,b)&&e}b.l||(g=b.i=a,e=Ve(g,c,!0,b)&&e,b.l||(e=Ve(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=Ve(g,c,!1,b)&&e}
Te.prototype.J=function(){Te.ba.J.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Be(d[e]);delete a.listeners[c];a.i--}}this.M=null};
Te.prototype.X=function(a,b,c,d){return this.m.add(String(a),b,!1,c,d)};
function Ve(a,b,c,d){b=a.m.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.za&&g.capture==c){var h=g.listener,k=g.Ma||g.src;g.Ia&&Ee(a.m,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function We(a){Te.call(this);var b=this;this.B=this.l=0;this.W=null!=a?a:{O:function(e,f){return setTimeout(e,f)},
V:clearTimeout};var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return w(function(e){return t(e,Xe(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||Ye(this)}
r(We,Te);function Ze(){var a=$e;We.i||(We.i=new We(a));return We.i}
We.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.W.V(this.B);delete We.i};
We.prototype.I=function(){return this.j};
function Ye(a){a.B=a.W.O(function(){var b;return w(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):t(c,Xe(a),3):t(c,Xe(a),3);Ye(a);c.i=0})},3E4)}
function Xe(a,b){return a.v?a.v:a.v=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.l=a.W.O(function(){d.abort()},b||2E4)),t(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:za(h);a.v=void 0;a.l&&(a.W.V(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?Ue(a,"networkstatus-online"):Ue(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:ya(h),g=!1,h.u(3)}})})}
;var af={Fo:"WEB_DISPLAY_MODE_UNKNOWN",Bo:"WEB_DISPLAY_MODE_BROWSER",Do:"WEB_DISPLAY_MODE_MINIMAL_UI",Eo:"WEB_DISPLAY_MODE_STANDALONE",Co:"WEB_DISPLAY_MODE_FULLSCREEN"};function bf(){this.data_=[];this.i=-1}
bf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
bf.prototype.get=function(a){return!!this.data_[a]};
function cf(a){-1===a.i&&(a.i=hb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function df(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
df.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function ef(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var ff;function gf(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=Kd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.nb;c.nb=null;e()}};
return function(e){d.next={nb:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function hf(){this.j=this.i=null}
hf.prototype.add=function(a,b){var c=jf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
hf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var jf=new df(function(){return new kf},function(a){return a.reset()});
function kf(){this.next=this.scope=this.i=null}
kf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
kf.prototype.reset=function(){this.next=this.scope=this.i=null};function lf(a,b){mf||nf();of||(mf(),of=!0);pf.add(a,b)}
var mf;function nf(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);mf=function(){a.then(qf)}}else mf=function(){var b=qf;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!C("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(ff||(ff=gf()),ff(b)):x.setImmediate(b)}}
var of=!1,pf=new hf;function qf(){for(var a;a=pf.remove();){try{a.i.call(a.scope)}catch(b){bd(b)}ef(jf,a)}of=!1}
;function rf(a,b){this.i=a[x.Symbol.iterator]();this.j=b}
rf.prototype[Symbol.iterator]=function(){return this};
rf.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function sf(a,b){return new rf(a,b)}
;function tf(){this.blockSize=-1}
;function uf(){this.blockSize=-1;this.blockSize=64;this.i=[];this.s=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Ya(uf,tf);uf.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function vf(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
uf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.s,f=this.j;d<b;){if(0==f)for(;d<=c;)vf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){vf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){vf(this,e);f=0;break}}this.j=f;this.m+=b}};
uf.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.s[c]=b&255,b/=256;vf(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function wf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function xf(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function yf(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:wf(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function zf(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):yf(a,"inverted-hdpi")&&xf(a,Array.prototype.filter.call(a.classList?a.classList:wf(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Af(){}
Af.prototype.next=function(){return Bf};
var Bf={done:!0,value:void 0};function Cf(a){return{value:a,done:!1}}
Af.prototype.aa=function(){return this};function Df(a){if(a instanceof Ef||a instanceof Ff||a instanceof Gf)return a;if("function"==typeof a.next)return new Ef(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ef(function(){return a[Symbol.iterator]()});
if("function"==typeof a.aa)return new Ef(function(){return a.aa()});
throw Error("Not an iterator or iterable.");}
function Ef(a){this.j=a}
Ef.prototype.aa=function(){return new Ff(this.j())};
Ef.prototype[Symbol.iterator]=function(){return new Gf(this.j())};
Ef.prototype.i=function(){return new Gf(this.j())};
function Ff(a){this.j=a}
r(Ff,Af);Ff.prototype.next=function(){return this.j.next()};
Ff.prototype[Symbol.iterator]=function(){return new Gf(this.j)};
Ff.prototype.i=function(){return new Gf(this.j)};
function Gf(a){Ef.call(this,function(){return a});
this.l=a}
r(Gf,Ef);Gf.prototype.next=function(){return this.l.next()};function Hf(a,b){this.j={};this.i=[];this.ja=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Hf)for(c=a.Za(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Hf.prototype;l.Za=function(){If(this);return this.i.concat()};
l.has=function(a){return Jf(this.j,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Kf;If(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Kf(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.j={};this.ja=this.size=this.i.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Jf(this.j,a)?(delete this.j[a],--this.size,this.ja++,this.i.length>2*this.size&&If(this),!0):!1};
function If(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Jf(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Jf(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
l.get=function(a,b){return Jf(this.j,a)?this.j[a]:b};
l.set=function(a,b){Jf(this.j,a)||(this.size+=1,this.i.push(a),this.ja++);this.j[a]=b};
l.forEach=function(a,b){for(var c=this.Za(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Hf(this)};
l.keys=function(){return Df(this.aa(!0)).i()};
l.values=function(){return Df(this.aa(!1)).i()};
l.entries=function(){var a=this;return sf(this.keys(),function(b){return[b,a.get(b)]})};
l.aa=function(a){If(this);var b=0,c=this.ja,d=this,e=new Af;e.next=function(){if(c!=d.ja)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return Bf;var f=d.i[b++];return Cf(a?f:d.j[f])};
return e};
function Jf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Lf(a){var b=[];Of(new Pf,a,b);return b.join("")}
function Pf(){}
function Of(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Of(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Qf(d,c),c.push(":"),Of(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Qf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Rf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Sf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Qf(a,b){b.push('"',a.replace(Sf,function(c){var d=Rf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Rf[c]=d);return d}),'"')}
;function Tf(a){this.i=0;this.D=void 0;this.m=this.j=this.l=null;this.s=this.o=!1;if(a!=bb)try{var b=this;a.call(void 0,function(c){Uf(b,2,c)},function(c){Uf(b,3,c)})}catch(c){Uf(this,3,c)}}
function Vf(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Vf.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Wf=new df(function(){return new Vf},function(a){a.reset()});
function Xf(a,b,c){var d=Wf.get();d.j=a;d.onRejected=b;d.context=c;return d}
function Yf(a){return new Tf(function(b,c){c(a)})}
Tf.prototype.then=function(a,b,c){return Zf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Tf.prototype.$goog_Thenable=!0;function $f(a,b){return Zf(a,null,b)}
Tf.prototype.cancel=function(a){if(0==this.i){var b=new ag(a);lf(function(){bg(this,b)},this)}};
function bg(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?bg(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):cg(c),dg(c,e,3,b)))}a.l=null}else Uf(a,3,b)}
function eg(a,b){a.j||2!=a.i&&3!=a.i||fg(a);a.m?a.m.next=b:a.j=b;a.m=b}
function Zf(a,b,c,d){var e=Xf(null,null,null);e.i=new Tf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ag?g(h):f(k)}catch(m){g(m)}}:g});
e.i.l=a;eg(a,e);return e.i}
Tf.prototype.B=function(a){this.i=0;Uf(this,2,a)};
Tf.prototype.M=function(a){this.i=0;Uf(this,3,a)};
function Uf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.B,f=a.M;if(d instanceof Tf){eg(d,Xf(e||bb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){gg(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.D=c,a.i=b,a.l=null,fg(a),3!=b||c instanceof ag||hg(a,c))}}
function gg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function fg(a){a.o||(a.o=!0,lf(a.v,a))}
function cg(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
Tf.prototype.v=function(){for(var a;a=cg(this);)dg(this,a,this.i,this.D);this.o=!1};
function dg(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.s;a=a.l)a.s=!1;if(b.i)b.i.l=null,ig(b,c,d);else try{b.l?b.j.call(b.context):ig(b,c,d)}catch(e){jg.call(null,e)}ef(Wf,b)}
function ig(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function hg(a,b){a.s=!0;lf(function(){a.s&&jg.call(null,b)})}
var jg=bd;function ag(a){$a.call(this,a)}
Ya(ag,$a);ag.prototype.name="cancel";function L(a){K.call(this);this.v=1;this.m=[];this.o=0;this.j=[];this.l={};this.B=!!a}
Ya(L,K);l=L.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.v;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.v=e+3;d.push(e);return e};
function kg(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.va(b)}}
l.va=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.o?(this.m.push(a),this.j[a+1]=function(){}):(c&&jb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
l.ka=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];lg(this.j[g+1],this.j[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i();e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.va(c)}}return 0!=e}return!1};
function lg(a,b,c){lf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.va,this),delete this.l[a])}else this.j.length=0,this.l={}};
l.J=function(){L.ba.J.call(this);this.clear();this.m.length=0};function mg(a){this.i=a}
mg.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,Lf(b))};
mg.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
mg.prototype.remove=function(a){this.i.remove(a)};function ng(a){this.i=a}
Ya(ng,mg);function og(a){this.data=a}
function pg(a){return void 0===a||a instanceof og?a:new og(a)}
ng.prototype.set=function(a,b){ng.ba.set.call(this,a,pg(b))};
ng.prototype.j=function(a){a=ng.ba.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ng.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function qg(a){this.i=a}
Ya(qg,ng);qg.prototype.set=function(a,b,c){if(b=pg(b)){if(c){if(c<Date.now()){qg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}qg.ba.set.call(this,a,b)};
qg.prototype.j=function(a){var b=qg.ba.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())qg.prototype.remove.call(this,a);else return b}};function rg(){}
;function sg(){}
Ya(sg,rg);sg.prototype[Symbol.iterator]=function(){return Df(this.aa(!0)).i()};
sg.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function tg(a){this.i=a}
Ya(tg,sg);l=tg.prototype;l.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeItem(a)};
l.aa=function(a){var b=0,c=this.i,d=new Af;d.next=function(){if(b>=c.length)return Bf;var e=c.key(b++);if(a)return Cf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Cf(e)};
return d};
l.clear=function(){this.i.clear()};
l.key=function(a){return this.i.key(a)};function ug(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Ya(ug,tg);function vg(a,b){this.j=a;this.i=null;var c;if(c=rc)c=!(9<=Number(Ec));if(c){wg||(wg=new Hf);this.i=wg.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),wg.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Ya(vg,sg);var xg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},wg=null;function yg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return xg[b]})}
l=vg.prototype;l.isAvailable=function(){return!!this.i};
l.set=function(a,b){this.i.setAttribute(yg(a),b);zg(this)};
l.get=function(a){a=this.i.getAttribute(yg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeAttribute(yg(a));zg(this)};
l.aa=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Af;d.next=function(){if(b>=c.length)return Bf;var e=c[b++];if(a)return Cf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Cf(e)};
return d};
l.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);zg(this)};
function zg(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ag(a,b){this.j=a;this.i=b+"::"}
Ya(Ag,sg);Ag.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Ag.prototype.get=function(a){return this.j.get(this.i+a)};
Ag.prototype.remove=function(a){this.j.remove(this.i+a)};
Ag.prototype.aa=function(a){var b=this.j[Symbol.iterator](),c=this,d=new Af;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return Cf(a?e.slice(c.i.length):c.j.get(e))};
return d};function Bg(a){J.call(this,a)}
r(Bg,J);Bg.prototype.getKey=function(){return id(this,1)};
Bg.prototype.getValue=function(){return id(this,2===ld(this,Cg)?2:-1)};
Bg.prototype.setValue=function(a){return kd(this,2,Cg,a)};
var Cg=[2,3,4,5,6];function Dg(a){J.call(this,a)}
r(Dg,J);function Eg(a){J.call(this,a)}
r(Eg,J);function Fg(a){J.call(this,a,-1,Gg)}
r(Fg,J);Fg.prototype.getPlayerType=function(){return id(this,36)};
Fg.prototype.setHomeGroupInfo=function(a){return I(this,81,a)};
var Gg=[9,66,24,32,86,100,101];function Hg(a){J.call(this,a,-1,Ig)}
r(Hg,J);var Ig=[15,26,28];function Jg(a){J.call(this,a)}
r(Jg,J);Jg.prototype.setToken=function(a){return D(this,2,a)};function Kg(a){J.call(this,a,-1,Lg)}
r(Kg,J);Kg.prototype.setSafetyMode=function(a){return D(this,5,a)};
var Lg=[12];function Mg(a){J.call(this,a,-1,Ng)}
r(Mg,J);var Ng=[12];function Og(a){J.call(this,a,-1,Pg)}
r(Og,J);function Qg(a){J.call(this,a)}
r(Qg,J);Qg.prototype.getKey=function(){return qd(this,1)};
Qg.prototype.getValue=function(){return qd(this,2)};
Qg.prototype.setValue=function(a){return D(this,2,a)};
var Pg=[4,5];function Rg(a){J.call(this,a)}
r(Rg,J);function Sg(a){J.call(this,a)}
r(Sg,J);var Tg=[2,3,4];function Ug(a){J.call(this,a)}
r(Ug,J);Ug.prototype.getMessage=function(){return qd(this,1)};function Vg(a){J.call(this,a)}
r(Vg,J);function Wg(a){J.call(this,a)}
r(Wg,J);function Xg(a){J.call(this,a,-1,Yg)}
r(Xg,J);var Yg=[10,17];function Zg(a){J.call(this,a)}
r(Zg,J);function $g(a){J.call(this,a)}
r($g,J);$g.prototype.T=function(a){D(this,1,a)};function ah(a){J.call(this,a)}
r(ah,J);function bh(a){J.call(this,a)}
r(bh,J);function ch(a){J.call(this,a)}
r(ch,J);function dh(a,b){I(a,1,b)}
ch.prototype.T=function(a){D(this,2,a)};
function eh(a){J.call(this,a)}
r(eh,J);function fh(a,b){I(a,1,b)}
;function gh(a){J.call(this,a,-1,hh)}
r(gh,J);gh.prototype.T=function(a){D(this,1,a)};
function ih(a,b){I(a,2,b)}
var hh=[3];function jh(a){J.call(this,a)}
r(jh,J);jh.prototype.T=function(a){D(this,1,a)};function kh(a){J.call(this,a)}
r(kh,J);kh.prototype.T=function(a){D(this,1,a)};function lh(a){J.call(this,a)}
r(lh,J);lh.prototype.T=function(a){D(this,1,a)};function mh(a){J.call(this,a)}
r(mh,J);function nh(a){J.call(this,a)}
r(nh,J);function oh(a){J.call(this,a,-1,ph)}
r(oh,J);function qh(a,b){return D(a,1,b)}
oh.prototype.getPlayerType=function(){var a=id(this,7);return null==a?0:a};
oh.prototype.setVideoId=function(a){return D(this,19,a)};
function rh(a,b){return D(a,25,b)}
function sh(a,b){pd(a,68,th,b)}
function th(a){J.call(this,a)}
r(th,J);th.prototype.getId=function(){return qd(this,2)};
var ph=[83,68];function uh(a){J.call(this,a)}
r(uh,J);function vh(a){J.call(this,a)}
r(vh,J);function wh(a){J.call(this,a)}
r(wh,J);function xh(a){J.call(this,a,432)}
r(xh,J);
var yh=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];var zh={Hh:0,sh:1,yh:2,zh:4,Eh:8,Ah:16,Bh:32,Gh:64,Fh:128,uh:256,wh:512,Dh:1024,vh:2048,xh:4096,th:8192,Ch:16384};function Ah(a){J.call(this,a)}
r(Ah,J);function Bh(a){J.call(this,a)}
r(Bh,J);Bh.prototype.setVideoId=function(a){return kd(this,1,Ch,a)};
Bh.prototype.getPlaylistId=function(){return id(this,2===ld(this,Ch)?2:-1)};
var Ch=[1,2];function Dh(a){J.call(this,a,-1,Eh)}
r(Dh,J);var Eh=[3];function Fh(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Gh=x.window,Hh,Ih,Jh=(null==Gh?void 0:null==(Hh=Gh.yt)?void 0:Hh.config_)||(null==Gh?void 0:null==(Ih=Gh.ytcfg)?void 0:Ih.data_)||{};y("yt.config_",Jh);function Kh(){Fh(Jh,arguments)}
function A(a,b){return a in Jh?Jh[a]:b}
function Lh(){var a=Jh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Mh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Nh(a,b){a=Mh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Oh(){return A("EXPERIMENTS_TOKEN","")}
function Mh(a){var b=A("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:A("EXPERIMENT_FLAGS",{})[a]}
function Ph(){var a=[],b=A("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=A("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Qh=[];function Rh(a){Qh.forEach(function(b){return b(a)})}
function Sh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Th(b)}}:a}
function Th(a,b,c,d){var e=z("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=A("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Kh("ERRORS",e));Rh(a)}
function Uh(a,b,c,d){var e=z("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=A("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Kh("ERRORS",e))}
;function Vh(){var a=Wh;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a)}
function Xh(a){y("yt.ads.biscotti.lastId_",a)}
;var Yh=/^[\w.]*$/,Zh={q:!0,search_query:!0};function $h(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ai(f[0]||""),h=ai(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(u){var k=u,m=f[0],q=String($h);k.args=[{key:m,value:f[1],query:a,method:bi==q?"unchanged":q}];Zh.hasOwnProperty(m)||Uh(k)}}return c}
var bi=String($h);function ci(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];eb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function di(a){"?"==a.charAt(0)&&(a=a.substr(1));return $h(a,"&")}
function ei(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),di(1<a.length?a[1]:a[0])):{}}
function fi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=di(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return gc(a,e)+d}
function gi(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)==d&&(Number(bc(4,b))||null)==(Number(bc(4,a))||null):!0;return a}
function ai(a){return a&&a.match(Yh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function hi(a){var b=ii;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Zd;e.flash="0";a:{try{var f=b.i.top.location.href}catch(ua){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ad:g;try{var h=g.history.length}catch(ua){h=0}e.u_his=h;var k;e.u_h=null==(k=Ad.screen)?void 0:k.height;var m;e.u_w=null==(m=Ad.screen)?void 0:m.width;var q;e.u_ah=null==(q=Ad.screen)?void 0:q.availHeight;var u;e.u_aw=
null==(u=Ad.screen)?void 0:u.availWidth;var B;e.u_cd=null==(B=Ad.screen)?void 0:B.colorDepth}catch(ua){}h=b.i;try{var v=h.screenX;var E=h.screenY}catch(ua){}try{var F=h.outerWidth;var H=h.outerHeight}catch(ua){}try{var R=h.innerWidth;var O=h.innerHeight}catch(ua){}try{var S=h.screenLeft;var ka=h.screenTop}catch(ua){}try{R=h.innerWidth,O=h.innerHeight}catch(ua){}try{var N=h.screen.availWidth;var Ca=h.screen.availTop}catch(ua){}v=[S,ka,v,E,N,Ca,F,H,R,O];try{var Oa=(b.i.top||window).document,va="CSS1Compat"==
Oa.compatMode?Oa.documentElement:Oa.body;var G=(new Id(va.clientWidth,va.clientHeight)).round()}catch(ua){G=new Id(-12245933,-12245933)}Oa=G;G={};var Da=void 0===Da?x:Da;va=new bf;Da.SVGElement&&Da.document.createElementNS&&va.set(0);E=Qd();E["allow-top-navigation-by-user-activation"]&&va.set(1);E["allow-popups-to-escape-sandbox"]&&va.set(2);Da.crypto&&Da.crypto.subtle&&va.set(3);Da.TextDecoder&&Da.TextEncoder&&va.set(4);Da=cf(va);G.bc=Da;G.bih=Oa.height;G.biw=Oa.width;G.brdim=v.join();b=b.j;b=(G.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,G.wgl=!!Ad.WebGLRenderingContext,G);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ii=new function(){var a=window.document;this.i=window;this.j=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return ci(hi(a))});Date.now();var ji="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function ki(){if(!ji)return null;var a=ji();return"open"in a?a:null}
function li(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function mi(a,b){"function"===typeof a&&(a=Sh(a));return window.setTimeout(a,b)}
function ni(a){window.clearTimeout(a)}
;var oi={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},pi="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa(ae)),qi=!1;
function ri(a,b){b=void 0===b?{}:b;var c=gi(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in oi){var f=A(oi[e]);M("enable_visitor_header_for_vss")&&"X-Goog-Visitor-Id"===e&&!f&&(f=A("VISITOR_DATA"));!f||!c&&cc(a)||d&&void 0!==b[e]||!M("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var g=
(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!cc(a))b["X-YouTube-Ad-Signals"]=ci(hi());return b}
function si(a){var b=window.location.search,c=cc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!gi(a)||(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=di(b),f={};eb(pi,function(g){e[g]&&(f[g]=e[g])});
return fi(a,f||{},!1)}
function ti(a,b){var c=b.format||"JSON";a=Pi(a,b);var d=Qi(a,b),e=!1,f=Ri(a,function(k){if(!e){e=!0;h&&ni(h);var m=li(k),q=null,u=400<=k.status&&500>k.status,B=500<=k.status&&600>k.status;if(m||u||B)q=Si(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};u=b.context||x;m?b.onSuccess&&b.onSuccess.call(u,k,q):b.onError&&b.onError.call(u,k,q);b.onFinish&&b.onFinish.call(u,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=mi(function(){e||(e=!0,f.abort(),ni(h),g.call(b.context||x,f))},d)}return f}
function Pi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=A("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=fi(a,b||{},!0);return a}
function Qi(a,b){var c=A("XSRF_FIELD_NAME"),d=A("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=A("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=di(e),xb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):fc(e));f=e||f&&!ob(f);!qi&&f&&"POST"!=b.method&&(qi=
!0,Th(Error("AJAX request with postData should use POST")));return e}
function Si(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Uh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ti(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ui(g)})}d&&Vi(e);
return e}
function Vi(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Cb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=zb();d=e?e.createHTML(d):d;a[c]=new Tb(d)}else Vi(a[b])}}
function Ti(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ui(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ri(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Sh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ki();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=si(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ri(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Wi(a){var b=this;this.i=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c})}
function Xi(){if(!x.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return x.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":x.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":x.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":x.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Yi(a,b,c,d,e){ie.set(""+a,b,{Pa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Zi(a){return ie.get(""+a,void 0)}
function $i(){if(!ie.isEnabled())return!1;if(!ie.isEmpty())return!0;ie.set("TESTCOOKIESENABLED","1",{Pa:60});if("1"!==ie.get("TESTCOOKIESENABLED"))return!1;ie.remove("TESTCOOKIESENABLED");return!0}
;var aj=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",aj);function bj(){this.i=A("ALT_PREF_COOKIE_NAME","PREF");this.j=A("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Zi(this.i);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(aj[d]=c.toString())}}}
bj.prototype.get=function(a,b){cj(a);dj(a);a=void 0!==aj[a]?aj[a].toString():null;return null!=a?a:b?b:""};
bj.prototype.set=function(a,b){cj(a);dj(a);if(null==b)throw Error("ExpectedNotNull");aj[a]=b.toString()};
function ej(a){return!!((fj("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
bj.prototype.remove=function(a){cj(a);dj(a);delete aj[a]};
bj.prototype.clear=function(){for(var a in aj)delete aj[a]};
function dj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function cj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function fj(a){a=void 0!==aj[a]?aj[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ma(bj);var gj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},hj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},ij={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},jj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function kj(){var a=x.navigator;return a?a.connection:void 0}
function lj(){var a=kj();if(a){var b=gj[a.type||"unknown"]||"CONN_UNKNOWN";a=gj[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function mj(){var a=kj();if(null!=a&&a.effectiveType)return jj.hasOwnProperty(a.effectiveType)?jj[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function nj(){return"INNERTUBE_API_KEY"in Jh&&"INNERTUBE_API_VERSION"in Jh}
function oj(){return{innertubeApiKey:A("INNERTUBE_API_KEY"),innertubeApiVersion:A("INNERTUBE_API_VERSION"),bb:A("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wb:A("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Wb:A("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:A("INNERTUBE_CONTEXT_CLIENT_VERSION"),yb:A("INNERTUBE_CONTEXT_HL"),xb:A("INNERTUBE_CONTEXT_GL"),Xb:A("INNERTUBE_HOST_OVERRIDE")||"",Zb:!!A("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Yb:!!A("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:A("SERIALIZED_CLIENT_CONFIG_DATA")}}
function pj(a){var b={client:{hl:a.yb,gl:a.xb,clientName:a.wb,clientVersion:a.innertubeContextClientVersion,configInfo:a.bb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=x.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Oh();""!==c&&(b.client.experimentsToken=c);c=Ph();0<c.length&&(b.request={internalExperimentFlags:c});qj(a,void 0,b);rj(void 0,b);sj(a,void 0,b);tj(void 0,b);A("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:A("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(di(A("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function uj(a){var b=new Mg,c=new Fg;D(c,1,a.yb);D(c,2,a.xb);D(c,16,a.Wb);D(c,17,a.innertubeContextClientVersion);if(a.bb){var d=a.bb,e=new Dg;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);I(c,62,e)}(d=x.devicePixelRatio)&&1!=d&&D(c,65,d);d=Oh();""!==d&&D(c,54,d);d=Ph();if(0<d.length){e=new Hg;for(var f=0;f<d.length;f++){var g=new Bg;D(g,1,d[f].key);g.setValue(d[f].value);pd(e,15,Bg,g)}I(b,
5,e)}qj(a,c);rj(c);sj(a,c);tj(c);A("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Kg,D(a,3,A("DELEGATED_SESSION_ID")));a=p(Object.entries(di(A("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);I(b,1,c);return b}
function qj(a,b,c){a=a.wb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=md(b,Eg,96)||new Eg;var d=Xi();d=Object.keys(af).indexOf(d);d=-1===d?null:d;null!==d&&D(c,3,d);I(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Xi())}
function rj(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=x.navigator)?0:c.deviceMemory)){var d;c=null==(d=x.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function sj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=md(b,Dg,62))?d:new Dg;D(c,6,a.appInstallData);I(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function tj(a,b){var c=lj();c&&(a?D(a,61,hj[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=mj())&&(a?D(a,94,ij[c]):b&&(b.client.effectiveConnectionType=c))}
function vj(a,b,c){c=void 0===c?{}:c;var d={};M("enable_web_eom_visitor_data")&&A("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":A("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||A("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Uo||A("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().To:b=me([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=A("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=A("DELEGATED_SESSION_ID")));return d}
;function wj(a){a=Object.assign({},a);delete a.Authorization;var b=me();if(b){var c=new uf;c.update(A("INNERTUBE_API_KEY"));c.update(b);a.hash=Kc(c.digest(),3)}return a}
;function xj(a){var b=new ug;(b=b.isAvailable()?a?new Ag(b,a):b:null)||(a=new vg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new qg(a):null;this.j=document.domain||window.location.hostname}
xj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Lf(b))}catch(f){return}else e=escape(b);Yi(a,e,c,this.j)};
xj.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=Zi(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
xj.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;ie.remove(""+a,"/",void 0===b?"youtube.com":b)};var yj=window,P=yj.ytcsi&&yj.ytcsi.now?yj.ytcsi.now:yj.performance&&yj.performance.timing&&yj.performance.now&&yj.performance.timing.navigationStart?function(){return yj.performance.timing.navigationStart+yj.performance.now()}:function(){return(new Date).getTime()};var zj;function Aj(){zj||(zj=new xj("yt.innertube"));return zj}
function Bj(a,b,c,d){if(d)return null;d=Aj().get("nextId",!0)||1;var e=Aj().get("requests",!0)||{};e[d]={method:a,request:b,authState:wj(c),requestTime:Math.round(P())};Aj().set("nextId",d+1,86400,!0);Aj().set("requests",e,86400,!0);return d}
function Cj(a){var b=Aj().get("requests",!0)||{};delete b[a];Aj().set("requests",b,86400,!0)}
function Dj(a){var b=Aj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=wj(vj(!1));tb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Ej(a,d.method,e,{}));delete b[c]}}Aj().set("requests",b,86400,!0)}}
;function Fj(){}
function Gj(a,b){return Hj(a,0,b)}
Fj.prototype.O=function(a,b){return Hj(a,1,b)};
function Ij(a,b){Hj(a,2,b)}
function Jj(a){var b=z("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Kj(){Fj.apply(this,arguments)}
r(Kj,Fj);function Lj(){Kj.i||(Kj.i=new Kj);return Kj.i}
function Hj(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):mi(a,c||0)}
Kj.prototype.V=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=z("yt.scheduler.instance.cancelJob");b?b(a):ni(a)}};
Kj.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
Kj.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};var $e=Lj();var Mj=Fc||Gc;function Nj(a){var b=Qb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Oj=function(){var a;return function(){a||(a=new xj("ytidb"));return a}}();
function Pj(){var a;return null==(a=Oj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Qj=[],Rj,Sj=!1;function Tj(){var a={};for(Rj=new Uj(void 0===a.handleError?Vj:a.handleError,void 0===a.logEvent?Wj:a.logEvent);0<Qj.length;)switch(a=Qj.shift(),a.type){case "ERROR":Rj.handleError(a.payload);break;case "EVENT":Rj.logEvent(a.eventType,a.payload)}}
function Xj(a){Sj||(Rj?Rj.handleError(a):(Qj.push({type:"ERROR",payload:a}),10<Qj.length&&Qj.shift()))}
function Yj(a,b){Sj||(Rj?Rj.logEvent(a,b):(Qj.push({type:"EVENT",eventType:a,payload:b}),10<Qj.length&&Qj.shift()))}
;function Q(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
r(Q,Error);function Zj(){try{return ak(),!0}catch(a){return!1}}
function ak(a){if(void 0!==A("DATASYNC_ID"))return A("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function bk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function ck(a){return a.substr(0,a.indexOf(":"))||a}
;var dk={},ek=(dk.AUTH_INVALID="No user identifier specified.",dk.EXPLICIT_ABORT="Transaction was explicitly aborted.",dk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",dk.MISSING_INDEX="Index not created.",dk.MISSING_OBJECT_STORES="Object stores not created.",dk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",dk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",dk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
dk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",dk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",dk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",dk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",dk),fk={},gk=(fk.AUTH_INVALID="ERROR",fk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",fk.EXPLICIT_ABORT="IGNORED",fk.IDB_NOT_SUPPORTED="ERROR",fk.MISSING_INDEX=
"WARNING",fk.MISSING_OBJECT_STORES="ERROR",fk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",fk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",fk.QUOTA_EXCEEDED="WARNING",fk.QUOTA_MAYBE_EXCEEDED="WARNING",fk.UNKNOWN_ABORT="WARNING",fk.INCOMPATIBLE_DB_VERSION="WARNING",fk),hk={},ik=(hk.AUTH_INVALID=!1,hk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,hk.EXPLICIT_ABORT=!1,hk.IDB_NOT_SUPPORTED=!1,hk.MISSING_INDEX=!1,hk.MISSING_OBJECT_STORES=!1,hk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,hk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,hk.QUOTA_EXCEEDED=!1,hk.QUOTA_MAYBE_EXCEEDED=!0,hk.UNKNOWN_ABORT=!0,hk.INCOMPATIBLE_DB_VERSION=!1,hk);function jk(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ek[a]:c;d=void 0===d?gk[a]:d;e=void 0===e?ik[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,jk.prototype)}
r(jk,Q);function kk(a,b){jk.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},ek.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,kk.prototype)}
r(kk,jk);function lk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,lk.prototype)}
r(lk,Error);var mk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function nk(a,b,c,d){b=ck(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof jk)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new jk("QUOTA_EXCEEDED",a);if(Hc&&"UnknownError"===e.name)return new jk("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof lk)return new jk("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&mk.some(function(f){return e.message.includes(f)}))return new jk("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new jk("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Cb:e.name})];e.level="WARNING";return e}
function ok(a,b,c){var d=Pj();return new jk("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function pk(a){if(!a)throw Error();throw a;}
function qk(a){return a}
function rk(a){this.i=a}
function sk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
sk.all=function(a){return new sk(new rk(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={na:0};f.na<a.length;f={na:f.na},++f.na)tk(sk.resolve(a[f.na]).then(function(g){return function(h){d[g.na]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
sk.resolve=function(a){return new sk(new rk(function(b,c){a instanceof sk?a.then(b,c):b(a)}))};
sk.reject=function(a){return new sk(new rk(function(b,c){c(a)}))};
sk.prototype.then=function(a,b){var c=this,d=null!=a?a:qk,e=null!=b?b:pk;return new sk(new rk(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){uk(c,c,d,f,g)}),c.onRejected.push(function(){vk(c,c,e,f,g)})):"FULFILLED"===c.state.status?uk(c,c,d,f,g):"REJECTED"===c.state.status&&vk(c,c,e,f,g)}))};
function tk(a,b){a.then(void 0,b)}
function uk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof sk?wk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function vk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof sk?wk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function wk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof sk?wk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function xk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function yk(a){return new Promise(function(b,c){xk(a,b,c)})}
function zk(a){return new sk(new rk(function(b,c){xk(a,b,c)}))}
;function Ak(a,b){return new sk(new rk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Bk(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
l=Bk.prototype;l.add=function(a,b,c){return Ck(this,[a],{mode:"readwrite",S:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Ck(this,[a],{mode:"readwrite",S:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Ck(this,[a],{mode:"readonly",S:!0},function(c){return c.objectStore(a).count(b)})};
function Dk(a,b,c){a=a.i.createObjectStore(b,c);return new Ek(a)}
l.delete=function(a,b){return Ck(this,[a],{mode:"readwrite",S:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Ck(this,[a],{mode:"readonly",S:!0},function(c){return c.objectStore(a).get(b)})};
function Fk(a,b){return Ck(a,["LogsRequestsStore"],{mode:"readwrite",S:!0},function(c){c=c.objectStore("LogsRequestsStore");return zk(c.i.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Ck(a,b,c,d){var e,f,g,h,k,m,q,u,B,v,E,F;return w(function(H){switch(H.i){case 1:var R={mode:"readonly",S:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?R.mode=c:Object.assign(R,c);e=R;a.transactionCount++;f=e.S?3:1;g=0;case 2:if(h){H.u(3);break}g++;k=Math.round(P());wa(H,4);m=a.i.transaction(b,e.mode);R=new Gk(m);R=Hk(R,d);return t(H,R,6);case 6:return q=H.j,u=Math.round(P()),Ik(a,k,u,g,void 0,b.join(),e),H.return(q);case 4:B=ya(H);v=Math.round(P());E=nk(B,a.i.name,b.join(),a.i.version);
if((F=E instanceof jk&&!E.i)||g>=f)Ik(a,k,v,g,E,b.join(),e),h=E;H.u(2);break;case 3:return H.return(Promise.reject(h))}})}
function Ik(a,b,c,d,e,f,g){b=c-b;e?(e instanceof jk&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Yj("QUOTA_EXCEEDED",{dbName:ck(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof jk&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),Yj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Jk(a,!1,d,f,b,g.tag),Xj(e)):Jk(a,!0,d,f,b,g.tag)}
function Jk(a,b,c,d,e,f){Yj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.i.name};
function Ek(a){this.i=a}
l=Ek.prototype;l.add=function(a,b){return zk(this.i.add(a,b))};
l.autoIncrement=function(){return this.i.autoIncrement};
l.clear=function(){return zk(this.i.clear()).then(function(){})};
l.count=function(a){return zk(this.i.count(a))};
function Kk(a,b){return Lk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?Kk(this,a):zk(this.i.delete(a))};
l.get=function(a){return zk(this.i.get(a))};
l.index=function(a){try{return new Mk(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new lk(a,this.i.name);throw b;}};
l.getName=function(){return this.i.name};
l.keyPath=function(){return this.i.keyPath};
function Lk(a,b,c){a=a.i.openCursor(b.query,b.direction);return Nk(a).then(function(d){return Ak(d,c)})}
function Gk(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=jk;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Hk(a,b){var c=new Promise(function(d,e){try{tk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
Gk.prototype.abort=function(){this.i.abort();this.j=!0;throw new jk("EXPLICIT_ABORT");};
Gk.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Ek(a),this.l.set(a,b));return b};
function Mk(a){this.i=a}
l=Mk.prototype;l.count=function(a){return zk(this.i.count(a))};
l.delete=function(a){return Ok(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return zk(this.i.get(a))};
l.getKey=function(a){return zk(this.i.getKey(a))};
l.keyPath=function(){return this.i.keyPath};
l.unique=function(){return this.i.unique};
function Ok(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Nk(a).then(function(d){return Ak(d,c)})}
function Pk(a,b){this.request=a;this.cursor=b}
function Nk(a){return zk(a).then(function(b){return b?new Pk(a,b):null})}
l=Pk.prototype;l.advance=function(a){this.cursor.advance(a);return Nk(this.request)};
l.continue=function(a){this.cursor.continue(a);return Nk(this.request)};
l.delete=function(){return zk(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return zk(this.cursor.update(a))};function Qk(a,b,c){return new Promise(function(d,e){function f(){B||(B=new Bk(g.result,{closed:u}));return B}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.Ac,q=c.upgrade,u=c.closed,B;g.addEventListener("upgradeneeded",function(v){try{if(null===v.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");v.dataLoss&&"none"!==v.dataLoss&&Yj("IDB_DATA_CORRUPTED",{reason:v.dataLossMessage||"unknown reason",dbName:ck(a)});var E=f(),F=new Gk(g.transaction);
q&&q(E,function(H){return v.oldVersion<H&&v.newVersion>=H},F);
F.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var v=g.result;k&&v.addEventListener("versionchange",function(){k(f())});
v.addEventListener("close",function(){Yj("IDB_UNEXPECTEDLY_CLOSED",{dbName:ck(a),dbVersion:v.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Rk(a,b,c){c=void 0===c?{}:c;return Qk(a,b,c)}
function Sk(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.i)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),t(g,yk(c),4);
if(2!=g.i)return xa(g,0);f=ya(g);throw nk(f,a,"",-1);})}
;function Tk(a){return new Promise(function(b){Ij(function(){b()},a)})}
function Uk(a,b){this.name=a;this.options=b;this.m=!0;this.o=this.s=0;this.j=500}
Uk.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Rk(a,b,c)};
Uk.prototype.delete=function(a){a=void 0===a?{}:a;return Sk(this.name,a)};
function Vk(a,b){return new jk("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Wk(a,b){if(!b)throw ok("openWithToken",ck(a.name));return a.open()}
Uk.prototype.open=function(){function a(){var f,g,h,k,m,q,u,B,v,E;return w(function(F){switch(F.i){case 1:return g=null!=(f=Error().stack)?f:"",wa(F,2),t(F,c.l(c.name,c.options.version,e),4);case 4:h=F.j;for(var H=c.options,R=[],O=p(Object.keys(H.ya)),S=O.next();!S.done;S=O.next()){S=S.value;var ka=H.ya[S],N=void 0===ka.jc?Number.MAX_VALUE:ka.jc;!(h.i.version>=ka.Wa)||h.i.version>=N||h.i.objectStoreNames.contains(S)||R.push(S)}k=R;if(0===k.length){F.u(5);break}m=Object.keys(c.options.ya);q=h.objectStoreNames();
if(c.o<Nh("ytidb_reopen_db_retries",0))return c.o++,h.close(),Xj(new jk("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:q})),F.return(a());if(!(c.s<Nh("ytidb_remake_db_retries",1))){F.u(6);break}c.s++;if(!M("ytidb_remake_db_enable_backoff_delay")){F.u(7);break}return t(F,Tk(c.j),8);case 8:c.j*=2;case 7:return t(F,c.delete(),9);case 9:return Xj(new jk("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:q})),F.return(a());
case 6:throw new kk(q,m);case 5:return F.return(h);case 2:u=ya(F);if(u instanceof DOMException?"VersionError"!==u.name:"DOMError"in self&&u instanceof DOMError?"VersionError"!==u.name:!(u instanceof Object&&"message"in u)||"An attempt was made to open a database using a lower version than the existing version."!==u.message){F.u(10);break}return t(F,c.l(c.name,void 0,Object.assign({},e,{upgrade:void 0})),11);case 11:B=F.j;v=B.i.version;if(void 0!==c.options.version&&v>c.options.version+1)throw B.close(),
c.m=!1,Vk(c,v);return F.return(B);case 10:throw b(),u instanceof Error&&!M("ytidb_async_stack_killswitch")&&(u.stack=u.stack+"\n"+g.substring(g.indexOf("\n")+1)),nk(u,c.name,"",null!=(E=c.options.version)?E:-1);}})}
function b(){c.i===d&&(c.i=void 0)}
var c=this;if(!this.m)throw Vk(this);if(this.i)return this.i;var d,e={blocking:function(f){f.close()},
closed:b,Ac:b,upgrade:this.options.upgrade};return this.i=d=a()};var Xk=new Uk("YtIdbMeta",{ya:{databases:{Wa:1}},upgrade:function(a,b){b(1)&&Dk(a,"databases",{keyPath:"actualName"})}});
function Yk(a,b){var c;return w(function(d){if(1==d.i)return t(d,Wk(Xk,b),2);c=d.j;return d.return(Ck(c,["databases"],{S:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return zk(f.i.put(a,void 0)).then(function(){})})}))})}
function Zk(a,b){var c;return w(function(d){if(1==d.i)return a?t(d,Wk(Xk,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function $k(a,b){var c,d;return w(function(e){return 1==e.i?(c=[],t(e,Wk(Xk,b),2)):3!=e.i?(d=e.j,t(e,Ck(d,["databases"],{S:!0,mode:"readonly"},function(f){c.length=0;return Lk(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function al(a){return $k(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function bl(a,b,c){return $k(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function cl(a){var b,c;return w(function(d){if(1==d.i)return b=ak("YtIdbMeta hasAnyMeta other"),t(d,$k(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.j;return d.return(0<c.length)})}
;var dl,el=new function(){}(new function(){});
function fl(){var a,b,c,d;return w(function(e){switch(e.i){case 1:a=Pj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Mj)f=/WebKit\/([0-9]+)/.exec(Qb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Qb()),f=!(f&&602<=parseInt(f[1],10)));if(f||sc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return t(e,Yk(d,el),4);case 4:return t(e,Zk("yt-idb-test-do-not-use",el),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function gl(){if(void 0!==dl)return dl;Sj=!0;return dl=fl().then(function(a){Sj=!1;var b;if(null!=(b=Oj())&&b.i){var c;b={hasSucceededOnce:(null==(c=Pj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Oj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function hl(){return z("ytglobal.idbToken_")||void 0}
function il(){var a=hl();return a?Promise.resolve(a):gl().then(function(b){(b=b?el:void 0)&&y("ytglobal.idbToken_",b);return b})}
;var jl=0;function kl(a,b){jl||(jl=$e.O(function(){var c,d,e,f,g;return w(function(h){switch(h.i){case 1:return t(h,il(),2);case 2:c=h.j;if(!c)return h.return();d=!0;wa(h,3);return t(h,bl(a,c,b),5);case 5:e=h.j;if(!e.length){d=!1;h.u(6);break}f=e[0];return t(h,Sk(f.actualName),7);case 7:return t(h,Zk(f.actualName,c),6);case 6:xa(h,4);break;case 3:g=ya(h),Xj(g),d=!1;case 4:$e.V(jl),jl=0,d&&kl(a,b),h.i=0}})}))}
function ll(){var a;return w(function(b){return 1==b.i?t(b,il(),2):(a=b.j)?b.return(cl(a)):b.return(!1)})}
new yd;function ml(a){if(!Zj())throw a=new jk("AUTH_INVALID",{dbName:a}),Xj(a),a;var b=ak();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function nl(a,b,c,d){var e,f,g,h,k,m;return w(function(q){switch(q.i){case 1:return f=null!=(e=Error().stack)?e:"",t(q,il(),2);case 2:g=q.j;if(!g)throw h=ok("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Xj(h),h;bk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:ml(a);wa(q,3);return t(q,Yk(k,g),5);case 5:return t(q,Rk(k.actualName,b,d),6);case 6:return q.return(q.j);case 3:return m=ya(q),wa(q,7),t(q,Zk(k.actualName,g),9);case 9:xa(q,
8);break;case 7:ya(q);case 8:throw m;}})}
function ol(a,b,c){c=void 0===c?{}:c;return nl(a,b,!1,c)}
function pl(a,b,c){c=void 0===c?{}:c;return nl(a,b,!0,c)}
function ql(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.i)return t(e,il(),2);if(3!=e.i){c=e.j;if(!c)return e.return();bk(a);d=ml(a);return t(e,Sk(d.actualName,b),3)}return t(e,Zk(d.actualName,c),0)})}
function rl(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.i?t(e,Sk(d.actualName,b),2):t(e,Zk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function sl(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.i)return t(d,il(),2);if(3!=d.i){b=d.j;if(!b)return d.return();bk("LogsDatabaseV2");return t(d,al(b),3)}c=d.j;return t(d,rl(c,a,b),0)})}
function tl(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.i)return t(d,il(),2);if(3!=d.i){c=d.j;if(!c)return d.return();bk(a);return t(d,Sk(a,b),3)}return t(d,Zk(a,c),0)})}
;function ul(a){this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.ra=function(){};
this.now=Date.now;this.xa=!1;var b;this.Jb=null!=(b=a.Jb)?b:100;var c;this.Hb=null!=(c=a.Hb)?c:1;var d;this.Fb=null!=(d=a.Fb)?d:2592E6;var e;this.Db=null!=(e=a.Db)?e:12E4;var f;this.Gb=null!=(f=a.Gb)?f:5E3;var g;this.A=null!=(g=a.A)?g:void 0;this.La=!!a.La;var h;this.Ka=null!=(h=a.Ka)?h:.1;var k;this.Ra=null!=(k=a.Ra)?k:10;a.handleError&&(this.handleError=a.handleError);a.ra&&(this.ra=a.ra);a.xa&&(this.xa=a.xa);this.G=a.G;this.W=a.W;this.L=a.L;this.K=a.K;this.ea=a.ea;this.hb=a.hb;this.gb=a.gb;this.A&&
(!this.G||this.G("networkless_logging"))&&vl(this)}
function vl(a){a.A&&!a.xa&&(a.i=!0,a.La&&Math.random()<=a.Ka&&a.L.Qb(a.A),wl(a),a.K.I()&&a.Ba(),a.K.X(a.hb,a.Ba.bind(a)),a.K.X(a.gb,a.mb.bind(a)))}
l=ul.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.A&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.L.set(d,this.A).then(function(e){d.id=e;c.K.I()&&xl(c,d)}).catch(function(e){xl(c,d);
yl(c,e)})}else this.ea(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.A&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.G&&this.G("nwl_skip_retry")&&(e.skipRetry=c);if(this.K.I()||this.G&&this.G("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.i)return t(k,d.L.set(e,d.A).catch(function(m){yl(d,m)}),2);
f(g,h);k.i=0})}}this.ea(a,b,e.skipRetry)}else this.L.set(e,this.A).catch(function(g){d.ea(a,b,e.skipRetry);
yl(d,g)})}else this.ea(a,b,this.G&&this.G("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.A&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.L.qa(d.id,c.A):e=!0;c.K.da&&c.G&&c.G("vss_network_hint")&&c.K.da(!0);f(g,h)};
this.ea(d.url,d.options);this.L.set(d,this.A).then(function(g){d.id=g;e&&c.L.qa(d.id,c.A)}).catch(function(g){yl(c,g)})}else this.ea(a,b)};
l.Ba=function(){var a=this;if(!this.A)throw ok("throttleSend");this.j||(this.j=this.W.O(function(){var b;return w(function(c){if(1==c.i)return t(c,a.L.vb("NEW",a.A),2);if(3!=c.i)return b=c.j,b?t(c,xl(a,b),3):(a.mb(),c.return());a.j&&(a.j=0,a.Ba());c.i=0})},this.Jb))};
l.mb=function(){this.W.V(this.j);this.j=0};
function xl(a,b){var c,d;return w(function(e){switch(e.i){case 1:if(!a.A)throw c=ok("immediateSend"),c;if(void 0===b.id){e.u(2);break}return t(e,a.L.ac(b.id,a.A),3);case 3:(d=e.j)?b=d:a.ra(Error("The request cannot be found in the database."));case 2:if(zl(a,b,a.Fb)){e.u(4);break}a.ra(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return t(e,a.L.qa(b.id,a.A),5);case 5:return e.return();case 4:b.skipRetry||(b=Al(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return t(e,a.L.qa(b.id,a.A),8);case 8:a.ea(b.url,b.options,!!b.skipRetry),e.i=0}})}
function Al(a,b){if(!a.A)throw ok("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:g=Bl(f);if(!(a.G&&a.G("nwl_consider_error_code")&&g||a.G&&!a.G("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ra)){m.u(2);break}if(!a.K.fa){m.u(3);break}return t(m,a.K.fa(),3);case 3:if(a.K.I()){m.u(2);break}c(e,f);if(!a.G||!a.G("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return t(m,a.L.ib(b.id,a.A,!1),6);case 6:return m.return();case 2:if(a.G&&a.G("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Ra)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.Hb?t(m,a.L.ib(b.id,a.A),12):t(m,a.L.qa(b.id,a.A),8);case 12:a.W.O(function(){a.K.I()&&a.Ba()},a.Gb);
case 8:c(e,f),m.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):t(h,a.L.qa(b.id,a.A),2);a.K.da&&a.G&&a.G("vss_network_hint")&&a.K.da(!0);d(e,f);h.i=0})};
return b}
function zl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function wl(a){if(!a.A)throw ok("retryQueuedRequests");a.L.vb("QUEUED",a.A).then(function(b){b&&!zl(a,b,a.Db)?a.W.O(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):t(c,a.L.ib(b.id,a.A),2);wl(a);c.i=0})}):a.K.I()&&a.Ba()})}
function yl(a,b){a.Lb&&!a.K.I()?a.Lb(b):a.handleError(b)}
function Bl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Cl(a,b){this.version=a;this.args=b}
;function Dl(a,b){this.topic=a;this.i=b}
Dl.prototype.toString=function(){return this.topic};var El=z("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.va;L.prototype.publish=L.prototype.ka;L.prototype.clear=L.prototype.clear;y("ytPubsub2Pubsub2Instance",El);var Fl=z("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",Fl);var Gl=z("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",Gl);var Hl=z("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",Hl);
y("ytPubsub2Pubsub2SkipSubKey",null);function Il(a,b){var c=Jl();c&&c.publish.call(c,a.toString(),a,b)}
function Kl(a){var b=Ll,c=Jl();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=z("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Fl[d])try{if(f&&b instanceof Dl&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ja){var m=new h;h.ja=m.version}var q=h.ja}catch(H){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var u=q.construct;
var B=k.args,v=B.length;if(0<v){var E=Array(v);for(k=0;k<v;k++)E[k]=B[k];var F=E}else F=[];f=u.call(q,h,F)}catch(H){throw H.message="yt.pubsub2.Data.deserialize(): "+H.message,H;}}catch(H){throw H.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+H.message,H;}a.call(window,f)}catch(H){Th(H)}},Hl[b.toString()]?z("yt.scheduler.instance")?$e.O(g):mi(g,0):g())});
Fl[d]=!0;Gl[b.toString()]||(Gl[b.toString()]=[]);Gl[b.toString()].push(d);return d}
function Ml(){var a=Nl,b=Kl(function(c){a.apply(void 0,arguments);Ol(b)});
return b}
function Ol(a){var b=Jl();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete Fl[c]}))}
function Jl(){return z("ytPubsub2Pubsub2Instance")}
;function Pl(a,b){Uk.call(this,a,b);this.options=b;bk(a)}
r(Pl,Uk);function Ql(a,b){var c;return function(){c||(c=new Pl(a,b));return c}}
Pl.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.jb?pl:ol)(a,b,Object.assign({},c))};
Pl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.jb?tl:ql)(this.name,a)};
function Rl(a,b){return Ql(a,b)}
;var Sl;
function Tl(){if(Sl)return Sl();var a={};Sl=Rl("LogsDatabaseV2",{ya:(a.LogsRequestsStore={Wa:2},a),jb:!1,upgrade:function(b,c,d){c(2)&&Dk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return Sl()}
;function Ul(a){return Wk(Tl(),a)}
function Vl(a,b){var c,d,e,f;return w(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},t(g,Ul(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:A("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),t(g,Fk(d,e),3);f=g.j;c.Bc=P();Wl(c);return g.return(f)})}
function Xl(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},t(m,Ul(b),2);if(3!=m.i)return d=m.j,e=A("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,t(m,Ck(d,["LogsRequestsStore"],{mode:"readwrite",S:!0},function(q){return Ok(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(u){u.getValue()&&(k=u.getValue(),"NEW"===a&&(k.status="QUEUED",
u.update(k)))})}),3);
c.Bc=P();Wl(c);return m.return(k)})}
function Yl(a,b){var c;return w(function(d){if(1==d.i)return t(d,Ul(b),2);c=d.j;return d.return(Ck(c,["LogsRequestsStore"],{mode:"readwrite",S:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",zk(f.i.put(g,void 0)).then(function(){return g})})}))})}
function Zl(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.i)return t(e,Ul(b),2);d=e.j;return e.return(Ck(d,["LogsRequestsStore"],{mode:"readwrite",S:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),zk(g.i.put(h,void 0)).then(function(){return h})):sk.resolve(void 0)})}))})}
function $l(a,b){var c;return w(function(d){if(1==d.i)return t(d,Ul(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function am(a){var b,c;return w(function(d){if(1==d.i)return t(d,Ul(a),2);b=d.j;c=P()-2592E6;return t(d,Ck(b,["LogsRequestsStore"],{mode:"readwrite",S:!0},function(e){return Lk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function bm(){return w(function(a){return t(a,sl(),0)})}
function Wl(a){M("nwl_csi_killswitch")||.01>=Math.random()&&Il("nwl_transaction_latency_payload",a)}
;var cm={},dm=Rl("ServiceWorkerLogsDatabase",{ya:(cm.SWHealthLog={Wa:1},cm),jb:!0,upgrade:function(a,b){b(1)&&Dk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function em(a){return Wk(dm(),a)}
function fm(a){var b,c;return w(function(d){if(1==d.i)return t(d,em(a),2);b=d.j;c=P()-2592E6;return t(d,Ck(b,["SWHealthLog"],{mode:"readwrite",S:!0},function(e){return Lk(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function gm(a){var b;return w(function(c){if(1==c.i)return t(c,em(a),2);b=c.j;return t(c,b.clear("SWHealthLog"),0)})}
;var hm={},im=0;
function jm(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)Ri(a,void 0,"POST",b);else if(A("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Ri(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new ab({url:a});if(d.l&&d.j||d.m){var e=ac(bc(5,a)),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(ic),h=hc(a,0,"ri",g);if(0>h)var k=null;else{var m=a.indexOf("&",h);if(0>m||m>g)m=g;k=decodeURIComponent(a.slice(h+3,-1!==m?m:0).replace(/\+/g," "))}f="1"!==k}var q=!f;break b}}catch(B){}q=!1}if(q){b:{try{if(window.navigator&&
window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var u=!0;break b}}catch(B){}u=!1}b=u?!0:!1}else b=!1;b||km(a)}}
function km(a){var b=new Image,c=""+im++;hm[c]=b;b.onload=b.onerror=function(){delete hm[c]};
b.src=a}
;function lm(){this.i=new Map;this.j=!1}
function mm(){if(!lm.i){var a=z("yt.networkRequestMonitor.instance")||new lm;y("yt.networkRequestMonitor.instance",a);lm.i=a}return lm.i}
lm.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
lm.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
lm.prototype.removeParams=function(a){return a.split("?")[0]};
lm.prototype.removeParams=lm.prototype.removeParams;lm.prototype.isEndpointCFR=lm.prototype.isEndpointCFR;lm.prototype.requestComplete=lm.prototype.requestComplete;lm.getInstance=mm;var nm;function om(){nm||(nm=new xj("yt.offline"));return nm}
function pm(a){if(M("offline_error_handling")){var b=om().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);om().set("errors",b,2592E3,!0)}}
function qm(){if(M("offline_error_handling")){var a=om().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Q(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Th(c)}om().set("errors",{},2592E3,!0)}}}
;var rm=Nh("network_polling_interval",3E4);function sm(){Te.call(this);var a=this;this.U=0;this.B=this.o=!1;this.l=this.ab();M("use_shared_nsm")?(this.j=Ze(),M("use_shared_nsm_and_keep_yt_online_updated")&&(this.j.X("networkstatus-online",function(){a.l=!0;a.B&&qm()}),this.j.X("networkstatus-offline",function(){a.l=!1}))):(tm(this),um(this))}
r(sm,Te);function vm(){if(!sm.i){var a=z("yt.networkStatusManager.instance")||new sm;y("yt.networkStatusManager.instance",a);sm.i=a}return sm.i}
l=sm.prototype;l.I=function(){if(M("use_shared_nsm")&&this.j){var a;return null==(a=this.j)?void 0:a.I()}return this.l};
l.da=function(a){if(M("use_shared_nsm")&&this.j){var b;null!=(b=this.j)&&(b.j=a)}else a!==this.l&&(this.l=a)};
l.cc=function(a){!M("use_shared_nsm")&&(this.o=!0,void 0===a?0:a)&&(this.U||wm(this))};
l.ab=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Tb=function(){this.B=!0};
l.X=function(a,b){return M("use_shared_nsm")&&this.j?this.j.X(a,b):Te.prototype.X.call(this,a,b)};
function um(a){window.addEventListener("online",function(){return w(function(b){if(1==b.i)return t(b,a.fa(),2);a.B&&qm();b.i=0})})}
function tm(a){window.addEventListener("offline",function(){return w(function(b){return t(b,a.fa(),0)})})}
function wm(a){a.U=Gj(function(){return w(function(b){if(1==b.i)return a.l?a.ab()||!a.o?b.u(3):t(b,a.fa(),3):t(b,a.fa(),3);wm(a);b.i=0})},rm)}
l.fa=function(a){var b=this;if(M("use_shared_nsm")&&this.j){var c=Xe(this.j,a);c.then(function(d){M("use_cfr_monitor")&&mm().requestComplete("generate_204",d)});
return c}return this.v?this.v:this.v=new Promise(function(d){var e,f,g,h;return w(function(k){switch(k.i){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,wa(k,2,3),e&&(b.N=$e.O(function(){e.abort()},a||2E4)),t(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:za(k);M("use_cfr_monitor")&&mm().requestComplete("generate_204",h);b.v=void 0;b.N&&$e.V(b.N);h!==b.l&&(b.l=h,b.l&&b.o?Ue(b,"ytnetworkstatus-online"):b.o&&Ue(b,"ytnetworkstatus-offline"));d(h);Aa(k);break;case 2:ya(k),h=!1,k.u(3)}})})};
sm.prototype.sendNetworkCheckRequest=sm.prototype.fa;sm.prototype.listen=sm.prototype.X;sm.prototype.enableErrorFlushing=sm.prototype.Tb;sm.prototype.getWindowStatus=sm.prototype.ab;sm.prototype.monitorNetworkStatusChange=sm.prototype.cc;sm.prototype.networkStatusHint=sm.prototype.da;sm.prototype.isNetworkAvailable=sm.prototype.I;sm.getInstance=vm;function xm(a){a=void 0===a?{}:a;Te.call(this);var b=this;this.l=this.N=0;this.o="ytnetworkstatus-offline";this.v="ytnetworkstatus-online";M("use_shared_nsm")&&(this.o="networkstatus-offline",this.v="networkstatus-online");this.j=vm();var c=z("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.sb);a.Ab&&(c=z("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=z("yt.networkStatusManager.instance.listen").bind(this.j))a.Ta?(this.Ta=a.Ta,c(this.v,
function(){ym(b,"publicytnetworkstatus-online")}),c(this.o,function(){ym(b,"publicytnetworkstatus-offline")})):(c(this.v,function(){Ue(b,"publicytnetworkstatus-online")}),c(this.o,function(){Ue(b,"publicytnetworkstatus-offline")}))}
r(xm,Te);xm.prototype.I=function(){var a=z("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
xm.prototype.da=function(a){var b=z("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
xm.prototype.fa=function(a){var b=this,c;return w(function(d){c=z("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return M("skip_network_check_if_cfr")&&mm().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.da((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.I())})):c?d.return(c(a)):d.return(!0)})};
function ym(a,b){a.Ta?a.l?($e.V(a.N),a.N=$e.O(function(){a.B!==b&&(Ue(a,b),a.B=b,a.l=P())},a.Ta-(P()-a.l))):(Ue(a,b),a.B=b,a.l=P()):Ue(a,b)}
;var zm;function Am(){ul.call(this,{L:{Qb:am,qa:$l,vb:Xl,ac:Yl,ib:Zl,set:Vl},K:Bm(),handleError:Th,ra:Uh,ea:Cm,now:P,Lb:pm,W:Lj(),hb:"publicytnetworkstatus-online",gb:"publicytnetworkstatus-offline",La:!0,Ka:.1,Ra:Nh("potential_esf_error_limit",10),G:M,xa:!(Zj()&&Dm())});this.l=new yd;M("networkless_immediately_drop_all_requests")&&bm();tl("LogsDatabaseV2")}
r(Am,ul);function Em(){var a=z("yt.networklessRequestController.instance");a||(a=new Am,y("yt.networklessRequestController.instance",a),M("networkless_logging")&&il().then(function(b){a.A=b;vl(a);a.l.resolve();a.La&&Math.random()<=a.Ka&&a.A&&fm(a.A);M("networkless_immediately_drop_sw_health_store")&&Fm(a)}));
return a}
Am.prototype.writeThenSend=function(a,b){b||(b={});Zj()||(this.i=!1);ul.prototype.writeThenSend.call(this,a,b)};
Am.prototype.sendThenWrite=function(a,b,c){b||(b={});Zj()||(this.i=!1);ul.prototype.sendThenWrite.call(this,a,b,c)};
Am.prototype.sendAndWrite=function(a,b){b||(b={});Zj()||(this.i=!1);ul.prototype.sendAndWrite.call(this,a,b)};
Am.prototype.awaitInitialization=function(){return this.l.promise};
function Fm(a){var b;w(function(c){if(!a.A)throw b=ok("clearSWHealthLogsDb"),b;return c.return(gm(a.A).catch(function(d){a.handleError(d)}))})}
function Cm(a,b,c){M("use_cfr_monitor")&&Gm(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P());c&&0===Object.keys(b).length?jm(a):ti(a,b)}
function Bm(){zm||(zm=new xm({Ab:!0,sb:!0}));return zm}
function Gm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){mm().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){mm().requestComplete(a,!0);d(e,f)}}
function Dm(){return M("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==cc(document.location.toString()):!0}
;var Hm=!1,Im=0,Jm=0,Km,Lm=x.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Hm,potentialEsfErrorCounter:Jm};y("ytNetworklessLoggingInitializationOptions",Lm);
function Mm(){var a;w(function(b){switch(b.i){case 1:return t(b,il(),2);case 2:a=b.j;if(!a||!Zj()&&!M("nwl_init_require_datasync_id_killswitch")||!Dm()){b.u(0);break}Hm=!0;Lm.isNwlInitialized=Hm;if(!M("use_new_nwl_initialization")){b.u(4);break}return t(b,Em().awaitInitialization(),5);case 5:return b.return();case 4:return t(b,tl("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.u(7);break}return t(b,am(a),8);case 8:return t(b,fm(a),7);case 7:Nm();Om().I()&&Pm();Om().X("publicytnetworkstatus-online",
Pm);Om().X("publicytnetworkstatus-offline",Qm);if(!M("networkless_immediately_drop_sw_health_store")){b.u(10);break}return t(b,Rm(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return t(b,bm(),0);b.u(0)}})}
function Sm(a,b){function c(d){var e=Om().I();if(!Tm()||!d||e&&M("vss_networkless_bypass_write"))Um(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};Vl(f,d).then(function(g){f.id=g;Om().I()&&Vm(f)}).catch(function(g){Vm(f);
Om().I()?Th(g):pm(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?il().then(function(d){c(d)}):c(hl())}
function Wm(a,b){function c(d){if(Tm()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&mm().requestComplete(e.url,!0);void 0!==e.id?$l(e.id,d):f=!0;M("vss_network_hint")&&Om().da(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){mm().requestComplete(e.url,!1);h(k,m)}}Um(e.url,e.options);
Vl(e,d).then(function(k){e.id=k;f&&$l(e.id,d)}).catch(function(k){Om().I()?Th(k):pm(k)})}else Um(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?il().then(function(d){c(d)}):c(hl())}
function Pm(){var a=hl();if(!a)throw ok("throttleSend");Im||(Im=$e.O(function(){var b;return w(function(c){if(1==c.i)return t(c,Xl("NEW",a),2);if(3!=c.i)return b=c.j,b?t(c,Vm(b),3):(Qm(),c.return());Im&&(Im=0,Pm());c.i=0})},100))}
function Qm(){$e.V(Im);Im=0}
function Vm(a){var b,c,d;return w(function(e){switch(e.i){case 1:b=hl();if(!b)throw c=ok("immediateSend"),c;if(void 0===a.id){e.u(2);break}return t(e,Yl(a.id,b),3);case 3:(d=e.j)?a=d:Uh(Error("The request cannot be found in the database."));case 2:if(Xm(a,2592E6)){e.u(4);break}Uh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return t(e,$l(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=Ym(a));var f=a,g,h;if(null==f?0:null==(g=f.options)?
0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return t(e,$l(a.id,b),8);case 8:Um(a.url,a.options,!!a.skipRetry),e.i=0}})}
function Ym(a){var b=hl();if(!b)throw ok("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:M("use_cfr_monitor")&&mm().requestComplete(a.url,!1);g=Bl(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&Zm()<=Nh("potential_esf_error_limit",10))){m.u(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||mm().isEndpointCFR(a.url))){m.u(3);break}return t(m,Om().fa(),3);case 3:if(Om().I()){m.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.u(6);break}return t(m,Zl(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&Zm()>Nh("potential_esf_error_limit",10))return m.return();z("ytNetworklessLoggingInitializationOptions")&&Lm.potentialEsfErrorCounter++;Jm++;if(void 0===(null==(k=a)?void 0:k.id)){m.u(8);break}return 1>a.sendCount?t(m,Zl(a.id,b),12):t(m,$l(a.id,b),8);case 12:$e.O(function(){Om().I()&&Pm()},5E3);
case 8:c(e,f),m.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return M("use_cfr_monitor")&&mm().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):t(h,$l(a.id,b),2);M("vss_network_hint")&&Om().da(!0);d(e,f);h.i=0})};
return a}
function Xm(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function Nm(){var a=hl();if(!a)throw ok("retryQueuedRequests");Xl("QUEUED",a).then(function(b){b&&!Xm(b,12E4)?$e.O(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):t(c,Zl(b.id,a),2);Nm();c.i=0})}):Om().I()&&Pm()})}
function Rm(){var a,b;return w(function(c){a=hl();if(!a)throw b=ok("clearSWHealthLogsDb"),b;return c.return(gm(a).catch(function(d){Th(d)}))})}
function Om(){if(M("use_new_nwl"))return Bm();Km||(Km=new xm({Ab:!0,sb:!0}));return Km}
function Um(a,b,c){c&&0===Object.keys(b).length?jm(a):ti(a,b)}
function Tm(){return z("ytNetworklessLoggingInitializationOptions")?Lm.isNwlInitialized:Hm}
function Zm(){return z("ytNetworklessLoggingInitializationOptions")?Lm.potentialEsfErrorCounter:Jm}
;function $m(a){var b=this;this.config_=null;a?this.config_=a:nj()&&(this.config_=oj());Gj(function(){Dj(b)},5E3)}
$m.prototype.isReady=function(){!this.config_&&nj()&&(this.config_=oj());return!!this.config_};
function Ej(a,b,c,d){function e(E){E=void 0===E?!1:E;var F;if(d.retry&&"www.youtube-nocookie.com"!=h&&(E||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(F=Bj(b,c,m,k)),F)){var H=g.onSuccess,R=g.onFetchSuccess;g.onSuccess=function(O,S){Cj(F);H(O,S)};
c.onFetchSuccess=function(O,S){Cj(F);R(O,S)}}try{E&&d.retry&&!d.Bb.bypassNetworkless?(g.method="POST",d.Bb.writeThenSend?M("use_new_nwl_wts")?Em().writeThenSend(v,g):Sm(v,g):M("use_new_nwl_saw")?Em().sendAndWrite(v,g):Wm(v,g)):(g.method="POST",g.postParams||(g.postParams={}),ti(v,g))}catch(O){if("InvalidAccessError"==O.name)F&&(Cj(F),F=0),Uh(Error("An extension is blocking network request."));
else throw O;}F&&Gj(function(){Dj(a)},5E3)}
!A("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Uh(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);Th(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(E,F){if(d.onSuccess)d.onSuccess(F)},
onFetchSuccess:function(E){if(d.onSuccess)d.onSuccess(E)},
onError:function(E,F){if(d.onError)d.onError(F)},
onFetchError:function(E){if(d.onError)d.onError(E)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Xb)&&(h=f);var k=a.config_.Zb||!1,m=vj(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,u={alt:"json"},B=a.config_.Yb&&f;B=B&&f.startsWith("Bearer");B||(u.key=a.config_.innertubeApiKey);var v=fi(""+h+q,u||{},!0);M("use_new_nwl")&&Em().i||!M("use_new_nwl")&&
Tm()?gl().then(function(E){e(E)}):e(!1)}
;var an={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},bn={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var cn=0,dn=uc?"webkit":tc?"moz":rc?"ms":qc?"o":"";y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++cn});var en={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function fn(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in en||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function gn(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
fn.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
fn.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
fn.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=x.ytEventsEventsListeners||{};y("ytEventsEventsListeners",nb);var hn=x.ytEventsEventsCounter||{count:0};y("ytEventsEventsCounter",hn);
function jn(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&tb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var kn=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ln(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=jn(a,b,c,d);if(e)return e;e=++hn.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new fn(h);if(!Ld(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new fn(h);
h.currentTarget=a;return c.call(a,h)};
g=Sh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),kn()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function mn(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?kn()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;var nn=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function on(a){this.M=a;this.j=null;this.o=0;this.B=null;this.v=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.m=0;this.U=ln(window,"mousemove",Wa(this.Z,this));a=Wa(this.N,this);"function"===typeof a&&(a=Sh(a));this.ga=window.setInterval(a,25)}
Ya(on,K);on.prototype.Z=function(a){void 0===a.i&&gn(a);var b=a.i;void 0===a.j&&gn(a);this.j=new Hd(b,a.j)};
on.prototype.N=function(){if(this.j){var a=nn();if(0!=this.o){var b=this.B,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.l[this.m]=.5<Math.abs((d-this.v)/this.v)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.M();this.v=d}this.o=a;this.B=this.j;this.m=(this.m+1)%4}};
on.prototype.J=function(){window.clearInterval(this.ga);mn(this.U)};var pn={};
function qn(a){var b=void 0===a?{}:a;a=void 0===b.fc?!1:b.fc;b=void 0===b.Ub?!0:b.Ub;if(null==z("_lact",window)){var c=parseInt(A("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&rn();ln(document,"keydown",rn);ln(document,"keyup",rn);ln(document,"mousedown",rn);ln(document,"mouseup",rn);a?ln(window,"touchmove",function(){sn("touchmove",200)},{passive:!0}):(ln(window,"resize",function(){sn("resize",200)}),b&&ln(window,"scroll",function(){sn("scroll",200)}));
new on(function(){sn("mouse",100)});
ln(document,"touchstart",rn,{passive:!0});ln(document,"touchend",rn,{passive:!0})}}
function sn(a,b){pn[a]||(pn[a]=!0,$e.O(function(){rn();pn[a]=!1},b))}
function rn(){null==z("_lact",window)&&qn();var a=Date.now();y("_lact",a,window);-1==z("_fact",window)&&y("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function tn(){var a=z("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var un=x.ytPubsubPubsubInstance||new L,vn=x.ytPubsubPubsubSubscribedKeys||{},wn=x.ytPubsubPubsubTopicToKeys||{},xn=x.ytPubsubPubsubIsSynchronous||{};function yn(a,b){var c=zn();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){vn[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{xn[a]?f():mi(f,0)}catch(g){Th(g)}},void 0);
vn[d]=!0;wn[a]||(wn[a]=[]);wn[a].push(d);return d}return 0}
function An(a){var b=zn();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete vn[c]}))}
function Bn(a,b){var c=zn();c&&c.publish.apply(c,arguments)}
function Cn(a){var b=zn();if(b)if(b.clear(a),a)Dn(a);else for(var c in wn)Dn(c)}
function zn(){return x.ytPubsubPubsubInstance}
function Dn(a){wn[a]&&(a=wn[a],eb(a,function(b){vn[b]&&delete vn[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.va;L.prototype.publish=L.prototype.ka;L.prototype.clear=L.prototype.clear;y("ytPubsubPubsubInstance",un);y("ytPubsubPubsubTopicToKeys",wn);y("ytPubsubPubsubIsSynchronous",xn);y("ytPubsubPubsubSubscribedKeys",vn);var Un=Nh("initial_gel_batch_timeout",2E3),to=Math.pow(2,16)-1,uo=void 0;function vo(){this.l=this.i=this.j=0}
var wo=new vo,xo=new vo,yo=!0,zo=x.ytLoggingTransportGELQueue_||new Map;y("ytLoggingTransportGELQueue_",zo);var Ao=x.ytLoggingTransportGELProtoQueue_||new Map;y("ytLoggingTransportGELProtoQueue_",Ao);var Bo=x.ytLoggingTransportTokensToCttTargetIds_||{};y("ytLoggingTransportTokensToCttTargetIds_",Bo);var Co=x.ytLoggingTransportTokensToJspbCttTargetIds_||{};y("ytLoggingTransportTokensToJspbCttTargetIds_",Co);
function Do(a,b){if("log_event"===a.endpoint){var c=Eo(a),d=zo.get(c)||[];zo.set(c,d);d.push(a.payload);Fo(b,d,c)}}
function Go(a,b){if("log_event"===a.endpoint){var c=Eo(a,!0),d=Ao.get(c)||[];Ao.set(c,d);a=a.payload.toJSON();d.push(a);Fo(b,d,c,!0)}}
function Fo(a,b,c,d){d=void 0===d?!1:d;a&&(uo=new a);a=Nh("tvhtml5_logging_max_batch")||Nh("web_logging_max_batch")||100;var e=P(),f=d?xo.l:wo.l;b.length>=a?Ho({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Io(d),d?xo.l=e:wo.l=e)}
function Jo(a,b){if("log_event"===a.endpoint){var c=Eo(a),d=new Map;d.set(c,[a.payload]);b&&(uo=new b);return new Tf(function(e){uo&&uo.isReady()?Ko(d,e,{bypassNetworkless:!0},!0):e()})}}
function Lo(a,b){if("log_event"===a.endpoint){var c=Eo(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(uo=new b);return new Tf(function(e){uo&&uo.isReady()?Mo(d,e,{bypassNetworkless:!0},!0):e()})}}
function Eo(a,b){var c="";if(a.wa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Bh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&kd(d,2,Ch,c.playlistId);Co[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Bo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Ho(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Tf(function(d){c?(ni(xo.j),ni(xo.i),xo.i=0):(ni(wo.j),ni(wo.i),wo.i=0);if(uo&&uo.isReady())if(void 0!==b)if(c){var e=new Map,f=Ao.get(b)||[];e.set(b,f);Mo(e,d,a);Ao.delete(b)}else e=new Map,f=zo.get(b)||[],e.set(b,f),Ko(e,d,a),zo.delete(b);else c?(Mo(Ao,d,a),Ao.clear()):(Ko(zo,d,a),zo.clear());else Io(c),d()})}
function Io(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!wo.i||a&&!xo.i)){var b=mi(function(){Ho({writeThenSend:!0},void 0,a)},6E4);
a?xo.i=b:wo.i=b}ni(a?xo.j:wo.j);b=A("LOGGING_BATCH_TIMEOUT",Nh("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&yo&&(b=Un);b=mi(function(){Ho({writeThenSend:!0},void 0,a)},b);
a?xo.j=b:wo.j=b}
function Ko(a,b,c,d){var e=uo;c=void 0===c?{}:c;var f=Math.round(P()),g=a.size;a=p(a);for(var h=a.next();!h.done;h=a.next()){var k=p(h.value);h=k.next().value;var m=k=k.next().value;k=vb({context:pj(e.config_||oj())});k.events=m;(m=Bo[h])&&No(k,h,m);delete Bo[h];h="visitorOnlyApprovedKey"===h;Oo(k,f,h);Po(c);Ej(e,"log_event",k,Qo(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
yo=!1}}
function Mo(a,b,c,d){var e=uo;c=void 0===c?{}:c;var f=Math.round(P()),g=a.size;a=p(a);for(var h=a.next();!h.done;h=a.next()){var k=p(h.value);h=k.next().value;var m=k=k.next().value;k=new Dh;var q=uj(e.config_||oj());I(k,1,q);m=Ro(m);for(q=0;q<m.length;q++)pd(k,3,xh,m[q]);(m=Co[h])&&So(k,h,m);delete Co[h];h="visitorOnlyApprovedKey"===h;To(k,f,h);Po(c);a:{Uc=!0;try{var u=JSON.stringify(k.toJSON(),ud);break a}finally{Uc=!1}u=void 0}k=u;h=Qo(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;Ej(e,"log_event","",h);yo=!1}}
function Po(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function Qo(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Bb:a,wa:b,Wo:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Oo(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=A("EVENT_ID"))&&(c=Uo(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function To(a,b,c){D(a,2,b);if(!c&&(b=A("EVENT_ID"))){c=Uo();var d=new Ah;D(d,1,b);D(d,2,c);I(a,5,d)}}
function Uo(){var a=A("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*to/2));a++;a>to&&(a=1);Kh("BATCH_CLIENT_COUNTER",a);return a}
function No(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function So(a,b,c){if(id(c,1===ld(c,Ch)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;I(a,4,c);a=md(a,Mg,1)||new Mg;c=md(a,Kg,3)||new Kg;var e=new Jg;e.setToken(b);D(e,1,d);pd(c,12,Jg,e);I(a,3,c)}
function Ro(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new xh(a[c]))}catch(d){Th(new Q("Transport failed to deserialize "+String(a[c])))}return b}
;var Vo=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",Vo);
function Wo(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(bn[a]||an[a])return}else if(M("lr_drop_other_payloads")&&bn[a])return;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=tn();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.Y&&(a=e.context,b=d.Y,b={index:Xo(b),groupKey:b},a.sequence=b,d.tb&&delete Vo[d.Y]);(d.oc?Jo:Do)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
wa:d.wa},c)}
function Xo(a){Vo[a]=a in Vo?Vo[a]+1:0;return Vo[a]}
;function Wj(a,b,c){c=void 0===c?{}:c;var d=$m;A("ytLoggingEventsDefaultDisabled",!1)&&$m==$m&&(d=null);Wo(a,b,d,c)}
;var Yo=[{fb:function(a){return"Cannot read property '"+a.key+"'"},
Qa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{fb:function(a){return"Cannot call '"+a.key+"'"},
Qa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{fb:function(a){return a.key+" is not defined"},
Qa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var $o={ia:[],ha:[{la:Zo,weight:500}]};function Zo(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ap(){this.ha=[];this.ia=[]}
var bp;function cp(){if(!bp){var a=bp=new ap;a.ia.length=0;a.ha.length=0;$o.ia&&a.ia.push.apply(a.ia,$o.ia);$o.ha&&a.ha.push.apply(a.ha,$o.ha)}return bp}
;var dp=new L;function ep(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=fp(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=fp(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=fp(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function fp(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function gp(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=hp(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=ep(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?hp(e+".ve",f,g,h):0;d+=g;d+=hp(e,a[e],b,c);if(500<d)break}}else c[b]=ip(a),d+=c[b].length;else c[b]=ip(a),d+=c[b].length;return d}
function hp(a,b,c,d){c+="."+a;a=ip(b);d[c]=a;return c.length+a.length}
function ip(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var jp=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",jp);function kp(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=tn();d=new wh;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.Y){e=c.Y;var f=Xo(e),g=new vh;D(g,2,f);D(g,1,e);I(d,3,g);c.tb&&delete jp[c.Y]}I(a,33,d);(c.oc?Lo:Go)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,wa:c.wa},b)}
;function lp(a,b){b=void 0===b?{}:b;var c=!1;A("ytLoggingEventsDefaultDisabled",!1)&&$m===$m&&(c=!0);kp(a,c?null:$m,b)}
;function mp(a,b,c){var d=new xh;od(d,73,yh,a);c?kp(d,c,b):lp(d,b)}
function np(a,b,c){var d=new xh;od(d,78,yh,a);c?kp(d,c,b):lp(d,b)}
function op(a,b,c){var d=new xh;od(d,208,yh,a);c?kp(d,c,b):lp(d,b)}
function pp(a,b,c){var d=new xh;od(d,156,yh,a);c?kp(d,c,b):lp(d,b)}
function qp(a,b,c){var d=new xh;od(d,215,yh,a);c?kp(d,c,b):lp(d,b)}
function rp(a,b,c){var d=new xh;od(d,111,yh,a);c?kp(d,c,b):lp(d,b)}
;var sp=new Set,tp=0,up=0,vp=0,wp=[],xp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Vj(a){yp(a)}
function zp(a){yp(a,"WARNING")}
function yp(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||A("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||A("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=tp)){var m=wp,q=re(a),u=q.message||"Unknown Error",B=q.name||"UnknownError",v=q.stack||a.j||"Not available";if(v.startsWith(B+": "+u)){var E=v.split("\n");E.shift();v=E.join("\n")}var F=q.lineNumber||"Not available",H=q.fileName||"Not available",R=v,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var S=0;S<a.args.length&&!(O=gp(a.args[S],"params."+S,g,O),500<=O);S++);else if(a.hasOwnProperty("params")&&
a.params){var ka=a.params;if("object"===typeof a.params)for(var N in ka){if(ka[N]){var Ca="params."+N,Oa=ip(ka[N]);g[Ca]=Oa;O+=Ca.length+Oa.length;if(500<O)break}}else g.params=ip(ka)}if(m.length)for(var va=0;va<m.length&&!(O=gp(m[va],"params.context."+va,g,O),500<=O);va++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var G={message:u,name:B,lineNumber:F,fileName:H,stack:R,params:g,sampleWeight:1},Da=Number(a.columnNumber);isNaN(Da)||(G.lineNumber=G.lineNumber+
":"+Da);if("IGNORED"===a.level)var ua=0;else a:{for(var En=cp(),Fn=p(En.ia),ui=Fn.next();!ui.done;ui=Fn.next()){var Gn=ui.value;if(G.message&&G.message.match(Gn.ap)){ua=Gn.weight;break a}}for(var Hn=p(En.ha),vi=Hn.next();!vi.done;vi=Hn.next()){var In=vi.value;if(In.la(G)){ua=In.weight;break a}}ua=1}G.sampleWeight=ua;for(var Jn=p(Yo),wi=Jn.next();!wi.done;wi=Jn.next()){var xi=wi.value;if(xi.Qa[G.name])for(var Kn=p(xi.Qa[G.name]),yi=Kn.next();!yi.done;yi=Kn.next()){var Ln=yi.value,Mf=G.message.match(Ln.regexp);
if(Mf){G.params["params.error.original"]=Mf[0];for(var zi=Ln.groups,Mn={},Vc=0;Vc<zi.length;Vc++)Mn[zi[Vc]]=Mf[Vc+1],G.params["params.error."+zi[Vc]]=Mf[Vc+1];G.message=xi.fb(Mn);break}}}G.params||(G.params={});var Nn=cp();G.params["params.errorServiceSignature"]="msg="+Nn.ia.length+"&cb="+Nn.ha.length;G.params["params.serviceWorker"]="false";x.document&&x.document.querySelectorAll&&(G.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Cb("sample").constructor!==
Ab&&(G.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(G);if(0!==G.sampleWeight&&!sp.has(G.message)){if("ERROR"===h){dp.ka("handleError",G);if(M("record_app_crashed_web")&&0===vp&&1===G.sampleWeight)if(vp++,M("errors_via_jspb")){var Ai=new Zg;D(Ai,1,1);if(!M("report_client_error_with_app_crash_ks")){var On=new Ug;D(On,1,G.message);var Pn=new Vg;I(Pn,3,On);var Qn=new Wg;I(Qn,5,Pn);var Rn=new Xg;I(Rn,9,Qn);I(Ai,4,Rn)}var Sn=new xh;od(Sn,20,yh,Ai);lp(Sn)}else{var Tn=
{appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Tn.systemHealth={crashData:{clientError:{logMessage:{message:G.message}}}});Wj("appCrashed",Tn)}up++}else"WARNING"===h&&dp.ka("handleWarning",G);if(M("kevlar_gel_error_routing"))a:{var Td=h;if(M("errors_via_jspb")){if(Ap())var Vn=void 0;else{var Wc=new Rg;D(Wc,1,G.stack);G.fileName&&D(Wc,4,G.fileName);var qb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==qb.length&&(1!==qb.length||isNaN(Number(qb[0]))?
2!==qb.length||isNaN(Number(qb[0]))||isNaN(Number(qb[1]))||(D(Wc,2,Number(qb[0])),D(Wc,3,Number(qb[1]))):D(Wc,2,Number(qb[0])));var jc=new Ug;D(jc,1,G.message);D(jc,3,G.name);D(jc,6,G.sampleWeight);"ERROR"===Td?D(jc,2,2):"WARNING"===Td?D(jc,2,1):D(jc,2,0);var Bi=new Sg;D(Bi,1,!0);od(Bi,3,Tg,Wc);var Jb=new Og;D(Jb,3,window.location.href);for(var Wn=A("FEXP_EXPERIMENTS",[]),Ci=0;Ci<Wn.length;Ci++){var lt=Wn[Ci];Zc(Jb);jd(Jb,5).push(lt)}var Di=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Lh()&&Di)for(var Xn=
p(Object.keys(Di)),kc=Xn.next();!kc.done;kc=Xn.next()){var Yn=kc.value,Ei=new Qg;D(Ei,1,Yn);Ei.setValue(String(Di[Yn]));pd(Jb,4,Qg,Ei)}var Fi=G.params;if(Fi){var Zn=p(Object.keys(Fi));for(kc=Zn.next();!kc.done;kc=Zn.next()){var $n=kc.value,Gi=new Qg;D(Gi,1,"client."+$n);Gi.setValue(String(Fi[$n]));pd(Jb,4,Qg,Gi)}}var ao=A("SERVER_NAME"),bo=A("SERVER_VERSION");if(ao&&bo){var Hi=new Qg;D(Hi,1,"server.name");Hi.setValue(ao);pd(Jb,4,Qg,Hi);var Ii=new Qg;D(Ii,1,"server.version");Ii.setValue(bo);pd(Jb,
4,Qg,Ii)}var Nf=new Vg;I(Nf,1,Jb);I(Nf,2,Bi);I(Nf,3,jc);Vn=Nf}var co=Vn;if(!co)break a;var eo=new xh;od(eo,163,yh,co);lp(eo)}else{if(Ap())var fo=void 0;else{var Ud={stackTrace:G.stack};G.fileName&&(Ud.filename=G.fileName);var rb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==rb.length&&(1!==rb.length||isNaN(Number(rb[0]))?2!==rb.length||isNaN(Number(rb[0]))||isNaN(Number(rb[1]))||(Ud.lineNumber=Number(rb[0]),Ud.columnNumber=Number(rb[1])):Ud.lineNumber=Number(rb[0]));var Ji={level:"ERROR_LEVEL_UNKNOWN",
message:G.message,errorClassName:G.name,sampleWeight:G.sampleWeight};"ERROR"===Td?Ji.level="ERROR_LEVEL_ERROR":"WARNING"===Td&&(Ji.level="ERROR_LEVEL_WARNNING");var mt={isObfuscated:!0,browserStackInfo:Ud},Xc={pageUrl:window.location.href,kvPairs:[]};A("FEXP_EXPERIMENTS")&&(Xc.experimentIds=A("FEXP_EXPERIMENTS"));var Ki=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Lh()&&Ki)for(var go=p(Object.keys(Ki)),lc=go.next();!lc.done;lc=go.next()){var ho=lc.value;Xc.kvPairs.push({key:ho,value:String(Ki[ho])})}var Li=
G.params;if(Li){var io=p(Object.keys(Li));for(lc=io.next();!lc.done;lc=io.next()){var jo=lc.value;Xc.kvPairs.push({key:"client."+jo,value:String(Li[jo])})}}var ko=A("SERVER_NAME"),lo=A("SERVER_VERSION");ko&&lo&&(Xc.kvPairs.push({key:"server.name",value:ko}),Xc.kvPairs.push({key:"server.version",value:lo}));fo={errorMetadata:Xc,stackTrace:mt,logMessage:Ji}}var mo=fo;if(!mo)break a;Wj("clientError",mo)}("ERROR"===Td||M("errors_flush_gel_always_killswitch"))&&Ho(void 0,void 0,!1)}if(!M("suppress_error_204_logging")){var Vd=
G.params||{},Kb={urlParams:{a:"logerror",t:"jserror",type:G.name,msg:G.message.substr(0,250),line:G.lineNumber,level:h,"client.name":Vd.name},postParams:{url:A("PAGE_NAME",window.location.href),file:G.fileName},method:"POST"};Vd.version&&(Kb["client.version"]=Vd.version);if(Kb.postParams){G.stack&&(Kb.postParams.stack=G.stack);for(var no=p(Object.keys(Vd)),Mi=no.next();!Mi.done;Mi=no.next()){var oo=Mi.value;Kb.postParams["client."+oo]=Vd[oo]}var Ni=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(Ni)for(var po=
p(Object.keys(Ni)),Oi=po.next();!Oi.done;Oi=po.next()){var qo=Oi.value;Kb.postParams[qo]=Ni[qo]}var ro=A("SERVER_NAME"),so=A("SERVER_VERSION");ro&&so&&(Kb.postParams["server.name"]=ro,Kb.postParams["server.version"]=so)}ti(A("ECATCHER_REPORT_HOST","")+"/error_204",Kb)}try{sp.add(G.message)}catch(Mu){}tp++}}}}
function Ap(){for(var a=p(xp),b=a.next();!b.done;b=a.next())if(Nj(b.value.toLowerCase()))return!0;return!1}
function Bp(a){var b=Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,fa(b))}
;function Cp(){this.register=new Map}
function Dp(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.ep("ABORTED")}
Cp.prototype.clear=function(){Dp(this);this.register.clear()};
var Ep=new Cp;var Fp=Date.now().toString();
function Gp(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Fp)for(a=1,b=0;b<Fp.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Fp.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Hp=x.ytLoggingDocDocumentNonce_;Hp||(Hp=Gp(),y("ytLoggingDocDocumentNonce_",Hp));var Ip=Hp;var Jp={Cg:0,rd:1,Bd:2,ik:3,Eg:4,to:5,Yk:6,Dm:7,bm:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function Kp(a){this.i=a}
function Lp(a){return new Kp({trackingParams:a})}
Kp.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
Kp.prototype.getAsJspb=function(){var a=new ah;void 0!==this.i.trackingParams?D(a,1,this.i.trackingParams):(void 0!==this.i.veType&&D(a,2,this.i.veType),void 0!==this.i.veCounter&&D(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&D(a,3,this.i.elementIndex));if(void 0!==this.i.dataElement){var b=this.i.dataElement.getAsJspb();I(a,7,b)}void 0!==this.i.youtubeData&&I(a,8,this.i.jspbYoutubeData);return a};
Kp.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Kp.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};function Mp(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Np(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Op(a){return A(Np(void 0===a?0:a))}
y("yt_logging_screen.getRootVeType",Op);function Pp(a){return(a=Op(void 0===a?0:a))?new Kp({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Qp(){var a=A("csn-to-ctt-auth-info");a||(a={},Kh("csn-to-ctt-auth-info",a));return a}
function Rp(a){a=A(Mp(void 0===a?0:a));if(!a&&!A("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
y("yt_logging_screen.getCurrentCsn",Rp);function Sp(a,b,c){var d=Qp();(c=Rp(c))&&delete d[c];b&&(d[a]=b)}
function Tp(a){return Qp()[a]}
y("yt_logging_screen.getCttAuthInfo",Tp);
function Up(a,b,c,d){c=void 0===c?0:c;if(a!==A(Mp(c))||b!==A(Np(c)))Sp(a,d,c),Kh(Mp(c),a),Kh(Np(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new bh;D(e,1,Ip);D(e,2,a);M("use_default_heartbeat_client")?rp(e):rp(e,void 0,$m)}else e={clientDocumentNonce:Ip,clientScreenNonce:a},M("use_default_heartbeat_client")?Wj("foregroundHeartbeatScreenAssociated",e):Wo("foregroundHeartbeatScreenAssociated",e,$m)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):
b()}
y("yt_logging_screen.setCurrentScreen",Up);var Vp=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",Vp);function Wp(a){Fh(Vp,arguments)}
;var Xp={qd:3611,Ec:27686,Fc:85013,Gc:23462,Ic:42016,Jc:62407,Kc:26926,Hc:43781,Lc:51236,Mc:79148,Nc:50160,Oc:77504,bd:87907,cd:18630,dd:54445,ed:80935,fd:105675,gd:37521,hd:147285,jd:47786,kd:98349,ld:123695,md:6827,nd:29434,od:7282,pd:124448,td:32276,sd:76278,ud:147868,vd:147869,wd:93911,xd:106531,yd:27259,zd:27262,Ad:27263,Cd:21759,Dd:27107,Ed:62936,Fd:49568,Gd:38408,Hd:80637,Id:68727,Jd:68728,Kd:80353,Ld:80356,Md:74610,Nd:45707,Od:83962,Pd:83970,Qd:46713,Rd:89711,Sd:74612,Td:93265,Ud:74611,Vd:131380,
Xd:128979,Yd:139311,Zd:128978,Wd:131391,ae:105350,ce:139312,de:134800,be:131392,ge:113533,he:93252,ie:99357,ke:94521,le:114252,me:113532,ne:94522,je:94583,oe:88E3,pe:139580,qe:93253,re:93254,se:94387,te:94388,ue:93255,we:97424,ee:72502,xe:110111,ye:76019,Ae:117092,Be:117093,ze:89431,Ce:110466,De:77240,Ee:60508,Fe:148123,Ge:148124,He:137401,Ie:137402,Je:137046,Ke:73393,Le:113534,Me:92098,Ne:131381,Oe:84517,Pe:83759,Qe:80357,Re:86113,Se:72598,Te:72733,Ue:107349,Ve:124275,We:118203,Xe:133275,Ye:133274,
Ze:133272,af:133273,bf:133276,cf:144507,df:143247,ef:143248,ff:143249,gf:143250,hf:143251,jf:144401,lf:117431,kf:133797,mf:128572,nf:133405,pf:117429,qf:117430,rf:117432,sf:120080,tf:117259,uf:121692,vf:145656,wf:145655,xf:145653,yf:145654,zf:145657,Af:132972,Bf:133051,Cf:133658,Df:132971,Ef:97615,Gf:143359,Ff:143356,If:143361,Hf:143358,Kf:143360,Jf:143357,Lf:142303,Mf:143353,Nf:143354,Of:144479,Pf:143355,Qf:31402,Sf:133624,Tf:146477,Uf:133623,Vf:133622,Rf:133621,Wf:84774,Xf:95117,Yf:98930,Zf:98931,
ag:98932,cg:43347,dg:129889,eg:149123,fg:45474,gg:100352,hg:84758,ig:98443,jg:117985,kg:74613,lg:74614,mg:64502,ng:136032,og:74615,pg:74616,qg:122224,rg:74617,sg:77820,tg:74618,ug:93278,vg:93274,wg:93275,xg:93276,yg:22110,zg:29433,Ag:133798,Bg:132295,Dg:120541,Fg:82047,Gg:113550,Hg:75836,Ig:75837,Jg:42352,Kg:84512,Lg:76065,Mg:75989,Ng:16623,Og:32594,Pg:27240,Qg:32633,Rg:74858,Tg:3945,Sg:16989,Ug:45520,Vg:25488,Wg:25492,Xg:25494,Yg:55760,Zg:14057,ah:18451,bh:57204,dh:57203,eh:17897,fh:57205,gh:18198,
hh:17898,ih:17909,jh:43980,kh:46220,lh:11721,mh:147994,nh:49954,oh:96369,ph:3854,qh:56251,rh:25624,Ih:16906,Jh:99999,Kh:68172,Lh:27068,Mh:47973,Nh:72773,Oh:26970,Ph:26971,Qh:96805,Rh:17752,Sh:73233,Th:109512,Uh:22256,Vh:14115,Wh:22696,Xh:89278,Yh:89277,Zh:109513,ai:43278,bi:43459,ci:43464,di:89279,fi:43717,gi:55764,hi:22255,ii:147912,ji:89281,ki:40963,li:43277,mi:43442,ni:91824,oi:120137,ri:96367,si:36850,ti:72694,vi:37414,wi:36851,yi:124863,xi:121343,zi:73491,Ai:54473,Bi:43375,Ci:46674,Di:143815,
Ei:139095,Fi:144402,Gi:149968,Hi:149969,Ii:32473,Ji:72901,Ki:72906,Li:50947,Mi:50612,Ni:50613,Oi:50942,Pi:84938,Qi:84943,Ri:84939,Si:84941,Ti:84944,Ui:84940,Vi:84942,Wi:35585,Xi:51926,Yi:79983,Zi:63238,aj:18921,bj:63241,cj:57893,dj:41182,ej:135732,fj:33424,gj:22207,hj:42993,ij:36229,jj:22206,kj:22205,lj:18993,mj:19001,nj:18990,oj:18991,pj:18997,qj:18725,rj:19003,sj:36874,tj:44763,uj:33427,vj:67793,wj:22182,xj:37091,yj:34650,zj:50617,Aj:47261,Bj:22287,Cj:25144,Dj:97917,Ej:62397,Fj:125598,Gj:137935,
Hj:36961,Ij:108035,Jj:27426,Kj:27857,Lj:27846,Mj:27854,Nj:69692,Oj:61411,Pj:39299,Qj:38696,Rj:62520,Sj:36382,Tj:108701,Uj:50663,Vj:36387,Wj:14908,Xj:37533,Yj:105443,Zj:61635,ak:62274,bk:133818,ck:65702,dk:65703,ek:65701,fk:76256,gk:37671,hk:49953,jk:36216,kk:28237,lk:39553,mk:29222,nk:26107,pk:38050,qk:26108,sk:120745,rk:26109,tk:26110,uk:66881,vk:28236,wk:14586,xk:57929,yk:74723,zk:44098,Ak:44099,Dk:23528,Ek:61699,Bk:134104,Ck:134103,Fk:59149,Gk:101951,Hk:97346,Ik:118051,Jk:95102,Kk:64882,Lk:119505,
Mk:63595,Nk:63349,Ok:95101,Pk:75240,Qk:27039,Rk:68823,Sk:21537,Tk:83464,Uk:75707,Vk:83113,Wk:101952,Xk:101953,Zk:79610,al:125755,bl:24402,dl:24400,fl:32925,il:57173,jl:122502,kl:145268,ll:138480,ml:64423,nl:64424,ol:33986,pl:100828,ql:129089,rl:21409,wl:135155,xl:135156,yl:135157,zl:135158,Al:135159,Bl:135160,Cl:135161,Dl:135162,El:135163,Fl:135164,Gl:135165,Hl:135166,sl:11070,ul:11074,vl:17880,Il:14001,Kl:30709,Ll:30707,Ml:30711,Nl:30710,Ol:30708,Jl:26984,Pl:146143,Ql:63648,Rl:63649,Sl:51879,Tl:111059,
Ul:5754,Vl:20445,Xl:130975,Wl:130976,Yl:110386,Zl:113746,am:66557,cm:17310,dm:28631,em:21589,fm:68012,gm:60480,hm:138664,im:141121,jm:31571,km:141978,lm:150105,mm:150106,nm:150107,om:150108,pm:76980,qm:41577,rm:45469,sm:38669,tm:13768,um:13777,vm:141842,wm:62985,xm:4724,ym:59369,zm:43927,Am:43928,Bm:12924,Cm:100355,Fm:56219,Gm:27669,Hm:10337,Em:47896,Im:122629,Km:139723,Jm:139722,Lm:121258,Mm:107598,Nm:127991,Om:96639,Pm:107536,Qm:130169,Rm:96661,Sm:145188,Tm:96658,Um:116646,Vm:121122,Wm:96660,Xm:127738,
Ym:127083,Zm:147842,an:104443,bn:96659,cn:147595,dn:106442,en:134840,fn:63667,gn:63668,hn:63669,jn:130686,kn:147036,ln:78314,mn:147799,nn:148649,pn:55761,qn:127098,rn:134841,sn:96368,tn:67374,un:48992,vn:146176,wn:49956,xn:31961,yn:26388,zn:23811,An:5E4,Bn:126250,Cn:96370,Dn:47355,En:47356,Fn:37935,Gn:45521,Hn:21760,In:83769,Jn:49977,Kn:49974,Ln:93497,Mn:93498,Nn:34325,On:140759,Pn:115803,Qn:123707,Rn:100081,Sn:35309,Tn:68314,Un:25602,Vn:100339,Wn:143516,Xn:59018,Yn:18248,Zn:50625,ao:9729,bo:37168,
co:37169,eo:21667,fo:16749,ho:18635,jo:39305,ko:18046,lo:53969,mo:8213,no:93926,oo:102852,po:110099,qo:22678,ro:69076,so:137575,uo:139224,vo:100856,wo:17736,xo:3832,yo:147111,zo:55759,Ao:64031,Go:93044,Ho:93045,Io:34388,Jo:17657,Ko:17655,Lo:39579,Mo:39578,No:77448,Oo:8196,Po:11357,Qo:69877,Ro:8197,So:82039};function Yp(){var a=ub(Zp),b;return $f(new Tf(function(c,d){a.onSuccess=function(e){li(e)?c(new $p(e)):d(new aq("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new aq("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new aq("Request timed out","net.timeout",e))};
b=ti("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof ag&&b.abort();
return Yf(c)})}
function aq(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(aq,$a);function $p(a){this.xhr=a}
;function bq(){this.j=0;this.i=null}
bq.prototype.then=function(a,b,c){return 1===this.j&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:cq(a):2===this.j&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:dq(a):this};
bq.prototype.getValue=function(){return this.i};
bq.prototype.$goog_Thenable=!0;function dq(a){var b=new bq;a=void 0===a?null:a;b.j=2;b.i=void 0===a?null:a;return b}
function cq(a){var b=new bq;a=void 0===a?null:a;b.j=1;b.i=void 0===a?null:a;return b}
;function eq(){if(ke()||Mj&&Nj("applewebkit")&&!Nj("version")&&(!Nj("safari")||Nj("gsa/"))||vc&&Nj("version/"))return!0;if(M("enable_web_eom_visitor_data"))return A("EOM_VISITOR_DATA")?!1:!0;var a=A("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=Zi("CONSENT"))?a.startsWith("YES+"):!0}
;function fq(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof gq;this.isTimeout=a instanceof aq&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ag}
r(fq,$a);fq.prototype.name="BiscottiError";function gq(){$a.call(this,"Biscotti ID is missing from server")}
r(gq,$a);gq.prototype.name="BiscottiMissingError";var Zp={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},hq=null;function Wh(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Yf(Error("Biscotti id fetching has been disabled entirely."));if(!eq())return Yf(Error("User has not consented - not fetching biscotti id."));if("1"==sb())return Yf(Error("Biscotti ID is not available in private embed mode"));hq||(hq=$f(Yp().then(iq),function(a){return jq(2,a)}));
return hq}
function iq(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new gq;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new gq;a=a.id;Xh(a);hq=cq(a);kq(18E5,2);return a}
function jq(a,b){b=new fq(b);Xh("");hq=dq(b);0<a&&kq(12E4,a-1);throw b;}
function kq(a,b){mi(function(){$f(Yp().then(iq,function(c){return jq(b,c)}),bb)},a)}
function lq(){try{var a=z("yt.ads.biscotti.getId_");return a?a():Wh()}catch(b){return Yf(b)}}
;function mq(a){if("1"!=sb()){a&&Vh();try{lq().then(function(){},function(){}),mi(mq,18E5)}catch(b){Th(b)}}}
;function nq(){this.zc=!0}
function oq(a){var b={},c=me([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(A("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Jh||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Jh&&(b["X-Goog-PageId"]=A("DELEGATED_SESSION_ID")));return b}
;var pq=Symbol("injectionDeps");function qq(a){this.name=a}
qq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function rq(){this.key=sq}
function tq(){this.providers=new Map;this.i=new Map}
tq.prototype.resolve=function(a){return a instanceof rq?uq(this,a.key,[],!0):uq(this,a,[])};
function uq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.Dc)var e=d.Dc;else if(d.Cc)e=d[pq]?vq(a,d[pq],c):[],e=d.Cc.apply(d,fa(e));else if(d.Kb){e=d.Kb;var f=e[pq]?vq(a,e[pq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(fa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ip||a.i.set(b,e);
return e}
function vq(a,b,c){return b?b.map(function(d){return d instanceof rq?uq(a,d.key,c,!0):uq(a,d,c)}):[]}
;var wq;var xq={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var yq=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function zq(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;ac(bc(5,a));try{var b=ei(a).theme;return yq.get(b)||null}catch(c){}return null}
;function Aq(){this.i={};if(this.j=$i()){var a=Zi("CONSISTENCY");a&&Bq(this,{encryptedTokenJarContents:a})}}
Aq.prototype.handleResponse=function(a,b){var c,d;b=(null==(c=b.ca.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.i[c.value.encryptedTokenJarContents];Bq(this,a)}};
function Bq(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.j&&Yi("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Cq=window.location.hostname.split(".").slice(-2).join(".");function Dq(){var a=A("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===A("INNERTUBE_CLIENT_NAME")&&(this.i=Eq(this))&&(a=this.i.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)}
var Fq;Dq.getInstance=function(){Fq=z("yt.clientLocationService.instance");Fq||(Fq=new Dq,y("yt.clientLocationService.instance",Fq));return Fq};
Dq.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.j?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.j.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.j.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.j.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Dq.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.j=void 0,"TVHTML5"===A("INNERTUBE_CLIENT_NAME")?(this.i=Eq(this))&&this.i.set("yt-location-playability-token",a,15552E3):Yi("YT_CL",JSON.stringify({loctok:a}),15552E3,Cq,!0))};
function Eq(a){return void 0===a.i?new xj("yt-client-location"):a.i}
Dq.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!M("web_enable_browser_geolocation_api")&&!M("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;M("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.j=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Dq.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Gq(a,b){var c;if((null==(c=a.signalServiceEndpoint)?0:c.signal)&&b.Aa&&(c=b.Aa[a.signalServiceEndpoint.signal]))return c();var d;if((null==(d=a.continuationCommand)?0:d.request)&&b.Rb&&(d=b.Rb[a.continuationCommand.request]))return d();for(var e in a)if(b.ob[e]&&(a=b.ob[e]))return a()}
;function Hq(a){return function(){return new a}}
;var Iq={},Jq=(Iq.WEB_UNPLUGGED="^unplugged/",Iq.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Iq.WEB_UNPLUGGED_OPS="^unplugged/",Iq.WEB_UNPLUGGED_PUBLIC="^unplugged/",Iq.WEB_CREATOR="^creator/",Iq.WEB_KIDS="^kids/",Iq.WEB_EXPERIMENTS="^experiments/",Iq.WEB_MUSIC="^music/",Iq.WEB_REMIX="^music/",Iq.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Iq.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Iq);
function Kq(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Jq[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Jq).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Lq(a,b){return{method:void 0===b?"POST":b,mode:gi(a)?"same-origin":"cors",credentials:gi(a)?"same-origin":"include"}}
;function Mq(){}
Mq.prototype.s=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?xq:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=A("INNERTUBE_CONTEXT");if(g){g=vb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=A("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;bj.getInstance();var m="USER_INTERFACE_THEME_LIGHT";ej(165)?m="USER_INTERFACE_THEME_DARK":ej(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:zq()||m;h.userInterfaceTheme=k;if(!f){if(k=
lj())h.connectionType=k;M("web_log_effective_connection_type")&&(k=mj())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=x.navigator)?0:q.deviceMemory)){var u;q=null==(u=x.navigator)?void 0:u.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}u=ei(x.location.href);!M("web_populate_internal_geo_killswitch")&&u.internalcountrycode&&(h.internalGeo=u.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:x.location.href},M("kevlar_woffle")&&
Wi.i&&(h.mainAppWebInfo.pwaInstallabilityStatus=Wi.i.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Xi(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(u=A("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:u})),u=A("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:u}));
if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var B=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Oa){}B=void 0}B&&(h.timeZone=B)}(B=Oh())?h.experimentsToken=B:delete h.experimentsToken;B=Ph();Aq.i||(Aq.i=new Aq);h=Aq.i.i;u=[];q=0;for(var v in h)u[q++]=h[v];g.request=Object.assign({},g.request,{internalExperimentFlags:B,consistencyTokenJars:u});!M("web_prequest_context_killswitch")&&(v=A("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
v);B=bj.getInstance();v=ej(58);B=B.get("gsml","");g.user=Object.assign({},g.user);v&&(g.user.enableSafetyMode=v);B&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=Rp())&&(g.clientScreenNonce=f):!f&&(f=Rp())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=z("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&Dq.getInstance().setLocationOnInnerTubeContext(g);try{var E=hi(),F=E.bid;delete E.bid;g.adSignalsInfo={params:[],bid:F};
var H=p(Object.entries(E));for(var R=H.next();!R.done;R=H.next()){var O=p(R.value),S=O.next().value,ka=O.next().value;E=S;F=ka;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:E,value:""+F})}}catch(Oa){yp(Oa)}H=g}else yp(Error("Error: No InnerTubeContext shell provided in ytconfig.")),H={};H={context:H};if(R=this.i(a)){this.j(H,R,b);var N;b="/youtubei/v1/"+Kq(this.l());var Ca;(a=null==(N=a.commandMetadata)?void 0:null==(Ca=N.webCommandMetadata)?void 0:Ca.apiUrl)&&(b=a);N=b;(Ca=A("INNERTUBE_HOST_OVERRIDE"))&&
(N=String(Ca)+String(dc(N)));Ca={};Ca.key=A("INNERTUBE_API_KEY");M("json_condensed_response")&&(Ca.prettyPrint="false");N=fi(N,Ca||{},!1);N={input:N,sa:Lq(N),ca:H,config:Object.assign({},void 0)};N.config.Ha?N.config.Ha.identity=c:N.config.Ha={identity:c};return N}yp(new Q("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Mq.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Nq(){}
r(Nq,Mq);Nq.prototype.s=function(){return{input:"/getDatasyncIdsEndpoint",sa:Lq("/getDatasyncIdsEndpoint","GET"),ca:{}}};
Nq.prototype.l=function(){return[]};
Nq.prototype.i=function(){};
Nq.prototype.j=function(){};var Oq={},Pq=(Oq.GET_DATASYNC_IDS=Hq(Nq),Oq);function Qq(a){var b=Ja.apply(1,arguments);if(!Rq(a)||b.some(function(d){return!Rq(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())Sq(a,c.value);return a}
function Sq(a,b){for(var c in b)if(Rq(b[c])){if(c in a&&!Rq(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Sq(a[c],b[c])}else if(Tq(b[c])){if(c in a&&!Tq(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Uq(a[c],b[c])}else a[c]=b[c];return a}
function Uq(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Rq(c)?a.push(Sq({},c)):Tq(c)?a.push(Uq([],c)):a.push(c);return a}
function Rq(a){return"object"===typeof a&&!Array.isArray(a)}
function Tq(a){return"object"===typeof a&&Array.isArray(a)}
;function Vq(a,b){Cl.call(this,1,arguments);this.timer=b}
r(Vq,Cl);var Wq=new Dl("aft-recorded",Vq);var Xq=window;function Yq(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var T=Xq.performance||Xq.mozPerformance||Xq.msPerformance||Xq.webkitPerformance||new Yq;var Zq=!1,$q={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Wa(T.clearResourceTimings||T.webkitClearResourceTimings||T.mozClearResourceTimings||T.msClearResourceTimings||T.oClearResourceTimings||bb,T);function ar(a){var b=br(a);if(b.aft)return b.aft;a=A((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function cr(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null==T?void 0:null==(a=T.getEntriesByType)?void 0:null==(b=a.call(T,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=dr(e.requestStart),e.responseEnd=dr(e.responseEnd),e.redirectStart=dr(e.redirectStart),e.redirectEnd=dr(e.redirectEnd),e.domainLookupEnd=dr(e.domainLookupEnd),e.connectStart=dr(e.connectStart),e.connectEnd=dr(e.connectEnd),e.responseStart=dr(e.responseStart),
e.secureConnectionStart=dr(e.secureConnectionStart),e.domainLookupStart=dr(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=T.timing}else a=T.timing;return a}
function er(){return M("csi_use_time_origin")&&T.timeOrigin?Math.floor(T.timeOrigin):T.timing.navigationStart}
function dr(a){return Math.round(er()+a)}
function fr(a){var b;(b=z("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},y("ytcsi."+(a||"")+"data_",b));return b}
function gr(a){a=fr(a);a.info||(a.info={});return a.info}
function br(a){a=fr(a);a.tick||(a.tick={});return a.tick}
function hr(a){a=fr(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function ir(a){a=hr(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function jr(a){var b=fr(a).nonce;b||(b=Gp(),fr(a).nonce=b);return b}
function kr(a){var b=br(a||""),c=ar(a);c&&!Zq&&(Il(Wq,new Vq(Math.round(c-b._start),a)),Zq=!0)}
function lr(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!lr(a[d],b[d]))return!1;return!0}
;function mr(){if(T.getEntriesByType){var a=T.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return dr(a.startTime)}a=T.timing;
return a.dc?Math.max(0,a.dc):0}
;function nr(){var a=z("ytcsi.debug");a||(a=[],y("ytcsi.debug",a),y("ytcsi.reference",{}));return a}
function or(a){a=a||"";var b=z("ytcsi.reference");b||(nr(),b=z("ytcsi.reference"));if(b[a])return b[a];var c=nr(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},pr=(U.auto_search="LATENCY_ACTION_AUTO_SEARCH",U.ad_to_ad="LATENCY_ACTION_AD_TO_AD",U.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U.app_startup="LATENCY_ACTION_APP_STARTUP",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U.browse="LATENCY_ACTION_BROWSE",U.cast_splash="LATENCY_ACTION_CAST_SPLASH",
U.channels="LATENCY_ACTION_CHANNELS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",U["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U.chips="LATENCY_ACTION_CHIPS",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
U.embed="LATENCY_ACTION_EMBED",U.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",U.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",U.explore="LATENCY_ACTION_EXPLORE",U.home="LATENCY_ACTION_HOME",U.library="LATENCY_ACTION_LIBRARY",U.live="LATENCY_ACTION_LIVE",U.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",U.onboarding="LATENCY_ACTION_ONBOARDING",U.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",U.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",U.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",U.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",U.prebuffer="LATENCY_ACTION_PREBUFFER",U.prefetch="LATENCY_ACTION_PREFETCH",U.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",U.profile_switcher="LATENCY_ACTION_LOGIN",U.reel_watch="LATENCY_ACTION_REEL_WATCH",U.results="LATENCY_ACTION_RESULTS",
U.search_ui="LATENCY_ACTION_SEARCH_UI",U.search_suggest="LATENCY_ACTION_SUGGEST",U.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",U.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",U.seek="LATENCY_ACTION_PLAYER_SEEK",U.settings="LATENCY_ACTION_SETTINGS",U.tenx="LATENCY_ACTION_TENX",U.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",U.watch="LATENCY_ACTION_WATCH",U.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",U["watch,watch7"]="LATENCY_ACTION_WATCH",U["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
U["watch,watch7ad"]="LATENCY_ACTION_WATCH",U["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",U.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",U.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",U["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.live_settings"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",U["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",U.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",U.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",U),V={},qr=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",
V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",
V.GetLibrary_rid="requestIds",V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",
V.pnt="performanceNavigationTiming",V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm=
"shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",
V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),rr="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
sr={},tr=(sr.ccs="CANARY_STATE_",sr.mver="MEASUREMENT_VERSION_",sr.pis="PLAYER_INITIALIZED_STATE_",sr.yt_pt="LATENCY_PLAYER_",sr.pa="LATENCY_ACTION_",sr.ctop="TOP_ENTITY_TYPE_",sr.yt_vst="VIDEO_STREAM_TYPE_",sr),ur="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function vr(a){return pr[a]||"LATENCY_ACTION_UNKNOWN"}
function wr(a,b,c){c=hr(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in qr){c=qr[a];0<=db(rr,c)&&(b=!!b);a in tr&&"string"===typeof b&&(b=tr[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Qq({},d)}0<=db(ur,a)||zp(new Q("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,
LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,
LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,
LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,
LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,
LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,
LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,
LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,
LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,
LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,
LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,
LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";
W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";
W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";
W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";
W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";
W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";
W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";
W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";
W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";
W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";
W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";
W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";
W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";
W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var xr={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};xr[xr.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";xr[xr.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";xr[xr.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var yr={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};yr[yr.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
yr[yr.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";yr[yr.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";yr[yr.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";yr[yr.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";yr[yr.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";yr[yr.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";yr[yr.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var zr={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};zr[zr.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";zr[zr.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";zr[zr.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";zr[zr.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Ar={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Ar[Ar.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Ar[Ar.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Br={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Br[Br.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Br[Br.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Br[Br.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Br[Br.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Br[Br.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Br[Br.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Cr={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Cr[Cr.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Cr[Cr.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Cr[Cr.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Cr[Cr.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Dr={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Dr[Dr.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Dr[Dr.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Dr[Dr.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Er={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Er[Er.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Er[Er.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Er[Er.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Fr="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo prefetchInfo accelerationSession webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var Gr=x.ytLoggingLatencyUsageStats_||{};y("ytLoggingLatencyUsageStats_",Gr);function Hr(){this.i=0}
function Ir(){Hr.i||(Hr.i=new Hr);return Hr.i}
Hr.prototype.tick=function(a,b,c,d){Jr(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new uh,D(d,1,a),D(d,2,b),a=new xh,od(a,5,yh,d),lp(a,c)):Wj("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Hr.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Jr(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Wj("latencyActionInfo",a,{cttAuthInfo:c}))};
Hr.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Jr(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new xh,od(c,7,yh,a),lp(c,b))};
Hr.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Jr(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Wj("latencyActionSpan",a,{cttAuthInfo:c}))};
function Jr(a,b){Gr[b]=Gr[b]||{count:0};var c=Gr[b];c.count++;c.time=P();a.i||(a.i=Gj(function(){var d=P(),e;for(e in Gr)Gr[e]&&6E4<d-Gr[e].time&&delete Gr[e];a&&(a.i=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||zp(c)),!0):!1}
;function Kr(){var a=["ol"];or("").info.actionType="embed";a&&Kh("TIMING_AFT_KEYS",a);Kh("TIMING_ACTION","embed");Lr();a=gr();var b=ir();if("cold"===a.yt_lt||"cold"===b.loadType){var c=br(),d=hr();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||Z(e,c[e]);e={};c=!1;d=p(Object.keys(a));for(var f=d.next();!f.done;f=d.next())f=f.value,(f=wr(f,a[f]))&&!lr(ir(),f)&&(Qq(b,f),Qq(e,f),c=!0);c&&Mr(e)}y("ytglobal.timingready_",!0);a=A("TIMING_ACTION");z("ytglobal.timingready_")&&a&&"_start"in br()&&
ar()&&kr()}
function Nr(a,b,c,d){null!==b&&(gr(c)[a]=b,(a=wr(a,b,c))&&Mr(a,c,d))}
function Mr(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=or(b||""),Qq(c.info,a),Qq(ir(b),a),c=jr(b),b=fr(b).cttAuthInfo,Ir().info(a,c,b);else{c=new oh;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":qh(c,W[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isPrewarmedLaunch":D(c,92,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,
5,xr[a[e]]);break;case "connectionType":D(c,26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,yr[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);
break;case "adTypesAllowed":D(c,36,a[e]);break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,W[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,zr[a[e]]);break;case "isNavigation":rh(c,a[e]);break;case "viewportHeight":D(c,29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,
84,a[e]);break;case "screenWidth":D(c,85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;
case "appInstallDataAgeMs":D(c,73,a[e]);break;case "latencyActionError":D(c,71,Ar[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "adPrebufferedTimeSecs":D(c,39,a[e]);break;case "isLivestream":D(c,47,a[e]);break;case "liveStreamMode":D(c,91,Br[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,
a[e]);break;case "videoStreamType":D(c,53,Cr[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,Dr[a[e]]);break;case "playerRotationType":D(c,101,Er[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,57,a[e]);break;case "getSearchRequestId":D(c,60,a[e]);break;case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,
a[e]);break;case "getBrowseRequestId":D(c,63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:Fr.includes(f)&&Th(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Th(Error("Codegen laipb translator failed to set "+f))}}Or(c,b)}}
function Or(a,b){var c=hr(b);c.jspbInfos||(c.jspbInfos=[]);c.jspbInfos.push(a);or(b||"").jspbInfo.push(a);c=jr(b);b=fr(b).cttAuthInfo;Ir().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;T.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),T.mark(d))}or(c||"").tick[a]=b||P();d=hr(c);d.gelTicks&&(d.gelTicks[a]=!0);d=br(c);var e=b||P();d[a]=e;e=jr(c);var f=fr(c).cttAuthInfo;if("_start"===a){var g=Ir();Jr(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new mh,D(f,1,e),e=new xh,od(e,6,yh,f),lp(e,b)):Wj("latencyActionBaselined",{clientActionNonce:e},b))}else Ir().tick(a,e,b,f);kr(c);return d[a]}
function Pr(){var a=jr();requestAnimationFrame(function(){setTimeout(function(){a===jr()&&Z("ol",void 0,void 0)},0)})}
function Qr(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=dn+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Lr(){function a(f){var g=cr(),h=er();h&&(Z("srt",g.responseStart),1!==f.prerender&&Z("_start",h,void 0));f=mr();0<f&&Z("fpt",f);f=cr();f.isPerformanceNavigationTiming&&Mr({performanceNavigationTiming:!0});Z("nreqs",f.requestStart,void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,
void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=er()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",f.connectEnd,void 0));T&&"getEntriesByType"in T&&Rr()}
var b=A("TIMING_INFO",{});if(M("web_csi_via_jspb")){b=Sr(b);Or(b);b=qh(rh(new oh,!0),W[vr(A("TIMING_ACTION"))]);var c=A("PREVIOUS_ACTION");c&&D(b,13,W[vr(c)]);(c=A("CLIENT_PROTOCOL"))&&D(b,33,c);(c=A("CLIENT_TRANSPORT"))&&D(b,34,c);(c=Rp())&&"UNDEFINED_CSN"!==c&&D(b,4,c);c=Qr();1!==c&&-1!==c||D(b,6,!0);c=gr();D(b,3,"cold");a(c);c=Tr();if(0<c.length){c=p(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=new nh;D(e,1,d);pd(b,83,nh,e)}}Or(b)}else{for(c in b)b.hasOwnProperty(c)&&Nr(c,b[c]);b=
{isNavigation:!0,actionType:vr(A("TIMING_ACTION"))};if(c=A("PREVIOUS_ACTION"))b.previousAction=vr(c);if(c=A("CLIENT_PROTOCOL"))b.httpProtocol=c;if(c=A("CLIENT_TRANSPORT"))b.transportProtocol=c;(c=Rp())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);c=Qr();if(1===c||-1===c)b.isVisible=!0;c=gr();b.loadType="cold";a(c);c=Tr();if(0<c.length)for(b.resourceInfo=[],c=p(c),d=c.next();!d.done;d=c.next())b.resourceInfo.push({resourceCache:d.value});Mr(b)}}
function Sr(a){var b=new oh;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "GetGuide_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "GetHome_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "GetPlayer_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "GetSearch_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;
case "GetSettings_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "GetTrending_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "GetWatchNext_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}return b}
function Ur(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Xb()&&a.setAttribute("nonce",Xb());return c?(a=T.getEntriesByName(c))&&a[0]&&(a=a[0],c=er(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Tr(){var a=[];if(document.querySelector&&T&&T.getEntriesByName)for(var b in $q)if($q.hasOwnProperty(b)){var c=$q[b];Ur(b,c)&&a.push(c)}return a}
function Rr(){var a=window.location.protocol,b=T.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",dr(b.startTime)),Z("wffe",dr(b.responseEnd)))}
var Vr=window;Vr.ytcsi&&(Vr.ytcsi.info=Nr,Vr.ytcsi.tick=Z);var Wr="tokens consistency mss client_location entities store".split(" ");function Xr(a,b,c,d){this.s=a;this.K=b;this.m=c;this.l=d;this.j=void 0;this.i=new Map;a.Aa||(a.Aa={});a.Aa=Object.assign({},Pq,a.Aa)}
function Yr(a,b,c,d){if(void 0!==Xr.i){if(d=Xr.i,a=[a!==d.s,b!==d.K,c!==d.m,!1,!1,void 0!==d.j],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else Xr.i=new Xr(a,b,c,d)}
function Zr(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?xq:c;var d=Gq(b,a.s);if(!d)return Yf(new Q("Error: No request builder found for command.",b));var e=d.s(b,void 0,c);return e?new Tf(function(f){var g,h,k;return w(function(m){if(1==m.i){h="cors"===(null==(g=e.sa)?void 0:g.mode)?"cors":void 0;if(a.m.zc){var q=e.config,u;q=null==q?void 0:null==(u=q.Ha)?void 0:u.sessionIndex;u=oq({sessionIndex:q});k=Object.assign({},$r(h),u);return m.u(2)}return t(m,as(e.config,
h),3)}2!=m.i&&(k=m.j);f(bs(a,e,k));m.i=0})}):Yf(new Q("Error: Failed to build request for command.",b))}
function bs(a,b,c){var d,e,f,g,h,k,m,q,u,B,v,E,F,H,R,O,S,ka;return w(function(N){switch(N.i){case 1:N.u(2);break;case 3:if((d=N.j)&&!d.isExpired())return N.return(Promise.resolve(d.i()));case 2:if((f=null==(e=b.config)?void 0:e.fp)&&a.i.has(f)&&M("web_memoize_inflight_requests"))return N.return(a.i.get(f));if(null==(g=b)?0:null==(h=g.ca)?0:h.context)for(k=p([]),m=k.next();!m.done;m=k.next())q=m.value,q.cp(b.ca.context);if(null==(u=a.j)?0:u.m(b.input,b.ca))return N.return(a.j.l(b.input,b.ca));B=JSON.stringify(b.ca);
b.sa=Object.assign({},b.sa,{headers:c});v=Object.assign({},b.sa);"POST"===b.sa.method&&(v=Object.assign({},v,{body:B}));(null==(E=b.config)?0:E.kc)&&Z(b.config.kc);F=a.K.fetch(b.input,v,b.config);f&&a.i.set(f,F);return t(N,F,4);case 4:H=N.j;f&&a.i.has(f)&&a.i.delete(f);(null==(R=b.config)?0:R.lc)&&Z(b.config.lc);if(H||null==(O=a.j)||!O.i(b.input,b.ca)){N.u(5);break}return t(N,a.j.j(b.input,b.ca),6);case 6:H=N.j;case 5:if(H&&a.l)for(S=p(Wr),m=S.next();!m.done;m=S.next())ka=m.value,a.l[ka]&&a.l[ka].handleResponse(H,
b);return N.return(H)}})}
function as(a,b){var c,d,e,f;return w(function(g){if(1==g.i){e=null==(c=a)?void 0:null==(d=c.Ha)?void 0:d.sessionIndex;var h=oq({sessionIndex:e});if(!(h instanceof Tf)){var k=new Tf(bb);Uf(k,2,h);h=k}return t(g,h,2)}f=g.j;return g.return(Promise.resolve(Object.assign({},$r(b),f)))})}
function $r(a){var b={"Content-Type":"application/json"};M("enable_web_eom_visitor_data")&&A("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=A("EOM_VISITOR_DATA"):A("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=A("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=A("LOGGED_IN",!1));"cors"!==a&&((a=A("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=A("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=A("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),M("forward_domain_admin_state_on_embeds")&&(a=A("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var cs=["share/get_web_player_share_panel"],ds=["feedback"],es=["notification/modify_channel_preference"],fs=["browse/edit_playlist"],gs=["subscription/subscribe"],hs=["subscription/unsubscribe"];function is(){}
r(is,Mq);is.prototype.l=function(){return gs};
is.prototype.i=function(a){return a.subscribeEndpoint};
is.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(is.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function js(){}
r(js,Mq);js.prototype.l=function(){return hs};
js.prototype.i=function(a){return a.unsubscribeEndpoint};
js.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(js.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ks(){}
r(ks,Mq);ks.prototype.l=function(){return ds};
ks.prototype.i=function(a){return a.feedbackEndpoint};
ks.prototype.j=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(ks.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ls(){}
r(ls,Mq);ls.prototype.l=function(){return es};
ls.prototype.i=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
ls.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function ms(){}
r(ms,Mq);ms.prototype.l=function(){return fs};
ms.prototype.i=function(a){return a.playlistEditEndpoint};
ms.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function ns(){}
r(ns,Mq);ns.prototype.l=function(){return cs};
ns.prototype.i=function(a){return a.webPlayerShareEntityServiceEndpoint};
ns.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var sq=new qq("NETWORK_SLI_TOKEN");function os(a){this.i=a}
os.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.i&&(d=ac(bc(5,nc(a)))||"/UNKNOWN_PATH",c.i.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){zp(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){zp(g)}))})};
os.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){zp(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
os[pq]=[new rq];var ps=new qq("NETWORK_MANAGER_TOKEN");var qs;function rs(a){Cl.call(this,1,arguments);this.csn=a}
r(rs,Cl);var Ll=new Dl("screen-created",rs),ss=[],us=ts,vs=0;function ws(a,b,c,d,e,f,g){function h(){zp(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=us();f=new Kp({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,Y:k};if(M("il_via_jspb")){var m=new ch;m.T(k);dh(m,f.getAsJspb());c&&c.visualElement?(f=new eh,c.clientScreenNonce&&D(f,2,c.clientScreenNonce),fh(f,c.visualElement.getAsJspb()),g&&D(f,4,zh[g]),I(m,5,f)):c&&h();d&&D(m,3,d);pp(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):
c&&h(),d&&(f.cloneCsn=d),a?Wo("screenCreated",f,a,e):Wj("screenCreated",f,e);Il(Ll,new rs(k));return k}
function xs(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:Tp(b),
Y:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(ob(g)||!g.trackingParams&&!g.veType)&&zp(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new gh;h.T(b);ih(h,c.getAsJspb());gb(e,function(k){k=k.getAsJspb();pd(h,3,ah,k)});
"UNDEFINED_CSN"==b?ys("visualElementAttached",h,f):qp(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:gb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?ys("visualElementAttached",c,f):a?Wo("visualElementAttached",c,a,f):Wj("visualElementAttached",c,f)}
function ts(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Kc(b,3)}
function ys(a,b,c){ss.push({payloadName:a,payload:b,options:c});vs||(vs=Ml())}
function Nl(a){if(ss){for(var b=p(ss),c=b.next();!c.done;c=b.next()){var d=c.value;if(d.payload)if(M("il_via_jspb"))switch(d.payload.T(a.csn),d.payloadName){case "screenCreated":pp(d.payload,d.options);break;case "visualElementAttached":qp(d.payload,d.options);break;case "visualElementShown":c=d.payload;d=d.options;var e=new xh;od(e,72,yh,c);lp(e,d);break;case "visualElementHidden":mp(d.payload,d.options);break;case "visualElementGestured":np(d.payload,d.options);break;case "visualElementStateChanged":op(d.payload,
d.options);break;default:zp(new Q("flushQueue unable to map payloadName to JSPB setter"))}else d.payload.csn=a.csn,Wo(d.payloadName,d.payload,null,d.options)}ss.length=0}vs=0}
;function zs(){this.j=new Set;this.i=new Set;this.l=new Map}
zs.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear()};
Ma(zs);function As(){this.s=[];this.D=[];this.i=[];this.m=[];this.o=[];this.j=new Set;this.v=new Map}
function Bs(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=Rp(c),f=Pp(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&xs(a.client,e,f,[Lp(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&xs(a.client,e,f,[Lp(d.playerResponse.trackingParams)])}})}
function Cs(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.s.push([b,c]);else{var e=Rp(d);c=c||Pp(d);e&&c&&xs(a.client,e,c,[b])}}
As.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Rp(void 0===c?0:c)){a=this.client;var e=Lp(d);var f="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";d={cttAuthInfo:Tp(c),Y:c};if(M("il_via_jspb")){var g=new jh;g.T(c);e=e.getAsJspb();I(g,2,e);D(g,4,zh[f]);b&&I(g,3);"UNDEFINED_CSN"==c?ys("visualElementGestured",g,d):np(g,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:f},b&&(f.clientData=b),"UNDEFINED_CSN"==c?ys("visualElementGestured",f,d):a?Wo("visualElementGestured",
f,a,d):Wj("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function Ds(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){Es(a,b,c);var f=Pp(c.layer);if(f){for(var g=p(a.s),h=g.next();!h.done;h=g.next())h=h.value,Cs(a,h[0],h[1]||f,c.layer);f=p(a.D);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Rp(g);var m=k[0]||Pp(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:Tp(h),Y:h};M("il_via_jspb")?(q=new lh,q.T(h),m=m.getAsJspb(),I(q,2,m),"UNDEFINED_CSN"==h?ys("visualElementStateChanged",q,k):op(q,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:q},"UNDEFINED_CSN"==h?ys("visualElementStateChanged",m,k):g?Wo("visualElementStateChanged",m,g,k):Wj("visualElementStateChanged",m,k))}}}};
Rp(c.layer)||a.l();if(c.rb)for(var d=p(c.rb),e=d.next();!e.done;e=d.next())Bs(a,e.value,c.layer);else yp(Error("Delayed screen needs a data promise."))}
function Es(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.ec?c.ec:c.layer;var e=Rp(d);d=Pp(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=A("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=ws(a.client,b,f,c.qb,c.cttAuthInfo,g,c.Zo)}catch(m){Bp(m,{gp:b,rootVe:d,parentVisualElement:void 0,Xo:e,bp:f,qb:c.qb});yp(m);return}Up(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(Jp));for(f=b.next();!f.done;f=b.next())if(Rp(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:Tp(e),Y:e,tb:g},M("il_via_jspb")?(h=new kh,h.T(e),d=d.getAsJspb(),I(h,2,d),D(h,4,g?16:8),"UNDEFINED_CSN"==e?ys("visualElementHidden",h,f):mp(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?ys("visualElementHidden",d,f):b?Wo("visualElementHidden",d,b,f):Wj("visualElementHidden",
d,f)));a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");Mr({clientScreenNonce:k});zs.getInstance().clear();d=Pp(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e={cttAuthInfo:Tp(k),Y:k},M("il_via_jspb")?(b=new kh,b.T(k),f=d.getAsJspb(),I(b,2,f),D(b,4,1),"UNDEFINED_CSN"==k?ys("visualElementShown",b,e):(k=new xh,od(k,72,yh,b),lp(k,e))):(b={csn:k,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==k?ys("visualElementShown",b,e):
Wj("visualElementShown",b,e)));a.j.delete(c.layer||0);a.l=void 0;e=p(a.v);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Cs(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){yp(m)}}for(c=a.m.length=0;c<a.o.length;c++){e=a.o[c];try{e()}catch(m){yp(m)}}}
;function Fs(){var a,b;return w(function(c){if(1==c.i)return a=Xr.i,a?t(c,Zr(a),2):(zp(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.j)return b.errorMetadata?(yp(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.Yo);zp(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var Gs=x.caches,Hs;function Is(a){var b=a.indexOf(":");return-1===b?{Cb:a}:{Cb:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Js(){return w(function(a){if(void 0!==Hs)return a.return(Hs);Hs=new Promise(function(b){var c;return w(function(d){switch(d.i){case 1:return wa(d,2),t(d,Gs.open("test-only"),4);case 4:return t(d,Gs.delete("test-only"),5);case 5:xa(d,3);break;case 2:if(c=ya(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.i=0}})});
return a.return(Hs)})}
function Ks(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.i)return t(k,Js(),2);if(3!=k.i){if(!k.j)return k.return(!1);b=[];return t(k,Gs.keys(),3)}c=k.j;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Is(f),h=g.datasyncId,!h||a.includes(h)||b.push(Gs.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function Ls(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.i)return t(h,Js(),2);if(3!=h.i){if(!h.j)return h.return(!1);a=ak("cache contains other");return t(h,Gs.keys(),3)}b=h.j;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Is(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Ms(){try{return!!self.localStorage}catch(a){return!1}}
;function Ns(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Os(a){if(Ms()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ns(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Ps(){if(!Ms())return!1;var a=ak(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=Ns(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Qs(){Fs().then(function(a){a&&(kl(a),Ks(a),Os(a))})}
function Rs(){var a=new xm;$e.O(function(){var b,c,d,e;return w(function(f){switch(f.i){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=ak("clear");if(b.startsWith("V")){var g=[b];kl(g);Ks(g);Os(g);return f.return()}c=Ps();return t(f,Ls(),3);case 3:return d=f.j,t(f,ll(),4);case 4:if(e=f.j,!c&&!d&&!e)return f.return();case 2:a.I()?Qs():a.m.add("publicytnetworkstatus-online",Qs,!0,void 0,void 0),f.i=0}})})}
;function Ss(a){a&&(a.dataset?a.dataset[Ts("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Us(a,b){return a?a.dataset?a.dataset[Ts(b)]:a.getAttribute("data-"+b):null}
var Vs={};function Ts(a){return Vs[a]||(Vs[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ws=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Xs=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ys(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ws,""),c=c.replace(Xs,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Zs(a,b,c)}
function Zs(a,b,c){c=void 0===c?null:c;var d=$s(a),e=document.getElementById(d),f=e&&Us(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=yn(d,b),b=""+Ra(b),at[b]=f),g||(e=bt(a,d,function(){Us(e,"loaded")||(Ss(e),Bn(d),mi(Xa(Cn,d),0))},c)))}
function bt(a,b,c,d){d=void 0===d?null:d;var e=Kd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gd(e,Ib(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ct(a){a=$s(a);var b=document.getElementById(a);b&&(Cn(a),b.parentNode.removeChild(b))}
function dt(a,b){a&&b&&(a=""+Ra(b),(a=at[a])&&An(a))}
function $s(a){var b=document.createElement("a");Ub(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var at={};var et=[],ft=!1;function gt(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&eq()&&"1"!=sb()){var a=function(){ft=!0;"google_ad_status"in window?Kh("DCLKSTAT",1):Kh("DCLKSTAT",2)};
try{Ys("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}et.push($e.O(function(){if(!(ft||"google_ad_status"in window)){try{dt("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}ft=!0;Kh("DCLKSTAT",3)}},5E3))}}
function ht(){var a=Number(A("DCLKSTAT",0));return isNaN(a)?0:a}
;function jt(){this.state=1;this.i=null}
l=jt.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Cb("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=zb())?f.createScript(e):e,e=(new Eb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Cb("From proto message. b/166824318"),d=Ib(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());kt(this,e,
d,a.program,b,c)}else zp(Error("Cannot initialize botguard without program"))};
function kt(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Ys(c,function(){window[g]?nt(a,d,g,e):(a.state=3,ct(c),zp(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=Kd("SCRIPT"),f.textContent=b,f.nonce=Xb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?nt(a,d,g,e):(a.state=4,zp(new Q("Unable to load Botguard from JS")))):zp(new Q("Unable to load VM; no url or JS provided"))}
l.isInitialized=function(){return!!this.i};
l.getState=function(){return this.state};
function nt(a,b,c,d){a.state=5;try{var e=new zd({program:b,globalName:c});e.wc.then(function(){a.state=6;d&&d(b)});
ot(a,e)}catch(f){a.state=7,f instanceof Error&&zp(f)}}
l.invoke=function(a){a=void 0===a?{}:a;if(this.i){var b=this.i;a={pb:a};if(b.j)throw Error("Already disposed");b=b.m([a.pb,a.yc])}else b=null;return b};
l.dispose=function(){ot(this,null);this.state=8};
function ot(a,b){ne(a.i);a.i=b}
;var pt=new jt;function qt(){return pt.isInitialized()}
function rt(a){a=void 0===a?{}:a;return pt.invoke(a)}
;function st(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Lj():d;this.m=c;this.l=d;this.j=new yd;this.i=a;a={};c=p(this.i.entries());for(d=c.next();!d.done;a={ta:a.ta,Ca:a.Ca},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Ca=d;a.ta=e;d=function(f){return function(){f.ta.eb();b.i[f.Ca].Sa=!0;b.i.every(function(g){return!0===g.Sa})&&b.j.resolve()}}(a);
e=Hj(d,tt(this,a.ta));this.i[a.Ca]=Object.assign({},a.ta,{eb:d,Oa:e})}}
function ut(a){var b=Array.from(a.i.keys()).sort(function(d,e){return tt(a,a.i[e])-tt(a,a.i[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.i[c.value],void 0===c.Oa||c.Sa||(a.l.V(c.Oa),Hj(c.eb,10))}
st.prototype.cancel=function(){for(var a=p(this.i),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Oa||b.Sa||this.l.V(b.Oa),b.Sa=!0;this.j.resolve()};
function tt(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function vt(a){this.state=a;this.plugins=[];this.o=void 0}
vt.prototype.install=function(){this.plugins.push.apply(this.plugins,fa(Ja.apply(0,arguments)))};
vt.prototype.transition=function(a,b){var c=this,d=this.D.find(function(f){return f.from===c.state&&f.C===a});
if(d){this.l&&(ut(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(wt(this,e,this.o),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function wt(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
Lj();var g={};e=p(e);for(var h=e.next();!h.done;g={Da:g.Da},h=e.next())g.Da=h.value,Jj(function(k){return function(){k.Da.la.apply(k.Da,fa(d))}}(g));
f=f.map(function(k){var m;return{eb:function(){k.la.apply(k,fa(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.l=new st(f))}}
da.Object.defineProperties(vt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function xt(a){vt.call(this,void 0===a?"document_active":a);var b=this;this.o=10;this.i=new Map;this.D=[{from:"document_active",C:"document_disposed_preventable",action:this.v},{from:"document_active",C:"document_disposed",action:this.m},{from:"document_disposed_preventable",C:"document_disposed",action:this.m},{from:"document_disposed_preventable",C:"flush_logs",action:this.s},{from:"document_disposed_preventable",C:"document_active",action:this.j},{from:"document_disposed",C:"flush_logs",action:this.s},
{from:"document_disposed",C:"document_active",action:this.j},{from:"document_disposed",C:"document_disposed",action:function(){}},
{from:"flush_logs",C:"document_active",action:this.j}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
r(xt,vt);xt.prototype.v=function(a,b){if(!this.i.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.i=new Map;this.transition("document_active");return}}this.i.set("document_disposed_preventable",!0);this.i.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
xt.prototype.m=function(a,b){this.i.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.i.set("document_disposed",!0),this.transition("flush_logs"))};
xt.prototype.s=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
xt.prototype.j=function(){this.i=new Map};function zt(a){vt.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.D=[{from:"document_visibility_unknown",C:"document_visible",action:this.j},{from:"document_visibility_unknown",C:"document_hidden",action:this.i},{from:"document_visibility_unknown",C:"document_foregrounded",action:this.s},{from:"document_visibility_unknown",C:"document_backgrounded",action:this.m},{from:"document_visible",C:"document_hidden",action:this.i},{from:"document_visible",C:"document_foregrounded",action:this.s},
{from:"document_visible",C:"document_visible",action:this.j},{from:"document_foregrounded",C:"document_visible",action:this.j},{from:"document_foregrounded",C:"document_hidden",action:this.i},{from:"document_foregrounded",C:"document_foregrounded",action:this.s},{from:"document_hidden",C:"document_visible",action:this.j},{from:"document_hidden",C:"document_backgrounded",action:this.m},{from:"document_hidden",C:"document_hidden",action:this.i},{from:"document_backgrounded",C:"document_hidden",action:this.i},
{from:"document_backgrounded",C:"document_backgrounded",action:this.m},{from:"document_backgrounded",C:"document_visible",action:this.j}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
r(zt,vt);zt.prototype.j=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
zt.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
zt.prototype.m=function(a,b){a(null==b?void 0:b.event)};
zt.prototype.s=function(a,b){a(null==b?void 0:b.event)};function At(){this.i=new xt;this.j=new zt}
At.prototype.install=function(){var a=Ja.apply(0,arguments);this.i.install.apply(this.i,fa(a));this.j.install.apply(this.j,fa(a))};function Bt(){At.call(this);var a={};this.install((a.document_disposed={la:this.l},a));a={};this.install((a.flush_logs={la:this.m},a))}
var Ct;r(Bt,At);Bt.prototype.m=function(){if(M("web_fp_via_jspb")){var a=new $g,b=Rp();b&&a.T(b);b=new xh;od(b,380,yh,a);lp(b);M("web_fp_via_jspb_and_json")&&Wj("finalPayload",{csn:Rp()})}else Wj("finalPayload",{csn:Rp()})};
Bt.prototype.l=function(){Dp(Ep)};function Dt(){}
Dt.getInstance=function(){var a=z("ytglobal.storage_");a||(a=new Dt,y("ytglobal.storage_",a));return a};
Dt.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Et()):d.return()})};
function Et(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
y("ytglobal.storageClass_",Dt);function Uj(a,b){var c=this;this.handleError=a;this.i=b;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.j=!0});
this.l=Math.random()<=Nh("ytidb_transaction_ended_event_rate_limit",.02)}
Uj.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ft(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}};
function Ft(a,b){Dt.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Gt(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Gt(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
function Gt(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var Ht=window;
function It(){var a=Ht.uaChPolyfill.state;if(0===a.type)Wj("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),yp(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);Wj("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),Wj("clientHintsPolyfillDiagnostics",
b))}}
var Jt=!1;function Kt(){var a;1===(null==(a=Ht.uaChPolyfill)?void 0:a.state.type)?Jt||(Ht.uaChPolyfill.onReady=Kt,Jt=!0):Ht.uaChPolyfill&&It()}
;function Lt(a,b,c){K.call(this);var d=this;c=c||A("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.M="*";this.m=c;this.sessionId=null;this.channel="widget";this.N=!!a;this.B=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.N&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.M=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.v||0<=db(d.v,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.v=this.j=this.o=null;window.addEventListener("message",this.B)}
r(Lt,K);Lt.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.M)}catch(d){Uh(d)}}};
Lt.prototype.J=function(){window.removeEventListener("message",this.B);K.prototype.J.call(this)};function Mt(){this.j=[];this.isReady=!1;this.l={};var a=this.i=new Lt(!!A("WIDGET_ID_ENFORCE")),b=this.ic.bind(this);a.o=b;a.v=null;this.i.channel="widget";if(a=A("WIDGET_ID"))this.i.sessionId=a}
l=Mt.prototype;l.ic=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.l[a]||"onReady"===a||(this.addEventListener(a,Nt(this,a)),this.l[a]=!0)):this.kb(a,b,c)};
l.kb=function(){};
function Nt(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Vb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ya());this.sendMessage("onReady");eb(this.j,this.Ib,this);this.j=[]};
l.Ya=function(){return null};
function Ot(a,b){a.sendMessage("infoDelivery",b)}
l.Ib=function(a){this.isReady?this.i.sendMessage(a):this.j.push(a)};
l.sendMessage=function(a,b){this.Ib({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.i=null};function Pt(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Qt(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Rt(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function St(a){Mt.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.tc.bind(this));this.addEventListener("onVolumeChange",this.uc.bind(this));this.addEventListener("onApiChange",this.mc.bind(this));this.addEventListener("onPlaybackQualityChange",this.pc.bind(this));this.addEventListener("onPlaybackRateChange",this.qc.bind(this));this.addEventListener("onStateChange",this.sc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.vc.bind(this))}
r(St,Mt);l=St.prototype;
l.kb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Pt(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Qt(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Qt(e);break;case "loadPlaylist":case "cuePlaylist":e=Rt(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Pt(a)&&Ot(this,this.Ya())}};
l.onReady=function(){var a=this.Vb.bind(this);this.i.j=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Ya=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.sc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Ot(this,a)};
l.pc=function(a){Ot(this,{playbackQuality:a})};
l.qc=function(a){Ot(this,{playbackRate:a})};
l.mc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.uc=function(){Ot(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.tc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Ot(this,a)};
l.vc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Ot(this,a)};
l.dispose=function(){Mt.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Tt(a){K.call(this);this.j={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Eb,this)}
r(Tt,K);l=Tt.prototype;l.start=function(){this.started||this.i()||(this.started=!0,this.connection.ma("RECEIVING"))};
l.ma=function(a,b){this.started&&!this.i()&&this.connection.ma(a,b)};
l.Eb=function(a,b,c){if(this.started&&!this.i()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Ut(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Vt(a,c))&&this.ma(a,c))}}};
l.addListener=function(a){if(!(a in this.j)){var b=this.nc.bind(this,a);this.j[a]=b;this.addEventListener(a,b)}};
l.nc=function(a,b){this.started&&!this.i()&&this.connection.ma(a,this.Xa(a,b))};
l.Xa=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.j&&(this.removeEventListener(a,this.j[a]),delete this.j[a])};
l.J=function(){var a=this.connection;a.i()||kg(a.j,"command",this.Eb,this);this.connection=null;for(var b in this.j)this.j.hasOwnProperty(b)&&this.removeListener(b);K.prototype.J.call(this)};function Wt(a,b){Tt.call(this,b);this.api=a;this.start()}
r(Wt,Tt);Wt.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Wt.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Ut(a,b){switch(a){case "loadVideoById":return a=Qt(b),[a];case "cueVideoById":return a=Qt(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Rt(b),[a];case "cuePlaylist":return a=Rt(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Vt(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Wt.prototype.Xa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Tt.prototype.Xa.call(this,a,b)};
Wt.prototype.J=function(){Tt.prototype.J.call(this);delete this.api};function Xt(a){a=void 0===a?!1:a;K.call(this);this.j=new L(a);pe(this,Xa(ne,this.j))}
Ya(Xt,K);Xt.prototype.subscribe=function(a,b,c){return this.i()?0:this.j.subscribe(a,b,c)};
Xt.prototype.m=function(a,b){this.i()||this.j.ka.apply(this.j,arguments)};function Yt(a,b,c){Xt.call(this);this.l=a;this.destination=b;this.id=c}
r(Yt,Xt);Yt.prototype.ma=function(a,b){this.i()||this.l.ma(this.destination,this.id,a,b)};
Yt.prototype.J=function(){this.destination=this.l=null;Xt.prototype.J.call(this)};function Zt(a,b,c){K.call(this);this.destination=a;this.origin=c;this.j=ln(window,"message",this.l.bind(this));this.connection=new Yt(this,a,b);pe(this,Xa(ne,this.connection))}
r(Zt,K);Zt.prototype.ma=function(a,b,c,d){this.i()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Lf(a),this.origin))};
Zt.prototype.l=function(a){var b;if(b=!this.i())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.i()||c.m("command",b.command,b.data,a.origin))}};
Zt.prototype.J=function(){mn(this.j);this.destination=null;K.prototype.J.call(this)};function $t(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ub(b);this.assets=a.assets||{};this.attrs=a.attrs||ub(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
$t.prototype.clone=function(){var a=new $t,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Na(c)?a[b]=ub(c):a[b]=c}return a};var au=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function bu(a){a=a||"";if(window.spf){var b=a.match(au);spf.style.load(a,b?b[1]:"",void 0)}else cu(a)}
function cu(a){var b=du(a),c=document.getElementById(b),d=c&&Us(c,"loaded");d||c&&!d||(c=eu(a,b,function(){Us(c,"loaded")||(Ss(c),Bn(b),mi(Xa(Cn,b),0))}))}
function eu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ib(a);Vb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function du(a){var b=Kd("A");Cb("This URL is never added to the DOM");Ub(b,new Mb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function fu(){K.call(this);this.j=[]}
r(fu,K);fu.prototype.J=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.la,void 0)}K.prototype.J.call(this)};function gu(){fu.apply(this,arguments)}
r(gu,fu);function hu(a,b,c,d){K.call(this);var e=this;this.N=b;this.webPlayerContextConfig=d;this.Ua=!1;this.api={};this.Ea=this.v=null;this.U=new L;this.j={};this.ga=this.Fa=this.elementId=this.Va=this.config=null;this.Z=!1;this.m=this.B=null;this.Ga={};this.Mb=["onReady"];this.lastError=null;this.lb=NaN;this.M={};this.Nb=new gu(this);this.oa=0;this.l=this.o=a;pe(this,Xa(ne,this.U));iu(this);ju(this);pe(this,Xa(ne,this.Nb));c?this.oa=mi(function(){e.loadNewVideoConfig(c)},0):d&&(ku(this),lu(this))}
r(hu,K);l=hu.prototype;l.getId=function(){return this.N};
l.loadNewVideoConfig=function(a){if(!this.i()){this.oa&&(ni(this.oa),this.oa=0);var b=a||{};b instanceof $t||(b=new $t(b));this.config=b;this.setConfig(a);lu(this);this.isReady()&&mu(this)}};
function ku(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.N,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.N:a.config.attrs.id=a.N);var c;(null==(c=a.l)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.Va=a;this.config=nu(a);ku(this);if(!this.Fa){var b;this.Fa=ou(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.l&&(this.l.style.width=Yd(Number(b)||b)),(a=a.height)&&this.l&&(this.l.style.height=Yd(Number(a)||a))};
function mu(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function pu(a){var b=!0,c=qu(a);c&&a.config&&(a=ru(a),b=Us(c,"version")===a);return b&&!!z("yt.player.Application.create")}
function lu(a){if(!a.i()&&!a.Z){var b=pu(a);if(b&&"html5"===(qu(a)?"html5":null))a.ga="html5",a.isReady()||su(a);else if(tu(a),a.ga="html5",b&&a.m&&a.o)a.o.appendChild(a.m),su(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=uu(a,"player_bootstrap_method")?z("yt.player.Application.createAlternate")||z("yt.player.Application.create"):z("yt.player.Application.create");var e=a.config?nu(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);su(a)};
a.Z=!0;b?a.B():(Ys(ru(a),a.B),(b=vu(a))&&bu(b),wu(a)&&!c&&y("yt.player.Application.create",null))}}}
function qu(a){var b=Jd(a.elementId);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.elementId));return b}
function su(a){if(!a.i()){var b=qu(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Z=!1;if(!uu(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}xu(a)}else a.lb=mi(function(){su(a)},50)}}
function xu(a){iu(a);a.Ua=!0;var b=qu(a);if(b){a.v=yu(a,b,"addEventListener");a.Ea=yu(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=yu(a,b,f))}}for(var g in a.j)a.j.hasOwnProperty(g)&&a.v&&a.v(g,a.j[g]);mu(a);a.Fa&&a.Fa(a.api);a.U.ka("onReady",a.api)}
function yu(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,zp(f))}}}
function iu(a){a.Ua=!1;if(a.Ea)for(var b in a.j)a.j.hasOwnProperty(b)&&a.Ea(b,a.j[b]);for(var c in a.M)a.M.hasOwnProperty(c)&&ni(Number(c));a.M={};a.v=null;a.Ea=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Va};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Ua};
function ju(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Bn("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Bn("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=ou(this,b);d&&(0<=db(this.Mb,a)||this.j[a]||(b=zu(this,a),this.v&&this.v(a,b)),this.U.subscribe(a,d),"onReady"===a&&this.isReady()&&mi(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.i()||(b=ou(this,b))&&kg(this.U,a,b)};
function ou(a,b){var c=b;if("string"===typeof b){if(a.Ga[b])return a.Ga[b];c=function(){var d=Ja.apply(0,arguments),e=z(b);if(e)try{e.apply(x,d)}catch(f){yp(f)}};
a.Ga[b]=c}return c?c:null}
function zu(a,b){var c="ytPlayer"+b+a.N;a.j[b]=c;x[c]=function(d){var e=mi(function(){if(!a.i()){a.U.ka(b,null!=d?d:void 0);var f=a.M,g=String(e);g in f&&delete f[g]}},0);
pb(a.M,String(e))};
return c}
l.getPlayerType=function(){return this.ga||(qu(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function tu(a){a.cancel();iu(a);a.ga=null;a.config&&(a.config.loaded=!1);var b=qu(a);b&&(pu(a)||!wu(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.B&&dt(ru(this),this.B);ni(this.lb);this.Z=!1};
l.J=function(){tu(this);if(this.m&&this.config&&this.m.destroy)try{this.m.destroy()}catch(b){yp(b)}this.Ga=null;for(var a in this.j)this.j.hasOwnProperty(a)&&(x[this.j[a]]=null);this.Va=this.config=this.api=null;delete this.o;delete this.l;K.prototype.J.call(this)};
function wu(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function ru(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function vu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function uu(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===$h(c||"","&")[b]}
function nu(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?ub(e):e}return b}
;var Au={},Bu="player_uid_"+(1E9*Math.random()>>>0);function Cu(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Jd(d):d;var e=Bu+"_"+Ra(d),f=Au[e];if(f&&c)return Du(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new hu(d,e,a,b);Au[e]=f;Bn("player-added",f.api);pe(f,function(){delete Au[f.getId()]});
return f.api}
function Du(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Eu=null,Fu=null,Gu=null;function Hu(){var a=Eu.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Iu(a,b,c){a="ST-"+Zb(a).toString(36);b=b?fc(b):"";c=c||5;eq()&&Yi(a,b,c)}
;function Ju(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=A("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=A("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=cc(window.location.href);g&&f.push(g);g=cc(d);if(0<=db(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),Ub(f,d),d=f.href),d&&(d=dc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Rp()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Iu(d,b,h)}else Iu(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=gc(a,k)+m;var u=void 0===u?Xd:u;a:{u=void 0===u?Xd:u;for(k=0;k<u.length;++k)if(m=u[k],m instanceof Sd&&m.isValid(a)){u=new Dd(a,Bd);break a}u=void 0}c.href=Fd(u||Ed)}return!0}
;y("yt.setConfig",Kh);y("yt.config.set",Kh);y("yt.setMsg",Wp);y("yt.msgs.set",Wp);y("yt.logging.errors.log",yp);
y("writeEmbed",function(){var a=A("PLAYER_CONFIG");if(!a){var b=A("PLAYER_VARS");b&&(a={args:b})}mq(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=A("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=ei(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));Kr();if((c=A("WEB_PLAYER_CONTEXT_CONFIGS"))&&
"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=ei(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Eu=Cu(a,c,!1)}else Eu=Cu(a);Eu.addEventListener("onVideoDataChange",Hu);a=A("POST_MESSAGE_ID","player");A("ENABLE_JS_API")?Gu=new St(Eu):A("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Fu=new Zt(window.parent,a,b),Gu=new Wt(Eu,Fu.connection));
gt();M("ytidb_create_logger_embed_killswitch")||Tj();a={};Ct||(Ct=new Bt);Ct.install((a.flush_logs={la:function(){Ho()}},a));
M("networkless_logging_web_embedded")&&(M("embeds_web_enable_new_nwl")?Em():Mm());M("embeds_enable_ua_ch_polyfill")&&Kt();M("ytidb_clear_embedded_player")&&$e.O(function(){var e;if(!qs){wq||(wq=new tq);var f=wq;var g={hc:ps,Kb:os};f.providers.set(g.hc,g);g={ob:{feedbackEndpoint:Hq(ks),modifyChannelNotificationPreferenceEndpoint:Hq(ls),playlistEditEndpoint:Hq(ms),subscribeEndpoint:Hq(is),unsubscribeEndpoint:Hq(js),webPlayerShareEntityServiceEndpoint:Hq(ns)}};var h=M("web_enable_client_location_service")?
Dq.getInstance():void 0,k={};h&&(k.client_location=h);if(void 0===m){nq.i||(nq.i=new nq);var m=nq.i}void 0===e&&(e=f.resolve(ps));Yr(g,e,m,k);qs=Xr.i}Rs()})});
var Ku=Sh(function(){Pr();var a=bj.getInstance(),b=ej(119),c=1<window.devicePixelRatio;if(document.body&&yf(document.body,"exp-invert-logo"))if(c&&!yf(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!yf(d,"inverted-hdpi")){var e=wf(d);xf(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&yf(document.body,"inverted-hdpi")&&zf();if(b!=c){b="f"+(Math.floor(119/31)+1);d=fj(b)||0;d=c?d|67108864:d&-67108865;0==d?delete aj[b]:(c=d.toString(16),
aj[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.i;d=[];for(var f in aj)d.push(f+"="+encodeURIComponent(String(aj[f])));Yi(b,d.join("&"),63072E3,a.j,c)}As.i||(As.i=new As);a=As.i;f=16623;var g=void 0===g?{}:g;Object.values(Xp).includes(f)||(zp(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.i.push({rootVe:f,key:g.key||""});a.s=[];a.D=[];g.rb?Ds(a,f,g):Es(a,f,g)}),Lu=Sh(function(){Eu&&Eu.sendAbandonmentPing&&Eu.sendAbandonmentPing();
A("PL_ATT")&&pt.dispose();for(var a=$e,b=0,c=et.length;b<c;b++)a.V(et[b]);et.length=0;ct("//static.doubleclick.net/instream/ad_status.js");ft=!1;Kh("DCLKSTAT",0);oe(Gu,Fu);Eu&&(Eu.removeEventListener("onVideoDataChange",Hu),Eu.destroy())});
window.addEventListener?(window.addEventListener("load",Ku),window.addEventListener("pagehide",Lu)):window.attachEvent&&(window.attachEvent("onload",Ku),window.attachEvent("onunload",Lu));y("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||qt);y("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||rt);y("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||ht);y("yt.player.exports.navigate",z("yt.player.exports.navigate")||Ju);
y("yt.util.activity.init",z("yt.util.activity.init")||qn);y("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||tn);y("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||rn);}).call(this);
