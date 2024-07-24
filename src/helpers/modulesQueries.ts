import moment from "moment";
import { PropsCreateModuleQuery, PropsGetModulesQuery, PropsGetTotalModulesQuery, PropsUpdateModuleQuery } from "../interfaces/modulesQueries";
import { db } from "../utils/db";

export const getModulesQuery = ({ page = '0', limit = '10', moduleFilter = '', rankFilter = '' }: PropsGetModulesQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            const rowsPerPage = parseInt(limit);
            const min = ((parseInt(page) + 1) * rowsPerPage) - rowsPerPage;

            let listModules: any = await db.ced_modulo.findMany({
                where: {
                    modulo: moduleFilter ? { contains: moduleFilter } : {},
                    grado: rankFilter ? { contains: rankFilter } : {},
                    deleted_at: null
                },
                select: {
                    id: true,
                    modulo: true,
                    grado: true
                },
                orderBy: {
                    id: 'asc'
                },
                skip: min,
                take: rowsPerPage
            });

            resolve(listModules);
        } catch (error) {
            reject(error);
        }
    })
}

export const getTotalModulesQuery = ({ moduleFilter = '', rankFilter = '' }: PropsGetTotalModulesQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            let countListModules = await db.ced_modulo.count({
                where: {
                    modulo: moduleFilter ? { contains: moduleFilter } : {},
                    grado: rankFilter ? { contains: rankFilter } : {},
                    deleted_at: null
                }
            })

            countListModules ? (

                resolve(countListModules)

            ) : resolve(0)
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const createModuleQuery = ({ modulo, grado }: PropsCreateModuleQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            const repeated: any = await db.ced_modulo.findFirst({ //check if name already exists
                where: {
                    modulo
                }
            });

            if (repeated) {
                resolve({}); //duplicated entry
            } else {
                let record = await db.ced_modulo.create({
                    data: {
                        modulo,
                        grado,
                        created_at: moment.utc().subtract(6, 'hour').toISOString(),
                        updated_at: moment.utc().subtract(6, 'hour').toISOString()
                    }
                })
                resolve(record);
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const updateModuleQuery = ({ modulo, grado, module_id }: PropsUpdateModuleQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_modulo.findUnique({
                where: {
                    id: module_id
                }
            });

            let repeated;

            repeated != undefined ? (
                repeated = await db.ced_modulo.findFirst({ //check if description already exists
                    where: {
                        modulo
                    }
                })
            ) : repeated = null

            let data;

            record != null && repeated === null ? ( //check if ID exists and data isn't repeated
                await db.ced_modulo.update({
                    where: {
                        id: module_id
                    },
                    data: {
                        modulo,
                        grado,
                        updated_at: moment.utc().subtract(6, 'hour').toISOString()
                    }
                }),
                data = await db.ced_modulo.findUnique({
                    where: {
                        id: module_id
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

export const deleteModuleQuery = (id: number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_modulo.findUnique({
                where: {
                    id: id
                }
            });

            record ? (
                await db.ced_modulo.update({
                    where: {
                        id
                    },
                    data: {
                        deleted_at: moment.utc().subtract(6, 'hour').toISOString()
                    }
                }),

                resolve(true)

            ) : resolve(false);
        } catch (error) {
            reject(error);
        }
    })
}