if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.192f4944.css",revision:null},{url:"assets/index.41ff76fe.js",revision:null},{url:"index.html",revision:"4b078467993cb7e010a18326306c109d"},{url:"registerSW.js",revision:"8cafa5104df8fa09deb33be8c038ad95"},{url:"favicon.ico",revision:"7d0bd4235deae573ede2ccca1628a8fb"},{url:"manifest.webmanifest",revision:"8dc95ebe9de851e54c4ef9065ca5d572"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
