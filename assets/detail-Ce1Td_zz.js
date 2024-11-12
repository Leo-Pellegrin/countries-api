import{bf as D,bc as L,C as f,a1 as O,o as l,bd as a,c as i,w as r,bg as h,f as s,d,b as _,bh as R,V as z,bi as p,t as c,H as g,be as v,h as P}from"./index-CriXVPRD.js";import{_ as H,f as w,e as y,V as I,a as S,g as A,b as F}from"./VRow-CClZws3U.js";const M={class:"d-flex align-center justify-center fill-height"},q={class:"detail-title"},G={key:0},J={key:0},K={key:0},Q={key:0},U={key:1},W={key:0},X={key:0},Y={style:{"font-size":"13px"}},Z={key:1},ee={__name:"DetailVue",setup(x){const k=D(),C=L(),N=f(k.params.countryname),t=f([]),m=f([]),j=f(!0);O(()=>{B(),j.value=!1});async function B(){try{const u=await fetch(`https://restcountries.com/v3.1/name/${N.value}`);u.ok?(t.value=await u.json(),console.log(t.value),t.value[0].borders&&$(t.value[0].borders)):console.error("Erreur lors de la récupération des données",u.status)}catch(u){console.error("Erreur de réseau ou autre",u)}}async function $(u){const e=[];try{const o=u.map(async n=>{const b=await fetch(`https://restcountries.com/v3.1/alpha/${n}`);if(!b.ok)throw new Error(`Erreur de récupération du pays avec le code : ${n}`);const V=await b.json();return console.log(V),V[0].name.common});e.push(...await Promise.all(o)),m.value=e,console.log("borders",m.value)}catch(o){console.error("Erreur lors de la récupération des pays frontaliers:",o)}}function E(){C.push("/")}function T(u){console.log(u),window.location.replace(`/country/${u}`)}return(u,e)=>(l(),a("div",null,[i(h,{"prepend-icon":"mdi-keyboard-backspace",variant:"outlined",elevation:"2",rounded:"sm",class:"text-none text-subtitle-1 mt-16 ml-16 px-8",onClick:e[0]||(e[0]=o=>E())},{default:r(()=>e[1]||(e[1]=[d(" Back ")])),_:1}),s("div",null,[i(w,{"no-gutters":"",class:"mt-16"},{default:r(()=>[i(y,{class:"mt-14 ml-16"},{default:r(()=>[t.value.length>0?(l(),_(z,{key:0,width:"550px",src:t.value[0].flags.svg,ratio:"16/9",alt:t.value[0].flags.alt,class:"flag-image"},{placeholder:r(()=>[s("div",M,[i(R,{color:"grey-lighten-4",indeterminate:""})])]),_:1},8,["src","alt"])):p("",!0)]),_:1}),i(y,{class:"mt-16"},{default:r(()=>[t.value.length>0?(l(),_(F,{key:0,class:"mr-16 cardbg-color",elevation:"0"},{default:r(()=>[i(I,{class:"font-weight-black"},{default:r(()=>[s("p",q,c(t.value.length>0?t.value[0].name.common:"Loading..."),1)]),_:1}),i(S,{class:"mt-5"},{default:r(()=>[i(w,null,{default:r(()=>[i(y,{class:"details-spacing"},{default:r(()=>[s("p",null,[e[2]||(e[2]=s("strong",null,"Native name: ",-1)),d(c(Object.values(t.value[0].name.nativeName)[0].common),1)]),s("p",null,[e[3]||(e[3]=s("strong",null,"Population: ",-1)),s("span",null,c(t.value[0].population),1)]),s("p",null,[e[4]||(e[4]=s("strong",null,"Region: ",-1)),d(c(t.value[0].region),1)]),s("p",null,[e[5]||(e[5]=s("strong",null,"Sub Region: ",-1)),d(c(t.value[0].subregion),1)]),s("p",null,[e[6]||(e[6]=s("strong",null,"Capital: ",-1)),(l(!0),a(g,null,v(t.value[0].capital,(o,n)=>(l(),a("span",{key:n},[d(c(o)+" ",1),n<t.value[0].capital.length-1?(l(),a("span",G,", ")):p("",!0)]))),128))])]),_:1}),i(y,{class:"details-spacing"},{default:r(()=>[s("p",null,[e[7]||(e[7]=s("strong",null,"Top Level Domain: ",-1)),(l(!0),a(g,null,v(t.value[0].tld,(o,n)=>(l(),a("span",{key:n},[d(c(o)+" ",1),n<t.value[0].tld.length-1?(l(),a("span",J,", ")):p("",!0)]))),128))]),t.value[0]&&t.value[0].currencies?(l(),a("p",K,[e[8]||(e[8]=s("strong",null,"Currencies: ",-1)),(l(!0),a(g,null,v(Object.values(t.value[0].currencies),(o,n)=>(l(),a("span",{key:n},[d(c(o.name)+" ",1),n<Object.values(t.value[0].currencies).length-1?(l(),a("span",Q,", ")):p("",!0)]))),128))])):(l(),a("p",U,e[9]||(e[9]=[s("strong",null,"Currencies:",-1),d(" No data available ")]))),s("p",null,[e[10]||(e[10]=s("strong",null,"Languages: ",-1)),(l(!0),a(g,null,v(Object.values(t.value[0].languages),(o,n)=>(l(),a("span",{key:n},[d(c(o)+" ",1),n<Object.values(t.value[0].languages).length-1?(l(),a("span",W,", ")):p("",!0)]))),128))])]),_:1})]),_:1})]),_:1}),i(A,{class:"mt-5 ml-2"},{default:r(()=>[e[12]||(e[12]=s("p",{class:"mr-3",style:{"font-size":"15px"}},[s("strong",null,"Border Countries:")],-1)),m.value.length>0?(l(),a("div",X,[(l(!0),a(g,null,v(m.value,(o,n)=>(l(),_(h,{key:n,elevation:"1",class:"text-none ml-1",rounded:"sm",onClick:b=>T(o)},{default:r(()=>[s("span",Y,c(o),1)]),_:2},1032,["onClick"]))),128))])):(l(),a("div",Z,e[11]||(e[11]=[s("span",{style:{"font-size":"13px"}},"No border countries",-1)])))]),_:1})]),_:1})):p("",!0)]),_:1})]),_:1})])]))}},te=H(ee,[["__scopeId","data-v-bd3b5c09"]]),ae={__name:"detail",setup(x){return(k,C)=>(l(),_(P(te)))}};export{ae as default};
