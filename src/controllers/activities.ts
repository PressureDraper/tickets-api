import { Response } from "express";
import { PropsCreateActivitiesQueries, PropsGetActivitiesQueries, PropsUpdateActivitiesQueries } from "../interfaces/activitiesQueries";
import { createActivityQuery, deleteActivityQuery, getActivitiesQuery, getActivityQuery, updateActivityQuery } from "../helpers/activitiesQueries";

export const getActivities = async (req: any, res: Response) => {
    try {
        const params: PropsGetActivitiesQueries = req.query;
        let queryActivities = await getActivitiesQuery({ ...params });
        res.status(200).json({
            ok: true,
            msg: 'Ok',
            data: queryActivities
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const getActivity = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const activity: any = await getActivityQuery(id);

        if (Object.keys(activity).length === 0) {
            res.status(409).json({
                ok: false,
                msg: 'Registry not found'
            })
        } else {
            res.status( 200 ).json({
                ok: true,
                msg: 'ok',
                data: activity
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

export const createActivity = async (req: any, res: Response) => {
    try {
        const data: PropsCreateActivitiesQueries = req.body;
        const record: any = await createActivityQuery({ ...data });

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

export const updateActivity = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: PropsUpdateActivitiesQueries = req.payload;
        const state: any = await updateActivityQuery({ ...data, activity_id: id })

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

export const deleteActivity = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const state = await deleteActivityQuery(id);
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