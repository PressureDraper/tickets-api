import { PropsMailerQuery } from "../interfaces/evaluationQueries";
import { db } from "../utils/db";
import _ from 'lodash';
import { generateHtmlMailInfo } from "./mailerHtmlFormat";

export const getStudentsToMailQuery = async ({ ciclo, mes, especialidad }: PropsMailerQuery): Promise<number> => {
    return new Promise(async (resolve, reject) => {
        try {
            const studentsToMail = await db.ced_evaluacion.count({
                where: {
                    ced_periodo: {
                        ced_ciclo: {
                            ciclo: ciclo ? { contains: ciclo } : {}
                        }
                    },
                    ced_residentes: {
                        ced_especialidades: {
                            nombre: especialidad ? { contains: especialidad } : {}
                        },
                        status: 1
                    },
                    pendiente: 0,
                    en_rotacion: 0,
                    enviado: 0
                }
            });
            
            resolve(studentsToMail);
        } catch (error) {
            reject(error);
        }
    })
}

export const getEvaluatedStudents = async ({ ciclo, mes, especialidad }: PropsMailerQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            const students = await db.ced_evaluacion.findMany({
                where: {
                    ced_periodo: {
                        ced_ciclo: {
                            ciclo: ciclo ? { contains: ciclo } : {}
                        }
                    },
                    ced_residentes: {
                        ced_especialidades: {
                            nombre: especialidad ? { contains: especialidad } : {}
                        },
                        status: 1
                    },
                    enviado: 0
                },
                select: {
                    id: true,
                    grado_residente: true,
                    pendiente: true,
                    id_residente: true,
                    id_periodo: true,
                    id_modulo: true,
                    ced_periodo: {
                        select: {
                            mes: true
                        }
                    },
                    ced_residentes: {
                        select: {
                            nombre: true,
                            paterno: true,
                            materno: true,
                            matricula: true,
                            correo: true
                        }
                    }
                }
            });

            //filter only completed evaluations
            let filtered = students.filter((res) => {
                if (res.id_residente != null && res.id_periodo != null && res.id_modulo != null && res.pendiente == 0 && res.ced_residentes.correo != null) {
                    return res;
                }
            });

            let aux = _.groupBy(filtered, 'ced_residentes.correo');

            let new_aux = _.mapValues(aux, (item: any) => {
                let meses = item.map((aux: any) =>
                    aux.ced_periodo.mes
                );

                return {
                    meses,
                    nombre: item[0].ced_residentes.nombre + ' ' + item[0].ced_residentes.paterno + ' ' + item[0].ced_residentes.materno
                }
            });

            let entries = Object.entries(new_aux);

            let emails = entries.map((entry: any) => {
                return entry[0];
            });

            let evaluaciones = entries.map((entry: any) => {
                return entry[1]
            })

            const htmlGen = generateHtmlMailInfo(evaluaciones);

            //update evaluations to 'sent = 1' status
            filtered.forEach(async (eva: any) => {
                await db.ced_evaluacion.update({
                    where: {
                        id: eva.id
                    },
                    data: {
                        enviado: 1
                    }
                })
            });

            resolve([emails, htmlGen]);
        } catch (error) {
            reject(error);
        }
    })
}