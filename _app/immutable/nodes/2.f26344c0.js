import{S as H,i as I,s as J,k as h,l as g,m as y,h as _,b as $,g as v,v as O,d as z,f as Q,o as R,w as W,J as G,y as U,z as K,A as V,K as M,B as L,q as b,a as N,r as w,c as S,p as q,n as T,G as c,H as X}from"../chunks/index.8cb9e05c.js";import{M as Y}from"../chunks/MainScroll.ca250557.js";import{c as B}from"../chunks/Dots.5a89b4fc.js";function D(s){let a,n,t,e;function i(o){s[2](o)}function f(o){s[3](o)}let r={};return s[0]!==void 0&&(r.wfp_data=s[0]),s[1]!==void 0&&(r.fao_data=s[1]),a=new Y({props:r}),W.push(()=>G(a,"wfp_data",i)),W.push(()=>G(a,"fao_data",f)),{c(){U(a.$$.fragment)},l(o){K(a.$$.fragment,o)},m(o,l){V(a,o,l),e=!0},p(o,l){const m={};!n&&l&1&&(n=!0,m.wfp_data=o[0],M(()=>n=!1)),!t&&l&2&&(t=!0,m.fao_data=o[1],M(()=>t=!1)),a.$set(m)},i(o){e||(v(a.$$.fragment,o),e=!0)},o(o){z(a.$$.fragment,o),e=!1},d(o){L(a,o)}}}function j(s){let a,n,t=s[0].length>0&&s[1].length>0&&D(s);return{c(){a=h("main"),t&&t.c()},l(e){a=g(e,"MAIN",{});var i=y(a);t&&t.l(i),i.forEach(_)},m(e,i){$(e,a,i),t&&t.m(a,null),n=!0},p(e,[i]){e[0].length>0&&e[1].length>0?t?(t.p(e,i),i&3&&v(t,1)):(t=D(e),t.c(),v(t,1),t.m(a,null)):t&&(O(),z(t,1,1,()=>{t=null}),Q())},i(e){n||(v(t),n=!0)},o(e){z(t),n=!1},d(e){e&&_(a),t&&t.d()}}}let Z="https://raw.githubusercontent.com/memovasquez/data/main/FAO_DatasetAbridged.csv",x="https://docs.google.com/spreadsheets/d/e/2PACX-1vTYmcthdA2QHcxz-7LyWtPwFCw6EcrxqdbKk7ABJNdcDGEb4u5AyoU1Gg3716krw3_HmqaH7tzGBd17/pub?output=csv";function tt(s,a,n){let t=[],e=[];R(async()=>{B(x).then(r=>{n(0,t=r)}),B(Z).then(r=>{n(1,e=r)})});function i(r){t=r,n(0,t),n(1,e)}function f(r){e=r,n(1,e),n(0,t)}return s.$$.update=()=>{s.$$.dirty&3&&(n(0,t),n(1,e),n(1,e),n(0,t))},[t,e,i,f]}class at extends H{constructor(a){super(),I(this,a,tt,j,J,{})}}function et(s){let a,n,t,e,i,f,r,o,l,m,p,E,F,k;return r=new at({}),{c(){a=h("main"),n=h("p"),t=b("Interactive Data Story by Edenna Chen, Jesse Cummings, and Guillermo Vasquez "),e=h("br"),i=b(`
         This data visualization was made with data contributed by the United Nations World Food Programme (WFP)`),f=N(),U(r.$$.fragment),o=N(),l=h("p"),m=b("Thank you to the "),p=h("a"),E=b("World Food Programme"),F=b(" for providing the data used in these interactive data visualizations"),this.h()},l(d){a=g(d,"MAIN",{style:!0});var u=y(a);n=g(u,"P",{style:!0});var A=y(n);t=w(A,"Interactive Data Story by Edenna Chen, Jesse Cummings, and Guillermo Vasquez "),e=g(A,"BR",{}),i=w(A,`
         This data visualization was made with data contributed by the United Nations World Food Programme (WFP)`),A.forEach(_),f=S(u),K(r.$$.fragment,u),o=S(u),l=g(u,"P",{style:!0});var P=y(l);m=w(P,"Thank you to the "),p=g(P,"A",{href:!0,target:!0});var C=y(p);E=w(C,"World Food Programme"),C.forEach(_),F=w(P," for providing the data used in these interactive data visualizations"),P.forEach(_),u.forEach(_),this.h()},h(){q(n,"background-color","#eed4bc"),T(p,"href","https://www.wfp.org/"),T(p,"target","_blank"),q(l,"background-color","#eed4bc"),q(a,"background-color","#eed4bc")},m(d,u){$(d,a,u),c(a,n),c(n,t),c(n,e),c(n,i),c(a,f),V(r,a,null),c(a,o),c(a,l),c(l,m),c(l,p),c(p,E),c(l,F),k=!0},p:X,i(d){k||(v(r.$$.fragment,d),k=!0)},o(d){z(r.$$.fragment,d),k=!1},d(d){d&&_(a),L(r)}}}class st extends H{constructor(a){super(),I(this,a,null,et,J,{})}}export{st as component};