import{j as a,Y as c,r as x,h as j}from"./app-8ojMoXxw.js";import{A as m,E as h,D as p}from"./index-BsizR-DZ.js";import{C as b,H as g,T as f,B as y,a as C,b as T,c as d,d as B,e as N}from"./index-yKmnQdqZ.js";import{F as H}from"./index-CFaKYRPr.js";import{I as U,r as k,s as E,P as Y}from"./functions-Ck7KgoZV.js";import{T as w,a as A,b as n,c as s,d as D,e as t}from"./index-Clyy8WmG.js";import{A as F}from"./AuthenticatedLayout-D0BMOtqw.js";import{I}from"./index-BuDiE_LC.js";import"./index-y-BtYRFF.js";const O=({users:r})=>{const i=e=>{switch(e){case"active":return"bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";case"waiting":return"bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";case"suspended":return"bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";case"canceled":return"bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase"}};return a.jsxs(F,{children:[a.jsx(c,{title:"Usuários"}),a.jsx("main",{className:"",children:a.jsxs(b,{children:[a.jsxs(g,{children:[a.jsxs(f,{children:[a.jsx(I,{size:30}),a.jsx("span",{className:"ml-2",children:"Usuários"})]}),a.jsx(y,{links:[{url:null,label:"Usuários"}]})]}),a.jsxs(C,{children:[a.jsxs(T,{children:[a.jsx(d,{children:a.jsx(U,{placeholder:"Buscar por nome",url:"users.index"})}),a.jsx(d,{children:a.jsx(m,{url:route("users.create"),label:"Usuário"})})]}),a.jsx(H,{message:"flash"}),a.jsx(B,{className:"p-1",children:a.jsxs(w,{className:"w-full",children:[a.jsx(A,{children:a.jsxs(n,{children:[a.jsx(s,{children:"Nome"}),a.jsx(s,{children:"E-mail"}),a.jsx(s,{children:"Organização"}),a.jsx(s,{children:"Permissões"}),a.jsx(s,{children:"Cadastro"}),a.jsx(s,{children:"Status"}),a.jsx(s,{})]})}),a.jsx(D,{children:r.data.map((e,o)=>{var l;return a.jsx(x.Fragment,{children:a.jsxs(n,{className:`${o%2===0?"bg-gray-50":"bg-gray-100"}`,children:[a.jsx(t,{children:e==null?void 0:e.name}),a.jsx(t,{children:e==null?void 0:e.email}),a.jsx(t,{children:(l=e==null?void 0:e.organization)==null?void 0:l.name}),a.jsx(t,{children:k(e==null?void 0:e.roles)}),a.jsx(t,{children:j(e==null?void 0:e.created_at).format("DD/MM/YYYY")}),a.jsx(t,{children:a.jsx("span",{className:`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${i(e==null?void 0:e.status)}`,children:E(e==null?void 0:e.status)})}),a.jsxs(t,{className:"flex items-center justify-end gap-2",children:[a.jsx(h,{url:route("users.edit",e==null?void 0:e.id)}),a.jsx(p,{url:"users.destroy",param:e==null?void 0:e.id,identify:`o user ${e==null?void 0:e.name}`})]})]})},e==null?void 0:e.id)})})]})}),r.length>15&&a.jsx(N,{children:a.jsx(Y,{data:r})})]})]})})]})};export{O as default};