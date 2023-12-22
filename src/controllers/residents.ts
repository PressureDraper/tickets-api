import { Response } from "express";
import { PropsCreateResidentsQueries, PropsGetResidentsQueries, PropsUpdateResidentsQueries } from "../interfaces/residentsQueries";
import { createResidentsQuery, deleteResidentQuery, getResidentsQuery, updateResidentQuery } from "../helpers/residentsQueries";

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

export const updateResident = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: PropsUpdateResidentsQueries = req.payload;
        const state: any = await updateResidentQuery({ ...data, resident_id: id })

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
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        }); 
    }
}

export const deleteResident = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const state = await deleteResidentQuery(id);
        
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