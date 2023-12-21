import { toString } from "express-validator/src/utils";
import { PropsCreateResidentsQueries, PropsGetResidentsQueries } from "../interfaces/residentsQueries";
import { db } from "../utils/db";

export const getResidentsQuery = ({ limit = '10', page = '0', enrollmentFilter, nameFilter = '', rfcFilter = '', statusFilter = '', specialtyFilter = '' }: PropsGetResidentsQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const rowsPerPage = parseInt(limit);
            const min = ((parseInt(page) + 1) * rowsPerPage) - rowsPerPage;

            let listResidents = await db.ced_residentes.findMany({
                where: {
                    matricula: enrollmentFilter ? parseInt(enrollmentFilter) : {},
                    nombre: nameFilter ? { contains: nameFilter } : {},
                    rfc: rfcFilter ? { contains: rfcFilter } : {},
                    status: statusFilter ? parseInt(statusFilter) : {},
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
            const repeated: any = await db.ced_residentes.findFirst({ //check if enrollment already exists
                where: {
                    OR: [
                        { matricula },
                        { curp },
                        { rfc }
                    ]
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