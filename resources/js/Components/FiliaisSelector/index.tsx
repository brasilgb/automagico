import { useAuthContext } from '@/Contexts';
import { router, usePage } from '@inertiajs/react';
import moment from 'moment';
import React, { useEffect } from 'react'

interface FiliaisProps {
    data: any;
    url: any;
}

const FiliaisSelector = (props: FiliaisProps) => {
    const { auth } = usePage().props as any;
    const companyUser = auth.user?.company_id;
    const { setFilialAnalise, filialAnalise, dataFiltro } = useAuthContext();

    const onlyOneFilial = (props.data.filter((f: any) => (f.subnumber == companyUser)));

    useEffect(() => {
        if (companyUser) {
            setFilialAnalise(companyUser);
        }
    }, [companyUser]);

    const handleDataByFilial = (value:any) => {
        router.get(`${props.url}`, {
            'dt': moment(dataFiltro).format('YYYYMMDD'),
            'fl': value
        });
        setFilialAnalise(value);
    }

    return (
        <div className='w-52 rounded-md ml-2 bg-gray-50'>
            {companyUser !== null
                ? <div className='rounded-md p-[5px] border-none w-full text-base text-gray-600'>{onlyOneFilial[0].subname}</div>
                : <select
                    className='rounded-md p-[5px] border-none w-full text-base text-gray-600'
                    name="filial"
                    id="filial"
                    value={filialAnalise}
                    onChange={(e: any) => handleDataByFilial(e.target.value)}
                >
                    {props.data?.map((filial: any, idx: number) => (
                        <option value={filial.subnumber}>{filial.subname}</option>
                    ))}
                </select>
            }
        </div>
    )
}

export default FiliaisSelector