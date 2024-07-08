import { Link } from '@inertiajs/react'
import React from 'react'

interface LinkHeaderProps {
    label: string;
    url: string;
    active: boolean;
    icon?: any;
}

const LinkHeader = (props: LinkHeaderProps) => {
    return (
        <Link
            href={route(props.url)}
            className={`flex items-center gap-2 ${props.active ? 'bg-automa-green-primary/90 text-white' : 'bg-automa-green-primary/70 text-gray-50/70 border-automa-green-terciary'} border border-gray-100 uppercase font-semibold text-xs text-center rounded-md py-2 px-3 hover:bg-automa-green-secundary/80 hover:text-gray-200 duration-300`}
        >
            {props.icon}
            {props.label}
        </Link>
    )
}

export default LinkHeader