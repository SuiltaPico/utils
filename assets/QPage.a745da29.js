import{h as u,d as O,q as C,t as b,k as I,G as K,L as x,Y as B,Z as H}from"./index.376b1bef.js";const z={dark:{type:Boolean,default:null}};function D(e,r){return u(()=>e.dark===null?r.dark.isActive:e.dark)}function Q(e){return e.appContext.config.globalProperties.$router!==void 0}function A(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function P(e,r){return(e.aliasOf||e)===(r.aliasOf||r)}function j(e,r){for(const t in r){const a=r[t],o=e[t];if(typeof a=="string"){if(a!==o)return!1}else if(Array.isArray(o)===!1||o.length!==a.length||a.some((l,s)=>l!==o[s]))return!1}return!0}function $(e,r){return Array.isArray(r)===!0?e.length===r.length&&e.every((t,a)=>t===r[a]):e.length===1&&e[0]===r}function F(e,r){return Array.isArray(e)===!0?$(e,r):Array.isArray(r)===!0?$(r,e):e===r}function V(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const t in e)if(F(e[t],r[t])===!1)return!1;return!0}const E={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function M(e){const r=C(),{props:t,proxy:a}=r,o=Q(r),l=u(()=>t.disable!==!0&&t.href!==void 0),s=u(()=>o===!0&&t.disable!==!0&&l.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),i=u(()=>{if(s.value===!0)try{return a.$router.resolve(t.to)}catch{}return null}),c=u(()=>i.value!==null),p=u(()=>l.value===!0||c.value===!0),R=u(()=>t.type==="a"||p.value===!0?"a":t.tag||e||"div"),L=u(()=>l.value===!0?{href:t.href,target:t.target}:c.value===!0?{href:i.value.href,target:t.target}:{}),y=u(()=>{if(c.value===!1)return null;const{matched:n}=i.value,{length:f}=n,g=n[f-1];if(g===void 0)return-1;const h=a.$route.matched;if(h.length===0)return-1;const d=h.findIndex(P.bind(null,g));if(d>-1)return d;const m=A(n[f-2]);return f>1&&A(g)===m&&h[h.length-1].path!==m?h.findIndex(P.bind(null,n[f-2])):d}),v=u(()=>c.value===!0&&y.value>-1&&j(a.$route.params,i.value.params)),k=u(()=>v.value===!0&&y.value===a.$route.matched.length-1&&V(a.$route.params,i.value.params)),S=u(()=>c.value===!0?k.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":v.value===!0?` ${t.activeClass}`:"":"");function q(n){return t.disable===!0||n.metaKey||n.altKey||n.ctrlKey||n.shiftKey||n.__qNavigate!==!0&&n.defaultPrevented===!0||n.button!==void 0&&n.button!==0||t.target==="_blank"?!1:(O(n),a.$router[t.replace===!0?"replace":"push"](t.to).catch(f=>f))}return{hasRouterLink:c,hasHrefLink:l,hasLink:p,linkTag:R,linkRoute:i,linkIsActive:v,linkIsExactActive:k,linkClass:S,linkProps:L,navigateToRouterLink:q}}var T=b({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:r}){const{proxy:{$q:t}}=C(),a=x(B);x(H,()=>{console.error("QPage needs to be child of QPageContainer")});const o=u(()=>{const s=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const i=a.isContainer.value===!0?a.containerHeight.value:t.screen.height;return e.styleFn(s,i)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-s+"px":t.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":t.screen.height-s+"px"}}),l=u(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>I("main",{class:l.value,style:o.value},K(r.default))}});export{T as Q,z as a,M as b,E as c,D as u};
