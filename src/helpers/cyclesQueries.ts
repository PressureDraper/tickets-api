import moment from "moment";
import { PropsGetCyclesQueries } from "../interfaces/cyclesQueries";
import { db } from "../utils/db";
import { getDate, getDays } from "./periodDays";

export const getCyclesQuery = ({ cycleFilter = '' }: PropsGetCyclesQueries) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listCycles: any = await db.ced_ciclo.findMany({
                where: {
                    ciclo: cycleFilter ? { contains: cycleFilter } : {},
                    deleted_at: null
                },
                select: {
                    id: true,
                    ciclo: true,
                    fec_ini: true,
                    fec_fin: true,
                    ced_periodo: {
                        select: {
                            id: true,
                            mes: true,
                            fec_ini: true,
                            fec_fin: true
                        },
                        where: {
                            deleted_at: null
                        }
                    }
                },
                orderBy: {
                    id: 'desc'
                }
            });

            resolve(listCycles);
        } catch (error) {
            reject(error);
        }
    })
}

export const createCycleQuery = (ciclo: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const repeated: any = await db.ced_ciclo.findFirst({ //check if cycle already exists
                where: {
                    ciclo,
                    deleted_at: null
                }
            });

            const cycle = ciclo.split('-');

            if (repeated) {
                resolve({}); //duplicated entry
            } else {
                let record = await db.ced_ciclo.create({
                    data: {
                        ciclo,
                        fec_ini: getDate(cycle[0], "-03-01"),
                        fec_fin: getDate(cycle[1], "-02-", getDays(parseInt(cycle[1]), 2)),
                        ced_periodo: {
                            create: [
                                { periodo: 1, mes: "Marzo", fec_ini: getDate(cycle[0], "-03-01"), fec_fin: getDate(cycle[0], "-03-", getDays(parseInt(cycle[0]), 3)), created_at: moment.utc().subtract(6, 'hour').toISOString(), updated_at: moment.utc().subtract(6, 'hour').toISOString() },
                                { periodo: 2, mes: "Abril", fec_ini: getDate(cycle[0], "-04-01"), fec_fin: getDate(cycle[0], "-04-", getDays(parseInt(cycle[0]), 4)), created_at: moment.utc().subtract(6, 'hour').toISOString(), updated_at: moment.utc().subtract(6, 'hour').toISOString() },
                                { periodo: 3, mes: "Mayo", fec_ini: getDate(cycle[0], "-05-01"), fec_fin: getDate(cycle[0], "-05-", getDays(parseInt(cycle[0]), 5)), created_at: moment.utc().subtract(6, 'hour').toISOString(), updated_at: moment.utc().subtract(6, 'hour').toISOString() },
                                { periodo: 4, mes: "Junio", fec_ini: getDate(cycle[0], "-06-01"), fec_fin: getDate(cycle[0], "-06-", getDays(parseInt(cycle[0]), 6)), created_at: moment.utc().subtract(6, 'hour').toISOString(), updated_at: moment.utc().subtract(6, 'hour').toISOString() },
                                { periodo: 5, mes: "Julio", fec_ini: getDate(cycle[0], "-07-01"), fec_fin: getDate(cycle[0], "-07-", getDays(parseInt(cycle[0]), 7)), created_at: moment.utc().subtract(6, 'hour').toISOString(), updated_at: moment.utc().subtract(6, 'hour').toISOString() },
                                { periodo: 6, mes: "Agosto", fec_ini: getDate(cycle[0], "-08-01"), fec_fin: getDate(cycle[0], "-08-", getDays(parseInt(cycle[0]), 8)), created_at: moment.utc().subtract(6, 'hour').toISOString(), updated_at: moment.utc().subtract(6, 'hour').toISOString() },
                                { periodo: 7, mes: "Septiembre", fec_ini: getDate(cycle[0], "-09-01"), fec_fin: getDate(cycle[0], "-09-", getDays(parseInt(cycle[0]), 9)), created_at: moment.utc().subtract(6, 'hour').toISOString(), updated_at: moment.utc().subtract(6, 'hour').toISOString() },
                                { periodo: 8, mes: "Octubre", fec_ini: getDate(cycle[0], "-10-01"), fec_fin: getDate(cycle[0], "-10-", getDays(parseInt(cycle[0]), 10)), created_at: moment.utc().subtract(6, 'hour').toISOString(), updated_at: moment.utc().subtract(6, 'hour').toISOString() },
                                { periodo: 9, mes: "Noviembre", fec_ini: getDate(cycle[0], "-11-01"), fec_fin: getDate(cycle[0], "-11-", getDays(parseInt(cycle[0]), 11)), created_at: moment.utc().subtract(6, 'hour').toISOString(), updated_at: moment.utc().subtract(6, 'hour').toISOString() },
                                { periodo: 10, mes: "Diciembre", fec_ini: getDate(cycle[0], "-12-01"), fec_fin: getDate(cycle[0], "-12-", getDays(parseInt(cycle[0]), 12)), created_at: moment.utc().subtract(6, 'hour').toISOString(), updated_at: moment.utc().subtract(6, 'hour').toISOString() },
                                { periodo: 11, mes: "Enero", fec_ini: getDate(cycle[1], "-01-01"), fec_fin: getDate(cycle[1], "-01-", getDays(parseInt(cycle[1]), 1)), created_at: moment.utc().subtract(6, 'hour').toISOString(), updated_at: moment.utc().subtract(6, 'hour').toISOString() },
                                { periodo: 12, mes: "Febrero", fec_ini: getDate(cycle[1], "-02-01"), fec_fin: getDate(cycle[1], "-02-", getDays(parseInt(cycle[1]), 2)), created_at: moment.utc().subtract(6, 'hour').toISOString(), updated_at: moment.utc().subtract(6, 'hour').toISOString() },
                            ]
                        },
                        created_at: moment.utc().subtract(6, 'hour').toISOString(),
                        updated_at: moment.utc().subtract(6, 'hour').toISOString()
                    }
                })
                resolve(record);
            }
        } catch (error) {
            reject(error);
        }
    });
}