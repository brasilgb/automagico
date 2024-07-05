import{q as F,r as c,W as B,j as e,Y as k}from"./app-2n679auc.js";import{B as E,S as P}from"./index-BPQ1Jl5R.js";import{C as U,H,T as I,B as T,a as A,b as D,c as v,d as L,e as O}from"./index-BQoKKUUV.js";import{F as R}from"./index-BBK2wLlb.js";import{A as V}from"./AuthenticatedLayout-B1sT5Fg6.js";import{r as q,a as M}from"./dataSelect-CgJ9ePKZ.js";import{I as W,b as g,c as N}from"./index-COyF5_SX.js";import"./index-BNibEDlu.js";import"./index-DqdTG203.js";import"./ApplicationLogo-BLhqF6FB.js";const ie=({user:r,organizations:d})=>{var f,j;const{flash:b,auth:o}=F().props,[u,w]=c.useState(!1),[h,y]=c.useState(!1),[m,x]=c.useState([]),{data:l,setData:i,put:C,reset:Y,processing:$,errors:s}=B({organization_id:r.organization_id,organization:(f=r.organization)==null?void 0:f.name,company_id:r.company_id,name:r.name,email:r.email,password:"",roles:r.roles,status:r.status,password_confirmation:""});function _(a){a.preventDefault(),C(route("users.update",r.id))}const p=a=>{const t=a.toLowerCase(),n=d==null?void 0:d.filter(S=>S.name.toLowerCase().includes(t));x(n)};c.useEffect(()=>{l.organization===""&&x([])},[l]);const z=(a,t)=>{i(n=>({...n,organization_id:a})),i(n=>({...n,organization:t})),x([])};return e.jsxs(V,{children:[e.jsx(k,{title:"Dashboard"}),e.jsx("main",{className:"",children:e.jsxs(U,{children:[e.jsxs(H,{children:[e.jsxs(I,{children:[e.jsx(W,{size:30}),e.jsx("span",{className:"ml-2",children:"Usuários"})]}),e.jsx(T,{links:[{url:"/users",label:"Usuários"},{url:null,label:"Adicionar usuário"}]})]}),e.jsxs(A,{children:[e.jsx(R,{message:b}),e.jsxs(D,{children:[e.jsx(v,{children:e.jsx(E,{url:"/users",label:"Voltar"})}),e.jsx(v,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:_,autoComplete:"off",children:[e.jsx(L,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid md:grid-cols-6 gap-4",children:[o.user.organization_id!==null&&e.jsxs("div",{className:"flex flex-col col-span-2 relative",children:[e.jsx("label",{className:"label-form",htmlFor:"company_id",children:"Filial"}),e.jsxs("select",{name:"company_id",value:l.company_id,id:"company_id",onChange:a=>{i("company_id",a.target.value),p(a.target.value)},className:"input-form",disabled:!!o.user.company_id,children:[e.jsx("option",{value:"",children:"Selecione a filial"}),(j=d[0].company)==null?void 0:j.map((a,t)=>e.jsx("option",{value:a.subnumber,children:a.altername}))]}),s.company_id&&e.jsx("div",{className:"text-sm text-red-500",children:s.company_id})]}),o.user.organization_id===null&&e.jsxs("div",{className:"flex flex-col col-span-2 relative",children:[e.jsx("label",{className:"label-form",htmlFor:"Organização",children:"Organização"}),e.jsx("input",{type:"text",value:l.organization_id,onChange:a=>i("organization_id",a.target.value),className:"hidden"}),e.jsx("input",{id:"organization",type:"text",value:l.organization,onChange:a=>{i("organization",a.target.value),p(a.target.value)},className:"input-form"}),m.length>0&&e.jsx("div",{className:"absolute z-20 bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto",children:e.jsx("ul",{className:"p-1",children:m.map((a,t)=>e.jsx("li",{className:`flex items-center justify-normal ${t<m.length-1?"border-b border-gray-200":""}`,children:e.jsx("div",{className:"text-sm text-gray-600 p-1 cursor-pointer inline-block w-full",onClick:()=>z(a.id,a.name),children:a.name})},t))})}),s.organization_id&&e.jsx("div",{className:"text-sm text-red-500",children:s.organization_id})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"nome",children:"Nome"}),e.jsx("input",{id:"name",type:"text",value:l.name,onChange:a=>i("name",a.target.value),className:"input-form"}),s.name&&e.jsx("div",{className:"text-sm text-red-500",children:s.name})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"email",children:"E-mail"}),e.jsx("input",{id:"email",type:"text",value:l.email,onChange:a=>i("email",a.target.value),className:"input-form"}),s.email&&e.jsx("div",{className:"text-red-500",children:s.email})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 md:mt-6 mt-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password",children:"Senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password",type:u?"text":"password",value:l.password,onChange:a=>i("password",a.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>w(a=>!a),children:u?e.jsx(g,{size:24}):e.jsx(N,{size:24})})]}),s.password&&e.jsx("div",{className:"text-sm text-red-500",children:s.password})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password_confirmation",children:"Repita a senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password_confirmation",type:h?"text":"password",value:l.password_confirmation,onChange:a=>i("password_confirmation",a.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>y(a=>!a),children:h?e.jsx(g,{size:24}):e.jsx(N,{size:24})})]}),s.password_confirmation&&e.jsx("div",{className:"text-red-500",children:s.password_confirmation})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 md:mt-6 mt-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"roles",children:"Função"}),e.jsxs("select",{id:"roles",defaultValue:r.roles,value:l.roles,onChange:a=>i("roles",a.target.value),className:"input-form",disabled:!!o.user.company_id,children:[e.jsx("option",{value:"",children:"Selecione a função"}),q.map(a=>e.jsx("option",{value:a==null?void 0:a.value,children:a==null?void 0:a.label},a==null?void 0:a.value))]}),s.roles&&e.jsx("div",{className:"text-sm text-red-500",children:s.roles})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"status",children:"Status"}),e.jsxs("select",{id:"status",value:l.status,onChange:a=>i("status",a.target.value),className:"input-form",disabled:!!o.user.company_id,children:[e.jsx("option",{value:"",children:"Selecione o status"}),M.map(a=>e.jsx("option",{value:a==null?void 0:a.value,children:a==null?void 0:a.label},a==null?void 0:a.value))]}),s.status&&e.jsx("div",{className:"text-red-500",children:s.status})]})]})]})}),e.jsx(O,{children:e.jsx(P,{})})]})]})]})})]})};export{ie as default};
