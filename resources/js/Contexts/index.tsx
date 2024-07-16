import apiautomagico from "@/bootstrap";
import { DayRange, DayValue } from "@hassanmojab/react-modern-calendar-datepicker";
import { usePage } from "@inertiajs/react";
import moment, { now } from "moment";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({} as any);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [dataFiltro, setDataFiltro] = useState<any>(moment().format("YYYY-MM-DD"));
    const [alteredAnalise, setAlteredAnalise] = useState<string>('faturamento');
    const [filialAnalise, setFilialAnalise] = useState('1');
    const [selectedDay, setSelectedDay] = useState<DayValue>(null);

    // const [ settingsUser, setSettingsUser] = useState<any>([]);
    // const [ settingsOrg, setSettingsOrg] = useState<any>();
    //     useEffect(() => {
    //         const getSettingsUser = async () => {
    //             await apiautomagico.get(`settings?org=${settingsOrg}`)
    //             .then((result) => {
    //                 setSettingsUser(result.data.response);
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             })
    //         };
    //         getSettingsUser();
    //     }, [settingsOrg]);

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
                setFilialAnalise,
                selectedDay, 
                setSelectedDay
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => useContext(AuthContext);