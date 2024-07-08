import { useAuthContext } from "@/Contexts";
import DatePicker, { DayValue } from "@hassanmojab/react-modern-calendar-datepicker"
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import moment from "moment";
import React, { useEffect } from 'react'
import { CustomLocale } from "./LocaleCalendar";
import { IoHome, IoReload } from "react-icons/io5";

interface DatePickerProps {
  
    route: string;
}

const DatePickerSingle = (props: DatePickerProps) => {

    const {
        setDataFiltro,
        dataFiltro,
        filialAnalise,
        setFilialAnalise,
        selectedDay, 
        setSelectedDay
    } = useAuthContext();
    
    const formatInputValue = () => {
        if (!selectedDay) return '';
        return `${('0' + selectedDay.day).slice(-2) + '/' + ('0' + selectedDay.month).slice(-2) + '/' + selectedDay.year}`;
    };

    useEffect(() => {
        if (selectedDay) {
            setDataFiltro(
                moment(
                    selectedDay?.year + '-' + selectedDay?.month + '-' + selectedDay?.day,
                    'YYYY-MM-DD'
                ).toDate()
            );
        }
    }, [selectedDay, setDataFiltro, filialAnalise]);

    const handleSelectedDay = () => {
        setDataFiltro(moment().format("YYYY-MM-DD"));
        setSelectedDay({
            "day": parseInt(moment().format("DD")),
            "month": parseInt(moment().format("MM")),
            "year": parseInt(moment().format("YYYY"))
        });
        setFilialAnalise(1);
    }

    return (
        <div className="flex">
            {/* <Link
                href={route(props.route)}
                className="text-sm p-1 font-bold bg-gray-50 rounded-md shadow-md border border-white text-gray-500 mr-1 cursor-pointer">
                <IoHome size={22} />
            </Link> */}
            <div className="text-sm p-1 font-bold bg-gray-50 rounded-md shadow-md border border-white text-gray-500 mr-1 cursor-pointer">
                <IoReload size={22} onClick={() => handleSelectedDay()} />
            </div>
            <DatePicker
                value={selectedDay}
                onChange={setSelectedDay}
                inputPlaceholder={`${moment(dataFiltro).format("DD/MM/YYYY")}`} // placeholder
                formatInputText={formatInputValue} // format value
                inputClassName="w-32 !text-sm !font-bold !bg-gray-50 !rounded-md !shadow-md !border !border-white !text-gray-500" // custom class
                calendarClassName="responsive-calendar"
                shouldHighlightWeekends
                locale={CustomLocale}
            />
        </div>
    )
}

export default DatePickerSingle