export interface PropsGetSpecialtiesQuery {
    limit: string,
    page: string,
    nameFilter: string,
    codeFilter: string,
    rankFilter: string
}

export interface PropsGetTotalSpecialtiesQuery {
    nameFilter: string,
    codeFilter: string,
    rankFilter: string
}

export interface PropsCreateSpecialtyQuery {
    nombre: string,
    codigo: string,
    grado_maximo: string
}

export interface PropsUpdateSpecialtyQuery {
    nombre?: string,
    codigo?: string,
    grado_maximo?: string
    specialty_id: number
}