import{f as s,r as t,b as e,k as a,w as o,m as r,i as l,A as n,p as c,n as i,o as d,c as f,a as u,F as p,z as m,v}from"./index.0851d2b1.js";const g=[[405,45,45,45,-45,135,45,-135],[-45,-45,405,-495,-45,-45,-45,-45],[45,45,45,45,45,45,-405,315],[-45,-45,-45,-45,45,-135,405,-315],[45,-315,225,45,45,45,45,45]],S=g.length,w=function(s,t){const e=[];for(let a=0;a<s;a++)for(let s=0;s<t;s++)e.push({row:a,col:s});return e}(S,5);var y=s({name:"Sticks",setup(){const s=t(-1),c=e(new Array(S).fill(0)),i=a((()=>g.map((t=>t[s.value%t.length]))));o(s,(s=>{for(let t=0;t<S;t++)c[t]+=i.value[t]}));let d=0;const f=t=>{for(d+=t;d>=450;)d%=450,s.value+=1},u=r();return l((()=>{u.setLoop(f)})),n((()=>{u.dropLoop()})),{STICKS:w,ROWS:S,COLUMNS:5,rotations:c}}});const b=v();c("data-v-3f24b2f4");const k={class:"flex items-center justify-center bg-black h-full"};i();const C=b(((s,t,e,a,o,r)=>(d(),f("div",k,[u("div",{class:"grid",style:{gridTemplateRows:`repeat(${s.ROWS}, auto)`,gridTemplateColumns:`repeat(${s.COLUMNS}, auto)`}},[(d(!0),f(p,null,m(s.STICKS,(({row:t,col:e})=>(d(),f("div",{key:`${t} ${e}`,class:"stick-wrapper d-flex align-center justify-center",style:{gridRow:t+1,gridColumn:e+1}},[u("div",{class:"stick",style:{transform:`rotate(${s.rotations[t]}deg)`}},null,4)],4)))),128))],4)]))));y.render=C,y.__scopeId="data-v-3f24b2f4";export default y;