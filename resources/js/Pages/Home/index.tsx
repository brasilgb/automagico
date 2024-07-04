import { Head, router, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { GiPayMoney } from "react-icons/gi";
import { Kpi } from "@/Components/Kpis";
import { MoneyptBR } from "@/Components/Money";
import { AiOutlineDashboard, AiOutlineLineChart } from "react-icons/ai";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { HeaderContent, TitleTop } from "@/Components/PageTop";
import { IoIosBusiness } from 'react-icons/io';
import Progress from '@/Components/Charts/Progress';
import CHFaturamento from "@/Components/Charts/CHFaturamento";
import DatePickerSingle from "@/Components/DatePicker/DatePickerSingle";
import { useEffect, useState } from 'react';
import { useAuthContext } from '@/Contexts';
import moment from 'moment';
import { IoInformationCircle } from "react-icons/io5";
import FiliaisSelector from '@/Components/FiliaisSelector';
import apiautomagico from "@/bootstrap";


const Home = ({ companies }: any) => {
  const { auth } = usePage().props as any;
  const { filialAnalise, dataFiltro } = useAuthContext();
  const [totals, setTotals] = useState<any>([]);
  const [graficoVendas, setGraficoVendas] = useState<any>([]);

  useEffect(() => {
    const getTotals = async () => {
      await apiautomagico.get(`totais?dt=${moment(dataFiltro).format("YYYYMMDD")}&fl=${filialAnalise}`)
      .then((response) => {
        const { totals } = response.data.response;
        setTotals(totals);
      })
      .catch((err) => {
        console.log(err);
        
      })
    };
    getTotals();
   },[dataFiltro, filialAnalise]);
  
 useEffect(() => {
  const getGraficoVendas = async () => {
    await apiautomagico.get(`graficovendas?dt=${moment(dataFiltro).format("YYYYMM")}&fl=${filialAnalise}`)
    .then((response) => {
      const { saleschart } = response.data.response;
      setGraficoVendas(saleschart);
    })
    .catch((err) => {
      console.log(err);
      
    })
  };
  getGraficoVendas();
},[dataFiltro, filialAnalise]);

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <main className=''>
        {auth?.user?.organization_id !== null &&
          <>
            <div className="flex items-center justify-start p-1 bg-automa-green-primary rounded-md md:shadow-md shadow-sm border border-automa-green-secundary">
              <DatePickerSingle url="/" route='' />
              <FiliaisSelector data={companies} />
            </div>
            {!totals &&
              <div className="bg-cyan-600 text-white flex items-center justify-start rounded-md shadow-sm md:mt-4 mt-2 py-2 px-3">
                <IoInformationCircle size={25} /><span className="text-sm ml-2">Não há dados a serem mostrados no momento</span>
              </div>
            }
            {totals &&
              <div className="grid md:gap-4 gap-2 md:grid-cols-4 grid-cols-2 md:mt-4 mt-2">
                <Kpi icon={<AiOutlineLineChart />} iconcolor="text-blue-700" title="Meta" value={MoneyptBR(totals?.valmeta)} bgcolor="bg-blue-200" textcolor="text-blue-700" />
                <Kpi icon={<GiPayMoney />} iconcolor="text-green-700" title="Faturamento" value={MoneyptBR(totals?.valven)} bgcolor="bg-green-200" textcolor="text-green-700" />
                <Kpi icon={<FaMoneyBillTrendUp />} iconcolor="text-yellow-700" title="Val. Juros" value={MoneyptBR(totals?.valjur)} bgcolor="bg-green-200" textcolor="text-green-700" />
                <Kpi icon={<FaMoneyBillTrendUp />} iconcolor="text-yellow-700" title="Val. Ina." value={MoneyptBR(totals?.valina)} bgcolor="bg-green-200" textcolor="text-green-700" />
              </div>
            }
            {totals &&
              <div className="grid md:gap-4 gap-2 md:grid-cols-4 grid-cols-2 md:mt-4 mt-2">
                <div className='bg-white p-4 shadow-md rounded-md'>
                  <Progress value={totals?.permet} colorBar="#FF5003" colorText="#FF5003" title='Meta' height={100} />
                </div>
                <div className='bg-white p-4 shadow-md rounded-md'>
                  <Progress value={totals?.margem} colorBar="#CA0156" colorText="#CA0156" title='Margem' height={100} />
                </div>
                <div className='bg-white p-4 shadow-md rounded-md'>
                  <Progress value={totals?.perjur} colorBar="#0F52BA" colorText="#0F52BA" title='Juros' height={100} />
                </div>
                <div className='bg-white p-4 shadow-md rounded-md'>
                  <Progress value={totals?.perina} colorBar="#FFAE08" colorText="#FFAE08" title='Inadimplência' height={100} />
                </div>
              </div>
            }
            {graficoVendas?.length > 0 &&
              <div className="md:mt-4 mt-2 p-2 flex flex-col bg-white rounded-md shadow-md">
                <CHFaturamento data={graficoVendas} />
              </div>
            }
          </>
        }

        {auth?.user?.organization_id === null &&
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Kpi icon={<IoIosBusiness size="50" />} iconcolor="text-blue-700" title="Empresas ativas" value={companies.length} bgcolor="bg-blue-200" textcolor="text-blue-700" />
            {/* <Kpi icon={<AiOutlineLineChart size="50" />} iconcolor="text-blue-700" title="Meta" value={MoneyptBR(goals?.valormeta)} bgcolor="bg-blue-200" textcolor="text-blue-700" />
              <Kpi icon={<GiPayMoney size="50" />} iconcolor="text-green-700" title="Faturamento" value={MoneyptBR(goals?.faturamento)} bgcolor="bg-green-200" textcolor="text-green-700" />
              <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Representa" value={ValuePercent(goals?.faturamento/goals?.valormeta)} bgcolor="bg-green-200" textcolor="text-green-700" /> */}
          </div>
        }
      </main>
    </AuthenticatedLayout>
  )
}

export default Home