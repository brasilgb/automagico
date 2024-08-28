import { useAuthContext } from "@/Contexts";
import { PiNetwork, PiShareNetworkBold, PiStorefrontBold } from "react-icons/pi";
const AnaliseRede = () => {
    const { setFilialAnalise, filialAnalise } = useAuthContext();

    const handleAnaliseRede = (value: number) => {
        setFilialAnalise(value);
    }

    return (
        <>
            {filialAnalise > 0
                ? <button
                    onClick={() => handleAnaliseRede(0)}
                    className="bg-gray-50 text-gray-500 flex items-center gap-2 rounded px-3 py-1 border-2 border-white hover:bg-gray-50/80 shadow-md transition-colors duration-300"
                >
                    <PiShareNetworkBold size={20} />
                    <span className="font-medium hidden md:block">Analise da Rede</span>
                </button>
                : <button
                    onClick={() => handleAnaliseRede(1)}
                    className="bg-gray-50 text-gray-500 flex items-center gap-2 rounded px-3 py-1 border-2 border-white hover:bg-gray-50/80 shadow-md transition-colors duration-300"
                >
                    <PiStorefrontBold size={20} />
                    <span className="font-medium hidden md:block">Analise da Filial</span>
                </button>
            }
        </>
    )
}

export default AnaliseRede