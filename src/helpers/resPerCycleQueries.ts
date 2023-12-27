import { PropsCreateResPerCycleQueries, PropsGetResPerCycleQueries } from "../interfaces/resPerCycle";
import { db } from "../utils/db";

export const getResPerCycleQuery = ({ limit = '10', page = '0', rankFilter = '', cycleFilter, nameFilter = '' }: PropsGetResPerCycleQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const rowsPerPage = parseInt(limit);
            const min = ((parseInt(page) + 1) * rowsPerPage) - rowsPerPage;

            let listResPerCycle = await db.ced_per_ciclo.findMany({
                where: {
                    grado_residente: rankFilter ? { contains: rankFilter } : {},
                    id_ciclo: cycleFilter ? parseInt(cycleFilter) : {},
                    ced_residentes: {
                        OR: [
                            { nombre: { contains: nameFilter } },
                            { paterno: { contains: nameFilter } },
                            { materno: { contains: nameFilter } }
                        ]
                    },
                    deleted_at: null
                },
                select: {
                    id: true,
                    grado_residente: true,
                    id_ciclo: true,
                    ced_residentes: {
                        select: {
                            matricula: true,
                            nombre: true,
                            paterno: true,
                            materno: true,
                            ced_especialidades: {
                                select: {
                                    nombre: true,
                                    codigo: true,
                                    grado_maximo: true
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
            });

            resolve(listResPerCycle);
        } catch (error) {
            reject(error);
        }
    })
}

export const createResPerCycleQuery = ({ grado_residente, id_ciclo, id_residente }: PropsCreateResPerCycleQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const repeated: any = await db.ced_per_ciclo.findFirst({ //check if resident already exists in current cycle
                where: {
                    id_ciclo,
                    id_residente
                }
            });

            if (repeated) {
                resolve({}); //duplicated entry
            } else {
                let record = await db.ced_per_ciclo.create({
                    data: {
                        grado_residente,
                        id_ciclo,
                        id_residente
                    }
                })
                resolve(record);
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const migrateResPerCycleQuery = (id: number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const regs : any = await db.ced_per_ciclo.findMany({
                where: {
                    id_ciclo: id
                },
                select: {
                    grado_residente: true,
                    id_ciclo: true,
                    id_residente: true,
                    ced_residentes: {
                        select: {
                            ced_especialidades: {
                                select: {
                                    nombre: true,
                                    grado_maximo: true
                                }
                            }
                        }
                    }
                }
            });

            const specialties = await db.ced_especialidades.findMany();

            const newPerCycle : any = [];

            Object.keys(regs).map( key => {
                specialties.forEach( sp => {
                    if (regs[key]['ced_residentes']['ced_especialidades']['nombre'] == sp['nombre']) {
                        console.log(regs[key]['grado_residente']);
                        if (regs[key]['grado_residente'] ) {

                        } //pending to compare rankings and create new array with new residents per cycle
                    }
                })
            });
            resolve(true);
        } catch (error) {
            reject(error);
        }
    })
}

export const deleteResPerCycleQuery = (id: number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_per_ciclo.findUnique({
                where: {
                    id: id
                }
            });

            record ? (
                await db.ced_per_ciclo.update({
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