import apiautomagico from "@/bootstrap";
import { MoneyptBR, ValuePercent } from "@/Components/Money"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Table"
import { useAuthContext } from "@/Contexts";
import { Head, router, usePage } from "@inertiajs/react";
import moment from "moment"
import React, { useEffect, useState } from 'react'
import { IoInformationCircle } from "react-icons/io5";
import 'animate.css';
import AppLoading from "@/Components/AppLoading";

const Sales = () => {
  const { auth } = usePage().props as any;
  const { dataFiltro, filialAnalise, loading, setLoading } = useAuthContext();
  const [autoMagicoSales, setAutoMagicoSales] = useState<any>([]);

  useEffect(() => {
    const getAutoMagicoSales = async () => {
      await apiautomagico.get(`vendas?dt=${moment(dataFiltro).format("YYYYMMDD")}&org=${auth.user?.organization_id}&fl=${filialAnalise}`)
        .then((response) => {
          const { sales } = response.data.response;
          setAutoMagicoSales(sales);
        })
        .catch((err) => {
          console.log(err);
        })
    };
    getAutoMagicoSales();
  }, [dataFiltro, filialAnalise, auth]);

  return (
    <>
      {loading && <AppLoading />}
      <Head title="Vendas" />
      {autoMagicoSales &&
        <Table className="rounded-t-md w-full animate__animated animate__fadeIn">
          <TableHeader>
            <TableRow>
              <TableHead>Data venda</TableHead>
              <TableHead>Filial</TableHead>
              <TableHead>Meta</TableHead>
              <TableHead>Venda</TableHead>
              <TableHead>Margem</TableHead>
              <TableHead>Representa</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {autoMagicoSales?.map((sale: any, idx: number) => (
              <TableRow className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                <TableCell>{moment(sale.dtvenda).format("DD/MM/YYYY")}</TableCell>
                <TableCell>{sale?.descfilial}</TableCell>
                <TableCell>{MoneyptBR(sale.valmeta)}</TableCell>
                <TableCell>{MoneyptBR(sale.valvenda)}</TableCell>
                <TableCell>{ValuePercent(sale.margem)}</TableCell>
                <TableCell>{ValuePercent(sale.representa)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }
      {!autoMagicoSales &&
        <div className="bg-cyan-600 text-white flex items-center justify-start rounded-md shadow-sm md:mt-4 mt-2 py-2 px-3">
          <IoInformationCircle size={25} /><span className="text-sm ml-2">Não há dados a serem mostrados no momento</span>
        </div>
      }
      {/* <Pagination data={pagination[0]} analise={"vendas"} /> */}
    </>
  )
}

export default Sales