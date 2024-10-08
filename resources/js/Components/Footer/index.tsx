import { usePage } from "@inertiajs/react";
import moment from "moment"

const Footer = () => {
  const { auth } = usePage().props as any;
  return (
    <footer 
    style={{ backgroundColor: auth.settings?.footerbg ? auth.settings?.footerbg : '#f9fafb', color: auth.settings?.footertext ? auth.settings?.footertext : '#6b7280' }} 
        className="md:h-8 h-12 flex items-center">
      <div className="px-4 w-full">
        <div className="md:mx-4 flex md:flex-row flex-col md:justify-between">
          <div className=" md:md:w-auto md:text-left w-full text-center text-xs">
            {moment().format('YYYY')}&copy; - Empresa . Todos os direitos reservados.
          </div>
          <div className="px-4 md:w-auto md:text-left w-full text-center text-sm">
            <a href="https://megb.com.br" target="_blank" rel="noopener noreferrer" title='Dsenvolvido por MEGB'>
              <span className='text-xs font-bold !text-megb-yellow-secundary drop-shadow-md'>MEGB</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;