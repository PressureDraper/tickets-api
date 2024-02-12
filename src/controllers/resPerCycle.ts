import { Response } from "express";
import { PropsGetResPerCycleQueries, PropsCreateResPerCycleQueries, PropsUpdateResPerCycleQueries, PropsGetTotalResPerCycleQueries } from '../interfaces/resPerCycleQueries';
import { createResPerCycleQuery, deleteResPerCycleQuery, getResPerCycleQuery, getTotalResPerCycle, migrateResPerCycleQuery, updateResPerCycleQuery } from "../helpers/resPerCycleQueries";

export const getResPerCycle = async (req: any, res: Response) => {
    try {
        const params: PropsGetResPerCycleQueries = req.query;
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

export const getTotalResPer = async (req: any, res: Response) => {
    try {
        const params: PropsGetTotalResPerCycleQueries = req.query;
        let queryTotalRes = await getTotalResPerCycle({ ...params });
        res.status(200).json({
            ok: true,
            msg: 'Ok',
            data: queryTotalRes
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

export const migrateResPerCycle = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const state = await migrateResPerCycleQuery(id);

        state ?
            res.status(200).json({
                ok: true,
                msg: 'Records migrated',
            })
            :
            res.status(404).json({
                ok: false,
                msg: 'Error while running residents migration'
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const updateResPerCycle = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: PropsUpdateResPerCycleQueries = req.payload;
        const state: any = await updateResPerCycleQuery({ ...data, percycle_id: id })

        Object.keys(data).length !== 0 ? (
            state[0] ?
                res.status(200).json({
                    ok: true,
                    msg: 'Record updated',
                    data: state[1]
                })
                :
                res.status(400).json({
                    ok: false,
                    msg: 'There was a problem trying to update data'
                })
        )
            :
            res.status(400).json({
                ok: false,
                msg: 'No data to update query'
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const deleteResPerCycle = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const state = await deleteResPerCycleQuery(id);

        state ?
            res.status(200).json({
                ok: true,
                msg: 'Record deleted',
            })
            :
            res.status(404).json({
                ok: false,
                msg: 'Record to delete not found'
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}