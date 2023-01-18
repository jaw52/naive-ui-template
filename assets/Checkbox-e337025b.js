import{q as pt,s as yt,c as b,b as C,h,t as Ge,v as Xe,N as Ye,x as ae,y as ve,z as xt,d as Je,A as wt,a as A,B as te,u as We,e as me,C as Ct,D as kt,E as Ie,F as De,G as Ze,l as ie,H as St,m as Qe,r as he,I as Pt,V as zt,J as $e,K as x,L as je,M as Mt,O as Rt,P as Tt,i as At}from"./index-139d7e9f.js";import{j as Le,e as D,a as N,k as o,t as J,r as M,w as Be,h as Ft,g as _t,q as He,p as en,F as Dt,x as Ke}from"./vue-d1235445.js";import{u as Ve}from"./Icon-9bc4a50b.js";const $t={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:n=>`Please load all ${n}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:n=>`Total ${n} items`,selected:n=>`${n} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},Bt=$t;function _e(n){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.width?String(a.width):n.defaultWidth,f=n.formats[r]||n.formats[n.defaultWidth];return f}}function re(n){return function(a,r){var f=r!=null&&r.context?String(r.context):"standalone",g;if(f==="formatting"&&n.formattingValues){var l=n.defaultFormattingWidth||n.defaultWidth,u=r!=null&&r.width?String(r.width):l;g=n.formattingValues[u]||n.formattingValues[l]}else{var s=n.defaultWidth,c=r!=null&&r.width?String(r.width):n.defaultWidth;g=n.values[c]||n.values[s]}var i=n.argumentCallback?n.argumentCallback(a):a;return g[i]}}function oe(n){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=r.width,g=f&&n.matchPatterns[f]||n.matchPatterns[n.defaultMatchWidth],l=a.match(g);if(!l)return null;var u=l[0],s=f&&n.parsePatterns[f]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(s)?Wt(s,function(p){return p.test(u)}):Et(s,function(p){return p.test(u)}),i;i=n.valueCallback?n.valueCallback(c):c,i=r.valueCallback?r.valueCallback(i):i;var v=a.slice(u.length);return{value:i,rest:v}}}function Et(n,a){for(var r in n)if(n.hasOwnProperty(r)&&a(n[r]))return r}function Wt(n,a){for(var r=0;r<n.length;r++)if(a(n[r]))return r}function It(n){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=a.match(n.matchPattern);if(!f)return null;var g=f[0],l=a.match(n.parsePattern);if(!l)return null;var u=n.valueCallback?n.valueCallback(l[0]):l[0];u=r.valueCallback?r.valueCallback(u):u;var s=a.slice(g.length);return{value:u,rest:s}}}var Lt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Vt=function(a,r,f){var g,l=Lt[a];return typeof l=="string"?g=l:r===1?g=l.one:g=l.other.replace("{{count}}",r.toString()),f!=null&&f.addSuffix?f.comparison&&f.comparison>0?"in "+g:g+" ago":g};const Nt=Vt;var Ot={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ut={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},jt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ht={date:_e({formats:Ot,defaultWidth:"full"}),time:_e({formats:Ut,defaultWidth:"full"}),dateTime:_e({formats:jt,defaultWidth:"full"})};const Kt=Ht;var qt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Gt=function(a,r,f,g){return qt[a]};const Xt=Gt;var Yt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Jt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Zt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Qt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},er={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},nr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},tr=function(a,r){var f=Number(a),g=f%100;if(g>20||g<10)switch(g%10){case 1:return f+"st";case 2:return f+"nd";case 3:return f+"rd"}return f+"th"},rr={ordinalNumber:tr,era:re({values:Yt,defaultWidth:"wide"}),quarter:re({values:Jt,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:re({values:Zt,defaultWidth:"wide"}),day:re({values:Qt,defaultWidth:"wide"}),dayPeriod:re({values:er,defaultWidth:"wide",formattingValues:nr,defaultFormattingWidth:"wide"})};const or=rr;var ar=/^(\d+)(th|st|nd|rd)?/i,ir=/\d+/i,lr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},sr={any:[/^b/i,/^(a|c)/i]},cr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},dr={any:[/1/i,/2/i,/3/i,/4/i]},ur={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},hr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},fr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},vr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},mr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},br={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},gr={ordinalNumber:It({matchPattern:ar,parsePattern:ir,valueCallback:function(a){return parseInt(a,10)}}),era:oe({matchPatterns:lr,defaultMatchWidth:"wide",parsePatterns:sr,defaultParseWidth:"any"}),quarter:oe({matchPatterns:cr,defaultMatchWidth:"wide",parsePatterns:dr,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:oe({matchPatterns:ur,defaultMatchWidth:"wide",parsePatterns:hr,defaultParseWidth:"any"}),day:oe({matchPatterns:fr,defaultMatchWidth:"wide",parsePatterns:vr,defaultParseWidth:"any"}),dayPeriod:oe({matchPatterns:mr,defaultMatchWidth:"any",parsePatterns:br,defaultParseWidth:"any"})};const pr=gr;var yr={code:"en-US",formatDistance:Nt,formatLong:Kt,formatRelative:Xt,localize:or,match:pr,options:{weekStartsOn:0,firstWeekContainsDate:1}};const xr=yr,wr={name:"en-US",locale:xr},Cr=wr;function kr(n){const{mergedLocaleRef:a,mergedDateLocaleRef:r}=Le(pt,null)||{},f=D(()=>{var l,u;return(u=(l=a==null?void 0:a.value)===null||l===void 0?void 0:l[n])!==null&&u!==void 0?u:Bt[n]});return{dateLocaleRef:D(()=>{var l;return(l=r==null?void 0:r.value)!==null&&l!==void 0?l:Cr}),localeRef:f}}const Sr=N({name:"Eye",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),o("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Pr=N({name:"EyeOff",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),o("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),o("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),o("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),o("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),zr=N({name:"ChevronDown",render(){return o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Mr=yt("clear",o("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Rr=b("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[C(">",[h("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[C("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),C("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),h("placeholder",`
 display: flex;
 `),h("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ge({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Ee=N({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(n){return Xe("-base-clear",Rr,J(n,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:n}=this;return o("div",{class:`${n}-base-clear`},o(Ye,null,{default:()=>{var a,r;return this.show?o("div",{key:"dismiss",class:`${n}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},ae(this.$slots.icon,()=>[o(ve,{clsPrefix:n},{default:()=>o(Mr,null)})])):o("div",{key:"icon",class:`${n}-base-clear__placeholder`},(r=(a=this.$slots).placeholder)===null||r===void 0?void 0:r.call(a))}}))}}),Tr=N({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(n,{slots:a}){return()=>{const{clsPrefix:r}=n;return o(xt,{clsPrefix:r,class:`${r}-base-suffix`,strokeWidth:24,scale:.85,show:n.loading},{default:()=>n.showArrow?o(Ee,{clsPrefix:r,show:n.showClear,onClear:n.onClear},{placeholder:()=>o(ve,{clsPrefix:r,class:`${r}-base-suffix__arrow`},{default:()=>ae(a.default,()=>[o(zr,null)])})}):null})}}}),nn=Je("n-input");function Ar(n){let a=0;for(const r of n)a++;return a}function fe(n){return n===""||n==null}function Fr(n){const a=M(null);function r(){const{value:l}=n;if(!(l!=null&&l.focus)){g();return}const{selectionStart:u,selectionEnd:s,value:c}=l;if(u==null||s==null){g();return}a.value={start:u,end:s,beforeText:c.slice(0,u),afterText:c.slice(s)}}function f(){var l;const{value:u}=a,{value:s}=n;if(!u||!s)return;const{value:c}=s,{start:i,beforeText:v,afterText:p}=u;let m=c.length;if(c.endsWith(p))m=c.length-p.length;else if(c.startsWith(v))m=v.length;else{const F=v[i-1],z=c.indexOf(F,i-1);z!==-1&&(m=z+1)}(l=s.setSelectionRange)===null||l===void 0||l.call(s,m,m)}function g(){a.value=null}return Be(n,g),{recordCursor:r,restoreCursor:f}}const qe=N({name:"InputWordCount",setup(n,{slots:a}){const{mergedValueRef:r,maxlengthRef:f,mergedClsPrefixRef:g,countGraphemesRef:l}=Le(nn),u=D(()=>{const{value:s}=r;return s===null||Array.isArray(s)?0:(l.value||Ar)(s)});return()=>{const{value:s}=f,{value:c}=r;return o("span",{class:`${g.value}-input-word-count`},wt(a.default,{value:c===null||Array.isArray(c)?"":c},()=>[s===void 0?u.value:`${u.value} / ${s}`]))}}}),_r=b("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[h("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),h("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),h("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[C("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),C("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),C("&:-webkit-autofill ~",[h("placeholder","display: none;")])]),A("round",[te("textarea","border-radius: calc(var(--n-height) / 2);")]),h("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[C("span",`
 width: 100%;
 display: inline-block;
 `)]),A("textarea",[h("placeholder","overflow: visible;")]),te("autosize","width: 100%;"),A("autosize",[h("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),b("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),h("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),h("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[C("+",[h("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),te("textarea",[h("placeholder","white-space: nowrap;")]),h("eye",`
 transition: color .3s var(--n-bezier);
 `),A("textarea","width: 100%;",[b("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),A("resizable",[b("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),h("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),h("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),A("pair",[h("input-el, placeholder","text-align: center;"),h("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[b("icon",`
 color: var(--n-icon-color);
 `),b("base-icon",`
 color: var(--n-icon-color);
 `)])]),A("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[h("border","border: var(--n-border-disabled);"),h("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),h("placeholder","color: var(--n-placeholder-color-disabled);"),h("separator","color: var(--n-text-color-disabled);",[b("icon",`
 color: var(--n-icon-color-disabled);
 `),b("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),b("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),h("suffix, prefix","color: var(--n-text-color-disabled);",[b("icon",`
 color: var(--n-icon-color-disabled);
 `),b("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),te("disabled",[h("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[C("&:hover",`
 color: var(--n-icon-color-hover);
 `),C("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),C("&:hover",[h("state-border","border: var(--n-border-hover);")]),A("focus","background-color: var(--n-color-focus);",[h("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),h("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),h("state-border",`
 border-color: #0000;
 z-index: 1;
 `),h("prefix","margin-right: 4px;"),h("suffix",`
 margin-left: 4px;
 `),h("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[b("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),b("base-clear",`
 font-size: var(--n-icon-size);
 `,[h("placeholder",[b("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),C(">",[b("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),b("base-icon",`
 font-size: var(--n-icon-size);
 `)]),b("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(n=>A(`${n}-status`,[te("disabled",[b("base-loading",`
 color: var(--n-loading-color-${n})
 `),h("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${n});
 `),h("state-border",`
 border: var(--n-border-${n});
 `),C("&:hover",[h("state-border",`
 border: var(--n-border-hover-${n});
 `)]),C("&:focus",`
 background-color: var(--n-color-focus-${n});
 `,[h("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)]),A("focus",`
 background-color: var(--n-color-focus-${n});
 `,[h("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]),Dr=b("input",[A("disabled",[h("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),$r=Object.assign(Object.assign({},me.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Ur=N({name:"Input",props:$r,setup(n){const{mergedClsPrefixRef:a,mergedBorderedRef:r,inlineThemeDisabled:f,mergedRtlRef:g}=We(n),l=me("Input","-input",_r,Ct,n,a);kt&&Xe("-input-safari",Dr,a);const u=M(null),s=M(null),c=M(null),i=M(null),v=M(null),p=M(null),m=M(null),F=Fr(m),z=M(null),{localeRef:E}=kr("Input"),$=M(n.defaultValue),W=J(n,"value"),S=Ve(W,$),L=Ie(n),{mergedSizeRef:O,mergedDisabledRef:B,mergedStatusRef:y}=L,T=M(!1),R=M(!1),_=M(!1),I=M(!1);let U=null;const V=D(()=>{const{placeholder:e,pair:t}=n;return t?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[E.value.placeholder]:[e]}),be=D(()=>{const{value:e}=_,{value:t}=S,{value:d}=V;return!e&&(fe(t)||Array.isArray(t)&&fe(t[0]))&&d[0]}),ge=D(()=>{const{value:e}=_,{value:t}=S,{value:d}=V;return!e&&d[1]&&(fe(t)||Array.isArray(t)&&fe(t[1]))}),Z=De(()=>n.internalForceFocus||T.value),pe=De(()=>{if(B.value||n.readonly||!n.clearable||!Z.value&&!R.value)return!1;const{value:e}=S,{value:t}=Z;return n.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(R.value||t):!!e&&(R.value||t)}),Q=D(()=>{const{showPasswordOn:e}=n;if(e)return e;if(n.showPasswordToggle)return"click"}),j=M(!1),ye=D(()=>{const{textDecoration:e}=n;return e?Array.isArray(e)?e.map(t=>({textDecoration:t})):[{textDecoration:e}]:["",""]}),le=M(void 0),xe=()=>{var e,t;if(n.type==="textarea"){const{autosize:d}=n;if(d&&(le.value=(t=(e=z.value)===null||e===void 0?void 0:e.$el)===null||t===void 0?void 0:t.offsetWidth),!s.value||typeof d=="boolean")return;const{paddingTop:k,paddingBottom:P,lineHeight:w}=window.getComputedStyle(s.value),H=Number(k.slice(0,-2)),K=Number(P.slice(0,-2)),q=Number(w.slice(0,-2)),{value:ee}=c;if(!ee)return;if(d.minRows){const ne=Math.max(d.minRows,1),Fe=`${H+K+q*ne}px`;ee.style.minHeight=Fe}if(d.maxRows){const ne=`${H+K+q*d.maxRows}px`;ee.style.maxHeight=ne}}},we=D(()=>{const{maxlength:e}=n;return e===void 0?void 0:Number(e)});Ft(()=>{const{value:e}=S;Array.isArray(e)||Ae(e)});const Ce=_t().proxy;function G(e){const{onUpdateValue:t,"onUpdate:value":d,onInput:k}=n,{nTriggerFormInput:P}=L;t&&x(t,e),d&&x(d,e),k&&x(k,e),$.value=e,P()}function X(e){const{onChange:t}=n,{nTriggerFormChange:d}=L;t&&x(t,e),$.value=e,d()}function ke(e){const{onBlur:t}=n,{nTriggerFormBlur:d}=L;t&&x(t,e),d()}function Se(e){const{onFocus:t}=n,{nTriggerFormFocus:d}=L;t&&x(t,e),d()}function Pe(e){const{onClear:t}=n;t&&x(t,e)}function ze(e){const{onInputBlur:t}=n;t&&x(t,e)}function Me(e){const{onInputFocus:t}=n;t&&x(t,e)}function Re(){const{onDeactivate:e}=n;e&&x(e)}function rn(){const{onActivate:e}=n;e&&x(e)}function on(e){const{onClick:t}=n;t&&x(t,e)}function an(e){const{onWrapperFocus:t}=n;t&&x(t,e)}function ln(e){const{onWrapperBlur:t}=n;t&&x(t,e)}function sn(){_.value=!0}function cn(e){_.value=!1,e.target===p.value?se(e,1):se(e,0)}function se(e,t=0,d="input"){const k=e.target.value;if(Ae(k),e instanceof InputEvent&&!e.isComposing&&(_.value=!1),n.type==="textarea"){const{value:w}=z;w&&w.syncUnifiedContainer()}if(U=k,_.value)return;F.recordCursor();const P=dn(k);if(P)if(!n.pair)d==="input"?G(k):X(k);else{let{value:w}=S;Array.isArray(w)?w=[w[0],w[1]]:w=["",""],w[t]=k,d==="input"?G(w):X(w)}Ce.$forceUpdate(),P||Ke(F.restoreCursor)}function dn(e){const{countGraphemes:t,maxlength:d,minlength:k}=n;if(t){let w;if(d!==void 0&&(w===void 0&&(w=t(e)),w>Number(d))||k!==void 0&&(w===void 0&&(w=t(e)),w<Number(d)))return!1}const{allowInput:P}=n;return typeof P=="function"?P(e):!0}function un(e){ze(e),e.relatedTarget===u.value&&Re(),e.relatedTarget!==null&&(e.relatedTarget===v.value||e.relatedTarget===p.value||e.relatedTarget===s.value)||(I.value=!1),ce(e,"blur"),m.value=null}function hn(e,t){Me(e),T.value=!0,I.value=!0,rn(),ce(e,"focus"),t===0?m.value=v.value:t===1?m.value=p.value:t===2&&(m.value=s.value)}function fn(e){n.passivelyActivated&&(ln(e),ce(e,"blur"))}function vn(e){n.passivelyActivated&&(T.value=!0,an(e),ce(e,"focus"))}function ce(e,t){e.relatedTarget!==null&&(e.relatedTarget===v.value||e.relatedTarget===p.value||e.relatedTarget===s.value||e.relatedTarget===u.value)||(t==="focus"?(Se(e),T.value=!0):t==="blur"&&(ke(e),T.value=!1))}function mn(e,t){se(e,t,"change")}function bn(e){on(e)}function gn(e){Pe(e),n.pair?(G(["",""]),X(["",""])):(G(""),X(""))}function pn(e){const{onMousedown:t}=n;t&&t(e);const{tagName:d}=e.target;if(d!=="INPUT"&&d!=="TEXTAREA"){if(n.resizable){const{value:k}=u;if(k){const{left:P,top:w,width:H,height:K}=k.getBoundingClientRect(),q=14;if(P+H-q<e.clientX&&e.clientX<P+H&&w+K-q<e.clientY&&e.clientY<w+K)return}}e.preventDefault(),T.value||Ne()}}function yn(){var e;R.value=!0,n.type==="textarea"&&((e=z.value)===null||e===void 0||e.handleMouseEnterWrapper())}function xn(){var e;R.value=!1,n.type==="textarea"&&((e=z.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function wn(){B.value||Q.value==="click"&&(j.value=!j.value)}function Cn(e){if(B.value)return;e.preventDefault();const t=k=>{k.preventDefault(),je("mouseup",document,t)};if($e("mouseup",document,t),Q.value!=="mousedown")return;j.value=!0;const d=()=>{j.value=!1,je("mouseup",document,d)};$e("mouseup",document,d)}function kn(e){var t;switch((t=n.onKeydown)===null||t===void 0||t.call(n,e),e.key){case"Escape":Te();break;case"Enter":Sn(e);break}}function Sn(e){var t,d;if(n.passivelyActivated){const{value:k}=I;if(k){n.internalDeactivateOnEnter&&Te();return}e.preventDefault(),n.type==="textarea"?(t=s.value)===null||t===void 0||t.focus():(d=v.value)===null||d===void 0||d.focus()}}function Te(){n.passivelyActivated&&(I.value=!1,Ke(()=>{var e;(e=u.value)===null||e===void 0||e.focus()}))}function Ne(){var e,t,d;B.value||(n.passivelyActivated?(e=u.value)===null||e===void 0||e.focus():((t=s.value)===null||t===void 0||t.focus(),(d=v.value)===null||d===void 0||d.focus()))}function Pn(){var e;!((e=u.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function zn(){var e,t;(e=s.value)===null||e===void 0||e.select(),(t=v.value)===null||t===void 0||t.select()}function Mn(){B.value||(s.value?s.value.focus():v.value&&v.value.focus())}function Rn(){const{value:e}=u;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&Te()}function Tn(e){if(n.type==="textarea"){const{value:t}=s;t==null||t.scrollTo(e)}else{const{value:t}=v;t==null||t.scrollTo(e)}}function Ae(e){const{type:t,pair:d,autosize:k}=n;if(!d&&k)if(t==="textarea"){const{value:P}=c;P&&(P.textContent=(e??"")+`\r
`)}else{const{value:P}=i;P&&(e?P.textContent=e:P.innerHTML="&nbsp;")}}function An(){xe()}const Oe=M({top:"0"});function Fn(e){var t;const{scrollTop:d}=e.target;Oe.value.top=`${-d}px`,(t=z.value)===null||t===void 0||t.syncUnifiedContainer()}let de=null;He(()=>{const{autosize:e,type:t}=n;e&&t==="textarea"?de=Be(S,d=>{!Array.isArray(d)&&d!==U&&Ae(d)}):de==null||de()});let ue=null;He(()=>{n.type==="textarea"?ue=Be(S,e=>{var t;!Array.isArray(e)&&e!==U&&((t=z.value)===null||t===void 0||t.syncUnifiedContainer())}):ue==null||ue()}),en(nn,{mergedValueRef:S,maxlengthRef:we,mergedClsPrefixRef:a,countGraphemesRef:J(n,"countGraphemes")});const _n={wrapperElRef:u,inputElRef:v,textareaElRef:s,isCompositing:_,focus:Ne,blur:Pn,select:zn,deactivate:Rn,activate:Mn,scrollTo:Tn},Dn=Ze("Input",g,a),Ue=D(()=>{const{value:e}=O,{common:{cubicBezierEaseInOut:t},self:{color:d,borderRadius:k,textColor:P,caretColor:w,caretColorError:H,caretColorWarning:K,textDecorationColor:q,border:ee,borderDisabled:ne,borderHover:Fe,borderFocus:$n,placeholderColor:Bn,placeholderColorDisabled:En,lineHeightTextarea:Wn,colorDisabled:In,colorFocus:Ln,textColorDisabled:Vn,boxShadowFocus:Nn,iconSize:On,colorFocusWarning:Un,boxShadowFocusWarning:jn,borderWarning:Hn,borderFocusWarning:Kn,borderHoverWarning:qn,colorFocusError:Gn,boxShadowFocusError:Xn,borderError:Yn,borderFocusError:Jn,borderHoverError:Zn,clearSize:Qn,clearColor:et,clearColorHover:nt,clearColorPressed:tt,iconColor:rt,iconColorDisabled:ot,suffixTextColor:at,countTextColor:it,countTextColorDisabled:lt,iconColorHover:st,iconColorPressed:ct,loadingColor:dt,loadingColorError:ut,loadingColorWarning:ht,[ie("padding",e)]:ft,[ie("fontSize",e)]:vt,[ie("height",e)]:mt}}=l.value,{left:bt,right:gt}=St(ft);return{"--n-bezier":t,"--n-count-text-color":it,"--n-count-text-color-disabled":lt,"--n-color":d,"--n-font-size":vt,"--n-border-radius":k,"--n-height":mt,"--n-padding-left":bt,"--n-padding-right":gt,"--n-text-color":P,"--n-caret-color":w,"--n-text-decoration-color":q,"--n-border":ee,"--n-border-disabled":ne,"--n-border-hover":Fe,"--n-border-focus":$n,"--n-placeholder-color":Bn,"--n-placeholder-color-disabled":En,"--n-icon-size":On,"--n-line-height-textarea":Wn,"--n-color-disabled":In,"--n-color-focus":Ln,"--n-text-color-disabled":Vn,"--n-box-shadow-focus":Nn,"--n-loading-color":dt,"--n-caret-color-warning":K,"--n-color-focus-warning":Un,"--n-box-shadow-focus-warning":jn,"--n-border-warning":Hn,"--n-border-focus-warning":Kn,"--n-border-hover-warning":qn,"--n-loading-color-warning":ht,"--n-caret-color-error":H,"--n-color-focus-error":Gn,"--n-box-shadow-focus-error":Xn,"--n-border-error":Yn,"--n-border-focus-error":Jn,"--n-border-hover-error":Zn,"--n-loading-color-error":ut,"--n-clear-color":et,"--n-clear-size":Qn,"--n-clear-color-hover":nt,"--n-clear-color-pressed":tt,"--n-icon-color":rt,"--n-icon-color-hover":st,"--n-icon-color-pressed":ct,"--n-icon-color-disabled":ot,"--n-suffix-text-color":at}}),Y=f?Qe("input",D(()=>{const{value:e}=O;return e[0]}),Ue,n):void 0;return Object.assign(Object.assign({},_n),{wrapperElRef:u,inputElRef:v,inputMirrorElRef:i,inputEl2Ref:p,textareaElRef:s,textareaMirrorElRef:c,textareaScrollbarInstRef:z,rtlEnabled:Dn,uncontrolledValue:$,mergedValue:S,passwordVisible:j,mergedPlaceholder:V,showPlaceholder1:be,showPlaceholder2:ge,mergedFocus:Z,isComposing:_,activated:I,showClearButton:pe,mergedSize:O,mergedDisabled:B,textDecorationStyle:ye,mergedClsPrefix:a,mergedBordered:r,mergedShowPasswordOn:Q,placeholderStyle:Oe,mergedStatus:y,textAreaScrollContainerWidth:le,handleTextAreaScroll:Fn,handleCompositionStart:sn,handleCompositionEnd:cn,handleInput:se,handleInputBlur:un,handleInputFocus:hn,handleWrapperBlur:fn,handleWrapperFocus:vn,handleMouseEnter:yn,handleMouseLeave:xn,handleMouseDown:pn,handleChange:mn,handleClick:bn,handleClear:gn,handlePasswordToggleClick:wn,handlePasswordToggleMousedown:Cn,handleWrapperKeydown:kn,handleTextAreaMirrorResize:An,getTextareaScrollContainer:()=>s.value,mergedTheme:l,cssVars:f?void 0:Ue,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender})},render(){var n,a;const{mergedClsPrefix:r,mergedStatus:f,themeClass:g,type:l,countGraphemes:u,onRender:s}=this,c=this.$slots;return s==null||s(),o("div",{ref:"wrapperElRef",class:[`${r}-input`,g,f&&`${r}-input--${f}-status`,{[`${r}-input--rtl`]:this.rtlEnabled,[`${r}-input--disabled`]:this.mergedDisabled,[`${r}-input--textarea`]:l==="textarea",[`${r}-input--resizable`]:this.resizable&&!this.autosize,[`${r}-input--autosize`]:this.autosize,[`${r}-input--round`]:this.round&&l!=="textarea",[`${r}-input--pair`]:this.pair,[`${r}-input--focus`]:this.mergedFocus,[`${r}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},o("div",{class:`${r}-input-wrapper`},he(c.prefix,i=>i&&o("div",{class:`${r}-input__prefix`},i)),l==="textarea"?o(Pt,{ref:"textareaScrollbarInstRef",class:`${r}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var i,v;const{textAreaScrollContainerWidth:p}=this,m={width:this.autosize&&p&&`${p}px`};return o(Dt,null,o("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${r}-input__textarea-el`,(i=this.inputProps)===null||i===void 0?void 0:i.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(v=this.inputProps)===null||v===void 0?void 0:v.style,m],onBlur:this.handleInputBlur,onFocus:F=>this.handleInputFocus(F,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`,style:[this.placeholderStyle,m],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?o(zt,{onResize:this.handleTextAreaMirrorResize},{default:()=>o("div",{ref:"textareaMirrorElRef",class:`${r}-input__textarea-mirror`,key:"mirror"})}):null)}}):o("div",{class:`${r}-input__input`},o("input",Object.assign({type:l==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":l},this.inputProps,{ref:"inputElRef",class:[`${r}-input__input-el`,(n=this.inputProps)===null||n===void 0?void 0:n.class],style:[this.textDecorationStyle[0],(a=this.inputProps)===null||a===void 0?void 0:a.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:i=>this.handleInputFocus(i,0),onInput:i=>this.handleInput(i,0),onChange:i=>this.handleChange(i,0)})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[0])):null,this.autosize?o("div",{class:`${r}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&he(c.suffix,i=>i||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?o("div",{class:`${r}-input__suffix`},[he(c["clear-icon-placeholder"],v=>(this.clearable||v)&&o(Ee,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>v,icon:()=>{var p,m;return(m=(p=this.$slots)["clear-icon"])===null||m===void 0?void 0:m.call(p)}})),this.internalLoadingBeforeSuffix?null:i,this.loading!==void 0?o(Tr,{clsPrefix:r,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?i:null,this.showCount&&this.type!=="textarea"?o(qe,null,{default:v=>{var p;return(p=c.count)===null||p===void 0?void 0:p.call(c,v)}}):null,this.mergedShowPasswordOn&&this.type==="password"?o("div",{class:`${r}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?ae(c["password-visible-icon"],()=>[o(ve,{clsPrefix:r},{default:()=>o(Sr,null)})]):ae(c["password-invisible-icon"],()=>[o(ve,{clsPrefix:r},{default:()=>o(Pr,null)})])):null]):null)),this.pair?o("span",{class:`${r}-input__separator`},ae(c.separator,()=>[this.separator])):null,this.pair?o("div",{class:`${r}-input-wrapper`},o("div",{class:`${r}-input__input`},o("input",{ref:"inputEl2Ref",type:this.type,class:`${r}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:i=>this.handleInputFocus(i,1),onInput:i=>this.handleInput(i,1),onChange:i=>this.handleChange(i,1)}),this.showPlaceholder2?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[1])):null),he(c.suffix,i=>(this.clearable||i)&&o("div",{class:`${r}-input__suffix`},[this.clearable&&o(Ee,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var v;return(v=c["clear-icon"])===null||v===void 0?void 0:v.call(c)},placeholder:()=>{var v;return(v=c["clear-icon-placeholder"])===null||v===void 0?void 0:v.call(c)}}),i]))):null,this.mergedBordered?o("div",{class:`${r}-input__border`}):null,this.mergedBordered?o("div",{class:`${r}-input__state-border`}):null,this.showCount&&l==="textarea"?o(qe,null,{default:i=>{var v;const{renderCount:p}=this;return p?p(i):(v=c.count)===null||v===void 0?void 0:v.call(c,i)}}):null)}}),Br=o("svg",{viewBox:"0 0 64 64",class:"check-icon"},o("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Er=o("svg",{viewBox:"0 0 100 100",class:"line-icon"},o("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),tn=Je("n-checkbox-group"),Wr={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},jr=N({name:"CheckboxGroup",props:Wr,setup(n){const{mergedClsPrefixRef:a}=We(n),r=Ie(n),{mergedSizeRef:f,mergedDisabledRef:g}=r,l=M(n.defaultValue),u=D(()=>n.value),s=Ve(u,l),c=D(()=>{var p;return((p=s.value)===null||p===void 0?void 0:p.length)||0}),i=D(()=>Array.isArray(s.value)?new Set(s.value):new Set);function v(p,m){const{nTriggerFormInput:F,nTriggerFormChange:z}=r,{onChange:E,"onUpdate:value":$,onUpdateValue:W}=n;if(Array.isArray(s.value)){const S=Array.from(s.value),L=S.findIndex(O=>O===m);p?~L||(S.push(m),W&&x(W,S,{actionType:"check",value:m}),$&&x($,S,{actionType:"check",value:m}),F(),z(),l.value=S,E&&x(E,S)):~L&&(S.splice(L,1),W&&x(W,S,{actionType:"uncheck",value:m}),$&&x($,S,{actionType:"uncheck",value:m}),E&&x(E,S),l.value=S,F(),z())}else p?(W&&x(W,[m],{actionType:"check",value:m}),$&&x($,[m],{actionType:"check",value:m}),E&&x(E,[m]),l.value=[m],F(),z()):(W&&x(W,[],{actionType:"uncheck",value:m}),$&&x($,[],{actionType:"uncheck",value:m}),E&&x(E,[]),l.value=[],F(),z())}return en(tn,{checkedCountRef:c,maxRef:J(n,"max"),minRef:J(n,"min"),valueSetRef:i,disabledRef:g,mergedSizeRef:f,toggleCheckbox:v}),{mergedClsPrefix:a}},render(){return o("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Ir=C([b("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[C("&:hover",[b("checkbox-box",[h("border",{border:"var(--n-border-checked)"})])]),C("&:focus:not(:active)",[b("checkbox-box",[h("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),A("inside-table",[b("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),A("checked",[b("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[b("checkbox-icon",[C(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("indeterminate",[b("checkbox-box",[b("checkbox-icon",[C(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),C(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("checked, indeterminate",[C("&:focus:not(:active)",[b("checkbox-box",[h("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),b("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[h("border",{border:"var(--n-border-checked)"})])]),A("disabled",{cursor:"not-allowed"},[A("checked",[b("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[h("border",{border:"var(--n-border-disabled-checked)"}),b("checkbox-icon",[C(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),b("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[h("border",{border:"var(--n-border-disabled)"}),b("checkbox-icon",[C(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),h("label",{color:"var(--n-text-color-disabled)"})]),b("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),b("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[h("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),b("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[C(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),Ge({left:"1px",top:"1px"})])]),h("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[C("&:empty",{display:"none"})])]),Mt(b("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Rt(b("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Lr=Object.assign(Object.assign({},me.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Hr=N({name:"Checkbox",props:Lr,setup(n){const a=M(null),{mergedClsPrefixRef:r,inlineThemeDisabled:f,mergedRtlRef:g}=We(n),l=Ie(n,{mergedSize(y){const{size:T}=n;if(T!==void 0)return T;if(c){const{value:R}=c.mergedSizeRef;if(R!==void 0)return R}if(y){const{mergedSize:R}=y;if(R!==void 0)return R.value}return"medium"},mergedDisabled(y){const{disabled:T}=n;if(T!==void 0)return T;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:R},checkedCountRef:_}=c;if(R!==void 0&&_.value>=R&&!m.value)return!0;const{minRef:{value:I}}=c;if(I!==void 0&&_.value<=I&&m.value)return!0}return y?y.disabled.value:!1}}),{mergedDisabledRef:u,mergedSizeRef:s}=l,c=Le(tn,null),i=M(n.defaultChecked),v=J(n,"checked"),p=Ve(v,i),m=De(()=>{if(c){const y=c.valueSetRef.value;return y&&n.value!==void 0?y.has(n.value):!1}else return p.value===n.checkedValue}),F=me("Checkbox","-checkbox",Ir,Tt,n,r);function z(y){if(c&&n.value!==void 0)c.toggleCheckbox(!m.value,n.value);else{const{onChange:T,"onUpdate:checked":R,onUpdateChecked:_}=n,{nTriggerFormInput:I,nTriggerFormChange:U}=l,V=m.value?n.uncheckedValue:n.checkedValue;R&&x(R,V,y),_&&x(_,V,y),T&&x(T,V,y),I(),U(),i.value=V}}function E(y){u.value||z(y)}function $(y){if(!u.value)switch(y.key){case" ":case"Enter":z(y)}}function W(y){switch(y.key){case" ":y.preventDefault()}}const S={focus:()=>{var y;(y=a.value)===null||y===void 0||y.focus()},blur:()=>{var y;(y=a.value)===null||y===void 0||y.blur()}},L=Ze("Checkbox",g,r),O=D(()=>{const{value:y}=s,{common:{cubicBezierEaseInOut:T},self:{borderRadius:R,color:_,colorChecked:I,colorDisabled:U,colorTableHeader:V,colorTableHeaderModal:be,colorTableHeaderPopover:ge,checkMarkColor:Z,checkMarkColorDisabled:pe,border:Q,borderFocus:j,borderDisabled:ye,borderChecked:le,boxShadowFocus:xe,textColor:we,textColorDisabled:Ce,checkMarkColorDisabledChecked:G,colorDisabledChecked:X,borderDisabledChecked:ke,labelPadding:Se,labelLineHeight:Pe,labelFontWeight:ze,[ie("fontSize",y)]:Me,[ie("size",y)]:Re}}=F.value;return{"--n-label-line-height":Pe,"--n-label-font-weight":ze,"--n-size":Re,"--n-bezier":T,"--n-border-radius":R,"--n-border":Q,"--n-border-checked":le,"--n-border-focus":j,"--n-border-disabled":ye,"--n-border-disabled-checked":ke,"--n-box-shadow-focus":xe,"--n-color":_,"--n-color-checked":I,"--n-color-table":V,"--n-color-table-modal":be,"--n-color-table-popover":ge,"--n-color-disabled":U,"--n-color-disabled-checked":X,"--n-text-color":we,"--n-text-color-disabled":Ce,"--n-check-mark-color":Z,"--n-check-mark-color-disabled":pe,"--n-check-mark-color-disabled-checked":G,"--n-font-size":Me,"--n-label-padding":Se}}),B=f?Qe("checkbox",D(()=>s.value[0]),O,n):void 0;return Object.assign(l,S,{rtlEnabled:L,selfRef:a,mergedClsPrefix:r,mergedDisabled:u,renderedChecked:m,mergedTheme:F,labelId:At(),handleClick:E,handleKeyUp:$,handleKeyDown:W,cssVars:f?void 0:O,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender})},render(){var n;const{$slots:a,renderedChecked:r,mergedDisabled:f,indeterminate:g,privateInsideTable:l,cssVars:u,labelId:s,label:c,mergedClsPrefix:i,focusable:v,handleKeyUp:p,handleKeyDown:m,handleClick:F}=this;return(n=this.onRender)===null||n===void 0||n.call(this),o("div",{ref:"selfRef",class:[`${i}-checkbox`,this.themeClass,this.rtlEnabled&&`${i}-checkbox--rtl`,r&&`${i}-checkbox--checked`,f&&`${i}-checkbox--disabled`,g&&`${i}-checkbox--indeterminate`,l&&`${i}-checkbox--inside-table`],tabindex:f||!v?void 0:0,role:"checkbox","aria-checked":g?"mixed":r,"aria-labelledby":s,style:u,onKeyup:p,onKeydown:m,onClick:F,onMousedown:()=>{$e("selectstart",window,z=>{z.preventDefault()},{once:!0})}},o("div",{class:`${i}-checkbox-box-wrapper`}," ",o("div",{class:`${i}-checkbox-box`},o(Ye,null,{default:()=>this.indeterminate?o("div",{key:"indeterminate",class:`${i}-checkbox-icon`},Er):o("div",{key:"check",class:`${i}-checkbox-icon`},Br)}),o("div",{class:`${i}-checkbox-box__border`}))),c!==null||a.default?o("span",{class:`${i}-checkbox__label`,id:s},a.default?a.default():c):null)}});export{zr as C,Tr as N,Ur as _,Hr as a,jr as b,kr as u};
