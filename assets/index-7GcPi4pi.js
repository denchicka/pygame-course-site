(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var to={exports:{}},ci={},no={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),hc=Symbol.for("react.portal"),mc=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),xc=Symbol.for("react.profiler"),vc=Symbol.for("react.provider"),_c=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),kc=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),Bs=Symbol.iterator;function Ec(e){return e===null||typeof e!="object"?null:(e=Bs&&e[Bs]||e["@@iterator"],typeof e=="function"?e:null)}var ro={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},io=Object.assign,lo={};function mn(e,t,n){this.props=e,this.context=t,this.refs=lo,this.updater=n||ro}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function so(){}so.prototype=mn.prototype;function Vl(e,t,n){this.props=e,this.context=t,this.refs=lo,this.updater=n||ro}var Yl=Vl.prototype=new so;Yl.constructor=Vl;io(Yl,mn.prototype);Yl.isPureReactComponent=!0;var $s=Array.isArray,ao=Object.prototype.hasOwnProperty,Ql={current:null},oo={key:!0,ref:!0,__self:!0,__source:!0};function uo(e,t,n){var r,l={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)ao.call(t,r)&&!oo.hasOwnProperty(r)&&(l[r]=t[r]);var o=arguments.length-2;if(o===1)l.children=n;else if(1<o){for(var u=Array(o),f=0;f<o;f++)u[f]=arguments[f+2];l.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:lr,type:e,key:s,ref:a,props:l,_owner:Ql.current}}function Tc(e,t){return{$$typeof:lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zl(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function Nc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ws=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nc(""+e.key):t.toString(36)}function Rr(e,t,n,r,l){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case lr:case hc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Ni(a,0):r,$s(l)?(n="",e!=null&&(n=e.replace(Ws,"$&/")+"/"),Rr(l,t,n,"",function(f){return f})):l!=null&&(Zl(l)&&(l=Tc(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Ws,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",$s(e))for(var o=0;o<e.length;o++){s=e[o];var u=r+Ni(s,o);a+=Rr(s,t,n,u,l)}else if(u=Ec(e),typeof u=="function")for(e=u.call(e),o=0;!(s=e.next()).done;)s=s.value,u=r+Ni(s,o++),a+=Rr(s,t,n,u,l);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function dr(e,t,n){if(e==null)return e;var r=[],l=0;return Rr(e,r,"","",function(s){return t.call(n,s,l++)}),r}function Rc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Cr={transition:null},Cc={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:Ql};function co(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:dr,forEach:function(e,t,n){dr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return dr(e,function(){t++}),t},toArray:function(e){return dr(e,function(t){return t})||[]},only:function(e){if(!Zl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=mn;I.Fragment=mc;I.Profiler=xc;I.PureComponent=Vl;I.StrictMode=yc;I.Suspense=wc;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cc;I.act=co;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=io({},e.props),l=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Ql.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)ao.call(t,u)&&!oo.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){o=Array(u);for(var f=0;f<u;f++)o[f]=arguments[f+2];r.children=o}return{$$typeof:lr,type:e.type,key:l,ref:s,props:r,_owner:a}};I.createContext=function(e){return e={$$typeof:_c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vc,_context:e},e.Consumer=e};I.createElement=uo;I.createFactory=function(e){var t=uo.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:jc,render:e}};I.isValidElement=Zl;I.lazy=function(e){return{$$typeof:Sc,_payload:{_status:-1,_result:e},_init:Rc}};I.memo=function(e,t){return{$$typeof:kc,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Cr.transition;Cr.transition={};try{e()}finally{Cr.transition=t}};I.unstable_act=co;I.useCallback=function(e,t){return he.current.useCallback(e,t)};I.useContext=function(e){return he.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return he.current.useDeferredValue(e)};I.useEffect=function(e,t){return he.current.useEffect(e,t)};I.useId=function(){return he.current.useId()};I.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return he.current.useMemo(e,t)};I.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};I.useRef=function(e){return he.current.useRef(e)};I.useState=function(e){return he.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return he.current.useTransition()};I.version="18.3.1";no.exports=I;var Ft=no.exports;const di=gc(Ft);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=Ft,bc=Symbol.for("react.element"),Oc=Symbol.for("react.fragment"),Fc=Object.prototype.hasOwnProperty,Lc=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ic={key:!0,ref:!0,__self:!0,__source:!0};function po(e,t,n){var r,l={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Fc.call(t,r)&&!Ic.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:bc,type:e,key:s,ref:a,props:l,_owner:Lc.current}}ci.Fragment=Oc;ci.jsx=po;ci.jsxs=po;to.exports=ci;var i=to.exports,Ji={},fo={exports:{}},Ne={},go={exports:{}},ho={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,O){var F=N.length;N.push(O);e:for(;0<F;){var B=F-1>>>1,Q=N[B];if(0<l(Q,O))N[B]=O,N[F]=Q,F=B;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var O=N[0],F=N.pop();if(F!==O){N[0]=F;e:for(var B=0,Q=N.length,st=Q>>>1;B<st;){var Ce=2*(B+1)-1,vn=N[Ce],Pe=Ce+1,cr=N[Pe];if(0>l(vn,F))Pe<Q&&0>l(cr,vn)?(N[B]=cr,N[Pe]=F,B=Pe):(N[B]=vn,N[Ce]=F,B=Ce);else if(Pe<Q&&0>l(cr,F))N[B]=cr,N[Pe]=F,B=Pe;else break e}}return O}function l(N,O){var F=N.sortIndex-O.sortIndex;return F!==0?F:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var u=[],f=[],v=1,d=null,p=3,h=!1,_=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var O=n(f);O!==null;){if(O.callback===null)r(f);else if(O.startTime<=N)r(f),O.sortIndex=O.expirationTime,t(u,O);else break;O=n(f)}}function w(N){if(x=!1,m(N),!_)if(n(u)!==null)_=!0,we(T);else{var O=n(f);O!==null&&pe(w,O.startTime-N)}}function T(N,O){_=!1,x&&(x=!1,g(A),A=-1),h=!0;var F=p;try{for(m(O),d=n(u);d!==null&&(!(d.expirationTime>O)||N&&!z());){var B=d.callback;if(typeof B=="function"){d.callback=null,p=d.priorityLevel;var Q=B(d.expirationTime<=O);O=e.unstable_now(),typeof Q=="function"?d.callback=Q:d===n(u)&&r(u),m(O)}else r(u);d=n(u)}if(d!==null)var st=!0;else{var Ce=n(f);Ce!==null&&pe(w,Ce.startTime-O),st=!1}return st}finally{d=null,p=F,h=!1}}var C=!1,R=null,A=-1,P=5,L=-1;function z(){return!(e.unstable_now()-L<P)}function X(){if(R!==null){var N=e.unstable_now();L=N;var O=!0;try{O=R(!0,N)}finally{O?de():(C=!1,R=null)}}else C=!1}var de;if(typeof c=="function")de=function(){c(X)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,se=Qe.port2;Qe.port1.onmessage=X,de=function(){se.postMessage(null)}}else de=function(){S(X,0)};function we(N){R=N,C||(C=!0,de())}function pe(N,O){A=S(function(){N(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){_||h||(_=!0,we(T))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var F=p;p=O;try{return N()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=p;p=N;try{return O()}finally{p=F}},e.unstable_scheduleCallback=function(N,O,F){var B=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?B+F:B):F=B,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=F+Q,N={id:v++,callback:O,priorityLevel:N,startTime:F,expirationTime:Q,sortIndex:-1},F>B?(N.sortIndex=F,t(f,N),n(u)===null&&N===n(f)&&(x?(g(A),A=-1):x=!0,pe(w,F-B))):(N.sortIndex=Q,t(u,N),_||h||(_=!0,we(T))),N},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(N){var O=p;return function(){var F=p;p=O;try{return N.apply(this,arguments)}finally{p=F}}}})(ho);go.exports=ho;var Pc=go.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=Ft,Te=Pc;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mo=new Set,$n={};function Bt(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for($n[e]=t,e=0;e<t.length;e++)mo.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),el=Object.prototype.hasOwnProperty,zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ks={},Hs={};function Uc(e){return el.call(Hs,e)?!0:el.call(Ks,e)?!1:zc.test(e)?Hs[e]=!0:(Ks[e]=!0,!1)}function Mc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bc(e,t,n,r){if(t===null||typeof t>"u"||Mc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,l,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xl=/[\-:]([a-z])/g;function ql(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xl,ql);le[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xl,ql);le[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xl,ql);le[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jl(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bc(t,n,l,r)&&(n=null),r||l===null?Uc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pr=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),es=Symbol.for("react.strict_mode"),tl=Symbol.for("react.profiler"),yo=Symbol.for("react.provider"),xo=Symbol.for("react.context"),ts=Symbol.for("react.forward_ref"),nl=Symbol.for("react.suspense"),rl=Symbol.for("react.suspense_list"),ns=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),vo=Symbol.for("react.offscreen"),Gs=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=Gs&&e[Gs]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ri;function Cn(e){if(Ri===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ri=t&&t[1]||""}return`
`+Ri+e}var Ci=!1;function Ai(e,t){if(!e||Ci)return"";Ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),s=r.stack.split(`
`),a=l.length-1,o=s.length-1;1<=a&&0<=o&&l[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(l[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||l[a]!==s[o]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=o);break}}}finally{Ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cn(e):""}function $c(e){switch(e.tag){case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 2:case 15:return e=Ai(e.type,!1),e;case 11:return e=Ai(e.type.render,!1),e;case 1:return e=Ai(e.type,!0),e;default:return""}}function il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Kt:return"Portal";case tl:return"Profiler";case es:return"StrictMode";case nl:return"Suspense";case rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xo:return(e.displayName||"Context")+".Consumer";case yo:return(e._context.displayName||"Context")+".Provider";case ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ns:return t=e.displayName||null,t!==null?t:il(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return il(e(t))}catch{}}return null}function Wc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return il(t);case 8:return t===es?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _o(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kc(e){var t=_o(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fr(e){e._valueTracker||(e._valueTracker=Kc(e))}function jo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_o(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wo(e,t){t=t.checked,t!=null&&Jl(e,"checked",t,!1)}function sl(e,t){wo(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?al(e,t.type,n):t.hasOwnProperty("defaultValue")&&al(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function al(e,t,n){(t!=="number"||Mr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var An=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(An(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function ko(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function So(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?So(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,Eo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function To(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function No(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=To(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Gc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cl(e,t){if(t){if(Gc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function dl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pl=null;function rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fl=null,rn=null,ln=null;function Xs(e){if(e=or(e)){if(typeof fl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=mi(t),fl(e.stateNode,e.type,t))}}function Ro(e){rn?ln?ln.push(e):ln=[e]:rn=e}function Co(){if(rn){var e=rn,t=ln;if(ln=rn=null,Xs(e),t)for(e=0;e<t.length;e++)Xs(t[e])}}function Ao(e,t){return e(t)}function bo(){}var bi=!1;function Oo(e,t,n){if(bi)return e(t,n);bi=!0;try{return Ao(e,t,n)}finally{bi=!1,(rn!==null||ln!==null)&&(bo(),Co())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=mi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var gl=!1;if(tt)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){gl=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{gl=!1}function Vc(e,t,n,r,l,s,a,o,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}var Ln=!1,Br=null,$r=!1,hl=null,Yc={onError:function(e){Ln=!0,Br=e}};function Qc(e,t,n,r,l,s,a,o,u){Ln=!1,Br=null,Vc.apply(Yc,arguments)}function Zc(e,t,n,r,l,s,a,o,u){if(Qc.apply(this,arguments),Ln){if(Ln){var f=Br;Ln=!1,Br=null}else throw Error(E(198));$r||($r=!0,hl=f)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qs(e){if($t(e)!==e)throw Error(E(188))}function Xc(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return qs(l),e;if(s===r)return qs(l),t;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=l,r=s;else{for(var a=!1,o=l.child;o;){if(o===n){a=!0,n=l,r=s;break}if(o===r){a=!0,r=l,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=l;break}if(o===r){a=!0,r=s,n=l;break}o=o.sibling}if(!a)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Lo(e){return e=Xc(e),e!==null?Io(e):null}function Io(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Io(e);if(t!==null)return t;e=e.sibling}return null}var Po=Te.unstable_scheduleCallback,Js=Te.unstable_cancelCallback,qc=Te.unstable_shouldYield,Jc=Te.unstable_requestPaint,Z=Te.unstable_now,ed=Te.unstable_getCurrentPriorityLevel,is=Te.unstable_ImmediatePriority,Do=Te.unstable_UserBlockingPriority,Wr=Te.unstable_NormalPriority,td=Te.unstable_LowPriority,zo=Te.unstable_IdlePriority,pi=null,Ve=null;function nd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:ld,rd=Math.log,id=Math.LN2;function ld(e){return e>>>=0,e===0?32:31-(rd(e)/id|0)|0}var hr=64,mr=4194304;function bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~l;o!==0?r=bn(o):(s&=a,s!==0&&(r=bn(s)))}else a=n&~l,a!==0?r=bn(a):s!==0&&(r=bn(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,s=t&-t,l>=s||l===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),l=1<<n,r|=e[n],t&=~l;return r}function sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Be(s),o=1<<a,u=l[a];u===-1?(!(o&n)||o&r)&&(l[a]=sd(o,t)):u<=t&&(e.expiredLanes|=o),s&=~o}}function ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uo(){var e=hr;return hr<<=1,!(hr&4194240)&&(hr=64),e}function Oi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function od(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Be(n),s=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~s}}function ls(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var U=0;function Mo(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bo,ss,$o,Wo,Ko,yl=!1,yr=[],ht=null,mt=null,yt=null,Hn=new Map,Gn=new Map,ct=[],ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ea(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function wn(e,t,n,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},t!==null&&(t=or(t),t!==null&&ss(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function cd(e,t,n,r,l){switch(t){case"focusin":return ht=wn(ht,e,t,n,r,l),!0;case"dragenter":return mt=wn(mt,e,t,n,r,l),!0;case"mouseover":return yt=wn(yt,e,t,n,r,l),!0;case"pointerover":var s=l.pointerId;return Hn.set(s,wn(Hn.get(s)||null,e,t,n,r,l)),!0;case"gotpointercapture":return s=l.pointerId,Gn.set(s,wn(Gn.get(s)||null,e,t,n,r,l)),!0}return!1}function Ho(e){var t=At(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Fo(n),t!==null){e.blockedOn=t,Ko(e.priority,function(){$o(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pl=r,n.target.dispatchEvent(r),pl=null}else return t=or(n),t!==null&&ss(t),e.blockedOn=n,!1;t.shift()}return!0}function ta(e,t,n){Ar(e)&&n.delete(t)}function dd(){yl=!1,ht!==null&&Ar(ht)&&(ht=null),mt!==null&&Ar(mt)&&(mt=null),yt!==null&&Ar(yt)&&(yt=null),Hn.forEach(ta),Gn.forEach(ta)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,yl||(yl=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,dd)))}function Vn(e){function t(l){return kn(l,e)}if(0<yr.length){kn(yr[0],e);for(var n=1;n<yr.length;n++){var r=yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&kn(ht,e),mt!==null&&kn(mt,e),yt!==null&&kn(yt,e),Hn.forEach(t),Gn.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)Ho(n),n.blockedOn===null&&ct.shift()}var sn=lt.ReactCurrentBatchConfig,Hr=!0;function pd(e,t,n,r){var l=U,s=sn.transition;sn.transition=null;try{U=1,as(e,t,n,r)}finally{U=l,sn.transition=s}}function fd(e,t,n,r){var l=U,s=sn.transition;sn.transition=null;try{U=4,as(e,t,n,r)}finally{U=l,sn.transition=s}}function as(e,t,n,r){if(Hr){var l=xl(e,t,n,r);if(l===null)$i(e,t,r,Gr,n),ea(e,r);else if(cd(l,e,t,n,r))r.stopPropagation();else if(ea(e,r),t&4&&-1<ud.indexOf(e)){for(;l!==null;){var s=or(l);if(s!==null&&Bo(s),s=xl(e,t,n,r),s===null&&$i(e,t,r,Gr,n),s===l)break;l=s}l!==null&&r.stopPropagation()}else $i(e,t,r,null,n)}}var Gr=null;function xl(e,t,n,r){if(Gr=null,e=rs(r),e=At(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function Go(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ed()){case is:return 1;case Do:return 4;case Wr:case td:return 16;case zo:return 536870912;default:return 16}default:return 16}}var pt=null,os=null,br=null;function Vo(){if(br)return br;var e,t=os,n=t.length,r,l="value"in pt?pt.value:pt.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[s-r];r++);return br=l.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function na(){return!1}function Re(e){function t(n,r,l,s,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xr:na,this.isPropagationStopped=na,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},us=Re(yn),ar=V({},yn,{view:0,detail:0}),gd=Re(ar),Fi,Li,Sn,fi=V({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(Fi=e.screenX-Sn.screenX,Li=e.screenY-Sn.screenY):Li=Fi=0,Sn=e),Fi)},movementY:function(e){return"movementY"in e?e.movementY:Li}}),ra=Re(fi),hd=V({},fi,{dataTransfer:0}),md=Re(hd),yd=V({},ar,{relatedTarget:0}),Ii=Re(yd),xd=V({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),vd=Re(xd),_d=V({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jd=Re(_d),wd=V({},yn,{data:0}),ia=Re(wd),kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Td(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ed[e])?!!t[e]:!1}function cs(){return Td}var Nd=V({},ar,{key:function(e){if(e.key){var t=kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rd=Re(Nd),Cd=V({},fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),la=Re(Cd),Ad=V({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),bd=Re(Ad),Od=V({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fd=Re(Od),Ld=V({},fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=Re(Ld),Pd=[9,13,27,32],ds=tt&&"CompositionEvent"in window,In=null;tt&&"documentMode"in document&&(In=document.documentMode);var Dd=tt&&"TextEvent"in window&&!In,Yo=tt&&(!ds||In&&8<In&&11>=In),sa=" ",aa=!1;function Qo(e,t){switch(e){case"keyup":return Pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function zd(e,t){switch(e){case"compositionend":return Zo(t);case"keypress":return t.which!==32?null:(aa=!0,sa);case"textInput":return e=t.data,e===sa&&aa?null:e;default:return null}}function Ud(e,t){if(Gt)return e==="compositionend"||!ds&&Qo(e,t)?(e=Vo(),br=os=pt=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yo&&t.locale!=="ko"?null:t.data;default:return null}}var Md={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Md[e.type]:t==="textarea"}function Xo(e,t,n,r){Ro(r),t=Vr(t,"onChange"),0<t.length&&(n=new us("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Yn=null;function Bd(e){ou(e,0)}function gi(e){var t=Qt(e);if(jo(t))return e}function $d(e,t){if(e==="change")return t}var qo=!1;if(tt){var Pi;if(tt){var Di="oninput"in document;if(!Di){var ua=document.createElement("div");ua.setAttribute("oninput","return;"),Di=typeof ua.oninput=="function"}Pi=Di}else Pi=!1;qo=Pi&&(!document.documentMode||9<document.documentMode)}function ca(){Pn&&(Pn.detachEvent("onpropertychange",Jo),Yn=Pn=null)}function Jo(e){if(e.propertyName==="value"&&gi(Yn)){var t=[];Xo(t,Yn,e,rs(e)),Oo(Bd,t)}}function Wd(e,t,n){e==="focusin"?(ca(),Pn=t,Yn=n,Pn.attachEvent("onpropertychange",Jo)):e==="focusout"&&ca()}function Kd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(Yn)}function Hd(e,t){if(e==="click")return gi(t)}function Gd(e,t){if(e==="input"||e==="change")return gi(t)}function Vd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:Vd;function Qn(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!el.call(t,l)||!We(e[l],t[l]))return!1}return!0}function da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pa(e,t){var n=da(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=da(n)}}function eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tu(){for(var e=window,t=Mr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yd(e){var t=tu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&eu(n.ownerDocument.documentElement,n)){if(r!==null&&ps(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,s=Math.min(r.start,l);r=r.end===void 0?s:Math.min(r.end,l),!e.extend&&s>r&&(l=r,r=s,s=l),l=pa(n,s);var a=pa(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qd=tt&&"documentMode"in document&&11>=document.documentMode,Vt=null,vl=null,Dn=null,_l=!1;function fa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||Vt==null||Vt!==Mr(r)||(r=Vt,"selectionStart"in r&&ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Qn(Dn,r)||(Dn=r,r=Vr(vl,"onSelect"),0<r.length&&(t=new us("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionend:vr("Transition","TransitionEnd")},zi={},nu={};tt&&(nu=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function hi(e){if(zi[e])return zi[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nu)return zi[e]=t[n];return e}var ru=hi("animationend"),iu=hi("animationiteration"),lu=hi("animationstart"),su=hi("transitionend"),au=new Map,ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){au.set(e,t),Bt(t,[e])}for(var Ui=0;Ui<ga.length;Ui++){var Mi=ga[Ui],Zd=Mi.toLowerCase(),Xd=Mi[0].toUpperCase()+Mi.slice(1);Et(Zd,"on"+Xd)}Et(ru,"onAnimationEnd");Et(iu,"onAnimationIteration");Et(lu,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(su,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function ha(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zc(r,t,void 0,e),e.currentTarget=null}function ou(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],u=o.instance,f=o.currentTarget;if(o=o.listener,u!==s&&l.isPropagationStopped())break e;ha(l,o,f),s=u}else for(a=0;a<r.length;a++){if(o=r[a],u=o.instance,f=o.currentTarget,o=o.listener,u!==s&&l.isPropagationStopped())break e;ha(l,o,f),s=u}}}if($r)throw e=hl,$r=!1,hl=null,e}function $(e,t){var n=t[El];n===void 0&&(n=t[El]=new Set);var r=e+"__bubble";n.has(r)||(uu(t,e,2,!1),n.add(r))}function Bi(e,t,n){var r=0;t&&(r|=4),uu(n,e,r,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[_r]){e[_r]=!0,mo.forEach(function(n){n!=="selectionchange"&&(qd.has(n)||Bi(n,!1,e),Bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,Bi("selectionchange",!1,t))}}function uu(e,t,n,r){switch(Go(t)){case 1:var l=pd;break;case 4:l=fd;break;default:l=as}n=l.bind(null,t,n,e),l=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function $i(e,t,n,r,l){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;o!==null;){if(a=At(o),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}o=o.parentNode}}r=r.return}Oo(function(){var f=s,v=rs(n),d=[];e:{var p=au.get(e);if(p!==void 0){var h=us,_=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":h=Rd;break;case"focusin":_="focus",h=Ii;break;case"focusout":_="blur",h=Ii;break;case"beforeblur":case"afterblur":h=Ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=bd;break;case ru:case iu:case lu:h=vd;break;case su:h=Fd;break;case"scroll":h=gd;break;case"wheel":h=Id;break;case"copy":case"cut":case"paste":h=jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=la}var x=(t&4)!==0,S=!x&&e==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var c=f,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Kn(c,g),w!=null&&x.push(Xn(c,w,m)))),S)break;c=c.return}0<x.length&&(p=new h(p,_,null,n,v),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==pl&&(_=n.relatedTarget||n.fromElement)&&(At(_)||_[nt]))break e;if((h||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,h?(_=n.relatedTarget||n.toElement,h=f,_=_?At(_):null,_!==null&&(S=$t(_),_!==S||_.tag!==5&&_.tag!==6)&&(_=null)):(h=null,_=f),h!==_)){if(x=ra,w="onMouseLeave",g="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=la,w="onPointerLeave",g="onPointerEnter",c="pointer"),S=h==null?p:Qt(h),m=_==null?p:Qt(_),p=new x(w,c+"leave",h,n,v),p.target=S,p.relatedTarget=m,w=null,At(v)===f&&(x=new x(g,c+"enter",_,n,v),x.target=m,x.relatedTarget=S,w=x),S=w,h&&_)t:{for(x=h,g=_,c=0,m=x;m;m=Wt(m))c++;for(m=0,w=g;w;w=Wt(w))m++;for(;0<c-m;)x=Wt(x),c--;for(;0<m-c;)g=Wt(g),m--;for(;c--;){if(x===g||g!==null&&x===g.alternate)break t;x=Wt(x),g=Wt(g)}x=null}else x=null;h!==null&&ma(d,p,h,x,!1),_!==null&&S!==null&&ma(d,S,_,x,!0)}}e:{if(p=f?Qt(f):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var T=$d;else if(oa(p))if(qo)T=Gd;else{T=Kd;var C=Wd}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=Hd);if(T&&(T=T(e,f))){Xo(d,T,n,v);break e}C&&C(e,p,f),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&al(p,"number",p.value)}switch(C=f?Qt(f):window,e){case"focusin":(oa(C)||C.contentEditable==="true")&&(Vt=C,vl=f,Dn=null);break;case"focusout":Dn=vl=Vt=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,fa(d,n,v);break;case"selectionchange":if(Qd)break;case"keydown":case"keyup":fa(d,n,v)}var R;if(ds)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Gt?Qo(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Yo&&n.locale!=="ko"&&(Gt||A!=="onCompositionStart"?A==="onCompositionEnd"&&Gt&&(R=Vo()):(pt=v,os="value"in pt?pt.value:pt.textContent,Gt=!0)),C=Vr(f,A),0<C.length&&(A=new ia(A,e,null,n,v),d.push({event:A,listeners:C}),R?A.data=R:(R=Zo(n),R!==null&&(A.data=R)))),(R=Dd?zd(e,n):Ud(e,n))&&(f=Vr(f,"onBeforeInput"),0<f.length&&(v=new ia("onBeforeInput","beforeinput",null,n,v),d.push({event:v,listeners:f}),v.data=R))}ou(d,t)})}function Xn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=Kn(e,n),s!=null&&r.unshift(Xn(e,s,l)),s=Kn(e,t),s!=null&&r.push(Xn(e,s,l))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ma(e,t,n,r,l){for(var s=t._reactName,a=[];n!==null&&n!==r;){var o=n,u=o.alternate,f=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&f!==null&&(o=f,l?(u=Kn(n,s),u!=null&&a.unshift(Xn(n,u,o))):l||(u=Kn(n,s),u!=null&&a.push(Xn(n,u,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Jd=/\r\n?/g,ep=/\u0000|\uFFFD/g;function ya(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(ep,"")}function jr(e,t,n){if(t=ya(t),ya(e)!==t&&n)throw Error(E(425))}function Yr(){}var jl=null,wl=null;function kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,tp=typeof clearTimeout=="function"?clearTimeout:void 0,xa=typeof Promise=="function"?Promise:void 0,np=typeof queueMicrotask=="function"?queueMicrotask:typeof xa<"u"?function(e){return xa.resolve(null).then(e).catch(rp)}:Sl;function rp(e){setTimeout(function(){throw e})}function Wi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Vn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Vn(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function va(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+xn,qn="__reactProps$"+xn,nt="__reactContainer$"+xn,El="__reactEvents$"+xn,ip="__reactListeners$"+xn,lp="__reactHandles$"+xn;function At(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=va(e);e!==null;){if(n=e[Ge])return n;e=va(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[Ge]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function mi(e){return e[qn]||null}var Tl=[],Zt=-1;function Tt(e){return{current:e}}function W(e){0>Zt||(e.current=Tl[Zt],Tl[Zt]=null,Zt--)}function M(e,t){Zt++,Tl[Zt]=e.current,e.current=t}var St={},ce=Tt(St),ve=Tt(!1),Pt=St;function cn(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in n)l[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function _e(e){return e=e.childContextTypes,e!=null}function Qr(){W(ve),W(ce)}function _a(e,t,n){if(ce.current!==St)throw Error(E(168));M(ce,t),M(ve,n)}function cu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(E(108,Wc(e)||"Unknown",l));return V({},n,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,Pt=ce.current,M(ce,e),M(ve,ve.current),!0}function ja(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=cu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,W(ve),W(ce),M(ce,e)):W(ve),M(ve,n)}var Xe=null,yi=!1,Ki=!1;function du(e){Xe===null?Xe=[e]:Xe.push(e)}function sp(e){yi=!0,du(e)}function Nt(){if(!Ki&&Xe!==null){Ki=!0;var e=0,t=U;try{var n=Xe;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,yi=!1}catch(l){throw Xe!==null&&(Xe=Xe.slice(e+1)),Po(is,Nt),l}finally{U=t,Ki=!1}}return null}var Xt=[],qt=0,Xr=null,qr=0,Ae=[],be=0,Dt=null,qe=1,Je="";function Rt(e,t){Xt[qt++]=qr,Xt[qt++]=Xr,Xr=e,qr=t}function pu(e,t,n){Ae[be++]=qe,Ae[be++]=Je,Ae[be++]=Dt,Dt=e;var r=qe;e=Je;var l=32-Be(r)-1;r&=~(1<<l),n+=1;var s=32-Be(t)+l;if(30<s){var a=l-l%5;s=(r&(1<<a)-1).toString(32),r>>=a,l-=a,qe=1<<32-Be(t)+l|n<<l|r,Je=s+e}else qe=1<<s|n<<l|r,Je=e}function fs(e){e.return!==null&&(Rt(e,1),pu(e,1,0))}function gs(e){for(;e===Xr;)Xr=Xt[--qt],Xt[qt]=null,qr=Xt[--qt],Xt[qt]=null;for(;e===Dt;)Dt=Ae[--be],Ae[be]=null,Je=Ae[--be],Ae[be]=null,qe=Ae[--be],Ae[be]=null}var Ee=null,Se=null,K=!1,Me=null;function fu(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Se=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:qe,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Se=null,!0):!1;default:return!1}}function Nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(K){var t=Se;if(t){var n=t;if(!wa(e,t)){if(Nl(e))throw Error(E(418));t=xt(n.nextSibling);var r=Ee;t&&wa(e,t)?fu(r,n):(e.flags=e.flags&-4097|2,K=!1,Ee=e)}}else{if(Nl(e))throw Error(E(418));e.flags=e.flags&-4097|2,K=!1,Ee=e}}}function ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function wr(e){if(e!==Ee)return!1;if(!K)return ka(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kl(e.type,e.memoizedProps)),t&&(t=Se)){if(Nl(e))throw gu(),Error(E(418));for(;t;)fu(e,t),t=xt(t.nextSibling)}if(ka(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ee?xt(e.stateNode.nextSibling):null;return!0}function gu(){for(var e=Se;e;)e=xt(e.nextSibling)}function dn(){Se=Ee=null,K=!1}function hs(e){Me===null?Me=[e]:Me.push(e)}var ap=lt.ReactCurrentBatchConfig;function En(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var l=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var o=l.refs;a===null?delete o[s]:o[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function kr(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sa(e){var t=e._init;return t(e._payload)}function hu(e){function t(g,c){if(e){var m=g.deletions;m===null?(g.deletions=[c],g.flags|=16):m.push(c)}}function n(g,c){if(!e)return null;for(;c!==null;)t(g,c),c=c.sibling;return null}function r(g,c){for(g=new Map;c!==null;)c.key!==null?g.set(c.key,c):g.set(c.index,c),c=c.sibling;return g}function l(g,c){return g=wt(g,c),g.index=0,g.sibling=null,g}function s(g,c,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<c?(g.flags|=2,c):m):(g.flags|=2,c)):(g.flags|=1048576,c)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,c,m,w){return c===null||c.tag!==6?(c=Xi(m,g.mode,w),c.return=g,c):(c=l(c,m),c.return=g,c)}function u(g,c,m,w){var T=m.type;return T===Ht?v(g,c,m.props.children,w,m.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ot&&Sa(T)===c.type)?(w=l(c,m.props),w.ref=En(g,c,m),w.return=g,w):(w=Ur(m.type,m.key,m.props,null,g.mode,w),w.ref=En(g,c,m),w.return=g,w)}function f(g,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=qi(m,g.mode,w),c.return=g,c):(c=l(c,m.children||[]),c.return=g,c)}function v(g,c,m,w,T){return c===null||c.tag!==7?(c=It(m,g.mode,w,T),c.return=g,c):(c=l(c,m),c.return=g,c)}function d(g,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Xi(""+c,g.mode,m),c.return=g,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case pr:return m=Ur(c.type,c.key,c.props,null,g.mode,m),m.ref=En(g,null,c),m.return=g,m;case Kt:return c=qi(c,g.mode,m),c.return=g,c;case ot:var w=c._init;return d(g,w(c._payload),m)}if(An(c)||_n(c))return c=It(c,g.mode,m,null),c.return=g,c;kr(g,c)}return null}function p(g,c,m,w){var T=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:o(g,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case pr:return m.key===T?u(g,c,m,w):null;case Kt:return m.key===T?f(g,c,m,w):null;case ot:return T=m._init,p(g,c,T(m._payload),w)}if(An(m)||_n(m))return T!==null?null:v(g,c,m,w,null);kr(g,m)}return null}function h(g,c,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,o(c,g,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case pr:return g=g.get(w.key===null?m:w.key)||null,u(c,g,w,T);case Kt:return g=g.get(w.key===null?m:w.key)||null,f(c,g,w,T);case ot:var C=w._init;return h(g,c,m,C(w._payload),T)}if(An(w)||_n(w))return g=g.get(m)||null,v(c,g,w,T,null);kr(c,w)}return null}function _(g,c,m,w){for(var T=null,C=null,R=c,A=c=0,P=null;R!==null&&A<m.length;A++){R.index>A?(P=R,R=null):P=R.sibling;var L=p(g,R,m[A],w);if(L===null){R===null&&(R=P);break}e&&R&&L.alternate===null&&t(g,R),c=s(L,c,A),C===null?T=L:C.sibling=L,C=L,R=P}if(A===m.length)return n(g,R),K&&Rt(g,A),T;if(R===null){for(;A<m.length;A++)R=d(g,m[A],w),R!==null&&(c=s(R,c,A),C===null?T=R:C.sibling=R,C=R);return K&&Rt(g,A),T}for(R=r(g,R);A<m.length;A++)P=h(R,g,A,m[A],w),P!==null&&(e&&P.alternate!==null&&R.delete(P.key===null?A:P.key),c=s(P,c,A),C===null?T=P:C.sibling=P,C=P);return e&&R.forEach(function(z){return t(g,z)}),K&&Rt(g,A),T}function x(g,c,m,w){var T=_n(m);if(typeof T!="function")throw Error(E(150));if(m=T.call(m),m==null)throw Error(E(151));for(var C=T=null,R=c,A=c=0,P=null,L=m.next();R!==null&&!L.done;A++,L=m.next()){R.index>A?(P=R,R=null):P=R.sibling;var z=p(g,R,L.value,w);if(z===null){R===null&&(R=P);break}e&&R&&z.alternate===null&&t(g,R),c=s(z,c,A),C===null?T=z:C.sibling=z,C=z,R=P}if(L.done)return n(g,R),K&&Rt(g,A),T;if(R===null){for(;!L.done;A++,L=m.next())L=d(g,L.value,w),L!==null&&(c=s(L,c,A),C===null?T=L:C.sibling=L,C=L);return K&&Rt(g,A),T}for(R=r(g,R);!L.done;A++,L=m.next())L=h(R,g,A,L.value,w),L!==null&&(e&&L.alternate!==null&&R.delete(L.key===null?A:L.key),c=s(L,c,A),C===null?T=L:C.sibling=L,C=L);return e&&R.forEach(function(X){return t(g,X)}),K&&Rt(g,A),T}function S(g,c,m,w){if(typeof m=="object"&&m!==null&&m.type===Ht&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case pr:e:{for(var T=m.key,C=c;C!==null;){if(C.key===T){if(T=m.type,T===Ht){if(C.tag===7){n(g,C.sibling),c=l(C,m.props.children),c.return=g,g=c;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ot&&Sa(T)===C.type){n(g,C.sibling),c=l(C,m.props),c.ref=En(g,C,m),c.return=g,g=c;break e}n(g,C);break}else t(g,C);C=C.sibling}m.type===Ht?(c=It(m.props.children,g.mode,w,m.key),c.return=g,g=c):(w=Ur(m.type,m.key,m.props,null,g.mode,w),w.ref=En(g,c,m),w.return=g,g=w)}return a(g);case Kt:e:{for(C=m.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(g,c.sibling),c=l(c,m.children||[]),c.return=g,g=c;break e}else{n(g,c);break}else t(g,c);c=c.sibling}c=qi(m,g.mode,w),c.return=g,g=c}return a(g);case ot:return C=m._init,S(g,c,C(m._payload),w)}if(An(m))return _(g,c,m,w);if(_n(m))return x(g,c,m,w);kr(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(g,c.sibling),c=l(c,m),c.return=g,g=c):(n(g,c),c=Xi(m,g.mode,w),c.return=g,g=c),a(g)):n(g,c)}return S}var pn=hu(!0),mu=hu(!1),Jr=Tt(null),ei=null,Jt=null,ms=null;function ys(){ms=Jt=ei=null}function xs(e){var t=Jr.current;W(Jr),e._currentValue=t}function Cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){ei=e,ms=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(ms!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(ei===null)throw Error(E(308));Jt=e,ei.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var bt=null;function vs(e){bt===null?bt=[e]:bt.push(e)}function yu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,vs(t)):(n.next=l.next,l.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function _s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,rt(e,n)}return l=r.interleaved,l===null?(t.next=t,vs(r)):(t.next=l.next,l.next=t),r.interleaved=t,rt(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ls(e,n)}}function Ea(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?l=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ti(e,t,n,r){var l=e.updateQueue;ut=!1;var s=l.firstBaseUpdate,a=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var u=o,f=u.next;u.next=null,a===null?s=f:a.next=f,a=u;var v=e.alternate;v!==null&&(v=v.updateQueue,o=v.lastBaseUpdate,o!==a&&(o===null?v.firstBaseUpdate=f:o.next=f,v.lastBaseUpdate=u))}if(s!==null){var d=l.baseState;a=0,v=f=u=null,o=s;do{var p=o.lane,h=o.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=e,x=o;switch(p=t,h=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(h,d,p);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,p=typeof _=="function"?_.call(h,d,p):_,p==null)break e;d=V({},d,p);break e;case 2:ut=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[o]:p.push(o))}else h={eventTime:h,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},v===null?(f=v=h,u=d):v=v.next=h,a|=p;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;p=o,o=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(v===null&&(u=d),l.baseState=u,l.firstBaseUpdate=f,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else s===null&&(l.shared.lanes=0);Ut|=a,e.lanes=a,e.memoizedState=d}}function Ta(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(E(191,l));l.call(r)}}}var ur={},Ye=Tt(ur),Jn=Tt(ur),er=Tt(ur);function Ot(e){if(e===ur)throw Error(E(174));return e}function js(e,t){switch(M(er,t),M(Jn,e),M(Ye,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ul(t,e)}W(Ye),M(Ye,t)}function fn(){W(Ye),W(Jn),W(er)}function vu(e){Ot(er.current);var t=Ot(Ye.current),n=ul(t,e.type);t!==n&&(M(Jn,e),M(Ye,n))}function ws(e){Jn.current===e&&(W(Ye),W(Jn))}var H=Tt(0);function ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hi=[];function ks(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var Lr=lt.ReactCurrentDispatcher,Gi=lt.ReactCurrentBatchConfig,zt=0,G=null,J=null,te=null,ri=!1,zn=!1,tr=0,op=0;function ae(){throw Error(E(321))}function Ss(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function Es(e,t,n,r,l,s){if(zt=s,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lr.current=e===null||e.memoizedState===null?pp:fp,e=n(r,l),zn){s=0;do{if(zn=!1,tr=0,25<=s)throw Error(E(301));s+=1,te=J=null,t.updateQueue=null,Lr.current=gp,e=n(r,l)}while(zn)}if(Lr.current=ii,t=J!==null&&J.next!==null,zt=0,te=J=G=null,ri=!1,t)throw Error(E(300));return e}function Ts(){var e=tr!==0;return tr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?G.memoizedState=te=e:te=te.next=e,te}function Ie(){if(J===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=te===null?G.memoizedState:te.next;if(t!==null)te=t,J=e;else{if(e===null)throw Error(E(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},te===null?G.memoizedState=te=e:te=te.next=e}return te}function nr(e,t){return typeof t=="function"?t(e):t}function Vi(e){var t=Ie(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,s=n.pending;if(s!==null){if(l!==null){var a=l.next;l.next=s.next,s.next=a}r.baseQueue=l=s,n.pending=null}if(l!==null){s=l.next,r=r.baseState;var o=a=null,u=null,f=s;do{var v=f.lane;if((zt&v)===v)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var d={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(o=u=d,a=r):u=u.next=d,G.lanes|=v,Ut|=v}f=f.next}while(f!==null&&f!==s);u===null?a=r:u.next=o,We(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do s=l.lane,G.lanes|=s,Ut|=s,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yi(e){var t=Ie(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do s=e(s,a.action),a=a.next;while(a!==l);We(s,t.memoizedState)||(xe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function _u(){}function ju(e,t){var n=G,r=Ie(),l=t(),s=!We(r.memoizedState,l);if(s&&(r.memoizedState=l,xe=!0),r=r.queue,Ns(Su.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,rr(9,ku.bind(null,n,r,l,t),void 0,null),ne===null)throw Error(E(349));zt&30||wu(n,t,l)}return l}function wu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ku(e,t,n,r){t.value=n,t.getSnapshot=r,Eu(t)&&Tu(e)}function Su(e,t,n){return n(function(){Eu(t)&&Tu(e)})}function Eu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function Tu(e){var t=rt(e,1);t!==null&&$e(t,e,1,-1)}function Na(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=dp.bind(null,G,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nu(){return Ie().memoizedState}function Ir(e,t,n,r){var l=He();G.flags|=e,l.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function xi(e,t,n,r){var l=Ie();r=r===void 0?null:r;var s=void 0;if(J!==null){var a=J.memoizedState;if(s=a.destroy,r!==null&&Ss(r,a.deps)){l.memoizedState=rr(t,n,s,r);return}}G.flags|=e,l.memoizedState=rr(1|t,n,s,r)}function Ra(e,t){return Ir(8390656,8,e,t)}function Ns(e,t){return xi(2048,8,e,t)}function Ru(e,t){return xi(4,2,e,t)}function Cu(e,t){return xi(4,4,e,t)}function Au(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bu(e,t,n){return n=n!=null?n.concat([e]):null,xi(4,4,Au.bind(null,t,e),n)}function Rs(){}function Ou(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ss(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ss(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Lu(e,t,n){return zt&21?(We(n,t)||(n=Uo(),G.lanes|=n,Ut|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function up(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Gi.transition;Gi.transition={};try{e(!1),t()}finally{U=n,Gi.transition=r}}function Iu(){return Ie().memoizedState}function cp(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pu(e))Du(t,n);else if(n=yu(e,t,n,r),n!==null){var l=ge();$e(n,e,r,l),zu(n,t,r)}}function dp(e,t,n){var r=jt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))Du(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,o=s(a,n);if(l.hasEagerState=!0,l.eagerState=o,We(o,a)){var u=t.interleaved;u===null?(l.next=l,vs(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=yu(e,t,l,r),n!==null&&(l=ge(),$e(n,e,r,l),zu(n,t,r))}}function Pu(e){var t=e.alternate;return e===G||t!==null&&t===G}function Du(e,t){zn=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ls(e,n)}}var ii={readContext:Le,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},pp={readContext:Le,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:Ra,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4194308,4,Au.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ir(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cp.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Na,useDebugValue:Rs,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Na(!1),t=e[0];return e=up.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,l=He();if(K){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ne===null)throw Error(E(349));zt&30||wu(r,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,Ra(Su.bind(null,r,s,e),[e]),r.flags|=2048,rr(9,ku.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=He(),t=ne.identifierPrefix;if(K){var n=Je,r=qe;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=op++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fp={readContext:Le,useCallback:Ou,useContext:Le,useEffect:Ns,useImperativeHandle:bu,useInsertionEffect:Ru,useLayoutEffect:Cu,useMemo:Fu,useReducer:Vi,useRef:Nu,useState:function(){return Vi(nr)},useDebugValue:Rs,useDeferredValue:function(e){var t=Ie();return Lu(t,J.memoizedState,e)},useTransition:function(){var e=Vi(nr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:_u,useSyncExternalStore:ju,useId:Iu,unstable_isNewReconciler:!1},gp={readContext:Le,useCallback:Ou,useContext:Le,useEffect:Ns,useImperativeHandle:bu,useInsertionEffect:Ru,useLayoutEffect:Cu,useMemo:Fu,useReducer:Yi,useRef:Nu,useState:function(){return Yi(nr)},useDebugValue:Rs,useDeferredValue:function(e){var t=Ie();return J===null?t.memoizedState=e:Lu(t,J.memoizedState,e)},useTransition:function(){var e=Yi(nr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:_u,useSyncExternalStore:ju,useId:Iu,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vi={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),l=jt(e),s=et(r,l);s.payload=t,n!=null&&(s.callback=n),t=vt(e,s,l),t!==null&&($e(t,e,l,r),Fr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),l=jt(e),s=et(r,l);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=vt(e,s,l),t!==null&&($e(t,e,l,r),Fr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=jt(e),l=et(n,r);l.tag=2,t!=null&&(l.callback=t),t=vt(e,l,r),t!==null&&($e(t,e,r,n),Fr(t,e,r))}};function Ca(e,t,n,r,l,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Qn(n,r)||!Qn(l,s):!0}function Uu(e,t,n){var r=!1,l=St,s=t.contextType;return typeof s=="object"&&s!==null?s=Le(s):(l=_e(t)?Pt:ce.current,r=t.contextTypes,s=(r=r!=null)?cn(e,l):St),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=s),t}function Aa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vi.enqueueReplaceState(t,t.state,null)}function bl(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},_s(e);var s=t.contextType;typeof s=="object"&&s!==null?l.context=Le(s):(s=_e(t)?Pt:ce.current,l.context=cn(e,s)),l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Al(e,t,s,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&vi.enqueueReplaceState(l,l.state,null),ti(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=$c(r),r=r.return;while(r);var l=n}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:l,digest:null}}function Qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hp=typeof WeakMap=="function"?WeakMap:Map;function Mu(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){si||(si=!0,$l=r),Ol(e,t)},n}function Bu(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ol(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ba(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Cp.bind(null,e,t,n),t.then(e,e))}function Oa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var mp=lt.ReactCurrentOwner,xe=!1;function fe(e,t,n,r){t.child=e===null?mu(t,null,n,r):pn(t,e.child,n,r)}function La(e,t,n,r,l){n=n.render;var s=t.ref;return an(t,l),r=Es(e,t,n,r,s,l),n=Ts(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,it(e,t,l)):(K&&n&&fs(t),t.flags|=1,fe(e,t,r,l),t.child)}function Ia(e,t,n,r,l){if(e===null){var s=n.type;return typeof s=="function"&&!Ps(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,$u(e,t,s,r,l)):(e=Ur(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&l)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(a,r)&&e.ref===t.ref)return it(e,t,l)}return t.flags|=1,e=wt(s,r),e.ref=t.ref,e.return=t,t.child=e}function $u(e,t,n,r,l){if(e!==null){var s=e.memoizedProps;if(Qn(s,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=s,(e.lanes&l)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,it(e,t,l)}return Fl(e,t,n,r,l)}function Wu(e,t,n){var r=t.pendingProps,l=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(tn,ke),ke|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(tn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,M(tn,ke),ke|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,M(tn,ke),ke|=r;return fe(e,t,l,n),t.child}function Ku(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fl(e,t,n,r,l){var s=_e(n)?Pt:ce.current;return s=cn(t,s),an(t,l),n=Es(e,t,n,r,s,l),r=Ts(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,it(e,t,l)):(K&&r&&fs(t),t.flags|=1,fe(e,t,n,l),t.child)}function Pa(e,t,n,r,l){if(_e(n)){var s=!0;Zr(t)}else s=!1;if(an(t,l),t.stateNode===null)Pr(e,t),Uu(t,n,r),bl(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var u=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=Le(f):(f=_e(n)?Pt:ce.current,f=cn(t,f));var v=n.getDerivedStateFromProps,d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||u!==f)&&Aa(t,a,r,f),ut=!1;var p=t.memoizedState;a.state=p,ti(t,r,a,l),u=t.memoizedState,o!==r||p!==u||ve.current||ut?(typeof v=="function"&&(Al(t,n,v,r),u=t.memoizedState),(o=ut||Ca(t,n,o,r,p,u,f))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=f,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,xu(e,t),o=t.memoizedProps,f=t.type===t.elementType?o:ze(t.type,o),a.props=f,d=t.pendingProps,p=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=_e(n)?Pt:ce.current,u=cn(t,u));var h=n.getDerivedStateFromProps;(v=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||p!==u)&&Aa(t,a,r,u),ut=!1,p=t.memoizedState,a.state=p,ti(t,r,a,l);var _=t.memoizedState;o!==d||p!==_||ve.current||ut?(typeof h=="function"&&(Al(t,n,h,r),_=t.memoizedState),(f=ut||Ca(t,n,f,r,p,_,u)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,_,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,_,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),a.props=r,a.state=_,a.context=u,r=f):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ll(e,t,n,r,s,l)}function Ll(e,t,n,r,l,s){Ku(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&ja(t,n,!1),it(e,t,s);r=t.stateNode,mp.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=pn(t,e.child,null,s),t.child=pn(t,null,o,s)):fe(e,t,o,s),t.memoizedState=r.state,l&&ja(t,n,!0),t.child}function Hu(e){var t=e.stateNode;t.pendingContext?_a(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_a(e,t.context,!1),js(e,t.containerInfo)}function Da(e,t,n,r,l){return dn(),hs(l),t.flags|=256,fe(e,t,n,r),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gu(e,t,n){var r=t.pendingProps,l=H.current,s=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(H,l&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=wi(a,r,0,null),e=It(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Pl(n),t.memoizedState=Il,e):Cs(t,a));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return yp(e,t,a,r,o,l,n);if(s){s=r.fallback,a=t.mode,l=e.child,o=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=wt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?s=wt(o,s):(s=It(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Pl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Il,r}return s=e.child,e=s.sibling,r=wt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cs(e,t){return t=wi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Sr(e,t,n,r){return r!==null&&hs(r),pn(t,e.child,null,n),e=Cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yp(e,t,n,r,l,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Qi(Error(E(422))),Sr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,l=t.mode,r=wi({mode:"visible",children:r.children},l,0,null),s=It(s,l,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&pn(t,e.child,null,a),t.child.memoizedState=Pl(a),t.memoizedState=Il,s);if(!(t.mode&1))return Sr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(E(419)),r=Qi(s,r,void 0),Sr(e,t,a,r)}if(o=(a&e.childLanes)!==0,xe||o){if(r=ne,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,rt(e,l),$e(r,e,l,-1))}return Is(),r=Qi(Error(E(421))),Sr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ap.bind(null,e),l._reactRetry=t,null):(e=s.treeContext,Se=xt(l.nextSibling),Ee=t,K=!0,Me=null,e!==null&&(Ae[be++]=qe,Ae[be++]=Je,Ae[be++]=Dt,qe=e.id,Je=e.overflow,Dt=t),t=Cs(t,r.children),t.flags|=4096,t)}function za(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cl(e.return,t,n)}function Zi(e,t,n,r,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=l)}function Vu(e,t,n){var r=t.pendingProps,l=r.revealOrder,s=r.tail;if(fe(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&za(e,n,t);else if(e.tag===19)za(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(H,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ni(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Zi(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ni(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Zi(t,!0,n,null,s);break;case"together":Zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xp(e,t,n){switch(t.tag){case 3:Hu(t),dn();break;case 5:vu(t);break;case 1:_e(t.type)&&Zr(t);break;case 4:js(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(Jr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Gu(e,t,n):(M(H,H.current&1),e=it(e,t,n),e!==null?e.sibling:null);M(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Wu(e,t,n)}return it(e,t,n)}var Yu,Dl,Qu,Zu;Yu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dl=function(){};Qu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ot(Ye.current);var s=null;switch(n){case"input":l=ll(e,l),r=ll(e,r),s=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),s=[];break;case"textarea":l=ol(e,l),r=ol(e,r),s=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}cl(n,r);var a;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var o=l[f];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&($n.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in r){var u=r[f];if(o=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&u!==o&&(u!=null||o!=null))if(f==="style")if(o){for(a in o)!o.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&o[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(s=s||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&($n.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&$("scroll",e),s||o===u||(s=[])):(s=s||[]).push(f,u))}n&&(s=s||[]).push("style",n);var f=s;(t.updateQueue=f)&&(t.flags|=4)}};Zu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vp(e,t,n){var r=t.pendingProps;switch(gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return _e(t.type)&&Qr(),oe(t),null;case 3:return r=t.stateNode,fn(),W(ve),W(ce),ks(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Hl(Me),Me=null))),Dl(e,t),oe(t),null;case 5:ws(t);var l=Ot(er.current);if(n=t.type,e!==null&&t.stateNode!=null)Qu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return oe(t),null}if(e=Ot(Ye.current),wr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ge]=t,r[qn]=s,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(l=0;l<On.length;l++)$(On[l],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Vs(r,s),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},$("invalid",r);break;case"textarea":Qs(r,s),$("invalid",r)}cl(n,s),l=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&jr(r.textContent,o,e),l=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&jr(r.textContent,o,e),l=["children",""+o]):$n.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&$("scroll",r)}switch(n){case"input":fr(r),Ys(r,s,!0);break;case"textarea":fr(r),Zs(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=So(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ge]=t,e[qn]=r,Yu(e,t,!1,!1),t.stateNode=e;e:{switch(a=dl(n,r),n){case"dialog":$("cancel",e),$("close",e),l=r;break;case"iframe":case"object":case"embed":$("load",e),l=r;break;case"video":case"audio":for(l=0;l<On.length;l++)$(On[l],e);l=r;break;case"source":$("error",e),l=r;break;case"img":case"image":case"link":$("error",e),$("load",e),l=r;break;case"details":$("toggle",e),l=r;break;case"input":Vs(e,r),l=ll(e,r),$("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),$("invalid",e);break;case"textarea":Qs(e,r),l=ol(e,r),$("invalid",e);break;default:l=r}cl(n,l),o=l;for(s in o)if(o.hasOwnProperty(s)){var u=o[s];s==="style"?No(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Eo(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wn(e,u):typeof u=="number"&&Wn(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($n.hasOwnProperty(s)?u!=null&&s==="onScroll"&&$("scroll",e):u!=null&&Jl(e,s,u,a))}switch(n){case"input":fr(e),Ys(e,r,!1);break;case"textarea":fr(e),Zs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?nn(e,!!r.multiple,s,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Yr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Zu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Ot(er.current),Ot(Ye.current),wr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(s=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return oe(t),null;case 13:if(W(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Se!==null&&t.mode&1&&!(t.flags&128))gu(),dn(),t.flags|=98560,s=!1;else if(s=wr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ge]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),s=!1}else Me!==null&&(Hl(Me),Me=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?ee===0&&(ee=3):Is())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return fn(),Dl(e,t),e===null&&Zn(t.stateNode.containerInfo),oe(t),null;case 10:return xs(t.type._context),oe(t),null;case 17:return _e(t.type)&&Qr(),oe(t),null;case 19:if(W(H),s=t.memoizedState,s===null)return oe(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Tn(s,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ni(e),a!==null){for(t.flags|=128,Tn(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(H,H.current&1|2),t.child}e=e.sibling}s.tail!==null&&Z()>hn&&(t.flags|=128,r=!0,Tn(s,!1),t.lanes=4194304)}else{if(!r)if(e=ni(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!K)return oe(t),null}else 2*Z()-s.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,Tn(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Z(),t.sibling=null,n=H.current,M(H,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Ls(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function _p(e,t){switch(gs(t),t.tag){case 1:return _e(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),W(ve),W(ce),ks(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ws(t),null;case 13:if(W(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(H),null;case 4:return fn(),null;case 10:return xs(t.type._context),null;case 22:case 23:return Ls(),null;case 24:return null;default:return null}}var Er=!1,ue=!1,jp=typeof WeakSet=="function"?WeakSet:Set,b=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function zl(e,t,n){try{n()}catch(r){Y(e,t,r)}}var Ua=!1;function wp(e,t){if(jl=Hr,e=tu(),ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,u=-1,f=0,v=0,d=e,p=null;t:for(;;){for(var h;d!==n||l!==0&&d.nodeType!==3||(o=a+l),d!==s||r!==0&&d.nodeType!==3||(u=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===n&&++f===l&&(o=a),p===s&&++v===r&&(u=a),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wl={focusedElem:e,selectionRange:n},Hr=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,S=_.memoizedState,g=t.stateNode,c=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:ze(t.type,x),S);g.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){Y(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return _=Ua,Ua=!1,_}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var s=l.destroy;l.destroy=void 0,s!==void 0&&zl(t,n,s)}l=l.next}while(l!==r)}}function _i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ul(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xu(e){var t=e.alternate;t!==null&&(e.alternate=null,Xu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[qn],delete t[El],delete t[ip],delete t[lp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qu(e){return e.tag===5||e.tag===3||e.tag===4}function Ma(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(Ml(e,t,n),e=e.sibling;e!==null;)Ml(e,t,n),e=e.sibling}function Bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bl(e,t,n),e=e.sibling;e!==null;)Bl(e,t,n),e=e.sibling}var re=null,Ue=!1;function at(e,t,n){for(n=n.child;n!==null;)Ju(e,t,n),n=n.sibling}function Ju(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(pi,n)}catch{}switch(n.tag){case 5:ue||en(n,t);case 6:var r=re,l=Ue;re=null,at(e,t,n),re=r,Ue=l,re!==null&&(Ue?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Ue?(e=re,n=n.stateNode,e.nodeType===8?Wi(e.parentNode,n):e.nodeType===1&&Wi(e,n),Vn(e)):Wi(re,n.stateNode));break;case 4:r=re,l=Ue,re=n.stateNode.containerInfo,Ue=!0,at(e,t,n),re=r,Ue=l;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var s=l,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&zl(n,t,a),l=l.next}while(l!==r)}at(e,t,n);break;case 1:if(!ue&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Y(n,t,o)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,at(e,t,n),ue=r):at(e,t,n);break;default:at(e,t,n)}}function Ba(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jp),t.forEach(function(r){var l=bp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var s=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:re=o.stateNode,Ue=!1;break e;case 3:re=o.stateNode.containerInfo,Ue=!0;break e;case 4:re=o.stateNode.containerInfo,Ue=!0;break e}o=o.return}if(re===null)throw Error(E(160));Ju(s,a,l),re=null,Ue=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(f){Y(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ec(t,e),t=t.sibling}function ec(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Ke(e),r&4){try{Un(3,e,e.return),_i(3,e)}catch(x){Y(e,e.return,x)}try{Un(5,e,e.return)}catch(x){Y(e,e.return,x)}}break;case 1:De(t,e),Ke(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(De(t,e),Ke(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var l=e.stateNode;try{Wn(l,"")}catch(x){Y(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&wo(l,s),dl(o,a);var f=dl(o,s);for(a=0;a<u.length;a+=2){var v=u[a],d=u[a+1];v==="style"?No(l,d):v==="dangerouslySetInnerHTML"?Eo(l,d):v==="children"?Wn(l,d):Jl(l,v,d,f)}switch(o){case"input":sl(l,s);break;case"textarea":ko(l,s);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?nn(l,!!s.multiple,h,!1):p!==!!s.multiple&&(s.defaultValue!=null?nn(l,!!s.multiple,s.defaultValue,!0):nn(l,!!s.multiple,s.multiple?[]:"",!1))}l[qn]=s}catch(x){Y(e,e.return,x)}}break;case 6:if(De(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(E(162));l=e.stateNode,s=e.memoizedProps;try{l.nodeValue=s}catch(x){Y(e,e.return,x)}}break;case 3:if(De(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(x){Y(e,e.return,x)}break;case 4:De(t,e),Ke(e);break;case 13:De(t,e),Ke(e),l=e.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(Os=Z())),r&4&&Ba(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(f=ue)||v,De(t,e),ue=f):De(t,e),Ke(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(b=e,v=e.child;v!==null;){for(d=b=v;b!==null;){switch(p=b,h=p.child,p.tag){case 0:case 11:case 14:case 15:Un(4,p,p.return);break;case 1:en(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(x){Y(r,n,x)}}break;case 5:en(p,p.return);break;case 22:if(p.memoizedState!==null){Wa(d);continue}}h!==null?(h.return=p,b=h):Wa(d)}v=v.sibling}e:for(v=null,d=e;;){if(d.tag===5){if(v===null){v=d;try{l=d.stateNode,f?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,u=d.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=To("display",a))}catch(x){Y(e,e.return,x)}}}else if(d.tag===6){if(v===null)try{d.stateNode.nodeValue=f?"":d.memoizedProps}catch(x){Y(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;v===d&&(v=null),d=d.return}v===d&&(v=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:De(t,e),Ke(e),r&4&&Ba(e);break;case 21:break;default:De(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qu(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Wn(l,""),r.flags&=-33);var s=Ma(e);Bl(e,s,l);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Ma(e);Ml(e,o,a);break;default:throw Error(E(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kp(e,t,n){b=e,tc(e)}function tc(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var l=b,s=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Er;if(!a){var o=l.alternate,u=o!==null&&o.memoizedState!==null||ue;o=Er;var f=ue;if(Er=a,(ue=u)&&!f)for(b=l;b!==null;)a=b,u=a.child,a.tag===22&&a.memoizedState!==null?Ka(l):u!==null?(u.return=a,b=u):Ka(l);for(;s!==null;)b=s,tc(s),s=s.sibling;b=l,Er=o,ue=f}$a(e)}else l.subtreeFlags&8772&&s!==null?(s.return=l,b=s):$a(e)}}function $a(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||_i(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ta(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ta(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var d=v.dehydrated;d!==null&&Vn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ue||t.flags&512&&Ul(t)}catch(p){Y(t,t.return,p)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Wa(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function Ka(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_i(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Y(t,l,u)}}var s=t.return;try{Ul(t)}catch(u){Y(t,s,u)}break;case 5:var a=t.return;try{Ul(t)}catch(u){Y(t,a,u)}}}catch(u){Y(t,t.return,u)}if(t===e){b=null;break}var o=t.sibling;if(o!==null){o.return=t.return,b=o;break}b=t.return}}var Sp=Math.ceil,li=lt.ReactCurrentDispatcher,As=lt.ReactCurrentOwner,Fe=lt.ReactCurrentBatchConfig,D=0,ne=null,q=null,ie=0,ke=0,tn=Tt(0),ee=0,ir=null,Ut=0,ji=0,bs=0,Mn=null,ye=null,Os=0,hn=1/0,Ze=null,si=!1,$l=null,_t=null,Tr=!1,ft=null,ai=0,Bn=0,Wl=null,Dr=-1,zr=0;function ge(){return D&6?Z():Dr!==-1?Dr:Dr=Z()}function jt(e){return e.mode&1?D&2&&ie!==0?ie&-ie:ap.transition!==null?(zr===0&&(zr=Uo()),zr):(e=U,e!==0||(e=window.event,e=e===void 0?16:Go(e.type)),e):1}function $e(e,t,n,r){if(50<Bn)throw Bn=0,Wl=null,Error(E(185));sr(e,n,r),(!(D&2)||e!==ne)&&(e===ne&&(!(D&2)&&(ji|=n),ee===4&&dt(e,ie)),je(e,r),n===1&&D===0&&!(t.mode&1)&&(hn=Z()+500,yi&&Nt()))}function je(e,t){var n=e.callbackNode;ad(e,t);var r=Kr(e,e===ne?ie:0);if(r===0)n!==null&&Js(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Js(n),t===1)e.tag===0?sp(Ha.bind(null,e)):du(Ha.bind(null,e)),np(function(){!(D&6)&&Nt()}),n=null;else{switch(Mo(r)){case 1:n=is;break;case 4:n=Do;break;case 16:n=Wr;break;case 536870912:n=zo;break;default:n=Wr}n=uc(n,nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nc(e,t){if(Dr=-1,zr=0,D&6)throw Error(E(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=Kr(e,e===ne?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oi(e,r);else{t=r;var l=D;D|=2;var s=ic();(ne!==e||ie!==t)&&(Ze=null,hn=Z()+500,Lt(e,t));do try{Np();break}catch(o){rc(e,o)}while(!0);ys(),li.current=s,D=l,q!==null?t=0:(ne=null,ie=0,t=ee)}if(t!==0){if(t===2&&(l=ml(e),l!==0&&(r=l,t=Kl(e,l))),t===1)throw n=ir,Lt(e,0),dt(e,r),je(e,Z()),n;if(t===6)dt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Ep(l)&&(t=oi(e,r),t===2&&(s=ml(e),s!==0&&(r=s,t=Kl(e,s))),t===1))throw n=ir,Lt(e,0),dt(e,r),je(e,Z()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Ct(e,ye,Ze);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=Os+500-Z(),10<t)){if(Kr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Sl(Ct.bind(null,e,ye,Ze),t);break}Ct(e,ye,Ze);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Be(r);s=1<<a,a=t[a],a>l&&(l=a),r&=~s}if(r=l,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sp(r/1960))-r,10<r){e.timeoutHandle=Sl(Ct.bind(null,e,ye,Ze),r);break}Ct(e,ye,Ze);break;case 5:Ct(e,ye,Ze);break;default:throw Error(E(329))}}}return je(e,Z()),e.callbackNode===n?nc.bind(null,e):null}function Kl(e,t){var n=Mn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=oi(e,t),e!==2&&(t=ye,ye=n,t!==null&&Hl(t)),e}function Hl(e){ye===null?ye=e:ye.push.apply(ye,e)}function Ep(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],s=l.getSnapshot;l=l.value;try{if(!We(s(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~bs,t&=~ji,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function Ha(e){if(D&6)throw Error(E(327));on();var t=Kr(e,0);if(!(t&1))return je(e,Z()),null;var n=oi(e,t);if(e.tag!==0&&n===2){var r=ml(e);r!==0&&(t=r,n=Kl(e,r))}if(n===1)throw n=ir,Lt(e,0),dt(e,t),je(e,Z()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ct(e,ye,Ze),je(e,Z()),null}function Fs(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(hn=Z()+500,yi&&Nt())}}function Mt(e){ft!==null&&ft.tag===0&&!(D&6)&&on();var t=D;D|=1;var n=Fe.transition,r=U;try{if(Fe.transition=null,U=1,e)return e()}finally{U=r,Fe.transition=n,D=t,!(D&6)&&Nt()}}function Ls(){ke=tn.current,W(tn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(gs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:fn(),W(ve),W(ce),ks();break;case 5:ws(r);break;case 4:fn();break;case 13:W(H);break;case 19:W(H);break;case 10:xs(r.type._context);break;case 22:case 23:Ls()}n=n.return}if(ne=e,q=e=wt(e.current,null),ie=ke=t,ee=0,ir=null,bs=ji=Ut=0,ye=Mn=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=l,r.next=a}n.pending=r}bt=null}return e}function rc(e,t){do{var n=q;try{if(ys(),Lr.current=ii,ri){for(var r=G.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ri=!1}if(zt=0,te=J=G=null,zn=!1,tr=0,As.current=null,n===null||n.return===null){ee=1,ir=t,q=null;break}e:{var s=e,a=n.return,o=n,u=t;if(t=ie,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,v=o,d=v.tag;if(!(v.mode&1)&&(d===0||d===11||d===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var h=Oa(a);if(h!==null){h.flags&=-257,Fa(h,a,o,s,t),h.mode&1&&ba(s,f,t),t=h,u=f;var _=t.updateQueue;if(_===null){var x=new Set;x.add(u),t.updateQueue=x}else _.add(u);break e}else{if(!(t&1)){ba(s,f,t),Is();break e}u=Error(E(426))}}else if(K&&o.mode&1){var S=Oa(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Fa(S,a,o,s,t),hs(gn(u,o));break e}}s=u=gn(u,o),ee!==4&&(ee=2),Mn===null?Mn=[s]:Mn.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=Mu(s,u,t);Ea(s,g);break e;case 1:o=u;var c=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_t===null||!_t.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Bu(s,o,t);Ea(s,w);break e}}s=s.return}while(s!==null)}sc(n)}catch(T){t=T,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function ic(){var e=li.current;return li.current=ii,e===null?ii:e}function Is(){(ee===0||ee===3||ee===2)&&(ee=4),ne===null||!(Ut&268435455)&&!(ji&268435455)||dt(ne,ie)}function oi(e,t){var n=D;D|=2;var r=ic();(ne!==e||ie!==t)&&(Ze=null,Lt(e,t));do try{Tp();break}catch(l){rc(e,l)}while(!0);if(ys(),D=n,li.current=r,q!==null)throw Error(E(261));return ne=null,ie=0,ee}function Tp(){for(;q!==null;)lc(q)}function Np(){for(;q!==null&&!qc();)lc(q)}function lc(e){var t=oc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?sc(e):q=t,As.current=null}function sc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_p(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,q=null;return}}else if(n=vp(n,t,ke),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ee===0&&(ee=5)}function Ct(e,t,n){var r=U,l=Fe.transition;try{Fe.transition=null,U=1,Rp(e,t,n,r)}finally{Fe.transition=l,U=r}return null}function Rp(e,t,n,r){do on();while(ft!==null);if(D&6)throw Error(E(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(od(e,s),e===ne&&(q=ne=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,uc(Wr,function(){return on(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fe.transition,Fe.transition=null;var a=U;U=1;var o=D;D|=4,As.current=null,wp(e,n),ec(n,e),Yd(wl),Hr=!!jl,wl=jl=null,e.current=n,kp(n),Jc(),D=o,U=a,Fe.transition=s}else e.current=n;if(Tr&&(Tr=!1,ft=e,ai=l),s=e.pendingLanes,s===0&&(_t=null),nd(n.stateNode),je(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(si)throw si=!1,e=$l,$l=null,e;return ai&1&&e.tag!==0&&on(),s=e.pendingLanes,s&1?e===Wl?Bn++:(Bn=0,Wl=e):Bn=0,Nt(),null}function on(){if(ft!==null){var e=Mo(ai),t=Fe.transition,n=U;try{if(Fe.transition=null,U=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,ai=0,D&6)throw Error(E(331));var l=D;for(D|=4,b=e.current;b!==null;){var s=b,a=s.child;if(b.flags&16){var o=s.deletions;if(o!==null){for(var u=0;u<o.length;u++){var f=o[u];for(b=f;b!==null;){var v=b;switch(v.tag){case 0:case 11:case 15:Un(8,v,s)}var d=v.child;if(d!==null)d.return=v,b=d;else for(;b!==null;){v=b;var p=v.sibling,h=v.return;if(Xu(v),v===f){b=null;break}if(p!==null){p.return=h,b=p;break}b=h}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}b=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,b=a;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Un(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,b=g;break e}b=s.return}}var c=e.current;for(b=c;b!==null;){a=b;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,b=m;else e:for(a=c;b!==null;){if(o=b,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:_i(9,o)}}catch(T){Y(o,o.return,T)}if(o===a){b=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,b=w;break e}b=o.return}}if(D=l,Nt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(pi,e)}catch{}r=!0}return r}finally{U=n,Fe.transition=t}}return!1}function Ga(e,t,n){t=gn(n,t),t=Mu(e,t,1),e=vt(e,t,1),t=ge(),e!==null&&(sr(e,1,t),je(e,t))}function Y(e,t,n){if(e.tag===3)Ga(e,e,n);else for(;t!==null;){if(t.tag===3){Ga(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){e=gn(n,e),e=Bu(t,e,1),t=vt(t,e,1),e=ge(),t!==null&&(sr(t,1,e),je(t,e));break}}t=t.return}}function Cp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(ie&n)===n&&(ee===4||ee===3&&(ie&130023424)===ie&&500>Z()-Os?Lt(e,0):bs|=n),je(e,t)}function ac(e,t){t===0&&(e.mode&1?(t=mr,mr<<=1,!(mr&130023424)&&(mr=4194304)):t=1);var n=ge();e=rt(e,t),e!==null&&(sr(e,t,n),je(e,n))}function Ap(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ac(e,n)}function bp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),ac(e,n)}var oc;oc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,xp(e,t,n);xe=!!(e.flags&131072)}else xe=!1,K&&t.flags&1048576&&pu(t,qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var l=cn(t,ce.current);an(t,n),l=Es(null,t,r,e,l,n);var s=Ts();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(s=!0,Zr(t)):s=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,_s(t),l.updater=vi,t.stateNode=l,l._reactInternals=t,bl(t,r,e,n),t=Ll(null,t,r,!0,s,n)):(t.tag=0,K&&s&&fs(t),fe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Fp(r),e=ze(r,e),l){case 0:t=Fl(null,t,r,e,n);break e;case 1:t=Pa(null,t,r,e,n);break e;case 11:t=La(null,t,r,e,n);break e;case 14:t=Ia(null,t,r,ze(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Fl(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Pa(e,t,r,l,n);case 3:e:{if(Hu(t),e===null)throw Error(E(387));r=t.pendingProps,s=t.memoizedState,l=s.element,xu(e,t),ti(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){l=gn(Error(E(423)),t),t=Da(e,t,r,n,l);break e}else if(r!==l){l=gn(Error(E(424)),t),t=Da(e,t,r,n,l);break e}else for(Se=xt(t.stateNode.containerInfo.firstChild),Ee=t,K=!0,Me=null,n=mu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===l){t=it(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return vu(t),e===null&&Rl(t),r=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,a=l.children,kl(r,l)?a=null:s!==null&&kl(r,s)&&(t.flags|=32),Ku(e,t),fe(e,t,a,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return Gu(e,t,n);case 4:return js(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),La(e,t,r,l,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,s=t.memoizedProps,a=l.value,M(Jr,r._currentValue),r._currentValue=a,s!==null)if(We(s.value,a)){if(s.children===l.children&&!ve.current){t=it(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=et(-1,n&-n),u.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?u.next=u:(u.next=v.next,v.next=u),f.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Cl(s.return,n,t),o.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(E(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Cl(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}fe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,an(t,n),l=Le(l),r=r(l),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,l=ze(r,t.pendingProps),l=ze(r.type,l),Ia(e,t,r,l,n);case 15:return $u(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Pr(e,t),t.tag=1,_e(r)?(e=!0,Zr(t)):e=!1,an(t,n),Uu(t,r,l),bl(t,r,l,n),Ll(null,t,r,!0,e,n);case 19:return Vu(e,t,n);case 22:return Wu(e,t,n)}throw Error(E(156,t.tag))};function uc(e,t){return Po(e,t)}function Op(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new Op(e,t,n,r)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fp(e){if(typeof e=="function")return Ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ts)return 11;if(e===ns)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ur(e,t,n,r,l,s){var a=2;if(r=e,typeof e=="function")Ps(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ht:return It(n.children,l,s,t);case es:a=8,l|=8;break;case tl:return e=Oe(12,n,t,l|2),e.elementType=tl,e.lanes=s,e;case nl:return e=Oe(13,n,t,l),e.elementType=nl,e.lanes=s,e;case rl:return e=Oe(19,n,t,l),e.elementType=rl,e.lanes=s,e;case vo:return wi(n,l,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yo:a=10;break e;case xo:a=9;break e;case ts:a=11;break e;case ns:a=14;break e;case ot:a=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Oe(a,n,t,l),t.elementType=e,t.type=r,t.lanes=s,t}function It(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function wi(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=vo,e.lanes=n,e.stateNode={isHidden:!1},e}function Xi(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function qi(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oi(0),this.expirationTimes=Oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ds(e,t,n,r,l,s,a,o,u){return e=new Lp(e,t,n,o,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Oe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_s(s),e}function Ip(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cc(e){if(!e)return St;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(_e(n))return cu(e,n,t)}return t}function dc(e,t,n,r,l,s,a,o,u){return e=Ds(n,r,!0,e,l,s,a,o,u),e.context=cc(null),n=e.current,r=ge(),l=jt(n),s=et(r,l),s.callback=t??null,vt(n,s,l),e.current.lanes=l,sr(e,l,r),je(e,r),e}function ki(e,t,n,r){var l=t.current,s=ge(),a=jt(l);return n=cc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(l,t,a),e!==null&&($e(e,l,a,s),Fr(e,l,a)),a}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Va(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zs(e,t){Va(e,t),(e=e.alternate)&&Va(e,t)}function Pp(){return null}var pc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Us(e){this._internalRoot=e}Si.prototype.render=Us.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));ki(e,t,null,null)};Si.prototype.unmount=Us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){ki(null,e,null,null)}),t[nt]=null}};function Si(e){this._internalRoot=e}Si.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&Ho(e)}};function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ya(){}function Dp(e,t,n,r,l){if(l){if(typeof r=="function"){var s=r;r=function(){var f=ui(a);s.call(f)}}var a=dc(t,r,e,0,null,!1,!1,"",Ya);return e._reactRootContainer=a,e[nt]=a.current,Zn(e.nodeType===8?e.parentNode:e),Mt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var o=r;r=function(){var f=ui(u);o.call(f)}}var u=Ds(e,0,!1,null,null,!1,!1,"",Ya);return e._reactRootContainer=u,e[nt]=u.current,Zn(e.nodeType===8?e.parentNode:e),Mt(function(){ki(t,u,n,r)}),u}function Ti(e,t,n,r,l){var s=n._reactRootContainer;if(s){var a=s;if(typeof l=="function"){var o=l;l=function(){var u=ui(a);o.call(u)}}ki(t,a,e,l)}else a=Dp(n,t,e,l,r);return ui(a)}Bo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bn(t.pendingLanes);n!==0&&(ls(t,n|1),je(t,Z()),!(D&6)&&(hn=Z()+500,Nt()))}break;case 13:Mt(function(){var r=rt(e,1);if(r!==null){var l=ge();$e(r,e,1,l)}}),zs(e,1)}};ss=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=ge();$e(t,e,134217728,n)}zs(e,134217728)}};$o=function(e){if(e.tag===13){var t=jt(e),n=rt(e,t);if(n!==null){var r=ge();$e(n,e,t,r)}zs(e,t)}};Wo=function(){return U};Ko=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};fl=function(e,t,n){switch(t){case"input":if(sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=mi(r);if(!l)throw Error(E(90));jo(r),sl(r,l)}}}break;case"textarea":ko(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};Ao=Fs;bo=Mt;var zp={usingClientEntryPoint:!1,Events:[or,Qt,mi,Ro,Co,Fs]},Nn={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Up={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lo(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||Pp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{pi=Nr.inject(Up),Ve=Nr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ms(t))throw Error(E(200));return Ip(e,t,null,n)};Ne.createRoot=function(e,t){if(!Ms(e))throw Error(E(299));var n=!1,r="",l=pc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ds(e,1,!1,null,null,n,!1,r,l),e[nt]=t.current,Zn(e.nodeType===8?e.parentNode:e),new Us(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Lo(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Mt(e)};Ne.hydrate=function(e,t,n){if(!Ei(t))throw Error(E(200));return Ti(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Ms(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,l=!1,s="",a=pc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=dc(t,null,e,1,n??null,l,!1,s,a),e[nt]=t.current,Zn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Si(t)};Ne.render=function(e,t,n){if(!Ei(t))throw Error(E(200));return Ti(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Ei(e))throw Error(E(40));return e._reactRootContainer?(Mt(function(){Ti(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Ne.unstable_batchedUpdates=Fs;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ei(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ti(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function fc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc)}catch(e){console.error(e)}}fc(),fo.exports=Ne;var Mp=fo.exports,Qa=Mp;Ji.createRoot=Qa.createRoot,Ji.hydrateRoot=Qa.hydrateRoot;function Bp({title:e}){return i.jsx("header",{className:"sticky top-0 z-30 backdrop-blur bg-white/70 border-b",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-3 flex items-center justify-between",children:[i.jsx("h1",{className:"text-xl font-semibold truncate",title:e,children:e}),i.jsx("div",{className:"hidden print:block text-sm text-gray-500",children:"Распечатанная версия"})]})})}function Za(e){var n,r;return`${(""+(((r=(n=import.meta)==null?void 0:n.env)==null?void 0:r.BASE_URL)??"/pygame-course-site/")).replace(/\/+$/,"/")}${e.replace(/^\/+/,"")}`}function Xa({url:e}){const[t,n]=di.useState(!1);return i.jsx("button",{onClick:async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),1200)},className:"text-xs border rounded px-2 py-1 hover:bg-gray-50",children:t?"Скопировано!":"Копировать ссылку"})}function $p({starterZip:e,finalZip:t}){if(!e&&!t)return null;const n=e?Za(e):void 0,r=t?Za(t):void 0;return i.jsxs("div",{className:"print:hidden flex flex-col gap-2 flex-wrap",children:[n&&i.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[i.jsx("a",{href:n,download:!0,className:"inline-flex items-center gap-2 rounded-2xl px-3 py-2 border shadow-sm hover:shadow transition",children:"⬇️ Скачать заготовку"}),i.jsx("a",{href:n,className:"text-xs text-blue-700 underline break-all",children:n}),i.jsx(Xa,{url:n})]}),r&&i.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[i.jsx("a",{href:r,download:!0,className:"inline-flex items-center gap-2 rounded-2xl px-3 py-2 border shadow-sm hover:shadow transition",children:"⬇️ Скачать итоговый файл"}),i.jsx("a",{href:r,className:"text-xs text-blue-700 underline break-all",children:r}),i.jsx(Xa,{url:r})]})]})}function y({title:e,children:t}){return i.jsxs("section",{className:"space-y-3",children:[i.jsx("h3",{className:"text-xl font-semibold mt-6",children:e}),i.jsx("div",{className:"prose max-w-none",children:t})]})}/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var Gl=function(){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,n={},r={util:{encode:function d(p){return p instanceof l?new l(p.type,d(p.content),p.alias):Array.isArray(p)?p.map(d):p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(d){return Object.prototype.toString.call(d).slice(8,-1)},objId:function(d){return d.__id||Object.defineProperty(d,"__id",{value:++t}),d.__id},clone:function d(p,h){h=h||{};var _,x;switch(r.util.type(p)){case"Object":if(x=r.util.objId(p),h[x])return h[x];_={},h[x]=_;for(var S in p)p.hasOwnProperty(S)&&(_[S]=d(p[S],h));return _;case"Array":return x=r.util.objId(p),h[x]?h[x]:(_=[],h[x]=_,p.forEach(function(g,c){_[c]=d(g,h)}),_);default:return p}},getLanguage:function(d){for(;d;){var p=e.exec(d.className);if(p)return p[1].toLowerCase();d=d.parentElement}return"none"},setLanguage:function(d,p){d.className=d.className.replace(RegExp(e,"gi"),""),d.classList.add("language-"+p)},isActive:function(d,p,h){for(var _="no-"+p;d;){var x=d.classList;if(x.contains(p))return!0;if(x.contains(_))return!1;d=d.parentElement}return!!h}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(d,p){var h=r.util.clone(r.languages[d]);for(var _ in p)h[_]=p[_];return h},insertBefore:function(d,p,h,_){_=_||r.languages;var x=_[d],S={};for(var g in x)if(x.hasOwnProperty(g)){if(g==p)for(var c in h)h.hasOwnProperty(c)&&(S[c]=h[c]);h.hasOwnProperty(g)||(S[g]=x[g])}var m=_[d];return _[d]=S,r.languages.DFS(r.languages,function(w,T){T===m&&w!=d&&(this[w]=S)}),S},DFS:function d(p,h,_,x){x=x||{};var S=r.util.objId;for(var g in p)if(p.hasOwnProperty(g)){h.call(p,g,p[g],_||g);var c=p[g],m=r.util.type(c);m==="Object"&&!x[S(c)]?(x[S(c)]=!0,d(c,h,null,x)):m==="Array"&&!x[S(c)]&&(x[S(c)]=!0,d(c,h,g,x))}}},plugins:{},highlight:function(d,p,h){var _={code:d,grammar:p,language:h};return r.hooks.run("before-tokenize",_),_.tokens=r.tokenize(_.code,_.grammar),r.hooks.run("after-tokenize",_),l.stringify(r.util.encode(_.tokens),_.language)},tokenize:function(d,p){var h=p.rest;if(h){for(var _ in h)p[_]=h[_];delete p.rest}var x=new o;return u(x,x.head,d),a(d,x,p,x.head,0),v(x)},hooks:{all:{},add:function(d,p){var h=r.hooks.all;h[d]=h[d]||[],h[d].push(p)},run:function(d,p){var h=r.hooks.all[d];if(!(!h||!h.length))for(var _=0,x;x=h[_++];)x(p)}},Token:l};function l(d,p,h,_){this.type=d,this.content=p,this.alias=h,this.length=(_||"").length|0}l.stringify=function d(p,h){if(typeof p=="string")return p;if(Array.isArray(p)){var _="";return p.forEach(function(m){_+=d(m,h)}),_}var x={type:p.type,content:d(p.content,h),tag:"span",classes:["token",p.type],attributes:{},language:h},S=p.alias;S&&(Array.isArray(S)?Array.prototype.push.apply(x.classes,S):x.classes.push(S)),r.hooks.run("wrap",x);var g="";for(var c in x.attributes)g+=" "+c+'="'+(x.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+g+">"+x.content+"</"+x.tag+">"};function s(d,p,h,_){d.lastIndex=p;var x=d.exec(h);if(x&&_&&x[1]){var S=x[1].length;x.index+=S,x[0]=x[0].slice(S)}return x}function a(d,p,h,_,x,S){for(var g in h)if(!(!h.hasOwnProperty(g)||!h[g])){var c=h[g];c=Array.isArray(c)?c:[c];for(var m=0;m<c.length;++m){if(S&&S.cause==g+","+m)return;var w=c[m],T=w.inside,C=!!w.lookbehind,R=!!w.greedy,A=w.alias;if(R&&!w.pattern.global){var P=w.pattern.toString().match(/[imsuy]*$/)[0];w.pattern=RegExp(w.pattern.source,P+"g")}for(var L=w.pattern||w,z=_.next,X=x;z!==p.tail&&!(S&&X>=S.reach);X+=z.value.length,z=z.next){var de=z.value;if(p.length>d.length)return;if(!(de instanceof l)){var Qe=1,se;if(R){if(se=s(L,X,d,C),!se||se.index>=d.length)break;var O=se.index,we=se.index+se[0].length,pe=X;for(pe+=z.value.length;O>=pe;)z=z.next,pe+=z.value.length;if(pe-=z.value.length,X=pe,z.value instanceof l)continue;for(var N=z;N!==p.tail&&(pe<we||typeof N.value=="string");N=N.next)Qe++,pe+=N.value.length;Qe--,de=d.slice(X,pe),se.index-=X}else if(se=s(L,0,de,C),!se)continue;var O=se.index,F=se[0],B=de.slice(0,O),Q=de.slice(O+F.length),st=X+de.length;S&&st>S.reach&&(S.reach=st);var Ce=z.prev;B&&(Ce=u(p,Ce,B),X+=B.length),f(p,Ce,Qe);var vn=new l(g,T?r.tokenize(F,T):F,A,F);if(z=u(p,Ce,vn),Q&&u(p,z,Q),Qe>1){var Pe={cause:g+","+m,reach:st};a(d,p,h,z.prev,X,Pe),S&&Pe.reach>S.reach&&(S.reach=Pe.reach)}}}}}}function o(){var d={value:null,prev:null,next:null},p={value:null,prev:d,next:null};d.next=p,this.head=d,this.tail=p,this.length=0}function u(d,p,h){var _=p.next,x={value:h,prev:p,next:_};return p.next=x,_.prev=x,d.length++,x}function f(d,p,h){for(var _=p.next,x=0;x<h&&_!==d.tail;x++)_=_.next;p.next=_,_.prev=p,d.length-=x}function v(d){for(var p=[],h=d.head.next;h!==d.tail;)p.push(h.value),h=h.next;return p}return r}(),k=Gl;Gl.default=Gl;k.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};k.languages.markup.tag.inside["attr-value"].inside.entity=k.languages.markup.entity;k.languages.markup.doctype.inside["internal-subset"].inside=k.languages.markup;k.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(k.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:k.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};l["language-"+n]={pattern:/[\s\S]+/,inside:k.languages[n]};var s={};s[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:l},k.languages.insertBefore("markup","cdata",s)}});Object.defineProperty(k.languages.markup.tag,"addAttribute",{value:function(e,t){k.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:k.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});k.languages.html=k.languages.markup;k.languages.mathml=k.languages.markup;k.languages.svg=k.languages.markup;k.languages.xml=k.languages.extend("markup",{});k.languages.ssml=k.languages.xml;k.languages.atom=k.languages.xml;k.languages.rss=k.languages.xml;(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var l=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=r.variable[1].inside,a=0;a<l.length;a++)s[l[a]]=e.languages.bash[l[a]];e.languages.shell=e.languages.bash})(k);k.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};k.languages.c=k.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});k.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});k.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},k.languages.c.string],char:k.languages.c.char,comment:k.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:k.languages.c}}}});k.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete k.languages.c.boolean;(function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])})(k);(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(k);(function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,n;e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:n={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+t.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[t,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=n,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var r={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},l={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:r,number:l,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:r,number:l})})(k);k.languages.javascript=k.languages.extend("clike",{"class-name":[k.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});k.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;k.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:k.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:k.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:k.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:k.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:k.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});k.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:k.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});k.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});k.languages.markup&&(k.languages.markup.tag.addInlined("script","javascript"),k.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));k.languages.js=k.languages.javascript;(function(e){var t=/#(?!\{).+/,n={pattern:/#\{[^}]+\}/,alias:"variable"};e.languages.coffeescript=e.languages.extend("javascript",{comment:t,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:n}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),e.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:t,interpolation:n}}}),e.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:e.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:n}}]}),e.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete e.languages.coffeescript["template-string"],e.languages.coffee=e.languages.coffeescript})(k);(function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r="(?:"+n.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+n.source+")?)",l=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function a(o,u){u=(u||"").replace(/m/g,"")+"m";var f=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return o});return RegExp(f,u)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return"(?:"+l+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:a(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:a(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:a(s),lookbehind:!0,greedy:!0},number:{pattern:a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(k);(function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(v){return v=v.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+v+")")}var r=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,l=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return r}),s=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+l+s+"(?:"+l+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+l+s+")(?:"+l+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(r),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+l+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+l+"$"),inside:{"table-header":{pattern:RegExp(r),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(v){["url","bold","italic","strike","code-snippet"].forEach(function(d){v!==d&&(e.languages.markdown[v].inside.content.inside[d]=e.languages.markdown[d])})}),e.hooks.add("after-tokenize",function(v){if(v.language!=="markdown"&&v.language!=="md")return;function d(p){if(!(!p||typeof p=="string"))for(var h=0,_=p.length;h<_;h++){var x=p[h];if(x.type!=="code"){d(x.content);continue}var S=x.content[1],g=x.content[3];if(S&&g&&S.type==="code-language"&&g.type==="code-block"&&typeof S.content=="string"){var c=S.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");c=(/[a-z][\w-]*/i.exec(c)||[""])[0].toLowerCase();var m="language-"+c;g.alias?typeof g.alias=="string"?g.alias=[g.alias,m]:g.alias.push(m):g.alias=[m]}}}d(v.tokens)}),e.hooks.add("wrap",function(v){if(v.type==="code-block"){for(var d="",p=0,h=v.classes.length;p<h;p++){var _=v.classes[p],x=/language-(.+)/.exec(_);if(x){d=x[1];break}}var S=e.languages[d];if(S)v.content=e.highlight(f(v.content),S,d);else if(d&&d!=="none"&&e.plugins.autoloader){var g="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);v.attributes.id=g,e.plugins.autoloader.loadLanguages(d,function(){var c=document.getElementById(g);c&&(c.innerHTML=e.highlight(c.textContent,e.languages[d],d))})}}});var a=RegExp(e.languages.markup.tag.pattern.source,"gi"),o={amp:"&",lt:"<",gt:">",quot:'"'},u=String.fromCodePoint||String.fromCharCode;function f(v){var d=v.replace(a,"");return d=d.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(p,h){if(h=h.toLowerCase(),h[0]==="#"){var _;return h[1]==="x"?_=parseInt(h.slice(2),16):_=Number(h.slice(1)),u(_)}else{var x=o[h];return x||p}}),d}e.languages.md=e.languages.markdown})(k);k.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:k.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/};k.hooks.add("after-tokenize",function(t){if(t.language!=="graphql")return;var n=t.tokens.filter(function(x){return typeof x!="string"&&x.type!=="comment"&&x.type!=="scalar"}),r=0;function l(x){return n[r+x]}function s(x,S){S=S||0;for(var g=0;g<x.length;g++){var c=l(g+S);if(!c||c.type!==x[g])return!1}return!0}function a(x,S){for(var g=1,c=r;c<n.length;c++){var m=n[c],w=m.content;if(m.type==="punctuation"&&typeof w=="string"){if(x.test(w))g++;else if(S.test(w)&&(g--,g===0))return c}}return-1}function o(x,S){var g=x.alias;g?Array.isArray(g)||(x.alias=g=[g]):x.alias=g=[],g.push(S)}for(;r<n.length;){var u=n[r++];if(u.type==="keyword"&&u.content==="mutation"){var f=[];if(s(["definition-mutation","punctuation"])&&l(1).content==="("){r+=2;var v=a(/^\($/,/^\)$/);if(v===-1)continue;for(;r<v;r++){var d=l(0);d.type==="variable"&&(o(d,"variable-input"),f.push(d.content))}r=v+1}if(s(["punctuation","property-query"])&&l(0).content==="{"&&(r++,o(l(0),"property-mutation"),f.length>0)){var p=a(/^\{$/,/^\}$/);if(p===-1)continue;for(var h=r;h<p;h++){var _=n[h];_.type==="variable"&&f.indexOf(_.content)>=0&&o(_,"variable-input")}}}}});k.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};(function(e){var t=e.languages.javascript["template-string"],n=t.pattern.source,r=t.inside.interpolation,l=r.inside["interpolation-punctuation"],s=r.pattern.source;function a(h,_){if(e.languages[h])return{pattern:RegExp("((?:"+_+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:h}}}}e.languages.javascript["template-string"]=[a("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),a("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),a("svg",/\bsvg/.source),a("markdown",/\b(?:markdown|md)/.source),a("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),a("sql",/\bsql/.source),t].filter(Boolean);function o(h,_){return"___"+_.toUpperCase()+"_"+h+"___"}function u(h,_,x){var S={code:h,grammar:_,language:x};return e.hooks.run("before-tokenize",S),S.tokens=e.tokenize(S.code,S.grammar),e.hooks.run("after-tokenize",S),S.tokens}function f(h){var _={};_["interpolation-punctuation"]=l;var x=e.tokenize(h,_);if(x.length===3){var S=[1,1];S.push.apply(S,u(x[1],e.languages.javascript,"javascript")),x.splice.apply(x,S)}return new e.Token("interpolation",x,r.alias,h)}function v(h,_,x){var S=e.tokenize(h,{interpolation:{pattern:RegExp(s),lookbehind:!0}}),g=0,c={},m=S.map(function(R){if(typeof R=="string")return R;for(var A=R.content,P;h.indexOf(P=o(g++,x))!==-1;);return c[P]=A,P}).join(""),w=u(m,_,x),T=Object.keys(c);g=0;function C(R){for(var A=0;A<R.length;A++){if(g>=T.length)return;var P=R[A];if(typeof P=="string"||typeof P.content=="string"){var L=T[g],z=typeof P=="string"?P:P.content,X=z.indexOf(L);if(X!==-1){++g;var de=z.substring(0,X),Qe=f(c[L]),se=z.substring(X+L.length),we=[];if(de&&we.push(de),we.push(Qe),se){var pe=[se];C(pe),we.push.apply(we,pe)}typeof P=="string"?(R.splice.apply(R,[A,1].concat(we)),A+=we.length-1):P.content=we}}else{var N=P.content;Array.isArray(N)?C(N):C([N])}}}return C(w),new e.Token(x,w,"language-"+x,h)}var d={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};e.hooks.add("after-tokenize",function(h){if(!(h.language in d))return;function _(x){for(var S=0,g=x.length;S<g;S++){var c=x[S];if(typeof c!="string"){var m=c.content;if(!Array.isArray(m)){typeof m!="string"&&_([m]);continue}if(c.type==="template-string"){var w=m[1];if(m.length===3&&typeof w!="string"&&w.type==="embedded-code"){var T=p(w),C=w.alias,R=Array.isArray(C)?C[0]:C,A=e.languages[R];if(!A)continue;m[1]=v(T,A,R)}}else _(m)}}}_(h.tokens)});function p(h){return typeof h=="string"?h:Array.isArray(h)?h.map(p).join(""):p(h.content)}})(k);(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(k);(function(e){e.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+e.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),e.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+e.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),e.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function t(o,u){return RegExp(o.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),u)}e.languages.insertBefore("javascript","keyword",{imports:{pattern:t(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),e.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),e.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:t(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var n=["function","function-variable","method","method-variable","property-access"],r=0;r<n.length;r++){var l=n[r],s=e.languages.javascript[l];e.util.type(s)==="RegExp"&&(s=e.languages.javascript[l]={pattern:s});var a=s.inside||{};s.inside=a,a["maybe-class-name"]=/^[A-Z][\s\S]*/}})(k);(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,l=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(u,f){return u=u.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return l}),RegExp(u,f)}l=s(l).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var a=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(a).join(""):""},o=function(u){for(var f=[],v=0;v<u.length;v++){var d=u[v],p=!1;if(typeof d!="string"&&(d.type==="tag"&&d.content[0]&&d.content[0].type==="tag"?d.content[0].content[0].content==="</"?f.length>0&&f[f.length-1].tagName===a(d.content[0].content[1])&&f.pop():d.content[d.content.length-1].content==="/>"||f.push({tagName:a(d.content[0].content[1]),openedBraces:0}):f.length>0&&d.type==="punctuation"&&d.content==="{"?f[f.length-1].openedBraces++:f.length>0&&f[f.length-1].openedBraces>0&&d.type==="punctuation"&&d.content==="}"?f[f.length-1].openedBraces--:p=!0),(p||typeof d=="string")&&f.length>0&&f[f.length-1].openedBraces===0){var h=a(d);v<u.length-1&&(typeof u[v+1]=="string"||u[v+1].type==="plain-text")&&(h+=a(u[v+1]),u.splice(v+1,1)),v>0&&(typeof u[v-1]=="string"||u[v-1].type==="plain-text")&&(h=a(u[v-1])+h,u.splice(v-1,1),v--),u[v]=new e.Token("plain-text",h,null,h)}d.content&&typeof d.content!="string"&&o(d.content)}};e.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||o(u.tokens)})})(k);(function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var t={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(t).forEach(function(n){var r=t[n],l=[];/^\w+$/.test(n)||l.push(/\w+/.exec(n)[0]),n==="diff"&&l.push("bold"),e.languages.diff[n]={pattern:RegExp("^(?:["+r+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:l,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(n)[0]}}}}),Object.defineProperty(e.languages.diff,"PREFIXES",{value:t})})(k);k.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m};k.languages.go=k.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});k.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete k.languages.go["class-name"];(function(e){function t(n,r){return"___"+n.toUpperCase()+r+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,r,l,s){if(n.language===r){var a=n.tokenStack=[];n.code=n.code.replace(l,function(o){if(typeof s=="function"&&!s(o))return o;for(var u=a.length,f;n.code.indexOf(f=t(r,u))!==-1;)++u;return a[u]=o,f}),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,r){if(n.language!==r||!n.tokenStack)return;n.grammar=e.languages[r];var l=0,s=Object.keys(n.tokenStack);function a(o){for(var u=0;u<o.length&&!(l>=s.length);u++){var f=o[u];if(typeof f=="string"||f.content&&typeof f.content=="string"){var v=s[l],d=n.tokenStack[v],p=typeof f=="string"?f:f.content,h=t(r,v),_=p.indexOf(h);if(_>-1){++l;var x=p.substring(0,_),S=new e.Token(r,e.tokenize(d,n.grammar),"language-"+r,d),g=p.substring(_+h.length),c=[];x&&c.push.apply(c,a([x])),c.push(S),g&&c.push.apply(c,a([g])),typeof f=="string"?o.splice.apply(o,[u,1].concat(c)):f.content=c}}else f.content&&a(f.content)}return o}a(n.tokens)}}})})(k);(function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",function(t){var n=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;e.languages["markup-templating"].buildPlaceholders(t,"handlebars",n)}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"handlebars")}),e.languages.hbs=e.languages.handlebars})(k);k.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};k.languages.webmanifest=k.languages.json;k.languages.less=k.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/});k.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}});k.languages.makefile={comment:{pattern:/(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,lookbehind:!0},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"builtin-target":{pattern:/\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,alias:"builtin"},target:{pattern:/^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,alias:"symbol",inside:{variable:/\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/}},variable:/\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,keyword:/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,function:{pattern:/(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,lookbehind:!0},operator:/(?:::|[?:+!])?=|[|@]/,punctuation:/[:;(){}]/};k.languages.objectivec=k.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/});delete k.languages.objectivec["class-name"];k.languages.objc=k.languages.objectivec;k.languages.ocaml={comment:{pattern:/\(\*[\s\S]*?\*\)/,greedy:!0},char:{pattern:/'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,greedy:!0},string:[{pattern:/"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,greedy:!0},{pattern:/\{([a-z_]*)\|[\s\S]*?\|\1\}/,greedy:!0}],number:[/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,/\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,/\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],directive:{pattern:/\B#\w+/,alias:"property"},label:{pattern:/\B~\w+/,alias:"property"},"type-variable":{pattern:/\B'\w+/,alias:"function"},variant:{pattern:/`\w+/,alias:"symbol"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,boolean:/\b(?:false|true)\b/,"operator-like-punctuation":{pattern:/\[[<>|]|[>|]\]|\{<|>\}/,alias:"punctuation"},operator:/\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,punctuation:/;;|::|[(){}\[\].,:;#]|\b_\b/};k.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};k.languages.python["string-interpolation"].inside.interpolation.inside.rest=k.languages.python;k.languages.py=k.languages.python;k.languages.reason=k.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/});k.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}});delete k.languages.reason.function;(function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete e.languages.sass.atrule;var t=/\$[-\w]+|#\{\$[-\w]+\}/,n=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:t,operator:n}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:t,operator:n,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})})(k);k.languages.scss=k.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}});k.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]});k.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/});k.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}});k.languages.scss.atrule.inside.rest=k.languages.scss;(function(e){var t={pattern:/(\b\d+)(?:%|[a-z]+)/,lookbehind:!0},n={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0},r={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},url:{pattern:/\burl\((["']?).*?\1\)/i,greedy:!0},string:{pattern:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,greedy:!0},interpolation:null,func:null,important:/\B!(?:important|optional)\b/i,keyword:{pattern:/(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,lookbehind:!0},hexcode:/#[\da-f]{3,6}/i,color:[/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:t,number:n,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:t,boolean:/\b(?:false|true)\b/,operator:[/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],number:n,punctuation:/[{}()\[\];:,]/};r.interpolation={pattern:/\{[^\r\n}:]+\}/,alias:"variable",inside:{delimiter:{pattern:/^\{|\}$/,alias:"punctuation"},rest:r}},r.func={pattern:/[\w-]+\([^)]*\).*/,inside:{function:/^[^(]+/,rest:r}},e.languages.stylus={"atrule-declaration":{pattern:/(^[ \t]*)@.+/m,lookbehind:!0,inside:{atrule:/^@[\w-]+/,rest:r}},"variable-declaration":{pattern:/(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,lookbehind:!0,inside:{variable:/^\S+/,rest:r}},statement:{pattern:/(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,lookbehind:!0,inside:{keyword:/^\S+/,rest:r}},"property-declaration":{pattern:/((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,lookbehind:!0,inside:{property:{pattern:/^[^\s:]+/,inside:{interpolation:r.interpolation}},rest:r}},selector:{pattern:/(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,lookbehind:!0,inside:{interpolation:r.interpolation,comment:r.comment,punctuation:/[{},]/}},func:r.func,string:r.string,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0},interpolation:r.interpolation,punctuation:/[{}()\[\];:.]/}})(k);(function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0})(k);k.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/};var Wp={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Kp={Prism:k,theme:Wp};function Rn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gt(){return gt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gt.apply(this,arguments)}var Hp=/\r\n|\r|\n/,qa=function(e){e.length===0?e.push({types:["plain"],content:`
`,empty:!0}):e.length===1&&e[0].content===""&&(e[0].content=`
`,e[0].empty=!0)},Ja=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Gp=function(e){for(var t=[[]],n=[e],r=[0],l=[e.length],s=0,a=0,o=[],u=[o];a>-1;){for(;(s=r[a]++)<l[a];){var f=void 0,v=t[a],d=n[a],p=d[s];if(typeof p=="string"?(v=a>0?v:["plain"],f=p):(v=Ja(v,p.type),p.alias&&(v=Ja(v,p.alias)),f=p.content),typeof f!="string"){a++,t.push(v),n.push(f),r.push(0),l.push(f.length);continue}var h=f.split(Hp),_=h.length;o.push({types:v,content:h[0]});for(var x=1;x<_;x++)qa(o),u.push(o=[]),o.push({types:v,content:h[x]})}a--,t.pop(),n.pop(),r.pop(),l.pop()}return qa(o),u},Vp=function(e,t){var n=e.plain,r=Object.create(null),l=e.styles.reduce(function(s,a){var o=a.languages,u=a.style;return o&&!o.includes(t)||a.types.forEach(function(f){var v=gt({},s[f],u);s[f]=v}),s},r);return l.root=n,l.plain=gt({},n,{backgroundColor:null}),l};function eo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)===-1&&(n[r]=e[r]);return n}var Yp=function(e){function t(){for(var n=this,r=[],l=arguments.length;l--;)r[l]=arguments[l];e.apply(this,r),Rn(this,"getThemeDict",function(s){if(n.themeDict!==void 0&&s.theme===n.prevTheme&&s.language===n.prevLanguage)return n.themeDict;n.prevTheme=s.theme,n.prevLanguage=s.language;var a=s.theme?Vp(s.theme,s.language):void 0;return n.themeDict=a}),Rn(this,"getLineProps",function(s){var a=s.key,o=s.className,u=s.style,f=eo(s,["key","className","style","line"]),v=f,d=gt({},v,{className:"token-line",style:void 0,key:void 0}),p=n.getThemeDict(n.props);return p!==void 0&&(d.style=p.plain),u!==void 0&&(d.style=d.style!==void 0?gt({},d.style,u):u),a!==void 0&&(d.key=a),o&&(d.className+=" "+o),d}),Rn(this,"getStyleForToken",function(s){var a=s.types,o=s.empty,u=a.length,f=n.getThemeDict(n.props);if(f!==void 0){{if(u===1&&a[0]==="plain")return o?{display:"inline-block"}:void 0;if(u===1&&!o)return f[a[0]]}var v=o?{display:"inline-block"}:{},d=a.map(function(p){return f[p]});return Object.assign.apply(Object,[v].concat(d))}}),Rn(this,"getTokenProps",function(s){var a=s.key,o=s.className,u=s.style,f=s.token,v=eo(s,["key","className","style","token"]),d=v,p=gt({},d,{className:"token "+f.types.join(" "),children:f.content,style:n.getStyleForToken(f),key:void 0});return u!==void 0&&(p.style=p.style!==void 0?gt({},p.style,u):u),a!==void 0&&(p.key=a),o&&(p.className+=" "+o),p}),Rn(this,"tokenize",function(s,a,o,u){var f={code:a,grammar:o,language:u,tokens:[]};s.hooks.run("before-tokenize",f);var v=f.tokens=s.tokenize(f.code,f.grammar,f.language);return s.hooks.run("after-tokenize",f),v})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var r=this.props,l=r.Prism,s=r.language,a=r.code,o=r.children,u=this.getThemeDict(this.props),f=l.languages[s],v=f!==void 0?this.tokenize(l,a,f,s):[a],d=Gp(v);return o({tokens:d,className:"prism-code language-"+s,style:u!==void 0?u.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(Ft.Component),Qp={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]};function Zp(e){return e==null?"":di.Children.toArray(e).map(n=>typeof n=="string"?n:"").join("")}function Xp({text:e}){const[t,n]=di.useState(!1);return i.jsx("button",{onClick:async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),1200)},className:"print:hidden text-xs border rounded px-2 py-1 hover:bg-gray-50",children:t?"Скопировано!":"Копировать"})}function j({code:e,language:t="python",children:n}){const r=n?Zp(n):e??"";return i.jsxs("div",{className:"relative group",children:[i.jsx("div",{className:"absolute right-3 top-3 z-10",children:i.jsx(Xp,{text:r})}),i.jsx(Yp,{...Kp,code:r,language:t,theme:Qp,children:({style:l,tokens:s,getLineProps:a,getTokenProps:o})=>i.jsx("pre",{style:l,className:"overflow-x-auto rounded-xl border bg-gray-50 p-4 text-sm leading-6",children:s.map((u,f)=>i.jsx("div",{...a({line:u}),children:u.map((v,d)=>i.jsx("span",{...o({token:v})},d))},f))})})]})}function qp(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Цель модуля",children:i.jsxs("p",{children:["Подготовим окружение под Windows: установим Python ",i.jsx("strong",{children:"3.10+"})," (рекомендуется ",i.jsx("strong",{children:"3.12+"}),"), настроим виртуальное окружение, поставим ",i.jsx("code",{children:"pygame"}),", запустим первый скрипт. Краткая выжимка по переменным, циклам, условиям и классам — в конце."]})}),i.jsx(y,{title:"Что установить",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Python 3.10+ (лучше 3.12+) — при установке включить галочку ",i.jsx("em",{children:"“Add Python to PATH”"}),"."]}),i.jsxs("li",{children:["Редактор: VS Code (расширение ",i.jsx("em",{children:"Python"}),") или PyCharm (Community)."]}),i.jsx("li",{children:"Опционально: Git (для работы с GitHub)."})]})}),i.jsxs(y,{title:"Проверка установки Python",children:[i.jsxs("p",{children:["Открыть ",i.jsx("em",{children:"PowerShell"})," и проверить:"]}),i.jsx(j,{language:"bash",children:`python --version
py -V
# если установлена 3.12:
py -3.12 --version`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Удобно использовать лаунчер ",i.jsx("code",{children:"py"}),": ",i.jsx("code",{children:"py -3.12"})," запускает конкретную версию."]})]}),i.jsxs(y,{title:"Создание проекта и виртуального окружения (Windows)",children:[i.jsx(j,{language:"bash",children:`mkdir pygame_course && cd pygame_course
# создать виртуальное окружение под 3.12 (если установлена)
py -3.12 -m venv .venv

# активировать окружение
.venv\\Scripts\\activate

# обновить pip (по желанию)
python -m pip install --upgrade pip`}),i.jsx("p",{children:"Далее все пакеты устанавливаются внутри активированного окружения."})]}),i.jsxs(y,{title:"Установка PyGame",children:[i.jsx(j,{language:"bash",children:"pip install pygame"}),i.jsx("p",{children:"Быстрая проверка:"}),i.jsx(j,{language:"python",children:`import pygame
print(pygame.__version__)`})]}),i.jsxs(y,{title:"Первый запуск — минимальное окно",children:[i.jsx(j,{language:"python",children:`import pygame, sys

pygame.init()

screen_width: int = 800
screen_height: int = 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('PyGame — первое окно')

is_running: bool = True
while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill((230, 230, 240))
    pygame.display.flip()

pygame.quit()
sys.exit()`}),i.jsx("p",{children:"Откроется окно 800×600 с однотонным фоном."})]}),i.jsxs(y,{title:"VS Code — быстрый старт",children:[i.jsxs("ol",{children:[i.jsxs("li",{children:["Установить расширение ",i.jsx("em",{children:"Python"}),"."]}),i.jsxs("li",{children:["Выбрать интерпретатор — указать ",i.jsx("code",{children:".venv"}),"."]}),i.jsxs("li",{children:["Создать ",i.jsx("code",{children:".vscode/launch.json"})," для запуска ",i.jsx("code",{children:"main.py"}),":"]})]}),i.jsx(j,{language:"json",children:`{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Запуск main.py",
      "type": "python",
      "request": "launch",
      "program": "\${workspaceFolder}/main.py",
      "console": "integratedTerminal"
    }
  ]
}`}),i.jsxs("p",{children:["Запуск — ",i.jsx("kbd",{children:"F5"})," или меню Run."]})]}),i.jsx(y,{title:"PyCharm — быстрый старт",children:i.jsxs("ol",{children:[i.jsxs("li",{children:["Open → выбрать папку проекта ",i.jsx("code",{children:"pygame_course"}),"."]}),i.jsxs("li",{children:["File → Settings → Python Interpreter → выбрать интерпретатор из ",i.jsx("code",{children:".venv"})," (Add → Existing)."]}),i.jsxs("li",{children:["ПКМ по ",i.jsx("code",{children:"main.py"})," → Run."]})]})}),i.jsx(y,{title:"База Python (кратко): переменные, условия, циклы, функции, классы",children:i.jsx(j,{language:"python",children:`# Переменные и типы
player_name: str = "Alex"
player_score: int = 0
speed_in_pixels_per_second: float = 120.0
is_running: bool = True

# Условие
if player_score >= 10:
    print("Level up!")
else:
    print("Keep going!")

# Циклы
for i in range(3):
    print("i =", i)

counter: int = 0
while counter < 3:
    print("counter =", counter)
    counter += 1

# Функции
def add_score(current: int, delta: int) -> int:
    return current + delta

player_score = add_score(player_score, 5)

# Классы
class Player:
    def __init__(self, name: str, x: int, y: int):
        self.name = name
        self.x = x
        self.y = y

    def move_by(self, dx: int, dy: int) -> None:
        self.x += dx
        self.y += dy

hero = Player("Alex", 100, 100)
hero.move_by(10, -5)
print(hero.name, hero.x, hero.y)`})}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Не активировано виртуальное окружение → ",i.jsx("code",{children:"pygame"})," не находится."]}),i.jsxs("li",{children:["Отсутствует ",i.jsx("code",{children:"pygame.init()"})," — часть модулей не работает."]}),i.jsxs("li",{children:["Нет цикла или нет ",i.jsx("code",{children:"pygame.display.flip()"})," — «пустой экран»."]}),i.jsx("li",{children:"Запуск не из папки проекта → неверные пути к ресурсам."}),i.jsxs("li",{children:["В VS Code выбран не тот интерпретатор (не из ",i.jsx("code",{children:".venv"}),")."]})]})}),i.jsx(y,{title:"Задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Окно:"})," создать окно 900×600 и заголовок «Мой первый проект на PyGame»."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Фон:"})," вынести цвет фона в переменную ",i.jsx("code",{children:"background_color"})," и использовать её."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Кнопка выхода:"})," добавить обработку события ",i.jsx("code",{children:"QUIT"})," в цикле."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"VS Code:"})," настроить ",i.jsx("code",{children:".vscode/launch.json"})," и запустить ",i.jsx("code",{children:"main.py"})," с ",i.jsx("kbd",{children:"F5"}),"."]})]})}),i.jsxs(y,{title:"Подсказки и ответы (фрагменты)",children:[i.jsx(j,{language:"python",children:`# 1) Окно 900x600 + заголовок
screen_surface = pygame.display.set_mode((900, 600))
pygame.display.set_caption('Мой первый проект на PyGame')`}),i.jsx(j,{language:"python",children:`# 2) Фон как переменная
background_color = (230, 230, 240)
screen_surface.fill(background_color)`}),i.jsx(j,{language:"python",children:`# 3) Закрытие окна
for event in pygame.event.get():
    if event.type == pygame.QUIT:
        is_running = False`}),i.jsx(j,{language:"json",children:`# 4) .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    { "name": "Python: Запуск main.py", "type": "python", "request": "launch", "program": "\${workspaceFolder}/main.py", "console": "integratedTerminal" }
  ]
}`})]}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m00.zip",children:"m00.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m00.zip",children:"m00.zip"})]})]})})]})}function Jp(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsx("p",{children:"Создаём окно PyGame нужного размера, задаём заголовок, настраиваем иконку, пробуем флаги окна (масштабируемое, полноэкранное), работаем с центром экрана и подготовим шаблон для будущих модулей."})}),i.jsx(y,{title:"Создание окна и базовый шаблон",children:i.jsx(j,{language:"python",children:`import pygame, sys

pygame.init()

screen_width: int = 900
screen_height: int = 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Окно PyGame')

is_running: bool = True
background_color = (30, 30, 40)

while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill(background_color)
    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsxs(y,{title:"Полезные флаги окна",children:[i.jsxs("p",{children:["Флаги комбинируются через побитовое ",i.jsx("code",{children:"|"}),":"]}),i.jsx(j,{language:"python",children:`# Масштабируемое окно
screen_surface = pygame.display.set_mode((900, 600), pygame.RESIZABLE | pygame.SCALED)

# Полноэкранный режим
# screen_surface = pygame.display.set_mode((0, 0), pygame.FULLSCREEN)

# Безрамочное окно
# screen_surface = pygame.display.set_mode((0, 0), pygame.NOFRAME)`})]}),i.jsx(y,{title:"Добавляем иконку и заголовок",children:i.jsx(j,{language:"python",children:`icon_surface = pygame.Surface((32, 32))
icon_surface.fill((255, 200, 0))
pygame.display.set_icon(icon_surface)
pygame.display.set_caption('PyGame — моя игра')`})}),i.jsx(y,{title:"Рисуем фигуру в центре экрана",children:i.jsx(j,{language:"python",children:`screen_center_x: int = screen_width // 2
screen_center_y: int = screen_height // 2
pygame.draw.circle(screen_surface, (230, 230, 230), (screen_center_x, screen_center_y), 40)`})}),i.jsx(y,{title:"Шаблон: окно + иконка + центр + рисование",children:i.jsx(j,{language:"python",children:`import pygame, sys

pygame.init()

screen_width: int = 1024
screen_height: int = 768
screen_surface = pygame.display.set_mode((screen_width, screen_height), pygame.RESIZABLE | pygame.SCALED)
pygame.display.set_caption('Окно: 1024x768')

icon_surface = pygame.Surface((32, 32))
icon_surface.fill((255, 200, 0))
pygame.display.set_icon(icon_surface)

background_color = (20, 40, 120)
screen_center_x: int = screen_width // 2
screen_center_y: int = screen_height // 2

is_running: bool = True
while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill(background_color)
    pygame.draw.circle(screen_surface, (230, 230, 230), (screen_center_x, screen_center_y), 40)

    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Размер:"})," сделай окно 1024×768 и задай заголовок «Окно: 1024×768»."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Цвет фона:"})," вынеси цвет в переменную ",i.jsx("code",{children:"background_color"})," и используй её."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Иконка:"})," создай иконку 32×32 и сделай её жёлтой."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Флаги:"})," активируй ",i.jsx("code",{children:"RESIZABLE | SCALED"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Центр:"})," вычисли центр и нарисуй круг радиусом 40."]})]})}),i.jsxs(y,{title:"Подсказки",children:[i.jsx(j,{language:"python",children:`# 1) 1024x768
screen_surface = pygame.display.set_mode((1024, 768))
pygame.display.set_caption('Окно: 1024×768')`}),i.jsx(j,{language:"python",children:`# 2) Цвет фона
background_color = (20, 40, 120)
screen_surface.fill(background_color)`}),i.jsx(j,{language:"python",children:`# 3) Иконка
icon_surface = pygame.Surface((32, 32))
icon_surface.fill((255, 200, 0))
pygame.display.set_icon(icon_surface)`}),i.jsx(j,{language:"python",children:`# 4) Флаги
screen_surface = pygame.display.set_mode((1024, 768), pygame.RESIZABLE | pygame.SCALED)`}),i.jsx(j,{language:"python",children:`# 5) Центр
screen_center_x: int = 1024 // 2
screen_center_y: int = 768 // 2
pygame.draw.circle(screen_surface, (230, 230, 230), (screen_center_x, screen_center_y), 40)`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Забыли ",i.jsx("code",{children:"pygame.display.flip()"})," — экран не обновляется."]}),i.jsx("li",{children:"Фон не заливается → появляются артефакты от предыдущего кадра."}),i.jsx("li",{children:"Создание окна в цикле → «мигающее» окно (set_mode вызывается только один раз)."}),i.jsxs("li",{children:["Нет обработки ",i.jsx("code",{children:"QUIT"})," — окно не закрывается."]})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m02.zip",children:"m02.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m02.zip",children:"m02.zip"})]})]})})]})}function ef(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Настроить фоновую заливку экрана и понять, зачем нужен ",i.jsx("code",{children:"pygame.display.flip()"}),". Добавим переключение палитры по клавише, градиент и сравним ",i.jsx("code",{children:"flip()"})," с ",i.jsx("code",{children:"display.update()"}),"."]})}),i.jsxs(y,{title:"Базовый цикл: фон + flip()",children:[i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('Фон и flip — базовый пример')

is_running: bool = True
background_color = (64, 128, 200)  # R, G, B (0..255)

while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    # 1) очистка экрана цветом
    screen_surface.fill(background_color)

    # 2) показать кадр
    pygame.display.flip()

pygame.quit()
sys.exit()`}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("code",{children:"fill()"})," — закраска всей поверхности."]}),i.jsxs("li",{children:[i.jsx("code",{children:"flip()"})," — показ готового кадра (двойная буферизация, без мерцания)."]})]})]}),i.jsx(y,{title:"Переключение цветов по SPACE",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('SPACE — смена фона')

PALETTE = [
    (30, 30, 40),
    (64, 128, 200),
    (240, 240, 255),
    (255, 245, 235),
]

index: int = 0
background_color = PALETTE[index]
is_running: bool = True

while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
            index = (index + 1) % len(PALETTE)
            background_color = PALETTE[index]

    screen_surface.fill(background_color)
    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsxs(y,{title:"Вертикальный градиент (без картинок)",children:[i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_width, screen_height = 800, 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Вертикальный градиент')

def draw_vertical_gradient(surface: pygame.Surface, top_color, bottom_color):
    height = surface.get_height()
    width = surface.get_width()
    for y in range(height):
        t = y / max(1, height - 1)  # 0..1
        r = int(top_color[0] * (1 - t) + bottom_color[0] * t)
        g = int(top_color[1] * (1 - t) + bottom_color[1] * t)
        b = int(top_color[2] * (1 - t) + bottom_color[2] * t)
        pygame.draw.line(surface, (r, g, b), (0, y), (width, y))

is_running: bool = True
top = (64, 128, 200)
bottom = (240, 240, 255)

while is_running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    draw_vertical_gradient(screen_surface, top, bottom)
    pygame.display.flip()

pygame.quit()
sys.exit()`}),i.jsx("p",{className:"text-sm text-gray-500",children:"Для учебных проектов отрисовка градиента линиями — норм. Для продвинутой оптимизации используют массивы/Surface.lock."})]}),i.jsxs(y,{title:"flip() vs display.update()",children:[i.jsxs("p",{children:[i.jsx("code",{children:"flip()"})," обновляет весь экран. ",i.jsx("code",{children:"display.update(rect)"})," — только прямоугольник (полезно для частичных изменений)."]}),i.jsx(j,{language:"python",children:`# Пример частичного обновления
pygame.draw.rect(screen_surface, (255, 180, 0), (40, 40, 160, 100))
pygame.display.update(pygame.Rect(40, 40, 160, 100))`})]}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Палитра:"})," добавь ещё 2–3 цвета и переключай по ",i.jsx("kbd",{children:"SPACE"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Градиент-режим:"})," сделай переключатель ",i.jsx("kbd",{children:"G"}),": однотонный фон ⇄ градиент."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Анимация градиента:"})," слегка меняй нижний цвет по времени (эффект «дышит»)."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Комбо:"})," на фоне нарисуй прямоугольник и окружность, чтобы увидеть слои."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# Переключение цвета
if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
    index = (index + 1) % len(PALETTE)
    background_color = PALETTE[index]`}),i.jsx(j,{language:"python",children:`# Переключение режима градиента
if event.type == pygame.KEYDOWN and event.key == pygame.K_g:
    use_gradient = not use_gradient`}),i.jsx(j,{language:"python",children:`# Анимация нижнего цвета (по времени)
gradient_offset = (gradient_offset + int(120 * dt)) % 255
bottom = ((top[0] + gradient_offset) % 256,
          (top[1] + 2*gradient_offset) % 256,
          (top[2] + 3*gradient_offset) % 256)`})]}),i.jsx(y,{title:"Готовый пример: фон, градиент и ориентиры",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_width: int = 800
screen_height: int = 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Фон: цвет / градиент / ориентиры')

PALETTE = [(30,30,40),(64,128,200),(240,240,255),(255,245,235)]
idx: int = 0
background_color = PALETTE[idx]

use_gradient: bool = False
gradient_offset: int = 0
clock_for_fps_control = pygame.time.Clock()

def draw_vertical_gradient(surface: pygame.Surface, top_color, bottom_color):
    h = surface.get_height(); w = surface.get_width()
    for y in range(h):
        t = y / max(1, h - 1)
        r = int(top_color[0]*(1-t) + bottom_color[0]*t)
        g = int(top_color[1]*(1-t) + bottom_color[1]*t)
        b = int(top_color[2]*(1-t) + bottom_color[2]*t)
        pygame.draw.line(surface, (r,g,b), (0,y), (w,y))

is_running: bool = True
while is_running:
    dt: float = clock_for_fps_control.tick(60) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:
                idx = (idx + 1) % len(PALETTE)
                background_color = PALETTE[idx]
            if event.key == pygame.K_g:
                use_gradient = not use_gradient

    if not use_gradient:
        screen_surface.fill(background_color)
    else:
        gradient_offset = (gradient_offset + int(120 * dt)) % 255
        bottom = ((background_color[0] + gradient_offset) % 256,
                  (background_color[1] + 2*gradient_offset) % 256,
                  (background_color[2] + 3*gradient_offset) % 256)
        draw_vertical_gradient(screen_surface, background_color, bottom)

    # ориентиры поверх фона
    pygame.draw.rect(screen_surface, (255,180,0), (40,40,160,100), 3)
    pygame.draw.circle(screen_surface, (0,200,255), (400,300), 40, 4)

    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Нет ",i.jsx("code",{children:"pygame.display.flip()"})," — изменения не видны."]}),i.jsxs("li",{children:["Вызов ",i.jsx("code",{children:"flip()"})," поставлен до рисования — кадр «пустой»."]}),i.jsx("li",{children:"Цвет указан не в диапазоне 0..255."}),i.jsx("li",{children:"Градиент рисуется один раз вне цикла — кадр не обновляется."})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m03.zip",children:"m03.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m03.zip",children:"m03.zip"})]})]})})]})}function tf(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Управление частотой кадров (FPS), расчёт ",i.jsx("code",{children:"delta-time"})," для плавного движения, работа с углами в градусах и радианах. Сделаем одинаковую скорость при разных FPS и добавим движение по направлению."]})}),i.jsxs(y,{title:"FPS и delta-time (основа)",children:[i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("code",{children:"pygame.time.Clock()"})," — часы для ограничения FPS и измерения времени кадра."]}),i.jsxs("li",{children:[i.jsx("code",{children:"clock.tick(limit)"})," — «задерживает» цикл, чтобы не превышать ",i.jsx("em",{children:"limit"})," FPS, и возвращает миллисекунды, прошедшие с прошлого кадра."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"delta-time"})," в секундах: ",i.jsx("code",{children:"dt = clock.tick(limit) / 1000.0"}),"."]})]}),i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('FPS и delta-time')
clock_for_fps_control = pygame.time.Clock()
frames_per_second_limit: int = 60

is_running: bool = True
while is_running:
    dt: float = clock_for_fps_control.tick(frames_per_second_limit) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill((20, 20, 24))
    pygame.display.flip()

pygame.quit()
sys.exit()`})]}),i.jsxs(y,{title:"Плавное движение: скорость × dt",children:[i.jsxs("p",{children:["Скорость храним в «пикселях в секунду», перемещение — ",i.jsx("code",{children:"позиция += скорость * dt"}),"."]}),i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_width, screen_height = 800, 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Движение с учётом dt')
clock_for_fps_control = pygame.time.Clock()

x: float = 100.0
y: float = 300.0
vx: float = 220.0  # пикс/сек
r: int = 20

is_running: bool = True
while is_running:
    dt: float = clock_for_fps_control.tick(60) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    # движение по X
    x += vx * dt

    # отскок от стен
    if x - r < 0:
        x = r; vx *= -1
    if x + r > screen_width:
        x = screen_width - r; vx *= -1

    screen_surface.fill((18, 18, 24))
    pygame.draw.circle(screen_surface, (255, 200, 0), (int(x), int(y)), r)
    pygame.display.flip()

pygame.quit()
sys.exit()`})]}),i.jsxs(y,{title:"Градусы ↔ радианы. Направление движения",children:[i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("code",{children:"math.radians(градусы)"})," → радианы, ",i.jsx("code",{children:"math.degrees(радианы)"})," → градусы."]}),i.jsxs("li",{children:["Единичный вектор направления: ",i.jsx("code",{children:"(cos(rad), sin(rad))"}),"."]})]}),i.jsx(j,{language:"python",children:`import pygame, sys, math
pygame.init()

screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('Движение по углу')
clock_for_fps_control = pygame.time.Clock()

x: float = 100.0
y: float = 300.0
speed: float = 200.0     # пикс/сек
angle_deg: float = 45.0  # градусы
r: int = 20

is_running: bool = True
while is_running:
    dt: float = clock_for_fps_control.tick(60) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:  angle_deg -= 15.0
            if event.key == pygame.K_RIGHT: angle_deg += 15.0

    rad = math.radians(angle_deg)
    dir_x = math.cos(rad)
    dir_y = math.sin(rad)

    x += dir_x * speed * dt
    y += dir_y * speed * dt

    # отскоки
    if x - r < 0: x = r; dir_x *= -1
    if x + r > 800: x = 800 - r; dir_x *= -1
    if y - r < 0: y = r; dir_y *= -1
    if y + r > 600: y = 600 - r; dir_y *= -1

    screen_surface.fill((240, 240, 255))
    pygame.draw.circle(screen_surface, (255, 160, 0), (int(x), int(y)), r)

    # линия направления
    L = 60
    pygame.draw.line(screen_surface, (0, 120, 255),
                     (int(x), int(y)),
                     (int(x + dir_x * L), int(y + dir_y * L)), 3)

    pygame.display.flip()

pygame.quit()
sys.exit()`})]}),i.jsx(y,{title:"FPS-переключатель и индикатор",children:i.jsx(j,{language:"python",children:`import pygame, sys, math
pygame.init()

screen_surface = pygame.display.set_mode((800, 600))
pygame.display.set_caption('FPS переключатель')
clock_for_fps_control = pygame.time.Clock()
font_object = pygame.font.SysFont(None, 22)

limit: int = 60
x: float = 100.0
vx: float = 200.0

is_running: bool = True
while is_running:
    dt: float = clock_for_fps_control.tick(limit) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
            limit = 240 if limit == 60 else 60  # переключение лимита FPS

    x += vx * dt
    if x > 820: x = -20

    screen_surface.fill((18,18,24))
    pygame.draw.circle(screen_surface, (255,200,0), (int(x), 300), 20)

    fps = clock_for_fps_control.get_fps()
    text = font_object.render(f"FPS≈{fps:5.1f} | SPACE — 60/240 FPS", True, (230,230,230))
    screen_surface.blit(text, (10, 10))

    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Равномерная скорость:"})," переключай лимит между 30 и 120 FPS по ",i.jsx("kbd",{children:"SPACE"}),". Объект должен двигаться с одинаковой скоростью."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Отскоки по двум осям:"})," круг движется по диагонали и отскакивает от всех четырёх стен."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Движение по углу:"})," управление углом ",i.jsx("kbd",{children:"←/→"}),", расчёт вектора ",i.jsx("code",{children:"(cos, sin)"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Режимы:"})," ",i.jsx("kbd",{children:"TAB"})," — переключение «движение по X» ⇄ «движение по углу»."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Линия-указатель:"})," рисовать от объекта линию направления длиной 60 пикселей."]})]})}),i.jsxs(y,{title:"Подсказки и ответы (фрагменты)",children:[i.jsx(j,{language:"python",children:`# 1) Переключение лимита
limit = 30 if limit == 120 else 120`}),i.jsx(j,{language:"python",children:`# 2) Отскоки
if x - r < 0 or x + r > W: vx *= -1
if y - r < 0 or y + r > H: vy *= -1`}),i.jsx(j,{language:"python",children:`# 3) Движение по углу
rad = math.radians(angle_deg)
vx = math.cos(rad) * speed
vy = math.sin(rad) * speed
x += vx * dt
y += vy * dt`}),i.jsx(j,{language:"python",children:`# 4) Режимы
use_angle = not use_angle`}),i.jsx(j,{language:"python",children:`# 5) Линия направления
pygame.draw.line(screen_surface, (0,220,255), (int(x),int(y)), (int(x+dir_x*60), int(y+dir_y*60)), 3)`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsx("li",{children:"Считать «пиксели за кадр», а не «пиксели в секунду × dt» — скорость меняется при другом FPS."}),i.jsxs("li",{children:["Забыть ",i.jsx("code",{children:"pygame.display.flip()"})," — кадр не обновляется."]}),i.jsxs("li",{children:["Путаница градусов и радиан — обязательно ",i.jsx("code",{children:"math.radians(...)"}),"."]}),i.jsx("li",{children:"Слишком высокий лимит при тяжёлом рендере — нестабильная плавность."})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m04.zip",children:"m04.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m04.zip",children:"m04.zip"})]})]})})]})}function nf(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Освоить рисование примитивов через ",i.jsx("code",{children:"pygame.draw"}),": линия, прямоугольник, круг, эллипс, многоугольник, дуга. Разобрать параметры: цвет, прямоугольник (",i.jsx("code",{children:"x, y, w, h"}),"), толщина ",i.jsx("code",{children:"width"}),", скругление ",i.jsx("code",{children:"border_radius"}),"."]})}),i.jsx(y,{title:"Минимальный шаблон рисования",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_surface = pygame.display.set_mode((900, 600))
pygame.display.set_caption('Фигуры — базовый шаблон')
clock = pygame.time.Clock()

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill((24, 26, 32))  # фон

    # Рисование фигур будет здесь...

    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsxs(y,{title:"Линия",children:[i.jsx(j,{language:"python",children:`pygame.draw.line(surface, color, start_pos, end_pos, width=1)
# Пример:
pygame.draw.line(screen_surface, (0, 120, 220), (50, 50), (300, 120), 5)`}),i.jsx("p",{children:"Координаты задаются в пикселях. Толщина по умолчанию 1, для «заливки» линий не используется."})]}),i.jsx(y,{title:"Прямоугольник",children:i.jsx(j,{language:"python",children:`pygame.draw.rect(surface, color, rect, width=0, border_radius=0)
# rect: (x, y, w, h)
# width=0 — заливка, >0 — толщина контура
# Примеры:
pygame.draw.rect(screen_surface, (220, 70, 70), (400, 80, 200, 120), 3, border_radius=12)
pygame.draw.rect(screen_surface, (40, 180, 120), (420, 260, 160, 90), 0)`})}),i.jsx(y,{title:"Круг и эллипс",children:i.jsx(j,{language:"python",children:`pygame.draw.circle(surface, color, center, radius, width=0)
pygame.draw.ellipse(surface, color, rect, width=0)
# Примеры:
pygame.draw.circle(screen_surface, (50, 180, 90), (200, 350), 60, 0)          # заливка
pygame.draw.ellipse(screen_surface, (180, 120, 255), (500, 300, 220, 120), 4) # контур`})}),i.jsxs(y,{title:"Многоугольник и дуга",children:[i.jsx(j,{language:"python",children:`pygame.draw.polygon(surface, color, point_list, width=0)
pygame.draw.arc(surface, color, rect, start_angle, stop_angle, width=1)
# Примеры:
pygame.draw.polygon(screen_surface, (255, 200, 0),
                    [(100,500),(160,460),(220,500),(200,560),(120,560)], 0)
# дуга окружности 0..π (180°) в прямоугольнике 140x140
pygame.draw.arc(screen_surface, (240, 240, 240), (650, 100, 140, 140), 0.0, 3.14159, 3)`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Углы ",i.jsx("code",{children:"start_angle"}),", ",i.jsx("code",{children:"stop_angle"})," — в радианах. Для перевода из градусов: ",i.jsx("code",{children:"math.radians(deg)"}),"."]})]}),i.jsx(y,{title:"Оси X/Y — напоминание",children:i.jsxs("ul",{children:[i.jsx("li",{children:"(0,0) — левый верхний угол."}),i.jsx("li",{children:"Ось X растёт вправо, ось Y — вниз."}),i.jsxs("li",{children:["Цвет — кортеж ",i.jsx("code",{children:"(R, G, B)"})," со значениями 0..255."]})]})}),i.jsx(y,{title:"Собранный пример: набор фигур",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_surface = pygame.display.set_mode((900, 600))
pygame.display.set_caption('Фигуры — пример (сет)')
clock = pygame.time.Clock()

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill((24, 26, 32))

    pygame.draw.line(screen_surface, (0, 120, 220), (50, 50), (300, 120), 5)
    pygame.draw.rect(screen_surface, (220, 70, 70), (400, 80, 200, 120), 3, border_radius=12)
    pygame.draw.circle(screen_surface, (50, 180, 90), (200, 350), 60, 0)
    pygame.draw.ellipse(screen_surface, (180, 120, 255), (500, 300, 220, 120), 4)
    pygame.draw.polygon(screen_surface, (255, 200, 0), [(100,500),(160,460),(220,500),(200,560),(120,560)], 0)
    pygame.draw.arc(screen_surface, (240, 240, 240), (650, 100, 140, 140), 0.0, 3.14159, 3)

    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Флаги:"})," добавь скругление углов у прямоугольника (",i.jsx("code",{children:"border_radius=16"}),")."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Контур/заливка:"})," сравни ",i.jsx("code",{children:"width=0"})," и ",i.jsx("code",{children:"width=4"})," на прямоугольнике и круге."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Домик из примитивов:"})," прямоугольник-основание + треугольная крыша (многоугольник)."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Смайлик:"})," большой жёлтый круг; два маленьких чёрных круга-глаза; дуга-улыбка."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Ориентиры:"})," проведи оси X и Y через центр экрана, подпиши маленькими прямоугольниками."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# border_radius
pygame.draw.rect(screen_surface, (60, 160, 220), (100, 90, 180, 100), 0, border_radius=16)`}),i.jsx(j,{language:"python",children:`# домик
base = pygame.Rect(80, 340, 160, 120)
pygame.draw.rect(screen_surface, (200, 160, 120), base, 0)
roof_pts = [(80,340), (160,280), (240,340)]
pygame.draw.polygon(screen_surface, (180, 80, 60), roof_pts, 0)`}),i.jsx(j,{language:"python",children:`# смайлик
pygame.draw.circle(screen_surface, (255, 210, 0), (420, 420), 70, 0)
pygame.draw.circle(screen_surface, (20, 20, 20), (395, 400), 8, 0)
pygame.draw.circle(screen_surface, (20, 20, 20), (445, 400), 8, 0)
pygame.draw.arc(screen_surface, (20, 20, 20), (370, 385, 100, 90), 3.6, 5.8, 4)`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Рисование до ",i.jsx("code",{children:"fill()"})," — фигуры «затираются» фоном."]}),i.jsxs("li",{children:["Неправильный прямоугольник: порядок ",i.jsx("code",{children:"(x, y, w, h)"}),", а не ",i.jsx("code",{children:"(x1, y1, x2, y2)"}),"."]}),i.jsx("li",{children:"Цвет вне диапазона 0..255."}),i.jsxs("li",{children:["Забыли ",i.jsx("code",{children:"flip()"})," — фигуры не появляются."]})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m05.zip",children:"m05.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m05.zip",children:"m05.zip"})]})]})})]})}function rf(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Разобраться с системой координат PyGame: где начало, куда растут оси X и Y, как работать с центром экрана, сеткой и позиционированием объектов (включая выравнивание по центру через ",i.jsx("code",{children:"get_rect(center=...)"}),")."]})}),i.jsx(y,{title:"Система координат",children:i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"(0, 0)"})," — левый верхний угол экрана."]}),i.jsxs("li",{children:["Ось ",i.jsx("strong",{children:"X"})," растёт вправо; ось ",i.jsx("strong",{children:"Y"})," — вниз."]}),i.jsxs("li",{children:["Координата — целое число пикселей. Для плавных расчётов можно хранить ",i.jsx("code",{children:"float"}),", а рисовать ",i.jsx("code",{children:"int(...)"}),"."]})]})}),i.jsx(y,{title:"Оси и сетка (визуальная помощь)",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_width, screen_height = 900, 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Оси и сетка')
clock = pygame.time.Clock()

background_color = (24, 26, 32)
grid_color = (45, 50, 62)
axis_color = (120, 140, 200)

center_x = screen_width // 2
center_y = screen_height // 2

def draw_grid(surface: pygame.Surface, step: int = 50) -> None:
    w, h = surface.get_width(), surface.get_height()
    for x in range(0, w, step):
        pygame.draw.line(surface, grid_color, (x, 0), (x, h), 1)
    for y in range(0, h, step):
        pygame.draw.line(surface, grid_color, (0, y), (w, y), 1)

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    screen_surface.fill(background_color)
    draw_grid(screen_surface, 50)

    # оси через центр
    pygame.draw.line(screen_surface, axis_color, (center_x, 0), (center_x, screen_height), 1)
    pygame.draw.line(screen_surface, axis_color, (0, center_y), (screen_width, center_y), 1)

    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsxs(y,{title:"Центрирование объектов: get_rect(..., center=...)",children:[i.jsxs("p",{children:["Часто надо выровнять спрайт/прямоугольник по центру. У любого ",i.jsx("code",{children:"Surface"})," и ",i.jsx("code",{children:"Rect"})," есть метод",i.jsx("code",{children:"get_rect"}),", который принимает «якорь» (например, ",i.jsx("code",{children:"center"}),", ",i.jsx("code",{children:"topleft"})," и т.п.)."]}),i.jsx(j,{language:"python",children:`rect_surface = pygame.Surface((120, 80), pygame.SRCALPHA)
pygame.draw.rect(rect_surface, (80, 160, 240), rect_surface.get_rect(), 2, border_radius=10)

center_x = 900 // 2
center_y = 600 // 2

rect_pos = rect_surface.get_rect(center=(center_x, center_y))  # центрируем
screen_surface.blit(rect_surface, rect_pos)`})]}),i.jsxs(y,{title:"Координаты мыши и «движущаяся точка»",children:[i.jsx(j,{language:"python",children:`dot_radius = 8
dot_x, dot_y = 450, 300

def clamp(value: float, a: float, b: float) -> float:
    return max(a, min(b, value))

mouse_x, mouse_y = pygame.mouse.get_pos()
dot_x = clamp(mouse_x, dot_radius, screen_width - dot_radius)
dot_y = clamp(mouse_y, dot_radius, screen_height - dot_radius)
pygame.draw.circle(screen_surface, (255, 200, 0), (int(dot_x), int(dot_y)), dot_radius, 0)`}),i.jsxs("p",{className:"text-sm text-gray-500",children:[i.jsx("code",{children:"clamp"})," полезна для удержания объектов в пределах экрана."]})]}),i.jsx(y,{title:"Собранный пример",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_width, screen_height = 900, 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Оси X/Y — пример')
clock = pygame.time.Clock()

background_color = (24, 26, 32)
grid_color = (45, 50, 62)
axis_color = (120, 140, 200)
text_color = (230, 230, 235)
dot_color = (255, 200, 0)

font_object = pygame.font.SysFont(None, 20)

center_x = screen_width // 2
center_y = screen_height // 2
dot_radius = 8

def draw_grid(surface: pygame.Surface, step: int = 50) -> None:
    w, h = surface.get_width(), surface.get_height()
    for x in range(0, w, step):
        pygame.draw.line(surface, grid_color, (x, 0), (x, h), 1)
    for y in range(0, h, step):
        pygame.draw.line(surface, grid_color, (0, y), (w, y), 1)

def draw_axes(surface: pygame.Surface, cx: int, cy: int) -> void:  # псевдо-сигнатура для читабельности
    pygame.draw.line(surface, axis_color, (cx, 0), (cx, surface.get_height()), 1)
    pygame.draw.line(surface, axis_color, (0, cy), (surface.get_width(), cy), 1)
    pygame.draw.circle(surface, axis_color, (cx, cy), 3, 0)

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    mouse_x, mouse_y = pygame.mouse.get_pos()
    dot_x = max(dot_radius, min(screen_width - dot_radius, mouse_x))
    dot_y = max(dot_radius, min(screen_height - dot_radius, mouse_y))

    screen_surface.fill(background_color)
    draw_grid(screen_surface, 50)
    draw_axes(screen_surface, center_x, center_y)

    rect_surface = pygame.Surface((120, 80), pygame.SRCALPHA)
    pygame.draw.rect(rect_surface, (80, 160, 240), rect_surface.get_rect(), 2, border_radius=10)
    rect_pos = rect_surface.get_rect(center=(center_x, center_y))
    screen_surface.blit(rect_surface, rect_pos)

    info = [
        f"origin (0,0) — левый верх",
        f"center=({center_x},{center_y})",
        f"mouse=({mouse_x},{mouse_y})"
    ]
    for i, msg in enumerate(info):
        text_surface = pygame.font.SysFont(None, 20).render(msg, True, text_color)
        screen_surface.blit(text_surface, (8, 8 + i*18))

    pygame.draw.circle(screen_surface, dot_color, (int(dot_x), int(dot_y)), dot_radius, 0)

    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Сетка:"})," сделай шаг сетки настраиваемым (",i.jsx("code",{children:"step"})," хранить в переменной), добавь переключение ",i.jsx("kbd",{children:"1"}),"/",i.jsx("kbd",{children:"2"}),"/",i.jsx("kbd",{children:"3"})," для значений 25/50/100."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Щелчок по клетке:"})," по клику мышью подсвети ближайшую клетку сетки (подсказка: деление и умножение на ",i.jsx("code",{children:"step"}),")."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Привязка к сетке:"})," круг привязывается к центрам клеток (округление до кратного ",i.jsx("code",{children:"step"}),")."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Отладка прямоугольника:"})," выведи ",i.jsx("code",{children:"rect.topleft"}),", ",i.jsx("code",{children:"rect.center"}),", ",i.jsx("code",{children:"rect.bottomright"})," для наглядности."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Ограничение:"})," реализуй функцию ",i.jsx("code",{children:"clamp_rect(rect, bounds)"}),", чтобы прямоугольник не выходил за экран."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# Клетка под мышью
