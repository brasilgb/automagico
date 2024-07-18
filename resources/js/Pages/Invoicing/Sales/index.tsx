import apiautomagico from "@/bootstrap";
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
import { Head, router, usePage } from "@inertiajs/react";
import moment from "moment"
import React, { useEffect, useState } from 'react'
import { IoInformationCircle } from "react-icons/io5";
import 'animate.css';
import AppLoading from "@/Components/AppLoading";

const Sales = () => {
  const { auth } = usePage().props as any;
  const { dataFiltro, filialAnalise, loading, setLoading } = useAuthContext();
  const [totals, setTotals] = useState<any>([]);
  const [autoMagicoSales, setAutoMagicoSales] = useState<any>([]);

  useEffect(() => {
    const getTotals = async () => {
      setLoading(true);
      await apiautomagico.get(`totais?dt=${moment(dataFiltro).format("YYYYMMDD")}&org=${auth.user?.organization_id}&fl=${filialAnalise}`)
        .then((response) => {
          const { totals } = response.data.response;
          setTotals(totals);
        })
        .catch((err) => {
          console.log(err);
        }).finally(() => setLoading(false));
    };
    getTotals();
  }, [dataFiltro, filialAnalise, auth]);

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
              <TableHead>#</TableHead>
              <TableHead>Data venda</TableHead>
              <TableHead>Meta</TableHead>
              <TableHead>Venda</TableHead>
              <TableHead>Margem</TableHead>
              <TableHead>Representa</TableHead>
            </TableRow>
          </TableHeader>
          <TableHeader>
            {totals &&
              <TableRow className='bg-gray-100'>
                <TableHead>Total</TableHead>
                <TableHead>{moment(totals?.datatu).format("DD/MM/YYYY")}</TableHead>
                <TableHead>{MoneyptBR(totals?.valmeta)}</TableHead>
                <TableHead>{MoneyptBR(totals?.valven)}</TableHead>
                <TableHead>{MoneyptBR(totals?.margem)}</TableHead>
                <TableHead>{ValuePercent(totals?.permet)}</TableHead>
              </TableRow>
            }
          </TableHeader>
          <TableBody>
            {autoMagicoSales.map((sale: any, idx: number) => (
              <TableRow className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                <TableCell>{sale.id}</TableCell>
                <TableCell>{moment(sale.dtvenda).format("DD/MM/YYYY")}</TableCell>
                <TableCell>{MoneyptBR(sale.valmeta)}</TableCell>
                <TableCell>{MoneyptBR(sale.valvenda)}</TableCell>
                <TableCell>{MoneyptBR(sale.margem)}</TableCell>
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