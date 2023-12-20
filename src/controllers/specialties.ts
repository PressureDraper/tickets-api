import { Response } from "express";
import { PropsCreateSpecialtyQuery, PropsGetSpecialtiesQuery, PropsGetTotalSpecialtiesQuery, PropsUpdateSpecialtyQuery } from '../interfaces/specialtiesQueries';
import { getSpecialtiesQuery, getTotalSpecialtiesQuery, createSpecialtyQuery, updateSpecialtyQuery, deleteSpecialtyQuery } from '../helpers/specialtiesQueries';

export const getSpecialties = async (req: any, res: Response) => {
    try {
        const params: PropsGetSpecialtiesQuery = req.query;
        let querySpecialties = await getSpecialtiesQuery({ ...params });
        res.status(200).json({
            ok: true,
            msg: 'Ok',
            data: querySpecialties
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const getTotalSpecialties = async (req: any, res: Response) => {
    try {
        const params: PropsGetTotalSpecialtiesQuery = req.query;
        let queryTotalSpecialties = await getTotalSpecialtiesQuery({ ...params });
        res.status(200).json({
            ok: true,
            msg: 'ok',
            data: queryTotalSpecialties
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const createSpecialty = async (req: any, res: Response) => {
    try {
        const data: PropsCreateSpecialtyQuery = req.body;
        const record: any = await createSpecialtyQuery({ ...data });

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

export const updateSpecialty = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: PropsUpdateSpecialtyQuery = req.body;
        const state: any = await updateSpecialtyQuery({ ...data, specialty_id: id })

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

export const deleteSpecialty = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const state = await deleteSpecialtyQuery(id);
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