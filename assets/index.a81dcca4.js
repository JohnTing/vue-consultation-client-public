const bf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};bf();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=function(t,e){if(!t)throw Pn(e)},Pn=function(t){return new Error("Firebase Database ("+lc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_f=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},fs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=o>>2,u=(o&3)<<4|a>>4;let m=(a&15)<<2|c>>6,g=c&63;l||(g=64,s||(m=64)),r.push(n[d],n[u],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_f(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||c==null||u==null)throw Error();const m=o<<2|a>>4;if(r.push(m),c!==64){const g=a<<4&240|c>>2;if(r.push(g),u!==64){const E=c<<6&192|u;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},dc=function(t){const e=cc(t);return fs.encodeByteArray(e,!0)},uc=function(t){return dc(t).replace(/\./g,"")},So=function(t){try{return fs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t){return fc(void 0,t)}function fc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!vf(n)||(t[n]=fc(t[n],e[n]));return t}function vf(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ps(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function wf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yf(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pc(){return lc.NODE_ADMIN===!0}function kf(){return typeof indexedDB=="object"}function Ef(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=If,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ir.prototype.create)}}class Ir{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?Cf(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new On(i,a,r)}}function Cf(t,e){return t.replace(Tf,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Tf=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){return JSON.parse(t)}function ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=ar(So(o[0])||""),n=ar(So(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Sf=function(t){const e=hc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Rf=function(t){const e=hc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function En(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ro(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ei(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ti(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Ra(o)&&Ra(s)){if(!ti(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ra(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Yn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const m=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^o&(s^a),d=1518500249):(c=o^s^a,d=1859775393):u<60?(c=o&s|a&(o|s),d=2400959708):(c=o^s^a,d=3395469782);const m=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(o[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=e[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}function Af(t,e){const n=new Pf(t,e);return n.subscribe.bind(n)}class Pf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Of(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=oo),i.error===void 0&&(i.error=oo),i.complete===void 0&&(i.complete=oo);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Of(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oo(){}function gc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,v(r<t.length,"Surrogate pair missing trail surrogate.");const s=t.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ti=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){return t&&t._delegate?t._delegate:t}class Qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ms;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ff(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lf(t){return t===Ut?void 0:t}function Ff(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Df(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Uf={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},jf=Y.INFO,Bf={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Wf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Bf[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hs{constructor(e){this.name=e,this._logLevel=jf,this._logHandler=Wf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Hf=(t,e)=>e.some(n=>t instanceof n);let Na,Aa;function $f(){return Na||(Na=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vf(){return Aa||(Aa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bc=new WeakMap,No=new WeakMap,_c=new WeakMap,so=new WeakMap,gs=new WeakMap;function qf(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Tt(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&bc.set(n,t)}).catch(()=>{}),gs.set(e,t),e}function Kf(t){if(No.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});No.set(t,e)}let Ao={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return No.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_c.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gf(t){Ao=t(Ao)}function Yf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ao(this),e,...n);return _c.set(r,e.sort?e.sort():[e]),Tt(r)}:Vf().includes(t)?function(...e){return t.apply(ao(this),e),Tt(bc.get(this))}:function(...e){return Tt(t.apply(ao(this),e))}}function Qf(t){return typeof t=="function"?Yf(t):(t instanceof IDBTransaction&&Kf(t),Hf(t,$f())?new Proxy(t,Ao):t)}function Tt(t){if(t instanceof IDBRequest)return qf(t);if(so.has(t))return so.get(t);const e=Qf(t);return e!==t&&(so.set(t,e),gs.set(e,t)),e}const ao=t=>gs.get(t);function Jf(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Tt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Tt(s.result),l.oldVersion,l.newVersion,Tt(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Xf=["get","getKey","getAll","getAllKeys","count"],Zf=["put","add","delete","clear"],lo=new Map;function Pa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lo.get(e))return lo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Zf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Xf.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return lo.set(e,o),o}Gf(t=>({...t,get:(e,n,r)=>Pa(e,n)||t.get(e,n,r),has:(e,n)=>!!Pa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Po="@firebase/app",Oa="0.7.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new hs("@firebase/app"),nm="@firebase/app-compat",rm="@firebase/analytics-compat",im="@firebase/analytics",om="@firebase/app-check-compat",sm="@firebase/app-check",am="@firebase/auth",lm="@firebase/auth-compat",cm="@firebase/database",dm="@firebase/database-compat",um="@firebase/functions",fm="@firebase/functions-compat",mm="@firebase/installations",pm="@firebase/installations-compat",hm="@firebase/messaging",gm="@firebase/messaging-compat",bm="@firebase/performance",_m="@firebase/performance-compat",xm="@firebase/remote-config",vm="@firebase/remote-config-compat",wm="@firebase/storage",ym="@firebase/storage-compat",km="@firebase/firestore",Em="@firebase/firestore-compat",Im="firebase",Cm="9.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="[DEFAULT]",Tm={[Po]:"fire-core",[nm]:"fire-core-compat",[im]:"fire-analytics",[rm]:"fire-analytics-compat",[sm]:"fire-app-check",[om]:"fire-app-check-compat",[am]:"fire-auth",[lm]:"fire-auth-compat",[cm]:"fire-rtdb",[dm]:"fire-rtdb-compat",[um]:"fire-fn",[fm]:"fire-fn-compat",[mm]:"fire-iid",[pm]:"fire-iid-compat",[hm]:"fire-fcm",[gm]:"fire-fcm-compat",[bm]:"fire-perf",[_m]:"fire-perf-compat",[xm]:"fire-rc",[vm]:"fire-rc-compat",[wm]:"fire-gcs",[ym]:"fire-gcs-compat",[km]:"fire-fst",[Em]:"fire-fst-compat","fire-js":"fire-js",[Im]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Map,Oo=new Map;function Sm(t,e){try{t.container.addComponent(e)}catch(n){bs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function In(t){const e=t.name;if(Oo.has(e))return bs.debug(`There were multiple attempts to register component ${e}.`),!1;Oo.set(e,t);for(const n of ni.values())Sm(n,t);return!0}function _s(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Jt=new Ir("app","Firebase",Rm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=Cm;function Am(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:xc,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Jt.create("bad-app-name",{appName:String(r)});const i=ni.get(r);if(i){if(ti(t,i.options)&&ti(n,i.config))return i;throw Jt.create("duplicate-app",{appName:r})}const o=new zf(r);for(const a of Oo.values())o.addComponent(a);const s=new Nm(t,n,o);return ni.set(r,s),s}function vc(t=xc){const e=ni.get(t);if(!e)throw Jt.create("no-app",{appName:t});return e}function St(t,e,n){var r;let i=(r=Tm[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bs.warn(a.join(" "));return}In(new Qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="firebase-heartbeat-database",Om=1,lr="firebase-heartbeat-store";let co=null;function wc(){return co||(co=Jf(Pm,Om,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lr)}}}).catch(t=>{throw Jt.create("storage-open",{originalErrorMessage:t.message})})),co}async function Mm(t){var e;try{return(await wc()).transaction(lr).objectStore(lr).get(yc(t))}catch(n){throw Jt.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Ma(t,e){var n;try{const i=(await wc()).transaction(lr,"readwrite");return await i.objectStore(lr).put(e,yc(t)),i.done}catch(r){throw Jt.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function yc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=1024,Lm=30*24*60*60*1e3;class Fm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Um(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Da();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Lm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Da(),{heartbeatsToSend:n,unsentEntries:r}=zm(this._heartbeatsCache.heartbeats),i=uc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Da(){return new Date().toISOString().substring(0,10)}function zm(t,e=Dm){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),La(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),La(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Um{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kf()?Ef().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function La(t){return uc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){In(new Qt("platform-logger",e=>new em(e),"PRIVATE")),In(new Qt("heartbeat",e=>new Fm(e),"PRIVATE")),St(Po,Oa,t),St(Po,Oa,"esm2017"),St("fire-js","")}jm("");function xs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bm=kc,Ec=new Ir("auth","Firebase",kc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new hs("@firebase/auth");function Kr(t,...e){Fa.logLevel<=Y.ERROR&&Fa.error(`Auth (${Cr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,...e){throw vs(t,...e)}function nt(t,...e){return vs(t,...e)}function Wm(t,e,n){const r=Object.assign(Object.assign({},Bm()),{[e]:n});return new Ir("auth","Firebase",r).create(e,{appName:t.name})}function vs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ec.create(t,...e)}function P(t,e,...n){if(!t)throw vs(e,...n)}function lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kr(e),new Error(e)}function mt(t,e){t||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map;function ct(t){mt(t instanceof Function,"Expected a class definition");let e=za.get(t);return e?(mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,za.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t,e){const n=_s(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ti(o,e!=null?e:{}))return i;Ye(i,"already-initialized")}return n.initialize({options:e})}function $m(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vm(){return Ua()==="http:"||Ua()==="https:"}function Ua(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vm()||wf()||"connection"in navigator)?navigator.onLine:!0}function Km(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=ps()||mc()}get(){return qm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new Tr(3e4,6e4);function Si(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sr(t,e,n,r,i={}){return Cc(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Mn(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ic.fetch()(Tc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Cc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gm),e);try{const i=new Qm(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ur(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ur(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ur(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ur(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Wm(t,d,c);Ye(t,d)}}catch(i){if(i instanceof On)throw i;Ye(t,"network-request-failed")}}async function Ri(t,e,n,r,i={}){const o=await Sr(t,e,n,r,i);return"mfaPendingCredential"in o&&Ye(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Tc(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ws(t.config,i):`${t.config.apiScheme}://${i}`}class Qm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),Ym.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ur(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jm(t,e){return Sr(t,"POST","/v1/accounts:delete",e)}async function Xm(t,e){return Sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zm(t,e=!1){const n=Lt(t),r=await n.getIdToken(e),i=ys(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Xn(uo(i.auth_time)),issuedAtTime:Xn(uo(i.iat)),expirationTime:Xn(uo(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function uo(t){return Number(t)*1e3}function ys(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Kr("JWT malformed, contained fewer than 3 sections"),null;try{const o=So(r);return o?JSON.parse(o):(Kr("Failed to decode base64 JWT payload"),null)}catch(o){return Kr("Caught error parsing JWT payload as JSON",(e=o)===null||e===void 0?void 0:e.toString()),null}}function ep(t){const e=ys(t);return P(e,"internal-error"),P(typeof e.exp!="undefined","internal-error"),P(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&tp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xn(this.lastLoginAt),this.creationTime=Xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t){var e;const n=t.auth,r=await t.getIdToken(),i=await cr(t,Xm(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?op(o.providerUserInfo):[],a=ip(t.providerData,s),l=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Sc(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function rp(t){const e=Lt(t);await ri(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ip(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function op(t){return t.map(e=>{var{providerId:n}=e,r=xs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(t,e){const n=await Cc(t,{},async()=>{const r=Mn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Tc(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ic.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken!="undefined","internal-error"),P(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):ep(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await sp(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new dr;return r&&(P(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(P(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dr,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e){P(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class qt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=xs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new np(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Sc(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await cr(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zm(this,e)}reload(){return rp(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ri(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cr(this,Jm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,E=(s=n.photoURL)!==null&&s!==void 0?s:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,D=(c=n.createdAt)!==null&&c!==void 0?c:void 0,ae=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:q,emailVerified:ee,isAnonymous:pe,providerData:Qe,stsTokenManager:Je}=n;P(q&&Je,e,"internal-error");const j=dr.fromJSON(this.name,Je);P(typeof q=="string",e,"internal-error"),xt(u,e.name),xt(m,e.name),P(typeof ee=="boolean",e,"internal-error"),P(typeof pe=="boolean",e,"internal-error"),xt(g,e.name),xt(E,e.name),xt(T,e.name),xt(S,e.name),xt(D,e.name),xt(ae,e.name);const X=new qt({uid:q,auth:e,email:m,emailVerified:ee,displayName:u,isAnonymous:pe,photoURL:E,phoneNumber:g,tenantId:T,stsTokenManager:j,createdAt:D,lastLoginAt:ae});return Qe&&Array.isArray(Qe)&&(X.providerData=Qe.map(ie=>Object.assign({},ie))),S&&(X._redirectEventId=S),X}static async _fromIdTokenResponse(e,n,r=!1){const i=new dr;i.updateFromServerResponse(n);const o=new qt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ri(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rc.type="NONE";const ja=Rc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,e,n){return`firebase:${t}:${e}:${n}`}class gn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Gr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Gr("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gn(ct(ja),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||ct(ja);const s=Gr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(s);if(d){const u=qt._fromJSON(e,d);c!==o&&(a=u),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new gn(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new gn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mc(e))return"Blackberry";if(Dc(e))return"Webos";if(ks(e))return"Safari";if((e.includes("chrome/")||Ac(e))&&!e.includes("edge/"))return"Chrome";if(Oc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nc(t=ve()){return/firefox\//i.test(t)}function ks(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ac(t=ve()){return/crios\//i.test(t)}function Pc(t=ve()){return/iemobile/i.test(t)}function Oc(t=ve()){return/android/i.test(t)}function Mc(t=ve()){return/blackberry/i.test(t)}function Dc(t=ve()){return/webos/i.test(t)}function Ni(t=ve()){return/iphone|ipad|ipod/i.test(t)}function ap(t=ve()){var e;return Ni(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lp(){return yf()&&document.documentMode===10}function Lc(t=ve()){return Ni(t)||Oc(t)||Dc(t)||Mc(t)||/windows phone/i.test(t)||Pc(t)}function cp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t,e=[]){let n;switch(t){case"Browser":n=Ba(ve());break;case"Worker":n=`${Ba(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wa(this),this.idTokenSubscription=new Wa(this),this.beforeStateQueue=new dp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ec,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ct(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ri(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Km()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ir("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ct(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await gn.create(this,[ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return P(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Es(t){return Lt(t)}class Wa{constructor(e){this.auth=e,this.observer=null,this.addObserver=Af(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,n){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function fp(t,e){return Sr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(t,e){return Ri(t,"POST","/v1/accounts:signInWithPassword",Si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(t,e){return Ri(t,"POST","/v1/accounts:signInWithEmailLink",Si(t,e))}async function hp(t,e){return Ri(t,"POST","/v1/accounts:signInWithEmailLink",Si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Is{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ur(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ur(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return mp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pp(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return fp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(t,e){return Ri(t,"POST","/v1/accounts:signInWithIdp",Si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="http://localhost";class Xt extends Is{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=xs(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Xt(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return bn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bn(e,n)}buildRequest(){const e={requestUri:gp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _p(t){const e=Gn(Yn(t)).link,n=e?Gn(Yn(e)).deep_link_id:null,r=Gn(Yn(t)).deep_link_id;return(r?Gn(Yn(r)).link:null)||r||n||e||t}class Cs{constructor(e){var n,r,i,o,s,a;const l=Gn(Yn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,u=bp((i=l.mode)!==null&&i!==void 0?i:null);P(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_p(e);try{return new Cs(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.providerId=Dn.PROVIDER_ID}static credential(e,n){return ur._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cs.parseLink(n);return P(r,"argument-error"),ur._fromEmailAndCode(e,r.code,r.tenantId)}}Dn.PROVIDER_ID="password";Dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends zc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Rr{constructor(){super("facebook.com")}static credential(e){return Xt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Rr{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Rr{constructor(){super("twitter.com")}static credential(e,n){return Xt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await qt._fromIdTokenResponse(e,r,i),s=Ha(r);return new Cn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ha(r);return new Cn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ha(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends On{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ii.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ii(e,n,r,i)}}function Uc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ii._fromErrorAndOperation(t,o,e,r):o})}async function xp(t,e,n=!1){const r=await cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t,e,n=!1){var r;const{auth:i}=t,o="reauthenticate";try{const s=await cr(t,Uc(i,o,e,t),n);P(s.idToken,i,"internal-error");const a=ys(s.idToken);P(a,i,"internal-error");const{sub:l}=a;return P(t.uid===l,i,"user-mismatch"),Cn._forOperation(t,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ye(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jc(t,e,n=!1){const r="signIn",i=await Uc(t,r,e),o=await Cn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function wp(t,e){return jc(Es(t),e)}function yp(t,e,n){return wp(Lt(t),Dn.credential(e,n))}const oi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oi,"1"),this.storage.removeItem(oi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(){const t=ve();return ks(t)||Ni(t)}const Ep=1e3,Ip=10;class Wc extends Bc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kp()&&cp(),this.fallbackToPolling=Lc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);lp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ip):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ep)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wc.type="LOCAL";const Cp=Wc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends Bc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hc.type="SESSION";const $c=Hc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ai(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(n.origin,o)),l=await Tp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ai.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=Ts("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(u){const m=u;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function Rp(t){rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(){return typeof rt().WorkerGlobalScope!="undefined"&&typeof rt().importScripts=="function"}async function Np(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ap(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Pp(){return Vc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="firebaseLocalStorageDb",Op=1,si="firebaseLocalStorage",Kc="fbase_key";class Nr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pi(t,e){return t.transaction([si],e?"readwrite":"readonly").objectStore(si)}function Mp(){const t=indexedDB.deleteDatabase(qc);return new Nr(t).toPromise()}function Do(){const t=indexedDB.open(qc,Op);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(si,{keyPath:Kc})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(si)?e(r):(r.close(),await Mp(),e(await Do()))})})}async function $a(t,e,n){const r=Pi(t,!0).put({[Kc]:e,value:n});return new Nr(r).toPromise()}async function Dp(t,e){const n=Pi(t,!1).get(e),r=await new Nr(n).toPromise();return r===void 0?null:r.value}function Va(t,e){const n=Pi(t,!0).delete(e);return new Nr(n).toPromise()}const Lp=800,Fp=3;class Gc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Do(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Fp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ai._getInstance(Pp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Np(),!this.activeServiceWorker)return;this.sender=new Sp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ap()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Do();return await $a(e,oi,"1"),await Va(e,oi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$a(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Dp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Va(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Pi(i,!1).getAll();return new Nr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gc.type="LOCAL";const zp=Gc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=nt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Up().appendChild(r)})}function Bp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Tr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t,e){return e?ct(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends Is{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hp(t){return jc(t.auth,new Ss(t),t.bypassAuthState)}function $p(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),vp(n,new Ss(t),t.bypassAuthState)}async function Vp(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),xp(n,new Ss(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hp;case"linkViaPopup":case"linkViaRedirect":return Vp;case"reauthViaPopup":case"reauthViaRedirect":return $p;default:Ye(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=new Tr(2e3,1e4);class mn extends Yc{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=Ts();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qp.get())};e()}}mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="pendingRedirect",Yr=new Map;class Gp extends Yc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yr.get(this.auth._key());if(!e){try{const r=await Yp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yr.set(this.auth._key(),e)}return this.bypassAuthState||Yr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yp(t,e){const n=Xp(e),r=Jp(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Qp(t,e){Yr.set(t._key(),e)}function Jp(t){return ct(t._redirectPersistence)}function Xp(t){return Gr(Kp,t.config.apiKey,t.name)}async function Zp(t,e,n=!1){const r=Es(t),i=Wp(r,e),s=await new Gp(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=10*60*1e3;class th{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qc(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eh&&this.cachedEventUids.clear(),this.cachedEventUids.has(qa(e))}saveEventToCache(e){this.cachedEventUids.add(qa(e)),this.lastProcessedEventTime=Date.now()}}function qa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(t,e={}){return Sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oh=/^https?/;async function sh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rh(t);for(const n of e)try{if(ah(n))return}catch{}Ye(t,"unauthorized-domain")}function ah(t){const e=Mo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!oh.test(n))return!1;if(ih.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new Tr(3e4,6e4);function Ka(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ch(t){return new Promise((e,n)=>{var r,i,o;function s(){Ka(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ka(),n(nt(t,"network-request-failed"))},timeout:lh.get()})}if(!((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=rt().gapi)===null||o===void 0)&&o.load)s();else{const a=Bp("iframefcb");return rt()[a]=()=>{gapi.load?s():n(nt(t,"network-request-failed"))},jp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qr=null,e})}let Qr=null;function dh(t){return Qr=Qr||ch(t),Qr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=new Tr(5e3,15e3),fh="__/auth/iframe",mh="emulator/auth/iframe",ph={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gh(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ws(e,mh):`https://${t.config.authDomain}/${fh}`,r={apiKey:e.apiKey,appName:t.name,v:Cr},i=hh.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Mn(r).slice(1)}`}async function bh(t){const e=await dh(t),n=rt().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:gh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ph,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=nt(t,"network-request-failed"),a=rt().setTimeout(()=>{o(s)},uh.get());function l(){rt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xh=500,vh=600,wh="_blank",yh="http://localhost";class Ga{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kh(t,e,n,r=xh,i=vh){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_h),{width:r.toString(),height:i.toString(),top:o,left:s}),c=ve().toLowerCase();n&&(a=Ac(c)?wh:n),Nc(c)&&(e=e||yh,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,E])=>`${m}${g}=${E},`,"");if(ap(c)&&a!=="_self")return Eh(e||"",a),new Ga(null);const u=window.open(e||"",a,d);P(u,t,"popup-blocked");try{u.focus()}catch{}return new Ga(u)}function Eh(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="__/auth/handler",Ch="emulator/auth/handler";function Ya(t,e,n,r,i,o){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cr,eventId:i};if(e instanceof zc){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Ro(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(o||{}))s[l]=c}if(e instanceof Rr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Th(t)}?${Mn(a).slice(1)}`}function Th({config:t}){return t.emulator?ws(t,Ch):`https://${t.authDomain}/${Ih}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="webStorageSupport";class Sh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$c,this._completeRedirectFn=Zp,this._overrideRedirectResult=Qp}async _openPopup(e,n,r,i){var o;mt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Ya(e,n,r,Mo(),i);return kh(e,s,Ts())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Rp(Ya(e,n,r,Mo(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(mt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bh(e),r=new th(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fo,{type:fo},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[fo];s!==void 0&&n(!!s),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lc()||ks()||Ni()}}const Rh=Sh;var Qa="@firebase/auth",Ja="0.20.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ph(t){In(new Qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{P(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),P(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const c={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fc(t)},d=new up(a,l,c);return $m(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),In(new Qt("auth-internal",e=>{const n=Es(e.getProvider("auth").getImmediate());return(r=>new Nh(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(Qa,Ja,Ah(t)),St(Qa,Ja,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t=vc()){const e=_s(t,"auth");return e.isInitialized()?e.getImmediate():Hm(t,{popupRedirectResolver:Rh,persistence:[zp,Cp,$c]})}Ph("Browser");function Rs(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Oh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mh=Rs(Oh);function Xc(t){return!!t||t===""}function Oi(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=fe(r)?Fh(r):Oi(r);if(i)for(const o in i)e[o]=i[o]}return e}else{if(fe(t))return t;if(me(t))return t}}const Dh=/;(?![^(]*\))/g,Lh=/:(.+)/;function Fh(t){const e={};return t.split(Dh).forEach(n=>{if(n){const r=n.split(Lh);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ns(t){let e="";if(fe(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const r=Ns(t[n]);r&&(e+=r+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zn=t=>fe(t)?t:t==null?"":M(t)||me(t)&&(t.toString===nd||!L(t.toString))?JSON.stringify(t,Zc,2):String(t),Zc=(t,e)=>e&&e.__v_isRef?Zc(t,e.value):xn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:ed(e)?{[`Set(${e.size})`]:[...e.values()]}:me(e)&&!M(e)&&!rd(e)?String(e):e,Q={},_n=[],Ve=()=>{},zh=()=>!1,Uh=/^on[^a-z]/,Mi=t=>Uh.test(t),As=t=>t.startsWith("onUpdate:"),we=Object.assign,Ps=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jh=Object.prototype.hasOwnProperty,B=(t,e)=>jh.call(t,e),M=Array.isArray,xn=t=>Di(t)==="[object Map]",ed=t=>Di(t)==="[object Set]",L=t=>typeof t=="function",fe=t=>typeof t=="string",Os=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",td=t=>me(t)&&L(t.then)&&L(t.catch),nd=Object.prototype.toString,Di=t=>nd.call(t),Bh=t=>Di(t).slice(8,-1),rd=t=>Di(t)==="[object Object]",Ms=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Jr=Rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Li=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wh=/-(\w)/g,Tn=Li(t=>t.replace(Wh,(e,n)=>n?n.toUpperCase():"")),Hh=/\B([A-Z])/g,Ln=Li(t=>t.replace(Hh,"-$1").toLowerCase()),id=Li(t=>t.charAt(0).toUpperCase()+t.slice(1)),mo=Li(t=>t?`on${id(t)}`:""),fr=(t,e)=>!Object.is(t,e),po=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ai=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$h=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xa;const Vh=()=>Xa||(Xa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let et;class qh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&et&&(this.parent=et,this.index=(et.scopes||(et.scopes=[])).push(this)-1)}run(e){if(this.active){const n=et;try{return et=this,e()}finally{et=n}}}on(){et=this}off(){et=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Kh(t,e=et){e&&e.active&&e.effects.push(t)}const Ds=t=>{const e=new Set(t);return e.w=0,e.n=0,e},od=t=>(t.w&Pt)>0,sd=t=>(t.n&Pt)>0,Gh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pt},Yh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];od(i)&&!sd(i)?i.delete(t):e[n++]=i,i.w&=~Pt,i.n&=~Pt}e.length=n}},Lo=new WeakMap;let Qn=0,Pt=1;const Fo=30;let Ue;const Kt=Symbol(""),zo=Symbol("");class Ls{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Kh(this,r)}run(){if(!this.active)return this.fn();let e=Ue,n=Rt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ue,Ue=this,Rt=!0,Pt=1<<++Qn,Qn<=Fo?Gh(this):Za(this),this.fn()}finally{Qn<=Fo&&Yh(this),Pt=1<<--Qn,Ue=this.parent,Rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ue===this?this.deferStop=!0:this.active&&(Za(this),this.onStop&&this.onStop(),this.active=!1)}}function Za(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Rt=!0;const ad=[];function Fn(){ad.push(Rt),Rt=!1}function zn(){const t=ad.pop();Rt=t===void 0?!0:t}function Me(t,e,n){if(Rt&&Ue){let r=Lo.get(t);r||Lo.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Ds()),ld(i)}}function ld(t,e){let n=!1;Qn<=Fo?sd(t)||(t.n|=Pt,n=!od(t)):n=!t.has(Ue),n&&(t.add(Ue),Ue.deps.push(t))}function pt(t,e,n,r,i,o){const s=Lo.get(t);if(!s)return;let a=[];if(e==="clear")a=[...s.values()];else if(n==="length"&&M(t))s.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(s.get(n)),e){case"add":M(t)?Ms(n)&&a.push(s.get("length")):(a.push(s.get(Kt)),xn(t)&&a.push(s.get(zo)));break;case"delete":M(t)||(a.push(s.get(Kt)),xn(t)&&a.push(s.get(zo)));break;case"set":xn(t)&&a.push(s.get(Kt));break}if(a.length===1)a[0]&&Uo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Uo(Ds(l))}}function Uo(t,e){const n=M(t)?t:[...t];for(const r of n)r.computed&&el(r);for(const r of n)r.computed||el(r)}function el(t,e){(t!==Ue||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Qh=Rs("__proto__,__v_isRef,__isVue"),cd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Os)),Jh=Fs(),Xh=Fs(!1,!0),Zh=Fs(!0),tl=eg();function eg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=V(this);for(let o=0,s=this.length;o<s;o++)Me(r,"get",o+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(V)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fn();const r=V(this)[e].apply(this,n);return zn(),r}}),t}function Fs(t=!1,e=!1){return function(r,i,o){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&o===(t?e?gg:pd:e?md:fd).get(r))return r;const s=M(r);if(!t&&s&&B(tl,i))return Reflect.get(tl,i,o);const a=Reflect.get(r,i,o);return(Os(i)?cd.has(i):Qh(i))||(t||Me(r,"get",i),e)?a:xe(a)?s&&Ms(i)?a:a.value:me(a)?t?hd(a):js(a):a}}const tg=dd(),ng=dd(!0);function dd(t=!1){return function(n,r,i,o){let s=n[r];if(mr(s)&&xe(s)&&!xe(i))return!1;if(!t&&!mr(i)&&(jo(i)||(i=V(i),s=V(s)),!M(n)&&xe(s)&&!xe(i)))return s.value=i,!0;const a=M(n)&&Ms(r)?Number(r)<n.length:B(n,r),l=Reflect.set(n,r,i,o);return n===V(o)&&(a?fr(i,s)&&pt(n,"set",r,i):pt(n,"add",r,i)),l}}function rg(t,e){const n=B(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&pt(t,"delete",e,void 0),r}function ig(t,e){const n=Reflect.has(t,e);return(!Os(e)||!cd.has(e))&&Me(t,"has",e),n}function og(t){return Me(t,"iterate",M(t)?"length":Kt),Reflect.ownKeys(t)}const ud={get:Jh,set:tg,deleteProperty:rg,has:ig,ownKeys:og},sg={get:Zh,set(t,e){return!0},deleteProperty(t,e){return!0}},ag=we({},ud,{get:Xh,set:ng}),zs=t=>t,Fi=t=>Reflect.getPrototypeOf(t);function jr(t,e,n=!1,r=!1){t=t.__v_raw;const i=V(t),o=V(e);n||(e!==o&&Me(i,"get",e),Me(i,"get",o));const{has:s}=Fi(i),a=r?zs:n?Ws:pr;if(s.call(i,e))return a(t.get(e));if(s.call(i,o))return a(t.get(o));t!==i&&t.get(e)}function Br(t,e=!1){const n=this.__v_raw,r=V(n),i=V(t);return e||(t!==i&&Me(r,"has",t),Me(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Wr(t,e=!1){return t=t.__v_raw,!e&&Me(V(t),"iterate",Kt),Reflect.get(t,"size",t)}function nl(t){t=V(t);const e=V(this);return Fi(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function rl(t,e){e=V(e);const n=V(this),{has:r,get:i}=Fi(n);let o=r.call(n,t);o||(t=V(t),o=r.call(n,t));const s=i.call(n,t);return n.set(t,e),o?fr(e,s)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function il(t){const e=V(this),{has:n,get:r}=Fi(e);let i=n.call(e,t);i||(t=V(t),i=n.call(e,t)),r&&r.call(e,t);const o=e.delete(t);return i&&pt(e,"delete",t,void 0),o}function ol(){const t=V(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function Hr(t,e){return function(r,i){const o=this,s=o.__v_raw,a=V(s),l=e?zs:t?Ws:pr;return!t&&Me(a,"iterate",Kt),s.forEach((c,d)=>r.call(i,l(c),l(d),o))}}function $r(t,e,n){return function(...r){const i=this.__v_raw,o=V(i),s=xn(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,c=i[t](...r),d=n?zs:e?Ws:pr;return!e&&Me(o,"iterate",l?zo:Kt),{next(){const{value:u,done:m}=c.next();return m?{value:u,done:m}:{value:a?[d(u[0]),d(u[1])]:d(u),done:m}},[Symbol.iterator](){return this}}}}function vt(t){return function(...e){return t==="delete"?!1:this}}function lg(){const t={get(o){return jr(this,o)},get size(){return Wr(this)},has:Br,add:nl,set:rl,delete:il,clear:ol,forEach:Hr(!1,!1)},e={get(o){return jr(this,o,!1,!0)},get size(){return Wr(this)},has:Br,add:nl,set:rl,delete:il,clear:ol,forEach:Hr(!1,!0)},n={get(o){return jr(this,o,!0)},get size(){return Wr(this,!0)},has(o){return Br.call(this,o,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Hr(!0,!1)},r={get(o){return jr(this,o,!0,!0)},get size(){return Wr(this,!0)},has(o){return Br.call(this,o,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Hr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=$r(o,!1,!1),n[o]=$r(o,!0,!1),e[o]=$r(o,!1,!0),r[o]=$r(o,!0,!0)}),[t,n,e,r]}const[cg,dg,ug,fg]=lg();function Us(t,e){const n=e?t?fg:ug:t?dg:cg;return(r,i,o)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(B(n,i)&&i in r?n:r,i,o)}const mg={get:Us(!1,!1)},pg={get:Us(!1,!0)},hg={get:Us(!0,!1)},fd=new WeakMap,md=new WeakMap,pd=new WeakMap,gg=new WeakMap;function bg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _g(t){return t.__v_skip||!Object.isExtensible(t)?0:bg(Bh(t))}function js(t){return mr(t)?t:Bs(t,!1,ud,mg,fd)}function xg(t){return Bs(t,!1,ag,pg,md)}function hd(t){return Bs(t,!0,sg,hg,pd)}function Bs(t,e,n,r,i){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=i.get(t);if(o)return o;const s=_g(t);if(s===0)return t;const a=new Proxy(t,s===2?r:n);return i.set(t,a),a}function vn(t){return mr(t)?vn(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function jo(t){return!!(t&&t.__v_isShallow)}function gd(t){return vn(t)||mr(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function bd(t){return ai(t,"__v_skip",!0),t}const pr=t=>me(t)?js(t):t,Ws=t=>me(t)?hd(t):t;function _d(t){Rt&&Ue&&(t=V(t),ld(t.dep||(t.dep=Ds())))}function xd(t,e){t=V(t),t.dep&&Uo(t.dep)}function xe(t){return!!(t&&t.__v_isRef===!0)}function dt(t){return vg(t,!1)}function vg(t,e){return xe(t)?t:new wg(t,e)}class wg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:pr(e)}get value(){return _d(this),this._value}set value(e){e=this.__v_isShallow?e:V(e),fr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:pr(e),xd(this))}}function yg(t){return xe(t)?t.value:t}const kg={get:(t,e,n)=>yg(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function vd(t){return vn(t)?t:new Proxy(t,kg)}class Eg{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ls(e,()=>{this._dirty||(this._dirty=!0,xd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=V(this);return _d(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ig(t,e,n=!1){let r,i;const o=L(t);return o?(r=t,i=Ve):(r=t.get,i=t.set),new Eg(r,i,o||!i,n)}function Nt(t,e,n,r){let i;try{i=r?t(...r):t()}catch(o){zi(o,e,n)}return i}function Le(t,e,n,r){if(L(t)){const o=Nt(t,e,n,r);return o&&td(o)&&o.catch(s=>{zi(s,e,n)}),o}const i=[];for(let o=0;o<t.length;o++)i.push(Le(t[o],e,n,r));return i}function zi(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let o=e.parent;const s=e.proxy,a=n;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,s,a)===!1)return}o=o.parent}const l=e.appContext.config.errorHandler;if(l){Nt(l,null,10,[t,s,a]);return}}Cg(t,n,i,r)}function Cg(t,e,n,r=!0){console.error(t)}let li=!1,Bo=!1;const Pe=[];let at=0;const er=[];let Jn=null,un=0;const tr=[];let wt=null,fn=0;const wd=Promise.resolve();let Hs=null,Wo=null;function Tg(t){const e=Hs||wd;return t?e.then(this?t.bind(this):t):e}function Sg(t){let e=at+1,n=Pe.length;for(;e<n;){const r=e+n>>>1;hr(Pe[r])<t?e=r+1:n=r}return e}function yd(t){(!Pe.length||!Pe.includes(t,li&&t.allowRecurse?at+1:at))&&t!==Wo&&(t.id==null?Pe.push(t):Pe.splice(Sg(t.id),0,t),kd())}function kd(){!li&&!Bo&&(Bo=!0,Hs=wd.then(Cd))}function Rg(t){const e=Pe.indexOf(t);e>at&&Pe.splice(e,1)}function Ed(t,e,n,r){M(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),kd()}function Ng(t){Ed(t,Jn,er,un)}function Ag(t){Ed(t,wt,tr,fn)}function Ui(t,e=null){if(er.length){for(Wo=e,Jn=[...new Set(er)],er.length=0,un=0;un<Jn.length;un++)Jn[un]();Jn=null,un=0,Wo=null,Ui(t,e)}}function Id(t){if(Ui(),tr.length){const e=[...new Set(tr)];if(tr.length=0,wt){wt.push(...e);return}for(wt=e,wt.sort((n,r)=>hr(n)-hr(r)),fn=0;fn<wt.length;fn++)wt[fn]();wt=null,fn=0}}const hr=t=>t.id==null?1/0:t.id;function Cd(t){Bo=!1,li=!0,Ui(t),Pe.sort((n,r)=>hr(n)-hr(r));const e=Ve;try{for(at=0;at<Pe.length;at++){const n=Pe[at];n&&n.active!==!1&&Nt(n,null,14)}}finally{at=0,Pe.length=0,Id(),li=!1,Hs=null,(Pe.length||er.length||tr.length)&&Cd(t)}}function Pg(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let i=n;const o=e.startsWith("update:"),s=o&&e.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:u,trim:m}=r[d]||Q;m&&(i=n.map(g=>g.trim())),u&&(i=n.map($h))}let a,l=r[a=mo(e)]||r[a=mo(Tn(e))];!l&&o&&(l=r[a=mo(Ln(e))]),l&&Le(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Le(c,t,6,i)}}function Td(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const o=t.emits;let s={},a=!1;if(!L(t)){const l=c=>{const d=Td(c,e,!0);d&&(a=!0,we(s,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(r.set(t,null),null):(M(o)?o.forEach(l=>s[l]=null):we(s,o),r.set(t,s),s)}function ji(t,e){return!t||!Mi(e)?!1:(e=e.slice(2).replace(/Once$/,""),B(t,e[0].toLowerCase()+e.slice(1))||B(t,Ln(e))||B(t,e))}let Be=null,Bi=null;function ci(t){const e=Be;return Be=t,Bi=t&&t.type.__scopeId||null,e}function Sd(t){Bi=t}function Rd(){Bi=null}function Og(t,e=Be,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&gl(-1);const o=ci(e),s=t(...i);return ci(o),r._d&&gl(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function ho(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[s],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:m,setupState:g,ctx:E,inheritAttrs:T}=t;let S,D;const ae=ci(t);try{if(n.shapeFlag&4){const ee=i||r;S=tt(d.call(ee,ee,u,o,g,m,E)),D=l}else{const ee=e;S=tt(ee.length>1?ee(o,{attrs:l,slots:a,emit:c}):ee(o,null)),D=e.props?l:Mg(l)}}catch(ee){nr.length=0,zi(ee,t,1),S=Ke(qe)}let q=S;if(D&&T!==!1){const ee=Object.keys(D),{shapeFlag:pe}=q;ee.length&&pe&7&&(s&&ee.some(As)&&(D=Dg(D,s)),q=Ot(q,D))}return n.dirs&&(q=Ot(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),S=q,ci(ae),S}const Mg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mi(n))&&((e||(e={}))[n]=t[n]);return e},Dg=(t,e)=>{const n={};for(const r in t)(!As(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Lg(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?sl(r,s,c):!!s;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const m=d[u];if(s[m]!==r[m]&&!ji(c,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?sl(r,s,c):!0:!!s;return!1}function sl(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!ji(n,o))return!0}return!1}function Fg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const zg=t=>t.__isSuspense;function Ug(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):Ag(t)}function jg(t,e){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[t]=e}}function go(t,e,n=!1){const r=he||Be;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&L(e)?e.call(r.proxy):e}}const al={};function bo(t,e,n){return Nd(t,e,n)}function Nd(t,e,{immediate:n,deep:r,flush:i,onTrack:o,onTrigger:s}=Q){const a=he;let l,c=!1,d=!1;if(xe(t)?(l=()=>t.value,c=jo(t)):vn(t)?(l=()=>t,r=!0):M(t)?(d=!0,c=t.some(D=>vn(D)||jo(D)),l=()=>t.map(D=>{if(xe(D))return D.value;if(vn(D))return $t(D);if(L(D))return Nt(D,a,2)})):L(t)?e?l=()=>Nt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return u&&u(),Le(t,a,3,[m])}:l=Ve,e&&r){const D=l;l=()=>$t(D())}let u,m=D=>{u=S.onStop=()=>{Nt(D,a,4)}};if(br)return m=Ve,e?n&&Le(e,a,3,[l(),d?[]:void 0,m]):l(),Ve;let g=d?[]:al;const E=()=>{if(!!S.active)if(e){const D=S.run();(r||c||(d?D.some((ae,q)=>fr(ae,g[q])):fr(D,g)))&&(u&&u(),Le(e,a,3,[D,g===al?void 0:g,m]),g=D)}else S.run()};E.allowRecurse=!!e;let T;i==="sync"?T=E:i==="post"?T=()=>Ce(E,a&&a.suspense):T=()=>Ng(E);const S=new Ls(l,T);return e?n?E():g=S.run():i==="post"?Ce(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&Ps(a.scope.effects,S)}}function Bg(t,e,n){const r=this.proxy,i=fe(t)?t.includes(".")?Ad(r,t):()=>r[t]:t.bind(r,r);let o;L(e)?o=e:(o=e.handler,n=e);const s=he;Sn(this);const a=Nd(i,o.bind(r),n);return s?Sn(s):Gt(),a}function Ad(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function $t(t,e){if(!me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xe(t))$t(t.value,e);else if(M(t))for(let n=0;n<t.length;n++)$t(t[n],e);else if(ed(t)||xn(t))t.forEach(n=>{$t(n,e)});else if(rd(t))for(const n in t)$t(t[n],e);return t}function Wg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dd(()=>{t.isMounted=!0}),Ld(()=>{t.isUnmounting=!0}),t}const De=[Function,Array],Hg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},setup(t,{slots:e}){const n=Sb(),r=Wg();let i;return()=>{const o=e.default&&Od(e.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){for(const T of o)if(T.type!==qe){s=T;break}}const a=V(t),{mode:l}=a;if(r.isLeaving)return _o(s);const c=ll(s);if(!c)return _o(s);const d=Ho(c,a,r,n);$o(c,d);const u=n.subTree,m=u&&ll(u);let g=!1;const{getTransitionKey:E}=c.type;if(E){const T=E();i===void 0?i=T:T!==i&&(i=T,g=!0)}if(m&&m.type!==qe&&(!Wt(c,m)||g)){const T=Ho(m,a,r,n);if($o(m,T),l==="out-in")return r.isLeaving=!0,T.afterLeave=()=>{r.isLeaving=!1,n.update()},_o(s);l==="in-out"&&c.type!==qe&&(T.delayLeave=(S,D,ae)=>{const q=Pd(r,m);q[String(m.key)]=m,S._leaveCb=()=>{D(),S._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=ae})}return s}}},$g=Hg;function Pd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ho(t,e,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:u,onLeave:m,onAfterLeave:g,onLeaveCancelled:E,onBeforeAppear:T,onAppear:S,onAfterAppear:D,onAppearCancelled:ae}=e,q=String(t.key),ee=Pd(n,t),pe=(j,X)=>{j&&Le(j,r,9,X)},Qe=(j,X)=>{const ie=X[1];pe(j,X),M(j)?j.every(Ee=>Ee.length<=1)&&ie():j.length<=1&&ie()},Je={mode:o,persisted:s,beforeEnter(j){let X=a;if(!n.isMounted)if(i)X=T||a;else return;j._leaveCb&&j._leaveCb(!0);const ie=ee[q];ie&&Wt(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),pe(X,[j])},enter(j){let X=l,ie=c,Ee=d;if(!n.isMounted)if(i)X=S||l,ie=D||c,Ee=ae||d;else return;let Fe=!1;const it=j._enterCb=Fr=>{Fe||(Fe=!0,Fr?pe(Ee,[j]):pe(ie,[j]),Je.delayedLeave&&Je.delayedLeave(),j._enterCb=void 0)};X?Qe(X,[j,it]):it()},leave(j,X){const ie=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return X();pe(u,[j]);let Ee=!1;const Fe=j._leaveCb=it=>{Ee||(Ee=!0,X(),it?pe(E,[j]):pe(g,[j]),j._leaveCb=void 0,ee[ie]===t&&delete ee[ie])};ee[ie]=t,m?Qe(m,[j,Fe]):Fe()},clone(j){return Ho(j,e,n,r)}};return Je}function _o(t){if(Wi(t))return t=Ot(t),t.children=null,t}function ll(t){return Wi(t)?t.children?t.children[0]:void 0:t}function $o(t,e){t.shapeFlag&6&&t.component?$o(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Od(t,e=!1,n){let r=[],i=0;for(let o=0;o<t.length;o++){let s=t[o];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:o);s.type===ge?(s.patchFlag&128&&i++,r=r.concat(Od(s.children,e,a))):(e||s.type!==qe)&&r.push(a!=null?Ot(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function $s(t){return L(t)?{setup:t,name:t.name}:t}const Xr=t=>!!t.type.__asyncLoader,Wi=t=>t.type.__isKeepAlive;function Vg(t,e){Md(t,"a",e)}function qg(t,e){Md(t,"da",e)}function Md(t,e,n=he){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Hi(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Wi(i.parent.vnode)&&Kg(r,e,n,i),i=i.parent}}function Kg(t,e,n,r){const i=Hi(e,t,r,!0);Fd(()=>{Ps(r[e],i)},n)}function Hi(t,e,n=he,r=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;Fn(),Sn(n);const a=Le(e,n,t,s);return Gt(),zn(),a});return r?i.unshift(o):i.push(o),o}}const gt=t=>(e,n=he)=>(!br||t==="sp")&&Hi(t,e,n),Gg=gt("bm"),Dd=gt("m"),Yg=gt("bu"),Qg=gt("u"),Ld=gt("bum"),Fd=gt("um"),Jg=gt("sp"),Xg=gt("rtg"),Zg=gt("rtc");function eb(t,e=he){Hi("ec",t,e)}function cl(t,e){const n=Be;if(n===null)return t;const r=qi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[s,a,l,c=Q]=e[o];L(s)&&(s={mounted:s,updated:s}),s.deep&&$t(a),i.push({dir:s,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Ft(t,e,n,r){const i=t.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&(Fn(),Le(l,n,8,[t.el,a,t,e]),zn())}}const tb=Symbol();function di(t,e,n,r){let i;const o=n&&n[r];if(M(t)||fe(t)){i=new Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=e(t[s],s,void 0,o&&o[s])}else if(typeof t=="number"){i=new Array(t);for(let s=0;s<t;s++)i[s]=e(s+1,s,void 0,o&&o[s])}else if(me(t))if(t[Symbol.iterator])i=Array.from(t,(s,a)=>e(s,a,void 0,o&&o[a]));else{const s=Object.keys(t);i=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const c=s[a];i[a]=e(t[c],c,a,o&&o[a])}}else i=[];return n&&(n[r]=i),i}const Vo=t=>t?Yd(t)?qi(t)||t.proxy:Vo(t.parent):null,ui=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vo(t.parent),$root:t=>Vo(t.root),$emit:t=>t.emit,$options:t=>Ud(t),$forceUpdate:t=>t.f||(t.f=()=>yd(t.update)),$nextTick:t=>t.n||(t.n=Tg.bind(t.proxy)),$watch:t=>Bg.bind(t)}),nb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=s[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(r!==Q&&B(r,e))return s[e]=1,r[e];if(i!==Q&&B(i,e))return s[e]=2,i[e];if((c=t.propsOptions[0])&&B(c,e))return s[e]=3,o[e];if(n!==Q&&B(n,e))return s[e]=4,n[e];qo&&(s[e]=0)}}const d=ui[e];let u,m;if(d)return e==="$attrs"&&Me(t,"get",e),d(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Q&&B(n,e))return s[e]=4,n[e];if(m=l.config.globalProperties,B(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return i!==Q&&B(i,e)?(i[e]=n,!0):r!==Q&&B(r,e)?(r[e]=n,!0):B(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!n[s]||t!==Q&&B(t,s)||e!==Q&&B(e,s)||(a=o[0])&&B(a,s)||B(r,s)||B(ui,s)||B(i.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:B(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let qo=!0;function rb(t){const e=Ud(t),n=t.proxy,r=t.ctx;qo=!1,e.beforeCreate&&dl(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:m,beforeUpdate:g,updated:E,activated:T,deactivated:S,beforeDestroy:D,beforeUnmount:ae,destroyed:q,unmounted:ee,render:pe,renderTracked:Qe,renderTriggered:Je,errorCaptured:j,serverPrefetch:X,expose:ie,inheritAttrs:Ee,components:Fe,directives:it,filters:Fr}=e;if(c&&ib(c,r,null,t.appContext.config.unwrapInjectedRef),s)for(const oe in s){const te=s[oe];L(te)&&(r[oe]=te.bind(n))}if(i){const oe=i.call(n,n);me(oe)&&(t.data=js(oe))}if(qo=!0,o)for(const oe in o){const te=o[oe],ot=L(te)?te.bind(n,n):L(te.get)?te.get.bind(n,n):Ve,no=!L(te)&&L(te.set)?te.set.bind(n):Ve,Bn=Mb({get:ot,set:no});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>Bn.value,set:an=>Bn.value=an})}if(a)for(const oe in a)zd(a[oe],r,n,oe);if(l){const oe=L(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(te=>{jg(te,oe[te])})}d&&dl(d,t,"c");function Ie(oe,te){M(te)?te.forEach(ot=>oe(ot.bind(n))):te&&oe(te.bind(n))}if(Ie(Gg,u),Ie(Dd,m),Ie(Yg,g),Ie(Qg,E),Ie(Vg,T),Ie(qg,S),Ie(eb,j),Ie(Zg,Qe),Ie(Xg,Je),Ie(Ld,ae),Ie(Fd,ee),Ie(Jg,X),M(ie))if(ie.length){const oe=t.exposed||(t.exposed={});ie.forEach(te=>{Object.defineProperty(oe,te,{get:()=>n[te],set:ot=>n[te]=ot})})}else t.exposed||(t.exposed={});pe&&t.render===Ve&&(t.render=pe),Ee!=null&&(t.inheritAttrs=Ee),Fe&&(t.components=Fe),it&&(t.directives=it)}function ib(t,e,n=Ve,r=!1){M(t)&&(t=Ko(t));for(const i in t){const o=t[i];let s;me(o)?"default"in o?s=go(o.from||i,o.default,!0):s=go(o.from||i):s=go(o),xe(s)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function dl(t,e,n){Le(M(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function zd(t,e,n,r){const i=r.includes(".")?Ad(n,r):()=>n[r];if(fe(t)){const o=e[t];L(o)&&bo(i,o)}else if(L(t))bo(i,t.bind(n));else if(me(t))if(M(t))t.forEach(o=>zd(o,e,n,r));else{const o=L(t.handler)?t.handler.bind(n):e[t.handler];L(o)&&bo(i,o,t)}}function Ud(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>fi(l,c,s,!0)),fi(l,e,s)),o.set(e,l),l}function fi(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&fi(t,o,n,!0),i&&i.forEach(s=>fi(t,s,n,!0));for(const s in e)if(!(r&&s==="expose")){const a=ob[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const ob={data:ul,props:jt,emits:jt,methods:jt,computed:jt,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:jt,directives:jt,watch:ab,provide:ul,inject:sb};function ul(t,e){return e?t?function(){return we(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function sb(t,e){return jt(Ko(t),Ko(e))}function Ko(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function jt(t,e){return t?we(we(Object.create(null),t),e):e}function ab(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const r in e)n[r]=ye(t[r],e[r]);return n}function lb(t,e,n,r=!1){const i={},o={};ai(o,$i,1),t.propsDefaults=Object.create(null),jd(t,e,i,o);for(const s in t.propsOptions[0])s in i||(i[s]=void 0);n?t.props=r?i:xg(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function cb(t,e,n,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=t,a=V(i),[l]=t.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=t.vnode.dynamicProps;for(let u=0;u<d.length;u++){let m=d[u];if(ji(t.emitsOptions,m))continue;const g=e[m];if(l)if(B(o,m))g!==o[m]&&(o[m]=g,c=!0);else{const E=Tn(m);i[E]=Go(l,a,E,g,t,!1)}else g!==o[m]&&(o[m]=g,c=!0)}}}else{jd(t,e,i,o)&&(c=!0);let d;for(const u in a)(!e||!B(e,u)&&((d=Ln(u))===u||!B(e,d)))&&(l?n&&(n[u]!==void 0||n[d]!==void 0)&&(i[u]=Go(l,a,u,void 0,t,!0)):delete i[u]);if(o!==a)for(const u in o)(!e||!B(e,u)&&!0)&&(delete o[u],c=!0)}c&&pt(t,"set","$attrs")}function jd(t,e,n,r){const[i,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Jr(l))continue;const c=e[l];let d;i&&B(i,d=Tn(l))?!o||!o.includes(d)?n[d]=c:(a||(a={}))[d]=c:ji(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(o){const l=V(n),c=a||Q;for(let d=0;d<o.length;d++){const u=o[d];n[u]=Go(i,l,u,c[u],t,!B(c,u))}}return s}function Go(t,e,n,r,i,o){const s=t[n];if(s!=null){const a=B(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&L(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Sn(i),r=c[n]=l.call(null,e),Gt())}else r=l}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===Ln(n))&&(r=!0))}return r}function Bd(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,s={},a=[];let l=!1;if(!L(t)){const d=u=>{l=!0;const[m,g]=Bd(u,e,!0);we(s,m),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!l)return r.set(t,_n),_n;if(M(o))for(let d=0;d<o.length;d++){const u=Tn(o[d]);fl(u)&&(s[u]=Q)}else if(o)for(const d in o){const u=Tn(d);if(fl(u)){const m=o[d],g=s[u]=M(m)||L(m)?{type:m}:m;if(g){const E=hl(Boolean,g.type),T=hl(String,g.type);g[0]=E>-1,g[1]=T<0||E<T,(E>-1||B(g,"default"))&&a.push(u)}}}const c=[s,a];return r.set(t,c),c}function fl(t){return t[0]!=="$"}function ml(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function pl(t,e){return ml(t)===ml(e)}function hl(t,e){return M(e)?e.findIndex(n=>pl(n,t)):L(e)&&pl(e,t)?0:-1}const Wd=t=>t[0]==="_"||t==="$stable",Vs=t=>M(t)?t.map(tt):[tt(t)],db=(t,e,n)=>{if(e._n)return e;const r=Og((...i)=>Vs(e(...i)),n);return r._c=!1,r},Hd=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Wd(i))continue;const o=t[i];if(L(o))e[i]=db(i,o,r);else if(o!=null){const s=Vs(o);e[i]=()=>s}}},$d=(t,e)=>{const n=Vs(e);t.slots.default=()=>n},ub=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),ai(e,"_",n)):Hd(e,t.slots={})}else t.slots={},e&&$d(t,e);ai(t.slots,$i,1)},fb=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,s=Q;if(r.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:(we(i,e),!n&&a===1&&delete i._):(o=!e.$stable,Hd(e,i)),s=e}else e&&($d(t,e),s={default:1});if(o)for(const a in i)!Wd(a)&&!(a in s)&&delete i[a]};function Vd(){return{app:null,config:{isNativeTag:zh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mb=0;function pb(t,e){return function(r,i=null){L(r)||(r=Object.assign({},r)),i!=null&&!me(i)&&(i=null);const o=Vd(),s=new Set;let a=!1;const l=o.app={_uid:mb++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:Db,get config(){return o.config},set config(c){},use(c,...d){return s.has(c)||(c&&L(c.install)?(s.add(c),c.install(l,...d)):L(c)&&(s.add(c),c(l,...d))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,d){return d?(o.components[c]=d,l):o.components[c]},directive(c,d){return d?(o.directives[c]=d,l):o.directives[c]},mount(c,d,u){if(!a){const m=Ke(r,i);return m.appContext=o,d&&e?e(m,c):t(m,c,u),a=!0,l._container=c,c.__vue_app__=l,qi(m.component)||m.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return o.provides[c]=d,l}};return l}}function Yo(t,e,n,r,i=!1){if(M(t)){t.forEach((m,g)=>Yo(m,e&&(M(e)?e[g]:e),n,r,i));return}if(Xr(r)&&!i)return;const o=r.shapeFlag&4?qi(r.component)||r.component.proxy:r.el,s=i?null:o,{i:a,r:l}=t,c=e&&e.r,d=a.refs===Q?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(fe(c)?(d[c]=null,B(u,c)&&(u[c]=null)):xe(c)&&(c.value=null)),L(l))Nt(l,a,12,[s,d]);else{const m=fe(l),g=xe(l);if(m||g){const E=()=>{if(t.f){const T=m?d[l]:l.value;i?M(T)&&Ps(T,o):M(T)?T.includes(o)||T.push(o):m?(d[l]=[o],B(u,l)&&(u[l]=d[l])):(l.value=[o],t.k&&(d[t.k]=l.value))}else m?(d[l]=s,B(u,l)&&(u[l]=s)):g&&(l.value=s,t.k&&(d[t.k]=s))};s?(E.id=-1,Ce(E,n)):E()}}}const Ce=Ug;function hb(t){return gb(t)}function gb(t,e){const n=Vh();n.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:m,setScopeId:g=Ve,cloneNode:E,insertStaticContent:T}=t,S=(f,p,h,_=null,b=null,y=null,I=!1,w=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!Wt(f,p)&&(_=zr(f),_t(f,b,y,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:x,ref:R,shapeFlag:C}=p;switch(x){case qs:D(f,p,h,_);break;case qe:ae(f,p,h,_);break;case xo:f==null&&q(p,h,_,I);break;case ge:it(f,p,h,_,b,y,I,w,k);break;default:C&1?Qe(f,p,h,_,b,y,I,w,k):C&6?Fr(f,p,h,_,b,y,I,w,k):(C&64||C&128)&&x.process(f,p,h,_,b,y,I,w,k,ln)}R!=null&&b&&Yo(R,f&&f.ref,y,p||f,!p)},D=(f,p,h,_)=>{if(f==null)r(p.el=a(p.children),h,_);else{const b=p.el=f.el;p.children!==f.children&&c(b,p.children)}},ae=(f,p,h,_)=>{f==null?r(p.el=l(p.children||""),h,_):p.el=f.el},q=(f,p,h,_)=>{[f.el,f.anchor]=T(f.children,p,h,_,f.el,f.anchor)},ee=({el:f,anchor:p},h,_)=>{let b;for(;f&&f!==p;)b=m(f),r(f,h,_),f=b;r(p,h,_)},pe=({el:f,anchor:p})=>{let h;for(;f&&f!==p;)h=m(f),i(f),f=h;i(p)},Qe=(f,p,h,_,b,y,I,w,k)=>{I=I||p.type==="svg",f==null?Je(p,h,_,b,y,I,w,k):ie(f,p,b,y,I,w,k)},Je=(f,p,h,_,b,y,I,w)=>{let k,x;const{type:R,props:C,shapeFlag:N,transition:O,patchFlag:W,dirs:K}=f;if(f.el&&E!==void 0&&W===-1)k=f.el=E(f.el);else{if(k=f.el=s(f.type,y,C&&C.is,C),N&8?d(k,f.children):N&16&&X(f.children,k,null,_,b,y&&R!=="foreignObject",I,w),K&&Ft(f,null,_,"created"),C){for(const ne in C)ne!=="value"&&!Jr(ne)&&o(k,ne,null,C[ne],y,f.children,_,b,st);"value"in C&&o(k,"value",null,C.value),(x=C.onVnodeBeforeMount)&&Ze(x,_,f)}j(k,f,f.scopeId,I,_)}K&&Ft(f,null,_,"beforeMount");const G=(!b||b&&!b.pendingBranch)&&O&&!O.persisted;G&&O.beforeEnter(k),r(k,p,h),((x=C&&C.onVnodeMounted)||G||K)&&Ce(()=>{x&&Ze(x,_,f),G&&O.enter(k),K&&Ft(f,null,_,"mounted")},b)},j=(f,p,h,_,b)=>{if(h&&g(f,h),_)for(let y=0;y<_.length;y++)g(f,_[y]);if(b){let y=b.subTree;if(p===y){const I=b.vnode;j(f,I,I.scopeId,I.slotScopeIds,b.parent)}}},X=(f,p,h,_,b,y,I,w,k=0)=>{for(let x=k;x<f.length;x++){const R=f[x]=w?yt(f[x]):tt(f[x]);S(null,R,p,h,_,b,y,I,w)}},ie=(f,p,h,_,b,y,I)=>{const w=p.el=f.el;let{patchFlag:k,dynamicChildren:x,dirs:R}=p;k|=f.patchFlag&16;const C=f.props||Q,N=p.props||Q;let O;h&&zt(h,!1),(O=N.onVnodeBeforeUpdate)&&Ze(O,h,p,f),R&&Ft(p,f,h,"beforeUpdate"),h&&zt(h,!0);const W=b&&p.type!=="foreignObject";if(x?Ee(f.dynamicChildren,x,w,h,_,W,y):I||ot(f,p,w,null,h,_,W,y,!1),k>0){if(k&16)Fe(w,p,C,N,h,_,b);else if(k&2&&C.class!==N.class&&o(w,"class",null,N.class,b),k&4&&o(w,"style",C.style,N.style,b),k&8){const K=p.dynamicProps;for(let G=0;G<K.length;G++){const ne=K[G],ze=C[ne],cn=N[ne];(cn!==ze||ne==="value")&&o(w,ne,ze,cn,b,f.children,h,_,st)}}k&1&&f.children!==p.children&&d(w,p.children)}else!I&&x==null&&Fe(w,p,C,N,h,_,b);((O=N.onVnodeUpdated)||R)&&Ce(()=>{O&&Ze(O,h,p,f),R&&Ft(p,f,h,"updated")},_)},Ee=(f,p,h,_,b,y,I)=>{for(let w=0;w<p.length;w++){const k=f[w],x=p[w],R=k.el&&(k.type===ge||!Wt(k,x)||k.shapeFlag&70)?u(k.el):h;S(k,x,R,null,_,b,y,I,!0)}},Fe=(f,p,h,_,b,y,I)=>{if(h!==_){for(const w in _){if(Jr(w))continue;const k=_[w],x=h[w];k!==x&&w!=="value"&&o(f,w,x,k,I,p.children,b,y,st)}if(h!==Q)for(const w in h)!Jr(w)&&!(w in _)&&o(f,w,h[w],null,I,p.children,b,y,st);"value"in _&&o(f,"value",h.value,_.value)}},it=(f,p,h,_,b,y,I,w,k)=>{const x=p.el=f?f.el:a(""),R=p.anchor=f?f.anchor:a("");let{patchFlag:C,dynamicChildren:N,slotScopeIds:O}=p;O&&(w=w?w.concat(O):O),f==null?(r(x,h,_),r(R,h,_),X(p.children,h,R,b,y,I,w,k)):C>0&&C&64&&N&&f.dynamicChildren?(Ee(f.dynamicChildren,N,h,b,y,I,w),(p.key!=null||b&&p===b.subTree)&&qd(f,p,!0)):ot(f,p,h,R,b,y,I,w,k)},Fr=(f,p,h,_,b,y,I,w,k)=>{p.slotScopeIds=w,f==null?p.shapeFlag&512?b.ctx.activate(p,h,_,I,k):to(p,h,_,b,y,I,k):Ie(f,p,k)},to=(f,p,h,_,b,y,I)=>{const w=f.component=Tb(f,_,b);if(Wi(f)&&(w.ctx.renderer=ln),Rb(w),w.asyncDep){if(b&&b.registerDep(w,oe),!f.el){const k=w.subTree=Ke(qe);ae(null,k,p,h)}return}oe(w,f,p,h,b,y,I)},Ie=(f,p,h)=>{const _=p.component=f.component;if(Lg(f,p,h))if(_.asyncDep&&!_.asyncResolved){te(_,p,h);return}else _.next=p,Rg(_.update),_.update();else p.el=f.el,_.vnode=p},oe=(f,p,h,_,b,y,I)=>{const w=()=>{if(f.isMounted){let{next:R,bu:C,u:N,parent:O,vnode:W}=f,K=R,G;zt(f,!1),R?(R.el=W.el,te(f,R,I)):R=W,C&&po(C),(G=R.props&&R.props.onVnodeBeforeUpdate)&&Ze(G,O,R,W),zt(f,!0);const ne=ho(f),ze=f.subTree;f.subTree=ne,S(ze,ne,u(ze.el),zr(ze),f,b,y),R.el=ne.el,K===null&&Fg(f,ne.el),N&&Ce(N,b),(G=R.props&&R.props.onVnodeUpdated)&&Ce(()=>Ze(G,O,R,W),b)}else{let R;const{el:C,props:N}=p,{bm:O,m:W,parent:K}=f,G=Xr(p);if(zt(f,!1),O&&po(O),!G&&(R=N&&N.onVnodeBeforeMount)&&Ze(R,K,p),zt(f,!0),C&&io){const ne=()=>{f.subTree=ho(f),io(C,f.subTree,f,b,null)};G?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=ho(f);S(null,ne,h,_,f,b,y),p.el=ne.el}if(W&&Ce(W,b),!G&&(R=N&&N.onVnodeMounted)){const ne=p;Ce(()=>Ze(R,K,ne),b)}(p.shapeFlag&256||K&&Xr(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&Ce(f.a,b),f.isMounted=!0,p=h=_=null}},k=f.effect=new Ls(w,()=>yd(x),f.scope),x=f.update=()=>k.run();x.id=f.uid,zt(f,!0),x()},te=(f,p,h)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,cb(f,p.props,_,h),fb(f,p.children,h),Fn(),Ui(void 0,f.update),zn()},ot=(f,p,h,_,b,y,I,w,k=!1)=>{const x=f&&f.children,R=f?f.shapeFlag:0,C=p.children,{patchFlag:N,shapeFlag:O}=p;if(N>0){if(N&128){Bn(x,C,h,_,b,y,I,w,k);return}else if(N&256){no(x,C,h,_,b,y,I,w,k);return}}O&8?(R&16&&st(x,b,y),C!==x&&d(h,C)):R&16?O&16?Bn(x,C,h,_,b,y,I,w,k):st(x,b,y,!0):(R&8&&d(h,""),O&16&&X(C,h,_,b,y,I,w,k))},no=(f,p,h,_,b,y,I,w,k)=>{f=f||_n,p=p||_n;const x=f.length,R=p.length,C=Math.min(x,R);let N;for(N=0;N<C;N++){const O=p[N]=k?yt(p[N]):tt(p[N]);S(f[N],O,h,null,b,y,I,w,k)}x>R?st(f,b,y,!0,!1,C):X(p,h,_,b,y,I,w,k,C)},Bn=(f,p,h,_,b,y,I,w,k)=>{let x=0;const R=p.length;let C=f.length-1,N=R-1;for(;x<=C&&x<=N;){const O=f[x],W=p[x]=k?yt(p[x]):tt(p[x]);if(Wt(O,W))S(O,W,h,null,b,y,I,w,k);else break;x++}for(;x<=C&&x<=N;){const O=f[C],W=p[N]=k?yt(p[N]):tt(p[N]);if(Wt(O,W))S(O,W,h,null,b,y,I,w,k);else break;C--,N--}if(x>C){if(x<=N){const O=N+1,W=O<R?p[O].el:_;for(;x<=N;)S(null,p[x]=k?yt(p[x]):tt(p[x]),h,W,b,y,I,w,k),x++}}else if(x>N)for(;x<=C;)_t(f[x],b,y,!0),x++;else{const O=x,W=x,K=new Map;for(x=W;x<=N;x++){const Ae=p[x]=k?yt(p[x]):tt(p[x]);Ae.key!=null&&K.set(Ae.key,x)}let G,ne=0;const ze=N-W+1;let cn=!1,Ca=0;const Wn=new Array(ze);for(x=0;x<ze;x++)Wn[x]=0;for(x=O;x<=C;x++){const Ae=f[x];if(ne>=ze){_t(Ae,b,y,!0);continue}let Xe;if(Ae.key!=null)Xe=K.get(Ae.key);else for(G=W;G<=N;G++)if(Wn[G-W]===0&&Wt(Ae,p[G])){Xe=G;break}Xe===void 0?_t(Ae,b,y,!0):(Wn[Xe-W]=x+1,Xe>=Ca?Ca=Xe:cn=!0,S(Ae,p[Xe],h,null,b,y,I,w,k),ne++)}const Ta=cn?bb(Wn):_n;for(G=Ta.length-1,x=ze-1;x>=0;x--){const Ae=W+x,Xe=p[Ae],Sa=Ae+1<R?p[Ae+1].el:_;Wn[x]===0?S(null,Xe,h,Sa,b,y,I,w,k):cn&&(G<0||x!==Ta[G]?an(Xe,h,Sa,2):G--)}}},an=(f,p,h,_,b=null)=>{const{el:y,type:I,transition:w,children:k,shapeFlag:x}=f;if(x&6){an(f.component.subTree,p,h,_);return}if(x&128){f.suspense.move(p,h,_);return}if(x&64){I.move(f,p,h,ln);return}if(I===ge){r(y,p,h);for(let C=0;C<k.length;C++)an(k[C],p,h,_);r(f.anchor,p,h);return}if(I===xo){ee(f,p,h);return}if(_!==2&&x&1&&w)if(_===0)w.beforeEnter(y),r(y,p,h),Ce(()=>w.enter(y),b);else{const{leave:C,delayLeave:N,afterLeave:O}=w,W=()=>r(y,p,h),K=()=>{C(y,()=>{W(),O&&O()})};N?N(y,W,K):K()}else r(y,p,h)},_t=(f,p,h,_=!1,b=!1)=>{const{type:y,props:I,ref:w,children:k,dynamicChildren:x,shapeFlag:R,patchFlag:C,dirs:N}=f;if(w!=null&&Yo(w,null,h,f,!0),R&256){p.ctx.deactivate(f);return}const O=R&1&&N,W=!Xr(f);let K;if(W&&(K=I&&I.onVnodeBeforeUnmount)&&Ze(K,p,f),R&6)gf(f.component,h,_);else{if(R&128){f.suspense.unmount(h,_);return}O&&Ft(f,null,p,"beforeUnmount"),R&64?f.type.remove(f,p,h,b,ln,_):x&&(y!==ge||C>0&&C&64)?st(x,p,h,!1,!0):(y===ge&&C&384||!b&&R&16)&&st(k,p,h),_&&Ea(f)}(W&&(K=I&&I.onVnodeUnmounted)||O)&&Ce(()=>{K&&Ze(K,p,f),O&&Ft(f,null,p,"unmounted")},h)},Ea=f=>{const{type:p,el:h,anchor:_,transition:b}=f;if(p===ge){hf(h,_);return}if(p===xo){pe(f);return}const y=()=>{i(h),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:I,delayLeave:w}=b,k=()=>I(h,y);w?w(f.el,y,k):k()}else y()},hf=(f,p)=>{let h;for(;f!==p;)h=m(f),i(f),f=h;i(p)},gf=(f,p,h)=>{const{bum:_,scope:b,update:y,subTree:I,um:w}=f;_&&po(_),b.stop(),y&&(y.active=!1,_t(I,f,p,h)),w&&Ce(w,p),Ce(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},st=(f,p,h,_=!1,b=!1,y=0)=>{for(let I=y;I<f.length;I++)_t(f[I],p,h,_,b)},zr=f=>f.shapeFlag&6?zr(f.component.subTree):f.shapeFlag&128?f.suspense.next():m(f.anchor||f.el),Ia=(f,p,h)=>{f==null?p._vnode&&_t(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,h),Id(),p._vnode=f},ln={p:S,um:_t,m:an,r:Ea,mt:to,mc:X,pc:ot,pbc:Ee,n:zr,o:t};let ro,io;return e&&([ro,io]=e(ln)),{render:Ia,hydrate:ro,createApp:pb(Ia,ro)}}function zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qd(t,e,n=!1){const r=t.children,i=e.children;if(M(r)&&M(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=yt(i[o]),a.el=s.el),n||qd(s,a))}}function bb(t){const e=t.slice(),n=[0];let r,i,o,s,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}const _b=t=>t.__isTeleport,ge=Symbol(void 0),qs=Symbol(void 0),qe=Symbol(void 0),xo=Symbol(void 0),nr=[];let We=null;function ke(t=!1){nr.push(We=t?null:[])}function xb(){nr.pop(),We=nr[nr.length-1]||null}let gr=1;function gl(t){gr+=t}function Kd(t){return t.dynamicChildren=gr>0?We||_n:null,xb(),gr>0&&We&&We.push(t),t}function Te(t,e,n,r,i,o){return Kd(H(t,e,n,r,i,o,!0))}function vb(t,e,n,r,i){return Kd(Ke(t,e,n,r,i,!0))}function wb(t){return t?t.__v_isVNode===!0:!1}function Wt(t,e){return t.type===e.type&&t.key===e.key}const $i="__vInternal",Gd=({key:t})=>t!=null?t:null,Zr=({ref:t,ref_key:e,ref_for:n})=>t!=null?fe(t)||xe(t)||L(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function H(t,e=null,n=null,r=0,i=null,o=t===ge?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gd(e),ref:e&&Zr(e),scopeId:Bi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Ks(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=fe(n)?8:16),gr>0&&!s&&We&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&We.push(l),l}const Ke=yb;function yb(t,e=null,n=null,r=0,i=null,o=!1){if((!t||t===tb)&&(t=qe),wb(t)){const a=Ot(t,e,!0);return n&&Ks(a,n),gr>0&&!o&&We&&(a.shapeFlag&6?We[We.indexOf(t)]=a:We.push(a)),a.patchFlag|=-2,a}if(Ob(t)&&(t=t.__vccOpts),e){e=kb(e);let{class:a,style:l}=e;a&&!fe(a)&&(e.class=Ns(a)),me(l)&&(gd(l)&&!M(l)&&(l=we({},l)),e.style=Oi(l))}const s=fe(t)?1:zg(t)?128:_b(t)?64:me(t)?4:L(t)?2:0;return H(t,e,n,r,i,s,o,!0)}function kb(t){return t?gd(t)||$i in t?we({},t):t:null}function Ot(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:s}=t,a=e?Eb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Gd(a),ref:e&&e.ref?n&&i?M(i)?i.concat(Zr(e)):[i,Zr(e)]:Zr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ot(t.ssContent),ssFallback:t.ssFallback&&Ot(t.ssFallback),el:t.el,anchor:t.anchor}}function Vi(t=" ",e=0){return Ke(qs,null,t,e)}function mi(t="",e=!1){return e?(ke(),vb(qe,null,t)):Ke(qe,null,t)}function tt(t){return t==null||typeof t=="boolean"?Ke(qe):M(t)?Ke(ge,null,t.slice()):typeof t=="object"?yt(t):Ke(qs,null,String(t))}function yt(t){return t.el===null||t.memo?t:Ot(t)}function Ks(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Ks(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!($i in e)?e._ctx=Be:i===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),r&64?(n=16,e=[Vi(e)]):n=8);t.children=e,t.shapeFlag|=n}function Eb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Ns([e.class,r.class]));else if(i==="style")e.style=Oi([e.style,r.style]);else if(Mi(i)){const o=e[i],s=r[i];s&&o!==s&&!(M(o)&&o.includes(s))&&(e[i]=o?[].concat(o,s):s)}else i!==""&&(e[i]=r[i])}return e}function Ze(t,e,n,r=null){Le(t,e,7,[n,r])}const Ib=Vd();let Cb=0;function Tb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Ib,o={uid:Cb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new qh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bd(r,i),emitsOptions:Td(r,i),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Pg.bind(null,o),t.ce&&t.ce(o),o}let he=null;const Sb=()=>he||Be,Sn=t=>{he=t,t.scope.on()},Gt=()=>{he&&he.scope.off(),he=null};function Yd(t){return t.vnode.shapeFlag&4}let br=!1;function Rb(t,e=!1){br=e;const{props:n,children:r}=t.vnode,i=Yd(t);lb(t,n,i,e),ub(t,r);const o=i?Nb(t,e):void 0;return br=!1,o}function Nb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=bd(new Proxy(t.ctx,nb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Pb(t):null;Sn(t),Fn();const o=Nt(r,t,0,[t.props,i]);if(zn(),Gt(),td(o)){if(o.then(Gt,Gt),e)return o.then(s=>{bl(t,s,e)}).catch(s=>{zi(s,t,0)});t.asyncDep=o}else bl(t,o,e)}else Qd(t,e)}function bl(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=vd(e)),Qd(t,n)}let _l;function Qd(t,e,n){const r=t.type;if(!t.render){if(!e&&_l&&!r.render){const i=r.template;if(i){const{isCustomElement:o,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=we(we({isCustomElement:o,delimiters:a},s),l);r.render=_l(i,c)}}t.render=r.render||Ve}Sn(t),Fn(),rb(t),zn(),Gt()}function Ab(t){return new Proxy(t.attrs,{get(e,n){return Me(t,"get","$attrs"),e[n]}})}function Pb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Ab(t))},slots:t.slots,emit:t.emit,expose:e}}function qi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vd(bd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ui)return ui[n](t)}}))}function Ob(t){return L(t)&&"__vccOpts"in t}const Mb=(t,e)=>Ig(t,e,br),Db="3.2.37",Lb="http://www.w3.org/2000/svg",Ht=typeof document!="undefined"?document:null,xl=Ht&&Ht.createElement("template"),Fb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Ht.createElementNS(Lb,t):Ht.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,o){const s=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{xl.innerHTML=r?`<svg>${t}</svg>`:t;const a=xl.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function zb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ub(t,e,n){const r=t.style,i=fe(n);if(n&&!i){for(const o in n)Qo(r,o,n[o]);if(e&&!fe(e))for(const o in e)n[o]==null&&Qo(r,o,"")}else{const o=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=o)}}const vl=/\s*!important$/;function Qo(t,e,n){if(M(n))n.forEach(r=>Qo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=jb(t,e);vl.test(n)?t.setProperty(Ln(r),n.replace(vl,""),"important"):t[r]=n}}const wl=["Webkit","Moz","ms"],vo={};function jb(t,e){const n=vo[e];if(n)return n;let r=Tn(e);if(r!=="filter"&&r in t)return vo[e]=r;r=id(r);for(let i=0;i<wl.length;i++){const o=wl[i]+r;if(o in t)return vo[e]=o}return e}const yl="http://www.w3.org/1999/xlink";function Bb(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yl,e.slice(6,e.length)):t.setAttributeNS(yl,e,n);else{const o=Mh(e);n==null||o&&!Xc(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function Wb(t,e,n,r,i,o,s){if(e==="innerHTML"||e==="textContent"){r&&s(r,i,o),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Xc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Jd,Hb]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Jo=0;const $b=Promise.resolve(),Vb=()=>{Jo=0},qb=()=>Jo||($b.then(Vb),Jo=Jd());function Kb(t,e,n,r){t.addEventListener(e,n,r)}function Gb(t,e,n,r){t.removeEventListener(e,n,r)}function Yb(t,e,n,r,i=null){const o=t._vei||(t._vei={}),s=o[e];if(r&&s)s.value=r;else{const[a,l]=Qb(e);if(r){const c=o[e]=Jb(r,i);Kb(t,a,c,l)}else s&&(Gb(t,a,s,l),o[e]=void 0)}}const kl=/(?:Once|Passive|Capture)$/;function Qb(t){let e;if(kl.test(t)){e={};let n;for(;n=t.match(kl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ln(t.slice(2)),e]}function Jb(t,e){const n=r=>{const i=r.timeStamp||Jd();(Hb||i>=n.attached-1)&&Le(Xb(r,n.value),e,5,[r])};return n.value=t,n.attached=qb(),n}function Xb(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const El=/^on[a-z]/,Zb=(t,e,n,r,i=!1,o,s,a,l)=>{e==="class"?zb(t,r,i):e==="style"?Ub(t,n,r):Mi(e)?As(e)||Yb(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):e0(t,e,r,i))?Wb(t,e,r,o,s,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Bb(t,e,r,i))};function e0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&El.test(e)&&L(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||El.test(e)&&fe(n)?!1:e in t}const t0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};$g.props;const n0=["ctrl","shift","alt","meta"],r0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>n0.some(n=>t[`${n}Key`]&&!e.includes(n))},i0=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const o=r0[e[i]];if(o&&o(n,e))return}return t(n,...r)},Il={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Hn(t,!0),r.enter(t)):r.leave(t,()=>{Hn(t,!1)}):Hn(t,e))},beforeUnmount(t,{value:e}){Hn(t,e)}};function Hn(t,e){t.style.display=e?t._vod:"none"}const o0=we({patchProp:Zb},Fb);let Cl;function s0(){return Cl||(Cl=hb(o0))}const a0=(...t)=>{const e=s0().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=l0(r);if(!i)return;const o=e._component;!L(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function l0(t){return fe(t)?document.querySelector(t):t}var Xd=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const Ki=t=>(Sd("data-v-8eb04ec4"),t=t(),Rd(),t),c0={class:"row g-0 justify-content-center"},d0={class:"col col-3 box1"},u0=["onclick"],f0=Ki(()=>H("br",null,null,-1)),m0=Vi(" \xA0\xA0 "),p0=Ki(()=>H("br",null,null,-1)),h0={key:0,class:"alert alert-warning text-center",role:"alert"},g0=Ki(()=>H("b",null,"\u8ACB\u8F38\u5165\u5C31\u8A3A\u5E8F\u865F",-1)),b0=[g0],_0={key:1,class:"alert alert-warning text-center btn-outline-secondary",role:"alert"},x0=Ki(()=>H("b",null,"\u5C31\u8A3A\u5E8F\u865F\u4E0D\u80FD\u8D85\u904E\u4E09\u4F4D\u6578",-1)),v0=[x0],w0=$s({__name:"ButtonGrid",emits:["onNumberChange","onSubmit"],setup(t,{emit:e}){let n="";const r=dt(!1),i=dt(!1);function o(l){console.log(l),i.value=n.length>=3,!i.value&&(n+=l,e("onNumberChange",n),r.value=n.length==0)}function s(){r.value=n.length==0,r.value||e("onSubmit")}function a(){n="",e("onNumberChange",n),i.value=n.length>=3}return(l,c)=>(ke(),Te(ge,null,[(ke(),Te(ge,null,di([[1,2,3],[4,5,6],[7,8,9],[0]],d=>H("div",c0,[(ke(!0),Te(ge,null,di(d,u=>(ke(),Te("div",d0,[H("button",{class:"btn button1 btn-light",onclick:()=>o(u)},Zn(u),9,u0)]))),256))])),64)),f0,H("div",{class:"justify-content-center text-center"},[H("button",{class:"btn btn-primary btn-lg",style:{width:"120px"},onClick:s},"\u78BA\u8A8D"),m0,H("button",{class:"btn btn-light btn-lg",style:{width:"120px"},onClick:a},"\u91CD\u65B0\u8F38\u5165")]),p0,r.value?(ke(),Te("div",h0,b0)):mi("",!0),i.value?(ke(),Te("div",_0,v0)):mi("",!0)],64))}});var y0=Xd(w0,[["__scopeId","data-v-8eb04ec4"]]);const Tl="@firebase/database",Sl="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zd="";function k0(t){Zd=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ar(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new E0(e)}}catch{}return new I0},Vt=eu("localStorage"),Xo=eu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new hs("@firebase/database"),C0=function(){let t=1;return function(){return t++}}(),tu=function(t){const e=Mf(t),n=new Nf;n.update(e);const r=n.digest();return fs.encodeByteArray(r)},Ar=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ar.apply(null,r):typeof r=="object"?e+=ue(r):e+=r,e+=" "}return e};let Yt=null,Rl=!0;const T0=function(t,e){v(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(wn.logLevel=Y.VERBOSE,Yt=wn.log.bind(wn),e&&Xo.set("logging_enabled",!0)):typeof t=="function"?Yt=t:(Yt=null,Xo.remove("logging_enabled"))},be=function(...t){if(Rl===!0&&(Rl=!1,Yt===null&&Xo.get("logging_enabled")===!0&&T0(!0)),Yt){const e=Ar.apply(null,t);Yt(e)}},Pr=function(t){return function(...e){be(t,...e)}},Zo=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ar(...t);wn.error(e)},Zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ar(...t)}`;throw wn.error(e),new Error(e)},Oe=function(...t){const e="FIREBASE WARNING: "+Ar(...t);wn.warn(e)},S0=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},R0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rn="[MIN_NAME]",en="[MAX_NAME]",Un=function(t,e){if(t===e)return 0;if(t===Rn||e===en)return-1;if(e===Rn||t===en)return 1;{const n=Nl(t),r=Nl(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},N0=function(t,e){return t===e?0:t<e?-1:1},$n=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ue(e))},Gs=function(t){if(typeof t!="object"||t===null)return ue(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ue(e[r]),n+=":",n+=Gs(t[e[r]]);return n+="}",n},ru=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const iu=function(t){v(!nu(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,o,s,a,l;t===0?(o=0,s=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=a+r,s=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);for(l=e;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let m=parseInt(d.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),u=u+m}return u.toLowerCase()},A0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},P0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function O0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const M0=new RegExp("^-?(0*)\\d{1,10}$"),D0=-2147483648,L0=2147483647,Nl=function(t){if(M0.test(t)){const e=Number(t);if(e>=D0&&e<=L0)return e}return null},Or=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Oe("Exception was thrown by user callback.",n),e},Math.floor(0))}},F0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rr=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class es{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}es.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="5",ou="v",su="s",au="r",lu="f",cu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,du="ls",uu="p",ts="ac",fu="websocket",mu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n,r,i,o=!1,s="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function B0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pu(t,e,n){v(typeof e=="string","typeof type must == string"),v(typeof n=="object","typeof params must == object");let r;if(e===fu)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mu)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);B0(t)&&(n.ns=t.namespace);const i=[];return Ne(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.counters_={}}incrementCounter(e,n=1){ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return xf(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo={},yo={};function Qs(t){const e=t.toString();return wo[e]||(wo[e]=new W0),wo[e]}function H0(t,e){const n=t.toString();return yo[n]||(yo[n]=e()),yo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Or(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="start",V0="close",q0="pLPCommand",K0="pRTLPCB",hu="id",gu="pw",bu="ser",G0="cb",Y0="seg",Q0="ts",J0="d",X0="dframe",_u=1870,xu=30,Z0=_u-xu,e_=25e3,t_=3e4;class pn{constructor(e,n,r,i,o,s,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pr(e),this.stats_=Qs(n),this.urlFn=l=>(this.appCheckToken&&(l[ts]=this.appCheckToken),pu(n,mu,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(t_)),R0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Js((...o)=>{const[s,a,l,c,d]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===Al)this.id=a,this.password=l;else if(s===V0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Al]="t",r[bu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[G0]=this.scriptTagHolder.uniqueCallbackIdentifier),r[ou]=Ys,this.transportSessionId&&(r[su]=this.transportSessionId),this.lastSessionId&&(r[du]=this.lastSessionId),this.applicationId&&(r[uu]=this.applicationId),this.appCheckToken&&(r[ts]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&cu.test(location.hostname)&&(r[au]=lu);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pn.forceAllow_=!0}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){return pn.forceAllow_?!0:!pn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!A0()&&!P0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=dc(n),i=ru(r,Z0);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[X0]="t",r[hu]=e,r[gu]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Js{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=C0(),window[q0+this.uniqueCallbackIdentifier]=e,window[K0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Js.createIFrame_();let o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;o='<script>document.domain="'+a+'";<\/script>'}const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){be("frame writing exception"),a.stack&&be(a.stack),be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hu]=this.myID,e[gu]=this.myPW,e[bu]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xu+r.length<=_u;){const s=this.pendingSegs.shift();r=r+"&"+Y0+i+"="+s.seg+"&"+Q0+i+"="+s.ts+"&"+J0+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(e_)),o=()=>{clearTimeout(i),r()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=16384,r_=45e3;let pi=null;typeof MozWebSocket!="undefined"?pi=MozWebSocket:typeof WebSocket!="undefined"&&(pi=WebSocket);class je{constructor(e,n,r,i,o,s,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pr(this.connId),this.stats_=Qs(n),this.connURL=je.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,o){const s={};return s[ou]=Ys,typeof location!="undefined"&&location.hostname&&cu.test(location.hostname)&&(s[au]=lu),n&&(s[su]=n),r&&(s[du]=r),i&&(s[ts]=i),o&&(s[uu]=o),pu(e,fu,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vt.set("previous_websocket_failure",!0);try{let r;pc(),this.mySock=new pi(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&pi!==null&&!je.forceDisallow_}static previouslyFailed(){return Vt.isInMemoryStorage||Vt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ar(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ru(n,n_);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(r_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2;je.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pn,je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=je&&je.isAvailable();let r=n&&!je.previouslyFailed();if(e.webSocketOnly&&(n||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[je];else{const i=this.transports_=[];for(const o of _r.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);_r.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_r.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=6e4,o_=5e3,s_=10*1024,a_=100*1024,ko="t",Pl="d",l_="s",Ol="r",c_="e",Ml="o",Dl="a",Ll="n",Fl="p",d_="h";class u_{constructor(e,n,r,i,o,s,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pr("c:"+this.id+":"),this.transportManager_=new _r(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=rr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>a_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>s_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ko in e){const n=e[ko];n===Dl?this.upgradeIfSecondaryHealthy_():n===Ol?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ml&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$n("t",e),r=$n("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ll,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$n("t",e),r=$n("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$n(ko,e);if(Pl in e){const r=e[Pl];if(n===d_)this.onHandshake_(r);else if(n===Ll){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===l_?this.onConnectionShutdown_(r):n===Ol?this.onReset_(r):n===c_?Zo("Server Error: "+r):n===Ml?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ys!==r&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),rr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(i_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(o_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(e){v(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends wu{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!ps()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hi}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=32,Ul=768;class J{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new J("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mt(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new J(t.pieces_,e)}function yu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function f_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ku(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Eu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new J(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof J)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new J(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Se(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return Se(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Xs(t,e){if(Mt(t)!==Mt(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function He(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mt(t)>Mt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class m_{constructor(e,n){this.errorPrefix_=n,this.parts_=ku(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ti(this.parts_[r]);Iu(this)}}function p_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ti(e),Iu(t)}function h_(t){const e=t.parts_.pop();t.byteLength_-=Ti(e),t.parts_.length>0&&(t.byteLength_-=1)}function Iu(t){if(t.byteLength_>Ul)throw new Error(t.errorPrefix_+"has a key path longer than "+Ul+" bytes ("+t.byteLength_+").");if(t.parts_.length>zl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zl+") or object contains a cycle "+Bt(t))}function Bt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends wu{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Zs}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=1e3,g_=60*5*1e3,b_=3*1e3,jl=30*1e3,__=1.3,x_=3e4,v_="server_kill",Bl=3;class ft extends vu{constructor(e,n,r,i,o,s,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ft.nextPersistentConnectionId_++,this.log_=Pr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vn,this.maxReconnectDelay_=g_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!pc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,o={r:i,a:e,b:n};this.log_(ue(o)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ms,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const s=this.outstandingGets_[o];s===void 0||i!==s||(delete this.outstandingGets_[o],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+o+" timed out on connection"),n.reject(new Error("Client is offline.")))},b_),this.connected_&&this.sendGet_(o),n.promise}listen(e,n,r,i){this.initConnection_();const o=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,c=a.s;ft.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ht(e,"w")){const r=En(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Rf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sf(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const o={p:e},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zo("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>x_&&(this.reconnectDelay_=Vn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*__)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ft.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},c=function(u){v(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);s?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=m&&m.token,a=new u_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Oe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(v_)},o))}catch(u){this.log_("Failed to get token: "+u),s||(this.repoInfo_.nodeAdmin&&Oe(u),l())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ro(this.interruptReasons_)&&(this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(o=>Gs(o)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new J(e).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bl&&(this.reconnectDelay_=jl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Zd.replace(/\./g,"-")]=1,ps()?e["framework.cordova"]=1:mc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hi.getInstance().currentlyOnline();return Ro(this.interruptReasons_)&&e}}ft.nextPersistentConnectionId_=0;ft.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Rn,e),i=new F(Rn,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr;class Cu extends Gi{static get __EMPTY_NODE(){return Vr}static set __EMPTY_NODE(e){Vr=e}compare(e,n){return Un(e.name,n.name)}isDefinedOn(e){throw Pn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(en,Vr)}makePost(e,n){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Vr)}toString(){return".key"}}const yn=new Cu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=n?r(e.key,n):1,i&&(s*=-1),s<0)this.isReverse_?e=e.left:e=e.right;else if(s===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class de{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r!=null?r:de.RED,this.left=i!=null?i:Re.EMPTY_NODE,this.right=o!=null?o:Re.EMPTY_NODE}copy(e,n,r,i,o){return new de(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Re.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}de.RED=!0;de.BLACK=!1;class w_{copy(e,n,r,i,o){return this}insert(e,n,r){return new de(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Re{constructor(e,n=Re.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Re(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,de.BLACK,null,null))}remove(e){return new Re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,de.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qr(this.root_,null,this.comparator_,!0,e)}}Re.EMPTY_NODE=new w_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t,e){return Un(t.name,e.name)}function ea(t,e){return Un(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns;function k_(t){ns=t}const Tu=function(t){return typeof t=="number"?"number:"+iu(t):"string:"+t},Su=function(t){if(t.isLeafNode()){const e=t.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ht(e,".sv"),"Priority must be a string or number.")}else v(t===ns||t.isEmpty(),"priority of unexpected type.");v(t===ns||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl;class ce{constructor(e,n=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Su(this.priorityNode_)}static set __childrenNodeConstructor(e){Wl=e}static get __childrenNodeConstructor(){return Wl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:z(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(v(r!==".priority"||Mt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=iu(this.value_):e+=this.value_,this.lazyHash_=tu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ce.VALUE_TYPE_ORDER.indexOf(n),o=ce.VALUE_TYPE_ORDER.indexOf(r);return v(i>=0,"Unknown leaf type: "+n),v(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru,Nu;function E_(t){Ru=t}function I_(t){Nu=t}class C_ extends Gi{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?Un(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(en,new ce("[PRIORITY-POST]",Nu))}makePost(e,n){const r=Ru(e);return new F(n,new ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new C_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=Math.log(2);class S_{constructor(e){const n=o=>parseInt(Math.log(o)/T_,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gi=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,m;if(d===0)return null;if(d===1)return u=t[l],m=n?n(u):u,new de(m,u.node,de.BLACK,null,null);{const g=parseInt(d/2,10)+l,E=i(l,g),T=i(g+1,c);return u=t[g],m=n?n(u):u,new de(m,u.node,de.BLACK,E,T)}},o=function(l){let c=null,d=null,u=t.length;const m=function(E,T){const S=u-E,D=u;u-=E;const ae=i(S+1,D),q=t[S],ee=n?n(q):q;g(new de(ee,q.node,T,null,ae))},g=function(E){c?(c.left=E,c=E):(d=E,c=E)};for(let E=0;E<l.count;++E){const T=l.nextBitIsOne(),S=Math.pow(2,l.count-(E+1));T?m(S,de.BLACK):(m(S,de.BLACK),m(S,de.RED))}return d},s=new S_(t.length),a=o(s);return new Re(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo;const dn={};class ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return v(dn&&se,"ChildrenNode.ts has not been loaded"),Eo=Eo||new ut({".priority":dn},{".priority":se}),Eo}get(e){const n=En(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Re?n:null}hasIndex(e){return ht(this.indexSet_,e.toString())}addIndex(e,n){v(e!==yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(F.Wrap);let s=o.getNext();for(;s;)i=i||e.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=gi(r,e.getCompare()):a=dn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new ut(d,c)}addToIndexes(e,n){const r=ei(this.indexes_,(i,o)=>{const s=En(this.indexSet_,o);if(v(s,"Missing index implementation for "+o),i===dn)if(s.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),gi(a,s.getCompare())}else return dn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new ut(r,this.indexSet_)}removeFromIndexes(e,n){const r=ei(this.indexes_,i=>{if(i===dn)return i;{const o=n.get(e.name);return o?i.remove(new F(e.name,o)):i}});return new ut(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Su(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qn||(qn=new A(new Re(ea),null,ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qn}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qn:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(v(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,o;n.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?qn:this.priorityNode_;return new A(i,s,o)}}updateChild(e,n){const r=z(e);if(r===null)return n;{v(z(e)!==".priority"||Mt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild(se,(s,a)=>{n[s]=a.val(e),r++,o&&A.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!e&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tu(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":tu(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new F(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,e)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,e)>0;)i.getNext(),o=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mr?-1:0}withIndex(e){if(e===yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),i=n.getIterator(se);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(e){return e===yn?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class R_ extends A{constructor(){super(new Re(ea),A.EMPTY_NODE,ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Mr=new R_;Object.defineProperties(F,{MIN:{value:new F(Rn,A.EMPTY_NODE)},MAX:{value:new F(en,Mr)}});Cu.__EMPTY_NODE=A.EMPTY_NODE;ce.__childrenNodeConstructor=A;k_(Mr);I_(Mr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=!0;function _e(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ce(n,_e(e))}if(!(t instanceof Array)&&N_){const n=[];let r=!1;if(Ne(t,(s,a)=>{if(s.substring(0,1)!=="."){const l=_e(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new F(s,l)))}}),n.length===0)return A.EMPTY_NODE;const o=gi(n,y_,s=>s.name,ea);if(r){const s=gi(n,se.getCompare());return new A(o,_e(e),new ut({".priority":s},{".priority":se}))}else return new A(o,_e(e),ut.Default)}else{let n=A.EMPTY_NODE;return Ne(t,(r,i)=>{if(ht(t,r)&&r.substring(0,1)!=="."){const o=_e(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(_e(e))}}E_(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_ extends Gi{constructor(e){super(),this.indexPath_=e,v(!U(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?Un(e.name,n.name):o}makePost(e,n){const r=_e(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Mr);return new F(en,e)}toString(){return ku(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_ extends Gi{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Un(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=_e(e);return new F(n,r)}toString(){return".value"}}const O_=new P_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t){return{type:"value",snapshotNode:t}}function Nn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function xr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function M_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.index_=e}updateChild(e,n,r,i,o,s){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?e.hasChild(n)?s.trackChildChange(xr(n,a)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(Nn(n,r)):s.trackChildChange(vr(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(i,o)=>{n.hasChild(i)||r.trackChildChange(xr(i,o))}),n.isLeafNode()||n.forEachChild(se,(i,o)=>{if(e.hasChild(i)){const s=e.getImmediateChild(i);s.equals(o)||r.trackChildChange(vr(i,o,s))}else r.trackChildChange(Nn(i,o))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.indexedFilter_=new ta(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wr.getStartPost_(e),this.endPost_=wr.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,o,s){return this.matches(new F(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,o,s)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const o=this;return n.forEachChild(se,(s,a)=>{o.matches(new F(s,a))||(i=i.updateImmediateChild(s,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.rangedFilter_=new wr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,o,s){return this.rangedFilter_.matches(new F(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,o,s):this.fullLimitUpdateChild_(e,n,r,o,s)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;o.hasNext()&&s<this.limit_;){const a=o.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),s++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let o,s,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),o=this.rangedFilter_.getEndPost(),s=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();a=(m,g)=>u(g,m)}else l=i.getIterator(this.index_),o=this.rangedFilter_.getStartPost(),s=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,d=!1;for(;l.hasNext();){const u=l.getNext();!d&&a(o,u)<=0&&(d=!0),d&&c<this.limit_&&a(u,s)<=0?c++:i=i.updateImmediateChild(u.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,o){let s;if(this.reverse_){const u=this.index_.getCompare();s=(m,g)=>u(g,m)}else s=this.index_.getCompare();const a=e;v(a.numChildren()===this.limit_,"");const l=new F(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const g=m==null?1:s(m,l);if(d&&!r.isEmpty()&&g>=0)return o!=null&&o.trackChildChange(vr(n,r,u)),a.updateImmediateChild(n,r);{o!=null&&o.trackChildChange(xr(n,u));const T=a.updateImmediateChild(n,A.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(o!=null&&o.trackChildChange(Nn(m.name,m.node)),T.updateImmediateChild(m.name,m.node)):T}}else return r.isEmpty()?e:d&&s(c,l)>=0?(o!=null&&(o.trackChildChange(xr(c.name,c.node)),o.trackChildChange(Nn(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rn}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:en}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new na;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function L_(t){return t.loadsAllData()?new ta(t.getIndex()):t.hasLimit()?new D_(t):new wr(t)}function Hl(t){const e={};if(t.isDefault())return e;let n;return t.index_===se?n="$priority":t.index_===O_?n="$value":t.index_===yn?n="$key":(v(t.index_ instanceof A_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ue(n),t.startSet_&&(e.startAt=ue(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ue(t.indexStartName_))),t.endSet_&&(e.endAt=ue(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ue(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $l(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends vu{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Pr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const s=bi.getListenId_(e,r),a={};this.listens_[s]=a;const l=Hl(e._queryParams);this.restRequest_(o+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(o,u,!1,r),En(this.listens_,s)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=bi.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Hl(e._queryParams),r=e._path.toString(),i=new ms;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mn(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ar(a.responseText)}catch{Oe("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Oe("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return{value:null,children:new Map}}function Pu(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,_i());const i=t.children.get(r);e=Z(e),Pu(i,e,n)}}function rs(t,e,n){t.value!==null?n(e,t.value):z_(t,(r,i)=>{const o=new J(e.toString()+"/"+r);rs(i,o,n)})}function z_(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ne(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=10*1e3,j_=30*1e3,B_=5*60*1e3;class W_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new U_(e);const r=Vl+(j_-Vl)*Math.random();rr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ne(e,(i,o)=>{o>0&&ht(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),rr(this.reportStats_.bind(this),Math.floor(Math.random()*2*B_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($e||($e={}));function Ou(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ra(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ia(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=$e.ACK_USER_WRITE,this.source=Ou()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new J(e));return new xi($(),n,this.revert)}}else return v(z(this.path)===e,"operationForChild called for unrelated child."),new xi(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n){this.source=e,this.path=n,this.type=$e.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new yr(this.source,$()):new yr(this.source,Z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=$e.OVERWRITE}operationForChild(e){return U(this.path)?new tn(this.source,$(),this.snap.getImmediateChild(e)):new tn(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=$e.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new J(e));return n.isEmpty()?null:n.value?new tn(this.source,$(),n.value):new kr(this.source,$(),n)}else return v(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new kr(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $_(t,e,n,r){const i=[],o=[];return e.forEach(s=>{s.type==="child_changed"&&t.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(M_(s.childName,s.snapshotNode))}),Kn(t,i,"child_removed",e,r,n),Kn(t,i,"child_added",e,r,n),Kn(t,i,"child_moved",o,r,n),Kn(t,i,"child_changed",e,r,n),Kn(t,i,"value",e,r,n),i}function Kn(t,e,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>q_(t,a,l)),s.forEach(a=>{const l=V_(t,a,o);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function V_(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function q_(t,e,n){if(e.childName==null||n.childName==null)throw Pn("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t,e){return{eventCache:t,serverCache:e}}function ir(t,e,n,r){return Yi(new nn(e,n,r),t.serverCache)}function Mu(t,e,n,r){return Yi(t.eventCache,new nn(e,n,r))}function is(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io;const K_=()=>(Io||(Io=new Re(N0)),Io);class re{constructor(e,n=K_()){this.value=e,this.children=n}static fromObject(e){let n=new re(null);return Ne(e,(r,i)=>{n=n.set(new J(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(U(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(Z(e),n);return o!=null?{path:le(new J(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new re(null)}}set(e,n){if(U(e))return new re(n,this.children);{const r=z(e),o=(this.children.get(r)||new re(null)).set(Z(e),n),s=this.children.insert(r,o);return new re(this.value,s)}}remove(e){if(U(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(Z(e));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new re(null):new re(this.value,o)}else return this}}get(e){if(U(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if(U(e))return n;{const r=z(e),o=(this.children.get(r)||new re(null)).setTree(Z(e),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new re(this.value,s)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const o=z(e),s=this.children.get(o);return s?s.findOnPath_(Z(e),le(n,o),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=z(e),o=this.children.get(i);return o?o.foreachOnPath_(Z(e),le(n,i),r):new re(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.writeTree_=e}static empty(){return new Ge(new re(null))}}function or(t,e,n){if(U(e))return new Ge(new re(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let o=r.value;const s=Se(i,e);return o=o.updateChild(s,n),new Ge(t.writeTree_.set(i,o))}else{const i=new re(n),o=t.writeTree_.setTree(e,i);return new Ge(o)}}}function ql(t,e,n){let r=t;return Ne(n,(i,o)=>{r=or(r,le(e,i),o)}),r}function Kl(t,e){if(U(e))return Ge.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Ge(n)}}function os(t,e){return on(t,e)!=null}function on(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Se(n.path,e)):null}function Gl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function At(t,e){if(U(e))return t;{const n=on(t,e);return n!=null?new Ge(new re(n)):new Ge(t.writeTree_.subtree(e))}}function ss(t){return t.writeTree_.isEmpty()}function An(t,e){return Du($(),t.writeTree_,e)}function Du(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,o)=>{i===".priority"?(v(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=Du(le(t,i),o,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t,e){return Uu(e,t)}function G_(t,e,n,r,i){v(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=or(t.visibleWrites,e,n)),t.lastWriteId=r}function Y_(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Q_(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);v(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,o=!1,s=t.allWrites.length-1;for(;i&&s>=0;){const a=t.allWrites[s];a.visible&&(s>=n&&J_(a,r.path)?i=!1:He(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return X_(t),!0;if(r.snap)t.visibleWrites=Kl(t.visibleWrites,r.path);else{const a=r.children;Ne(a,l=>{t.visibleWrites=Kl(t.visibleWrites,le(r.path,l))})}return!0}else return!1}function J_(t,e){if(t.snap)return He(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&He(le(t.path,n),e))return!0;return!1}function X_(t){t.visibleWrites=Lu(t.allWrites,Z_,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Z_(t){return t.visible}function Lu(t,e,n){let r=Ge.empty();for(let i=0;i<t.length;++i){const o=t[i];if(e(o)){const s=o.path;let a;if(o.snap)He(n,s)?(a=Se(n,s),r=or(r,a,o.snap)):He(s,n)&&(a=Se(s,n),r=or(r,$(),o.snap.getChild(a)));else if(o.children){if(He(n,s))a=Se(n,s),r=ql(r,a,o.children);else if(He(s,n))if(a=Se(s,n),U(a))r=ql(r,$(),o.children);else{const l=En(o.children,z(a));if(l){const c=l.getChild(Z(a));r=or(r,$(),c)}}}else throw Pn("WriteRecord should have .snap or .children")}}return r}function Fu(t,e,n,r,i){if(!r&&!i){const o=on(t.visibleWrites,e);if(o!=null)return o;{const s=At(t.visibleWrites,e);if(ss(s))return n;if(n==null&&!os(s,$()))return null;{const a=n||A.EMPTY_NODE;return An(s,a)}}}else{const o=At(t.visibleWrites,e);if(!i&&ss(o))return n;if(!i&&n==null&&!os(o,$()))return null;{const s=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(He(c.path,e)||He(e,c.path))},a=Lu(t.allWrites,s,e),l=n||A.EMPTY_NODE;return An(a,l)}}}function ex(t,e,n){let r=A.EMPTY_NODE;const i=on(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=At(t.visibleWrites,e);return n.forEachChild(se,(s,a)=>{const l=An(At(o,new J(s)),a);r=r.updateImmediateChild(s,l)}),Gl(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=At(t.visibleWrites,e);return Gl(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function tx(t,e,n,r,i){v(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=le(e,n);if(os(t.visibleWrites,o))return null;{const s=At(t.visibleWrites,o);return ss(s)?i.getChild(n):An(s,i.getChild(n))}}function nx(t,e,n,r){const i=le(e,n),o=on(t.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=At(t.visibleWrites,i);return An(s,r.getNode().getImmediateChild(n))}else return null}function rx(t,e){return on(t.visibleWrites,e)}function ix(t,e,n,r,i,o,s){let a;const l=At(t.visibleWrites,e),c=on(l,$());if(c!=null)a=c;else if(n!=null)a=An(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=s.getCompare(),m=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let g=m.getNext();for(;g&&d.length<i;)u(g,r)!==0&&d.push(g),g=m.getNext();return d}else return[]}function ox(){return{visibleWrites:Ge.empty(),allWrites:[],lastWriteId:-1}}function vi(t,e,n,r){return Fu(t.writeTree,t.treePath,e,n,r)}function sa(t,e){return ex(t.writeTree,t.treePath,e)}function Yl(t,e,n,r){return tx(t.writeTree,t.treePath,e,n,r)}function wi(t,e){return rx(t.writeTree,le(t.treePath,e))}function sx(t,e,n,r,i,o){return ix(t.writeTree,t.treePath,e,n,r,i,o)}function aa(t,e,n){return nx(t.writeTree,t.treePath,e,n)}function zu(t,e){return Uu(le(t.treePath,e),t.writeTree)}function Uu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;v(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),v(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,vr(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,xr(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,Nn(r,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,vr(r,e.snapshotNode,i.oldSnap));else throw Pn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ju=new lx;class la{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new nn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return aa(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rn(this.viewCache_),o=sx(this.writes_,i,n,1,r,e);return o.length===0?null:o[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t){return{filter:t}}function dx(t,e){v(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ux(t,e,n,r,i){const o=new ax;let s,a;if(n.type===$e.OVERWRITE){const c=n;c.source.fromUser?s=as(t,e,c.path,c.snap,r,i,o):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),s=yi(t,e,c.path,c.snap,r,i,a,o))}else if(n.type===$e.MERGE){const c=n;c.source.fromUser?s=mx(t,e,c.path,c.children,r,i,o):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),s=ls(t,e,c.path,c.children,r,i,a,o))}else if(n.type===$e.ACK_USER_WRITE){const c=n;c.revert?s=gx(t,e,c.path,r,i,o):s=px(t,e,c.path,c.affectedTree,r,i,o)}else if(n.type===$e.LISTEN_COMPLETE)s=hx(t,e,n.path,r,o);else throw Pn("Unknown operation type: "+n.type);const l=o.getChanges();return fx(e,s,l),{viewCache:s,changes:l}}function fx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=is(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Au(is(e)))}}function Bu(t,e,n,r,i,o){const s=e.eventCache;if(wi(r,n)!=null)return e;{let a,l;if(U(n))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=rn(e),d=c instanceof A?c:A.EMPTY_NODE,u=sa(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const c=vi(r,rn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,o)}else{const c=z(n);if(c===".priority"){v(Mt(n)===1,"Can't have a priority with additional path components");const d=s.getNode();l=e.serverCache.getNode();const u=Yl(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=s.getNode()}else{const d=Z(n);let u;if(s.isCompleteForChild(c)){l=e.serverCache.getNode();const m=Yl(r,n,s.getNode(),l);m!=null?u=s.getNode().getImmediateChild(c).updateChild(d,m):u=s.getNode().getImmediateChild(c)}else u=aa(r,c,e.serverCache);u!=null?a=t.filter.updateChild(s.getNode(),c,u,d,i,o):a=s.getNode()}}return ir(e,a,s.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function yi(t,e,n,r,i,o,s,a){const l=e.serverCache;let c;const d=s?t.filter:t.filter.getIndexedFilter();if(U(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),g,null)}else{const g=z(n);if(!l.isCompleteForPath(n)&&Mt(n)>1)return e;const E=Z(n),S=l.getNode().getImmediateChild(g).updateChild(E,r);g===".priority"?c=d.updatePriority(l.getNode(),S):c=d.updateChild(l.getNode(),g,S,E,ju,null)}const u=Mu(e,c,l.isFullyInitialized()||U(n),d.filtersNodes()),m=new la(i,u,o);return Bu(t,u,n,i,m,a)}function as(t,e,n,r,i,o,s){const a=e.eventCache;let l,c;const d=new la(i,e,o);if(U(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,s),l=ir(e,c,!0,t.filter.filtersNodes());else{const u=z(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=ir(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Z(n),g=a.getNode().getImmediateChild(u);let E;if(U(m))E=r;else{const T=d.getCompleteChild(u);T!=null?yu(m)===".priority"&&T.getChild(Eu(m)).isEmpty()?E=T:E=T.updateChild(m,r):E=A.EMPTY_NODE}if(g.equals(E))l=e;else{const T=t.filter.updateChild(a.getNode(),u,E,m,d,s);l=ir(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ql(t,e){return t.eventCache.isCompleteForChild(e)}function mx(t,e,n,r,i,o,s){let a=e;return r.foreach((l,c)=>{const d=le(n,l);Ql(e,z(d))&&(a=as(t,a,d,c,i,o,s))}),r.foreach((l,c)=>{const d=le(n,l);Ql(e,z(d))||(a=as(t,a,d,c,i,o,s))}),a}function Jl(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ls(t,e,n,r,i,o,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;U(n)?c=r:c=new re(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,m)=>{if(d.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),E=Jl(t,g,m);l=yi(t,l,new J(u),E,i,o,s,a)}}),c.children.inorderTraversal((u,m)=>{const g=!e.serverCache.isCompleteForChild(u)&&m.value===void 0;if(!d.hasChild(u)&&!g){const E=e.serverCache.getNode().getImmediateChild(u),T=Jl(t,E,m);l=yi(t,l,new J(u),T,i,o,s,a)}}),l}function px(t,e,n,r,i,o,s){if(wi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(U(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return yi(t,e,n,l.getNode().getChild(n),i,o,a,s);if(U(n)){let c=new re(null);return l.getNode().forEachChild(yn,(d,u)=>{c=c.set(new J(d),u)}),ls(t,e,n,c,i,o,a,s)}else return e}else{let c=new re(null);return r.foreach((d,u)=>{const m=le(n,d);l.isCompleteForPath(m)&&(c=c.set(d,l.getNode().getChild(m)))}),ls(t,e,n,c,i,o,a,s)}}function hx(t,e,n,r,i){const o=e.serverCache,s=Mu(e,o.getNode(),o.isFullyInitialized()||U(n),o.isFiltered());return Bu(t,s,n,r,ju,i)}function gx(t,e,n,r,i,o){let s;if(wi(r,n)!=null)return e;{const a=new la(r,e,i),l=e.eventCache.getNode();let c;if(U(n)||z(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=vi(r,rn(e));else{const u=e.serverCache.getNode();v(u instanceof A,"serverChildren would be complete if leaf node"),d=sa(r,u)}d=d,c=t.filter.updateFullNode(l,d,o)}else{const d=z(n);let u=aa(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,Z(n),a,o):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,A.EMPTY_NODE,Z(n),a,o):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=vi(r,rn(e)),s.isLeafNode()&&(c=t.filter.updateFullNode(c,s,o)))}return s=e.serverCache.isFullyInitialized()||wi(r,$())!=null,ir(e,c,s,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ta(r.getIndex()),o=L_(r);this.processor_=cx(o);const s=n.serverCache,a=n.eventCache,l=i.updateFullNode(A.EMPTY_NODE,s.getNode(),null),c=o.updateFullNode(A.EMPTY_NODE,a.getNode(),null),d=new nn(l,s.isFullyInitialized(),i.filtersNodes()),u=new nn(c,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=Yi(u,d),this.eventGenerator_=new H_(this.query_)}get query(){return this.query_}}function _x(t){return t.viewCache_.serverCache.getNode()}function xx(t,e){const n=rn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Xl(t){return t.eventRegistrations_.length===0}function vx(t,e){t.eventRegistrations_.push(e)}function Zl(t,e,n){const r=[];if(n){v(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(o=>{const s=o.createCancelEvent(n,i);s&&r.push(s)})}if(e){let i=[];for(let o=0;o<t.eventRegistrations_.length;++o){const s=t.eventRegistrations_[o];if(!s.matches(e))i.push(s);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(o+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function ec(t,e,n,r){e.type===$e.MERGE&&e.source.queryId!==null&&(v(rn(t.viewCache_),"We should always have a full cache before handling merges"),v(is(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,o=ux(t.processor_,i,e,n,r);return dx(t.processor_,o.viewCache),v(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,Wu(t,o.changes,o.viewCache.eventCache.getNode(),null)}function wx(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(o,s)=>{r.push(Nn(o,s))}),n.isFullyInitialized()&&r.push(Au(n.getNode())),Wu(t,r,n.getNode(),e)}function Wu(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return $_(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;class yx{constructor(){this.views=new Map}}function kx(t){v(!ki,"__referenceConstructor has already been defined"),ki=t}function Ex(){return v(ki,"Reference.ts has not been loaded"),ki}function Ix(t){return t.views.size===0}function ca(t,e,n,r){const i=e.source.queryId;if(i!==null){const o=t.views.get(i);return v(o!=null,"SyncTree gave us an op for an invalid query."),ec(o,e,n,r)}else{let o=[];for(const s of t.views.values())o=o.concat(ec(s,e,n,r));return o}}function Cx(t,e,n,r,i){const o=e._queryIdentifier,s=t.views.get(o);if(!s){let a=vi(n,i?r:null),l=!1;a?l=!0:r instanceof A?(a=sa(n,r),l=!1):(a=A.EMPTY_NODE,l=!1);const c=Yi(new nn(a,l,!1),new nn(r,i,!1));return new bx(e,c)}return s}function Tx(t,e,n,r,i,o){const s=Cx(t,e,r,i,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,s),vx(s,n),wx(s,n)}function Sx(t,e,n,r){const i=e._queryIdentifier,o=[];let s=[];const a=Dt(t);if(i==="default")for(const[l,c]of t.views.entries())s=s.concat(Zl(c,n,r)),Xl(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||o.push(c.query));else{const l=t.views.get(i);l&&(s=s.concat(Zl(l,n,r)),Xl(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||o.push(l.query)))}return a&&!Dt(t)&&o.push(new(Ex())(e._repo,e._path)),{removed:o,events:s}}function Hu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function kn(t,e){let n=null;for(const r of t.views.values())n=n||xx(r,e);return n}function $u(t,e){if(e._queryParams.loadsAllData())return Qi(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Vu(t,e){return $u(t,e)!=null}function Dt(t){return Qi(t)!=null}function Qi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;function Rx(t){v(!Ei,"__referenceConstructor has already been defined"),Ei=t}function Nx(){return v(Ei,"Reference.ts has not been loaded"),Ei}let Ax=1;class tc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=ox(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Px(t,e,n,r,i){return G_(t.pendingWriteTree_,e,n,r,i),i?Dr(t,new tn(Ou(),e,n)):[]}function hn(t,e,n=!1){const r=Y_(t.pendingWriteTree_,e);if(Q_(t.pendingWriteTree_,e)){let o=new re(null);return r.snap!=null?o=o.set($(),!0):Ne(r.children,s=>{o=o.set(new J(s),!0)}),Dr(t,new xi(r.path,o,n))}else return[]}function Ji(t,e,n){return Dr(t,new tn(ra(),e,n))}function Ox(t,e,n){const r=re.fromObject(n);return Dr(t,new kr(ra(),e,r))}function Mx(t,e){return Dr(t,new yr(ra(),e))}function Dx(t,e,n){const r=da(t,n);if(r){const i=ua(r),o=i.path,s=i.queryId,a=Se(o,e),l=new yr(ia(s),a);return fa(t,o,l)}else return[]}function cs(t,e,n,r){const i=e._path,o=t.syncPointTree_.get(i);let s=[];if(o&&(e._queryIdentifier==="default"||Vu(o,e))){const a=Sx(o,e,n,r);Ix(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;s=a.events;const c=l.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(u,m)=>Dt(m));if(c&&!d){const u=t.syncPointTree_.subtree(i);if(!u.isEmpty()){const m=Ux(u);for(let g=0;g<m.length;++g){const E=m[g],T=E.query,S=Yu(t,E);t.listenProvider_.startListening(sr(T),Ii(t,T),S.hashFn,S.onComplete)}}}!d&&l.length>0&&!r&&(c?t.listenProvider_.stopListening(sr(e),null):l.forEach(u=>{const m=t.queryToTagMap.get(Xi(u));t.listenProvider_.stopListening(sr(u),m)})),jx(t,l)}return s}function Lx(t,e,n,r){const i=da(t,r);if(i!=null){const o=ua(i),s=o.path,a=o.queryId,l=Se(s,e),c=new tn(ia(a),l,n);return fa(t,s,c)}else return[]}function Fx(t,e,n,r){const i=da(t,r);if(i){const o=ua(i),s=o.path,a=o.queryId,l=Se(s,e),c=re.fromObject(n),d=new kr(ia(a),l,c);return fa(t,s,d)}else return[]}function zx(t,e){const n=t._path;let r=null,i=!1;e.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=Se(c,n);r=r||kn(d,u),i=i||Dt(d)});let o=e.syncPointTree_.get(n);o?(i=i||Dt(o),r=r||kn(o,$())):(o=new yx,e.syncPointTree_=e.syncPointTree_.set(n,o));let s;r!=null?s=!0:(s=!1,r=A.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((d,u)=>{const m=kn(u,$());m&&(r=r.updateImmediateChild(d,m))}));const a=Vu(o,t);if(!a&&!t._queryParams.loadsAllData()){const c=Xi(t);v(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");const d=Bx();e.queryToTagMap.set(c,d),e.tagToQueryMap.set(d,c)}const l=oa(e.pendingWriteTree_,n);return{syncPoint:o,writesCache:l,serverCache:r,serverCacheComplete:s,foundAncestorDefaultView:i,viewAlreadyExists:a}}function nc(t,e,n){const{syncPoint:r,serverCache:i,writesCache:o,serverCacheComplete:s,viewAlreadyExists:a,foundAncestorDefaultView:l}=zx(e,t);let c=Tx(r,e,n,o,i,s);if(!a&&!l){const d=$u(r,e);c=c.concat(Wx(t,e,d))}return c}function qu(t,e,n){const i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(s,a)=>{const l=Se(s,e),c=kn(a,l);if(c)return c});return Fu(i,e,o,n,!0)}function Dr(t,e){return Ku(e,t.syncPointTree_,null,oa(t.pendingWriteTree_,$()))}function Ku(t,e,n,r){if(U(t.path))return Gu(t,e,n,r);{const i=e.get($());n==null&&i!=null&&(n=kn(i,$()));let o=[];const s=z(t.path),a=t.operationForChild(s),l=e.children.get(s);if(l&&a){const c=n?n.getImmediateChild(s):null,d=zu(r,s);o=o.concat(Ku(a,l,c,d))}return i&&(o=o.concat(ca(i,t,r,n))),o}}function Gu(t,e,n,r){const i=e.get($());n==null&&i!=null&&(n=kn(i,$()));let o=[];return e.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,c=zu(r,s),d=t.operationForChild(s);d&&(o=o.concat(Gu(d,a,l,c)))}),i&&(o=o.concat(ca(i,t,r,n))),o}function Yu(t,e){const n=e.query,r=Ii(t,n);return{hashFn:()=>(_x(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Dx(t,n._path,r):Mx(t,n._path);{const o=O0(i,n);return cs(t,n,null,o)}}}}function Ii(t,e){const n=Xi(e);return t.queryToTagMap.get(n)}function Xi(t){return t._path.toString()+"$"+t._queryIdentifier}function da(t,e){return t.tagToQueryMap.get(e)}function ua(t){const e=t.indexOf("$");return v(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new J(t.substr(0,e))}}function fa(t,e,n){const r=t.syncPointTree_.get(e);v(r,"Missing sync point for query tag that we're tracking");const i=oa(t.pendingWriteTree_,e);return ca(r,n,i,null)}function Ux(t){return t.fold((e,n,r)=>{if(n&&Dt(n))return[Qi(n)];{let i=[];return n&&(i=Hu(n)),Ne(r,(o,s)=>{i=i.concat(s)}),i}})}function sr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Nx())(t._repo,t._path):t}function jx(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Xi(r),o=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(o)}}}function Bx(){return Ax++}function Wx(t,e,n){const r=e._path,i=Ii(t,e),o=Yu(t,n),s=t.listenProvider_.startListening(sr(e),i,o.hashFn,o.onComplete),a=t.syncPointTree_.subtree(r);if(i)v(!Dt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!U(c)&&d&&Dt(d))return[Qi(d).query];{let m=[];return d&&(m=m.concat(Hu(d).map(g=>g.query))),Ne(u,(g,E)=>{m=m.concat(E)}),m}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(sr(d),Ii(t,d))}}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ma(n)}node(){return this.node_}}class pa{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new pa(this.syncTree_,n)}node(){return qu(this.syncTree_,this.path_)}}const Hx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},rc=function(t,e,n){if(!t||typeof t!="object")return t;if(v(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return $x(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Vx(t[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},$x=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:v(!1,"Unexpected server value: "+t)}},Vx=function(t,e,n){t.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&v(!1,"Unexpected increment value: "+r);const i=e.node();if(v(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},qx=function(t,e,n,r){return ha(e,new pa(n,t),r)},Kx=function(t,e,n){return ha(t,new ma(e),n)};function ha(t,e,n){const r=t.getPriority().val(),i=rc(r,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const s=t,a=rc(s.getValue(),e,n);return a!==s.getValue()||i!==s.getPriority().val()?new ce(a,_e(i)):t}else{const s=t;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new ce(i))),s.forEachChild(se,(a,l)=>{const c=ha(l,e.getImmediateChild(a),n);c!==l&&(o=o.updateImmediateChild(a,c))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ba(t,e){let n=e instanceof J?e:new J(e),r=t,i=z(n);for(;i!==null;){const o=En(r.node.children,i)||{children:{},childCount:0};r=new ga(i,r,o),n=Z(n),i=z(n)}return r}function jn(t){return t.node.value}function Qu(t,e){t.node.value=e,ds(t)}function Ju(t){return t.node.childCount>0}function Gx(t){return jn(t)===void 0&&!Ju(t)}function Zi(t,e){Ne(t.node.children,(n,r)=>{e(new ga(n,t,r))})}function Xu(t,e,n,r){n&&!r&&e(t),Zi(t,i=>{Xu(i,e,!0,r)}),n&&r&&e(t)}function Yx(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Lr(t){return new J(t.parent===null?t.name:Lr(t.parent)+"/"+t.name)}function ds(t){t.parent!==null&&Qx(t.parent,t.name,t)}function Qx(t,e,n){const r=Gx(n),i=ht(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ds(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ds(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=/[\[\].#$\/\u0000-\u001F\u007F]/,Xx=/[\[\].#$\u0000-\u001F\u007F]/,Co=10*1024*1024,Zu=function(t){return typeof t=="string"&&t.length!==0&&!Jx.test(t)},ef=function(t){return typeof t=="string"&&t.length!==0&&!Xx.test(t)},Zx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ef(t)},tf=function(t,e,n){const r=n instanceof J?new m_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Bt(r));if(typeof e=="function")throw new Error(t+"contains a function "+Bt(r)+" with contents = "+e.toString());if(nu(e))throw new Error(t+"contains "+e.toString()+" "+Bt(r));if(typeof e=="string"&&e.length>Co/3&&Ti(e)>Co)throw new Error(t+"contains a string greater than "+Co+" utf8 bytes "+Bt(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,o=!1;if(Ne(e,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!Zu(s)))throw new Error(t+" contains an invalid key ("+s+") "+Bt(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);p_(r,s),tf(t,a,r),h_(r)}),i&&o)throw new Error(t+' contains ".value" child '+Bt(r)+" in addition to actual children.")}},nf=function(t,e,n,r){if(!(r&&n===void 0)&&!ef(n))throw new Error(gc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ev=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nf(t,e,n,r)},tv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Zx(n))throw new Error(gc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rf(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],o=i.getPath();n!==null&&!Xs(o,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function of(t,e,n){rf(t,n),sf(t,r=>Xs(r,e))}function sn(t,e,n){rf(t,n),sf(t,r=>He(r,e)||He(e,r))}function sf(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const o=i.path;e(o)?(rv(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Yt&&be("event: "+n.toString()),Or(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="repo_interrupt",ov=25;class sv{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_i(),this.transactionQueueTree_=new ga,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function av(t,e,n){if(t.stats_=Qs(t.repoInfo_),t.forceRestClient_||F0())t.server_=new bi(t.repoInfo_,(r,i,o,s)=>{ic(t,r,i,o,s)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>oc(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ft(t.repoInfo_,e,(r,i,o,s)=>{ic(t,r,i,o,s)},r=>{oc(t,r)},r=>{cv(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=H0(t.repoInfo_,()=>new W_(t.stats_,t.server_)),t.infoData_=new F_,t.infoSyncTree_=new tc({startListening:(r,i,o,s)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ji(t.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),_a(t,"connected",!1),t.serverSyncTree_=new tc({startListening:(r,i,o,s)=>(t.server_.listen(r,o,i,(a,l)=>{const c=s(a,l);sn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function lv(t){const n=t.infoData_.getNode(new J(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function af(t){return Hx({timestamp:lv(t)})}function ic(t,e,n,r,i){t.dataUpdateCount++;const o=new J(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let s=[];if(i)if(r){const l=ei(n,c=>_e(c));s=Fx(t.serverSyncTree_,o,l,i)}else{const l=_e(n);s=Lx(t.serverSyncTree_,o,l,i)}else if(r){const l=ei(n,c=>_e(c));s=Ox(t.serverSyncTree_,o,l)}else{const l=_e(n);s=Ji(t.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=va(t,o)),sn(t.eventQueue_,a,s)}function oc(t,e){_a(t,"connected",e),e===!1&&uv(t)}function cv(t,e){Ne(e,(n,r)=>{_a(t,n,r)})}function _a(t,e,n){const r=new J("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const o=Ji(t.infoSyncTree_,r,i);sn(t.eventQueue_,r,o)}function dv(t){return t.nextWriteId_++}function uv(t){lf(t,"onDisconnectEvents");const e=af(t),n=_i();rs(t.onDisconnect_,$(),(i,o)=>{const s=qx(i,o,t.serverSyncTree_,e);Pu(n,i,s)});let r=[];rs(n,$(),(i,o)=>{r=r.concat(Ji(t.serverSyncTree_,i,o));const s=gv(t,i);va(t,s)}),t.onDisconnect_=_i(),sn(t.eventQueue_,$(),r)}function fv(t,e,n){let r;z(e._path)===".info"?r=nc(t.infoSyncTree_,e,n):r=nc(t.serverSyncTree_,e,n),of(t.eventQueue_,e._path,r)}function sc(t,e,n){let r;z(e._path)===".info"?r=cs(t.infoSyncTree_,e,n):r=cs(t.serverSyncTree_,e,n),of(t.eventQueue_,e._path,r)}function mv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(iv)}function lf(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function cf(t,e,n){return qu(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function xa(t,e=t.transactionQueueTree_){if(e||eo(t,e),jn(e)){const n=uf(t,e);v(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&pv(t,Lr(e),n)}else Ju(e)&&Zi(e,n=>{xa(t,n)})}function pv(t,e,n){const r=n.map(c=>c.currentWriteId),i=cf(t,e,r);let o=i;const s=i.hash();for(let c=0;c<n.length;c++){const d=n[c];v(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Se(e,d.path);o=o.updateChild(u,d.currentOutputSnapshotRaw)}const a=o.val(!0),l=e;t.server_.put(l.toString(),a,c=>{lf(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(hn(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&u.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();eo(t,ba(t.transactionQueueTree_,e)),xa(t,t.transactionQueueTree_),sn(t.eventQueue_,e,d);for(let m=0;m<u.length;m++)Or(u[m])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Oe("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}va(t,e)}},s)}function va(t,e){const n=df(t,e),r=Lr(n),i=uf(t,n);return hv(t,i,r),r}function hv(t,e,n){if(e.length===0)return;const r=[];let i=[];const s=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Se(n,l.path);let d=!1,u;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ov)d=!0,u="maxretry",i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0));else{const m=cf(t,l.path,s);l.currentInputSnapshot=m;const g=e[a].update(m.val());if(g!==void 0){tf("transaction failed: Data returned ",g,l.path);let E=_e(g);typeof g=="object"&&g!=null&&ht(g,".priority")||(E=E.updatePriority(m.getPriority()));const S=l.currentWriteId,D=af(t),ae=Kx(E,m,D);l.currentOutputSnapshotRaw=E,l.currentOutputSnapshotResolved=ae,l.currentWriteId=dv(t),s.splice(s.indexOf(S),1),i=i.concat(Px(t.serverSyncTree_,l.path,ae,l.currentWriteId,l.applyLocally)),i=i.concat(hn(t.serverSyncTree_,S,!0))}else d=!0,u="nodata",i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0))}sn(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}eo(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Or(r[a]);xa(t,t.transactionQueueTree_)}function df(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&jn(r)===void 0;)r=ba(r,n),e=Z(e),n=z(e);return r}function uf(t,e){const n=[];return ff(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ff(t,e,n){const r=jn(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Zi(e,i=>{ff(t,i,n)})}function eo(t,e){const n=jn(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Qu(e,n.length>0?n:void 0)}Zi(e,r=>{eo(t,r)})}function gv(t,e){const n=Lr(df(t,e)),r=ba(t.transactionQueueTree_,e);return Yx(r,i=>{To(t,i)}),To(t,r),Xu(r,i=>{To(t,i)}),n}function To(t,e){const n=jn(e);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(v(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(v(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(hn(t.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?Qu(e,void 0):n.length=o+1,sn(t.eventQueue_,Lr(e),i);for(let s=0;s<r.length;s++)Or(r[s])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _v(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Oe(`Invalid query segment '${n}' in query '${t}'`)}return e}const ac=function(t,e){const n=xv(t),r=n.namespace;n.domain==="firebase.com"&&Zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||S0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new j0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new J(n.pathString)}},xv=function(t){let e="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=bv(t.substring(d,u)));const m=_v(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(s=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),o=r}"ns"in m&&(o=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ue(this.snapshot.exportVal())}}class pf{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:yu(this._path)}get ref(){return new bt(this._repo,this._path)}get _queryIdentifier(){const e=$l(this._queryParams),n=Gs(e);return n==="{}"?"default":n}get _queryObject(){return $l(this._queryParams)}isEqual(e){if(e=Lt(e),!(e instanceof wa))return!1;const n=this._repo===e._repo,r=Xs(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+f_(this._path)}}class bt extends wa{constructor(e,n){super(e,n,new na,!1)}get parent(){const e=Eu(this._path);return e===null?null:new bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Er{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new J(e),r=Ci(this.ref,e);return new Er(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Er(i,Ci(this.ref,r),se)))}hasChild(e){const n=new J(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wv(t,e){return t=Lt(t),t._checkNotDeleted("ref"),e!==void 0?Ci(t._root,e):t._root}function Ci(t,e){return t=Lt(t),z(t._path)===null?ev("child","path",e,!1):nf("child","path",e,!1),new bt(t._repo,le(t._path,e))}class ya{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new mf("value",this,new Er(e.snapshotNode,new bt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pf(this,e,n):null}matches(e){return e instanceof ya?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ka{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pf(this,e,n):null}createEvent(e,n){v(e.childName!=null,"Child events should have a childName.");const r=Ci(new bt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new mf(e.type,this,new Er(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ka?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function yv(t,e,n,r,i){let o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){const l=n,c=(d,u)=>{sc(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const s=new vv(n,o||void 0),a=e==="value"?new ya(s):new ka(e,s);return fv(t._repo,t,a),()=>sc(t._repo,t,a)}function kv(t,e,n,r){return yv(t,"value",e,n,r)}kx(bt);Rx(bt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="FIREBASE_DATABASE_EMULATOR_HOST",us={};let Iv=!1;function Cv(t,e,n,r,i){let o=r||t.options.databaseURL;o===void 0&&(t.options.projectId||Zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let s=ac(o,i),a=s.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[Ev]),c?(l=!0,o=`http://${c}?ns=${a.namespace}`,s=ac(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const d=i&&l?new es(es.OWNER):new U0(t.name,t.options,e);tv("Invalid Firebase Database URL",s),U(s.path)||Zt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Sv(a,t,d,new z0(t.name,n));return new Rv(u,t)}function Tv(t,e){const n=us[e];(!n||n[t.key]!==t)&&Zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mv(t),delete n[t.key]}function Sv(t,e,n,r){let i=us[e.name];i||(i={},us[e.name]=i);let o=i[t.toURLString()];return o&&Zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new sv(t,Iv,n,r),i[t.toURLString()]=o,o}class Rv{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(av(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Tv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zt("Cannot call "+e+" on a deleted database.")}}function Nv(t=vc(),e){return _s(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){k0(Cr),In(new Qt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return Cv(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),St(Tl,Sl,t),St(Tl,Sl,"esm2017")}ft.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ft.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Av();const Pv=t=>(Sd("data-v-0aeff5b0"),t=t(),Rd(),t),Ov={class:"container",style:{"max-width":"480px"}},Mv={class:"row"},Dv={class:"col text-center box"},Lv=["id","onClick","disabled","value","name"],Fv=["for","value"],zv=Pv(()=>H("br",null,null,-1)),Uv=Vi(" \xA0\xA0 "),jv=$s({__name:"WorkGroup",emits:["onWorkChange","onSubmit"],setup(t,{emit:e}){const n=dt({}),r=dt(!1),i=dt(new Set);Jc().onAuthStateChanged(l=>{if(l){const c=l.uid;kv(wv(Nv(),`users/${c}/workgroup`),d=>{let u=d.val();console.log(u.values);for(const m of u.values)m.color=m.color.replace("_","#");if(n.value=u,!d.exists())return console.error("data not exist.")},{onlyOnce:!0})}});function o(l){console.log(i.value),console.log(l),i.value.has(l)?i.value.delete(l):i.value.add(l),r.value=i.value.size>=2,e("onWorkChange",[...i.value])}function s(){e("onSubmit",[...i.value])}function a(){i.value.clear(),r.value=!1,e("onWorkChange",[...i.value])}return(l,c)=>(ke(),Te("form",{onSubmit:c[0]||(c[0]=i0(()=>{},["prevent"]))},[H("div",Ov,[(ke(!0),Te(ge,null,di(n.value.values,(d,u)=>(ke(),Te("div",Mv,[(ke(!0),Te(ge,null,di(d.names,m=>(ke(),Te("div",Dv,[H("input",{type:"checkbox",class:"btn-check",id:m,onClick:()=>o(m),disabled:r.value&&!i.value.has(m),value:m,name:m},null,8,Lv),H("label",{class:"mylabel",style:Oi(`background-color: ${d.color};`),for:m,value:m},[H("b",null,Zn(m),1)],12,Fv)]))),256))]))),256))]),zv,H("div",{class:"justify-content-center text-center"},[H("button",{class:"btn btn-primary btn-lg",style:{width:"120px"},onClick:s,type:"button"},"\u78BA\u8A8D"),Uv,H("button",{class:"btn btn-light btn-lg",style:{width:"120px"},onClick:a,type:"reset"},"\u91CD\u65B0\u8F38\u5165")])],32))}});var Bv=Xd(jv,[["__scopeId","data-v-0aeff5b0"]]);const Wv=H("header",null,null,-1),Hv={class:"row g-0 justify-content-center"},$v=H("br",null,null,-1),Vv={class:"col",style:{"text-align":"center"}},qv=H("br",null,null,-1),Kv={class:"h1"},Gv=H("br",null,null,-1),Yv={key:0,class:"h2"},Qv={key:1,class:"h2"},Jv=Vi("\u5C31\u8A3A\u985E\u578B: "),Xv=H("br",null,null,-1),Zv=$s({__name:"App",setup(t){const e=dt(""),n=dt((new Date().getHours()<=12?"\u4E0A\u5348\u8A3A":"\u4E0B\u5348\u8A3A")+" XXX \u91AB\u5E2B");function r(l){e.value=l}const i=dt(0),o=dt([]);function s(){i.value=1}function a(l){console.log(l),o.value=l}return(l,c)=>(ke(),Te(ge,null,[Wv,H("main",null,[H("div",Hv,[$v,H("div",Vv,[qv,H("h1",Kv,"\u5C31\u8A3A\u5E8F\u865F: "+Zn(e.value),1),Gv,i.value==0?(ke(),Te("h2",Yv,Zn(n.value),1)):mi("",!0),i.value!=0?(ke(),Te("h2",Qv,[Jv,H("b",null,Zn(o.value.join(" + ")),1)])):mi("",!0)])]),Xv,cl(H("div",null,[Ke(y0,{onOnNumberChange:r,onOnSubmit:s})],512),[[Il,i.value==0]]),cl(H("div",null,[Ke(Bv,{onOnWorkChange:a})],512),[[Il,i.value==1]])])],64))}});var ew="firebase",tw="9.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(ew,tw,"app");const nw={apiKey:"AIzaSyADZGGzgFgmEMTMPsZIamb_jYfOONqNeps",authDomain:"consultation-82f6f.firebaseapp.com",databaseURL:"https://consultation-82f6f-default-rtdb.firebaseio.com",projectId:"consultation-82f6f",storageBucket:"consultation-82f6f.appspot.com",messagingSenderId:"872033401709",appId:"1:872033401709:web:800482f5c58e4bc2963864",measurementId:"G-9WMHKM671T"};function rw(){Am(nw);const t=Jc();yp(t,"hscdev@gmail.com","hscdev").then(e=>{const n=e.user;console.log(n.email)}).catch(e=>{const n=e.code,r=e.message;console.log(n),console.log(r)})}rw();a0(Zv).mount("#app");
