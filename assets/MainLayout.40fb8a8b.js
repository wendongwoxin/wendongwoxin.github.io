import{v as Ct,c as De,g as St,u as Lt,a as xt,Q as Tt}from"./QBtn.9d594cc3.js";import{c as B,h as F,a as Et,b as et,d as zt,e as Re,f as Bt}from"./render.0c4776f1.js";import{c as m,h as q,r as L,i as tt,o as X,n as U,a as A,d as Ee,g as Q,l as V,w as k,e as ze,f as se,H as We,j as O,s as Be,k as $t,P as Pt,m as Ot,p as te,q as be,t as Ae,u as ye,v as Le,x as ge,y as Vt,z as ot,A as Mt,B as oe,C as Qt,D as Ht,E as nt,_ as it,F as le,G,I as re,J as T,K as x,L as Dt,M as ue,N as Fe,O as at,Q as Rt,R as Wt,S as At,T as Ft,U as It,V as Nt}from"./index.ca4d31e2.js";import{u as jt,a as Xt,Q as lt}from"./QIcon.1412e12a.js";import{u as $e,a as Pe}from"./use-dark.2cb6fac2.js";var Ut=B({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const i=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:i.value},F(o.default))}}),Yt=B({name:"QAvatar",props:{...jt,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:o}){const i=Xt(e),l=m(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),t=m(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const a=e.icon!==void 0?[q(lt,{name:e.icon})]:void 0;return q("div",{class:l.value,style:i.value},[q("div",{class:"q-avatar__content row flex-center overflow-hidden",style:t.value},Et(o.default,a))])}}}),Kt=B({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const i=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:i.value},F(o.default))}});function Jt(){const e=L(!tt.value);return e.value===!1&&X(()=>{e.value=!0}),e}const rt=typeof ResizeObserver!="undefined",Ie=rt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var xe=B({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let i=null,l,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?u():i===null&&(i=setTimeout(u,e.debounce))}function u(){if(clearTimeout(i),i=null,l){const{offsetWidth:c,offsetHeight:n}=l;(c!==t.width||n!==t.height)&&(t={width:c,height:n},o("resize",t))}}const v=Q();if(Object.assign(v.proxy,{trigger:a}),rt===!0){let c;return X(()=>{U(()=>{l=v.proxy.$el.parentNode,l&&(c=new ResizeObserver(a),c.observe(l),u())})}),A(()=>{clearTimeout(i),c!==void 0&&(c.disconnect!==void 0?c.disconnect():l&&c.unobserve(l))}),Ee}else{let w=function(){clearTimeout(i),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",a,V.passive),n=void 0)},b=function(){w(),l&&l.contentDocument&&(n=l.contentDocument.defaultView,n.addEventListener("resize",a,V.passive),u())};const c=Jt();let n;return X(()=>{U(()=>{l=v.proxy.$el,l&&b()})}),A(w),()=>{if(c.value===!0)return q("object",{style:Ie.style,tabindex:-1,type:"text/html",data:Ie.url,"aria-hidden":"true",onLoad:b})}}}}),Gt=B({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:i}){const{proxy:{$q:l}}=Q(),t=ze(se,()=>{console.error("QHeader needs to be child of QLayout")}),a=L(parseInt(e.heightHint,10)),u=L(!0),v=m(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),c=m(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return u.value===!0?a.value:0;const s=a.value-t.scroll.value.position;return s>0?s:0}),n=m(()=>e.modelValue!==!0||v.value===!0&&u.value!==!0),w=m(()=>e.modelValue===!0&&n.value===!0&&e.reveal===!0),b=m(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(n.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=m(()=>{const s=t.rows.value.top,C={};return s[0]==="l"&&t.left.space===!0&&(C[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(C[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),C});function d(s,C){t.update("header",s,C)}function p(s,C){s.value!==C&&(s.value=C)}function S({height:s}){p(a,s),d("size",s)}function g(s){w.value===!0&&p(u,!0),i("focusin",s)}k(()=>e.modelValue,s=>{d("space",s),p(u,!0),t.animate()}),k(c,s=>{d("offset",s)}),k(()=>e.reveal,s=>{s===!1&&p(u,e.modelValue)}),k(u,s=>{t.animate(),i("reveal",s)}),k(t.scroll,s=>{e.reveal===!0&&p(u,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const z={};return t.instances.header=z,e.modelValue===!0&&d("size",a.value),d("space",e.modelValue),d("offset",c.value),A(()=>{t.instances.header===z&&(t.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const s=et(o.default,[]);return e.elevated===!0&&s.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(q(xe,{debounce:0,onResize:S})),q("header",{class:b.value,style:y.value,onFocusin:g},s)}}}),Te=B({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const i=m(()=>parseInt(e.lines,10)),l=m(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(i.value===1?" ellipsis":"")),t=m(()=>e.lines!==void 0&&i.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":i.value}:null);return()=>q("div",{style:t.value,class:l.value},F(o.default))}}),Zt=B({name:"QList",props:{...$e,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:o}){const i=Q(),l=Pe(e,i.proxy.$q),t=m(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>q("div",{class:t.value},F(o.default))}});function eo(e,o,i){let l;function t(){l!==void 0&&(We.remove(l),l=void 0)}return A(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>i.value===!0,handler:o},We.add(l)}}}const to={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},oo=["before-show","show","before-hide","hide"];function no({showing:e,canShow:o,hideOnRouteChange:i,handleShow:l,handleHide:t,processOnMount:a}){const u=Q(),{props:v,emit:c,proxy:n}=u;let w;function b(s){e.value===!0?p(s):y(s)}function y(s){if(v.disable===!0||s!==void 0&&s.qAnchorHandled===!0||o!==void 0&&o(s)!==!0)return;const C=v["onUpdate:modelValue"]!==void 0;C===!0&&(c("update:modelValue",!0),w=s,U(()=>{w===s&&(w=void 0)})),(v.modelValue===null||C===!1)&&d(s)}function d(s){e.value!==!0&&(e.value=!0,c("before-show",s),l!==void 0?l(s):c("show",s))}function p(s){if(v.disable===!0)return;const C=v["onUpdate:modelValue"]!==void 0;C===!0&&(c("update:modelValue",!1),w=s,U(()=>{w===s&&(w=void 0)})),(v.modelValue===null||C===!1)&&S(s)}function S(s){e.value!==!1&&(e.value=!1,c("before-hide",s),t!==void 0?t(s):c("hide",s))}function g(s){v.disable===!0&&s===!0?v["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):s===!0!==e.value&&(s===!0?d:S)(w)}k(()=>v.modelValue,g),i!==void 0&&Ct(u)===!0&&k(()=>n.$route.fullPath,()=>{i.value===!0&&e.value===!0&&p()}),a===!0&&X(()=>{g(v.modelValue)});const z={show:y,hide:p,toggle:b};return Object.assign(n,z),z}const io=[null,document,document.body,document.scrollingElement,document.documentElement];function ao(e,o){let i=St(o);if(i===void 0){if(e==null)return window;i=e.closest(".scroll,.scroll-y,.overflow-auto")}return io.includes(i)?window:i}function ut(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function st(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ne;function we(){if(ne!==void 0)return ne;const e=document.createElement("p"),o=document.createElement("div");De(e,{width:"100%",height:"200px"}),De(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const i=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return i===l&&(l=o.clientWidth),o.remove(),ne=i-l,ne}function lo(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let K=0,qe,_e,J,ke=!1,Ne,je,j;function ro(e){uo(e)&&Be(e)}function uo(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=$t(e),i=e.shiftKey&&!e.deltaX,l=!i&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=i||l?e.deltaY:e.deltaX;for(let a=0;a<o.length;a++){const u=o[a];if(lo(u,l))return l?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function Xe(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ie(e){ke!==!0&&(ke=!0,requestAnimationFrame(()=>{ke=!1;const{height:o}=e.target,{clientHeight:i,scrollTop:l}=document.scrollingElement;(J===void 0||o!==window.innerHeight)&&(J=i-o,document.scrollingElement.scrollTop=l),l>J&&(document.scrollingElement.scrollTop-=Math.ceil((l-J)/8))}))}function Ue(e){const o=document.body,i=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(o);qe=st(window),_e=ut(window),Ne=o.style.left,je=o.style.top,o.style.left=`-${qe}px`,o.style.top=`-${_e}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(i===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ie,V.passiveCapture),window.visualViewport.addEventListener("scroll",ie,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Xe,V.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",ro,V.notPassive),e==="remove"&&(O.is.ios===!0&&(i===!0?(window.visualViewport.removeEventListener("resize",ie,V.passiveCapture),window.visualViewport.removeEventListener("scroll",ie,V.passiveCapture)):window.removeEventListener("scroll",Xe,V.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ne,o.style.top=je,window.scrollTo(qe,_e),J=void 0)}function so(e){let o="add";if(e===!0){if(K++,j!==void 0){clearTimeout(j),j=void 0;return}if(K>1)return}else{if(K===0||(K--,K>0))return;if(o="remove",O.is.ios===!0&&O.is.nativeMobile===!0){clearTimeout(j),j=setTimeout(()=>{Ue(o),j=void 0},100);return}}Ue(o)}function co(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,so(o))}}}function fo(){let e;return A(()=>{clearTimeout(e)}),{registerTimeout(o,i){clearTimeout(e),e=setTimeout(o,i)},removeTimeout(){clearTimeout(e)}}}const Oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},vo=Object.keys(Oe);Oe.all=!0;function Ye(e){const o={};for(const i of vo)e[i]===!0&&(o[i]=!0);return Object.keys(o).length===0?Oe:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function Ke(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function mo(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Pt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Ce(e,o,i){const l=Le(e);let t,a=l.left-o.event.x,u=l.top-o.event.y,v=Math.abs(a),c=Math.abs(u);const n=o.direction;n.horizontal===!0&&n.vertical!==!0?t=a<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?t=u<0?"up":"down":n.up===!0&&u<0?(t="up",v>c&&(n.left===!0&&a<0?t="left":n.right===!0&&a>0&&(t="right"))):n.down===!0&&u>0?(t="down",v>c&&(n.left===!0&&a<0?t="left":n.right===!0&&a>0&&(t="right"))):n.left===!0&&a<0?(t="left",v<c&&(n.up===!0&&u<0?t="up":n.down===!0&&u>0&&(t="down"))):n.right===!0&&a>0&&(t="right",v<c&&(n.up===!0&&u<0?t="up":n.down===!0&&u>0&&(t="down")));let w=!1;if(t===void 0&&i===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,w=!0,t==="left"||t==="right"?(l.left-=a,v=0,a=0):(l.top-=u,c=0,u=0)}return{synthetic:w,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:i===!0,duration:Date.now()-o.event.time,distance:{x:v,y:c},offset:{x:a,y:u},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let ho=0;var Se=zt({name:"touch-pan",beforeMount(e,{value:o,modifiers:i}){if(i.mouse!==!0&&O.has.touch!==!0)return;function l(a,u){i.mouse===!0&&u===!0?Be(a):(i.stop===!0&&ye(a),i.prevent===!0&&Ae(a))}const t={uid:"qvtp_"+ho++,handler:o,modifiers:i,direction:Ye(i),noop:Ee,mouseStart(a){Ke(a,t)&&Ot(a)&&(te(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Ke(a,t)){const u=a.target;te(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(O.is.firefox===!0&&be(e,!0),t.lastEvt=a,u===!0||i.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0)){const n=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Ae(n),a.cancelBubble===!0&&ye(n),Object.assign(n,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:n}}ye(a)}const{left:v,top:c}=Le(a);t.event={x:v,y:c,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:c}},move(a){if(t.event===void 0)return;const u=Le(a),v=u.left-t.event.x,c=u.top-t.event.y;if(v===0&&c===0)return;t.lastEvt=a;const n=t.event.mouse===!0,w=()=>{l(a,n),i.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),mo(),t.styleCleanup=d=>{if(t.styleCleanup=void 0,i.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),n===!0){const p=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{p(),d()},50):p()}else d!==void 0&&d()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(a,t.event.mouse);const{payload:d,synthetic:p}=Ce(a,t,!1);d!==void 0&&(t.handler(d)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&w(),t.event.lastX=d.position.left,t.event.lastY=d.position.top,t.event.lastDir=p===!0?void 0:d.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||n===!0&&t.modifiers.mouseAllDir===!0){w(),t.event.detected=!0,t.move(a);return}const b=Math.abs(v),y=Math.abs(c);b!==y&&(t.direction.horizontal===!0&&b>y||t.direction.vertical===!0&&b<y||t.direction.up===!0&&b<y&&c<0||t.direction.down===!0&&b<y&&c>0||t.direction.left===!0&&b>y&&v<0||t.direction.right===!0&&b>y&&v>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(ge(t,"temp"),O.is.firefox===!0&&be(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ce(a===void 0?t.lastEvt:a,t).payload);const{payload:v}=Ce(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,i.mouse===!0&&te(t,"main",[[e,"mousedown","mouseStart",`passive${i.mouseCapture===!0?"Capture":""}`]]),O.has.touch===!0&&te(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const i=e.__qtouchpan;i!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&i.end(),i.handler=o.value),i.direction=Ye(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ge(o,"main"),ge(o,"temp"),O.is.firefox===!0&&be(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function ae(e,o,i){return i<=o?o:Math.min(i,Math.max(o,e))}const Je=150;var po=B({name:"QDrawer",inheritAttrs:!1,props:{...to,...$e,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...oo,"on-layout","mini-state"],setup(e,{slots:o,emit:i,attrs:l}){const t=Q(),{proxy:{$q:a}}=t,u=Pe(e,a),{preventBodyScroll:v}=co(),{registerTimeout:c}=fo(),n=ze(se,()=>{console.error("QDrawer needs to be child of QLayout")});let w,b,y;const d=L(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),p=m(()=>e.mini===!0&&d.value!==!0),S=m(()=>p.value===!0?e.miniWidth:e.width),g=L(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),z=m(()=>e.persistent!==!0&&(d.value===!0||ct.value===!0));function s(r,h){if(M(),r!==!1&&n.animate(),P(0),d.value===!0){const E=n.instances[Z.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),D(1),n.isContainer.value!==!0&&v(!0)}else D(0),r!==!1&&me(!1);c(()=>{r!==!1&&me(!0),h!==!0&&i("show",r)},Je)}function C(r,h){W(),r!==!1&&n.animate(),D(0),P(I.value*S.value),he(),h!==!0&&c(()=>{i("hide",r)},Je)}const{show:f,hide:_}=no({showing:g,hideOnRouteChange:z,handleShow:s,handleHide:C}),{addToHistory:M,removeFromHistory:W}=eo(g,_,z),H={belowBreakpoint:d,hide:_},$=m(()=>e.side==="right"),I=m(()=>(a.lang.rtl===!0?-1:1)*($.value===!0?1:-1)),Ve=L(0),N=L(!1),ce=L(!1),Me=L(S.value*I.value),Z=m(()=>$.value===!0?"left":"right"),de=m(()=>g.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),fe=m(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf($.value?"R":"L")>-1||a.platform.is.ios===!0&&n.isContainer.value===!0),Y=m(()=>e.overlay===!1&&g.value===!0&&d.value===!1),ct=m(()=>e.overlay===!0&&g.value===!0&&d.value===!1),dt=m(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&N.value===!1?" hidden":"")),ft=m(()=>({backgroundColor:`rgba(0,0,0,${Ve.value*.4})`})),Qe=m(()=>$.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),vt=m(()=>$.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),mt=m(()=>{const r={};return n.header.space===!0&&Qe.value===!1&&(fe.value===!0?r.top=`${n.header.offset}px`:n.header.space===!0&&(r.top=`${n.header.size}px`)),n.footer.space===!0&&vt.value===!1&&(fe.value===!0?r.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(r.bottom=`${n.footer.size}px`)),r}),ht=m(()=>{const r={width:`${S.value}px`,transform:`translateX(${Me.value}px)`};return d.value===!0?r:Object.assign(r,mt.value)}),pt=m(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),bt=m(()=>`q-drawer q-drawer--${e.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${p.value===!0?"mini":"standard"}`+(fe.value===!0||Y.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Qe.value===!0?" q-drawer--top-padding":""))),yt=m(()=>{const r=a.lang.rtl===!0?e.side:Z.value;return[[Se,_t,void 0,{[r]:!0,mouse:!0}]]}),gt=m(()=>{const r=a.lang.rtl===!0?Z.value:e.side;return[[Se,He,void 0,{[r]:!0,mouse:!0}]]}),wt=m(()=>{const r=a.lang.rtl===!0?Z.value:e.side;return[[Se,He,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){kt(d,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}k(d,r=>{r===!0?(w=g.value,g.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?(P(0),D(0),he()):f(!1))}),k(()=>e.side,(r,h)=>{n.instances[h]===H&&(n.instances[h]=void 0,n[h].space=!1,n[h].offset=0),n.instances[r]=H,n[r].size=S.value,n[r].space=Y.value,n[r].offset=de.value}),k(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),k(()=>e.behavior+e.breakpoint,ve),k(n.isContainer,r=>{g.value===!0&&v(r!==!0),r===!0&&ve()}),k(n.scrollbarWidth,()=>{P(g.value===!0?0:void 0)}),k(de,r=>{R("offset",r)}),k(Y,r=>{i("on-layout",r),R("space",r)}),k($,()=>{P()}),k(S,r=>{P(),pe(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{pe(r,S.value)}),k(()=>a.lang.rtl,()=>{P()}),k(()=>e.mini,()=>{e.modelValue===!0&&(qt(),n.animate())}),k(p,r=>{i("mini-state",r)});function P(r){r===void 0?U(()=>{r=g.value===!0?0:S.value,P(I.value*r)}):(n.isContainer.value===!0&&$.value===!0&&(d.value===!0||Math.abs(r)===S.value)&&(r+=I.value*n.scrollbarWidth.value),Me.value=r)}function D(r){Ve.value=r}function me(r){const h=r===!0?"remove":n.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function qt(){clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,b=setTimeout(()=>{ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function _t(r){if(g.value!==!1)return;const h=S.value,E=ae(r.distance.x,0,h);if(r.isFinal===!0){E>=Math.min(75,h)===!0?f():(n.animate(),D(0),P(I.value*h)),N.value=!1;return}P((a.lang.rtl===!0?$.value!==!0:$.value)?Math.max(h-E,0):Math.min(0,E-h)),D(ae(E/h,0,1)),r.isFirst===!0&&(N.value=!0)}function He(r){if(g.value!==!0)return;const h=S.value,E=r.direction===e.side,ee=(a.lang.rtl===!0?E!==!0:E)?ae(r.distance.x,0,h):0;if(r.isFinal===!0){Math.abs(ee)<Math.min(75,h)===!0?(n.animate(),D(1),P(0)):_(),N.value=!1;return}P(I.value*ee),D(ae(1-ee/h,0,1)),r.isFirst===!0&&(N.value=!0)}function he(){v(!1),me(!0)}function R(r,h){n.update(e.side,r,h)}function kt(r,h){r.value!==h&&(r.value=h)}function pe(r,h){R("size",r===!0?e.miniWidth:h)}return n.instances[e.side]=H,pe(e.miniToOverlay,S.value),R("space",Y.value),R("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),X(()=>{i("on-layout",Y.value),i("mini-state",p.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?s:C)(!1,!0)};if(n.totalWidth.value!==0){U(r);return}y=k(n.totalWidth,()=>{y(),y=void 0,g.value===!1&&e.showIfAbove===!0&&d.value===!1?f(!1):r()})}),A(()=>{y!==void 0&&y(),clearTimeout(b),g.value===!0&&he(),n.instances[e.side]===H&&(n.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const r=[];d.value===!0&&(e.noSwipeOpen===!1&&r.push(Vt(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),yt.value)),r.push(Re("div",{ref:"backdrop",class:dt.value,style:ft.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>wt.value)));const h=p.value===!0&&o.mini!==void 0,E=[q("div",{...l,key:""+h,class:[pt.value,l.class]},h===!0?o.mini():F(o.default))];return e.elevated===!0&&g.value===!0&&E.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Re("aside",{ref:"content",class:bt.value,style:ht.value},E,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>gt.value)),q("div",{class:"q-drawer-container"},r)}}}),bo=B({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:i}}=Q(),l=ze(se,()=>{console.error("QPageContainer needs to be child of QLayout")});ot(Mt,!0);const t=m(()=>{const a={};return l.header.space===!0&&(a.paddingTop=`${l.header.size}px`),l.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(a.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),a});return()=>q("div",{class:"q-page-container",style:t.value},F(o.default))}});const{passive:Ge}=V,yo=["both","horizontal","vertical"];var go=B({name:"QScrollObserver",props:{axis:{type:String,validator:e=>yo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,a;k(()=>e.scrollTarget,()=>{c(),v()});function u(){l!==null&&l();const b=Math.max(0,ut(t)),y=st(t),d={top:b-i.position.top,left:y-i.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const p=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";i.position={top:b,left:y},i.directionChanged=i.direction!==p,i.delta=d,i.directionChanged===!0&&(i.direction=p,i.inflectionPoint=i.position),o("scroll",{...i})}function v(){t=ao(a,e.scrollTarget),t.addEventListener("scroll",n,Ge),n(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",n,Ge),t=void 0)}function n(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(l===null){const[y,d]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];l=()=>{d(y),l=null}}}const w=Q();return X(()=>{a=w.proxy.$el.parentNode,v()}),A(()=>{l!==null&&l(),c()}),Object.assign(w.proxy,{trigger:n,getPosition:()=>i}),Ee}}),wo=B({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:i}){const{proxy:{$q:l}}=Q(),t=L(null),a=L(l.screen.height),u=L(e.container===!0?0:l.screen.width),v=L({position:0,direction:"down",inflectionPoint:0}),c=L(0),n=L(tt.value===!0?0:we()),w=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=m(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),y=m(()=>n.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${n.value}px`}:null),d=m(()=>n.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${n.value}px`,width:`calc(100% + ${n.value}px)`}:null);function p(f){if(e.container===!0||document.qScrollPrevented!==!0){const _={position:f.position.top,direction:f.direction,directionChanged:f.directionChanged,inflectionPoint:f.inflectionPoint.top,delta:f.delta.top};v.value=_,e.onScroll!==void 0&&i("scroll",_)}}function S(f){const{height:_,width:M}=f;let W=!1;a.value!==_&&(W=!0,a.value=_,e.onScrollHeight!==void 0&&i("scroll-height",_),z()),u.value!==M&&(W=!0,u.value=M),W===!0&&e.onResize!==void 0&&i("resize",f)}function g({height:f}){c.value!==f&&(c.value=f,z())}function z(){if(e.container===!0){const f=a.value>c.value?we():0;n.value!==f&&(n.value=f)}}let s;const C={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:n,totalWidth:m(()=>u.value+n.value),rows:m(()=>{const f=e.view.toLowerCase().split(" ");return{top:f[0].split(""),middle:f[1].split(""),bottom:f[2].split("")}}),header:oe({size:0,offset:0,space:!1}),right:oe({size:300,offset:0,space:!1}),footer:oe({size:0,offset:0,space:!1}),left:oe({size:300,offset:0,space:!1}),scroll:v,animate(){s!==void 0?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),s=void 0},155)},update(f,_,M){C[f][_]=M}};if(ot(se,C),we()>0){let M=function(){f=null,_.classList.remove("hide-scrollbar")},W=function(){if(f===null){if(_.scrollHeight>l.screen.height)return;_.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(M,300)},H=function($){f!==null&&$==="remove"&&(clearTimeout(f),M()),window[`${$}EventListener`]("resize",W)},f=null;const _=document.body;k(()=>e.container!==!0?"add":"remove",H),e.container!==!0&&H("add"),Qt(()=>{H("remove")})}return()=>{const f=Bt(o.default,[q(go,{onScroll:p}),q(xe,{onResize:S})]),_=q("div",{class:w.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},f);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:t},[q(xe,{onResize:g}),q("div",{class:"absolute-full",style:y.value},[q("div",{class:"scroll",style:d.value},[_])])]):_}}}),Ze=B({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const i=m(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>q("div",{class:i.value},F(o.default))}}),qo=B({name:"QItem",props:{...$e,...Lt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:i}){const{proxy:{$q:l}}=Q(),t=Pe(e,l),{hasRouterLink:a,hasLink:u,linkProps:v,linkClass:c,linkTag:n,navigateToRouterLink:w}=xt(),b=L(null),y=L(null),d=m(()=>e.clickable===!0||u.value===!0||e.tag==="label"),p=m(()=>e.disable!==!0&&d.value===!0),S=m(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?c.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(p.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),g=m(()=>{if(e.insetLevel===void 0)return null;const f=l.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function z(f){p.value===!0&&(y.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===b.value?y.value.focus():document.activeElement===y.value&&b.value.focus()),a.value===!0&&w(f),i("click",f))}function s(f){if(p.value===!0&&Ht(f,13)===!0){Be(f),f.qKeyEvent=!0;const _=new MouseEvent("click",f);_.qKeyEvent=!0,b.value.dispatchEvent(_)}i("keyup",f)}function C(){const f=et(o.default,[]);return p.value===!0&&f.unshift(q("div",{class:"q-focus-helper",tabindex:-1,ref:y})),f}return()=>{const f={ref:b,class:S.value,style:g.value,onClick:z,onKeyup:s};return p.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,v.value)):d.value===!0&&(f["aria-disabled"]="true"),q(n.value,f,C())}}});const _o=nt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function ko(e,o,i,l,t,a){const u=le("router-link");return G(),re(u,{to:{path:e.link}},{default:T(()=>[x(qo,{clickable:""},{default:T(()=>[e.icon?(G(),re(Ze,{key:0,avatar:""},{default:T(()=>[x(lt,{name:e.icon},null,8,["name"])]),_:1})):Dt("",!0),x(Ze,null,{default:T(()=>[x(Te,null,{default:T(()=>[ue(Fe(e.title),1)]),_:1}),x(Te,{caption:""},{default:T(()=>[ue(Fe(e.caption),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["to"])}var Co=it(_o,[["render",ko],["__scopeId","data-v-0dbb2ab6"]]),So="/assets/avatar.891e7507.png";const Lo=[{title:"about me",caption:"Jinwen Wu",icon:"person",link:"self-introduction"},{title:"Blogs",caption:"enjoy everything",icon:"widgets",link:"blog-overview"}],xo=nt({name:"MainLayout",components:{EssentialLink:Co},setup(){const e=L(!1);return{essentialLinks:Lo,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),To=e=>(Ft("data-v-431a2a8a"),e=e(),It(),e),Eo=ue("Wendongwoxin"),zo=To(()=>at("img",{src:So},null,-1)),Bo=ue(" Essential Links ");function $o(e,o,i,l,t,a){const u=le("router-link"),v=le("EssentialLink"),c=le("router-view");return G(),re(wo,{view:"lHh Lpr lFf"},{default:T(()=>[x(Gt,{elevated:""},{default:T(()=>[x(Kt,null,{default:T(()=>[x(Tt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),x(Ut,null,{default:T(()=>[x(u,{to:"/",class:"home"},{default:T(()=>[Eo]),_:1})]),_:1}),at("div",null,[x(Yt,null,{default:T(()=>[zo]),_:1})])]),_:1})]),_:1}),x(po,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=n=>e.leftDrawerOpen=n),"show-if-above":"",bordered:""},{default:T(()=>[x(Zt,null,{default:T(()=>[x(Te,{header:""},{default:T(()=>[Bo]),_:1}),(G(!0),Rt(At,null,Wt(e.essentialLinks,n=>(G(),re(v,Nt({key:n.title},n),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),x(bo,null,{default:T(()=>[x(c)]),_:1})]),_:1})}var Do=it(xo,[["render",$o],["__scopeId","data-v-431a2a8a"]]);export{Do as default};
