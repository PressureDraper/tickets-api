import moment from "moment";
import { ArrayResidentsEvaluation, PropsGetResidentsEvaluationQueries, PropsGetResidentsPerStatusQueries } from "../interfaces/evaluationStatusQueries";
import { db } from "../utils/db";

export const getStatusEvaluationQuery = async (data: ArrayResidentsEvaluation) => {
    return new Promise(async (resolve, reject) => {
        try {
            const residents = JSON.parse(decodeURIComponent(data.data));
            const array = await Promise.all(
                residents.map(async (residente: PropsGetResidentsEvaluationQueries) => {
                    let estado: string = '';
                    const reg = await db.ced_evaluacion.findFirst({
                        where: {
                            ced_periodo: {
                                mes: residente.mes,
                                ced_ciclo: {
                                    ciclo: residente.ciclo
                                }
                            },
                            ced_residentes: {
                                matricula: residente.matricula
                            }
                        }
                    });

                    if ((reg == null) || (reg.en_rotacion == 1) || (reg.pendiente == 0 && reg.en_rotacion == 0 && reg.id_modulo == null)) {
                        estado = 'evaluar';
                    } else {
                        if (reg.pendiente == 1 && reg.en_rotacion == 0) {
                            estado = 'pendiente';
                        } else if (reg.id_residente != null && reg.id_periodo != null && reg.id_modulo != null && reg.pendiente == 0) {
                            estado = 'completado';
                        }
                    }

                    return {
                        id: residente.id,
                        id_eval: reg?.id,
                        matricula: residente.matricula,
                        nombre: residente.nombre,
                        especialidad: residente.especialidad,
                        grado: residente.grado,
                        ciclo: residente.ciclo,
                        mes: residente.mes,
                        status: estado,
                        rotacion: reg?.en_rotacion == 1 ? true : false,
                        clue: reg?.id_clue == undefined || reg?.id_clue == null ? null : reg.id_clue,
                        visto: reg?.visto,
                        fec_visto: reg?.visto == 1 ? moment.utc(reg.fec_visto).format('YYYY-MM-DD h:mm:ss a') : null,
                        enviado: reg?.enviado
                    }
                })
            )

            resolve(array);
        } catch (error) {
            reject(error);
        }
    })
}

export const getResidentsPerStatus = async ({ status = '', mes = '', ciclo = '', especialidad = '' }: PropsGetResidentsPerStatusQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data: any = [];

            let reg = await db.ced_per_ciclo.findMany({
                where: {
                    ced_residentes: {
                        ced_especialidades: {
                            nombre: especialidad ? { contains: especialidad } : {}
                        },
                        status: 1 //active ones
                    },
                    ced_ciclo: {
                        ciclo: ciclo,
                    },
                    deleted_at: null
                },
                select: {
                    id_residente: true,
                    grado_residente: true,
                    ced_residentes: {
                        select: {
                            matricula: true,
                            nombre: true,
                            paterno: true,
                            materno: true
                        }
                    }
                }
            });

            const array = await Promise.all(
                reg.map(async (residente: any) => {
                    let estado: string = '';
                    const reg = await db.ced_evaluacion.findFirst({
                        where: {
                            ced_periodo: {
                                mes: mes,
                                ced_ciclo: {
                                    ciclo: ciclo
                                }
                            },
                            ced_residentes: {
                                id: residente.id_residente
                            }
                        },
                        select: {
                            grado_residente: true,
                            en_rotacion: true,
                            pendiente: true,
                            id_modulo: true,
                            id_residente: true,
                            id_periodo: true,
                            ced_residentes: {
                                select: {
                                    matricula: true,
                                    nombre: true,
                                    paterno: true,
                                    materno: true
                                }
                            }
                        }
                    });

                    if ((reg == null) || (reg.pendiente == 0 && reg.en_rotacion == 0 && reg.id_modulo == null)) {
                        estado = 'evaluar';
                    } else {
                        if (reg.pendiente == 1 && reg.en_rotacion == 0) {
                            estado = 'pendiente';
                        } else if (reg.id_residente != null && reg.id_periodo != null && reg.id_modulo != null && reg.pendiente == 0) {
                            estado = 'completado';
                        } else if (reg.en_rotacion == 1) {
                            estado = 'rotacion'
                        }
                    }

                    return {
                        matricula: reg != null ? reg.ced_residentes.matricula : residente.ced_residentes.matricula,
                        nombre: reg != null ? reg.ced_residentes.nombre + ' ' + reg.ced_residentes.paterno + ' ' + reg.ced_residentes.materno : residente.ced_residentes.nombre + ' ' + residente.ced_residentes.paterno + ' ' + residente.ced_residentes.materno,
                        grado: reg != null ? reg.grado_residente : residente.grado_residente,
                        status: estado
                    }
                })
            )

            switch (status) {
                case 'Completados':
                    data = array.filter((res) => {
                        return res.status == 'completado';
                    });
                    break;
                case 'No Evaluados':
                    data = array.filter((res) => {
                        return res.status == 'evaluar';
                    });
                    break;
                case 'Pendientes':
                    data = array.filter((res) => {
                        return res.status == 'pendiente';
                    });
                    break;
                case 'En Rotación':
                    data = array.filter((res) => {
                        return res.status == 'rotacion';
                    });
                    break;
            }

            resolve(data);
        } catch (error) {
            reject(error);
        }
    })
}