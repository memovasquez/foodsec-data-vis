function C(){}const _t=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function E(t){t.forEach(Z)}function K(t){return typeof t=="function"}function Jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function Kt(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Qt(t,e,n){t.$$.on_destroy.push(pt(e,n))}function Ut(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Xt(t,e,n,i,r,u){if(r){const s=tt(e,n,i,u);t.p(s,r)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Zt(t){return t??""}function te(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const et=typeof window<"u";let yt=et?()=>window.performance.now():()=>Date.now(),Q=et?t=>requestAnimationFrame(t):C;const M=new Set;function nt(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&Q(nt)}function gt(t){let e;return M.size===0&&Q(nt),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}const wt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in wt;let L=!1;function bt(){L=!0}function xt(){L=!1}function $t(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:$t(1,r,h=>e[n[h]].claim_order,c))-1;i[l]=n[f]+1;const d=f+1;n[d]=l,r=Math.max(d,r)}const u=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<u.length&&s[l].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(s[l],f)}}function Et(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=st("style");return Nt(it(t),e),e.sheet}function Nt(t,e){return Et(t.head||t,e),e.sheet}function St(t,e){if(L){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ee(t,e,n){L&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function ne(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function U(t){return document.createTextNode(t)}function ie(){return U(" ")}function re(){return U("")}function se(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function oe(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:At(t,e,n)}function le(t){return t===""?null:+t}function Ct(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,r=!1){jt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function lt(t,e,n,i){return ot(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ce(t,e,n){return lt(t,e,n,st)}function ue(t,e,n){return lt(t,e,n,Mt)}function qt(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>U(e),!0)}function ae(t){return qt(t," ")}function fe(t,e){e=""+e,t.data!==e&&(t.data=e)}function de(t,e){t.value=e??""}function _e(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function he(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function me(t){const e=t.querySelector(":checked");return e&&e.__value}function Ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function pe(t,e){return new t(e)}const z=new Map;let B=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:kt(e),rules:{}};return z.set(t,n),n}function X(t,e,n,i,r,u,s,o=0){const l=16.666/i;let c=`{
`;for(let y=0;y<=1;y+=l){const g=e+(n-e)*u(y);c+=y*100+`%{${s(g,1-g)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,d=`__svelte_${Pt(f)}_${o}`,h=it(t),{stylesheet:a,rules:_}=z.get(h)||Tt(h,t);_[d]||(_[d]=!0,a.insertRule(`@keyframes ${d} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${i}ms linear ${r}ms 1 both`,B+=1,d}function Dt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),B-=r,B||Rt())}function Rt(){Q(()=>{B||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&rt(e)}),z.clear())})}let O;function q(t){O=t}function ct(){if(!O)throw new Error("Function called outside component initialization");return O}function ye(t){ct().$$.on_mount.push(t)}function ge(t){ct().$$.after_update.push(t)}const S=[],Y=[];let A=[];const G=[],ut=Promise.resolve();let J=!1;function at(){J||(J=!0,ut.then(ft))}function we(){return at(),ut}function F(t){A.push(t)}function be(t){G.push(t)}const I=new Set;let N=0;function ft(){if(N!==0)return;const t=O;do{try{for(;N<S.length;){const e=S[N];N++,q(e),zt(e.$$)}}catch(e){throw S.length=0,N=0,e}for(q(null),S.length=0,N=0;Y.length;)Y.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];I.has(n)||(I.add(n),n())}A.length=0}while(S.length);for(;G.length;)G.pop()();J=!1,I.clear(),q(t)}function zt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}function Bt(t){const e=[],n=[];A.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),A=e}let j;function Ft(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function H(t,e,n){t.dispatchEvent(Ot(`${e?"intro":"outro"}${n}`))}const R=new Set;let x;function xe(){x={r:0,c:[],p:x}}function $e(){x.r||E(x.c),x=x.p}function dt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function ve(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),x.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Lt={duration:0};function Ee(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),s=i?0:1,o=null,l=null,c=null;function f(){c&&Dt(t,c)}function d(a,_){const p=a.b-s;return _*=Math.abs(p),{a:s,b:a.b,d:p,duration:_,start:a.start,end:a.start+_,group:a.group}}function h(a){const{delay:_=0,duration:p=300,easing:y=_t,tick:g=C,css:$}=u||Lt,k={start:yt()+_,b:a};a||(k.group=x,x.r+=1),o||l?l=k:($&&(f(),c=X(t,s,a,p,_,y,$)),a&&g(0,1),o=d(k,p),F(()=>H(t,a,"start")),gt(v=>{if(l&&v>l.start&&(o=d(l,p),l=null,H(t,o.b,"start"),$&&(f(),c=X(t,s,o.b,o.duration,0,y,u.css))),o){if(v>=o.end)g(s=o.b,1-s),H(t,o.b,"end"),l||(o.b?f():--o.group.r||E(o.group.c)),o=null;else if(v>=o.start){const P=v-o.start;s=o.a+o.d*y(P/o.duration),g(s,1-s)}}return!!(o||l)}))}return{run(a){K(u)?Ft().then(()=>{u=u(r),h(a)}):h(a)},end(){f(),o=l=null}}}function ke(t,e){t.d(1),e.delete(t.key)}function Ne(t,e,n,i,r,u,s,o,l,c,f,d){let h=t.length,a=u.length,_=h;const p={};for(;_--;)p[t[_].key]=_;const y=[],g=new Map,$=new Map,k=[];for(_=a;_--;){const m=d(r,u,_),w=n(m);let b=s.get(w);b?i&&k.push(()=>b.p(m,e)):(b=c(w,m),b.c()),g.set(w,y[_]=b),w in p&&$.set(w,Math.abs(_-p[w]))}const v=new Set,P=new Set;function W(m){dt(m,1),m.m(o,f),s.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],w=t[h-1],b=m.key,T=w.key;m===w?(f=m.first,h--,a--):g.has(T)?!s.has(b)||v.has(b)?W(m):P.has(T)?h--:$.get(b)>$.get(T)?(P.add(b),W(m)):(v.add(T),h--):(l(w,s),h--)}for(;h--;){const m=t[h];g.has(m.key)||l(m,s)}for(;a;)W(y[a-1]);return E(k),y}const Wt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Wt];function Se(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Me(t){t&&t.c()}function Ae(t,e){t&&t.l(e)}function It(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||F(()=>{const s=t.$$.on_mount.map(Z).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),u.forEach(F)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(Bt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(t,e){t.$$.dirty[0]===-1&&(S.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ce(t,e,n,i,r,u,s,o=[-1]){const l=O;q(t);const c=t.$$={fragment:null,ctx:[],props:u,update:C,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:V(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(d,h,...a)=>{const _=a.length?a[0]:h;return c.ctx&&r(c.ctx[d],c.ctx[d]=_)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](_),f&&Gt(t,d)),h}):[],c.update(),f=!0,E(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){bt();const d=Ct(e.target);c.fragment&&c.fragment.l(d),d.forEach(rt)}else c.fragment&&c.fragment.c();e.intro&&dt(t.$$.fragment),It(t,e.target,e.anchor,e.customElement),xt(),ft()}q(l)}class je{$destroy(){Ht(this,1),this.$destroy=C}$on(e,n){if(!K(n))return C;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ne as $,It as A,Ht as B,Ut as C,Xt as D,Yt as E,Vt as F,St as G,C as H,Qt as I,Se as J,be as K,te as L,F as M,oe as N,se as O,wt as P,Kt as Q,E as R,je as S,Mt as T,ue as U,Zt as V,ne as W,de as X,he as Y,le as Z,me as _,ie as a,ke as a0,Ee as a1,K as a2,ee as b,ae as c,ve as d,re as e,$e as f,dt as g,rt as h,Ce as i,ge as j,st as k,ce as l,Ct as m,At as n,ye as o,_e as p,U as q,qt as r,Jt as s,we as t,fe as u,xe as v,Y as w,pe as x,Me as y,Ae as z};
