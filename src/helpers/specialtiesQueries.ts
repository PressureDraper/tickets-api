import { db } from "../utils/db";
import { PropsCreateSpecialtyQuery, PropsGetSpecialtiesQuery, PropsGetTotalSpecialtiesQuery, PropsUpdateSpecialtyQuery } from '../interfaces/specialtiesQueries';

export const getSpecialtiesQuery = ({ nameFilter = '', codeFilter = '', rankFilter = '' }: PropsGetSpecialtiesQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listSpecialties: any = await db.ced_especialidades.findMany({
                where: {
                    nombre: nameFilter ? { contains: nameFilter } : {},
                    codigo: codeFilter ? { contains: codeFilter } : {},
                    grado_maximo: rankFilter ? { contains: rankFilter } : {},
                    deleted_at: null
                },
                select: {
                    id: true,
                    nombre: true,
                    codigo: true,
                    grado_maximo: true,
                },
                orderBy: {
                    id: 'asc'
                }
            })

            resolve(listSpecialties);
        } catch (error) {
            reject(error);
        }
    })
}

export const getTotalSpecialtiesQuery = ({ nameFilter = '', codeFilter = '', rankFilter = '' }: PropsGetTotalSpecialtiesQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            let countListSpecialties = await db.ced_especialidades.count({
                where: {
                    nombre: nameFilter ? { contains: nameFilter } : {},
                    codigo: codeFilter ? { contains: codeFilter } : {},
                    grado_maximo: rankFilter ? { contains: rankFilter } : {},
                    deleted_at: null
                }
            })

            countListSpecialties ? (

                resolve(countListSpecialties)

            ) : resolve(0)
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const createSpecialtyQuery = ({ nombre, codigo, grado_maximo }: PropsCreateSpecialtyQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            const repeated: any = await db.ced_especialidades.findFirst({ //check if code or name already exists
                where: {
                    OR: [
                        { nombre },
                        { codigo }
                    ]
                }
            });

            if (repeated) {
                resolve({}); //duplicated entry
            } else {
                let record = await db.ced_especialidades.create({
                    data: {
                        nombre,
                        codigo,
                        grado_maximo
                    }
                })
                resolve(record);
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const updateSpecialtyQuery = ({ nombre, codigo, grado_maximo, specialty_id }: PropsUpdateSpecialtyQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_especialidades.findUnique({
                where: {
                    id: specialty_id
                }
            });

            const repeated: any = await db.ced_especialidades.findFirst({ //check if code or name already exists
                where: {
                    OR: [
                        { nombre },
                        { codigo }
                    ]
                }
            });

            let data;

            record != null && repeated === null ? ( //check if ID exists and data isn't repeated
                await db.ced_especialidades.update({
                    where: {
                        id: specialty_id
                    },
                    data: {
                        nombre,
                        codigo,
                        grado_maximo
                    }
                }),
                data = await db.ced_especialidades.findUnique({
                    where: {
                        id: specialty_id
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

export const deleteSpecialtyQuery = (id: number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_especialidades.findUnique({
                where: {
                    id: id
                }
            });

            record ? (
                await db.ced_especialidades.update({
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