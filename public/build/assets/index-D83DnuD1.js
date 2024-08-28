import{j as a,Y as x,r as j,h as m}from"./app-c-LwwVAi.js";import{A as h,E as p,D as g}from"./index-CfW-uWm-.js";import{C as b,a as f,b as y,c as n,d as C,e as l}from"./index-BJCYPdax.js";import{F as B}from"./index-V6rNUsYC.js";import{I as N,r as T,s as E,P as F}from"./functions-Cnp9e4Z2.js";import{T as Y,a as k,b as i,c as t,d as w,e as s}from"./index-BsDJFzal.js";import{A}from"./AuthenticatedLayout-D5UVxVqK.js";import"./index-BsDqT9Rl.js";import"./index-BQDTUAjS.js";const L=({users:r})=>{const o=e=>{switch(e){case"active":return"bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";case"waiting":return"bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";case"suspended":return"bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";case"canceled":return"bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase"}};return a.jsxs(A,{children:[a.jsx(x,{title:"Usuários"}),a.jsx("main",{className:"",children:a.jsxs(b,{children:[a.jsxs(f,{children:[a.jsxs(y,{children:[a.jsx(n,{children:a.jsx(N,{placeholder:"Buscar por nome",url:"users.index"})}),a.jsx(n,{children:a.jsx(h,{url:route("users.create"),label:"Usuário"})})]}),a.jsx(B,{message:"flash"}),a.jsx(C,{className:"p-1",children:a.jsxs(Y,{className:"w-full",children:[a.jsx(k,{children:a.jsxs(i,{children:[a.jsx(t,{children:"Nome"}),a.jsx(t,{children:"E-mail"}),a.jsx(t,{children:"Organização"}),a.jsx(t,{children:"Permissões"}),a.jsx(t,{children:"Cadastro"}),a.jsx(t,{children:"Status"}),a.jsx(t,{})]})}),a.jsx(w,{children:r.data.map((e,c)=>{var d;return a.jsx(j.Fragment,{children:a.jsxs(i,{className:`${c%2===0?"bg-gray-50":"bg-gray-100"}`,children:[a.jsx(s,{children:e==null?void 0:e.name}),a.jsx(s,{children:e==null?void 0:e.email}),a.jsx(s,{children:(d=e==null?void 0:e.organization)==null?void 0:d.name}),a.jsx(s,{children:T(e==null?void 0:e.roles)}),a.jsx(s,{children:m(e==null?void 0:e.created_at).format("DD/MM/YYYY")}),a.jsx(s,{children:a.jsx("span",{className:`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${o(e==null?void 0:e.status)}`,children:E(e==null?void 0:e.status)})}),a.jsxs(s,{className:"flex items-center justify-end gap-2",children:[a.jsx(p,{url:route("users.edit",e==null?void 0:e.id)}),a.jsx(g,{url:"users.destroy",param:e==null?void 0:e.id,identify:`o user ${e==null?void 0:e.name}`})]})]})},e==null?void 0:e.id)})})]})}),r.length>15&&a.jsx(l,{children:a.jsx(F,{data:r})})]}),a.jsx(l,{children:a.jsx(a.Fragment,{})})]})})]})};export{L as default};
