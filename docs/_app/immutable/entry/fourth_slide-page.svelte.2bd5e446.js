import{S as k,i as E,s as P,w as N,J as y,k as w,y as G,l as M,m as C,z as S,h as D,n as q,b as z,G as B,A as H,K as v,g as I,d as J,B as K,o as L}from"../chunks/index.87e58281.js";import{D as T,c as O}from"../chunks/Dots.fd109cf3.js";function Q(i){let l,o,r,c,u,a;function h(n){i[3](n)}function b(n){i[4](n)}let d={};return i[0]!==void 0&&(d.numDots=i[0]),i[1]!==void 0&&(d.histData=i[1]),r=new T({props:d}),N.push(()=>y(r,"numDots",h)),N.push(()=>y(r,"histData",b)),{c(){l=w("main"),o=w("section"),G(r.$$.fragment),this.h()},l(n){l=M(n,"MAIN",{class:!0});var m=C(l);o=M(m,"SECTION",{});var s=C(o);S(r.$$.fragment,s),s.forEach(D),m.forEach(D),this.h()},h(){q(l,"class","svelte-15e8phw")},m(n,m){z(n,l,m),B(l,o),H(r,o,null),a=!0},p(n,[m]){const s={};!c&&m&1&&(c=!0,s.numDots=n[0],v(()=>c=!1)),!u&&m&2&&(u=!0,s.histData=n[1],v(()=>u=!1)),r.$set(s)},i(n){a||(I(r.$$.fragment,n),a=!0)},o(n){J(r.$$.fragment,n),a=!1},d(n){n&&D(l),K(r)}}}let U="https://docs.google.com/spreadsheets/d/e/2PACX-1vTYmcthdA2QHcxz-7LyWtPwFCw6EcrxqdbKk7ABJNdcDGEb4u5AyoU1Gg3716krw3_HmqaH7tzGBd17/pub?output=csv";function V(i,l,o){let r=[],c,u,a;function h(){console.log(r),o(2,r=r.filter(e=>e.country=="SLV")),a=r.map(e=>Number(e.rcsi_meal_nb)>0);let n=r.map(e=>Number(e.rcsi_borrow)>0),m=r.map(e=>Number(e.avg_income_currency)),s=r.map(e=>Number(e.avg_income_amount)).filter((e,t)=>e<1e3&&m[t]==1),f=r.map(e=>Number(e.income_per_capita)).filter((e,t)=>e<500&&m[t]==1),F=r.map(e=>Number(e.debt_currency)),_=r.map(e=>Number(e.debt_amount)).filter((e,t)=>e<1e3&&e>0&&F[t]==1),A=r.map(e=>Number(e.rem_currency)),p=r.map(e=>Number(e.remesa_amount)).filter((e,t)=>e<1e3&&e>0&&A[t]==1),g=5;o(0,c={all:Number(Math.round(r.length/g)),missedMeals:Number(Math.round(a.filter(e=>e>0&&e!=88).length/g)),borrowedFood:Number(Math.round(n.filter(e=>e>0&&e!=88).length/g))}),o(1,u={income:{all:s,missedMeals:[s.filter((e,t)=>a[t]),s.filter((e,t)=>!a[t])],borrowedFood:[s.filter((e,t)=>n[t]),s.filter((e,t)=>!n[t])]},incomePerCapita:{all:f,missedMeals:[f.filter((e,t)=>a[t]),f.filter((e,t)=>!a[t])],borrowedFood:[f.filter((e,t)=>n[t]),f.filter((e,t)=>!n[t])]},debt:{all:_,missedMeals:[_.filter((e,t)=>a[t]),_.filter((e,t)=>!a[t])],borrowedFood:[_.filter((e,t)=>n[t]),_.filter((e,t)=>!n[t])]},remittance:{all:p,missedMeals:[p.filter((e,t)=>a[t]),p.filter((e,t)=>!a[t])],borrowedFood:[p.filter((e,t)=>n[t]),p.filter((e,t)=>!n[t])]}})}L(()=>{O(U).then(n=>{o(2,r=n)})});function b(n){c=n,o(0,c)}function d(n){u=n,o(1,u)}return i.$$.update=()=>{i.$$.dirty&4&&(o(2,r),h())},[c,u,r,b,d]}class Y extends k{constructor(l){super(),E(this,l,V,Q,P,{})}}export{Y as default};
