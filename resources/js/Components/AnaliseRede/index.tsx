import { useAuthContext } from "@/Contexts";

const AnaliseRede = () => {
    const { setFilialAnalise } = useAuthContext();
    const handleAnaliseRede = () => {
        setFilialAnalise(0);
    }

    return (
        <button
        onClick={() => handleAnaliseRede()}
            className="bg-gray-50 rounded-md h-[34px] px-3 border border-white hover:bg-gray-50/80 shadow-md transition-colors duration-300"
        >
            <span className="text-gray-500 font-medium">Analise da Rede</span>
        </button>
    )
}

export default AnaliseRede