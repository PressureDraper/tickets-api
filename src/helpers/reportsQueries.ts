import { ReporteMensualCalificaciones } from "../interfaces/reportsQueries";
import { db } from "../utils/db";

export const getEvaluationParamsQuery = (params: ReporteMensualCalificaciones) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = await db.ced_evaluacion.findFirst({
                where:{
                    ced_periodo: {
                        mes: params.mes,
                        ced_ciclo: {
                            ciclo: params.ciclo
                        }
                    },
                    ced_residentes: {
                        matricula: parseInt(params.matricula)
                    }
                },
                select: {
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
                    observaciones: true,
                    faltas: true,
                    fec_ord: true,
                    ex_ord: true,
                    fec_extra: true,
                    ex_extra: true,
                    visto: true,
                    fec_visto: true,
                    ced_per_docente: {
                        select: {
                            ced_docentes: {
                                select: {
                                    nombre: true,
                                    paterno: true,
                                    materno: true,
                                    tipo_profesor: true
                                }
                            }
                        }
                    },
                    ced_modulo: {
                        select: {
                            modulo: true
                        }
                    }
                }
            });

            resolve(query);
        } catch (error) {
            reject(error);
        }
    })
}