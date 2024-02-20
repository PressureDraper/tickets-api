import { ArrayResidentsEvaluation, PropsGetResidentsEvaluationQueries } from "../interfaces/evaluationStatusQueries";
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

                    if ((reg == null) || (reg.en_rotacion == 1) || (reg.id_modulo == 0)) {
                        estado = 'evaluar';
                    } else {
                        if (reg.pendiente == 1) {
                            estado = 'pendiente';
                        } else {
                            estado = 'completado';
                        }
                    }

                    return {
                        id: residente.id,
                        matricula: residente.matricula,
                        nombre: residente.nombre,
                        especialidad: residente.especialidad,
                        grado: residente.grado,
                        ciclo: residente.ciclo,
                        mes: residente.mes,
                        status: estado,
                        rotacion: reg?.en_rotacion == 1 ? true : false,
                        clue: reg?.id_clue == undefined || reg?.id_clue == null ? null : reg.id_clue 
                    }
                })
            )

            resolve(array);
        } catch (error) {
            reject(error);
        }
    })
}