import { AnaliseButton } from "@/Components/Buttons";
import { Card, CardBody } from "@/Components/Card";
import DatePickerSingle from "@/Components/DatePicker/DatePickerSingle";
import FiliaisSelector from "@/Components/FiliaisSelector";
import { MoneyptBR, ValuePercent } from "@/Components/Money"
import { HeaderContent } from "@/Components/PageTop";
import Pagination from "@/Components/Pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Table"
import { useAuthContext } from "@/Contexts";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import moment from "moment"
import React, { useEffect } from 'react'
import { IoInformationCircle } from "react-icons/io5";
interface FaturamentoProps {
  sales: any;
  totalsday: any;
  companies: any;
}
const Faturamento = ({ sales, totalsday, companies }: FaturamentoProps) => {
  const { dataFiltro, filialAnalise, alteredAnalise, setAlteredAnalise } = useAuthContext();

  return (
    <AuthenticatedLayout>
      <Head title="Vendas" />
      <Card>
        <HeaderContent>
          <div className="flex flex-col w-full">
            <div className="flex md:flex-row flex-col gap-2 items-center justify-auto p-1 bg-automa-green-primary rounded-md shadow-md border border-automa-green-secundary w-full">
              <DatePickerSingle url="/sales" route="sales" />
              <FiliaisSelector data={companies} url="/sales" />
            </div>
            <div className="flex md:items-center items-start justify-start md:flex-1 p-2 md:gap-6 gap-2 w-full overflow-x-auto bg-gray-100 mt-2 rounded-md shadow">
            <AnaliseButton label="Faturamento" onclick="sales" />
            <AnaliseButton label="Associação" onclick="associations" />
            </div>
          </div>
        </HeaderContent>
        <CardBody className="rounded-md p-1">
          <Table className="bg-megb-blue-secundary rounded-t-md w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Filial</TableHead>
                <TableHead>Desc. Filial</TableHead>
                <TableHead>Data venda</TableHead>
                <TableHead>Meta</TableHead>
                <TableHead>Venda</TableHead>
                <TableHead>Margem</TableHead>
                <TableHead>Representa</TableHead>
              </TableRow>
            </TableHeader>
            <TableHeader>
              {totalsday.map((total: any, idx: number) => (
                <TableRow className={`${idx % 2 === 0 ? 'bg-gray-500' : 'bg-gray-100'}`}>
                  <TableHead>Total</TableHead>
                  <TableHead></TableHead>
                  <TableHead>{moment(total?.dtvenda).format("DD/MM/YYYY")}</TableHead>
                  <TableHead>{MoneyptBR(total?.valmeta)}</TableHead>
                  <TableHead>{MoneyptBR(total?.valvenda)}</TableHead>
                  <TableHead>{MoneyptBR(total?.margem)}</TableHead>
                  <TableHead>{ValuePercent(total?.representa)}</TableHead>
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {sales.data.map((sale: any, idx: number) => (
                <TableRow className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                  <TableCell>{sale.filial}</TableCell>
                  <TableCell>{sale.descfilial}</TableCell>
                  <TableCell>{moment(sale.dtvenda).format("DD/MM/YYYY")}</TableCell>
                  <TableCell>{MoneyptBR(sale.valmeta)}</TableCell>
                  <TableCell>{MoneyptBR(sale.valvenda)}</TableCell>
                  <TableCell>{MoneyptBR(sale.margem)}</TableCell>
                  <TableCell>{ValuePercent(sale.representa)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {sales.length == "0" &&
            <div className="bg-cyan-600 text-white flex items-center justify-start rounded-md shadow-sm md:mt-4 mt-2 py-2 px-3">
              <IoInformationCircle size={25} /><span className="text-sm ml-2">Não há dados a serem mostrados no momento</span>
            </div>
          }
          <Pagination data={sales} analise={"faturamento"} states={`&td=${moment(dataFiltro).format('YYYYMMDD')}&fl=${filialAnalise}`} />
        </CardBody>
      </Card>
    </AuthenticatedLayout>
  )
}

export default Faturamento