import{g as v,bj as A,bk as be,j as f,bl as N,z as ke,l as g,c as s,p as m,aa as y,I as b,ak as R,r as L,an as O,ap as Ce,k as z,aj as D,a7 as G,aq as F,ar as M,L as U,at as K,au as Ve,V as q,J as h,az as V,ax as H,H as w,a5 as Se,al as Ae,b0 as Ie,bm as Pe,bn as he,ao as Ne,R as Le,a6 as xe,as as _e,b1 as je,bo as Te,bp as we,aw as Be,a as S,F as $e,G as Ee,b2 as Re,m as Oe,bq as I}from"./index-CriXVPRD.js";function ze(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return v()({name:t??A(be(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...f()},setup(a,l){let{slots:i}=l;return()=>{var d;return N(a.tag,{class:[e,a.class],style:a.style},(d=i.default)==null?void 0:d.call(i))}}})}const st=(e,n)=>{const t=e.__vccOpts||e;for(const[a,l]of n)t[a]=l;return t},De=v()({name:"VCardActions",props:f(),setup(e,n){let{slots:t}=n;return ke({VBtn:{slim:!0,variant:"text"}}),g(()=>{var a;return s("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ge=m({opacity:[Number,String],...f(),...y()},"VCardSubtitle"),Fe=v()({name:"VCardSubtitle",props:Ge(),setup(e,n){let{slots:t}=n;return g(()=>s(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Me=ze("v-card-title"),Ue=m({start:Boolean,end:Boolean,icon:b,image:String,text:String,...R(),...f(),...L(),...O(),...Ce(),...y(),...z(),...D({variant:"flat"})},"VAvatar"),B=v()({name:"VAvatar",props:Ue(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=G(e),{borderClasses:l}=F(e),{colorClasses:i,colorStyles:d,variantClasses:c}=M(e),{densityClasses:r}=U(e),{roundedClasses:u}=K(e),{sizeClasses:o,sizeStyles:P}=Ve(e);return g(()=>s(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,l.value,i.value,r.value,u.value,o.value,c.value,e.class],style:[d.value,P.value,e.style]},{default:()=>[t.default?s(V,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?s(q,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?s(h,{key:"icon",icon:e.icon},null):e.text,H(!1,"v-avatar")]})),{}}}),Ke=m({appendAvatar:String,appendIcon:b,prependAvatar:String,prependIcon:b,subtitle:[String,Number],title:[String,Number],...f(),...L()},"VCardItem"),qe=v()({name:"VCardItem",props:Ke(),setup(e,n){let{slots:t}=n;return g(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),l=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),d=!!(i||t.append),c=!!(e.title!=null||t.title),r=!!(e.subtitle!=null||t.subtitle);return s("div",{class:["v-card-item",e.class],style:e.style},[l&&s("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?s(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):s(w,null,[e.prependAvatar&&s(B,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(h,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),s("div",{class:"v-card-item__content"},[c&&s(Me,{key:"title"},{default:()=>{var o;return[((o=t.title)==null?void 0:o.call(t))??e.title]}}),r&&s(Fe,{key:"subtitle"},{default:()=>{var o;return[((o=t.subtitle)==null?void 0:o.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),d&&s("div",{key:"append",class:"v-card-item__append"},[t.append?s(V,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):s(w,null,[e.appendIcon&&s(h,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(B,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),He=m({opacity:[Number,String],...f(),...y()},"VCardText"),Je=v()({name:"VCardText",props:He(),setup(e,n){let{slots:t}=n;return g(()=>s(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),We=m({appendAvatar:String,appendIcon:b,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:b,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...R(),...f(),...L(),...Se(),...Ae(),...Ie(),...Pe(),...he(),...O(),...Ne(),...y(),...z(),...D({variant:"elevated"})},"VCard"),it=v()({name:"VCard",directives:{Ripple:Le},props:We(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:l}=G(e),{borderClasses:i}=F(e),{colorClasses:d,colorStyles:c,variantClasses:r}=M(e),{densityClasses:u}=U(e),{dimensionStyles:o}=xe(e),{elevationClasses:P}=_e(e),{loaderClasses:ne}=je(e),{locationStyles:le}=Te(e),{positionClasses:se}=we(e),{roundedClasses:ie}=K(e),k=Be(e,t),de=S(()=>e.link!==!1&&k.isLink.value),C=S(()=>!e.disabled&&e.link!==!1&&(e.link||k.isClickable.value));return g(()=>{const ce=de.value?"a":e.tag,re=!!(a.title||e.title!=null),ue=!!(a.subtitle||e.subtitle!=null),oe=re||ue,ve=!!(a.append||e.appendAvatar||e.appendIcon),fe=!!(a.prepend||e.prependAvatar||e.prependIcon),me=!!(a.image||e.image),ge=oe||fe||ve,ye=!!(a.text||e.text!=null);return $e(s(ce,Oe({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":C.value},l.value,i.value,d.value,u.value,P.value,ne.value,se.value,ie.value,r.value,e.class],style:[c.value,o.value,le.value,e.style],onClick:C.value&&k.navigate,tabindex:e.disabled?-1:void 0},k.linkProps),{default:()=>{var j;return[me&&s("div",{key:"image",class:"v-card__image"},[a.image?s(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):s(q,{key:"image-img",cover:!0,src:e.image},null)]),s(Re,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),ge&&s(qe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),ye&&s(Je,{key:"text"},{default:()=>{var T;return[((T=a.text)==null?void 0:T.call(a))??e.text]}}),(j=a.default)==null?void 0:j.call(a),a.actions&&s(De,null,{default:a.actions}),H(C.value,"v-card")]}}),[[Ee("ripple"),C.value&&e.ripple]])}),{}}}),J=I.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),W=I.reduce((e,n)=>{const t="offset"+A(n);return e[t]={type:[String,Number],default:null},e},{}),Y=I.reduce((e,n)=>{const t="order"+A(n);return e[t]={type:[String,Number],default:null},e},{}),$={col:Object.keys(J),offset:Object.keys(W),order:Object.keys(Y)};function Ye(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const l=n.replace(e,"");a+=`-${l}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Qe=["auto","start","end","center","baseline","stretch"],Xe=m({cols:{type:[Boolean,String,Number],default:!1},...J,offset:{type:[String,Number],default:null},...W,order:{type:[String,Number],default:null},...Y,alignSelf:{type:String,default:null,validator:e=>Qe.includes(e)},...f(),...y()},"VCol"),dt=v()({name:"VCol",props:Xe(),setup(e,n){let{slots:t}=n;const a=S(()=>{const l=[];let i;for(i in $)$[i].forEach(c=>{const r=e[c],u=Ye(i,c,r);u&&l.push(u)});const d=l.some(c=>c.startsWith("v-col-"));return l.push({"v-col":!d||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return N(e.tag,{class:[a.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),x=["start","end","center"],Q=["space-between","space-around","space-evenly"];function _(e,n){return I.reduce((t,a)=>{const l=e+A(a);return t[l]=n(),t},{})}const Ze=[...x,"baseline","stretch"],X=e=>Ze.includes(e),Z=_("align",()=>({type:String,default:null,validator:X})),pe=[...x,...Q],p=e=>pe.includes(e),ee=_("justify",()=>({type:String,default:null,validator:p})),et=[...x,...Q,"stretch"],te=e=>et.includes(e),ae=_("alignContent",()=>({type:String,default:null,validator:te})),E={align:Object.keys(Z),justify:Object.keys(ee),alignContent:Object.keys(ae)},tt={align:"align",justify:"justify",alignContent:"align-content"};function at(e,n,t){let a=tt[e];if(t!=null){if(n){const l=n.replace(e,"");a+=`-${l}`}return a+=`-${t}`,a.toLowerCase()}}const nt=m({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:X},...Z,justify:{type:String,default:null,validator:p},...ee,alignContent:{type:String,default:null,validator:te},...ae,...f(),...y()},"VRow"),ct=v()({name:"VRow",props:nt(),setup(e,n){let{slots:t}=n;const a=S(()=>{const l=[];let i;for(i in E)E[i].forEach(d=>{const c=e[d],r=at(i,d,c);r&&l.push(r)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return N(e.tag,{class:["v-row",a.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}});export{Me as V,st as _,Je as a,it as b,B as c,ze as d,dt as e,ct as f,De as g};