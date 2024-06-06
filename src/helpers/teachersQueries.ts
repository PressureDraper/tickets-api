import { toString } from "express-validator/src/utils";
import { PropsCreateTeachersQueries, PropsGetTeachersQueries, PropsUpdateTeachersQueries } from "../interfaces/teachersQueries";
import { db } from "../utils/db";

export const getTeachersQuery = ({ limit = '10', page = '0', enrollmentFilter, nameFilter = '', typeFilter, statusFilter, specialtyFilter = '' }: PropsGetTeachersQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const rowsPerPage = parseInt(limit);
            const min = ((parseInt(page) + 1) * rowsPerPage) - rowsPerPage;

            let listTeachers = await db.ced_docentes.findMany({
                where: {
                    matricula: enrollmentFilter ? parseInt(enrollmentFilter) : {},
                    OR: [
                        { nombre: { contains: nameFilter } },
                        { paterno: { contains: nameFilter } },
                        { materno: { contains: nameFilter } }
                    ],
                    tipo_profesor: typeFilter ? parseInt(typeFilter) : {},
                    status: statusFilter ? parseInt(statusFilter) : {},
                    ced_especialidades: {
                        codigo: specialtyFilter ? specialtyFilter : {}
                    },
                    deleted_at: null
                },
                select: {
                    id: true,
                    matricula: true,
                    nombre: true,
                    paterno: true,
                    materno: true,
                    tipo_profesor: true,
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

            resolve(listTeachers);
        } catch (error) {
            reject(error);
        }
    });
}

export const createTeachersQuery = ({ matricula, paterno, materno, nombre, tipo_profesor, correo, status, codigo }: PropsCreateTeachersQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const repeated: any = await db.ced_docentes.findFirst({ //check if enrollment already exists
                where: {
                    matricula
                }
            });

            const code: any = await db.ced_especialidades.findFirst({
                where: {
                    codigo: toString(codigo)
                },
                select: {
                    id: true
                }
            });

            const { id } = code;

            if (repeated) {
                resolve({}); //duplicated entry
            } else {
                let record = await db.ced_docentes.create({
                    data: {
                        matricula,
                        paterno,
                        materno,
                        nombre,
                        tipo_profesor,
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
    });
}

export const updateTeacherQuery = ({ matricula, paterno, materno, nombre, tipo_profesor, correo, status, teacher_id }: PropsUpdateTeachersQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_docentes.findUnique({
                where: {
                    id: teacher_id
                }
            });

            let data;

            record != null ? ( //check if ID exists and data isn't repeated
                await db.ced_docentes.update({
                    where: {
                        id: teacher_id
                    },
                    data: {
                        matricula,
                        paterno,
                        materno,
                        nombre,
                        tipo_profesor,
                        correo,
                        status
                    }
                }),
                data = await db.ced_docentes.findUnique({
                    where: {
                        id: teacher_id
                    }
                }),
                resolve([true, data])

            ) : (
                resolve([false, data])
            )
        } catch (error) {
            reject(error);
        }
    });
}

export const deleteTeacherQuery = (id: number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_docentes.findUnique({
                where: {
                    id: id
                }
            });

            record ? (
                await db.ced_docentes.update({
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