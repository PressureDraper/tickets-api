import { ReporteMensualCalificaciones } from "../interfaces/reportsQueries";
import { PropsCreateTeachersQueries } from "../interfaces/teachersQueries";
import moment from 'moment';

export const capitalizeFirstLetter = (arr: string[]) => {
    let newArr: string[] = [];
    arr.forEach((word: string) => {
        let firstLetter = word.charAt(0);
        let remainingLetters = word.substring(1);

        let capitalized = firstLetter.toUpperCase() + (remainingLetters).toLowerCase();

        newArr.push(capitalized);
    })

    return newArr;
}

export const htmlParams = (params: ReporteMensualCalificaciones, query: any) => {
    let name = params.nombre.split(' ');
    let specialty = params.especialidad.split(' ');

    name = capitalizeFirstLetter(name);
    specialty = capitalizeFirstLetter(specialty);

    let newName = name.join(' ');
    let newSpecialty = specialty.join(' ');

    let totala = parseFloat(query.act_1) + parseFloat(query.act_2) + parseFloat(query.act_3) + parseFloat(query.act_4) + parseFloat(query.act_5) + parseFloat(query.act_6) + parseFloat(query.act_7) + parseFloat(query.act_8) + parseFloat(query.act_9) + parseFloat(query.act_10);

    let totalb = parseFloat(query.act_11) + parseFloat(query.act_12) + parseFloat(query.act_13) + parseFloat(query.act_14) + parseFloat(query.act_15);

    let titular = query.ced_per_docente.filter((prof: any) => {
        return prof.ced_docentes.tipo_profesor == 1;
    }).map((doc: any) => {
        return doc;
    });

    let adjunto = query.ced_per_docente.filter((prof: any) => {
        return prof.ced_docentes.tipo_profesor == 2;
    }).map((doc: any) => {
        return doc;
    });

    let invitado = query.ced_per_docente.filter((prof: any) => {
        return prof.ced_docentes.tipo_profesor == 3;
    }).map((doc: any) => {
        return doc;
    });

    return { //chorizote que la neta me da flojera optimizar
        ciclo: params.ciclo,
        residente: newName,
        titular: titular[0].ced_docentes.nombre + ' ' + titular[0].ced_docentes.paterno + ' ' + titular[0].ced_docentes.materno,
        adjuntoinvitado: adjunto.slice(-1)[0] == undefined ? (invitado.slice(-1)[0] == undefined ? '-' : invitado.slice(-1)[0].ced_docentes.nombre + ' ' + invitado.slice(-1)[0].ced_docentes.paterno + ' ' + invitado.slice(-1)[0].ced_docentes.materno) : adjunto.slice(-1)[0].ced_docentes.nombre + ' ' + adjunto.slice(-1)[0].ced_docentes.paterno + ' ' + adjunto.slice(-1)[0].ced_docentes.materno,
        nombre: params.nombre,
        especialidad: newSpecialty,
        periodo: params.mes,
        modulo: query.ced_modulo.modulo,
        grado: params.grado,
        inasistencias: query.faltas == '0' ? ' ' : query.faltas,
        ordinario: parseFloat(query.ex_ord).toFixed(2),
        fec_ord: moment(query.fec_ord).utc().format('YYYY-MM-DD'),
        exordinario: query.ex_extra == null ? ' ' : parseFloat(query.ex_extra).toFixed(2),
        fec_extra: query.fec_extra == null ? ' ' : moment(query.fec_extra).utc().format('YYYY-MM-DD'),
        cal_total: query.ex_extra != null ? (parseFloat(query.ex_ord).toFixed(2) > parseFloat(query.ex_extra).toFixed(2) ? parseFloat(query.ex_ord).toFixed(2) : parseFloat(query.ex_extra).toFixed(2)) : parseFloat(query.ex_ord).toFixed(2),
        total_porcentaje: (totala + totalb + parseFloat(query.act_16)).toFixed(2),
        observaciones: query.observaciones == null ? ' ' : query.observaciones,
        act1: parseFloat(query.act_1).toFixed(2),
        act2: parseFloat(query.act_2).toFixed(2),
        act3: parseFloat(query.act_3).toFixed(2),
        act4: parseFloat(query.act_4).toFixed(2),
        act5: parseFloat(query.act_5).toFixed(2),
        act6: parseFloat(query.act_6).toFixed(2),
        act7: parseFloat(query.act_7).toFixed(2),
        act8: parseFloat(query.act_8).toFixed(2),
        act9: parseFloat(query.act_9).toFixed(2),
        act10: parseFloat(query.act_10).toFixed(2),
        act11: parseFloat(query.act_11).toFixed(2),
        act12: parseFloat(query.act_12).toFixed(2),
        act13: parseFloat(query.act_13).toFixed(2),
        act14: parseFloat(query.act_14).toFixed(2),
        act15: parseFloat(query.act_15).toFixed(2),
        act16: parseFloat(query.act_16).toFixed(2),
        totala: totala.toFixed(2),
        totalb: totalb.toFixed(2),
        act1_cal: (parseFloat(query.act_1) * 100)/ 3.00,
        act2_cal: (parseFloat(query.act_2) * 100)/ 2.50,
        act3_cal: (parseFloat(query.act_3) * 100)/ 1.50,
        act4_cal: (parseFloat(query.act_4) * 100)/ 2.00,
        act5_cal: (parseFloat(query.act_5) * 100)/ 1.00,
        act6_cal: (parseFloat(query.act_6) * 100)/ 1.00,
        act7_cal: (parseFloat(query.act_7) * 100)/ 3.00,
        act8_cal: (parseFloat(query.act_8) * 100)/ 3.50,
        act9_cal: (parseFloat(query.act_9) * 100)/ 1.50,
        act10_cal: (parseFloat(query.act_10) * 100)/ 1.00,
        act11_cal: (parseFloat(query.act_11) * 100)/ 4.00,
        act12_cal: (parseFloat(query.act_12) * 100)/ 4.00,
        act13_cal: (parseFloat(query.act_13) * 100)/ 4.00,
        act14_cal: (parseFloat(query.act_14) * 100)/ 4.00,
        act15_cal: (parseFloat(query.act_15) * 100)/ 4.00,
        totala_cal: ((totala * 100) / 20.00).toFixed(0),
        totalb_cal: ((totalb * 100) / 20.00).toFixed(0)
    }
}