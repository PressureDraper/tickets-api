import { Response } from "express";
import { PropsGetActivitiesQueries } from "../interfaces/activitiesQueries";
import { getActivitiesQuery, getActivityQuery } from "../helpers/activitiesQueries";

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