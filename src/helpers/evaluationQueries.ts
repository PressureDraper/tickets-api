import { PropsCreateEvaluationQueries, PropsGetEvaluationQueries, PropsGetTotalEvaluationsQuery, PropsUpdateEvaluationQueries } from '../interfaces/evaluationQueries';
import { db } from "../utils/db";

export const getEvaluationQuery = ({ page = '0', limit = '10', residentidFilter, nameFilter = '', monthFilter, moduleFilter, enrollmentFilter = '', cycleFilter = '', cluePending }: PropsGetEvaluationQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const rowsPerPage = parseInt(limit);
            const min = ((parseInt(page) + 1) * rowsPerPage) - rowsPerPage;

            let listEvaluation;

            if (cluePending == 'false') {
                listEvaluation = await db.ced_evaluacion.findMany({
                    where: {
                        id_residente: residentidFilter ? parseInt(residentidFilter) : {},
                        ced_residentes: {
                            OR: [
                                { nombre: { contains: nameFilter } },
                                { paterno: { contains: nameFilter } },
                                { materno: { contains: nameFilter } }
                            ],
                            matricula: enrollmentFilter ? parseInt(enrollmentFilter) : {}
                        },
                        ced_periodo: {
                            ced_ciclo: {
                                ciclo: cycleFilter ? { contains: cycleFilter } : {}
                            },
                            mes: monthFilter ? { contains: monthFilter } : {},
                        },
                        ced_modulo: {
                            modulo: moduleFilter ? { contains: moduleFilter } : {},
                        },
                        deleted_at: null
                    },
                    select: {
                        id: true,
                        grado_residente: true,
                        act_1: true,
                        act_2: true,
                        act_3: true,
                        act_4: true,
                        act_5: true,
                        act_6: true,
                        act_7: true,
                        act_8: true,
                        act_9: true,
                        act_10: true,
                        act_11: true,
                        act_12: true,
                        act_13: true,
                        act_14: true,
                        act_15: true,
                        act_16: true,
                        total: true,
                        pendiente: true,
                        en_rotacion: true,
                        faltas: true,
                        fec_ord: true,
                        ex_ord: true,
                        fec_extra: true,
                        ex_extra: true,
                        observaciones: true,
                        enviado: true,
                        visto: true,
                        id_clue: true,
                        ced_residentes: {
                            select: {
                                id: true, matricula: true, paterno: true, materno: true, nombre: true, ced_especialidades: {
                                    select: { nombre: true }
                                }
                            }
                        },
                        ced_periodo: {
                            select: { id: true, mes: true, fec_ini: true, fec_fin: true }
                        },
                        ced_modulo: {
                            select: { id: true, modulo: true, grado: true }
                        },
                        ced_per_docente: {
                            select: {
                                ced_docentes: {
                                    select: { id: true, matricula: true, paterno: true, materno: true, nombre: true, tipo_profesor: true }
                                }
                            }
                        }
                    },
                    orderBy: {
                        id: "desc"
                    },
                    skip: min,
                    take: rowsPerPage
                });
            } else if (cluePending == 'true') {
                listEvaluation = await db.ced_evaluacion.findMany({
                    where: {
                        id_residente: residentidFilter ? parseInt(residentidFilter) : {},
                        ced_residentes: {
                            OR: [
                                { nombre: { contains: nameFilter } },
                                { paterno: { contains: nameFilter } },
                                { materno: { contains: nameFilter } }
                            ],
                            matricula: enrollmentFilter ? parseInt(enrollmentFilter) : {}
                        },
                        ced_periodo: {
                            ced_ciclo: {
                                ciclo: cycleFilter ? { contains: cycleFilter } : {}
                            },
                            mes: monthFilter ? { contains: monthFilter } : {},
                        },
                        deleted_at: null
                    },
                    select: {
                        id: true,
                        grado_residente: true,
                        act_1: true,
                        act_2: true,
                        act_3: true,
                        act_4: true,
                        act_5: true,
                        act_6: true,
                        act_7: true,
                        act_8: true,
                        act_9: true,
                        act_10: true,
                        act_11: true,
                        act_12: true,
                        act_13: true,
                        act_14: true,
                        act_15: true,
                        act_16: true,
                        total: true,
                        pendiente: true,
                        en_rotacion: true,
                        faltas: true,
                        fec_ord: true,
                        ex_ord: true,
                        fec_extra: true,
                        ex_extra: true,
                        observaciones: true,
                        enviado: true,
                        visto: true,
                        id_clue: true,
                        ced_residentes: {
                            select: {
                                id: true, matricula: true, paterno: true, materno: true, nombre: true, ced_especialidades: {
                                    select: { nombre: true }
                                }
                            }
                        },
                        ced_periodo: {
                            select: { id: true, mes: true, fec_ini: true, fec_fin: true }
                        }
                    },
                    orderBy: {
                        id: "desc"
                    },
                    skip: min,
                    take: rowsPerPage
                })
            }

            resolve(listEvaluation);
        } catch (error) {
            reject(error);
        }
    })
}

