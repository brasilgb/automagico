import{W as c,j as a,Y as m}from"./app-Coqziyk1.js";import{B as d,S as x}from"./index-B1ScFNc0.js";import{C as j,a as p,b as u,c as n,d as h,e as f}from"./index-DUQ8gR18.js";import{H as g,T as C,B as N}from"./index-Dg2bCAg0.js";import{A as v,S as b}from"./AuthenticatedLayout-BC6WUjJG.js";import{s as z}from"./dataSelect-CgJ9ePKZ.js";import{u as y,a as B}from"./mask-BEZxBgSq.js";import"./index-BQgeOQls.js";import"./index-DYEr-QTh.js";const J=()=>{const{data:e,setData:t,post:l,progress:S,processing:F,errors:r}=c({name:"",cnpj:"",status:"waiting"});if((e==null?void 0:e.cnpj)!==""){const s=y(e==null?void 0:e.cnpj);t(o=>({...o,cnpj:s}))}function i(s){s.preventDefault(),l(route("organizations.store"))}return a.jsxs(v,{children:[a.jsx(m,{title:"Dashboard"}),a.jsx("main",{className:"",children:a.jsxs(j,{children:[a.jsxs(g,{children:[a.jsxs(C,{children:[a.jsx(b,{size:30}),a.jsx("span",{className:"ml-2",children:"Organizações"})]}),a.jsx(N,{links:[{url:"/organizations",label:"Organizações"},{url:null,label:"Adicionar organização"}]})]}),a.jsxs(p,{children:[a.jsxs(u,{children:[a.jsx(n,{children:a.jsx(d,{url:"/organizations",label:"Voltar"})}),a.jsx(n,{children:a.jsx(a.Fragment,{})})]}),a.jsxs("form",{onSubmit:i,autoComplete:"off",children:[a.jsx(h,{className:" border-y border-gray-100",children:a.jsx("div",{className:"px-3 my-4",children:a.jsxs("div",{className:"grid md:grid-cols-4 gap-4 mt-4",children:[a.jsxs("div",{className:"flex flex-col col-span-2",children:[a.jsx("label",{className:"label-form",htmlFor:"name",children:"Nome da organização"}),a.jsx("input",{id:"name",type:"text",value:e.name,onChange:s=>{t("name",s.target.value)},className:"input-form"}),r.name&&a.jsx("div",{className:"text-sm text-red-500",children:r.name})]}),a.jsxs("div",{className:"flex flex-col",children:[a.jsx("label",{className:"label-form",htmlFor:"cnpj",children:"CNPJ"}),a.jsx("input",{id:"cnpj",type:"text",value:B(e.cnpj),onChange:s=>t("cnpj",s.target.value),className:"input-form",maxLength:18}),r.cnpj&&a.jsx("div",{className:"text-sm text-red-500",children:r.cnpj})]}),a.jsxs("div",{className:"flex flex-col",children:[a.jsx("label",{className:"label-form",htmlFor:"status",children:"Status da organização"}),a.jsx("select",{id:"status",value:e.status,onChange:s=>{t("status",s.target.value)},className:"input-form",children:z.map(s=>a.jsx("option",{value:s.value,children:s.label}))}),r.status&&a.jsx("div",{className:"text-sm text-red-500",children:r.status})]})]})})}),a.jsx(f,{children:a.jsx(x,{})})]})]})]})})]})};export{J as default};