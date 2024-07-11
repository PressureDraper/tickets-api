import { PropsCreateResidentsQueries, PropsGetResidentsQueries, PropsUpdateResidentsQueries } from "../interfaces/residentsQueries";
import { db } from "../utils/db";

export const getResidentsQuery = ({ limit = '10', page = '0', enrollmentFilter, nameFilter = '', rfcFilter = '', statusFilter = '', specialtyFilter = '' }: PropsGetResidentsQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const rowsPerPage = parseInt(limit);
            const min = ((parseInt(page) + 1) * rowsPerPage) - rowsPerPage;

            let listResidents = await db.ced_residentes.findMany({
                where: {
                    matricula: enrollmentFilter ? parseInt(enrollmentFilter) : {},
                    OR: [
                        { nombre: { contains: nameFilter } },
                        { paterno: { contains: nameFilter } },
                        { materno: { contains: nameFilter } }
                    ],
                    rfc: rfcFilter ? { contains: rfcFilter } : {},
                    /* status: 1, */ //activos
                    ced_especialidades: {
                        codigo: specialtyFilter ? specialtyFilter : {}
                    }
                },
                select: {
                    id: true,
                    matricula: true,
                    nombre: true,
                    paterno: true,
                    materno: true,
                    telefono: true,
                    curp: true,
                    rfc: true,
                    correo: true,
                    status: true,
                    ced_especialidades: { select: { nombre: true, codigo: true } }
                },
                orderBy: {
                    id: "desc"
                },
                skip: min,
                take: rowsPerPage
            });

            resolve(listResidents);
        } catch (error) {
            reject(error);
        }
    })
}

export const createResidentsQuery = ({ matricula, paterno, materno, nombre, telefono, curp, rfc, correo, status, codigo }: PropsCreateResidentsQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const repeated: any = await db.ced_residentes.findFirst({ //check if resident already exists
                where: {
                    OR: [
                        { matricula },
                        { curp },
                        { correo }
                    ]
                }
            });

            const code: any = await db.ced_especialidades.findFirst({
                where: {
                    codigo: codigo.toString()
                },
                select: {
                    id: true
                }
            });

            const { id } = code;

            if (repeated) {
                resolve({}); //duplicated entry
            } else {
                let record = await db.ced_residentes.create({
                    data: {
                        matricula,
                        paterno,
                        materno,
                        nombre,
                        telefono,
                        curp,
                        rfc,
                        correo,
                        status,
                        id_especialidad: id
                    }
                })
                resolve(record);
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const updateResidentQuery = ({ matricula, paterno, materno, nombre, telefono, curp, rfc, correo, status, resident_id }: PropsUpdateResidentsQueries) => {
    return new Promise(async (resolve, reject) => {
        try {

            const record = await db.ced_residentes.findUnique({
                where: {
                    id: resident_id
                }
            });

            const repeated: any = await db.ced_residentes.findFirst({ //check if registry already exists
                where: {
                    OR: [
                        { matricula },
                        { curp },
                        { rfc }
                    ]
                }
            });

            let data;

            record != null && repeated === null ? ( //check if ID exists and data isn't repeated
                await db.ced_residentes.update({
                    where: {
                        id: resident_id
                    },
                    data: {
                        matricula,
                        paterno,
                        materno,
                        nombre,
                        telefono,
                        curp,
                        rfc,
                        correo,
                        status
                    }
                }),
                data = await db.ced_residentes.findUnique({
                    where: {
                        id: resident_id
                    }
                }),
                resolve([true, data])

            ) : (
                resolve([false, data])
            )
        } catch (error) {
            reject(error);
        }
    })
}

export const deleteResidentQuery = (id: number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_residentes.findUnique({
                where: {
                    id: id
                }
            });

            record ? (
                await db.ced_residentes.update({
                    where: {
                        id
                    },
                    data: {
                        deleted_at: new Date().toISOString()
                    }
                }),

                resolve(true)

            ) : resolve(false);
        } catch (error) {
            reject(error);
        }
    })
}