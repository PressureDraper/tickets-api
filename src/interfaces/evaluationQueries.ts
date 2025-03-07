export interface PropsGetEvaluationQueries {
    page: string,
    limit: string,
    residentidFilter: string,
    nameFilter: string,
    monthFilter: string,
    moduleFilter: string,
    enrollmentFilter: string,
    cycleFilter: string,
    cluePending: string,
    specialtyFilter: string
}

export interface PropsGetTotalEvaluationsQuery {
    residentidFilter: string,
    enrollmentFilter: string
}

export interface PropsGetInfoEvaluationQuery {
    cycleFilter: string,
    specialtyFilter: string,
    periodidFilter: string
}

export interface PropsMailerQuery {
    ciclo: string,
    mes: string,
    especialidad: string
}

export interface PropsCreateEvaluationQueries {
    grado_residente: string,
    act_1?: number,
    act_2?: number,
    act_3?: number,
    act_4?: number,
    act_5?: number,
    act_6?: number,
    act_7?: number,
    act_8?: number,
    act_9?: number,
    act_10?: number,
    act_11?: number,
    act_12?: number,
    act_13?: number,
    act_14?: number,
    act_15?: number,
    act_16?: number,
    total?: number,
    pendiente: 0 | 1,
    en_rotacion: 0 | 1,
    faltas?: string,
    fec_ord?: Date,
    ex_ord?: number,
    fec_extra?: Date,
    ex_extra?: number,
    observaciones?: string,
    enviado?: number,
    visto?: number,
    fec_visto?: Date,
    id_clue?: number | null,
    id_residente: number,
    id_periodo: number,
    id_modulo: number,
    id_docentes: number[]
}

export interface PropsUpdateEvaluationQueries {
    grado_residente?: string,
    act_1?: number,
    act_2?: number,
    act_3?: number,
    act_4?: number,
    act_5?: number,
    act_6?: number,
    act_7?: number,
    act_8?: number,
    act_9?: number,
    act_10?: number,
    act_11?: number,
    act_12?: number,
    act_13?: number,
    act_14?: number,
    act_15?: number,
    act_16?: number,
    total?: number,
    pendiente: 0 | 1,
    en_rotacion: 0 | 1,
    faltas?: string,
    fec_ord?: Date,
    ex_ord?: number,
    fec_extra?: Date,
    ex_extra?: number,
    observaciones?: string,
    enviado?: number,
    visto?: number,
    fec_visto?: Date,
    id_clue?: number | null,
    id_residente?: number,
    id_periodo?: number,
    id_modulo?: number,
    id_docentes?: number[]
    evaluation_id: number
}
