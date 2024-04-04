import { PropsCreateResPerCycleQueries, PropsGetResPerCycleQueries, PropsGetTotalResPerCycleQueries, PropsUpdateResPerCycleQueries } from "../interfaces/resPerCycleQueries";
import { db } from "../utils/db";
import { migrateCycle } from "./migrateResidents";

export const getResPerCycleQuery = ({ limit = '10', page = '0', rankFilter = '', cycleFilter, nameFilter = '', enrollmentFilter, specialtyFilter = '' }: PropsGetResPerCycleQueries) => {
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
                        ],
                        matricula: enrollmentFilter ? parseInt(enrollmentFilter) : {},
                        ced_especialidades: {
                            nombre: specialtyFilter ? {contains: specialtyFilter} : {}
                        },
                        status: 1 //active ones
                    },
                    deleted_at: null
                },
                select: {
                    id: true,
                    grado_residente: true,
                    id_ciclo: true,
                    ced_residentes: {
                        select: {
                            id: true,
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

export const getTotalResPerCycle = ({ cycleFilter, specialtyFilter = '' }: PropsGetTotalResPerCycleQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            let countListRes = await db.ced_per_ciclo.count({
                where: {
                    id_ciclo: cycleFilter ? parseInt(cycleFilter) : {},
                    ced_residentes: {
                        ced_especialidades: {
                            nombre: specialtyFilter ? { contains: specialtyFilter } : {}
                        },
                        status: 1 //active
                    },
                    deleted_at: null
                }
            })

            countListRes ? (

                resolve(countListRes)

            ) : resolve(0)
        } catch (error) {
            console.log(error);
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
            const regs: any = await db.ced_per_ciclo.findMany({
                where: {
                    id_ciclo: id,
                    deleted_at: null
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

            const newRes = migrateCycle(regs);

            if (newRes.length != 0) { //verify there are residents to migrate
                let repeated: any = await db.ced_per_ciclo.findFirst({
                    where: {
                        id_ciclo: id + 1,
                        id_residente: newRes[0]['id_residente']
                    }
                });

                regs.length != 0 && !repeated ? ( //verify current cycle do exists and migration hasn't been performed
                    newRes.forEach(async (elm: any) => {
                        await db.ced_per_ciclo.create({
                            data: {
                                grado_residente: elm['grado_residente'],
                                id_ciclo: id + 1,
                                id_residente: elm['id_residente']
                            }
                        })
                    }),
                    resolve(true)
                ) : resolve(false);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const updateResPerCycleQuery = ({ grado_residente, id_ciclo, id_residente, percycle_id }: PropsUpdateResPerCycleQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_per_ciclo.findUnique({
                where: {
                    id: percycle_id
                }
            });

            let data;

            record != null ? ( //check if ID exists
                await db.ced_per_ciclo.update({
                    where: {
                        id: percycle_id
                    },
                    data: {
                        grado_residente,
                        id_ciclo: id_ciclo,
                        id_residente: id_residente
                    }
                }),
                data = await db.ced_per_ciclo.findUnique({
                    where: {
                        id: percycle_id
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