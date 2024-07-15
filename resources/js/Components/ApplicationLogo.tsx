import { usePage } from "@inertiajs/react";
interface ApplicationLogoProps {
    className?: string;
}
const ApplicationLogo = ({ className }: ApplicationLogoProps) => {
    const { settings } = usePage().props as any;

    return (

            <img
            className={className}
                src={`/storage/images/${settings?.logo ? settings?.logo : "default.png"}`}
                alt="Logo"
            />
 
    );
};

export default ApplicationLogo;