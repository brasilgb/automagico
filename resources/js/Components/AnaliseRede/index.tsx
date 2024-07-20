import { useAuthContext } from "@/Contexts";
import { PiNetwork, PiShareNetworkBold } from "react-icons/pi";
const AnaliseRede = () => {
    const { setFilialAnalise } = useAuthContext();
    const handleAnaliseRede = () => {
        setFilialAnalise(0);
    }

    return (
        <button
        onClick={() => handleAnaliseRede()}
            className="bg-gray-50 text-gray-500 flex items-center gap-2 rounded px-3 py-1 border-2 border-white hover:bg-gray-50/80 shadow-md transition-colors duration-300"
        >
            <PiShareNetworkBold size={20} />
            <span className="font-medium hidden md:block">Analise da Rede</span>
        </button>
    )
}

export default AnaliseRede