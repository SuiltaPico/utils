var he=Object.defineProperty,ke=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var le=(e,i,t)=>i in e?he(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,B=(e,i)=>{for(var t in i||(i={}))xe.call(i,t)&&le(e,t,i[t]);if(ae)for(var t of ae(i))ye.call(i,t)&&le(e,t,i[t]);return e},Z=(e,i)=>ke(e,be(i));import{h as we,u as de,i as Ce,j as Me,k as _e,l as Ve,m as pe,n as ne,o as Fe,p as Se,q as Ae,a as Re,r as Ee,Q as ue,d as qe,e as re,f as G,g as Ie}from"./QCard.75e7e118.js";import{r as R,w as D,U as H,_ as Be,a as Te,t as ve,h as M,o as je,v as Oe,k as q,s as oe,q as me,H as Pe,G as Ue,$ as W,g as se,u as ze,z as $e,B as J,x as De,C as T,D as X,E as Ne}from"./index.372ee2c0.js";import{u as Le,a as Ke,Q as Qe}from"./QPage.b455db1d.js";const ie={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ee={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ge=Object.keys(ee);ge.forEach(e=>{ee[e].regex=new RegExp(ee[e].pattern)});const Ze=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ge.join("")+"])|(.)","g"),ce=/[.*+?^${}()|[\]\\]/g,_=String.fromCharCode(1),We={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function He(e,i,t,d){let c,g,h,C;const m=R(null),k=R(V());function P(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,j),D(()=>e.mask,a=>{if(a!==void 0)p(k.value,!0);else{const l=A(k.value);j(),e.modelValue!==l&&i("update:modelValue",l)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{m.value===!0&&p(k.value,!0)}),D(()=>e.unmaskedValue,()=>{m.value===!0&&p(k.value)});function V(){if(j(),m.value===!0){const a=z(A(e.modelValue));return e.fillMask!==!1?y(a):a}return e.modelValue}function S(a){if(a<c.length)return c.slice(-a);let l="",u=c;const r=u.indexOf(_);if(r>-1){for(let f=a-u.length;f>0;f--)l+=_;u=u.slice(0,r)+l+u.slice(r)}return u}function j(){if(m.value=e.mask!==void 0&&e.mask.length>0&&P(),m.value===!1){C=void 0,c="",g="";return}const a=ie[e.mask]===void 0?e.mask:ie[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",u=l.replace(ce,"\\$&"),r=[],f=[],s=[];let o=e.reverseFillMask===!0,v="",x="";a.replace(Ze,(E,n,w,$,K)=>{if($!==void 0){const I=ee[$];s.push(I),x=I.negate,o===!0&&(f.push("(?:"+x+"+)?("+I.pattern+"+)?(?:"+x+"+)?("+I.pattern+"+)?"),o=!1),f.push("(?:"+x+"+)?("+I.pattern+")?")}else if(w!==void 0)v="\\"+(w==="\\"?"":w),s.push(w),r.push("([^"+v+"]+)?"+v+"?");else{const I=n!==void 0?n:K;v=I==="\\"?"\\\\\\\\":I.replace(ce,"\\\\$&"),s.push(I),r.push("([^"+v+"]+)?"+v+"?")}});const L=new RegExp("^"+r.join("")+"("+(v===""?".":"[^"+v+"]")+"+)?$"),Q=f.length-1,b=f.map((E,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+u+"*"+E):n===Q?new RegExp("^"+E+"("+(x===""?".":x)+"+)?"+(e.reverseFillMask===!0?"$":u+"*")):new RegExp("^"+E));h=s,C=E=>{const n=L.exec(E);n!==null&&(E=n.slice(1).join(""));const w=[],$=b.length;for(let K=0,I=E;K<$;K++){const te=b[K].exec(I);if(te===null)break;I=I.slice(te.shift().length),w.push(...te)}return w.length>0?w.join(""):E},c=s.map(E=>typeof E=="string"?E:_).join(""),g=c.split(_).join(l)}function p(a,l,u){const r=d.value,f=r.selectionEnd,s=r.value.length-f,o=A(a);l===!0&&j();const v=z(o),x=e.fillMask!==!1?y(v):v,L=k.value!==x;r.value!==x&&(r.value=x),L===!0&&(k.value=x),document.activeElement===r&&H(()=>{if(x===g){const b=e.reverseFillMask===!0?g.length:0;r.setSelectionRange(b,b,"forward");return}if(u==="insertFromPaste"&&e.reverseFillMask!==!0){const b=f-1;F.right(r,b,b);return}if(["deleteContentBackward","deleteContentForward"].indexOf(u)>-1){const b=e.reverseFillMask===!0?f===0?x.length>v.length?1:0:Math.max(0,x.length-(x===g?0:Math.min(v.length,s)+1))+1:f;r.setSelectionRange(b,b,"forward");return}if(e.reverseFillMask===!0)if(L===!0){const b=Math.max(0,x.length-(x===g?0:Math.min(v.length,s+1)));b===1&&f===1?r.setSelectionRange(b,b,"forward"):F.rightReverse(r,b,b)}else{const b=x.length-s;r.setSelectionRange(b,b,"backward")}else if(L===!0){const b=Math.max(0,c.indexOf(_),Math.min(v.length,f)-1);F.right(r,b,b)}else{const b=f-1;F.right(r,b,b)}});const Q=e.unmaskedValue===!0?A(x):x;String(e.modelValue)!==Q&&t(Q,!0)}function U(a,l,u){const r=z(A(a.value));l=Math.max(0,c.indexOf(_),Math.min(r.length,l)),a.setSelectionRange(l,u,"forward")}const F={left(a,l,u,r){const f=c.slice(l-1).indexOf(_)===-1;let s=Math.max(0,l-1);for(;s>=0;s--)if(c[s]===_){l=s,f===!0&&l++;break}if(s<0&&c[l]!==void 0&&c[l]!==_)return F.right(a,0,0);l>=0&&a.setSelectionRange(l,r===!0?u:l,"backward")},right(a,l,u,r){const f=a.value.length;let s=Math.min(f,u+1);for(;s<=f;s++)if(c[s]===_){u=s;break}else c[s-1]===_&&(u=s);if(s>f&&c[u-1]!==void 0&&c[u-1]!==_)return F.left(a,f,f);a.setSelectionRange(r?l:u,u,"forward")},leftReverse(a,l,u,r){const f=S(a.value.length);let s=Math.max(0,l-1);for(;s>=0;s--)if(f[s-1]===_){l=s;break}else if(f[s]===_&&(l=s,s===0))break;if(s<0&&f[l]!==void 0&&f[l]!==_)return F.rightReverse(a,0,0);l>=0&&a.setSelectionRange(l,r===!0?u:l,"backward")},rightReverse(a,l,u,r){const f=a.value.length,s=S(f),o=s.slice(0,u+1).indexOf(_)===-1;let v=Math.min(f,u+1);for(;v<=f;v++)if(s[v-1]===_){u=v,u>0&&o===!0&&u--;break}if(v>f&&s[u-1]!==void 0&&s[u-1]!==_)return F.leftReverse(a,f,f);a.setSelectionRange(r===!0?l:u,u,"forward")}};function N(a){if(Be(a)===!0)return;const l=d.value,u=l.selectionStart,r=l.selectionEnd;if(a.keyCode===37||a.keyCode===39){const f=F[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];a.preventDefault(),f(l,u,r,a.shiftKey)}else a.keyCode===8&&e.reverseFillMask!==!0&&u===r?F.left(l,u,r,!0):a.keyCode===46&&e.reverseFillMask===!0&&u===r&&F.rightReverse(l,u,r,!0)}function z(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return O(a);const l=h;let u=0,r="";for(let f=0;f<l.length;f++){const s=a[u],o=l[f];if(typeof o=="string")r+=o,s===o&&u++;else if(s!==void 0&&o.regex.test(s))r+=o.transform!==void 0?o.transform(s):s,u++;else return r}return r}function O(a){const l=h,u=c.indexOf(_);let r=a.length-1,f="";for(let s=l.length-1;s>=0&&r>-1;s--){const o=l[s];let v=a[r];if(typeof o=="string")f=o+f,v===o&&r--;else if(v!==void 0&&o.regex.test(v))do f=(o.transform!==void 0?o.transform(v):v)+f,r--,v=a[r];while(u===s&&v!==void 0&&o.regex.test(v));else return f}return f}function A(a){return typeof a!="string"||C===void 0?typeof a=="number"?C(""+a):a:C(a)}function y(a){return g.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?g.slice(0,-a.length)+a:a+g.slice(a.length)}return{innerValue:k,hasMask:m,moveCursorForPaste:U,updateMaskValue:p,onMaskedKeydown:N}}const Ge=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Je=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Xe=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ye=/[a-z0-9_ -]$/i;function et(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"?t.target.qComposing!==!0&&typeof t.data=="string"&&(Te.is.firefox===!0?Ye.test(t.data)===!1:Ge.test(t.data)===!0&&Je.test(t.data)===!0&&Xe.test(t.data)===!0)===!0&&(t.target.qComposing=!0):t.target.qComposing=!0}}var fe=ve({name:"QInput",inheritAttrs:!1,props:Z(B(B(B({},we),We),de),{modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]}),emits:[...Ce,"paste","change"],setup(e,{emit:i,attrs:t}){const d={};let c=NaN,g,h,C,m;const k=R(null),P=Me(e),{innerValue:V,hasMask:S,moveCursorForPaste:j,updateMaskValue:p,onMaskedKeydown:U}=He(e,i,o,k),F=_e(e,!0),N=M(()=>ne(V.value)),z=et(s),O=Ve(),A=M(()=>e.type==="textarea"||e.autogrow===!0),y=M(()=>A.value===!0||["text","search","url","tel","password"].includes(e.type)),a=M(()=>{const n=Z(B({},O.splitAttrs.listeners.value),{onInput:s,onPaste:f,onChange:x,onBlur:L,onFocus:oe});return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=z,S.value===!0&&(n.onKeydown=U),e.autogrow===!0&&(n.onAnimationend=v),n}),l=M(()=>{const n=Z(B({tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:P.value},O.splitAttrs.attributes.value),{id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0});return A.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});D(()=>e.type,()=>{k.value&&(k.value.value=e.modelValue)}),D(()=>e.modelValue,n=>{if(S.value===!0){if(h===!0&&(h=!1,String(n)===c))return;p(n)}else V.value!==n&&(V.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(g===!0?g=!1:delete d.value));e.autogrow===!0&&H(v)}),D(()=>e.autogrow,n=>{n===!0?H(v):k.value!==null&&t.rows>0&&(k.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&H(v)});function u(){Fe(()=>{const n=document.activeElement;k.value!==null&&k.value!==n&&(n===null||n.id!==O.targetUid.value)&&k.value.focus({preventScroll:!0})})}function r(){k.value!==null&&k.value.select()}function f(n){if(S.value===!0&&e.reverseFillMask!==!0){const w=n.target;j(w,w.selectionStart,w.selectionEnd)}i("paste",n)}function s(n){if(!n||!n.target||n.target.qComposing===!0)return;if(e.type==="file"){i("update:modelValue",n.target.files);return}const w=n.target.value;if(S.value===!0)p(w,!1,n.inputType);else if(o(w),y.value===!0&&n.target===document.activeElement){const{selectionStart:$,selectionEnd:K}=n.target;$!==void 0&&K!==void 0&&H(()=>{n.target===document.activeElement&&w.indexOf(n.target.value)===0&&n.target.setSelectionRange($,K)})}e.autogrow===!0&&v()}function o(n,w){m=()=>{e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,w===!0&&(h=!0),i("update:modelValue",n),H(()=>{c===n&&(c=NaN)})),m=void 0},e.type==="number"&&(g=!0,d.value=n),e.debounce!==void 0?(clearTimeout(C),d.value=n,C=setTimeout(m,e.debounce)):m()}function v(){const n=k.value;if(n!==null){const w=n.parentNode.style,{overflow:$}=n.style;w.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.overflow="hidden",n.style.height=n.scrollHeight+"px",n.style.overflow=$,w.marginBottom=""}}function x(n){z(n),clearTimeout(C),m!==void 0&&m(),i("change",n.target.value)}function L(n){n!==void 0&&oe(n),clearTimeout(C),m!==void 0&&m(),g=!1,h=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{k.value!==null&&(k.value.value=V.value!==void 0?V.value:"")})}function Q(){return d.hasOwnProperty("value")===!0?d.value:V.value!==void 0?V.value:""}je(()=>{L()}),Oe(()=>{e.autogrow===!0&&v()}),Object.assign(O,{innerValue:V,fieldClass:M(()=>`q-${A.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:M(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:k,emitValue:o,hasValue:N,floatingLabel:M(()=>N.value===!0||ne(e.displayValue)),getControl:()=>q(A.value===!0?"textarea":"input",B(B(B({ref:k,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle},l.value),a.value),e.type!=="file"?{value:Q()}:F.value)),getShadowControl:()=>q("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(A.value===!0?"":" text-no-wrap")},[q("span",{class:"invisible"},Q()),q("span",e.shadowText)])});const b=pe(O),E=me();return Object.assign(E.proxy,{focus:u,select:r,getNativeElement:()=>k.value}),b}});function tt(e,i){const t=R(null),d=M(()=>e.disable!==!0?null:q("span",{ref:t,class:"no-outline",tabindex:-1}));function c(g){const h=i.value;g!==void 0&&g.type.indexOf("key")===0?h!==null&&document.activeElement!==h&&h.contains(document.activeElement)===!0&&h.focus():t.value!==null&&(g===void 0||h!==null&&h.contains(g.target)===!0)&&t.value.focus()}return{refocusTargetEl:d,refocusTarget:c}}var at={xs:30,sm:35,md:40,lg:50,xl:60};const lt=Z(B(B(B({},Ke),Ae),de),{modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]}),nt=["update:modelValue"];function ut(e,i){const{props:t,slots:d,emit:c,proxy:g}=me(),{$q:h}=g,C=Le(t,h),m=R(null),{refocusTargetEl:k,refocusTarget:P}=tt(t,m),V=Se(t,at),S=M(()=>t.val!==void 0&&Array.isArray(t.modelValue)),j=M(()=>{const o=W(t.val);return S.value===!0?t.modelValue.findIndex(v=>W(v)===o):-1}),p=M(()=>S.value===!0?j.value>-1:W(t.modelValue)===W(t.trueValue)),U=M(()=>S.value===!0?j.value===-1:W(t.modelValue)===W(t.falseValue)),F=M(()=>p.value===!1&&U.value===!1),N=M(()=>t.disable===!0?-1:t.tabindex||0),z=M(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(t.disable===!0?" disabled":"")+(C.value===!0?` q-${e}--dark`:"")+(t.dense===!0?` q-${e}--dense`:"")+(t.leftLabel===!0?" reverse":"")),O=M(()=>{const o=p.value===!0?"truthy":U.value===!0?"falsy":"indet",v=t.color!==void 0&&(t.keepColor===!0||(e==="toggle"?p.value===!0:U.value!==!0))?` text-${t.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${o}${v}`}),A=M(()=>{const o={type:"checkbox"};return t.name!==void 0&&Object.assign(o,{"^checked":p.value===!0?"checked":void 0,name:t.name,value:S.value===!0?t.val:t.trueValue}),o}),y=Re(A),a=M(()=>{const o={tabindex:N.value,role:"checkbox","aria-label":t.label,"aria-checked":F.value===!0?"mixed":p.value===!0?"true":"false"};return t.disable===!0&&(o["aria-disabled"]="true"),o});function l(o){o!==void 0&&(se(o),P(o)),t.disable!==!0&&c("update:modelValue",u(),o)}function u(){if(S.value===!0){if(p.value===!0){const o=t.modelValue.slice();return o.splice(j.value,1),o}return t.modelValue.concat([t.val])}if(p.value===!0){if(t.toggleOrder!=="ft"||t.toggleIndeterminate===!1)return t.falseValue}else if(U.value===!0){if(t.toggleOrder==="ft"||t.toggleIndeterminate===!1)return t.trueValue}else return t.toggleOrder!=="ft"?t.trueValue:t.falseValue;return t.indeterminateValue}function r(o){(o.keyCode===13||o.keyCode===32)&&se(o)}function f(o){(o.keyCode===13||o.keyCode===32)&&l(o)}const s=i(p,F);return Object.assign(g,{toggle:l}),()=>{const o=s();t.disable!==!0&&y(o,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const v=[q("div",{class:O.value,style:V.value},o)];k.value!==null&&v.push(k.value);const x=t.label!==void 0?Pe(d.default,[t.label]):Ue(d.default);return x!==void 0&&v.push(q("div",{class:`q-${e}__label q-anchor--skip`},x)),q("div",Z(B({ref:m,class:z.value},a.value),{onClick:l,onKeydown:r,onKeyup:f}),v)}}const rt=q("div",{key:"svg",class:"q-checkbox__bg absolute"},[q("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24","aria-hidden":"true"},[q("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),q("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var ot=ve({name:"QCheckbox",props:lt,emits:nt,setup(e){function i(t,d){const c=M(()=>(t.value===!0?e.checkedIcon:d.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>c.value!==null?[q("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[q(Ee,{class:"q-checkbox__icon",name:c.value})])]:[rt]}return ut("checkbox",i)}}),st=it;function it(e,i){i=i||{};var t=e.numberOfChannels,d=e.sampleRate,c=i.float32?3:1,g=c===3?32:16,h;return t===2?h=ft(e.getChannelData(0),e.getChannelData(1)):h=e.getChannelData(0),ct(h,c,d,t,g)}function ct(e,i,t,d,c){var g=c/8,h=d*g,C=new ArrayBuffer(44+e.length*g),m=new DataView(C);return Y(m,0,"RIFF"),m.setUint32(4,36+e.length*g,!0),Y(m,8,"WAVE"),Y(m,12,"fmt "),m.setUint32(16,16,!0),m.setUint16(20,i,!0),m.setUint16(22,d,!0),m.setUint32(24,t,!0),m.setUint32(28,t*h,!0),m.setUint16(32,h,!0),m.setUint16(34,c,!0),Y(m,36,"data"),m.setUint32(40,e.length*g,!0),i===1?vt(m,44,e):dt(m,44,e),C}function ft(e,i){for(var t=e.length+i.length,d=new Float32Array(t),c=0,g=0;c<t;)d[c++]=e[g],d[c++]=i[g],g++;return d}function dt(e,i,t){for(var d=0;d<t.length;d++,i+=4)e.setFloat32(i,t[d],!0)}function vt(e,i,t){for(var d=0;d<t.length;d++,i+=2){var c=Math.max(-1,Math.min(1,t[d]));e.setInt16(i,c<0?c*32768:c*32767,!0)}}function Y(e,i,t){for(var d=0;d<t.length;d++)e.setUint8(i+d,t.charCodeAt(d))}const mt={class:"row col-12 q-gutter-md justify-center"},gt={class:"row col-12 q-gutter-md justify-center"},ht={class:"text-body"},kt={class:"row col-12 q-gutter-md justify-center"},Ct=ze({name:"file_sounds",setup(e){const i=R(),t=new FileReader,d=R(0),c=R(0);let g=new ArrayBuffer(0);const h=R(new Int8Array),C=new AudioContext;R(!0);const m=R(),k=R(new Float32Array),P=R(44100),V=R(1),S=R(!1),j=`
function normalize(arr){
  // Peak volume detection
  let min = 1, max = -1
  arr.forEach((v,i)=>{
    if(v < min) min = v
    if(v > max) max = v
  })
  let diff = max - min
  arr.forEach((v,i)=>{
    arr[i] = (arr[i] - min) / diff * 2 - 1
  })
}

onmessage = (e) => {
  let data = e.data
  if(data.name === "render") {
    let { sample_byte, ta, length, use_normalizer } = data
    let result = new Float32Array(length / sample_byte)
    if(sample_byte === 1){
      for(let i = 0; i < length; i++){
        if(i % 20000 === 0){
          postMessage({ name: "progress", value: i/ta.length })
        }
        result[i] = ta[i] / Math.pow(2, sample_byte * 8)
      }
    } else {
      for(let i = 0; i < length; i++){
        let temp = 0
        for(let j = 0; j < sample_byte; j++){
          temp += ta[i * sample_byte + j]
          temp <<= 8
        }
        if(i % 20000 === 0){
          postMessage({ name: "progress", value: i/ta.length })
        }
        result[i] = temp / Math.pow(2, sample_byte * 8)
      }
    }
    if(use_normalizer){
      normalize(result)
    }
    postMessage({ name: "render_finish", result })
  }
};
`,p=new Blob([j]),U=new Worker(URL.createObjectURL(p));U.onmessage=y=>{let a=y.data;if(a.name==="progress")c.value=a.value;else if(a.name==="render_finish"){c.value=1;let l=a.result;k.value=l;const u=C.createBuffer(1,h.value.length,P.value);u.copyToChannel(l,0),console.log(l);const r=C.createBufferSource();r.buffer=u,r.connect(C.destination),m.value=r}},D(i,()=>{let y=i.value;y&&(t.onprogress=a=>{d.value=a.loaded/a.total},t.onload=F,t.readAsArrayBuffer(y))});function F(){d.value=1,g=t.result,h.value=new Int8Array(g)}function N(){U.postMessage({name:"render",sample_byte:V.value,ta:h.value,length:h.value.length/V.value,use_normalizer:S.value})}function z(){let y=m.value;y&&y.start(),c.value=0}function O(){var y;(y=m.value)==null||y.stop()}function A(){const y=C.createBuffer(1,h.value.length,P.value);y.copyToChannel(k.value,0);const a=st(y,{float32:!0});console.log(new Int8Array(a));const l=new Blob([a],{type:"audio/x-wav"}),u=document.createElement("a");u.href=window.URL.createObjectURL(l),u.download="audio.wav",u.click()}return(y,a)=>(De(),$e(Qe,{class:"row justify-center text-left"},{default:J(()=>[T(Ie,{class:"col-sm-11 col-md-10"},{default:J(()=>[T(ue,{class:"q-gutter-md row justify-center"},{default:J(()=>[T(qe,{class:"col-10",outlined:"",modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l),label:"\u6587\u4EF6"},null,8,["modelValue"]),T(re,{class:"col-10",value:d.value,"animation-speed":100,color:d.value!==1?"primary":"positive",style:{height:"4px"}},null,8,["value","color"]),T(re,{class:"col-10",value:c.value,"animation-speed":0,color:c.value!==1?"primary":"positive",style:{height:"4px"}},null,8,["value","color"])]),_:1}),T(ue,{class:"q-gutter-md row justify-center"},{default:J(()=>[X("div",mt,[T(G,{label:"\u6E32\u67D3",onClick:N,disable:!i.value},null,8,["disable"]),T(fe,{label:"\u91C7\u6837\u7387",modelValue:P.value,"onUpdate:modelValue":a[1]||(a[1]=l=>P.value=l)},null,8,["modelValue"]),T(fe,{label:"\u4F4D",modelValue:V.value,"onUpdate:modelValue":a[2]||(a[2]=l=>V.value=l)},null,8,["modelValue"]),T(ot,{label:"\u54CD\u5EA6\u6807\u51C6\u5316",modelValue:S.value,"onUpdate:modelValue":a[3]||(a[3]=l=>S.value=l)},null,8,["modelValue"])]),X("div",gt,[T(G,{label:"\u64AD\u653E",onClick:z,disable:c.value!==1},null,8,["disable"]),T(G,{label:"\u505C\u6B62",onClick:O,disable:!i.value},null,8,["disable"]),X("div",ht,"\u97F3\u9891\u65F6\u957F\uFF1A"+Ne((h.value.length/P.value/V.value).toFixed(2))+" s",1)]),X("div",kt,[T(G,{label:"\u751F\u6210\u4E3A WAV",onClick:A,disable:c.value!==1},null,8,["disable"])])]),_:1})]),_:1})]),_:1}))}});export{Ct as default};
