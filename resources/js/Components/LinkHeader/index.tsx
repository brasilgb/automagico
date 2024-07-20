import { Link, usePage } from '@inertiajs/react'
import React from 'react'

interface LinkHeaderProps {
    label: string;
    url: string;
    active: boolean;
    icon?: any;
}

const LinkHeader = (props: LinkHeaderProps) => {
    const { auth } = usePage().props as any;
    return (
        <Link
            style={{
                backgroundColor: props.active ? auth.settings?.buttonbgactive ? auth.settings?.buttonbgactive : '#67821d' : auth.settings?.buttonbg ? auth.settings?.buttonbg : '#a0bc53',
                color: props.active ? auth.settings?.buttontextactive ? auth.settings?.buttontextactive : '#FFFFFF' : auth.settings?.buttontext ? auth.settings?.buttontext : '#FFFFFF'
            }}
            href={route(props.url)}
            className={`flex items-center gap-2 border-2 border-gray-50 shadow uppercase font-semibold text-xs text-center rounded-md py-2 px-3 duration-300`}
        >
            {props.icon}
            {props.label}
        </Link>
    )
}

export default LinkHeader