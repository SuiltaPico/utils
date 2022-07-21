var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var M=(e,t,u)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,_=(e,t)=>{for(var u in t||(t={}))ee.call(t,u)&&M(e,u,t[u]);if(R)for(var u of R(t))le.call(t,u)&&M(e,u,t[u]);return e},B=(e,t)=>Y(e,Z(t));import{Q as te}from"./QChip.bae57319.js";import{b as ae,u as ne,t as ue,c as ie,v as oe,e as se,g as re,w as de,x as ce,d as fe,i as T,y as me,l as W,Q as E,m as $,o as ve,k as be}from"./QCheckbox.84177275.js";import{c as ge,r as d,a as g,h as w,e as pe,u as ye,A as _e,w as he,C as Fe,D,E as Ce,F as r,H as I,M as we}from"./index.44b791df.js";import{Q as K,a as xe}from"./index.9344d58e.js";import{Q as Ve}from"./QPage.6d90e546.js";var Ae=ge({name:"QFile",inheritAttrs:!1,props:B(_(_(_({},ae),ne),ue),{modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]}),emits:[...ie,...oe],setup(e,{slots:t,emit:u,attrs:h}){const{proxy:b}=pe(),c=se(),f=d(null),F=d(!1),C=re(e),{pickFiles:A,onDragover:y,onDragleave:p,processFiles:x,getDndNode:q}=de({editable:c.editable,dnd:F,getFileInput:N,addFilesToQueue:O}),z=ce(e),n=g(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),j=g(()=>T(n.value)),L=g(()=>n.value.map(l=>l.name).join(", ")),k=g(()=>me(n.value.reduce((l,s)=>l+s.size,0))),P=g(()=>({totalSize:k.value,filesNumber:n.value.length,maxFiles:e.maxFiles})),U=g(()=>B(_({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:C.value},h),{id:c.targetUid.value,disabled:c.editable.value!==!0})),i=g(()=>e.multiple===!0&&e.append===!0);function a(l){const s=n.value.slice();s.splice(l,1),m(s)}function o(l){const s=n.value.findIndex(l);s>-1&&a(s)}function m(l){u("update:modelValue",e.multiple===!0?l:l[0])}function S(l){l.keyCode===13&&ye(l)}function V(l){(l.keyCode===13||l.keyCode===32)&&A(l)}function N(){return f.value}function O(l,s){const v=x(l,s,n.value,i.value);v!==void 0&&((e.multiple===!0?e.modelValue&&v.every(J=>n.value.includes(J)):e.modelValue===v[0])||m(i.value===!0?n.value.concat(v):v))}function Q(){return[w("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function H(){if(t.file!==void 0)return n.value.length===0?Q():n.value.map((s,v)=>t.file({index:v,file:s,ref:this}));if(t.selected!==void 0)return n.value.length===0?Q():t.selected({files:n.value,ref:this});if(e.useChips===!0)return n.value.length===0?Q():n.value.map((s,v)=>w(te,{key:"file-"+v,removable:c.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{a(v)}},()=>w("span",{class:"ellipsis",textContent:s.name})));const l=e.displayValue!==void 0?e.displayValue:L.value;return l.length>0?[w("div",{class:e.inputClass,style:e.inputStyle,textContent:l})]:Q()}function G(){const l=B(_(_({ref:f},U.value),z.value),{class:"q-field__input fit absolute-full cursor-pointer",onChange:O});return e.multiple===!0&&(l.multiple=!0),w("input",l)}return Object.assign(c,{fieldClass:{value:"q-file q-field--auto-height"},emitValue:m,hasValue:j,inputRef:f,innerValue:n,floatingLabel:g(()=>j.value===!0||T(e.displayValue)),computedCounter:g(()=>{if(e.counterLabel!==void 0)return e.counterLabel(P.value);const l=e.maxFiles;return`${n.value.length}${l!==void 0?" / "+l:""} (${k.value})`}),getControlChild:()=>q("file"),getControl:()=>{const l={ref:c.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return c.editable.value===!0&&Object.assign(l,{onDragover:y,onDragleave:p,onKeydown:S,onKeyup:V}),w("div",l,[G()].concat(H()))}}),Object.assign(b,{removeAtIndex:a,removeFile:o,getNativeElement:()=>f.value}),fe(c)}});const je={class:"row col-12 q-gutter-md justify-center"},ke={class:"row col-12 q-gutter-md justify-center"},Se={class:"text-body"},Qe={class:"row col-12 q-gutter-md justify-center"},Le=_e({name:"file_sounds",setup(e){const t=d(),u=new FileReader,h=d(0),b=d(0);let c=new ArrayBuffer(0);const f=d(new Int8Array),F=new AudioContext;d(!0);const C=d(),A=d(new Float32Array),y=d(44100),p=d(1),x=d(!1),q=`
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
`,z=new Blob([q]),n=new Worker(URL.createObjectURL(z));n.onmessage=i=>{var o;let a=i.data;if(a.name==="progress")b.value=a.value;else if(a.name==="render_finish"){b.value=1;try{(o=C.value)==null||o.stop()}catch{}let m=a.result;A.value=m;const S=F.createBuffer(1,f.value.length,y.value);S.copyToChannel(m,0),console.log(m);const V=F.createBufferSource();V.buffer=S,V.connect(F.destination),C.value=V}},he(t,()=>{let i=t.value;i&&(u.onprogress=a=>{h.value=a.loaded/a.total},u.onload=j,u.readAsArrayBuffer(i))});function j(){h.value=1,c=u.result,f.value=new Int8Array(c)}function L(){n.postMessage({name:"render",sample_byte:p.value,ta:f.value,length:f.value.length/p.value,use_normalizer:x.value})}function k(){let i=C.value;i&&i.start(),b.value=0}function P(){var i;(i=C.value)==null||i.stop()}function U(){const i=F.createBuffer(1,f.value.length/p.value,y.value);i.copyToChannel(A.value,0);const a=xe(i,{float32:!0});console.log(new Int8Array(a));const o=new Blob([a],{type:"audio/x-wav"}),m=document.createElement("a");m.href=window.URL.createObjectURL(o),m.download="audio.wav",m.click()}return(i,a)=>(Ce(),Fe(Ve,{class:"row justify-center text-left"},{default:D(()=>[r(be,{class:"col-sm-11 col-md-10"},{default:D(()=>[r(W,{class:"q-gutter-md row justify-center"},{default:D(()=>[r(Ae,{class:"col-10",outlined:"",modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=o=>t.value=o),label:"\u6587\u4EF6"},null,8,["modelValue"]),r(K,{class:"col-10",value:h.value,"animation-speed":100,color:h.value!==1?"primary":"positive",style:{height:"4px"}},null,8,["value","color"]),r(K,{class:"col-10",value:b.value,"animation-speed":0,color:b.value!==1?"primary":"positive",style:{height:"4px"}},null,8,["value","color"])]),_:1}),r(W,{class:"q-gutter-md row justify-center"},{default:D(()=>[I("div",je,[r(E,{label:"\u6E32\u67D3",onClick:L,disable:!t.value},null,8,["disable"]),r($,{label:"\u91C7\u6837\u7387",modelValue:y.value,"onUpdate:modelValue":a[1]||(a[1]=o=>y.value=o)},null,8,["modelValue"]),r($,{label:"\u4F4D",modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=o=>p.value=o)},null,8,["modelValue"]),r(ve,{label:"\u54CD\u5EA6\u6807\u51C6\u5316",modelValue:x.value,"onUpdate:modelValue":a[3]||(a[3]=o=>x.value=o)},null,8,["modelValue"])]),I("div",ke,[r(E,{label:"\u64AD\u653E",onClick:k,disable:b.value!==1},null,8,["disable"]),r(E,{label:"\u505C\u6B62",onClick:P,disable:!t.value},null,8,["disable"]),I("div",Se,"\u97F3\u9891\u65F6\u957F\uFF1A"+we((f.value.length/y.value/p.value).toFixed(2))+" s",1)]),I("div",Qe,[r(E,{label:"\u751F\u6210\u4E3A WAV",onClick:U,disable:b.value!==1},null,8,["disable"])])]),_:1})]),_:1})]),_:1}))}});export{Le as default};
