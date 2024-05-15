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

export interface PropsGetResidentsPerStatusQueries {
    status: string;
    mes: string;
    ciclo: string;
    especialidad: string
}