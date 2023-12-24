import{d as _,i as d,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as y,j as x,o as r,k as b,l as N,m as k,p as S,q as P,_ as j}from"./index-f4abe631.js";import{N as w}from"./NoteDisplay-b103f328.js";const L={class:"m-4"},V={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},M=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=_({__name:"PresenterPrint",setup(q){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const c=f(()=>x.slice(0,-1).map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:y(a(P))},[t("div",L,[t("div",V,[t("h1",T,s(a(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(a(c),(e,i)=>(r(),n("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(b)),1),N(" "+s(e==null?void 0:e.title)+" ",1),M])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<a(c).length-1?(r(),n("hr",z)):S("v-if",!0)]))),128))])],4))}}),R=j(F,[["__file","/home/toonnyy8/projects/toonnyy8_notes/SpeechLMScore/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
