const km=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};km();/**
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
 */const vc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const w=function(t,e){if(!t)throw Dn(e)},Dn=function(t){return new Error("Firebase Database ("+vc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const xc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Em=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},hs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=o>>2,u=(o&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,s||(f=64)),r.push(n[d],n[u],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Em(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||c==null||u==null)throw Error();const f=o<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),u!==64){const x=c<<6&192|u;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},wc=function(t){const e=xc(t);return hs.encodeByteArray(e,!0)},yc=function(t){return wc(t).replace(/\./g,"")},Ao=function(t){try{return hs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Im(t){return kc(void 0,t)}function kc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Cm(n)||(t[n]=kc(t[n],e[n]));return t}function Cm(t){return t!=="__proto__"}/**
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
 */class Si{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ye(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gs(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function Tm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ec(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sm(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ic(){return vc.NODE_ADMIN===!0}function Rm(){return typeof indexedDB=="object"}function Nm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const Am="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Am,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sr.prototype.create)}}class Sr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?Pm(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ln(i,a,r)}}function Pm(t,e){return t.replace(Om,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Om=/\{\$([^}]+)}/g;/**
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
 */function cr(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
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
 */const Cc=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=cr(Ao(o[0])||""),n=cr(Ao(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Mm=function(t){const e=Cc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Dm=function(t){const e=Cc(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function gt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Tn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Po(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ni(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ri(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Ba(o)&&Ba(s)){if(!ri(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ba(t){return t!==null&&typeof t=="object"}/**
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
 */function Fn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Lm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^o&(s^a),d=1518500249):(c=o^s^a,d=1859775393):u<60?(c=o&s|a&(o|s),d=2400959708):(c=o^s^a,d=3395469782);const f=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(o[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=e[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}function Fm(t,e){const n=new zm(t,e);return n.subscribe.bind(n)}class zm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Um(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ao),i.error===void 0&&(i.error=ao),i.complete===void 0&&(i.complete=ao);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Um(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ao(){}function bs(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Bm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,w(r<t.length,"Surrogate pair missing trail surrogate.");const s=t.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ri=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function bt(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class jm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Si;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hm(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wm(t){return t===Wt?void 0:t}function Hm(t){return t.instantiationMode==="EAGER"}/**
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
 */class $m{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Vm={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},qm=Y.INFO,Km={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Gm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Km[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _s{constructor(e){this.name=e,this._logLevel=qm,this._logHandler=Gm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Ym=(t,e)=>e.some(n=>t instanceof n);let ja,Wa;function Qm(){return ja||(ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jm(){return Wa||(Wa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tc=new WeakMap,Oo=new WeakMap,Sc=new WeakMap,lo=new WeakMap,vs=new WeakMap;function Xm(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Rt(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Tc.set(n,t)}).catch(()=>{}),vs.set(e,t),e}function Zm(t){if(Oo.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Oo.set(t,e)}let Mo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ef(t){Mo=t(Mo)}function tf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(co(this),e,...n);return Sc.set(r,e.sort?e.sort():[e]),Rt(r)}:Jm().includes(t)?function(...e){return t.apply(co(this),e),Rt(Tc.get(this))}:function(...e){return Rt(t.apply(co(this),e))}}function nf(t){return typeof t=="function"?tf(t):(t instanceof IDBTransaction&&Zm(t),Ym(t,Qm())?new Proxy(t,Mo):t)}function Rt(t){if(t instanceof IDBRequest)return Xm(t);if(lo.has(t))return lo.get(t);const e=nf(t);return e!==t&&(lo.set(t,e),vs.set(e,t)),e}const co=t=>vs.get(t);function rf(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Rt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Rt(s.result),l.oldVersion,l.newVersion,Rt(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const of=["get","getKey","getAll","getAllKeys","count"],sf=["put","add","delete","clear"],uo=new Map;function Ha(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uo.get(e))return uo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||of.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return uo.set(e,o),o}ef(t=>({...t,get:(e,n,r)=>Ha(e,n)||t.get(e,n,r),has:(e,n)=>!!Ha(e,n)||t.has(e,n)}));/**
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
 */class af{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Do="@firebase/app",$a="0.7.27";/**
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
 */const xs=new _s("@firebase/app"),cf="@firebase/app-compat",df="@firebase/analytics-compat",uf="@firebase/analytics",mf="@firebase/app-check-compat",ff="@firebase/app-check",pf="@firebase/auth",hf="@firebase/auth-compat",gf="@firebase/database",bf="@firebase/database-compat",_f="@firebase/functions",vf="@firebase/functions-compat",xf="@firebase/installations",wf="@firebase/installations-compat",yf="@firebase/messaging",kf="@firebase/messaging-compat",Ef="@firebase/performance",If="@firebase/performance-compat",Cf="@firebase/remote-config",Tf="@firebase/remote-config-compat",Sf="@firebase/storage",Rf="@firebase/storage-compat",Nf="@firebase/firestore",Af="@firebase/firestore-compat",Pf="firebase",Of="9.8.4";/**
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
 */const Rc="[DEFAULT]",Mf={[Do]:"fire-core",[cf]:"fire-core-compat",[uf]:"fire-analytics",[df]:"fire-analytics-compat",[ff]:"fire-app-check",[mf]:"fire-app-check-compat",[pf]:"fire-auth",[hf]:"fire-auth-compat",[gf]:"fire-rtdb",[bf]:"fire-rtdb-compat",[_f]:"fire-fn",[vf]:"fire-fn-compat",[xf]:"fire-iid",[wf]:"fire-iid-compat",[yf]:"fire-fcm",[kf]:"fire-fcm-compat",[Ef]:"fire-perf",[If]:"fire-perf-compat",[Cf]:"fire-rc",[Tf]:"fire-rc-compat",[Sf]:"fire-gcs",[Rf]:"fire-gcs-compat",[Nf]:"fire-fst",[Af]:"fire-fst-compat","fire-js":"fire-js",[Pf]:"fire-js-all"};/**
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
 */const ii=new Map,Lo=new Map;function Df(t,e){try{t.container.addComponent(e)}catch(n){xs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(Lo.has(e))return xs.debug(`There were multiple attempts to register component ${e}.`),!1;Lo.set(e,t);for(const n of ii.values())Df(n,t);return!0}function ws(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Lf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},tn=new Sr("app","Firebase",Lf);/**
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
 */class Ff{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
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
 */const Rr=Of;function zf(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Rc,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw tn.create("bad-app-name",{appName:String(r)});const i=ii.get(r);if(i){if(ri(t,i.options)&&ri(n,i.config))return i;throw tn.create("duplicate-app",{appName:r})}const o=new $m(r);for(const a of Lo.values())o.addComponent(a);const s=new Ff(t,n,o);return ii.set(r,s),s}function Nc(t=Rc){const e=ii.get(t);if(!e)throw tn.create("no-app",{appName:t});return e}function Nt(t,e,n){var r;let i=(r=Mf[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}Sn(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Uf="firebase-heartbeat-database",Bf=1,dr="firebase-heartbeat-store";let mo=null;function Ac(){return mo||(mo=rf(Uf,Bf,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dr)}}}).catch(t=>{throw tn.create("storage-open",{originalErrorMessage:t.message})})),mo}async function jf(t){var e;try{return(await Ac()).transaction(dr).objectStore(dr).get(Pc(t))}catch(n){throw tn.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Va(t,e){var n;try{const i=(await Ac()).transaction(dr,"readwrite");return await i.objectStore(dr).put(e,Pc(t)),i.done}catch(r){throw tn.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function Pc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wf=1024,Hf=30*24*60*60*1e3;class $f{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Hf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qa(),{heartbeatsToSend:n,unsentEntries:r}=Vf(this._heartbeatsCache.heartbeats),i=yc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qa(){return new Date().toISOString().substring(0,10)}function Vf(t,e=Wf){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Ka(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ka(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rm()?Nm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Va(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Va(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ka(t){return yc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Kf(t){Sn(new en("platform-logger",e=>new af(e),"PRIVATE")),Sn(new en("heartbeat",e=>new $f(e),"PRIVATE")),Nt(Do,$a,t),Nt(Do,$a,"esm2017"),Nt("fire-js","")}Kf("");function ys(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Oc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gf=Oc,Mc=new Sr("auth","Firebase",Oc());/**
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
 */const Ga=new _s("@firebase/auth");function Yr(t,...e){Ga.logLevel<=Y.ERROR&&Ga.error(`Auth (${Rr}): ${t}`,...e)}/**
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
 */function Ye(t,...e){throw ks(t,...e)}function rt(t,...e){return ks(t,...e)}function Yf(t,e,n){const r=Object.assign(Object.assign({},Gf()),{[e]:n});return new Sr("auth","Firebase",r).create(e,{appName:t.name})}function ks(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mc.create(t,...e)}function P(t,e,...n){if(!t)throw ks(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yr(e),new Error(e)}function ft(t,e){t||ct(e)}/**
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
 */const Ya=new Map;function dt(t){ft(t instanceof Function,"Expected a class definition");let e=Ya.get(t);return e?(ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ya.set(t,e),e)}/**
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
 */function Qf(t,e){const n=ws(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ri(o,e!=null?e:{}))return i;Ye(i,"already-initialized")}return n.initialize({options:e})}function Jf(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Fo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xf(){return Qa()==="http:"||Qa()==="https:"}function Qa(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Zf(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xf()||Tm()||"connection"in navigator)?navigator.onLine:!0}function ep(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ft(n>e,"Short delay should be less than long delay!"),this.isMobile=gs()||Ec()}get(){return Zf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Es(t,e){ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Dc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const np=new Nr(3e4,6e4);function Ni(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ar(t,e,n,r,i={}){return Lc(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Fn(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Dc.fetch()(Fc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Lc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tp),e);try{const i=new rp(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw jr(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jr(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw jr(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw jr(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Yf(t,d,c);Ye(t,d)}}catch(i){if(i instanceof Ln)throw i;Ye(t,"network-request-failed")}}async function Ai(t,e,n,r,i={}){const o=await Ar(t,e,n,r,i);return"mfaPendingCredential"in o&&Ye(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Fc(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Es(t.config,i):`${t.config.apiScheme}://${i}`}class rp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),np.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ip(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function op(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function tr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sp(t,e=!1){const n=bt(t),r=await n.getIdToken(e),i=Is(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:tr(fo(i.auth_time)),issuedAtTime:tr(fo(i.iat)),expirationTime:tr(fo(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function fo(t){return Number(t)*1e3}function Is(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Yr("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ao(r);return o?JSON.parse(o):(Yr("Failed to decode base64 JWT payload"),null)}catch(o){return Yr("Caught error parsing JWT payload as JSON",(e=o)===null||e===void 0?void 0:e.toString()),null}}function ap(t){const e=Is(t);return P(e,"internal-error"),P(typeof e.exp!="undefined","internal-error"),P(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ur(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&lp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=tr(this.lastLoginAt),this.creationTime=tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oi(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ur(t,op(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?mp(o.providerUserInfo):[],a=up(t.providerData,s),l=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new zc(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function dp(t){const e=bt(t);await oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function up(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mp(t){return t.map(e=>{var{providerId:n}=e,r=ys(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fp(t,e){const n=await Lc(t,{},async()=>{const r=Fn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Fc(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dc.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken!="undefined","internal-error"),P(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):ap(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await fp(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new mr;return r&&(P(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(P(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function wt(t,e){P(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=ys(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new zc(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ur(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sp(this,e)}reload(){return dp(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ur(this,ip(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(s=n.photoURL)!==null&&s!==void 0?s:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,M=(c=n.createdAt)!==null&&c!==void 0?c:void 0,ae=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:q,emailVerified:ee,isAnonymous:ge,providerData:Qe,stsTokenManager:Je}=n;P(q&&Je,e,"internal-error");const j=mr.fromJSON(this.name,Je);P(typeof q=="string",e,"internal-error"),wt(u,e.name),wt(f,e.name),P(typeof ee=="boolean",e,"internal-error"),P(typeof ge=="boolean",e,"internal-error"),wt(g,e.name),wt(x,e.name),wt(C,e.name),wt(T,e.name),wt(M,e.name),wt(ae,e.name);const J=new Yt({uid:q,auth:e,email:f,emailVerified:ee,displayName:u,isAnonymous:ge,photoURL:x,phoneNumber:g,tenantId:C,stsTokenManager:j,createdAt:M,lastLoginAt:ae});return Qe&&Array.isArray(Qe)&&(J.providerData=Qe.map(ie=>Object.assign({},ie))),T&&(J._redirectEventId=T),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new mr;i.updateFromServerResponse(n);const o=new Yt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oi(o),o}}/**
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
 */class Uc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Uc.type="NONE";const Ja=Uc;/**
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
 */function Qr(t,e,n){return`firebase:${t}:${e}:${n}`}class vn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Qr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Qr("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vn(dt(Ja),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||dt(Ja);const s=Qr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(s);if(d){const u=Yt._fromJSON(e,d);c!==o&&(a=u),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new vn(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new vn(o,e,r))}}/**
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
 */function Xa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($c(e))return"Blackberry";if(Vc(e))return"Webos";if(Cs(e))return"Safari";if((e.includes("chrome/")||jc(e))&&!e.includes("edge/"))return"Chrome";if(Hc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bc(t=ye()){return/firefox\//i.test(t)}function Cs(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jc(t=ye()){return/crios\//i.test(t)}function Wc(t=ye()){return/iemobile/i.test(t)}function Hc(t=ye()){return/android/i.test(t)}function $c(t=ye()){return/blackberry/i.test(t)}function Vc(t=ye()){return/webos/i.test(t)}function Pi(t=ye()){return/iphone|ipad|ipod/i.test(t)}function pp(t=ye()){var e;return Pi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hp(){return Sm()&&document.documentMode===10}function qc(t=ye()){return Pi(t)||Hc(t)||Vc(t)||$c(t)||/windows phone/i.test(t)||Wc(t)}function gp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Kc(t,e=[]){let n;switch(t){case"Browser":n=Xa(ye());break;case"Worker":n=`${Xa(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rr}/${r}`}/**
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
 */class bp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class _p{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Za(this),this.idTokenSubscription=new Za(this),this.beforeStateQueue=new bp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await oi(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ep()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?bt(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await vn.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return P(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ts(t){return bt(t)}class Za{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fm(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Ss{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function vp(t,e){return Ar(t,"POST","/v1/accounts:update",e)}/**
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
 */async function xp(t,e){return Ai(t,"POST","/v1/accounts:signInWithPassword",Ni(t,e))}/**
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
 */async function wp(t,e){return Ai(t,"POST","/v1/accounts:signInWithEmailLink",Ni(t,e))}async function yp(t,e){return Ai(t,"POST","/v1/accounts:signInWithEmailLink",Ni(t,e))}/**
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
 */class fr extends Ss{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new fr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wp(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return vp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xn(t,e){return Ai(t,"POST","/v1/accounts:signInWithIdp",Ni(t,e))}/**
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
 */const kp="http://localhost";class nn extends Ss{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=ys(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new nn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return xn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xn(e,n)}buildRequest(){const e={requestUri:kp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fn(n)}return e}}/**
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
 */function Ep(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ip(t){const e=Jn(Xn(t)).link,n=e?Jn(Xn(e)).deep_link_id:null,r=Jn(Xn(t)).deep_link_id;return(r?Jn(Xn(r)).link:null)||r||n||e||t}class Rs{constructor(e){var n,r,i,o,s,a;const l=Jn(Xn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,u=Ep((i=l.mode)!==null&&i!==void 0?i:null);P(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ip(e);try{return new Rs(n)}catch{return null}}}/**
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
 */class zn{constructor(){this.providerId=zn.PROVIDER_ID}static credential(e,n){return fr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rs.parseLink(n);return P(r,"argument-error"),fr._fromEmailAndCode(e,r.code,r.tenantId)}}zn.PROVIDER_ID="password";zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pr extends Gc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class It extends Pr{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
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
 */class Ct extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return nn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
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
 */class Tt extends Pr{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
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
 */class St extends Pr{constructor(){super("twitter.com")}static credential(e,n){return nn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return St.credential(n,r)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
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
 */class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Yt._fromIdTokenResponse(e,r,i),s=el(r);return new Rn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=el(r);return new Rn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function el(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class si extends Ln{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,si.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new si(e,n,r,i)}}function Yc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?si._fromErrorAndOperation(t,o,e,r):o})}async function Cp(t,e,n=!1){const r=await ur(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rn._forOperation(t,"link",r)}/**
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
 */async function Tp(t,e,n=!1){var r;const{auth:i}=t,o="reauthenticate";try{const s=await ur(t,Yc(i,o,e,t),n);P(s.idToken,i,"internal-error");const a=Is(s.idToken);P(a,i,"internal-error");const{sub:l}=a;return P(t.uid===l,i,"user-mismatch"),Rn._forOperation(t,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ye(i,"user-mismatch"),s}}/**
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
 */async function Qc(t,e,n=!1){const r="signIn",i=await Yc(t,r,e),o=await Rn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function Sp(t,e){return Qc(Ts(t),e)}function Rp(t,e,n){return Sp(bt(t),zn.credential(e,n))}const ai="__sak";/**
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
 */class Jc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ai,"1"),this.storage.removeItem(ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Np(){const t=ye();return Cs(t)||Pi(t)}const Ap=1e3,Pp=10;class Xc extends Jc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Np()&&gp(),this.fallbackToPolling=qc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);hp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Pp):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ap)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xc.type="LOCAL";const Op=Xc;/**
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
 */class Zc extends Jc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zc.type="SESSION";const ed=Zc;/**
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
 */function Mp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Oi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Oi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(n.origin,o)),l=await Mp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oi.receivers=[];/**
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
 */function Ns(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Dp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=Ns("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function it(){return window}function Lp(t){it().location.href=t}/**
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
 */function td(){return typeof it().WorkerGlobalScope!="undefined"&&typeof it().importScripts=="function"}async function Fp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Up(){return td()?self:null}/**
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
 */const nd="firebaseLocalStorageDb",Bp=1,li="firebaseLocalStorage",rd="fbase_key";class Or{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mi(t,e){return t.transaction([li],e?"readwrite":"readonly").objectStore(li)}function jp(){const t=indexedDB.deleteDatabase(nd);return new Or(t).toPromise()}function zo(){const t=indexedDB.open(nd,Bp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(li,{keyPath:rd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(li)?e(r):(r.close(),await jp(),e(await zo()))})})}async function tl(t,e,n){const r=Mi(t,!0).put({[rd]:e,value:n});return new Or(r).toPromise()}async function Wp(t,e){const n=Mi(t,!1).get(e),r=await new Or(n).toPromise();return r===void 0?null:r.value}function nl(t,e){const n=Mi(t,!0).delete(e);return new Or(n).toPromise()}const Hp=800,$p=3;class id{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$p)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return td()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oi._getInstance(Up()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fp(),!this.activeServiceWorker)return;this.sender=new Dp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zo();return await tl(e,ai,"1"),await nl(e,ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Wp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Mi(i,!1).getAll();return new Or(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}id.type="LOCAL";const Vp=id;/**
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
 */function qp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Kp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=rt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",qp().appendChild(r)})}function Gp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Nr(3e4,6e4);/**
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
 */function Yp(t,e){return e?dt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class As extends Ss{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qp(t){return Qc(t.auth,new As(t),t.bypassAuthState)}function Jp(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Tp(n,new As(t),t.bypassAuthState)}async function Xp(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Cp(n,new As(t),t.bypassAuthState)}/**
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
 */class od{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qp;case"linkViaPopup":case"linkViaRedirect":return Xp;case"reauthViaPopup":case"reauthViaRedirect":return Jp;default:Ye(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zp=new Nr(2e3,1e4);class gn extends od{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Ns();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Zp.get())};e()}}gn.currentPopupAction=null;/**
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
 */const eh="pendingRedirect",Jr=new Map;class th extends od{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jr.get(this.auth._key());if(!e){try{const r=await nh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jr.set(this.auth._key(),e)}return this.bypassAuthState||Jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nh(t,e){const n=oh(e),r=ih(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rh(t,e){Jr.set(t._key(),e)}function ih(t){return dt(t._redirectPersistence)}function oh(t){return Qr(eh,t.config.apiKey,t.name)}async function sh(t,e,n=!1){const r=Ts(t),i=Yp(r,e),s=await new th(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const ah=10*60*1e3;class lh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ch(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ah&&this.cachedEventUids.clear(),this.cachedEventUids.has(rl(e))}saveEventToCache(e){this.cachedEventUids.add(rl(e)),this.lastProcessedEventTime=Date.now()}}function rl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ch(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sd(t);default:return!1}}/**
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
 */async function dh(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
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
 */const uh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mh=/^https?/;async function fh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dh(t);for(const n of e)try{if(ph(n))return}catch{}Ye(t,"unauthorized-domain")}function ph(t){const e=Fo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!mh.test(n))return!1;if(uh.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hh=new Nr(3e4,6e4);function il(){const t=it().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gh(t){return new Promise((e,n)=>{var r,i,o;function s(){il(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{il(),n(rt(t,"network-request-failed"))},timeout:hh.get()})}if(!((i=(r=it().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=it().gapi)===null||o===void 0)&&o.load)s();else{const a=Gp("iframefcb");return it()[a]=()=>{gapi.load?s():n(rt(t,"network-request-failed"))},Kp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xr=null,e})}let Xr=null;function bh(t){return Xr=Xr||gh(t),Xr}/**
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
 */const _h=new Nr(5e3,15e3),vh="__/auth/iframe",xh="emulator/auth/iframe",wh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kh(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Es(e,xh):`https://${t.config.authDomain}/${vh}`,r={apiKey:e.apiKey,appName:t.name,v:Rr},i=yh.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Fn(r).slice(1)}`}async function Eh(t){const e=await bh(t),n=it().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:kh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wh,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=rt(t,"network-request-failed"),a=it().setTimeout(()=>{o(s)},_h.get());function l(){it().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const Ih={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ch=500,Th=600,Sh="_blank",Rh="http://localhost";class ol{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nh(t,e,n,r=Ch,i=Th){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ih),{width:r.toString(),height:i.toString(),top:o,left:s}),c=ye().toLowerCase();n&&(a=jc(c)?Sh:n),Bc(c)&&(e=e||Rh,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[g,x])=>`${f}${g}=${x},`,"");if(pp(c)&&a!=="_self")return Ah(e||"",a),new ol(null);const u=window.open(e||"",a,d);P(u,t,"popup-blocked");try{u.focus()}catch{}return new ol(u)}function Ah(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ph="__/auth/handler",Oh="emulator/auth/handler";function sl(t,e,n,r,i,o){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rr,eventId:i};if(e instanceof Gc){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Po(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(o||{}))s[l]=c}if(e instanceof Pr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Mh(t)}?${Fn(a).slice(1)}`}function Mh({config:t}){return t.emulator?Es(t,Oh):`https://${t.authDomain}/${Ph}`}/**
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
 */const po="webStorageSupport";class Dh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ed,this._completeRedirectFn=sh,this._overrideRedirectResult=rh}async _openPopup(e,n,r,i){var o;ft((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=sl(e,n,r,Fo(),i);return Nh(e,s,Ns())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Lp(sl(e,n,r,Fo(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ft(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Eh(e),r=new lh(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(po,{type:po},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[po];s!==void 0&&n(!!s),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qc()||Cs()||Pi()}}const Lh=Dh;var al="@firebase/auth",ll="0.20.4";/**
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
 */class Fh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Uh(t){Sn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{P(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),P(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const c={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kc(t)},d=new _p(a,l,c);return Jf(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new en("auth-internal",e=>{const n=Ts(e.getProvider("auth").getImmediate());return(r=>new Fh(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(al,ll,zh(t)),Nt(al,ll,"esm2017")}/**
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
 */function ad(t=Nc()){const e=ws(t,"auth");return e.isInitialized()?e.getImmediate():Qf(t,{popupRedirectResolver:Lh,persistence:[Vp,Op,ed]})}Uh("Browser");function Ps(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Bh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jh=Ps(Bh);function ld(t){return!!t||t===""}function Di(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=pe(r)?$h(r):Di(r);if(i)for(const o in i)e[o]=i[o]}return e}else{if(pe(t))return t;if(he(t))return t}}const Wh=/;(?![^(]*\))/g,Hh=/:(.+)/;function $h(t){const e={};return t.split(Wh).forEach(n=>{if(n){const r=n.split(Hh);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Os(t){let e="";if(pe(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const r=Os(t[n]);r&&(e+=r+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pr=t=>pe(t)?t:t==null?"":D(t)||he(t)&&(t.toString===md||!F(t.toString))?JSON.stringify(t,cd,2):String(t),cd=(t,e)=>e&&e.__v_isRef?cd(t,e.value):yn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:dd(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!D(e)&&!fd(e)?String(e):e,X={},wn=[],qe=()=>{},Vh=()=>!1,qh=/^on[^a-z]/,Li=t=>qh.test(t),Ms=t=>t.startsWith("onUpdate:"),ke=Object.assign,Ds=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kh=Object.prototype.hasOwnProperty,W=(t,e)=>Kh.call(t,e),D=Array.isArray,yn=t=>Fi(t)==="[object Map]",dd=t=>Fi(t)==="[object Set]",F=t=>typeof t=="function",pe=t=>typeof t=="string",Ls=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",ud=t=>he(t)&&F(t.then)&&F(t.catch),md=Object.prototype.toString,Fi=t=>md.call(t),Gh=t=>Fi(t).slice(8,-1),fd=t=>Fi(t)==="[object Object]",Fs=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zr=Ps(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Yh=/-(\w)/g,Nn=zi(t=>t.replace(Yh,(e,n)=>n?n.toUpperCase():"")),Qh=/\B([A-Z])/g,Un=zi(t=>t.replace(Qh,"-$1").toLowerCase()),pd=zi(t=>t.charAt(0).toUpperCase()+t.slice(1)),ho=zi(t=>t?`on${pd(t)}`:""),hr=(t,e)=>!Object.is(t,e),go=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ci=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Jh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let cl;const Xh=()=>cl||(cl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let et;class Zh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&et&&(this.parent=et,this.index=(et.scopes||(et.scopes=[])).push(this)-1)}run(e){if(this.active){const n=et;try{return et=this,e()}finally{et=n}}}on(){et=this}off(){et=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function eg(t,e=et){e&&e.active&&e.effects.push(t)}const zs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},hd=t=>(t.w&Dt)>0,gd=t=>(t.n&Dt)>0,tg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dt},ng=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];hd(i)&&!gd(i)?i.delete(t):e[n++]=i,i.w&=~Dt,i.n&=~Dt}e.length=n}},Uo=new WeakMap;let Zn=0,Dt=1;const Bo=30;let je;const Qt=Symbol(""),jo=Symbol("");class Us{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,eg(this,r)}run(){if(!this.active)return this.fn();let e=je,n=At;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=je,je=this,At=!0,Dt=1<<++Zn,Zn<=Bo?tg(this):dl(this),this.fn()}finally{Zn<=Bo&&ng(this),Dt=1<<--Zn,je=this.parent,At=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){je===this?this.deferStop=!0:this.active&&(dl(this),this.onStop&&this.onStop(),this.active=!1)}}function dl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let At=!0;const bd=[];function Bn(){bd.push(At),At=!1}function jn(){const t=bd.pop();At=t===void 0?!0:t}function De(t,e,n){if(At&&je){let r=Uo.get(t);r||Uo.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=zs()),_d(i)}}function _d(t,e){let n=!1;Zn<=Bo?gd(t)||(t.n|=Dt,n=!hd(t)):n=!t.has(je),n&&(t.add(je),je.deps.push(t))}function pt(t,e,n,r,i,o){const s=Uo.get(t);if(!s)return;let a=[];if(e==="clear")a=[...s.values()];else if(n==="length"&&D(t))s.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(s.get(n)),e){case"add":D(t)?Fs(n)&&a.push(s.get("length")):(a.push(s.get(Qt)),yn(t)&&a.push(s.get(jo)));break;case"delete":D(t)||(a.push(s.get(Qt)),yn(t)&&a.push(s.get(jo)));break;case"set":yn(t)&&a.push(s.get(Qt));break}if(a.length===1)a[0]&&Wo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Wo(zs(l))}}function Wo(t,e){const n=D(t)?t:[...t];for(const r of n)r.computed&&ul(r);for(const r of n)r.computed||ul(r)}function ul(t,e){(t!==je||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const rg=Ps("__proto__,__v_isRef,__isVue"),vd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ls)),ig=Bs(),og=Bs(!1,!0),sg=Bs(!0),ml=ag();function ag(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=V(this);for(let o=0,s=this.length;o<s;o++)De(r,"get",o+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(V)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Bn();const r=V(this)[e].apply(this,n);return jn(),r}}),t}function Bs(t=!1,e=!1){return function(r,i,o){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&o===(t?e?kg:Ed:e?kd:yd).get(r))return r;const s=D(r);if(!t&&s&&W(ml,i))return Reflect.get(ml,i,o);const a=Reflect.get(r,i,o);return(Ls(i)?vd.has(i):rg(i))||(t||De(r,"get",i),e)?a:we(a)?s&&Fs(i)?a:a.value:he(a)?t?Id(a):Hs(a):a}}const lg=xd(),cg=xd(!0);function xd(t=!1){return function(n,r,i,o){let s=n[r];if(gr(s)&&we(s)&&!we(i))return!1;if(!t&&!gr(i)&&(Ho(i)||(i=V(i),s=V(s)),!D(n)&&we(s)&&!we(i)))return s.value=i,!0;const a=D(n)&&Fs(r)?Number(r)<n.length:W(n,r),l=Reflect.set(n,r,i,o);return n===V(o)&&(a?hr(i,s)&&pt(n,"set",r,i):pt(n,"add",r,i)),l}}function dg(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&pt(t,"delete",e,void 0),r}function ug(t,e){const n=Reflect.has(t,e);return(!Ls(e)||!vd.has(e))&&De(t,"has",e),n}function mg(t){return De(t,"iterate",D(t)?"length":Qt),Reflect.ownKeys(t)}const wd={get:ig,set:lg,deleteProperty:dg,has:ug,ownKeys:mg},fg={get:sg,set(t,e){return!0},deleteProperty(t,e){return!0}},pg=ke({},wd,{get:og,set:cg}),js=t=>t,Ui=t=>Reflect.getPrototypeOf(t);function Wr(t,e,n=!1,r=!1){t=t.__v_raw;const i=V(t),o=V(e);n||(e!==o&&De(i,"get",e),De(i,"get",o));const{has:s}=Ui(i),a=r?js:n?Vs:br;if(s.call(i,e))return a(t.get(e));if(s.call(i,o))return a(t.get(o));t!==i&&t.get(e)}function Hr(t,e=!1){const n=this.__v_raw,r=V(n),i=V(t);return e||(t!==i&&De(r,"has",t),De(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function $r(t,e=!1){return t=t.__v_raw,!e&&De(V(t),"iterate",Qt),Reflect.get(t,"size",t)}function fl(t){t=V(t);const e=V(this);return Ui(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function pl(t,e){e=V(e);const n=V(this),{has:r,get:i}=Ui(n);let o=r.call(n,t);o||(t=V(t),o=r.call(n,t));const s=i.call(n,t);return n.set(t,e),o?hr(e,s)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function hl(t){const e=V(this),{has:n,get:r}=Ui(e);let i=n.call(e,t);i||(t=V(t),i=n.call(e,t)),r&&r.call(e,t);const o=e.delete(t);return i&&pt(e,"delete",t,void 0),o}function gl(){const t=V(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function Vr(t,e){return function(r,i){const o=this,s=o.__v_raw,a=V(s),l=e?js:t?Vs:br;return!t&&De(a,"iterate",Qt),s.forEach((c,d)=>r.call(i,l(c),l(d),o))}}function qr(t,e,n){return function(...r){const i=this.__v_raw,o=V(i),s=yn(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,c=i[t](...r),d=n?js:e?Vs:br;return!e&&De(o,"iterate",l?jo:Qt),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function yt(t){return function(...e){return t==="delete"?!1:this}}function hg(){const t={get(o){return Wr(this,o)},get size(){return $r(this)},has:Hr,add:fl,set:pl,delete:hl,clear:gl,forEach:Vr(!1,!1)},e={get(o){return Wr(this,o,!1,!0)},get size(){return $r(this)},has:Hr,add:fl,set:pl,delete:hl,clear:gl,forEach:Vr(!1,!0)},n={get(o){return Wr(this,o,!0)},get size(){return $r(this,!0)},has(o){return Hr.call(this,o,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Vr(!0,!1)},r={get(o){return Wr(this,o,!0,!0)},get size(){return $r(this,!0)},has(o){return Hr.call(this,o,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Vr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=qr(o,!1,!1),n[o]=qr(o,!0,!1),e[o]=qr(o,!1,!0),r[o]=qr(o,!0,!0)}),[t,n,e,r]}const[gg,bg,_g,vg]=hg();function Ws(t,e){const n=e?t?vg:_g:t?bg:gg;return(r,i,o)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(W(n,i)&&i in r?n:r,i,o)}const xg={get:Ws(!1,!1)},wg={get:Ws(!1,!0)},yg={get:Ws(!0,!1)},yd=new WeakMap,kd=new WeakMap,Ed=new WeakMap,kg=new WeakMap;function Eg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ig(t){return t.__v_skip||!Object.isExtensible(t)?0:Eg(Gh(t))}function Hs(t){return gr(t)?t:$s(t,!1,wd,xg,yd)}function Cg(t){return $s(t,!1,pg,wg,kd)}function Id(t){return $s(t,!0,fg,yg,Ed)}function $s(t,e,n,r,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=i.get(t);if(o)return o;const s=Ig(t);if(s===0)return t;const a=new Proxy(t,s===2?r:n);return i.set(t,a),a}function kn(t){return gr(t)?kn(t.__v_raw):!!(t&&t.__v_isReactive)}function gr(t){return!!(t&&t.__v_isReadonly)}function Ho(t){return!!(t&&t.__v_isShallow)}function Cd(t){return kn(t)||gr(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function Td(t){return ci(t,"__v_skip",!0),t}const br=t=>he(t)?Hs(t):t,Vs=t=>he(t)?Id(t):t;function Sd(t){At&&je&&(t=V(t),_d(t.dep||(t.dep=zs())))}function Rd(t,e){t=V(t),t.dep&&Wo(t.dep)}function we(t){return!!(t&&t.__v_isRef===!0)}function Oe(t){return Tg(t,!1)}function Tg(t,e){return we(t)?t:new Sg(t,e)}class Sg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:br(e)}get value(){return Sd(this),this._value}set value(e){e=this.__v_isShallow?e:V(e),hr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:br(e),Rd(this))}}function Rg(t){return we(t)?t.value:t}const Ng={get:(t,e,n)=>Rg(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Nd(t){return kn(t)?t:new Proxy(t,Ng)}class Ag{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Us(e,()=>{this._dirty||(this._dirty=!0,Rd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=V(this);return Sd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Pg(t,e,n=!1){let r,i;const o=F(t);return o?(r=t,i=qe):(r=t.get,i=t.set),new Ag(r,i,o||!i,n)}function Pt(t,e,n,r){let i;try{i=r?t(...r):t()}catch(o){Bi(o,e,n)}return i}function Fe(t,e,n,r){if(F(t)){const o=Pt(t,e,n,r);return o&&ud(o)&&o.catch(s=>{Bi(s,e,n)}),o}const i=[];for(let o=0;o<t.length;o++)i.push(Fe(t[o],e,n,r));return i}function Bi(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let o=e.parent;const s=e.proxy,a=n;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,s,a)===!1)return}o=o.parent}const l=e.appContext.config.errorHandler;if(l){Pt(l,null,10,[t,s,a]);return}}Og(t,n,i,r)}function Og(t,e,n,r=!0){console.error(t)}let di=!1,$o=!1;const Me=[];let lt=0;const nr=[];let er=null,pn=0;const rr=[];let kt=null,hn=0;const Ad=Promise.resolve();let qs=null,Vo=null;function Mg(t){const e=qs||Ad;return t?e.then(this?t.bind(this):t):e}function Dg(t){let e=lt+1,n=Me.length;for(;e<n;){const r=e+n>>>1;_r(Me[r])<t?e=r+1:n=r}return e}function Pd(t){(!Me.length||!Me.includes(t,di&&t.allowRecurse?lt+1:lt))&&t!==Vo&&(t.id==null?Me.push(t):Me.splice(Dg(t.id),0,t),Od())}function Od(){!di&&!$o&&($o=!0,qs=Ad.then(Ld))}function Lg(t){const e=Me.indexOf(t);e>lt&&Me.splice(e,1)}function Md(t,e,n,r){D(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Od()}function Fg(t){Md(t,er,nr,pn)}function zg(t){Md(t,kt,rr,hn)}function ji(t,e=null){if(nr.length){for(Vo=e,er=[...new Set(nr)],nr.length=0,pn=0;pn<er.length;pn++)er[pn]();er=null,pn=0,Vo=null,ji(t,e)}}function Dd(t){if(ji(),rr.length){const e=[...new Set(rr)];if(rr.length=0,kt){kt.push(...e);return}for(kt=e,kt.sort((n,r)=>_r(n)-_r(r)),hn=0;hn<kt.length;hn++)kt[hn]();kt=null,hn=0}}const _r=t=>t.id==null?1/0:t.id;function Ld(t){$o=!1,di=!0,ji(t),Me.sort((n,r)=>_r(n)-_r(r));const e=qe;try{for(lt=0;lt<Me.length;lt++){const n=Me[lt];n&&n.active!==!1&&Pt(n,null,14)}}finally{lt=0,Me.length=0,Dd(),di=!1,qs=null,(Me.length||nr.length||rr.length)&&Ld(t)}}function Ug(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||X;let i=n;const o=e.startsWith("update:"),s=o&&e.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:u,trim:f}=r[d]||X;f&&(i=n.map(g=>g.trim())),u&&(i=n.map(Jh))}let a,l=r[a=ho(e)]||r[a=ho(Nn(e))];!l&&o&&(l=r[a=ho(Un(e))]),l&&Fe(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Fe(c,t,6,i)}}function Fd(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const o=t.emits;let s={},a=!1;if(!F(t)){const l=c=>{const d=Fd(c,e,!0);d&&(a=!0,ke(s,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(r.set(t,null),null):(D(o)?o.forEach(l=>s[l]=null):ke(s,o),r.set(t,s),s)}function Wi(t,e){return!t||!Li(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,Un(e))||W(t,e))}let nt=null,Hi=null;function ui(t){const e=nt;return nt=t,Hi=t&&t.type.__scopeId||null,e}function Ks(t){Hi=t}function Gs(){Hi=null}function Bg(t,e=nt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Cl(-1);const o=ui(e),s=t(...i);return ui(o),r._d&&Cl(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function bo(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[s],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:f,setupState:g,ctx:x,inheritAttrs:C}=t;let T,M;const ae=ui(t);try{if(n.shapeFlag&4){const ee=i||r;T=tt(d.call(ee,ee,u,o,g,f,x)),M=l}else{const ee=e;T=tt(ee.length>1?ee(o,{attrs:l,slots:a,emit:c}):ee(o,null)),M=e.props?l:jg(l)}}catch(ee){ir.length=0,Bi(ee,t,1),T=ze(Ke)}let q=T;if(M&&C!==!1){const ee=Object.keys(M),{shapeFlag:ge}=q;ee.length&&ge&7&&(s&&ee.some(Ms)&&(M=Wg(M,s)),q=Lt(q,M))}return n.dirs&&(q=Lt(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),T=q,ui(ae),T}const jg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Li(n))&&((e||(e={}))[n]=t[n]);return e},Wg=(t,e)=>{const n={};for(const r in t)(!Ms(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hg(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?bl(r,s,c):!!s;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(s[f]!==r[f]&&!Wi(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?bl(r,s,c):!0:!!s;return!1}function bl(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!Wi(n,o))return!0}return!1}function $g({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Vg=t=>t.__isSuspense;function qg(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):zg(t)}function Kg(t,e){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[t]=e}}function _o(t,e,n=!1){const r=_e||nt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&F(e)?e.call(r.proxy):e}}const _l={};function vo(t,e,n){return zd(t,e,n)}function zd(t,e,{immediate:n,deep:r,flush:i,onTrack:o,onTrigger:s}=X){const a=_e;let l,c=!1,d=!1;if(we(t)?(l=()=>t.value,c=Ho(t)):kn(t)?(l=()=>t,r=!0):D(t)?(d=!0,c=t.some(M=>kn(M)||Ho(M)),l=()=>t.map(M=>{if(we(M))return M.value;if(kn(M))return bn(M);if(F(M))return Pt(M,a,2)})):F(t)?e?l=()=>Pt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return u&&u(),Fe(t,a,3,[f])}:l=qe,e&&r){const M=l;l=()=>bn(M())}let u,f=M=>{u=T.onStop=()=>{Pt(M,a,4)}};if(xr)return f=qe,e?n&&Fe(e,a,3,[l(),d?[]:void 0,f]):l(),qe;let g=d?[]:_l;const x=()=>{if(!!T.active)if(e){const M=T.run();(r||c||(d?M.some((ae,q)=>hr(ae,g[q])):hr(M,g)))&&(u&&u(),Fe(e,a,3,[M,g===_l?void 0:g,f]),g=M)}else T.run()};x.allowRecurse=!!e;let C;i==="sync"?C=x:i==="post"?C=()=>Te(x,a&&a.suspense):C=()=>Fg(x);const T=new Us(l,C);return e?n?x():g=T.run():i==="post"?Te(T.run.bind(T),a&&a.suspense):T.run(),()=>{T.stop(),a&&a.scope&&Ds(a.scope.effects,T)}}function Gg(t,e,n){const r=this.proxy,i=pe(t)?t.includes(".")?Ud(r,t):()=>r[t]:t.bind(r,r);let o;F(e)?o=e:(o=e.handler,n=e);const s=_e;An(this);const a=zd(i,o.bind(r),n);return s?An(s):Xt(),a}function Ud(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function bn(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),we(t))bn(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)bn(t[n],e);else if(dd(t)||yn(t))t.forEach(n=>{bn(n,e)});else if(fd(t))for(const n in t)bn(t[n],e);return t}function Yg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hd(()=>{t.isMounted=!0}),$d(()=>{t.isUnmounting=!0}),t}const Le=[Function,Array],Qg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Le,onEnter:Le,onAfterEnter:Le,onEnterCancelled:Le,onBeforeLeave:Le,onLeave:Le,onAfterLeave:Le,onLeaveCancelled:Le,onBeforeAppear:Le,onAppear:Le,onAfterAppear:Le,onAppearCancelled:Le},setup(t,{slots:e}){const n=Db(),r=Yg();let i;return()=>{const o=e.default&&jd(e.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){for(const C of o)if(C.type!==Ke){s=C;break}}const a=V(t),{mode:l}=a;if(r.isLeaving)return xo(s);const c=vl(s);if(!c)return xo(s);const d=qo(c,a,r,n);Ko(c,d);const u=n.subTree,f=u&&vl(u);let g=!1;const{getTransitionKey:x}=c.type;if(x){const C=x();i===void 0?i=C:C!==i&&(i=C,g=!0)}if(f&&f.type!==Ke&&(!Vt(c,f)||g)){const C=qo(f,a,r,n);if(Ko(f,C),l==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update()},xo(s);l==="in-out"&&c.type!==Ke&&(C.delayLeave=(T,M,ae)=>{const q=Bd(r,f);q[String(f.key)]=f,T._leaveCb=()=>{M(),T._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=ae})}return s}}},Jg=Qg;function Bd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function qo(t,e,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:u,onLeave:f,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:C,onAppear:T,onAfterAppear:M,onAppearCancelled:ae}=e,q=String(t.key),ee=Bd(n,t),ge=(j,J)=>{j&&Fe(j,r,9,J)},Qe=(j,J)=>{const ie=J[1];ge(j,J),D(j)?j.every(Ie=>Ie.length<=1)&&ie():j.length<=1&&ie()},Je={mode:o,persisted:s,beforeEnter(j){let J=a;if(!n.isMounted)if(i)J=C||a;else return;j._leaveCb&&j._leaveCb(!0);const ie=ee[q];ie&&Vt(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),ge(J,[j])},enter(j){let J=l,ie=c,Ie=d;if(!n.isMounted)if(i)J=T||l,ie=M||c,Ie=ae||d;else return;let Ue=!1;const ot=j._enterCb=Ur=>{Ue||(Ue=!0,Ur?ge(Ie,[j]):ge(ie,[j]),Je.delayedLeave&&Je.delayedLeave(),j._enterCb=void 0)};J?Qe(J,[j,ot]):ot()},leave(j,J){const ie=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return J();ge(u,[j]);let Ie=!1;const Ue=j._leaveCb=ot=>{Ie||(Ie=!0,J(),ot?ge(x,[j]):ge(g,[j]),j._leaveCb=void 0,ee[ie]===t&&delete ee[ie])};ee[ie]=t,f?Qe(f,[j,Ue]):Ue()},clone(j){return qo(j,e,n,r)}};return Je}function xo(t){if(Vi(t))return t=Lt(t),t.children=null,t}function vl(t){return Vi(t)?t.children?t.children[0]:void 0:t}function Ko(t,e){t.shapeFlag&6&&t.component?Ko(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jd(t,e=!1,n){let r=[],i=0;for(let o=0;o<t.length;o++){let s=t[o];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:o);s.type===ve?(s.patchFlag&128&&i++,r=r.concat(jd(s.children,e,a))):(e||s.type!==Ke)&&r.push(a!=null?Lt(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function $i(t){return F(t)?{setup:t,name:t.name}:t}const ei=t=>!!t.type.__asyncLoader,Vi=t=>t.type.__isKeepAlive;function Xg(t,e){Wd(t,"a",e)}function Zg(t,e){Wd(t,"da",e)}function Wd(t,e,n=_e){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(qi(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Vi(i.parent.vnode)&&eb(r,e,n,i),i=i.parent}}function eb(t,e,n,r){const i=qi(e,t,r,!0);Vd(()=>{Ds(r[e],i)},n)}function qi(t,e,n=_e,r=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;Bn(),An(n);const a=Fe(e,n,t,s);return Xt(),jn(),a});return r?i.unshift(o):i.push(o),o}}const _t=t=>(e,n=_e)=>(!xr||t==="sp")&&qi(t,e,n),tb=_t("bm"),Hd=_t("m"),nb=_t("bu"),rb=_t("u"),$d=_t("bum"),Vd=_t("um"),ib=_t("sp"),ob=_t("rtg"),sb=_t("rtc");function ab(t,e=_e){qi("ec",t,e)}function Bt(t,e,n,r){const i=t.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&(Bn(),Fe(l,n,8,[t.el,a,t,e]),jn())}}const lb=Symbol();function mi(t,e,n,r){let i;const o=n&&n[r];if(D(t)||pe(t)){i=new Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=e(t[s],s,void 0,o&&o[s])}else if(typeof t=="number"){i=new Array(t);for(let s=0;s<t;s++)i[s]=e(s+1,s,void 0,o&&o[s])}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(s,a)=>e(s,a,void 0,o&&o[a]));else{const s=Object.keys(t);i=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const c=s[a];i[a]=e(t[c],c,a,o&&o[a])}}else i=[];return n&&(n[r]=i),i}const Go=t=>t?ru(t)?Xs(t)||t.proxy:Go(t.parent):null,fi=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Go(t.parent),$root:t=>Go(t.root),$emit:t=>t.emit,$options:t=>Kd(t),$forceUpdate:t=>t.f||(t.f=()=>Pd(t.update)),$nextTick:t=>t.n||(t.n=Mg.bind(t.proxy)),$watch:t=>Gg.bind(t)}),cb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=s[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(r!==X&&W(r,e))return s[e]=1,r[e];if(i!==X&&W(i,e))return s[e]=2,i[e];if((c=t.propsOptions[0])&&W(c,e))return s[e]=3,o[e];if(n!==X&&W(n,e))return s[e]=4,n[e];Yo&&(s[e]=0)}}const d=fi[e];let u,f;if(d)return e==="$attrs"&&De(t,"get",e),d(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==X&&W(n,e))return s[e]=4,n[e];if(f=l.config.globalProperties,W(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return i!==X&&W(i,e)?(i[e]=n,!0):r!==X&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!n[s]||t!==X&&W(t,s)||e!==X&&W(e,s)||(a=o[0])&&W(a,s)||W(r,s)||W(fi,s)||W(i.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Yo=!0;function db(t){const e=Kd(t),n=t.proxy,r=t.ctx;Yo=!1,e.beforeCreate&&xl(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:f,beforeUpdate:g,updated:x,activated:C,deactivated:T,beforeDestroy:M,beforeUnmount:ae,destroyed:q,unmounted:ee,render:ge,renderTracked:Qe,renderTriggered:Je,errorCaptured:j,serverPrefetch:J,expose:ie,inheritAttrs:Ie,components:Ue,directives:ot,filters:Ur}=e;if(c&&ub(c,r,null,t.appContext.config.unwrapInjectedRef),s)for(const oe in s){const te=s[oe];F(te)&&(r[oe]=te.bind(n))}if(i){const oe=i.call(n,n);he(oe)&&(t.data=Hs(oe))}if(Yo=!0,o)for(const oe in o){const te=o[oe],st=F(te)?te.bind(n,n):F(te.get)?te.get.bind(n,n):qe,io=!F(te)&&F(te.set)?te.set.bind(n):qe,Vn=jb({get:st,set:io});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>Vn.value,set:dn=>Vn.value=dn})}if(a)for(const oe in a)qd(a[oe],r,n,oe);if(l){const oe=F(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(te=>{Kg(te,oe[te])})}d&&xl(d,t,"c");function Ce(oe,te){D(te)?te.forEach(st=>oe(st.bind(n))):te&&oe(te.bind(n))}if(Ce(tb,u),Ce(Hd,f),Ce(nb,g),Ce(rb,x),Ce(Xg,C),Ce(Zg,T),Ce(ab,j),Ce(sb,Qe),Ce(ob,Je),Ce($d,ae),Ce(Vd,ee),Ce(ib,J),D(ie))if(ie.length){const oe=t.exposed||(t.exposed={});ie.forEach(te=>{Object.defineProperty(oe,te,{get:()=>n[te],set:st=>n[te]=st})})}else t.exposed||(t.exposed={});ge&&t.render===qe&&(t.render=ge),Ie!=null&&(t.inheritAttrs=Ie),Ue&&(t.components=Ue),ot&&(t.directives=ot)}function ub(t,e,n=qe,r=!1){D(t)&&(t=Qo(t));for(const i in t){const o=t[i];let s;he(o)?"default"in o?s=_o(o.from||i,o.default,!0):s=_o(o.from||i):s=_o(o),we(s)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function xl(t,e,n){Fe(D(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qd(t,e,n,r){const i=r.includes(".")?Ud(n,r):()=>n[r];if(pe(t)){const o=e[t];F(o)&&vo(i,o)}else if(F(t))vo(i,t.bind(n));else if(he(t))if(D(t))t.forEach(o=>qd(o,e,n,r));else{const o=F(t.handler)?t.handler.bind(n):e[t.handler];F(o)&&vo(i,o,t)}}function Kd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>pi(l,c,s,!0)),pi(l,e,s)),o.set(e,l),l}function pi(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&pi(t,o,n,!0),i&&i.forEach(s=>pi(t,s,n,!0));for(const s in e)if(!(r&&s==="expose")){const a=mb[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const mb={data:wl,props:Ht,emits:Ht,methods:Ht,computed:Ht,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:Ht,directives:Ht,watch:pb,provide:wl,inject:fb};function wl(t,e){return e?t?function(){return ke(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function fb(t,e){return Ht(Qo(t),Qo(e))}function Qo(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ee(t,e){return t?[...new Set([].concat(t,e))]:e}function Ht(t,e){return t?ke(ke(Object.create(null),t),e):e}function pb(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const r in e)n[r]=Ee(t[r],e[r]);return n}function hb(t,e,n,r=!1){const i={},o={};ci(o,Ki,1),t.propsDefaults=Object.create(null),Gd(t,e,i,o);for(const s in t.propsOptions[0])s in i||(i[s]=void 0);n?t.props=r?i:Cg(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function gb(t,e,n,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=t,a=V(i),[l]=t.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=t.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(Wi(t.emitsOptions,f))continue;const g=e[f];if(l)if(W(o,f))g!==o[f]&&(o[f]=g,c=!0);else{const x=Nn(f);i[x]=Jo(l,a,x,g,t,!1)}else g!==o[f]&&(o[f]=g,c=!0)}}}else{Gd(t,e,i,o)&&(c=!0);let d;for(const u in a)(!e||!W(e,u)&&((d=Un(u))===u||!W(e,d)))&&(l?n&&(n[u]!==void 0||n[d]!==void 0)&&(i[u]=Jo(l,a,u,void 0,t,!0)):delete i[u]);if(o!==a)for(const u in o)(!e||!W(e,u)&&!0)&&(delete o[u],c=!0)}c&&pt(t,"set","$attrs")}function Gd(t,e,n,r){const[i,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Zr(l))continue;const c=e[l];let d;i&&W(i,d=Nn(l))?!o||!o.includes(d)?n[d]=c:(a||(a={}))[d]=c:Wi(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(o){const l=V(n),c=a||X;for(let d=0;d<o.length;d++){const u=o[d];n[u]=Jo(i,l,u,c[u],t,!W(c,u))}}return s}function Jo(t,e,n,r,i,o){const s=t[n];if(s!=null){const a=W(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&F(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(An(i),r=c[n]=l.call(null,e),Xt())}else r=l}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===Un(n))&&(r=!0))}return r}function Yd(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,s={},a=[];let l=!1;if(!F(t)){const d=u=>{l=!0;const[f,g]=Yd(u,e,!0);ke(s,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!l)return r.set(t,wn),wn;if(D(o))for(let d=0;d<o.length;d++){const u=Nn(o[d]);yl(u)&&(s[u]=X)}else if(o)for(const d in o){const u=Nn(d);if(yl(u)){const f=o[d],g=s[u]=D(f)||F(f)?{type:f}:f;if(g){const x=Il(Boolean,g.type),C=Il(String,g.type);g[0]=x>-1,g[1]=C<0||x<C,(x>-1||W(g,"default"))&&a.push(u)}}}const c=[s,a];return r.set(t,c),c}function yl(t){return t[0]!=="$"}function kl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function El(t,e){return kl(t)===kl(e)}function Il(t,e){return D(e)?e.findIndex(n=>El(n,t)):F(e)&&El(e,t)?0:-1}const Qd=t=>t[0]==="_"||t==="$stable",Ys=t=>D(t)?t.map(tt):[tt(t)],bb=(t,e,n)=>{if(e._n)return e;const r=Bg((...i)=>Ys(e(...i)),n);return r._c=!1,r},Jd=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Qd(i))continue;const o=t[i];if(F(o))e[i]=bb(i,o,r);else if(o!=null){const s=Ys(o);e[i]=()=>s}}},Xd=(t,e)=>{const n=Ys(e);t.slots.default=()=>n},_b=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),ci(e,"_",n)):Jd(e,t.slots={})}else t.slots={},e&&Xd(t,e);ci(t.slots,Ki,1)},vb=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,s=X;if(r.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:(ke(i,e),!n&&a===1&&delete i._):(o=!e.$stable,Jd(e,i)),s=e}else e&&(Xd(t,e),s={default:1});if(o)for(const a in i)!Qd(a)&&!(a in s)&&delete i[a]};function Zd(){return{app:null,config:{isNativeTag:Vh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xb=0;function wb(t,e){return function(r,i=null){F(r)||(r=Object.assign({},r)),i!=null&&!he(i)&&(i=null);const o=Zd(),s=new Set;let a=!1;const l=o.app={_uid:xb++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:Wb,get config(){return o.config},set config(c){},use(c,...d){return s.has(c)||(c&&F(c.install)?(s.add(c),c.install(l,...d)):F(c)&&(s.add(c),c(l,...d))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,d){return d?(o.components[c]=d,l):o.components[c]},directive(c,d){return d?(o.directives[c]=d,l):o.directives[c]},mount(c,d,u){if(!a){const f=ze(r,i);return f.appContext=o,d&&e?e(f,c):t(f,c,u),a=!0,l._container=c,c.__vue_app__=l,Xs(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return o.provides[c]=d,l}};return l}}function Xo(t,e,n,r,i=!1){if(D(t)){t.forEach((f,g)=>Xo(f,e&&(D(e)?e[g]:e),n,r,i));return}if(ei(r)&&!i)return;const o=r.shapeFlag&4?Xs(r.component)||r.component.proxy:r.el,s=i?null:o,{i:a,r:l}=t,c=e&&e.r,d=a.refs===X?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(pe(c)?(d[c]=null,W(u,c)&&(u[c]=null)):we(c)&&(c.value=null)),F(l))Pt(l,a,12,[s,d]);else{const f=pe(l),g=we(l);if(f||g){const x=()=>{if(t.f){const C=f?d[l]:l.value;i?D(C)&&Ds(C,o):D(C)?C.includes(o)||C.push(o):f?(d[l]=[o],W(u,l)&&(u[l]=d[l])):(l.value=[o],t.k&&(d[t.k]=l.value))}else f?(d[l]=s,W(u,l)&&(u[l]=s)):g&&(l.value=s,t.k&&(d[t.k]=s))};s?(x.id=-1,Te(x,n)):x()}}}const Te=qg;function yb(t){return kb(t)}function kb(t,e){const n=Xh();n.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:f,setScopeId:g=qe,cloneNode:x,insertStaticContent:C}=t,T=(m,p,h,_=null,b=null,k=null,I=!1,y=null,E=!!p.dynamicChildren)=>{if(m===p)return;m&&!Vt(m,p)&&(_=Br(m),xt(m,b,k,!0),m=null),p.patchFlag===-2&&(E=!1,p.dynamicChildren=null);const{type:v,ref:R,shapeFlag:S}=p;switch(v){case Qs:M(m,p,h,_);break;case Ke:ae(m,p,h,_);break;case wo:m==null&&q(p,h,_,I);break;case ve:ot(m,p,h,_,b,k,I,y,E);break;default:S&1?Qe(m,p,h,_,b,k,I,y,E):S&6?Ur(m,p,h,_,b,k,I,y,E):(S&64||S&128)&&v.process(m,p,h,_,b,k,I,y,E,un)}R!=null&&b&&Xo(R,m&&m.ref,k,p||m,!p)},M=(m,p,h,_)=>{if(m==null)r(p.el=a(p.children),h,_);else{const b=p.el=m.el;p.children!==m.children&&c(b,p.children)}},ae=(m,p,h,_)=>{m==null?r(p.el=l(p.children||""),h,_):p.el=m.el},q=(m,p,h,_)=>{[m.el,m.anchor]=C(m.children,p,h,_,m.el,m.anchor)},ee=({el:m,anchor:p},h,_)=>{let b;for(;m&&m!==p;)b=f(m),r(m,h,_),m=b;r(p,h,_)},ge=({el:m,anchor:p})=>{let h;for(;m&&m!==p;)h=f(m),i(m),m=h;i(p)},Qe=(m,p,h,_,b,k,I,y,E)=>{I=I||p.type==="svg",m==null?Je(p,h,_,b,k,I,y,E):ie(m,p,b,k,I,y,E)},Je=(m,p,h,_,b,k,I,y)=>{let E,v;const{type:R,props:S,shapeFlag:N,transition:O,patchFlag:H,dirs:K}=m;if(m.el&&x!==void 0&&H===-1)E=m.el=x(m.el);else{if(E=m.el=s(m.type,k,S&&S.is,S),N&8?d(E,m.children):N&16&&J(m.children,E,null,_,b,k&&R!=="foreignObject",I,y),K&&Bt(m,null,_,"created"),S){for(const ne in S)ne!=="value"&&!Zr(ne)&&o(E,ne,null,S[ne],k,m.children,_,b,at);"value"in S&&o(E,"value",null,S.value),(v=S.onVnodeBeforeMount)&&Ze(v,_,m)}j(E,m,m.scopeId,I,_)}K&&Bt(m,null,_,"beforeMount");const G=(!b||b&&!b.pendingBranch)&&O&&!O.persisted;G&&O.beforeEnter(E),r(E,p,h),((v=S&&S.onVnodeMounted)||G||K)&&Te(()=>{v&&Ze(v,_,m),G&&O.enter(E),K&&Bt(m,null,_,"mounted")},b)},j=(m,p,h,_,b)=>{if(h&&g(m,h),_)for(let k=0;k<_.length;k++)g(m,_[k]);if(b){let k=b.subTree;if(p===k){const I=b.vnode;j(m,I,I.scopeId,I.slotScopeIds,b.parent)}}},J=(m,p,h,_,b,k,I,y,E=0)=>{for(let v=E;v<m.length;v++){const R=m[v]=y?Et(m[v]):tt(m[v]);T(null,R,p,h,_,b,k,I,y)}},ie=(m,p,h,_,b,k,I)=>{const y=p.el=m.el;let{patchFlag:E,dynamicChildren:v,dirs:R}=p;E|=m.patchFlag&16;const S=m.props||X,N=p.props||X;let O;h&&jt(h,!1),(O=N.onVnodeBeforeUpdate)&&Ze(O,h,p,m),R&&Bt(p,m,h,"beforeUpdate"),h&&jt(h,!0);const H=b&&p.type!=="foreignObject";if(v?Ie(m.dynamicChildren,v,y,h,_,H,k):I||st(m,p,y,null,h,_,H,k,!1),E>0){if(E&16)Ue(y,p,S,N,h,_,b);else if(E&2&&S.class!==N.class&&o(y,"class",null,N.class,b),E&4&&o(y,"style",S.style,N.style,b),E&8){const K=p.dynamicProps;for(let G=0;G<K.length;G++){const ne=K[G],Be=S[ne],mn=N[ne];(mn!==Be||ne==="value")&&o(y,ne,Be,mn,b,m.children,h,_,at)}}E&1&&m.children!==p.children&&d(y,p.children)}else!I&&v==null&&Ue(y,p,S,N,h,_,b);((O=N.onVnodeUpdated)||R)&&Te(()=>{O&&Ze(O,h,p,m),R&&Bt(p,m,h,"updated")},_)},Ie=(m,p,h,_,b,k,I)=>{for(let y=0;y<p.length;y++){const E=m[y],v=p[y],R=E.el&&(E.type===ve||!Vt(E,v)||E.shapeFlag&70)?u(E.el):h;T(E,v,R,null,_,b,k,I,!0)}},Ue=(m,p,h,_,b,k,I)=>{if(h!==_){for(const y in _){if(Zr(y))continue;const E=_[y],v=h[y];E!==v&&y!=="value"&&o(m,y,v,E,I,p.children,b,k,at)}if(h!==X)for(const y in h)!Zr(y)&&!(y in _)&&o(m,y,h[y],null,I,p.children,b,k,at);"value"in _&&o(m,"value",h.value,_.value)}},ot=(m,p,h,_,b,k,I,y,E)=>{const v=p.el=m?m.el:a(""),R=p.anchor=m?m.anchor:a("");let{patchFlag:S,dynamicChildren:N,slotScopeIds:O}=p;O&&(y=y?y.concat(O):O),m==null?(r(v,h,_),r(R,h,_),J(p.children,h,R,b,k,I,y,E)):S>0&&S&64&&N&&m.dynamicChildren?(Ie(m.dynamicChildren,N,h,b,k,I,y),(p.key!=null||b&&p===b.subTree)&&eu(m,p,!0)):st(m,p,h,R,b,k,I,y,E)},Ur=(m,p,h,_,b,k,I,y,E)=>{p.slotScopeIds=y,m==null?p.shapeFlag&512?b.ctx.activate(p,h,_,I,E):ro(p,h,_,b,k,I,E):Ce(m,p,E)},ro=(m,p,h,_,b,k,I)=>{const y=m.component=Mb(m,_,b);if(Vi(m)&&(y.ctx.renderer=un),Lb(y),y.asyncDep){if(b&&b.registerDep(y,oe),!m.el){const E=y.subTree=ze(Ke);ae(null,E,p,h)}return}oe(y,m,p,h,b,k,I)},Ce=(m,p,h)=>{const _=p.component=m.component;if(Hg(m,p,h))if(_.asyncDep&&!_.asyncResolved){te(_,p,h);return}else _.next=p,Lg(_.update),_.update();else p.el=m.el,_.vnode=p},oe=(m,p,h,_,b,k,I)=>{const y=()=>{if(m.isMounted){let{next:R,bu:S,u:N,parent:O,vnode:H}=m,K=R,G;jt(m,!1),R?(R.el=H.el,te(m,R,I)):R=H,S&&go(S),(G=R.props&&R.props.onVnodeBeforeUpdate)&&Ze(G,O,R,H),jt(m,!0);const ne=bo(m),Be=m.subTree;m.subTree=ne,T(Be,ne,u(Be.el),Br(Be),m,b,k),R.el=ne.el,K===null&&$g(m,ne.el),N&&Te(N,b),(G=R.props&&R.props.onVnodeUpdated)&&Te(()=>Ze(G,O,R,H),b)}else{let R;const{el:S,props:N}=p,{bm:O,m:H,parent:K}=m,G=ei(p);if(jt(m,!1),O&&go(O),!G&&(R=N&&N.onVnodeBeforeMount)&&Ze(R,K,p),jt(m,!0),S&&so){const ne=()=>{m.subTree=bo(m),so(S,m.subTree,m,b,null)};G?p.type.__asyncLoader().then(()=>!m.isUnmounted&&ne()):ne()}else{const ne=m.subTree=bo(m);T(null,ne,h,_,m,b,k),p.el=ne.el}if(H&&Te(H,b),!G&&(R=N&&N.onVnodeMounted)){const ne=p;Te(()=>Ze(R,K,ne),b)}(p.shapeFlag&256||K&&ei(K.vnode)&&K.vnode.shapeFlag&256)&&m.a&&Te(m.a,b),m.isMounted=!0,p=h=_=null}},E=m.effect=new Us(y,()=>Pd(v),m.scope),v=m.update=()=>E.run();v.id=m.uid,jt(m,!0),v()},te=(m,p,h)=>{p.component=m;const _=m.vnode.props;m.vnode=p,m.next=null,gb(m,p.props,_,h),vb(m,p.children,h),Bn(),ji(void 0,m.update),jn()},st=(m,p,h,_,b,k,I,y,E=!1)=>{const v=m&&m.children,R=m?m.shapeFlag:0,S=p.children,{patchFlag:N,shapeFlag:O}=p;if(N>0){if(N&128){Vn(v,S,h,_,b,k,I,y,E);return}else if(N&256){io(v,S,h,_,b,k,I,y,E);return}}O&8?(R&16&&at(v,b,k),S!==v&&d(h,S)):R&16?O&16?Vn(v,S,h,_,b,k,I,y,E):at(v,b,k,!0):(R&8&&d(h,""),O&16&&J(S,h,_,b,k,I,y,E))},io=(m,p,h,_,b,k,I,y,E)=>{m=m||wn,p=p||wn;const v=m.length,R=p.length,S=Math.min(v,R);let N;for(N=0;N<S;N++){const O=p[N]=E?Et(p[N]):tt(p[N]);T(m[N],O,h,null,b,k,I,y,E)}v>R?at(m,b,k,!0,!1,S):J(p,h,_,b,k,I,y,E,S)},Vn=(m,p,h,_,b,k,I,y,E)=>{let v=0;const R=p.length;let S=m.length-1,N=R-1;for(;v<=S&&v<=N;){const O=m[v],H=p[v]=E?Et(p[v]):tt(p[v]);if(Vt(O,H))T(O,H,h,null,b,k,I,y,E);else break;v++}for(;v<=S&&v<=N;){const O=m[S],H=p[N]=E?Et(p[N]):tt(p[N]);if(Vt(O,H))T(O,H,h,null,b,k,I,y,E);else break;S--,N--}if(v>S){if(v<=N){const O=N+1,H=O<R?p[O].el:_;for(;v<=N;)T(null,p[v]=E?Et(p[v]):tt(p[v]),h,H,b,k,I,y,E),v++}}else if(v>N)for(;v<=S;)xt(m[v],b,k,!0),v++;else{const O=v,H=v,K=new Map;for(v=H;v<=N;v++){const Pe=p[v]=E?Et(p[v]):tt(p[v]);Pe.key!=null&&K.set(Pe.key,v)}let G,ne=0;const Be=N-H+1;let mn=!1,Fa=0;const qn=new Array(Be);for(v=0;v<Be;v++)qn[v]=0;for(v=O;v<=S;v++){const Pe=m[v];if(ne>=Be){xt(Pe,b,k,!0);continue}let Xe;if(Pe.key!=null)Xe=K.get(Pe.key);else for(G=H;G<=N;G++)if(qn[G-H]===0&&Vt(Pe,p[G])){Xe=G;break}Xe===void 0?xt(Pe,b,k,!0):(qn[Xe-H]=v+1,Xe>=Fa?Fa=Xe:mn=!0,T(Pe,p[Xe],h,null,b,k,I,y,E),ne++)}const za=mn?Eb(qn):wn;for(G=za.length-1,v=Be-1;v>=0;v--){const Pe=H+v,Xe=p[Pe],Ua=Pe+1<R?p[Pe+1].el:_;qn[v]===0?T(null,Xe,h,Ua,b,k,I,y,E):mn&&(G<0||v!==za[G]?dn(Xe,h,Ua,2):G--)}}},dn=(m,p,h,_,b=null)=>{const{el:k,type:I,transition:y,children:E,shapeFlag:v}=m;if(v&6){dn(m.component.subTree,p,h,_);return}if(v&128){m.suspense.move(p,h,_);return}if(v&64){I.move(m,p,h,un);return}if(I===ve){r(k,p,h);for(let S=0;S<E.length;S++)dn(E[S],p,h,_);r(m.anchor,p,h);return}if(I===wo){ee(m,p,h);return}if(_!==2&&v&1&&y)if(_===0)y.beforeEnter(k),r(k,p,h),Te(()=>y.enter(k),b);else{const{leave:S,delayLeave:N,afterLeave:O}=y,H=()=>r(k,p,h),K=()=>{S(k,()=>{H(),O&&O()})};N?N(k,H,K):K()}else r(k,p,h)},xt=(m,p,h,_=!1,b=!1)=>{const{type:k,props:I,ref:y,children:E,dynamicChildren:v,shapeFlag:R,patchFlag:S,dirs:N}=m;if(y!=null&&Xo(y,null,h,m,!0),R&256){p.ctx.deactivate(m);return}const O=R&1&&N,H=!ei(m);let K;if(H&&(K=I&&I.onVnodeBeforeUnmount)&&Ze(K,p,m),R&6)ym(m.component,h,_);else{if(R&128){m.suspense.unmount(h,_);return}O&&Bt(m,null,p,"beforeUnmount"),R&64?m.type.remove(m,p,h,b,un,_):v&&(k!==ve||S>0&&S&64)?at(v,p,h,!1,!0):(k===ve&&S&384||!b&&R&16)&&at(E,p,h),_&&Da(m)}(H&&(K=I&&I.onVnodeUnmounted)||O)&&Te(()=>{K&&Ze(K,p,m),O&&Bt(m,null,p,"unmounted")},h)},Da=m=>{const{type:p,el:h,anchor:_,transition:b}=m;if(p===ve){wm(h,_);return}if(p===wo){ge(m);return}const k=()=>{i(h),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(m.shapeFlag&1&&b&&!b.persisted){const{leave:I,delayLeave:y}=b,E=()=>I(h,k);y?y(m.el,k,E):E()}else k()},wm=(m,p)=>{let h;for(;m!==p;)h=f(m),i(m),m=h;i(p)},ym=(m,p,h)=>{const{bum:_,scope:b,update:k,subTree:I,um:y}=m;_&&go(_),b.stop(),k&&(k.active=!1,xt(I,m,p,h)),y&&Te(y,p),Te(()=>{m.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},at=(m,p,h,_=!1,b=!1,k=0)=>{for(let I=k;I<m.length;I++)xt(m[I],p,h,_,b)},Br=m=>m.shapeFlag&6?Br(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),La=(m,p,h)=>{m==null?p._vnode&&xt(p._vnode,null,null,!0):T(p._vnode||null,m,p,null,null,null,h),Dd(),p._vnode=m},un={p:T,um:xt,m:dn,r:Da,mt:ro,mc:J,pc:st,pbc:Ie,n:Br,o:t};let oo,so;return e&&([oo,so]=e(un)),{render:La,hydrate:oo,createApp:wb(La,oo)}}function jt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function eu(t,e,n=!1){const r=t.children,i=e.children;if(D(r)&&D(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Et(i[o]),a.el=s.el),n||eu(s,a))}}function Eb(t){const e=t.slice(),n=[0];let r,i,o,s,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}const Ib=t=>t.__isTeleport,ve=Symbol(void 0),Qs=Symbol(void 0),Ke=Symbol(void 0),wo=Symbol(void 0),ir=[];let He=null;function le(t=!1){ir.push(He=t?null:[])}function Cb(){ir.pop(),He=ir[ir.length-1]||null}let vr=1;function Cl(t){vr+=t}function tu(t){return t.dynamicChildren=vr>0?He||wn:null,Cb(),vr>0&&He&&He.push(t),t}function me(t,e,n,r,i,o){return tu(L(t,e,n,r,i,o,!0))}function Tb(t,e,n,r,i){return tu(ze(t,e,n,r,i,!0))}function Sb(t){return t?t.__v_isVNode===!0:!1}function Vt(t,e){return t.type===e.type&&t.key===e.key}const Ki="__vInternal",nu=({key:t})=>t!=null?t:null,ti=({ref:t,ref_key:e,ref_for:n})=>t!=null?pe(t)||we(t)||F(t)?{i:nt,r:t,k:e,f:!!n}:t:null;function L(t,e=null,n=null,r=0,i=null,o=t===ve?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nu(e),ref:e&&ti(e),scopeId:Hi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Js(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=pe(n)?8:16),vr>0&&!s&&He&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&He.push(l),l}const ze=Rb;function Rb(t,e=null,n=null,r=0,i=null,o=!1){if((!t||t===lb)&&(t=Ke),Sb(t)){const a=Lt(t,e,!0);return n&&Js(a,n),vr>0&&!o&&He&&(a.shapeFlag&6?He[He.indexOf(t)]=a:He.push(a)),a.patchFlag|=-2,a}if(Bb(t)&&(t=t.__vccOpts),e){e=Nb(e);let{class:a,style:l}=e;a&&!pe(a)&&(e.class=Os(a)),he(l)&&(Cd(l)&&!D(l)&&(l=ke({},l)),e.style=Di(l))}const s=pe(t)?1:Vg(t)?128:Ib(t)?64:he(t)?4:F(t)?2:0;return L(t,e,n,r,i,s,o,!0)}function Nb(t){return t?Cd(t)||Ki in t?ke({},t):t:null}function Lt(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:s}=t,a=e?Ab(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&nu(a),ref:e&&e.ref?n&&i?D(i)?i.concat(ti(e)):[i,ti(e)]:ti(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Lt(t.ssContent),ssFallback:t.ssFallback&&Lt(t.ssFallback),el:t.el,anchor:t.anchor}}function Gi(t=" ",e=0){return ze(Qs,null,t,e)}function Jt(t="",e=!1){return e?(le(),Tb(Ke,null,t)):ze(Ke,null,t)}function tt(t){return t==null||typeof t=="boolean"?ze(Ke):D(t)?ze(ve,null,t.slice()):typeof t=="object"?Et(t):ze(Qs,null,String(t))}function Et(t){return t.el===null||t.memo?t:Lt(t)}function Js(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Js(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ki in e)?e._ctx=nt:i===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),r&64?(n=16,e=[Gi(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ab(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Os([e.class,r.class]));else if(i==="style")e.style=Di([e.style,r.style]);else if(Li(i)){const o=e[i],s=r[i];s&&o!==s&&!(D(o)&&o.includes(s))&&(e[i]=o?[].concat(o,s):s)}else i!==""&&(e[i]=r[i])}return e}function Ze(t,e,n,r=null){Fe(t,e,7,[n,r])}const Pb=Zd();let Ob=0;function Mb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Pb,o={uid:Ob++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yd(r,i),emitsOptions:Fd(r,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Ug.bind(null,o),t.ce&&t.ce(o),o}let _e=null;const Db=()=>_e||nt,An=t=>{_e=t,t.scope.on()},Xt=()=>{_e&&_e.scope.off(),_e=null};function ru(t){return t.vnode.shapeFlag&4}let xr=!1;function Lb(t,e=!1){xr=e;const{props:n,children:r}=t.vnode,i=ru(t);hb(t,n,i,e),_b(t,r);const o=i?Fb(t,e):void 0;return xr=!1,o}function Fb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Td(new Proxy(t.ctx,cb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Ub(t):null;An(t),Bn();const o=Pt(r,t,0,[t.props,i]);if(jn(),Xt(),ud(o)){if(o.then(Xt,Xt),e)return o.then(s=>{Tl(t,s,e)}).catch(s=>{Bi(s,t,0)});t.asyncDep=o}else Tl(t,o,e)}else iu(t,e)}function Tl(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Nd(e)),iu(t,n)}let Sl;function iu(t,e,n){const r=t.type;if(!t.render){if(!e&&Sl&&!r.render){const i=r.template;if(i){const{isCustomElement:o,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=ke(ke({isCustomElement:o,delimiters:a},s),l);r.render=Sl(i,c)}}t.render=r.render||qe}An(t),Bn(),db(t),jn(),Xt()}function zb(t){return new Proxy(t.attrs,{get(e,n){return De(t,"get","$attrs"),e[n]}})}function Ub(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=zb(t))},slots:t.slots,emit:t.emit,expose:e}}function Xs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Nd(Td(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fi)return fi[n](t)}}))}function Bb(t){return F(t)&&"__vccOpts"in t}const jb=(t,e)=>Pg(t,e,xr),Wb="3.2.37",Hb="http://www.w3.org/2000/svg",qt=typeof document!="undefined"?document:null,Rl=qt&&qt.createElement("template"),$b={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?qt.createElementNS(Hb,t):qt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>qt.createTextNode(t),createComment:t=>qt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,o){const s=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{Rl.innerHTML=r?`<svg>${t}</svg>`:t;const a=Rl.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Vb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function qb(t,e,n){const r=t.style,i=pe(n);if(n&&!i){for(const o in n)Zo(r,o,n[o]);if(e&&!pe(e))for(const o in e)n[o]==null&&Zo(r,o,"")}else{const o=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=o)}}const Nl=/\s*!important$/;function Zo(t,e,n){if(D(n))n.forEach(r=>Zo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Kb(t,e);Nl.test(n)?t.setProperty(Un(r),n.replace(Nl,""),"important"):t[r]=n}}const Al=["Webkit","Moz","ms"],yo={};function Kb(t,e){const n=yo[e];if(n)return n;let r=Nn(e);if(r!=="filter"&&r in t)return yo[e]=r;r=pd(r);for(let i=0;i<Al.length;i++){const o=Al[i]+r;if(o in t)return yo[e]=o}return e}const Pl="http://www.w3.org/1999/xlink";function Gb(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Pl,e.slice(6,e.length)):t.setAttributeNS(Pl,e,n);else{const o=jh(e);n==null||o&&!ld(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function Yb(t,e,n,r,i,o,s){if(e==="innerHTML"||e==="textContent"){r&&s(r,i,o),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ld(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[ou,Qb]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let es=0;const Jb=Promise.resolve(),Xb=()=>{es=0},Zb=()=>es||(Jb.then(Xb),es=ou());function e0(t,e,n,r){t.addEventListener(e,n,r)}function t0(t,e,n,r){t.removeEventListener(e,n,r)}function n0(t,e,n,r,i=null){const o=t._vei||(t._vei={}),s=o[e];if(r&&s)s.value=r;else{const[a,l]=r0(e);if(r){const c=o[e]=i0(r,i);e0(t,a,c,l)}else s&&(t0(t,a,s,l),o[e]=void 0)}}const Ol=/(?:Once|Passive|Capture)$/;function r0(t){let e;if(Ol.test(t)){e={};let n;for(;n=t.match(Ol);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Un(t.slice(2)),e]}function i0(t,e){const n=r=>{const i=r.timeStamp||ou();(Qb||i>=n.attached-1)&&Fe(o0(r,n.value),e,5,[r])};return n.value=t,n.attached=Zb(),n}function o0(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Ml=/^on[a-z]/,s0=(t,e,n,r,i=!1,o,s,a,l)=>{e==="class"?Vb(t,r,i):e==="style"?qb(t,n,r):Li(e)?Ms(e)||n0(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):a0(t,e,r,i))?Yb(t,e,r,o,s,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Gb(t,e,r,i))};function a0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ml.test(e)&&F(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ml.test(e)&&pe(n)?!1:e in t}const l0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Jg.props;const c0=["ctrl","shift","alt","meta"],d0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>c0.some(n=>t[`${n}Key`]&&!e.includes(n))},u0=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const o=d0[e[i]];if(o&&o(n,e))return}return t(n,...r)},m0=ke({patchProp:s0},$b);let Dl;function f0(){return Dl||(Dl=yb(m0))}const p0=(...t)=>{const e=f0().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=h0(r);if(!i)return;const o=e._component;!F(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function h0(t){return pe(t)?document.querySelector(t):t}const Ll="@firebase/database",Fl="0.13.2";/**
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
 */let su="";function g0(t){su=t}/**
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
 */class b0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:cr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class _0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const au=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new b0(e)}}catch{}return new _0},Kt=au("localStorage"),ts=au("sessionStorage");/**
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
 */const En=new _s("@firebase/database"),v0=function(){let t=1;return function(){return t++}}(),lu=function(t){const e=Bm(t),n=new Lm;n.update(e);const r=n.digest();return hs.encodeByteArray(r)},Mr=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Mr.apply(null,r):typeof r=="object"?e+=fe(r):e+=r,e+=" "}return e};let Zt=null,zl=!0;const x0=function(t,e){w(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(En.logLevel=Y.VERBOSE,Zt=En.log.bind(En),e&&ts.set("logging_enabled",!0)):typeof t=="function"?Zt=t:(Zt=null,ts.remove("logging_enabled"))},xe=function(...t){if(zl===!0&&(zl=!1,Zt===null&&ts.get("logging_enabled")===!0&&x0(!0)),Zt){const e=Mr.apply(null,t);Zt(e)}},Dr=function(t){return function(...e){xe(t,...e)}},ns=function(...t){const e="FIREBASE INTERNAL ERROR: "+Mr(...t);En.error(e)},rn=function(...t){const e=`FIREBASE FATAL ERROR: ${Mr(...t)}`;throw En.error(e),new Error(e)},Ne=function(...t){const e="FIREBASE WARNING: "+Mr(...t);En.warn(e)},w0=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ne("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},y0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Pn="[MIN_NAME]",on="[MAX_NAME]",Wn=function(t,e){if(t===e)return 0;if(t===Pn||e===on)return-1;if(e===Pn||t===on)return 1;{const n=Ul(t),r=Ul(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},k0=function(t,e){return t===e?0:t<e?-1:1},Kn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},Zs=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=fe(e[r]),n+=":",n+=Zs(t[e[r]]);return n+="}",n},du=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ae(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const uu=function(t){w(!cu(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,o,s,a,l;t===0?(o=0,s=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=a+r,s=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);for(l=e;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},E0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},I0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function C0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const T0=new RegExp("^-?(0*)\\d{1,10}$"),S0=-2147483648,R0=2147483647,Ul=function(t){if(T0.test(t)){const e=Number(t);if(e>=S0&&e<=R0)return e}return null},Hn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ne("Exception was thrown by user callback.",n),e},Math.floor(0))}},N0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},or=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class A0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ne(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class P0{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ne(e)}}class rs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rs.OWNER="owner";/**
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
 */const ea="5",mu="v",fu="s",pu="r",hu="f",gu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bu="ls",_u="p",is="ac",vu="websocket",xu="long_polling";/**
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
 */class O0{constructor(e,n,r,i,o=!1,s="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function M0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wu(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let r;if(e===vu)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===xu)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);M0(t)&&(n.ns=t.namespace);const i=[];return Ae(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
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
 */class D0{constructor(){this.counters_={}}incrementCounter(e,n=1){gt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Im(this.counters_)}}/**
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
 */const ko={},Eo={};function ta(t){const e=t.toString();return ko[e]||(ko[e]=new D0),ko[e]}function L0(t,e){const n=t.toString();return Eo[n]||(Eo[n]=e()),Eo[n]}/**
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
 */class F0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Hn(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Bl="start",z0="close",U0="pLPCommand",B0="pRTLPCB",yu="id",ku="pw",Eu="ser",j0="cb",W0="seg",H0="ts",$0="d",V0="dframe",Iu=1870,Cu=30,q0=Iu-Cu,K0=25e3,G0=3e4;class _n{constructor(e,n,r,i,o,s,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Dr(e),this.stats_=ta(n),this.urlFn=l=>(this.appCheckToken&&(l[is]=this.appCheckToken),wu(n,xu,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new F0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(G0)),y0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new na((...o)=>{const[s,a,l,c,d]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===Bl)this.id=a,this.password=l;else if(s===z0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Bl]="t",r[Eu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[j0]=this.scriptTagHolder.uniqueCallbackIdentifier),r[mu]=ea,this.transportSessionId&&(r[fu]=this.transportSessionId),this.lastSessionId&&(r[bu]=this.lastSessionId),this.applicationId&&(r[_u]=this.applicationId),this.appCheckToken&&(r[is]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&gu.test(location.hostname)&&(r[pu]=hu);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_n.forceAllow_=!0}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){return _n.forceAllow_?!0:!_n.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!E0()&&!I0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=wc(n),i=du(r,q0);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[V0]="t",r[yu]=e,r[ku]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class na{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=v0(),window[U0+this.uniqueCallbackIdentifier]=e,window[B0+this.uniqueCallbackIdentifier]=n,this.myIFrame=na.createIFrame_();let o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;o='<script>document.domain="'+a+'";<\/script>'}const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){xe("frame writing exception"),a.stack&&xe(a.stack),xe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yu]=this.myID,e[ku]=this.myPW,e[Eu]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cu+r.length<=Iu;){const s=this.pendingSegs.shift();r=r+"&"+W0+i+"="+s.seg+"&"+H0+i+"="+s.ts+"&"+$0+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(K0)),o=()=>{clearTimeout(i),r()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Y0=16384,Q0=45e3;let hi=null;typeof MozWebSocket!="undefined"?hi=MozWebSocket:typeof WebSocket!="undefined"&&(hi=WebSocket);class We{constructor(e,n,r,i,o,s,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Dr(this.connId),this.stats_=ta(n),this.connURL=We.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,o){const s={};return s[mu]=ea,typeof location!="undefined"&&location.hostname&&gu.test(location.hostname)&&(s[pu]=hu),n&&(s[fu]=n),r&&(s[bu]=r),i&&(s[is]=i),o&&(s[_u]=o),wu(e,vu,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let r;Ic(),this.mySock=new hi(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&hi!==null&&!We.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||Kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=cr(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=du(n,Y0);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Q0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}We.responsesRequiredToBeHealthy=2;We.healthyTimeout=3e4;/**
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
 */class wr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_n,We]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=We&&We.isAvailable();let r=n&&!We.previouslyFailed();if(e.webSocketOnly&&(n||Ne("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[We];else{const i=this.transports_=[];for(const o of wr.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);wr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wr.globalTransportInitialized_=!1;/**
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
 */const J0=6e4,X0=5e3,Z0=10*1024,e_=100*1024,Io="t",jl="d",t_="s",Wl="r",n_="e",Hl="o",$l="a",Vl="n",ql="p",r_="h";class i_{constructor(e,n,r,i,o,s,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Dr("c:"+this.id+":"),this.transportManager_=new wr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=or(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>e_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Z0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Io in e){const n=e[Io];n===$l?this.upgradeIfSecondaryHealthy_():n===Wl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Kn("t",e),r=Kn("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ql,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$l,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Kn("t",e),r=Kn("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Kn(Io,e);if(jl in e){const r=e[jl];if(n===r_)this.onHandshake_(r);else if(n===Vl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===t_?this.onConnectionShutdown_(r):n===Wl?this.onReset_(r):n===n_?ns("Server Error: "+r):n===Hl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ns("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ea!==r&&Ne("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),or(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(J0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):or(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(X0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ql,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Tu{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Su{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class gi extends Su{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!gs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gi}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Kl=32,Gl=768;class Q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new Q("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ft(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Q(t.pieces_,e)}function Ru(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function o_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Nu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Au(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Q(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Q(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function Se(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return Se(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ra(t,e){if(Ft(t)!==Ft(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function $e(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ft(t)>Ft(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class s_{constructor(e,n){this.errorPrefix_=n,this.parts_=Nu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ri(this.parts_[r]);Pu(this)}}function a_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ri(e),Pu(t)}function l_(t){const e=t.parts_.pop();t.byteLength_-=Ri(e),t.parts_.length>0&&(t.byteLength_-=1)}function Pu(t){if(t.byteLength_>Gl)throw new Error(t.errorPrefix_+"has a key path longer than "+Gl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Kl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kl+") or object contains a cycle "+$t(t))}function $t(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ia extends Su{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ia}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Gn=1e3,c_=60*5*1e3,d_=3*1e3,Yl=30*1e3,u_=1.3,m_=3e4,f_="server_kill",Ql=3;class mt extends Tu{constructor(e,n,r,i,o,s,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=mt.nextPersistentConnectionId_++,this.log_=Dr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gn,this.maxReconnectDelay_=c_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ic())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ia.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,o={r:i,a:e,b:n};this.log_(fe(o)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Si,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const s=this.outstandingGets_[o];s===void 0||i!==s||(delete this.outstandingGets_[o],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+o+" timed out on connection"),n.reject(new Error("Client is offline.")))},d_),this.connected_&&this.sendGet_(o),n.promise}listen(e,n,r,i){this.initConnection_();const o=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,c=a.s;mt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gt(e,"w")){const r=Tn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();Ne(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Dm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Mm(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const o={p:e},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ns("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>m_&&(this.reconnectDelay_=Gn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*u_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+mt.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},c=function(u){w(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);s?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new i_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Ne(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(f_)},o))}catch(u){this.log_("Failed to get token: "+u),s||(this.repoInfo_.nodeAdmin&&Ne(u),l())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Po(this.interruptReasons_)&&(this.reconnectDelay_=Gn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(o=>Zs(o)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Q(e).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ql&&(this.reconnectDelay_=Yl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ql&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+su.replace(/\./g,"-")]=1,gs()?e["framework.cordova"]=1:Ec()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gi.getInstance().currentlyOnline();return Po(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
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
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
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
 */class Yi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(Pn,e),i=new U(Pn,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
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
 */let Kr;class Ou extends Yi{static get __EMPTY_NODE(){return Kr}static set __EMPTY_NODE(e){Kr=e}compare(e,n){return Wn(e.name,n.name)}isDefinedOn(e){throw Dn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(on,Kr)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,Kr)}toString(){return".key"}}const In=new Ou;/**
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
 */class Gr{constructor(e,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=n?r(e.key,n):1,i&&(s*=-1),s<0)this.isReverse_?e=e.left:e=e.right;else if(s===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ue{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r!=null?r:ue.RED,this.left=i!=null?i:Re.EMPTY_NODE,this.right=o!=null?o:Re.EMPTY_NODE}copy(e,n,r,i,o){return new ue(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Re.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ue.RED=!0;ue.BLACK=!1;class p_{copy(e,n,r,i,o){return this}insert(e,n,r){return new ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Re{constructor(e,n=Re.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Re(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ue.BLACK,null,null))}remove(e){return new Re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ue.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Gr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Gr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Gr(this.root_,null,this.comparator_,!0,e)}}Re.EMPTY_NODE=new p_;/**
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
 */function h_(t,e){return Wn(t.name,e.name)}function oa(t,e){return Wn(t,e)}/**
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
 */let os;function g_(t){os=t}const Mu=function(t){return typeof t=="number"?"number:"+uu(t):"string:"+t},Du=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gt(e,".sv"),"Priority must be a string or number.")}else w(t===os||t.isEmpty(),"priority of unexpected type.");w(t===os||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Jl;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Du(this.priorityNode_)}static set __childrenNodeConstructor(e){Jl=e}static get __childrenNodeConstructor(){return Jl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:z(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(w(r!==".priority"||Ft(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=uu(this.value_):e+=this.value_,this.lazyHash_=lu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),o=de.VALUE_TYPE_ORDER.indexOf(r);return w(i>=0,"Unknown leaf type: "+n),w(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Lu,Fu;function b_(t){Lu=t}function __(t){Fu=t}class v_ extends Yi{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?Wn(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(on,new de("[PRIORITY-POST]",Fu))}makePost(e,n){const r=Lu(e);return new U(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new v_;/**
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
 */const x_=Math.log(2);class w_{constructor(e){const n=o=>parseInt(Math.log(o)/x_,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bi=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,f;if(d===0)return null;if(d===1)return u=t[l],f=n?n(u):u,new ue(f,u.node,ue.BLACK,null,null);{const g=parseInt(d/2,10)+l,x=i(l,g),C=i(g+1,c);return u=t[g],f=n?n(u):u,new ue(f,u.node,ue.BLACK,x,C)}},o=function(l){let c=null,d=null,u=t.length;const f=function(x,C){const T=u-x,M=u;u-=x;const ae=i(T+1,M),q=t[T],ee=n?n(q):q;g(new ue(ee,q.node,C,null,ae))},g=function(x){c?(c.left=x,c=x):(d=x,c=x)};for(let x=0;x<l.count;++x){const C=l.nextBitIsOne(),T=Math.pow(2,l.count-(x+1));C?f(T,ue.BLACK):(f(T,ue.BLACK),f(T,ue.RED))}return d},s=new w_(t.length),a=o(s);return new Re(r||e,a)};/**
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
 */let Co;const fn={};class ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return w(fn&&se,"ChildrenNode.ts has not been loaded"),Co=Co||new ut({".priority":fn},{".priority":se}),Co}get(e){const n=Tn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Re?n:null}hasIndex(e){return gt(this.indexSet_,e.toString())}addIndex(e,n){w(e!==In,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(U.Wrap);let s=o.getNext();for(;s;)i=i||e.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=bi(r,e.getCompare()):a=fn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new ut(d,c)}addToIndexes(e,n){const r=ni(this.indexes_,(i,o)=>{const s=Tn(this.indexSet_,o);if(w(s,"Missing index implementation for "+o),i===fn)if(s.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),bi(a,s.getCompare())}else return fn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new ut(r,this.indexSet_)}removeFromIndexes(e,n){const r=ni(this.indexes_,i=>{if(i===fn)return i;{const o=n.get(e.name);return o?i.remove(new U(e.name,o)):i}});return new ut(r,this.indexSet_)}}/**
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
 */let Yn;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Du(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Yn||(Yn=new A(new Re(oa),null,ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Yn}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Yn:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,o;n.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?Yn:this.priorityNode_;return new A(i,s,o)}}updateChild(e,n){const r=z(e);if(r===null)return n;{w(z(e)!==".priority"||Ft(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild(se,(s,a)=>{n[s]=a.val(e),r++,o&&A.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!e&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mu(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":lu(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new U(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,e)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,e)>0;)i.getNext(),o=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Lr?-1:0}withIndex(e){if(e===In||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===In||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),i=n.getIterator(se);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(e){return e===In?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class y_ extends A{constructor(){super(new Re(oa),A.EMPTY_NODE,ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Lr=new y_;Object.defineProperties(U,{MIN:{value:new U(Pn,A.EMPTY_NODE)},MAX:{value:new U(on,Lr)}});Ou.__EMPTY_NODE=A.EMPTY_NODE;de.__childrenNodeConstructor=A;g_(Lr);__(Lr);/**
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
 */const k_=!0;function be(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,be(e))}if(!(t instanceof Array)&&k_){const n=[];let r=!1;if(Ae(t,(s,a)=>{if(s.substring(0,1)!=="."){const l=be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new U(s,l)))}}),n.length===0)return A.EMPTY_NODE;const o=bi(n,h_,s=>s.name,oa);if(r){const s=bi(n,se.getCompare());return new A(o,be(e),new ut({".priority":s},{".priority":se}))}else return new A(o,be(e),ut.Default)}else{let n=A.EMPTY_NODE;return Ae(t,(r,i)=>{if(gt(t,r)&&r.substring(0,1)!=="."){const o=be(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(be(e))}}b_(be);/**
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
 */class E_ extends Yi{constructor(e){super(),this.indexPath_=e,w(!B(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?Wn(e.name,n.name):o}makePost(e,n){const r=be(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Lr);return new U(on,e)}toString(){return Nu(this.indexPath_,0).join("/")}}/**
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
 */class I_ extends Yi{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Wn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=be(e);return new U(n,r)}toString(){return".value"}}const C_=new I_;/**
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
 */function zu(t){return{type:"value",snapshotNode:t}}function On(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function yr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function kr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function T_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class sa{constructor(e){this.index_=e}updateChild(e,n,r,i,o,s){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?e.hasChild(n)?s.trackChildChange(yr(n,a)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(On(n,r)):s.trackChildChange(kr(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(i,o)=>{n.hasChild(i)||r.trackChildChange(yr(i,o))}),n.isLeafNode()||n.forEachChild(se,(i,o)=>{if(e.hasChild(i)){const s=e.getImmediateChild(i);s.equals(o)||r.trackChildChange(kr(i,o,s))}else r.trackChildChange(On(i,o))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Er{constructor(e){this.indexedFilter_=new sa(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Er.getStartPost_(e),this.endPost_=Er.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,o,s){return this.matches(new U(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,o,s)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const o=this;return n.forEachChild(se,(s,a)=>{o.matches(new U(s,a))||(i=i.updateImmediateChild(s,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class S_{constructor(e){this.rangedFilter_=new Er(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,o,s){return this.rangedFilter_.matches(new U(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,o,s):this.fullLimitUpdateChild_(e,n,r,o,s)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;o.hasNext()&&s<this.limit_;){const a=o.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),s++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let o,s,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),o=this.rangedFilter_.getEndPost(),s=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();a=(f,g)=>u(g,f)}else l=i.getIterator(this.index_),o=this.rangedFilter_.getStartPost(),s=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,d=!1;for(;l.hasNext();){const u=l.getNext();!d&&a(o,u)<=0&&(d=!0),d&&c<this.limit_&&a(u,s)<=0?c++:i=i.updateImmediateChild(u.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,o){let s;if(this.reverse_){const u=this.index_.getCompare();s=(f,g)=>u(g,f)}else s=this.index_.getCompare();const a=e;w(a.numChildren()===this.limit_,"");const l=new U(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:s(f,l);if(d&&!r.isEmpty()&&g>=0)return o!=null&&o.trackChildChange(kr(n,r,u)),a.updateImmediateChild(n,r);{o!=null&&o.trackChildChange(yr(n,u));const C=a.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(o!=null&&o.trackChildChange(On(f.name,f.node)),C.updateImmediateChild(f.name,f.node)):C}}else return r.isEmpty()?e:d&&s(c,l)>=0?(o!=null&&(o.trackChildChange(yr(c.name,c.node)),o.trackChildChange(On(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
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
 */class aa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pn}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:on}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new aa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function R_(t){return t.loadsAllData()?new sa(t.getIndex()):t.hasLimit()?new S_(t):new Er(t)}function Xl(t){const e={};if(t.isDefault())return e;let n;return t.index_===se?n="$priority":t.index_===C_?n="$value":t.index_===In?n="$key":(w(t.index_ instanceof E_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_&&(e.startAt=fe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+fe(t.indexStartName_))),t.endSet_&&(e.endAt=fe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+fe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Zl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
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
 */class _i extends Tu{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Dr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const s=_i.getListenId_(e,r),a={};this.listens_[s]=a;const l=Xl(e._queryParams);this.restRequest_(o+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(o,u,!1,r),Tn(this.listens_,s)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=_i.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Xl(e._queryParams),r=e._path.toString(),i=new Si;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fn(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=cr(a.responseText)}catch{Ne("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ne("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
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
 */class N_{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function vi(){return{value:null,children:new Map}}function Uu(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,vi());const i=t.children.get(r);e=Z(e),Uu(i,e,n)}}function ss(t,e,n){t.value!==null?n(e,t.value):A_(t,(r,i)=>{const o=new Q(e.toString()+"/"+r);ss(i,o,n)})}function A_(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class P_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ae(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const ec=10*1e3,O_=30*1e3,M_=5*60*1e3;class D_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new P_(e);const r=ec+(O_-ec)*Math.random();or(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ae(e,(i,o)=>{o>0&&gt(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),or(this.reportStats_.bind(this),Math.floor(Math.random()*2*M_))}}/**
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
 */var Ve;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ve||(Ve={}));function Bu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function la(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ca(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class xi{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ve.ACK_USER_WRITE,this.source=Bu()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(e));return new xi($(),n,this.revert)}}else return w(z(this.path)===e,"operationForChild called for unrelated child."),new xi(Z(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ir{constructor(e,n){this.source=e,this.path=n,this.type=Ve.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Ir(this.source,$()):new Ir(this.source,Z(this.path))}}/**
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
 */class sn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ve.OVERWRITE}operationForChild(e){return B(this.path)?new sn(this.source,$(),this.snap.getImmediateChild(e)):new sn(this.source,Z(this.path),this.snap)}}/**
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
 */class Cr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ve.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new Q(e));return n.isEmpty()?null:n.value?new sn(this.source,$(),n.value):new Cr(this.source,$(),n)}else return w(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cr(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class an{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class L_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function F_(t,e,n,r){const i=[],o=[];return e.forEach(s=>{s.type==="child_changed"&&t.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(T_(s.childName,s.snapshotNode))}),Qn(t,i,"child_removed",e,r,n),Qn(t,i,"child_added",e,r,n),Qn(t,i,"child_moved",o,r,n),Qn(t,i,"child_changed",e,r,n),Qn(t,i,"value",e,r,n),i}function Qn(t,e,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>U_(t,a,l)),s.forEach(a=>{const l=z_(t,a,o);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function z_(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function U_(t,e,n){if(e.childName==null||n.childName==null)throw Dn("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Qi(t,e){return{eventCache:t,serverCache:e}}function sr(t,e,n,r){return Qi(new an(e,n,r),t.serverCache)}function ju(t,e,n,r){return Qi(t.eventCache,new an(e,n,r))}function as(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ln(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let To;const B_=()=>(To||(To=new Re(k0)),To);class re{constructor(e,n=B_()){this.value=e,this.children=n}static fromObject(e){let n=new re(null);return Ae(e,(r,i)=>{n=n.set(new Q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(B(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(Z(e),n);return o!=null?{path:ce(new Q(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new re(null)}}set(e,n){if(B(e))return new re(n,this.children);{const r=z(e),o=(this.children.get(r)||new re(null)).set(Z(e),n),s=this.children.insert(r,o);return new re(this.value,s)}}remove(e){if(B(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(Z(e));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new re(null):new re(this.value,o)}else return this}}get(e){if(B(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if(B(e))return n;{const r=z(e),o=(this.children.get(r)||new re(null)).setTree(Z(e),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new re(this.value,s)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const o=z(e),s=this.children.get(o);return s?s.findOnPath_(Z(e),ce(n,o),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=z(e),o=this.children.get(i);return o?o.foreachOnPath_(Z(e),ce(n,i),r):new re(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Ge{constructor(e){this.writeTree_=e}static empty(){return new Ge(new re(null))}}function ar(t,e,n){if(B(e))return new Ge(new re(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let o=r.value;const s=Se(i,e);return o=o.updateChild(s,n),new Ge(t.writeTree_.set(i,o))}else{const i=new re(n),o=t.writeTree_.setTree(e,i);return new Ge(o)}}}function tc(t,e,n){let r=t;return Ae(n,(i,o)=>{r=ar(r,ce(e,i),o)}),r}function nc(t,e){if(B(e))return Ge.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Ge(n)}}function ls(t,e){return cn(t,e)!=null}function cn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Se(n.path,e)):null}function rc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function Ot(t,e){if(B(e))return t;{const n=cn(t,e);return n!=null?new Ge(new re(n)):new Ge(t.writeTree_.subtree(e))}}function cs(t){return t.writeTree_.isEmpty()}function Mn(t,e){return Wu($(),t.writeTree_,e)}function Wu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,o)=>{i===".priority"?(w(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=Wu(ce(t,i),o,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
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
 */function da(t,e){return qu(e,t)}function j_(t,e,n,r,i){w(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ar(t.visibleWrites,e,n)),t.lastWriteId=r}function W_(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function H_(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,o=!1,s=t.allWrites.length-1;for(;i&&s>=0;){const a=t.allWrites[s];a.visible&&(s>=n&&$_(a,r.path)?i=!1:$e(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return V_(t),!0;if(r.snap)t.visibleWrites=nc(t.visibleWrites,r.path);else{const a=r.children;Ae(a,l=>{t.visibleWrites=nc(t.visibleWrites,ce(r.path,l))})}return!0}else return!1}function $_(t,e){if(t.snap)return $e(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$e(ce(t.path,n),e))return!0;return!1}function V_(t){t.visibleWrites=Hu(t.allWrites,q_,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function q_(t){return t.visible}function Hu(t,e,n){let r=Ge.empty();for(let i=0;i<t.length;++i){const o=t[i];if(e(o)){const s=o.path;let a;if(o.snap)$e(n,s)?(a=Se(n,s),r=ar(r,a,o.snap)):$e(s,n)&&(a=Se(s,n),r=ar(r,$(),o.snap.getChild(a)));else if(o.children){if($e(n,s))a=Se(n,s),r=tc(r,a,o.children);else if($e(s,n))if(a=Se(s,n),B(a))r=tc(r,$(),o.children);else{const l=Tn(o.children,z(a));if(l){const c=l.getChild(Z(a));r=ar(r,$(),c)}}}else throw Dn("WriteRecord should have .snap or .children")}}return r}function $u(t,e,n,r,i){if(!r&&!i){const o=cn(t.visibleWrites,e);if(o!=null)return o;{const s=Ot(t.visibleWrites,e);if(cs(s))return n;if(n==null&&!ls(s,$()))return null;{const a=n||A.EMPTY_NODE;return Mn(s,a)}}}else{const o=Ot(t.visibleWrites,e);if(!i&&cs(o))return n;if(!i&&n==null&&!ls(o,$()))return null;{const s=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&($e(c.path,e)||$e(e,c.path))},a=Hu(t.allWrites,s,e),l=n||A.EMPTY_NODE;return Mn(a,l)}}}function K_(t,e,n){let r=A.EMPTY_NODE;const i=cn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=Ot(t.visibleWrites,e);return n.forEachChild(se,(s,a)=>{const l=Mn(Ot(o,new Q(s)),a);r=r.updateImmediateChild(s,l)}),rc(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=Ot(t.visibleWrites,e);return rc(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function G_(t,e,n,r,i){w(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=ce(e,n);if(ls(t.visibleWrites,o))return null;{const s=Ot(t.visibleWrites,o);return cs(s)?i.getChild(n):Mn(s,i.getChild(n))}}function Y_(t,e,n,r){const i=ce(e,n),o=cn(t.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=Ot(t.visibleWrites,i);return Mn(s,r.getNode().getImmediateChild(n))}else return null}function Q_(t,e){return cn(t.visibleWrites,e)}function J_(t,e,n,r,i,o,s){let a;const l=Ot(t.visibleWrites,e),c=cn(l,$());if(c!=null)a=c;else if(n!=null)a=Mn(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=s.getCompare(),f=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let g=f.getNext();for(;g&&d.length<i;)u(g,r)!==0&&d.push(g),g=f.getNext();return d}else return[]}function X_(){return{visibleWrites:Ge.empty(),allWrites:[],lastWriteId:-1}}function wi(t,e,n,r){return $u(t.writeTree,t.treePath,e,n,r)}function ua(t,e){return K_(t.writeTree,t.treePath,e)}function ic(t,e,n,r){return G_(t.writeTree,t.treePath,e,n,r)}function yi(t,e){return Q_(t.writeTree,ce(t.treePath,e))}function Z_(t,e,n,r,i,o){return J_(t.writeTree,t.treePath,e,n,r,i,o)}function ma(t,e,n){return Y_(t.writeTree,t.treePath,e,n)}function Vu(t,e){return qu(ce(t.treePath,e),t.writeTree)}function qu(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ev{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,kr(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,yr(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,On(r,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,kr(r,e.snapshotNode,i.oldSnap));else throw Dn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class tv{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ku=new tv;class fa{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new an(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ma(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ln(this.viewCache_),o=Z_(this.writes_,i,n,1,r,e);return o.length===0?null:o[0]}}/**
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
 */function nv(t){return{filter:t}}function rv(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function iv(t,e,n,r,i){const o=new ev;let s,a;if(n.type===Ve.OVERWRITE){const c=n;c.source.fromUser?s=ds(t,e,c.path,c.snap,r,i,o):(w(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),s=ki(t,e,c.path,c.snap,r,i,a,o))}else if(n.type===Ve.MERGE){const c=n;c.source.fromUser?s=sv(t,e,c.path,c.children,r,i,o):(w(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),s=us(t,e,c.path,c.children,r,i,a,o))}else if(n.type===Ve.ACK_USER_WRITE){const c=n;c.revert?s=cv(t,e,c.path,r,i,o):s=av(t,e,c.path,c.affectedTree,r,i,o)}else if(n.type===Ve.LISTEN_COMPLETE)s=lv(t,e,n.path,r,o);else throw Dn("Unknown operation type: "+n.type);const l=o.getChanges();return ov(e,s,l),{viewCache:s,changes:l}}function ov(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=as(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(zu(as(e)))}}function Gu(t,e,n,r,i,o){const s=e.eventCache;if(yi(r,n)!=null)return e;{let a,l;if(B(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ln(e),d=c instanceof A?c:A.EMPTY_NODE,u=ua(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const c=wi(r,ln(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,o)}else{const c=z(n);if(c===".priority"){w(Ft(n)===1,"Can't have a priority with additional path components");const d=s.getNode();l=e.serverCache.getNode();const u=ic(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=s.getNode()}else{const d=Z(n);let u;if(s.isCompleteForChild(c)){l=e.serverCache.getNode();const f=ic(r,n,s.getNode(),l);f!=null?u=s.getNode().getImmediateChild(c).updateChild(d,f):u=s.getNode().getImmediateChild(c)}else u=ma(r,c,e.serverCache);u!=null?a=t.filter.updateChild(s.getNode(),c,u,d,i,o):a=s.getNode()}}return sr(e,a,s.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function ki(t,e,n,r,i,o,s,a){const l=e.serverCache;let c;const d=s?t.filter:t.filter.getIndexedFilter();if(B(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),g,null)}else{const g=z(n);if(!l.isCompleteForPath(n)&&Ft(n)>1)return e;const x=Z(n),T=l.getNode().getImmediateChild(g).updateChild(x,r);g===".priority"?c=d.updatePriority(l.getNode(),T):c=d.updateChild(l.getNode(),g,T,x,Ku,null)}const u=ju(e,c,l.isFullyInitialized()||B(n),d.filtersNodes()),f=new fa(i,u,o);return Gu(t,u,n,i,f,a)}function ds(t,e,n,r,i,o,s){const a=e.eventCache;let l,c;const d=new fa(i,e,o);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,s),l=sr(e,c,!0,t.filter.filtersNodes());else{const u=z(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=sr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Z(n),g=a.getNode().getImmediateChild(u);let x;if(B(f))x=r;else{const C=d.getCompleteChild(u);C!=null?Ru(f)===".priority"&&C.getChild(Au(f)).isEmpty()?x=C:x=C.updateChild(f,r):x=A.EMPTY_NODE}if(g.equals(x))l=e;else{const C=t.filter.updateChild(a.getNode(),u,x,f,d,s);l=sr(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function oc(t,e){return t.eventCache.isCompleteForChild(e)}function sv(t,e,n,r,i,o,s){let a=e;return r.foreach((l,c)=>{const d=ce(n,l);oc(e,z(d))&&(a=ds(t,a,d,c,i,o,s))}),r.foreach((l,c)=>{const d=ce(n,l);oc(e,z(d))||(a=ds(t,a,d,c,i,o,s))}),a}function sc(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function us(t,e,n,r,i,o,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;B(n)?c=r:c=new re(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),x=sc(t,g,f);l=ki(t,l,new Q(u),x,i,o,s,a)}}),c.children.inorderTraversal((u,f)=>{const g=!e.serverCache.isCompleteForChild(u)&&f.value===void 0;if(!d.hasChild(u)&&!g){const x=e.serverCache.getNode().getImmediateChild(u),C=sc(t,x,f);l=ki(t,l,new Q(u),C,i,o,s,a)}}),l}function av(t,e,n,r,i,o,s){if(yi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(B(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ki(t,e,n,l.getNode().getChild(n),i,o,a,s);if(B(n)){let c=new re(null);return l.getNode().forEachChild(In,(d,u)=>{c=c.set(new Q(d),u)}),us(t,e,n,c,i,o,a,s)}else return e}else{let c=new re(null);return r.foreach((d,u)=>{const f=ce(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),us(t,e,n,c,i,o,a,s)}}function lv(t,e,n,r,i){const o=e.serverCache,s=ju(e,o.getNode(),o.isFullyInitialized()||B(n),o.isFiltered());return Gu(t,s,n,r,Ku,i)}function cv(t,e,n,r,i,o){let s;if(yi(r,n)!=null)return e;{const a=new fa(r,e,i),l=e.eventCache.getNode();let c;if(B(n)||z(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=wi(r,ln(e));else{const u=e.serverCache.getNode();w(u instanceof A,"serverChildren would be complete if leaf node"),d=ua(r,u)}d=d,c=t.filter.updateFullNode(l,d,o)}else{const d=z(n);let u=ma(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,Z(n),a,o):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,A.EMPTY_NODE,Z(n),a,o):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=wi(r,ln(e)),s.isLeafNode()&&(c=t.filter.updateFullNode(c,s,o)))}return s=e.serverCache.isFullyInitialized()||yi(r,$())!=null,sr(e,c,s,t.filter.filtersNodes())}}/**
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
 */class dv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new sa(r.getIndex()),o=R_(r);this.processor_=nv(o);const s=n.serverCache,a=n.eventCache,l=i.updateFullNode(A.EMPTY_NODE,s.getNode(),null),c=o.updateFullNode(A.EMPTY_NODE,a.getNode(),null),d=new an(l,s.isFullyInitialized(),i.filtersNodes()),u=new an(c,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=Qi(u,d),this.eventGenerator_=new L_(this.query_)}get query(){return this.query_}}function uv(t){return t.viewCache_.serverCache.getNode()}function mv(t,e){const n=ln(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function ac(t){return t.eventRegistrations_.length===0}function fv(t,e){t.eventRegistrations_.push(e)}function lc(t,e,n){const r=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(o=>{const s=o.createCancelEvent(n,i);s&&r.push(s)})}if(e){let i=[];for(let o=0;o<t.eventRegistrations_.length;++o){const s=t.eventRegistrations_[o];if(!s.matches(e))i.push(s);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(o+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function cc(t,e,n,r){e.type===Ve.MERGE&&e.source.queryId!==null&&(w(ln(t.viewCache_),"We should always have a full cache before handling merges"),w(as(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,o=iv(t.processor_,i,e,n,r);return rv(t.processor_,o.viewCache),w(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,Yu(t,o.changes,o.viewCache.eventCache.getNode(),null)}function pv(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(o,s)=>{r.push(On(o,s))}),n.isFullyInitialized()&&r.push(zu(n.getNode())),Yu(t,r,n.getNode(),e)}function Yu(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return F_(t.eventGenerator_,e,n,i)}/**
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
 */let Ei;class hv{constructor(){this.views=new Map}}function gv(t){w(!Ei,"__referenceConstructor has already been defined"),Ei=t}function bv(){return w(Ei,"Reference.ts has not been loaded"),Ei}function _v(t){return t.views.size===0}function pa(t,e,n,r){const i=e.source.queryId;if(i!==null){const o=t.views.get(i);return w(o!=null,"SyncTree gave us an op for an invalid query."),cc(o,e,n,r)}else{let o=[];for(const s of t.views.values())o=o.concat(cc(s,e,n,r));return o}}function vv(t,e,n,r,i){const o=e._queryIdentifier,s=t.views.get(o);if(!s){let a=wi(n,i?r:null),l=!1;a?l=!0:r instanceof A?(a=ua(n,r),l=!1):(a=A.EMPTY_NODE,l=!1);const c=Qi(new an(a,l,!1),new an(r,i,!1));return new dv(e,c)}return s}function xv(t,e,n,r,i,o){const s=vv(t,e,r,i,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,s),fv(s,n),pv(s,n)}function wv(t,e,n,r){const i=e._queryIdentifier,o=[];let s=[];const a=zt(t);if(i==="default")for(const[l,c]of t.views.entries())s=s.concat(lc(c,n,r)),ac(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||o.push(c.query));else{const l=t.views.get(i);l&&(s=s.concat(lc(l,n,r)),ac(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||o.push(l.query)))}return a&&!zt(t)&&o.push(new(bv())(e._repo,e._path)),{removed:o,events:s}}function Qu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Cn(t,e){let n=null;for(const r of t.views.values())n=n||mv(r,e);return n}function Ju(t,e){if(e._queryParams.loadsAllData())return Ji(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Xu(t,e){return Ju(t,e)!=null}function zt(t){return Ji(t)!=null}function Ji(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ii;function yv(t){w(!Ii,"__referenceConstructor has already been defined"),Ii=t}function kv(){return w(Ii,"Reference.ts has not been loaded"),Ii}let Ev=1;class dc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=X_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zu(t,e,n,r,i){return j_(t.pendingWriteTree_,e,n,r,i),i?Fr(t,new sn(Bu(),e,n)):[]}function Gt(t,e,n=!1){const r=W_(t.pendingWriteTree_,e);if(H_(t.pendingWriteTree_,e)){let o=new re(null);return r.snap!=null?o=o.set($(),!0):Ae(r.children,s=>{o=o.set(new Q(s),!0)}),Fr(t,new xi(r.path,o,n))}else return[]}function Xi(t,e,n){return Fr(t,new sn(la(),e,n))}function Iv(t,e,n){const r=re.fromObject(n);return Fr(t,new Cr(la(),e,r))}function Cv(t,e){return Fr(t,new Ir(la(),e))}function Tv(t,e,n){const r=ga(t,n);if(r){const i=ba(r),o=i.path,s=i.queryId,a=Se(o,e),l=new Ir(ca(s),a);return _a(t,o,l)}else return[]}function ms(t,e,n,r){const i=e._path,o=t.syncPointTree_.get(i);let s=[];if(o&&(e._queryIdentifier==="default"||Xu(o,e))){const a=wv(o,e,n,r);_v(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;s=a.events;const c=l.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(u,f)=>zt(f));if(c&&!d){const u=t.syncPointTree_.subtree(i);if(!u.isEmpty()){const f=Av(u);for(let g=0;g<f.length;++g){const x=f[g],C=x.query,T=nm(t,x);t.listenProvider_.startListening(lr(C),Ci(t,C),T.hashFn,T.onComplete)}}}!d&&l.length>0&&!r&&(c?t.listenProvider_.stopListening(lr(e),null):l.forEach(u=>{const f=t.queryToTagMap.get(Zi(u));t.listenProvider_.stopListening(lr(u),f)})),Pv(t,l)}return s}function Sv(t,e,n,r){const i=ga(t,r);if(i!=null){const o=ba(i),s=o.path,a=o.queryId,l=Se(s,e),c=new sn(ca(a),l,n);return _a(t,s,c)}else return[]}function Rv(t,e,n,r){const i=ga(t,r);if(i){const o=ba(i),s=o.path,a=o.queryId,l=Se(s,e),c=re.fromObject(n),d=new Cr(ca(a),l,c);return _a(t,s,d)}else return[]}function Nv(t,e){const n=t._path;let r=null,i=!1;e.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=Se(c,n);r=r||Cn(d,u),i=i||zt(d)});let o=e.syncPointTree_.get(n);o?(i=i||zt(o),r=r||Cn(o,$())):(o=new hv,e.syncPointTree_=e.syncPointTree_.set(n,o));let s;r!=null?s=!0:(s=!1,r=A.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((d,u)=>{const f=Cn(u,$());f&&(r=r.updateImmediateChild(d,f))}));const a=Xu(o,t);if(!a&&!t._queryParams.loadsAllData()){const c=Zi(t);w(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");const d=Ov();e.queryToTagMap.set(c,d),e.tagToQueryMap.set(d,c)}const l=da(e.pendingWriteTree_,n);return{syncPoint:o,writesCache:l,serverCache:r,serverCacheComplete:s,foundAncestorDefaultView:i,viewAlreadyExists:a}}function uc(t,e,n){const{syncPoint:r,serverCache:i,writesCache:o,serverCacheComplete:s,viewAlreadyExists:a,foundAncestorDefaultView:l}=Nv(e,t);let c=xv(r,e,n,o,i,s);if(!a&&!l){const d=Ju(r,e);c=c.concat(Mv(t,e,d))}return c}function ha(t,e,n){const i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(s,a)=>{const l=Se(s,e),c=Cn(a,l);if(c)return c});return $u(i,e,o,n,!0)}function Fr(t,e){return em(e,t.syncPointTree_,null,da(t.pendingWriteTree_,$()))}function em(t,e,n,r){if(B(t.path))return tm(t,e,n,r);{const i=e.get($());n==null&&i!=null&&(n=Cn(i,$()));let o=[];const s=z(t.path),a=t.operationForChild(s),l=e.children.get(s);if(l&&a){const c=n?n.getImmediateChild(s):null,d=Vu(r,s);o=o.concat(em(a,l,c,d))}return i&&(o=o.concat(pa(i,t,r,n))),o}}function tm(t,e,n,r){const i=e.get($());n==null&&i!=null&&(n=Cn(i,$()));let o=[];return e.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,c=Vu(r,s),d=t.operationForChild(s);d&&(o=o.concat(tm(d,a,l,c)))}),i&&(o=o.concat(pa(i,t,r,n))),o}function nm(t,e){const n=e.query,r=Ci(t,n);return{hashFn:()=>(uv(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Tv(t,n._path,r):Cv(t,n._path);{const o=C0(i,n);return ms(t,n,null,o)}}}}function Ci(t,e){const n=Zi(e);return t.queryToTagMap.get(n)}function Zi(t){return t._path.toString()+"$"+t._queryIdentifier}function ga(t,e){return t.tagToQueryMap.get(e)}function ba(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Q(t.substr(0,e))}}function _a(t,e,n){const r=t.syncPointTree_.get(e);w(r,"Missing sync point for query tag that we're tracking");const i=da(t.pendingWriteTree_,e);return pa(r,n,i,null)}function Av(t){return t.fold((e,n,r)=>{if(n&&zt(n))return[Ji(n)];{let i=[];return n&&(i=Qu(n)),Ae(r,(o,s)=>{i=i.concat(s)}),i}})}function lr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(kv())(t._repo,t._path):t}function Pv(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Zi(r),o=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(o)}}}function Ov(){return Ev++}function Mv(t,e,n){const r=e._path,i=Ci(t,e),o=nm(t,n),s=t.listenProvider_.startListening(lr(e),i,o.hashFn,o.onComplete),a=t.syncPointTree_.subtree(r);if(i)w(!zt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!B(c)&&d&&zt(d))return[Ji(d).query];{let f=[];return d&&(f=f.concat(Qu(d).map(g=>g.query))),Ae(u,(g,x)=>{f=f.concat(x)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(lr(d),Ci(t,d))}}return s}/**
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
 */class va{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new va(n)}node(){return this.node_}}class xa{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new xa(this.syncTree_,n)}node(){return ha(this.syncTree_,this.path_)}}const Dv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},mc=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Lv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Fv(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Lv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},Fv=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&w(!1,"Unexpected increment value: "+r);const i=e.node();if(w(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},zv=function(t,e,n,r){return wa(e,new xa(n,t),r)},rm=function(t,e,n){return wa(t,new va(e),n)};function wa(t,e,n){const r=t.getPriority().val(),i=mc(r,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const s=t,a=mc(s.getValue(),e,n);return a!==s.getValue()||i!==s.getPriority().val()?new de(a,be(i)):t}else{const s=t;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new de(i))),s.forEachChild(se,(a,l)=>{const c=wa(l,e.getImmediateChild(a),n);c!==l&&(o=o.updateImmediateChild(a,c))}),o}}/**
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
 */class ya{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ka(t,e){let n=e instanceof Q?e:new Q(e),r=t,i=z(n);for(;i!==null;){const o=Tn(r.node.children,i)||{children:{},childCount:0};r=new ya(i,r,o),n=Z(n),i=z(n)}return r}function $n(t){return t.node.value}function im(t,e){t.node.value=e,fs(t)}function om(t){return t.node.childCount>0}function Uv(t){return $n(t)===void 0&&!om(t)}function eo(t,e){Ae(t.node.children,(n,r)=>{e(new ya(n,t,r))})}function sm(t,e,n,r){n&&!r&&e(t),eo(t,i=>{sm(i,e,!0,r)}),n&&r&&e(t)}function Bv(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function zr(t){return new Q(t.parent===null?t.name:zr(t.parent)+"/"+t.name)}function fs(t){t.parent!==null&&jv(t.parent,t.name,t)}function jv(t,e,n){const r=Uv(n),i=gt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,fs(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,fs(t))}/**
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
 */const Wv=/[\[\].#$\/\u0000-\u001F\u007F]/,Hv=/[\[\].#$\u0000-\u001F\u007F]/,So=10*1024*1024,am=function(t){return typeof t=="string"&&t.length!==0&&!Wv.test(t)},lm=function(t){return typeof t=="string"&&t.length!==0&&!Hv.test(t)},$v=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lm(t)},Vv=function(t,e,n,r){r&&e===void 0||Ea(bs(t,"value"),e,n)},Ea=function(t,e,n){const r=n instanceof Q?new s_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$t(r));if(typeof e=="function")throw new Error(t+"contains a function "+$t(r)+" with contents = "+e.toString());if(cu(e))throw new Error(t+"contains "+e.toString()+" "+$t(r));if(typeof e=="string"&&e.length>So/3&&Ri(e)>So)throw new Error(t+"contains a string greater than "+So+" utf8 bytes "+$t(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,o=!1;if(Ae(e,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!am(s)))throw new Error(t+" contains an invalid key ("+s+") "+$t(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);a_(r,s),Ea(t,a,r),l_(r)}),i&&o)throw new Error(t+' contains ".value" child '+$t(r)+" in addition to actual children.")}},cm=function(t,e,n,r){if(!(r&&n===void 0)&&!lm(n))throw new Error(bs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qv=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),cm(t,e,n,r)},Kv=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Gv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!am(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$v(n))throw new Error(bs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Yv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ia(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],o=i.getPath();n!==null&&!ra(o,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function dm(t,e,n){Ia(t,n),um(t,r=>ra(r,e))}function ht(t,e,n){Ia(t,n),um(t,r=>$e(r,e)||$e(e,r))}function um(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const o=i.path;e(o)?(Qv(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Qv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Zt&&xe("event: "+n.toString()),Hn(r)}}}/**
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
 */const Jv="repo_interrupt",Xv=25;class Zv{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vi(),this.transactionQueueTree_=new ya,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ex(t,e,n){if(t.stats_=ta(t.repoInfo_),t.forceRestClient_||N0())t.server_=new _i(t.repoInfo_,(r,i,o,s)=>{fc(t,r,i,o,s)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>pc(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new mt(t.repoInfo_,e,(r,i,o,s)=>{fc(t,r,i,o,s)},r=>{pc(t,r)},r=>{nx(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=L0(t.repoInfo_,()=>new D_(t.stats_,t.server_)),t.infoData_=new N_,t.infoSyncTree_=new dc({startListening:(r,i,o,s)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Xi(t.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),Ta(t,"connected",!1),t.serverSyncTree_=new dc({startListening:(r,i,o,s)=>(t.server_.listen(r,o,i,(a,l)=>{const c=s(a,l);ht(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function tx(t){const n=t.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ca(t){return Dv({timestamp:tx(t)})}function fc(t,e,n,r,i){t.dataUpdateCount++;const o=new Q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let s=[];if(i)if(r){const l=ni(n,c=>be(c));s=Rv(t.serverSyncTree_,o,l,i)}else{const l=be(n);s=Sv(t.serverSyncTree_,o,l,i)}else if(r){const l=ni(n,c=>be(c));s=Iv(t.serverSyncTree_,o,l)}else{const l=be(n);s=Xi(t.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=to(t,o)),ht(t.eventQueue_,a,s)}function pc(t,e){Ta(t,"connected",e),e===!1&&ix(t)}function nx(t,e){Ae(e,(n,r)=>{Ta(t,n,r)})}function Ta(t,e,n){const r=new Q("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(r,i);const o=Xi(t.infoSyncTree_,r,i);ht(t.eventQueue_,r,o)}function mm(t){return t.nextWriteId_++}function rx(t,e,n,r,i){Sa(t,"set",{path:e.toString(),value:n,priority:r});const o=Ca(t),s=be(n,r),a=ha(t.serverSyncTree_,e),l=rm(s,a,o),c=mm(t),d=Zu(t.serverSyncTree_,e,l,c,!0);Ia(t.eventQueue_,d),t.server_.put(e.toString(),s.val(!0),(f,g)=>{const x=f==="ok";x||Ne("set at "+e+" failed: "+f);const C=Gt(t.serverSyncTree_,c,!x);ht(t.eventQueue_,e,C),ax(t,i,f,g)});const u=bm(t,e);to(t,u),ht(t.eventQueue_,u,[])}function ix(t){Sa(t,"onDisconnectEvents");const e=Ca(t),n=vi();ss(t.onDisconnect_,$(),(i,o)=>{const s=zv(i,o,t.serverSyncTree_,e);Uu(n,i,s)});let r=[];ss(n,$(),(i,o)=>{r=r.concat(Xi(t.serverSyncTree_,i,o));const s=bm(t,i);to(t,s)}),t.onDisconnect_=vi(),ht(t.eventQueue_,$(),r)}function ox(t,e,n){let r;z(e._path)===".info"?r=uc(t.infoSyncTree_,e,n):r=uc(t.serverSyncTree_,e,n),dm(t.eventQueue_,e._path,r)}function hc(t,e,n){let r;z(e._path)===".info"?r=ms(t.infoSyncTree_,e,n):r=ms(t.serverSyncTree_,e,n),dm(t.eventQueue_,e._path,r)}function sx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Jv)}function Sa(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xe(n,...e)}function ax(t,e,n,r){e&&Hn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let o=i;r&&(o+=": "+r);const s=new Error(o);s.code=i,e(s)}})}function fm(t,e,n){return ha(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Ra(t,e=t.transactionQueueTree_){if(e||no(t,e),$n(e)){const n=hm(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&lx(t,zr(e),n)}else om(e)&&eo(e,n=>{Ra(t,n)})}function lx(t,e,n){const r=n.map(c=>c.currentWriteId),i=fm(t,e,r);let o=i;const s=i.hash();for(let c=0;c<n.length;c++){const d=n[c];w(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Se(e,d.path);o=o.updateChild(u,d.currentOutputSnapshotRaw)}const a=o.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Sa(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Gt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();no(t,ka(t.transactionQueueTree_,e)),Ra(t,t.transactionQueueTree_),ht(t.eventQueue_,e,d);for(let f=0;f<u.length;f++)Hn(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Ne("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}to(t,e)}},s)}function to(t,e){const n=pm(t,e),r=zr(n),i=hm(t,n);return cx(t,i,r),r}function cx(t,e,n){if(e.length===0)return;const r=[];let i=[];const s=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Se(n,l.path);let d=!1,u;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(Gt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Xv)d=!0,u="maxretry",i=i.concat(Gt(t.serverSyncTree_,l.currentWriteId,!0));else{const f=fm(t,l.path,s);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Ea("transaction failed: Data returned ",g,l.path);let x=be(g);typeof g=="object"&&g!=null&&gt(g,".priority")||(x=x.updatePriority(f.getPriority()));const T=l.currentWriteId,M=Ca(t),ae=rm(x,f,M);l.currentOutputSnapshotRaw=x,l.currentOutputSnapshotResolved=ae,l.currentWriteId=mm(t),s.splice(s.indexOf(T),1),i=i.concat(Zu(t.serverSyncTree_,l.path,ae,l.currentWriteId,l.applyLocally)),i=i.concat(Gt(t.serverSyncTree_,T,!0))}else d=!0,u="nodata",i=i.concat(Gt(t.serverSyncTree_,l.currentWriteId,!0))}ht(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}no(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Hn(r[a]);Ra(t,t.transactionQueueTree_)}function pm(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&$n(r)===void 0;)r=ka(r,n),e=Z(e),n=z(e);return r}function hm(t,e){const n=[];return gm(t,e,n),n.sort((r,i)=>r.order-i.order),n}function gm(t,e,n){const r=$n(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);eo(e,i=>{gm(t,i,n)})}function no(t,e){const n=$n(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,im(e,n.length>0?n:void 0)}eo(e,r=>{no(t,r)})}function bm(t,e){const n=zr(pm(t,e)),r=ka(t.transactionQueueTree_,e);return Bv(r,i=>{Ro(t,i)}),Ro(t,r),sm(r,i=>{Ro(t,i)}),n}function Ro(t,e){const n=$n(e);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(w(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(w(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(Gt(t.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?im(e,void 0):n.length=o+1,ht(t.eventQueue_,zr(e),i);for(let s=0;s<r.length;s++)Hn(r[s])}}/**
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
 */function dx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ux(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ne(`Invalid query segment '${n}' in query '${t}'`)}return e}const gc=function(t,e){const n=mx(t),r=n.namespace;n.domain==="firebase.com"&&rn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&rn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||w0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new O0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Q(n.pathString)}},mx=function(t){let e="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=dx(t.substring(d,u)));const f=ux(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(s=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const x=e.indexOf(".");r=e.substring(0,x).toLowerCase(),n=e.substring(x+1),o=r}"ns"in f&&(o=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
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
 */class _m{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class vm{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class fx{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Na{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:Ru(this._path)}get ref(){return new vt(this._repo,this._path)}get _queryIdentifier(){const e=Zl(this._queryParams),n=Zs(e);return n==="{}"?"default":n}get _queryObject(){return Zl(this._queryParams)}isEqual(e){if(e=bt(e),!(e instanceof Na))return!1;const n=this._repo===e._repo,r=ra(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+o_(this._path)}}class vt extends Na{constructor(e,n){super(e,n,new aa,!1)}get parent(){const e=Au(this._path);return e===null?null:new vt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Tr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Q(e),r=Ti(this.ref,e);return new Tr(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Tr(i,Ti(this.ref,r),se)))}hasChild(e){const n=new Q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bc(t,e){return t=bt(t),t._checkNotDeleted("ref"),e!==void 0?Ti(t._root,e):t._root}function Ti(t,e){return t=bt(t),z(t._path)===null?qv("child","path",e,!1):cm("child","path",e,!1),new vt(t._repo,ce(t._path,e))}function px(t,e){t=bt(t),Kv("set",t._path),Vv("set",e,t._path,!1);const n=new Si;return rx(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Aa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new _m("value",this,new Tr(e.snapshotNode,new vt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vm(this,e,n):null}matches(e){return e instanceof Aa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Pa{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vm(this,e,n):null}createEvent(e,n){w(e.childName!=null,"Child events should have a childName.");const r=Ti(new vt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new _m(e.type,this,new Tr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Pa?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function hx(t,e,n,r,i){let o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){const l=n,c=(d,u)=>{hc(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const s=new fx(n,o||void 0),a=e==="value"?new Aa(s):new Pa(e,s);return ox(t._repo,t,a),()=>hc(t._repo,t,a)}function gx(t,e,n,r){return hx(t,"value",e,n,r)}gv(vt);yv(vt);/**
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
 */const bx="FIREBASE_DATABASE_EMULATOR_HOST",ps={};let _x=!1;function vx(t,e,n,r,i){let o=r||t.options.databaseURL;o===void 0&&(t.options.projectId||rn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let s=gc(o,i),a=s.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[bx]),c?(l=!0,o=`http://${c}?ns=${a.namespace}`,s=gc(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const d=i&&l?new rs(rs.OWNER):new P0(t.name,t.options,e);Gv("Invalid Firebase Database URL",s),B(s.path)||rn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=wx(a,t,d,new A0(t.name,n));return new yx(u,t)}function xx(t,e){const n=ps[e];(!n||n[t.key]!==t)&&rn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sx(t),delete n[t.key]}function wx(t,e,n,r){let i=ps[e.name];i||(i={},ps[e.name]=i);let o=i[t.toURLString()];return o&&rn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Zv(t,_x,n,r),i[t.toURLString()]=o,o}class yx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ex(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rn("Cannot call "+e+" on a deleted database.")}}function _c(t=Nc(),e){return ws(t,"database").getImmediate({identifier:e})}/**
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
 */function kx(t){g0(Rr),Sn(new en("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return vx(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),Nt(Ll,Fl,t),Nt(Ll,Fl,"esm2017")}mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};kx();let No={};function Mt(t){if(t.length==0)return;speechSynthesis.cancel(),t in No||(No[t]=new SpeechSynthesisUtterance(t));let e=No[t];e.lang="zh-TW",t.length<=1?e.rate=1.6:e.rate=.8,speechSynthesis.speak(e)}var Oa=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const Ma=t=>(Ks("data-v-3dd3a396"),t=t(),Gs(),t),Ex={class:"container text-center rootbox"},Ix=Ma(()=>L("h3",{class:"h3"},"\u8F38\u5165\u5C31\u8A3A\u5E8F\u865F",-1)),Cx={class:"row g-0 justify-content-center"},Tx={class:"col col-3 box1"},Sx=["onclick"],Rx=Gi(" \xA0\xA0 "),Nx={key:0,class:"alert alert-warning text-center",role:"alert"},Ax=Ma(()=>L("b",{class:"display-2"},"\u8ACB\u8F38\u5165\u5C31\u8A3A\u5E8F\u865F",-1)),Px=[Ax],Ox={key:1,class:"alert alert-warning text-center",role:"alert"},Mx=Ma(()=>L("b",{class:"display-2"},"\u5C31\u8A3A\u5E8F\u865F\u4E0D\u80FD\u8D85\u904E\u4E09\u4F4D\u6578",-1)),Dx=[Mx],Lx=$i({__name:"ButtonGrid",emits:["onNumberChange","onSubmit"],setup(t,{emit:e}){let n="";const r=Oe(!1),i=Oe(!1);function o(l){console.log(l),i.value=n.length>=3,!i.value&&(Mt(""+l),n+=l,e("onNumberChange",n),r.value=n.length==0)}function s(){r.value=n.length==0,r.value||e("onSubmit"),Mt("\u78BA\u8A8D")}function a(){n="",e("onNumberChange",n),i.value=n.length>=3,Mt("\u91CD\u65B0\u8F38\u5165")}return(l,c)=>(le(),me(ve,null,[L("div",Ex,[Ix,(le(),me(ve,null,mi([[1,2,3],[4,5,6],[7,8,9],[0]],d=>L("div",Cx,[(le(!0),me(ve,null,mi(d,u=>(le(),me("div",Tx,[L("button",{class:"btn button1 btn-light",onclick:()=>o(u)},pr(u),9,Sx)]))),256))])),64))]),L("div",{class:"justify-content-center text-center"},[L("button",{class:"btn btn-primary mainbutton",onClick:s},"\u78BA\u8A8D"),Rx,L("button",{class:"btn btn-light mainbutton",onClick:a},"\u91CD\u65B0\u8F38\u5165")]),r.value?(le(),me("div",Nx,Px)):Jt("",!0),i.value?(le(),me("div",Ox,Dx)):Jt("",!0)],64))}});var Fx=Oa(Lx,[["__scopeId","data-v-3dd3a396"]]);const xm=t=>(Ks("data-v-2cfbeb5d"),t=t(),Gs(),t),zx={class:"rootbox"},Ux={class:"container text-center",style:{"max-width":"640px"}},Bx=xm(()=>L("h3",null,"\u9078\u64C7\u5C31\u8A3A\u9805\u76EE\uFF0C\u6700\u591A\u9078\u64C7\u5169\u9805",-1)),jx={class:"row"},Wx={class:"col text-center box"},Hx=["id","onClick","disabled","value","name"],$x=["for","value"],Vx={class:"justify-content-center text-center"},qx={key:0,class:"spinner-border spinner-border-sm"},Kx=Gi(" \u78BA\u8A8D"),Gx=Gi(" \xA0\xA0 "),Yx={key:0,class:"alert alert-warning text-center",role:"alert"},Qx=xm(()=>L("b",{class:"display-2"},"\u81F3\u5C11\u9078\u4E00\u500B\u5C31\u8A3A\u985E\u5225",-1)),Jx=[Qx],Xx=$i({__name:"WorkGroup",props:{workgroup:null},emits:["onWorkChange","onSubmit","onClear"],setup(t,{emit:e}){const n=Oe(!1),r=Oe(!1),i=Oe(new Set),o=Oe(!1);function s(c){i.value.has(c)?i.value.delete(c):(Mt(c),i.value.add(c)),r.value=i.value.size>=2,e("onWorkChange",[...i.value])}function a(){n.value=i.value.size<=0,!n.value&&(o.value||(Mt("\u78BA\u8A8D"),e("onSubmit",[...i.value]),o.value=!0))}function l(){i.value.clear(),r.value=!1,e("onWorkChange",[...i.value]),e("onClear"),Mt("\u8FD4\u56DE")}return(c,d)=>(le(),me(ve,null,[L("form",{onSubmit:d[0]||(d[0]=u0(()=>{},["prevent"]))},[L("div",zx,[L("div",Ux,[Bx,(le(!0),me(ve,null,mi(t.workgroup.values,(u,f)=>(le(),me("div",jx,[(le(!0),me(ve,null,mi(u.names,g=>(le(),me("div",Wx,[L("input",{type:"checkbox",class:"btn-check",id:g,onClick:()=>s(g),disabled:r.value&&!i.value.has(g),value:g,name:g},null,8,Hx),L("label",{class:"mylabel",style:Di(`--mycolor: ${u.color};`),for:g,value:g},pr(g),13,$x)]))),256))]))),256))])])],32),L("div",Vx,[L("button",{class:"btn btn-primary mainbutton",onClick:a,type:"button"},[o.value?(le(),me("span",qx)):Jt("",!0),Kx]),Gx,L("button",{class:"btn btn-light mainbutton",onClick:l,type:"reset"},"\u8FD4\u56DE")]),n.value?(le(),me("div",Yx,Jx)):Jt("",!0)],64))}});var Zx=Oa(Xx,[["__scopeId","data-v-2cfbeb5d"]]);const Ut=t=>(Ks("data-v-7e60ed10"),t=t(),Gs(),t),ew={class:"container text-center"},tw={class:"rootbox"},nw=Ut(()=>L("br",null,null,-1)),rw=Ut(()=>L("br",null,null,-1)),iw={class:"justify-content-center text-center"},ow=Ut(()=>L("h1",{class:"display-2"},"\u767B\u8A18\u6210\u529F",-1)),sw=Ut(()=>L("br",null,null,-1)),aw=Ut(()=>L("h2",{class:"display-3"},"\u5C31\u8A3A\u9805\u76EE\uFF1A",-1)),lw={class:"display-4 box3"},cw=Ut(()=>L("br",null,null,-1)),dw=Ut(()=>L("h2",{class:"display-3"},"\u767B\u8A18\u6642\u9593\uFF1A",-1)),uw={class:"display-4 box3"},mw=Ut(()=>L("br",null,null,-1)),fw=$i({__name:"FinishPage",props:{workitem:null},emits:["onSubmit"],setup(t,{emit:e}){Mt("\u767B\u8A18\u6210\u529F");function n(){e("onSubmit"),Mt("\u78BA\u8A8D")}const r=new Date,i=Oe(`${r.getHours()<=12?"\u4E0A\u5348":"\u4E0B\u5348"} ${r.getHours()%12}\u9EDE ${r.getMinutes()}\u5206`);return(o,s)=>(le(),me("div",ew,[L("div",tw,[nw,rw,L("div",iw,[ow,sw,aw,L("h3",lw,pr(t.workitem.work+(t.workitem.work2?" + "+t.workitem.work2:"")),1),cw,dw,L("h3",uw,pr(i.value),1),mw])]),L("button",{class:"btn btn-primary mainbutton",onClick:n},"\u78BA\u8A8D")]))}});var pw=Oa(fw,[["__scopeId","data-v-7e60ed10"]]);const hw={class:"row g-0 justify-content-center"},gw=L("br",null,null,-1),bw={class:"col justify-content-center text-center"},_w={class:"display-1 box0"},vw={key:0},xw={key:1},ww={key:2},yw=$i({__name:"App",setup(t){let e="";const n=Oe({});ad().onAuthStateChanged(x=>{x&&(e=x.uid,gx(bc(_c(),`users/${e}/workgroup`),C=>{let T=C.val();console.log(T.values);for(const M of T.values)M.color=M.color.replace("_","#");if(n.value=T,!C.exists())return console.error("data not exist.")},{onlyOnce:!0}))});const r=Oe("");Oe((new Date().getHours()<=12?"\u4E0A\u5348\u8A3A":"\u4E0B\u5348\u8A3A")+" XXX \u91AB\u5E2B");const i=Oe({});function o(x){r.value=x}const s=Oe(0),a=Oe([]);function l(){s.value=1}function c(x){console.log(x),a.value=x}function d(){s.value=0,r.value=""}function u(){f().then(()=>{s.value=2})}function f(){let x=Math.floor(new Date().getTime()/1e3);return i.value={patientSerial:parseInt(r.value),work:a.value[0]?a.value[0]:"",work2:a.value[1]?a.value[1]:"",startTime:x,finishTime:-1},console.log(i.value),px(bc(_c(),`users/${e}/worklist/${x}`),{...i.value})}function g(){r.value="",s.value=0,i.value={},a.value=[]}return(x,C)=>(le(),me("main",null,[L("div",hw,[gw,L("div",bw,[L("h1",_w,[L("b",null,"\u5C31\u8A3A\u5E8F\u865F: "+pr(r.value),1)])])]),s.value==0?(le(),me("div",vw,[ze(Fx,{onOnNumberChange:o,onOnSubmit:l})])):Jt("",!0),s.value==1?(le(),me("div",xw,[ze(Zx,{workgroup:n.value,onOnWorkChange:c,onOnClear:d,onOnSubmit:u},null,8,["workgroup"])])):Jt("",!0),s.value==2?(le(),me("div",ww,[ze(pw,{workitem:i.value,onOnSubmit:g},null,8,["workitem"])])):Jt("",!0)]))}});var kw="firebase",Ew="9.8.4";/**
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
 */Nt(kw,Ew,"app");const Iw={apiKey:"AIzaSyADZGGzgFgmEMTMPsZIamb_jYfOONqNeps",authDomain:"consultation-82f6f.firebaseapp.com",databaseURL:"https://consultation-82f6f-default-rtdb.firebaseio.com",projectId:"consultation-82f6f",storageBucket:"consultation-82f6f.appspot.com",messagingSenderId:"872033401709",appId:"1:872033401709:web:800482f5c58e4bc2963864",measurementId:"G-9WMHKM671T"};function Cw(){zf(Iw);const t=ad();Rp(t,"hscdev@gmail.com","hscdev").then(e=>{const n=e.user;console.log(n.email)}).catch(e=>{const n=e.code,r=e.message;console.log(n),console.log(r)})}Cw();p0(yw).mount("#app");
