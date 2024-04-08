import { Response } from "express";
import { db2 } from "../utils/db";
import { SicaEmployeeQueries } from "../interfaces/sicaEmployeeQueries";
import { getEmployeeQuery } from "../helpers/sicaEmployeeQueries";

export const getEmployee = async (req: any, res: Response) => {
    try {
        const params: SicaEmployeeQueries = req.query;
        const listEmployee = await getEmployeeQuery({...params});

        res.status(200).json({
            ok: true,
            msg: 'Ok',
            data: listEmployee
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}