import { Response, NextFunction } from 'express';
import { PropsUpdateResidentsQueries } from '../interfaces/residentsQueries';

export const cleanFields = (req: any, res: Response, next: NextFunction) => {
    const data: any = req.body;

    const aux: any = {};

    Object.keys(data).map(key => {
        if (data[key] != '' || typeof (data[key]) == 'number') {
            aux[key] = data[key];
        }
    });

    req['payload'] = aux;

    next();
}