export const getTotalEvaluationsQuery = ({ residentidFilter, enrollmentFilter = '' }: PropsGetTotalEvaluationsQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            let countListEvaluations = await db.ced_evaluacion.count({
                where: {
                    id_residente: residentidFilter ? parseInt(residentidFilter) : {},
                    ced_residentes: {
                        matricula: enrollmentFilter ? parseInt(enrollmentFilter) : {},
                    },
                    deleted_at: null
                }
            })

            countListEvaluations ? (

                resolve(countListEvaluations)

            ) : resolve(0)
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const createEvaluationQuery = ({
    grado_residente,
    act_1,
    act_2,
    act_3,
    act_4,
    act_5,
    act_6,
    act_7,
    act_8,
    act_9,
    act_10,
    act_11,
    act_12,
    act_13,
    act_14,
    act_15,
    act_16,
    total,
    pendiente = 1,
    en_rotacion = 0,
    faltas,
    fec_ord,
    ex_ord,
    fec_extra,
    ex_extra,
    observaciones,
    enviado,
    visto,
    id_clue,
    id_residente,
    id_periodo,
    id_modulo,
    id_docentes
}: PropsCreateEvaluationQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const repeated: any = await db.ced_evaluacion.findFirst({ //check if evaluation already exists
                where: {
                    id_residente,
                    id_periodo
                }
            });

            if (repeated) {
                resolve({}); //duplicated entry
            } else {
                let record = await db.ced_evaluacion.create({
                    data: {
                        grado_residente,
                        act_1,
                        act_2,
                        act_3,
                        act_4,
                        act_5,
                        act_6,
                        act_7,
                        act_8,
                        act_9,
                        act_10,
                        act_11,
                        act_12,
                        act_13,
                        act_14,
                        act_15,
                        act_16,
                        total,
                        pendiente,
                        en_rotacion,
                        faltas,
                        fec_ord: fec_ord ? new Date(fec_ord).toISOString() : null,
                        ex_ord,
                        fec_extra: fec_extra ? new Date(fec_extra).toISOString() : null,
                        ex_extra,
                        observaciones,
                        enviado,
                        visto,
                        id_clue,
                        id_residente,
                        id_periodo,
                        id_modulo
                    }
                });

                let idEva: any = await db.ced_evaluacion.findFirst({
                    where: {
                        id_residente,
                        id_periodo,
                        id_modulo
                    },
                    select: {
                        id: true
                    }
                })

                id_docentes.forEach(async (doc: number) => {
                    await db.ced_per_docente.create({
                        data: {
                            id_evaluacion: idEva?.id,
                            id_docente: doc
                        }
                    })
                });

                resolve(record);
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const updateEvaluationQuery = ({
    grado_residente,
    act_1,
    act_2,
    act_3,
    act_4,
    act_5,
    act_6,
    act_7,
    act_8,
    act_9,
    act_10,
    act_11,
    act_12,
    act_13,
    act_14,
    act_15,
    act_16,
    total,
    pendiente = 1,
    en_rotacion = 0,
    faltas,
    fec_ord,
    ex_ord,
    fec_extra,
    ex_extra,
    observaciones,
    enviado,
    visto,
    id_clue,
    id_residente,
    id_periodo,
    id_modulo,
    id_docentes,
    evaluation_id
}: PropsUpdateEvaluationQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_evaluacion.findUnique({
                where: {
                    id: evaluation_id
                }
            });

            let data: any;

            record != null ? ( //check if ID exists
                await db.ced_evaluacion.update({
                    where: {
                        id: evaluation_id
                    },
                    data: {
                        grado_residente,
                        act_1,
                        act_2,
                        act_3,
                        act_4,
                        act_5,
                        act_6,
                        act_7,
                        act_8,
                        act_9,
                        act_10,
                        act_11,
                        act_12,
                        act_13,
                        act_14,
                        act_15,
                        act_16,
                        total,
                        pendiente,
                        en_rotacion,
                        faltas,
                        fec_ord: fec_ord && new Date(fec_ord).toISOString(),
                        ex_ord,
                        fec_extra: fec_extra && new Date(fec_extra).toISOString(),
                        ex_extra,
                        observaciones,
                        enviado,
                        visto,
                        id_clue,
                        id_residente,
                        id_periodo,
                        id_modulo
                    }
                }),
                id_docentes?.forEach(async (doc: number) => {
                    const repeated = await db.ced_per_docente.findFirst({
                        where: {
                            id_evaluacion: evaluation_id,
                            id_docente: doc
                        }
                    });
                    
                    if (!repeated) {
                        await db.ced_per_docente.create({
                            data: {
                                id_evaluacion: evaluation_id,
                                id_docente: doc
                            }
                        })
                    }
                }),
                data = await db.ced_evaluacion.findUnique({
                    where: {
                        id: evaluation_id
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

export const deleteEvaluationQuery = (id: number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const record = await db.ced_evaluacion.findUnique({
                where: {
                    id: id
                }
            });

            record ? (
                await db.ced_evaluacion.update({
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