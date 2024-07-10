export interface PropsGetResPerCycleQueries {
    page: string,
    limit: string,
    rankFilter: string,
    cycleFilter: string,
    nameFilter: string,
    enrollmentFilter: string,
    specialtyFilter: string
}

export interface PropsGetTotalResPerCycleQueries {
    cycleFilter: string;
    specialtyFilter: string;
    enrollmentFilter: string;
    nameFilter: string;
    rankFilter: string;
}

export interface PropsCreateResPerCycleQueries {
    grado_residente: string,
    id_ciclo: number,
    id_residente: number
}

export interface PropsUpdateResPerCycleQueries {
    grado_residente?: string,
    id_ciclo?: number,
    id_residente?: number,
    percycle_id: number
}