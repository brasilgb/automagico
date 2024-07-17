import { Card, CardBody } from "@/Components/Card"
import { HeaderContent, TitleTop } from "@/Components/PageTop"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router, usePage } from '@inertiajs/react'
import { AnaliseButton } from "@/Components/Buttons"
import DatePickerSingle from "@/Components/DatePicker/DatePickerSingle"
import { useAuthContext } from "@/Contexts"
import Association from "./Association"
import Sales from "./Sales"
import FiliaisSelector from "@/Components/FiliaisSelector"
import AnaliseRede from "@/Components/AnaliseRede"

const Invoicing = ({ companies }: any) => {
  const { auth } = usePage().props as any;
  const { alteredAnalise, setAlteredAnalise } = useAuthContext();

  return (
    <AuthenticatedLayout>
      <Head title="Vendas" />
      <Card>
        <HeaderContent>
          <div className="flex flex-col w-full">
            <div 
            style={{ backgroundColor: auth.settings?.secundarybarbg ? auth.settings?.secundarybarbg : '#749324', color: auth.settings?.secundarybartext ? auth.settings?.secundarybartext : '#FFFFFF' }}
            className="flex gap-2 items-center justify-auto p-1 rounded-md shadow-md border border-gray-300/80 w-full">
              <DatePickerSingle route='faturamento' />
              <FiliaisSelector data={companies} />
              {auth.user.company_id === null &&
                <AnaliseRede />
              }
            </div>
            <div className="flex md:items-center items-start justify-start md:flex-1 p-2 md:gap-6 gap-2 w-full overflow-x-auto bg-gray-100 mt-2 rounded-md shadow">
              <AnaliseButton label="Faturamento" onclick={() => setAlteredAnalise('faturamento')} active={alteredAnalise === 'faturamento' ? true : false} />
              <AnaliseButton label="Associação" onclick={() => setAlteredAnalise('associacao')} active={alteredAnalise === 'associacao' ? true : false} />
            </div>
          </div>

        </HeaderContent>
        <CardBody className="rounded-md p-1">
          {alteredAnalise === 'faturamento' &&
            <Sales />
          }
          {alteredAnalise === 'associacao' &&
            <Association />
          }
        </CardBody>
      </Card>
    </AuthenticatedLayout>
  )
}

export default Invoicing