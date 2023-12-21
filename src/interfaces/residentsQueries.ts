export interface PropsGetResidentsQueries {
    limit: string,
    page: string,
    enrollmentFilter: string,
    nameFilter: string,
    rfcFilter: string
    statusFilter: string,
    specialtyFilter: string
}

export interface PropsCreateResidentsQueries {
    matricula: number,
    paterno: string,
    materno: string,
    nombre: string,
    telefono?: string,
    curp: string,
    rfc?: string,
    correo?: string,
    status: number,
    codigo: number
}

export interface PropsUpdateResidentsQueries {
    matricula?: number,
    paterno?: string,
    materno?: string,
    nombre?: string,
    telefono?: string,
    curp?: string,
    rfc?: string,
    correo?: string,
    status?: number,
    codigo?: number,
    resident_id: number
}