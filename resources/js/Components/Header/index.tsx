import { Link, usePage } from "@inertiajs/react"
import ApplicationLogo from "../ApplicationLogo"
import LinkHeader from "../LinkHeader"
import MenuButton from "../MenuButton"
import Profile from "../Profile"
import { AiOutlineDashboard } from "react-icons/ai"
import { GiReceiveMoney } from "react-icons/gi"
import { SlOrganization } from "react-icons/sl"
import { IoIosBusiness } from "react-icons/io"
import { FaUsers } from "react-icons/fa6"
import { MdOutlineTune } from "react-icons/md"

const Header = () => {
    const { auth } = usePage().props as any;

    return (
        <header
            style={{ backgroundColor: auth.settings?.headerbg ? auth.settings?.headerbg : '#FFFFFF', color: auth.settings?.headertext ? auth.settings?.headertext : '#FFFFFF' }}
            className='flex items-center justify-between h-14 px-2 shadow-sm  sticky top-0 z-40'>
            <div className="flex items-center justify-between w-full">
                <div className="mr-8">
                    <Link
                        href={route('dashboard')}
                    >
                        <ApplicationLogo className="object-contain h-10 w-auto" settings={auth.settings} />
                    </Link>
                </div>
                <div className="flex-1 md:flex hidden items-center justify-start gap-4">
                    <LinkHeader label="Dashboard" url="dashboard" active={route().current('dashboard')} icon={<AiOutlineDashboard size={20} />} />
                    {auth?.user?.organization_id === null &&
                        <>
                            <LinkHeader label="Organizações" active={route().current('organizations.*')} url="organizations.index" icon={<SlOrganization size={20} />} />
                            <LinkHeader label="Filiais" active={route().current('companies.*')} url="companies.index" icon={<IoIosBusiness size={20} />} />
                        </>
                    }
                    {auth?.user?.organization_id !== null &&
                        <LinkHeader label="Faturamento" active={route().current('faturamento')} url="faturamento" icon={<GiReceiveMoney size={20} />} />
                    }
                </div>
                <div className="flex items-center justify-end">
                    <div className="relative md:hidden">
                        <MenuButton />
                    </div>
                    <div className="hidden md:flex gap-4">
                        <LinkHeader label="Configurações" url="settings.index" active={route().current('settings.index')} icon={<MdOutlineTune size={20} />} />
                        <LinkHeader label="Usuários" url="users.index" active={route().current('users.*')} icon={<FaUsers size={20} />} />
                    </div>
                    <Profile />
                </div>
            </div>
        </header>
    )
}

export default Header