import{q as m,W as c,j as a,Y as x}from"./app-6SKZ5ykx.js";import{B as u,S as h}from"./index-CZEMc8NJ.js";import{C as j,H as p,T as f,B as g,a as b,b as C,c as n,d as v,e as N}from"./index-Bbv7jQlh.js";import{F as z}from"./index-UFHNktFE.js";import{A as B,S}from"./AuthenticatedLayout-DQUE6xF6.js";import{s as y}from"./dataSelect-CgJ9ePKZ.js";import"./index-BKxN32G0.js";import"./index-CVE05NcV.js";const M=({organization:r})=>{const{flash:i}=m().props,{data:t,setData:l,patch:o,progress:F,processing:H,errors:e}=c({name:r.name,status:r.status});function d(s){s.preventDefault(),o(route("organizations.update",r.id))}return a.jsxs(B,{children:[a.jsx(x,{title:"Dashboard"}),a.jsx("main",{className:"",children:a.jsxs(j,{children:[a.jsxs(p,{children:[a.jsxs(f,{children:[a.jsx(S,{size:30}),a.jsx("span",{className:"ml-2",children:"Organizações"})]}),a.jsx(g,{links:[{url:"/organizations",label:"Organizações"},{url:null,label:"Adicionar organização"}]})]}),a.jsxs(b,{children:[a.jsx(z,{message:i}),a.jsxs(C,{children:[a.jsx(n,{children:a.jsx(u,{url:"/organizations",label:"Voltar"})}),a.jsx(n,{children:a.jsx(a.Fragment,{})})]}),a.jsxs("form",{onSubmit:d,autoComplete:"off",children:[a.jsx(v,{className:" border-y border-gray-100",children:a.jsx("div",{className:"px-3 my-4",children:a.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mt-4",children:[a.jsxs("div",{className:"flex flex-col col-span-2",children:[a.jsx("label",{className:"label-form",htmlFor:"name",children:"Nome da organização"}),a.jsx("input",{id:"name",type:"text",value:t.name,onChange:s=>{l("name",s.target.value)},className:"input-form"}),e.name&&a.jsx("div",{className:"text-sm text-red-500",children:e.name})]}),a.jsxs("div",{className:"flex flex-col",children:[a.jsx("label",{className:"label-form",htmlFor:"status",children:"Status da organização"}),a.jsx("select",{id:"status",value:t.status,onChange:s=>{l("status",s.target.value)},className:"input-form",children:y.map(s=>a.jsx("option",{value:s.value,children:s.label}))}),e.status&&a.jsx("div",{className:"text-sm text-red-500",children:e.status})]})]})})}),a.jsx(N,{children:a.jsx(h,{})})]})]})]})})]})};export{M as default};
