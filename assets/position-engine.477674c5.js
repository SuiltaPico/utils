import{j as z,p as w}from"./QDialog.858027d0.js";import{r as E,x as k,u as y,i as S,R as H,w as m,B as $,o as M,e as q,S as A,W as x,a0 as B,af as R}from"./index.44b791df.js";const N={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function O({showing:e,avoidEmit:t,configureAnchorEl:a}){const{props:l,proxy:n,emit:s}=q(),i=E(null);let c;function u(o){return i.value===null?!1:o===void 0||o.touches===void 0||o.touches.length<=1}const r={};a===void 0&&(Object.assign(r,{hide(o){n.hide(o)},toggle(o){n.toggle(o),o.qAnchorHandled=!0},toggleKey(o){k(o,13)===!0&&r.toggle(o)},contextClick(o){n.hide(o),y(o),S(()=>{n.show(o),o.qAnchorHandled=!0})},prevent:y,mobileTouch(o){if(r.mobileCleanup(o),u(o)!==!0)return;n.hide(o),i.value.classList.add("non-selectable");const h=o.target;H(r,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{n.show(o),o.qAnchorHandled=!0},300)},mobileCleanup(o){i.value.classList.remove("non-selectable"),clearTimeout(c),e.value===!0&&o!==void 0&&z()}}),a=function(o=l.contextMenu){if(l.noParentEvent===!0||i.value===null)return;let h;o===!0?n.$q.platform.is.mobile===!0?h=[[i.value,"touchstart","mobileTouch","passive"]]:h=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:h=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],H(r,"anchor",h)});function d(){A(r,"anchor")}function C(o){for(i.value=o;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;a()}function b(){if(l.target===!1||l.target==="")i.value=null;else if(l.target===!0)C(n.$el.parentNode);else{let o=l.target;if(typeof l.target=="string")try{o=document.querySelector(l.target)}catch{o=void 0}o!=null?(i.value=o.$el||o,a()):(i.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return m(()=>l.contextMenu,o=>{i.value!==null&&(d(),a(o))}),m(()=>l.target,()=>{i.value!==null&&d(),b()}),m(()=>l.noParentEvent,o=>{i.value!==null&&(o===!0?d():a())}),$(()=>{b(),t!==!0&&l.modelValue===!0&&i.value===null&&s("update:modelValue",!1)}),M(()=>{clearTimeout(c),d()}),{anchorEl:i,canShow:u,anchorEvents:r}}function D(e,t){const a=E(null);let l;function n(c,u){const r=`${u!==void 0?"add":"remove"}EventListener`,d=u!==void 0?u:l;c!==window&&c[r]("scroll",d,x.passive),window[r]("scroll",d,x.passive),l=u}function s(){a.value!==null&&(n(a.value),a.value=null)}const i=m(()=>e.noParentEvent,()=>{a.value!==null&&(s(),t())});return M(i),{localScrollTarget:a,unconfigureScrollTarget:s,changeScrollEvent:n}}let L;const{notPassiveCapture:v}=x,f=[];function p(e){clearTimeout(L);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let a=w.length-1;for(;a>=0;){const l=w[a].$;if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;a--}for(let l=f.length-1;l>=0;l--){const n=f[l];if((n.anchorEl.value===null||n.anchorEl.value.contains(t)===!1)&&(t===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(t)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function F(e){f.push(e),f.length===1&&(document.addEventListener("mousedown",p,v),document.addEventListener("touchstart",p,v))}function Q(e){const t=f.findIndex(a=>a===e);t>-1&&(f.splice(t,1),f.length===0&&(clearTimeout(L),document.removeEventListener("mousedown",p,v),document.removeEventListener("touchstart",p,v)))}let W,T;function U(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function X(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const g={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{g[`${e}#ltr`]=e,g[`${e}#rtl`]=e});function Y(e,t){const a=e.split(" ");return{vertical:a[0],horizontal:g[`${a[1]}#${t===!0?"rtl":"ltr"}`]}}function j(e,t){let{top:a,left:l,right:n,bottom:s,width:i,height:c}=e.getBoundingClientRect();return t!==void 0&&(a-=t[1],l-=t[0],s+=t[1],n+=t[0],i+=t[0],c+=t[1]),{top:a,left:l,right:n,bottom:s,width:i,height:c,middle:l+(n-l)/2,center:a+(s-a)/2}}function P(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function G(e){if(B.is.ios===!0&&window.visualViewport!==void 0){const c=document.body.style,{offsetLeft:u,offsetTop:r}=window.visualViewport;u!==W&&(c.setProperty("--q-pe-left",u+"px"),W=u),r!==T&&(c.setProperty("--q-pe-top",r+"px"),T=r)}let t;const{scrollLeft:a,scrollTop:l}=e.el;if(e.absoluteOffset===void 0)t=j(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:c,left:u}=e.anchorEl.getBoundingClientRect(),r=c+e.absoluteOffset.top,d=u+e.absoluteOffset.left;t={top:r,left:d,width:1,height:1,right:d+1,center:r,middle:d,bottom:r+1}}let n={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(n.minWidth=t.width+"px",e.cover===!0&&(n.minHeight=t.height+"px")),Object.assign(e.el.style,n);const s=P(e.el),i={top:t[e.anchorOrigin.vertical]-s[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-s[e.selfOrigin.horizontal]};V(i,t,s,e.anchorOrigin,e.selfOrigin),n={top:i.top+"px",left:i.left+"px"},i.maxHeight!==void 0&&(n.maxHeight=i.maxHeight+"px",t.height>i.maxHeight&&(n.minHeight=n.maxHeight)),i.maxWidth!==void 0&&(n.maxWidth=i.maxWidth+"px",t.width>i.maxWidth&&(n.minWidth=n.maxWidth)),Object.assign(e.el.style,n),e.el.scrollTop!==l&&(e.el.scrollTop=l),e.el.scrollLeft!==a&&(e.el.scrollLeft=a)}function V(e,t,a,l,n){const s=a.bottom,i=a.right,c=R(),u=window.innerHeight-c,r=document.body.clientWidth;if(e.top<0||e.top+s>u)if(n.vertical==="center")e.top=t[l.vertical]>u/2?Math.max(0,u-s):0,e.maxHeight=Math.min(s,u);else if(t[l.vertical]>u/2){const d=Math.min(u,l.vertical==="center"?t.center:l.vertical===n.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,d),e.top=Math.max(0,d-s)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===n.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,u-e.top);if(e.left<0||e.left+i>r)if(e.maxWidth=Math.min(i,r),n.horizontal==="middle")e.left=t[l.horizontal]>r/2?Math.max(0,r-i):0;else if(t[l.horizontal]>r/2){const d=Math.min(r,l.horizontal==="middle"?t.middle:l.horizontal===n.horizontal?t.right:t.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===n.horizontal?t.left:t.right),e.maxWidth=Math.min(i,r-e.left)}export{X as a,D as b,O as c,F as d,Y as p,Q as r,G as s,N as u,U as v};
