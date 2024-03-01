import { Response } from "express";
import { PropsCreateEvaluationQueries, PropsGetEvaluationQueries, PropsGetInfoEvaluationQuery, PropsGetTotalEvaluationsQuery, PropsUpdateEvaluationQueries } from "../interfaces/evaluationQueries";
import { createEvaluationQuery, deleteEvaluationQuery, getEvaluationQuery, getTotalEvaluationsQuery, getTotalInfoEvaluationQuery, updateEvaluationQuery } from "../helpers/evaluationQueries";

export const getEvaluations = async (req: any, res: Response) => {
    try {
        const params: PropsGetEvaluationQueries = req.query;
        const queryEvaluation = await getEvaluationQuery({ ...params });
        res.status(200).json({
            ok: true,
            msg: 'Ok',
            data: queryEvaluation
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const getTotalEvaluations = async (req: any, res: Response) => {
    try {
        const params: PropsGetTotalEvaluationsQuery = req.query;
        let queryTotalEvaluations = await getTotalEvaluationsQuery({...params});
        res.status(200).json({
            ok: true,
            msg: 'ok',
            data: queryTotalEvaluations
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const getInfoEvaluation = async (req: any, res: Response) => {
    try {
        const params: PropsGetInfoEvaluationQuery = req.query;
        let queryInfo = await getTotalInfoEvaluationQuery({...params});
        res.status(200).json({
            ok: true,
            msg: 'ok',
            data: queryInfo
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const createEvaluation = async (req: any, res: Response) => {
    try {
        const data: PropsCreateEvaluationQueries = req.body;
        const record: any = await createEvaluationQuery({ ...data });

        Object.keys(data).length !== 0 ? (
            Object.keys(record).length === 0 ? (
                res.status(409).json({
                    ok: false,
                    msg: 'Incoming entry is already created!'
                })
            )
                :
                res.status(200).json({
                    ok: true,
                    msg: 'ok',
                    data: record
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

export const updateEvaluation = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: PropsUpdateEvaluationQueries = req.payload;
        const state: any = await updateEvaluationQuery({ ...data, evaluation_id: id })

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

export const deleteEvaluation =async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const state = await deleteEvaluationQuery(id);

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