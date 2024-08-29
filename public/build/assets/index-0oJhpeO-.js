import{j as e,Y as x,r as o,h as c}from"./app-Coqziyk1.js";import{A as j,E as u,D as h}from"./index-B1ScFNc0.js";import{C as m,a as b,b as g,c as l,d as p,e as f}from"./index-DUQ8gR18.js";import{F as C}from"./index-ChrN0uSN.js";import{I as T,s as B,P as F}from"./functions-C809B4B7.js";import{H as N,T as k,B as I}from"./index-Dg2bCAg0.js";import{T as H,a as D,b as d,c as r,d as E,e as a}from"./index-DJA7vWVa.js";import{A as S}from"./AuthenticatedLayout-BC6WUjJG.js";import{d as Y,b as w}from"./mask-BEZxBgSq.js";import{I as y}from"./index-DYEr-QTh.js";import"./index-BQgeOQls.js";const V=({companies:t})=>{const i=s=>{switch(s){case"active":return"bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";case"waiting":return"bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";case"suspended":return"bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";case"canceled":return"bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase"}};return e.jsxs(S,{children:[e.jsx(x,{title:"Dashboard"}),e.jsxs(m,{children:[e.jsxs(N,{children:[e.jsxs(k,{children:[e.jsx(y,{size:30}),e.jsx("span",{className:"ml-2",children:"Filiais"})]}),e.jsx(I,{links:[{url:null,label:"Filiais"}]})]}),e.jsxs(b,{children:[e.jsxs(g,{children:[e.jsx(l,{children:e.jsx(T,{placeholder:"Buscar por nome ou cnpj",url:"companies.index"})}),e.jsx(l,{children:e.jsx(j,{url:route("companies.create"),label:"Filial"})})]}),e.jsx(C,{message:"flash"}),e.jsx(p,{children:e.jsxs(H,{className:"w-full",children:[e.jsx(D,{children:e.jsxs(d,{children:[e.jsx(r,{children:"Organização"}),e.jsx(r,{children:"Nº Filial"}),e.jsx(r,{children:"Filial"}),e.jsx(r,{children:"CNPJ"}),e.jsx(r,{children:"Insc. estadual"}),e.jsx(r,{children:"Telefone"}),e.jsx(r,{children:"Cadastro"}),e.jsx(r,{children:"Status"}),e.jsx(r,{})]})}),e.jsx(E,{children:t==null?void 0:t.data.map((s,n)=>e.jsx(o.Fragment,{children:e.jsxs(d,{className:`${n%2===0?"bg-gray-50":"bg-gray-100"}`,children:[e.jsx(a,{className:"",children:s.organization.name}),e.jsx(a,{children:s.subnumber}),e.jsx(a,{children:s.subname}),e.jsx(a,{children:Y(s.cnpj.toString())}),e.jsx(a,{children:w(s.statereg.toString())}),e.jsx(a,{children:s.telephone}),e.jsx(a,{children:c(s.created_at).format("DD/MM/YYYY")}),e.jsx(a,{children:e.jsx("span",{className:`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${i(s.status)}`,children:B(s.status)})}),e.jsxs(a,{className:"flex items-center justify-end gap-2",children:[e.jsx(u,{url:route("companies.edit",s.id)}),e.jsx(h,{url:"companies.destroy",param:s.id,identify:`o company ${s.subname}`})]})]})},s.id))})]})}),t.data.length===t.per_Page&&e.jsx(f,{children:e.jsx(F,{data:t})})]})]})]})};export{V as default};