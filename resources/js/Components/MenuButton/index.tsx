import React, { useState } from 'react'
import SideMenu from "../SideMenu";
import { Link, usePage } from "@inertiajs/react";
import { IoExit } from "react-icons/io5";
import { AiOutlineDashboard } from 'react-icons/ai';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa6';
import { SlOrganization } from 'react-icons/sl';
import { IoIosBusiness } from 'react-icons/io';
import { MdOutlineTune } from "react-icons/md";

const MenuButton = () => {
    const { auth } = usePage().props as any;
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleOpenMenu = () => {
        setOpenMenu(state => !state);
    }

    const MHamburger = () => {
        return (
            <div className="h-5 w-5 flex flex-col items-center justify-between">
                <div className="h-1 w-5 bg-gray-400" />
                <div className="h-1 w-5 bg-gray-400" />
                <div className="h-1 w-5 bg-gray-400" />
            </div>
        );
    }

    const MClose = () => {
        return (
            <div className="relative h-5 w-5 flex flex-col items-center justify-center gap-2">
                <div className="h-1 w-5 absolute bg-gray-700 rotate-45 rounded-md" />
                <div className="h-1 w-5 absolute bg-gray-700 -rotate-45 rounded-md" />
            </div>
        );
    }

    return (
        <>
            <div className={`absolute w-8 h-8 -top-4 right-0 ${openMenu ? 'bg-white text-gray-700' : 'text-white'} rounded-full flex items-center justify-center`}>
                <button
                    onClick={() => handleOpenMenu()}
                >
                    {openMenu ? <MClose /> : <MHamburger />}
                </button>
            </div>
            <div className={`fixed z-[101] top-14 right-0 bottom-0 left-0 bg-white transition-transform ${!openMenu ? '-translate-x-full' : '-translate-x-0'}`}>
                <div className='px-1'>
                <Link
                    href={route('dashboard')}
                    as="button"
                    className={`flex items-center h-10 p-2 text-sm gap-x-2 text-gray-500 hover:bg-gray-100 px-3 w-full ${route().current('dashboard') && 'bg-gray-100'}`}
                >
                    <AiOutlineDashboard size={20} />
                    <span className="origin-left duration-300">Dashboard</span>
                </Link>
                {auth?.user?.organization_id !== null &&
                    <Link
                        href={route('faturamento')}
                        as="button"
                        className={`flex items-center h-10 p-2 text-sm gap-x-2 text-gray-500 hover:bg-gray-100 px-3 w-full ${route().current('faturamento') && 'bg-gray-100'}`}
                    >
                        <GiReceiveMoney size={20} />
                        <span className="origin-left duration-300">Faturamento</span>
                    </Link>
                }
                {auth?.user?.organization_id === null &&
                    <>
                        <Link
                            href={route('organizations.index')}
                            as="button"
                            className={`flex items-center h-10 p-2 text-sm gap-x-2 text-gray-500 hover:bg-gray-100 px-3 w-full ${route().current('organizations.*') && 'bg-gray-100'}`}
                        >
                            <SlOrganization size={20} />
                            <span className="origin-left duration-300">Organizações</span>
                        </Link>
                        <Link
                            href={route('companies.index')}
                            as="button"
                            className={`flex items-center h-10 p-2 text-sm gap-x-2 text-gray-500 hover:bg-gray-100 px-3 w-full ${route().current('companies.*') && 'bg-gray-100'}`}
                        >
                            <IoIosBusiness size={20} />
                            <span className="origin-left duration-300">Filiais</span>
                        </Link>
                    </>
                }
                <Link
                    href={route('users.index')}
                    as="button"
                    className={`flex items-center h-10 p-2 text-sm gap-x-2 text-gray-500 hover:bg-gray-100 px-3 w-full ${route().current('users.*') && 'bg-gray-100'}`}
                >
                    <FaUsers size={20} />
                    <span className="origin-left duration-300">Usuários</span>
                </Link> 
                <Link
                    href={route('settings.index')}
                    as="button"
                    className={`flex items-center h-10 p-2 text-sm gap-x-2 text-gray-500 hover:bg-gray-100 px-3 w-full ${route().current('settings.*') && 'bg-gray-100'}`}
                >
                    <MdOutlineTune size={20} />
                    <span className="origin-left duration-300">Configurações</span>
                </Link> 
                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className={`flex items-center h-10 p-2 text-sm gap-x-2 text-gray-500 hover:bg-gray-100 px-3 w-full`}
                >
                    <IoExit size={20} />
                    <span className="origin-left duration-300">Sair</span>
                </Link>
                </div>
            </div>
        </>
    );
};

export default MenuButton;