import { SicaEmployeeQueries } from "../interfaces/sicaEmployeeQueries";
import { db2 } from "../utils/db";

export const getEmployeeQuery = ({ limit = '10', page = '0', nameFilter = '', enrollmentFilter = '' }: SicaEmployeeQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const rowsPerPage = parseInt(limit);
            const min = ((parseInt(page) + 1) * rowsPerPage) - rowsPerPage;

            let listEmployee: any = await db2.rch_empleados.findMany({
                where: {
                    cmp_persona: {
                        OR: [
                            { nombres: { contains: nameFilter } },
                            { primer_apellido: { contains: nameFilter } },
                            { segundo_apellido: { contains: nameFilter } }
                        ]
                    },
                    matricula: enrollmentFilter ? parseInt(enrollmentFilter) : {},
                    deleted_at: null
                },
                select: {
                    id: true,
                    matricula: true,
                    cmp_persona: {
                        select: {
                            nombres: true,
                            primer_apellido: true,
                            segundo_apellido: true,
                            curp: true,
                            rfc: true,
                            cmp_contactos: {
                                select: {
                                    descripcion: true,
                                    tipo: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    id: 'desc'
                },
                skip: min,
                take: rowsPerPage
            })

            resolve(listEmployee);
        } catch (error) {
            reject(error);
        }
    })
}