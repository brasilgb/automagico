export const MoneyptBR = (value: any) => {
    return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(isNaN(value)?0:value)
}

export const ValuePercent = (value:any) => {
    return `${(parseFloat(isNaN(value)?0:value).toFixed(2)).replace('.',',')}%`;
}