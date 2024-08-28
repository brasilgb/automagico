import apiautomagico from "@/bootstrap";
import { MoneyptBR, ValuePercent } from "@/Components/Money";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Table";
import { useAuthContext } from "@/Contexts";
import { Head, usePage } from "@inertiajs/react";
import moment from "moment";
import React, { useEffect, useState } from 'react'
import { IoInformationCircle } from "react-icons/io5";
import 'animate.css';
import AppLoading from "@/Components/AppLoading";

const Association = () => {
  const { auth } = usePage().props as any;
  const { dataFiltro, filialAnalise, loading, setLoading } = useAuthContext();
  const [autoMagicoAssociation, setAutoMagicoAssociation] = useState<any>([]);

  useEffect(() => {
    const getAutoMagicoAssociation = async () => {
      setLoading(true);
      await apiautomagico.get(`associacoes?dt=${moment(dataFiltro).format("YYYYMMDD")}&org=${auth.user?.organization_id}&fl=${filialAnalise}`)
        .then((response) => {
          const { association } = response.data.response;
          setAutoMagicoAssociation(association);
        })
        .catch((err) => {
          console.log(err);
        }).finally(() => setLoading(false));
    };
    getAutoMagicoAssociation();
  }, [dataFiltro, filialAnalise, auth]);

  return (
    <>
      {loading && <AppLoading />}
      <Head title="Vendas por associação" />
      {autoMagicoAssociation &&
        <Table className="rounded-t-md w-full animate__animated animate__fadeIn">
          <TableHeader>
            <TableRow>
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
              <TableRow className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                <TableHead>{assoc.descassoc}</TableHead>
                <TableHead>-</TableHead>
                <TableHead>{moment(assoc.dtvenda).format("DD/MM/YYYY")}</TableHead>
                <TableHead>{MoneyptBR(assoc.valmeta)}</TableHead>
                <TableHead>{MoneyptBR(assoc.valvenda)}</TableHead>
                <TableHead>{MoneyptBR(assoc.margem)}</TableHead>
                <TableHead>{ValuePercent(assoc.representa)}</TableHead>
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {autoMagicoAssociation.filter((f: any) => (f.assoc !== 'XX')).map((assoc: any, idx: number) => (
              <TableRow className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'} text-gray-500`}>
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
      }
      {!autoMagicoAssociation &&
        <div className="bg-cyan-600 text-white flex items-center justify-start rounded-md shadow-sm md:mt-4 mt-2 py-2 px-3">
          <IoInformationCircle size={25} /><span className="text-sm ml-2">Não há dados a serem mostrados no momento</span>
        </div>
      }
      {/* <Pagination data={pagination} analise="associacao" /> */}
    </>
  )
}

export default Association