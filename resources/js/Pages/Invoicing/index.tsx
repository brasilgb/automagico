import { Card, CardBody } from "@/Components/Card"
import { HeaderContent, TitleTop } from "@/Components/PageTop"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router } from '@inertiajs/react'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { GiReceiveMoney } from "react-icons/gi"
import { AnaliseButton } from "@/Components/Buttons"
import DatePickerMagic from "@/Components/DatePicker"
import { IoInformationCircle } from "react-icons/io5"
import DatePickerSingle from "@/Components/DatePicker/DatePickerSingle"
import { useAuthContext } from "@/Contexts"
import Association from "./Association"
import Sales from "./Sales"
import FiliaisSelector from "@/Components/FiliaisSelector"

const Invoicing = ({ companies }: any) => {
  const { alteredAnalise, setAlteredAnalise } = useAuthContext();
 
  return (
    <AuthenticatedLayout>
      <Head title="Vendas" />
      <Card>
        <HeaderContent>
          <div className="flex flex-col w-full">
            <div className="flex md:flex-row flex-col gap-2 items-center justify-auto p-1 bg-automa-green-primary rounded-md shadow-md border border-automa-green-secundary w-full">
              <DatePickerSingle url="sales" route={""} />
              <FiliaisSelector data={companies} />
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