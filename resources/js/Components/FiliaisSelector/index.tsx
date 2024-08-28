import { useAuthContext } from '@/Contexts';
import { router, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react'

interface FiliaisProps {
    data: any;
}

const FiliaisSelector = ({data}: FiliaisProps) => {
    const { auth } = usePage().props as any;
    const companyUser = auth.user?.company_id;
    const { setFilialAnalise, filialAnalise, dataFiltro } = useAuthContext();

    const onlyOneFilial = (data.filter((f: any) => (f.subnumber == companyUser)));

    useEffect(() => {
        if (companyUser) {
            setFilialAnalise(companyUser);
        }
    }, [companyUser]);

    const handleDataByFilial = (value:any) => {
        setFilialAnalise(value);
    }

    return (
        <div className='md:w-60 w-52 rounded-md bg-gray-50'>
            {companyUser !== null
                ? <div className='rounded-md p-1 border-none w-full text-base text-gray-500 font-sans'>{onlyOneFilial[0]?.subname}</div>
                : <select
                    className='rounded p-1 border-2 border-white shadow w-full text-base text-gray-500 font-sans'
                    name="filial"
                    id="filial"
                    value={filialAnalise}
                    onChange={(e: any) => handleDataByFilial(e.target.value)}
                >
                    <option value="0">Análise rede</option>
                    {data?.map((filial: any, idx: number) => (
                        <option key={idx} value={filial.subnumber}>{filial.subname}</option>
                    ))}
                </select>
            }
        </div>
    )
}

export default FiliaisSelector