import { db } from "../utils/db";
import { PropsCreateActivitiesQueries, PropsGetActivitiesQueries, PropsUpdateActivitiesQueries } from '../interfaces/activitiesQueries';

export const getActivitiesQuery = ({ page = '0', limit = '10', descriptionFilter = '' }: PropsGetActivitiesQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const rowsPerPage = parseInt(limit);
            const min = ((parseInt(page) + 1) * rowsPerPage) - rowsPerPage;

            let listActivities = await db.ced_actividades.findMany({
                where: {
                    descripcion: descriptionFilter ? { contains: descriptionFilter } : {},
                    deleted_at: null
                },
                select: {
                    id: true,
                    descripcion: true,
                    excelente: true,
                    bueno: true,
                    regular: true,
                    deficiente: true,
                    muy_deficiente: true
                },
                orderBy: {
                    id: "asc"
                },
                skip: min,
                take: rowsPerPage
            });

            resolve(listActivities);
        } catch (error) {
            reject(error);
        }
    })
}

export const getActivityQuery = (id: number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const activity: any = await db.ced_actividades.findUnique({
                where: {
                    id
                }
            });

            if (activity) {
                resolve(activity);
            } else {
                resolve({}); //registry not found
            }
        }
        catch (error) {
            reject(error);
        }
    });
}

export const createActivityQuery = ({descripcion, excelente, bueno, regular, deficiente, muy_deficiente} : PropsCreateActivitiesQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const repeated: any = await db.ced_actividades.findFirst({ //check if cycle already exists
                where: {
                    descripcion,
                    deleted_at: null
                }
            });

            if (repeated) {
                resolve({}); //duplicated entry
            } else {
                let record = await db.ced_actividades.create({
                    data: {
                        descripcion,
                        excelente,
                        bueno,
                        regular,
                        deficiente,
                        muy_deficiente
                    }
                })
                resolve(record);
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const updateActivityQuery = ({ descripcion, excelente, bueno, regular, deficiente, muy_deficiente, activity_id }: PropsUpdateActivitiesQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_actividades.findUnique({
                where: {
                    id: activity_id
                }
            });

            const repeated: any = await db.ced_actividades.findFirst({ //check if description already exists
                where: {
                    descripcion
                }
            });

            let data;

            record != null && repeated === null ? ( //check if ID exists and data isn't repeated
                await db.ced_actividades.update({
                    where: {
                        id: activity_id
                    },
                    data: {
                        descripcion,
                        excelente,
                        bueno,
                        regular,
                        deficiente,
                        muy_deficiente
                    }
                }),
                data = await db.ced_actividades.findUnique({
                    where: {
                        id: activity_id
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

export const deleteActivityQuery = (id: number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_actividades.findUnique({
                where: {
                    id: id
                }
            });

            record ? (
                await db.ced_actividades.update({
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