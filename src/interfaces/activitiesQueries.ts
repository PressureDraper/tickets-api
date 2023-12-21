export interface PropsGetActivitiesQueries {
    limit: string,
    page: string,
    descriptionFilter: string
}

export interface PropsCreateActivitiesQueries {
    descripcion: string,
    excelente: number,
    bueno: number,
    regular: number,
    deficiente: number,
    muy_deficiente: number
}

export interface PropsUpdateActivitiesQueries {
    descripcion?: string,
    excelente?: number,
    bueno?: number,
    regular?: number,
    deficiente?: number,
    muy_deficiente?: number,
    activity_id: number
}