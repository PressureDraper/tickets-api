import colors from 'colors';
import express, { Express } from 'express';
import { createServer } from 'https';
import http from 'http';
import fs from 'fs';
import cors from 'cors';
import routerBase from '../routes/base';
import routerSpecialties from '../routes/specialties';
import routerModules from '../routes/modules';
import routerCycles from '../routes/cycles';
import routerActivities from '../routes/activities';
import routerResidents from '../routes/residents';
import routerTeachers from '../routes/teachers';
import routerResPerCycle from '../routes/resPerCycle';
import routerEvaluations from '../routes/evaluations'
import routerStatus from '../routes/statusEvaluations';
import routerReports from '../routes/reports';
import routerMailer from '../routes/mailer';

class Server {
    private app: Express;
    private server: any;
    public port: number;

    constructor() {
        this.app = express();
        this.port = parseInt( `${ process.env.PORT }` );
        this.server = process.env.ENVIRONMENT == 'productivo'
            ? createServer({
                cert: fs.readFileSync('/cert/ssaver.gob.mx.crt'),
                key: fs.readFileSync('/cert/ssaver.gob.mx.key')
            }, this.app) : http.createServer( this.app );
    }

    middlewares() {
        this.app.use( express.json() );
        this.app.use( cors( { origin: '*' } ) );
        this.app.use( '/', routerBase );
        this.app.use( '/api/specialties', routerSpecialties );
        this.app.use( '/api/modules', routerModules);
        this.app.use( '/api/cycles', routerCycles);
        this.app.use( '/api/activites', routerActivities);
        this.app.use( '/api/residents', routerResidents);
        this.app.use( '/api/teachers', routerTeachers);
        this.app.use( '/api/percycle', routerResPerCycle);
        this.app.use( '/api/evaluation', routerEvaluations);
        this.app.use('/api/status', routerStatus);
        this.app.use('/api/reportes', routerReports);
        this.app.use('/api/mailer', routerMailer);
    }

    execute() {
        this.middlewares();
        this.server.listen( this.port, () => {
            process.env.ENVIRONMENT == 'productivo'
                ? console.log( `Server Settings ready in https://boletas.ssaver.gob.mx:${ this.port }`.america )
                : console.log( `Server Settings ready in http://localhost:${ this.port }`.rainbow );
        } );
    }
}

export default Server;