import { Response } from "express";
import { PropsGetCyclesQueries } from "../interfaces/cyclesQueries";
import { createCycleQuery, getCyclesQuery } from "../helpers/cyclesQueries";

export const getCycles = async (req: any, res: Response) => {
    try {
        const params: PropsGetCyclesQueries = req.query;
        let queryCycles = await getCyclesQuery({ ...params });
        res.status(200).json({
            ok: true,
            msg: 'Ok',
            data: queryCycles
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const createCycle = async (req: any, res: Response) => {
    try {
        const data: any = req.body;
        const record: any = await createCycleQuery(data['ciclo']);

        if (Object.keys(record).length === 0) {
            res.status(409).json({
                ok: false,
                msg: 'Incoming entry is already created!'
            })
        } else {
            res.status(200).json({
                ok: true,
                msg: 'ok',
                data: record
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}