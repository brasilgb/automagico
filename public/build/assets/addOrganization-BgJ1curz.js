import{W as o,j as a,Y as d}from"./app-8ojMoXxw.js";import{B as m,S as c}from"./index-BsizR-DZ.js";import{C as x,H as u,T as j,B as h,a as p,b as g,c as l,d as f,e as b}from"./index-yKmnQdqZ.js";import{A as C,S as v}from"./AuthenticatedLayout-D0BMOtqw.js";import{s as N}from"./dataSelect-CgJ9ePKZ.js";import"./index-BuDiE_LC.js";import"./index-y-BtYRFF.js";const D=()=>{const{data:r,setData:t,post:n,progress:z,processing:B,errors:e}=o({name:"",status:"waiting"});function i(s){s.preventDefault(),n(route("organizations.store"))}return a.jsxs(C,{children:[a.jsx(d,{title:"Dashboard"}),a.jsx("main",{className:"",children:a.jsxs(x,{children:[a.jsxs(u,{children:[a.jsxs(j,{children:[a.jsx(v,{size:30}),a.jsx("span",{className:"ml-2",children:"Organizações"})]}),a.jsx(h,{links:[{url:"/organizations",label:"Organizações"},{url:null,label:"Adicionar organização"}]})]}),a.jsxs(p,{children:[a.jsxs(g,{children:[a.jsx(l,{children:a.jsx(m,{url:"/organizations",label:"Voltar"})}),a.jsx(l,{children:a.jsx(a.Fragment,{})})]}),a.jsxs("form",{onSubmit:i,autoComplete:"off",children:[a.jsx(f,{className:" border-y border-gray-100",children:a.jsx("div",{className:"px-3 my-4",children:a.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mt-4",children:[a.jsxs("div",{className:"flex flex-col col-span-2",children:[a.jsx("label",{className:"label-form",htmlFor:"name",children:"Nome da organização"}),a.jsx("input",{id:"name",type:"text",value:r.name,onChange:s=>{t("name",s.target.value)},className:"input-form"}),e.name&&a.jsx("div",{className:"text-sm text-red-500",children:e.name})]}),a.jsxs("div",{className:"flex flex-col",children:[a.jsx("label",{className:"label-form",htmlFor:"status",children:"Status da organização"}),a.jsx("select",{id:"status",value:r.status,onChange:s=>{t("status",s.target.value)},className:"input-form",children:N.map(s=>a.jsx("option",{value:s.value,children:s.label}))}),e.status&&a.jsx("div",{className:"text-sm text-red-500",children:e.status})]})]})})}),a.jsx(b,{children:a.jsx(c,{})})]})]})]})})]})};export{D as default};