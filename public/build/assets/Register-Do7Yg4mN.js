import{W as c,r as u,j as s,Y as f}from"./app-2n679auc.js";import{T as m,I as o}from"./TextInput-BWx4ubXS.js";import{I as l}from"./InputLabel-DLar7xT5.js";import{P as w}from"./PrimaryButton-D2lYINjZ.js";import{A as x}from"./AuthLayout-DV-HX8N0.js";import"./ApplicationLogo-BLhqF6FB.js";function b(){const{data:e,setData:t,post:n,processing:i,errors:r,reset:d}=c({name:"",email:"",password:"",password_confirmation:""});u.useEffect(()=>()=>{d("password","password_confirmation")},[]);const p=a=>{a.preventDefault(),n(route("register"))};return s.jsxs(x,{children:[s.jsx(f,{title:"Register"}),s.jsxs("form",{onSubmit:p,children:[s.jsxs("div",{children:[s.jsx(l,{htmlFor:"name",value:"Nome"}),s.jsx(m,{id:"name",name:"name",value:e.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:a=>t("name",a.target.value)}),s.jsx(o,{message:r.name,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(l,{htmlFor:"email",value:"E-mail"}),s.jsx(m,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>t("email",a.target.value)}),s.jsx(o,{message:r.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(l,{htmlFor:"password",value:"Senha"}),s.jsx(m,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>t("password",a.target.value)}),s.jsx(o,{message:r.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(l,{htmlFor:"password_confirmation",value:"Confirme a senha"}),s.jsx(m,{id:"password_confirmation",type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>t("password_confirmation",a.target.value)}),s.jsx(o,{message:r.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"w-full",disabled:i,children:"Registrar"})})]})]})}export{b as default};
