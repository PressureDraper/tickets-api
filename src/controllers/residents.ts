import { Response } from "express";
import { PropsCreateResidentsQueries, PropsGetResidentsQueries } from "../interfaces/residentsQueries";
import { createResidentsQuery, getResidentsQuery } from "../helpers/residentsQueries";

export const getResidents = async (req: any, res: Response) => {
    try {
        const params: PropsGetResidentsQueries = req.query;
        let queryResidents = await getResidentsQuery({ ...params });
        res.status(200).json({
            ok: true,
            msg: 'Ok',
            data: queryResidents
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const createResidents = async (req: any, res: Response) => {
    try {
        const data: PropsCreateResidentsQueries = req.body;
        const record: any = await createResidentsQuery({ ...data });

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
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}