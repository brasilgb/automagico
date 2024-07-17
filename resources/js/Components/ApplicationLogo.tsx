import { usePage } from "@inertiajs/react";
interface ApplicationLogoProps {
    className?: string;
    settings?: any;
}
const ApplicationLogo = ({ className, settings }: ApplicationLogoProps) => {
 
    return (

            <img
            className={className}
                src={`/storage/images/${settings?.logo ? settings?.logo : "default.png"}`}
                alt="Logo"
            />
 
    );
};

export default ApplicationLogo;