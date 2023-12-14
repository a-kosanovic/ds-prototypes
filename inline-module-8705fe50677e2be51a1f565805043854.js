/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$9=window,e$a=t$9.ShadowRoot&&(void 0===t$9.ShadyCSS||t$9.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$c=Symbol(),n$d=new WeakMap;let o$c = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$a&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$d.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$d.set(s,t));}return t}toString(){return this.cssText}};const r$8=t=>new o$c("string"==typeof t?t:t+"",void 0,s$c),i$9=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$c(n,t,s$c)},S$3=(s,n)=>{e$a?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$9.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$8=e$a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$8(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$b;const e$9=window,r$7=e$9.trustedTypes,h$7=r$7?r$7.emptyScript:"",o$b=e$9.reactiveElementPolyfillSupport,n$c={toAttribute(t,i){switch(i){case Boolean:t=t?h$7:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$4=(t,i)=>i!==t&&(i==i||t==t),l$6={attribute:!0,type:String,converter:n$c,reflect:!1,hasChanged:a$4},d$3="finalized";let u$6 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$6){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$6}static finalize(){if(this.hasOwnProperty(d$3))return !1;this[d$3]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$8(i));}else void 0!==i&&s.push(c$8(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$3(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$6){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$c).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$c;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$4)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$6[d$3]=!0,u$6.elementProperties=new Map,u$6.elementStyles=[],u$6.shadowRootOptions={mode:"open"},null==o$b||o$b({ReactiveElement:u$6}),(null!==(s$b=e$9.reactiveElementVersions)&&void 0!==s$b?s$b:e$9.reactiveElementVersions=[]).push("1.6.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$8;const i$8=window,s$a=i$8.trustedTypes,e$8=s$a?s$a.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$a="$lit$",n$b=`lit$${(Math.random()+"").slice(9)}$`,l$5="?"+n$b,h$6=`<${l$5}>`,r$6=document,u$5=()=>r$6.createComment(""),d$2=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$7=Array.isArray,v$3=t=>c$7(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$3="[ \t\n\f\r]",f$5=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_$2=/-->/g,m$4=/>/g,p$4=RegExp(`>|${a$3}(?:([^\\s"'>=/]+)(${a$3}*=${a$3}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g$2=/'/g,$$2=/"/g,y$1=/^(?:script|style|textarea|title)$/i,T$2=Symbol.for("lit-noChange"),A$2=Symbol.for("lit-nothing"),E$2=new WeakMap,C$2=r$6.createTreeWalker(r$6,129,null,!1);function P$2(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$8?e$8.createHTML(i):i}const V$2=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f$5;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f$5?"!--"===c[1]?u=_$2:void 0!==c[1]?u=m$4:void 0!==c[2]?(y$1.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p$4):void 0!==c[3]&&(u=p$4):u===p$4?">"===c[0]?(u=null!=l?l:f$5,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p$4:'"'===c[3]?$$2:g$2):u===$$2||u===g$2?u=p$4:u===_$2||u===m$4?u=f$5:(u=p$4,l=void 0);const w=u===p$4&&t[i+1].startsWith("/>")?" ":"";r+=u===f$5?s+h$6:v>=0?(e.push(d),s.slice(0,v)+o$a+s.slice(v)+n$b+w):s+n$b+(-2===v?(e.push(void 0),i):w);}return [P$2(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};let N$2 = class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V$2(t,i);if(this.el=N.createElement(a,e),C$2.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C$2.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$a)||i.startsWith(n$b)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$a).split(n$b),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H$2:"?"===i[1]?L$2:"@"===i[1]?z$2:k$2});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y$1.test(h.tagName)){const t=h.textContent.split(n$b),i=t.length-1;if(i>0){h.textContent=s$a?s$a.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u$5()),C$2.nextNode(),v.push({type:2,index:++r});h.append(t[i],u$5());}}}else if(8===h.nodeType)if(h.data===l$5)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$b,t+1));)v.push({type:7,index:r}),t+=n$b.length-1;}r++;}}static createElement(t,i){const s=r$6.createElement("template");return s.innerHTML=t,s}};function S$2(t,i,s=t,e){var o,n,l,h;if(i===T$2)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d$2(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S$2(t,r._$AS(t,i.values),r,e)),i}let M$2 = class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$6).importNode(s,!0);C$2.currentNode=o;let n=C$2.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R$2(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z$2(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C$2.nextNode(),l++);}return C$2.currentNode=r$6,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}};let R$2 = class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A$2,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S$2(this,t,i),d$2(t)?t===A$2||null==t||""===t?(this._$AH!==A$2&&this._$AR(),this._$AH=A$2):t!==this._$AH&&t!==T$2&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v$3(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A$2&&d$2(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$6.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N$2.createElement(P$2(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M$2(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E$2.get(t.strings);return void 0===i&&E$2.set(t.strings,i=new N$2(t)),i}T(t){c$7(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u$5()),this.k(u$5()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}};let k$2 = class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A$2,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A$2;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S$2(this,t,i,0),n=!d$2(t)||t!==this._$AH&&t!==T$2,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S$2(this,e[s+l],i,l),h===T$2&&(h=this._$AH[l]),n||(n=!d$2(h)||h!==this._$AH[l]),h===A$2?t=A$2:t!==A$2&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A$2?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}};let H$2 = class H extends k$2{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A$2?void 0:t;}};const I$2=s$a?s$a.emptyScript:"";let L$2 = class L extends k$2{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A$2?this.element.setAttribute(this.name,I$2):this.element.removeAttribute(this.name);}};let z$2 = class z extends k$2{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S$2(this,t,i,0))&&void 0!==s?s:A$2)===T$2)return;const e=this._$AH,o=t===A$2&&e!==A$2||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A$2&&(e===A$2||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}};let Z$2 = class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S$2(this,t);}};const j={O:o$a,P:n$b,A:l$5,C:1,M:V$2,L:M$2,R:v$3,D:S$2,I:R$2,V:k$2,H:L$2,N:z$2,U:H$2,F:Z$2},B$1=i$8.litHtmlPolyfillSupport;null==B$1||B$1(N$2,R$2),(null!==(t$8=i$8.litHtmlVersions)&&void 0!==t$8?t$8:i$8.litHtmlVersions=[]).push("2.8.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$7;const i$7=window,s$9=i$7.trustedTypes,e$7=s$9?s$9.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$9="$lit$",n$a=`lit$${(Math.random()+"").slice(9)}$`,l$4="?"+n$a,h$5=`<${l$4}>`,r$5=document,u$4=()=>r$5.createComment(""),d$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$6=Array.isArray,v$2=t=>c$6(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$2="[ \t\n\f\r]",f$4=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_$1=/-->/g,m$3=/>/g,p$3=RegExp(`>|${a$2}(?:([^\\s"'>=/]+)(${a$2}*=${a$2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g$1=/'/g,$$1=/"/g,y=/^(?:script|style|textarea|title)$/i,w$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w$1(1),T$1=Symbol.for("lit-noChange"),A$1=Symbol.for("lit-nothing"),E$1=new WeakMap,C$1=r$5.createTreeWalker(r$5,129,null,!1);function P$1(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$7?e$7.createHTML(i):i}const V$1=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f$4;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f$4?"!--"===c[1]?u=_$1:void 0!==c[1]?u=m$3:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p$3):void 0!==c[3]&&(u=p$3):u===p$3?">"===c[0]?(u=null!=l?l:f$4,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p$3:'"'===c[3]?$$1:g$1):u===$$1||u===g$1?u=p$3:u===_$1||u===m$3?u=f$4:(u=p$3,l=void 0);const w=u===p$3&&t[i+1].startsWith("/>")?" ":"";r+=u===f$4?s+h$5:v>=0?(e.push(d),s.slice(0,v)+o$9+s.slice(v)+n$a+w):s+n$a+(-2===v?(e.push(void 0),i):w);}return [P$1(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};let N$1 = class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V$1(t,i);if(this.el=N.createElement(a,e),C$1.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C$1.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$9)||i.startsWith(n$a)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$9).split(n$a),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H$1:"?"===i[1]?L$1:"@"===i[1]?z$1:k$1});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$a),i=t.length-1;if(i>0){h.textContent=s$9?s$9.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u$4()),C$1.nextNode(),v.push({type:2,index:++r});h.append(t[i],u$4());}}}else if(8===h.nodeType)if(h.data===l$4)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$a,t+1));)v.push({type:7,index:r}),t+=n$a.length-1;}r++;}}static createElement(t,i){const s=r$5.createElement("template");return s.innerHTML=t,s}};function S$1(t,i,s=t,e){var o,n,l,h;if(i===T$1)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d$1(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S$1(t,r._$AS(t,i.values),r,e)),i}let M$1 = class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$5).importNode(s,!0);C$1.currentNode=o;let n=C$1.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R$1(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z$1(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C$1.nextNode(),l++);}return C$1.currentNode=r$5,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}};let R$1 = class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S$1(this,t,i),d$1(t)?t===A$1||null==t||""===t?(this._$AH!==A$1&&this._$AR(),this._$AH=A$1):t!==this._$AH&&t!==T$1&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v$2(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A$1&&d$1(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$5.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N$1.createElement(P$1(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M$1(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E$1.get(t.strings);return void 0===i&&E$1.set(t.strings,i=new N$1(t)),i}T(t){c$6(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u$4()),this.k(u$4()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}};let k$1 = class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A$1;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S$1(this,t,i,0),n=!d$1(t)||t!==this._$AH&&t!==T$1,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S$1(this,e[s+l],i,l),h===T$1&&(h=this._$AH[l]),n||(n=!d$1(h)||h!==this._$AH[l]),h===A$1?t=A$1:t!==A$1&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}};let H$1 = class H extends k$1{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A$1?void 0:t;}};const I$1=s$9?s$9.emptyScript:"";let L$1 = class L extends k$1{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A$1?this.element.setAttribute(this.name,I$1):this.element.removeAttribute(this.name);}};let z$1 = class z extends k$1{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S$1(this,t,i,0))&&void 0!==s?s:A$1)===T$1)return;const e=this._$AH,o=t===A$1&&e!==A$1||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A$1&&(e===A$1||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}};let Z$1 = class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S$1(this,t);}};const B=i$7.litHtmlPolyfillSupport;null==B||B(N$1,R$1),(null!==(t$7=i$7.litHtmlVersions)&&void 0!==t$7?t$7:i$7.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R$1(i.insertBefore(u$4(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$3,o$8;let s$8 = class s extends u$6{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T$1}};s$8.finalized=!0,s$8._$litElement$=!0,null===(l$3=globalThis.litElementHydrateSupport)||void 0===l$3||l$3.call(globalThis,{LitElement:s$8});const n$9=globalThis.litElementPolyfillSupport;null==n$9||n$9({LitElement:s$8});(null!==(o$8=globalThis.litElementVersions)&&void 0!==o$8?o$8:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$6=globalThis,i$6=t$6.trustedTypes,s$7=i$6?i$6.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$6="$lit$",h$4=`lit$${(Math.random()+"").slice(9)}$`,o$7="?"+h$4,n$8=`<${o$7}>`,r$4=document,l$2=()=>r$4.createComment(""),c$5=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$1=Array.isArray,u$3=t=>a$1(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f$3=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,_=/>/g,m$2=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p$2=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$4.createTreeWalker(r$4,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$7?s$7.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f$3;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$3?"!--"===u[1]?c=v$1:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m$2):void 0!==u[3]&&(c=m$2):c===m$2?">"===u[0]?(c=r??f$3,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m$2:'"'===u[3]?g:p$2):c===g||c===p$2?c=m$2:c===v$1||c===_?c=f$3:(c=m$2,r=void 0);const x=c===m$2&&t[i+1].startsWith("/>")?" ":"";l+=c===f$3?s+n$8:d>=0?(o.push(a),s.slice(0,d)+e$6+s.slice(d)+h$4+x):s+h$4+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$6)){const i=v[a++],s=r.getAttribute(t).split(h$4),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h$4)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h$4),s=t.length-1;if(s>0){r.textContent=i$6?i$6.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l$2()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l$2());}}}else if(8===r.nodeType)if(r.data===o$7)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$4,t+1));)d.push({type:7,index:c}),t+=h$4.length-1;}c++;}}static createElement(t,i){const s=r$4.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$5(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$4).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$4,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c$5(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u$3(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==T&&c$5(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$4.createTextNode(t)),this._$AH=t;}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l$2()),this.k(l$2()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c$5(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c$5(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.O(t);}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}O(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const z={j:e$6,P:h$4,A:o$7,C:1,M:P,L:S,R:u$3,V:N,D:M,I:R,H,N:I,U:k,B:L},Z=t$6.litHtmlPolyfillSupport;Z?.(V,M),(t$6.litHtmlVersions??=[]).push("3.1.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$5={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$5=t=>(...e)=>({_$litDirective$:t,values:e});let i$5 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const {D:t$4}=z,f$2=o=>void 0===o.strings,s$6=()=>document.createComment(""),r$3=(o,i,n)=>{const e=o._$AA.parentNode,l=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=e.insertBefore(s$6(),l),c=e.insertBefore(s$6(),l);n=new t$4(i,c,o,o.options);}else {const t=n._$AB.nextSibling,i=n._$AM,c=i!==o;if(c){let t;n._$AQ?.(o),n._$AM=o,void 0!==n._$AP&&(t=o._$AU)!==i._$AU&&n._$AP(t);}if(t!==l||c){let o=n._$AA;for(;o!==t;){const t=o.nextSibling;e.insertBefore(o,l),o=t;}}}return n},v=(o,t,i=o)=>(o._$AI(t,i),o),u$2={},m$1=(o,t=u$2)=>o._$AH=t,p$1=o=>o._$AH,h$3=o=>{o._$AP?.(!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o;}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u$1=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c$4=e$5(class extends i$5{constructor(e){if(super(e),e.type!==t$5.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return {values:o,keys:l}}render(e,s,t){return this.ht(e,s,t).values}update(s,[t,r,c]){const d=p$1(s),{values:p,keys:a}=this.ht(t,r,c);if(!Array.isArray(d))return this.dt=a,p;const h=this.dt??=[],v$1=[];let m,y,x=0,j=d.length-1,k=0,w$1=p.length-1;for(;x<=j&&k<=w$1;)if(null===d[x])x++;else if(null===d[j])j--;else if(h[x]===a[k])v$1[k]=v(d[x],p[k]),x++,k++;else if(h[j]===a[w$1])v$1[w$1]=v(d[j],p[w$1]),j--,w$1--;else if(h[x]===a[w$1])v$1[w$1]=v(d[x],p[w$1]),r$3(s,v$1[w$1+1],d[x]),x++,w$1--;else if(h[j]===a[k])v$1[k]=v(d[j],p[k]),r$3(s,d[x],d[j]),j--,k++;else if(void 0===m&&(m=u$1(a,k,w$1),y=u$1(h,x,j)),m.has(h[x]))if(m.has(h[j])){const e=y.get(a[k]),t=void 0!==e?d[e]:null;if(null===t){const e=r$3(s,d[x]);v(e,p[k]),v$1[k]=e;}else v$1[k]=v(t,p[k]),r$3(s,d[x],t),d[e]=null;k++;}else h$3(d[j]),j--;else h$3(d[x]),x++;for(;k<=w$1;){const e=r$3(s,v$1[w$1+1]);v(e,p[k]),v$1[k++]=e;}for(;x<=j;){const e=d[x++];null!==e&&h$3(e);}return this.dt=a,m$1(s,v$1),w}});

const isElementName = (elementName) => typeof elementName === "string" || Array.isArray(elementName);
/**
 * Converts part to kebab case and trims white-space
 */
const toSanitizedPart = (part) => part
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase()
    .trim();
const toArray = (...values) => [].concat(...values);
/**
 * BEM classes (block, [[element], modifier])
 *
 * bem("card") => "card"
 * bem("card", "header") => "card__header"
 * bem("card", ["header", "author"]) => "card__header__author"
 * bem("card", {featured: true}) => "card card--featured"
 * bem("card", ["header", "author"], {anonymous: true}) => "card__header__author card__header__author--anonymous"
 */
const bem$f = (blockName, elementNameOrModifierMap, modifierMap) => {
    const sanitizedBlockName = toSanitizedPart(blockName);
    const resolvedElementName = (isElementName(elementNameOrModifierMap)
        ? toArray(elementNameOrModifierMap)
        : []);
    const resolvedModifierMap = ((isElementName(elementNameOrModifierMap)
        ? modifierMap
        : elementNameOrModifierMap) || {});
    const elementNamePath = resolvedElementName.reduce((memo, elementNamePart) => {
        const sanitizedElementNamePart = toSanitizedPart(elementNamePart);
        if (sanitizedElementNamePart) {
            return memo.concat(sanitizedElementNamePart);
        }
        return memo;
    }, []);
    const modifiers = Object.entries(resolvedModifierMap).reduce((memo, [modifierName, shouldApply]) => {
        const sanitizedModifierName = toSanitizedPart(modifierName);
        if (sanitizedModifierName && !!shouldApply) {
            return memo.concat(sanitizedModifierName);
        }
        return memo;
    }, []);
    const baseClassName = `${sanitizedBlockName}${elementNamePath.length ? `__${elementNamePath.join("__")}` : ""}`;
    const modifierClassNames = modifiers.map((modifierName) => `${baseClassName}--${modifierName}`);
    return [baseClassName].concat(modifierClassNames).join(" ");
};
const createBem = (blockName) => (elementNameOrModifierMap, modifierMap) => bem$f(blockName, elementNameOrModifierMap, modifierMap);
const concatClasses = (...bemResults) => bemResults.filter((result) => !!result).join(" ");

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let s$5 = class s extends Event{constructor(s,t,e){super("context-request",{bubbles:!0,composed:!0}),this.context=s,this.callback=t,this.subscribe=e??!1;}};

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n$7(n){return n}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s$4 = class s{constructor(t,s,i,h){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,s)=>{this.unsubscribe&&(this.unsubscribe!==s&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,s)),this.unsubscribe=s;},this.host=t,void 0!==s.context){const t=s;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1;}else this.context=s,this.callback=i,this.subscribe=h??!1;this.host.addController(this);}hostConnected(){this.dispatchRequest();}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0);}dispatchRequest(){this.host.dispatchEvent(new s$5(this.context,this.t,this.subscribe));}};

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let s$3 = class s{get value(){return this.o}set value(s){this.setValue(s);}setValue(s,t=!1){const i=t||!Object.is(s,this.o);this.o=s,i&&this.updateObservers();}constructor(s){this.subscriptions=new Map,this.updateObservers=()=>{for(const[s,{disposer:t}]of this.subscriptions)s(this.o,t);},void 0!==s&&(this.value=s);}addCallback(s,t,i){if(!i)return void s(this.value);this.subscriptions.has(s)||this.subscriptions.set(s,{disposer:()=>{this.subscriptions.delete(s);},consumerHost:t});const{disposer:h}=this.subscriptions.get(s);s(this.value,h);}clearCallbacks(){this.subscriptions.clear();}};

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e$4 = class e extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t;}};let i$4 = class i extends s$3{constructor(s,e,i){super(void 0!==e.context?e.initialValue:i),this.onContextRequest=t=>{const s=t.composedPath()[0];t.context===this.context&&s!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,s,t.subscribe));},this.onProviderRequest=s=>{const e=s.composedPath()[0];if(s.context!==this.context||e===this.host)return;const i=new Set;for(const[s,{consumerHost:e}]of this.subscriptions)i.has(s)||(i.add(s),e.dispatchEvent(new s$5(this.context,s,!0)));s.stopPropagation();},this.host=s,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this);}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest);}hostConnected(){this.host.dispatchEvent(new e$4(this.context));}};

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let t$3 = class t{constructor(){this.pendingContextRequests=new Map,this.onContextProvider=t=>{const s=this.pendingContextRequests.get(t.context);if(void 0===s)return;this.pendingContextRequests.delete(t.context);const{requests:o}=s;for(const{elementRef:s,callbackRef:n}of o){const o=s.deref(),c=n.deref();void 0===o||void 0===c||o.dispatchEvent(new s$5(t.context,c,!0));}},this.onContextRequest=e=>{if(!0!==e.subscribe)return;const t=e.composedPath()[0],s=e.callback;let o=this.pendingContextRequests.get(e.context);void 0===o&&this.pendingContextRequests.set(e.context,o={callbacks:new WeakMap,requests:[]});let n=o.callbacks.get(t);void 0===n&&o.callbacks.set(t,n=new WeakSet),n.has(s)||(n.add(s),o.requests.push({elementRef:new WeakRef(t),callbackRef:new WeakRef(s)}));};}attach(e){e.addEventListener("context-request",this.onContextRequest),e.addEventListener("context-provider",this.onContextProvider);}detach(e){e.removeEventListener("context-request",this.onContextRequest),e.removeEventListener("context-provider",this.onContextProvider);}};

const isPlainObject$1 = (value) => {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return ((prototype === null ||
        prototype === Object.prototype ||
        Object.getPrototypeOf(prototype) === null) &&
        !(Symbol.toStringTag in value) &&
        !(Symbol.iterator in value));
};

/**
 * Recursively builds a flat collection of def tokens
 */
const buildDefEntries = (obj, path = [], defEntries = []) => Object.entries(obj).reduce((defEntries, [key, node]) => {
    // Found a dead end
    if (!isPlainObject$1(node)) {
        return defEntries;
    }
    const nodePath = [...path, key];
    // Found a leaf node!
    if ("value" in node) {
        // Assign a path array, and push the entry
        defEntries.push([
            nodePath.join("."),
            { ...node, path: nodePath }
        ]);
        return defEntries;
    }
    // Continue traversing
    return buildDefEntries(node, nodePath, defEntries);
}, defEntries);
/**
 * Gets resolved value from def
 */
const getResolvedValue = ({ value, dependencies = [] }, resolvedDefMap) => typeof value === "function"
    ? value(...dependencies.map((key) => resolvedDefMap[key].resolvedValue))
    : value;
const createDependencyError = (message, key, dependents) => {
    const dependencyChainMessage = [...dependents, key]
        .map((key) => `"${key}"`)
        .join(" → ");
    return new ReferenceError(`Design Tokens cannot resolve "${dependents[0]}" because ${message}: ${dependencyChainMessage}`);
};
/**
 * Recursively builds a map of resolved defs
 *
 * NB:
 * When it makes a recursive call, memoize the dependents so that
 * we can prevent infinite loops if a def accidentally depends on itself
 */
const buildResolvedDefMap = (defEntries, sourceDefMap, resolvedDefMap = {}, dependents = []) => defEntries.reduce((resolvedDefMap, [key, def]) => {
    if (dependents.length) {
        // If the def does not exist
        if (!def) {
            throw createDependencyError("it has a dependency that does not exist", key, dependents);
        }
        // If the key exists in the dependents memo, we know there is a circular dependency
        if (dependents.includes(key)) {
            throw createDependencyError("it has a circular dependency", key, dependents);
        }
    }
    // If def has been resolved already, skip it
    if (key in resolvedDefMap) {
        return resolvedDefMap;
    }
    // Assign resolved value, also ensuring dependencies are resolved first
    return Object.assign(resolvedDefMap, {
        [key]: {
            ...def,
            resolvedValue: getResolvedValue(def, buildResolvedDefMap((def.dependencies || []).map((key) => [key, sourceDefMap[key]]), sourceDefMap, resolvedDefMap, [...dependents, key]))
        }
    });
}, resolvedDefMap);
/**
 * Get output token entries
 * Each definition can return multiple tokens
 */
const getOutputTokens = (outputName, outputTransforms, defEntries, verbose) => {
    const transform = outputName in outputTransforms && outputTransforms[outputName];
    if (!transform) {
        return [];
    }
    return defEntries.reduce((memo, [, def]) => {
        const { format, path, description, dependencies } = def;
        const formatFn = !!format && format in transform ? transform[format] : transform.default;
        if (!formatFn) {
            return memo;
        }
        const outputEntries = verbose
            ? formatFn(def).map(([key, value]) => [
                key,
                { value, format, path, description, dependencies }
            ])
            : formatFn(def);
        memo.push(...outputEntries);
        return memo;
    }, []);
};
/**
 * Create token reducer
 */
const createDesignTokenReducer = ({ defs, outputTransforms }) => ({ output = [], extend = {}, verbose = false }) => {
    const defEntries = Object.entries({
        ...Object.fromEntries(buildDefEntries(defs)),
        ...Object.fromEntries(buildDefEntries(extend))
    });
    const resolvedDefMap = buildResolvedDefMap(defEntries, Object.fromEntries(defEntries));
    const resolvedDefEntries = defEntries.reduce((defEntries, [key, def]) => {
        const { internal } = def;
        if (!internal) {
            defEntries.push([key, resolvedDefMap[key]]);
        }
        return defEntries;
    }, []);
    return output.map((outputName) => Object.fromEntries(getOutputTokens(outputName, outputTransforms, resolvedDefEntries, verbose)));
};

/**
 * Rounds value to mantissa
 */
const round$3 = (value, mantissa = 4) => Math.round(value * Math.pow(10, mantissa)) / Math.pow(10, mantissa);
/**
 * Clamps value between min and max
 */
const clamp$2 = (value, min = 0, max = 1) => Math.max(min, Math.min(value, max));

/**
 * Normalizes RGBA color
 */
const normalizeRgba = ({ r, g, b, a = 1 }) => ({
    r: clamp$2(round$3(r, 0), 0, 255),
    g: clamp$2(round$3(g, 0), 0, 255),
    b: clamp$2(round$3(b, 0), 0, 255),
    a: clamp$2(round$3(a), 0, 1)
});

/**
 * Normalize unknown value
 *
 * e.g. ensure numbers are rounded to avoid JS precision issues
 */
const normalizeUnknownValue = (value) => {
    if (Array.isArray(value)) {
        return value.map((item) => normalizeUnknownValue(item));
    }
    else if (isPlainObject$1(value)) {
        return Object.entries(value).reduce((memo, [oKey, oValue]) => Object.assign(memo, {
            [oKey]: normalizeUnknownValue(oValue)
        }), {});
    }
    else if (typeof value === "number" && Number.isFinite(value)) {
        return round$3(value);
    }
    return value;
};

const toMeasureOutput = (value) => Number.isFinite(value)
    ? `${round$3(value)}px`
    : value === Infinity
        ? "100vmax"
        : null;
const toRelativeMeasureOutput = (value) => `${round$3(value)}em`;
const toColorOutput = (color) => {
    const { r, g, b, a } = normalizeRgba(color);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};
const toColorSplitRgbOutput = (color) => {
    const { r, g, b } = normalizeRgba(color);
    return `${r}, ${g}, ${b}`;
};
const toTimeOutput = (value) => `${round$3(value, 0)}ms`;
const toPercentOutput = (value) => `${round$3(value * 100)}%`;
const toRatioOutput = ([a, b]) => `calc(${round$3(a)} / ${round$3(b)})`;
const toBezierOutput = (value) => `cubic-bezier(${value
    .slice(0, 4)
    .map((item) => round$3(item))
    .join(", ")})`;
const toShadowOutput = ({ x, y, blur, spread, color }) => `${toMeasureOutput(x)} ${toMeasureOutput(y)} ${toMeasureOutput(blur)} ${toMeasureOutput(spread)} ${toColorOutput(color)}`;
/**
 * Format key for CSS custom property
 *
 * e.g. ['one', 'two', 'three] => '--prefix--one--two--three'
 * e.g. ['camelCase'] => '--prefix--camel-case'
 * e.g. ['size1'] => '--prefix--size-1'
 * e.g. ['color', 'accent', '$root'] => '--prefix--color--accent
 */
const createFormatKey = (prefix) => (path) => {
    const normalizedPath = path[path.length - 1] === "$root" ? path.slice(0, -1) : path;
    return `--${(prefix ? [prefix, ...normalizedPath] : normalizedPath)
        .filter((part) => part !== "$root")
        .map((part) => part
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/([a-z])([0-9])/g, "$1-$2")
        .replace(/([0-9])([A-Z])/g, "$1-$2")
        .toLowerCase())
        .join("--")}`;
};
/**
 * CSS output transform factory
 *
 * Creates a map of transform functions with keys matching the 'format' of a def.
 * Any 'format' that does not match a key, will use the 'default' transform.
 */
const createOutputTransform$1 = ({ prefix } = {}) => {
    const formatKey = createFormatKey(prefix);
    return {
        default: (({ path, resolvedValue }) => {
            const normalizedValue = normalizeUnknownValue(resolvedValue);
            const formattedValue = Array.isArray(normalizedValue)
                ? normalizedValue.join(", ")
                : `${normalizedValue}`;
            return [[formatKey(path), formattedValue]];
        }),
        measure: ((({ path, resolvedValue }) => [
            [formatKey(path), toMeasureOutput(resolvedValue)]
        ])),
        time: ((({ path, resolvedValue }) => [
            [formatKey(path), toTimeOutput(resolvedValue)]
        ])),
        ratio: ((({ path, resolvedValue }) => [
            [formatKey(path), toRatioOutput(resolvedValue)]
        ])),
        color: (({ path, resolvedValue }) => [
            [formatKey(path), toColorOutput(resolvedValue)],
            [formatKey([...path, "rgb"]), toColorSplitRgbOutput(resolvedValue)]
        ]),
        typeScale: (({ path = [], resolvedValue: [size, leading] }) => [
            [formatKey([...path, "size"]), toMeasureOutput(size)],
            [formatKey([...path, "leading"]), toMeasureOutput(leading)]
        ]),
        typeRelative: ((({ path, resolvedValue }) => [
            [formatKey(path), toRelativeMeasureOutput(resolvedValue)]
        ])),
        percent: ((({ path, resolvedValue }) => [
            [formatKey(path), toPercentOutput(resolvedValue)]
        ])),
        bezier: ((({ path, resolvedValue }) => [
            [formatKey(path), toBezierOutput(resolvedValue)]
        ])),
        shadow: (({ path, resolvedValue }) => {
            const formattedValue = Array.isArray(resolvedValue)
                ? resolvedValue.map((shadow) => toShadowOutput(shadow)).join(", ")
                : toShadowOutput(resolvedValue);
            return [[formatKey(path), formattedValue]];
        })
    };
};

/**
 * Format key for JSON object key
 *
 * e.g. ['one', 'two', 'three] => 'one.two.three'
 * e.g. ['color', 'accent', '$root'] => 'color.accent'
 */
const formatKey = (path) => {
    const normalizedPath = path[path.length - 1] === "$root" ? path.slice(0, -1) : path;
    return normalizedPath.join(".");
};
/**
 * JSON output transform factory
 *
 * Creates a map of transform functions with keys matching the 'format' of a def.
 * Any 'format' that does not match a key, will use the 'default' transform.
 */
const createOutputTransform = () => ({
    default: ((({ path, resolvedValue }) => [
        [formatKey(path), normalizeUnknownValue(resolvedValue)]
    ])),
    color: ((({ path, resolvedValue }) => [
        [formatKey(path), normalizeRgba(resolvedValue)]
    ]))
});

const defs$8 = {
    dimension: {
        space: {
            format: "measure",
            value: 4,
            description: "Baseline grid measurement value to derive all other measurements from."
        }
    }
};

const defs$7 = {
    background: {
        surface: {
            format: "color",
            value: {
                r: 255,
                g: 255,
                b: 255
            }
        },
        elevate: {
            format: "color",
            value: {
                r: 255,
                g: 255,
                b: 255
            }
        },
        inset: {
            format: "color",
            value: {
                r: 246,
                g: 246,
                b: 246
            }
        },
        disabled: {
            format: "color",
            value: {
                r: 0,
                g: 0,
                b: 0,
                a: 0.03
            }
        },
        neutral: {
            tone: {
                $root: {
                    format: "color",
                    value: {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0.07
                    }
                },
                strong: {
                    format: "color",
                    value: {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0.12
                    }
                },
                stronger: {
                    format: "color",
                    value: {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0.21
                    }
                }
            },
            noon: {
                format: "color",
                value: {
                    r: 99,
                    g: 99,
                    b: 99
                }
            },
            afternoon: {
                format: "color",
                value: {
                    r: 80,
                    g: 80,
                    b: 80
                }
            },
            evening: {
                format: "color",
                value: {
                    r: 60,
                    g: 60,
                    b: 60
                }
            }
        },
        accent: {
            tone: {
                $root: {
                    format: "color",
                    value: {
                        r: 67,
                        g: 124,
                        b: 255,
                        a: 0.13
                    }
                },
                strong: {
                    format: "color",
                    value: {
                        r: 67,
                        g: 124,
                        b: 255,
                        a: 0.24
                    }
                }
            },
            noon: {
                format: "color",
                value: {
                    r: 11,
                    g: 76,
                    b: 255
                }
            },
            afternoon: {
                format: "color",
                value: {
                    r: 1,
                    g: 56,
                    b: 222
                }
            },
            evening: {
                format: "color",
                value: {
                    r: 0,
                    g: 41,
                    b: 171
                }
            }
        },
        guidance: {
            tone: {
                $root: {
                    format: "color",
                    value: {
                        r: 179,
                        g: 81,
                        b: 255,
                        a: 0.12
                    }
                },
                strong: {
                    format: "color",
                    value: {
                        r: 179,
                        g: 81,
                        b: 255,
                        a: 0.23
                    }
                }
            },
            noon: {
                format: "color",
                value: {
                    r: 173,
                    g: 49,
                    b: 255
                }
            },
            afternoon: {
                format: "color",
                value: {
                    r: 153,
                    g: 0,
                    b: 229
                }
            },
            evening: {
                format: "color",
                value: {
                    r: 125,
                    g: 0,
                    b: 190
                }
            }
        },
        negative: {
            tone: {
                $root: {
                    format: "color",
                    value: {
                        r: 255,
                        g: 37,
                        b: 37,
                        a: 0.1
                    }
                },
                strong: {
                    format: "color",
                    value: {
                        r: 255,
                        g: 37,
                        b: 37,
                        a: 0.18
                    }
                }
            },
            noon: {
                format: "color",
                value: {
                    r: 238,
                    g: 0,
                    b: 0
                }
            },
            afternoon: {
                format: "color",
                value: {
                    r: 201,
                    g: 0,
                    b: 0
                }
            },
            evening: {
                format: "color",
                value: {
                    r: 166,
                    g: 0,
                    b: 0
                }
            }
        },
        positive: {
            tone: {
                $root: {
                    format: "color",
                    value: {
                        r: 0,
                        g: 191,
                        b: 78,
                        a: 0.16
                    }
                }
            },
            noon: {
                format: "color",
                value: {
                    r: 0,
                    g: 137,
                    b: 54
                }
            },
            afternoon: {
                format: "color",
                value: {
                    r: 0,
                    g: 115,
                    b: 44
                }
            },
            evening: {
                format: "color",
                value: {
                    r: 0,
                    g: 94,
                    b: 34
                }
            }
        },
        warning: {
            tone: {
                $root: {
                    format: "color",
                    value: {
                        r: 255,
                        g: 132,
                        b: 45,
                        a: 0.18
                    }
                }
            },
            noon: {
                format: "color",
                value: {
                    r: 255,
                    g: 121,
                    b: 51
                }
            },
            afternoon: {
                format: "color",
                value: {
                    r: 230,
                    g: 95,
                    b: 0
                }
            },
            evening: {
                format: "color",
                value: {
                    r: 196,
                    g: 80,
                    b: 0
                }
            }
        },
        notation: {
            tone: {
                $root: {
                    format: "color",
                    value: {
                        r: 249,
                        g: 187,
                        b: 0,
                        a: 0.28
                    }
                }
            },
            noon: {
                format: "color",
                value: {
                    r: 255,
                    g: 205,
                    b: 54
                }
            },
            afternoon: {
                format: "color",
                value: {
                    r: 238,
                    g: 178,
                    b: 0
                }
            },
            evening: {
                format: "color",
                value: {
                    r: 202,
                    g: 152,
                    b: 0
                }
            }
        },
        inverse: {
            noon: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0
                }
            },
            afternoon: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0.8
                }
            },
            evening: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0.62
                }
            }
        },
        overlay: {
            dark: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0.38
                }
            },
            darker: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0.54
                }
            },
            darkest: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0.94
                }
            }
        }
    }
};

const defs$6 = {
    content: {
        neutral: {
            $root: {
                format: "color",
                value: {
                    r: 255,
                    g: 255,
                    b: 255
                }
            },
            limited: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0.47
                }
            },
            low: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0.62
                }
            },
            high: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0
                }
            }
        },
        accent: {
            low: {
                format: "color",
                value: {
                    r: 1,
                    g: 66,
                    b: 255
                }
            }
        },
        guidance: {
            low: {
                format: "color",
                value: {
                    r: 145,
                    g: 0,
                    b: 219
                }
            }
        },
        negative: {
            low: {
                format: "color",
                value: {
                    r: 191,
                    g: 0,
                    b: 0
                }
            }
        },
        warning: {
            low: {
                format: "color",
                value: {
                    r: 158,
                    g: 66,
                    b: 0
                }
            }
        },
        notation: {
            low: {
                format: "color",
                value: {
                    r: 119,
                    g: 89,
                    b: 0
                }
            }
        },
        positive: {
            low: {
                format: "color",
                value: {
                    r: 0,
                    g: 109,
                    b: 41
                }
            }
        },
        inverse: {
            format: "color",
            value: {
                r: 255,
                g: 255,
                b: 255
            }
        },
        disabled: {
            format: "color",
            value: {
                r: 0,
                g: 0,
                b: 0,
                a: 0.21
            }
        },
        shadow: {
            dark: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0.09
                }
            },
            darker: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0.15
                }
            },
            darkest: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0.21
                }
            }
        }
    }
};

const defs$5 = {
    border: {
        neutral: {
            low: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0.12
                }
            },
            medium: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0.21
                }
            },
            high: {
                format: "color",
                value: {
                    r: 0,
                    g: 0,
                    b: 0
                }
            }
        },
        accent: {
            high: {
                format: "color",
                value: {
                    r: 1,
                    g: 66,
                    b: 255
                }
            }
        },
        negative: {
            medium: {
                format: "color",
                value: {
                    r: 255,
                    g: 37,
                    b: 37,
                    a: 0.32
                }
            }
        },
        positive: {
            medium: {
                format: "color",
                value: {
                    r: 0,
                    g: 191,
                    b: 78,
                    a: 0.54
                }
            }
        },
        disabled: {
            format: "color",
            value: {
                r: 0,
                g: 0,
                b: 0,
                a: 0.03
            }
        }
    }
};

const defs$4 = {
    color: {
        ...defs$7,
        ...defs$6,
        ...defs$5
    }
};

const defs$3 = {
    type: {
        face: {
            base: {
                value: ["Inter", "sans-serif"]
            },
            monospace: {
                value: ['"Roboto Mono"', "monospace"]
            }
        },
        weight: {
            thin: {
                value: 100
            },
            extraLight: {
                value: 200
            },
            light: {
                value: 300
            },
            regular: {
                value: 400
            },
            medium: {
                value: 500
            },
            semiBold: {
                value: 600
            },
            bold: {
                value: 700
            },
            extraBold: {
                value: 800
            },
            black: {
                value: 900
            }
        },
        scale: {
            "2h": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 2.5, space * 3]
            },
            "3": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 3, space * 4]
            },
            "3h": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 3.5, space * 5]
            },
            "4": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 4, space * 6]
            },
            "4h": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 4.5, space * 7]
            },
            "5": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 5, space * 7]
            },
            "6": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 6, space * 8]
            },
            "7": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 7, space * 9]
            },
            "8": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 8, space * 10]
            },
            "9": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 9, space * 11]
            },
            "10": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 10, space * 12]
            },
            "12": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 12, space * 14]
            },
            "16": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 16, space * 18]
            },
            "20": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 20, space * 22]
            },
            "24": {
                format: "typeScale",
                dependencies: ["dimension.space"],
                value: (space) => [space * 24, space * 26]
            }
        },
        tracking: {
            base: {
                format: "typeRelative",
                value: 0
            },
            tight4: {
                format: "typeRelative",
                value: -0.04
            },
            tight3: {
                format: "typeRelative",
                value: -0.03
            },
            tight2: {
                format: "typeRelative",
                value: -0.02
            },
            tight1: {
                format: "typeRelative",
                value: -0.01
            },
            loose1: {
                format: "typeRelative",
                value: 0.01
            },
            loose2: {
                format: "typeRelative",
                value: 0.02
            },
            loose3: {
                format: "typeRelative",
                value: 0.03
            },
            loose4: {
                format: "typeRelative",
                value: 0.04
            },
            loose8: {
                format: "typeRelative",
                value: 0.08
            }
        },
        feature: {
            base: {
                value: ['"ss01"', '"ss03"', '"calt"', '"case"']
            },
            tabular: {
                value: ['"ss01"', '"ss03"', '"calt"', '"case"', '"tnum"']
            },
            subscript: {
                value: ['"subs"']
            },
            superscript: {
                value: ['"sups"']
            }
        },
        underline: {
            offset: {
                format: "typeRelative",
                value: 0.1
            }
        }
    }
};

const defs$2 = {
    border: {
        stroke: {
            thin: {
                format: "measure",
                dependencies: ["dimension.space"],
                value: (space) => space / 4
            },
            extraLight: {
                format: "measure",
                dependencies: ["dimension.space"],
                value: (space) => space / 2
            }
        },
        corner: {
            sharp: {
                format: "measure",
                value: 0
            },
            small: {
                format: "measure",
                dependencies: ["dimension.space"],
                value: (space) => space / 2
            },
            medium: {
                format: "measure",
                dependencies: ["dimension.space"],
                value: (space) => space
            },
            large: {
                format: "measure",
                dependencies: ["dimension.space"],
                value: (space) => space * 2
            },
            xLarge: {
                format: "measure",
                dependencies: ["dimension.space"],
                value: (space) => space * 4
            },
            circle: {
                format: "measure",
                value: Infinity
            }
        }
    }
};

const elevation = (n, color) => ({
    x: 0,
    y: n / 2,
    blur: n,
    spread: 0,
    color
});
const defs$1 = {
    elevation: {
        level: {
            "1": {
                shadow: {
                    format: "shadow",
                    dependencies: ["dimension.space", "color.content.shadow.dark"],
                    value: (space, dark) => [
                        elevation(space, dark),
                        elevation(space, dark)
                    ]
                }
            },
            "2": {
                shadow: {
                    format: "shadow",
                    dependencies: [
                        "dimension.space",
                        "color.content.shadow.dark",
                        "color.content.shadow.darker"
                    ],
                    value: (space, dark, darker) => [elevation(space, dark), elevation(space * 2, darker)]
                }
            },
            "3": {
                shadow: {
                    format: "shadow",
                    dependencies: [
                        "dimension.space",
                        "color.content.shadow.darker",
                        "color.content.shadow.darkest"
                    ],
                    value: (space, darker, darkest) => [elevation(space * 2, darker), elevation(space * 4, darkest)]
                }
            },
            "4": {
                shadow: {
                    format: "shadow",
                    dependencies: [
                        "dimension.space",
                        "color.content.shadow.darker",
                        "color.content.shadow.darkest"
                    ],
                    value: (space, darker, darkest) => [elevation(space * 4, darker), elevation(space * 8, darkest)]
                }
            }
        }
    }
};

const defs = {
    ...defs$8,
    ...defs$4,
    ...defs$3,
    ...defs$2,
    ...defs$1
};

const getTokens = createDesignTokenReducer({
    defs,
    outputTransforms: {
        css: createOutputTransform$1({ prefix: "bds" }),
        json: createOutputTransform()
    }
});

/**
 * NB: We cannot use the Google Fonts CDN distribution of Inter, because it is outdated
 * and does not support the majority the font has to offer (italic, opentype features, etc)
 */
const FONT_URLS = [
    "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap",
    "https://rsms.me/inter/inter.css"
];
const getDesignTokensStyleSheetContent = (selector) => {
    if (!selector) {
        throw new Error("getDesignTokensStyleSheetContent requires a selector");
    }
    const [css] = getTokens({ output: ["css"] });
    return `${selector} { ${Object.entries(css)
        .map(([key, value]) => `${key}: ${value};`)
        .join(" ")} }`;
};
const getDesignTokensStyleSheet = (selector) => {
    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(getDesignTokensStyleSheetContent(selector));
    return stylesheet;
};
const rootDesignTokensStyleSheet = getDesignTokensStyleSheet(":root");
const hostDesignTokensStyleSheet = getDesignTokensStyleSheet(":host > *");
const fontLinks = FONT_URLS.map((url) => Object.assign(document.createElement("link"), {
    rel: "stylesheet",
    href: url
}));

let isUsingKeyboard = false;
const onKeyDown = ({ altKey, ctrlKey, metaKey }) => {
    if (!altKey && !ctrlKey && !metaKey) {
        isUsingKeyboard = true;
    }
};
const onPointerDown = () => {
    isUsingKeyboard = false;
};
const getKeyboardInteractionInfo = () => ({
    isUsingKeyboard
});
const attachGlobalKeyboardEvents = () => {
    document.addEventListener("keydown", onKeyDown, { passive: true });
    document.addEventListener("mousedown", onPointerDown, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, {
        passive: true
    });
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    return () => {
        document.removeEventListener("keydown", onKeyDown);
        document.removeEventListener("mousedown", onPointerDown);
        document.removeEventListener("pointerdown", onPointerDown);
        document.removeEventListener("touchstart", onPointerDown);
    };
};

const contextRoot = new t$3();
/**
 * Injects the font links
 *
 * We inject this to the document root, as font-face does not work at the shadow root.
 * See: https://bugs.chromium.org/p/chromium/issues/detail?id=336876
 *
 * This will also ensure consumer's applications are not left to be responsible for
 * requiring the exact font-face the Design System needs, as discrepancies can creep
 * in over time and managing changes would be harder to control.
 *
 * NB:
 * We cannot use a constructable stylesheet here because it does not support the use of @import
 */
const bootstrapFonts = () => {
    fontLinks.forEach((fontLink) => {
        const existingFontLink = document.head.querySelector(`link[href="${fontLink.href}"]`);
        // Ensure it only happens once
        if (!existingFontLink) {
            document.head.appendChild(fontLink);
        }
    });
};
/**
 * Attach a context root listener to the body, so that any unsatisfied context
 * requests can be re-dispatched if a provider is established later. This could
 * happen if an element is upgraded late, or if a provider is a scoped element
 * that is registered after the consumer dispatches the request.
 *
 * See https://lit.dev/docs/data/context/#contextroot
 */
const bootstrapContextRoot = (() => {
    let isAttached = false;
    return () => {
        // Ensure it only happens once
        if (!isAttached) {
            contextRoot.attach(document.body);
            isAttached = true;
        }
    };
})();
/**
 * Attach global root DOM events
 */
const bootstrapGlobalEvents = (() => {
    let isAttached = false;
    return () => {
        if (!isAttached) {
            attachGlobalKeyboardEvents();
            isAttached = true;
        }
    };
})();
/**
 * Consumers can call this to ensure the Design System has all that it needs on
 * the document root. Side effects should be kept to a minimum!
 *
 * NB:
 * This could be called repeatedly by many consumers, so ensure any optimizations
 * are built-in so that side-effects are a one-time thing.
 */
const bootstrap = () => {
    bootstrapFonts();
    bootstrapContextRoot();
    bootstrapGlobalEvents();
};

/**
 * Observes dependency array.
 * After the element has updated, invokes onChange if any references have changed.
 */
const createEffectController = (host, onChange, keys) => {
    const memo = new Map();
    const memoize = () => {
        keys.forEach((key) => {
            memo.set(key, host[key]);
        });
    };
    memoize();
    host.addController({
        hostUpdated: () => {
            const changed = keys.some((key) => host[key] !== memo.get(key));
            if (changed) {
                memoize();
                onChange();
            }
        }
    });
};

const compoundLayoutContext = n$7("BDS_COMPOUND_LAYOUT");
const DEFAULT_COMPOUND_LAYOUT_ITEM_INFO = { isCompound: false };
/**
 * Creates a compound layout provider controller
 * Allows consumers to subscribe to the provider's layout
 */
const createCompoundLayoutProviderController = (host) => {
    let providerRect;
    let rafRef;
    const subscribers = new Map();
    /**
     * Observe layout changes on host and subscribers
     *
     * We must use getBoundingClientRect instead of the entry rect,
     * because we specifically need the position data.
     *
     * As getBoundingClientRect is blocking, we must wrap it in an animation frame
     * to prevent the resizeObserver from thrashing, which will also give us a
     * performance benefit.
     */
    const resizeObserver = new ResizeObserver((entries) => {
        rafRef && cancelAnimationFrame(rafRef);
        rafRef = requestAnimationFrame(() => {
            for (const entry of entries) {
                if (entry.target === host) {
                    providerRect = host.getBoundingClientRect();
                }
            }
            // Invoke all subscribers that a change has happened
            invokeSubscribers();
        });
    });
    const subscribe = (element, callback) => {
        subscribers.set(element, callback);
        resizeObserver.observe(element, { box: "border-box" });
        return () => {
            subscribers.delete(element);
            resizeObserver.unobserve(element);
        };
    };
    const getRelativePositionFromRect = (rect) => {
        if (!rect) {
            return undefined;
        }
        return {
            top: rect.top - providerRect.top,
            right: -(rect.right - providerRect.right),
            bottom: -(rect.bottom - providerRect.bottom),
            left: rect.left - providerRect.left
        };
    };
    /**
     * Notify all subscribers with their layout info
     */
    const invokeSubscribers = () => {
        if (host.gap !== "none" || !host.isConnected || !providerRect) {
            subscribers.forEach((callback) => {
                callback(DEFAULT_COMPOUND_LAYOUT_ITEM_INFO);
            });
            return;
        }
        /**
         * Reduce over the items to resolve which ones are in the corner
         */
        const resolvedLayoutData = Array.from(subscribers.entries()).reduce((data, [element]) => {
            const relativePosition = getRelativePositionFromRect(element.getBoundingClientRect());
            if (!relativePosition) {
                return data;
            }
            if (!data.topLeft ||
                !data.topLeft[1] ||
                relativePosition.top < data.topLeft[1].top ||
                (relativePosition.top <= data.topLeft[1].top &&
                    relativePosition.left <= data.topLeft[1].left)) {
                Object.assign(data, { topLeft: [element, relativePosition] });
            }
            if (!data.topRight ||
                !data.topRight[1] ||
                relativePosition.top < data.topRight[1].top ||
                (relativePosition.top <= data.topRight[1].top &&
                    relativePosition.right <= data.topRight[1].right)) {
                Object.assign(data, { topRight: [element, relativePosition] });
            }
            if (!data.bottomRight ||
                !data.bottomRight[1] ||
                relativePosition.bottom < data.bottomRight[1].bottom ||
                (relativePosition.bottom <= data.bottomRight[1].bottom &&
                    relativePosition.right <= data.bottomRight[1].right)) {
                Object.assign(data, { bottomRight: [element, relativePosition] });
            }
            if (!data.bottomLeft ||
                !data.bottomLeft[1] ||
                relativePosition.bottom < data.bottomLeft[1].bottom ||
                (relativePosition.bottom <= data.bottomLeft[1].bottom &&
                    relativePosition.left <= data.bottomLeft[1].left)) {
                Object.assign(data, { bottomLeft: [element, relativePosition] });
            }
            return data;
        }, {
            topLeft: null,
            topRight: null,
            bottomRight: null,
            bottomLeft: null
        });
        subscribers.forEach((callback, element) => {
            callback({
                isCompound: true,
                isTopLeft: resolvedLayoutData.topLeft?.[0] === element,
                isTopRight: resolvedLayoutData.topRight?.[0] === element,
                isBottomRight: resolvedLayoutData.bottomRight?.[0] === element,
                isBottomLeft: resolvedLayoutData.bottomLeft?.[0] === element
            });
        });
    };
    new i$4(host, {
        context: compoundLayoutContext,
        initialValue: subscribe
    });
    /**
     * If gap ever changes, invoke the subscribers again
     */
    createEffectController(host, () => {
        invokeSubscribers();
    }, ["gap"]);
    host.addController({
        hostConnected: () => {
            resizeObserver.observe(host, { box: "border-box" });
        },
        hostDisconnected: () => {
            invokeSubscribers();
            subscribers.clear();
            resizeObserver.disconnect();
            rafRef && cancelAnimationFrame(rafRef);
        }
    });
};
/**
 * Allows a consumer to subscribe to a provider consumer's layout changes
 */
const createCompoundLayoutConsumerController = (host, onCompoundLayoutInfo) => {
    let unsubscribeRef;
    // Previous provider dispose ref
    let providerDisposeRef;
    new s$4(host, {
        context: compoundLayoutContext,
        callback: (subscribe, dispose) => {
            // Cleanup any existing provider subscriptions if it gets a new provider
            if (dispose !== providerDisposeRef) {
                providerDisposeRef?.();
                unsubscribeRef?.();
                providerDisposeRef = dispose;
            }
            if (subscribe) {
                // Subscribe to provider
                unsubscribeRef = subscribe(host, onCompoundLayoutInfo);
            }
            else {
                // Callback with default layout
                onCompoundLayoutInfo(DEFAULT_COMPOUND_LAYOUT_ITEM_INFO);
            }
        },
        subscribe: true
    });
    host.addController({
        hostDisconnected: () => {
            unsubscribeRef?.();
        }
    });
};

/**
 * Keep contexts that need to be referenced across components within the core package
 *
 * Context keys are strings, instead of a symbol reference, so that different builds that
 * do not share the same reference can still have a handle on the same context.
 * See [Lit Context – Context Equality](https://lit.dev/docs/data/context/#context-equality):
 */
/* Context for a Popover target for the open state */
const contextOpenContext = n$7("BDS_CONTEXT_OPEN");
/* Context to determine whether element has a popover ancestor */
const hasPopoverAncestorContext = n$7("BDS_HAS_POPOVER_ANCESTOR");
/* Context to determine whether element has a tooltip target ancestor */
const hasTooltipTargetAncestorContext = n$7("BDS_HAS_TOOLTIP_TARGET_ANCESTOR");
/* Context to determine whether element should be disabled based on its parent */
const disabledContext = n$7("BDS_DISABLED");

var contexts = /*#__PURE__*/Object.freeze({
    __proto__: null,
    compoundLayoutContext: compoundLayoutContext,
    contextOpenContext: contextOpenContext,
    disabledContext: disabledContext,
    hasPopoverAncestorContext: hasPopoverAncestorContext,
    hasTooltipTargetAncestorContext: hasTooltipTargetAncestorContext
});

/**
 * Creates an observable interface to allow consumers to observe the mounting
 * and unmounting of shadow DOM elements. This is so we can expose certain nodes in the
 * Shadow DOM asynchronously, rather than doing a simple sync query, which could be brittle.
 *
 * Whilst this does break encapsulation, it is occasionally useful for being able to attach
 * and remove event listeners to a specific element, or for complex use-cases.
 *
 * E.g.
 * ```ts
 * // Component
 * class MyComponent extends LitElement {
 *   private elementObservableRef = createObservableRef();
 *   public subscribeToElement = this.elementObservableRef.subscribe;
 *   render() {
 *     return html`<div ${ref(this.elementObservableRef.refCallback)}`;
 *   }
 * }
 *
 * // Consumer
 * const component = document.createElement('my-component');
 * const unsubscribeFromElement = component.subscribeToElement((element: Value) => {
 *   // consumer has an async callback for when internal node mounts/unmounts
 * });
 * unsubscribeFromElement(); // disconnect when appropriate
 * ```
 */
const createObservableRef = () => {
    /**
     * Subscribers is a Set of WeakRefs, so that we don't create a memory leak if
     * the callback function is not used anymore, and we don't hold on to the reference
     * to prevent it being garbage collected.
     */
    const subscriberRefs = new Set();
    let valueRef;
    return {
        subscribe: (subscriber) => {
            const subscriberRef = new WeakRef(subscriber);
            subscriberRefs.add(subscriberRef);
            if (valueRef) {
                subscriber(valueRef);
            }
            return () => {
                subscriberRefs.delete(subscriberRef);
            };
        },
        refCallback: (value) => {
            valueRef = value;
            for (const subscriberRef of subscriberRefs) {
                const subscriber = subscriberRef.deref();
                if (subscriber) {
                    subscriber(value);
                }
                else {
                    // Remove it from the set if the reference has been garbage collected
                    subscriberRefs.delete(subscriberRef);
                }
            }
        }
    };
};

/**
 * Creates a store interface to use within components
 */
const createStore$1 = (reducer, initialState) => {
    const subscribers = new Set();
    let state = initialState;
    return {
        getState: () => state,
        dispatch: (action) => {
            const nextState = reducer(state, action);
            if (nextState !== state) {
                state = nextState;
                subscribers.forEach((subscriber) => void subscriber());
            }
        },
        subscribe: (subscriber) => {
            subscribers.add(subscriber);
            subscriber();
            return () => {
                subscribers.delete(subscriber);
            };
        }
    };
};

const DEFAULT_OPTIONS$3 = {
    leading: true,
    trailing: true
};
const debounce = (fn, delay, options) => {
    const resolvedOptions = {
        ...DEFAULT_OPTIONS$3,
        ...(options ?? {})
    };
    let timer = null;
    let hasInvokedLeading = false;
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        if (resolvedOptions.leading && !timer) {
            fn(...args);
            hasInvokedLeading = true;
        }
        else {
            hasInvokedLeading = false;
        }
        timer = setTimeout(() => {
            if (resolvedOptions.trailing && !hasInvokedLeading) {
                fn(...args);
            }
            timer = null;
        }, delay);
    };
};

/**
 * Forces focus on any element, whilst also restoring the element's natural tabindex
 */
const forceFocus = (element) => {
    if (!element || !element.isConnected) {
        return;
    }
    /**
     * Cache the natural tabindex
     */
    const naturalTabIndex = element.getAttribute("tabindex");
    /**
     * Override the tabindex, to make it 'focusable'
     */
    element.setAttribute("tabindex", "-1");
    /**
     * Trigger focus on it
     *
     * NB: this will trigger a visual focus-visible state
     */
    element.focus();
    /**
     * Set a one-time blur event (that removes itself) to restore the natural tab index.
     * This is because if you immediately restore it, Safari will break and move
     * focus to the body instead.
     */
    element.addEventListener("blur", () => {
        if (naturalTabIndex) {
            element.setAttribute("tabindex", naturalTabIndex);
        }
        else {
            element.removeAttribute("tabindex");
        }
    }, { once: true });
};

const findDeepCancel = Symbol();
/**
 * Finds a deep element downwards on a linear path.
 *
 * When it encounters a slot, it will cross shadow boundaries into the Light DOM.
 * Will only traverse through the 'first node', i.e. first slotted element, or first child.
 *
 * Returning findDeepCancel symbol within predicate will short-circuit the traversal.
 */
const findDeepDown = (node, predicate) => {
    const matches = predicate(node);
    if (matches === findDeepCancel) {
        return null;
    }
    else if (matches) {
        return node;
    }
    else if (node instanceof HTMLSlotElement) {
        return findDeepDown(node.assignedNodes()[0], predicate);
    }
    else if (node instanceof Element && node.children.length) {
        return findDeepDown(node.children[0], predicate);
    }
    return null;
};
/**
 * Finds a deep element upwards on a linear path.
 *
 * When it encounters a slot, it will cross shadow boundaries into the Light DOM.
 *
 * Returning findDeepCancel symbol within predicate will short-circuit the traversal.
 */
const findDeepUp = (node, predicate) => {
    const matches = predicate(node);
    if (matches === findDeepCancel) {
        return null;
    }
    else if (matches) {
        return node;
    }
    else if (node instanceof HTMLSlotElement && node.shadowRoot) {
        return findDeepUp(node.shadowRoot.host, predicate);
    }
    else if (node.parentElement) {
        return findDeepUp(node.parentElement, predicate);
    }
    return null;
};

/**
 * Array.includes is problematic with ReadonlyArray in TS,
 * so we use generics to enable narrowing
 */
const includes$1 = (arr, value) => arr.includes(value);

/**
 * Factory for creating a normalizer with a set of valid values and a default value.
 *
 * E.g.
 * `const getVariant = createNormalizer(['regular', 'accent'] as const, 'regular')`.
 *
 * Returns default value if the provided value is invalid or undefined.
 */
const createNormalizer = (values, defaultValue) => (value) => includes$1(values, value) ? value : defaultValue ?? undefined;
/**
 * Factory for creating a normalizer with a set of valid values in a scale, and a default value.
 *
 * E.g., this can be used to create a 'size' scale:
 * `const getSize = createScaleNormalizer(['x-small', 'small', 'medium'] as const, 'small')`
 *
 * Returns default value if the provided value is invalid or undefined.
 * `offset` can be used to step up or down in the given scale.
 */
const createScaleNormalizer = (values, defaultValue) => (value, offset) => {
    const valueIndex = includes$1(values, value)
        ? values.indexOf(value)
        : values.indexOf(defaultValue);
    // Ensures value index is clamped within scale
    const offsetValue = values[Math.max(0, Math.min(valueIndex + (offset ?? 0), values.length - 1))];
    return offsetValue;
};

const isValid = (Element) => Element.tagName && Element.tagName.startsWith("bds-");
/**
 * Registers components on the global customElements registry
 * Components must have a static tagName that matches bds-*
 */
const register = (Element) => {
    const Elements = [].concat(Element);
    if (!Elements.length) {
        throw new Error("No Elements provided to register");
    }
    // Keep this transactional; all elements must be valid before any elements are registered
    if (Elements.some((Element) => !isValid(Element))) {
        throw new Error("Elements must have a static tagName that matches bds-*");
    }
    Elements.forEach((Element) => {
        if (!window.customElements.get(Element.tagName)) {
            window.customElements.define(Element.tagName, Element);
        }
    });
};

const shallowEqual = (a, b) => {
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    return !Object.entries(b).some(([key, bValue]) => key in a && bValue !== a[key]);
};

/**
 * Factory for creating a type helper.
 */
const createTypeBem = ({ name, sizes, defaultSize }) => {
    const getSize = createScaleNormalizer(sizes, defaultSize);
    return (props) => {
        const resolvedSize = getSize(props.size, props.sizeOffset);
        return createBem(name)({
            ...(resolvedSize ? { [resolvedSize]: true } : {})
        });
    };
};
/**
 * Helper functions for 'tagging' elements with typography class names.
 * Each helper generates a classlist that can be applied to an element.
 *
 * E.g. typeHeading({size: 'large'}) => 'bds-type-heading bds-type-heading--large'
 *
 * See [[../mixins/base-mixin/typography-styles.ts]] for typography styles
 */
const TYPE_HEADING_SIZES = [
    "5x-small",
    "4x-small",
    "3x-small",
    "2x-small",
    "x-small",
    "small",
    "medium",
    "large"
];
/**
 * Typography: Heading
 */
const typeHeading = createTypeBem({
    name: "bds-type-heading",
    sizes: TYPE_HEADING_SIZES,
    defaultSize: "small"
});
const TYPE_DETAIL_SIZES = [
    "x-small",
    "small",
    "medium",
    "large"
];
/**
 * Typography: Detail
 */
const typeDetail = createTypeBem({
    name: "bds-type-detail",
    sizes: TYPE_DETAIL_SIZES,
    defaultSize: "small"
});
const TYPE_BODY_SIZES = ["x-small", "small", "medium", "large"];
/**
 * Typography: Body
 */
const typeBody = createTypeBem({
    name: "bds-type-body",
    sizes: TYPE_BODY_SIZES,
    defaultSize: "small"
});
const TYPE_LABEL_SIZES = [
    "x-small",
    "small",
    "medium",
    "large"
];
/**
 * Typography: Label
 */
const typeLabel = createTypeBem({
    name: "bds-type-label",
    sizes: TYPE_LABEL_SIZES,
    defaultSize: "small"
});
const TYPE_NUMERIC_SIZES = [
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "2x-large",
    "3x-large",
    "4x-large",
    "5x-large",
    "6x-large",
    "7x-large",
    "8x-large"
];
/**
 * Typography: Numeric
 */
const typeNumeric = createTypeBem({
    name: "bds-type-numeric",
    sizes: TYPE_NUMERIC_SIZES,
    defaultSize: "small"
});

const appliedClassMixins = new WeakMap();

/** Vefify if the Mixin was previously applyed
 * @private
 * @param {function} mixin      Mixin being applyed
 * @param {object} superClass   Class receiving the new mixin
 * @returns {boolean}
 */
function wasMixinPreviouslyApplied(mixin, superClass) {
  let klass = superClass;
  while (klass) {
    if (appliedClassMixins.get(klass) === mixin) {
      return true;
    }
    klass = Object.getPrototypeOf(klass);
  }
  return false;
}

/** Apply each mixin in the chain to make sure they are not applied more than once to the final class.
 * @export
 * @param {function} mixin      Mixin to be applyed
 * @returns {object}            Mixed class with mixin applied
 */
function dedupeMixin(mixin) {
  return superClass => {
    if (wasMixinPreviouslyApplied(mixin, superClass)) {
      return superClass;
    }
    const mixedClass = mixin(superClass);
    appliedClassMixins.set(mixedClass, mixin);
    return mixedClass;
  };
}

/**
 * @typedef {import('./types').RenderOptions} RenderOptions
 * @typedef {import('./types').ScopedElementsMixin} ScopedElementsMixin
 * @typedef {import('./types').ScopedElementsHost} ScopedElementsHost
 * @typedef {import('./types').ScopedElementsMap} ScopedElementsMap
 * @typedef {import('@lit/reactive-element').CSSResultOrNative} CSSResultOrNative
 */

const version = '2.2.2';
// eslint-disable-next-line dot-notation
const versions = window['scopedElementsVersions'] || (window['scopedElementsVersions'] = []);
if (!versions.includes(version)) {
  versions.push(version);
}

// @ts-ignore
const supportsScopedRegistry = !!ShadowRoot.prototype.createElement;

/**
 * @template {import('./types').Constructor<HTMLElement>} T
 * @param {T} superclass
 * @return {T & import('./types').Constructor<ScopedElementsHost>}
 */
const ScopedElementsMixinImplementation = superclass =>
  /** @type {ScopedElementsHost} */
  class ScopedElementsHost extends superclass {
    /**
     * Obtains the scoped elements definitions map if specified.
     *
     * @returns {ScopedElementsMap}
     */
    static get scopedElements() {
      return {};
    }

    static get scopedElementsVersion() {
      return version;
    }

    /**
     * Obtains the ShadowRoot options.
     *
     * @type {ShadowRootInit}
     */
    static get shadowRootOptions() {
      return this.__shadowRootOptions;
    }

    /**
     * Set the shadowRoot options.
     *
     * @param {ShadowRootInit} value
     */
    static set shadowRootOptions(value) {
      this.__shadowRootOptions = value;
    }

    /**
     * Obtains the element styles.
     *
     * @returns {CSSResultOrNative[]}
     */
    static get elementStyles() {
      return this.__elementStyles;
    }

    static set elementStyles(styles) {
      this.__elementStyles = styles;
    }

    // either TS or ESLint will complain here
    // eslint-disable-next-line no-unused-vars
    constructor(..._args) {
      super();
      /** @type {RenderOptions} */
      this.renderOptions = this.renderOptions || undefined;
    }

    /**
     * Obtains the CustomElementRegistry associated to the ShadowRoot.
     *
     * @returns {CustomElementRegistry}
     */
    get registry() {
      // @ts-ignore
      return this.constructor.__registry;
    }

    /**
     * Set the CustomElementRegistry associated to the ShadowRoot
     *
     * @param {CustomElementRegistry} registry
     */
    set registry(registry) {
      // @ts-ignore
      this.constructor.__registry = registry;
    }

    createRenderRoot() {
      const { scopedElements, shadowRootOptions, elementStyles } =
        /** @type {typeof ScopedElementsHost} */ (this.constructor);

      const shouldCreateRegistry =
        !this.registry ||
        // @ts-ignore
        (this.registry === this.constructor.__registry &&
          !Object.prototype.hasOwnProperty.call(this.constructor, '__registry'));

      /**
       * Create a new registry if:
       * - the registry is not defined
       * - this class doesn't have its own registry *AND* has no shared registry
       */
      if (shouldCreateRegistry) {
        this.registry = supportsScopedRegistry ? new CustomElementRegistry() : customElements;
        for (const [tagName, klass] of Object.entries(scopedElements)) {
          this.defineScopedElement(tagName, klass);
        }
      }

      /** @type {ShadowRootInit} */
      const options = {
        mode: 'open',
        ...shadowRootOptions,
        customElements: this.registry,
        registry: this.registry,
      };

      const createdRoot = this.attachShadow(options);
      if (supportsScopedRegistry) {
        this.renderOptions.creationScope = createdRoot;
      }

      if (createdRoot instanceof ShadowRoot) {
        S$3(createdRoot, elementStyles);
        this.renderOptions.renderBefore = this.renderOptions.renderBefore || createdRoot.firstChild;
      }

      return createdRoot;
    }

    createScopedElement(tagName) {
      const root = supportsScopedRegistry ? this.shadowRoot : document;
      // @ts-ignore polyfill to support createElement on shadowRoot is loaded
      return root.createElement(tagName);
    }

    /**
     * Defines a scoped element.
     *
     * @param {string} tagName
     * @param {typeof HTMLElement} klass
     */
    defineScopedElement(tagName, klass) {
      const registeredClass = this.registry.get(tagName);
      if (registeredClass && supportsScopedRegistry === false && registeredClass !== klass) {
        // eslint-disable-next-line no-console
        console.error(
          [
            `You are trying to re-register the "${tagName}" custom element with a different class via ScopedElementsMixin.`,
            'This is only possible with a CustomElementRegistry.',
            'Your browser does not support this feature so you will need to load a polyfill for it.',
            'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.',
            'e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"></script>" as your first script tag.',
            'For more details you can visit https://open-wc.org/docs/development/scoped-elements/',
          ].join('\n'),
        );
      }
      if (!registeredClass) {
        return this.registry.define(tagName, klass);
      }
      return this.registry.get(tagName);
    }

    /**
     * @deprecated use the native el.tagName instead
     *
     * @param {string} tagName
     * @returns {string} the tag name
     */
    // eslint-disable-next-line class-methods-use-this
    getScopedTagName(tagName) {
      // @ts-ignore
      return this.constructor.getScopedTagName(tagName);
    }

    /**
     * @deprecated use the native el.tagName instead
     *
     * @param {string} tagName
     * @returns {string} the tag name
     */
    // eslint-disable-next-line class-methods-use-this
    static getScopedTagName(tagName) {
      // @ts-ignore
      return this.__registry.get(tagName) ? tagName : undefined;
    }
  };

const ScopedElementsMixin = dedupeMixin(ScopedElementsMixinImplementation);

const resetStyles = i$9 `
  /**
   * Applies to children of host, so that they cannot be overridden
   */
  :host > * {
    /**
     * Prevents consumers from overriding styles using rules that are inheritable,
     * and thus pierce the shadow DOM boundary.
     *
     * Rather than setting 'all: initial', which can have unintended consequences,
     * we are explicit about which inheritable properties we do not want to inherit,
     * and provide a sensible default.
     */
    font-size-adjust: none;
    font-style: normal;
    font-stretch: normal;
    font-synthesis: none;
    text-align: start;
    text-align-last: auto;
    text-indent: 0;
    text-justify: auto;
    text-shadow: none;
    text-transform: none;
    text-underline-position: auto;
    white-space: normal;
    word-spacing: normal;
    word-break: normal;
    line-break: auto;
    caret-color: currentColor;
    font-optical-sizing: auto;
    hyphens: "manual";
    orphans: 2;
    widows: 2;
  }

  :host,
  *,
  ::slotted(*),
  *::before,
  ::slotted(*)::before,
  *::after,
  ::slotted(*)::after {
    box-sizing: border-box;
  }

  :host {
    display: block;
  }

  p,
  ::slotted(p),
  ol,
  ::slotted(ol),
  ul,
  ::slotted(ul),
  li,
  ::slotted(li),
  dl,
  ::slotted(dl),
  dt,
  ::slotted(dt),
  dd,
  ::slotted(dd),
  blockquote,
  ::slotted(blockquote),
  figure,
  ::slotted(figure),
  fieldset,
  ::slotted(fieldset),
  legend,
  ::slotted(legend),
  button,
  ::slotted(button),
  input,
  ::slotted(input),
  textarea,
  ::slotted(textarea),
  select,
  ::slotted(select),
  pre,
  ::slotted(pre),
  iframe,
  ::slotted(iframe),
  dialog,
  ::slotted(dialog),
  hr,
  ::slotted(hr),
  h1,
  ::slotted(h1),
  h2,
  ::slotted(h2),
  h3,
  ::slotted(h3),
  h4,
  ::slotted(h4),
  h5,
  ::slotted(h5),
  h6,
  ::slotted(h6) {
    margin: 0;
    border: 0;
    padding: 0;
    outline: 0;
  }

  h1,
  ::slotted(h1),
  h2,
  ::slotted(h2),
  h3,
  ::slotted(h3),
  h4,
  ::slotted(h4),
  h5,
  ::slotted(h5),
  h6,
  ::slotted(h6) {
    font-size: inherit;
    font-weight: inherit;
  }

  ul,
  ::slotted(ul) {
    list-style: none;
  }

  label,
  ::slotted(label) {
    display: block;
  }

  button,
  ::slotted(button),
  input,
  ::slotted(input),
  textarea,
  ::slotted(textarea),
  select,
  ::slotted(select) {
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    color: inherit;
    background-color: transparent;
    appearance: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a,
  ::slotted(a) {
    color: inherit;
    text-decoration: inherit;
    outline: 0;
  }

  img,
  ::slotted(img),
  video,
  ::slotted(video) {
    display: block;
    block-size: auto;
    max-inline-size: 100%;
  }

  iframe,
  ::slotted(iframe) {
    border: 0;
  }

  table,
  ::slotted(table) {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  ::slotted(td),
  th,
  ::slotted(th) {
    padding: 0;
  }
`;

/**
 * Internal classes for applying typography styles to elements within BDS components.
 * These can be thought of as helpers that compose together Design Tokens that
 * always go together for specific text elements.
 *
 * NB:
 * This _could_ be exposed to the public API at some point, so ensure
 * it is generic and does not include :root/:host styles.
 *
 * See [[../../lib/typography.ts]] for functions that generate classnames for each
 * text style.
 */
const typographyClassStyles = i$9 `
  /**
   * Typography: Heading
   */

  /* Default */
  .bds-type-heading,
  .bds-type-heading--small {
    font-size: var(--bds--type--scale--6--size);
    line-height: var(--bds--type--scale--6--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  .bds-type-heading--5x-small {
    font-size: var(--bds--type--scale--3--size);
    line-height: var(--bds--type--scale--3--leading);
    font-weight: var(--bds--type--weight--bold);
    letter-spacing: var(--bds--type--tracking--loose-2);
  }

  .bds-type-heading--4x-small {
    font-size: var(--bds--type--scale--3h--size);
    line-height: var(--bds--type--scale--3h--leading);
    font-weight: var(--bds--type--weight--bold);
    letter-spacing: var(--bds--type--tracking--loose-1);
  }

  .bds-type-heading--3x-small {
    font-size: var(--bds--type--scale--4--size);
    line-height: var(--bds--type--scale--4--leading);
    font-weight: var(--bds--type--weight--bold);
    letter-spacing: var(--bds--type--tracking--base);
  }

  .bds-type-heading--2x-small {
    font-size: var(--bds--type--scale--4h--size);
    line-height: var(--bds--type--scale--4h--leading);
    font-weight: var(--bds--type--weight--bold);
    letter-spacing: var(--bds--type--tracking--base);
  }

  .bds-type-heading--x-small {
    font-size: var(--bds--type--scale--5--size);
    line-height: var(--bds--type--scale--5--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  .bds-type-heading--medium {
    font-size: var(--bds--type--scale--8--size);
    line-height: var(--bds--type--scale--8--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  .bds-type-heading--large {
    font-size: var(--bds--type--scale--10--size);
    line-height: var(--bds--type--scale--10--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  /**/

  /**
   * Typography: Detail
   */

  .bds-type-detail {
    text-transform: uppercase;
    font-weight: var(--bds--type--weight--medium);
    letter-spacing: var(--bds--type--tracking--loose-8);
  }

  /* Default */
  .bds-type-detail,
  .bds-type-detail--small {
    font-size: var(--bds--type--scale--3--size);
    line-height: var(--bds--type--scale--3--leading);
  }

  .bds-type-detail--x-small {
    font-size: var(--bds--type--scale--2h--size);
    line-height: var(--bds--type--scale--2h--leading);
  }

  .bds-type-detail--medium {
    font-size: var(--bds--type--scale--3h--size);
    line-height: var(--bds--type--scale--3h--leading);
  }

  .bds-type-detail--large {
    font-size: var(--bds--type--scale--4--size);
    line-height: var(--bds--type--scale--4--leading);
  }

  /**/

  /**
   * Typography: Body
   */

  .bds-type-body {
    font-weight: var(--bds--type--weight--regular);
  }

  /* Default */
  .bds-type-body,
  .bds-type-body--small {
    font-size: var(--bds--type--scale--3h--size);
    line-height: var(--bds--type--scale--3h--leading);
    letter-spacing: var(--bds--type--tracking--loose-1);
  }

  .bds-type-body--x-small {
    font-size: var(--bds--type--scale--3--size);
    line-height: var(--bds--type--scale--3--leading);
    letter-spacing: var(--bds--type--tracking--loose-2);
  }

  .bds-type-body--medium {
    font-size: var(--bds--type--scale--4--size);
    line-height: var(--bds--type--scale--4--leading);
    letter-spacing: var(--bds--type--tracking--base);
  }

  .bds-type-body--large {
    font-size: var(--bds--type--scale--4h--size);
    line-height: var(--bds--type--scale--4h--leading);
    letter-spacing: var(--bds--type--tracking--base);
  }

  .bds-type-body b,
  .bds-type-body strong,
  .bds-type-body ::slotted(b),
  .bds-type-body ::slotted(strong) {
    font-weight: var(--bds--type--weight--bold);
  }

  /**/

  /**
   * Typography: Label
   */

  .bds-type-label {
    font-weight: var(--bds--type--weight--semi-bold);
  }

  /* Default */
  .bds-type-label,
  .bds-type-label--small {
    font-size: var(--bds--type--scale--3h--size);
    line-height: var(--bds--type--scale--3h--leading);
    letter-spacing: var(--bds--type--tracking--loose-1);
  }

  .bds-type-label--x-small {
    font-size: var(--bds--type--scale--3--size);
    line-height: var(--bds--type--scale--3--leading);
    letter-spacing: var(--bds--type--tracking--loose-2);
  }

  .bds-type-label--medium {
    font-size: var(--bds--type--scale--4--size);
    line-height: var(--bds--type--scale--4--leading);
    letter-spacing: var(--bds--type--tracking--base);
  }

  .bds-type-label--large {
    font-size: var(--bds--type--scale--4h--size);
    line-height: var(--bds--type--scale--4h--leading);
    letter-spacing: var(--bds--type--tracking--base);
  }

  /**/

  /**
   * Typography: Numeric
   */

  .bds-type-numeric {
    font-feature-settings: var(--bds--type--feature--tabular);
  }

  /* Default */
  .bds-type-numeric,
  .bds-type-numeric--small {
    font-size: var(--bds--type--scale--3h--size);
    line-height: var(--bds--type--scale--3h--leading);
    font-weight: var(--bds--type--weight--regular);
    letter-spacing: var(--bds--type--tracking--loose-1);
  }

  .bds-type-numeric--x-small {
    font-size: var(--bds--type--scale--3--size);
    line-height: var(--bds--type--scale--3--leading);
    font-weight: var(--bds--type--weight--regular);
    letter-spacing: var(--bds--type--tracking--loose-2);
  }

  .bds-type-numeric--medium {
    font-size: var(--bds--type--scale--4--size);
    line-height: var(--bds--type--scale--4--leading);
    font-weight: var(--bds--type--weight--regular);
    letter-spacing: var(--bds--type--tracking--base);
  }

  .bds-type-numeric--large {
    font-size: var(--bds--type--scale--4h--size);
    line-height: var(--bds--type--scale--4h--leading);
    font-weight: var(--bds--type--weight--regular);
    letter-spacing: var(--bds--type--tracking--base);
  }

  .bds-type-numeric--x-large {
    font-size: var(--bds--type--scale--5--size);
    line-height: var(--bds--type--scale--5--leading);
    font-weight: var(--bds--type--weight--light);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  .bds-type-numeric--2x-large {
    font-size: var(--bds--type--scale--6--size);
    line-height: var(--bds--type--scale--6--leading);
    font-weight: var(--bds--type--weight--light);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  .bds-type-numeric--3x-large {
    font-size: var(--bds--type--scale--8--size);
    line-height: var(--bds--type--scale--8--leading);
    font-weight: var(--bds--type--weight--light);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  .bds-type-numeric--4x-large {
    font-size: var(--bds--type--scale--10--size);
    line-height: var(--bds--type--scale--10--leading);
    font-weight: var(--bds--type--weight--light);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  .bds-type-numeric--5x-large {
    font-size: var(--bds--type--scale--12--size);
    line-height: var(--bds--type--scale--12--leading);
    font-weight: var(--bds--type--weight--light);
    letter-spacing: var(--bds--type--tracking--tight-4);
  }

  .bds-type-numeric--6x-large {
    font-size: var(--bds--type--scale--16--size);
    line-height: var(--bds--type--scale--16--leading);
    font-weight: var(--bds--type--weight--light);
    letter-spacing: var(--bds--type--tracking--tight-4);
  }

  .bds-type-numeric--7x-large {
    font-size: var(--bds--type--scale--20--size);
    line-height: var(--bds--type--scale--20--leading);
    font-weight: var(--bds--type--weight--light);
    letter-spacing: var(--bds--type--tracking--tight-4);
  }

  .bds-type-numeric--8x-large {
    font-size: var(--bds--type--scale--24--size);
    line-height: var(--bds--type--scale--24--leading);
    font-weight: var(--bds--type--weight--light);
    letter-spacing: var(--bds--type--tracking--tight-4);
  }

  .bds-type-numeric b,
  .bds-type-numeric strong,
  .bds-type-numeric ::slotted(b),
  .bds-type-numeric ::slotted(strong) {
    font-weight: var(--bds--type--weight--bold);
  }

  .bds-type-numeric--x-large b,
  .bds-type-numeric--x-large strong,
  .bds-type-numeric--x-large ::slotted(b),
  .bds-type-numeric--x-large ::slotted(strong),
  .bds-type-numeric--2x-large b,
  .bds-type-numeric--2x-large strong,
  .bds-type-numeric--2x-large ::slotted(b),
  .bds-type-numeric--2x-large ::slotted(strong),
  .bds-type-numeric--3x-large b,
  .bds-type-numeric--3x-large strong,
  .bds-type-numeric--3x-large ::slotted(b),
  .bds-type-numeric--3x-large ::slotted(strong),
  .bds-type-numeric--4x-large b,
  .bds-type-numeric--4x-large strong,
  .bds-type-numeric--4x-large ::slotted(b),
  .bds-type-numeric--4x-large ::slotted(strong),
  .bds-type-numeric--5x-large b,
  .bds-type-numeric--5x-large strong,
  .bds-type-numeric--5x-large ::slotted(b),
  .bds-type-numeric--5x-large ::slotted(strong),
  .bds-type-numeric--6x-large b,
  .bds-type-numeric--6x-large strong,
  .bds-type-numeric--6x-large ::slotted(b),
  .bds-type-numeric--6x-large ::slotted(strong),
  .bds-type-numeric--7x-large b,
  .bds-type-numeric--7x-large strong,
  .bds-type-numeric--7x-large ::slotted(b),
  .bds-type-numeric--7x-large ::slotted(strong),
  .bds-type-numeric--8x-large b,
  .bds-type-numeric--8x-large strong,
  .bds-type-numeric--8x-large ::slotted(b),
  .bds-type-numeric--8x-large ::slotted(strong) {
    font-weight: var(--bds--type--weight--extra-bold);
  }

  /**/

  /**
   * Typography: Code
   */

  .bds-type-code {
    font-family: var(--bds--type--face--monospace);
    font-weight: var(--bds--type--weight--regular);
  }

  /* Default */
  .bds-type-code,
  .bds-type-code--small {
    font-size: var(--bds--type--scale--3h--size);
    line-height: var(--bds--type--scale--3h--leading);
    letter-spacing: var(--bds--type--tracking--loose-1);
  }

  .bds-type-code--x-small {
    font-size: var(--bds--type--scale--3--size);
    line-height: var(--bds--type--scale--3--leading);
    letter-spacing: var(--bds--type--tracking--loose-2);
  }

  .bds-type-code--medium {
    font-size: var(--bds--type--scale--4--size);
    line-height: var(--bds--type--scale--4--leading);
    letter-spacing: var(--bds--type--tracking--base);
  }

  .bds-type-code--large {
    font-size: var(--bds--type--scale--4h--size);
    line-height: var(--bds--type--scale--4h--leading);
    letter-spacing: var(--bds--type--tracking--base);
  }

  /**/

  /**
   * Typography: Display headings
   */

  .bds-type-display {
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  /* Default */
  .bds-type-display,
  .bds-type-display--small {
    font-size: var(--bds--type--scale--16--size);
    line-height: var(--bds--type--scale--16--leading);
  }

  .bds-type-display--x-small {
    font-size: var(--bds--type--scale--12--size);
    line-height: var(--bds--type--scale--12--leading);
  }

  .bds-type-display--medium {
    font-size: var(--bds--type--scale--20--size);
    line-height: var(--bds--type--scale--20--leading);
  }

  .bds-type-display--large {
    font-size: var(--bds--type--scale--24--size);
    line-height: var(--bds--type--scale--24--leading);
  }

  /**/

  /**
   * Typography: Quote
   */

  .bds-type-quote {
    font-weight: var(--bds--type--weight--semi-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  /* Default */
  .bds-type-quote,
  .bds-type-quote--small {
    font-size: var(--bds--type--scale--6--size);
    line-height: var(--bds--type--scale--6--leading);
  }

  .bds-type-quote--x-small {
    font-size: var(--bds--type--scale--5--size);
    line-height: var(--bds--type--scale--5--leading);
  }

  .bds-type-quote--medium {
    font-size: var(--bds--type--scale--8--size);
    line-height: var(--bds--type--scale--8--leading);
  }

  .bds-type-quote--large {
    font-size: var(--bds--type--scale--10--size);
    line-height: var(--bds--type--scale--10--leading);
  }

  /**/
`;

const styles$s = [
    resetStyles,
    hostDesignTokensStyleSheet,
    i$9 `
    /**
     * Applies to children of host, so that they cannot be overridden
     */
    :host > * {
      /**
       * Core typography
       *
       * All of these style rules are inheritable, so do not need to be
       * applied everywhere.
       */
      color: var(--bds--color--content--neutral--high);
      font-family: var(--bds--type--face--base);
      font-feature-settings: var(--bds--type--feature--base);
      text-underline-offset: var(--bds--type--underline--offset);
      font-variant: common-ligatures;
      font-synthesis: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      hyphenate-character: "–";
      text-wrap: pretty;

      /**
       * Default text scale; equivalent of bds-type-body--small
       * (see typography-styles)
       */
      font-size: var(--bds--type--scale--3h--size);
      line-height: var(--bds--type--scale--3h--leading);
      font-weight: var(--bds--type--weight--regular);
      letter-spacing: var(--bds--type--tracking--loose-1);
    }

    /**
     * Generic spans
     */

    b,
    strong,
    ::slotted(b),
    ::slotted(strong) {
      /**
       * Allow any type styles to go bolder than their current weight
       * For more specific styles for each type class, see the typography styles
       */
      font-weight: bolder;
    }

    em,
    i,
    ::slotted(em),
    ::slotted(i) {
      font-style: italic;
    }

    sub,
    sup,
    ::slotted(sub),
    ::slotted(sup) {
      vertical-align: baseline;
      font-size: inherit;
    }

    sub,
    ::slotted(sub) {
      font-feature-settings: var(--bds--type--feature--subscript);
    }

    sup,
    ::slotted(sup) {
      font-feature-settings: var(--bds--type--feature--superscript);
    }

    mark,
    ::slotted(mark) {
      background-color: mark;
      color: marktext;
    }

    ::slotted(a) {
      font-weight: var(--bds--type--weight--semi-bold);
      text-decoration: underline;
      color: inherit;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }

    ::slotted(a:hover),
    ::slotted(a:focus) {
      color: var(--bds--color--content--accent--low);
    }

    ::slotted(a:focus-visible) {
      outline: var(--bds--border--stroke--extra-light) solid currentColor;
      outline-offset: 2px;
      border-radius: 1px;
    }

    /**/
  `,
    typographyClassStyles
];

const isSafari = navigator.userAgent.includes("Safari/") &&
    !navigator.userAgent.includes("Chrome/");
const BaseMixin = dedupeMixin((SuperClass) => {
    class BaseMixin extends ScopedElementsMixin(SuperClass) {
        static { this.styles = styles$s; }
        static { this.eventCallbackMap = {}; }
        static { this.shadowRootOptions = {
            ...s$8.shadowRootOptions,
            /**
             * For some reason, Safari thinks it's sensible to focus on any shadow host
             * that does not have any focusable children within its shadow DOM,
             * so we must turn on delegatesFocus for every element when using Safari.
             */
            delegatesFocus: isSafari || s$8.shadowRootOptions.delegatesFocus
        }; }
        constructor(...args) {
            super(...args);
            bootstrap();
        }
    }
    return BaseMixin;
});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$3=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$3=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$6(n){return (t,o)=>void 0!==o?e$3(n,t,o):i$3(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$2(t){return n$6({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$6=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$2(i,n){return o$6({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$5;null!=(null===(n$5=window.HTMLSlotElement)||void 0===n$5?void 0:n$5.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
 * NB:
 * This decorator is purposely utilizing Lit's `decorateProperty` to try to mitigate discrepancies
 * in the decorator implementation. When the current TS/Babel implementation changes to use the
 * proposed standard, Lit _should_ handle this internally within this function.
 */
const DEFAULT_OPTIONS$2 = {
    provide: false,
    consume: false,
    precedence: "own"
};
const resolveOptions$1 = (options) => ({ ...DEFAULT_OPTIONS$2, ...options });
/**
 * ### Inherit decorator (experimental!)
 *
 * Using a context, you can choose to provide a value, consume a value, or both.
 * - `provide: true` will set up a new context root, and provide the property value
 *   to any descendant consumers.
 * - `consume: true` will consume a context value from a provider ancestor.
 * - `provide: true; consume: true` will act as both a provider, and a consumer,
 *   and also relay any value from a provider ancestor down to its own consumers.
 *
 * The `precedence` option determines which value takes precedence.
 * If `precedence="own"` (default), a value explicitly set on a consumer will override
 * any value from a provider ancestor. When `precedence="ancestor"`, a consumer will
 * always use the provider ancestor's value, regardless of whether it has its own value
 * explicitly set. **Warning:** as a caveat, a consumer's class field property cannot
 * set a default value at constructor time, because this still counts as 'explicitly'
 * setting a value, and therefore it will not adopt any inherited value from a provider.
 * Instead, you can use the `@transform` decorator (after applying this decorator) to
 * normalize the value and resolve a default.
 *
 * **NB:**
 * The descriptor memoizes the original set value, **not** the resolved context value.
 * Instead, the resolved value is computed within the getter, so that we don't
 * destructively change the original value.
 *
 * See (`@lit-labs/context` and `createContext`) to create a context, which is simply
 * a unique key. Usually, it should be a unique symbol rather than a string, so that
 * there are no accidental clashes with other providers using the same key.
 */
function inherit(options) {
    // Merge options with default options
    const resolvedOptions = resolveOptions$1(options);
    return function (protoOrDescriptor, name) {
        if (!resolvedOptions.provide && !resolvedOptions.consume) {
            return;
        }
        // Determines whether the decorator signature matches a legacy / standard decorator
        const isLegacyDecorator = !!name;
        // Resolve key based on standard / legacy decorator signature (see decorateProperty)
        const key = isLegacyDecorator
            ? name
            : protoOrDescriptor.originalKey ??
                protoOrDescriptor.key;
        // Use a symbol as a private key for the private properties
        const privateKeyOwn = Symbol();
        const privateKeyAncestor = Symbol();
        // Resolve existing descriptor, if one is present
        const existingDescriptor = isLegacyDecorator
            ? Object.getOwnPropertyDescriptor(protoOrDescriptor, key)
            : protoOrDescriptor.descriptor;
        // Cached map of providers, keep the reference to instances weak
        const providerMap = new WeakMap();
        const decorator = o$6({
            finisher: (ctor) => {
                ctor.addInitializer((instance) => {
                    const self = instance;
                    let previousProviderDisposeRef;
                    // Define a private property where its own set value will be memoized.
                    Object.defineProperty(ctor.prototype, privateKeyOwn, {
                        value: existingDescriptor?.get?.call(self) ?? existingDescriptor?.value,
                        writable: true,
                        configurable: true,
                        enumerable: false
                    });
                    // Define a private property where its ancestor's set value will be memoized.
                    Object.defineProperty(ctor.prototype, privateKeyAncestor, {
                        writable: true,
                        configurable: true,
                        enumerable: false
                    });
                    // Create the ContextProvider controller
                    if (resolvedOptions.provide) {
                        providerMap.set(self, new i$4(self, {
                            context: resolvedOptions.context,
                            initialValue: self[privateKeyOwn]
                        }));
                    }
                    // Create the ContextConsumer controller
                    if (resolvedOptions.consume) {
                        new s$4(self, {
                            context: resolvedOptions.context,
                            subscribe: true,
                            callback: (nextAncestorValue, dispose) => {
                                // Clean up any existing subscriptions
                                if (previousProviderDisposeRef !== dispose) {
                                    previousProviderDisposeRef?.();
                                    previousProviderDisposeRef = dispose;
                                }
                                const previousAncestorValue = self[privateKeyAncestor];
                                // Memoize ancestor value
                                self[privateKeyAncestor] = nextAncestorValue;
                                // Set on own provider (if one exists)
                                if (!self[privateKeyOwn] ||
                                    resolvedOptions.precedence === "ancestor") {
                                    const provider = providerMap.get(instance);
                                    const nextProviderValue = resolvedOptions.precedence === "ancestor"
                                        ? self[privateKeyAncestor] ??
                                            existingDescriptor?.get?.call(self) ??
                                            self[privateKeyOwn]
                                        : existingDescriptor?.get?.call(self) ??
                                            self[privateKeyOwn] ??
                                            self[privateKeyAncestor];
                                    if (provider && nextProviderValue !== provider.value) {
                                        provider.setValue(nextProviderValue);
                                    }
                                }
                                if (nextAncestorValue !== previousAncestorValue) {
                                    self.requestUpdate(privateKeyAncestor, previousAncestorValue);
                                }
                            }
                        });
                    }
                });
            },
            descriptor: () => ({
                /**
                 * Getter returns resolved value, according to the precedence.
                 */
                get() {
                    const self = this;
                    if (resolvedOptions.precedence === "ancestor") {
                        return (self[privateKeyAncestor] ??
                            existingDescriptor?.get?.call(self) ??
                            self[privateKeyOwn]);
                    }
                    return (existingDescriptor?.get?.call(self) ??
                        self[privateKeyOwn] ??
                        self[privateKeyAncestor]);
                },
                /**
                 * Setter sets original value on private key.
                 * If there is a change to the value, it requests an update on host and sets
                 * the value on its own provider context (if one exists).
                 */
                set(_value) {
                    const self = this;
                    // Invoke existing setter first
                    existingDescriptor?.set?.call(self, _value);
                    // Get previous value from current getter
                    const previousValue = self[privateKeyOwn];
                    // Get next value from either existing getter, or the argument
                    const nextValue = existingDescriptor?.get?.call(self) ?? _value;
                    // Memoize own value
                    self[privateKeyOwn] = nextValue;
                    // Set value on own provider context (if one exists)
                    if (resolvedOptions.precedence === "own" ||
                        (resolvedOptions.precedence === "ancestor" &&
                            !self[privateKeyAncestor])) {
                        const provider = providerMap.get(self);
                        const nextProviderValue = self[privateKeyOwn] ?? self[privateKeyAncestor];
                        if (provider && nextProviderValue !== provider.value) {
                            provider.setValue(nextProviderValue);
                        }
                    }
                    // Request an update
                    if (nextValue !== previousValue) {
                        self.requestUpdate(privateKeyOwn, previousValue);
                    }
                },
                configurable: true,
                enumerable: true
            })
        });
        return decorator(protoOrDescriptor, name);
    };
}

var __decorate$p = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const ContextOpenMixin = dedupeMixin((SuperClass) => {
    class ContextOpenMixin extends SuperClass {
    }
    __decorate$p([
        n$6({ attribute: false }),
        inherit({ context: contextOpenContext, consume: true })
    ], ContextOpenMixin.prototype, "contextOpen", void 0);
    return ContextOpenMixin;
});

/**
 * Used for rare occasions when a component needs to 'reset' common contexts.
 * E.g. PopoverContent is within its own UI context, so it should not consume the usual
 * contexts.
 */
const ContextResetMixin = (options) => dedupeMixin((SuperClass) => {
    class ContextResetMixin extends SuperClass {
        constructor(...args) {
            super(...args);
            Object.values(contexts)
                .filter((context) => options?.exclude ? !options.exclude.includes(context) : true)
                .forEach((context) => {
                new i$4(this, {
                    context,
                    initialValue: undefined
                });
            });
        }
    }
    return ContextResetMixin;
});

/**
 * Cleanup Stack controller utility; use when a linear stack is needed.
 */
const createCleanupStack = () => {
    const cleanupStack = new Set();
    const getLastItem = () => {
        let cleanupFn;
        for (cleanupFn of cleanupStack)
            ;
        return cleanupFn;
    };
    const cleanup = (cleanupFn) => {
        if (cleanupFn) {
            cleanupFn();
            cleanupStack.delete(cleanupFn);
        }
    };
    return {
        /**
         * Adds an item.
         */
        add: (fn) => {
            cleanupStack.add(fn);
        },
        /**
         * Removes an item without invoking it.
         */
        remove: (fn) => {
            cleanupStack.delete(fn);
        },
        /**
         * Invokes and removes last item in the stack.
         */
        pop: () => {
            cleanup(getLastItem());
        },
        /**
         * Invokes and removes every item (LIFO).
         */
        clean: () => {
            Array.from(cleanupStack).reverse().forEach(cleanup);
        }
    };
};
/**
 * Cleanup Stack controller utility; use when a keyed map is needed.
 */
const createCleanupMap = () => {
    const cleanupMap = new Map();
    const cleanup = (key) => {
        if (cleanupMap.has(key)) {
            cleanupMap.get(key)();
            cleanupMap.delete(key);
        }
    };
    return {
        /**
         * Adds an item. If the key already exists, it will first invoke and remove the previous item.
         */
        add: (key, fn) => {
            cleanup(key);
            cleanupMap.set(key, fn);
        },
        /**
         * Removes an item without invoking it.
         */
        remove: (key) => {
            cleanupMap.delete(key);
        },
        /**
         * Invokes and removes an item.
         */
        call: (key) => {
            cleanup(key);
        },
        /**
         * Invokes and removes every item (FIFO).
         */
        clean: () => {
            cleanupMap.forEach((_cleanupFn, key) => {
                cleanup(key);
            });
        }
    };
};

const DEFAULT_OPTIONS$1 = {
    childList: true
};
const createMutationObserver = (node, onMutation, options) => {
    const mutationObserver = new MutationObserver((entries) => void onMutation(entries));
    mutationObserver.observe(node, options);
    return () => mutationObserver.disconnect();
};
const createMutationController = (host, onMutation, options = DEFAULT_OPTIONS$1) => {
    const cleanupStack = createCleanupStack();
    let nodeRef;
    host.addController({
        hostDisconnected: () => void cleanupStack.clean()
    });
    return {
        onNode: (node) => {
            if (node !== nodeRef) {
                cleanupStack.clean();
                nodeRef = node;
                if (nodeRef) {
                    cleanupStack.add(createMutationObserver(nodeRef, onMutation, options));
                }
            }
        }
    };
};

const createResizeObserver = (node, onRect) => {
    const resizeObserver = new ResizeObserver(([entry]) => void onRect(entry));
    resizeObserver.observe(node, { box: "border-box" });
    return () => resizeObserver.disconnect();
};
/**
 * Observes a nodes rect.
 * Fires onRect callback when the rect changes.
 */
const createResizeController = (host, onRect) => {
    const cleanupStack = createCleanupStack();
    let nodeRef;
    host.addController({
        hostDisconnected: () => void cleanupStack.clean()
    });
    return {
        onNode: (node) => {
            if (node !== nodeRef) {
                cleanupStack.clean();
                nodeRef = node;
                if (nodeRef) {
                    cleanupStack.add(createResizeObserver(nodeRef, onRect));
                }
            }
        }
    };
};

/**
 * Observes overflow
 *
 * Calls back with info about which direction content has overflowed
 */
const createOverflowController = (host, onChange) => {
    const cleanupStack = createCleanupStack();
    let nodeRef;
    let previousOverflowInfo;
    let deferredRaf;
    const getOverflowInfo = () => {
        if (!nodeRef) {
            return {
                hasOverflowTop: false,
                hasOverflowBottom: false,
                hasOverflowLeft: false,
                hasOverflowRight: false
            };
        }
        const { clientWidth, clientHeight, scrollWidth, scrollHeight, scrollTop, scrollLeft } = nodeRef;
        const roundedScrollTop = Math.round(scrollTop);
        const roundedScrollLeft = Math.round(scrollLeft);
        return {
            hasOverflowTop: roundedScrollTop > 0,
            hasOverflowBottom: scrollHeight > clientHeight &&
                roundedScrollTop < scrollHeight - clientHeight,
            hasOverflowLeft: roundedScrollLeft > 0,
            hasOverflowRight: scrollWidth > clientWidth &&
                roundedScrollLeft < scrollWidth - clientWidth
        };
    };
    const update = () => {
        /**
         * We defer the update loop to prevent layout thrashing (scrollTop etc causes a layout reflow)
         * See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
         *
         * Alternatively, we could use an IntersectionObserver, but that would require extra nodes in the DOM
         * at the top/bottom/left/right of the scroll view. As it's not that important to get an update immediately,
         * this seems like a good compromise.
         */
        deferredRaf && cancelAnimationFrame(deferredRaf);
        deferredRaf = requestAnimationFrame(() => {
            const overflowInfo = getOverflowInfo();
            if (!previousOverflowInfo ||
                !shallowEqual(overflowInfo, previousOverflowInfo)) {
                onChange(overflowInfo);
                previousOverflowInfo = overflowInfo;
            }
        });
    };
    const resizeController = createResizeController(host, () => {
        update();
    });
    const onNode = (node) => {
        resizeController.onNode(node);
        if (node !== nodeRef) {
            cleanupStack.clean();
            nodeRef = node;
            if (nodeRef) {
                nodeRef.addEventListener("scroll", update, { passive: true });
                cleanupStack.add(() => {
                    nodeRef?.removeEventListener("scroll", update);
                });
                cleanupStack.add(() => {
                    deferredRaf && cancelAnimationFrame(deferredRaf);
                });
            }
        }
    };
    host.addController({
        hostDisconnected: () => void cleanupStack.clean()
    });
    return {
        onNode
    };
};

/**
 * Reducer controller
 */
const createReducerController = (host, reducer, initialState, onChange) => {
    const { getState, dispatch, subscribe } = createStore$1(reducer, initialState);
    let disconnectStore;
    host.addController({
        hostConnected: () => {
            disconnectStore = subscribe(() => void onChange());
        },
        hostDisconnected: () => {
            disconnectStore();
        }
    });
    return {
        getState,
        dispatch
    };
};

/**
 * Resolve mutation observer options to ensure callbacks are invoked as expected;
 * - childList will always be true
 * - subtree will automatically be used when observing attributes / characterData
 */
const resolveMutationObserverOptions = (mutationObserverOptions = {}) => ({
    ...mutationObserverOptions,
    childList: true,
    subtree: mutationObserverOptions.attributes ||
        mutationObserverOptions.characterData ||
        !!mutationObserverOptions.subtree
});
/**
 * Creates a Slot Controller
 *
 * It can be used to observe a host element, and invokes an onChange callback when
 * there is a mutation in slotted elements related to the name in options.
 *
 * It uses a MutationObserver and accepts all MutationObserver options.
 */
const createSlotController = (host, onChange, options = {}) => {
    let slottedNodes = [];
    let slottedElements = [];
    /**
     * Checks to see if node matches the slot name in options
     */
    const matchesSlotName = (node) => {
        if (options.name) {
            return node instanceof Element && node.slot === options.name;
        }
        return !(node instanceof Element) || !node.slot;
    };
    /**
     * Gets the slotted nodes within host
     */
    const getSlotted = () => Array.from(host.childNodes).filter((node) => !(node instanceof Comment) && matchesSlotName(node));
    /**
     * Caches the slotted nodes / elements
     */
    const setSlottedRefs = () => {
        slottedNodes = getSlotted();
        slottedElements = slottedNodes.filter((node) => node instanceof Element);
    };
    /**
     * Resolves the root slotted node/element of a subject by traversing upwards,
     * until it reaches a node that matches the slot name in options.
     */
    const resolveSlotted = (subject) => {
        /**
         * For removed slotted nodes, we cannot check the parentElement because it
         * has been disconnected, so we check whether it previously existed in the cache.
         */
        if (!subject.isConnected && slottedNodes.includes(subject)) {
            return subject;
        }
        return findDeepUp(subject, (target) => target === host || target instanceof Comment
            ? findDeepCancel
            : target.parentElement === host && matchesSlotName(target));
    };
    /**
     * Mutation callback
     *
     * Iterates over mutation records and determines whether changes relate
     * to the slot name within options. It only invokes onChange if the change
     * occurs within the relevant slot.
     */
    const onMutation = (records) => {
        let hasChanged = false;
        for (const record of records) {
            if (hasChanged) {
                break;
            }
            else if (resolveSlotted(record.target)) {
                hasChanged = true;
            }
            else {
                for (const node of [...record.removedNodes, ...record.addedNodes]) {
                    if (resolveSlotted(node)) {
                        hasChanged = true;
                        break;
                    }
                }
            }
        }
        if (hasChanged) {
            setSlottedRefs();
            onChange();
        }
    };
    const mutationController = createMutationController(host, onMutation, resolveMutationObserverOptions(options.mutationObserverOptions));
    host.addController({
        hostConnected: async () => {
            mutationController.onNode(host);
            await host.updateComplete;
            setSlottedRefs();
            onChange();
        }
    });
    return {
        getSlottedNodes: () => slottedNodes,
        getSlottedElements: () => slottedElements
    };
};

/**
 * NB:
 * This decorator is purposely utilizing Lit's `decorateProperty` to try to mitigate discrepancies
 * in the decorator implementation. When the current TS/Babel implementation changes to use the
 * proposed standard, Lit _should_ handle this internally within this function.
 */
/**
 * ### Transform decorator
 *
 * Accepts a transform function that is used in the property getter. Transforms are chainable so that
 * the result of the previously defined getter/setter is taken into account.
 *
 * **NB:**
 * The descriptor memoizes the original set value, **not** the transformed value. Instead, the transformed
 * value is computed within the getter, so that we don't destructively change the original value.
 */
function transform(transformFn) {
    return function (protoOrDescriptor, name) {
        // Determines whether the decorator signature matches a legacy / standard decorator
        const isLegacyDecorator = !!name;
        // Resolve key based on standard / legacy decorator signature (see decorateProperty)
        const key = isLegacyDecorator
            ? name
            : protoOrDescriptor.originalKey ??
                protoOrDescriptor.key;
        // Use a symbol as a private key for the private property
        const privateKey = Symbol();
        // Resolve existing descriptor, if one is present
        const existingDescriptor = isLegacyDecorator
            ? Object.getOwnPropertyDescriptor(protoOrDescriptor, key)
            : protoOrDescriptor.descriptor;
        const decorator = o$6({
            finisher: (ctor) => {
                ctor.addInitializer((instance) => {
                    /**
                     * Define a private property where the set value will be memoized.
                     */
                    Object.defineProperty(ctor.prototype, privateKey, {
                        value: existingDescriptor?.get?.call(instance) ??
                            existingDescriptor?.value,
                        writable: true,
                        configurable: true,
                        enumerable: false
                    });
                });
            },
            descriptor: () => ({
                /**
                 * Getter returns normalized value based on any existing getter, or the cached value.
                 */
                get() {
                    return transformFn(existingDescriptor?.get?.call(this) ??
                        this[privateKey]);
                },
                /**
                 * Setter sets original value on private key.
                 * If there is a change to the value, it requests an update on host.
                 */
                set(_value) {
                    // Invoke existing setter first
                    existingDescriptor?.set?.call(this, _value);
                    // Get previous value from private key
                    const previousValue = this[privateKey];
                    // Get next value using either existing getter, or the argument
                    const nextValue = existingDescriptor?.get?.call(this) ??
                        _value;
                    // If the value has changed, request an update
                    if (nextValue !== previousValue) {
                        this[privateKey] = nextValue;
                        this.requestUpdate(privateKey, previousValue);
                    }
                },
                configurable: true,
                enumerable: true
            })
        });
        return decorator(protoOrDescriptor, name);
    };
}

function readOnly(value) {
    return transform(() => value);
}

const toFloat = (value) => {
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : NaN;
};
/**
 * If preserveInputLocale=true, it parses number according to the provided locale,
 * so that delimiters etc are interpreted properly
 */
const createParseNumber = (options) => {
    const { locale, preserveInputLocale } = options || {};
    const resolvedLocale = preserveInputLocale ? locale : "en";
    const parts = new Intl.NumberFormat(resolvedLocale).formatToParts(12345.6);
    const numerals = [
        ...new Intl.NumberFormat(resolvedLocale, { useGrouping: false }).format(9876543210)
    ].reverse();
    const numeralIndexMap = new Map(numerals.map((numeral, i) => [numeral, `${i}`]));
    const groupTest = new RegExp(`[${parts.find((d) => d.type === "group").value}]`, "g");
    const decimalTest = new RegExp(`[${parts.find((d) => d.type === "decimal").value}]`);
    const numeralTest = new RegExp(`[${numerals.join("")}]`, "g");
    const otherTest = new RegExp("[^0-9-.]", "g");
    return (value) => {
        // Sanitizes to string parsable as JavaScript float
        const sanitized = value
            .trim()
            // Strip group separator (delimiter)
            .replace(groupTest, "")
            // Replace locale decimal with standard decimal
            .replace(decimalTest, ".")
            // Replace locale numerals with standard numerals
            .replace(numeralTest, (numeral) => numeralIndexMap.get(numeral))
            // Finally, strip out all other characters
            .replace(otherTest, "");
        return toFloat(sanitized);
    };
};
/**
 * Parses value to numeric
 * - if it's a string, it will attempt to extract the numeric value
 * - if it's a finite number, use the value directly
 * - otherwise, it's NaN
 */
const parseValue = (value, options) => {
    if (typeof value === "string") {
        const parseNumber = createParseNumber(options);
        return parseNumber(value);
    }
    else if (Number.isFinite(value)) {
        return value;
    }
    return NaN;
};

const DEFAULT_OPTIONS = {
    format: "number",
    output: "string",
    currency: "USD",
    currencySymbol: undefined,
    mantissa: 2,
    trimMantissa: true,
    abbrThreshold: 10000,
    clampThreshold: Infinity,
    unitDisplay: "narrow",
    bemBlock: "number",
    locale: "en-US",
    preserveInputLocale: false
};
const INTL_UNITS = [
    "acre",
    "bit",
    "byte",
    "celsius",
    "centimeter",
    "day",
    "degree",
    "fahrenheit",
    "fluid-ounce",
    "foot",
    "gallon",
    "gigabit",
    "gigabyte",
    "gram",
    "hectare",
    "hour",
    "inch",
    "kilobit",
    "kilobyte",
    "kilogram",
    "kilometer",
    "liter",
    "megabit",
    "megabyte",
    "meter",
    "mile",
    "mile-scandinavian",
    "millimeter",
    "milliliter",
    "millisecond",
    "minute",
    "month",
    "ounce",
    "petabyte",
    "pound",
    "second",
    "stone",
    "terabit",
    "terabyte",
    "week",
    "yard",
    "year"
];

/**
 * Array.includes is problematic with ReadonlyArray in TS,
 * so we use generics to enable narrowing
 */
const includes = (arr, value) => arr.includes(value);

const shouldAbbr = (value, { abbrThreshold }) => Math.abs(value) >= abbrThreshold;
/**
 * Build Intl NumberFormat options object, based on value and options
 */
const getIntlOptions = (value, options) => {
    const { format, currency, unitDisplay } = options;
    const processors = [
        // Determine base style options
        () => {
            if (["percent", "currency"].includes(format)) {
                return {
                    style: format
                };
            }
            else if (includes(INTL_UNITS, format)) {
                return {
                    style: "unit",
                    unit: format
                };
            }
            return {
                style: "decimal"
            };
        },
        // Unit options
        () => ({
            unitDisplay,
            currencyDisplay: "symbol",
            currency
        }),
        // Granularity options
        (value, options) => {
            const { mantissa, trimMantissa } = options;
            const valueIsPassedThreshold = shouldAbbr(value, options);
            const minimumFractionDigits = (() => {
                if (Number.isInteger(value)) {
                    return 0;
                }
                else if (trimMantissa === false && !valueIsPassedThreshold) {
                    return mantissa;
                }
                /**
                 * Intl.NumberFormatOptions type seem to be missing null as a valid type,
                 * but null and undefined do seem to return a different output!
                 */
                return null;
            })();
            return {
                minimumFractionDigits,
                maximumFractionDigits: mantissa,
                notation: valueIsPassedThreshold ? "compact" : "standard"
            };
        }
    ];
    return processors.reduce((result, processor) => Object.assign(result, processor(value, options)), {});
};

const round$2 = (value, mantissa = 4) => Math.round(value * Math.pow(10, mantissa)) / Math.pow(10, mantissa);

const ordinal = {
    de: () => "te",
    en: (value) => {
        if (Math.floor((value % 100) / 10) === 1) {
            return "th";
        }
        const plural = Math.abs(value % 10);
        switch (plural) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    fr: (value) => (value === 1 ? "er" : "e"),
    other: () => "º"
};
const locale = {
    ordinal
};

const exceedsClampThreshold = (value, { clampThreshold }) => (clampThreshold ? Math.abs(value) > clampThreshold : false);
const getClampedValue = (value, { clampThreshold }) => {
    if (typeof clampThreshold === "number" &&
        Number.isFinite(clampThreshold) &&
        Number.isFinite(value)) {
        if (Math.sign(value) === 1) {
            return Math.min(value, Math.ceil(clampThreshold));
        }
        else if (Math.sign(value) === -1) {
            return Math.max(value, Math.ceil(clampThreshold) * -1);
        }
    }
    return value;
};
const getRoundedValue = (value, { mantissa, format }) => {
    return format === "percent"
        ? round$2(value, mantissa + 2)
        : round$2(value, mantissa);
};
const flatten = (memo, item) => [...memo, ...(Array.isArray(item) ? item : [item])];
/**
 * Get ordinal part.
 * Intl does not provide ordinal suffixes, so we have to add them.
 */
const getOrdinalPart = (value, locale$1) => {
    const baseLocale = locale$1.split("-")[0];
    const ordinalValue = (locale.ordinal[baseLocale] || locale.ordinal.other)(value);
    return { type: "ordinal", value: ordinalValue };
};
const getExcessPart = () => ({
    type: "excess",
    value: "+"
});
/**
 * Builds an array of formatted parts based on format.
 */
const getOtherFormatParts = (value, options) => {
    const { format, locale, unitDisplay } = options;
    const clampedValue = getClampedValue(value, options);
    const roundedValue = getRoundedValue(clampedValue, options);
    const intlNumberFormatOptions = getIntlOptions(roundedValue, options);
    const intlNumberFormat = new Intl.NumberFormat(locale, intlNumberFormatOptions);
    const formatParts = intlNumberFormat.formatToParts(roundedValue);
    const ordinalPart = format === "ordinal" ? getOrdinalPart(roundedValue, locale) : undefined;
    const excessClampPart = exceedsClampThreshold(value, options)
        ? getExcessPart()
        : undefined;
    return (formatParts
        // Filter out literal spaces when in narrow unitDisplay
        .filter(({ type, value }) => !(unitDisplay === "narrow" && type === "literal" && !value.trim()))
        // Add additional ordinal part
        .concat(ordinalPart ?? [])
        // Add additional excess clamp part
        .concat(excessClampPart ?? []));
};
// Keep casual conversions, as this is only for humanizing
const units = [
    { unit: "year", durationInMs: 365 * 24 * 60 * 60 * 1000 },
    { unit: "month", durationInMs: 30 * 24 * 60 * 60 * 1000 },
    { unit: "week", durationInMs: 7 * 24 * 60 * 60 * 1000 },
    { unit: "day", durationInMs: 24 * 60 * 60 * 1000 },
    { unit: "hour", durationInMs: 60 * 60 * 1000 },
    { unit: "minute", durationInMs: 60 * 1000 },
    { unit: "second", durationInMs: 1000 },
    { unit: "millisecond", durationInMs: 1 }
];
/**
 * Breaks down duration into humanized granular units.
 */
const getDurationFormatParts = (value, options) => {
    const { relevantUnits } = units.reduce(({ remainingValue, relevantUnits }, { unit, durationInMs }) => {
        const total = Math.round(remainingValue / durationInMs);
        if (total < 1) {
            return { remainingValue, relevantUnits };
        }
        return {
            remainingValue: remainingValue - durationInMs * total,
            relevantUnits: [...relevantUnits, { unit, durationInMs, total }]
        };
    }, {
        remainingValue: value,
        relevantUnits: []
    });
    return ((relevantUnits.length
        ? relevantUnits
        : [{ ...units[units.length - 1], total: 0 }])
        // Only take the largest 2 units
        .slice(0, 2)
        // Filter any empty values (except for the first unit)
        .filter(({ total }, index) => (Number.isFinite(total) && total !== 0) || index === 0)
        // Get format parts per unit
        .map(({ unit, total }) => getOtherFormatParts(total, { ...options, format: unit }))
        // Add a space character between units
        .map((unitParts, i, collection) => {
        if (i < collection.length - 1) {
            return [...unitParts, { type: "literal", value: " " }];
        }
        return unitParts;
    })
        // Flatten to single array
        .reduce(flatten, []));
};
/**
 * Builds an array of formatted parts based on input.
 * We extend the result of Intl's formatToParts with our own parts to get more fine control over formatting.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/formatToParts
 */
const getFormatParts = (value, options) => {
    const { format } = options;
    if (format === "duration") {
        return getDurationFormatParts(value, options);
    }
    return getOtherFormatParts(value, options);
};

const toSentenceCase = (str) => `${str.slice(0, 1).toLocaleUpperCase()}${str.slice(1)}`;
/**
 * Get part render props.
 *
 * Can return elementName property, to wrap the value in an element.
 * Can return replace property, to replace the value.
 */
const getPartRenderProps = (part, options) => {
    const { value, type } = part;
    const { currencySymbol } = options;
    switch (type) {
        case "currency":
            return {
                elementName: "currency",
                replace: currencySymbol || value
            };
        case "nan":
            return {
                elementName: "invalid",
                replace: "∅" // 'null' character
            };
        case "minusSign":
            return {
                replace: "−" // correct 'minus' character
            };
        case "unit":
        case "percentSign":
            return {
                elementName: "unit"
            };
        case "compact":
            return {
                elementName: "compact",
                replace: toSentenceCase(value)
            };
        case "ordinal":
            return {
                elementName: "ordinal"
            };
        case "excess":
            return {
                elementName: "excess"
            };
        default:
            return {};
    }
};
const renderString = (_component, _props, children) => `${children}`;
const renderHtml = (component, props, children) => `<${component} class="${props.className}">${children}</${component}>`;
/**
 * Render parts
 */
const render = (parts, options) => {
    const { bemBlock, output } = options;
    const renderer = typeof output === "function"
        ? output
        : output === "html"
            ? renderHtml
            : renderString;
    const outputParts = parts
        // Render each part
        .map((part) => {
        const { value } = part;
        const { elementName, replace } = getPartRenderProps(part, options);
        const resultValue = replace || value;
        if (elementName) {
            return renderer("span", { className: `${bemBlock}__${elementName}` }, resultValue);
        }
        return resultValue;
    })
        // Group any string parts together
        .reduce((result, part) => {
        const prevResultPart = result[result.length - 1] || null;
        if (typeof part === "string" && typeof prevResultPart === "string") {
            return [...result.slice(0, -1), `${prevResultPart}${part}`];
        }
        return [...result, part];
    }, []);
    return renderer("span", { className: bemBlock }, outputParts);
};

/**
 * Filters empty values from obj
 */
const omitEmptyProps = (options = {}) => {
    return Object.entries(options)
        .filter(([_key, value]) => typeof value !== "undefined" && value !== null)
        .reduce((result, [key, value]) => Object.assign(result, { [key]: value }), {});
};
/**
 * Resolves options based on input and defaults, applies overrides where appropriate.
 */
const resolveOptions = (options) => {
    const processors = [
        // Defaults
        () => DEFAULT_OPTIONS,
        // Input options
        (defaultOptions) => omitEmptyProps({ ...defaultOptions, ...(options ?? {}) }),
        // Overrides (based on format)
        (options) => {
            switch (options.format) {
                case "currency":
                    return {
                        trimMantissa: false
                    };
                case "percent":
                    return {
                        abbrThreshold: Number.isFinite(options?.abbrThreshold)
                            ? options.abbrThreshold / 100
                            : options.abbrThreshold,
                        clampThreshold: Number.isFinite(options?.clampThreshold)
                            ? options.clampThreshold / 100
                            : options.clampThreshold
                    };
                case "ordinal":
                    return {
                        mantissa: 0,
                        abbrThreshold: Infinity
                    };
                default:
                    return {};
            }
        }
    ];
    return processors.reduce((result, processor) => Object.assign(result, processor(result)), {});
};

/**
 * Parses and formats number, with a number of options.
 */
const formatNumber = (value, options) => {
    const resolvedOptions = resolveOptions(options);
    const parsedValue = parseValue(value, resolvedOptions);
    const formatParts = getFormatParts(parsedValue, resolvedOptions);
    return render(formatParts, resolvedOptions);
};

const BADGE_VARIANTS = ["accent", "negative"];
const DEFAULTS$8 = {
    variant: "accent"
};
const getVariant$4 = createNormalizer(BADGE_VARIANTS, DEFAULTS$8.variant);

const styles$r = i$9 `
  :host {
    display: inline-flex;
    vertical-align: top;
    max-inline-size: 100%;
    min-inline-size: 0px;
  }

  .badge {
    border-radius: var(--bds--border--corner--circle);
    transition-property: background-color, color;
    transition-duration: 80ms;
    transition-timing-function: ease-in-out;
  }

  .badge--dot {
    width: calc(var(--bds--dimension--space) * 2);
    aspect-ratio: 1 / 1;
  }

  .badge--numerical {
    padding-block: calc(var(--bds--dimension--space) / 2);
    padding-inline: calc(var(--bds--dimension--space) * 2);
  }

  /* Variants */
  .badge--color-accent.badge--dot:not(.badge--disabled) {
    background-color: var(--bds--color--content--accent--low);
  }

  .badge--color-accent.badge--numerical:not(.badge--disabled) {
    color: var(--bds--color--content--accent--low);
    background-color: var(--bds--color--background--accent--tone);
  }

  .badge--color-negative.badge--dot:not(.badge--disabled) {
    background-color: var(--bds--color--content--negative--low);
  }

  .badge--color-negative.badge--numerical:not(.badge--disabled) {
    color: var(--bds--color--content--negative--low);
    background-color: var(--bds--color--background--negative--tone);
  }

  /* Disabled */
  .badge--disabled {
    color: var(--bds--color--content--disabled);
    background-color: var(--bds--color--background--disabled);
    cursor: not-allowed;
  }
`;

var __decorate$o = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const formatBadgeCount = (count) => count
    ? formatNumber(count, {
        clampThreshold: 99,
        mantissa: 0
    })
    : undefined;
class Badge extends BaseMixin(s$8) {
    constructor() {
        super(...arguments);
        this.assistLabel = "";
    }
    static { this.tagName = "bds-badge"; }
    static { this.styles = [super.styles, styles$r]; }
    render() {
        const { variant, count, assistLabel, disabled } = this;
        return x ` <div
      class=${concatClasses(typeLabel({ size: "x-small" }), bem$f("badge", {
            [`color-${variant}`]: true,
            ["disabled"]: disabled,
            [`${count ? "numerical" : "dot"}`]: true
        }))}
      aria-label=${assistLabel || A$1}
      role="status"
    >
      ${count ? count : null}
    </div>`;
    }
}
__decorate$o([
    n$6({ type: String }),
    transform(getVariant$4)
], Badge.prototype, "variant", void 0);
__decorate$o([
    n$6({ type: String }),
    transform(formatBadgeCount)
], Badge.prototype, "count", void 0);
__decorate$o([
    n$6({ type: Boolean }),
    inherit({ context: disabledContext, consume: true })
], Badge.prototype, "disabled", void 0);
__decorate$o([
    n$6({ type: String, attribute: "assist-label" })
], Badge.prototype, "assistLabel", void 0);

const VARIANTS$2 = [
    "regular-subtle",
    "accent-subtle",
    "negative-subtle",
    "guidance-subtle",
    "regular",
    "accent",
    "negative",
    "guidance",
    "neutral",
    "inverse"
];
const SIZES$5 = ["x-small", "small", "medium"];
const BUTTON_TYPES = ["submit", "reset"];
const DEFAULTS$7 = {
    variant: "regular",
    size: "small"
};

const getSize$5 = createScaleNormalizer(SIZES$5, DEFAULTS$7.size);
const getVariant$3 = createNormalizer(VARIANTS$2, DEFAULTS$7.variant);
const getButtonType = createNormalizer(BUTTON_TYPES);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const {I:l$1}=j,e$2=o=>void 0===o.strings,r$2=()=>document.createComment(""),c$3=(o,i,n)=>{var t;const v=o._$AA.parentNode,d=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=v.insertBefore(r$2(),d),t=v.insertBefore(r$2(),d);n=new l$1(i,t,o,o.options);}else {const l=n._$AB.nextSibling,i=n._$AM,u=i!==o;if(u){let l;null===(t=n._$AQ)||void 0===t||t.call(n,o),n._$AM=o,void 0!==n._$AP&&(l=o._$AU)!==i._$AU&&n._$AP(l);}if(l!==d||u){let o=n._$AA;for(;o!==l;){const l=o.nextSibling;v.insertBefore(o,d),o=l;}}}return n},f$1=(o,l,i=o)=>(o._$AI(l,i),o),s$2={},a=(o,l=s$2)=>o._$AH=l,m=o=>o._$AH,p=o=>{var l;null===(l=o._$AP)||void 0===l||l.call(o,!1,!0);let i=o._$AA;const n=o._$AB.nextSibling;for(;i!==n;){const o=i.nextSibling;i.remove(),i=o;}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$1=(i,t)=>{var e,o;const r=i._$AN;if(void 0===r)return !1;for(const i of r)null===(o=(e=i)._$AO)||void 0===o||o.call(e,t,!1),s$1(i,t);return !0},o$5=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===(null==e?void 0:e.size))},r$1=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),l(t);}};function n$4(i){void 0!==this._$AN?(o$5(this),this._$AM=i,r$1(this)):this._$AM=i;}function h$2(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s$1(r[i],!1),o$5(r[i]);else null!=r&&(s$1(r,!1),o$5(r));else s$1(this,i);}const l=i=>{var t,s,o,r;i.type==t$1.CHILD&&(null!==(t=(o=i)._$AP)&&void 0!==t||(o._$AP=h$2),null!==(s=(r=i)._$AQ)&&void 0!==s||(r._$AQ=n$4));};let c$2 = class c extends i$1{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r$1(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var e,r;i!==this.isConnected&&(this.isConnected=i,i?null===(e=this.reconnected)||void 0===e||e.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),t&&(s$1(this,i),o$5(this));}setValue(t){if(e$2(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}};

const h$1=new WeakMap,n$3=e$1(class extends c$2{render(t){return A$2}update(t,[s]){var e;const o=s!==this.G;return o&&void 0!==this.G&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=s,this.dt=null===(e=t.options)||void 0===e?void 0:e.host,this.ot(this.lt=t.element)),A$2}ot(i){var t;if("function"==typeof this.G){const s=null!==(t=this.dt)&&void 0!==t?t:globalThis;let e=h$1.get(s);void 0===e&&(e=new WeakMap,h$1.set(s,e)),void 0!==e.get(this.G)&&this.G.call(this.dt,void 0),e.set(this.G,i),void 0!==i&&this.G.call(this.dt,i);}else this.G.value=i;}get rt(){var i,t,s;return "function"==typeof this.G?null===(t=h$1.get(null!==(i=this.dt)&&void 0!==i?i:globalThis))||void 0===t?void 0:t.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0);}reconnected(){this.ot(this.lt);}});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i$1{constructor(i){if(super(i),this.et=A$2,i.type!==t$1.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===A$2||null==r)return this.ft=void 0,this.et=r;if(r===T$2)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.ft;this.et=r;const s=[r];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o$4=e$1(e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class t extends e{}t.directiveName="unsafeSVG",t.resultType=2;const o$3=e$1(t);

const SIZES$4 = [
    "x-small",
    "small",
    "medium",
    "large",
    "x-large"
];
const VARIANTS$1 = ["accent", "content"];
const DEFAULTS$6 = {
    size: "small",
    variant: "accent"
};
const getSize$4 = createScaleNormalizer(SIZES$4, DEFAULTS$6.size);
const getVariant$2 = createNormalizer(VARIANTS$1, DEFAULTS$6.variant);
const getProgress = (val) => {
    return Math.min(Math.max(0, val || 0), 100);
};

const styles$q = i$9 `
  :host {
    display: inline-flex;
  }

  :host > * {
    color: inherit;
  }

  .progress-circle {
    display: block;
    block-size: 1lh;
    line-height: inherit;
    color: inherit;
    pointer-events: none;
  }

  circle {
    fill: none;
    cx: 50%;
    cy: 50%;
    transform-origin: center center;

    stroke-width: 8.3%;
    stroke-linecap: square;
    stroke-linejoin: miter;
    stroke-miterlimit: 3;
    shape-rendering: geometricprecision;
  }

  .progress-circle__fill {
    color: inherit;
  }

  .progress-circle__path {
    stroke: var(--bds--color--background--neutral--tone);
  }

  /* Color Variants */
  .progress-circle--color-accent .progress-circle__fill {
    /* Inherits font color of the parent component */
    stroke: var(--bds--color--content--accent--low);
  }

  .progress-circle--color-content .progress-circle__fill {
    /* Inherits font color of the parent component */
    stroke: currentcolor;
  }

  /* Animation */
  @keyframes indeterminateRotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .progress-circle--determinate .progress-circle__fill {
    rotate: -90deg;
    transition: stroke-dashoffset 500ms ease-out 0s;
  }

  .progress-circle--indeterminate .progress-circle__fill {
    rotate: -240deg;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: indeterminateRotation;
    animation-timing-function: cubic-bezier(0.62, 0.32, 0.38, 0.68);
  }

  /* Sizes  */
  .progress-circle--size-x-small {
    width: calc(var(--bds--dimension--space) * 4);
    height: calc(var(--bds--dimension--space) * 4);
  }

  .progress-circle--size-small {
    width: calc(var(--bds--dimension--space) * 5);
    height: calc(var(--bds--dimension--space) * 5);
  }

  .progress-circle--size-medium {
    height: calc(var(--bds--dimension--space) * 6);
    width: calc(var(--bds--dimension--space) * 6);
  }

  .progress-circle--size-large {
    height: calc(var(--bds--dimension--space) * 7);
    width: calc(var(--bds--dimension--space) * 7);
  }

  .progress-circle--size-x-large {
    height: calc(var(--bds--dimension--space) * 8);
    width: calc(var(--bds--dimension--space) * 8);
  }

  /* a11y  */
  @media (prefers-reduced-motion) {
    .progress-circle--indeterminate {
      animation-duration: 1.5s;
      animation-timing-function: linear;
    }
  }
`;

var __decorate$n = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const bem$e = createBem("progress-circle");
class ProgressCircle extends BaseMixin(s$8) {
    constructor() {
        super(...arguments);
        this.progress = 0;
    }
    static { this.tagName = "bds-progress-circle"; }
    static { this.styles = [super.styles, styles$q]; }
    render() {
        const { variant, size, progress, determinate, assistLabel } = this;
        const classes = bem$e({
            [determinate ? "determinate" : "indeterminate"]: true,
            [`color-${variant}`]: true,
            [`size-${size}`]: true
        });
        /**
         * Sets radius and stroke-dasharray as attributes as a workaround for Firefox
         * https://stackoverflow.com/questions/51551729/
         */
        const radius = 10;
        const padding = (radius * 20) / 100;
        const viewBox = (radius + padding) * 2;
        /**
         * `pathLength`:
         * converts circle circumference (2rPi) to 100% (maximum progress)
         * making it easier to calculate progress
         */
        const pathLength = 100;
        const dashOffset = Math.floor(determinate ? (1 - progress / 100) * 100 : pathLength / 2);
        return x `
      <svg
        viewBox="0 0 ${viewBox} ${viewBox}"
        class="${classes}"
        role="progressbar"
        aria-valuemin=${determinate ? "0" : A$1}
        aria-valuemax=${determinate ? "100" : A$1}
        aria-valuenow=${determinate ? progress : A$1}
        aria-label=${assistLabel || "Loading"}
      >
        <circle class="${bem$e("path")}" r="${radius}" aria-hidden="true" />
        <circle
          class="${bem$e("fill")}"
          r="${radius}"
          pathLength="${pathLength}"
          stroke-dasharray=${pathLength}
          stroke-dashoffset="${dashOffset}"
          aria-hidden="true"
        />
      </svg>
    `;
    }
}
__decorate$n([
    n$6({ type: Boolean })
], ProgressCircle.prototype, "determinate", void 0);
__decorate$n([
    n$6({ type: String }),
    transform(getVariant$2)
], ProgressCircle.prototype, "variant", void 0);
__decorate$n([
    n$6({ type: String }),
    transform(getSize$4)
], ProgressCircle.prototype, "size", void 0);
__decorate$n([
    n$6({ type: Number }),
    transform(getProgress)
], ProgressCircle.prototype, "progress", void 0);
__decorate$n([
    n$6({ type: String, attribute: "assist-label" })
], ProgressCircle.prototype, "assistLabel", void 0);

const SIZES$3 = [
    "x-small",
    "small",
    "medium",
    "large",
    "x-large"
];
const ICON_MAP = {
    /**
     * UI Icons
     */
    account: '<path d="M5.85 17.1C6.7 16.45 7.65 15.9373 8.7 15.562C9.75 15.1873 10.85 15 12 15C13.15 15 14.25 15.1873 15.3 15.562C16.35 15.9373 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1877 15.6417 19.513 14.775C19.8377 13.9083 20 12.9833 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 12.9833 4.16267 13.9083 4.488 14.775C4.81267 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1873 12.6627 9.512 11.988C8.83733 11.3127 8.5 10.4833 8.5 9.5C8.5 8.51667 8.83733 7.68733 9.512 7.012C10.1873 6.33733 11.0167 6 12 6C12.9833 6 13.8127 6.33733 14.488 7.012C15.1627 7.68733 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1627 11.3127 14.488 11.988C13.8127 12.6627 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C12.8833 20 13.7167 19.871 14.5 19.613C15.2833 19.3543 16 18.9833 16.65 18.5C16 18.0167 15.2833 17.6457 14.5 17.387C13.7167 17.129 12.8833 17 12 17C11.1167 17 10.2833 17.129 9.5 17.387C8.71667 17.6457 8 18.0167 7.35 18.5C8 18.9833 8.71667 19.3543 9.5 19.613C10.2833 19.871 11.1167 20 12 20ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11Z" />',
    add: '<path d="M12 19C11.7167 19 11.4793 18.904 11.288 18.712C11.096 18.5207 11 18.2833 11 18V13H6C5.71667 13 5.479 12.904 5.287 12.712C5.09567 12.5207 5 12.2833 5 12C5 11.7167 5.09567 11.479 5.287 11.287C5.479 11.0957 5.71667 11 6 11H11V6C11 5.71667 11.096 5.479 11.288 5.287C11.4793 5.09567 11.7167 5 12 5C12.2833 5 12.521 5.09567 12.713 5.287C12.9043 5.479 13 5.71667 13 6V11H18C18.2833 11 18.5207 11.0957 18.712 11.287C18.904 11.479 19 11.7167 19 12C19 12.2833 18.904 12.5207 18.712 12.712C18.5207 12.904 18.2833 13 18 13H13V18C13 18.2833 12.9043 18.5207 12.713 18.712C12.521 18.904 12.2833 19 12 19Z" />',
    apps: '<path d="M6 8C5.45 8 4.97933 7.804 4.588 7.412C4.196 7.02067 4 6.55 4 6C4 5.45 4.196 4.97933 4.588 4.588C4.97933 4.196 5.45 4 6 4C6.55 4 7.02067 4.196 7.412 4.588C7.804 4.97933 8 5.45 8 6C8 6.55 7.804 7.02067 7.412 7.412C7.02067 7.804 6.55 8 6 8ZM12 20C11.45 20 10.9793 19.8043 10.588 19.413C10.196 19.021 10 18.55 10 18C10 17.45 10.196 16.979 10.588 16.587C10.9793 16.1957 11.45 16 12 16C12.55 16 13.021 16.1957 13.413 16.587C13.8043 16.979 14 17.45 14 18C14 18.55 13.8043 19.021 13.413 19.413C13.021 19.8043 12.55 20 12 20ZM6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM6 14C5.45 14 4.97933 13.804 4.588 13.412C4.196 13.0207 4 12.55 4 12C4 11.45 4.196 10.979 4.588 10.587C4.97933 10.1957 5.45 10 6 10C6.55 10 7.02067 10.1957 7.412 10.587C7.804 10.979 8 11.45 8 12C8 12.55 7.804 13.0207 7.412 13.412C7.02067 13.804 6.55 14 6 14ZM12 14C11.45 14 10.9793 13.804 10.588 13.412C10.196 13.0207 10 12.55 10 12C10 11.45 10.196 10.979 10.588 10.587C10.9793 10.1957 11.45 10 12 10C12.55 10 13.021 10.1957 13.413 10.587C13.8043 10.979 14 11.45 14 12C14 12.55 13.8043 13.0207 13.413 13.412C13.021 13.804 12.55 14 12 14ZM18 8C17.45 8 16.979 7.804 16.587 7.412C16.1957 7.02067 16 6.55 16 6C16 5.45 16.1957 4.97933 16.587 4.588C16.979 4.196 17.45 4 18 4C18.55 4 19.021 4.196 19.413 4.588C19.8043 4.97933 20 5.45 20 6C20 6.55 19.8043 7.02067 19.413 7.412C19.021 7.804 18.55 8 18 8ZM12 8C11.45 8 10.9793 7.804 10.588 7.412C10.196 7.02067 10 6.55 10 6C10 5.45 10.196 4.97933 10.588 4.588C10.9793 4.196 11.45 4 12 4C12.55 4 13.021 4.196 13.413 4.588C13.8043 4.97933 14 5.45 14 6C14 6.55 13.8043 7.02067 13.413 7.412C13.021 7.804 12.55 8 12 8ZM18 14C17.45 14 16.979 13.804 16.587 13.412C16.1957 13.0207 16 12.55 16 12C16 11.45 16.1957 10.979 16.587 10.587C16.979 10.1957 17.45 10 18 10C18.55 10 19.021 10.1957 19.413 10.587C19.8043 10.979 20 11.45 20 12C20 12.55 19.8043 13.0207 19.413 13.412C19.021 13.804 18.55 14 18 14ZM18 20C17.45 20 16.979 19.8043 16.587 19.413C16.1957 19.021 16 18.55 16 18C16 17.45 16.1957 16.979 16.587 16.587C16.979 16.1957 17.45 16 18 16C18.55 16 19.021 16.1957 19.413 16.587C19.8043 16.979 20 17.45 20 18C20 18.55 19.8043 19.021 19.413 19.413C19.021 19.8043 18.55 20 18 20Z" />',
    asterisk: '<path d="M10.515 18v-4.052l-3.667 2.117-1-1.732L9.544 12.2l-3.696-2.134 1-1.732 3.667 2.117V6h2v4.484l3.725-2.15 1 1.731-3.696 2.134 3.696 2.134-1 1.732-3.725-2.15V18h-2Z"/>',
    "cancel-fill": '<path d="M7.7 16.3q.275.275.7.275.425 0 .7-.275l2.9-2.9 2.925 2.925q.275.275.688.262.412-.012.687-.287.275-.275.275-.7 0-.425-.275-.7L13.4 12l2.925-2.925q.275-.275.262-.688-.012-.412-.287-.687-.275-.275-.7-.275-.425 0-.7.275L12 10.6 9.075 7.675Q8.8 7.4 8.388 7.412q-.413.013-.688.288-.275.275-.275.7 0 .425.275.7l2.9 2.9-2.925 2.925q-.275.275-.262.687.012.413.287.688ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>',
    check: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"/>',
    create: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>',
    "dock-left-expand": '<path d="M12.5 9.2v5.6c0 .233.1.392.3.475.2.083.383.042.55-.125l2.45-2.45c.2-.2.3-.433.3-.7 0-.267-.1-.5-.3-.7l-2.45-2.45c-.167-.167-.35-.208-.55-.125-.2.083-.3.242-.3.475ZM5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h14c.55 0 1.02.196 1.413.587.39.393.587.863.587 1.413v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21H5Zm3-2V5H5v14h3Zm2 0h9V5h-9v14Z"/>',
    "dock-left-collapse": '<path d="M16.5 14.8V9.2c0-.233-.1-.392-.3-.475-.2-.083-.383-.042-.55.125L13.2 11.3c-.2.2-.3.433-.3.7 0 .267.1.5.3.7l2.45 2.45c.167.167.35.208.55.125.2-.083.3-.242.3-.475ZM5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h14c.55 0 1.02.196 1.413.587.39.393.587.863.587 1.413v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21H5Zm3-2V5H5v14h3Zm2 0h9V5h-9v14Z"/>',
    delete: '<path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>',
    domain: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm9 12h-7v-2h2v-2h-2v-2h2v-2h-2V9h7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-1-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>',
    "expand-less": '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z"/>',
    "expand-more": '<path d="M24 24H0V0h24v24z" fill="none" /><path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/>',
    help: '<path d="M11.95 18C12.3 18 12.596 17.879 12.838 17.637C13.0793 17.3957 13.2 17.1 13.2 16.75C13.2 16.4 13.0793 16.1043 12.838 15.863C12.596 15.621 12.3 15.5 11.95 15.5C11.6 15.5 11.304 15.621 11.062 15.863C10.8207 16.1043 10.7 16.4 10.7 16.75C10.7 17.1 10.8207 17.3957 11.062 17.637C11.304 17.879 11.6 18 11.95 18ZM12.1 7.7C12.5667 7.7 12.9417 7.829 13.225 8.087C13.5083 8.34567 13.65 8.68333 13.65 9.1C13.65 9.38333 13.5543 9.67067 13.363 9.962C13.171 10.254 12.9 10.5583 12.55 10.875C12.05 11.3083 11.6833 11.725 11.45 12.125C11.2167 12.525 11.1 12.925 11.1 13.325C11.1 13.5583 11.1877 13.754 11.363 13.912C11.5377 14.0707 11.7417 14.15 11.975 14.15C12.2083 14.15 12.4167 14.0667 12.6 13.9C12.7833 13.7333 12.9 13.525 12.95 13.275C13 12.9917 13.1127 12.7293 13.288 12.488C13.4627 12.246 13.75 11.9333 14.15 11.55C14.6667 11.0667 15.0293 10.625 15.238 10.225C15.446 9.825 15.55 9.38333 15.55 8.9C15.55 8.05 15.2293 7.354 14.588 6.812C13.946 6.27067 13.1167 6 12.1 6C11.4 6 10.7793 6.13333 10.238 6.4C9.696 6.66667 9.275 7.075 8.975 7.625C8.85833 7.84167 8.81667 8.054 8.85 8.262C8.88333 8.47067 9 8.64167 9.2 8.775C9.41667 8.90833 9.65433 8.95 9.913 8.9C10.171 8.85 10.3833 8.70833 10.55 8.475C10.7333 8.225 10.9543 8.03333 11.213 7.9C11.471 7.76667 11.7667 7.7 12.1 7.7ZM12 22C10.6333 22 9.34167 21.7373 8.125 21.212C6.90833 20.6873 5.846 19.975 4.938 19.075C4.02933 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.02933 5.825 4.938 4.925C5.846 4.025 6.90833 3.31233 8.125 2.787C9.34167 2.26233 10.6333 2 12 2C13.4 2 14.7083 2.26233 15.925 2.787C17.1417 3.31233 18.2 4.025 19.1 4.925C20 5.825 20.7083 6.88333 21.225 8.1C21.7417 9.31667 22 10.6167 22 12C22 13.3833 21.7417 14.6833 21.225 15.9C20.7083 17.1167 20 18.175 19.1 19.075C18.2 19.975 17.1417 20.6873 15.925 21.212C14.7083 21.7373 13.4 22 12 22ZM12 20C14.2333 20 16.125 19.221 17.675 17.663C19.225 16.1043 20 14.2167 20 12C20 9.78333 19.225 7.89567 17.675 6.337C16.125 4.779 14.2333 4 12 4C9.81667 4 7.93733 4.779 6.362 6.337C4.78733 7.89567 4 9.78333 4 12C4 14.2167 4.78733 16.1043 6.362 17.663C7.93733 19.221 9.81667 20 12 20Z" />',
    home: '<path d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM6 21C5.45 21 4.97933 20.8043 4.588 20.413C4.196 20.021 4 19.55 4 19V10C4 9.68333 4.071 9.38333 4.213 9.1C4.35433 8.81667 4.55 8.58333 4.8 8.4L10.8 3.9C10.9833 3.76667 11.175 3.66667 11.375 3.6C11.575 3.53333 11.7833 3.5 12 3.5C12.2167 3.5 12.425 3.53333 12.625 3.6C12.825 3.66667 13.0167 3.76667 13.2 3.9L19.2 8.4C19.45 8.58333 19.646 8.81667 19.788 9.1C19.9293 9.38333 20 9.68333 20 10V19C20 19.55 19.8043 20.021 19.413 20.413C19.021 20.8043 18.55 21 18 21H13V15H11V21H6Z" />',
    link: '<path d="M10.59 13.4101C11 13.8001 11 14.4401 10.59 14.8301C10.2 15.2201 9.56001 15.2201 9.17001 14.8301C7.22001 12.8801 7.22001 9.71007 9.17001 7.76007L12.71 4.22007C14.66 2.27007 17.83 2.27007 19.78 4.22007C21.73 6.17007 21.73 9.34007 19.78 11.2901L18.29 12.7801C18.3 11.9601 18.17 11.1401 17.89 10.3601L18.36 9.88007C19.54 8.71007 19.54 6.81007 18.36 5.64007C17.19 4.46007 15.29 4.46007 14.12 5.64007L10.59 9.17007C9.41001 10.3401 9.41001 12.2401 10.59 13.4101ZM13.41 9.17007C13.8 8.78007 14.44 8.78007 14.83 9.17007C16.78 11.1201 16.78 14.2901 14.83 16.2401L11.29 19.7801C9.34001 21.7301 6.17001 21.7301 4.22001 19.7801C2.27001 17.8301 2.27001 14.6601 4.22001 12.7101L5.71001 11.2201C5.70001 12.0401 5.83001 12.8601 6.11001 13.6501L5.64001 14.1201C4.46001 15.2901 4.46001 17.1901 5.64001 18.3601C6.81001 19.5401 8.71001 19.5401 9.88001 18.3601L13.41 14.8301C14.59 13.6601 14.59 11.7601 13.41 10.5901C13 10.2001 13 9.56007 13.41 9.17007Z" />',
    "location-on": "<path d='M12.5 12C13.05 12 13.5208 11.8042 13.9125 11.4125C14.3042 11.0208 14.5 10.55 14.5 10C14.5 9.45 14.3042 8.97917 13.9125 8.5875C13.5208 8.19583 13.05 8 12.5 8C11.95 8 11.4792 8.19583 11.0875 8.5875C10.6958 8.97917 10.5 9.45 10.5 10C10.5 10.55 10.6958 11.0208 11.0875 11.4125C11.4792 11.8042 11.95 12 12.5 12ZM12.5 19.35C14.5333 17.4833 16.0417 15.7875 17.025 14.2625C18.0083 12.7375 18.5 11.3833 18.5 10.2C18.5 8.38333 17.9208 6.89583 16.7625 5.7375C15.6042 4.57917 14.1833 4 12.5 4C10.8167 4 9.39583 4.57917 8.2375 5.7375C7.07917 6.89583 6.5 8.38333 6.5 10.2C6.5 11.3833 6.99167 12.7375 7.975 14.2625C8.95833 15.7875 10.4667 17.4833 12.5 19.35ZM12.5 22C9.81667 19.7167 7.8125 17.5958 6.4875 15.6375C5.1625 13.6792 4.5 11.8667 4.5 10.2C4.5 7.7 5.30417 5.70833 6.9125 4.225C8.52083 2.74167 10.3833 2 12.5 2C14.6167 2 16.4792 2.74167 18.0875 4.225C19.6958 5.70833 20.5 7.7 20.5 10.2C20.5 11.8667 19.8375 13.6792 18.5125 15.6375C17.1875 17.5958 15.1833 19.7167 12.5 22Z' />",
    more: '<path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>',
    "navigate-before": '<path d="M13.3 17.3L8.70005 12.7C8.60005 12.6 8.52938 12.4917 8.48805 12.375C8.44605 12.2583 8.42505 12.1333 8.42505 12C8.42505 11.8667 8.44605 11.7417 8.48805 11.625C8.52938 11.5083 8.60005 11.4 8.70005 11.3L13.3 6.69999C13.4834 6.51665 13.7167 6.42499 14 6.42499C14.2834 6.42499 14.5167 6.51665 14.7 6.69999C14.8834 6.88332 14.975 7.11665 14.975 7.39999C14.975 7.68332 14.8834 7.91665 14.7 8.09999L10.8 12L14.7 15.9C14.8834 16.0833 14.975 16.3167 14.975 16.6C14.975 16.8833 14.8834 17.1167 14.7 17.3C14.5167 17.4833 14.2834 17.575 14 17.575C13.7167 17.575 13.4834 17.4833 13.3 17.3Z" />',
    "navigate-next": '<path d="M8.70005 17.3C8.51672 17.1167 8.42505 16.8833 8.42505 16.6C8.42505 16.3167 8.51672 16.0833 8.70005 15.9L12.6 12L8.70005 8.09999C8.51672 7.91665 8.42505 7.68332 8.42505 7.39999C8.42505 7.11665 8.51672 6.88332 8.70005 6.69999C8.88338 6.51665 9.11671 6.42499 9.40005 6.42499C9.68338 6.42499 9.91672 6.51665 10.1 6.69999L14.7 11.3C14.8 11.4 14.871 11.5083 14.913 11.625C14.9544 11.7417 14.975 11.8667 14.975 12C14.975 12.1333 14.9544 12.2583 14.913 12.375C14.871 12.4917 14.8 12.6 14.7 12.7L10.1 17.3C9.91672 17.4833 9.68338 17.575 9.40005 17.575C9.11671 17.575 8.88338 17.4833 8.70005 17.3Z" />',
    notification: '<path d="M5 19C4.71667 19 4.479 18.904 4.287 18.712C4.09567 18.5207 4 18.2833 4 18C4 17.7167 4.09567 17.4793 4.287 17.288C4.479 17.096 4.71667 17 5 17H6V10C6 8.61667 6.41667 7.38733 7.25 6.312C8.08333 5.23733 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.646 2.72933 10.938 2.438C11.2293 2.146 11.5833 2 12 2C12.4167 2 12.7707 2.146 13.062 2.438C13.354 2.72933 13.5 3.08333 13.5 3.5V4.2C14.8333 4.53333 15.9167 5.23733 16.75 6.312C17.5833 7.38733 18 8.61667 18 10V17H19C19.2833 17 19.5207 17.096 19.712 17.288C19.904 17.4793 20 17.7167 20 18C20 18.2833 19.904 18.5207 19.712 18.712C19.5207 18.904 19.2833 19 19 19H5ZM12 22C11.45 22 10.9793 21.8043 10.588 21.413C10.196 21.021 10 20.55 10 20H14C14 20.55 13.8043 21.021 13.413 21.413C13.021 21.8043 12.55 22 12 22ZM8 17H16V10C16 8.9 15.6083 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95833 6.39167 9.175 7.175C8.39167 7.95833 8 8.9 8 10V17Z" />',
    none: "",
    "open-in-new": '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z"/>',
    "pull-left": '<path d="M8.991 17.245c.2-.2.3-.437.3-.713 0-.274-.1-.512-.3-.712l-2.875-2.875h11.175a.968.968 0 0 0 .713-.288.967.967 0 0 0 .287-.712.97.97 0 0 0-.287-.713.97.97 0 0 0-.713-.287H6.116l2.875-2.9a.98.98 0 0 0 .288-.688.932.932 0 0 0-.288-.712.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275l-4.6 4.6c-.1.1-.171.209-.213.325a1.115 1.115 0 0 0-.062.375c0 .134.02.259.062.375a.883.883 0 0 0 .213.325l4.6 4.6a.932.932 0 0 0 .687.275c.275 0 .513-.091.713-.275Zm12.3.7c.283 0 .52-.096.712-.288a.965.965 0 0 0 .288-.712v-10a.968.968 0 0 0-.288-.713.967.967 0 0 0-.712-.287.97.97 0 0 0-.713.287.97.97 0 0 0-.287.713v10c0 .284.096.521.287.712.192.192.43.288.713.288Z"/>',
    "pull-right": '<path d="M15.591 17.245c-.2-.2-.3-.437-.3-.713 0-.274.1-.512.3-.712l2.875-2.875H7.291a.968.968 0 0 1-.713-.288.967.967 0 0 1-.287-.712.97.97 0 0 1 .287-.713.97.97 0 0 1 .713-.287h11.175l-2.875-2.9a.98.98 0 0 1-.288-.688.932.932 0 0 1 .288-.712.948.948 0 0 1 .7-.275.95.95 0 0 1 .7.275l4.6 4.6c.1.1.171.209.213.325.041.117.062.242.062.375 0 .134-.02.259-.062.375a.883.883 0 0 1-.213.325l-4.6 4.6a.932.932 0 0 1-.687.275 1.02 1.02 0 0 1-.713-.275Zm-12.3.7a.965.965 0 0 1-.712-.288.965.965 0 0 1-.288-.712v-10a.97.97 0 0 1 .288-.713.967.967 0 0 1 .712-.287.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713v10a.967.967 0 0 1-.287.712.968.968 0 0 1-.713.288Z"/>',
    "progress-circle": ``, // special icon
    search: '<path d="M18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.371 4.888 14.113C3.62933 12.8543 3 11.3167 3 9.5C3 7.68333 3.62933 6.14567 4.888 4.887C6.146 3.629 7.68333 3 9.5 3C11.3167 3 12.8543 3.629 14.113 4.887C15.371 6.14567 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.325 18.925C20.5083 19.1083 20.6 19.3333 20.6 19.6C20.6 19.8667 20.5 20.1 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5627 11.8127 14 10.75 14 9.5C14 8.25 13.5627 7.18733 12.688 6.312C11.8127 5.43733 10.75 5 9.5 5C8.25 5 7.18733 5.43733 6.312 6.312C5.43733 7.18733 5 8.25 5 9.5C5 10.75 5.43733 11.8127 6.312 12.688C7.18733 13.5627 8.25 14 9.5 14Z" />',
    settings: '<path d="M13.8751 22H10.1251C9.87509 22 9.65843 21.9167 9.47509 21.75C9.29176 21.5833 9.18343 21.375 9.15009 21.125L8.85009 18.8C8.63343 18.7167 8.42943 18.6167 8.23809 18.5C8.04609 18.3833 7.85843 18.2583 7.67509 18.125L5.50009 19.025C5.26676 19.1083 5.03343 19.1167 4.80009 19.05C4.56676 18.9833 4.38343 18.8417 4.25009 18.625L2.40009 15.4C2.26676 15.1833 2.22509 14.95 2.27509 14.7C2.32509 14.45 2.45009 14.25 2.65009 14.1L4.52509 12.675C4.50843 12.5583 4.50009 12.4457 4.50009 12.337V11.662C4.50009 11.554 4.50843 11.4417 4.52509 11.325L2.65009 9.9C2.45009 9.75 2.32509 9.55 2.27509 9.3C2.22509 9.05 2.26676 8.81667 2.40009 8.6L4.25009 5.375C4.36676 5.14167 4.54576 4.99567 4.78709 4.937C5.02909 4.879 5.26676 4.89167 5.50009 4.975L7.67509 5.875C7.85843 5.74167 8.05009 5.61667 8.25009 5.5C8.45009 5.38333 8.65009 5.28333 8.85009 5.2L9.15009 2.875C9.18343 2.625 9.29176 2.41667 9.47509 2.25C9.65843 2.08333 9.87509 2 10.1251 2H13.8751C14.1251 2 14.3418 2.08333 14.5251 2.25C14.7084 2.41667 14.8168 2.625 14.8501 2.875L15.1501 5.2C15.3668 5.28333 15.5711 5.38333 15.7631 5.5C15.9544 5.61667 16.1418 5.74167 16.3251 5.875L18.5001 4.975C18.7334 4.89167 18.9668 4.88333 19.2001 4.95C19.4334 5.01667 19.6168 5.15833 19.7501 5.375L21.6001 8.6C21.7334 8.81667 21.7751 9.05 21.7251 9.3C21.6751 9.55 21.5501 9.75 21.3501 9.9L19.4751 11.325C19.4918 11.4417 19.5001 11.554 19.5001 11.662V12.337C19.5001 12.4457 19.4834 12.5583 19.4501 12.675L21.3251 14.1C21.5251 14.25 21.6501 14.45 21.7001 14.7C21.7501 14.95 21.7084 15.1833 21.5751 15.4L19.7251 18.6C19.5918 18.8167 19.4044 18.9627 19.1631 19.038C18.9211 19.1127 18.6834 19.1083 18.4501 19.025L16.3251 18.125C16.1418 18.2583 15.9501 18.3833 15.7501 18.5C15.5501 18.6167 15.3501 18.7167 15.1501 18.8L14.8501 21.125C14.8168 21.375 14.7084 21.5833 14.5251 21.75C14.3418 21.9167 14.1251 22 13.8751 22ZM12.0501 15.5C13.0168 15.5 13.8418 15.1583 14.5251 14.475C15.2084 13.7917 15.5501 12.9667 15.5501 12C15.5501 11.0333 15.2084 10.2083 14.5251 9.525C13.8418 8.84167 13.0168 8.5 12.0501 8.5C11.0668 8.5 10.2374 8.84167 9.56209 9.525C8.88743 10.2083 8.55009 11.0333 8.55009 12C8.55009 12.9667 8.88743 13.7917 9.56209 14.475C10.2374 15.1583 11.0668 15.5 12.0501 15.5ZM12.0501 13.5C11.6334 13.5 11.2794 13.354 10.9881 13.062C10.6961 12.7707 10.5501 12.4167 10.5501 12C10.5501 11.5833 10.6961 11.2293 10.9881 10.938C11.2794 10.646 11.6334 10.5 12.0501 10.5C12.4668 10.5 12.8211 10.646 13.1131 10.938C13.4044 11.2293 13.5501 11.5833 13.5501 12C13.5501 12.4167 13.4044 12.7707 13.1131 13.062C12.8211 13.354 12.4668 13.5 12.0501 13.5ZM11.0001 20H12.9751L13.3251 17.35C13.8418 17.2167 14.3211 17.0207 14.7631 16.762C15.2044 16.504 15.6084 16.1917 15.9751 15.825L18.4501 16.85L19.4251 15.15L17.2751 13.525C17.3584 13.2917 17.4168 13.0457 17.4501 12.787C17.4834 12.529 17.5001 12.2667 17.5001 12C17.5001 11.7333 17.4834 11.4707 17.4501 11.212C17.4168 10.954 17.3584 10.7083 17.2751 10.475L19.4251 8.85L18.4501 7.15L15.9751 8.2C15.6084 7.81667 15.2044 7.49567 14.7631 7.237C14.3211 6.979 13.8418 6.78333 13.3251 6.65L13.0001 4H11.0251L10.6751 6.65C10.1584 6.78333 9.67943 6.979 9.23809 7.237C8.79609 7.49567 8.39176 7.80833 8.02509 8.175L5.55009 7.15L4.57509 8.85L6.72509 10.45C6.64176 10.7 6.58343 10.95 6.55009 11.2C6.51676 11.45 6.50009 11.7167 6.50009 12C6.50009 12.2667 6.51676 12.525 6.55009 12.775C6.58343 13.025 6.64176 13.275 6.72509 13.525L4.57509 15.15L5.55009 16.85L8.02509 15.8C8.39176 16.1833 8.79609 16.504 9.23809 16.762C9.67943 17.0207 10.1584 17.2167 10.6751 17.35L11.0001 20Z" />',
    "swap-horizontal": '<path d="m7.001 19.769-5-5 5-5 1.4 1.425-2.575 2.575h7.175v2H5.826l2.575 2.575-1.4 1.425Zm10-6-1.4-1.425 2.575-2.575h-7.175v-2h7.175l-2.575-2.575 1.4-1.425 5 5-5 5Z"/>',
    unfold: '<path d="M8.515 8.27c-.183-.183-.275-.425-.275-.725s.092-.541.275-.725l3.075-3.075c.1-.1.209-.17.325-.213a1.208 1.208 0 0 1 .763 0 .681.681 0 0 1 .312.213l3.1 3.1c.184.184.27.42.262.712-.008.292-.103.53-.287.713-.183.184-.425.275-.725.275s-.541-.091-.725-.275L12.29 5.945l-2.35 2.35c-.183.184-.42.271-.712.263a1.01 1.01 0 0 1-.713-.288Zm3.775 12.25a.942.942 0 0 1-.375-.075 1.317 1.317 0 0 1-.325-.2L8.515 17.17c-.183-.183-.275-.425-.275-.725s.092-.542.275-.725c.184-.183.425-.275.725-.275s.542.092.725.275l2.325 2.325 2.35-2.35c.184-.183.42-.27.712-.262.292.008.53.104.713.287.184.183.275.425.275.725s-.091.542-.275.725l-3.075 3.075a.917.917 0 0 1-.312.2c-.125.05-.254.075-.388.075Z"/>',
    warning: '<path d="M2.73,21c-.18,0-.35-.05-.5-.14-.15-.09-.27-.21-.35-.36s-.13-.31-.14-.49,.04-.35,.14-.51L11.13,3.5c.1-.17,.23-.29,.39-.38s.32-.13,.49-.13,.33,.04,.49,.13,.29,.21,.39,.38l9.25,16c.1,.17,.15,.34,.14,.51s-.05,.34-.14,.49-.2,.27-.35,.36c-.15,.09-.32,.14-.5,.14H2.73Zm1.73-2h15.1L12,6l-7.55,13Zm7.55-1c.28,0,.52-.1,.71-.29,.19-.19,.29-.43,.29-.71s-.1-.52-.29-.71c-.19-.19-.43-.29-.71-.29s-.52,.1-.71,.29-.29,.43-.29,.71,.1,.52,.29,.71c.19,.19,.43,.29,.71,.29Zm0-3c.28,0,.52-.1,.71-.29,.19-.19,.29-.43,.29-.71v-3c0-.28-.1-.52-.29-.71-.19-.19-.43-.29-.71-.29s-.52,.1-.71,.29-.29,.43-.29,.71v3c0,.28,.1,.52,.29,.71s.43,.29,.71,.29Z"/>',
    /**
     * Brand
     */
    "brandwatch-color": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.01003 8.06832V13.3218L9.1505 16.2248L15.4314 9.60519L11.3177 2.11169C11.1873 2.15187 11.0569 2.21214 10.9264 2.28246L4.10368 6.21001C3.77215 6.39455 3.49537 6.66373 3.3015 6.99015C3.10764 7.31657 3.00361 7.68858 3 8.06832" fill="#57B7DD"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.15048 16.2248L16.5552 19.7204L19.9063 17.7818L15.4314 9.60522L9.15048 16.2248Z" fill="#F99132"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.1037 5.7279L13.0836 2.2825C12.8193 2.13237 12.5264 2.03958 12.2239 2.01017C11.9214 1.98075 11.6161 2.01535 11.3278 2.11174L15.4415 9.61528L19.1238 5.74799L19.1037 5.7279Z" fill="#A98BBC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9064 17.7817H19.9264C20.2524 17.5934 20.5231 17.3225 20.7115 16.9964C20.8999 16.6702 20.9994 16.3002 21 15.9234V8.06833C21 7.29487 20.5987 6.59173 19.9264 6.19998L19.1137 5.73792L15.4315 9.6052L19.9164 17.7918L19.9064 17.7817Z" fill="#FF6D56"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.01004 13.3218V15.9235C3.01004 16.6869 3.43144 17.4001 4.09365 17.7818L6.40134 19.1177L9.15051 16.2248L3.01004 13.3218Z" fill="#8AC539"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.41135 19.1177L10.9264 21.7093C11.2559 21.8997 11.6296 22 12.01 22C12.3904 22 12.7642 21.8997 13.0936 21.7093L16.5552 19.7204L9.15048 16.2248L6.41135 19.1177Z" fill="#FFBE0A"/>',
    /**
     * Products
     */
    "product-advertise": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.58 2.466a2.165 2.165 0 0 1 1.775.175l6.84 3.94a2.156 2.156 0 0 1 1.08 1.868v7.882c0 .77-.412 1.483-1.08 1.868l-.01.005-6.83 3.936a2.165 2.165 0 0 1-2.16 0l-6.84-3.941a2.156 2.156 0 0 1-1.08-1.868V8.449c0-.77.411-1.482 1.08-1.868l6.84-3.94a2.16 2.16 0 0 1 .385-.175Zm5.128 13.127c-.162.21-.354.377-.576.5-.251.14-.545.21-.88.21a2.02 2.02 0 0 1-.943-.215 2 2 0 0 1-.692-.603 2.886 2.886 0 0 1-.424-.911 4.221 4.221 0 0 1-.147-1.143v-.11c0-.433.05-.826.147-1.179a2.75 2.75 0 0 1 .43-.917c.188-.255.42-.452.697-.592.275-.14.59-.21.943-.21.332 0 .621.07.87.21a1.8 1.8 0 0 1 .497.411V8.15h1.52v8.048h-1.368l-.074-.605Zm-.078-3.373a1.164 1.164 0 0 0-.13-.214.97.97 0 0 0-.357-.293 1.103 1.103 0 0 0-.498-.105.902.902 0 0 0-.503.136.999.999 0 0 0-.34.362 1.92 1.92 0 0 0-.19.545c-.037.206-.057.43-.057.67v.11c0 .234.018.453.053.655.038.203.1.383.183.54.087.154.2.274.335.362a.97.97 0 0 0 .509.125c.258 0 .471-.057.639-.173.151-.107.27-.25.356-.429V12.22ZM9.742 8.569h.399l2.85 7.629h-1.677l-.529-1.609H8.043l-.527 1.609H5.844l2.835-7.63h1.063Zm-1.295 4.789h1.933l-.968-2.942-.965 2.942Z"/>',
    "product-advertise-color": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.355 2.64a2.165 2.165 0 0 0-2.16 0l-6.84 3.941a2.156 2.156 0 0 0-1.08 1.868v7.882c0 .77.411 1.483 1.08 1.868l6.84 3.94a2.165 2.165 0 0 0 2.16 0l6.83-3.935.01-.005a2.156 2.156 0 0 0 1.08-1.868V8.449c0-.77-.412-1.482-1.08-1.868l-6.84-3.94Z" fill="#09D5D9"/><path d="m9.59 9.874-2.074 6.324H5.844l2.835-7.63h1.063L9.59 9.875Zm1.724 6.324-2.08-6.324-.168-1.305h1.075l2.85 7.629h-1.677Zm-.094-2.84v1.231H7.19v-1.231h4.03Zm5.41 1.603V8.15h1.52v8.048h-1.368l-.152-1.237Zm-3.584-1.53v-.11c0-.433.05-.826.147-1.179a2.75 2.75 0 0 1 .43-.917c.188-.255.42-.452.697-.592.275-.14.59-.21.943-.21.332 0 .621.07.87.21.25.14.464.34.639.598.178.255.321.557.43.906.108.346.186.725.235 1.137v.241a6.056 6.056 0 0 1-.236 1.1 3.296 3.296 0 0 1-.43.891 1.894 1.894 0 0 1-.639.587c-.251.14-.545.21-.88.21a2.02 2.02 0 0 1-.943-.215 2 2 0 0 1-.692-.603 2.886 2.886 0 0 1-.424-.911 4.221 4.221 0 0 1-.147-1.143Zm1.51-.11v.11c0 .234.017.453.052.655.038.203.1.383.183.54.087.154.2.274.335.362a.97.97 0 0 0 .509.125c.258 0 .471-.057.639-.173.168-.118.295-.28.382-.487.091-.206.144-.444.158-.712v-.687a2.468 2.468 0 0 0-.095-.592 1.289 1.289 0 0 0-.22-.456.97.97 0 0 0-.356-.293 1.103 1.103 0 0 0-.498-.105.902.902 0 0 0-.503.136.999.999 0 0 0-.34.362 1.92 1.92 0 0 0-.19.545c-.037.206-.057.43-.057.67Z" fill="#fff"/>',
    "product-audience": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.58 2.466a2.165 2.165 0 0 1 1.775.175l6.84 3.94a2.156 2.156 0 0 1 1.08 1.868v7.882c0 .77-.412 1.483-1.08 1.868l-.01.005-6.83 3.936a2.165 2.165 0 0 1-2.16 0l-6.84-3.941a2.156 2.156 0 0 1-1.08-1.868V8.449c0-.77.411-1.482 1.08-1.868l6.84-3.94a2.16 2.16 0 0 1 .385-.175ZM9.79 8.569h.398l2.85 7.629h-1.677l-.529-1.609H8.09l-.527 1.609H5.89l2.835-7.629h1.064Zm-1.296 4.789h1.933l-.967-2.942-.966 2.942Zm8.176 2.25a1.808 1.808 0 0 1-.622.5c-.265.13-.578.195-.937.195-.276 0-.531-.039-.765-.116-.23-.08-.43-.204-.598-.372a1.802 1.802 0 0 1-.387-.655 3.046 3.046 0 0 1-.137-.969V10.53h1.51v3.673c0 .167.019.309.057.424.042.115.1.21.173.283a.63.63 0 0 0 .257.157c.101.032.213.047.335.047.31 0 .555-.063.734-.188a.98.98 0 0 0 .33-.385V10.53h1.509v5.669h-1.42l-.039-.59Z"/>',
    "product-audience-color": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.355 2.64a2.165 2.165 0 0 0-2.16 0l-6.84 3.941a2.156 2.156 0 0 0-1.08 1.868v7.882c0 .77.411 1.483 1.08 1.868l6.84 3.94a2.165 2.165 0 0 0 2.16 0l6.83-3.935.01-.005a2.156 2.156 0 0 0 1.08-1.868V8.449c0-.77-.412-1.482-1.08-1.868l-6.84-3.94Z" fill="#FF6D56"/><path d="m9.638 9.874-2.075 6.324H5.89l2.835-7.629h1.063l-.151 1.305Zm1.723 6.324-2.08-6.324-.167-1.305h1.074l2.85 7.629h-1.677Zm-.094-2.84v1.231h-4.03v-1.231h4.03Zm5.353 1.482v-4.31h1.509v5.669h-1.42l-.09-1.357Zm.167-1.162.446-.01c0 .376-.044.727-.131 1.052a2.51 2.51 0 0 1-.393.839 1.835 1.835 0 0 1-.66.55 2.129 2.129 0 0 1-.938.194c-.276 0-.531-.039-.765-.116-.23-.08-.43-.204-.598-.372a1.802 1.802 0 0 1-.387-.655 3.046 3.046 0 0 1-.137-.969V10.53h1.51v3.673c0 .167.019.309.057.424.042.115.1.21.173.283a.63.63 0 0 0 .257.157c.101.032.213.047.335.047.31 0 .555-.063.734-.188a.994.994 0 0 0 .382-.514c.077-.22.115-.464.115-.733Z" fill="#fff"/>',
    "product-benchmark": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.58 2.466a2.165 2.165 0 0 1 1.775.175l6.84 3.94a2.156 2.156 0 0 1 1.08 1.868v7.882c0 .77-.412 1.483-1.08 1.868l-.01.005-6.83 3.936a2.165 2.165 0 0 1-2.16 0l-6.84-3.941a2.156 2.156 0 0 1-1.08-1.868V8.449c0-.77.411-1.482 1.08-1.868l6.84-3.94a2.16 2.16 0 0 1 .385-.175ZM6.614 12.85v2.122h1.347c.276 0 .501-.044.676-.131a.898.898 0 0 0 .387-.367c.084-.154.126-.33.126-.53a1.36 1.36 0 0 0-.115-.58.778.778 0 0 0-.356-.378c-.165-.09-.381-.136-.65-.136H6.614Zm2.847-.585c.071-.029.14-.06.203-.096.304-.168.525-.385.665-.65.143-.266.215-.556.215-.87a2.04 2.04 0 0 0-.194-.922 1.701 1.701 0 0 0-.56-.65 2.592 2.592 0 0 0-.897-.382 5.115 5.115 0 0 0-1.189-.126H5.042v7.629h2.919c.59 0 1.09-.084 1.498-.252.413-.167.725-.417.938-.749.213-.335.32-.747.32-1.236 0-.308-.067-.596-.2-.865a1.517 1.517 0 0 0-.623-.655 1.574 1.574 0 0 0-.433-.176Zm-1.757-.495c.29 0 .528-.036.713-.11a.864.864 0 0 0 .414-.33.968.968 0 0 0 .141-.534c0-.238-.045-.43-.136-.576a.748.748 0 0 0-.414-.32 2.165 2.165 0 0 0-.718-.1h-1.09v1.97h1.09Zm5.285.407v4.02h-1.515V10.53h1.42l.052.649a1.94 1.94 0 0 1 .677-.55 2.14 2.14 0 0 1 .958-.204c.252 0 .482.038.692.115.21.073.39.19.54.351.108.111.2.247.274.407a1.909 1.909 0 0 1 .764-.67c.272-.135.586-.203.942-.203.273 0 .52.04.744.12.224.077.414.201.572.372.16.168.282.388.366.66.088.273.131.607.131 1.001v3.62h-1.514v-3.62c0-.262-.035-.46-.105-.597a.55.55 0 0 0-.293-.288 1.104 1.104 0 0 0-.45-.084.99.99 0 0 0-.818.403 1.251 1.251 0 0 0-.134.238c.002.054.003.11.003.166v3.783h-1.51v-3.616c0-.258-.034-.457-.104-.597a.595.595 0 0 0-.299-.293 1.118 1.118 0 0 0-.455-.084c-.196 0-.367.04-.514.12a1.02 1.02 0 0 0-.356.336 1.322 1.322 0 0 0-.068.113Z"/>',
    "product-benchmark-color": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.355 2.64a2.165 2.165 0 0 0-2.16 0l-6.84 3.941a2.156 2.156 0 0 0-1.08 1.868v7.882c0 .77.411 1.483 1.08 1.868l6.84 3.94a2.165 2.165 0 0 0 2.16 0l6.83-3.935.01-.005a2.156 2.156 0 0 0 1.08-1.868V8.449c0-.77-.412-1.482-1.08-1.868l-6.84-3.94Z" fill="#3B79CC"/><path d="M8.029 12.85h-1.96l-.01-1.08h1.645c.29 0 .528-.036.713-.11a.864.864 0 0 0 .414-.33.968.968 0 0 0 .141-.534c0-.238-.045-.43-.136-.576a.748.748 0 0 0-.414-.32 2.165 2.165 0 0 0-.718-.1h-1.09v6.398H5.042V8.569h2.662c.444 0 .84.042 1.19.126.352.084.65.211.895.382s.432.388.561.65c.13.258.194.566.194.922 0 .315-.072.604-.215.87-.14.265-.361.482-.665.65-.3.167-.694.26-1.18.277l-.455.404Zm-.068 3.348H5.64l.613-1.226H7.96c.276 0 .501-.044.676-.131a.898.898 0 0 0 .387-.367c.084-.154.126-.33.126-.53a1.36 1.36 0 0 0-.115-.58.778.778 0 0 0-.356-.378c-.165-.09-.381-.136-.65-.136H6.515l.01-1.08h1.886l.362.425c.465-.007.838.075 1.121.246.287.168.495.386.624.655.132.269.199.557.199.865 0 .489-.107.9-.32 1.236-.213.332-.525.582-.938.75-.408.167-.908.25-1.498.25Zm5.028-4.496v4.496h-1.515v-5.67h1.42l.095 1.174Zm-.21 1.462h-.42c0-.395.048-.758.142-1.09.098-.335.24-.625.425-.87.188-.248.42-.44.697-.576a2.14 2.14 0 0 1 .958-.204c.252 0 .482.038.692.115.21.073.39.19.54.351.153.157.272.363.356.618.084.252.126.554.126.907v3.783h-1.51v-3.616c0-.258-.034-.457-.104-.597a.595.595 0 0 0-.299-.293 1.118 1.118 0 0 0-.455-.084c-.196 0-.367.04-.514.12a1.02 1.02 0 0 0-.356.336c-.095.14-.165.304-.21.492a2.593 2.593 0 0 0-.068.608Zm3.374-.173-.54.068c0-.37.046-.714.137-1.032.094-.318.232-.597.414-.838a1.9 1.9 0 0 1 .686-.56c.273-.137.587-.205.943-.205.273 0 .52.04.744.12.224.077.414.201.572.372.16.168.282.388.366.66.088.273.131.607.131 1.001v3.62h-1.514v-3.62c0-.262-.035-.46-.105-.597a.55.55 0 0 0-.293-.288 1.104 1.104 0 0 0-.45-.084.99.99 0 0 0-.818.403c-.091.126-.16.273-.205.44a2.02 2.02 0 0 0-.068.54Z" fill="#fff"/>',
    "product-consumer-research": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.306 2.114a2.165 2.165 0 0 1 1.775.175l6.838 3.94A2.156 2.156 0 0 1 21 8.099v7.881c0 .77-.412 1.483-1.08 1.868l-.01.005-6.83 3.936a2.165 2.165 0 0 1-2.16 0l-6.84-3.94A2.156 2.156 0 0 1 3 15.978v-7.88c0-.771.412-1.483 1.08-1.868l6.84-3.941a2.12 2.12 0 0 1 .386-.175Zm2.05 11.201h-1.567c-.021.308-.09.565-.204.77a1.086 1.086 0 0 1-.488.467c-.213.105-.483.157-.812.157-.28 0-.519-.05-.718-.152a1.269 1.269 0 0 1-.482-.46 2.393 2.393 0 0 1-.272-.755c-.06-.3-.09-.648-.09-1.043v-.54c0-.405.032-.758.095-1.058.066-.304.166-.556.299-.755.132-.199.297-.347.492-.445.196-.098.425-.147.687-.147.349 0 .628.056.838.168.213.108.372.27.477.487.105.213.166.473.183.78h1.572a3.228 3.228 0 0 0-.44-1.382 2.52 2.52 0 0 0-1.022-.954c-.436-.23-.973-.346-1.608-.346-.479 0-.912.086-1.3.257a2.849 2.849 0 0 0-1 .734 3.344 3.344 0 0 0-.64 1.157c-.146.451-.22.956-.22 1.515v.529c0 .559.072 1.064.215 1.514.143.45.351.835.624 1.153.275.318.607.562.995.734.388.167.826.251 1.315.251.626 0 1.16-.112 1.604-.335a2.53 2.53 0 0 0 1.042-.933c.252-.398.393-.854.425-1.368Zm2.125-1.208v3.74h-1.51v-5.67h1.42l.05.695.045-.077a1.6 1.6 0 0 1 .524-.534c.206-.126.442-.189.707-.189.084 0 .17.007.257.021.087.01.159.026.215.047l-.026 1.4a3.638 3.638 0 0 0-.268-.027 2.711 2.711 0 0 0-.277-.016 1.66 1.66 0 0 0-.556.084.99.99 0 0 0-.388.236 1 1 0 0 0-.193.29Z"/>',
    "product-consumer-research-color": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.08 2.289a2.165 2.165 0 0 0-2.16 0l-6.84 3.94A2.156 2.156 0 0 0 3 8.099v7.881c0 .77.412 1.483 1.08 1.868l6.84 3.941a2.165 2.165 0 0 0 2.16 0l6.83-3.936.01-.005A2.156 2.156 0 0 0 21 15.98V8.098c0-.771-.412-1.483-1.08-1.868l-6.84-3.941Z" fill="#8AC539"/><path d="M11.789 13.315h1.567c-.032.514-.173.97-.425 1.368a2.53 2.53 0 0 1-1.042.933c-.444.223-.978.335-1.604.335-.489 0-.927-.084-1.315-.252a2.799 2.799 0 0 1-.995-.733 3.268 3.268 0 0 1-.624-1.153 4.987 4.987 0 0 1-.215-1.514v-.53c0-.558.074-1.063.22-1.514.15-.454.364-.84.64-1.157a2.846 2.846 0 0 1 1-.734 3.189 3.189 0 0 1 1.3-.257c.635 0 1.172.116 1.608.346.44.23.78.548 1.022.954.245.405.391.866.44 1.383h-1.572a2.023 2.023 0 0 0-.183-.78 1.04 1.04 0 0 0-.477-.488c-.21-.112-.489-.168-.838-.168-.262 0-.491.05-.687.147-.195.098-.36.246-.492.445-.133.2-.233.451-.299.755-.063.3-.094.653-.094 1.058v.54c0 .395.03.742.089 1.043.06.296.15.548.272.754.126.203.287.356.482.461.2.101.439.152.718.152.329 0 .6-.052.812-.157a1.09 1.09 0 0 0 .488-.466c.115-.206.183-.463.204-.77Zm3.691-1.902v4.433h-1.508v-5.67h1.42l.089 1.237Zm1.709-1.273-.026 1.4a3.638 3.638 0 0 0-.268-.027 2.711 2.711 0 0 0-.277-.016 1.66 1.66 0 0 0-.556.084.99.99 0 0 0-.388.236 1.03 1.03 0 0 0-.23.382 1.88 1.88 0 0 0-.084.514l-.304-.094c0-.367.037-.704.11-1.012.074-.31.18-.581.32-.812a1.6 1.6 0 0 1 .524-.534c.206-.126.442-.189.707-.189.084 0 .17.007.257.021.087.01.159.026.215.047Z" fill="#fff"/>',
    "product-engage": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.58 2.466a2.165 2.165 0 0 1 1.775.175l6.84 3.94a2.156 2.156 0 0 1 1.08 1.868v7.882c0 .77-.412 1.483-1.08 1.868l-.01.005-6.83 3.936a2.165 2.165 0 0 1-2.16 0l-6.84-3.941a2.156 2.156 0 0 1-1.08-1.868V8.449c0-.77.411-1.482 1.08-1.868l6.84-3.94a2.16 2.16 0 0 1 .385-.175Zm.63 13.732v-1.226H8.663V12.87h3.018v-1.195H8.663V9.8h3.542V8.57H7.09v7.629h5.119Zm1.978-4.022v4.022H12.68v-5.67h1.415l.053.678.031-.038c.196-.241.428-.425.697-.55a2.1 2.1 0 0 1 .912-.194c.265 0 .508.038.728.115.22.077.409.2.566.367.16.167.283.39.367.665.087.276.13.613.13 1.011v3.616H16.06v-3.62c0-.252-.035-.448-.105-.588a.588.588 0 0 0-.309-.293 1.205 1.205 0 0 0-.492-.089c-.203 0-.38.04-.53.12a1.05 1.05 0 0 0-.434.448Z"/>',
    "product-engage-color": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.355 2.64a2.165 2.165 0 0 0-2.16 0l-6.84 3.941a2.156 2.156 0 0 0-1.08 1.868v7.882c0 .77.411 1.483 1.08 1.868l6.84 3.94a2.165 2.165 0 0 0 2.16 0l6.83-3.935.01-.005a2.156 2.156 0 0 0 1.08-1.868V8.449c0-.77-.412-1.482-1.08-1.868l-6.84-3.94Z" fill="#E35A7A"/><path d="M12.21 14.972v1.226H8.15v-1.226h4.06ZM8.663 8.569v7.629H7.091V8.569h1.572Zm3.018 3.107v1.195H8.149v-1.195h3.532Zm.524-3.107V9.8H8.149V8.57h4.056Zm1.983 3.17v4.459H12.68v-5.67h1.415l.095 1.21Zm-.22 1.425h-.408c0-.419.054-.796.162-1.132.108-.338.26-.627.456-.864.196-.241.428-.425.697-.55a2.1 2.1 0 0 1 .912-.194c.265 0 .508.038.728.115.22.077.409.2.566.367.16.167.283.39.367.665.087.276.13.613.13 1.011v3.616H16.06v-3.62c0-.252-.035-.448-.105-.587a.588.588 0 0 0-.309-.294 1.205 1.205 0 0 0-.492-.089c-.203 0-.38.04-.53.12a1.05 1.05 0 0 0-.366.336c-.095.14-.166.304-.215.492a2.412 2.412 0 0 0-.074.608Z" fill="#fff"/>',
    "product-influence": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.58 2.466a2.165 2.165 0 0 1 1.775.175l6.84 3.94a2.156 2.156 0 0 1 1.08 1.868v7.882c0 .77-.412 1.483-1.08 1.868l-.01.005-6.83 3.936a2.165 2.165 0 0 1-2.16 0l-6.84-3.941a2.156 2.156 0 0 1-1.08-1.868V8.449c0-.77.411-1.482 1.08-1.868l6.84-3.94a2.16 2.16 0 0 1 .385-.175Zm-1.37 13.732V8.569H8.642v7.629h1.567Zm2.533-4.022v4.022h-1.509v-5.67h1.415l.053.678.03-.038c.197-.241.429-.425.698-.55a2.1 2.1 0 0 1 .911-.194c.266 0 .509.038.729.115.22.077.408.2.566.367.16.167.283.39.366.665.088.276.131.613.131 1.011v3.616h-1.52v-3.62c0-.252-.034-.448-.104-.588a.588.588 0 0 0-.309-.293 1.206 1.206 0 0 0-.493-.089c-.202 0-.379.04-.529.12a1.051 1.051 0 0 0-.435.448Z"/>',
    "product-influence-color": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.355 2.64a2.165 2.165 0 0 0-2.16 0l-6.84 3.941a2.156 2.156 0 0 0-1.08 1.868v7.882c0 .77.411 1.483 1.08 1.868l6.84 3.94a2.165 2.165 0 0 0 2.16 0l6.83-3.935.01-.005a2.156 2.156 0 0 0 1.08-1.868V8.449c0-.77-.412-1.482-1.08-1.868l-6.84-3.94Z" fill="#6063A1"/><path d="M10.209 8.569v7.629H8.642V8.569h1.567Zm2.533 3.17v4.459h-1.509v-5.67h1.415l.094 1.21Zm-.22 1.425h-.408c0-.419.054-.796.162-1.132.108-.338.26-.627.456-.864.196-.241.428-.425.697-.55a2.1 2.1 0 0 1 .911-.194c.266 0 .509.038.729.115.22.077.408.2.566.367.16.167.283.39.366.665.088.276.131.613.131 1.011v3.616h-1.52v-3.62c0-.252-.034-.448-.104-.587a.588.588 0 0 0-.309-.294 1.206 1.206 0 0 0-.493-.089c-.202 0-.379.04-.529.12a1.06 1.06 0 0 0-.367.336c-.094.14-.165.304-.214.492a2.416 2.416 0 0 0-.074.608Z" fill="#fff"/>',
    "product-listen": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.58 2.466a2.165 2.165 0 0 1 1.775.175l6.84 3.94a2.156 2.156 0 0 1 1.08 1.868v7.882c0 .77-.412 1.483-1.08 1.868l-.01.005-6.83 3.936a2.165 2.165 0 0 1-2.16 0l-6.84-3.941a2.156 2.156 0 0 1-1.08-1.868V8.449c0-.77.411-1.482 1.08-1.868l6.84-3.94a2.16 2.16 0 0 1 .385-.175Zm.782 13.732v-1.226H9.03V8.569H7.458v7.629h4.904Zm3.456-1.86a.531.531 0 0 1-.01.618.692.692 0 0 1-.294.22c-.13.053-.292.079-.487.079a1.5 1.5 0 0 1-.508-.084.858.858 0 0 1-.383-.273.837.837 0 0 1-.157-.497h-1.43c0 .307.092.607.277.9.189.29.465.53.828.719.367.188.814.283 1.341.283.364 0 .69-.042.98-.126a2.43 2.43 0 0 0 .755-.362c.21-.157.37-.34.482-.55.111-.21.167-.44.167-.692 0-.37-.094-.668-.283-.895a1.904 1.904 0 0 0-.765-.545 5.796 5.796 0 0 0-1.095-.33 4.04 4.04 0 0 1-.503-.126 1.57 1.57 0 0 1-.325-.157.571.571 0 0 1-.183-.184.52.52 0 0 1-.052-.236c0-.115.031-.22.094-.314a.667.667 0 0 1 .283-.23.986.986 0 0 1 .435-.09c.203 0 .367.035.492.105.13.067.224.16.283.278a.808.808 0 0 1 .095.393h1.509c0-.35-.096-.66-.288-.933-.19-.276-.462-.492-.818-.65-.353-.157-.775-.235-1.268-.235-.353 0-.67.047-.954.141a2.12 2.12 0 0 0-.712.383 1.73 1.73 0 0 0-.445.555c-.102.21-.152.433-.152.67 0 .242.05.457.152.645.1.185.24.346.419.482.181.136.395.253.639.351.248.095.515.173.802.236.317.063.56.133.728.21.171.073.288.153.351.24Z"/>',
    "product-listen-color": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.355 2.64a2.165 2.165 0 0 0-2.16 0l-6.84 3.941a2.156 2.156 0 0 0-1.08 1.868v7.882c0 .77.411 1.483 1.08 1.868l6.84 3.94a2.165 2.165 0 0 0 2.16 0l6.83-3.935.01-.005a2.156 2.156 0 0 0 1.08-1.868V8.449c0-.77-.412-1.482-1.08-1.868l-6.84-3.94Z" fill="#FFBE0A"/><path d="M12.362 14.972v1.226h-3.84v-1.226h3.84ZM9.03 8.569v7.629H7.458v-7.63H9.03Zm6.882 6.062a.49.49 0 0 0-.094-.293c-.063-.088-.18-.168-.351-.241a3.432 3.432 0 0 0-.728-.21 5.673 5.673 0 0 1-.802-.236 2.787 2.787 0 0 1-.64-.35 1.527 1.527 0 0 1-.418-.483 1.341 1.341 0 0 1-.152-.644c0-.238.05-.461.152-.67a1.73 1.73 0 0 1 .445-.556c.196-.165.433-.292.713-.383.282-.094.6-.141.953-.141.493 0 .915.078 1.268.236.356.157.629.373.818.65.192.272.288.583.288.932h-1.51a.808.808 0 0 0-.094-.393.623.623 0 0 0-.283-.278 1.01 1.01 0 0 0-.492-.105.986.986 0 0 0-.435.09.667.667 0 0 0-.283.23.554.554 0 0 0-.094.314.52.52 0 0 0 .052.236c.039.067.1.128.184.184.083.056.192.108.324.157.137.045.304.087.503.126.41.083.774.193 1.095.33.322.132.577.314.765.545.19.227.283.525.283.895 0 .252-.056.483-.167.692-.112.21-.273.393-.482.55a2.43 2.43 0 0 1-.755.362c-.29.084-.616.126-.98.126-.527 0-.974-.095-1.341-.283-.363-.189-.64-.428-.828-.718a1.669 1.669 0 0 1-.277-.901h1.43c.007.206.06.372.157.497a.858.858 0 0 0 .383.273 1.5 1.5 0 0 0 .508.084c.195 0 .358-.027.487-.079a.692.692 0 0 0 .293-.22.531.531 0 0 0 .105-.325Z" fill="#fff"/>',
    "product-measure": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.58 2.466a2.165 2.165 0 0 1 1.775.175l6.84 3.94a2.156 2.156 0 0 1 1.08 1.868v7.882c0 .77-.412 1.483-1.08 1.868l-.01.005-6.83 3.936a2.165 2.165 0 0 1-2.16 0l-6.84-3.941a2.156 2.156 0 0 1-1.08-1.868V8.449c0-.77.411-1.482 1.08-1.868l6.84-3.94a2.16 2.16 0 0 1 .385-.175ZM7.568 8.569H5.519v7.629h1.567v-2.17l-.157-3.543 2.064 5.713h1.069l2.064-5.713-.157 3.544v2.169h1.572v-7.63h-2.054l-1.96 5.602-1.96-5.601Zm8.36 7.524c.35.14.744.21 1.184.21.367 0 .694-.05.98-.147.286-.101.531-.23.734-.388a2.23 2.23 0 0 0 .487-.492l-.734-.797a1.645 1.645 0 0 1-.613.488 1.838 1.838 0 0 1-.76.157c-.22 0-.417-.039-.592-.116a1.268 1.268 0 0 1-.44-.324 1.533 1.533 0 0 1-.277-.498 1.87 1.87 0 0 1-.079-.357h3.62v-.628c0-.416-.053-.793-.162-1.132a2.442 2.442 0 0 0-.482-.88 2.095 2.095 0 0 0-.78-.566 2.7 2.7 0 0 0-1.07-.2 2.75 2.75 0 0 0-1.11.216 2.3 2.3 0 0 0-.839.602 2.773 2.773 0 0 0-.524.928 3.616 3.616 0 0 0-.183 1.178v.21c0 .377.065.734.194 1.069.13.332.314.623.555.875a2.6 2.6 0 0 0 .891.592Zm-.091-3.27a1.993 1.993 0 0 1 .228-.723c.09-.157.207-.279.35-.366a.968.968 0 0 1 .514-.131c.234 0 .426.049.576.146a.89.89 0 0 1 .335.399 1.3 1.3 0 0 1 .116.56v.115h-2.12Z"/>',
    "product-measure-color": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.355 2.64a2.165 2.165 0 0 0-2.16 0l-6.84 3.941a2.156 2.156 0 0 0-1.08 1.868v7.882c0 .77.411 1.483 1.08 1.868l6.84 3.94a2.165 2.165 0 0 0 2.16 0l6.83-3.935.01-.005a2.156 2.156 0 0 0 1.08-1.868V8.449c0-.77-.412-1.482-1.08-1.868l-6.84-3.94Z" fill="#57B7DD"/><path d="M6.237 8.569h1.33l1.96 5.601 1.96-5.601h1.331l-2.756 7.629H8.993l-2.756-7.63Zm-.718 0h1.326l.24 5.46v2.169H5.52v-7.63Zm6.691 0h1.331v7.629H11.97v-2.17l.241-5.46Zm4.902 7.734c-.44 0-.835-.07-1.184-.21a2.6 2.6 0 0 1-.89-.592 2.63 2.63 0 0 1-.556-.875 2.947 2.947 0 0 1-.194-1.069v-.21c0-.43.061-.822.183-1.178.123-.357.297-.666.524-.928a2.3 2.3 0 0 1 .839-.602 2.75 2.75 0 0 1 1.11-.215c.402 0 .759.066 1.07.199.31.133.57.321.78.566.213.244.374.538.482.88.108.339.163.716.163 1.132v.628h-4.507v-1.006h3.024v-.115a1.3 1.3 0 0 0-.116-.56.89.89 0 0 0-.335-.399 1.043 1.043 0 0 0-.576-.146c-.2 0-.37.043-.514.13-.143.088-.26.21-.35.367a1.993 1.993 0 0 0-.2.556c-.042.21-.063.44-.063.691v.21c0 .227.032.437.095.629.066.192.158.358.277.498.123.14.27.248.44.324.175.077.372.116.592.116.273 0 .526-.053.76-.158.238-.108.442-.27.613-.487l.734.797a2.23 2.23 0 0 1-.487.492 2.603 2.603 0 0 1-.734.388 3.025 3.025 0 0 1-.98.147Z" fill="#fff"/>',
    "product-publish": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.58 2.466a2.165 2.165 0 0 1 1.775.175l6.84 3.94a2.156 2.156 0 0 1 1.08 1.868v7.882c0 .77-.412 1.483-1.08 1.868l-.01.005-6.83 3.936a2.165 2.165 0 0 1-2.16 0l-6.84-3.941a2.156 2.156 0 0 1-1.08-1.868V8.449c0-.77.411-1.482 1.08-1.868l6.84-3.94a2.16 2.16 0 0 1 .385-.175Zm3.07 5.684h-1.51v8.048h1.358l.07-.605c.159.211.348.378.569.5.255.14.555.21.901.21.37 0 .692-.07.964-.21.276-.143.507-.342.692-.597a2.67 2.67 0 0 0 .409-.917c.09-.353.136-.74.136-1.163v-.11a4.6 4.6 0 0 0-.137-1.158 2.597 2.597 0 0 0-.408-.912 1.839 1.839 0 0 0-.692-.597 2.088 2.088 0 0 0-.974-.215 1.8 1.8 0 0 0-.891.21 1.778 1.778 0 0 0-.488.398V8.15Zm0 6.365v-2.299a.972.972 0 0 1 .477-.503 1.18 1.18 0 0 1 .523-.105.94.94 0 0 1 .53.136c.14.091.25.215.33.372.08.154.136.334.167.54.035.202.053.419.053.65v.11c0 .244-.016.471-.047.68a1.715 1.715 0 0 1-.168.54.845.845 0 0 1-.325.357c-.14.084-.316.125-.53.125-.272 0-.494-.059-.665-.178a1.09 1.09 0 0 1-.345-.425Zm-6.438-1.037h1.4c.597 0 1.108-.097 1.534-.293.43-.196.758-.473.986-.833.227-.36.34-.786.34-1.279 0-.485-.113-.916-.34-1.294a2.318 2.318 0 0 0-.986-.885c-.426-.217-.937-.325-1.535-.325h-2.97v7.629h1.571v-2.72Zm0-1.226V9.8h1.4c.3 0 .544.06.733.178.188.12.326.276.414.472.087.196.13.407.13.634 0 .223-.043.424-.13.603a.94.94 0 0 1-.414.419c-.189.098-.433.146-.734.146H8.212Z"/>',
    "product-publish-color": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.355 2.64a2.165 2.165 0 0 0-2.16 0l-6.84 3.941a2.156 2.156 0 0 0-1.08 1.868v7.882c0 .77.411 1.483 1.08 1.868l6.84 3.94a2.165 2.165 0 0 0 2.16 0l6.83-3.935.01-.005a2.156 2.156 0 0 0 1.08-1.868V8.449c0-.77-.412-1.482-1.08-1.868l-6.84-3.94Z" fill="#24ADBD"/><path d="M9.611 13.479H7.667v-1.227h1.944c.3 0 .545-.049.734-.146a.94.94 0 0 0 .414-.42c.087-.178.13-.379.13-.602 0-.227-.043-.438-.13-.634a1.059 1.059 0 0 0-.414-.472c-.189-.118-.433-.178-.734-.178H8.212v6.398H6.64v-7.63h2.971c.598 0 1.11.11 1.535.326.43.213.758.508.986.885.227.378.34.809.34 1.294 0 .493-.113.92-.34 1.279-.227.36-.556.637-.986.833-.426.196-.937.293-1.535.293ZM13.14 8.15h1.51v6.748l-.152 1.3H13.14V8.15Zm5.099 5.156v.11c0 .422-.046.81-.137 1.163a2.652 2.652 0 0 1-.408.917 1.962 1.962 0 0 1-.692.597c-.272.14-.594.21-.964.21-.346 0-.646-.07-.901-.21a1.83 1.83 0 0 1-.634-.592 3.368 3.368 0 0 1-.414-.896 6.819 6.819 0 0 1-.236-1.121v-.241c.053-.405.131-.78.236-1.122.105-.342.243-.64.414-.896.171-.255.382-.452.634-.592a1.8 1.8 0 0 1 .89-.21c.374 0 .7.072.975.216.28.14.51.338.692.597.185.255.321.559.409.912.09.349.136.735.136 1.158Zm-1.51.11v-.11c0-.231-.017-.447-.052-.65a1.72 1.72 0 0 0-.167-.54.948.948 0 0 0-.33-.372.936.936 0 0 0-.53-.136c-.206 0-.38.035-.524.105a.972.972 0 0 0-.356.293c-.09.126-.159.276-.204.45-.046.172-.074.36-.084.567v.686c.01.276.056.52.136.734.084.21.21.375.377.497.171.12.393.178.666.178.213 0 .39-.041.529-.125a.845.845 0 0 0 .325-.357 1.73 1.73 0 0 0 .168-.54c.031-.209.047-.436.047-.68Z" fill="#fff"/>',
    "product-reviews": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.306 2.114a2.165 2.165 0 0 1 1.775.175l6.838 3.94A2.156 2.156 0 0 1 21 8.099v7.881c0 .77-.412 1.483-1.08 1.868l-.01.005-6.83 3.936a2.165 2.165 0 0 1-2.16 0l-6.84-3.94A2.156 2.156 0 0 1 3 15.978v-7.88c0-.771.412-1.483 1.08-1.868l6.84-3.941a2.12 2.12 0 0 1 .386-.175ZM9.53 8.217H6.686v7.63h1.571v-2.825h1.249l1.445 2.824h1.681v-.073l-1.65-3.13a2.87 2.87 0 0 0 .576-.344c.252-.196.446-.438.582-.728.14-.294.21-.645.21-1.053 0-.5-.114-.92-.341-1.263a2.09 2.09 0 0 0-.975-.776c-.419-.174-.92-.262-1.503-.262Zm-1.274 3.579H9.54c.276 0 .505-.049.686-.147a.96.96 0 0 0 .41-.408 1.26 1.26 0 0 0 .14-.608 1.38 1.38 0 0 0-.135-.634.919.919 0 0 0-.415-.409c-.185-.094-.417-.141-.696-.141H8.257v2.347Zm6.784 4.05h-.504l-1.912-5.67h1.582l1.063 3.85 1.06-3.85h1.577l-1.913 5.67h-.954Z"/>',
    "product-reviews-color": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.08 2.289a2.165 2.165 0 0 0-2.16 0l-6.84 3.94A2.156 2.156 0 0 0 3 8.099v7.881c0 .77.412 1.483 1.08 1.868l6.84 3.941a2.165 2.165 0 0 0 2.16 0l6.83-3.936.01-.005A2.156 2.156 0 0 0 21 15.98V8.098c0-.771-.412-1.483-1.08-1.868l-6.84-3.941Z" fill="#2F9170"/><path d="M6.686 8.217H9.53c.583 0 1.084.088 1.503.262.423.175.748.433.975.776.227.342.34.763.34 1.262 0 .41-.07.76-.209 1.054-.136.29-.33.532-.582.728-.248.192-.54.346-.875.461l-.497.262H7.713l-.011-1.226h1.84c.275 0 .504-.049.685-.147a.96.96 0 0 0 .41-.408 1.26 1.26 0 0 0 .14-.608 1.38 1.38 0 0 0-.135-.634.92.92 0 0 0-.415-.409c-.185-.094-.417-.141-.696-.141H8.257v6.397H6.686V8.217Zm4.265 7.63-1.74-3.401 1.661-.01 1.76 3.337v.073h-1.681Zm4.121-1.101 1.257-4.57h1.578l-1.913 5.67h-.954l.032-1.1Zm-.865-4.57 1.263 4.575.026 1.095h-.959l-1.912-5.67h1.582Z" fill="#fff"/>',
    "product-vizia": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.306 2.114a2.165 2.165 0 0 1 1.775.175l6.838 3.94A2.156 2.156 0 0 1 21 8.099v7.881c0 .77-.412 1.483-1.08 1.868l-.01.005-6.83 3.936a2.165 2.165 0 0 1-2.16 0l-6.84-3.94A2.156 2.156 0 0 1 3 15.978v-7.88c0-.771.412-1.483 1.08-1.868l6.84-3.941a2.12 2.12 0 0 1 .386-.175Zm-2.21 13.732h-.493l-2.64-7.629h1.739l1.724 5.807 1.729-5.807h1.75l-2.656 7.63H9.095Zm8.617 0v-1.179h-2.811l2.727-3.62v-.87h-4.543v1.184h2.623l-2.707 3.59v.895h4.711Z"/>',
    "product-vizia-color": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.08 2.289a2.165 2.165 0 0 0-2.16 0l-6.84 3.94A2.156 2.156 0 0 0 3 8.099v7.881c0 .77.412 1.483 1.08 1.868l6.84 3.941a2.165 2.165 0 0 0 2.16 0l6.83-3.936.01-.005A2.156 2.156 0 0 0 21 15.98V8.098c0-.771-.412-1.483-1.08-1.868l-6.84-3.941Z" fill="#906BA7"/><path d="m9.358 14.253 1.797-6.036h1.75l-2.656 7.63H9.095l.262-1.594ZM7.702 8.217l1.792 6.036.272 1.593H8.603l-2.64-7.629h1.739Zm10.011 6.45v1.18h-4.307v-1.18h4.307Zm-.084-3.62-3.616 4.8h-1.01v-.897l3.599-4.773h1.027v.87Zm-.535-.87v1.184h-4.008v-1.184h4.008Z" fill="#fff"/>',
    /**
     * External icons
     * e.g. Social, content sources, brands, auth providers, etc
     */
    "external-facebook": '<path d="M22 12.06c0-5.522-4.477-10-10-10s-10 4.478-10 10c0 4.992 3.657 9.13 8.438 9.88v-6.99h-2.54v-2.89h2.54V9.858c0-2.507 1.492-3.891 3.777-3.891 1.093 0 2.238.195 2.238.195v2.461h-1.26c-1.243 0-1.63.771-1.63 1.563v1.875h2.773l-.443 2.89h-2.33v6.988c4.78-.75 8.437-4.887 8.437-9.878Z" />',
    "external-facebook-messenger": '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.7C2 6.126 6.367 2 12 2s10 4.126 10 9.7c0 5.574-4.367 9.7-10 9.7-1.012 0-1.983-.134-2.895-.384a.798.798 0 0 0-.534.039l-1.985.876a.8.8 0 0 1-1.122-.707l-.055-1.78a.799.799 0 0 0-.268-.57C3.195 17.135 2 14.616 2 11.7Zm6.933-1.824-2.938 4.66c-.282.448.268.952.689.632l3.155-2.394a.6.6 0 0 1 .723-.002l2.337 1.752a1.5 1.5 0 0 0 2.169-.4l2.937-4.66c.282-.448-.268-.952-.69-.632l-3.154 2.394a.6.6 0 0 1-.723.002L11.1 9.476a1.5 1.5 0 0 0-2.168.4Z" />',
    "external-google": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.033 7.457a5.434 5.434 0 0 0-3.836-1.5c-2.609 0-4.824 1.76-5.614 4.13a5.99 5.99 0 0 0 0 3.83h.004c.793 2.366 3.005 4.126 5.614 4.126 1.347 0 2.503-.345 3.399-.953v-.003a4.628 4.628 0 0 0 1.999-3.038h-5.402v-3.85h9.432c.118.668.173 1.351.173 2.03 0 3.042-1.087 5.614-2.978 7.355l.002.002C17.169 21.114 14.894 22 12.197 22c-3.78 0-7.238-2.131-8.936-5.508a10.008 10.008 0 0 1 0-8.98 9.998 9.998 0 0 1 8.936-5.511 9.61 9.61 0 0 1 6.691 2.601l-2.855 2.855Z" />',
    "external-instagram": '<path d="M12.006 3.801c2.672 0 2.989.012 4.04.059.977.043 1.504.207 1.855.344a3.1 3.1 0 0 1 1.15.746c.35.351.566.684.745 1.148.137.352.301.883.344 1.856.047 1.055.059 1.372.059 4.04 0 2.672-.012 2.989-.059 4.04-.043.977-.207 1.504-.344 1.856-.18.465-.398.8-.746 1.148a3.076 3.076 0 0 1-1.149.747c-.351.137-.882.3-1.855.343-1.055.047-1.372.06-4.04.06-2.673 0-2.989-.013-4.04-.06-.977-.042-1.504-.206-1.856-.343-.465-.18-.8-.399-1.148-.747a3.076 3.076 0 0 1-.747-1.148c-.136-.352-.3-.883-.344-1.856-.046-1.055-.058-1.371-.058-4.04 0-2.672.012-2.989.058-4.04.043-.976.208-1.504.344-1.856.18-.464.399-.8.747-1.148a3.076 3.076 0 0 1 1.148-.746c.352-.137.883-.301 1.856-.344 1.051-.047 1.367-.059 4.04-.059Zm0-1.801c-2.716 0-3.055.012-4.122.059-1.063.046-1.793.218-2.426.465A4.882 4.882 0 0 0 3.684 3.68a4.9 4.9 0 0 0-1.157 1.77c-.246.637-.418 1.363-.464 2.426-.047 1.07-.06 1.41-.06 4.126 0 2.715.013 3.055.06 4.122.046 1.063.218 1.793.464 2.426.258.66.598 1.22 1.157 1.774a4.89 4.89 0 0 0 1.77 1.152c.637.247 1.363.419 2.426.465 1.067.047 1.407.059 4.122.059s3.055-.012 4.122-.059c1.063-.046 1.793-.218 2.426-.464a4.89 4.89 0 0 0 1.77-1.153 4.89 4.89 0 0 0 1.153-1.77c.246-.637.418-1.363.465-2.426.046-1.067.058-1.407.058-4.122 0-2.716-.012-3.055-.058-4.122-.047-1.063-.22-1.793-.465-2.426a4.686 4.686 0 0 0-1.145-1.778 4.889 4.889 0 0 0-1.77-1.153c-.637-.246-1.364-.418-2.426-.464-1.07-.051-1.41-.063-4.126-.063Z" /><path d="M12.006 6.864a5.139 5.139 0 0 0-5.138 5.138 5.139 5.139 0 0 0 5.138 5.138 5.139 5.139 0 0 0 0-10.275Zm0 8.47a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.667Zm6.54-8.673a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />',
    "external-intercom": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.318 3.593C3 4.216 3 5.033 3 6.667v8.791c0 1.634 0 2.45.318 3.074.28.55.726.995 1.275 1.275.623.318 1.44.318 3.074.318h7.5c.358 0 .537 0 .713.021.156.02.31.051.462.095.17.05.335.12.663.261L20.5 22V6.667c0-1.634 0-2.45-.318-3.074a2.916 2.916 0 0 0-1.274-1.275C18.284 2 17.466 2 15.832 2H7.667c-1.634 0-2.45 0-3.074.318-.55.28-.995.726-1.275 1.275ZM5.689 15.26c.025.023.08.076.112.103.07.061.17.145.3.242.261.196.645.451 1.15.704 1.015.507 2.516 1.003 4.499 1.003 1.983 0 3.484-.496 4.498-1.003.506-.253.89-.508 1.15-.704.13-.097.23-.18.3-.242l.119-.109a.625.625 0 0 0-.884-.884l-.058.053a3.968 3.968 0 0 1-.227.182 6.24 6.24 0 0 1-.959.586c-.86.43-2.172.871-3.94.871-1.766 0-3.077-.44-3.938-.871a6.296 6.296 0 0 1-.96-.586 3.947 3.947 0 0 1-.227-.182l-.059-.054a.626.626 0 0 0-.882.885l.006.006Z" />',
    "external-linkedin": '<path d="M20.52 2H3.477C2.66 2 2 2.645 2 3.441v17.114C2 21.352 2.66 22 3.477 22H20.52c.816 0 1.48-.648 1.48-1.441V3.44C22 2.645 21.336 2 20.52 2ZM7.934 19.043h-2.97V9.496h2.97v9.547ZM6.449 8.195a1.72 1.72 0 1 1-.006-3.439 1.72 1.72 0 0 1 .006 3.44Zm12.594 10.848h-2.965v-4.64c0-1.106-.02-2.532-1.543-2.532-1.543 0-1.777 1.207-1.777 2.453v4.719H9.797V9.496h2.844v1.305h.039c.394-.75 1.363-1.543 2.804-1.543 3.004 0 3.559 1.976 3.559 4.547v5.238Z" />',
    "external-reddit": '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-4.795-1.462c.807 0 1.462.655 1.462 1.462 0 .597-.363 1.111-.842 1.345.023.14.035.28.035.433 0 2.245-2.608 4.058-5.837 4.058-3.228 0-5.836-1.813-5.836-4.058 0-.152.012-.304.035-.445a1.463 1.463 0 0 1 .596-2.795c.387 0 .75.164 1.007.41 1.005-.738 2.397-1.194 3.953-1.24l.737-3.486a.285.285 0 0 1 .117-.164.291.291 0 0 1 .198-.035l2.421.515c.164-.35.515-.585.924-.585.573 0 1.041.468 1.041 1.041s-.468 1.041-1.04 1.041a1.042 1.042 0 0 1-1.041-.994l-2.164-.456-.667 3.123c1.52.058 2.9.526 3.895 1.24a1.4 1.4 0 0 1 1.006-.41ZM9.708 12c-.573 0-1.041.468-1.041 1.04 0 .574.468 1.042 1.04 1.042.574 0 1.041-.468 1.041-1.041S10.281 12 9.709 12Zm2.304 4.55c.397 0 1.754-.047 2.467-.76a.3.3 0 0 0 .024-.386.275.275 0 0 0-.386 0c-.456.444-1.404.608-2.094.608s-1.649-.164-2.093-.609a.275.275 0 0 0-.386 0 .275.275 0 0 0 0 .386c.702.702 2.07.76 2.468.76Zm1.24-3.51c0 .574.467 1.042 1.04 1.042.574 0 1.041-.468 1.041-1.041S14.866 12 14.293 12c-.574 0-1.041.468-1.041 1.04Z" />',
    "external-tumblr": '<path d="M14.333 22c-3 0-5.25-1.542-5.25-5.25v-5.917h-2.75V7.625c3-.792 4.25-3.375 4.417-5.625h3.125v5.083H17.5v3.75h-3.625V16c0 1.542.792 2.083 2.042 2.083h1.75V22h-3.334Z" />',
    "external-twitter": '<path d="M13.647 10.469 20.932 2h-1.726L12.88 9.353 7.827 2H2l7.64 11.12L2 22h1.726l6.68-7.765L15.743 22h5.828l-7.924-11.531Zm-2.365 2.748-.774-1.107-6.16-8.81H7l4.971 7.11.774 1.107 6.462 9.242h-2.652l-5.273-7.541Z" />',
    "external-whatsapp": '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.053 4.906A9.846 9.846 0 0 0 12.042 2c-5.465 0-9.908 4.446-9.91 9.91a9.892 9.892 0 0 0 1.322 4.954L2.048 22l5.254-1.378a9.903 9.903 0 0 0 4.735 1.206h.004c5.463 0 9.909-4.446 9.91-9.91a9.851 9.851 0 0 0-2.898-7.012Zm-7.011 15.248h-.005a8.225 8.225 0 0 1-4.192-1.148l-.301-.178-3.118.817.832-3.041-.196-.312a8.22 8.22 0 0 1-1.258-4.38c0-4.542 3.697-8.237 8.241-8.237a8.239 8.239 0 0 1 8.234 8.242c-.002 4.542-3.697 8.237-8.237 8.237Zm4.518-6.169c-.247-.124-1.465-.723-1.692-.808-.227-.084-.392-.123-.557.124-.165.248-.64.808-.784.971-.144.163-.289.187-.536.063-.248-.125-1.046-.386-1.992-1.23-.736-.656-1.233-1.467-1.378-1.715-.145-.248-.015-.38.109-.506.11-.11.247-.289.37-.433.124-.145.166-.248.248-.413.083-.165.042-.31-.02-.434s-.557-1.343-.764-1.84c-.2-.482-.405-.416-.557-.424a9.946 9.946 0 0 0-.475-.01.91.91 0 0 0-.66.311c-.227.248-.867.847-.867 2.066 0 1.219.888 2.396 1.011 2.562.124.165 1.746 2.666 4.23 3.739.46.199.932.373 1.411.522.594.19 1.134.162 1.56.098.475-.07 1.465-.599 1.672-1.177.206-.578.206-1.074.142-1.178-.063-.103-.223-.164-.47-.288Z" />',
    "external-youtube": '<path d="M21.8 8.002s-.195-1.379-.796-1.984C20.242 5.22 19.39 5.217 19 5.17c-2.797-.203-6.996-.203-6.996-.203h-.008s-4.2 0-6.996.203c-.39.047-1.242.05-2.004.848-.601.605-.793 1.984-.793 1.984S2 9.623 2 11.24v1.516c0 1.617.2 3.238.2 3.238s.195 1.379.792 1.985c.762.796 1.762.769 2.207.855 1.602.152 6.801.2 6.801.2s4.203-.009 7-.208c.39-.047 1.242-.05 2.004-.848.601-.605.797-1.984.797-1.984S22 14.377 22 12.756V11.24c0-1.617-.2-3.238-.2-3.238ZM9.935 14.596V8.975l5.402 2.82-5.402 2.8Z" />'
};
const NAMES = Object.keys(ICON_MAP);
const DEFAULTS$5 = {
    size: "small",
    name: "apps"
};

const getSize$3 = createScaleNormalizer(SIZES$3, DEFAULTS$5.size);
const getName = createNormalizer(NAMES, DEFAULTS$5.name);

const styles$p = i$9 `
  :host {
    display: inline-flex;
    vertical-align: top;
  }

  :host > * {
    color: inherit;
  }
  /**
   * Block
   */

  .icon {
    display: block;
    /**
     * Experimental, until Safari/Firefox releases lh unit support.
     * Once it has evergreen support, we can remove setting a default size.
     */
    block-size: 1lh;
    line-height: inherit;
    color: inherit;
    shape-rendering: geometricprecision;
    /**
     * No need for pointer events, and stops SVG from interfering with events
     */
    pointer-events: none;
  }

  .icon path:not([fill]) {
    fill: currentColor;
  }

  /**
   * Modifier: size-x-small
   */

  .icon--size-x-small {
    block-size: calc(var(--bds--dimension--space) * 4);
  }

  /**
   * Modifier: size-small
   */

  .icon--size-small {
    block-size: calc(var(--bds--dimension--space) * 5);
  }

  /**
   * Modifier: size-medium
   */

  .icon--size-medium {
    block-size: calc(var(--bds--dimension--space) * 6);
  }

  /**
   * Modifier: size-large
   */

  .icon--size-large {
    block-size: calc(var(--bds--dimension--space) * 7);
  }

  /**
   * Modifier: size-x-large
   */

  .icon--size-x-large {
    block-size: calc(var(--bds--dimension--space) * 8);
  }
`;

var __decorate$m = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const bem$d = createBem("icon");
class Icon extends BaseMixin(s$8) {
    static { this.tagName = "bds-icon"; }
    static { this.styles = [super.styles, styles$p]; }
    static get scopedElements() {
        return {
            ...super.scopedElements,
            "bds-progress-circle": ProgressCircle
        };
    }
    render() {
        const { name, size } = this;
        // Todo: better support for special icons
        if (name === "progress-circle") {
            return x ` <bds-progress-circle size=${size} variant="content">
      </bds-progress-circle>`;
        }
        return x `
      <svg
        role="presentation"
        class=${bem$d({
            [`size-${size}`]: true
        })}
        viewBox="0 0 24 24"
      >
        ${o$3(ICON_MAP[name])}
      </svg>
    `;
    }
}
__decorate$m([
    n$6({ type: String }),
    transform(getName)
], Icon.prototype, "name", void 0);
__decorate$m([
    n$6({ type: String }),
    transform(getSize$3)
], Icon.prototype, "size", void 0);

const styles$o = i$9 `
  :host {
    display: inline-flex;
    vertical-align: top;
    max-inline-size: 100%;
    min-inline-size: 0;
  }

  /**
   * Block
   */

  .button {
    display: block;
    position: relative;
    z-index: 0;
    inline-size: 100%;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
    transition-property: color;
    transition-duration: 80ms;
    transition-timing-function: ease-in-out;
  }

  .button:not(.button--disabled),
  .button:not(.button--disabled):is(:hover, :active, :focus-visible) {
    color: var(--bds--color--content--neutral--high);
  }

  .button:not(.button--disabled):is(:hover, :active, :focus-visible)
    .button__label {
    text-decoration: underline;
  }

  slot {
    pointer-events: none;
  }

  /**
   * Element: hit-area
   *
   * Represents background fill / hit-area / focus ring
   * We detach this from the box model so that we can 'expand' the hit area outside
   * of the actual layout. This means we get both alignment, and 'ghost padding'.
   */

  .button__hit-area {
    position: absolute;
    z-index: 0;
    inset: 0;
    border-radius: var(--bds--border--corner--medium);
    transition-property: background-color;
    transition-duration: inherit;
    transition-timing-function: inherit;
  }

  .button:not(.button--disabled):focus-visible .button__hit-area {
    outline-width: var(--bds--border--stroke--extra-light);
    outline-color: var(--bds--color--background--inverse--noon);
    outline-style: solid;
  }

  /**
   * Element: body
   */

  .button__body {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-inline-size: 100%;
    gap: calc(var(--bds--dimension--space) * 2);
    overflow: hidden;
  }

  /**
   * Element: label
   */

  .button__label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /**
   * Element: icon
   */

  .button__icon--end {
    margin-inline-start: auto;
  }

  /**
   * Element: indicator
   */

  .button__indicator {
    position: absolute;
    z-index: 1;
    inset-block-start: 0;
    inset-inline-start: 50%;
    pointer-events: none;
  }

  /**
   * Modifier: icon
   */
  .button--icon .button__body {
    justify-content: center;
  }

  /**
   * Modifier: solid
   */

  .button--solid:not(.button--disabled):not(.button--context-open):is(
      :hover,
      :focus-visible
    )
    .button__hit-area {
    background-color: var(--bds--color--background--neutral--tone--strong);
  }

  .button--solid:not(.button--disabled):not(.button--context-open):active
    .button__hit-area {
    background-color: var(--bds--color--background--neutral--tone--stronger);
  }

  .button--solid .button__hit-area {
    background-color: var(--bds--color--background--neutral--tone);
  }

  .button--solid .button__hit-area {
    outline-offset: var(--bds--border--stroke--extra-light);
  }

  /**
   * Modifier: subtle
   */
  .button--subtle:not(.button--disabled):not(.button--context-open):is(
      :hover,
      :focus-visible
    )
    .button__hit-area {
    background-color: var(--bds--color--background--neutral--tone);
  }

  .button--subtle:not(.button--disabled):not(.button--context-open):active
    .button__hit-area {
    background-color: var(--bds--color--background--neutral--tone--strong);
  }

  /**
   * Modifier: context-open
   */
  .button--context-open:not(.button--disabled),
  .button--context-open:not(.button--disabled):is(
      :hover,
      :active,
      :visited,
      :focus-visible
    ) {
    color: var(--bds--color--content--accent--low);
  }

  .button--context-open:not(.button--disabled) .button__hit-area {
    background-color: var(--bds--color--background--accent--tone);
  }

  /**
   * Modifier: disabled
   */

  .button--disabled {
    cursor: not-allowed;
  }

  .button--disabled,
  .button--disabled:is(:hover, :active, :visited, :focus-visible) {
    color: var(--bds--color--content--disabled);
  }

  .button--disabled.button--solid .button__hit-area {
    background-color: var(--bds--color--background--disabled);
  }

  /**
   * Modifier: size-x-small
   */

  .button--size-x-small .button__body {
    padding-block: calc(var(--bds--dimension--space) * 1);
  }

  .button--size-x-small.button--solid .button__body {
    padding-inline: calc(var(--bds--dimension--space) * 2);
  }

  .button--size-x-small.button--subtle .button__hit-area {
    inset-inline: calc(calc(var(--bds--dimension--space) * -2));
  }

  .button--size-x-small.button--subtle.button--icon .button__hit-area {
    inset-inline: calc(var(--bds--dimension--space) * -1);
  }

  .button--size-x-small.button--solid.button--icon .button__body {
    padding: calc(var(--bds--dimension--space) * 1);
  }

  .button--size-x-small .button__indicator {
    padding-block-start: calc(var(--bds--dimension--space) * 1);
    padding-inline-start: calc(var(--bds--dimension--space) * 0);
  }

  /**
   * Modifier: size-small
   */

  .button--size-small .button__body {
    padding-block: calc(var(--bds--dimension--space) * 1.5);
  }

  .button--size-small.button--solid .button__body {
    padding-inline: calc(var(--bds--dimension--space) * 3);
  }

  .button--size-small.button--subtle .button__hit-area {
    inset-inline: calc(var(--bds--dimension--space) * -2);
  }

  .button--size-small.button--subtle.button--icon .button__hit-area {
    inset-inline: calc(var(--bds--dimension--space) * -1.5);
  }

  .button--size-small.button--solid.button--icon .button__body {
    padding: calc(var(--bds--dimension--space) * 1.5);
  }

  .button--size-small .button__indicator {
    padding-block-start: calc(var(--bds--dimension--space) * 1.5);
    padding-inline-start: calc(var(--bds--dimension--space) * 0.5);
  }

  /**
   * Modifier: size-medium
   */

  .button--size-medium .button__body {
    padding-block: calc(var(--bds--dimension--space) * 2);
  }

  .button--size-medium.button--solid .button__body {
    padding-inline: calc(var(--bds--dimension--space) * 4);
  }

  .button--size-medium.button--subtle .button__hit-area {
    inset-inline: calc(var(--bds--dimension--space) * -2);
  }

  .button--size-medium.button--subtle.button--icon .button__hit-area {
    inset-inline: calc(var(--bds--dimension--space) * -2);
  }

  .button--size-medium.button--solid.button--icon .button__body {
    padding: calc(var(--bds--dimension--space) * 2);
  }

  .button--size-medium .button__indicator {
    padding-block-start: calc(var(--bds--dimension--space) * 2);
    padding-inline-start: calc(var(--bds--dimension--space) * 1);
  }

  /**
   * Modifier: color-accent
   */

  .button--color-accent.button--solid:not(.button--disabled) {
    color: var(--bds--color--content--neutral);
  }

  .button--color-accent.button--solid:not(.button--disabled) .button__hit-area {
    background-color: var(--bds--color--background--accent--noon);
  }

  .button--color-accent.button--solid:not(.button--disabled):not(
      .button--context-open
    ):is(:hover, :focus-visible)
    .button__hit-area {
    background-color: var(--bds--color--background--accent--afternoon);
  }

  .button--color-accent.button--solid:not(.button--disabled):not(
      .button--context-open
    ):active
    .button__hit-area {
    background-color: var(--bds--color--background--accent--evening);
  }

  .button--color-accent.button--subtle:not(.button--disabled) {
    color: var(--bds--color--content--accent--low);
  }

  .button--color-accent.button--subtle:not(.button--disabled):not(
      .button--context-open
    ):is(:hover, :focus-visible)
    .button__hit-area {
    background-color: var(--bds--color--background--accent--tone);
  }

  .button--color-accent.button--subtle:not(.button--disabled):not(
      .button--context-open
    ):active
    .button__hit-area {
    background-color: var(--bds--color--background--accent--tone--strong);
  }

  /**
   * Modifier: color-neutral
   */

  .button--color-neutral.button--solid:not(.button--disabled) {
    color: var(--bds--color--content--neutral);
  }

  .button--color-neutral.button--solid:not(.button--disabled)
    .button__hit-area {
    background-color: var(--bds--color--background--neutral--noon);
  }

  .button--color-neutral.button--solid:not(.button--disabled):not(
      .button--context-open
    ):is(:hover, :focus-visible)
    .button__hit-area {
    background-color: var(--bds--color--background--neutral--afternoon);
  }

  .button--color-neutral.button--solid:not(.button--disabled):not(
      .button--context-open
    ):active
    .button__hit-area {
    background-color: var(--bds--color--background--neutral--evening);
  }

  /**
   * Modifier: color-inverse
   */

  .button--color-inverse.button--solid:not(.button--disabled) {
    color: var(--bds--color--content--neutral);
  }

  .button--color-inverse.button--solid:not(.button--disabled)
    .button__hit-area {
    background-color: var(--bds--color--background--inverse--noon);
  }

  .button--color-inverse.button--solid:not(.button--disabled):not(
      .button--context-open
    ):is(:hover, :focus-visible)
    .button__hit-area {
    background-color: var(--bds--color--background--inverse--afternoon);
  }

  .button--color-inverse.button--solid:not(.button--disabled):not(
      .button--context-open
    ):active
    .button__hit-area {
    background-color: var(--bds--color--background--inverse--evening);
  }

  /**
   * Modifier: color-negative
   */

  .button--color-negative.button--solid:not(.button--disabled) {
    color: var(--bds--color--content--neutral);
  }

  .button--color-negative.button--solid:not(.button--disabled)
    .button__hit-area {
    background-color: var(--bds--color--background--negative--noon);
  }

  .button--color-negative.button--solid:not(.button--disabled):not(
      .button--context-open
    ):is(:hover, :focus-visible)
    .button__hit-area {
    background-color: var(--bds--color--background--negative--afternoon);
  }

  .button--color-negative.button--solid:not(.button--disabled):not(
      .button--context-open
    ):active
    .button__hit-area {
    background-color: var(--bds--color--background--negative--evening);
  }

  .button--color-negative.button--subtle:not(.button--disabled) {
    color: var(--bds--color--content--negative--low);
  }

  .button--color-negative.button--subtle:not(.button--disabled):not(
      .button--context-open
    ):is(:hover, :focus-visible)
    .button__hit-area,
  .button--color-negative.button--subtle.button--context-open:not(
      .button--disabled
    )
    .button__hit-area {
    background-color: var(--bds--color--background--negative--tone);
  }

  .button--color-negative.button--subtle:not(.button--disabled):not(
      .button--context-open
    ):active
    .button__hit-area {
    background-color: var(--bds--color--background--negative--tone--strong);
  }

  /**
   * Modifier: color-guidance
   */

  .button--color-guidance.button--solid:not(.button--disabled) {
    color: var(--bds--color--content--neutral);
  }

  .button--color-guidance.button--solid:not(.button--disabled)
    .button__hit-area {
    background-color: var(--bds--color--background--guidance--noon);
  }

  .button--color-guidance.button--solid:not(.button--disabled):not(
      .button--context-open
    ):is(:hover, :focus-visible)
    .button__hit-area {
    background-color: var(--bds--color--background--guidance--afternoon);
  }

  .button--color-guidance.button--solid:not(.button--disabled):not(
      .button--context-open
    ):active
    .button__hit-area {
    background-color: var(--bds--color--background--guidance--evening);
  }

  .button--color-guidance.button--subtle:not(.button--disabled) {
    color: var(--bds--color--content--guidance--low);
  }

  .button--color-guidance.button--subtle:not(.button--disabled):not(
      .button--context-open
    ):is(:hover, :focus-visible)
    .button__hit-area,
  .button--color-guidance.button--subtle.button--context-open:not(
      .button--disabled
    )
    .button__hit-area {
    background-color: var(--bds--color--background--guidance--tone);
  }

  .button--color-guidance.button--subtle:not(.button--disabled):not(
      .button--context-open
    ):active
    .button__hit-area {
    background-color: var(--bds--color--background--guidance--tone--strong);
  }

  .button--compound .button__hit-area {
    border-radius: 0;
  }

  .button--compound-top-left .button__hit-area {
    border-top-left-radius: var(--bds--border--corner--medium);
  }

  .button--compound-top-right .button__hit-area {
    border-top-right-radius: var(--bds--border--corner--medium);
  }

  .button--compound-bottom-right .button__hit-area {
    border-bottom-right-radius: var(--bds--border--corner--medium);
  }

  .button--compound-bottom-left .button__hit-area {
    border-bottom-left-radius: var(--bds--border--corner--medium);
  }
`;

var __decorate$l = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const bem$c = createBem("button");
const ButtonMixin = (SuperClass) => {
    class ButtonMixin extends ContextOpenMixin(SuperClass) {
        static { this.styles = [SuperClass.styles ?? [], styles$o]; }
        static { this.shadowRootOptions = {
            ...s$8.shadowRootOptions,
            delegatesFocus: true
        }; }
        static get scopedElements() {
            return {
                "bds-icon": Icon
            };
        }
        static { this.formAssociated = true; }
        constructor() {
            super();
            this.internals = this.attachInternals?.();
            createCompoundLayoutConsumerController(this, (compoundLayoutInfo) => {
                this.compoundLayoutInfo = compoundLayoutInfo;
            });
        }
        /**
         * Dispatches relevant form events.
         * This will only happen if the original event was not cancelled.
         */
        async dispatchFormEvents(originalEvent) {
            if (this.blockElement instanceof HTMLButtonElement &&
                this.internals?.form &&
                (this.type === "submit" || this.type === "reset")) {
                const bubbleHandler = (bubbledEvent) => {
                    if (bubbledEvent === originalEvent &&
                        !originalEvent.defaultPrevented) {
                        if (this.type === "submit") {
                            this.internals?.form?.dispatchEvent(new SubmitEvent("submit", {
                                cancelable: true,
                                submitter: this
                            }));
                        }
                        else if (this.type === "reset") {
                            this.internals?.form?.reset();
                        }
                    }
                };
                // Catch the original event whilst it is bubbling
                this.internals.form.addEventListener(originalEvent.type, bubbleHandler, { once: true });
                // Microtask to remove the handler, to prevent memory leaks
                await Promise.resolve();
                this.internals?.form?.removeEventListener(originalEvent.type, bubbleHandler);
            }
        }
        /**
         * Catch events before consumers, so we can prevent a click from being
         * dispatched when it's disabled
         */
        onClick(event) {
            if (this.disabled) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            this.dispatchFormEvents(event);
        }
        /**
         * Renders body content into the button
         */
        renderContent() {
            return x `
        <div class=${bem$c("label")}>
          <slot>—</slot>
        </div>
      `;
        }
        /**
         * Renders floating indicator into the button
         */
        renderIndicator() {
            return null;
        }
        onHitAreaNode(node) {
            this.hitAreaElement = node;
        }
        /**
         * Renders button
         */
        renderBlock({ hasInternalTooltip, modifiers = {}, props = {} } = {}) {
            const { variant, size, disabled, href, rel, target, download, contextOpen } = this;
            const { assistLabel } = props;
            const color = variant.replace("-subtle", "");
            const subtle = this.compoundLayoutInfo?.isCompound
                ? false
                : variant.endsWith("subtle");
            const solid = !subtle;
            const classes = concatClasses(bem$c({
                [`color-${color}`]: true,
                [`size-${size}`]: true,
                solid,
                subtle,
                compound: this.compoundLayoutInfo?.isCompound,
                compoundTopLeft: this.compoundLayoutInfo?.isCompound &&
                    this.compoundLayoutInfo?.isTopLeft,
                compoundTopRight: this.compoundLayoutInfo?.isCompound &&
                    this.compoundLayoutInfo?.isTopRight,
                compoundBottomLeft: this.compoundLayoutInfo?.isCompound &&
                    this.compoundLayoutInfo?.isBottomLeft,
                compoundBottomRight: this.compoundLayoutInfo?.isCompound &&
                    this.compoundLayoutInfo?.isBottomRight,
                disabled,
                contextOpen,
                ...modifiers
            }), typeLabel({ size }));
            const body = x `
        <div class=${bem$c("body")}>${this.renderContent()}</div>
        <div class=${bem$c("hit-area")} ${n$3(this.onHitAreaNode)}></div>
        ${this.renderIndicator()}
      `;
            if (href) {
                return x `
          <a
            slot=${hasInternalTooltip ? "target" : A$1}
            class=${classes}
            href=${href}
            rel=${rel || A$1}
            target=${target || A$1}
            download=${download !== undefined ? download : A$1}
            aria-label=${assistLabel || A$1}
            aria-disabled=${disabled ? "true" : A$1}
            tabindex=${disabled ? -1 : A$1}
            @click=${this.onClick}
          >
            ${body}
          </a>
        `;
            }
            // Do not apply disabled attribute directly to button element, because we cannot catch events
            return x `
        <button
          slot=${hasInternalTooltip ? "target" : A$1}
          class=${classes}
          aria-label=${assistLabel || A$1}
          aria-disabled=${disabled ? "true" : A$1}
          tabindex=${disabled ? -1 : A$1}
          @click=${this.onClick}
        >
          ${body}
        </button>
      `;
        }
    }
    __decorate$l([
        n$6({ type: String }),
        transform(getVariant$3)
    ], ButtonMixin.prototype, "variant", void 0);
    __decorate$l([
        n$6({ type: String }),
        transform(getSize$5)
    ], ButtonMixin.prototype, "size", void 0);
    __decorate$l([
        n$6({ type: Boolean })
    ], ButtonMixin.prototype, "disabled", void 0);
    __decorate$l([
        n$6({ type: String }),
        transform(getButtonType)
    ], ButtonMixin.prototype, "type", void 0);
    __decorate$l([
        n$6({ type: String })
    ], ButtonMixin.prototype, "href", void 0);
    __decorate$l([
        n$6({ type: String })
    ], ButtonMixin.prototype, "rel", void 0);
    __decorate$l([
        n$6({ type: String })
    ], ButtonMixin.prototype, "target", void 0);
    __decorate$l([
        n$6({ type: String })
    ], ButtonMixin.prototype, "download", void 0);
    __decorate$l([
        t$2()
    ], ButtonMixin.prototype, "compoundLayoutInfo", void 0);
    __decorate$l([
        i$2(".button")
    ], ButtonMixin.prototype, "blockElement", void 0);
    __decorate$l([
        inherit({ context: hasTooltipTargetAncestorContext, consume: true })
    ], ButtonMixin.prototype, "hasTooltipTargetAncestorContext", void 0);
    return ButtonMixin;
};

var __decorate$k = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Button extends ButtonMixin(BaseMixin(s$8)) {
    static { this.tagName = "bds-button"; }
    renderContent() {
        const { size, iconStart, iconEnd, href, target } = this;
        return x `
      ${iconStart &&
            x `
        <bds-icon
          class=${bem$c("icon", { start: true })}
          .name=${iconStart}
          .size=${size}
        ></bds-icon>
      `}
      ${super.renderContent()}
      ${href && target === "_blank"
            ? x `
            <bds-icon
              class=${bem$c("icon", { inline: true })}
              .name=${"open-in-new"}
              .size=${getSize$5(size, -1)}
            ></bds-icon>
          `
            : A$1}
      ${iconEnd &&
            x `
        <bds-icon
          class=${bem$c("icon", { end: true })}
          .name=${iconEnd}
          .size=${size}
        ></bds-icon>
      `}
    `;
    }
    render() {
        return this.renderBlock();
    }
}
__decorate$k([
    n$6({ type: String, attribute: "icon-start" })
], Button.prototype, "iconStart", void 0);
__decorate$k([
    n$6({ type: String, attribute: "icon-end" })
], Button.prototype, "iconEnd", void 0);

const styles$n = i$9 `
  :host {
    display: contents;
  }
`;

const PLACEMENT = [
    "top",
    "top-start",
    "top-end",
    "left",
    "left-start",
    "left-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end"
];
const TRIGGER = ["click", "hover", "none"];
const TYPE = ["active", "passive"];
const DEFAULTS$4 = {
    placement: "top",
    trigger: "click",
    open: false,
    type: "active",
    overlayTarget: false,
    matchTargetSize: false
};

var __decorate$j = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * **NB:** `PopoverTarget` is only for internal use within the `PopoverMixin`.
 *
 * It exists so that the element can have its own controller lifecycle.
 * E.g. to manage context providers and consumers.
 */
class PopoverTarget extends BaseMixin(s$8) {
    static { this.tagName = "bds-popover-target"; }
    static { this.styles = [super.styles, styles$n]; }
    constructor() {
        super();
        this.trigger = DEFAULTS$4.trigger;
        /**
         * Provides a context to any descendants that need to know
         * whether they are contained in a popover target.
         */
        const hasTooltipTargetAncestorContextProvider = new i$4(this, {
            context: hasTooltipTargetAncestorContext,
            initialValue: false
        });
        createEffectController(this, () => {
            hasTooltipTargetAncestorContextProvider.setValue(this.trigger === "hover");
        }, ["trigger"]);
    }
    render() {
        return x `<slot></slot>`;
    }
}
__decorate$j([
    n$6({ attribute: false }),
    inherit({ context: contextOpenContext, consume: true, provide: true })
], PopoverTarget.prototype, "contextOpen", void 0);
__decorate$j([
    n$6({ type: String })
], PopoverTarget.prototype, "trigger", void 0);

const styles$m = i$9 `
  :host {
    display: contents;
  }
`;

/**
 * **NB:** `PopoverContent` is only for internal use within the `PopoverMixin`.
 *
 * It exists so that the element can have its own controller lifecycle.
 * E.g. to manage context providers and consumers.
 *
 * It extends the ContextResetMixin, so that it can reset common contexts as it
 * is in its own UI context.
 */
class PopoverContent extends ContextResetMixin({
    exclude: [hasPopoverAncestorContext]
})(BaseMixin(s$8)) {
    static { this.tagName = "bds-popover-content"; }
    static { this.styles = [super.styles, styles$m]; }
    constructor() {
        super();
        /**
         * Provides a context to any descendants that need to know
         * whether they are contained in a popover.
         */
        new i$4(this, {
            context: hasPopoverAncestorContext,
            initialValue: true
        });
    }
    render() {
        return x `<slot></slot>`;
    }
}

const DEFAULT_PROPS = {
    open: false,
    type: "active",
    trigger: "click"
};
/**
 * Dismiss controller
 */
const createDismissController = (host, props, hideFn) => {
    let nodeRef;
    let state = { ...DEFAULT_PROPS, ...props };
    const cleanupStack = createCleanupStack();
    const onOutsideClick = (event) => {
        const { trigger } = state;
        const isInsideClick = event
            .composedPath()
            .some((target) => target === nodeRef);
        if (isInsideClick) {
            event.stopPropagation();
        }
        else if (trigger === "click") {
            hideFn?.();
        }
    };
    const onKeydown = (event) => {
        const { open } = state;
        if (open && event.key === "Escape") {
            event.stopPropagation();
            event.preventDefault();
            hideFn?.();
        }
    };
    const toggleDismissListeners = () => {
        const { open } = state;
        cleanupStack.clean();
        if (open && nodeRef) {
            document.addEventListener("mousedown", onOutsideClick);
            nodeRef.addEventListener("keydown", onKeydown);
            cleanupStack.add(() => {
                document.removeEventListener("mousedown", onOutsideClick);
                nodeRef?.removeEventListener("keydown", onKeydown);
            });
        }
    };
    host.addController({
        hostDisconnected: () => void cleanupStack.clean()
    });
    return {
        onNode: (node) => {
            if (node !== nodeRef) {
                nodeRef = node;
                toggleDismissListeners();
            }
        },
        update: (props) => {
            state = { ...state, ...props };
            toggleDismissListeners();
        }
    };
};

const popoverTrackerContext = n$7("BDS_POPOVER_TRACKER");
/**
 * Popover tracker consumer controller
 *
 * Allows a provider to get updates on whether any Popover elements are opening or closing.
 */
const createPopoverTrackerProviderController = (host, onChange) => {
    const popoverSet = new Set();
    const add = (popoverElement) => {
        if (!popoverSet.has(popoverElement)) {
            popoverSet.add(popoverElement);
            onChange?.();
        }
    };
    const remove = (popoverElement) => {
        if (popoverSet.has(popoverElement)) {
            popoverSet.delete(popoverElement);
            onChange?.();
        }
    };
    new i$4(host, {
        context: popoverTrackerContext,
        initialValue: {
            add,
            remove
        }
    });
    host.addController({
        hostDisconnected: () => {
            popoverSet.clear();
        }
    });
    return {
        getOpenPopovers: () => Array.from(popoverSet)
    };
};
/**
 * Popover tracker consumer controller
 *
 * Allows a provider to get updates on which popovers are currently open.
 */
const createPopoverTrackerConsumerController = (host) => {
    let popoverTracker;
    const connect = () => {
        popoverTracker?.add(host);
    };
    const disconnect = () => {
        popoverTracker?.remove(host);
    };
    const sync = () => {
        if (host.open && host.trigger !== "hover") {
            connect();
        }
        else {
            disconnect();
        }
    };
    new s$4(host, {
        context: popoverTrackerContext,
        callback: (nextPopoverTracker) => {
            if (nextPopoverTracker !== popoverTracker) {
                // Disconnect from previous provider, if it has changed
                if (popoverTracker) {
                    disconnect();
                }
                popoverTracker = nextPopoverTracker;
                sync();
            }
        },
        subscribe: true
    });
    createEffectController(host, sync, ["open", "trigger"]);
    host.addController({
        hostDisconnected: () => {
            disconnect();
        }
    });
};

const min = Math.min;
const max = Math.max;
const round$1 = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp$1(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp$1(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp$1(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle$1(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round$1(width) !== offsetWidth || round$1(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round$1(rect.width) : rect.width) / width;
  let y = ($ ? round$1(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

const getElementRects = async function (_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...(await getDimensionsFn(floating))
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

const DEFAULT_STATE$1 = {
    open: false,
    hasContent: false,
    placement: "right-start",
    overlayTarget: false,
    matchTargetSize: false
};
const PADDING = {
    top: { mainAxis: 8, crossAxis: 0 },
    "top-start": { mainAxis: 8, crossAxis: 0 },
    "top-end": { mainAxis: 8, crossAxis: 0 },
    bottom: { mainAxis: 8, crossAxis: 0 },
    "bottom-start": { mainAxis: 8, crossAxis: 0 },
    "bottom-end": { mainAxis: 8, crossAxis: 0 },
    right: { mainAxis: 8, crossAxis: 0 },
    "right-start": { mainAxis: 8, crossAxis: -8 },
    "right-end": { mainAxis: 8, crossAxis: 8 },
    left: { mainAxis: 8, crossAxis: 0 },
    "left-start": { mainAxis: 8, crossAxis: -8 },
    "left-end": { mainAxis: 8, crossAxis: 8 }
};
const VIEWPORT_PADDING = 12;
const getPadding = (placement) => PADDING[placement];
const getResolvedTargetRef = (targetNodeRef) => {
    if (targetNodeRef instanceof HTMLElement) {
        return (targetNodeRef.hitAreaElement instanceof HTMLElement
            ? targetNodeRef.hitAreaElement
            : targetNodeRef);
    }
    return undefined;
};
/**
 * Observes a target and a content node and repositions
 * the floating popover content when necessary
 */
const createPositionController = (host, initialState, { onHide, onPlacement }) => {
    const cleanupStack = createCleanupStack();
    let targetNodeRef;
    let canvasNodeRef;
    const { getState, dispatch } = createReducerController(host, (state, props) => {
        const nextState = { ...state, ...props };
        return !shallowEqual(state, nextState) ? nextState : state;
    }, { ...DEFAULT_STATE$1, ...initialState }, () => void updatePosition());
    const updatePosition = async () => {
        const { open, hasContent, placement, overlayTarget, matchTargetSize } = getState();
        /**
         * If targetNodeRef has a hitAreaElement public property,
         * use that for relative positioning instead
         */
        const resolvedTargetNodeRef = getResolvedTargetRef(targetNodeRef);
        if (resolvedTargetNodeRef instanceof HTMLElement &&
            canvasNodeRef instanceof HTMLElement &&
            open &&
            hasContent) {
            const boundary = {
                x: 0,
                y: 0,
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            };
            const { x, y, placement: resolvedPlacement, middlewareData } = await computePosition(resolvedTargetNodeRef, canvasNodeRef, {
                strategy: "fixed",
                placement,
                middleware: [
                    /**
                     * Offset position
                     */
                    overlayTarget
                        ? offset(({ rects, placement }) => {
                            switch (placement) {
                                case "top":
                                case "top-start":
                                case "top-end":
                                case "bottom":
                                case "bottom-start":
                                case "bottom-end":
                                    return {
                                        crossAxis: -8,
                                        mainAxis: -rects.reference.height - 8
                                    };
                                case "left":
                                case "left-start":
                                case "left-end":
                                case "right":
                                case "right-start":
                                case "right-end":
                                    return {
                                        crossAxis: -8,
                                        mainAxis: -rects.reference.width - 8
                                    };
                                default:
                                    return 0;
                            }
                        })
                        : offset(getPadding(placement)),
                    /**
                     * Canvas size
                     */
                    size({
                        boundary,
                        padding: VIEWPORT_PADDING,
                        apply: ({ rects }) => {
                            if (canvasNodeRef instanceof HTMLElement) {
                                if (matchTargetSize) {
                                    Object.assign(canvasNodeRef.style, {
                                        inlineSize: `${rects.reference.width}px`
                                    });
                                }
                                else {
                                    canvasNodeRef.style.removeProperty("inline-size");
                                }
                            }
                        }
                    }),
                    /**
                     * Flip if it cannot show within viewport
                     */
                    flip({
                        boundary,
                        padding: VIEWPORT_PADDING,
                        crossAxis: false
                    }),
                    /**
                     * Viewport boundary shifting
                     */
                    shift({
                        boundary,
                        padding: VIEWPORT_PADDING
                    }),
                    /**
                     * Overflow clipping
                     * NB: Only uses the first clipped ancestor, as that is all we care about
                     */
                    {
                        name: "targetOverflow",
                        fn: async (state) => {
                            const clippingAncestors = getOverflowAncestors(resolvedTargetNodeRef);
                            const boundaryElement = clippingAncestors.find((element) => element instanceof Element &&
                                element.scrollHeight > element.clientHeight);
                            const overflow = await detectOverflow(state, {
                                elementContext: "reference",
                                boundary: boundaryElement ?? "clippingAncestors"
                            });
                            return {
                                data: {
                                    clipped: overflow.top > 0 || overflow.bottom > 0
                                }
                            };
                        }
                    }
                ]
            });
            if (middlewareData.targetOverflow.clipped) {
                onHide?.();
            }
            else if (canvasNodeRef instanceof HTMLElement) {
                /**
                 * NB:
                 * Ideally, we want to be using `translate(${x}px, ${y}px)` here for the
                 * performance gains. However, as 'fixed' passive popovers can appear within
                 * a parent popover, the child loses fixed positioning in the box model
                 * when a transform is applied to the parent.
                 *
                 * When the new native popover API arrives, each popover could be within a top layer,
                 * and the positioning (and box model) would all be independent, so we should be free
                 * to use transforms instead.
                 */
                Object.assign(canvasNodeRef.style, {
                    left: `${x}px`,
                    top: `${y}px`
                });
                onPlacement?.(resolvedPlacement);
            }
        }
    };
    const observeNodes = () => {
        if (targetNodeRef instanceof HTMLElement &&
            canvasNodeRef instanceof HTMLElement) {
            cleanupStack.add(autoUpdate(targetNodeRef, canvasNodeRef, updatePosition));
        }
    };
    host.addController({
        hostDisconnected: () => void cleanupStack.clean()
    });
    return {
        update: dispatch,
        onTargetNode: (node) => {
            if (node !== targetNodeRef) {
                cleanupStack.clean();
                targetNodeRef = node;
                observeNodes();
            }
        },
        onCanvasNode: (node) => {
            if (node !== canvasNodeRef) {
                cleanupStack.clean();
                canvasNodeRef = node;
                observeNodes();
            }
        }
    };
};

const scrollLockControllerHosts = new Set();
const scrollbarGlobalStyleSheet = new CSSStyleSheet();
scrollbarGlobalStyleSheet.replaceSync(`
.bds-hide-overlay-scrollbars ::-webkit-scrollbar {
  display: none !important;
}
`);
/**
 * Dirty test for checking to see whether the OS is using overlay scrollbars, or classic
 * scrollbars. This could be affected by OS / Accessibility settings / connected input devices.
 */
const isUsingOverlayScrollbars = (() => {
    const testElement = document.createElement("div");
    Object.assign(testElement.style, {
        position: "absolute",
        overflowY: "scroll",
        width: "100px",
        height: "100px"
    });
    document.body.appendChild(testElement);
    const isUsingOverlayScrollbars = testElement.offsetWidth - testElement.clientWidth === 0;
    document.body.removeChild(testElement);
    return isUsingOverlayScrollbars;
})();
/**
 * Scroll-locking mechanism
 *
 * We're using CSS to control scroll-locking because using events would be a bigger headache.
 * We would need to attach touchmove / wheel handlers and start interrogating events to
 * determine whether they should be cancelled based on several conditions. Using overflow
 * lets the browser use as much native behavior as possible.
 *
 * Scroll-locking the HTML element is necessary because showing a native dialog element
 * does not prevent scroll on the viewport, but does prevent scroll on anything inside,
 * and we need a consistent behavior. We must also sometimes add scrollbar-gutter=stable
 * to ensure OS' with classic scrollbars (not overlay scrollbars) do not cause a layout
 * shift when this is toggled on and off.
 *
 * Additionally, there is a Chrome issue in which a native dialog element will 'show' any
 * overlay scrollbars when opened so we must hide them.
 */
const lockRootScroll = (shouldLock) => {
    const { scrollHeight: viewportScrollHeight, clientHeight: viewportClientHeight, scrollWidth: viewportScrollWidth, clientWidth: viewportClientWidth } = document.documentElement;
    const isViewportCurrentlyClipping = viewportScrollHeight > viewportClientHeight ||
        viewportScrollWidth > viewportClientWidth;
    Object.assign(document.documentElement.style, {
        overflow: shouldLock ? "hidden" : "",
        scrollbarGutter: shouldLock && isViewportCurrentlyClipping ? "stable" : ""
    });
    /**
     * We must use a class switch here because it is the only way to apply styles to the
     * ::-webkit-scrollbar pseudo element.
     */
    if (shouldLock && isUsingOverlayScrollbars) {
        document.documentElement.classList.add("bds-hide-overlay-scrollbars");
    }
    else {
        document.documentElement.classList.remove("bds-hide-overlay-scrollbars");
    }
};
/**
 * Scroll-locking controller
 */
const createScrollLockController = (host) => {
    host.addController({
        hostConnected: () => {
            if (!scrollLockControllerHosts.size) {
                document.adoptedStyleSheets = [
                    ...document.adoptedStyleSheets,
                    scrollbarGlobalStyleSheet
                ];
            }
            scrollLockControllerHosts.add(host);
        },
        hostDisconnected: () => {
            lockRootScroll(false);
            scrollLockControllerHosts.delete(host);
            if (!scrollLockControllerHosts.size) {
                document.adoptedStyleSheets = document.adoptedStyleSheets.filter((styleSheet) => styleSheet !== scrollbarGlobalStyleSheet);
            }
        }
    });
    return {
        lock: () => void lockRootScroll(true),
        unlock: () => void lockRootScroll(false)
    };
};

function addUniqueItem(array, item) {
    array.indexOf(item) === -1 && array.push(item);
}

const clamp = (min, max, v) => Math.min(Math.max(v, min), max);

const defaults = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease",
};

const isNumber = (value) => typeof value === "number";

const isEasingList = (easing) => Array.isArray(easing) && !isNumber(easing[0]);

const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function getEasingForSegment(easing, i) {
    return isEasingList(easing)
        ? easing[wrap(0, easing.length, i)]
        : easing;
}

const mix = (min, max, progress) => -progress * min + progress * max + min;

const noop = () => { };
const noopReturn = (v) => v;

const progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);

function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = progress(0, remaining, i);
        offset.push(mix(min, 1, offsetProgress));
    }
}
function defaultOffset(length) {
    const offset = [0];
    fillOffset(offset, length - 1);
    return offset;
}

function interpolate(output, input = defaultOffset(output.length), easing = noopReturn) {
    const length = output.length;
    /**
     * If the input length is lower than the output we
     * fill the input to match. This currently assumes the input
     * is an animation progress value so is a good candidate for
     * moving outside the function.
     */
    const remainder = length - input.length;
    remainder > 0 && fillOffset(input, remainder);
    return (t) => {
        let i = 0;
        for (; i < length - 2; i++) {
            if (t < input[i + 1])
                break;
        }
        let progressInRange = clamp(0, 1, progress(input[i], input[i + 1], t));
        const segmentEasing = getEasingForSegment(easing, i);
        progressInRange = segmentEasing(progressInRange);
        return mix(output[i], output[i + 1], progressInRange);
    };
}

const isCubicBezier = (easing) => Array.isArray(easing) && isNumber(easing[0]);

const isEasingGenerator = (easing) => typeof easing === "object" &&
    Boolean(easing.createAnimation);

const isFunction = (value) => typeof value === "function";

const isString = (value) => typeof value === "string";

const time = {
    ms: (seconds) => seconds * 1000,
    s: (milliseconds) => milliseconds / 1000,
};

/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return noopReturn;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

const steps = (steps, direction = "end") => (progress) => {
    progress =
        direction === "end"
            ? Math.min(progress, 0.999)
            : Math.max(progress, 0.001);
    const expanded = progress * steps;
    const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
    return clamp(0, 1, rounded / steps);
};

const namedEasings = {
    ease: cubicBezier(0.25, 0.1, 0.25, 1.0),
    "ease-in": cubicBezier(0.42, 0.0, 1.0, 1.0),
    "ease-in-out": cubicBezier(0.42, 0.0, 0.58, 1.0),
    "ease-out": cubicBezier(0.0, 0.0, 0.58, 1.0),
};
const functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
    // If already an easing function, return
    if (isFunction(definition))
        return definition;
    // If an easing curve definition, return bezier function
    if (isCubicBezier(definition))
        return cubicBezier(...definition);
    // If we have a predefined easing function, return
    if (namedEasings[definition])
        return namedEasings[definition];
    // If this is a steps function, attempt to create easing curve
    if (definition.startsWith("steps")) {
        const args = functionArgsRegex.exec(definition);
        if (args) {
            const argsArray = args[1].split(",");
            return steps(parseFloat(argsArray[0]), argsArray[1].trim());
        }
    }
    return noopReturn;
}

class Animation {
    constructor(output, keyframes = [0, 1], { easing, duration: initialDuration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, offset, direction = "normal", } = {}) {
        this.startTime = null;
        this.rate = 1;
        this.t = 0;
        this.cancelTimestamp = null;
        this.easing = noopReturn;
        this.duration = 0;
        this.totalDuration = 0;
        this.repeat = 0;
        this.playState = "idle";
        this.finished = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        easing = easing || defaults.easing;
        if (isEasingGenerator(easing)) {
            const custom = easing.createAnimation(keyframes);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            initialDuration = custom.duration || initialDuration;
        }
        this.repeat = repeat;
        this.easing = isEasingList(easing) ? noopReturn : getEasingFunction(easing);
        this.updateDuration(initialDuration);
        const interpolate$1 = interpolate(keyframes, offset, isEasingList(easing) ? easing.map(getEasingFunction) : noopReturn);
        this.tick = (timestamp) => {
            var _a;
            // TODO: Temporary fix for OptionsResolver typing
            delay = delay;
            let t = 0;
            if (this.pauseTime !== undefined) {
                t = this.pauseTime;
            }
            else {
                t = (timestamp - this.startTime) * this.rate;
            }
            this.t = t;
            // Convert to seconds
            t /= 1000;
            // Rebase on delay
            t = Math.max(t - delay, 0);
            /**
             * If this animation has finished, set the current time
             * to the total duration.
             */
            if (this.playState === "finished" && this.pauseTime === undefined) {
                t = this.totalDuration;
            }
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */
            const progress = t / this.duration;
            // TODO progress += iterationStart
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */
            let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */
            let iterationProgress = progress % 1.0;
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */
            iterationProgress === 1 && currentIteration--;
            /**
             * Reverse progress if we're not running in "normal" direction
             */
            const iterationIsOdd = currentIteration % 2;
            if (direction === "reverse" ||
                (direction === "alternate" && iterationIsOdd) ||
                (direction === "alternate-reverse" && !iterationIsOdd)) {
                iterationProgress = 1 - iterationProgress;
            }
            const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
            const latest = interpolate$1(this.easing(p));
            output(latest);
            const isAnimationFinished = this.pauseTime === undefined &&
                (this.playState === "finished" || t >= this.totalDuration + endDelay);
            if (isAnimationFinished) {
                this.playState = "finished";
                (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, latest);
            }
            else if (this.playState !== "idle") {
                this.frameRequestId = requestAnimationFrame(this.tick);
            }
        };
        this.play();
    }
    play() {
        const now = performance.now();
        this.playState = "running";
        if (this.pauseTime !== undefined) {
            this.startTime = now - this.pauseTime;
        }
        else if (!this.startTime) {
            this.startTime = now;
        }
        this.cancelTimestamp = this.startTime;
        this.pauseTime = undefined;
        this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
        this.playState = "paused";
        this.pauseTime = this.t;
    }
    finish() {
        this.playState = "finished";
        this.tick(0);
    }
    stop() {
        var _a;
        this.playState = "idle";
        if (this.frameRequestId !== undefined) {
            cancelAnimationFrame(this.frameRequestId);
        }
        (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, false);
    }
    cancel() {
        this.stop();
        this.tick(this.cancelTimestamp);
    }
    reverse() {
        this.rate *= -1;
    }
    commitStyles() { }
    updateDuration(duration) {
        this.duration = duration;
        this.totalDuration = duration * (this.repeat + 1);
    }
    get currentTime() {
        return this.t;
    }
    set currentTime(t) {
        if (this.pauseTime !== undefined || this.rate === 0) {
            this.pauseTime = t;
        }
        else {
            this.startTime = performance.now() - t / this.rate;
        }
    }
    get playbackRate() {
        return this.rate;
    }
    set playbackRate(rate) {
        this.rate = rate;
    }
}

/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */
class MotionValue {
    setAnimation(animation) {
        this.animation = animation;
        animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => { });
    }
    clearAnimation() {
        this.animation = this.generator = undefined;
    }
}

const data = new WeakMap();
function getAnimationData(element) {
    if (!data.has(element)) {
        data.set(element, {
            transforms: [],
            values: new Map(),
        });
    }
    return data.get(element);
}
function getMotionValue(motionValues, name) {
    if (!motionValues.has(name)) {
        motionValues.set(name, new MotionValue());
    }
    return motionValues.get(name);
}

/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
const axes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
const order = ["translate", "scale", "rotate", "skew"];
const transformAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
};
const rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v) => v + "deg",
};
const baseTransformProperties = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (v) => v + "px",
    },
    rotate: rotation,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: noopReturn,
    },
    skew: rotation,
};
const transformDefinitions = new Map();
const asTransformCssVar = (name) => `--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */
const transforms = ["x", "y", "z"];
order.forEach((name) => {
    axes.forEach((axis) => {
        transforms.push(name + axis);
        transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
const compareTransformOrder = (a, b) => transforms.indexOf(a) - transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */
const transformLookup = new Set(transforms);
const isTransform = (name) => transformLookup.has(name);
const addTransformToElement = (element, name) => {
    // Map x to translateX etc
    if (transformAlias[name])
        name = transformAlias[name];
    const { transforms } = getAnimationData(element);
    addUniqueItem(transforms, name);
    /**
     * TODO: An optimisation here could be to cache the transform in element data
     * and only update if this has changed.
     */
    element.style.transform = buildTransformTemplate(transforms);
};
const buildTransformTemplate = (transforms) => transforms
    .sort(compareTransformOrder)
    .reduce(transformListToString, "")
    .trim();
const transformListToString = (template, name) => `${template} ${name}(var(${asTransformCssVar(name)}))`;

const isCssVar = (name) => name.startsWith("--");
const registeredProperties = new Set();
function registerCssVariable(name) {
    if (registeredProperties.has(name))
        return;
    registeredProperties.add(name);
    try {
        const { syntax, initialValue } = transformDefinitions.has(name)
            ? transformDefinitions.get(name)
            : {};
        CSS.registerProperty({
            name,
            inherits: false,
            syntax,
            initialValue,
        });
    }
    catch (e) { }
}

const testAnimation = (keyframes, options) => document.createElement("div").animate(keyframes, options);
const featureTests = {
    cssRegisterProperty: () => typeof CSS !== "undefined" &&
        Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
        try {
            testAnimation({ opacity: [1] });
        }
        catch (e) {
            return false;
        }
        return true;
    },
    finished: () => Boolean(testAnimation({ opacity: [0, 1] }, { duration: 0.001 }).finished),
    linearEasing: () => {
        try {
            testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
        }
        catch (e) {
            return false;
        }
        return true;
    },
};
const results = {};
const supports = {};
for (const key in featureTests) {
    supports[key] = () => {
        if (results[key] === undefined)
            results[key] = featureTests[key]();
        return results[key];
    };
}

// Create a linear easing point for every x second
const resolution = 0.015;
const generateLinearEasingPoints = (easing, duration) => {
    let points = "";
    const numPoints = Math.round(duration / resolution);
    for (let i = 0; i < numPoints; i++) {
        points += easing(progress(0, numPoints - 1, i)) + ", ";
    }
    return points.substring(0, points.length - 2);
};
const convertEasing = (easing, duration) => {
    if (isFunction(easing)) {
        return supports.linearEasing()
            ? `linear(${generateLinearEasingPoints(easing, duration)})`
            : defaults.easing;
    }
    else {
        return isCubicBezier(easing) ? cubicBezierAsString(easing) : easing;
    }
};
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

function hydrateKeyframes(keyframes, readInitialValue) {
    for (let i = 0; i < keyframes.length; i++) {
        if (keyframes[i] === null) {
            keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
        }
    }
    return keyframes;
}
const keyframesList = (keyframes) => Array.isArray(keyframes) ? keyframes : [keyframes];

function getStyleName(key) {
    if (transformAlias[key])
        key = transformAlias[key];
    return isTransform(key) ? asTransformCssVar(key) : key;
}

const style = {
    get: (element, name) => {
        name = getStyleName(name);
        let value = isCssVar(name)
            ? element.style.getPropertyValue(name)
            : getComputedStyle(element)[name];
        if (!value && value !== 0) {
            const definition = transformDefinitions.get(name);
            if (definition)
                value = definition.initialValue;
        }
        return value;
    },
    set: (element, name, value) => {
        name = getStyleName(name);
        if (isCssVar(name)) {
            element.style.setProperty(name, value);
        }
        else {
            element.style[name] = value;
        }
    },
};

function stopAnimation(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished")
        return;
    // Suppress error thrown by WAAPI
    try {
        if (animation.stop) {
            animation.stop();
        }
        else {
            needsCommit && animation.commitStyles();
            animation.cancel();
        }
    }
    catch (e) { }
}

function getUnitConverter(keyframes, definition) {
    var _a;
    let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || noopReturn;
    const finalKeyframe = keyframes[keyframes.length - 1];
    if (isString(finalKeyframe)) {
        const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
        if (unit)
            toUnit = (value) => value + unit;
    }
    return toUnit;
}

function getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
    const record = getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, easing = defaults.easing, persist = false, direction, offset, allowWebkitAcceleration = false, } = options;
    const data = getAnimationData(element);
    const valueIsTransform = isTransform(key);
    let canAnimateNatively = supports.waapi();
    /**
     * If this is an individual transform, we need to map its
     * key to a CSS variable and update the element's transform style
     */
    valueIsTransform && addTransformToElement(element, key);
    const name = getStyleName(key);
    const motionValue = getMotionValue(data.values, name);
    /**
     * Get definition of value, this will be used to convert numerical
     * keyframes into the default value type.
     */
    const definition = transformDefinitions.get(name);
    /**
     * Stop the current animation, if any. Because this will trigger
     * commitStyles (DOM writes) and we might later trigger DOM reads,
     * this is fired now and we return a factory function to create
     * the actual animation that can get called in batch,
     */
    stopAnimation(motionValue.animation, !(isEasingGenerator(easing) && motionValue.generator) &&
        options.record !== false);
    /**
     * Batchable factory function containing all DOM reads.
     */
    return () => {
        const readInitialValue = () => { var _a, _b; return (_b = (_a = style.get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0; };
        /**
         * Replace null values with the previous keyframe value, or read
         * it from the DOM if it's the first keyframe.
         */
        let keyframes = hydrateKeyframes(keyframesList(keyframesDefinition), readInitialValue);
        /**
         * Detect unit type of keyframes.
         */
        const toUnit = getUnitConverter(keyframes, definition);
        if (isEasingGenerator(easing)) {
            const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            duration = custom.duration || duration;
        }
        /**
         * If this is a CSS variable we need to register it with the browser
         * before it can be animated natively. We also set it with setProperty
         * rather than directly onto the element.style object.
         */
        if (isCssVar(name)) {
            if (supports.cssRegisterProperty()) {
                registerCssVariable(name);
            }
            else {
                canAnimateNatively = false;
            }
        }
        /**
         * If we've been passed a custom easing function, and this browser
         * does **not** support linear() easing, and the value is a transform
         * (and thus a pure number) we can still support the custom easing
         * by falling back to the animation polyfill.
         */
        if (valueIsTransform &&
            !supports.linearEasing() &&
            (isFunction(easing) || (isEasingList(easing) && easing.some(isFunction)))) {
            canAnimateNatively = false;
        }
        /**
         * If we can animate this value with WAAPI, do so.
         */
        if (canAnimateNatively) {
            /**
             * Convert numbers to default value types. Currently this only supports
             * transforms but it could also support other value types.
             */
            if (definition) {
                keyframes = keyframes.map((value) => isNumber(value) ? definition.toDefaultUnit(value) : value);
            }
            /**
             * If this browser doesn't support partial/implicit keyframes we need to
             * explicitly provide one.
             */
            if (keyframes.length === 1 &&
                (!supports.partialKeyframes() || isRecording)) {
                keyframes.unshift(readInitialValue());
            }
            const animationOptions = {
                delay: time.ms(delay),
                duration: time.ms(duration),
                endDelay: time.ms(endDelay),
                easing: !isEasingList(easing)
                    ? convertEasing(easing, duration)
                    : undefined,
                direction,
                iterations: repeat + 1,
                fill: "both",
            };
            animation = element.animate({
                [name]: keyframes,
                offset,
                easing: isEasingList(easing)
                    ? easing.map((thisEasing) => convertEasing(thisEasing, duration))
                    : undefined,
            }, animationOptions);
            /**
             * Polyfill finished Promise in browsers that don't support it
             */
            if (!animation.finished) {
                animation.finished = new Promise((resolve, reject) => {
                    animation.onfinish = resolve;
                    animation.oncancel = reject;
                });
            }
            const target = keyframes[keyframes.length - 1];
            animation.finished
                .then(() => {
                if (persist)
                    return;
                // Apply styles to target
                style.set(element, name, target);
                // Ensure fill modes don't persist
                animation.cancel();
            })
                .catch(noop);
            /**
             * This forces Webkit to run animations on the main thread by exploiting
             * this condition:
             * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
             *
             * This fixes Webkit's timing bugs, like accelerated animations falling
             * out of sync with main thread animations and massive delays in starting
             * accelerated animations in WKWebView.
             */
            if (!allowWebkitAcceleration)
                animation.playbackRate = 1.000001;
            /**
             * If we can't animate the value natively then we can fallback to the numbers-only
             * polyfill for transforms.
             */
        }
        else if (AnimationPolyfill && valueIsTransform) {
            /**
             * If any keyframe is a string (because we measured it from the DOM), we need to convert
             * it into a number before passing to the Animation polyfill.
             */
            keyframes = keyframes.map((value) => typeof value === "string" ? parseFloat(value) : value);
            /**
             * If we only have a single keyframe, we need to create an initial keyframe by reading
             * the current value from the DOM.
             */
            if (keyframes.length === 1) {
                keyframes.unshift(parseFloat(readInitialValue()));
            }
            animation = new AnimationPolyfill((latest) => {
                style.set(element, name, toUnit ? toUnit(latest) : latest);
            }, keyframes, Object.assign(Object.assign({}, options), { duration,
                easing }));
        }
        else {
            const target = keyframes[keyframes.length - 1];
            style.set(element, name, definition && isNumber(target)
                ? definition.toDefaultUnit(target)
                : target);
        }
        if (isRecording) {
            record(element, key, keyframes, {
                duration,
                delay: delay,
                easing,
                repeat,
                offset,
            }, "motion-one");
        }
        motionValue.setAnimation(animation);
        return animation;
    };
}

const getOptions = (options, key) => 
/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */
options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);

function resolveElements(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : (selectorCache[elements] = document.querySelectorAll(elements));
            elements = selectorCache[elements];
        }
        else {
            elements = document.querySelectorAll(elements);
        }
    }
    else if (elements instanceof Element) {
        elements = [elements];
    }
    /**
     * Return an empty array
     */
    return Array.from(elements || []);
}

const createAnimation = (factory) => factory();
const withControls = (animationFactory, options, duration = defaults.duration) => {
    return new Proxy({
        animations: animationFactory.map(createAnimation).filter(Boolean),
        duration,
        options,
    }, controls);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */
const getActiveAnimation = (state) => state.animations[0];
const controls = {
    get: (target, key) => {
        const activeAnimation = getActiveAnimation(target);
        switch (key) {
            case "duration":
                return target.duration;
            case "currentTime":
                return time.s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
            case "playbackRate":
            case "playState":
                return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
            case "finished":
                if (!target.finished) {
                    target.finished = Promise.all(target.animations.map(selectFinished)).catch(noop);
                }
                return target.finished;
            case "stop":
                return () => {
                    target.animations.forEach((animation) => stopAnimation(animation));
                };
            case "forEachNative":
                /**
                 * This is for internal use only, fire a callback for each
                 * underlying animation.
                 */
                return (callback) => {
                    target.animations.forEach((animation) => callback(animation, target));
                };
            default:
                return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined"
                    ? undefined
                    : () => target.animations.forEach((animation) => animation[key]());
        }
    },
    set: (target, key, value) => {
        switch (key) {
            case "currentTime":
                value = time.ms(value);
            // Fall-through
            case "playbackRate":
                for (let i = 0; i < target.animations.length; i++) {
                    target.animations[i][key] = value;
                }
                return true;
        }
        return false;
    },
};
const selectFinished = (animation) => animation.finished;

function resolveOption(option, i, total) {
    return isFunction(option) ? option(i, total) : option;
}

function createAnimate(AnimatePolyfill) {
    return function animate(elements, keyframes, options = {}) {
        elements = resolveElements(elements);
        const numElements = elements.length;
        /**
         * Create and start new animations
         */
        const animationFactories = [];
        for (let i = 0; i < numElements; i++) {
            const element = elements[i];
            for (const key in keyframes) {
                const valueOptions = getOptions(options, key);
                valueOptions.delay = resolveOption(valueOptions.delay, i, numElements);
                const animation = animateStyle(element, key, keyframes[key], valueOptions, AnimatePolyfill);
                animationFactories.push(animation);
            }
        }
        return withControls(animationFactories, options, 
        /**
         * TODO:
         * If easing is set to spring or glide, duration will be dynamically
         * generated. Ideally we would dynamically generate this from
         * animation.effect.getComputedTiming().duration but this isn't
         * supported in iOS13 or our number polyfill. Perhaps it's possible
         * to Proxy animations returned from animateStyle that has duration
         * as a getter.
         */
        options.duration);
    };
}

const animate$1 = createAnimate(Animation);

function animateProgress(target, options = {}) {
    return withControls([
        () => {
            const animation = new Animation(target, [0, 1], options);
            animation.finished.catch(() => { });
            return animation;
        },
    ], options, options.duration);
}
function animate(target, keyframesOrOptions, options) {
    const factory = isFunction(target) ? animateProgress : animate$1;
    return factory(target, keyframesOrOptions, options);
}

const DEFAULT_STATE = {
    open: false,
    hasContent: false
};
/**
 * Popover transition controller
 *
 * When the Popover API arrives, every Popover can have its own top layer, where we can
 * do something more advanced (e.g. transform / clip-path transitions based on position
 * controller placement). For now, this is impossible because transforms break fixed
 * positioning and clip-paths will clip any popovers within children.
 */
const createTransitionController = (host, initialState) => {
    const cleanupStack = createCleanupStack();
    let nodeRef;
    const { getState, dispatch } = createReducerController(host, (state, props) => {
        const nextState = { ...state, ...props };
        return !shallowEqual(state, nextState) ? nextState : state;
    }, { ...DEFAULT_STATE, ...initialState }, () => void sync());
    const sync = () => {
        const { open, hasContent } = getState();
        cleanupStack.clean();
        if (nodeRef && open) {
            if (hasContent) {
                const { cancel } = transitionIn();
                cleanupStack.add(cancel);
            }
            else {
                // Hide until content exists
                nodeRef.style.setProperty("opacity", "0");
            }
        }
    };
    const transitionIn = () => animate(nodeRef, { opacity: [0, 1] }, { duration: 0.08, easing: "ease-out" });
    host.addController({
        hostDisconnected: () => void cleanupStack.clean()
    });
    return {
        update: dispatch,
        onNode: (node) => {
            if (node !== nodeRef) {
                nodeRef = node;
                sync();
            }
        }
    };
};

const styles$l = i$9 `
  :host {
    display: contents;
  }

  .popover {
    display: contents;
  }

  .popover__canvas {
    position: fixed;
    z-index: 1;
    /* These are not logical rules because Floating UI computes in X/Y */
    top: 0;
    left: 0;
    right: auto;
    bottom: auto;
    /* */
    overflow: visible;
    background-color: transparent;
  }

  .popover__content {
    overflow: hidden;
    background-color: var(--bds--color--background--elevate);
    box-shadow: var(--bds--elevation--level--3--shadow);
    outline: var(--bds--border--stroke--thin) solid
      var(--bds--color--border--neutral--low);
    outline-offset: calc((var(--bds--border--stroke--thin) / 2) * -1);
    border-radius: var(--bds--border--corner--medium);
  }

  ::backdrop {
    /* Hide the backdrop when using dialog element as an active popover. */
    display: none;
  }
`;

var __decorate$i = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const HOVER_DELAY_TIME = 500;
const bem$b = createBem("popover");
/**
 * @title Popover Mixin
 * @summary Popover mixin is extended by components to anchor to a component and render on the top layer of the DOM.
 *
 */
const PopoverMixin = (superClass) => {
    class PopoverMixinClass extends superClass {
        static { this.styles = [superClass.styles ?? [], styles$l]; }
        static get scopedElements() {
            return {
                "bds-popover-target": PopoverTarget,
                "bds-popover-content": PopoverContent
            };
        }
        constructor(...args) {
            super(...args);
            /**
              Controls if the popover is open.
              Can be activated imperatively to open the popover.
            */
            this.open = false;
            this.overlayTarget = false;
            this.matchTargetSize = false;
            this.hasExplicitlySetTargetHitAreaNode = false;
            this.targetSlotController = createSlotController(this, () => {
                /**
                 * Defer this to fix Safari < 16.4 bug where WC styles are injected after mount.
                 * This is not an issue when using adopted stylesheets, and can be removed when
                 * Safari 16.4 gets more adoption.
                 */
                this.deferredTargetCallbackFrame = requestAnimationFrame(() => {
                    // Skip this if the popover has a hit area set imperatively
                    if (this.hasExplicitlySetTargetHitAreaNode) {
                        return;
                    }
                    const resolvedTargetNode = findDeepDown(this.targetSlotController.getSlottedElements()[0], (node) => {
                        if (node instanceof HTMLElement) {
                            const { display } = window.getComputedStyle(node);
                            return display !== "contents";
                        }
                        return false;
                    });
                    this.positionController.onTargetNode(resolvedTargetNode || undefined);
                });
            }, {
                name: "target",
                mutationObserverOptions: { subtree: true }
            });
            this.contentSlotController = createSlotController(this, () => {
                const hasContent = !!this.contentSlotController.getSlottedElements().length;
                this.positionController.update({ hasContent });
                this.transitionController.update({ hasContent });
            }, {
                name: "content"
            });
            this.positionController = createPositionController(this, {
                open: this.open,
                placement: this.placement,
                overlayTarget: this.overlayTarget,
                matchTargetSize: this.matchTargetSize
            }, { onHide: () => this.hide() });
            this.dismissController = createDismissController(this, {
                open: this.open,
                type: this.type,
                trigger: this.trigger
            }, () => this.hide());
            this.transitionController = createTransitionController(this, {
                open: this.open
            });
            this.scrollLockController = createScrollLockController(this);
            createEffectController(this, () => {
                this.syncPopover();
                this.syncTargetContextOpen();
            }, ["open"]);
            createEffectController(this, () => {
                this.positionController.update({
                    open: this.open,
                    placement: this.placement,
                    overlayTarget: this.overlayTarget,
                    matchTargetSize: this.matchTargetSize
                });
            }, ["open", "placement", "overlayTarget", "matchTargetSize"]);
            createEffectController(this, () => {
                this.dismissController.update({
                    open: this.open,
                    type: this.type,
                    trigger: this.trigger
                });
            }, ["open", "type", "trigger"]);
            createPopoverTrackerConsumerController(this);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            clearTimeout(this.hoverTimeout);
            this.deferredTargetCallbackFrame &&
                cancelAnimationFrame(this.deferredTargetCallbackFrame);
        }
        syncPopover() {
            this.transitionController.update({
                open: this.open
            });
            // Keep open in sync if dialog closed using Esc
            if (this.canvasEl?.open === this.open) {
                return;
            }
            if (this.open) {
                const openFn = this.type === "active" ? "showModal" : "show";
                if (this.trigger === "hover" && this.canvasEl) {
                    // Setting open property instead of invoking fn prevents autofocus on dialog
                    this.canvasEl.open = true;
                }
                else {
                    this.canvasEl?.[openFn]();
                }
                this.canvasEl?.dispatchEvent(new Event("open"));
                if (this.type === "active") {
                    this.scrollLockController.lock();
                }
            }
            else {
                if (this.trigger === "hover" && this.canvasEl) {
                    this.canvasEl.open = false;
                }
                else {
                    this.canvasEl?.close();
                }
                if (this.type === "active") {
                    this.scrollLockController.unlock();
                }
            }
        }
        syncTargetContextOpen() {
            /**
             * We must do this imperatively, rather than declaratively in the render method.
             * This is because nested targets (e.g. tooltip + popover) interfere with each other
             * and a hover tooltip (which isn't even participating in the context open control flow)
             * will specifically call the PopoverTarget's contextOpen provider setter with false
             */
            if (this.trigger === "click" && this.targetEl) {
                this.targetEl.contextOpen = this.open;
            }
        }
        onTargetMouseEnter(event) {
            if (this.trigger === "hover" && !event.defaultPrevented) {
                clearTimeout(this.hoverTimeout);
                this.hoverTimeout = window.setTimeout(() => this.show(), HOVER_DELAY_TIME);
            }
        }
        onTargetMouseLeave(event) {
            if (this.trigger === "hover" && !event.defaultPrevented) {
                clearTimeout(this.hoverTimeout);
                if (this.open) {
                    this.hide();
                }
            }
        }
        onTargetClick(event) {
            if (this.trigger === "click" && !event.defaultPrevented) {
                if (this.open) {
                    this.hide();
                }
                else {
                    this.show();
                }
            }
        }
        onTargetFocusIn(event) {
            const { isUsingKeyboard } = getKeyboardInteractionInfo();
            /**
             * When focussing an element within target slot, set the target's tabindex
             * to -1 so that it removes itself from the tab order.
             *
             * This Fixes a Firefox focus issue, where target keyboard focus gets stuck
             * in a loop. This could be because the target's focusable element can be
             * shared between nested popovers and Firefox gets confused.
             */
            event.target?.setAttribute("tabindex", "-1");
            // Show hover trigger popups when focus-visible
            if (this.trigger === "hover" && isUsingKeyboard) {
                this.show();
            }
        }
        onTargetFocusOut(event) {
            /**
             * When blurring an element within target slot, un-sets the tabindex; see above.
             */
            event.target?.removeAttribute("tabindex");
            // Hide hover trigger popups
            if (this.trigger === "hover") {
                this.hide();
            }
        }
        onPopoverOpen(event) {
            event.stopPropagation();
            this.show();
            this.dispatchEvent(new Event("open", { bubbles: false }));
        }
        onPopoverClose(event) {
            event.stopPropagation();
            this.hide();
            this.dispatchEvent(new Event("close", { bubbles: false }));
        }
        onTargetNode() { }
        onCanvasNode(node) {
            this.positionController.onCanvasNode(node);
            this.dismissController.onNode(node);
        }
        onContentNode(node) {
            this.transitionController.onNode(node);
        }
        getContentClasses() {
            return null;
        }
        show() {
            this.open = true;
        }
        hide() {
            this.open = false;
        }
        setTargetHitAreaNode(node) {
            this.hasExplicitlySetTargetHitAreaNode = true;
            this.positionController.onTargetNode(node);
        }
        render() {
            return x `
        <div class=${bem$b()}>
          <bds-popover-target
            trigger=${this.trigger}
            id="target"
            @mouseenter=${this.onTargetMouseEnter}
            @mouseleave=${this.onTargetMouseLeave}
            @click=${this.onTargetClick}
            @focusin=${this.onTargetFocusIn}
            @focusout=${this.onTargetFocusOut}
            ${n$3(this.onTargetNode)}
          >
            <slot name="target"></slot>
          </bds-popover-target>
          <dialog
            id="canvas"
            class=${bem$b("canvas")}
            role="presentation"
            tabindex=${this.trigger === "hover" ? -1 : A$1}
            @close=${this.onPopoverClose}
            @open=${this.onPopoverOpen}
            ${n$3(this.onCanvasNode)}
          >
            <bds-popover-content>
              <div
                class=${concatClasses(bem$b("content"), this.getContentClasses())}
                ${n$3(this.onContentNode)}
              >
                <slot name="content"></slot>
              </div>
            </bds-popover-content>
          </dialog>
        </div>
      `;
        }
    }
    __decorate$i([
        n$6({ type: String }),
        transform(createNormalizer(PLACEMENT, DEFAULTS$4.placement))
    ], PopoverMixinClass.prototype, "placement", void 0);
    __decorate$i([
        n$6({ type: String }),
        transform(createNormalizer(TRIGGER, DEFAULTS$4.trigger))
    ], PopoverMixinClass.prototype, "trigger", void 0);
    __decorate$i([
        n$6({ type: Boolean })
    ], PopoverMixinClass.prototype, "open", void 0);
    __decorate$i([
        n$6({ type: Boolean, attribute: "overlay-target" })
    ], PopoverMixinClass.prototype, "overlayTarget", void 0);
    __decorate$i([
        n$6({ type: Boolean, attribute: "match-target-size" })
    ], PopoverMixinClass.prototype, "matchTargetSize", void 0);
    __decorate$i([
        n$6({ type: String }),
        transform(createNormalizer(TYPE, DEFAULTS$4.type))
    ], PopoverMixinClass.prototype, "type", void 0);
    __decorate$i([
        i$2("#target")
    ], PopoverMixinClass.prototype, "targetEl", void 0);
    __decorate$i([
        i$2("#canvas")
    ], PopoverMixinClass.prototype, "canvasEl", void 0);
    return PopoverMixinClass;
};

const styles$k = i$9 `
  .popover__content {
    inline-size: 280px;
    flex-direction: column;
    align-items: stretch;
    max-inline-size: min(280px, calc(100vw - 40px));
    max-block-size: min(384px, calc(100vh - 40px));
    overflow-y: auto;
  }

  .popover__canvas[open] .popover__content {
    display: flex;
  }
`;

/**
 * Attaches menubuttonitemclick events on the target and content.
 */
const createMenuButtonItemController = (host, { onTargetMenuButtonItemClick, onContentMenuButtonItemClick }) => {
    const cleanupMap = createCleanupMap();
    host.addController({
        hostDisconnected: () => void cleanupMap.clean()
    });
    return {
        onTargetNode: (node) => {
            cleanupMap.remove("target");
            if (node && onTargetMenuButtonItemClick) {
                node.addEventListener("menubuttonitemclick", onTargetMenuButtonItemClick);
                cleanupMap.add("target", () => {
                    node.removeEventListener("menubuttonitemclick", onTargetMenuButtonItemClick);
                });
            }
        },
        onContentNode: (node) => {
            cleanupMap.remove("content");
            if (node && onContentMenuButtonItemClick) {
                node.addEventListener("menubuttonitemclick", onContentMenuButtonItemClick);
                cleanupMap.add("content", () => {
                    node.removeEventListener("menubuttonitemclick", onContentMenuButtonItemClick);
                });
            }
        }
    };
};

var __decorate$h = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const CONTEXT_MENU_DEFAULTS = {
    placement: "right-start",
    trigger: "click"
};
/**
 * @title Context Menu
 * @summary Manages context menu specific action clicks and styling.
 *
 * @slot target - The target to anchor the context-menu.
 * @slot content - The content of the context-menu.
 *
 * @event open - Fires on opening a popover.
 * @event close - Fires on closing a popover.
 */
class ContextMenu extends PopoverMixin(BaseMixin(s$8)) {
    constructor() {
        super(...arguments);
        this.menuButtonItemController = createMenuButtonItemController(this, {
            onTargetMenuButtonItemClick: (event) => {
                event.stopPropagation();
            },
            onContentMenuButtonItemClick: () => {
                this.hide();
            }
        });
    }
    static { this.tagName = "bds-context-menu"; }
    static { this.styles = [super.styles, styles$k]; }
    static { this.eventCallbackMap = {
        onOpen: "open",
        onClose: "close"
    }; }
    onTargetNode(node) {
        super.onTargetNode(node);
        this.menuButtonItemController.onTargetNode(node);
    }
    onContentNode(node) {
        super.onContentNode(node);
        this.menuButtonItemController.onContentNode(node);
    }
}
__decorate$h([
    transform(createNormalizer(PLACEMENT, CONTEXT_MENU_DEFAULTS.placement))
], ContextMenu.prototype, "placement", void 0);
__decorate$h([
    readOnly(CONTEXT_MENU_DEFAULTS.trigger)
], ContextMenu.prototype, "trigger", void 0);

/**
 * @title Popover
 * @summary A Popover component.
 *
 * @slot target - The target to anchor the popover.
 * @slot content - The content of the popover.
 *
 * @event open - Fires on opening a popover.
 * @event close - Fires on closing a popover.
 */
class Popover extends PopoverMixin(BaseMixin(s$8)) {
    static { this.tagName = "bds-popover"; }
    static { this.eventCallbackMap = {
        onOpen: "open",
        onClose: "close"
    }; }
}

const styles$j = i$9 `
  .popover__canvas {
    pointer-events: none;
  }

  .popover__content {
    max-inline-size: 20em;
    padding-block: calc(var(--bds--dimension--space) * 2);
    padding-inline: calc(var(--bds--dimension--space) * 3);
    color: var(--bds--color--content--neutral);
    background-color: var(--bds--color--background--inverse--noon);
    border-radius: var(--bds--border--corner--medium);
    box-shadow: var(--bds--elevation--level--3--shadow);
  }
`;

var __decorate$g = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const TOOLTIP_DEFAULTS = {
    trigger: "hover",
    type: "passive"
};
/**
 * @title Tooltip
 * @summary A Tooltip component to display additional information relative to a target.
 *
 * @slot target - The target to anchor the tooltip.
 * @slot content - The content of the tooltip.
 *
 * @event open - Fires on opening a popover.
 * @event close - Fires on closing a popover.
 */
class Tooltip extends PopoverMixin(BaseMixin(s$8)) {
    static { this.tagName = "bds-tooltip"; }
    static { this.styles = [super.styles, styles$j]; }
    static { this.eventCallbackMap = {
        onOpen: "open",
        onClose: "close"
    }; }
    getContentClasses() {
        return typeBody({ size: "x-small" });
    }
}
__decorate$g([
    readOnly(TOOLTIP_DEFAULTS.type)
], Tooltip.prototype, "type", void 0);
__decorate$g([
    transform(createNormalizer(TRIGGER, TOOLTIP_DEFAULTS.trigger))
], Tooltip.prototype, "trigger", void 0);

const styles$i = i$9 `
  :host {
    display: contents;
  }
`;

/**
 * PopoverTracker is for rare use-cases where there is a need to track the open state of
 * popovers within its own sub-tree.
 */
class PopoverTracker extends BaseMixin(s$8) {
    constructor() {
        super(...arguments);
        this.openPopovers = [];
        this.popoverTrackerProviderController = createPopoverTrackerProviderController(this, () => {
            this.openPopovers =
                this.popoverTrackerProviderController.getOpenPopovers();
            this.dispatchEvent(new Event("openpopoverchange", {
                cancelable: false,
                bubbles: true
            }));
        });
    }
    static { this.tagName = "bds-popover-tracker"; }
    static { this.styles = [super.styles, styles$i]; }
    render() {
        return x `<slot></slot>`;
    }
}

var __decorate$f = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class IconButton extends ButtonMixin(BaseMixin(s$8)) {
    constructor() {
        super(...arguments);
        /**
         * Visual properties
         */
        this.icon = Icon.prototype.name;
        /**
         * Assistive properties
         */
        this.assistLabel = "";
    }
    static { this.tagName = "bds-icon-button"; }
    static get scopedElements() {
        return {
            ...super.scopedElements,
            "bds-badge": Badge,
            "bds-tooltip": Tooltip
        };
    }
    renderContent() {
        const { size, icon } = this;
        return x `
      <bds-icon class=${bem$c("icon")} .name=${icon} .size=${size}></bds-icon>
    `;
    }
    renderIndicator() {
        const { indicator, disabled, indicatorVariant } = this;
        if (!indicator) {
            return null;
        }
        return x `
      <bds-badge
        class=${bem$c("indicator")}
        .disabled=${disabled}
        .variant=${indicatorVariant}
      ></bds-badge>
    `;
    }
    onTooltipNode(node) {
        this.updateComplete.then(() => {
            if (this.hitAreaElement && node) {
                node.setTargetHitAreaNode(this.hitAreaElement);
            }
        });
    }
    render() {
        const hasInternalTooltip = !!this.assistLabel && !this.hasTooltipTargetAncestorContext;
        const block = this.renderBlock({
            hasInternalTooltip,
            modifiers: {
                icon: true
            },
            props: {
                assistLabel: this.assistLabel
            }
        });
        if (hasInternalTooltip) {
            return x `
        <bds-tooltip
          .placement=${this.tooltipPlacement}
          ${n$3(this.onTooltipNode)}
        >
          ${block}
          <div slot="content" aria-hidden="true">${this.assistLabel}</div>
        </bds-tooltip>
      `;
        }
        return block;
    }
}
__decorate$f([
    n$6({ type: String, attribute: "icon" })
], IconButton.prototype, "icon", void 0);
__decorate$f([
    n$6({ type: Boolean })
], IconButton.prototype, "indicator", void 0);
__decorate$f([
    n$6({ type: String, attribute: "indicator-variant" })
], IconButton.prototype, "indicatorVariant", void 0);
__decorate$f([
    n$6({ type: String, attribute: "tooltip-placement" })
], IconButton.prototype, "tooltipPlacement", void 0);
__decorate$f([
    n$6({ type: String, attribute: "assist-label" })
], IconButton.prototype, "assistLabel", void 0);

const styles$h = i$9 `
  .button-group {
    display: flex;
    justify-content: stretch;
  }

  .button-group__area {
    display: flex;
    gap: inherit;
  }

  .button-group__area--start {
    flex: 1;
    min-width: 0;
  }

  .button-group__area--end {
    flex-direction: row;
    align-items: stretch;
  }

  .button-group--inline .button-group__area--start {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    max-width: max-content;
  }

  .button-group--stack .button-group__area--start {
    flex-direction: column;
    align-items: stretch;
  }

  .button-group--gap-none {
    gap: calc(var(--bds--dimension--space) / 2);
  }

  .button-group--gap-x-small {
    gap: calc(var(--bds--dimension--space) * 3);
  }

  .button-group--gap-small {
    gap: calc(var(--bds--dimension--space) * 4);
  }

  .button-group--gap-medium {
    gap: calc(var(--bds--dimension--space) * 5);
  }

  .button-group--gap-none .button-group__area--start {
    align-items: stretch;
    flex-wrap: nowrap;
  }
`;

var __decorate$e = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const LAYOUTS = ["inline", "stack"];
const GAPS = ["none", "x-small", "small", "medium"];
const DEFAULTS$3 = {
    layout: "inline",
    gap: "small"
};
const bem$a = createBem("button-group");
class ButtonGroup extends BaseMixin(s$8) {
    static { this.tagName = "bds-button-group"; }
    static { this.styles = [super.styles, styles$h]; }
    constructor() {
        super();
        this.hasSlottedEnd = false;
        this.endSlotController = createSlotController(this, () => {
            this.hasSlottedEnd = !!this.endSlotController.getSlottedElements().length;
        }, {
            name: "end"
        });
        createCompoundLayoutProviderController(this);
    }
    render() {
        const { layout, gap, hasSlottedEnd } = this;
        return x `
      <div
        class=${bem$a({
            [layout]: true,
            [`gap-${gap}`]: true
        })}
      >
        <slot class=${bem$a("area", { start: true })}></slot>
        ${hasSlottedEnd
            ? x ` <slot class=${bem$a("area", { end: true })} name="end"></slot> `
            : A$1}
      </div>
    `;
    }
}
__decorate$e([
    n$6({ type: String }),
    transform(createNormalizer(LAYOUTS, DEFAULTS$3.layout))
], ButtonGroup.prototype, "layout", void 0);
__decorate$e([
    n$6({ type: String }),
    transform(createNormalizer(GAPS, DEFAULTS$3.gap))
], ButtonGroup.prototype, "gap", void 0);
__decorate$e([
    t$2()
], ButtonGroup.prototype, "hasSlottedEnd", void 0);

const LOZENGE_VARIANTS = [
    "neutral",
    "accent",
    "guidance",
    "negative",
    "warning",
    "notation",
    "positive"
];
const DEFAULTS$2 = {
    variant: "neutral"
};
const getVariant$1 = createNormalizer(LOZENGE_VARIANTS, DEFAULTS$2.variant);

const styles$g = i$9 `
  :host {
    display: inline-flex;
    vertical-align: middle;
  }

  .lozenge {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-block: var(--bds--dimension--space);
    padding-inline: calc(var(--bds--dimension--space) * 2);
    border-radius: var(--bds--border--corner--medium);
    transition-property: background-color, color;
    transition-duration: 80ms;
    transition-timing-function: ease-in-out;
  }

  /* Variants */
  .lozenge--color-neutral:not(.lozenge--disabled) {
    background: var(--bds--color--background--neutral--tone);
    color: var(--bds--color--content--neutral--high);
  }

  .lozenge--color-accent:not(.lozenge--disabled) {
    background: var(--bds--color--background--accent--tone);
    color: var(--bds--color--content--accent--low);
  }

  .lozenge--color-guidance:not(.lozenge--disabled) {
    background: var(--bds--color--background--guidance--tone);
    color: var(--bds--color--content--guidance--low);
  }

  .lozenge--color-negative:not(.lozenge--disabled) {
    background: var(--bds--color--background--negative--tone);
    color: var(--bds--color--content--negative--low);
  }

  .lozenge--color-warning:not(.lozenge--disabled) {
    background: var(--bds--color--background--warning--tone);
    color: var(--bds--color--content--warning--low);
  }

  .lozenge--color-notation:not(.lozenge--disabled) {
    background: var(--bds--color--background--notation--tone);
    color: var(--bds--color--content--notation--low);
  }

  .lozenge--color-positive:not(.lozenge--disabled) {
    background: var(--bds--color--background--positive--tone);
    color: var(--bds--color--content--positive--low);
  }

  /* Disabled */
  .lozenge--disabled {
    background: var(--bds--color--background--disabled);
    color: var(--bds--color--content--disabled);
    cursor: not-allowed;
  }
`;

var __decorate$d = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Lozenge extends BaseMixin(s$8) {
    static { this.tagName = "bds-lozenge"; }
    static { this.styles = [super.styles, styles$g]; }
    render() {
        const { variant, disabled } = this;
        return x `
      <div
        class=${concatClasses(bem$f("lozenge", { [`color-${variant}`]: true, disabled }), typeDetail({ size: "x-small" }))}
        role="status"
      >
        <slot>Label</slot>
      </div>
    `;
    }
}
__decorate$d([
    n$6({ type: String }),
    transform(getVariant$1)
], Lozenge.prototype, "variant", void 0);
__decorate$d([
    n$6({ type: Boolean }),
    inherit({ context: disabledContext, consume: true })
], Lozenge.prototype, "disabled", void 0);

/**
 * These are not in the core package because the shared context is only between the components
 * within this package.
 */
const showDividerContext = n$7("BDS_MENU_SHOW_DIVIDER");
const sizeContext = n$7("BDS_MENU_SIZE");
const depthContext = n$7("BDS_MENU_DEPTH");

const VARIANTS = ["regular", "negative"];
const SIZES$2 = ["small", "medium"];
const MENU_ITEM_TYPES = ["submit", "reset"];
const DEFAULTS$1 = {
    variant: "regular",
    size: "small"
};

const getSize$2 = createScaleNormalizer(SIZES$2, DEFAULTS$1.size);
const getVariant = createNormalizer(VARIANTS, DEFAULTS$1.variant);
const getMenuItemType = createNormalizer(MENU_ITEM_TYPES);

const styles$f = i$9 `
  :host {
    display: contents;
  }

  .menu {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
`;

var __decorate$c = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Menu extends BaseMixin(s$8) {
    static { this.tagName = "bds-menu"; }
    static { this.styles = [super.styles, styles$f]; }
    constructor() {
        super();
        // Reset depth back to 0 and provide it for descendants
        new i$4(this, {
            context: depthContext,
            initialValue: 0
        });
        // Set divider property if this element has a popover ancestor
        new s$4(this, {
            context: hasPopoverAncestorContext,
            callback: (hasPopoverAncestor) => {
                this.showDivider = hasPopoverAncestor;
            },
            subscribe: true
        });
    }
    render() {
        return x `
      <div class="menu" role="tree">
        <slot></slot>
      </div>
    `;
    }
}
__decorate$c([
    n$6({ type: String }),
    transform(getSize$2),
    inherit({ context: sizeContext, provide: true })
], Menu.prototype, "size", void 0);
__decorate$c([
    n$6({ type: Boolean, attribute: "show-divider" }),
    inherit({ context: showDividerContext, provide: true })
], Menu.prototype, "showDivider", void 0);

const styles$e = i$9 `
  :host {
    display: contents;
  }

  .menu-section {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .menu-section__canvas {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-block: calc(var(--bds--dimension--space) * 2);
    padding-inline: calc(var(--bds--dimension--space) * 5);
  }

  .menu-section__content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-shrink: 0;
  }

  .menu-section__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: calc(var(--bds--dimension--space) * 4);
    padding-block: var(--bds--dimension--space);
  }

  .menu-section__body {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: stretch;
  }

  .menu-section__label {
    flex: 1;
    min-inline-size: 0;
    padding-block: var(--bds--dimension--space);
    color: var(--bds--color--content--neutral--low);
    user-select: none;
  }

  .menu-section__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: calc(var(--bds--dimension--space) * 3);
  }

  .menu-section--fill {
    min-block-size: 0;
  }

  .menu-section--fill .menu-section__canvas {
    overflow-y: auto;
    overscroll-behavior-y: contain;
  }

  :host(:not(:last-of-type):not(:only-of-type))
    .menu-section--show-divider::after {
    position: absolute;
    inset-inline-start: calc(var(--bds--dimension--space) * 5);
    inset-inline-end: calc(var(--bds--dimension--space) * 5);
    inset-block-end: 0;
    content: " ";
    block-size: var(--bds--border--stroke--thin);
    background-color: var(--bds--color--border--neutral--low);
  }

  /**
   * TODO: This is temporary and should be set up with context instead.
   * It should also only affect the internal container, not the entire layout.
   */
  ::slotted(bds-text-field),
  ::slotted(bds-search-field) {
    margin-inline: calc(var(--bds--dimension--space) * -3);
  }
`;

var __decorate$b = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const bem$9 = createBem("menu-section");
class MenuSection extends BaseMixin(s$8) {
    static { this.tagName = "bds-menu-section"; }
    static { this.styles = [super.styles, styles$e]; }
    /**
     * Resolves a promise with the canvas node.
     * The canvas node represents the scrollable element.
     *
     * **NB** The use-case for exposing this is for advanced list rendering, e.g. virtualization.
     */
    async getCanvasNode() {
        await this.updateComplete;
        return this.shadowRoot.getElementById("canvas");
    }
    /**
     * Resolves a promise with the canvas node.
     * The content node represents the container of slotted elements.
     *
     * **NB** The use-case for exposing this is for advanced list rendering, e.g. virtualization.
     */
    async getContentNode() {
        await this.updateComplete;
        // Return the 'body' element as this is where the actual slotted content lives
        return this.shadowRoot.getElementById("body");
    }
    render() {
        const { label, size, fill, showDivider } = this;
        return x `
      <div class="${bem$9({ [`size-${size}`]: true, fill, showDivider })}">
        <div class=${bem$9("canvas")} id="canvas">
          <div class=${bem$9("content")}>
            ${label
            ? x `
                  <div class=${bem$9("header")}>
                    <label
                      class=${concatClasses(bem$9("label"), typeDetail({ size }))}
                    >
                      ${label}
                    </label>
                    <div class=${bem$9("actions")}>
                      <slot name="action"></slot>
                    </div>
                  </div>
                `
            : A$1}
            <div
              class=${bem$9("body")}
              role="group"
              aria-labelledby=${label ? "label" : A$1}
              id="body"
            >
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
    }
}
__decorate$b([
    n$6({ type: String })
], MenuSection.prototype, "label", void 0);
__decorate$b([
    n$6({ type: String }),
    transform(getSize$2),
    inherit({ context: sizeContext, provide: true, consume: true })
], MenuSection.prototype, "size", void 0);
__decorate$b([
    n$6({ type: Boolean })
], MenuSection.prototype, "fill", void 0);
__decorate$b([
    t$2(),
    inherit({ context: showDividerContext, consume: true })
], MenuSection.prototype, "showDivider", void 0);

const styles$d = i$9 `
  /**
   * Active/Context open: regular
   */
  :is(.menu-button-item--active, .menu-button-item--context-open):not(
      .menu-item--disabled,
      .menu-item--color-negative
    )
    .menu-item__hit-area {
    background-color: var(--bds--color--background--accent--tone) !important;
  }

  :is(.menu-button-item--active, .menu-button-item--context-open):not(
      .menu-item--disabled,
      .menu-item--color-negative
    ) {
    color: var(--bds--color--content--accent--low);
  }

  /**
   * Active/Context open: negative
   */
  :is(.menu-button-item--active, .menu-button-item--context-open):not(
      .menu-item--disabled,
      .menu-item--color-regular
    )
    .menu-item__hit-area {
    background-color: var(--bds--color--background--negative--tone) !important;
  }

  :is(.menu-button-item--active, .menu-button-item--context-open):not(
      .menu-item--disabled,
      .menu-item--color-regular
    ) {
    color: var(--bds--color--content--negative--low);
  }
`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n$2="important",i=" !"+n$2,o$2=e$5(class extends i$5{constructor(t){if(super(t),t.type!==t$5.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(r)),this.render(r);for(const t of this.ut)null==r[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ut.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n$2:""):s[t]=e;}}return w}});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=(i,t)=>{const e=i._$AN;if(void 0===e)return !1;for(const i of e)i._$AO?.(t,!1),s(i,t);return !0},o$1=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c$1(t);}};function h(i){void 0!==this._$AN?(o$1(this),this._$AM=i,r(this)):this._$AM=i;}function n$1(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],!1),o$1(r[i]);else null!=r&&(s(r,!1),o$1(r));else s(this,i);}const c$1=i=>{i.type==t$5.CHILD&&(i._$AP??=n$1,i._$AQ??=h);};class f extends i$5{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s(this,i),o$1(this));}setValue(t){if(f$2(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

const o=new WeakMap,n=e$5(class extends f{render(i){return T}update(i,[s]){const e=s!==this.G;return e&&void 0!==this.G&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=s,this.ct=i.options?.host,this.ot(this.lt=i.element)),T}ot(t){if("function"==typeof this.G){const i=this.ct??globalThis;let s=o.get(i);void 0===s&&(s=new WeakMap,o.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ct,t);}else this.G.value=t;}get rt(){return "function"==typeof this.G?o.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0);}reconnected(){this.ot(this.lt);}});

const INDENT_SPACE_MULTIPLIER = 6;
/**
 * Resolve CSS styles based on menu item depth
 */
const getDepthStyles = ({ depth, depthOffset }) => {
    const resolvedDepth = Math.max(0, (Number.isFinite(depth) ? depth : 0) + (depthOffset ?? 0));
    if (resolvedDepth) {
        return {
            paddingInlineStart: `calc(var(--bds--dimension--space) * ${resolvedDepth * INDENT_SPACE_MULTIPLIER})`
        };
    }
    return {};
};

const styles$c = i$9 `
  :host {
    display: inline-flex;
    vertical-align: top;
    max-inline-size: 100%;
    min-inline-size: 0;
  }

  /**
   * Block
   */
  .menu-item {
    display: block;
    position: relative;
    z-index: 0;
    inline-size: 100%;
    user-select: none;
    cursor: pointer;
    transition-property: color;
    transition-duration: 80ms;
    transition-timing-function: ease-in-out;
  }

  .menu-item:not(.menu-item--disabled):is(:hover, :active, :focus-visible)
    .menu-item__label {
    text-decoration: underline;
  }

  /**
   * Element: hit-area
   *
   * Represents background fill / hit-area / focus ring
   * We detach this from the box model so that we can 'expand' the hit area outside
   * of the actual layout. This means we get both alignment, and 'ghost padding'.
   */
  .menu-item__hit-area {
    position: absolute;
    z-index: 0;
    inset: 0;
    border-radius: var(--bds--border--corner--medium);
    transition-property: background-color;
    transition-duration: inherit;
    transition-timing-function: inherit;
  }

  .menu-item:not(.menu-item--disabled):focus-visible .menu-item__hit-area {
    outline-width: var(--bds--border--stroke--extra-light);
    outline-color: var(--bds--color--background--inverse--noon);
    outline-style: solid;
  }

  /**
   * Body
   */
  .menu-item__body {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
    gap: calc(var(--bds--dimension--space) * 2);
    overflow: hidden;
  }

  /**
   * Label
   */
  .menu-item__label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /**
   * Icon start  //.menu-item__icon--start {}
   */

  /**
   * Icon end
   */
  :not(.menu-item__status-end) + .menu-item__icon--end {
    margin-inline-start: auto;
  }

  /**
   * Slots
   */
  slot {
    pointer-events: none;
  }

  :not(.menu-item--disabled)
    *
    :is(.menu-item__status-start, .menu-item__status-end) {
    color: var(--bds--color--content--neutral--low);
  }

  .menu-item__status-start,
  .menu-item__status-end {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
    gap: calc(var(--bds--dimension--space) * 2);
  }

  /**
   * Slot: status-end
   */
  .menu-item__status-end {
    margin-inline-start: auto;
  }

  /**
   * Disabled
   */
  .menu-item--disabled {
    cursor: not-allowed;
  }

  .menu-item--disabled,
  .menu-item--disabled:is(:hover, :active, :visited, :focus-visible) {
    color: var(--bds--color--content--disabled);
  }

  /**
   * Variant: regular
   */
  .menu-item--color-regular:not(.menu-item--disabled):is(:hover, :focus-visible)
    .menu-item__hit-area {
    background-color: var(--bds--color--background--neutral--tone);
  }

  .menu-item--color-regular:not(.menu-item--disabled):active
    .menu-item__hit-area {
    background-color: var(--bds--color--background--neutral--tone--strong);
  }

  .menu-item--color-regular:not(.menu-item--disabled) {
    color: var(--bds--color--content--neutral--high);
  }

  /**
   * Variant: negative
   */
  .menu-item--color-negative:not(.menu-item--disabled):is(
      :hover,
      :focus-visible
    )
    .menu-item__hit-area {
    background-color: var(--bds--color--background--negative--tone);
  }

  .menu-item--color-negative:not(.menu-item--disabled):active
    .menu-item__hit-area {
    background-color: var(--bds--color--background--negative--tone--strong);
  }

  .menu-item--color-negative:not(.menu-item--disabled) {
    color: var(--bds--color--content--negative--low);
  }

  /**
   * Size: small
   */
  .menu-item--size-small .menu-item__hit-area {
    inset-inline: calc(var(--bds--dimension--space) * -3);
  }

  .menu-item--size-small .menu-item__body {
    padding-block: calc(var(--bds--dimension--space) * 1.5);
  }

  /**
   * Size: medium
   */
  .menu-item--size-medium .menu-item__hit-area {
    inset-inline: calc(var(--bds--dimension--space) * -3);
  }

  .menu-item--size-medium .menu-item__body {
    padding-block: calc(var(--bds--dimension--space) * 2);
  }
`;

var __decorate$a = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const bem$8 = createBem("menu-item");
const MenuItemMixin = (superClass) => {
    class MenuItemMixin extends superClass {
        constructor() {
            super(...arguments);
            this.depthOffset = 0;
            this.statusStartSlotController = createSlotController(this, () => {
                this.hasStatusStartSlotContent = !!(this.statusStartSlotController.getSlottedNodes()?.length > 0);
            }, { name: "status-start" });
            this.statusEndSlotController = createSlotController(this, () => {
                this.hasStatusEndSlotContent = !!(this.statusEndSlotController.getSlottedNodes()?.length > 0);
            }, { name: "status-end" });
        }
        static { this.styles = [superClass.styles ?? [], styles$c]; }
        static get scopedElements() {
            return {
                "bds-icon": Icon
            };
        }
        onHitAreaNode(node) {
            this.hitAreaElement = node;
        }
        /**
         * Handle the click event.
         * Prevent clicks on disabled elements from being dispatched.
         */
        onClick(event) {
            if (this.disabled) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
        }
        /**
         * Returns the menu-item CSS class names for the wrapper element
         */
        getWrapperClasses() {
            const { variant, size, disabled } = this;
            return concatClasses(bem$8({
                [`color-${variant}`]: true,
                [`size-${size}`]: true,
                disabled
            }), typeLabel({ size }));
        }
        /**
         * Renders body container element
         */
        renderBody() {
            const { ancestorDepth, depthOffset } = this;
            return x `
        <div
          class=${bem$8("body")}
          style=${o$2(getDepthStyles({ depth: ancestorDepth, depthOffset }))}
        >
          ${this.renderContent()}
        </div>
        <div class=${bem$8("hit-area")} ${n(this.onHitAreaNode)}></div>
      `;
        }
        /**
         * This method must be overridden by the component using the mixin
         * It should return the rendered content for the component
         */
        renderContent() {
            throw new Error("The 'renderContent' method must be overridden by the component using this mixin.");
        }
        /**
         * Renders label slot
         */
        renderLabel() {
            return x `
        <span class=${bem$8("label")}>
          <slot>—</slot>
        </span>
      `;
        }
        /**
         * Renders an icon and optional modifier for the BEM class
         */
        renderIcon(iconName, modifierClass) {
            const { size } = this;
            return x `
        <bds-icon
          class=${bem$8("icon", { [modifierClass || ""]: true })}
          .name=${iconName}
          .size=${size}
        ></bds-icon>
      `;
        }
        /**
         * Renders status-start slot
         */
        renderStatusStart() {
            const { size } = this;
            return x `
        <span class=${concatClasses(bem$8("status-start"), typeBody({ size }))}>
          <slot name="status-start"></slot>
        </span>
      `;
        }
        /**
         * Renders status-end slot
         */
        renderStatusEnd() {
            const { size } = this;
            return x `
        <span class=${concatClasses(bem$8("status-end"), typeBody({ size }))}>
          <slot name="status-end"></slot>
        </span>
      `;
        }
    }
    __decorate$a([
        n$6({ type: String }),
        transform(getVariant)
    ], MenuItemMixin.prototype, "variant", void 0);
    __decorate$a([
        n$6({ type: String }),
        transform(getSize$2)
    ], MenuItemMixin.prototype, "size", void 0);
    __decorate$a([
        n$6({ type: Boolean }),
        inherit({ context: disabledContext, provide: true, consume: true })
    ], MenuItemMixin.prototype, "disabled", void 0);
    __decorate$a([
        n$6({ type: String, attribute: "icon-start" })
    ], MenuItemMixin.prototype, "iconStart", void 0);
    __decorate$a([
        n$6({ type: String, attribute: "icon-end" })
    ], MenuItemMixin.prototype, "iconEnd", void 0);
    __decorate$a([
        inherit({ context: depthContext, consume: true })
    ], MenuItemMixin.prototype, "ancestorDepth", void 0);
    __decorate$a([
        n$6({ attribute: false })
    ], MenuItemMixin.prototype, "depthOffset", void 0);
    __decorate$a([
        t$2()
    ], MenuItemMixin.prototype, "hasStatusStartSlotContent", void 0);
    __decorate$a([
        t$2()
    ], MenuItemMixin.prototype, "hasStatusEndSlotContent", void 0);
    return MenuItemMixin;
};

var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const localBem = createBem("menu-button-item");
class MenuButtonItem extends MenuItemMixin(ContextOpenMixin(BaseMixin(s$8))) {
    constructor() {
        super(...arguments);
        this.internals = this.attachInternals?.();
    }
    static { this.tagName = "bds-menu-button-item"; }
    static { this.styles = [super.styles, styles$d]; }
    static get scopedElements() {
        return {
            "bds-icon": Icon
        };
    }
    static { this.eventCallbackMap = {
        onClick: "click"
    }; }
    static { this.formAssociated = true; }
    /**
     * Dispatches relevant form events.
     * This will only happen if the original event was not cancelled.
     */
    async dispatchFormEvents(originalEvent) {
        if (this.blockElement instanceof HTMLButtonElement &&
            this.internals?.form &&
            (this.type === "submit" || this.type === "reset")) {
            const bubbleHandler = (bubbledEvent) => {
                if (bubbledEvent === originalEvent && !originalEvent.defaultPrevented) {
                    if (this.type === "submit") {
                        this.internals?.form?.dispatchEvent(new SubmitEvent("submit", {
                            cancelable: true,
                            submitter: this
                        }));
                    }
                    else if (this.type === "reset") {
                        this.internals?.form?.reset();
                    }
                }
            };
            // Catch the original event whilst it is bubbling
            this.internals.form.addEventListener(originalEvent.type, bubbleHandler, {
                once: true
            });
            // Microtask to remove the handler, to prevent memory leaks
            await Promise.resolve();
            this.internals?.form?.removeEventListener(originalEvent.type, bubbleHandler);
        }
    }
    /**
     * Dispatches menubuttonitemclick, so we can close a context menu automatically.
     *
     * NB: This would previously only dispatch the menubuttonitemclick event if the original event
     * was not cancelled. However, as it's common to cancel the event of a link being clicked,
     * it now always dispatches this event. If this is an issue, it can be addressed later.
     */
    async dispatchMenuButtonClick(_originalEvent) {
        const event = new Event("menubuttonitemclick", {
            bubbles: true,
            cancelable: true
        });
        this.dispatchEvent(event);
    }
    /**
     * Handle the click event.
     * Prevent clicks on disabled elements from being dispatched.
     */
    onClick(event) {
        super.onClick(event);
        if (!this.disabled) {
            this.dispatchFormEvents(event);
            this.dispatchMenuButtonClick(event);
        }
    }
    /**
     * Renders link (open-in-new) icon
     */
    renderLinkIcon(size) {
        return x `
      <bds-icon
        class=${localBem("icon", { inline: true })}
        .name=${"open-in-new"}
        .size=${size === "small" ? "x-small" : "small"}
      ></bds-icon>
    `;
    }
    /**
     * Renders content into the menu-item
     */
    renderContent() {
        const { size, iconStart, iconEnd, href, target } = this;
        return x `
      ${iconStart && this.renderIcon(iconStart, "start")} ${this.renderLabel()}
      ${this.hasStatusStartSlotContent ? this.renderStatusStart() : A$1}
      ${href && target === "_blank" ? this.renderLinkIcon(size) : A$1}
      ${this.hasStatusEndSlotContent ? this.renderStatusEnd() : A$1}
      ${iconEnd && this.renderIcon(iconEnd, "end")}
    `;
    }
    /**
     * Renders button or anchor element
     */
    renderBlock() {
        const { active, disabled, type, href, rel, target, download, contextOpen } = this;
        const classes = concatClasses(this.getWrapperClasses(), localBem({ active, contextOpen }));
        if (href) {
            return x `
        <a
          class=${classes}
          href=${href}
          rel=${rel || A$1}
          target=${target || A$1}
          download=${download !== undefined ? download : A$1}
          aria-disabled=${disabled ? "true" : A$1}
          tabindex=${disabled ? -1 : A$1}
          @click=${this.onClick}
        >
          ${this.renderBody()}
        </a>
      `;
        }
        return x `
      <button
        class=${classes}
        aria-disabled=${disabled ? "true" : A$1}
        tabindex=${disabled ? -1 : A$1}
        @click=${this.onClick}
        type=${type || A$1}
      >
        ${this.renderBody()}
      </button>
    `;
    }
    render() {
        return x `${this.renderBlock()}`;
    }
}
__decorate$9([
    n$6({ type: Boolean })
], MenuButtonItem.prototype, "active", void 0);
__decorate$9([
    n$6({ type: String }),
    transform(getMenuItemType)
], MenuButtonItem.prototype, "type", void 0);
__decorate$9([
    n$6({ type: String })
], MenuButtonItem.prototype, "href", void 0);
__decorate$9([
    n$6({ type: String })
], MenuButtonItem.prototype, "rel", void 0);
__decorate$9([
    n$6({ type: String })
], MenuButtonItem.prototype, "target", void 0);
__decorate$9([
    n$6({ type: String })
], MenuButtonItem.prototype, "download", void 0);
__decorate$9([
    i$2(".menu-item")
], MenuButtonItem.prototype, "blockElement", void 0);

const styles$b = i$9 ``;

class MenuOptionItem extends BaseMixin(s$8) {
    static { this.tagName = "bds-menu-option-item"; }
    static { this.styles = [super.styles, styles$b]; }
    render() {
        return x `<slot>Work in progress...</slot>`;
    }
}

const styles$a = i$9 ``;

class MenuToggleItem extends BaseMixin(s$8) {
    static { this.tagName = "bds-menu-toggle-item"; }
    static { this.styles = [super.styles, styles$a]; }
    render() {
        return x `<slot>Work in progress...</slot>`;
    }
}

const styles$9 = i$9 `
  .menu-info-item,
  .menu-info-item--size-small {
    padding-block: calc(var(--bds--dimension--space) * 1.5);
  }

  .menu-info-item--size-medium {
    padding-block: calc(var(--bds--dimension--space) * 2);
  }
`;

var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const bem$7 = createBem("menu-info-item");
class MenuInfoItem extends BaseMixin(s$8) {
    static { this.tagName = "bds-menu-info-item"; }
    static { this.styles = [super.styles, styles$9]; }
    render() {
        const { size, ancestorDepth } = this;
        return x `
      <div
        class=${concatClasses(bem$7({ [`size-${size}`]: true }), typeBody({ size, sizeOffset: -1 }))}
        style=${o$2(getDepthStyles({ depth: ancestorDepth }))}
      >
        <slot></slot>
      </div>
    `;
    }
}
__decorate$8([
    n$6({ type: String }),
    transform(getSize$2),
    inherit({ context: sizeContext, consume: true })
], MenuInfoItem.prototype, "size", void 0);
__decorate$8([
    inherit({ context: depthContext, consume: true })
], MenuInfoItem.prototype, "ancestorDepth", void 0);

const styles$8 = i$9 `
  .menu-item-group__label {
    display: block;
  }

  .menu-item-group__body {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .menu-item-group:not(.menu-item-group--open) .menu-item-group__body {
    display: none;
  }
`;

var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const bem$6 = createBem("menu-item-group");
const getDepth = (ancestorDepth) => (Number.isFinite(ancestorDepth) ? ancestorDepth : 0) + 1;
class MenuItemGroup extends BaseMixin(s$8) {
    static { this.tagName = "bds-menu-item-group"; }
    static { this.styles = [super.styles, styles$8]; }
    static get scopedElements() {
        return {
            "bds-menu-button-item": MenuButtonItem
        };
    }
    constructor() {
        super();
        this.depth = getDepth(this.ancestorDepth);
        createEffectController(this, () => {
            this.depth = getDepth(this.ancestorDepth);
        }, ["ancestorDepth"]);
    }
    /**
     * Dispatches a cancellable 'close' or 'open' event to allow consumer
     * to use as a controlled component. E.g. to lazy load items, or defer rendering.
     */
    toggle() {
        const statusEvent = new Event(this.open ? "close" : "open", {
            bubbles: false,
            cancelable: true
        });
        this.dispatchEvent(statusEvent);
        if (!statusEvent.defaultPrevented) {
            this.open = !this.open;
        }
    }
    onLabelClick(event) {
        /**
         * Prevent the menubuttonitemclick from bubbling, so that it does not close
         * any ContextMenu ancestors when toggling the open state
         */
        event.stopPropagation();
        this.toggle();
    }
    render() {
        const { label, open } = this;
        return x `
      <div
        class=${bem$6({ open })}
        role="treeitem"
        aria-expanded=${this.open ? "true" : "false"}
        aria-selected="false"
      >
        <bds-menu-button-item
          class=${bem$6("label")}
          .iconEnd=${open ? "expand-less" : "expand-more"}
          .depthOffset=${-1}
          @menubuttonitemclick=${this.onLabelClick}
        >
          ${label ?? "–"}
        </bds-menu-button-item>
        <div class=${bem$6("body")} role="group">
          <slot></slot>
        </div>
      </div>
    `;
    }
}
__decorate$7([
    n$6({ type: String })
], MenuItemGroup.prototype, "label", void 0);
__decorate$7([
    n$6({ type: Boolean })
], MenuItemGroup.prototype, "open", void 0);
__decorate$7([
    n$6({ type: String }),
    transform(getSize$2),
    inherit({ context: sizeContext, provide: true, consume: true })
], MenuItemGroup.prototype, "size", void 0);
__decorate$7([
    inherit({ context: depthContext, consume: true })
], MenuItemGroup.prototype, "ancestorDepth", void 0);
__decorate$7([
    inherit({ context: depthContext, provide: true })
], MenuItemGroup.prototype, "depth", void 0);

const SIZES$1 = ["small", "medium"];
const TYPES = [
    "text",
    "email",
    "url",
    "tel",
    "search",
    "password"
];
const DEFAULTS = {
    size: "small",
    type: "text"
};

const getSize$1 = createScaleNormalizer(SIZES$1, DEFAULTS.size);
const getType = createNormalizer(TYPES, DEFAULTS.type);
const trimProp = (str) => str?.trim();

const styles$7 = i$9 `
  :host {
    display: block;
  }

  /* Element: label */
  .text-field__label-wrapper {
    display: flex;
    justify-content: space-between;
    gap: calc(var(--bds--dimension--space) * 4);
  }

  .text-field__label {
    display: flex;
    align-items: flex-start;
  }

  .text-field__required-icon {
    align-items: center;
    align-self: stretch;
  }

  .text-field__counter {
    margin-inline-start: auto;
    text-wrap: nowrap;
  }

  .text-field__end-icon {
    flex-shrink: 0;
  }

  /* Element: input element */
  .text-field__input {
    width: 100%;
    text-overflow: ellipsis;
    flex-shrink: 1;
  }

  .text-field__input::placeholder {
    color: var(--bds--color--content--neutral--low);
  }

  /* Element: input container */
  .text-field__container {
    display: flex;
    align-self: stretch;
    align-items: center;
    gap: calc(var(--bds--dimension--space) * 2);
    padding-inline: calc(var(--bds--dimension--space) * 3);
    border-radius: var(--bds--border--corner--medium);
    background: var(--bds--color--background--neutral--tone);
    color: var(--bds--color--content--neutral--high);
  }

  .text-field__container:hover {
    box-shadow: inset 0 0 0 var(--bds--border--stroke--thin)
      var(--bds--color--content--accent--low);
  }

  :not(.text-field--invalid) .text-field__container:focus-within {
    outline: none;
    box-shadow: inset 0 0 0 var(--bds--border--stroke--extra-light)
      var(--bds--color--content--accent--low);
    background: var(--bds--color--background--accent--tone);
  }

  /*  Modifiers: disabled, readonly */
  :is(.text-field--disabled, .text-field--readonly)
    :is(
      .text-field__container,
      .text-field__container:hover,
      .text-field__container:focus-within
    ) {
    box-shadow: none;
    cursor: not-allowed;
    background: var(--bds--color--background--disabled);
    color: var(--bds--color--content--disabled);
  }

  .text-field--disabled .text-field__input {
    cursor: not-allowed;
  }

  :is(.text-field--disabled, .text-field--readonly)
    .text-field__input::placeholder {
    color: var(--bds--color--content--disabled);
  }

  .text-field--readonly .text-field__container:focus-within {
    box-shadow: inset 0 0 0 var(--bds--border--stroke--extra-light)
      var(--bds--color--content--accent--low);
  }

  /* Modifier: invalid */
  .text-field--invalid .text-field__container {
    background: var(--bds--color--background--negative--tone);
  }

  .text-field--invalid .text-field__container:hover {
    box-shadow: inset 0 0 0 var(--bds--border--stroke--thin)
      var(--bds--color--border--negative--medium);
  }

  .text-field--invalid .text-field__container:focus-within {
    box-shadow: inset 0 0 0 var(--bds--border--stroke--extra-light)
      var(--bds--color--border--negative--medium);
  }

  .text-field--invalid .text-field__warning-icon {
    color: var(--bds--color--content--negative--low);
  }

  .text-field--invalid .text-field__help-text {
    color: var(--bds--color--content--negative--low);
  }

  /* Modifier: size */
  .text-field--size-small .text-field__label-wrapper {
    margin-block-end: var(--bds--dimension--space);
  }

  .text-field--size-medium .text-field__label-wrapper {
    margin-block-end: calc(var(--bds--dimension--space) * 2);
  }

  .text-field--size-small .text-field__help-text {
    margin-block-start: calc(var(--bds--dimension--space) * 1.5);
  }

  .text-field--size-medium .text-field__help-text {
    margin-block-start: calc(var(--bds--dimension--space) * 2.5);
  }

  .text-field--size-small .text-field__input {
    padding-block: calc(var(--bds--dimension--space) * 1.5);
  }

  .text-field--size-medium .text-field__input {
    padding-block: calc(var(--bds--dimension--space) * 2);
  }
`;

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const bem$5 = createBem("text-field");
/**
 * Base mixin for text field that renders field template with elements:
 * label, help text, icon
 * To define a component, subclass TextFieldMixin and override properties
 *
 */
const TextFieldMixin = (superClass) => {
    class TextFieldMixinClass extends superClass {
        constructor() {
            super(...arguments);
            this.value = "";
            this.assistLabel = "";
            this.helpTextSlotController = createSlotController(this, () => {
                this.hasSlottedHelpText = !!(this.helpTextSlotController.getSlottedNodes()?.length > 0);
            }, { name: "help-text" });
            this.errorTextSlotController = createSlotController(this, () => {
                this.hasSlottedErrorText = !!(this.errorTextSlotController.getSlottedNodes()?.length > 0);
            }, {
                name: "error-text"
            });
        }
        static { this.styles = [superClass.styles ?? [], styles$7]; }
        static get scopedElements() {
            return {
                "bds-icon": Icon
            };
        }
        /**
         * Determines whether to display required or invalid indicators
         * if the state is disabled or readonly as the users can not modify the values
         */
        get showInvalid() {
            return this.invalid && !this.disabled && !this.readonly;
        }
        get showRequired() {
            return this.required && !this.disabled && !this.readonly;
        }
        renderLabel() {
            if (!this.label) {
                return null;
            }
            return x `
        <label
          for="input"
          class=${concatClasses(bem$5("label"), typeLabel({ size: this.size }))}
        >
          ${this.label}
          ${this.showRequired
                ? x `
                <bds-icon
                  class=${bem$5("required-icon")}
                  name="asterisk"
                  aria-hidden="true"
                ></bds-icon>
              `
                : A$1}
        </label>
      `;
        }
        renderCounter() {
            if (!this.counter) {
                return null;
            }
            return x `
        <div
          id="counter"
          aria-live="polite"
          aria-label="${this.counter}"
          class=${concatClasses(bem$5("counter"), typeNumeric({ size: this.size }))}
        >
          ${this.counter}
        </div>
      `;
        }
        renderLabelWrapper() {
            const labelContent = this.renderLabel();
            const counterContent = this.renderCounter();
            if (labelContent || counterContent) {
                return x `
          <div class=${bem$5("label-wrapper")}>
            ${labelContent} ${counterContent}
          </div>
        `;
            }
            return null;
        }
        renderStartIcon() {
            if (this.icon) {
                return x `
          <bds-icon
            .name=${this.icon}
            .size=${this.size}
            aria-hidden="true"
          ></bds-icon>
        `;
            }
            return null;
        }
        renderEndIcon() {
            if (this.showInvalid) {
                return x `
          <bds-icon
            name="warning"
            class=${bem$5("warning-icon")}
            .size=${this.size}
            aria-hidden="true"
          ></bds-icon>
        `;
            }
            return null;
        }
        renderHelpText() {
            if (this.showInvalid && this.hasSlottedErrorText) {
                return x `<slot id="error-text-slot" name="error-text"></slot>`;
            }
            else if (this.hasSlottedHelpText) {
                return x `<slot id="help-text-slot" name="help-text"></slot>`;
            }
            return null;
        }
        focus() {
            this.inputEl?.focus();
        }
        onChange(e) {
            this.dispatchEvent(new Event("change", { ...e }));
        }
        handleInput(e) {
            this.value = e.target.value;
        }
        render() {
            const { disabled, type, placeholder, readonly, value, assistLabel } = this;
            const textFieldClasses = concatClasses(bem$5({
                [`size-${this.size}`]: true,
                invalid: this.showInvalid,
                disabled: disabled,
                readonly: readonly
            }));
            const startIcon = this.renderStartIcon();
            const endIcon = this.renderEndIcon();
            const helpText = this.renderHelpText();
            return x `
        <div class=${textFieldClasses}>
          ${this.renderLabelWrapper()}

          <div
            class=${concatClasses(bem$5("container"), typeBody({ size: this.size }))}
            @click=${() => {
                this.inputEl?.focus();
            }}
          >
            ${startIcon
                ? x ` <div class=${bem$5("start-icon")}>${startIcon}</div> `
                : A$1}
            <input
              class=${bem$5("input")}
              id="input"
              ?disabled=${disabled}
              type=${type || A$1}
              placeholder=${placeholder || A$1}
              ?readonly=${readonly}
              .value=${value || ""}
              aria-label=${assistLabel || this.label || placeholder || A$1}
              aria-describedby="help-text counter"
              aria-errormessage=${this.showInvalid
                ? "error-text-slot"
                : A$1}
              aria-required=${this.showRequired ? "true" : A$1}
              aria-invalid=${this.showInvalid ? "true" : A$1}
              @input=${this.handleInput}
              @change=${this.onChange}
            />
            ${endIcon
                ? x ` <div class=${bem$5("end-icon")}>${endIcon}</div> `
                : A$1}
          </div>

          ${helpText
                ? x `
                <div
                  id="help-text"
                  class=${concatClasses(bem$5("help-text"), typeBody({ size: this.size, sizeOffset: -1 }))}
                  aria-live="assertive"
                >
                  ${helpText}
                </div>
              `
                : A$1}
        </div>
      `;
        }
    }
    __decorate$6([
        n$6({ type: String }),
        transform(trimProp)
    ], TextFieldMixinClass.prototype, "counter", void 0);
    __decorate$6([
        n$6({ type: Boolean })
    ], TextFieldMixinClass.prototype, "disabled", void 0);
    __decorate$6([
        n$6({ type: Boolean })
    ], TextFieldMixinClass.prototype, "invalid", void 0);
    __decorate$6([
        n$6({ type: String }),
        transform(trimProp)
    ], TextFieldMixinClass.prototype, "label", void 0);
    __decorate$6([
        n$6({ type: String })
    ], TextFieldMixinClass.prototype, "placeholder", void 0);
    __decorate$6([
        n$6({ type: Boolean })
    ], TextFieldMixinClass.prototype, "required", void 0);
    __decorate$6([
        n$6({ type: Boolean })
    ], TextFieldMixinClass.prototype, "readonly", void 0);
    __decorate$6([
        n$6({ type: String }),
        transform(getSize$1)
    ], TextFieldMixinClass.prototype, "size", void 0);
    __decorate$6([
        n$6({ type: String, attribute: "icon" })
    ], TextFieldMixinClass.prototype, "icon", void 0);
    __decorate$6([
        n$6({ type: String }),
        transform(getType)
    ], TextFieldMixinClass.prototype, "type", void 0);
    __decorate$6([
        n$6({ type: String })
    ], TextFieldMixinClass.prototype, "value", void 0);
    __decorate$6([
        n$6({ type: String, attribute: "assist-label" })
    ], TextFieldMixinClass.prototype, "assistLabel", void 0);
    __decorate$6([
        i$2("#input")
    ], TextFieldMixinClass.prototype, "inputEl", void 0);
    __decorate$6([
        t$2()
    ], TextFieldMixinClass.prototype, "hasSlottedHelpText", void 0);
    __decorate$6([
        t$2()
    ], TextFieldMixinClass.prototype, "hasSlottedErrorText", void 0);
    return TextFieldMixinClass;
};

class TextField extends TextFieldMixin(BaseMixin(s$8)) {
    static { this.tagName = "bds-text-field"; }
}

const styles$6 = i$9 `
  /**
   * Hide native styling of the search field
  */
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .text-field__cancel-icon {
    opacity: 1;
    visibility: visible;

    transition-property: visibility, opacity;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
  }
  .text-field__cancel-icon--hidden {
    visibility: hidden;
    opacity: 0;
  }
`;

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const SEARCH_DEFAULTS = {
    required: false,
    type: "search",
    icon: "search",
    invalid: false
};
class SearchField extends TextFieldMixin(BaseMixin(s$8)) {
    static { this.tagName = "bds-search-field"; }
    static { this.styles = [super.styles, styles$6]; }
    static get scopedElements() {
        return {
            ...super.scopedElements,
            "bds-icon-button": IconButton,
            "bds-tooltip": Tooltip
        };
    }
    handleOnClear() {
        this.value = "";
        this.onChange();
        this.dispatchEvent(new Event("input", {
            bubbles: true,
            composed: false,
            cancelable: false
        }));
    }
    renderEndIcon() {
        const clearButtonEl = x `
      <bds-icon-button
        slot="target"
        icon="cancel-fill"
        variant="regular-subtle"
        class=${concatClasses(bem$5("cancel-icon", { ["hidden"]: !this.value }))}
        size="${getSize$5(this.size, -1)}"
        ?disabled=${this.disabled}
        @click=${this.handleOnClear}
        tabindex="-1"
        aria-hidden="true"
      >
      </bds-icon-button>
    `;
        const renderClearButtonInsideTooltip = (clearButtonTemplate, clearButtonText) => {
            return x `
        <bds-tooltip>
          ${clearButtonTemplate}
          <p slot="content">${clearButtonText}</p>
        </bds-tooltip>
      `;
        };
        return x `${this.clearButtonText
            ? renderClearButtonInsideTooltip(clearButtonEl, this.clearButtonText)
            : clearButtonEl}`;
    }
}
__decorate$5([
    n$6({ type: String, attribute: "clear-button-text" })
], SearchField.prototype, "clearButtonText", void 0);
__decorate$5([
    readOnly(SEARCH_DEFAULTS.required)
], SearchField.prototype, "required", void 0);
__decorate$5([
    readOnly(SEARCH_DEFAULTS.type)
], SearchField.prototype, "type", void 0);
__decorate$5([
    readOnly(SEARCH_DEFAULTS.icon)
], SearchField.prototype, "icon", void 0);
__decorate$5([
    readOnly(SEARCH_DEFAULTS.invalid)
], SearchField.prototype, "invalid", void 0);

const SIZES = ["x-small", "small", "medium"];

const styles$5 = i$9 `
  :host,
  :host > * {
    color: inherit;
  }

  slot {
    display: block;
  }

  :host(.bds-type--size-x-small) slot {
    max-inline-size: calc(var(--bds--type--scale--3--size) * 44);
  }

  :host(.bds-type--size-small) slot {
    max-inline-size: calc(var(--bds--type--scale--3h--size) * 44);
  }

  :host(.bds-type--size-medium) slot {
    max-inline-size: calc(var(--bds--type--scale--4--size) * 44);
  }

  :host(.bds-type--size-large) slot {
    max-inline-size: calc(var(--bds--type--scale--4h--size) * 44);
  }
`;
/**
 * **NB:**
 * These are root styles and not encapsulated to the shadow DOM of the component
 *
 * A lot of the size related properties are taken from the typography styles in
 * `@design-system-pt/core`, but there is no clean way of using them when these
 * elements are in the light DOM, so the sizes are copied and pasted where appropriate.
 */
const rootStyles = i$9 `
  .bds-type
    :where(
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hgroup,
      p,
      ul,
      ol,
      li,
      blockquote,
      figure,
      figcaption,
      pre
    ) {
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;
    outline: 0;
  }

  .bds-type :where(pre, code, kbd) {
    vertical-align: top; /* Prevents line-height from breaking when mixing fonts inline */
    font-family: var(--bds--type--face--monospace);
  }

  .bds-type hgroup :where(h1, h2, h3, h4, h5, h6):not(:last-child) {
    margin-block-end: 0;
  }

  /**
   * Lists
   */

  .bds-type :where(ol, ul) {
    position: relative;
    list-style: none;
    counter-reset: numbers;
  }

  .bds-type li {
    position: relative;
  }

  .bds-type li:before {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 100%;
    padding-inline-end: 0.5em;
    font-weight: bolder;
  }

  .bds-type ul li:before {
    content: "•";
  }

  .bds-type ol > li {
    counter-increment: numbers;
  }

  .bds-type ol > li:before {
    content: counter(numbers);
    font-feature-settings: var(--bds--type--feature--tabular);
  }

  .bds-type ol ol > li:before {
    content: counters(numbers, ".");
  }

  /**/

  /**
   * Blockquote
   */

  .bds-type blockquote {
    position: relative;
  }

  .bds-type blockquote > p:first-child {
    position: relative;
  }

  .bds-type blockquote > p:first-child:before {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 100%;
    padding-inline-end: 0.1em;
    content: open-quote;
  }

  .bds-type blockquote > p:last-child:after {
    margin-inline-start: -0.25em;
    padding-inline-start: 0.1em;
    content: close-quote;
  }

  /**/

  /**
   * Figure
   */

  .bds-type figcaption {
    font-style: italic;
  }

  .bds-type figcaption:before {
    content: "—";
    margin-inline-end: 0.4em;
  }

  /**/

  /**
   * Preformatted
   */

  .bds-type pre {
    white-space: pre-wrap;
    background-color: var(--bds--color--background--inset);
    border-radius: var(--bds--border--corner--small);
    outline: var(--bds--border--stroke--thin) solid
      var(--bds--color--border--neutral--low);
  }

  /**/

  /**
   * Link
   */

  .bds-type a {
    font-weight: var(--bds--type--weight--semi-bold);
    text-decoration: underline;
    color: inherit;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }

  .bds-type a:hover,
  .bds-type a:focus {
    color: var(--bds--color--content--accent--low);
  }

  .bds-type a:focus-visible {
    outline: var(--bds--border--stroke--extra-light) solid currentColor;
    outline-offset: 2px;
    border-radius: 1px;
  }

  .bds-type :where(h1, h2, h3, h4, h5, h6, blockquote > p, b, strong, time) a {
    font-weight: bolder;
  }

  /**/

  /**
   * Spans
   */

  .bds-type :where(b, strong, time) {
    font-weight: bolder;
  }

  .bds-type :where(em, i, dfn, cite) {
    font-style: italic;
  }

  .bds-type :where(sub, sup) {
    vertical-align: baseline;
    font-size: inherit;
  }

  .bds-type sub {
    font-feature-settings: var(--bds--type--feature--subscript);
  }

  .bds-type sup {
    font-feature-settings: var(--bds--type--feature--superscript);
  }

  .bds-type mark {
    background-color: mark;
    color: marktext;
  }

  .bds-type q::before {
    content: open-quote;
  }

  .bds-type q::after {
    content: close-quote;
  }

  .bds-type s {
    text-decoration: line-through;
    opacity: 0.47;
  }

  /**
   * NB: 'small' element should be avoided, but in case it is used,
   * prevent text from going smaller than our copy size and instead
   * use opacity to de-emphasize it.
   */
  .bds-type small {
    font-size: inherit;
    opacity: 0.47;
  }

  .bds-type :where(code, kbd) {
    background-color: var(--bds--color--background--inset);
    padding-inline: 0.2em;
    border-radius: var(--bds--border--corner--small);
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    outline: var(--bds--border--stroke--thin) solid
      var(--bds--color--border--neutral--low);
  }

  /**/

  /**
   * Modifier: size-x-small
   */

  /* Should mirror body-x-small */
  .bds-type--size-x-small,
  .bds-type--size-x-small > * {
    font-size: var(--bds--type--scale--3--size);
    line-height: var(--bds--type--scale--3--leading);
    letter-spacing: var(--bds--type--tracking--loose-2);
  }

  .bds-type--size-x-small
    :where(
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hgroup,
      p,
      ul,
      ol,
      blockquote,
      figure,
      figcaption,
      pre
    ):not(:last-child) {
    margin-block-end: calc(var(--bds--dimension--space) * 5);
  }

  /* Should mirror code-x-small */
  .bds-type--size-x-small :where(pre, code, kbd) {
    letter-spacing: var(--bds--type--tracking--loose-2) !important;
  }

  /* Should mirror heading-medium */
  .bds-type--size-x-small h1 {
    font-size: var(--bds--type--scale--8--size);
    line-height: var(--bds--type--scale--8--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  /* Should mirror heading-x-small */
  .bds-type--size-x-small h2 {
    font-size: var(--bds--type--scale--5--size);
    line-height: var(--bds--type--scale--5--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  /* Should mirror heading-2x-small */
  .bds-type--size-x-small h3 {
    font-size: var(--bds--type--scale--4h--size);
    line-height: var(--bds--type--scale--4h--leading);
    font-weight: var(--bds--type--weight--bold);
    letter-spacing: var(--bds--type--tracking--base);
  }

  /* Should mirror heading-3x-small */
  .bds-type--size-x-small h4 {
    font-size: var(--bds--type--scale--4--size);
    line-height: var(--bds--type--scale--4--leading);
    font-weight: var(--bds--type--weight--bold);
    letter-spacing: var(--bds--type--tracking--base);
  }

  /* Should mirror heading-4x-small */
  .bds-type--size-x-small h5 {
    font-size: var(--bds--type--scale--3h--size);
    line-height: var(--bds--type--scale--3h--leading);
    font-weight: var(--bds--type--weight--bold);
    letter-spacing: var(--bds--type--tracking--loose-1);
  }

  /* Should mirror heading-5x-small */
  .bds-type--size-x-small h6,
  .bds-type--size-x-small hgroup p {
    font-size: var(--bds--type--scale--3--size);
    line-height: var(--bds--type--scale--3--leading);
    font-weight: var(--bds--type--weight--bold);
    letter-spacing: var(--bds--type--tracking--loose-2);
  }

  .bds-type--size-x-small hgroup :last-child {
    margin-block-start: calc(var(--bds--dimension--space) * 1.5);
  }

  .bds-type--size-x-small :where(ol, ul) {
    /* Indent equivalent to base leading */
    padding-inline-start: var(--bds--type--scale--3--leading);
  }

  .bds-type--size-x-small :where(ul, ol) :where(ul, ol) {
    margin-block-start: calc(var(--bds--dimension--space) * 2.5);
  }

  .bds-type--size-x-small li:not(:last-child) {
    margin-block-end: calc(var(--bds--dimension--space) * 2.5);
  }

  /* Should mirror quote-x-small */
  .bds-type--size-x-small blockquote > p {
    font-size: var(--bds--type--scale--5--size);
    line-height: var(--bds--type--scale--5--leading);
    font-weight: var(--bds--type--weight--semi-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  .bds-type--size-x-small figure blockquote + figcaption {
    margin-block-start: calc(var(--bds--dimension--space) * -3);
  }

  .bds-type--size-x-small pre {
    /* Indent equivalent to base leading */
    padding-inline: var(--bds--type--scale--3--leading);
  }

  /**/

  /**
   * Modifier: size-small
   */

  /* Should mirror body-small */
  .bds-type--size-small,
  .bds-type--size-small > * {
    font-size: var(--bds--type--scale--3h--size);
    line-height: var(--bds--type--scale--3h--leading);
    letter-spacing: var(--bds--type--tracking--loose-1);
  }

  .bds-type--size-small
    :where(
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hgroup,
      p,
      ul,
      ol,
      blockquote,
      figure,
      figcaption,
      pre
    ):not(:last-child) {
    margin-block-end: calc(var(--bds--dimension--space) * 6);
  }

  /* Should mirror code-small */
  .bds-type--size-small :where(pre, code, kbd) {
    letter-spacing: var(--bds--type--tracking--loose-1) !important;
  }

  /* Should mirror heading-large */
  .bds-type--size-small h1 {
    font-size: var(--bds--type--scale--10--size);
    line-height: var(--bds--type--scale--10--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  /* Should mirror heading-small */
  .bds-type--size-small h2 {
    font-size: var(--bds--type--scale--6--size);
    line-height: var(--bds--type--scale--6--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  /* Should mirror heading-x-small */
  .bds-type--size-small h3 {
    font-size: var(--bds--type--scale--5--size);
    line-height: var(--bds--type--scale--5--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  /* Should mirror heading-2x-small */
  .bds-type--size-small h4 {
    font-size: var(--bds--type--scale--4h--size);
    line-height: var(--bds--type--scale--4h--leading);
    font-weight: var(--bds--type--weight--bold);
    letter-spacing: var(--bds--type--tracking--base);
  }

  /* Should mirror heading-3x-small */
  .bds-type--size-small h5 {
    font-size: var(--bds--type--scale--4--size);
    line-height: var(--bds--type--scale--4--leading);
    font-weight: var(--bds--type--weight--bold);
    letter-spacing: var(--bds--type--tracking--base);
  }

  /* Should mirror heading-4x-small */
  .bds-type--size-small h6,
  .bds-type--size-small hgroup p {
    font-size: var(--bds--type--scale--3h--size);
    line-height: var(--bds--type--scale--3h--leading);
    font-weight: var(--bds--type--weight--bold);
    letter-spacing: var(--bds--type--tracking--loose-1);
  }

  .bds-type--size-small hgroup :last-child {
    margin-block-start: calc(var(--bds--dimension--space) * 2);
  }

  .bds-type--size-small :where(ol, ul) {
    /* Indent equivalent to base leading */
    padding-inline-start: var(--bds--type--scale--3h--leading);
  }

  .bds-type--size-small :where(ul, ol) :where(ul, ol) {
    margin-block-start: calc(var(--bds--dimension--space) * 3);
  }

  .bds-type--size-small li:not(:last-child) {
    margin-block-end: calc(var(--bds--dimension--space) * 3);
  }

  /* Should mirror quote-small */
  .bds-type--size-small blockquote > p {
    font-size: var(--bds--type--scale--6--size);
    line-height: var(--bds--type--scale--6--leading);
    font-weight: var(--bds--type--weight--semi-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  .bds-type--size-small figure blockquote + figcaption {
    margin-block-start: calc(var(--bds--dimension--space) * -3.5);
  }

  .bds-type--size-small pre {
    /* Indent equivalent to base leading */
    padding-inline: var(--bds--type--scale--3h--leading);
  }

  /**/

  /**
   * Modifier: size-medium
   */

  /* Should mirror body-medium */
  .bds-type--size-medium,
  .bds-type--size-medium > * {
    font-size: var(--bds--type--scale--4--size);
    line-height: var(--bds--type--scale--4--leading);
    letter-spacing: var(--bds--type--tracking--base);
  }

  .bds-type--size-medium
    :where(
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hgroup,
      p,
      ul,
      ol,
      blockquote,
      figure,
      figcaption,
      pre
    ):not(:last-child) {
    margin-block-end: calc(var(--bds--dimension--space) * 8);
  }

  /* Should mirror code-medium */
  .bds-type--size-medium :where(pre, code, kbd) {
    letter-spacing: var(--bds--type--tracking--base) !important;
  }

  /* Should mirror display-x-small */
  .bds-type--size-medium h1 {
    font-size: var(--bds--type--scale--16--size);
    line-height: var(--bds--type--scale--16--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  /* Should mirror heading-large */
  .bds-type--size-medium h2 {
    font-size: var(--bds--type--scale--10--size);
    line-height: var(--bds--type--scale--10--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  /* Should mirror heading-medium */
  .bds-type--size-medium h3 {
    font-size: var(--bds--type--scale--8--size);
    line-height: var(--bds--type--scale--8--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  /* Should mirror heading-small */
  .bds-type--size-medium h4 {
    font-size: var(--bds--type--scale--6--size);
    line-height: var(--bds--type--scale--6--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tracking--base);
  }

  /* Should mirror heading-x-small */
  .bds-type--size-medium h5 {
    font-size: var(--bds--type--scale--5--size);
    line-height: var(--bds--type--scale--5--leading);
    font-weight: var(--bds--type--weight--extra-bold);
    letter-spacing: var(--bds--type--tight-2);
  }

  /* Should mirror heading-4x-small */
  .bds-type--size-medium h6,
  .bds-type--size-medium hgroup p {
    font-size: var(--bds--type--scale--4--size);
    line-height: var(--bds--type--scale--4--leading);
    font-weight: var(--bds--type--weight--bold);
    letter-spacing: var(--bds--type--tracking--base);
  }

  .bds-type--size-medium hgroup :last-child {
    margin-block-start: calc(var(--bds--dimension--space) * 2.5);
  }

  .bds-type--size-medium :where(ol, ul) {
    /* Indent equivalent to base leading */
    padding-inline-start: var(--bds--type--scale--4--leading);
  }

  .bds-type--size-medium :where(ul, ol) :where(ul, ol) {
    margin-block-start: calc(var(--bds--dimension--space) * 4);
  }

  .bds-type--size-medium li:not(:last-child) {
    margin-block-end: calc(var(--bds--dimension--space) * 4);
  }

  /* Should mirror quote-medium */
  .bds-type--size-medium blockquote > p {
    font-size: var(--bds--type--scale--8--size);
    line-height: var(--bds--type--scale--8--leading);
    font-weight: var(--bds--type--weight--semi-bold);
    letter-spacing: var(--bds--type--tracking--tight-2);
  }

  .bds-type--size-medium figure blockquote + figcaption {
    margin-block-start: calc(var(--bds--dimension--space) * -4.5);
  }

  .bds-type--size-medium pre {
    /* Indent equivalent to base leading */
    padding-inline: var(--bds--type--scale--4--leading);
  }

  /**/
`;

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const getSize = createScaleNormalizer(SIZES, "small");
/**
 * This is a public selector within the light DOM, so we need to namespace it!
 */
const bem$4 = createBem("bds-type");
class Type extends BaseMixin(s$8) {
    static { this.tagName = "bds-type"; }
    static { this.styles = [super.styles, styles$5]; }
    constructor() {
        super();
        /**
         * We have the option to add modifiers here, e.g.:
         * – type scale based on attribute (e.g. x-small, small, medium, large)
         * – format based on attribute (e.g. condensed)
         * – observing a resize observer automatically changes the scale
         * – observing a device type could change the styles
         * – document language / writing direction / etc
         */
        createEffectController(this, () => void this.updateHostClassList(), [
            "size"
        ]);
        this.updateHostClassList();
    }
    updateHostClassList() {
        const classNames = bem$4({ [`size-${this.size}`]: true });
        const existingSizeClassName = Array.from(this.classList).find((className) => className.includes(`${bem$4()}--size`));
        if (existingSizeClassName) {
            this.classList.remove(existingSizeClassName);
        }
        this.classList.add(...classNames.split(" "));
    }
    connectedCallback() {
        super.connectedCallback();
        const rootNode = this.getRootNode();
        /**
         * Bootstrap the freeform typography styles to the nearest root.
         *
         * NB:
         * This is not encapsulated! We have to take a more traditional approach here
         * because shadow DOM cannot help us. Styling of slotted content is not adequate
         * enough for the typography styles and selectors we need. Although, it is still
         * scoped to the .bds-type selector within the nearest root node, so should limit
         * interfering with host styles.
         */
        if (!rootNode.adoptedStyleSheets.includes(rootStyles.styleSheet)) {
            rootNode.adoptedStyleSheets = [
                ...rootNode.adoptedStyleSheets,
                rootStyles.styleSheet
            ];
        }
    }
    render() {
        return x ` <slot></slot> `;
    }
}
__decorate$4([
    n$6({ type: String }),
    transform(getSize)
], Type.prototype, "size", void 0);

const styles$4 = i$9 `
  :host {
    display: inline;
  }

  :host > * {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    color: inherit;
  }

  .formatted-number {
    font-feature-settings: var(--bds--type--feature--tabular);
  }

  .formatted-number__value__ordinal {
    font-feature-settings: var(--bds--type--feature--superscript);
  }

  /* TODO: do we want to stylize these? */
  .formatted-number__value__currency,
  .formatted-number__value__unit,
  .formatted-number__value__compact,
  .formatted-number__value__excess {
    opacity: 0.62; /* TODO: needs a token, opacity taken from --bds--color--content--neutral--low */
  }

  .formatted-number__value__invalid {
    opacity: 0.21; /* TODO: needs a token, opacity taken from --bds--color--content--disabled */
  }
`;

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const bem$3 = createBem("formatted-number");
class FormattedNumber extends BaseMixin(s$8) {
    static { this.tagName = "bds-formatted-number"; }
    static { this.styles = [super.styles, styles$4]; }
    render() {
        const formattedNumber = formatNumber(this.value, {
            format: this.format,
            currency: this.currency,
            currencySymbol: this.currencySymbol,
            mantissa: this.mantissa,
            abbrThreshold: this.noAbbr ? Infinity : this.abbrThreshold,
            clampThreshold: this.clampThreshold,
            unitDisplay: this.unitDisplay,
            locale: this.locale,
            preserveInputLocale: this.preserveInputLocale,
            output: "html",
            bemBlock: bem$3("value")
        });
        return x ` <span class=${bem$3()}>${o$4(formattedNumber)}</span> `;
    }
}
__decorate$3([
    n$6()
], FormattedNumber.prototype, "value", void 0);
__decorate$3([
    n$6({ type: String })
], FormattedNumber.prototype, "format", void 0);
__decorate$3([
    n$6({ type: String })
], FormattedNumber.prototype, "currency", void 0);
__decorate$3([
    n$6({ type: String, attribute: "currency-symbol" })
], FormattedNumber.prototype, "currencySymbol", void 0);
__decorate$3([
    n$6({ type: Number })
], FormattedNumber.prototype, "mantissa", void 0);
__decorate$3([
    n$6({ type: Number, attribute: "abbr-threshold" })
], FormattedNumber.prototype, "abbrThreshold", void 0);
__decorate$3([
    n$6({ type: Boolean, attribute: "no-abbr" })
], FormattedNumber.prototype, "noAbbr", void 0);
__decorate$3([
    n$6({ type: Number, attribute: "clamp-threshold" })
], FormattedNumber.prototype, "clampThreshold", void 0);
__decorate$3([
    n$6({ type: String, attribute: "unit-display" })
], FormattedNumber.prototype, "unitDisplay", void 0);
__decorate$3([
    n$6({ type: String })
], FormattedNumber.prototype, "locale", void 0);
__decorate$3([
    n$6({ type: Boolean, attribute: "preserve-input-locale" })
], FormattedNumber.prototype, "preserveInputLocale", void 0);

const round = (value, mantissa = 4) => Math.round(value * Math.pow(10, mantissa)) / Math.pow(10, mantissa);
const random = (min = 1, max = 1000) => Math.random() * (max - min) + min;

const shellReducer = (state, { type, payload }) => {
    if (type === "toggleHasAppOutletMenu") {
        const nextHasAppOutletMenu = payload ?? !state.hasAppOutletMenu;
        if (nextHasAppOutletMenu !== state.hasAppOutletMenu) {
            return {
                ...state,
                hasAppOutletMenu: nextHasAppOutletMenu
            };
        }
    }
    else if (type === "toggleHasAppOutletHeader") {
        const nextHasAppOutletHeader = payload ?? !state.hasAppOutletHeader;
        if (nextHasAppOutletHeader !== state.hasAppOutletHeader) {
            return {
                ...state,
                hasAppOutletHeader: nextHasAppOutletHeader
            };
        }
    }
    else if (type === "toggleIsMenuHovered") {
        const nextIsMenuHovered = payload ?? !state.isMenuHovered;
        if (nextIsMenuHovered !== state.isMenuHovered) {
            return {
                ...state,
                isMenuHovered: nextIsMenuHovered
            };
        }
    }
    else if (type === "toggleIsAppOutletMenuPinned") {
        const nextIsAppOutletMenuPinned = payload ?? !state.isAppOutletMenuPinned;
        if (nextIsAppOutletMenuPinned !== state.isAppOutletMenuPinned) {
            return {
                ...state,
                isAppOutletMenuPinned: nextIsAppOutletMenuPinned,
                isMenuHovered: nextIsAppOutletMenuPinned === false ? false : state.isMenuHovered
            };
        }
    }
    else if (type === "toggleIsAppOutletMenuPinningEnabled") {
        const nextIsAppOutletMenuPinningEnabled = payload ?? !state.isAppOutletMenuPinningEnabled;
        if (nextIsAppOutletMenuPinningEnabled !== state.isAppOutletMenuPinningEnabled) {
            return {
                ...state,
                isAppOutletMenuPinningEnabled: nextIsAppOutletMenuPinningEnabled
            };
        }
    }
    else if (type === "updatePlatformMenuOpenPopoverCount") {
        if (Number.isFinite(payload) &&
            payload !== state.platformMenuOpenPopoverCount) {
            return {
                ...state,
                platformMenuOpenPopoverCount: payload
            };
        }
    }
    else if (type === "updateAppOutletMenuOpenPopoverCount") {
        if (Number.isFinite(payload) &&
            payload !== state.appOutletMenuOpenPopoverCount) {
            return {
                ...state,
                appOutletMenuOpenPopoverCount: payload
            };
        }
    }
    else if (type === "updateFocusZone") {
        if (payload !== state.focusZone) {
            return {
                ...state,
                focusZone: payload
            };
        }
    }
    else if (type === "unmountPlatformMenu") {
        return {
            ...state,
            platformMenuOpenPopoverCount: 0
        };
    }
    else if (type === "unmountAppOutlet") {
        return {
            ...state,
            appOutletMenuOpenPopoverCount: 0,
            hasAppOutletHeader: false,
            hasAppOutletMenu: false
        };
    }
    return state;
};

const APP_OUTLET_MENU_TOGGLE_THRESHOLD_WIDTH = 1248;
const SHELL_INITIAL_STATE = {
    hasAppOutletMenu: false,
    hasAppOutletHeader: false,
    isAppOutletMenuPinned: true,
    isAppOutletMenuPinningEnabled: true,
    isMenuHovered: false,
    platformMenuOpenPopoverCount: 0,
    appOutletMenuOpenPopoverCount: 0,
    focusZone: undefined
};
const SHELL_STATE_PERSISTED_KEYS = [
    "isAppOutletMenuPinned"
];

const STORAGE_KEY = "BDS_SHELL_STATE";
const isPlainObject = (value) => {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return ((prototype === null ||
        prototype === Object.prototype ||
        Object.getPrototypeOf(prototype) === null) &&
        !(Symbol.toStringTag in value) &&
        !(Symbol.iterator in value));
};
/**
 * Gets persisted state from local storage.
 * Attempts to normalize the partial state.
 */
const getPersistedState = () => {
    const item = localStorage.getItem(STORAGE_KEY);
    const parsedItem = item !== null ? JSON.parse(item) : null;
    if (parsedItem === null || !isPlainObject(parsedItem)) {
        return null;
    }
    return SHELL_STATE_PERSISTED_KEYS.reduce((memo, persistedKey) => {
        const typedItem = parsedItem;
        if (typedItem[persistedKey] !== undefined) {
            Object.assign(memo, {
                [persistedKey]: typedItem[persistedKey]
            });
        }
        return memo;
    }, {});
};
/**
 * Sets persisted state in local storage.
 */
const setPersistedState = (state) => {
    const sanitizedState = SHELL_STATE_PERSISTED_KEYS.reduce((memo, persistedKey) => {
        Object.assign(memo, { [persistedKey]: state[persistedKey] });
        return memo;
    }, {});
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitizedState));
};

const shellStoreContext = n$7("BDS_SHELL_STORE");
const createShellStateProviderController = (host) => {
    const resolvedInitialState = {
        ...SHELL_INITIAL_STATE,
        ...(getPersistedState() ?? {})
    };
    const store = createStore$1(shellReducer, resolvedInitialState);
    let disconnectStore;
    const syncStorage = debounce((state) => {
        setPersistedState(state);
    }, 500);
    new i$4(host, {
        context: shellStoreContext,
        initialValue: store
    });
    host.addController({
        hostConnected: () => {
            disconnectStore = store.subscribe(() => {
                host.requestUpdate();
                syncStorage(store.getState());
            });
        },
        hostDisconnected: () => {
            disconnectStore?.();
        }
    });
    return store;
};
const createShellStateConsumerController = (host, onStore, onStoreChange) => {
    let disposeRef;
    let disconnectStore;
    let previousState;
    new s$4(host, {
        context: shellStoreContext,
        callback: (store, dispose) => {
            if (dispose !== disposeRef) {
                disposeRef?.();
                disconnectStore?.();
                disposeRef = dispose;
            }
            disconnectStore = store.subscribe(() => {
                const state = store.getState();
                // Update host
                host.requestUpdate();
                // Notify the callback
                onStoreChange?.(state, previousState);
                // Memoize
                previousState = state;
            });
            onStore(store);
        },
        subscribe: true
    });
    host.addController({
        hostDisconnected: () => {
            disconnectStore?.();
        }
    });
};

const selectIsAppOutletMenuPinned = (state) => state.isAppOutletMenuPinned && state.isAppOutletMenuPinningEnabled;
const selectAppOutletMenuStatus = (state) => {
    const isAppOutletMenuPinned = selectIsAppOutletMenuPinned(state);
    const isAppOutletMenuOpen = isAppOutletMenuPinned ||
        state.isMenuHovered ||
        state.platformMenuOpenPopoverCount > 0 ||
        state.appOutletMenuOpenPopoverCount > 0;
    return {
        isAppOutletMenuPinned,
        isAppOutletMenuOpen
    };
};

const styles$3 = i$9 `
  :host {
    display: contents;
  }
`;

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Internal component
 */
class AppOutletMenuToggle extends BaseMixin(s$8) {
    static { this.tagName = "bds-app-outlet-menu-toggle"; }
    static { this.styles = [super.styles, styles$3]; }
    static get scopedElements() {
        return {
            "bds-icon-button": IconButton
        };
    }
    constructor() {
        super();
        createShellStateConsumerController(this, (shellStore) => {
            this.shellStore = shellStore;
        });
    }
    getResolvedShellState() {
        return this.shellStore?.getState() ?? SHELL_INITIAL_STATE;
    }
    onMenuToggleClick(_event) {
        this.shellStore?.dispatch?.({ type: "toggleIsAppOutletMenuPinned" });
    }
    render() {
        const shellState = this.getResolvedShellState();
        const { isAppOutletMenuPinningEnabled, hasAppOutletMenu } = shellState;
        const { isAppOutletMenuPinned } = selectAppOutletMenuStatus(shellState);
        // TODO: Resolve localized text / confirm copy
        const toggleAppOutletMenuMessage = !isAppOutletMenuPinningEnabled
            ? "Expand navigation"
            : isAppOutletMenuPinned
                ? "Collapse navigation"
                : "Expand navigation";
        if (!hasAppOutletMenu) {
            return A$1;
        }
        return x `
      <bds-icon-button
        slot="target"
        .size=${this.size}
        .variant=${this.variant}
        .tooltipPlacement=${this.tooltipPlacement}
        .icon=${isAppOutletMenuPinned
            ? "dock-left-collapse"
            : "dock-left-expand"}
        .disabled=${!isAppOutletMenuPinningEnabled}
        .assistLabel=${toggleAppOutletMenuMessage}
        @click=${this.onMenuToggleClick}
      ></bds-icon-button>
    `;
    }
}
__decorate$2([
    n$6({ type: String })
], AppOutletMenuToggle.prototype, "variant", void 0);
__decorate$2([
    n$6({ type: String })
], AppOutletMenuToggle.prototype, "size", void 0);
__decorate$2([
    n$6({ type: String, attribute: "tooltip-placement" })
], AppOutletMenuToggle.prototype, "tooltipPlacement", void 0);

const shellTokenStylesheet = i$9 `
  :host > * {
    --bds--cmp--shell--platform-menu--inline-size: calc(
      var(--bds--dimension--space) * 16
    );
    --bds--cmp--shell--app-outlet-menu--inline-size: calc(
      var(--bds--dimension--space) * 64
    );
    --bds--cmp--shell--header--block-size: calc(
      var(--bds--dimension--space) * 16
    );
  }
`;

const styles$2 = [
    shellTokenStylesheet,
    i$9 `
    :host {
      display: block;
    }

    /**
     * Root / block
     * Represents the layout container for an app
     */

    .app-outlet {
      display: grid;
      block-size: 100%;
      position: relative;
      grid-template-columns: max-content 1fr;
      grid-template-rows: max-content 1fr;
      grid-template-areas: "menu header" "menu main";
      overflow: hidden;
    }

    .app-outlet::after {
      display: block;
      position: absolute;
      z-index: 1;
      inset: 0;
      pointer-events: none;
      content: " ";
      background-color: var(--bds--color--background--overlay--dark);
      opacity: 0;
      transition-property: opacity;
      transition-duration: 128ms;
    }

    .app-outlet--show-backdrop::after {
      opacity: 1;
    }

    /**
     * Element: Menu
     * Represents the container where the app menu exists
     */

    .app-outlet__menu {
      display: flex;
      position: relative;
      z-index: 2;
      grid-area: menu;
      inline-size: var(--bds--cmp--shell--app-outlet-menu--inline-size);
      flex-shrink: 0;
      flex-direction: column;
      align-items: stretch;
      background-color: var(--bds--color--background--inset);
      outline: var(--bds--border--stroke--thin) solid
        var(--bds--color--background--neutral--tone--strong);
      transition-property: transform, opacity, box-shadow;
      transition-duration: 128ms;
      transition-timing-function: ease-in-out;
    }

    .app-outlet__menu--empty {
      display: none;
    }

    .app-outlet__menu--detached {
      position: absolute;
      inset-block: 0;
      inset-inline-start: 0;
      box-shadow: var(--bds--elevation--level--4--shadow);
    }

    .app-outlet__menu--detached:not(.app-outlet__menu--show) {
      pointer-events: none;
      transform: translateX(-12px);
      opacity: 0;
    }

    @media (prefers-reduced-motion) {
      .app-outlet__menu--detached:not(.app-outlet__menu--show) {
        transform: translateX(0);
      }
    }

    /**
     * Sub element: Menu header
     */

    .app-outlet__menu__header {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: flex-start;
      flex-shrink: 0;
      min-block-size: var(--bds--cmp--shell--header--block-size);
      padding-block: calc(var(--bds--dimension--space) * 4.5);
      padding-inline: calc(var(--bds--dimension--space) * 6);
      gap: calc(var(--bds--dimension--space) * 3);
    }

    .app-outlet__menu__header::after {
      display: block;
      position: absolute;
      inset-block-start: 100%;
      inset-inline: 0;
      block-size: var(--bds--border--stroke--thin);
      content: " ";
      background-color: var(--bds--color--border--neutral--low);
      opacity: 0;
      transition-property: opacity;
      transition-duration: 200ms;
      pointer-events: none;
    }

    .app-outlet__menu--has-menu-overflow-top .app-outlet__menu__header::after {
      opacity: 1;
    }

    /* */

    /**
     * Sub element: Menu title
     */

    .app-outlet__menu__title {
      flex: 1;
    }

    /* */

    /**
     * Sub element: Menu actions
     */

    .app-outlet__menu__actions {
      margin-block-start: calc(var(--bds--dimension--space) * -0.5);
    }

    /* */

    /**
     * Sub element: Menu actions
     */

    .app-outlet__menu__body {
      position: relative;
      flex: 1;
      min-block-size: 0;
      padding-inline: calc(var(--bds--dimension--space) * 1);
      padding-block-end: calc(var(--bds--dimension--space) * 4);
      overflow-y: auto;
      overscroll-behavior: contain;
    }

    .app-outlet__menu__body:focus-visible {
      outline: none;
    }

    /* */

    /**
     * Element: Header
     * Represents the container where the app header exists
     */

    .app-outlet__header {
      position: relative;
      z-index: 1;
      grid-area: header;
      min-block-size: var(--bds--cmp--shell--header--block-size);
      padding-block-start: calc(var(--bds--dimension--space) * 4);
      padding-block-end: calc(var(--bds--dimension--space) * 4);
      padding-inline: calc(var(--bds--dimension--space) * 12);
      background-color: var(--bds--color--background--surface);
    }

    .app-outlet__header::after {
      display: block;
      position: absolute;
      inset-block-start: 100%;
      inset-inline: 0;
      block-size: var(--bds--border--stroke--thin);
      content: " ";
      background-color: var(--bds--color--border--neutral--low);
      opacity: 0;
      transition-property: opacity;
      transition-duration: 200ms;
      pointer-events: none;
    }

    .app-outlet__header--has-main-overflow-top::after {
      opacity: 1;
    }

    .app-outlet__header--empty {
      display: none;
    }

    .app-outlet__header:focus-visible {
      outline: none;
    }

    /* */

    /**
     * Element: Main
     * Represents the container where the app body exists
     */

    .app-outlet__main {
      position: relative;
      z-index: 0;
      grid-area: main;
      overflow-y: auto;
      overscroll-behavior: contain;
      background-color: var(--bds--color--background--surface);
    }

    .app-outlet__main:focus-visible {
      outline: none;
    }

    /* */
  `
];

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const bem$2 = createBem("app-outlet");
class AppOutlet extends BaseMixin(s$8) {
    static { this.tagName = "bds-app-outlet"; }
    static { this.styles = [super.styles, styles$2]; }
    static get scopedElements() {
        return {
            "bds-app-outlet-menu-toggle": AppOutletMenuToggle,
            "bds-popover-tracker": PopoverTracker
        };
    }
    constructor() {
        super();
        this.scrollableNodeObserver = createObservableRef();
        this.menuOverflowController = createOverflowController(this, (overflowInfo) => {
            this.menuOverflowInfo = overflowInfo;
        });
        this.mainOverflowController = createOverflowController(this, (overflowInfo) => {
            this.mainOverflowInfo = overflowInfo;
        });
        this.onMenuBodyNode = (node) => {
            this.menuOverflowController.onNode(node);
        };
        this.onMainNode = (node) => {
            this.scrollableNodeObserver.refCallback(node);
            this.mainOverflowController.onNode(node);
        };
        this.subscribeToMainScrollableNode = this.scrollableNodeObserver.subscribe;
        createShellStateConsumerController(this, (shellStore) => {
            this.shellStore = shellStore;
        }, (state, previousState) => {
            if (state.focusZone !== previousState?.focusZone) {
                if (state.focusZone === "content") {
                    requestAnimationFrame(() => {
                        forceFocus(this.shadowRoot?.getElementById(state.hasAppOutletHeader ? "header" : "main"));
                    });
                }
            }
        });
    }
    connectedCallback() {
        super.connectedCallback();
        /*
         * Forces a dispatch on slotchange event, so that in the case there are
         * no slotted elements, it will still fire
         */
        this.updateComplete.then(() => {
            this.shadowRoot
                ?.querySelector("slot[name='menu']")
                ?.dispatchEvent(new Event("slotchange"));
            this.shadowRoot
                ?.querySelector("slot[name='header']")
                ?.dispatchEvent(new Event("slotchange"));
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.shellStore?.dispatch({
            type: "unmountAppOutlet"
        });
    }
    getResolvedShellState() {
        return this.shellStore?.getState() ?? SHELL_INITIAL_STATE;
    }
    onMenuFocus(_event) {
        this.dispatchMenuHover(true);
        this.dispatchFocusZone("menu");
    }
    onMenuMouseEnter(_event) {
        this.dispatchMenuHover(true);
    }
    onMenuMouseLeave(_event) {
        this.dispatchMenuHover(false);
    }
    onMenuKeyDown(event) {
        if (!event.defaultPrevented && event.key === "Escape") {
            this.focusOnContent();
        }
    }
    onMenuButtonItemClick(_event) {
        this.dispatchFocusZone("content");
    }
    onMenuSlotChange(event) {
        this.shellStore?.dispatch?.({
            type: "toggleHasAppOutletMenu",
            payload: !!event.target.assignedElements().length
        });
    }
    onMenuOpenPopoverCountChange(event) {
        const target = event.target;
        this.shellStore?.dispatch?.({
            type: "updateAppOutletMenuOpenPopoverCount",
            payload: target.openPopovers.length
        });
    }
    onHeaderFocus(_event) {
        this.dispatchMenuHover(false);
        this.dispatchFocusZone("content");
    }
    onHeaderClick(_event) {
        this.dispatchMenuHover(false);
    }
    onHeaderSlotChange(event) {
        this.shellStore?.dispatch?.({
            type: "toggleHasAppOutletHeader",
            payload: !!event.target.assignedElements().length
        });
    }
    onMainFocus(_event) {
        this.dispatchMenuHover(false);
        this.dispatchFocusZone("content");
    }
    onMainClick(_event) {
        this.dispatchMenuHover(false);
    }
    dispatchMenuHover(isMenuHovered) {
        this.shellStore?.dispatch?.({
            type: "toggleIsMenuHovered",
            payload: isMenuHovered
        });
    }
    dispatchFocusZone(focusZone) {
        this.shellStore?.dispatch({
            type: "updateFocusZone",
            payload: focusZone
        });
    }
    renderMenuActions() {
        // This will probably return later, so we're leaving it here for posterity…
        // return html`
        //   <div class=${bem(["menu", "actions"])}>
        //     <bds-app-outlet-menu-toggle></bds-app-outlet-menu-toggle>
        //   </div>
        // `;
        return A$1;
    }
    focusOnMenu() {
        this.dispatchFocusZone("menu");
    }
    focusOnContent() {
        this.dispatchFocusZone("content");
    }
    render() {
        const shellState = this.getResolvedShellState();
        const { name, menuOverflowInfo, mainOverflowInfo } = this;
        const { hasAppOutletMenu, hasAppOutletHeader } = shellState;
        const { isAppOutletMenuPinned, isAppOutletMenuOpen } = selectAppOutletMenuStatus(shellState);
        return x `
      <div
        class=${bem$2({
            showBackdrop: hasAppOutletMenu && !isAppOutletMenuPinned && isAppOutletMenuOpen
        })}
      >
        <div
          class=${bem$2("menu", {
            empty: !hasAppOutletMenu,
            detached: !isAppOutletMenuPinned,
            show: isAppOutletMenuOpen,
            hasMenuOverflowTop: menuOverflowInfo?.hasOverflowTop
        })}
          @focusin=${this.onMenuFocus}
          @mouseenter=${this.onMenuMouseEnter}
          @mouseleave=${this.onMenuMouseLeave}
          @keydown=${this.onMenuKeyDown}
          @menubuttonitemclick=${this.onMenuButtonItemClick}
        >
          <bds-popover-tracker
            @openpopoverchange=${this.onMenuOpenPopoverCountChange}
          >
            <div class=${bem$2(["menu", "header"])}>
              <header
                class=${concatClasses(bem$2(["menu", "title"]), typeHeading({ size: "x-small" }))}
              >
                <h1>${name ?? "Brandwatch"}</h1>
              </header>
              ${this.renderMenuActions()}
            </div>
            <div
              class=${bem$2(["menu", "body"])}
              id="body"
              ${n$3(this.onMenuBodyNode)}
            >
              <slot
                id="menu-slot"
                name="menu"
                @slotchange=${this.onMenuSlotChange}
              ></slot>
            </div>
          </bds-popover-tracker>
        </div>
        <div
          id="header"
          class=${bem$2("header", {
            empty: !hasAppOutletHeader,
            hasMainOverflowTop: mainOverflowInfo?.hasOverflowTop
        })}
          @focusin=${this.onHeaderFocus}
          @click=${this.onHeaderClick}
        >
          <slot
            id="header-slot"
            name="header"
            @slotchange=${this.onHeaderSlotChange}
          ></slot>
        </div>
        <div
          id="main"
          class=${bem$2("main")}
          @focusin=${this.onMainFocus}
          @click=${this.onMainClick}
          ${n$3(this.onMainNode)}
        >
          <slot name="main"></slot>
        </div>
      </div>
    `;
    }
}
__decorate$1([
    n$6({ type: String })
], AppOutlet.prototype, "name", void 0);
__decorate$1([
    t$2()
], AppOutlet.prototype, "menuOverflowInfo", void 0);
__decorate$1([
    t$2()
], AppOutlet.prototype, "mainOverflowInfo", void 0);

const styles$1 = [
    shellTokenStylesheet,
    i$9 `
    :host {
      display: contents;
    }

    .platform-menu {
      position: relative;
      display: flex;
      inline-size: var(--bds--cmp--shell--platform-menu--inline-size);
      flex-direction: column;
      align-items: stretch;
      background-color: var(--bds--color--background--inset);
      outline: var(--bds--border--stroke--thin) solid
        var(--bds--color--background--neutral--tone--strong);
    }

    .platform-menu__header,
    .platform-menu__body,
    .platform-menu__body__section,
    .platform-menu__footer {
      display: flex;
      flex-direction: column;
    }

    .platform-menu__header,
    .platform-menu__body__section,
    .platform-menu__footer {
      align-items: center;
    }

    .platform-menu__header,
    .platform-menu__footer {
      position: relative;
      z-index: 1;
      justify-content: center;
      flex-shrink: 0;
    }

    .platform-menu__header {
      min-block-size: var(--bds--cmp--shell--header--block-size);
    }

    .platform-menu__footer {
      padding-block: calc(var(--bds--dimension--space) * 5);
    }

    .platform-menu__body {
      flex: 1;
      min-block-size: 0;
      padding-block: calc(var(--bds--dimension--space) * 1);
      justify-content: space-between;
      overflow-y: auto;
    }

    .platform-menu__header::after,
    .platform-menu__footer::after {
      display: block;
      position: absolute;
      inset-inline: 0;
      block-size: var(--bds--border--stroke--thin);
      content: " ";
      background-color: var(--bds--color--border--neutral--low);
      opacity: 0;
      transition-property: opacity;
      transition-duration: 200ms;
      pointer-events: none;
    }

    .platform-menu__header::after {
      inset-block-start: 100%;
    }

    .platform-menu__footer::after {
      inset-block-end: 100%;
    }

    .platform-menu--has-overflow-top .platform-menu__header::after,
    .platform-menu--has-overflow-bottom .platform-menu__footer::after {
      opacity: 1;
    }
  `
];

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const bem$1 = createBem("platform-menu");
class PlatformMenu extends BaseMixin(s$8) {
    static { this.tagName = "bds-platform-menu"; }
    static { this.styles = [super.styles, styles$1]; }
    static get scopedElements() {
        return {
            "bds-app-outlet-menu-toggle": AppOutletMenuToggle,
            "bds-popover-tracker": PopoverTracker
        };
    }
    constructor() {
        super();
        this.overflowController = createOverflowController(this, (overflowInfo) => {
            this.overflowInfo = overflowInfo;
        });
        this.onBodyNode = (node) => {
            this.overflowController.onNode(node);
        };
        createShellStateConsumerController(this, (shellStore) => {
            this.shellStore = shellStore;
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.shellStore?.dispatch?.({
            type: "unmountPlatformMenu"
        });
    }
    onMenuOpenPopoverCountChange(event) {
        const target = event.target;
        this.shellStore?.dispatch?.({
            type: "updatePlatformMenuOpenPopoverCount",
            payload: target.openPopovers.length
        });
    }
    render() {
        return x `
      <div
        class=${bem$1({
            hasOverflowTop: this.overflowInfo?.hasOverflowTop,
            hasOverflowBottom: this.overflowInfo?.hasOverflowBottom
        })}
      >
        <bds-popover-tracker
          @openpopoverchange=${this.onMenuOpenPopoverCountChange}
        >
          <div class=${bem$1("header")}>
            <slot name="logo"></slot>
          </div>
          <div class=${bem$1("body")} ${n$3(this.onBodyNode)}>
            <div class=${bem$1(["body", "section"])}>
              <slot name="start"></slot>
              <bds-app-outlet-menu-toggle
                .variant=${"regular-subtle"}
                .size=${"medium"}
                .tooltipPlacement=${"right"}
              ></bds-app-outlet-menu-toggle>
            </div>
            <div class=${bem$1(["body", "section"])}>
              <slot name="center"></slot>
            </div>
          </div>
          <div class=${bem$1("footer")}>
            <slot name="end"></slot>
          </div>
        </bds-popover-tracker>
      </div>
    `;
    }
}
__decorate([
    t$2()
], PlatformMenu.prototype, "overflowInfo", void 0);

const styles = [
    shellTokenStylesheet,
    i$9 `
    :host {
      display: contents;
    }

    .shell {
      position: fixed;
      inset: 0;
      z-index: 0;
      width: 100dvw;
      height: 100dvh;
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }

    .shell__platform-menu {
      display: flex;
      position: relative;
      z-index: 1;
      align-items: stretch;
      flex-shrink: 0;
    }

    .shell__app-outlet {
      display: block;
      position: relative;
      z-index: 0;
      flex: 1;
      min-inline-size: 0;
    }

    .shell__app-outlet::slotted(*) {
      position: absolute;
      inset: 0;
    }
  `
];

const bem = createBem("shell");
class Shell extends BaseMixin(s$8) {
    constructor() {
        super(...arguments);
        this.shellStore = createShellStateProviderController(this);
        this.resizeController = createResizeController(this, (entry) => {
            this.shellStore.dispatch({
                type: "toggleIsAppOutletMenuPinningEnabled",
                payload: entry.borderBoxSize[0].inlineSize >=
                    APP_OUTLET_MENU_TOGGLE_THRESHOLD_WIDTH
            });
        });
    }
    static { this.tagName = "bds-shell"; }
    static { this.styles = [super.styles, styles]; }
    onPlatformMenuFocus(_event) {
        this.shellStore.dispatch({ type: "toggleIsMenuHovered", payload: true });
        this.shellStore.dispatch({
            type: "updateFocusZone",
            payload: "menu"
        });
    }
    onPlatformMenuMouseOver(_event) {
        this.shellStore.dispatch({ type: "toggleIsMenuHovered", payload: true });
    }
    onPlatformMenuKeyDown(event) {
        if (!event.defaultPrevented && event.key === "Escape") {
            this.shellStore.dispatch({
                type: "updateFocusZone",
                payload: "content"
            });
        }
    }
    onPlatformMenuMenuButtonItemClick(_event) {
        this.shellStore.dispatch({
            type: "updateFocusZone",
            payload: "content"
        });
    }
    render() {
        return x `
      <div class=${bem()} ${n$3(this.resizeController.onNode)}>
        <slot
          class=${bem("platform-menu")}
          name="platform-menu"
          @focusin=${this.onPlatformMenuFocus}
          @mouseenter=${this.onPlatformMenuMouseOver}
          @keydown=${this.onPlatformMenuKeyDown}
          @menubuttonitemclick=${this.onPlatformMenuMenuButtonItemClick}
        ></slot>
        <slot class=${bem("app-outlet")} name="app-outlet"></slot>
        <slot></slot>
      </div>
    `;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c=e$1(class extends i$1{constructor(e){if(super(e),e.type!==t$1.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return {values:o,keys:l}}render(e,s,t){return this.ct(e,s,t).values}update(s,[t,r,c]){var d;const a$1=m(s),{values:p$1,keys:v}=this.ct(t,r,c);if(!Array.isArray(a$1))return this.ut=v,p$1;const h=null!==(d=this.ut)&&void 0!==d?d:this.ut=[],m$1=[];let y,x,j=0,k=a$1.length-1,w=0,A=p$1.length-1;for(;j<=k&&w<=A;)if(null===a$1[j])j++;else if(null===a$1[k])k--;else if(h[j]===v[w])m$1[w]=f$1(a$1[j],p$1[w]),j++,w++;else if(h[k]===v[A])m$1[A]=f$1(a$1[k],p$1[A]),k--,A--;else if(h[j]===v[A])m$1[A]=f$1(a$1[j],p$1[A]),c$3(s,m$1[A+1],a$1[j]),j++,A--;else if(h[k]===v[w])m$1[w]=f$1(a$1[k],p$1[w]),c$3(s,a$1[j],a$1[k]),k--,w++;else if(void 0===y&&(y=u(v,w,A),x=u(h,j,k)),y.has(h[j]))if(y.has(h[k])){const e=x.get(v[w]),t=void 0!==e?a$1[e]:null;if(null===t){const e=c$3(s,a$1[j]);f$1(e,p$1[w]),m$1[w]=e;}else m$1[w]=f$1(t,p$1[w]),c$3(s,a$1[j],t),a$1[e]=null;w++;}else p(a$1[k]),k--;else p(a$1[j]),j++;for(;w<=A;){const e=c$3(s,m$1[A+1]);f$1(e,p$1[w]),m$1[w++]=e;}for(;j<=k;){const e=a$1[j++];null!==e&&p(e);}return this.ut=v,a(s,m$1),T$2}});

/**
 * Copied from @design-system-pt/core
 * We could not import from there as it caused a circular dependency in the build step
 */
/**
 * Creates a store interface to use within components
 */
const createStore = (reducer, initialState) => {
    const subscribers = new Set();
    let state = initialState;
    return {
        getState: () => state,
        dispatch: (action) => {
            const nextState = reducer(state, action);
            if (nextState !== state) {
                state = nextState;
                subscribers.forEach((subscriber) => void subscriber());
            }
        },
        subscribe: (subscriber) => {
            subscribers.add(subscriber);
            subscriber();
            return () => {
                subscribers.delete(subscriber);
            };
        }
    };
};

const createWithState = () => {
    class WithState extends c$2 {
        render(reducer, initialState, resultFn) {
            if (!this.store) {
                this.store = createStore(reducer, initialState);
                this.resultFn = resultFn;
                this.subscribe();
            }
            return resultFn(this.store.getState(), this.store.dispatch);
        }
        subscribe() {
            this.disconnectStore = this.store?.subscribe(() => {
                if (this.resultFn && this.store) {
                    this.setValue(this.resultFn(this.store.getState(), this.store.dispatch));
                }
            });
        }
        disconnected() {
            this.disconnectStore?.();
        }
        reconnected() {
            this.subscribe();
        }
    }
    return e$1(WithState);
};

register([
    Icon,
    Button,
    IconButton,
    Menu,
    MenuButtonItem,
    MenuSection,
    Tooltip,
    ContextMenu,
    PlatformMenu
]);
const contextMenuInitialState = { open: false };
const contextMenuReducer = (state, { type, payload }) => {
    if (type === "setOpen") {
        return {
            ...state,
            open: payload
        };
    }
    return state;
};
const contextMenuWithState = createWithState();
const renderControlledMenu = ({ slot, target, content, type }) => contextMenuWithState(contextMenuReducer, contextMenuInitialState, (state, dispatch) => x `
      <bds-context-menu
        slot=${slot || A$1}
        type=${type || A$1}
        ?open=${state.open}
        @open=${() => {
    dispatch({
        type: "setOpen",
        payload: true
    });
}}
        @close=${() => {
    dispatch({
        type: "setOpen",
        payload: false
    });
}}
      >
        ${target} ${state.open ? content : A$1}
      </bds-context-menu>
    `);
const renderNestedMenu = ({ slot, target }) => renderControlledMenu({
    slot,
    target,
    content: x `
      <bds-menu slot="content">
        <bds-menu-section>
          <bds-menu-button-item icon-start="brandwatch-color">
            My Brandwatch
          </bds-menu-button-item>
        </bds-menu-section>
        <bds-menu-section fill>
          ${c(Array.from({ length: 15 }, (_item, i) => i), (id) => id, (id) => renderControlledMenu({
        type: "passive",
        target: x `
                  <bds-menu-button-item
                    slot="target"
                    icon-start="brandwatch-color"
                    icon-end="navigate-next"
                  >
                    Button ${id + 1}
                  </bds-menu-button-item>
                `,
        content: x `
                  <bds-menu slot="content">
                    <bds-menu-section>
                      ${c(Array.from({ length: 15 }, (_item, i) => i), (id) => id, (id) => x `
                          <bds-tooltip placement="top-start">
                            <bds-menu-button-item
                              slot="target"
                              icon-start="brandwatch-color"
                            >
                              Sub button ${id + 1}
                            </bds-menu-button-item>
                            <div slot="content">Popovers all the way down</div>
                          </bds-tooltip>
                        `)}
                    </bds-menu-section>
                  </bds-menu>
                `
    }))}
        </bds-menu-section>
      </bds-menu>
    `
});
const renderGlobalNav = () => {
    return x `
    <bds-platform-menu class="platform-menu" slot="platform-menu">
      <div class="platform-menu__logo" slot="logo">
        <bds-tooltip placement="right">
          <bds-icon
            slot="target"
            name="brandwatch-color"
            size="x-large"
          ></bds-icon>
          <div slot="content">Brandwatch</div>
        </bds-tooltip>
      </div>
      ${renderNestedMenu({
        slot: "start",
        target: x `
          <bds-icon-button
            slot="target"
            icon="apps"
            variant="regular-subtle"
            size="medium"
            assist-label="Apps"
            tooltip-placement="right"
          ></bds-icon-button>
        `
    })}
      ${renderNestedMenu({
        slot: "center",
        target: x `
          <bds-icon-button
            slot="target"
            icon="link"
            variant="regular-subtle"
            size="medium"
            assist-label="Shorten URL"
            tooltip-placement="right"
          >
          </bds-icon-button>
        `
    })}
      ${renderNestedMenu({
        slot: "center",
        target: x `
          <bds-icon-button
            slot="target"
            icon="notification"
            variant="regular-subtle"
            size="medium"
            indicator
            assist-label="Notifications"
            tooltip-placement="right"
          >
          </bds-icon-button>
        `
    })}
      ${renderNestedMenu({
        slot: "center",
        target: x `
          <bds-icon-button
            slot="target"
            icon="help"
            variant="regular-subtle"
            size="medium"
            assist-label="Help"
            tooltip-placement="right"
          >
          </bds-icon-button>
        `
    })}
      ${renderNestedMenu({
        slot: "center",
        target: x `
          <bds-icon-button
            slot="target"
            icon="settings"
            variant="regular-subtle"
            size="medium"
            assist-label="Settings"
            tooltip-placement="right"
          >
          </bds-icon-button>
        `
    })}
      ${renderNestedMenu({
        slot: "center",
        target: x `
          <bds-icon-button
            slot="target"
            icon="domain"
            variant="regular-subtle"
            size="medium"
            assist-label="Switch teams"
            tooltip-placement="right"
          >
          </bds-icon-button>
        `
    })}
      ${renderNestedMenu({
        slot: "end",
        target: x `
          <bds-icon-button
            slot="target"
            icon="account"
            variant="regular-subtle"
            size="medium"
            assist-label="Account"
            tooltip-placement="right"
          >
          </bds-icon-button>
        `
    })}
    </bds-platform-menu>
  `;
};

register([Shell, AppOutlet]);
const renderShell = ({ renderMenu, renderHeader, renderMain }) => x `
  <bds-shell>
    ${renderGlobalNav()}
    <bds-app-outlet slot="app-outlet" name="App demo">
      ${renderMenu ? renderMenu() : A$1}
      ${renderHeader ? renderHeader() : A$1}
      ${renderMain ? renderMain() : A$1}
    </bds-app-outlet>
  </bds-shell>
`;

document.adoptedStyleSheets = [
    ...document.adoptedStyleSheets,
    rootDesignTokensStyleSheet
];
register([
    Badge,
    Button,
    ButtonGroup,
    IconButton,
    Lozenge,
    Menu,
    MenuButtonItem,
    MenuItemGroup,
    MenuInfoItem,
    MenuSection,
    TextField,
    SearchField,
    Type,
    ContextMenu,
    Tooltip,
    FormattedNumber
]);
const rootElement = document.querySelector("#demo");
const colorsFixture = ["--bds--color--content--neutral--low"];
const gridFixture = Array.from({ length: 16 }, (_v, i) => i).map(() => ({
    color: `var(${colorsFixture[round(random(0, colorsFixture.length - 1), 0)]})`,
    opacity: round(random(0.1, 0.4), 2)
}));
const fruitFixture = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Guava",
    "Honeydew",
    "Ice apple",
    "Jackfruit",
    "Kiwi",
    "Lime",
    "Mango",
    "Nectarine",
    "Orange",
    "Plum",
    "Quince",
    "Raspberry",
    "Starfruit",
    "Tangerine",
    "Ugli",
    "Victoria plum",
    "Watermelon",
    "Xigua",
    "Yuzu",
    "Ziziphus"
];
const projectsFixture = Array.from({ length: fruitFixture.length }, (_v, i) => i).map((i) => ({
    name: `${fruitFixture[i % fruitFixture.length]} project`,
    value: random(1, 2000)
}));
const actionsFixture = Array.from({ length: fruitFixture.length - 10 }, (_v, i) => i).map((i) => ({
    name: `${fruitFixture[i % fruitFixture.length]} action`,
    value: random(1, 2000)
}));
const onMenuButtonClick = (event) => {
    // Ensure local nav closes when unpinned
    event?.target?.dispatchEvent(new PointerEvent("menubuttonitemclick", {
        bubbles: true,
        cancelable: true
    }));
};
const renderApp = () => renderShell({
    renderMenu: () => x `
      <bds-menu slot="menu">
        <bds-menu-section>
          <bds-button-group layout="stack" gap="none">
            <bds-button @click=${onMenuButtonClick}> Create post </bds-button>
            <bds-button @click=${onMenuButtonClick}>
              Create campaign
            </bds-button>
            <bds-context-menu slot="end">
              <bds-icon-button
                slot="target"
                icon="more"
                assist-label="Create item"
              ></bds-icon-button>
              <bds-menu slot="content">
                <bds-menu-section>
                  <bds-menu-button-item> Create apple </bds-menu-button-item>
                  <bds-menu-button-item> Create banana </bds-menu-button-item>
                  <bds-menu-button-item> Create cherry </bds-menu-button-item>
                </bds-menu-section>
              </bds-menu>
            </bds-context-menu>
          </bds-button-group>
        </bds-menu-section>

        <bds-menu-section label="Project">
          <bds-button-group layout="stack" gap="none">
            <bds-context-menu placement="bottom-start" overlay-target>
              <bds-button slot="target" icon-end="unfold">
                ${projectsFixture[0].name}
              </bds-button>

              <bds-menu slot="content">
                <bds-menu-section>
                  <bds-menu-button-item icon-end="check">
                    ${projectsFixture[0].name}
                  </bds-menu-button-item>
                </bds-menu-section>
                <bds-menu-section fill>
                  ${c$4(projectsFixture.slice(1), (item) => x `
                      <bds-menu-button-item>
                        ${item.name}
                      </bds-menu-button-item>
                    `)}
                </bds-menu-section>
              </bds-menu>
            </bds-context-menu>
            <bds-context-menu slot="end">
              <bds-icon-button
                slot="target"
                icon="more"
                assist-label="Project options"
              ></bds-icon-button>
              <bds-menu slot="content">
                <bds-menu-section>
                  <bds-menu-button-item> Edit project </bds-menu-button-item>
                  <bds-menu-button-item>
                    Edit project members
                  </bds-menu-button-item>
                </bds-menu-section>
                <bds-menu-section>
                  <bds-menu-button-item>
                    Create new project
                  </bds-menu-button-item>
                  <bds-menu-button-item>
                    Manage all projects
                  </bds-menu-button-item>
                </bds-menu-section>
              </bds-menu>
            </bds-context-menu>
          </bds-button-group>
        </bds-menu-section>
        <bds-menu-section label="Feeds">
          <bds-icon-button
            slot="action"
            icon="add"
            size="x-small"
            variant="regular-subtle"
            assist-label="Create feed"
            @click=${onMenuButtonClick}
          ></bds-icon-button>
          <bds-menu-button-item active>Feed overview</bds-menu-button-item>
          <bds-menu-item-group label="Engage feeds">
            <bds-menu-button-item>
              My assignments
              <bds-badge slot="status-end" count="4"></bds-badge>
            </bds-menu-button-item>
            <bds-menu-button-item>
              Unread Facebook
              <bds-badge slot="status-end" count="123"></bds-badge>
            </bds-menu-button-item>
            <bds-menu-button-item>
              Unread Twitter
              <bds-badge slot="status-end" count="56"></bds-badge>
            </bds-menu-button-item>
          </bds-menu-item-group>
          <bds-menu-item-group label="Listen feeds">
            <bds-menu-button-item>
              My assignments
              <bds-badge slot="status-end" count="1"></bds-badge>
            </bds-menu-button-item>
            <bds-menu-button-item>
              Unread Facebook
              <bds-badge slot="status-end" count="43"></bds-badge>
            </bds-menu-button-item>
            <bds-menu-button-item>
              Unread Twitter
              <bds-badge slot="status-end" count="78"></bds-badge>
            </bds-menu-button-item>
          </bds-menu-item-group>
        </bds-menu-section>
        <bds-menu-section label="Reports">
          <bds-menu-button-item>
            All reports
            <bds-formatted-number
              slot="status-end"
              value="432"
            ></bds-formatted-number>
          </bds-menu-button-item>
          <bds-menu-button-item>
            My reports
            <bds-lozenge slot="status-start" variant="accent">
              New
            </bds-lozenge>
            <bds-formatted-number
              slot="status-end"
              value="123"
            ></bds-formatted-number>
          </bds-menu-button-item>
        </bds-menu-section>
        <bds-menu-section label="Automation">
          <bds-menu-button-item> Automated messages </bds-menu-button-item>
          <bds-menu-button-item> Labels & assignments </bds-menu-button-item>
        </bds-menu-section>
        <bds-menu-section label="Fruit">
          ${c$4(actionsFixture, (item, index) => x `
              <bds-menu-button-item>
                ${item.name}
                ${index === 0
        ? x `<bds-lozenge slot="status-start" variant="positive"
                      >Favorite</bds-lozenge
                    >`
        : A$1}
              </bds-menu-button-item>
            `)}
        </bds-menu-section>
      </bds-menu>
    `,
    renderHeader: () => x `
      <div class="demo-header" slot="header">
        <div class="start">
          <bds-button-group>
            <bds-icon-button
              variant="regular-subtle"
              icon="navigate-before"
              assist-label="Previous page"
            ></bds-icon-button>
            <bds-icon-button
              variant="regular-subtle"
              icon="navigate-next"
              assist-label="Next page"
            ></bds-icon-button>
          </bds-button-group>
        </div>
        <div class="middle">
          <bds-search-field
            icon="search"
            class="search"
            placeholder="Search in feeds"
          ></bds-search-field>
        </div>
        <div class="end">
          <bds-button-group>
            <bds-context-menu placement="bottom-start">
              <bds-icon-button
                slot="target"
                variant="regular-subtle"
                icon="more"
                assist-label="More actions"
              ></bds-icon-button>
              <bds-menu slot="content">
                <bds-menu-section>
                  <bds-menu-button-item
                    >Tesseract take root</bds-menu-button-item
                  >
                  <bds-menu-button-item
                    >Flourish astonishment</bds-menu-button-item
                  >
                  <bds-menu-button-item
                    >Invent the universe</bds-menu-button-item
                  >
                </bds-menu-section>
              </bds-menu>
            </bds-context-menu>
            <bds-button variant="regular-subtle" icon-start="notification"
              >Action</bds-button
            >
            <bds-button variant="regular-subtle" icon-start="create"
              >Action</bds-button
            >
            <bds-button variant="accent">Action</bds-button>
          </bds-button-group>
        </div>
      </div>
    `,
    renderMain: () => x `
      <main class="demo-app" slot="main">
        <div class="demo-app__inner">
          <div class="demo-grid">
            ${c$4(gridFixture, ({ color, opacity }) => x `
                <div
                  class="demo-grid__item"
                  style="opacity: ${opacity}; background-color: ${color};"
                ></div>
              `)}
          </div>
          <bds-type class="demo-type">
            <hgroup>
              <h1>Moving fluff</h1>
              <h3>
                1<sup>st</sup> July — Cosmic arena vanquish the
                <a href="#">impossible motes</a>
              </h3>
            </hgroup>
            <p>
              Bits of moving fluff how far away network of wormholes
              <em>not a sunrise</em> but a galaxyrise tesseract courage of our
              questions. At the edge of forever <i>Sea of Tranquility</i> dream
              of the <b>mindʼs eye star stuff</b> harvesting star light
              something incredible is waiting to be known trillion?
              <mark>Rings of Uranus</mark> concept of the number one are
              creatures of the cosmos are creatures of the cosmos star stuff
              harvesting star light extraordinary claims require extraordinary
              evidence and billions upon billions upon billions upon billions
              upon billions upon billions upon billions.
            </p>
            <ul>
              <li>
                Gathered by gravity <em>hundreds of thousands</em> at
                <time>23:00 GMT</time>, hydrogen atoms preserve and cherish that
                pale blue dot something incredible is waiting to be known
                Tunguska event? <b>Inconspicuous motes</b> of rock and gas.
              </li>
              <li>
                <mark>Rings of Uranus</mark> concept of the number one across
                the centuries? Astonishment stirred by starlight dream of the
                mindʼs eye from which we spring concept of the number one
                network of wormholes.
              </li>
              <li>
                Encyclopaedia galactica finite but unbounded concept of the
                number one made in the interiors of collapsing stars stirred by
                starlight stirred by starlight?
              </li>
            </ul>
            <p>
              <q>Vastness is bearable</q> only through love Jean-François
              Champollion tesseract galaxies the sky calls to us stirred by
              starlight. Vangelis are creatures of the
              <a href="#"
                >cosmos rings of Uranus inconspicuous motes of rock and gas
                realm</a
              >
              of the galaxies Orionʼs sword. Orionʼs sword something incredible
              is waiting to be known a very small stage in a vast cosmic arena
              extraordinary claims require extraordinary evidence Tunguska event
              a still more glorious dawn awaits.
            </p>
            <ol>
              <li>
                <kbd>⌥ Option</kbd> + <kbd>1</kbd> — Two ghostly white figures
                in coveralls and helmets are softly dancing kindling the energy
                hidden in matter <mark>rings of Uranus</mark> Flatland
                decipherment.
              </li>
              <li>
                <kbd>⌥ Option</kbd> + <kbd>2</kbd> — Hypatia made in the
                interiors of collapsing stars Sea of Tranquility muse about from
                which we spring inconspicuous motes of rock and gas.
              </li>
              <li>
                <kbd>⌥ Option</kbd> + <kbd>3</kbd> — The carbon in our apple
                pies inconspicuous motes of rock and gas gathered by gravity
                dream of the mind's eye dream of the mind's eye shores.
              </li>
            </ol>
            <p>
              The carbon in our apple pies consciousness hearts of the stars
              Drake Equation paroxysm of global death decipherment? The only
              home we've ever known take root and flourish star stuff harvesting
              star light courage of our questions
              <mark>rings of Uranus</mark> finite but unbounded.
            </p>
            <figure>
              <blockquote>
                <p>
                  Flatland at the edge of forever kindling the energy hidden in
                  matter the sky calls to us as a patch of light encyclopaedia
                  galactica?
                </p>
              </blockquote>
              <figcaption><cite>Lionel Richie</cite></figcaption>
            </figure>
            <p>
              Realm of the galaxies. Euclid not a sunrise but a galaxyrise
              Cambrian explosion billions upon billions Tunguska event? A still
              more glorious dawn awaits Sea of Tranquility star stuff harvesting
              star light across the centuries across the centuries hearts of the
              stars?
            </p>
          </bds-type>
        </div>
      </main>
    `
});
D(renderApp(), rootElement);
