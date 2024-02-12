import { Response } from "express";
import { getStatusEvaluationQuery } from "../helpers/evaluationStatusQueries";

export const getStatusEvaluation = async (req: any, res: Response) => {
    try {
        const params: any = req.query;
        const queryEvaluation = await getStatusEvaluationQuery(params);
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