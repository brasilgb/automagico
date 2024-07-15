import apiautomagico from "@/bootstrap";
import { AnaliseButton } from "@/Components/Buttons";
import { Card, CardBody } from "@/Components/Card";
import DatePickerSingle from "@/Components/DatePicker/DatePickerSingle";
import FiliaisSelector from "@/Components/FiliaisSelector";
import { MoneyptBR, ValuePercent } from "@/Components/Money";
import { HeaderContent } from "@/Components/PageTop";
import Pagination from "@/Components/Pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Table";
import { useAuthContext } from "@/Contexts";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import moment from "moment";
import React, { useEffect, useState } from 'react'
import { IoInformationCircle } from "react-icons/io5";
import 'animate.css';

const Association = () => {
  const { dataFiltro, filialAnalise } = useAuthContext();
  const [autoMagicoAssociation, setAutoMagicoAssociation] = useState<any>([]);
  const [pagination, setPagination] = useState<any>([]);

  useEffect(() => {
    const getAutoMagicoAssociation = async () => {
      await apiautomagico.get(`associacoes?dt=${moment(dataFiltro).format("YYYYMMDD")}&fl=${filialAnalise}`)
        .then((response) => {
          const { association } = response.data.response;
          setAutoMagicoAssociation(association);
        })
        .catch((err) => {
          console.log(err);
        })
    };
    getAutoMagicoAssociation();
  }, [dataFiltro, filialAnalise]);

  return (
    <>
      <Head title="Vendas por associação" />
      <Table className="bg-megb-blue-secundary rounded-t-md w-full animate__animated animate__fadeIn">
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Associação</TableHead>
            <TableHead>Desc. Associação</TableHead>
            <TableHead>Data venda</TableHead>
            <TableHead>Meta</TableHead>
            <TableHead>Venda</TableHead>
            <TableHead>Margem</TableHead>
            <TableHead>Representa</TableHead>
          </TableRow>
        </TableHeader>
        <TableHeader>
          {autoMagicoAssociation.filter((total: any) => (total.assoc === 'XX')).map((assoc: any, idx: number) => (
            <TableRow className={`${idx % 2 === 0 ? 'bg-gray-500' : 'bg-gray-100'}`}>
              <TableHead>Total</TableHead>
              <TableHead>{assoc.assoc}</TableHead>
              <TableHead>{assoc.descassoc}</TableHead>
              <TableHead>{moment(assoc.dtvenda).format("DD/MM/YYYY")}</TableHead>
              <TableHead>{MoneyptBR(assoc.valmeta)}</TableHead>
              <TableHead>{MoneyptBR(assoc.valvenda)}</TableHead>
              <TableHead>{MoneyptBR(assoc.margem)}</TableHead>
              <TableHead>{ValuePercent(assoc.representa)}</TableHead>
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {autoMagicoAssociation.filter((total: any) => (total.assoc !== 'XX')).map((assoc: any, idx: number) => (
            <TableRow className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'} text-gray-500`}>
              <TableCell>{assoc.id}</TableCell>
              <TableCell>{assoc.assoc}</TableCell>
              <TableCell>{assoc.descassoc}</TableCell>
              <TableCell>{moment(assoc.dtvenda).format("DD/MM/YYYY")}</TableCell>
              <TableCell>{MoneyptBR(assoc.valmeta)}</TableCell>
              <TableCell>{MoneyptBR(assoc.valvenda)}</TableCell>
              <TableCell>{MoneyptBR(assoc.margem)}</TableCell>
              <TableCell>{ValuePercent(assoc.representa)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {autoMagicoAssociation.length == "0" &&
        <div className="bg-cyan-600 text-white flex items-center justify-start rounded-md shadow-sm md:mt-4 mt-2 py-2 px-3">
          <IoInformationCircle size={25} /><span className="text-sm ml-2">Não há dados a serem mostrados no momento</span>
        </div>
      }
      {/* <Pagination data={pagination} analise="associacao" /> */}
    </>
  )
}

export default Association