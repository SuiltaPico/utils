var m=Object.defineProperty,p=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var r=(e,t,l)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,i=(e,t)=>{for(var l in t||(t={}))h.call(t,l)&&r(e,l,t[l]);if(o)for(var l of o(t))_.call(t,l)&&r(e,l,t[l]);return e},n=(e,t)=>p(e,b(t));import{c,a,h as d,b as u}from"./index.155e7159.js";import{p as f,q as x}from"./QInput.49990c1f.js";var C=c({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=a(()=>parseInt(e.lines,10)),s=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),v=a(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>d("div",{style:v.value,class:s.value},u(t.default))}});let y=!1;{const e=document.createElement("div"),t=document.createElement("div");e.setAttribute("dir","rtl"),e.style.width="1px",e.style.height="1px",e.style.overflow="auto",t.style.width="1000px",t.style.height="1px",document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,y=e.scrollLeft>=0,e.remove()}var A=c({name:"QCardActions",props:n(i({},f),{vertical:Boolean}),setup(e,{slots:t}){const l=x(e),s=a(()=>`q-card__actions ${l.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>d("div",{class:s.value},u(t.default))}});export{C as Q,A as a,y as r};
