import { Response } from "express";
import { PropsCreateTeachersQueries, PropsGetTeachersQueries, PropsUpdateTeachersQueries } from "../interfaces/teachersQueries";
import { createTeachersQuery, deleteTeacherQuery, getTeachersQuery, updateTeacherQuery } from "../helpers/teachersQueries";

export const getTeachers = async (req: any, res: Response) => {
    try {
        const params: PropsGetTeachersQueries = req.query;
        let queryTeachers = await getTeachersQuery({ ...params });
        res.status(200).json({
            ok: true,
            msg: 'Ok',
            data: queryTeachers
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}

export const createTeacher = async (req: any, res: Response) => {
    try {
        const data: PropsCreateTeachersQueries = req.body;
        const record: any = await createTeachersQuery({ ...data });

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

export const updateTeacher = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: PropsUpdateTeachersQueries = req.payload;
        const state: any = await updateTeacherQuery({ ...data, teacher_id: id });

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

export const deleteTeacher = async (req: any, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const state = await deleteTeacherQuery(id);

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