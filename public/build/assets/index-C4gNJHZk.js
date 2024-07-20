import{q as R,W as T,j as l,Y as D,y as _}from"./app-sSwvcPel.js";import{R as M,S as $}from"./index-DR4FWuuZ.js";import{C as k,H as z,T as H,B as L,a as q,d as I,e as O}from"./index-TscFsg04.js";import{F as W}from"./index-DzTsROGr.js";import{A as Y}from"./AuthenticatedLayout-Ds2q-eAV.js";import{M as g}from"./index-CY5AZlk5.js";import"./index-f5AFZ5fs.js";const X=({settings:e})=>{var d,b,t,c,n,x,m,i,f,h,s,p,v,j,y,N,F,C;const{flash:w,auth:r}=R().props,{data:a,setData:u,reset:S,clearErrors:E}=T({logo:null,headerbg:e!=null&&e.headerbg?e==null?void 0:e.headerbg:"#FFFFFF",headertext:e!=null&&e.headertext?e==null?void 0:e.headertext:"#5C5A5A",buttonbg:e!=null&&e.buttonbg?e==null?void 0:e.buttonbg:"#A0bC53",buttontext:e!=null&&e.buttontext?e==null?void 0:e.buttontext:"#FFFFFF",buttonbgactive:e!=null&&e.buttonbgactive?e==null?void 0:e.buttonbgactive:"#67821D",buttontextactive:e!=null&&e.buttontextactive?e==null?void 0:e.buttontextactive:"#FFFFFF",secundarybarbg:e!=null&&e.secundarybarbg?e==null?void 0:e.secundarybarbg:"#749324",secundarybartext:e!=null&&e.secundarybartext?e==null?void 0:e.secundarybartext:"#FFFFFF",analisebg:e!=null&&e.analisebg?e==null?void 0:e.analisebg:"#FFFFFF",analisetext:e!=null&&e.analisetext?e==null?void 0:e.analisetext:"#749324",buttonanalisebg:e!=null&&e.buttonanalisebg?e==null?void 0:e.buttonanalisebg:"#a0bc53",buttonanalisetext:e!=null&&e.buttonanalisetext?e==null?void 0:e.buttonanalisetext:"#FFFFFF",buttonanalisebgactive:e!=null&&e.buttonanalisebgactive?e==null?void 0:e.buttonanalisebgactive:"#67821d",buttonanalisetextactive:e!=null&&e.buttonanalisetextactive?e==null?void 0:e.buttonanalisetextactive:"#FFFFFF",footerbg:e!=null&&e.footerbg?e==null?void 0:e.footerbg:"#f9fafb",footertext:e!=null&&e.footertext?e==null?void 0:e.footertext:"#6b7280"});function A(o){o.preventDefault(),_.post(`settings/${e.id}`,{_method:"put",logo:a==null?void 0:a.logo,headerbg:a==null?void 0:a.headerbg,headertext:a==null?void 0:a.headertext,buttonbg:a==null?void 0:a.buttonbg,buttontext:a==null?void 0:a.buttontext,buttonbgactive:a==null?void 0:a.buttonbgactive,buttontextactive:a==null?void 0:a.buttontextactive,secundarybarbg:a==null?void 0:a.secundarybarbg,secundarybartext:a==null?void 0:a.secundarybartext,analisebg:a==null?void 0:a.analisebg,analisetext:a==null?void 0:a.analisetext,buttonanalisebg:a==null?void 0:a.buttonanalisebg,buttonanalisetext:a==null?void 0:a.buttonanalisetext,buttonanalisebgactive:a==null?void 0:a.buttonanalisebgactive,buttonanalisetextactive:a==null?void 0:a.buttonanalisetextactive,footerbg:a==null?void 0:a.footerbg,footertext:a==null?void 0:a.footertext})}function B(o){o.preventDefault(),_.post(`settings/${e.id}`,{_method:"put",headerbg:null,headertext:null,buttonbg:null,buttontext:null,buttonbgactive:null,buttontextactive:null,secundarybarbg:null,secundarybartext:null,analisebg:null,analisetext:null,buttonanalisebg:null,buttonanalisetext:null,buttonanalisebgactive:null,buttonanalisetextactive:null,footerbg:null,footertext:null},{onSuccess:()=>{S(),E()}})}return l.jsxs(Y,{children:[l.jsx(D,{title:"Configurações"}),l.jsxs(k,{children:[l.jsxs(z,{children:[l.jsxs(H,{children:[l.jsx(g,{size:30}),l.jsx("span",{className:"ml-2",children:"Configurações"})]}),l.jsx(L,{links:[{url:null,label:"Configurações"}]})]}),l.jsxs(q,{className:"bg-white pt-1",children:[l.jsx(W,{message:w}),l.jsxs("form",{onSubmit:A,onReset:B,autoComplete:"off",children:[l.jsx(I,{children:l.jsxs("div",{className:"px-3 my-3",children:[l.jsx("div",{className:"w-24 mb-8",children:l.jsx("img",{src:`/storage/images/${e!=null&&e.logo?e==null?void 0:e.logo:"default.png"}`,alt:"Imagem de logo"})}),l.jsx("div",{className:"",children:l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"logo",children:"Logo da empresa"}),l.jsx("input",{disabled:((d=r.user)==null?void 0:d.company_id)!==null,id:"logo",type:"file",onChange:o=>u("logo",o.target.files[0]),className:`block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent`})]})}),l.jsxs("div",{className:"border border-gray-300 rounded-md p-2 md:p-4 mt-2 md:mt-4",children:[l.jsx("div",{className:"uppercase text-gray-500 text-xs font-semibold border-b border-b-gray-300",children:"Estilo da barra de menus"}),l.jsxs("div",{className:"md:grid grid-cols-6 gap-4 mt-4",children:[l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"headerbg",children:"Cor de fundo barra de menu"}),l.jsx("input",{disabled:((b=r.user)==null?void 0:b.company_id)!==null,id:"headerbg",type:"color",value:a.headerbg,onChange:o=>u("headerbg",o.target.value),className:"input-form !h-10 w-full"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"headertext",children:"Cor de texto barra de menu"}),l.jsx("input",{disabled:((t=r.user)==null?void 0:t.company_id)!==null,id:"headertext",type:"color",value:a.headertext,onChange:o=>u("headertext",o.target.value),className:"input-form !h-10 w-full"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"buttonbg",children:"Cor de fundo do botão"}),l.jsx("input",{disabled:((c=r.user)==null?void 0:c.company_id)!==null,id:"buttonbg",type:"color",value:a.buttonbg,onChange:o=>u("buttonbg",o.target.value),className:"input-form !h-10 w-full"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"buttontext",children:"Cor de texto do botão"}),l.jsx("input",{disabled:((n=r.user)==null?void 0:n.company_id)!==null,id:"buttontext",type:"color",value:a.buttontext,onChange:o=>u("buttontext",o.target.value),className:"input-form !h-10 w-full"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"buttonbgactive",children:"Cor de fundo do botão ativo"}),l.jsx("input",{disabled:((x=r.user)==null?void 0:x.company_id)!==null,id:"buttonbgactive",type:"color",value:a.buttonbgactive,onChange:o=>u("buttonbgactive",o.target.value),className:"input-form !h-10 w-full"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"buttontextactive",children:"Cor de texto do botão ativo"}),l.jsx("input",{disabled:((m=r.user)==null?void 0:m.company_id)!==null,id:"buttontextactive",type:"color",value:a.buttontextactive,onChange:o=>u("buttontextactive",o.target.value),className:"input-form !h-10 w-full"})]})]})]}),((i=r==null?void 0:r.user)==null?void 0:i.organization_id)!==null&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"border border-gray-300 rounded-md p-2 md:p-4 mt-2 md:mt-4",children:[l.jsx("div",{className:"uppercase text-gray-500 text-xs font-semibold border-b border-b-gray-300",children:"Estilo barra secundária"}),l.jsxs("div",{className:"md:grid grid-cols-2 gap-4 mt-2",children:[l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"secundarybarbg",children:"Cor de fundo da barra"}),l.jsx("input",{disabled:((f=r.user)==null?void 0:f.company_id)!==null,id:"secundarybarbg",type:"color",value:a.secundarybarbg,onChange:o=>u("secundarybarbg",o.target.value),className:"input-form !h-10 w-full"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"secundarybartext",children:"Cor de texto da barra"}),l.jsx("input",{disabled:((h=r.user)==null?void 0:h.company_id)!==null,id:"secundarybartext",type:"color",value:a.secundarybartext,onChange:o=>u("secundarybartext",o.target.value),className:"input-form !h-10 w-full"})]})]})]}),l.jsxs("div",{className:"border border-gray-300 rounded-md p-2 md:p-4 mt-2 md:mt-4",children:[l.jsx("div",{className:"uppercase text-gray-500 text-xs font-semibold border-b border-b-gray-300",children:"Estilo da barra de análise"}),l.jsxs("div",{className:"md:grid grid-cols-6 gap-4 mt-4",children:[l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"analisebg",children:"Cor de fundo barra de análise"}),l.jsx("input",{disabled:((s=r.user)==null?void 0:s.company_id)!==null,id:"analisebg",type:"color",value:a.analisebg,onChange:o=>u("analisebg",o.target.value),className:"input-form !h-10 w-full"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"analisetext",children:"Cor de texto barra análise"}),l.jsx("input",{disabled:((p=r.user)==null?void 0:p.company_id)!==null,id:"analisetext",type:"color",value:a.analisetext,onChange:o=>u("analisetext",o.target.value),className:"input-form !h-10 w-full"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"buttonanalisebg",children:"Cor de fundo do botão análise"}),l.jsx("input",{disabled:((v=r.user)==null?void 0:v.company_id)!==null,id:"buttonanalisebg",type:"color",value:a.buttonanalisebg,onChange:o=>u("buttonanalisebg",o.target.value),className:"input-form !h-10 w-full"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"buttonanalisetext",children:"Cor de texto do botão"}),l.jsx("input",{disabled:((j=r.user)==null?void 0:j.company_id)!==null,id:"buttonanalisetext",type:"color",value:a.buttonanalisetext,onChange:o=>u("buttonanalisetext",o.target.value),className:"input-form !h-10 w-full"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"buttonanalisebgactive",children:"Cor de fundo do botão ativo"}),l.jsx("input",{disabled:((y=r.user)==null?void 0:y.company_id)!==null,id:"buttonanalisebgactive",type:"color",value:a.buttonanalisebgactive,onChange:o=>u("buttonanalisebgactive",o.target.value),className:"input-form !h-10 w-full"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"buttonanalisetextactive",children:"Cor de texto do botão ativo"}),l.jsx("input",{disabled:((N=r.user)==null?void 0:N.company_id)!==null,id:"buttonanalisetextactive",type:"color",value:a.buttonanalisetextactive,onChange:o=>u("buttonanalisetextactive",o.target.value),className:"input-form !h-10 w-full"})]})]})]})]}),l.jsxs("div",{className:"border border-gray-300 rounded-md p-2 md:p-4 mt-2 md:mt-4",children:[l.jsx("div",{className:"uppercase text-gray-500 text-xs font-semibold border-b border-b-gray-300",children:"Estilo do rodapé"}),l.jsxs("div",{className:"md:grid grid-cols-2 gap-4 mt-2",children:[l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"footerbg",children:"Cor de fundo do rodapé"}),l.jsx("input",{disabled:((F=r.user)==null?void 0:F.company_id)!==null,id:"footerbg",type:"color",value:a.footerbg,onChange:o=>u("footerbg",o.target.value),className:"input-form !h-10 w-full"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("label",{className:"label-form",htmlFor:"footertext",children:"Cor de texto do rodapé"}),l.jsx("input",{disabled:((C=r.user)==null?void 0:C.company_id)!==null,id:"footertext",type:"color",value:a.footertext,onChange:o=>u("footertext",o.target.value),className:"input-form !h-10 w-full"})]})]})]})]})}),l.jsxs(O,{className:"flex items-center justify-end gap-4",children:[l.jsx(M,{}),l.jsx($,{})]})]})]})]})]})};export{X as default};
