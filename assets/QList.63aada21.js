var Q=Object.defineProperty,$=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var g=(e,t,n)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>{for(var n in t||(t={}))N.call(t,n)&&g(e,n,t[n]);if(q)for(var n of q(t))A.call(t,n)&&g(e,n,t[n]);return e},d=(e,t)=>$(e,I(t));import{u as y,h as F,a as h,g as H}from"./QPage.6d90e546.js";import{c as L,r as v,a as u,h as f,x as j,s as M,a2 as O,e as S,w as U,i as z,b as G}from"./index.44b791df.js";var X=L({name:"QItem",props:d(o(o({},y),F),{tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:i}}=S(),c=h(e,i),{hasRouterLink:x,hasLink:m,linkProps:B,linkClass:C,linkTag:E,navigateToRouterLink:R}=H(),s=v(null),r=v(null),b=u(()=>e.clickable===!0||m.value===!0||e.tag==="label"),l=u(()=>e.disable!==!0&&b.value===!0),w=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(c.value===!0?" q-item--dark":"")+(m.value===!0&&e.active===null?C.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(l.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),D=u(()=>{if(e.insetLevel===void 0)return null;const a=i.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+e.insetLevel*56+"px"}});function T(a){l.value===!0&&(r.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===s.value?r.value.focus():document.activeElement===r.value&&s.value.focus()),x.value===!0&&R(a),n("click",a))}function K(a){if(l.value===!0&&j(a,13)===!0){M(a),a.qKeyEvent=!0;const k=new MouseEvent("click",a);k.qKeyEvent=!0,s.value.dispatchEvent(k)}n("keyup",a)}function P(){const a=O(t.default,[]);return l.value===!0&&a.unshift(f("div",{class:"q-focus-helper",tabindex:-1,ref:r})),a}return()=>{const a={ref:s,class:w.value,style:D.value,onClick:T,onKeyup:K};return l.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,B.value)):b.value===!0&&(a["aria-disabled"]="true"),f(E.value,a,P())}}});const Y={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Z(e,t){const n=v(t.value);return U(t,i=>{z(()=>{n.value=i})}),{transition:u(()=>"q-transition--"+(n.value===!0?e.transitionHide:e.transitionShow)),transitionStyle:u(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}var _=L({name:"QList",props:d(o({},y),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:t}){const n=S(),i=h(e,n.proxy.$q),c=u(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>f("div",{class:c.value},G(t.default))}});export{X as Q,Z as a,_ as b,Y as u};