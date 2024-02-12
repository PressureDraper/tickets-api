export interface PropsGetResidentsEvaluationQueries {
    ciclo: string;
    especialidad: string;
    grado: string;
    id: number;
    matricula: number;
    mes: string;
    nombre: string;
}

export interface ArrayResidentsEvaluation {
    data: string;
}

/* Promise<PropsGetResidentsEvaluationQueries[]> */