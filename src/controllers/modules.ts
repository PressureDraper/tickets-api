import { Response } from "express";
import { PropsCreateModuleQuery, PropsGetModulesQuery, PropsGetTotalModulesQuery, PropsUpdateModuleQuery } from "../interfaces/modulesQueries";
import { createModuleQuery, deleteModuleQuery, getModulesQuery, getTotalModulesQuery, updateModuleQuery } from "../helpers/modulesQueries";

export const getModules = async (req: any, res: Response) => {
    try {
        const params: PropsGetModulesQuery = req.query;
        let queryModules = await getModulesQuery({ ...params });
        res.status(200).json({
            ok: true,
            msg: 'Ok',
            data: queryModules
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const getTotalModules = async (req: any, res: Response) => {
    try {
        const params: PropsGetTotalModulesQuery = req.query;
        let queryTotalModules = await getTotalModulesQuery({ ...params });
        res.status(200).json({
            ok: true,
            msg: 'Ok',
            data: queryTotalModules
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const createModule = async (req: any, res: Response) => {
    try {
        const data: PropsCreateModuleQuery = req.body;
        const record: any = await createModuleQuery({ ...data });

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

export const updateModule = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: PropsUpdateModuleQuery = req.payload;
        const state: any = await updateModuleQuery({ ...data, module_id: id })

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

export const deleteModule = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const state = await deleteModuleQuery(id);
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