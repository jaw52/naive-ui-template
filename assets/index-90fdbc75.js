import{a as E,k as d,r as F,j as q,e as S,w as Qe,h as xt,q as ke,f as yt,p as G,t as ae,X as Ut,F as ne,A as Xe,B as ut,s as Re,v as Je,J as H,K as D,L as j,Q as P,P as O,l as Wt,Y as me,O as W,G as A,W as wt,Z as Yt,c as he,_ as $e,$ as qt,a0 as Gt,a1 as ht,a2 as Ce,a3 as _t,R as Ie,a4 as vt,a5 as Xt,U as Jt,V as Zt,x as Qt,S as mt}from"./vue-d1235445.js";import{Y as et,d as de,c as y,M as eo,b as f,O as to,h as u,u as X,e as K,Z as oo,l as Y,m as ee,$ as ro,x as Ct,r as ie,V as no,a as $,a0 as io,B as re,a1 as lo,a2 as tt,G as zt,a3 as ao,a4 as so,a5 as co,a6 as uo,a7 as ho,a8 as vo,I as Be,g as Pe,a9 as mo,aa as fo,ab as go,ac as po,ad as bo,ae as xo,af as yo,K as U,ag as wo,ah as _o,ai as Co,aj as zo,ak as J,al as So,am as ko,an as St,ao as $o,ap as ft,aq as Ro,ar as Io,as as kt,y as $t,at as ve,F as Ze,au as Bo,k as ot,av as Ne,aw as Po,ax as To,t as gt,E as Oo,ay as Ve,az as De,N as Mo,z as Lo,aA as Eo,_ as Ho,o as Ao,n as Rt,aB as Fo,R as It,aC as Bt,aD as Pt,aE as jo,aF as No,p as ue,aG as Tt,aH as Vo,aI as Ot,aJ as Do}from"./index-139d7e9f.js";import{t as Ko,g as Uo,C as Wo,_ as Te,a as rt,u as Yo,c as qo,N as Go}from"./Dropdown-c4c72898.js";import{u as fe,f as _e,N as Oe}from"./Icon-9bc4a50b.js";const Xo=E({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ke=et&&"loading"in document.createElement("img"),Jo=(e={})=>{var t;const{root:o=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof o=="string"?document.querySelector(o):o)||document.documentElement})}},Ue=new WeakMap,We=new WeakMap,Ye=new WeakMap,Zo=(e,t,o)=>{if(!e)return()=>{};const i=Jo(t),{root:n}=i.options;let r;const l=Ue.get(n);l?r=l:(r=new Map,Ue.set(n,r));let c,a;r.has(i.hash)?(a=r.get(i.hash),a[1].has(e)||(c=a[0],a[1].add(e),c.observe(e))):(c=new IntersectionObserver(C=>{C.forEach(v=>{if(v.isIntersecting){const B=We.get(v.target),w=Ye.get(v.target);B&&B(),w&&(w.value=!0)}})},i.options),c.observe(e),a=[c,new Set([e])],r.set(i.hash,a));let h=!1;const p=()=>{h||(We.delete(e),Ye.delete(e),h=!0,a[1].has(e)&&(a[0].unobserve(e),a[1].delete(e)),a[1].size<=0&&r.delete(i.hash),r.size||Ue.delete(n))};return We.set(e,p),Ye.set(e,o),p},Qo=de("n-avatar-group"),er=y("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[eo(f("&","--n-merged-color: var(--n-color-modal);")),to(f("&","--n-merged-color: var(--n-color-popover);")),f("img",`
 width: 100%;
 height: 100%;
 `),u("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),y("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),u("text","line-height: 1.25")]),tr=Object.assign(Object.assign({},K.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),or=E({name:"Avatar",props:tr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=X(e),i=F(!1);let n=null;const r=F(null),l=F(null),c=()=>{const{value:z}=r;if(z&&(n===null||n!==z.innerHTML)){n=z.innerHTML;const{value:k}=l;if(k){const{offsetWidth:_,offsetHeight:x}=k,{offsetWidth:b,offsetHeight:g}=z,T=.9,s=Math.min(_/b*T,x/g*T,1);z.style.transform=`translateX(-50%) translateY(-50%) scale(${s})`}}},a=q(Qo,null),h=S(()=>{const{size:z}=e;if(z)return z;const{size:k}=a||{};return k||"medium"}),p=K("Avatar","-avatar",er,oo,e,t),C=q(Ko,null),v=S(()=>{if(a)return!0;const{round:z,circle:k}=e;return z!==void 0||k!==void 0?z||k:C?C.roundRef.value:!1}),B=S(()=>a?!0:e.bordered||!1),w=z=>{var k;if(!L.value)return;i.value=!0;const{onError:_,imgProps:x}=e;(k=x==null?void 0:x.onError)===null||k===void 0||k.call(x,z),_&&_(z)};Qe(()=>e.src,()=>i.value=!1);const M=S(()=>{const z=h.value,k=v.value,_=B.value,{color:x}=e,{self:{borderRadius:b,fontSize:g,color:T,border:s,colorModal:I,colorPopover:N},common:{cubicBezierEaseInOut:te}}=p.value;let oe;return typeof z=="number"?oe=`${z}px`:oe=p.value.self[Y("height",z)],{"--n-font-size":g,"--n-border":_?s:"none","--n-border-radius":k?"50%":b,"--n-color":x||T,"--n-color-modal":x||I,"--n-color-popover":x||N,"--n-bezier":te,"--n-merged-size":`var(--n-avatar-size-override, ${oe})`}}),R=o?ee("avatar",S(()=>{const z=h.value,k=v.value,_=B.value,{color:x}=e;let b="";return z&&(typeof z=="number"?b+=`a${z}`:b+=z[0]),k&&(b+="b"),_&&(b+="c"),x&&(b+=ro(x)),b}),M,e):void 0,L=F(!e.lazy);xt(()=>{if(Ke)return;let z;const k=ke(()=>{z==null||z(),z=void 0,e.lazy&&(z=Zo(l.value,e.intersectionObserverOptions,L))});yt(()=>{k(),z==null||z()})});const V=F(!e.lazy);return{textRef:r,selfRef:l,mergedRoundRef:v,mergedClsPrefix:t,fitTextTransform:c,cssVars:o?void 0:M,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender,hasLoadError:i,handleError:w,shouldStartLoading:L,loaded:V,mergedOnLoad:z=>{var k;const{onLoad:_,imgProps:x}=e;_==null||_(z),(k=x==null?void 0:x.onLoad)===null||k===void 0||k.call(x,z),V.value=!0}}},render(){var e,t;const{$slots:o,src:i,mergedClsPrefix:n,lazy:r,onRender:l,mergedOnLoad:c,shouldStartLoading:a,loaded:h,hasLoadError:p}=this;l==null||l();let C;const v=!h&&!p&&(this.renderPlaceholder?this.renderPlaceholder():(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e));return this.hasLoadError?C=this.renderFallback?this.renderFallback():Ct(o.fallback,()=>[d("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):C=ie(o.default,B=>{if(B)return d(no,{onResize:this.fitTextTransform},{default:()=>d("span",{ref:"textRef",class:`${n}-avatar__text`},B)});if(i){const{imgProps:w}=this;return d("img",Object.assign(Object.assign({},w),{loading:Ke&&!this.intersectionObserverOptions&&r?"lazy":"eager",src:Ke||a||h?i:void 0,onLoad:c,"data-image-src":i,onError:this.handleError,style:[w==null?void 0:w.style,{objectFit:this.objectFit},v?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),d("span",{ref:"selfRef",class:[`${n}-avatar`,this.themeClass],style:this.cssVars},C,r&&v)}}),rr=y("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[f("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),f("a",`
 color: inherit;
 text-decoration: inherit;
 `),y("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[y("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),f("&:not(:last-child)",[$("clickable",[u("link",`
 cursor: pointer;
 `,[f("&:hover",`
 background-color: var(--n-item-color-hover);
 `),f("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),u("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[f("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[y("icon",`
 color: var(--n-item-text-color-hover);
 `)]),f("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[y("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),u("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),f("&:last-child",[u("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[y("icon",`
 color: var(--n-item-text-color-active);
 `)]),u("separator",`
 display: none;
 `)])])]),Mt=de("n-breadcrumb"),nr=Object.assign(Object.assign({},K.props),{separator:{type:String,default:"/"}}),ir=E({name:"Breadcrumb",props:nr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=X(e),i=K("Breadcrumb","-breadcrumb",rr,io,e,t);G(Mt,{separatorRef:ae(e,"separator"),mergedClsPrefixRef:t});const n=S(()=>{const{common:{cubicBezierEaseInOut:l},self:{separatorColor:c,itemTextColor:a,itemTextColorHover:h,itemTextColorPressed:p,itemTextColorActive:C,fontSize:v,fontWeightActive:B,itemBorderRadius:w,itemColorHover:M,itemColorPressed:R,itemLineHeight:L}}=i.value;return{"--n-font-size":v,"--n-bezier":l,"--n-item-text-color":a,"--n-item-text-color-hover":h,"--n-item-text-color-pressed":p,"--n-item-text-color-active":C,"--n-separator-color":c,"--n-item-color-hover":M,"--n-item-color-pressed":R,"--n-item-border-radius":w,"--n-font-weight-active":B,"--n-item-line-height":L}}),r=o?ee("breadcrumb",void 0,n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),d("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},d("ul",null,this.$slots))}}),lr=et?window:null,ar=(e=lr)=>{const t=()=>{const{hash:n,host:r,hostname:l,href:c,origin:a,pathname:h,port:p,protocol:C,search:v}=(e==null?void 0:e.location)||{};return{hash:n,host:r,hostname:l,href:c,origin:a,pathname:h,port:p,protocol:C,search:v}},o=()=>{i.value=t()},i=F(t());return xt(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),Ut(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),i},sr={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},cr=E({name:"BreadcrumbItem",props:sr,setup(e,{slots:t}){const o=q(Mt,null);if(!o)return()=>null;const{separatorRef:i,mergedClsPrefixRef:n}=o,r=ar(),l=S(()=>e.href?"a":"span"),c=S(()=>r.value.href===e.href?"location":null);return()=>{const{value:a}=n;return d("li",{class:[`${a}-breadcrumb-item`,e.clickable&&`${a}-breadcrumb-item--clickable`]},d(l.value,{class:`${a}-breadcrumb-item__link`,"aria-current":c.value,href:e.href,onClick:e.onClick},t),d("span",{class:`${a}-breadcrumb-item__separator`,"aria-hidden":"true"},Ct(t.separator,()=>{var h;return[(h=e.separator)!==null&&h!==void 0?h:i.value]})))}}}),dr=y("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[re("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[re("no-title",`
 display: flex;
 align-items: center;
 `)]),u("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),$("title-position-left",[u("line",[$("left",{width:"28px"})])]),$("title-position-right",[u("line",[$("right",{width:"28px"})])]),$("dashed",[u("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),$("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),u("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),re("dashed",[u("line",{backgroundColor:"var(--n-color)"})]),$("dashed",[u("line",{borderColor:"var(--n-color)"})]),$("vertical",{backgroundColor:"var(--n-color)"})]),ur=Object.assign(Object.assign({},K.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),hr=E({name:"Divider",props:ur,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=X(e),i=K("Divider","-divider",dr,lo,e,t),n=S(()=>{const{common:{cubicBezierEaseInOut:l},self:{color:c,textColor:a,fontWeight:h}}=i.value;return{"--n-bezier":l,"--n-color":c,"--n-text-color":a,"--n-font-weight":h}}),r=o?ee("divider",void 0,n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{$slots:t,titlePlacement:o,vertical:i,dashed:n,cssVars:r,mergedClsPrefix:l}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{role:"separator",class:[`${l}-divider`,this.themeClass,{[`${l}-divider--vertical`]:i,[`${l}-divider--no-title`]:!t.default,[`${l}-divider--dashed`]:n,[`${l}-divider--title-position-${o}`]:t.default&&o}],style:r},i?null:d("div",{class:`${l}-divider__line ${l}-divider__line--left`}),!i&&t.default?d(ne,null,d("div",{class:`${l}-divider__title`},this.$slots),d("div",{class:`${l}-divider__line ${l}-divider__line--right`})):null)}}),vr=E({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=F(!!e.show),o=F(null),i=q(tt);let n=0,r="",l=null;const c=F(!1),a=F(!1),h=S(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:p,mergedRtlRef:C}=X(e),v=zt("Drawer",C,p),B=b=>{a.value=!0,n=h.value?b.clientY:b.clientX,r=document.body.style.cursor,document.body.style.cursor=h.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",V),document.body.addEventListener("mouseleave",k),document.body.addEventListener("mouseup",z)},w=()=>{l!==null&&(window.clearTimeout(l),l=null),a.value?c.value=!0:l=window.setTimeout(()=>{c.value=!0},300)},M=()=>{l!==null&&(window.clearTimeout(l),l=null),c.value=!1},{doUpdateHeight:R,doUpdateWidth:L}=i,V=b=>{var g,T;if(a.value)if(h.value){let s=((g=o.value)===null||g===void 0?void 0:g.offsetHeight)||0;const I=n-b.clientY;s+=e.placement==="bottom"?I:-I,R(s),n=b.clientY}else{let s=((T=o.value)===null||T===void 0?void 0:T.offsetWidth)||0;const I=n-b.clientX;s+=e.placement==="right"?I:-I,L(s),n=b.clientX}},z=()=>{a.value&&(n=0,a.value=!1,document.body.style.cursor=r,document.body.removeEventListener("mousemove",V),document.body.removeEventListener("mouseup",z),document.body.removeEventListener("mouseleave",k))},k=z;ke(()=>{e.show&&(t.value=!0)}),Qe(()=>e.show,b=>{b||z()}),yt(()=>{z()});const _=S(()=>{const{show:b}=e,g=[[ut,b]];return e.showMask||g.push([ao,e.onClickoutside,void 0,{capture:!0}]),g});function x(){var b;t.value=!1,(b=e.onAfterLeave)===null||b===void 0||b.call(e)}return so(S(()=>e.blockScroll&&t.value)),G(co,o),G(uo,null),G(ho,null),{bodyRef:o,rtlEnabled:v,mergedClsPrefix:i.mergedClsPrefixRef,isMounted:i.isMountedRef,mergedTheme:i.mergedThemeRef,displayed:t,transitionName:S(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:x,bodyDirectives:_,handleMousedownResizeTrigger:B,handleMouseenterResizeTrigger:w,handleMouseleaveResizeTrigger:M,isDragging:a,isHoverOnResizeTrigger:c}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?Xe(d("div",{role:"none"},d(vo,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>d(Re,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>Xe(d("div",Je(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?d("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?d("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):d(Be,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[ut,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:mr,cubicBezierEaseOut:fr}=Pe;function gr({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[f(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${mr}`}),f(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${fr}`}),f(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),f(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),f(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),f(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:pr,cubicBezierEaseOut:br}=Pe;function xr({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[f(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${pr}`}),f(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${br}`}),f(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),f(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),f(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),f(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:yr,cubicBezierEaseOut:wr}=Pe;function _r({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[f(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${yr}`}),f(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${wr}`}),f(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),f(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),f(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),f(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:Cr,cubicBezierEaseOut:zr}=Pe;function Sr({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[f(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Cr}`}),f(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${zr}`}),f(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),f(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),f(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),f(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const kr=f([y("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[gr(),xr(),_r(),Sr(),$("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),$("native-scrollbar",[y("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),u("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[$("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),y("drawer-content-wrapper",`
 box-sizing: border-box;
 `),y("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[$("native-scrollbar",[y("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),y("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),y("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),y("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[u("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),y("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),$("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[u("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),$("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[u("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),$("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[u("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),$("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[u("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),f("body",[f(">",[y("drawer-container",{position:"fixed"})])]),y("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[f("> *",{pointerEvents:"all"})]),y("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[$("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),mo({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),$r=Object.assign(Object.assign({},K.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Rr=E({name:"Drawer",inheritAttrs:!1,props:$r,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:i}=X(e),n=fo(),r=K("Drawer","-drawer",kr,go,e,t),l=F(e.defaultWidth),c=F(e.defaultHeight),a=fe(ae(e,"width"),l),h=fe(ae(e,"height"),c),p=S(()=>{const{placement:_}=e;return _==="top"||_==="bottom"?"":_e(a.value)}),C=S(()=>{const{placement:_}=e;return _==="left"||_==="right"?"":_e(h.value)}),v=_=>{const{onUpdateWidth:x,"onUpdate:width":b}=e;x&&U(x,_),b&&U(b,_),l.value=_},B=_=>{const{onUpdateHeight:x,"onUpdate:width":b}=e;x&&U(x,_),b&&U(b,_),c.value=_},w=S(()=>[{width:p.value,height:C.value},e.drawerStyle||""]);function M(_){const{onMaskClick:x,maskClosable:b}=e;b&&V(!1),x&&x(_)}const R=po();function L(_){var x;(x=e.onEsc)===null||x===void 0||x.call(e),e.show&&e.closeOnEsc&&yo(_)&&!R.value&&V(!1)}function V(_){const{onHide:x,onUpdateShow:b,"onUpdate:show":g}=e;b&&U(b,_),g&&U(g,_),x&&!_&&U(x,_)}G(tt,{isMountedRef:n,mergedThemeRef:r,mergedClsPrefixRef:t,doUpdateShow:V,doUpdateHeight:B,doUpdateWidth:v});const z=S(()=>{const{common:{cubicBezierEaseInOut:_,cubicBezierEaseIn:x,cubicBezierEaseOut:b},self:{color:g,textColor:T,boxShadow:s,lineHeight:I,headerPadding:N,footerPadding:te,bodyPadding:oe,titleFontSize:pe,titleTextColor:m,titleFontWeight:Le,headerBorderBottom:Z,footerBorderTop:Ee,closeIconColor:He,closeIconColorHover:Q,closeIconColorPressed:se,closeColorHover:Ae,closeColorPressed:Fe,closeIconSize:je,closeSize:be,closeBorderRadius:xe,resizableTriggerColorHover:ye}}=r.value;return{"--n-line-height":I,"--n-color":g,"--n-text-color":T,"--n-box-shadow":s,"--n-bezier":_,"--n-bezier-out":b,"--n-bezier-in":x,"--n-header-padding":N,"--n-body-padding":oe,"--n-footer-padding":te,"--n-title-text-color":m,"--n-title-font-size":pe,"--n-title-font-weight":Le,"--n-header-border-bottom":Z,"--n-footer-border-top":Ee,"--n-close-icon-color":He,"--n-close-icon-color-hover":Q,"--n-close-icon-color-pressed":se,"--n-close-size":be,"--n-close-color-hover":Ae,"--n-close-color-pressed":Fe,"--n-close-icon-size":je,"--n-close-border-radius":xe,"--n-resize-trigger-color-hover":ye}}),k=i?ee("drawer",void 0,z,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:w,handleMaskClick:M,handleEsc:L,mergedTheme:r,cssVars:i?void 0:z,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender,isMounted:n}},render(){const{mergedClsPrefix:e}=this;return d(xo,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),Xe(d("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?d(Re,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?d("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,d(vr,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[bo,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Ir={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Br=E({name:"DrawerContent",props:Ir,setup(){const e=q(tt,null);e||wo("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function o(){t(!1)}return{handleCloseClick:o,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:o,mergedTheme:i,bodyStyle:n,bodyContentStyle:r,headerStyle:l,footerStyle:c,scrollbarProps:a,closable:h,$slots:p}=this;return d("div",{role:"none",class:[`${t}-drawer-content`,o&&`${t}-drawer-content--native-scrollbar`]},p.header||e||h?d("div",{class:`${t}-drawer-header`,style:l,role:"none"},d("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},p.header!==void 0?p.header():e),h&&d(_o,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,o?d("div",{class:`${t}-drawer-body`,style:n,role:"none"},d("div",{class:`${t}-drawer-body-content-wrapper`,style:r,role:"none"},p)):d(Be,Object.assign({themeOverrides:i.peerOverrides.Scrollbar,theme:i.peers.Scrollbar},a,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:r}),p),p.footer?d("div",{class:`${t}-drawer-footer`,style:c,role:"none"},p.footer()):null)}}),Pr=()=>Co,Tr={name:"Space",self:Pr},Or=Tr;let qe;const Mr=()=>{if(!et)return!0;if(qe===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),qe=t}return qe},Lr=Object.assign(Object.assign({},K.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Me=E({name:"Space",props:Lr,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=X(e),i=K("Space","-space",void 0,Or,e,t),n=zt("Space",o,t);return{useGap:Mr(),rtlEnabled:n,mergedClsPrefix:t,margin:S(()=>{const{size:r}=e;if(Array.isArray(r))return{horizontal:r[0],vertical:r[1]};if(typeof r=="number")return{horizontal:r,vertical:r};const{self:{[Y("gap",r)]:l}}=i.value,{row:c,col:a}=zo(l);return{horizontal:J(a),vertical:J(c)}})}},render(){const{vertical:e,align:t,inline:o,justify:i,itemStyle:n,margin:r,wrap:l,mergedClsPrefix:c,rtlEnabled:a,useGap:h,wrapItem:p,internalUseGap:C}=this,v=So(Uo(this));if(!v.length)return null;const B=`${r.horizontal}px`,w=`${r.horizontal/2}px`,M=`${r.vertical}px`,R=`${r.vertical/2}px`,L=v.length-1,V=i.startsWith("space-");return d("div",{role:"none",class:[`${c}-space`,a&&`${c}-space--rtl`],style:{display:o?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(i)?"flex-"+i:i,flexWrap:!l||e?"nowrap":"wrap",marginTop:h||e?"":`-${R}`,marginBottom:h||e?"":`-${R}`,alignItems:t,gap:h?`${r.vertical}px ${r.horizontal}px`:""}},!p&&(h||C)?v:v.map((z,k)=>d("div",{role:"none",style:[n,{maxWidth:"100%"},h?"":e?{marginBottom:k!==L?M:""}:a?{marginLeft:V?i==="space-between"&&k===L?"":w:k!==L?B:"",marginRight:V?i==="space-between"&&k===0?"":w:"",paddingTop:R,paddingBottom:R}:{marginRight:V?i==="space-between"&&k===L?"":w:k!==L?B:"",marginLeft:V?i==="space-between"&&k===0?"":w:"",paddingTop:R,paddingBottom:R}]},z)))}}),Er=e=>{const{baseColor:t,textColor2:o,bodyColor:i,cardColor:n,dividerColor:r,actionColor:l,scrollbarColor:c,scrollbarColorHover:a,invertedColor:h}=e;return{textColor:o,textColorInverted:"#FFF",color:i,colorEmbedded:l,headerColor:n,headerColorInverted:h,footerColor:l,footerColorInverted:h,headerBorderColor:r,headerBorderColorInverted:h,footerBorderColor:r,footerBorderColorInverted:h,siderBorderColor:r,siderBorderColorInverted:h,siderColor:n,siderColorInverted:h,siderToggleButtonBorder:`1px solid ${r}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:ft(i,c),siderToggleBarColorHover:ft(i,a),__invertScrollbar:"true"}},Hr=ko({name:"Layout",common:St,peers:{Scrollbar:$o},self:Er}),nt=Hr,Ar=e=>{const{primaryColor:t,opacityDisabled:o,borderRadius:i,textColor3:n}=e,r="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Ro),{iconColor:n,textColor:"white",loadingColor:t,opacityDisabled:o,railColor:r,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${Io(t,{alpha:.2})}`})},Fr={name:"Switch",common:St,self:Ar},jr=Fr,Lt=de("n-layout-sider"),it={type:String,default:"static"},Nr=y("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[y("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),$("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Vr={embedded:Boolean,position:it,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Et=de("n-layout");function Ht(e){return E({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},K.props),Vr),setup(t){const o=F(null),i=F(null),{mergedClsPrefixRef:n,inlineThemeDisabled:r}=X(t),l=K("Layout","-layout",Nr,nt,t,n);function c(M,R){if(t.nativeScrollbar){const{value:L}=o;L&&(R===void 0?L.scrollTo(M):L.scrollTo(M,R))}else{const{value:L}=i;L&&L.scrollTo(M,R)}}G(Et,t);let a=0,h=0;const p=M=>{var R;const L=M.target;a=L.scrollLeft,h=L.scrollTop,(R=t.onScroll)===null||R===void 0||R.call(t,M)};kt(()=>{if(t.nativeScrollbar){const M=o.value;M&&(M.scrollTop=h,M.scrollLeft=a)}});const C={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},v={scrollTo:c},B=S(()=>{const{common:{cubicBezierEaseInOut:M},self:R}=l.value;return{"--n-bezier":M,"--n-color":t.embedded?R.colorEmbedded:R.color,"--n-text-color":R.textColor}}),w=r?ee("layout",S(()=>t.embedded?"e":""),B,t):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:o,scrollbarInstRef:i,hasSiderStyle:C,mergedTheme:l,handleNativeElScroll:p,cssVars:r?void 0:B,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender},v)},render(){var t;const{mergedClsPrefix:o,hasSider:i}=this;(t=this.onRender)===null||t===void 0||t.call(this);const n=i?this.hasSiderStyle:void 0,r=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return d("div",{class:r,style:this.cssVars},this.nativeScrollbar?d("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):d(Be,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const Dr=Ht(!1),Kr=Ht(!0),Ur=y("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[$("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),$("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Wr={position:it,inverted:Boolean,bordered:{type:Boolean,default:!1}},Yr=E({name:"LayoutHeader",props:Object.assign(Object.assign({},K.props),Wr),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=X(e),i=K("Layout","-layout-header",Ur,nt,e,t),n=S(()=>{const{common:{cubicBezierEaseInOut:l},self:c}=i.value,a={"--n-bezier":l};return e.inverted?(a["--n-color"]=c.headerColorInverted,a["--n-text-color"]=c.textColorInverted,a["--n-border-color"]=c.headerBorderColorInverted):(a["--n-color"]=c.headerColor,a["--n-text-color"]=c.textColor,a["--n-border-color"]=c.headerBorderColor),a}),r=o?ee("layout-header",S(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),qr=y("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[$("bordered",[u("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),u("left-placement",[$("bordered",[u("border",`
 right: 0;
 `)])]),$("right-placement",`
 justify-content: flex-start;
 `,[$("bordered",[u("border",`
 left: 0;
 `)]),$("collapsed",[y("layout-toggle-button",[y("base-icon",`
 transform: rotate(180deg);
 `)]),y("layout-toggle-bar",[f("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),y("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[y("base-icon",`
 transform: rotate(0);
 `)]),y("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[f("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),$("collapsed",[y("layout-toggle-bar",[f("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),y("layout-toggle-button",[y("base-icon",`
 transform: rotate(0);
 `)])]),y("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[y("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),y("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[u("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),u("bottom",`
 position: absolute;
 top: 34px;
 `),f("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),f("&:hover",[u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),u("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),y("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),$("show-content",[y("layout-sider-scroll-container",{opacity:1})]),$("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Gr=E({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},d($t,{clsPrefix:e},{default:()=>d(Wo,null)}))}}),Xr=E({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},d("div",{class:`${e}-layout-toggle-bar__top`}),d("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Jr={position:it,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Zr=E({name:"LayoutSider",props:Object.assign(Object.assign({},K.props),Jr),setup(e){const t=q(Et),o=F(null),i=F(null),n=S(()=>_e(a.value?e.collapsedWidth:e.width)),r=S(()=>e.collapseMode!=="transform"?{}:{minWidth:_e(e.width)}),l=S(()=>t?t.siderPlacement:"left"),c=F(e.defaultCollapsed),a=fe(ae(e,"collapsed"),c);function h(_,x){if(e.nativeScrollbar){const{value:b}=o;b&&(x===void 0?b.scrollTo(_):b.scrollTo(_,x))}else{const{value:b}=i;b&&b.scrollTo(_,x)}}function p(){const{"onUpdate:collapsed":_,onUpdateCollapsed:x,onExpand:b,onCollapse:g}=e,{value:T}=a;x&&U(x,!T),_&&U(_,!T),c.value=!T,T?b&&U(b):g&&U(g)}let C=0,v=0;const B=_=>{var x;const b=_.target;C=b.scrollLeft,v=b.scrollTop,(x=e.onScroll)===null||x===void 0||x.call(e,_)};kt(()=>{if(e.nativeScrollbar){const _=o.value;_&&(_.scrollTop=v,_.scrollLeft=C)}}),G(Lt,{collapsedRef:a,collapseModeRef:ae(e,"collapseMode")});const{mergedClsPrefixRef:w,inlineThemeDisabled:M}=X(e),R=K("Layout","-layout-sider",qr,nt,e,w);function L(_){var x,b;_.propertyName==="max-width"&&(a.value?(x=e.onAfterLeave)===null||x===void 0||x.call(e):(b=e.onAfterEnter)===null||b===void 0||b.call(e))}const V={scrollTo:h},z=S(()=>{const{common:{cubicBezierEaseInOut:_},self:x}=R.value,{siderToggleButtonColor:b,siderToggleButtonBorder:g,siderToggleBarColor:T,siderToggleBarColorHover:s}=x,I={"--n-bezier":_,"--n-toggle-button-color":b,"--n-toggle-button-border":g,"--n-toggle-bar-color":T,"--n-toggle-bar-color-hover":s};return e.inverted?(I["--n-color"]=x.siderColorInverted,I["--n-text-color"]=x.textColorInverted,I["--n-border-color"]=x.siderBorderColorInverted,I["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColorInverted,I.__invertScrollbar=x.__invertScrollbar):(I["--n-color"]=x.siderColor,I["--n-text-color"]=x.textColor,I["--n-border-color"]=x.siderBorderColor,I["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColor),I}),k=M?ee("layout-sider",S(()=>e.inverted?"a":"b"),z,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:i,mergedClsPrefix:w,mergedTheme:R,styleMaxWidth:n,mergedCollapsed:a,scrollContainerStyle:r,siderPlacement:l,handleNativeElScroll:B,handleTransitionend:L,handleTriggerClick:p,inlineThemeDisabled:M,cssVars:z,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender},V)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:_e(this.width)}]},this.nativeScrollbar?d("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):d(Be,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?d(Xr,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):d(Gr,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?d("div",{class:`${t}-layout-sider__border`}):null)}}),ze=de("n-menu"),lt=de("n-submenu"),at=de("n-menu-item-group"),Se=8;function st(e){const t=q(ze),{props:o,mergedCollapsedRef:i}=t,n=q(lt,null),r=q(at,null),l=S(()=>o.mode==="horizontal"),c=S(()=>l.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=S(()=>{var v;return Math.max((v=o.collapsedIconSize)!==null&&v!==void 0?v:o.iconSize,o.iconSize)}),h=S(()=>{var v;return!l.value&&e.root&&i.value&&(v=o.collapsedIconSize)!==null&&v!==void 0?v:o.iconSize}),p=S(()=>{if(l.value)return;const{collapsedWidth:v,indent:B,rootIndent:w}=o,{root:M,isGroup:R}=e,L=w===void 0?B:w;if(M)return i.value?v/2-a.value/2:L;if(r)return B/2+r.paddingLeftRef.value;if(n)return(R?B/2:B)+n.paddingLeftRef.value}),C=S(()=>{const{collapsedWidth:v,indent:B,rootIndent:w}=o,{value:M}=a,{root:R}=e;return l.value||!R||!i.value?Se:(w===void 0?B:w)+M+Se-(v+M)/2});return{dropdownPlacement:c,activeIconSize:h,maxIconSize:a,paddingLeft:p,iconMarginRight:C,NMenu:t,NSubmenu:n}}const ct={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},At=Object.assign(Object.assign({},ct),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Qr=E({name:"MenuOptionGroup",props:At,setup(e){G(lt,null);const t=st(e);G(at,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:i}=q(ze);return function(){const{value:n}=o,r=t.paddingLeft.value,{nodeProps:l}=i,c=l==null?void 0:l(e.tmNode.rawNode);return d("div",{class:`${n}-menu-item-group`,role:"group"},d("div",Object.assign({},c,{class:[`${n}-menu-item-group-title`,c==null?void 0:c.class],style:[(c==null?void 0:c.style)||"",r!==void 0?`padding-left: ${r}px;`:""]}),ve(e.title),e.extra?d(ne,null," ",ve(e.extra)):null),d("div",null,e.tmNodes.map(a=>dt(a,i))))}}}),Ft=E({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=q(ze);return{menuProps:t,style:S(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:S(()=>{const{maxIconSize:o,activeIconSize:i,iconMarginRight:n}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${i}px`,marginRight:`${n}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:i,renderExtra:n,expandIcon:r}}=this,l=o?o(t.rawNode):ve(this.icon);return d("div",{onClick:c=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,c)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(t.rawNode):ve(this.title),this.extra||n?d("span",{class:`${e}-menu-item-content-header__extra`}," ",n?n(t.rawNode):ve(this.extra)):null),this.showArrow?d($t,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>r?r(t.rawNode):d(Xo,null)}):null)}}),jt=Object.assign(Object.assign({},ct),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),en=E({name:"Submenu",props:jt,setup(e){const t=st(e),{NMenu:o,NSubmenu:i}=t,{props:n,mergedCollapsedRef:r,mergedThemeRef:l}=o,c=S(()=>{const{disabled:v}=e;return i!=null&&i.mergedDisabledRef.value||n.disabled?!0:v}),a=F(!1);G(lt,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:c}),G(at,null);function h(){const{onClick:v}=e;v&&v()}function p(){c.value||(r.value||o.toggleExpand(e.internalKey),h())}function C(v){a.value=v}return{menuProps:n,mergedTheme:l,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:c,mergedValue:o.mergedValueRef,childActive:Ze(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:S(()=>n.mode==="horizontal"?!1:r.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:S(()=>!c.value&&(n.mode==="horizontal"||r.value)),handlePopoverShowChange:C,handleClick:p}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:i}}=this,n=()=>{const{isHorizontal:l,paddingLeft:c,collapsed:a,mergedDisabled:h,maxIconSize:p,activeIconSize:C,title:v,childActive:B,icon:w,handleClick:M,menuProps:{nodeProps:R},dropdownShow:L,iconMarginRight:V,tmNode:z,mergedClsPrefix:k}=this,_=R==null?void 0:R(z.rawNode);return d("div",Object.assign({},_,{class:[`${k}-menu-item`,_==null?void 0:_.class],role:"menuitem"}),d(Ft,{tmNode:z,paddingLeft:c,collapsed:a,disabled:h,iconMarginRight:V,maxIconSize:p,activeIconSize:C,title:v,extra:this.extra,showArrow:!l,childActive:B,clsPrefix:k,icon:w,hover:L,onClick:M}))},r=()=>d(Bo,null,{default:()=>{const{tmNodes:l,collapsed:c}=this;return c?null:d("div",{class:`${t}-submenu-children`,role:"menu"},l.map(a=>dt(a,this.menuProps)))}});return this.root?d(Te,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:i}),{default:()=>d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),this.isHorizontal?null:r())}):d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),r())}}),Nt=Object.assign(Object.assign({},ct),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),tn=E({name:"MenuOption",props:Nt,setup(e){const t=st(e),{NSubmenu:o,NMenu:i}=t,{props:n,mergedClsPrefixRef:r,mergedCollapsedRef:l}=i,c=o?o.mergedDisabledRef:{value:!1},a=S(()=>c.value||e.disabled);function h(C){const{onClick:v}=e;v&&v(C)}function p(C){a.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),h(C))}return{mergedClsPrefix:r,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:n,dropdownEnabled:Ze(()=>e.root&&l.value&&n.mode!=="horizontal"&&!a.value),selected:Ze(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:p}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:i,nodeProps:n}}=this,r=n==null?void 0:n(o.rawNode);return d("div",Object.assign({},r,{role:"menuitem",class:[`${e}-menu-item`,r==null?void 0:r.class]}),d(rt,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(o.rawNode):ve(this.title),trigger:()=>d(Ft,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),on=E({name:"MenuDivider",setup(){const e=q(ze),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:d("div",{class:`${t.value}-menu-divider`})}}),rn=ot(At),nn=ot(Nt),ln=ot(jt);function Vt(e){return e.type==="divider"||e.type==="render"}function an(e){return e.type==="divider"}function dt(e,t){const{rawNode:o}=e,{show:i}=o;if(i===!1)return null;if(Vt(o))return an(o)?d(on,Object.assign({key:e.key},o.props)):null;const{labelField:n}=t,{key:r,level:l,isGroup:c}=e,a=Object.assign(Object.assign({},o),{title:o.title||o[n],extra:o.titleExtra||o.extra,key:r,internalKey:r,level:l,root:l===0,isGroup:c});return e.children?e.isGroup?d(Qr,Ne(a,rn,{tmNode:e,tmNodes:e.children,key:r})):d(en,Ne(a,ln,{key:r,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):d(tn,Ne(a,nn,{key:r,tmNode:e}))}const pt=[f("&::before","background-color: var(--n-item-color-hover);"),u("arrow",`
 color: var(--n-arrow-color-hover);
 `),u("icon",`
 color: var(--n-item-icon-color-hover);
 `),y("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[f("a",`
 color: var(--n-item-text-color-hover);
 `),u("extra",`
 color: var(--n-item-text-color-hover);
 `)])],bt=[u("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),y("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],sn=f([y("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[$("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[y("submenu","margin: 0;"),y("menu-item","margin: 0;"),y("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[f("&::before","display: none;"),$("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),y("menu-item-content",[$("selected",[u("icon","color: var(--n-item-icon-color-active-horizontal);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-horizontal);"),u("extra","color: var(--n-item-text-color-active-horizontal);")])]),$("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),u("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),re("disabled",[re("selected, child-active",[f("&:focus-within",bt)]),$("selected",[ce(null,[u("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),$("child-active",[ce(null,[u("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),ce("border-bottom: 2px solid var(--n-border-color-horizontal);",bt)]),y("menu-item-content-header",[f("a","color: var(--n-item-text-color-horizontal);")])])]),$("collapsed",[y("menu-item-content",[$("selected",[f("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),y("menu-item-content-header","opacity: 0;"),u("arrow","opacity: 0;"),u("icon","color: var(--n-item-icon-color-collapsed);")])]),y("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),y("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[f("> *","z-index: 1;"),f("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),$("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),$("collapsed",[u("arrow","transform: rotate(0);")]),$("selected",[f("&::before","background-color: var(--n-item-color-active);"),u("arrow","color: var(--n-arrow-color-active);"),u("icon","color: var(--n-item-icon-color-active);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[f("a","color: var(--n-item-text-color-active);"),u("extra","color: var(--n-item-text-color-active);")])]),$("child-active",[y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[f("a",`
 color: var(--n-item-text-color-child-active);
 `),u("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),u("arrow",`
 color: var(--n-arrow-color-child-active);
 `),u("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),re("disabled",[re("selected, child-active",[f("&:focus-within",pt)]),$("selected",[ce(null,[u("arrow","color: var(--n-arrow-color-active-hover);"),u("icon","color: var(--n-item-icon-color-active-hover);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[f("a","color: var(--n-item-text-color-active-hover);"),u("extra","color: var(--n-item-text-color-active-hover);")])])]),$("child-active",[ce(null,[u("arrow","color: var(--n-arrow-color-child-active-hover);"),u("icon","color: var(--n-item-icon-color-child-active-hover);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[f("a","color: var(--n-item-text-color-child-active-hover);"),u("extra","color: var(--n-item-text-color-child-active-hover);")])])]),$("selected",[ce(null,[f("&::before","background-color: var(--n-item-color-active-hover);")])]),ce(null,pt)]),u("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),u("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),y("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[f("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[f("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),u("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),y("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[y("menu-item-content",`
 height: var(--n-item-height);
 `),y("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Po({duration:".2s"})])]),y("menu-item-group",[y("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),y("menu-tooltip",[f("a",`
 color: inherit;
 text-decoration: none;
 `)]),y("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function ce(e,t){return[$("hover",e,t),f("&:hover",e,t)]}const cn=Object.assign(Object.assign({},K.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),dn=E({name:"Menu",props:cn,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=X(e),i=K("Menu","-menu",sn,To,e,t),n=q(Lt,null),r=S(()=>{var g;const{collapsed:T}=e;if(T!==void 0)return T;if(n){const{collapseModeRef:s,collapsedRef:I}=n;if(s.value==="width")return(g=I.value)!==null&&g!==void 0?g:!1}return!1}),l=S(()=>{const{keyField:g,childrenField:T,disabledField:s}=e;return qo(e.items||e.options,{getIgnored(I){return Vt(I)},getChildren(I){return I[T]},getDisabled(I){return I[s]},getKey(I){var N;return(N=I[g])!==null&&N!==void 0?N:I.name}})}),c=S(()=>new Set(l.value.treeNodes.map(g=>g.key))),{watchProps:a}=e,h=F(null);a!=null&&a.includes("defaultValue")?ke(()=>{h.value=e.defaultValue}):h.value=e.defaultValue;const p=ae(e,"value"),C=fe(p,h),v=F([]),B=()=>{v.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(C.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?ke(B):B();const w=Yo(e,["expandedNames","expandedKeys"]),M=fe(w,v),R=S(()=>l.value.treeNodes),L=S(()=>l.value.getPath(C.value).keyPath);G(ze,{props:e,mergedCollapsedRef:r,mergedThemeRef:i,mergedValueRef:C,mergedExpandedKeysRef:M,activePathRef:L,mergedClsPrefixRef:t,isHorizontalRef:S(()=>e.mode==="horizontal"),invertedRef:ae(e,"inverted"),doSelect:V,toggleExpand:k});function V(g,T){const{"onUpdate:value":s,onUpdateValue:I,onSelect:N}=e;I&&U(I,g,T),s&&U(s,g,T),N&&U(N,g,T),h.value=g}function z(g){const{"onUpdate:expandedKeys":T,onUpdateExpandedKeys:s,onExpandedNamesChange:I,onOpenNamesChange:N}=e;T&&U(T,g),s&&U(s,g),I&&U(I,g),N&&U(N,g),v.value=g}function k(g){const T=Array.from(M.value),s=T.findIndex(I=>I===g);if(~s)T.splice(s,1);else{if(e.accordion&&c.value.has(g)){const I=T.findIndex(N=>c.value.has(N));I>-1&&T.splice(I,1)}T.push(g)}z(T)}const _=g=>{const T=l.value.getPath(g??C.value,{includeSelf:!1}).keyPath;if(!T.length)return;const s=Array.from(M.value),I=new Set([...s,...T]);e.accordion&&c.value.forEach(N=>{I.has(N)&&!T.includes(N)&&I.delete(N)}),z(Array.from(I))},x=S(()=>{const{inverted:g}=e,{common:{cubicBezierEaseInOut:T},self:s}=i.value,{borderRadius:I,borderColorHorizontal:N,fontSize:te,itemHeight:oe,dividerColor:pe}=s,m={"--n-divider-color":pe,"--n-bezier":T,"--n-font-size":te,"--n-border-color-horizontal":N,"--n-border-radius":I,"--n-item-height":oe};return g?(m["--n-group-text-color"]=s.groupTextColorInverted,m["--n-color"]=s.colorInverted,m["--n-item-text-color"]=s.itemTextColorInverted,m["--n-item-text-color-hover"]=s.itemTextColorHoverInverted,m["--n-item-text-color-active"]=s.itemTextColorActiveInverted,m["--n-item-text-color-child-active"]=s.itemTextColorChildActiveInverted,m["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveInverted,m["--n-item-text-color-active-hover"]=s.itemTextColorActiveHoverInverted,m["--n-item-icon-color"]=s.itemIconColorInverted,m["--n-item-icon-color-hover"]=s.itemIconColorHoverInverted,m["--n-item-icon-color-active"]=s.itemIconColorActiveInverted,m["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHoverInverted,m["--n-item-icon-color-child-active"]=s.itemIconColorChildActiveInverted,m["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHoverInverted,m["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsedInverted,m["--n-item-text-color-horizontal"]=s.itemTextColorHorizontalInverted,m["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontalInverted,m["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontalInverted,m["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontalInverted,m["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontalInverted,m["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontalInverted,m["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontalInverted,m["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontalInverted,m["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontalInverted,m["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontalInverted,m["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontalInverted,m["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontalInverted,m["--n-arrow-color"]=s.arrowColorInverted,m["--n-arrow-color-hover"]=s.arrowColorHoverInverted,m["--n-arrow-color-active"]=s.arrowColorActiveInverted,m["--n-arrow-color-active-hover"]=s.arrowColorActiveHoverInverted,m["--n-arrow-color-child-active"]=s.arrowColorChildActiveInverted,m["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHoverInverted,m["--n-item-color-hover"]=s.itemColorHoverInverted,m["--n-item-color-active"]=s.itemColorActiveInverted,m["--n-item-color-active-hover"]=s.itemColorActiveHoverInverted,m["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsedInverted):(m["--n-group-text-color"]=s.groupTextColor,m["--n-color"]=s.color,m["--n-item-text-color"]=s.itemTextColor,m["--n-item-text-color-hover"]=s.itemTextColorHover,m["--n-item-text-color-active"]=s.itemTextColorActive,m["--n-item-text-color-child-active"]=s.itemTextColorChildActive,m["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveHover,m["--n-item-text-color-active-hover"]=s.itemTextColorActiveHover,m["--n-item-icon-color"]=s.itemIconColor,m["--n-item-icon-color-hover"]=s.itemIconColorHover,m["--n-item-icon-color-active"]=s.itemIconColorActive,m["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHover,m["--n-item-icon-color-child-active"]=s.itemIconColorChildActive,m["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHover,m["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsed,m["--n-item-text-color-horizontal"]=s.itemTextColorHorizontal,m["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontal,m["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontal,m["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontal,m["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontal,m["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontal,m["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontal,m["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontal,m["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontal,m["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontal,m["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontal,m["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontal,m["--n-arrow-color"]=s.arrowColor,m["--n-arrow-color-hover"]=s.arrowColorHover,m["--n-arrow-color-active"]=s.arrowColorActive,m["--n-arrow-color-active-hover"]=s.arrowColorActiveHover,m["--n-arrow-color-child-active"]=s.arrowColorChildActive,m["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHover,m["--n-item-color-hover"]=s.itemColorHover,m["--n-item-color-active"]=s.itemColorActive,m["--n-item-color-active-hover"]=s.itemColorActiveHover,m["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsed),m}),b=o?ee("menu",S(()=>e.inverted?"a":"b"),x,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:w,uncontrolledExpanededKeys:v,mergedExpandedKeys:M,uncontrolledValue:h,mergedValue:C,activePath:L,tmNodes:R,mergedTheme:i,mergedCollapsed:r,cssVars:o?void 0:x,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender,showOption:_}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:i}=this;return i==null||i(),d("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(n=>dt(n,this.$props)))}}),un=y("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[u("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),u("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),u("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),y("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[gt({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),u("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),u("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),u("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),f("&:focus",[u("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),$("round",[u("rail","border-radius: calc(var(--n-rail-height) / 2);",[u("button","border-radius: calc(var(--n-button-height) / 2);")])]),re("disabled",[re("icon",[$("rubber-band",[$("pressed",[u("rail",[u("button","max-width: var(--n-button-width-pressed);")])]),u("rail",[f("&:active",[u("button","max-width: var(--n-button-width-pressed);")])]),$("active",[$("pressed",[u("rail",[u("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),u("rail",[f("&:active",[u("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),$("active",[u("rail",[u("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),u("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[u("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[gt()]),u("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),$("active",[u("rail","background-color: var(--n-rail-color-active);")]),$("loading",[u("rail",`
 cursor: wait;
 `)]),$("disabled",[u("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),hn=Object.assign(Object.assign({},K.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let we;const vn=E({name:"Switch",props:hn,setup(e){we===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?we=CSS.supports("width","max(1px)"):we=!1:we=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=X(e),i=K("Switch","-switch",un,jr,e,t),n=Oo(e),{mergedSizeRef:r,mergedDisabledRef:l}=n,c=F(e.defaultValue),a=ae(e,"value"),h=fe(a,c),p=S(()=>h.value===e.checkedValue),C=F(!1),v=F(!1),B=S(()=>{const{railStyle:g}=e;if(g)return g({focused:v.value,checked:p.value})});function w(g){const{"onUpdate:value":T,onChange:s,onUpdateValue:I}=e,{nTriggerFormInput:N,nTriggerFormChange:te}=n;T&&U(T,g),I&&U(I,g),s&&U(s,g),c.value=g,N(),te()}function M(){const{nTriggerFormFocus:g}=n;g()}function R(){const{nTriggerFormBlur:g}=n;g()}function L(){e.loading||l.value||(h.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue))}function V(){v.value=!0,M()}function z(){v.value=!1,R(),C.value=!1}function k(g){e.loading||l.value||g.key===" "&&(h.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue),C.value=!1)}function _(g){e.loading||l.value||g.key===" "&&(g.preventDefault(),C.value=!0)}const x=S(()=>{const{value:g}=r,{self:{opacityDisabled:T,railColor:s,railColorActive:I,buttonBoxShadow:N,buttonColor:te,boxShadowFocus:oe,loadingColor:pe,textColor:m,iconColor:Le,[Y("buttonHeight",g)]:Z,[Y("buttonWidth",g)]:Ee,[Y("buttonWidthPressed",g)]:He,[Y("railHeight",g)]:Q,[Y("railWidth",g)]:se,[Y("railBorderRadius",g)]:Ae,[Y("buttonBorderRadius",g)]:Fe},common:{cubicBezierEaseInOut:je}}=i.value;let be,xe,ye;return we?(be=`calc((${Q} - ${Z}) / 2)`,xe=`max(${Q}, ${Z})`,ye=`max(${se}, calc(${se} + ${Z} - ${Q}))`):(be=Ve((J(Q)-J(Z))/2),xe=Ve(Math.max(J(Q),J(Z))),ye=J(Q)>J(Z)?se:Ve(J(se)+J(Z)-J(Q))),{"--n-bezier":je,"--n-button-border-radius":Fe,"--n-button-box-shadow":N,"--n-button-color":te,"--n-button-width":Ee,"--n-button-width-pressed":He,"--n-button-height":Z,"--n-height":xe,"--n-offset":be,"--n-opacity-disabled":T,"--n-rail-border-radius":Ae,"--n-rail-color":s,"--n-rail-color-active":I,"--n-rail-height":Q,"--n-rail-width":se,"--n-width":ye,"--n-box-shadow-focus":oe,"--n-loading-color":pe,"--n-text-color":m,"--n-icon-color":Le}}),b=o?ee("switch",S(()=>r.value[0]),x,e):void 0;return{handleClick:L,handleBlur:z,handleFocus:V,handleKeyup:k,handleKeydown:_,mergedRailStyle:B,pressed:C,mergedClsPrefix:t,mergedValue:h,checked:p,mergedDisabled:l,cssVars:o?void 0:x,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:o,mergedRailStyle:i,onRender:n,$slots:r}=this;n==null||n();const{checked:l,unchecked:c,icon:a,"checked-icon":h,"unchecked-icon":p}=r,C=!(De(a)&&De(h)&&De(p));return d("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,C&&`${e}-switch--icon`,o&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},d("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:i},ie(l,v=>ie(c,B=>v||B?d("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),v),d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),B)):null)),d("div",{class:`${e}-switch__button`},ie(a,v=>ie(h,B=>ie(p,w=>d(Mo,null,{default:()=>this.loading?d(Lo,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(B||v)?d("div",{class:`${e}-switch__button-icon`,key:B?"checked-icon":"icon"},B||v):!this.checked&&(w||v)?d("div",{class:`${e}-switch__button-icon`,key:w?"unchecked-icon":"icon"},w||v):null})))),ie(l,v=>v&&d("div",{key:"checked",class:`${e}-switch__checked`},v)),ie(c,v=>v&&d("div",{key:"unchecked",class:`${e}-switch__unchecked`},v)))))}}),mn=y("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[f("&:first-child",{marginTop:0}),$("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[$("align-text",{paddingLeft:0},[f("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),f("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),f("&::before",{backgroundColor:"var(--n-bar-color)"})])]),fn=Object.assign(Object.assign({},K.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),ge=e=>E({name:`H${e}`,props:fn,setup(t){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=X(t),n=K("Typography","-h",mn,Eo,t,o),r=S(()=>{const{type:c}=t,{common:{cubicBezierEaseInOut:a},self:{headerFontWeight:h,headerTextColor:p,[Y("headerPrefixWidth",e)]:C,[Y("headerFontSize",e)]:v,[Y("headerMargin",e)]:B,[Y("headerBarWidth",e)]:w,[Y("headerBarColor",c)]:M}}=n.value;return{"--n-bezier":a,"--n-font-size":v,"--n-margin":B,"--n-bar-color":M,"--n-bar-width":w,"--n-font-weight":h,"--n-text-color":p,"--n-prefix-width":C}}),l=i?ee(`h${e}`,S(()=>t.type[0]),r,t):void 0;return{mergedClsPrefix:o,cssVars:i?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var t;const{prefix:o,alignText:i,mergedClsPrefix:n,cssVars:r,$slots:l}=this;return(t=this.onRender)===null||t===void 0||t.call(this),d(`h${e}`,{class:[`${n}-h`,`${n}-h${e}`,this.themeClass,{[`${n}-h--prefix-bar`]:o,[`${n}-h--align-text`]:i}],style:r},l)}});ge("1");ge("2");const gn=ge("3");ge("4");ge("5");const pn=ge("6"),bn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},xn=j("path",{d:"M6 2h9a2 2 0 0 1 2 2v2h-2V4H6v16h9v-2h2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",fill:"currentColor"},null,-1),yn=j("path",{d:"M16.09 15.59L17.5 17l5-5l-5-5l-1.41 1.41L18.67 11H9v2h9.67z",fill:"currentColor"},null,-1),wn=[xn,yn],_n=E({name:"LogOutSharp",render:function(t,o){return H(),D("svg",bn,wn)}}),Cn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},zn=j("path",{d:"M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92l9.06-9.06l.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34z",fill:"currentColor"},null,-1),Sn=[zn],kn=E({name:"ModeEditOutlined",render:function(t,o){return H(),D("svg",Cn,Sn)}}),$n={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Rn=j("path",{d:"M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z",fill:"currentColor"},null,-1),In=[Rn],Bn=E({name:"PersonOutlineFilled",render:function(t,o){return H(),D("svg",$n,In)}}),Ge=E({__name:"tooltip-button",props:{content:null},emits:["click"],setup(e){return(t,o)=>{const i=Ho,n=rt;return H(),D("div",null,[P(n,null,{trigger:O(()=>[P(i,{circle:"",onClick:o[0]||(o[0]=r=>t.$emit("click"))},{icon:O(()=>[Wt(t.$slots,"default")]),_:3})]),default:O(()=>[j("span",null,me(e.content),1)]),_:3})])}}}),le=e=>()=>d(Oe,null,{default:()=>d(e)}),Pn={style:{display:"flex"}},Tn=E({__name:"avatar-dropdown",setup(e){const t=Ao(),o=wt(),i=Rt(),n=Fo(),r=async()=>{await t.logout(),i.success("登出成功");const a=o.currentRoute.value;await o.push({name:It.LoginPath,query:{...a.query,redirect:a.name}})},l=()=>{n.info({title:"退出登录",positiveText:"确定",negativeText:"取消",onPositiveClick:async()=>{await r()}})},c=[{label:"用户资料",key:"profile",icon:le(Bn)},{label:"用户设置",key:"editProfile",icon:le(kn)},{label:"退出登录",key:"logout",icon:le(_n),props:{onClick:()=>l()}}];return(a,h)=>{const p=or,C=Te;return H(),W(C,{options:c},{default:O(()=>[j("div",Pn,[P(p,{round:"",size:"small",src:A(t).avatar},null,8,["src"])])]),_:1})}}}),On="/naive-ui-template/assets/account-logo-0a6f895e.png",Mn="/naive-ui-template/assets/login-7b57ab51.svg",Ln="/naive-ui-template/assets/nav-theme-dark-be6f2a3d.svg",En="/naive-ui-template/assets/nav-theme-light-43fdcab2.svg";function Hn(e){return new URL(Object.assign({"../assets/images/account-logo.png":On,"../assets/images/login.svg":Mn,"../assets/images/nav-theme-dark.svg":Ln,"../assets/images/nav-theme-light.svg":En})[`../assets/images/${e}`],self.location).href}const An={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Fn=j("path",{d:"M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",fill:"currentColor"},null,-1),jn=[Fn],Nn=E({name:"CaretDownOutline",render:function(t,o){return H(),D("svg",An,jn)}}),Vn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Dn=j("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 368L144 144"},null,-1),Kn=j("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 144L144 368"},null,-1),Un=[Dn,Kn],Wn=E({name:"CloseOutline",render:function(t,o){return H(),D("svg",Vn,Un)}}),Yn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},qn=j("path",{d:"M126.8 248.3c39.7-58.6 77.9-92.8 77.9-92.8s-42.1-48.9-92.8-67.4l-3.3-.8A224.13 224.13 0 0 0 77.2 391c0-4.4.6-70.3 49.6-142.7z",fill:"currentColor"},null,-1),Gn=j("path",{d:"M480 256a223.71 223.71 0 0 0-76.6-168.7l-3.2.9c-50.7 18.5-92.9 67.4-92.9 67.4s38.2 34.2 77.9 92.8c49 72.4 49.6 138.3 49.5 142.7A222.8 222.8 0 0 0 480 256z",fill:"currentColor"},null,-1),Xn=j("path",{d:"M201.2 80.9c29.3 13.1 54.6 34.6 54.6 34.6s25.5-21.4 54.8-34.6c36.8-16.5 64.9-11.3 72.3-9.5a224.06 224.06 0 0 0-253.8 0c7.2-1.8 35.2-7.1 72.1 9.5z",fill:"currentColor"},null,-1),Jn=j("path",{d:"M358.7 292.9C312.4 236 255.8 199 255.8 199s-56.3 37-102.7 93.9c-39.8 48.9-54.6 84.8-62.6 107.8l-1.3 4.8a224 224 0 0 0 333.6 0l-1.4-4.8c-8-23-22.9-58.9-62.7-107.8z",fill:"currentColor"},null,-1),Zn=[qn,Gn,Xn,Jn],Qn=E({name:"LogoXbox",render:function(t,o){return H(),D("svg",Yn,Zn)}}),ei={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ti=j("path",{d:"M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480z",fill:"currentColor"},null,-1),oi=[ti],Dt=E({name:"Moon",render:function(t,o){return H(),D("svg",ei,oi)}}),ri={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ni=j("path",{d:"M400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),ii=j("path",{d:"M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z",fill:"currentColor"},null,-1),li=[ni,ii],ai=E({name:"ReloadOutline",render:function(t,o){return H(),D("svg",ri,li)}}),si={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ci=j("path",{d:"M314.56 48s-22.78 8-58.56 8s-58.56-8-58.56-8a31.94 31.94 0 0 0-10.57 1.8L32 104l16.63 88l48.88 5.52a24 24 0 0 1 21.29 24.58L112 464h288l-6.8-241.9a24 24 0 0 1 21.29-24.58l48.88-5.52L480 104L325.13 49.8a31.94 31.94 0 0 0-10.57-1.8z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),di=j("path",{d:"M333.31 52.66a80 80 0 0 1-154.62 0",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ui=[ci,di],hi=E({name:"ShirtOutline",render:function(t,o){return H(),D("svg",si,ui)}}),vi={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},mi=Yt('<path d="M256 118a22 22 0 0 1-22-22V48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22z" fill="currentColor"></path><path d="M256 486a22 22 0 0 1-22-22v-48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22z" fill="currentColor"></path><path d="M369.14 164.86a22 22 0 0 1-15.56-37.55l33.94-33.94a22 22 0 0 1 31.11 31.11l-33.94 33.94a21.93 21.93 0 0 1-15.55 6.44z" fill="currentColor"></path><path d="M108.92 425.08a22 22 0 0 1-15.55-37.56l33.94-33.94a22 22 0 1 1 31.11 31.11l-33.94 33.94a21.94 21.94 0 0 1-15.56 6.45z" fill="currentColor"></path><path d="M464 278h-48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44z" fill="currentColor"></path><path d="M96 278H48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44z" fill="currentColor"></path><path d="M403.08 425.08a21.94 21.94 0 0 1-15.56-6.45l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.55 37.56z" fill="currentColor"></path><path d="M142.86 164.86a21.89 21.89 0 0 1-15.55-6.44l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.56 37.55z" fill="currentColor"></path><path d="M256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102z" fill="currentColor"></path>',9),fi=[mi],Kt=E({name:"Sunny",render:function(t,o){return H(),D("svg",vi,fi)}}),gi={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},pi=j("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M304 48l112 112l-112 112"},null,-1),bi=j("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M398.87 160H96"},null,-1),xi=j("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M208 464L96 352l112-112"},null,-1),yi=j("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M114 352h302"},null,-1),wi=[pi,bi,xi,yi],_i=E({name:"SwapHorizontalOutline",render:function(t,o){return H(),D("svg",gi,wi)}}),Ci={key:0},zi={key:1},Si=["onClick"],ki=["src","alt","onClick"],$i=E({__name:"page-setting",setup(e){qt(c=>({a47961c4:A(r)}));const t=Bt(),o=Pt(),i=Rt(),n=c=>{t.changePrimaryColor(c),i.success("设置成功")},r=S(()=>No(t.themeColor)[2]),l=[{title:"暗色侧边栏",path:"nav-theme-dark.svg",dark:!0},{title:"白色侧边栏",path:"nav-theme-light.svg",dark:!1}];return(c,a)=>{const h=pn,p=Oe,C=vn,v=rt,B=Me;return H(),D(ne,null,[P(h,{prefix:"bar",class:"title"},{default:O(()=>[he(" 暗夜模式 ")]),_:1}),P(B,{justify:"center"},{default:O(()=>[P(v,{placement:"bottom"},{trigger:O(()=>[P(C,{value:A(t).dark,"onUpdate:value":a[0]||(a[0]=w=>A(t).dark=w)},{checked:O(()=>[P(p,{size:"14",color:"#ffd93b"},{default:O(()=>[P(A(Kt))]),_:1})]),unchecked:O(()=>[P(p,{size:"14",color:"#ffd93b"},{default:O(()=>[P(A(Dt))]),_:1})]),_:1},8,["value"])]),default:O(()=>[A(t).dark?(H(),D("span",Ci,"点击切换为暗黑模式")):(H(),D("span",zi,"点击切换为亮色模式"))]),_:1})]),_:1}),P(h,{prefix:"bar",class:"title"},{default:O(()=>[he(" 主题色 ")]),_:1}),P(B,null,{default:O(()=>[(H(!0),D(ne,null,$e(A(jo),w=>(H(),D("div",{key:w,style:Gt({backgroundColor:w}),class:ht({"color-tag":!0,"color-tag-active":w===A(t).themeColor}),onClick:M=>n(w)},null,14,Si))),128))]),_:1}),P(h,{prefix:"bar",class:"title"},{default:O(()=>[he(" 导航栏风格 ")]),_:1}),P(B,{justify:"center"},{default:O(()=>[(H(),D(ne,null,$e(l,w=>P(v,{key:w.title,placement:"top"},{trigger:O(()=>[j("img",{class:ht({"color-tag-active":w.dark===A(o).dark}),src:A(Hn)(w.path),alt:w.title,onClick:M=>A(o).toggleTheme(w.dark)},null,10,ki)]),default:O(()=>[j("span",null,me(w.title),1)]),_:2},1024)),64))]),_:1})],64)}}});const Ri=ue($i,[["__scopeId","data-v-0a6c1d7a"]]),Ii=()=>{const e=Tt(),t=Ce();return{breadInfo:S(()=>{function i(n){return n.map(l=>{var c,a;return e.isAccessRouter(l)?Array.isArray(l.children)&&l.children.length>0?{label:(c=l.meta)==null?void 0:c.title,key:l==null?void 0:l.name,children:i(l.children)}:{label:(a=l.meta)==null?void 0:a.title,key:l.name}:!1}).filter(Boolean)}return i(t.matched)})}},Bi={key:1},Pi=E({__name:"index",setup(e){const{breadInfo:t}=Ii(),o=Ce(),i=n=>o.name===n.key?P("span",null,[n.label]):P(Ie("router-link"),{to:n.key},{default:()=>[n.label]});return(n,r)=>{const l=Oe,c=cr,a=Te,h=ir;return H(),W(h,null,{default:O(()=>[P(c,null,{default:O(()=>[P(l,{size:16},{default:O(()=>[P(A(Qn))]),_:1})]),_:1}),(H(!0),D(ne,null,$e(A(t),p=>(H(),D(ne,{key:p.key},[p.label?(H(),W(c,{key:0},{default:O(()=>{var C;return[(C=p==null?void 0:p.children)!=null&&C.length?(H(),W(a,{key:0,options:p==null?void 0:p.children,"render-label":i},{default:O(()=>[j("span",null,me(p.label),1)]),_:2},1032,["options"])):(H(),D("span",Bi,me(p.label),1))]}),_:2},1024)):_t("",!0)],64))),128))]),_:1})}}}),Ti={class:"navbar"},Oi=E({__name:"navbar",setup(e){const t=F(!1),o=Bt();return(i,n)=>{const r=Oe,l=Me,c=Br,a=Rr;return H(),D("div",Ti,[P(Pi),P(l,{align:"center",size:20},{default:O(()=>[P(Re,{name:"fade",mode:"out-in",appear:""},{default:O(()=>[A(o).dark?(H(),W(Ge,{key:0,content:"点击切换为亮色模式",onClick:n[0]||(n[0]=h=>A(o).toggleTheme())},{default:O(()=>[P(r,{size:"16"},{default:O(()=>[P(A(Dt))]),_:1})]),_:1})):(H(),W(Ge,{key:1,content:"点击切换为暗黑模式",onClick:n[1]||(n[1]=h=>A(o).toggleTheme())},{default:O(()=>[P(r,{size:"16"},{default:O(()=>[P(A(Kt))]),_:1})]),_:1}))]),_:1}),P(Ge,{content:"页面设置",onClick:n[2]||(n[2]=h=>t.value=!0)},{default:O(()=>[P(r,{size:"16"},{default:O(()=>[P(A(hi))]),_:1})]),_:1}),P(Tn)]),_:1}),P(a,{show:t.value,"onUpdate:show":n[3]||(n[3]=h=>t.value=h),width:300},{default:O(()=>[P(c,{title:"页面设置","native-scrollbar":!1},{default:O(()=>[P(Ri)]),_:1})]),_:1},8,["show"])])}}});const Mi=ue(Oi,[["__scopeId","data-v-d989557b"]]),Li={};function Ei(e,t){const o=Ie("router-view");return H(),W(o,null,{default:O(({Component:i,route:n})=>[P(Re,{name:"fade-bottom",mode:"out-in",appear:""},{default:O(()=>[n.meta.ignoreKeepAlive?(H(),W(vt(i),{key:n.fullPath})):(H(),W(Xt,{key:1},[(H(),W(vt(i),{key:n.fullPath}))],1024))]),_:2},1024)]),_:1})}const Hi=ue(Li,[["render",Ei]]),Ai=()=>{const e=Tt();return{menuTree:S(()=>{function o(i){return i.map(r=>{var c,a,h;if(!e.isAccessRouter(r))return!1;const l=(c=r.meta)!=null&&c.icon?le((a=r.meta)==null?void 0:a.icon):void 0;return Array.isArray(r.children)&&r.children.length>0?{label:(h=r.meta)==null?void 0:h.title,key:r==null?void 0:r.name,icon:l,children:o(r.children)}:{label:()=>P(Ie("router-link"),{to:r.name},{default:()=>{var p;return[(p=r.meta)==null?void 0:p.title]}}),icon:l,key:r.name}}).filter(Boolean)}return o(Vo)})}},Fi=e=>(Jt("data-v-300fa70b"),e=e(),Zt(),e),ji=Fi(()=>j("div",{class:"logo-img"},null,-1)),Ni=E({__name:"index",setup(e){const t=F(!1),{menuTree:o}=Ai(),i=Ce(),n={collapseMode:"width",collapsedWidth:48,width:240,showTrigger:!0,bordered:!0,nativeScrollbar:!1},r={indent:22,collapsedIconSize:16,iconSize:16},l=Pt();return(c,a)=>{const h=gn,p=Me;return H(),W(A(Zr),Je({collapsed:t.value,"onUpdate:collapsed":a[1]||(a[1]=C=>t.value=C)},n,{class:"layout-sider",inverted:A(l).dark,style:{height:"100vh"}}),{default:O(()=>[P(p,{align:"center",class:"logo",wrap:!1},{default:O(()=>[ji,t.value?_t("",!0):(H(),W(h,{key:0,class:"logo-title"},{default:O(()=>[he(" JoJo Template")]),_:1}))]),_:1}),P(A(dn),Je({collapsed:t.value,"onUpdate:collapsed":a[0]||(a[0]=C=>t.value=C),inverted:A(l).dark},r,{value:A(i).name,options:A(o),"expand-icon":A(le)(A(Nn))}),null,16,["collapsed","inverted","value","options","expand-icon"])]),_:1},16,["collapsed","inverted"])}}});const Vi=ue(Ni,[["__scopeId","data-v-300fa70b"]]);function Di(){const e=F(0),t=F(0),o=F(!1);return{x:e,y:t,showDropdown:o,handleContextMenu:n=>{o.value=!1,Qt().then(()=>{o.value=!0,e.value=n.clientX,t.value=n.clientY})}}}const Ki=E({__name:"tab-item",props:{item:null,index:null},setup(e){const t=e,o=wt(),i=Ce(),n=Ot(),r=S(()=>i.fullPath===t.item.fullPath),l=S(()=>n.tabList.length===1),c=S(()=>[{key:"reload",label:"重新加载",disabled:!r.value,icon:le(ai)},{key:"current",label:"关闭当前标签页",disabled:l.value,icon:le(Wn)},{type:"divider",key:"d1"},{key:"others",label:"关闭其他标签页",disabled:n.tabList.length<2,icon:le(_i)}]),{x:a,y:h,showDropdown:p,handleContextMenu:C}=Di(),v=async()=>{n.tabList=n.tabList.filter((R,L)=>t.index===L),r.value||await o.push({name:t.item.name,params:t.item.params,query:t.item.query})},B=async()=>{await o.push({name:It.RedirectRouteName,params:{name:i.name},query:i.query})},w=()=>{if(n.deleteTag(t.index),i.fullPath===t.item.fullPath){const R=n.tabList[t.index-1];o.push({name:R.name})}},M=async R=>{p.value=!1,R==="current"?w():R==="reload"?await B():await v()};return(R,L)=>{const V=Ie("router-link"),z=Te;return H(),D(ne,null,[P(A(Go),{closable:!A(l),type:A(r)?"info":void 0,onClose:L[0]||(L[0]=mt(k=>w(),["stop"])),onContextmenu:mt(A(C),["prevent"])},{default:O(()=>[P(V,{class:"tab-item",to:{path:e.item.path,params:e.item.params,query:e.item.query}},{default:O(()=>[he(me(e.item.title),1)]),_:1},8,["to"])]),_:1},8,["closable","type","onContextmenu"]),P(z,{options:A(c),placement:"bottom-start",trigger:"manual",x:A(a),y:A(h),show:A(p),onSelect:M,onClickoutside:L[1]||(L[1]=k=>p.value=!1)},null,8,["options","x","y","show"])],64)}}});const Ui=ue(Ki,[["__scopeId","data-v-c5d38fec"]]),Wi=E({__name:"tab-bar",setup(e){const t=Ce(),o=Ot();return Qe(()=>t.fullPath,()=>{o.updateTabList(t)},{immediate:!0}),(i,n)=>{const r=Me;return H(),W(r,{class:"nav-tab"},{default:O(()=>[(H(!0),D(ne,null,$e(A(o).tabList,(l,c)=>(H(),W(Ui,{key:l.fullPath,item:l,index:c},{default:O(()=>[he(me(l.title),1)]),_:2},1032,["item","index"]))),128))]),_:1})}}});const Yi=ue(Wi,[["__scopeId","data-v-c49ccb34"]]),qi=E({__name:"index",setup(e){return(t,o)=>{const i=hr,n=Yr,r=Do,l=Kr,c=Dr;return H(),W(c,{class:"layout","has-sider":""},{default:O(()=>[P(Vi),P(c,null,{default:O(()=>[P(n,{class:"layout-navbar",bordered:""},{default:O(()=>[P(Mi),P(i,{style:{margin:"0"}}),P(Yi)]),_:1}),P(l,{embedded:"","content-style":"padding: 24px;",class:"layout-content"},{default:O(()=>[P(r,{style:{height:"100%"}},{default:O(()=>[P(Hi)]),_:1})]),_:1})]),_:1})]),_:1})}}});const Qi=ue(qi,[["__scopeId","data-v-85725275"]]);export{Qi as default};
