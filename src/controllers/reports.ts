import { Response } from "express";
import { db } from "../utils/db";
import { ReporteMensualCalificaciones } from "../interfaces/reportsQueries";
import format from 'string-template';
import path from 'path';
import fs from 'fs';
import { createPdfFromHtmlStream } from "../utils/createhtml2pdf";
import { getEvaluationParamsQuery } from "../helpers/reportsQueries";
import { htmlParams } from "../helpers/reportsHelpers";

export const getPdfReport = async (req: any, res: Response) => {
    try {
        //load html template
        const dir = path.join(__dirname, '../assets/templateMonthlyReport.html');

        //get params from front-end
        let params: ReporteMensualCalificaciones = req.query; 

        //get ced_evaluation info that matches resident registries
        let query: any = await getEvaluationParamsQuery({...params}); 

        //get params to substitute inside html template
        let stringParams = htmlParams(params, query);

        //get html template loading params
        let template = format(fs.readFileSync(dir, 'utf8'), stringParams);

        //parse template to stream for sending to front-end
        const stream: any = await createPdfFromHtmlStream(template);

        //specify application type on headers
        res.contentType('application/pdf');

        //send pdf to front-end
        stream.pipe(res);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: err
        });
    }
}