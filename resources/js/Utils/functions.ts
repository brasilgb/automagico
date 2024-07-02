const statusUserByValue = (value: any) => {
    switch (value) {
        case 1:
            return "Ativo";
        case 2:
            return "Inativo";
    }
};

const roleUserByValue = (value: any) => {
    switch (value) {
        case 1:
            return "Administrador";
        case 2:
            return "Usuário";
        case 3:
            return "Técnico";
    }
};

const statusValueByLabel = (value: any) => {
    switch (value) {
        case 'active':
            return "Ativo";
        case 'waiting':
            return "Aguardando";
        case 'suspended':
            return "Suspenso";
        case 'canceled':
            return "Cancelado";
    }
};

const colorsStatus = (status: string) => {
    switch (status) {
        case 'active':
            return "bg-green-600";
        case 'waiting':
            return "bg-sky-600";
        case 'suspended':
            return "bg-orange-600";
        case 'canceled':
            return "bg-red-600";
    }
}


export {
    statusUserByValue,
    roleUserByValue,
    statusValueByLabel,
    colorsStatus
};
