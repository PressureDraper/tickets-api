export interface PropsGetTeachersQueries {
    limit: string,
    page: string,
    enrollmentFilter: string,
    nameFilter: string,
    typeFilter: string,
    statusFilter: string,
    specialtyFilter: string
}

export interface PropsCreateTeachersQueries {
    matricula: number,
    paterno: string,
    materno: string,
    nombre: string,
    tipo_profesor: number,
    correo?: string,
    status: number,
    codigo: number
}

export interface PropsUpdateTeachersQueries {
    matricula?: number,
    paterno?: string,
    materno?: string,
    nombre?: string,
    tipo_profesor?: number,
    correo?: string,
    status?: number,
    teacher_id: number
}