import{j as e,r as n,W as h,Y as g,a as j}from"./app-6SKZ5ykx.js";import{T as c,I as u}from"./TextInput-BDvQoweS.js";import{P as b}from"./PrimaryButton-bJE9Aj8C.js";import{A as w}from"./AuthLayout-B8jWC1OX.js";import{f as y,g as N,h as v,i as k}from"./index-BKxN32G0.js";function C({className:t="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"rounded border-gray-300 text-megb-blue-terciary shadow-sm focus:bg-megb-blue-secundary "+t})}function L({status:t,canResetPassword:a}){const[l,m]=n.useState(!1),{data:r,setData:o,post:d,processing:x,errors:i,reset:p}=h({email:"",password:"",remember:!1});n.useEffect(()=>()=>{p("password")},[]);const f=s=>{s.preventDefault(),d(route("login"))};return e.jsxs(w,{children:[e.jsx(g,{title:"Entrar"}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"relative",children:[e.jsx(y,{size:22,className:"absolute top-2.5 left-1 text-gray-400"}),e.jsx(c,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 pl-8 block w-full text-sm p-2.5",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value),placeholder:"E-mail"}),e.jsx(u,{message:i.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 relative",children:[e.jsx(N,{size:22,className:"absolute top-2.5 left-1 text-gray-400"}),e.jsx(c,{id:"password",type:l?"text":"password",name:"password",value:r.password,className:"mt-1 pl-8 block w-full text-sm p-2.5",autoComplete:"current-password",onChange:s=>o("password",s.target.value),placeholder:"Senha"}),l?e.jsx(v,{size:22,className:"absolute top-2.5 right-1 text-gray-400 cursor-pointer",onClick:()=>m(!1)}):e.jsx(k,{size:22,className:"absolute top-2.5 right-1 text-gray-400 cursor-pointer",onClick:()=>m(!0)}),e.jsx(u,{message:i.password,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-between mt-6",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx(C,{name:"remember",checked:r.remember,onChange:s=>o("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Lembrar"})]}),a&&e.jsx(j,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Perdeu sua senha?"})]}),e.jsx("div",{className:"flex items-center justify-center mt-4",children:e.jsx(b,{className:"w-full",disabled:x,children:"Entrar"})})]})]})}export{L as default};
