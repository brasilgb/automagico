import{q as _,r as d,W as z,j as e,Y as S}from"./app-BJrrevyn.js";import{B as F,S as B}from"./index-D2J8IbuU.js";import{C as k,H as E,T as P,B as U,a as H,b as I,c as j,d as O,e as T}from"./index-CUunxyQh.js";import{A}from"./AuthenticatedLayout-CDtoeBny.js";import{r as D,a as L}from"./dataSelect-CgJ9ePKZ.js";import{I as R,b as f,c as v}from"./index-bYxaqlUt.js";import"./index-BTuKDbdZ.js";import"./ApplicationLogo-Dlhd64PG.js";const Q=({organizations:o})=>{var p;const{auth:n}=_().props,[x,g]=d.useState(!1),[u,N]=d.useState(!1),[c,m]=d.useState([]),{data:r,setData:l,post:b,processing:q,errors:a}=z({organization_id:n.user.organization_id!==null?n.user.organization_id:"",company_id:"",organization:"",name:"",email:"",password:"",roles:"",status:"",password_confirmation:""});function w(s){s.preventDefault(),b(route("users.store"))}const h=s=>{const i=s.toLowerCase(),t=o==null?void 0:o.filter(C=>C.name.toLowerCase().includes(i));m(t)};d.useEffect(()=>{r.organization===""&&m([])},[r]);const y=(s,i)=>{l(t=>({...t,organization_id:s})),l(t=>({...t,organization:i})),m([])};return e.jsxs(A,{children:[e.jsx(S,{title:"Dashboard"}),e.jsx("main",{className:"",children:e.jsxs(k,{children:[e.jsxs(E,{children:[e.jsxs(P,{children:[e.jsx(R,{size:30}),e.jsx("span",{className:"ml-2",children:"Usuários"})]}),e.jsx(U,{links:[{url:"/users",label:"Usuários"},{url:null,label:"Adicionar usuário"}]})]}),e.jsxs(H,{children:[e.jsxs(I,{children:[e.jsx(j,{children:e.jsx(F,{url:"/users",label:"Voltar"})}),e.jsx(j,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:w,autoComplete:"off",children:[e.jsx(O,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid md:grid-cols-6 gap-4",children:[n.user.organization_id!==null&&e.jsxs("div",{className:"flex flex-col col-span-2 relative",children:[e.jsx("label",{className:"label-form",htmlFor:"Organização",children:"Filial"}),e.jsxs("select",{name:"company_id",id:"company_id",onChange:s=>{l("company_id",s.target.value),h(s.target.value)},className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione a filial"}),(p=o[0].company)==null?void 0:p.map((s,i)=>e.jsx("option",{value:s.subnumber,children:s.altername}))]}),a.company_id&&e.jsx("div",{className:"text-sm text-red-500",children:a.company_id})]}),n.user.organization_id===null&&e.jsxs("div",{className:"flex flex-col col-span-2 relative",children:[e.jsx("label",{className:"label-form",htmlFor:"Organização",children:"Organização"}),e.jsx("input",{type:"text",value:r.organization_id,onChange:s=>l("organization_id",s.target.value),className:"hidden"}),e.jsx("input",{id:"organization",type:"text",value:r.organization,onChange:s=>{l("organization",s.target.value),h(s.target.value)},className:"input-form"}),c.length>0&&e.jsx("div",{className:"absolute z-20 bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto",children:e.jsx("ul",{className:"p-1",children:c.map((s,i)=>e.jsx("li",{className:`flex items-center justify-normal ${i<c.length-1?"border-b border-gray-200":""}`,children:e.jsx("div",{className:"text-sm text-gray-600 p-1 cursor-pointer inline-block w-full",onClick:()=>y(s.id,s.name),children:s.name})},i))})}),a.organization_id&&e.jsx("div",{className:"text-sm text-red-500",children:a.organization_id})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"nome",children:"Nome"}),e.jsx("input",{id:"name",type:"text",value:r.name,onChange:s=>l("name",s.target.value),className:"input-form"}),a.name&&e.jsx("div",{className:"text-sm text-red-500",children:a.name})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"email",children:"E-mail"}),e.jsx("input",{id:"email",type:"text",value:r.email,onChange:s=>l("email",s.target.value),className:"input-form"}),a.email&&e.jsx("div",{className:"text-red-500",children:a.email})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 md:mt-6 mt-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password",children:"Senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password",type:x?"text":"password",value:r.password,onChange:s=>l("password",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>g(s=>!s),children:x?e.jsx(f,{size:24}):e.jsx(v,{size:24})})]}),a.password&&e.jsx("div",{className:"text-sm text-red-500",children:a.password})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password_confirmation",children:"Repita a senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password_confirmation",type:u?"text":"password",value:r.password_confirmation,onChange:s=>l("password_confirmation",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>N(s=>!s),children:u?e.jsx(f,{size:24}):e.jsx(v,{size:24})})]}),a.password_confirmation&&e.jsx("div",{className:"text-red-500",children:a.password_confirmation})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 md:mt-6 mt-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"roles",children:"Função"}),e.jsxs("select",{id:"roles",value:r.roles,onChange:s=>l("roles",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione a função"}),D.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.value))]}),a.roles&&e.jsx("div",{className:"text-sm text-red-500",children:a.roles})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"status",children:"Status"}),e.jsxs("select",{id:"status",value:r.status,onChange:s=>l("status",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o status"}),L.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.value))]}),a.status&&e.jsx("div",{className:"text-red-500",children:a.status})]})]})]})}),e.jsx(T,{children:e.jsx(B,{})})]})]})]})})]})};export{Q as default};
