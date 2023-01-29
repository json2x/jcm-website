import{c as C,d as Y,h as G,a as J}from"./render.9c69b0a1.js";import{k as w,D as I,E,l as H,G as K,H as D,h as g,g as q,x as F,I as U,J as L,c as v,K as x,L as N,M as A,N as Z,O as R,P as ee}from"./index.a329b148.js";import{c as _,g as te}from"./dom.aacf4fe3.js";function ne(){const e=w(!I.value);return e.value===!1&&E(()=>{e.value=!0}),e}const X=typeof ResizeObserver!="undefined",j=X===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var B=C({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:d}){let n=null,t,i={width:-1,height:-1};function s(a){a===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:a,offsetHeight:l}=t;(a!==i.width||l!==i.height)&&(i={width:a,height:l},d("resize",i))}}const{proxy:h}=q();if(X===!0){let a;const l=m=>{t=h.$el.parentNode,t?(a=new ResizeObserver(s),a.observe(t),u()):m!==!0&&D(()=>{l(!0)})};return E(()=>{l()}),H(()=>{n!==null&&clearTimeout(n),a!==void 0&&(a.disconnect!==void 0?a.disconnect():t&&a.unobserve(t))}),K}else{let m=function(){n!==null&&(clearTimeout(n),n=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",s,F.passive),l=void 0)},b=function(){m(),t&&t.contentDocument&&(l=t.contentDocument.defaultView,l.addEventListener("resize",s,F.passive),u())};const a=ne();let l;return E(()=>{D(()=>{t=h.$el,t&&b()})}),H(m),h.trigger=s,()=>{if(a.value===!0)return g("object",{style:j.style,tabindex:-1,type:"text/html",data:j.url,"aria-hidden":"true",onLoad:b})}}}}),fe=C({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:n}){const{proxy:{$q:t}}=q(),i=U(N,L);if(i===L)return console.error("QHeader needs to be child of QLayout"),L;const s=w(parseInt(e.heightHint,10)),u=w(!0),h=v(()=>e.reveal===!0||i.view.value.indexOf("H")>-1||t.platform.is.ios&&i.isContainer.value===!0),a=v(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?s.value:0;const o=s.value-i.scroll.value.position;return o>0?o:0}),l=v(()=>e.modelValue!==!0||h.value===!0&&u.value!==!0),m=v(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),b=v(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=v(()=>{const o=i.rows.value.top,p={};return o[0]==="l"&&i.left.space===!0&&(p[t.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),o[2]==="r"&&i.right.space===!0&&(p[t.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),p});function c(o,p){i.update("header",o,p)}function y(o,p){o.value!==p&&(o.value=p)}function O({height:o}){y(s,o),c("size",o)}function Q(o){m.value===!0&&y(u,!0),n("focusin",o)}x(()=>e.modelValue,o=>{c("space",o),y(u,!0),i.animate()}),x(a,o=>{c("offset",o)}),x(()=>e.reveal,o=>{o===!1&&y(u,e.modelValue)}),x(u,o=>{i.animate(),n("reveal",o)}),x(i.scroll,o=>{e.reveal===!0&&y(u,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const T={};return i.instances.header=T,e.modelValue===!0&&c("size",s.value),c("space",e.modelValue),c("offset",a.value),H(()=>{i.instances.header===T&&(i.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const o=Y(d.default,[]);return e.elevated===!0&&o.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(g(B,{debounce:0,onResize:O})),g("header",{class:b.value,style:z.value,onFocusin:Q},o)}}}),ve=C({name:"QPageContainer",setup(e,{slots:d}){const{proxy:{$q:n}}=q(),t=U(N,L);if(t===L)return console.error("QPageContainer needs to be child of QLayout"),L;A(Z,!0);const i=v(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>g("div",{class:"q-page-container",style:i.value},G(d.default))}});const oe=[null,document,document.body,document.scrollingElement,document.documentElement];function ie(e,d){let n=te(d);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return oe.includes(n)?window:n}function le(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function re(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let P;function W(){if(P!==void 0)return P;const e=document.createElement("p"),d=document.createElement("div");_(e,{width:"100%",height:"200px"}),_(d,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),d.appendChild(e),document.body.appendChild(d);const n=e.offsetWidth;d.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=d.clientWidth),d.remove(),P=n-t,P}const{passive:k}=F,ae=["both","horizontal","vertical"];var se=C({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ae.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:d}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,i,s;x(()=>e.scrollTarget,()=>{a(),h()});function u(){t!==null&&t();const b=Math.max(0,le(i)),z=re(i),c={top:b-n.position.top,left:z-n.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const y=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:b,left:z},n.directionChanged=n.direction!==y,n.delta=c,n.directionChanged===!0&&(n.direction=y,n.inflectionPoint=n.position),d("scroll",{...n})}function h(){i=ie(s,e.scrollTarget),i.addEventListener("scroll",l,k),l(!0)}function a(){i!==void 0&&(i.removeEventListener("scroll",l,k),i=void 0)}function l(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[z,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(z),t=null}}}const{proxy:m}=q();return x(()=>m.$q.lang.rtl,u),E(()=>{s=m.$el.parentNode,h()}),H(()=>{t!==null&&t(),a()}),Object.assign(m,{trigger:l,getPosition:()=>n}),K}}),he=C({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:d,emit:n}){const{proxy:{$q:t}}=q(),i=w(null),s=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),h=w({position:0,direction:"down",inflectionPoint:0}),a=w(0),l=w(I.value===!0?0:W()),m=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=v(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=v(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),c=v(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function y(r){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};h.value=f,e.onScroll!==void 0&&n("scroll",f)}}function O(r){const{height:f,width:S}=r;let $=!1;s.value!==f&&($=!0,s.value=f,e.onScrollHeight!==void 0&&n("scrollHeight",f),T()),u.value!==S&&($=!0,u.value=S),$===!0&&e.onResize!==void 0&&n("resize",r)}function Q({height:r}){a.value!==r&&(a.value=r,T())}function T(){if(e.container===!0){const r=s.value>a.value?W():0;l.value!==r&&(l.value=r)}}let o=null;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:i,height:s,containerHeight:a,scrollbarWidth:l,totalWidth:v(()=>u.value+l.value),rows:v(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:R({size:0,offset:0,space:!1}),right:R({size:300,offset:0,space:!1}),footer:R({size:0,offset:0,space:!1}),left:R({size:300,offset:0,space:!1}),scroll:h,animate(){o!==null?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{o=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,f,S){p[r][f]=S}};if(A(N,p),W()>0){let S=function(){r=null,f.classList.remove("hide-scrollbar")},$=function(){if(r===null){if(f.scrollHeight>t.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(S,300)},V=function(M){r!==null&&M==="remove"&&(clearTimeout(r),S()),window[`${M}EventListener`]("resize",$)},r=null;const f=document.body;x(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),ee(()=>{V("remove")})}return()=>{const r=J(d.default,[g(se,{onScroll:y}),g(B,{onResize:O})]),f=g("div",{class:m.value,style:b.value,ref:e.container===!0?void 0:i,tabindex:-1},r);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:i},[g(B,{onResize:Q}),g("div",{class:"absolute-full",style:z.value},[g("div",{class:"scroll",style:c.value},[f])])]):f}}});export{fe as Q,ve as a,he as b};
