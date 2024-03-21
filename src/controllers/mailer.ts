import { Response } from "express";
import nodemailer from "nodemailer";
import { getEvaluatedStudents } from "../helpers/mailerQueries";
import path from "path";
import format from 'string-template';
import fs from 'fs';

export const sendEvaluationEmails = async (req: any, res: Response) => {
    try {
        const data: any = req.body;
        const students: any = await getEvaluatedStudents(data);
        const mainStudent = students[0][0];
        students[0].shift()
        const ccStudents = students[0].toString();

        console.log(mainStudent, ccStudents);

        const dir = path.join(__dirname, '../assets/templateMailNotify.html');

        const template = format(fs.readFileSync(dir, 'utf8'), { 
            rows: students[1], 
            especialidad: data.especialidad, 
            ciclo: data.ciclo 
        });

        const transporter = nodemailer.createTransport({
            name: "cae",
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: "cae.residencia@gmail.com",
                pass: `${process.env.EMAIL_PASSWORD}`
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const info = await transporter.sendMail({
            from: '"Centro de Alta Especialidad Dr. Rafael Lucio" <cae.residencia@gmail.com>', // sender address
            to: mainStudent, // list of receivers
            cc: ccStudents,
            subject: "Evaluación Integral", // Subject line
            html: template, // html body
        });

        res.status(200).json({
            ok: true,
            msg: 'Message Sent',
            data: info.response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error contact the administrator'
        });
    }
}