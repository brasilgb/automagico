import{q as x,j as e,Y as o,r as j,h as m}from"./app-sSwvcPel.js";import{A as u,b as p,F as h,E as b,D as g}from"./index-DR4FWuuZ.js";import{C as f,H as y,T as B,B as C,a as T,b as F,c as d,d as N,e as O}from"./index-TscFsg04.js";import{F as D}from"./index-DzTsROGr.js";import{I as H,s as k,P as A}from"./functions-SwYpDSMg.js";import{T as E,a as S,b as l,c as r,d as Y,e as t}from"./index-A5ViTIQq.js";import{A as $,S as w}from"./AuthenticatedLayout-Ds2q-eAV.js";import"./index-f5AFZ5fs.js";import"./index-CY5AZlk5.js";const z=({organizations:a})=>{const{flash:i}=x().props,n=s=>{switch(s){case"active":return"bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";case"waiting":return"bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";case"suspended":return"bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";case"canceled":return"bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase"}};return e.jsxs($,{children:[e.jsx(o,{title:"Organizações"}),e.jsxs(f,{children:[e.jsxs(y,{children:[e.jsxs(B,{children:[e.jsx(w,{size:30}),e.jsx("span",{className:"ml-2",children:"Organizações"})]}),e.jsx(C,{links:[{url:null,label:"Organizações"}]})]}),e.jsxs(T,{children:[e.jsxs(F,{children:[e.jsx(d,{children:e.jsx(H,{placeholder:"Buscar por nome",url:"organizations.index"})}),e.jsx(d,{children:e.jsx(u,{url:route("organizations.create"),label:"Organização",title:"Adicionar organização"})})]}),e.jsx(D,{message:i}),e.jsx(N,{children:e.jsxs(E,{className:"w-full",children:[e.jsx(S,{children:e.jsxs(l,{children:[e.jsx(r,{children:e.jsx("div",{className:"",children:"Organização"})}),e.jsx(r,{children:"Filiais"}),e.jsx(r,{children:"Cadastro"}),e.jsx(r,{children:"Status"}),e.jsx(r,{})]})}),e.jsx(Y,{children:a==null?void 0:a.data.map((s,c)=>e.jsx(j.Fragment,{children:e.jsxs(l,{className:`${c%2===0?"bg-gray-50":"bg-gray-100"}`,children:[e.jsx(t,{className:"",children:s.name}),e.jsx(t,{children:s.company.length}),e.jsx(t,{children:m(s.created_at).format("DD/MM/YYYY")}),e.jsx(t,{children:e.jsx("span",{className:`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${n(s.status)}`,children:k(s.status)})}),e.jsxs(t,{className:"flex items-center justify-end gap-2",children:[e.jsx(p,{url:"organizations.destroy",param:s.id,identify:`${s.name}`,title:"Limpar Base de dados"}),e.jsx(h,{url:`companies?o=${s.id}`,title:"Filiais da organização"}),e.jsx(b,{url:route("organizations.edit",s.id),title:"Editar organização"}),e.jsx(g,{url:"organizations.destroy",param:s.id,identify:`a organização ${s.name}`,title:"Deletar organização"})]})]})},s.id))})]})}),a.data.length===a.per_page&&e.jsx(O,{children:e.jsx(A,{data:a})})]})]})]})};export{z as default};