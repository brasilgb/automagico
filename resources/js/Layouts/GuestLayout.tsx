import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
                {children}
        </div>
    );
}