cell_x = (mouse_x // step) * step
cell_y = (mouse_y // step) * step
pygame.draw.rect(screen_surface, (90,120,200), (cell_x, cell_y, step, step), 2)`}),i.jsx(j,{language:"python",children:`# Привязка к центру клетки
snap_x = (mouse_x // step) * step + step // 2
snap_y = (mouse_y // step) * step + step // 2`}),i.jsx(j,{language:"python",children:`# Clamp для rect
def clamp_rect(rect: pygame.Rect, bounds: pygame.Rect) -> pygame.Rect:
    if rect.left < bounds.left: rect.left = bounds.left
    if rect.top < bounds.top: rect.top = bounds.top
    if rect.right > bounds.right: rect.right = bounds.right
    if rect.bottom > bounds.bottom: rect.bottom = bounds.bottom
    return rect`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Путаница: думать, что ",i.jsx("code",{children:"Y"})," растёт вверх — в PyGame он растёт вниз."]}),i.jsxs("li",{children:["Рисовать до ",i.jsx("code",{children:"fill()"})," — объекты «затираются» фоном."]}),i.jsx("li",{children:"Использовать дробные координаты без округления на этапе рисования — «дрожащие» пиксели."}),i.jsxs("li",{children:["Неправильная центровка: изменять ",i.jsx("code",{children:"rect.x/y"})," вместо работы с ",i.jsx("code",{children:"rect.center"}),"."]})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m06.zip",children:"m06.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m06.zip",children:"m06.zip"})]})]})})]})}function lf(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Собирать сложные объекты из простых фигур (",i.jsx("code",{children:"pygame.draw"}),"), выносить повторяющийся код в функции и классы, соблюдать порядок рисования (слои)."]})}),i.jsx(y,{title:"Идея префабов (prefab)",children:i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Функции"})," для статичных объектов: ",i.jsx("code",{children:"draw_house(surface, pos, scale)"}),", ",i.jsx("code",{children:"draw_tree(...)"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Классы"})," для динамики: ",i.jsx("code",{children:"Car.update(dt)"}),", ",i.jsx("code",{children:"Car.draw(surface)"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Слои"}),": фон → статика → динамика → интерфейс (текст/подсказки)."]})]})}),i.jsx(y,{title:"Дом из фигур (функция)",children:i.jsx(j,{language:"python",children:`def draw_house(surface: pygame.Surface, pos: tuple[int, int], scale: float = 1.0) -> None:
    x, y = pos
    w, h = int(120*scale), int(80*scale)
    base = pygame.Rect(x, y, w, h)
    roof = [(x, y), (x + w//2, y - int(50*scale)), (x + w, y)]
    door_w, door_h = int(24*scale), int(38*scale)
    door = pygame.Rect(x + w//2 - door_w//2, y + h - door_h, door_w, door_h)
    win = pygame.Rect(x + int(12*scale), y + int(16*scale), int(26*scale), int(22*scale))

    pygame.draw.rect(surface, (204, 163, 122), base, 0)
    pygame.draw.polygon(surface, (160, 80, 60), roof, 0)
    pygame.draw.rect(surface, (90, 60, 40), door, 0, border_radius=4)
    pygame.draw.rect(surface, (200, 220, 255), win, 0, border_radius=4)
    pygame.draw.line(surface, (150, 190, 230), (win.centerx, win.top), (win.centerx, win.bottom), 2)
    pygame.draw.line(surface, (150, 190, 230), (win.left, win.centery), (win.right, win.centery), 2)`})}),i.jsx(y,{title:"Дерево и персонаж (функции)",children:i.jsx(j,{language:"python",children:`def draw_tree(surface: pygame.Surface, pos: tuple[int, int], scale: float = 1.0) -> None:
    x, y = pos
    trunk = pygame.Rect(x, y, int(22*scale), int(64*scale))
    pygame.draw.rect(surface, (110, 70, 40), trunk, 0, border_radius=4)
    cx = x + trunk.w//2
    cy = y - int(18*scale)
    for r, col in [(int(28*scale), (40,140,80)), (int(22*scale), (46,160,96)), (int(18*scale), (54,180,108))]:
        pygame.draw.circle(surface, col, (cx, cy), r, 0)
        cy -= int(18*scale)

def draw_person(surface: pygame.Surface, pos: tuple[int, int], scale: float = 1.0) -> None:
    x, y = pos
    head_r = int(10*scale)
    pygame.draw.circle(surface, (255, 210, 150), (x, y), head_r, 0)  # голова
    body = pygame.Rect(x - int(6*scale), y + head_r, int(12*scale), int(28*scale))
    pygame.draw.rect(surface, (80, 120, 220), body, 0, border_radius=4)
    pygame.draw.line(surface, (80,120,220), (body.left- int(10*scale), body.top+8), (body.right+ int(10*scale), body.top+8), 3)
    pygame.draw.line(surface, (60,60,60), (body.centerx, body.bottom), (body.centerx- int(10*scale), body.bottom+ int(18*scale)), 3)
    pygame.draw.line(surface, (60,60,60), (body.centerx, body.bottom), (body.centerx+ int(10*scale), body.bottom+ int(18*scale)), 3)`})}),i.jsx(y,{title:"Класс динамического объекта (машина)",children:i.jsx(j,{language:"python",children:`class Car:
    def __init__(self, x: float, y: float, color=(80, 160, 240)) -> None:
        self.x = x; self.y = y
        self.color = color
        self.vx = 220.0
        self.w = 120; self.h = 50

    def update(self, dt: float, bounds: pygame.Rect) -> None:
        self.x += self.vx * dt
        if self.x + self.w > bounds.right:
            self.x = bounds.right - self.w; self.vx *= -1
        if self.x < bounds.left:
            self.x = bounds.left; self.vx *= -1

    def draw(self, surface: pygame.Surface) -> None:
        body = pygame.Rect(int(self.x), int(self.y), self.w, self.h)
        pygame.draw.rect(surface, self.color, body, 0, border_radius=10)
        cab = pygame.Rect(body.left + 12, body.top + 8, self.w//2, self.h//2)
        pygame.draw.rect(surface, (200, 230, 255), cab, 0, border_radius=8)
        pygame.draw.circle(surface, (20,20,20), (body.left + 24, body.bottom), 16, 0)
        pygame.draw.circle(surface, (20,20,20), (body.right - 24, body.bottom), 16, 0)
        pygame.draw.circle(surface, (220,220,220), (body.left + 24, body.bottom), 6, 0)
        pygame.draw.circle(surface, (220,220,220), (body.right - 24, body.bottom), 6, 0)`})}),i.jsx(y,{title:"Слои: фон → статика → динамика → UI",children:i.jsx(j,{language:"python",children:`def draw_scene_static(surface: pygame.Surface) -> None:
    pygame.draw.rect(surface, (34, 120, 70), (0, 520, 900, 80), 0) # земля
    draw_house(surface, (80, 360), 1.0)
    draw_house(surface, (260, 380), 0.8)
    draw_tree(surface, (430, 400), 1.1)
    draw_tree(surface, (520, 420), 0.9)
    draw_person(surface, (360, 500), 1.2)`})}),i.jsx(y,{title:"Собранный пример",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_width, screen_height = 900, 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Префабы — пример')
clock = pygame.time.Clock()

# ... функции draw_house/draw_tree/draw_person и класс Car здесь ...

car = Car(200, 470)

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    car.update(dt, pygame.Rect(0, 0, screen_width, screen_height))

    screen_surface.fill((28, 30, 36))
    # опционально: сетка
    for x in range(0, screen_width, 50):
        pygame.draw.line(screen_surface, (44,48,58), (x, 0), (x, screen_height), 1)
    for y in range(0, screen_height, 50):
        pygame.draw.line(screen_surface, (44,48,58), (0, y), (screen_width, y), 1)

    draw_scene_static(screen_surface)
    car.draw(screen_surface)

    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Параметры:"})," добавь в ",i.jsx("code",{children:"draw_house"})," цвет крыши и окна аргументами, по умолчанию оставь текущие."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Новые префабы:"})," сделай ",i.jsx("code",{children:"draw_cloud(surface, pos, scale)"})," (несколько кругов) и ",i.jsx("code",{children:"draw_sun(...)"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Группа объектов:"})," создай список из 5 машин с разными скоростями/цветами, обновляй и рисуй каждую."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Порядок:"})," попробуй поменять порядок слоёв и посмотри, как элементы перекрывают друг друга."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Коллизии (дополнительно):"})," проверь пересечение прямоугольника машины с домом (через ",i.jsx("code",{children:"Rect.colliderect"}),"), сменяй цвет машины при столкновении."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# Цвета как аргументы
def draw_house(surface, pos, scale=1.0, roof_color=(160,80,60), win_color=(200,220,255)):
    # ... используем roof_color и win_color ...`}),i.jsx(j,{language:"python",children:`# Обновление группы машин
cars = [Car(100,470,(90,170,250)), Car(200,470,(250,120,120)), Car(300,470,(120,220,140))]
for c in cars:
    c.update(dt, bounds)
    c.draw(screen_surface)`}),i.jsx(j,{language:"python",children:`# Столкновение
if pygame.Rect(int(car.x), int(car.y), car.w, car.h).colliderect(pygame.Rect(80,360,120,80)):
    car.color = (250, 100, 80)`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsx("li",{children:"Рисование «вразнобой»: нарушен порядок слоёв, объекты перекрываются неправильно."}),i.jsx("li",{children:"Слишком много дублирования кода — забыли вынести в функции/классы."}),i.jsxs("li",{children:["Жёстко забитые координаты без ",i.jsx("code",{children:"pos"}),"/",i.jsx("code",{children:"scale"})," — префаб «негибкий»."]}),i.jsx("li",{children:"Плавающие значения без округления при рисовании — «дрожащие» пиксели."})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m07.zip",children:"m07.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m07.zip",children:"m07.zip"})]})]})})]})}function sf(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Разобрать ",i.jsx("code",{children:"pygame.Rect"}),": ключевые атрибуты позиционирования (",i.jsx("code",{children:"left/top/right/bottom"}),", ",i.jsx("code",{children:"center"}),", ",i.jsx("code",{children:"size"}),"), «якоря» (",i.jsx("code",{children:"topleft"}),", ",i.jsx("code",{children:"midright"}),", и др.), а также методы ",i.jsx("code",{children:"move[_ip]"}),", ",i.jsx("code",{children:"inflate[_ip]"}),", ",i.jsx("code",{children:"clamp[_ip]"}),", проверку столкновений (",i.jsx("code",{children:"collidepoint"}),", ",i.jsx("code",{children:"colliderect"}),")."]})}),i.jsxs(y,{title:"Ключевые атрибуты и «якоря»",children:[i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("code",{children:"x, y, w, h"})," — базовые поля (ширина/высота можно читать как ",i.jsx("code",{children:"rect.width/rect.height"})," или ",i.jsx("code",{children:"rect.w/rect.h"}),")."]}),i.jsxs("li",{children:[i.jsx("code",{children:"left, top, right, bottom"})," — границы прямоугольника."]}),i.jsxs("li",{children:[i.jsx("code",{children:"center, centerx, centery"})," — центр."]}),i.jsxs("li",{children:[i.jsx("code",{children:"size"})," — кортеж ",i.jsx("code",{children:"(w, h)"}),"."]}),i.jsxs("li",{children:[i.jsx("code",{children:"topleft"}),", ",i.jsx("code",{children:"topright"}),", ",i.jsx("code",{children:"bottomleft"}),", ",i.jsx("code",{children:"bottomright"}),", ",i.jsx("code",{children:"midtop"}),", ",i.jsx("code",{children:"midright"}),", ",i.jsx("code",{children:"midbottom"}),", ",i.jsx("code",{children:"midleft"})," — якорные точки."]})]}),i.jsx(j,{language:"python",children:`rect = pygame.Rect(0, 0, 120, 80)
rect.center = (450, 300)          # выравнивание по центру
rect.topright = (880, 20)         # правый верх с отступом
print(rect.left, rect.top, rect.size)`})]}),i.jsx(y,{title:"Перемещение и изменение размера",children:i.jsx(j,{language:"python",children:`rect.move(dx, dy)      # -> новый Rect (исходный не меняется)
rect.move_ip(dx, dy)   # изменяет rect на месте
rect.inflate(dw, dh)   # -> новый Rect, увеличенный на dw/dh
rect.inflate_ip(dw, dh)# изменяет текущий на месте
rect.clamp(bounds)     # -> новый Rect, зажатый в пределах bounds
rect.clamp_ip(bounds)  # зажимает текущий на месте`})}),i.jsx(y,{title:"Проверка столкновений",children:i.jsx(j,{language:"python",children:`rect.collidepoint(mouse_pos)      # точка внутри?
rect.colliderect(other_rect)       # пересекаются ли два прямоугольника?
rect.contains(other_rect)          # полностью ли внутри?
rect.clip(other_rect)              # пересечение (Rect)
rect.union(other_rect)             # наименьший Rect, покрывающий оба`})}),i.jsx(y,{title:"Собранный пример: движение, якоря, отскок от краёв",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_width, screen_height = 900, 600
screen_surface = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Rect — базовая практика')
clock = pygame.time.Clock()
font = pygame.font.SysFont(None, 20)

player = pygame.Rect(0, 0, 80, 50)
player.center = (screen_width//2, screen_height//2)

target = pygame.Rect(0, 0, 120, 80)
target.topright = (screen_width - 20, 20)

speed = 200.0

def clamp_ip(rect: pygame.Rect, bounds: pygame.Rect) -> None:
    rect.clamp_ip(bounds)

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            player.center = event.pos
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_i: player.inflate_ip(20, 10)
            if event.key == pygame.K_o: player.inflate_ip(-20, -10)

    keys = pygame.key.get_pressed()
    dx = (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * speed * dt
    dy = (keys[pygame.K_DOWN] - keys[pygame.K_UP]) * speed * dt
    player.move_ip(dx, dy)

    clamp_ip(player, screen_surface.get_rect())
    collides = player.colliderect(target)

    screen_surface.fill((24,26,32))
    for x in range(0, screen_width, 50):
        pygame.draw.line(screen_surface, (45,50,62), (x, 0), (x, screen_height), 1)
    for y in range(0, screen_height, 50):
        pygame.draw.line(screen_surface, (45,50,62), (0, y), (screen_width, y), 1)

    pygame.draw.rect(screen_surface, (80,120,220), target, 2, border_radius=8)
    pygame.draw.rect(screen_surface, (200,200,220), player, 0, border_radius=10)
    pygame.draw.rect(screen_surface, (80,200,120) if collides else (220,90,90), player, 3, border_radius=10)

    info = [
        f'x={player.x} y={player.y} w={player.w} h={player.h}',
        f'left={player.left} top={player.top} right={player.right} bottom={player.bottom}',
        f'center={player.center} size={player.size} midtop={player.midtop} midright={player.midright}',
        f'collides={collides}  |  arrows: move  |  I/O: resize  |  click: center move'
    ]
    for i, msg in enumerate(info):
        screen_surface.blit(font.render(msg, True, (235,235,240)), (10, 10 + i*18))

    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Маркер якорей:"})," отрисуй точки в ",i.jsx("code",{children:"topleft"}),", ",i.jsx("code",{children:"center"}),", ",i.jsx("code",{children:"bottomright"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Привязка к углу:"})," по клавише ",i.jsx("kbd",{children:"1"}),"/",i.jsx("kbd",{children:"2"}),"/",i.jsx("kbd",{children:"3"}),"/",i.jsx("kbd",{children:"4"})," привязывай ",i.jsx("code",{children:"player_rect"})," к углам экрана через ",i.jsx("code",{children:"topleft/topright/bottomleft/bottomright"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Пересечение:"})," рисуй область ",i.jsx("code",{children:"player.clip(target)"})," другим цветом."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Union:"})," визуализируй ",i.jsx("code",{children:"player.union(target)"})," как «рамку охвата»."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Сохранение центра:"})," изменяй размер через ",i.jsx("code",{children:"inflate"})," так, чтобы центр оставался на месте (подсказка: сохраняй ",i.jsx("code",{children:"old_center"}),", потом восстанавливай)."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# 1) маркеры
for p in [rect.topleft, rect.center, rect.bottomright]:
    pygame.draw.circle(screen, (255,220,120), p, 3, 0)`}),i.jsx(j,{language:"python",children:`# 3) пересечение
overlap = player.clip(target)
if overlap.w > 0 and overlap.h > 0:
    pygame.draw.rect(screen_surface, (80,200,180), overlap, 0)`}),i.jsx(j,{language:"python",children:`# 5) сохранить центр
old_center = player.center
player = player.inflate(40, 20)
player.center = old_center`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Сдвигать ",i.jsx("code",{children:"x/y"}),", когда нужно задать якорь (например, ",i.jsx("code",{children:"topright"}),") — проще и надёжнее работать с «якорями»."]}),i.jsxs("li",{children:["Изменять размер через ",i.jsx("code",{children:"w/h"})," вручную — лучше ",i.jsx("code",{children:"inflate[_ip]"}),"."]}),i.jsxs("li",{children:["Двигать на «пиксели за кадр» — скорость зависит от FPS. Используй ",i.jsx("code",{children:"dt"}),"."]}),i.jsxs("li",{children:["Забыть ограничить ",i.jsx("code",{children:"Rect"})," границами — объект уходит за экран."]})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m08.zip",children:"m08.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m08.zip",children:"m08.zip"})]})]})})]})}function af(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsx("p",{children:"Реализовать движение простых фигур: прямоугольника и круга. Управление с клавиатуры, перетаскивание мышью, нормализация диагонали, отскоки от стен и ограничение области."})}),i.jsx(y,{title:"Прямоугольник: управление стрелками + delta-time",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption('Движение — прямоугольник')
clock = pygame.time.Clock()

player = pygame.Rect(0, 0, 100, 60)
player.center = (W//2, H//2)
PLAYER_SPEED = 260.0  # пикс/сек

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    # Нормализация диагонали
    keys = pygame.key.get_pressed()
    vx = (1 if keys[pygame.K_RIGHT] else 0) - (1 if keys[pygame.K_LEFT] else 0)
    vy = (1 if keys[pygame.K_DOWN] else 0) - (1 if keys[pygame.K_UP] else 0)

    length = (vx*vx + vy*vy) ** 0.5
    if length > 0:
        vx /= length; vy /= length

    player.move_ip(vx * PLAYER_SPEED * dt, vy * PLAYER_SPEED * dt)
    player.clamp_ip(screen.get_rect())

    screen.fill((22,24,30))
    pygame.draw.rect(screen, (200,200,220), player, 0, border_radius=10)
    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsx(y,{title:"Круг: движение по скорости (vx, vy) и отскоки",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption('Движение — круг и отскоки')
clock = pygame.time.Clock()

pos_x, pos_y = 200.0, 120.0
vel_x, vel_y = 220.0, 160.0
R = 22

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    # движение
    pos_x += vel_x * dt
    pos_y += vel_y * dt

    # отскоки
    if pos_x - R < 0: pos_x = R; vel_x *= -1
    if pos_x + R > W: pos_x = W - R; vel_x *= -1
    if pos_y - R < 0: pos_y = R; vel_y *= -1
    if pos_y + R > H: pos_y = H - R; vel_y *= -1

    screen.fill((22,24,30))
    pygame.draw.circle(screen, (255, 190, 60), (int(pos_x), int(pos_y)), R)
    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsx(y,{title:"Перетаскивание мышью (drag & drop)",children:i.jsx(j,{language:"python",children:`dragging = False
drag_offset_x = 0
drag_offset_y = 0

for event in pygame.event.get():
    if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 and player.collidepoint(event.pos):
        dragging = True
        drag_offset_x = event.pos[0] - player.centerx
        drag_offset_y = event.pos[1] - player.centery
    if event.type == pygame.MOUSEBUTTONUP and event.button == 1:
        dragging = False
    if event.type == pygame.MOUSEMOTION and dragging:
        player.center = (event.pos[0] - drag_offset_x, event.pos[1] - drag_offset_y)`})}),i.jsx(y,{title:"Собранный пример: всё вместе",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption('Движение — сборка')
clock = pygame.time.Clock()
font = pygame.font.SysFont(None, 20)

player = pygame.Rect(0, 0, 100, 60)
player.center = (W//2, H//2)
PLAYER_SPEED = 280.0

ball_pos = pygame.Vector2(200, 120)
ball_vel = pygame.Vector2(220, 160)
BALL_R = 22

dragging = False
drag_offset = pygame.Vector2(0, 0)

def draw_grid(surface: pygame.Surface, step: int = 50):
    for x in range(0, W, step): pygame.draw.line(surface, (44,48,58), (x, 0), (x, H), 1)
    for y in range(0, H, step): pygame.draw.line(surface, (44,48,58), (0, y), (W, y), 1)

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 and player.collidepoint(event.pos):
            dragging = True
            drag_offset = pygame.Vector2(event.pos) - pygame.Vector2(player.center)
        elif event.type == pygame.MOUSEBUTTONUP and event.button == 1:
            dragging = False
        elif event.type == pygame.MOUSEMOTION and dragging:
            player.center = (event.pos[0] - drag_offset.x, event.pos[1] - drag_offset.y)

    # клавиши + нормализация
    keys = pygame.key.get_pressed()
    v = pygame.Vector2(
        (1 if keys[pygame.K_RIGHT] else 0) - (1 if keys[pygame.K_LEFT] else 0),
        (1 if keys[pygame.K_DOWN] else 0) - (1 if keys[pygame.K_UP] else 0)
    )
    if v.length_squared() > 0:
        v = v.normalize()
        player.move_ip(v.x * PLAYER_SPEED * dt, v.y * PLAYER_SPEED * dt)

    player.clamp_ip(screen.get_rect())

    # круг
    ball_pos += ball_vel * dt
    if ball_pos.x - BALL_R < 0: ball_pos.x = BALL_R; ball_vel.x *= -1
    if ball_pos.x + BALL_R > W: ball_pos.x = W - BALL_R; ball_vel.x *= -1
    if ball_pos.y - BALL_R < 0: ball_pos.y = BALL_R; ball_vel.y *= -1
    if ball_pos.y + BALL_R > H: ball_pos.y = H - BALL_R; ball_vel.y *= -1

    screen.fill((22, 24, 30))
    draw_grid(screen, 50)

    pygame.draw.rect(screen, (200, 200, 220), player, 0, border_radius=10)
    pygame.draw.rect(screen, (90, 180, 255), player, 3, border_radius=10)
    pygame.draw.circle(screen, (255, 190, 60), (int(ball_pos.x), int(ball_pos.y)), BALL_R)

    info = [
        'Стрелки — движение, ЛКМ — перетаскивание',
        'Диагональ нормализована, мяч отскакивает от стен'
    ]
    for i, msg in enumerate(info):
        screen.blit(pygame.font.SysFont(None, 20).render(msg, True, (235,235,240)), (10, 10 + i*18))

    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Трение:"})," хранить скорость игрока как вектор; при отпускании клавиш затухать умножением на 0.9 каждый кадр."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Диагональ:"})," обязательно нормализовать, иначе по диагонали быстрее."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Ускорение:"})," при удержании ",i.jsx("kbd",{children:"SHIFT"})," умножать скорость на 1.5."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Отскоки круга:"})," добавить коэффициент упругости 0.9 — мяч затухает."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Перетаскивание:"})," запретить перетаскивание вне экрана (после изменения центра — ",i.jsx("code",{children:"clamp_ip"}),")."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# Трение
if v.length_squared() == 0:
    stored_vel *= 0.9
    if stored_vel.length() < 5: stored_vel.update(0,0)`}),i.jsx(j,{language:"python",children:`# Ускорение
speed = BASE_SPEED * (1.5 if keys[pygame.K_LSHIFT] or keys[pygame.K_RSHIFT] else 1.0)`}),i.jsx(j,{language:"python",children:`# Упругость
bounce_ball(ball_pos, ball_vel, BALL_R, screen.get_rect(), damp=0.9)`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsx("li",{children:"Считать пиксели «за кадр», а не «за секунду × dt» — скорость будет зависеть от FPS."}),i.jsx("li",{children:"Не нормализовать диагональ — по диагонали объект уходит быстрее."}),i.jsx("li",{children:"Перетаскивание без учёта смещения — «прыжок» объекта под курсор."}),i.jsx("li",{children:"Забыть ограничить область — объект уезжает за экран."})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m09.zip",children:"m09.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m09.zip",children:"m09.zip"})]})]})})]})}function of(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Загрузка изображений, прозрачность (",i.jsx("code",{children:"convert_alpha"}),"), позиционирование через ",i.jsx("code",{children:"Rect"}),", масштабирование, отражение, поворот (градусы), простая анимация и движение."]})}),i.jsxs(y,{title:"Загрузка изображений и прозрачность",children:[i.jsx(j,{language:"python",children:`img = pygame.image.load('assets/player.png').convert_alpha()
rect = img.get_rect(center=(450, 300))
screen_surface.blit(img, rect)`}),i.jsxs("p",{className:"text-sm text-gray-500",children:[i.jsx("code",{children:"convert_alpha()"})," ускоряет отрисовку и сохраняет прозрачность PNG. Если файла нет — обработай исключение и используй «заглушку»."]})]}),i.jsxs(y,{title:"Масштабирование/отражение/поворот",children:[i.jsx(j,{language:"python",children:`scaled = pygame.transform.scale(img, (w, h))                   # масштаб
flipped = pygame.transform.flip(img, True, False)              # отражение по X
rotated = pygame.transform.rotate(img, angle_deg)              # поворот (против часовой)
rotated2 = pygame.transform.rotozoom(img, -angle_deg, 1.0)     # поворот по часовой, c масштабом`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Угол в градусах. Положительный угол в ",i.jsx("code",{children:"rotate"})," — против часовой стрелки. Для «по часовой» умножай на -1 или используй ",i.jsx("code",{children:"rotozoom(..., -angle, ...)"}),"."]})]}),i.jsx(y,{title:"Движение и направление (flip по X)",children:i.jsx(j,{language:"python",children:`facing = 1  # 1 — вправо, -1 — влево
frame = player_img if facing > 0 else pygame.transform.flip(player_img, True, False)
screen_surface.blit(frame, frame.get_rect(center=player_rect.center))`})}),i.jsx(y,{title:"Собранный пример: фон + игрок + вращающийся объект",children:i.jsx(j,{language:"python",children:`import pygame, sys, os
pygame.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption('Изображения — сборка')
clock = pygame.time.Clock()

def load_image(path: str) -> pygame.Surface:
    try:
        return pygame.image.load(path).convert_alpha()
    except Exception:
        s = pygame.Surface((80,60), pygame.SRCALPHA)
        s.fill((200,80,80)); pygame.draw.rect(s, (240,240,240), s.get_rect(), 2)
        return s

bg = load_image('assets/bg.png')
player = load_image('assets/player.png')
ball = load_image('assets/ball.png')

bg = pygame.transform.scale(bg, (W, H))

player_rect = player.get_rect(center=(W//2, H-90))
ball_rect = ball.get_rect(center=(W//2, 120))

facing = 1
angle = 0.0
ANGLE_SPEED = 120.0
SPEED = 280.0

is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False

    keys = pygame.key.get_pressed()
    vx = (1 if keys[pygame.K_RIGHT] else 0) - (1 if keys[pygame.K_LEFT] else 0)
    vy = (1 if keys[pygame.K_DOWN] else 0) - (1 if keys[pygame.K_UP] else 0)
    v = pygame.Vector2(vx, vy)
    if v.length_squared() > 0:
        v = v.normalize()
        facing = 1 if v.x >= 0 else -1
        player_rect.move_ip(v.x*SPEED*dt, v.y*SPEED*dt)
        player_rect.clamp_ip(screen.get_rect())

    angle += ANGLE_SPEED * dt

    screen.blit(bg, (0,0))

    player_frame = player if facing>0 else pygame.transform.flip(player, True, False)
    screen.blit(player_frame, player_frame.get_rect(center=player_rect.center))

    rotated = pygame.transform.rotozoom(ball, -angle, 1.0)
    screen.blit(rotated, rotated.get_rect(center=ball_rect.center))

    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsxs(y,{title:"Анимация спрайта (кадры)",children:[i.jsx(j,{language:"python",children:`frames = [pygame.image.load(f'assets/player_frames/player_{i}.png').convert_alpha() for i in range(1,5)]
frame_index = 0
frame_time = 0.0
FRAME_DURATION = 0.12

frame_time += dt
if frame_time >= FRAME_DURATION:
    frame_time -= FRAME_DURATION
    frame_index = (frame_index + 1) % len(frames)

current = frames[frame_index]`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Папка кадров: ",i.jsx("code",{children:"assets/player_frames/player_1.png ... player_4.png"}),". Если нет — используй один PNG."]})]}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Путь к ассетам:"})," вынести базовый путь в переменную и использовать ",i.jsx("code",{children:"os.path.join"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Flip по направлению:"})," отражать спрайт по X при движении влево."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Поворот:"})," сделать вращающийся объект со скоростью 90–180°/с."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Анимация:"})," переключать кадры каждые 0.1–0.15 с."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Коллизии:"})," проверить пересечение ",i.jsx("code",{children:"Rect"})," игрока и вращающегося объекта."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# Угол: градусы → визуально по часовой
rot = pygame.transform.rotozoom(ball_img, -angle_deg, 1.0)`}),i.jsx(j,{language:"python",children:`# Безопасная загрузка
def load_image(path):
    try: return pygame.image.load(path).convert_alpha()
    except: return pygame.Surface((64,64), pygame.SRCALPHA)`}),i.jsx(j,{language:"python",children:`# Коллизия
if player_rect.colliderect(rotated.get_rect(center=ball_rect.center)):
    print('hit!')`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Не используешь ",i.jsx("code",{children:"convert_alpha()"})," — фон PNG отрисовывается медленно/непрозрачно."]}),i.jsx("li",{children:"Пытаешься поворачивать уже отмасштабированный и искажённый кадр по много раз — накапливаются артефакты. Всегда вращай исходный кадр."}),i.jsxs("li",{children:["Забываешь пересчитать ",i.jsx("code",{children:"rect"})," после поворота (",i.jsx("code",{children:"get_rect(center=...)"}),")."]}),i.jsxs("li",{children:["Некорректные пути к файлам — размещай ассеты в ",i.jsx("code",{children:"assets/"}),"."]})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m10.zip",children:"m10.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m10.zip",children:"m10.zip"})]})]})})]})}function uf(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Подключить звук: фоновая музыка через ",i.jsx("code",{children:"pygame.mixer.music"}),", эффекты ",i.jsx("code",{children:"Sound"})," на свободных каналах, управление громкостью с клавиатуры, пауза/стоп/затухание."]})}),i.jsxs(y,{title:"Инициализация микшера",children:[i.jsx(j,{language:"python",children:`pygame.mixer.pre_init(44100, -16, 2, 512)  # частота, глубина, каналы, буфер
pygame.init()
pygame.mixer.init()`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Рекомендуется вызывать ",i.jsx("code",{children:"pre_init"})," до ",i.jsx("code",{children:"pygame.init()"}),". Буфер 512–1024 обычно даёт хорошую задержку без щелчков."]})]}),i.jsx(y,{title:"Фоновая музыка (music)",children:i.jsx(j,{language:"python",children:`pygame.mixer.music.load('assets/sounds/music.ogg')
pygame.mixer.music.set_volume(0.6)  # 0.0..1.0
pygame.mixer.music.play(-1)         # -1 — зациклить
# Пауза/продолжение/стоп/затухание:
pygame.mixer.music.pause()
pygame.mixer.music.unpause()
pygame.mixer.music.stop()
pygame.mixer.music.fadeout(1200)`})}),i.jsxs(y,{title:"Эффекты (Sound) и каналы",children:[i.jsx(j,{language:"python",children:`click = pygame.mixer.Sound('assets/sounds/click.wav')
jump  = pygame.mixer.Sound('assets/sounds/jump.wav')
boom  = pygame.mixer.Sound('assets/sounds/explosion.wav')

pygame.mixer.set_num_channels(16)
channel = pygame.mixer.find_channel(True)  # True — выделить, если занято
channel.play(click)`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Можно хранить несколько звуков и проигрывать их параллельно на разных каналах. Громкость каждого звука: ",i.jsx("code",{children:"Sound.set_volume()"}),"."]})]}),i.jsx(y,{title:"Клавиши управления (пример)",children:i.jsx(j,{language:"python",children:`if event.type == pygame.KEYDOWN:
    if event.key == pygame.K_m:   # play/stop
        pygame.mixer.music.stop() if pygame.mixer.music.get_busy() else pygame.mixer.music.play(-1)
    if event.key == pygame.K_p:   # pause/unpause
        pygame.mixer.music.pause() if pygame.mixer.music.get_busy() else pygame.mixer.music.unpause()
    if event.key == pygame.K_f:   # fadeout
        pygame.mixer.music.fadeout(1000)`})}),i.jsx(y,{title:"Собранный пример: музыка + SFX + громкость",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.mixer.pre_init(44100, -16, 2, 512)
pygame.init(); pygame.mixer.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption('Звук — сборка')
clock = pygame.time.Clock()
font = pygame.font.SysFont(None, 22)

MUSIC = 'assets/sounds/music.ogg'
SFX = {'1':'assets/sounds/click.wav','2':'assets/sounds/jump.wav','3':'assets/sounds/explosion.wav'}

music_volume = 0.6
sfx_volume = 0.8

# Загрузка
try:
    pygame.mixer.music.load(MUSIC)
    pygame.mixer.music.set_volume(music_volume)
    pygame.mixer.music.play(-1)
except Exception as e:
    print('music load:', e)

sfx = {}
for k, p in SFX.items():
    try:
        s = pygame.mixer.Sound(p); s.set_volume(sfx_volume); sfx[k] = s
    except Exception as e:
        print('sfx load:', p, e)

pygame.mixer.set_num_channels(16)

def clamp(x): return max(0.0, min(1.0, x))

running = True
while running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT: running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_m:
                pygame.mixer.music.stop() if pygame.mixer.music.get_busy() else pygame.mixer.music.play(-1)
            if event.key == pygame.K_p:
                pygame.mixer.music.pause() if pygame.mixer.music.get_busy() else pygame.mixer.music.unpause()
            if event.key == pygame.K_s:
                pygame.mixer.music.stop()
            if event.key == pygame.K_f:
                pygame.mixer.music.fadeout(1200)

            if event.key in (pygame.K_EQUALS, pygame.K_PLUS):  # +
                music_volume = clamp(music_volume + 0.05); pygame.mixer.music.set_volume(music_volume)
            if event.key == pygame.K_MINUS:                    # -
                music_volume = clamp(music_volume - 0.05); pygame.mixer.music.set_volume(music_volume)

            if event.key == pygame.K_LEFTBRACKET:              # [
                sfx_volume = clamp(sfx_volume - 0.05)
                for snd in sfx.values(): snd.set_volume(sfx_volume)
            if event.key == pygame.K_RIGHTBRACKET:             # ]
                sfx_volume = clamp(sfx_volume + 0.05)
                for snd in sfx.values(): snd.set_volume(sfx_volume)

            if event.unicode in sfx:
                ch = pygame.mixer.find_channel(True)
                if ch: ch.play(sfx[event.unicode])

    screen.fill((26,28,34))
    lines = [
        'M — play/stop, P — pause/unpause, S — stop, F — fadeout',
        '[ / ] — SFX volume, +/- — music volume, 1/2/3 — SFX',
        f'music: {"busy" if pygame.mixer.music.get_busy() else "stopped"} | vol={music_volume:.2f} | sfx vol={sfx_volume:.2f}'
    ]
    for i, msg in enumerate(lines):
        screen.blit(font.render(msg, True, (235,235,240)), (10, 10 + i*22))
    pygame.display.flip()

pygame.quit(); sys.exit()`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Fade-in:"})," запусти музыку с «въездом»: ",i.jsx("code",{children:"pygame.mixer.music.play(-1, fade_ms=1500)"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Queue:"})," после текущего трека поставь следующий через ",i.jsx("code",{children:"pygame.mixer.music.queue(...)"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Каналы:"})," сохранение ссылки на канал и проверка ",i.jsx("code",{children:"Channel.get_busy()"})," — не перезапускай звук, если он ещё идёт."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Громкость по сценам:"})," сделай функцию-помощник, которая плавно меняет громкость музыки от текущей до целевой за N миллисекунд."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Баланс:"})," попробуй имитировать «панораму»: воспроизводи звук на двух каналах с разной громкостью левого/правого (простейшая стерео-идея)."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# Fade-in музыки
pygame.mixer.music.play(-1, fade_ms=1500)`}),i.jsx(j,{language:"python",children:`# Очередь следующего трека
pygame.mixer.music.queue('assets/sounds/next.ogg')`}),i.jsx(j,{language:"python",children:`# Канал и занятость
channel = pygame.mixer.find_channel(True)
if channel and not channel.get_busy():
    channel.play(click)`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Не вызван ",i.jsx("code",{children:"pre_init"})," — щелчки/большая задержка."]}),i.jsxs("li",{children:["Неподходящий формат файла. Для музыки старайся ",i.jsx("code",{children:".ogg"}),", для коротких эффектов — ",i.jsx("code",{children:".wav"}),"."]}),i.jsxs("li",{children:["Не проверяется, загружен ли файл — добавь ",i.jsx("code",{children:"try/except"}),"."]}),i.jsx("li",{children:"Слишком громкий общий уровень — клиппинг (искажения). Держи громкости в пределах 0.5–0.8."})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m11.zip",children:"m11.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m11.zip",children:"m11.zip"})]})]})})]})}function cf(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Корректно закрывать игру: обработка события ",i.jsx("code",{children:"pygame.QUIT"}),", выход по ",i.jsx("kbd",{children:"ESC"}),", различия между ",i.jsx("code",{children:"break/return"}),", ",i.jsx("code",{children:"pygame.quit()"}),", ",i.jsx("code",{children:"sys.exit()"}),", и необязательное подтверждение выхода."]})}),i.jsx(y,{title:"Базовый шаблон закрытия",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()

screen_surface = pygame.display.set_mode((900, 600))
pygame.display.set_caption('Закрытие окна — базовый шаблон')
clock = pygame.time.Clock()

is_running: bool = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
            is_running = False

    screen_surface.fill((26,28,34))
    pygame.display.flip()

pygame.quit()
sys.exit()`})}),i.jsx(y,{title:"QUIT и ESC: варианты",children:i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"QUIT"})," приходит при клике по крестику/Alt+F4 — завершай главный цикл."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"ESC"})," — удобный «горячий выход». Можно сделать подтверждение, а можно закрывать сразу."]})]})}),i.jsx(y,{title:"Подтверждение выхода (простое окно)",children:i.jsx(j,{language:"python",children:`show_confirm: bool = False

for event in pygame.event.get():
    if event.type == pygame.QUIT:
        show_confirm = True
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_ESCAPE:
            show_confirm = True
        if show_confirm and event.key == pygame.K_SPACE:
            is_running = False
        if show_confirm and event.key == pygame.K_n:
            show_confirm = False

# рендер окна подтверждения (прямоугольник с текстом)`})}),i.jsx(y,{title:"Что делают break/return/pygame.quit()/sys.exit()",children:i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("code",{children:"break"})," — выходит из текущего цикла ",i.jsx("em",{children:"while"}),"."]}),i.jsxs("li",{children:[i.jsx("code",{children:"return"})," — завершает текущую функцию (например, ",i.jsx("code",{children:"main()"}),")."]}),i.jsxs("li",{children:[i.jsx("code",{children:"pygame.quit()"})," — корректно выгружает подсистемы PyGame (звук/видео)."]}),i.jsxs("li",{children:[i.jsx("code",{children:"sys.exit()"})," — завершает процесс Python (в некоторых IDE не обязателен, но полезен)."]})]})}),i.jsx(y,{title:"Собранный пример (с подтверждением)",children:i.jsx(j,{language:"python",children:`# -*- coding: utf-8 -*-
import pygame, sys

def main() -> None:
    pygame.init()
    W, H = 900, 600
    screen = pygame.display.set_mode((W, H))
    pygame.display.set_caption('Закрытие — подтверждение')
    clock = pygame.time.Clock()
    font = pygame.font.SysFont(None, 24)

    is_running = True
    show_confirm = False

    while is_running:
        dt = clock.tick(60) / 1000.0
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                show_confirm = True
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    show_confirm = True
                elif show_confirm and event.key == pygame.K_SPACE:
                    is_running = False
                elif show_confirm and event.key == pygame.K_n:
                    show_confirm = False

        screen.fill((26,28,34))

        if show_confirm:
            box = pygame.Rect(0, 0, 520, 160); box.center = (W//2, H//2)
            pygame.draw.rect(screen, (40,46,62), box, 0, border_radius=12)
            pygame.draw.rect(screen, (120,160,220), box, 2, border_radius=12)
            t1 = font.render('Выйти из приложения?', True, (235,235,240))
            t2 = font.render('SPACE — да, N — нет', True, (200,210,220))
            screen.blit(t1, (box.x+24, box.y+32))
            screen.blit(t2, (box.x+24, box.y+78))

        pygame.display.flip()

    pygame.quit()
    sys.exit()

if __name__ == '__main__':
    main()`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Двойной ESC:"})," первый ",i.jsx("kbd",{children:"ESC"})," — показать диалог, второй — подтвердить выход."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Таймаут:"})," после показа диалога дать 5 секунд на ответ, затем отменить."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Красивая рамка:"})," добавь полупрозрачный тёмный фон за окном подтверждения."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Оптимизация событий:"})," разреши только ",i.jsx("code",{children:"QUIT"})," и клавиатуру через ",i.jsx("code",{children:"pygame.event.set_allowed"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Лог при выходе:"})," выведи в консоль «Saving… Done!» перед ",i.jsx("code",{children:"pygame.quit()"}),"."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# Полупрозрачный фон под диалог
overlay = pygame.Surface((W,H), pygame.SRCALPHA)
overlay.fill((0,0,0,140))
screen.blit(overlay, (0,0))`}),i.jsx(j,{language:"python",children:`# Таймер для отмены диалога через 5 секунд
CONFIRM_OFF = pygame.USEREVENT + 1
pygame.time.set_timer(CONFIRM_OFF, 5000, loops=1)
# в обработчике: if event.type == CONFIRM_OFF: show_confirm = False`}),i.jsx(j,{language:"python",children:`# Разрешить только нужные события
pygame.event.set_allowed([pygame.QUIT, pygame.KEYDOWN, pygame.KEYUP])`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Забыть про ",i.jsx("code",{children:"pygame.quit()"})," — модуль может висеть в памяти."]}),i.jsxs("li",{children:["Вызывать ",i.jsx("code",{children:"sys.exit()"})," без выхода из игрового цикла — код после продолжает выполняться."]}),i.jsxs("li",{children:["Игнорировать ",i.jsx("code",{children:"QUIT"})," — окно «не закрывается» по крестику."]})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m12.zip",children:"m12.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m12.zip",children:"m12.zip"})]})]})})]})}function df(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Понять очередь событий ",i.jsx("code",{children:"pygame.event"})," и научиться работать с клавиатурой, мышью, колёсиком, таймерами (",i.jsx("code",{children:"set_timer"}),") и пользовательскими событиями (",i.jsx("code",{children:"USEREVENT"}),"), а также увидеть разницу между обработкой ",i.jsx("em",{children:"событий"})," и опросом состояний (",i.jsx("code",{children:"key.get_pressed()"}),")."]})}),i.jsxs(y,{title:"Очередь событий: базовый цикл",children:[i.jsx(j,{language:"python",children:`for event in pygame.event.get():
    if event.type == pygame.QUIT:
        is_running = False
    if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
        is_running = False`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["События приходят в очередь; если их не извлекать, окно «зависает». Для постоянных действий (бег, движение) удобнее параллельно опрашивать состояние клавиш: ",i.jsx("code",{children:"keys = pygame.key.get_pressed()"}),"."]})]}),i.jsx(y,{title:"Клавиатура: разовые vs удержание",children:i.jsx(j,{language:"python",children:`# Разовое: KEYDOWN/KEYUP
if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
    print('jump!')

# Удержание: get_pressed (каждый кадр)
keys = pygame.key.get_pressed()
dx = (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * speed * dt
dy = (keys[pygame.K_DOWN] - keys[pygame.K_UP]) * speed * dt
rect.move_ip(dx, dy)`})}),i.jsxs(y,{title:"Мышь: клики, движение, колесо",children:[i.jsx(j,{language:"python",children:`if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
    print('ЛКМ вниз', event.pos)
if event.type == pygame.MOUSEBUTTONUP and event.button == 1:
    print('ЛКМ вверх', event.pos)
if event.type == pygame.MOUSEMOTION:
    print('движение', event.pos, event.rel, event.buttons)
if event.type == pygame.MOUSEWHEEL:
    print('колесо', event.x, event.y)`}),i.jsxs("p",{className:"text-sm text-gray-500",children:[i.jsx("code",{children:"MOUSEWHEEL.y"})," положителен при прокрутке «к себе» (вверх) и отрицателен «от себя» (вниз)."]})]}),i.jsx(y,{title:"Таймеры и пользовательские события",children:i.jsx(j,{language:"python",children:`USEREVENT_SPAWN = pygame.USEREVENT + 1
USEREVENT_FIRE  = pygame.USEREVENT + 2

pygame.time.set_timer(USEREVENT_SPAWN, 1000)  # раз в 1000 мс
pygame.event.post(pygame.event.Event(USEREVENT_FIRE, {'power': 10}))  # постим своё событие

if event.type == USEREVENT_SPAWN:
    print('spawn tick!')
if event.type == USEREVENT_FIRE:
    print('FIRE with power', event.power)`})}),i.jsx(y,{title:"Собранный пример: клавиатура, мышь, колесо, таймер и свои события",children:i.jsx(j,{language:"python",children:`import pygame, sys, random
pygame.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption('События — сборка')
clock = pygame.time.Clock()
font = pygame.font.SysFont(None, 20)

drag_rect = pygame.Rect(0, 0, 160, 100)
drag_rect.center = (W//2, H//2)
dragging = False
drag_offset = pygame.Vector2(0, 0)
border_thickness = 4

USEREVENT_FIRE  = pygame.USEREVENT + 1
USEREVENT_SPAWN = pygame.USEREVENT + 2
USEREVENT_BLINK = pygame.USEREVENT + 3
pygame.time.set_timer(USEREVENT_BLINK, 500)   # мигание рамки

logs = []
def log(msg):
    logs.append(msg)
    if len(logs) > 8: logs.pop(0)

spawn_enabled = False
def toggle_spawn():
    global spawn_enabled
    spawn_enabled = not spawn_enabled
    pygame.time.set_timer(USEREVENT_SPAWN, 1000 if spawn_enabled else 0)
    log(f'SPAWN: {"ON" if spawn_enabled else "OFF"}')

is_running = True
blink = False
while is_running:
    dt = clock.tick(60) / 1000.0

    keys = pygame.key.get_pressed()
    v = pygame.Vector2((1 if keys[pygame.K_RIGHT] else 0)-(1 if keys[pygame.K_LEFT] else 0),
                       (1 if keys[pygame.K_DOWN] else 0)-(1 if keys[pygame.K_UP] else 0))
    if v.length_squared() > 0:
        v = v.normalize()
        drag_rect.move_ip(v.x*240*dt, v.y*240*dt)
        drag_rect.clamp_ip(screen.get_rect())

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            is_running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE: is_running = False
            elif event.key == pygame.K_SPACE:
                pygame.event.post(pygame.event.Event(USEREVENT_FIRE, {'power': random.randint(5,15)}))
                log('post FIRE')
            elif event.key == pygame.K_t:
                toggle_spawn()

        if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 and drag_rect.collidepoint(event.pos):
            dragging = True; drag_offset = pygame.Vector2(event.pos) - pygame.Vector2(drag_rect.center); log('drag start')
        elif event.type == pygame.MOUSEBUTTONUP and event.button == 1:
            if dragging: log('drag end'); dragging = False
        elif event.type == pygame.MOUSEMOTION and dragging:
            drag_rect.center = (event.pos[0] - drag_offset.x, event.pos[1] - drag_offset.y)

        if event.type == pygame.MOUSEWHEEL:
            border_thickness = max(1, min(12, border_thickness + event.y))
            log(f'wheel {event.y}: thickness={border_thickness}')

        if event.type == USEREVENT_SPAWN: log('SPAWN tick')
        if event.type == USEREVENT_BLINK: blink = not blink
        if event.type == USEREVENT_FIRE:  log(f'FIRE power={getattr(event,"power","?")}')

    screen.fill((24,26,32))
    pygame.draw.rect(screen, (70,120,210), drag_rect, 0, border_radius=12)
    pygame.draw.rect(screen, (220,230,255) if not blink else (255,120,120), drag_rect, border_thickness, border_radius=12)

    tips = ['ESC — выход | T — таймер SPAWN | SPACE — post FIRE',
            'Колесо — толщина рамки | Стрелки — сдвиг | ЛКМ — перетаскивание']
    for i, msg in enumerate(tips + logs[-8:]):
        screen.blit(font.render(msg, True, (235,235,240)), (10, 10 + i*20))

    pygame.display.flip()

pygame.quit(); sys.exit()`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Ограничение частоты событий:"})," выключать SPAWN через 5 с после включения (таймер «одним разом»)."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Двойной клик:"})," зафиксируй время последнего клика и определи «double click» (интервал < 250 мс)."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Горячие клавиши:"})," добавь ",i.jsx("kbd",{children:"Ctrl"}),"+",i.jsx("kbd",{children:"S"})," (сохранить) и ",i.jsx("kbd",{children:"Ctrl"}),"+",i.jsx("kbd",{children:"Q"})," (выйти)."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Пользовательское событие:"})," сделай ",i.jsx("code",{children:"USEREVENT_SCORE"})," и пость его каждые N очков."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Фильтрация:"})," разрешить только нужные типы: ",i.jsx("code",{children:"pygame.event.set_allowed([...])"}),"."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# Таймер один раз
ONCE = pygame.USEREVENT + 10
pygame.time.set_timer(ONCE, 5000, loops=1)`}),i.jsx(j,{language:"python",children:`# Ctrl+S / Ctrl+Q
mods = pygame.key.get_mods()
if event.type == pygame.KEYDOWN and (mods & pygame.KMOD_CTRL):
    if event.key == pygame.K_s: print('save')
    if event.key == pygame.K_q: is_running = False`}),i.jsx(j,{language:"python",children:`# set_allowed — пропускаем только нужные типы
pygame.event.set_allowed([pygame.QUIT, pygame.KEYDOWN, pygame.KEYUP, pygame.MOUSEBUTTONDOWN, pygame.MOUSEBUTTONUP, pygame.MOUSEMOTION, pygame.MOUSEWHEEL])`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsx("li",{children:"Не извлекать события — окно не откликается (зависает)."}),i.jsxs("li",{children:["Делать «бесконечные» действия через KEYDOWN вместо ",i.jsx("code",{children:"get_pressed()"}),"."]}),i.jsxs("li",{children:["Забывать про ",i.jsx("code",{children:"clamp_ip"})," — объект уезжает за пределы экрана при перетаскивании."]}),i.jsxs("li",{children:["Постить ",i.jsx("code",{children:"Event"})," без данных и пытаться читать атрибуты — проверяй через ",i.jsx("code",{children:"getattr"}),"."]})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m13.zip",children:"m13.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m13.zip",children:"m13.zip"})]})]})})]})}function pf(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Движение персонажа на картинках: ходьба влево/вправо, разворот спрайта, прыжок с гравитацией, анимация состояний (",i.jsx("code",{children:"idle"}),"/",i.jsx("code",{children:"run"}),"/",i.jsx("code",{children:"jump"}),"), базовые коллизии с платформами."]})}),i.jsxs(y,{title:"Структура ассетов (рекомендуется)",children:[i.jsx(j,{language:"text",children:`assets/
  bg.png
  character/
    idle_1.png  idle_2.png
    run_1.png   run_2.png   run_3.png   run_4.png
    jump.png`}),i.jsx("p",{className:"text-sm text-gray-500",children:"Если файлов нет — в примерах есть «заглушки», чтобы можно было запустить без ассетов."})]}),i.jsx(y,{title:"База: загрузка кадров и выбор по состоянию",children:i.jsx(j,{language:"python",children:`def load_frames(folder: str, names: list[str], fallback=(64,64)) -> list[pygame.Surface]:
    frames = []
    for n in names:
        try:
            frames.append(pygame.image.load(os.path.join(folder, n)).convert_alpha())
        except:
            s = pygame.Surface(fallback, pygame.SRCALPHA)
            s.fill((120,170,250)); pygame.draw.rect(s, (240,240,240), s.get_rect(), 2)
            frames.append(s)
    return frames

idle_frames = load_frames('assets/character', ['idle_1.png', 'idle_2.png'])
run_frames  = load_frames('assets/character', ['run_1.png','run_2.png','run_3.png','run_4.png'])
jump_frame  = pygame.image.load('assets/character/jump.png').convert_alpha()  # или заглушка`})}),i.jsxs(y,{title:"Позиционирование: midbottom и разворот по направлению",children:[i.jsx(j,{language:"python",children:`# pos — вектор "пяток" (midbottom)
frame = current_surface()
if facing < 0:
    frame = pygame.transform.flip(frame, True, False)
rect = frame.get_rect(midbottom=(int(pos.x), int(pos.y)))
screen_surface.blit(frame, rect)`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Привязка к ",i.jsx("code",{children:"midbottom"})," удобна: «ноги стоят на земле», и рост персонажа не влияет на уровень пола."]})]}),i.jsx(y,{title:"Физика: ходьба, прыжок, гравитация",children:i.jsx(j,{language:"python",children:`GRAVITY = 1800.0
MOVE_SPEED = 320.0
JUMP_SPEED = 700.0
GROUND_Y = 520

vel = pygame.Vector2(0, 0)
pos = pygame.Vector2(W//2, GROUND_Y)
on_ground = True

keys = pygame.key.get_pressed()
dirx = (1 if keys[pygame.K_d] or keys[pygame.K_RIGHT] else 0) - (1 if keys[pygame.K_a] or keys[pygame.K_LEFT] else 0)
vel.x = dirx * MOVE_SPEED
if dirx != 0: facing = 1 if dirx > 0 else -1

if (keys[pygame.K_SPACE] or keys[pygame.K_w] or keys[pygame.K_UP]) and on_ground:
    vel.y = -JUMP_SPEED; on_ground = False

vel.y += GRAVITY * dt
pos += vel * dt

if pos.y > GROUND_Y:  # «земля»
    pos.y = GROUND_Y; vel.y = 0; on_ground = True`})}),i.jsx(y,{title:"Анимационные состояния",children:i.jsx(j,{language:"python",children:`if not on_ground:
    state = 'jump'
elif abs(vel.x) > 1:
    state = 'run'
else:
    state = 'idle'

# Тайминги
FRAME_IDLE = 0.5
FRAME_RUN  = 0.1
frame_time += dt
if state == 'run' and frame_time >= FRAME_RUN:
    frame_time -= FRAME_RUN; frame_index = (frame_index + 1) % len(run_frames)
elif state == 'idle' and frame_time >= FRAME_IDLE:
    frame_time -= FRAME_IDLE; frame_index = (frame_index + 1) % len(idle_frames)`})}),i.jsx(y,{title:"Собранный пример (walking + jump)",children:i.jsx(j,{language:"python",children:`# Полный runnable-пример см. в финальном архиве.
# Ключевые элементы: загрузка кадров, midbottom-выравнивание, flip по направлению,
# физика (скорости, гравитация) и простой выбор кадра по состоянию.`})}),i.jsx(y,{title:"Платформы и коллизии (Rect)",children:i.jsx(j,{language:"python",children:`platforms = [pygame.Rect(100,460,200,20), pygame.Rect(420,400,160,20), pygame.Rect(640,500,180,20)]

# Детекция через Rect текущего кадра:
rect = current_surface().get_rect(midbottom=(int(pos.x), int(pos.y)))
# Сначала двигаем по X и проверяем столкновения, затем по Y — классический порядок.`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Двойной прыжок:"})," разрешить второй прыжок в воздухе (счётчик прыжков)."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Короткий/длинный прыжок:"})," при отпускании пробела раньше — уменьшать вертикальную скорость."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Атака:"})," добавить состояние ",i.jsx("code",{children:"attack"})," и отдельные кадры (блокировать управление на время анимации)."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Лестницы/трамплин:"})," прямоугольники особого типа: на лестнице отключать гравитацию; на пружине — задавать импульс вверх."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Хитбокс vs. видимая область:"})," использовать отдельный ",i.jsx("code",{children:"Rect"})," для коллизий (уже без «пушистых» волос и т.п.)."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# Двойной прыжок
max_jumps = 2; jumps_left = 2
if key_space_pressed and jumps_left > 0:
    vel.y = -JUMP_SPEED; jumps_left -= 1
if on_ground: jumps_left = max_jumps`}),i.jsx(j,{language:"python",children:`# Короткий прыжок (variable jump height)
if event.type == pygame.KEYUP and event.key == pygame.K_SPACE and vel.y < -200:
    vel.y = -200`}),i.jsx(j,{language:"python",children:`# Отдельный хитбокс
hitbox = pygame.Rect(0,0, rect.w*0.6, rect.h*0.9); hitbox.center = rect.center`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Привязка по левому верхнему углу: при смене кадра персонаж «подскакивает». Привязывай по ",i.jsx("code",{children:"midbottom"}),"."]}),i.jsx("li",{children:"Поворот уже повернутого кадра: артефакты и мыло. Всегда отражай исходный кадр."}),i.jsx("li",{children:"Неправильный порядок коллизий: смешивание X/Y приводит к «залипанию» в платформах."})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m14.zip",children:"m14.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m14.zip",children:"m14.zip"})]})]})})]})}function ff(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Управление вводом: клавиатура (",i.jsx("code",{children:"KEYDOWN/KEYUP"})," vs ",i.jsx("code",{children:"get_pressed()"}),"), модификаторы (Ctrl/Shift/Alt), мышь (клики, двойной клик, перетаскивание, колесо), а также базовый текстовый ввод через ",i.jsx("code",{children:"pygame.TEXTINPUT"}),"."]})}),i.jsxs(y,{title:"Клава: разовые события и удержание",children:[i.jsx(j,{language:"python",children:`# Разовое действие — KEYDOWN/KEYUP
for event in pygame.event.get():
    if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
        print('jump once')

# Удержание — каждый кадр по состоянию клавиш
keys = pygame.key.get_pressed()
dx = (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * speed * dt
dy = (keys[pygame.K_DOWN] - keys[pygame.K_UP]) * speed * dt`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Для непрерывных действий (движение) используй ",i.jsx("code",{children:"get_pressed()"}),". Для триггеров (прыжок, выстрел) — ",i.jsx("code",{children:"KEYDOWN"}),"."]})]}),i.jsx(y,{title:"Модификаторы: Ctrl/Shift/Alt",children:i.jsx(j,{language:"python",children:`mods = pygame.key.get_mods()
if (mods & pygame.KMOD_CTRL) and event.type == pygame.KEYDOWN and event.key == pygame.K_s:
    print('Ctrl+S')`})}),i.jsxs(y,{title:"Текстовый ввод (TEXTINPUT) + спец. клавиши",children:[i.jsx(j,{language:"python",children:`name = ""
for event in pygame.event.get():
    if event.type == pygame.TEXTINPUT:
        name += event.text              # добавляет локализованные символы
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_BACKSPACE: name = name[:-1]
        if event.key == pygame.K_RETURN:    print('entered:', name)`}),i.jsxs("p",{className:"text-sm text-gray-500",children:[i.jsx("code",{children:"TEXTINPUT"})," учитывает раскладку и язык. Для «командных» клавиш (Enter/Backspace/Arrows) продолжай использовать ",i.jsx("code",{children:"KEYDOWN"}),"."]})]}),i.jsx(y,{title:"Мышь: клики/двойной клик/перетаскивание/колесо",children:i.jsx(j,{language:"python",children:`last_click = 0
DOUBLE_MS = 250

if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
    now = pygame.time.get_ticks()
    is_double = (now - last_click) <= DOUBLE_MS
    last_click = now
    if rect.collidepoint(event.pos):
        dragging = True
        drag_offset = pygame.Vector2(event.pos) - rect.topleft
        if is_double: start_text_input()

if event.type == pygame.MOUSEMOTION and dragging:
    rect.topleft = (event.pos[0] - drag_offset.x, event.pos[1] - drag_offset.y)

if event.type == pygame.MOUSEBUTTONUP and event.button == 1:
    dragging = False

# Колесо — масштаб
if event.type == pygame.MOUSEBUTTONDOWN and event.button in (4,5):
    rect.inflate_ip(10 if event.button==4 else -10, 6 if event.button==4 else -6)`})}),i.jsx(y,{title:"Собранный пример (редактор прямоугольников)",children:i.jsx(j,{language:"python",children:`# Полный runnable-проект — в архиве. 
# Возможности: выбор ЛКМ, перетаскивание, двойной клик/ F2 — переименование, 
# стрелки — микросдвиг (Shift ускоряет), колесо — масштаб, Ctrl+D — дублирование, Ctrl+A — выделить все, DEL — удалить.`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Ограничитель перетаскивания:"})," при удержании ",i.jsx("kbd",{children:"Shift"})," двигать только по X, при ",i.jsx("kbd",{children:"Alt"})," — только по Y."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Прямоугольное выделение:"})," нарисуй «рамку выбора» при протаскивании правой кнопкой мыши; выбери все попавшие объекты."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Снап к сетке:"})," при отпускании ЛКМ округляй координаты к ближайшим 10 px."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"История действий:"})," добавь стек отмены (Ctrl+Z) — сохраняй копию списка перед изменением."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Тянущиеся края:"})," реализуй ресайз за углы (курсор над углом — меняется курсор/режим)."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# Ограничение направления при перетаскивании
mods = pygame.key.get_mods()
if mods & pygame.KMOD_SHIFT: new_pos.y = rect.y
if mods & pygame.KMOD_ALT:   new_pos.x = rect.x`}),i.jsx(j,{language:"python",children:`# Снап к сетке 10px
rect.x = round(rect.x / 10) * 10
rect.y = round(rect.y / 10) * 10`}),i.jsx(j,{language:"python",children:`# Рамка выделения
selecting = False; select_rect = pygame.Rect(0,0,0,0)
# on RMB down: selecting=True; select_rect.topleft=pos
# on motion: select_rect.size = (pos.x - select_rect.x, pos.y - select_rect.y)
# on up: для каждого box: if select_rect.colliderect(box.rect): box.selected=True`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Обрабатываешь набор символов через ",i.jsx("code",{children:"KEYDOWN"})," — не будет работать раскладка. Используй ",i.jsx("code",{children:"TEXTINPUT"}),"."]}),i.jsx("li",{children:"Перетаскивание без учёта смещения — «скачок» при начале драга."}),i.jsx("li",{children:"Не различаешь разовые события и удержание — движение «рывками»."})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m15.zip",children:"m15.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m15.zip",children:"m15.zip"})]})]})})]})}function gf(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["Разобраться со ",i.jsx("code",{children:"pygame.sprite"}),": как писать свои спрайты (",i.jsx("code",{children:"image"})," + ",i.jsx("code",{children:"rect"}),"), объединять их в группы (",i.jsx("code",{children:"Group"}),", ",i.jsx("code",{children:"GroupSingle"}),", ",i.jsx("code",{children:"LayeredUpdates"}),"), массово ",i.jsx("code",{children:"update"}),"/",i.jsx("code",{children:"draw"}),", и проверять столкновения (",i.jsx("code",{children:"spritecollide"}),", ",i.jsx("code",{children:"groupcollide"}),")."]})}),i.jsxs(y,{title:"Базовый спрайт: обязательные поля",children:[i.jsx(j,{language:"python",children:`class Player(pygame.sprite.Sprite):
    def __init__(self, pos):
        super().__init__()
        self.image = pygame.Surface((48,48), pygame.SRCALPHA)
        self.image.fill((90,170,250))
        self.rect = self.image.get_rect(center=pos)

    def update(self, dt: float):
        pass  # логика кадра`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Группы используют ",i.jsx("code",{children:"sprite.image"})," и ",i.jsx("code",{children:"sprite.rect"})," для отрисовки; метод ",i.jsx("code",{children:"update()"})," вызывается при ",i.jsx("code",{children:"group.update()"}),"."]})]}),i.jsxs(y,{title:"Группы и массовые операции",children:[i.jsx(j,{language:"python",children:`all_sprites = pygame.sprite.Group()
player_group = pygame.sprite.GroupSingle()
enemies = pygame.sprite.Group()

player_group.add(player); enemies.add(e1, e2)
all_sprites.add(player, e1, e2)

all_sprites.update(dt)
all_sprites.draw(screen_surface)`}),i.jsxs("p",{className:"text-sm text-gray-500",children:[i.jsx("code",{children:"GroupSingle"})," удобно держать для одного объекта (например, игрока). ",i.jsx("code",{children:"LayeredUpdates"})," даёт контроль слоёв."]})]}),i.jsx(y,{title:"Столкновения и удаление",children:i.jsx(j,{language:"python",children:`# sprite vs group
hits = pygame.sprite.spritecollide(player, enemies, dokill=False)

# group vs group
touch = pygame.sprite.groupcollide(enemies, coins, False, True)  # монеты исчезают

# удалить спрайт из всех групп:
coin.kill()`})}),i.jsx(y,{title:"Собранный пример: игрок, враги, монеты, слои",children:i.jsx(j,{language:"python",children:`import pygame, sys, random
pygame.init()

W, H = 900, 600
screen = pygame.display.set_mode((W, H))
clock = pygame.time.Clock()

class Player(pygame.sprite.Sprite):
    def __init__(self, pos):
        super().__init__()
        self.image = pygame.Surface((48,48), pygame.SRCALPHA); self.image.fill((90,170,250))
        self.rect = self.image.get_rect(center=pos)
        self.speed = 320.0
    def update(self, dt):
        keys = pygame.key.get_pressed()
        v = pygame.Vector2((1 if keys[pygame.K_RIGHT] else 0)-(1 if keys[pygame.K_LEFT] else 0),
                           (1 if keys[pygame.K_DOWN] else 0)-(1 if keys[pygame.K_UP] else 0))
        if v.length_squared() > 0: v = v.normalize(); self.rect.move_ip(v.x*self.speed*dt, v.y*self.speed*dt)
        self.rect.clamp_ip(screen.get_rect())

# см. полную версию в финальном архиве`})}),i.jsx(y,{title:"Практика — задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Жизни игрока:"})," при касании врага отнимать жизнь и делать короткую неуязвимость (таймер)."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Волны врагов:"})," когда все монеты собраны — добавить новую волну врагов/монет."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Уровни рисования:"})," переделать на ",i.jsx("code",{children:"LayeredUpdates"})," и поиграться со слоями (монеты под врагами, игрок поверх)."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Анимация монет:"})," «пульс» через масштабирование картинки в ",i.jsx("code",{children:"update"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Пули:"})," отдельная группа пуль, удаление при выходе за экран, ",i.jsx("code",{children:"groupcollide"})," с врагами."]})]})}),i.jsxs(y,{title:"Подсказки (фрагменты)",children:[i.jsx(j,{language:"python",children:`# Слои с LayeredUpdates
layers = pygame.sprite.LayeredUpdates()
layers.add(player, layer=10)
layers.add(enemy, layer=5)
layers.add(coin, layer=1)
layers.draw(screen)`}),i.jsx(j,{language:"python",children:`# Пересобираем rect после изменения image, сохраняя центр
center = sprite.rect.center
sprite.image = pygame.transform.smoothscale(sprite.image, (new_w, new_h))
sprite.rect = sprite.image.get_rect(center=center)`}),i.jsx(j,{language:"python",children:`# Неуязвимость
if invuln_time > 0: invuln_time -= dt`})]}),i.jsx(y,{title:"Частые ошибки",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Забыть задать ",i.jsx("code",{children:"image"})," или ",i.jsx("code",{children:"rect"})," — группа не сможет рисовать."]}),i.jsxs("li",{children:["Менять размер ",i.jsx("code",{children:"image"}),", но не пересчитывать ",i.jsx("code",{children:"rect"})," — «прыгает» позиция."]}),i.jsxs("li",{children:["Использовать ",i.jsx("code",{children:"Group.draw"})," без предварительного ",i.jsx("code",{children:"fill"})," экрана — смазывание следов."]}),i.jsxs("li",{children:["Коллизии по старому прямоугольнику — обновляй ",i.jsx("code",{children:"rect"})," до проверки."]})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m16.zip",children:"m16.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m16.zip",children:"m16.zip"})]})]})})]})}function hf(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"PyGame — Шпаргалка (итог)",children:i.jsxs("p",{children:["Сжатая выжимка по базовым темам: окно, цикл, FPS, цвета/ось координат, отрисовка, ",i.jsx("code",{children:"Rect"}),", движение, изображения/градусы, звук, события/таймеры, ввод, спрайты и группы. В конце — минимальный шаблон проекта."]})}),i.jsx(y,{title:"Окно, цикл, FPS",children:i.jsx(j,{language:"python",children:`import pygame, sys
pygame.init()
W, H = 900, 600
screen_surface = pygame.display.set_mode((W, H))
pygame.display.set_caption('PyGame App')
clock = pygame.time.Clock()
is_running = True
while is_running:
    dt = clock.tick(60) / 1000.0
    for event in pygame.event.get():
        if event.type == pygame.QUIT: is_running = False
        if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE: is_running = False
    screen_surface.fill((24,26,32))
    pygame.display.flip()
pygame.quit(); sys.exit()`})}),i.jsx(y,{title:"Координаты, цвета, примитивы",children:i.jsx(j,{language:"python",children:`# (0,0) — левый верх; X — вправо, Y — вниз; цвет — (R,G,B)
pygame.draw.line(screen_surface, (200,200,220), (100,100), (300,120), 3)
pygame.draw.rect(screen_surface, (90,150,240), (350,100,120,80), 0, border_radius=12)
pygame.draw.circle(screen_surface, (255,190,60), (500,180), 30, 0)`})}),i.jsx(y,{title:"Rect: якоря и методы",children:i.jsx(j,{language:"python",children:`r = pygame.Rect(0,0,120,80)
r.center = (450,300)
r.move_ip(10,-5)        # inplace-сдвиг
r.inflate_ip(20,10)     # inplace-изменение размера
r.clamp_ip(screen_surface.get_rect())`})}),i.jsx(y,{title:"Движение с нормализацией",children:i.jsx(j,{language:"python",children:`keys = pygame.key.get_pressed()
v = pygame.Vector2((keys[pygame.K_RIGHT]-keys[pygame.K_LEFT]),
                   (keys[pygame.K_DOWN]-keys[pygame.K_UP]))
if v.length_squared() > 0: v = v.normalize()
r.move_ip(v.x * 260 * dt, v.y * 260 * dt)`})}),i.jsxs(y,{title:"Изображения, поворот, градусы",children:[i.jsx(j,{language:"python",children:`img = pygame.image.load('assets/player.png').convert_alpha()
flipped = pygame.transform.flip(img, True, False)
rot = pygame.transform.rotozoom(img, -angle_deg, 1.0)  # «по часовой» — отрицательный угол`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["0° — вправо; 90° — вниз (если используешь ",i.jsx("em",{children:"cos/sin"}),"). ",i.jsx("code",{children:"rotate"})," — положительный угол против часовой стрелки."]})]}),i.jsx(y,{title:"Звук: музыка и эффекты",children:i.jsx(j,{language:"python",children:`pygame.mixer.pre_init(44100, -16, 2, 512); pygame.init(); pygame.mixer.init()
pygame.mixer.music.load('assets/sounds/music.ogg')
pygame.mixer.music.play(-1); pygame.mixer.music.set_volume(0.6)
click = pygame.mixer.Sound('assets/sounds/click.wav'); click.set_volume(0.8)
pygame.mixer.find_channel(True).play(click)`})}),i.jsx(y,{title:"События, таймеры и пользовательские",children:i.jsx(j,{language:"python",children:`USEREVENT_SPAWN = pygame.USEREVENT + 1
pygame.time.set_timer(USEREVENT_SPAWN, 1000)
for event in pygame.event.get():
    if event.type == USEREVENT_SPAWN: print('tick')`})}),i.jsx(y,{title:"Ввод: мышь, текст",children:i.jsx(j,{language:"python",children:`# Перетаскивание
if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 and rect.collidepoint(event.pos):
    dragging = True; offset = pygame.Vector2(event.pos) - rect.topleft
if event.type == pygame.MOUSEMOTION and dragging:
    rect.topleft = (event.pos[0]-offset.x, event.pos[1]-offset.y)
if event.type == pygame.MOUSEBUTTONUP and event.button == 1:
    dragging = False

# Текст
if event.type == pygame.TEXTINPUT: name += event.text
if event.type == pygame.KEYDOWN and event.key == pygame.K_BACKSPACE: name = name[:-1]`})}),i.jsx(y,{title:"Спрайты и группы",children:i.jsx(j,{language:"python",children:`class Ball(pygame.sprite.Sprite):
    def __init__(self, pos):
        super().__init__()
        self.image = pygame.Surface((20,20), pygame.SRCALPHA)
        pygame.draw.circle(self.image, (255,190,60), (10,10), 10)
        self.rect = self.image.get_rect(center=pos)
    def update(self, dt): pass

balls = pygame.sprite.Group(Ball((100,100)), Ball((200,200)))
balls.update(dt); balls.draw(screen_surface)`})}),i.jsx(y,{title:"Мини-шаблон проекта",children:i.jsx(j,{language:"python",children:`# main.py
import pygame, sys
def main():
    pygame.init(); screen = pygame.display.set_mode((900,600)); clock = pygame.time.Clock()
    run = True
    while run:
        dt = clock.tick(60)/1000.0
        for e in pygame.event.get():
            if e.type == pygame.QUIT or (e.type==pygame.KEYDOWN and e.key==pygame.K_ESCAPE): run=False
        screen.fill((24,26,32)); pygame.display.flip()
    pygame.quit(); sys.exit()
if __name__ == '__main__': main()`})}),i.jsx(y,{title:"Частые ошибки — напоминание",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Нет ",i.jsx("code",{children:"pygame.init()"})," или ",i.jsx("code",{children:"pygame.display.flip()"}),"."]}),i.jsxs("li",{children:["Скорость зависит от FPS — умножай на ",i.jsx("code",{children:"dt"}),"."]}),i.jsx("li",{children:"Не нормализуешь диагональ — быстрее по диагонали."}),i.jsxs("li",{children:["Пути к файлам невалидны — оборачивай загрузку в ",i.jsx("code",{children:"try/except"}),"."]}),i.jsxs("li",{children:["Меняешь ",i.jsx("code",{children:"image"}),", но забываешь пересчитать ",i.jsx("code",{children:"rect"}),"."]})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Заготовка (starter): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m17.zip",children:"m17.zip"})]}),i.jsxs("li",{children:["📦 Итог (final): ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m17.zip",children:"m17.zip"})]})]})})]})}function mf(){return i.jsxs("div",{className:"space-y-6",children:[i.jsx(y,{title:"Задача модуля",children:i.jsxs("p",{children:["В этом модуле собраны ",i.jsx("strong",{children:"частые ошибки"})," при работе с PyGame и способы их исправления. Они разделены на категории: инициализация, игровой цикл, FPS, события, спрайты, пути к файлам и звук."]})}),i.jsxs(y,{title:"1. Не вызвали pygame.init()",children:[i.jsx(j,{language:"python",children:`import pygame

# ❌ Ошибка
pygame.display.set_mode((800, 600))  # Ошибка: "video system not initialized"

# ✅ Правильно
pygame.init()
screen = pygame.display.set_mode((800, 600))`}),i.jsx("p",{className:"text-sm text-gray-500",children:"Всегда инициализируй PyGame перед использованием любых модулей."})]}),i.jsxs(y,{title:"2. Нет pygame.display.flip() / update()",children:[i.jsx(j,{language:"python",children:`# ❌ Экран остаётся пустым
pygame.draw.circle(screen, (255,0,0), (100,100), 30)

# ✅ Правильно
pygame.draw.circle(screen, (255,0,0), (100,100), 30)
pygame.display.flip()`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Без ",i.jsx("code",{children:"pygame.display.flip()"})," или ",i.jsx("code",{children:"pygame.display.update()"})," экран не обновляется."]})]}),i.jsxs(y,{title:"3. Нет обработки событий",children:[i.jsx(j,{language:"python",children:`# ❌ Ошибка: окно зависает
while True:
    screen.fill((0,0,0))
    pygame.display.flip()

# ✅ Правильно
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    screen.fill((0,0,0))
    pygame.display.flip()`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Если не обрабатывать ",i.jsx("code",{children:"pygame.event.get()"}),", ОС считает окно «неотвечающим»."]})]}),i.jsxs(y,{title:"4. FPS и зависимость скорости от частоты кадров",children:[i.jsx(j,{language:"python",children:`# ❌ Ошибка: движение быстрее при высоком FPS
x += 5  # фиксированный шаг -> разная скорость

# ✅ Правильно (используем delta time)
dt = clock.tick(60) / 1000.0
x += 250 * dt  # пикселей в секунду`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Всегда используй ",i.jsx("code",{children:"dt"})," (время одного кадра) для равномерного движения."]})]}),i.jsxs(y,{title:"5. Прямое сравнение событий",children:[i.jsx(j,{language:"python",children:`# ❌ Ошибка
if event == pygame.KEYDOWN:
    ...

# ✅ Правильно
if event.type == pygame.KEYDOWN:
    ...`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Всегда сравнивай ",i.jsx("code",{children:"event.type"}),", а не сам объект события."]})]}),i.jsxs(y,{title:"6. Проблемы с путями к файлам",children:[i.jsx(j,{language:"python",children:`# ❌ Ошибка
img = pygame.image.load("player.png")  # может не найти файл

# ✅ Правильно
import os
img = pygame.image.load(os.path.join("assets", "images", "player.png"))`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Всегда строй пути через ",i.jsx("code",{children:"os.path.join"})," и храни ассеты в отдельной папке ",i.jsx("code",{children:"assets/"}),"."]})]}),i.jsxs(y,{title:"7. Ошибки со звуком",children:[i.jsx(j,{language:"python",children:`# ❌ Ошибка: звук не играет
pygame.mixer.Sound("sound.wav").play()

# ✅ Правильно
pygame.mixer.pre_init(44100, -16, 2, 512)
pygame.init()
click = pygame.mixer.Sound("assets/click.wav")
click.play()`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Для корректной работы звука важно вызывать ",i.jsx("code",{children:"pygame.mixer.pre_init()"})," до ",i.jsx("code",{children:"pygame.init()"}),"."]})]}),i.jsxs(y,{title:"8. Сброс rect после трансформации",children:[i.jsx(j,{language:"python",children:`# ❌ Ошибка: rect теряет позицию
sprite.image = pygame.transform.scale(sprite.image, (64,64))

# ✅ Правильно
center = sprite.rect.center
sprite.image = pygame.transform.scale(sprite.image, (64,64))
sprite.rect = sprite.image.get_rect(center=center)`}),i.jsxs("p",{className:"text-sm text-gray-500",children:["После изменения размера изображения всегда пересобирай ",i.jsx("code",{children:"rect"}),"."]})]}),i.jsx(y,{title:"9. Обработка исключений",children:i.jsx(j,{language:"python",children:`try:
    img = pygame.image.load("missing.png")
except pygame.error:
    print("Файл не найден")`})}),i.jsx(y,{title:"Частые тексты ошибок",children:i.jsx(j,{language:"text",children:`pygame.error: video system not initialized   ->  pygame.init() не вызван
pygame.error: Couldn't open file               ->  путь к файлу неверный
AttributeError: 'Event' object has no attribute 'key'  ->  проверяй event.type перед event.key
pygame.error: mixer not initialized           ->  вызови pygame.mixer.init()`})}),i.jsx(y,{title:"Задания",children:i.jsxs("ol",{className:"space-y-2",children:[i.jsxs("li",{children:["Исправь код, который открывает окно, но не вызывает ",i.jsx("code",{children:"pygame.init()"}),"."]}),i.jsxs("li",{children:["Напиши функцию ",i.jsx("code",{children:"safe_load_image(path)"}),", которая загружает изображение, но не падает при ошибке."]}),i.jsxs("li",{children:["Добавь обработку событий ",i.jsx("code",{children:"QUIT"})," в существующий игровой цикл."]}),i.jsxs("li",{children:["Сделай перемещение персонажа равномерным, используя ",i.jsx("code",{children:"dt"}),"."]})]})}),i.jsx(y,{title:"Скачать материалы",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["📦 Шпаргалка по ошибкам: ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/final/m18.zip",children:"m18.zip"})]}),i.jsxs("li",{children:["📦 Starter-файлы: ",i.jsx("a",{href:"https://denchicka.github.io/pygame-course-site/downloads/starter/m18.zip",children:"m18.zip"})]})]})})]})}function yf(){var l,s;const e=Ft.useMemo(()=>[{id:"m00",title:"0 · Подготовка окружения",content:i.jsx(qp,{}),starterZip:"downloads/starter/m00.zip",finalZip:"downloads/final/m00.zip"},{id:"m02",title:"2 · Создание окна",content:i.jsx(Jp,{}),starterZip:"downloads/starter/m02.zip",finalZip:"downloads/final/m02.zip"},{id:"m03",title:"3 · Фон и flip",content:i.jsx(ef,{}),starterZip:"downloads/starter/m03.zip",finalZip:"downloads/final/m03.zip"},{id:"m04",title:"4 · FPS и delta-time",content:i.jsx(tf,{}),starterZip:"downloads/starter/m04.zip",finalZip:"downloads/final/m04.zip"},{id:"m05",title:"5 · Фигуры (draw)",content:i.jsx(nf,{}),starterZip:"downloads/starter/m05.zip",finalZip:"downloads/final/m05.zip"},{id:"m06",title:"6 · Оси X/Y",content:i.jsx(rf,{}),starterZip:"downloads/starter/m06.zip",finalZip:"downloads/final/m06.zip"},{id:"m07",title:"7 · Объекты из фигур",content:i.jsx(lf,{}),starterZip:"downloads/starter/m07.zip",finalZip:"downloads/final/m07.zip"},{id:"m08",title:"8 · pygame.Rect атрибуты",content:i.jsx(sf,{}),starterZip:"downloads/starter/m08.zip",finalZip:"downloads/final/m08.zip"},{id:"m09",title:"9 · Движение фигур",content:i.jsx(af,{}),starterZip:"downloads/starter/m09.zip",finalZip:"downloads/final/m09.zip"},{id:"m10",title:"10 · Изображения",content:i.jsx(of,{}),starterZip:"downloads/starter/m10.zip",finalZip:"downloads/final/m10.zip"},{id:"m11",title:"11 · Звук",content:i.jsx(uf,{}),starterZip:"downloads/starter/m11.zip",finalZip:"downloads/final/m11.zip"},{id:"m12",title:"12 · Закрытие окна",content:i.jsx(cf,{}),starterZip:"downloads/starter/m12.zip",finalZip:"downloads/final/m12.zip"},{id:"m13",title:"13 · Система событий",content:i.jsx(df,{}),starterZip:"downloads/starter/m13.zip",finalZip:"downloads/final/m13.zip"},{id:"m14",title:"14 · Персонаж (картинки)",content:i.jsx(pf,{}),starterZip:"downloads/starter/m14.zip",finalZip:"downloads/final/m14.zip"},{id:"m15",title:"15 · Клавиши и мышь",content:i.jsx(ff,{}),starterZip:"downloads/starter/m15.zip",finalZip:"downloads/final/m15.zip"},{id:"m16",title:"16 · Спрайты и группы",content:i.jsx(gf,{}),starterZip:"downloads/starter/m16.zip",finalZip:"downloads/final/m16.zip"},{id:"m17",title:"17 · Итоговая шпаргалка",content:i.jsx(hf,{}),starterZip:"downloads/starter/m17.zip",finalZip:"downloads/final/m17.zip"},{id:"m18",title:"18 · Частые ошибки",content:i.jsx(mf,{}),starterZip:"downloads/starter/m18.zip",finalZip:"downloads/final/m18.zip"}],[]),[t,n]=Ft.useState(e[0].id),r=e.find(a=>a.id===t);return Ft.useEffect(()=>{document.title=`${r.title} — PyGame методичка`},[r.title]),i.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900",children:[i.jsx(Bp,{title:r.title}),i.jsx("div",{className:"max-w-7xl mx-auto px-4 py-6 print:px-0",children:i.jsxs("div",{className:"grid grid-cols-12 gap-6",children:[i.jsx("aside",{className:"col-span-12 lg:col-span-3 print:hidden",children:i.jsxs("div",{className:"sticky top-20 space-y-4",children:[i.jsxs("div",{className:"rounded-2xl border p-3 bg-white shadow-sm",children:[i.jsx("h2",{className:"text-lg font-semibold px-2 py-2",children:"Модули"}),i.jsx("nav",{className:"space-y-1",children:e.map(a=>i.jsx("button",{onClick:()=>n(a.id),className:`w-full text-left rounded-xl px-3 py-2 transition border ${t===a.id?"bg-blue-50 border-blue-300":"hover:bg-gray-50"}`,children:a.title},a.id))})]}),i.jsxs("div",{className:"rounded-2xl border p-3 bg-white shadow-sm space-y-2",children:[i.jsx("button",{onClick:()=>window.print(),className:"print:hidden inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition",children:"🖨️ Распечатать страницу"}),i.jsx("p",{className:"text-xs text-gray-500",children:"При печати меню скрывается автоматически."})]})]})}),i.jsx("main",{className:"col-span-12 lg:col-span-9",children:i.jsxs("article",{className:"rounded-2xl border bg-white shadow-sm p-5 print:shadow-none print:border-0 print:p-0",children:[i.jsxs("div",{className:"flex items-center justify-between gap-4",children:[i.jsx("h2",{className:"text-2xl font-bold",children:r.title}),i.jsx("div",{className:"print:hidden",children:i.jsx("button",{onClick:()=>window.print(),className:"inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition",children:"🖨️ Распечатать страницу"})})]}),i.jsx("div",{className:"h-px bg-gray-200 my-4"}),i.jsx("div",{className:"prose max-w-none",children:r.content}),i.jsx("div",{className:"h-px bg-gray-200 my-4"}),i.jsx($p,{starterZip:(l=e.find(a=>a.id===t))==null?void 0:l.starterZip,finalZip:(s=e.find(a=>a.id===t))==null?void 0:s.finalZip})]})})]})}),i.jsx("style",{children:"@media print { header, aside, button, .print:hidden { display: none !important; } main { width: 100% !important; } article { box-shadow: none !important; border: 0 !important; padding: 0 !important; } body { background: white !important; } }"})]})}Ji.createRoot(document.getElementById("root")).render(i.jsx(di.StrictMode,{children:i.jsx(yf,{})}));console.log("Trigger deploy");
