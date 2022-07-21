var C=Object.defineProperty,_=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var h=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))F.call(t,r)&&h(e,r,t[r]);if(m)for(var r of m(t))U.call(t,r)&&h(e,r,t[r]);return e},g=(e,t)=>_(e,x(t));import{u as B,e as D,a as A,f as P}from"./QPage.6d90e546.js";import{c as z,a as u,h as c,d as I,e as M}from"./index.44b791df.js";const W={xs:2,sm:4,md:6,lg:10,xl:14};function y(e,t,r){return{transform:t===!0?`translateX(${r.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var X=z({name:"QLinearProgress",props:g(v(v({},B),D),{value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean}),setup(e,{slots:t}){const{proxy:r}=M(),a=A(e,r.$q),l=P(e,W),s=u(()=>e.indeterminate===!0||e.query===!0),i=u(()=>e.reverse!==e.query),o=u(()=>g(v({},l.value!==null?l.value:{}),{"--q-linear-progress-speed":`${e.animationSpeed}ms`})),n=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),q=u(()=>y(e.buffer!==void 0?e.buffer:1,i.value,r.$q)),b=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${a.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),k=u(()=>y(s.value===!0?1:e.value,i.value,r.$q)),S=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${s.value===!0?"in":""}determinate`),$=u(()=>({width:`${e.value*100}%`})),w=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const f=[c("div",{class:b.value,style:q.value}),c("div",{class:S.value,style:k.value})];return e.stripe===!0&&s.value===!1&&f.push(c("div",{class:w.value,style:$.value})),c("div",{class:n.value,style:o.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},I(t.default,f))}}}),j=N;function N(e,t){t=t||{};var r=e.numberOfChannels,a=e.sampleRate,l=t.float32?3:1,s=l===3?32:16,i;return r===2?i=T(e.getChannelData(0),e.getChannelData(1)):i=e.getChannelData(0),Q(i,l,a,r,s)}function Q(e,t,r,a,l){var s=l/8,i=a*s,o=new ArrayBuffer(44+e.length*s),n=new DataView(o);return d(n,0,"RIFF"),n.setUint32(4,36+e.length*s,!0),d(n,8,"WAVE"),d(n,12,"fmt "),n.setUint32(16,16,!0),n.setUint16(20,t,!0),n.setUint16(22,a,!0),n.setUint32(24,r,!0),n.setUint32(28,r*i,!0),n.setUint16(32,i,!0),n.setUint16(34,l,!0),d(n,36,"data"),n.setUint32(40,e.length*s,!0),t===1?R(n,44,e):V(n,44,e),o}function T(e,t){for(var r=e.length+t.length,a=new Float32Array(r),l=0,s=0;l<r;)a[l++]=e[s],a[l++]=t[s],s++;return a}function V(e,t,r){for(var a=0;a<r.length;a++,t+=4)e.setFloat32(t,r[a],!0)}function R(e,t,r){for(var a=0;a<r.length;a++,t+=2){var l=Math.max(-1,Math.min(1,r[a]));e.setInt16(t,l<0?l*32768:l*32767,!0)}}function d(e,t,r){for(var a=0;a<r.length;a++)e.setUint8(t+a,r.charCodeAt(a))}export{X as Q,j as a};
