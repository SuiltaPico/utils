var K=Object.defineProperty,V=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var z=(e,t,r)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))H.call(t,r)&&z(e,r,t[r]);if($)for(var r of $(t))E.call(t,r)&&z(e,r,t[r]);return e},P=(e,t)=>V(e,w(t));import{a,c as q,h as y,u as F,e as L,b as D,X as b,a3 as _,a4 as M}from"./index.4094c5d8.js";const ee={dark:{type:Boolean,default:null}};function te(e,t){return a(()=>e.dark===null?t.dark.isActive:e.dark)}const v={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function ne(e,t=v){return a(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const T={size:{type:[Number,String],default:"1em"},color:String};function X(e){return{cSize:a(()=>e.size in v?`${v[e.size]}px`:e.size),classes:a(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var ae=q({name:"QSpinner",props:P(A({},T),{thickness:{type:Number,default:5}}),setup(e){const{cSize:t,classes:r}=X(e);return()=>y("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[y("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function se(e){if(Object(e.$parent)===e.$parent)return e.$parent;for(e=e.$.parent;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function j(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(r=>{j(e,r)}):e.add(t)}function ue(e){const t=new Set;return e.forEach(r=>{j(t,r)}),Array.from(t)}function G(e){return e.appContext.config.globalProperties.$router!==void 0}function C(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function R(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function J(e,t){for(const r in t){const n=t[r],i=e[r];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((o,u)=>o!==i[u]))return!1}return!0}function O(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function U(e,t){return Array.isArray(e)===!0?O(e,t):Array.isArray(t)===!0?O(t,e):e===t}function W(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(U(e[r],t[r])===!1)return!1;return!0}const ie={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function oe(e){const t=L(),{props:r,proxy:n}=t,i=G(t),o=a(()=>r.disable!==!0&&r.href!==void 0),u=a(()=>i===!0&&r.disable!==!0&&o.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),l=a(()=>{if(u.value===!0)try{return n.$router.resolve(r.to)}catch{}return null}),c=a(()=>l.value!==null),k=a(()=>o.value===!0||c.value===!0),N=a(()=>r.type==="a"||k.value===!0?"a":r.tag||e||"div"),Q=a(()=>o.value===!0?{href:r.href,target:r.target}:c.value===!0?{href:l.value.href,target:r.target}:{}),m=a(()=>{if(c.value===!1)return null;const{matched:s}=l.value,{length:f}=s,g=s[f-1];if(g===void 0)return-1;const h=n.$route.matched;if(h.length===0)return-1;const p=h.findIndex(R.bind(null,g));if(p>-1)return p;const S=C(s[f-2]);return f>1&&C(g)===S&&h[h.length-1].path!==S?h.findIndex(R.bind(null,s[f-2])):p}),d=a(()=>c.value===!0&&m.value>-1&&J(n.$route.params,l.value.params)),x=a(()=>d.value===!0&&m.value===n.$route.matched.length-1&&W(n.$route.params,l.value.params)),B=a(()=>c.value===!0?x.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":d.value===!0?` ${r.activeClass}`:"":"");function I(s){return r.disable===!0||s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.__qNavigate!==!0&&s.defaultPrevented===!0||s.button!==void 0&&s.button!==0||r.target==="_blank"?!1:(F(s),n.$router[r.replace===!0?"replace":"push"](r.to).catch(f=>f))}return{hasRouterLink:c,hasHrefLink:o,hasLink:k,linkTag:N,linkRoute:l,linkIsActive:d,linkIsExactActive:x,linkClass:B,linkProps:Q,navigateToRouterLink:I}}var le=q({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:r}}=L(),n=b(_);b(M,()=>{console.error("QPage needs to be child of QPageContainer")});const i=a(()=>{const u=(n.header.space===!0?n.header.size:0)+(n.footer.space===!0?n.footer.size:0);if(typeof e.styleFn=="function"){const l=n.isContainer.value===!0?n.containerHeight.value:r.screen.height;return e.styleFn(u,l)}return{minHeight:n.isContainer.value===!0?n.containerHeight.value-u+"px":r.screen.height===0?u!==0?`calc(100vh - ${u}px)`:"100vh":r.screen.height-u+"px"}}),o=a(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>y("main",{class:o.value,style:i.value},D(t.default))}});export{le as Q,te as a,T as b,X as c,ae as d,re as e,ne as f,oe as g,ie as h,se as i,ue as j,ee as u,G as v};
