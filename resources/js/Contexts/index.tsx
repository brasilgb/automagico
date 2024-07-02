import { DayRange } from "@hassanmojab/react-modern-calendar-datepicker";
import moment, { now } from "moment";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({} as any);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    // const [dataInicial, setDataInicial] = useState(new Date());
    // const [dataFinal, setDataFinal] = useState(new Date());
    const [dataFiltro, setDataFiltro] = useState<any>(moment().format("YYYY-MM-DD"));
    const [alteredAnalise, setAlteredAnalise] = useState<string>('faturamento');
    const [filialAnalise, setFilialAnalise] = useState('1');
    
    // const [executeRange, setExecuteRange] = useState<boolean>(false);
    // const [selectedRange, setSelectedRange] = useState<DayRange>({
    //     from: {
    //       year: parseInt(moment(dataInicial).format('YYYY')),
    //       month: parseInt(moment(dataInicial).format('MM')),
    //       day: parseInt(moment(dataInicial).format('DD')),
    //     },
    //     to: {
    //       year: parseInt(moment(dataFinal).format('YYYY')),
    //       month: parseInt(moment(dataFinal).format('MM')),
    //       day: parseInt(moment(dataFinal).format('DD')),
    //     },
    //   });

    return (
        <AuthContext.Provider
            value={{
                // dataInicial,
                // setDataInicial,
                // dataFinal,
                // setDataFinal,
                // selectedRange,
                // setSelectedRange,
                dataFiltro,
                setDataFiltro,
                // executeRange, 
                // setExecuteRange,
                alteredAnalise, 
                setAlteredAnalise,
                filialAnalise, 
                setFilialAnalise
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => useContext(AuthContext);