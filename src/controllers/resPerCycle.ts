import { Response } from "express";
import { PropsGetResPerCycleQueries, PropsCreateResPerCycleQueries } from '../interfaces/resPerCycle';
import { createResPerCycleQuery, getResPerCycleQuery } from "../helpers/resPerCycleQueries";

export const getResPerCycle = async (req: any, res: Response) => {
    try {
        const params: PropsGetResPerCycleQueries = req.query;
        console.log(params);
        let queryPerCycle = await getResPerCycleQuery({ ...params });
        res.status(200).json({
            ok: true,
            msg: 'Ok',
            data: queryPerCycle
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const createResPerCycle = async (req: any, res: Response) => {
    try {
        const data: PropsCreateResPerCycleQueries = req.body;
        const record: any = await createResPerCycleQuery({ ...data });

        if (Object.keys(record).length === 0) {
            res.status(409).json({
                ok: false,
                msg: 'Incoming entry is already created!'
            });
        } else {
            res.status(200).json({
                ok: true,
                msg: 'ok',
                data: record
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}