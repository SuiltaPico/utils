var te=Object.defineProperty,ae=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var O=(e,t,a)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,C=(e,t)=>{for(var a in t||(t={}))ne.call(t,a)&&O(e,a,t[a]);if(M)for(var a of M(t))re.call(t,a)&&O(e,a,t[a]);return e},k=(e,t)=>ae(e,le(t));import{Q as ue}from"./QChip.bb4c0260.js";import{b as ie,u as se,t as oe,c as de,v as ce,e as ve,g as fe,w as me,x as ge,d as be,i as T,y as ye,o as W,Q as $,p as K,q as he,m as _e}from"./QCheckbox.2e72bbc2.js";import{c as G,r as b,a as c,h as w,e as J,u as Fe,d as Ce,A as we,w as xe,C as pe,D as P,E as Ve,F as g,H as Q,M as ke}from"./index.196a21f7.js";import{u as Se,e as Ae,a as qe,f as Be,Q as je}from"./QPage.43902365.js";var Ue=G({name:"QFile",inheritAttrs:!1,props:k(C(C(C({},ie),se),oe),{modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]}),emits:[...de,...ce],setup(e,{slots:t,emit:a,attrs:n}){const{proxy:r}=J(),u=ve(),d=b(null),y=b(!1),i=fe(e),{pickFiles:V,onDragover:x,onDragleave:_,processFiles:p,getDndNode:S}=me({editable:u.editable,dnd:y,getFileInput:L,addFilesToQueue:R}),A=ge(e),s=c(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),B=c(()=>T(s.value)),I=c(()=>s.value.map(l=>l.name).join(", ")),j=c(()=>ye(s.value.reduce((l,m)=>l+m.size,0))),E=c(()=>({totalSize:j.value,filesNumber:s.value.length,maxFiles:e.maxFiles})),N=c(()=>k(C({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:i.value},n),{id:u.targetUid.value,disabled:u.editable.value!==!0})),v=c(()=>e.multiple===!0&&e.append===!0);function o(l){const m=s.value.slice();m.splice(l,1),h(m)}function f(l){const m=s.value.findIndex(l);m>-1&&o(m)}function h(l){a("update:modelValue",e.multiple===!0?l:l[0])}function U(l){l.keyCode===13&&Fe(l)}function q(l){(l.keyCode===13||l.keyCode===32)&&V(l)}function L(){return d.value}function R(l,m){const F=p(l,m,s.value,v.value);F!==void 0&&((e.multiple===!0?e.modelValue&&F.every(ee=>s.value.includes(ee)):e.modelValue===F[0])||h(v.value===!0?s.value.concat(F):F))}function D(){return[w("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function Y(){if(t.file!==void 0)return s.value.length===0?D():s.value.map((m,F)=>t.file({index:F,file:m,ref:this}));if(t.selected!==void 0)return s.value.length===0?D():t.selected({files:s.value,ref:this});if(e.useChips===!0)return s.value.length===0?D():s.value.map((m,F)=>w(ue,{key:"file-"+F,removable:u.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{o(F)}},()=>w("span",{class:"ellipsis",textContent:m.name})));const l=e.displayValue!==void 0?e.displayValue:I.value;return l.length>0?[w("div",{class:e.inputClass,style:e.inputStyle,textContent:l})]:D()}function Z(){const l=k(C(C({ref:d},N.value),A.value),{class:"q-field__input fit absolute-full cursor-pointer",onChange:R});return e.multiple===!0&&(l.multiple=!0),w("input",l)}return Object.assign(u,{fieldClass:{value:"q-file q-field--auto-height"},emitValue:h,hasValue:B,inputRef:d,innerValue:s,floatingLabel:c(()=>B.value===!0||T(e.displayValue)),computedCounter:c(()=>{if(e.counterLabel!==void 0)return e.counterLabel(E.value);const l=e.maxFiles;return`${s.value.length}${l!==void 0?" / "+l:""} (${j.value})`}),getControlChild:()=>S("file"),getControl:()=>{const l={ref:u.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return u.editable.value===!0&&Object.assign(l,{onDragover:x,onDragleave:_,onKeydown:U,onKeyup:q}),w("div",l,[Z()].concat(Y()))}}),Object.assign(r,{removeAtIndex:o,removeFile:f,getNativeElement:()=>d.value}),be(u)}});const De={xs:2,sm:4,md:6,lg:10,xl:14};function H(e,t,a){return{transform:t===!0?`translateX(${a.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var X=G({name:"QLinearProgress",props:k(C(C({},Se),Ae),{value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean}),setup(e,{slots:t}){const{proxy:a}=J(),n=qe(e,a.$q),r=Be(e,De),u=c(()=>e.indeterminate===!0||e.query===!0),d=c(()=>e.reverse!==e.query),y=c(()=>k(C({},r.value!==null?r.value:{}),{"--q-linear-progress-speed":`${e.animationSpeed}ms`})),i=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),V=c(()=>H(e.buffer!==void 0?e.buffer:1,d.value,a.$q)),x=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${n.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),_=c(()=>H(u.value===!0?1:e.value,d.value,a.$q)),p=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${u.value===!0?"in":""}determinate`),S=c(()=>({width:`${e.value*100}%`})),A=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const s=[w("div",{class:x.value,style:V.value}),w("div",{class:p.value,style:_.value})];return e.stripe===!0&&u.value===!1&&s.push(w("div",{class:A.value,style:S.value})),w("div",{class:i.value,style:y.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ce(t.default,s))}}}),$e=Pe;function Pe(e,t){t=t||{};var a=e.numberOfChannels,n=e.sampleRate,r=t.float32?3:1,u=r===3?32:16,d;return a===2?d=ze(e.getChannelData(0),e.getChannelData(1)):d=e.getChannelData(0),Qe(d,r,n,a,u)}function Qe(e,t,a,n,r){var u=r/8,d=n*u,y=new ArrayBuffer(44+e.length*u),i=new DataView(y);return z(i,0,"RIFF"),i.setUint32(4,36+e.length*u,!0),z(i,8,"WAVE"),z(i,12,"fmt "),i.setUint32(16,16,!0),i.setUint16(20,t,!0),i.setUint16(22,n,!0),i.setUint32(24,a,!0),i.setUint32(28,a*d,!0),i.setUint16(32,d,!0),i.setUint16(34,r,!0),z(i,36,"data"),i.setUint32(40,e.length*u,!0),t===1?Ee(i,44,e):Ie(i,44,e),y}function ze(e,t){for(var a=e.length+t.length,n=new Float32Array(a),r=0,u=0;r<a;)n[r++]=e[u],n[r++]=t[u],u++;return n}function Ie(e,t,a){for(var n=0;n<a.length;n++,t+=4)e.setFloat32(t,a[n],!0)}function Ee(e,t,a){for(var n=0;n<a.length;n++,t+=2){var r=Math.max(-1,Math.min(1,a[n]));e.setInt16(t,r<0?r*32768:r*32767,!0)}}function z(e,t,a){for(var n=0;n<a.length;n++)e.setUint8(t+n,a.charCodeAt(n))}const Ne={class:"row col-12 q-gutter-md justify-center"},Le={class:"row col-12 q-gutter-md justify-center"},Re={class:"text-body"},Me={class:"row col-12 q-gutter-md justify-center"},Xe=we({name:"file_sounds",setup(e){const t=b(),a=new FileReader,n=b(0),r=b(0);let u=new ArrayBuffer(0);const d=b(new Int8Array),y=new AudioContext;b(!0);const i=b(),V=b(new Float32Array),x=b(44100),_=b(1),p=b(!1),S=`
function normalize(arr){
  // Peak volume detection
  let min = 1, max = -1
  arr.forEach((v,i)=>{
    if(v < min) min = v
    if(v > max) max = v
  })
  const diff = max - min
  if(diff === 0) return
  arr.forEach((v,i)=>{
    arr[i] = (arr[i] - min) / diff * 2 - 1
  })
}

onmessage = (e) => {
  let data = e.data
  if(data.name === "render") {
    let { sample_byte, ta, length, use_normalizer } = data
    let result = new Float32Array(length)
    if(sample_byte === 1){
      for(let i = 0; i < length; i++){
        if(i % 20000 === 0){
          postMessage({ name: "progress", value: i / length })
        }
        result[i] = ta[i] / (2 ** 7 - (result[i] > 0 ? 1 : 0))
      }
    } else {
      for(let i = 0; i < length; i++){
        let temp = 0
        for(let j = 0; j < sample_byte; j++){
          temp += ta[i * sample_byte + j]
          temp <<= 8
        }
        temp >>= 8
        if(i % 20000 === 0){
          postMessage({ name: "progress", value: i / length })
        }
        result[i] = temp / (2 ** (sample_byte * 8 - 1) - (result[i] > 0 ? 1 : 0))
      }
    }
    if(use_normalizer){
      normalize(result)
    }
    postMessage({ name: "render_finish", result })
  }
};
`,A=new Blob([S]),s=new Worker(URL.createObjectURL(A));s.onmessage=v=>{var f;let o=v.data;if(o.name==="progress")r.value=o.value;else if(o.name==="render_finish"){r.value=1;try{(f=i.value)==null||f.stop()}catch{}let h=o.result;V.value=h;const U=y.createBuffer(1,d.value.length,x.value);U.copyToChannel(h,0),console.log(h);const q=y.createBufferSource();q.buffer=U,q.connect(y.destination),i.value=q}},xe(t,()=>{let v=t.value;v&&(a.onprogress=o=>{n.value=o.loaded/o.total},a.onload=B,a.readAsArrayBuffer(v))});function B(){n.value=1,u=a.result,d.value=new Int8Array(u)}function I(){s.postMessage({name:"render",sample_byte:_.value,ta:d.value,length:d.value.length/_.value,use_normalizer:p.value})}function j(){let v=i.value;v&&v.start(),r.value=0}function E(){var v;(v=i.value)==null||v.stop()}function N(){const v=y.createBuffer(1,d.value.length/_.value,x.value);v.copyToChannel(V.value,0);const o=$e(v,{float32:!0});console.log(new Int8Array(o));const f=new Blob([o],{type:"audio/x-wav"}),h=document.createElement("a");h.href=window.URL.createObjectURL(f),h.download="audio.wav",h.click()}return(v,o)=>(Ve(),pe(je,{class:"row justify-center text-left"},{default:P(()=>[g(_e,{class:"col-sm-11 col-md-10"},{default:P(()=>[g(W,{class:"q-gutter-md row justify-center"},{default:P(()=>[g(Ue,{class:"col-10",outlined:"",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=f=>t.value=f),label:"\u6587\u4EF6"},null,8,["modelValue"]),g(X,{class:"col-10",value:n.value,"animation-speed":100,color:n.value!==1?"primary":"positive",style:{height:"4px"}},null,8,["value","color"]),g(X,{class:"col-10",value:r.value,"animation-speed":0,color:r.value!==1?"primary":"positive",style:{height:"4px"}},null,8,["value","color"])]),_:1}),g(W,{class:"q-gutter-md row justify-center"},{default:P(()=>[Q("div",Ne,[g($,{label:"\u6E32\u67D3",onClick:I,disable:!t.value},null,8,["disable"]),g(K,{label:"\u91C7\u6837\u7387",modelValue:x.value,"onUpdate:modelValue":o[1]||(o[1]=f=>x.value=f)},null,8,["modelValue"]),g(K,{label:"\u4F4D",modelValue:_.value,"onUpdate:modelValue":o[2]||(o[2]=f=>_.value=f)},null,8,["modelValue"]),g(he,{label:"\u54CD\u5EA6\u6807\u51C6\u5316",modelValue:p.value,"onUpdate:modelValue":o[3]||(o[3]=f=>p.value=f)},null,8,["modelValue"])]),Q("div",Le,[g($,{label:"\u64AD\u653E",onClick:j,disable:r.value!==1},null,8,["disable"]),g($,{label:"\u505C\u6B62",onClick:E,disable:!t.value},null,8,["disable"]),Q("div",Re,"\u97F3\u9891\u65F6\u957F\uFF1A"+ke((d.value.length/x.value/_.value).toFixed(2))+" s",1)]),Q("div",Me,[g($,{label:"\u751F\u6210\u4E3A WAV",onClick:N,disable:r.value!==1},null,8,["disable"])])]),_:1})]),_:1})]),_:1}))}});export{Xe as default};
