export interface PropsGetModulesQuery {
    limit: string,
    page: string,
    moduleFilter: string,
    rankFilter: string
}

export interface PropsGetTotalModulesQuery {
    moduleFilter: string,
    rankFilter: string
}

export interface PropsCreateModuleQuery {
    modulo: string,
    grado: string
}

export interface PropsUpdateModuleQuery {
    modulo?: string,
    grado?: string,
    module_id: number
}