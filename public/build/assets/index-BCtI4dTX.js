import{q as x,j as e,Y as o,r as m,h as j}from"./app-Coqziyk1.js";import{A as p,b as u,F as h,E as b,D as g}from"./index-B1ScFNc0.js";import{C as f,a as y,b as C,c as d,d as B,e as T}from"./index-DUQ8gR18.js";import{F as N}from"./index-ChrN0uSN.js";import{I as F,s as O,P as k}from"./functions-C809B4B7.js";import{H as D,T as H,B as A}from"./index-Dg2bCAg0.js";import{T as E,a as S,b as l,c as r,d as Y,e as t}from"./index-DJA7vWVa.js";import{A as $,S as w}from"./AuthenticatedLayout-BC6WUjJG.js";import{a as L}from"./mask-BEZxBgSq.js";import"./index-BQgeOQls.js";import"./index-DYEr-QTh.js";const Q=({organizations:a})=>{const{flash:i}=x().props,n=s=>{switch(s){case"active":return"bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";case"waiting":return"bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";case"suspended":return"bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";case"canceled":return"bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase"}};return e.jsxs($,{children:[e.jsx(o,{title:"Organizações"}),e.jsxs(f,{children:[e.jsxs(D,{children:[e.jsxs(H,{children:[e.jsx(w,{size:30}),e.jsx("span",{className:"ml-2",children:"Organizações"})]}),e.jsx(A,{links:[{url:null,label:"Organizações"}]})]}),e.jsxs(y,{children:[e.jsxs(C,{children:[e.jsx(d,{children:e.jsx(F,{placeholder:"Buscar por nome",url:"organizations.index"})}),e.jsx(d,{children:e.jsx(p,{url:route("organizations.create"),label:"Organização",title:"Adicionar organização"})})]}),e.jsx(N,{message:i}),e.jsx(B,{children:e.jsxs(E,{className:"w-full",children:[e.jsx(S,{children:e.jsxs(l,{children:[e.jsx(r,{children:e.jsx("div",{className:"",children:"Organização"})}),e.jsx(r,{children:"CNPJ"}),e.jsx(r,{children:"Filiais"}),e.jsx(r,{children:"Cadastro"}),e.jsx(r,{children:"Status"}),e.jsx(r,{})]})}),e.jsx(Y,{children:a==null?void 0:a.data.map((s,c)=>e.jsx(m.Fragment,{children:e.jsxs(l,{className:`${c%2===0?"bg-gray-50":"bg-gray-100"}`,children:[e.jsx(t,{className:"",children:s.name}),e.jsx(t,{className:"",children:L(s.cnpj)}),e.jsx(t,{children:s.company.length}),e.jsx(t,{children:j(s.created_at).format("DD/MM/YYYY")}),e.jsx(t,{children:e.jsx("span",{className:`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${n(s.status)}`,children:O(s.status)})}),e.jsxs(t,{className:"flex items-center justify-end gap-2",children:[e.jsx(u,{url:"organizations.destroy",param:s.id,identify:`${s.name}`,title:"Limpar Base de dados"}),e.jsx(h,{url:`companies?o=${s.id}`,title:"Filiais da organização"}),e.jsx(b,{url:route("organizations.edit",s.id),title:"Editar organização"}),e.jsx(g,{url:"organizations.destroy",param:s.id,identify:`a organização ${s.name}`,title:"Deletar organização"})]})]})},s.id))})]})}),a.data.length===a.per_page&&e.jsx(T,{children:e.jsx(k,{data:a})})]})]})]})};export{Q as default};