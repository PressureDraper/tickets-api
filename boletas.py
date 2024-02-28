import mysql.connector
import time
import sys


def strFormat(value):
    if value == None:
        value = 'NULL'
    elif value == '':
        value = 'NULL'
    else:
        value = f"'{value}'"

    return value


def numberFormat(value):
    if value == None:
        value = 'NULL'
    elif value == '':
        value = 'NULL'

    return value


if __name__ == "__main__":
    # ---Connection---
    database = mysql.connector.connect(
        host="10.30.0.7", user="server7", passwd="Siscem1037", database="bd_cae")

    database2 = mysql.connector.connect(
        host="127.0.0.1", user="root", passwd="siscae1035", database="boletas")

    # ---Create cursor to manipulate consults---
    cursor = database.cursor(buffered=True)
    cursor2 = database2.cursor(buffered=True)

    # -------INSERTS ced_especialidades-------
    print(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'CIRUJANO GENERAL', '75', 'R4', now(), now(), NULL)")
    cursor2.execute(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'CIRUJANO GENERAL', '75', 'R4', now(), now(), NULL)")

    print(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'CIRUJANO MAXILOFACIAL', '78', 'R4', now(), now(), NULL)")
    cursor2.execute(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'CIRUJANO MAXILOFACIAL', '78', 'R4', now(), now(), NULL)")

    print(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'GINECOBSTETRA', '83', 'R4', now(), now(), NULL)")
    cursor2.execute(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'GINECOBSTETRA', '83', 'R4', now(), now(), NULL)")

    print(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'INTERNISTA', '86', 'R4', now(), now(), NULL)")
    cursor2.execute(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'INTERNISTA', '86', 'R4', now(), now(), NULL)")

    print(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'TRAUMATÓLOGO', '98', 'R4', now(), now(), NULL)")
    cursor2.execute(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'TRAUMATÓLOGO', '98', 'R4', now(), now(), NULL)")

    print(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'MEDICINA DE URGENCIAS', '152', 'R3', now(), now(), NULL)")
    cursor2.execute(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'MEDICINA DE URGENCIAS', '152', 'R3', now(), now(), NULL)")

    print(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'ANESTESIÓLOGO', '84', 'R3', now(), now(), NULL)")
    cursor2.execute(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'ANESTESIÓLOGO', '84', 'R3', now(), now(), NULL)")

    print(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'MÉDICO RADIÓLOGO', '96', 'R3', now(), now(), NULL)")
    cursor2.execute(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'MÉDICO RADIÓLOGO', '96', 'R3', now(), now(), NULL)")

    print(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'PEDIATRA', '94', 'R3', now(), now(), NULL)")
    cursor2.execute(f"INSERT INTO ced_especialidades VALUES(DEFAULT, 'PEDIATRA', '94', 'R3', now(), now(), NULL)")

    # -------MIGRACION ced_docentes-------

    duplicated = []

    cursor.execute("SELECT DISTINCT em.id, SUBSTR(em.matricula,5,4) AS matricula, em.paterno, em.materno, em.nombre, em.correo, em.estatus, em.especialidad FROM rch_empleados as em INNER JOIN ced_evaluacion as ev ON em.id = ev.p_titular")
    titulares = cursor.fetchall()

    cursor.execute("SELECT DISTINCT em.id, SUBSTR(em.matricula,5,4) AS matricula, em.paterno, em.materno, em.nombre, em.correo, em.estatus, em.especialidad FROM rch_empleados as em INNER JOIN ced_evaluacion as ev ON em.id = ev.p_adjunto")
    adjuntos = cursor.fetchall()

    cursor2.execute("SELECT * FROM ced_especialidades")
    especialidades = cursor2.fetchall()

    for data in titulares:
        duplicated.append(data[0])

        matricula = int(data[1])
        paterno = strFormat(data[2])
        materno = strFormat(data[3])
        nombre = strFormat(data[4])
        status = int(data[-2])
        email = strFormat(data[5])
        for reg in especialidades:
            if str(reg[2]) == str(data[-1]):
                especialidad = reg[0]

        print(f"INSERT INTO ced_docentes VALUES(DEFAULT, {matricula}, {paterno}, {materno}, {nombre}, 1, {email}, {status}, {especialidad}, now(), now(), NULL)")
        cursor2.execute(f"INSERT INTO ced_docentes VALUES(DEFAULT, {matricula}, {paterno}, {materno}, {nombre}, 1, {email}, {status}, {especialidad}, now(), now(), NULL)")

    for data in adjuntos:
        if (data[0] not in duplicated):

            matricula = int(data[1])
            paterno = strFormat(data[2])
            materno = strFormat(data[3])
            nombre = strFormat(data[4])
            status = int(data[-2])
            email = strFormat(data[5])
            for reg in especialidades:
                if str(reg[2]) == str(data[-1]):
                    especialidad = reg[0]

            print(f"INSERT INTO ced_docentes VALUES(DEFAULT, {matricula}, {paterno}, {materno}, {nombre}, 2, {email}, {status}, {especialidad}, now(), now(), NULL)")
            cursor2.execute(f"INSERT INTO ced_docentes VALUES(DEFAULT, {matricula}, {paterno}, {materno}, {nombre}, 2, {email}, {status}, {especialidad}, now(), now(), NULL)")

    print(f"INSERT INTO ced_docentes VALUES(DEFAULT, 3775, 'REYES', 'DE LA PARRA', 'VICENTE', 3, NULL, 1, 5, now(), now(), NULL)")
    cursor2.execute(f"INSERT INTO ced_docentes VALUES(DEFAULT, 3775, 'REYES', 'DE LA PARRA', 'VICENTE', 3, NULL, 1, 5, now(), now(), NULL)")

    # -------MIGRACION ced_residentes-------
    cursor.execute("SELECT * FROM ced_residentes")
    residentes = cursor.fetchall()

    for resident in residentes:
        matricula = int(resident[1])
        paterno = strFormat(resident[2])
        materno = strFormat(resident[3])
        nombre = strFormat(resident[4])
        telefono = strFormat(resident[6])
        curp = strFormat(resident[7])
        rfc = strFormat(resident[8])
        correo = strFormat(resident[9])
        status = int(resident[-2])

        for reg in especialidades:
            if str(reg[2]) == str(resident[5]):
                especialidad = reg[0]

        print(f"INSERT INTO ced_residentes VALUES(DEFAULT, {matricula}, {paterno}, {materno}, {nombre}, {telefono}, {curp}, {rfc}, {correo}, {status}, {especialidad}, now(), now(), NULL)")
        cursor2.execute(f"INSERT INTO ced_residentes VALUES(DEFAULT, {matricula}, {paterno}, {materno}, {nombre}, {telefono}, {curp}, {rfc}, {correo}, {status}, {especialidad}, now(), now(), NULL)")

    # -------MIGRACION ced_actividades-------
    cursor.execute("SELECT * FROM ced_actividades")
    actividades = cursor.fetchall()

    for act in actividades:

        desc = strFormat(act[3])
        excelente = act[4]
        bueno = act[5]
        regular = act[6]
        deficiente = act[7]
        muy_deficiente = act[8]

        print(f"INSERT INTO ced_actividades VALUES(DEFAULT, {desc}, {excelente}, {bueno}, {regular}, {deficiente}, {muy_deficiente}, now(), now(), NULL)")
        cursor2.execute(f"INSERT INTO ced_actividades VALUES(DEFAULT, {desc}, {excelente}, {bueno}, {regular}, {deficiente}, {muy_deficiente}, now(), now(), NULL)")

    # -------MIGRACION ced_modulo-------
    cursor.execute("SELECT * FROM ced_modulo")
    modulos = cursor.fetchall()

    for modulo in modulos:
        mod = strFormat(modulo[1])
        rank = strFormat(modulo[3])
        created = strFormat(modulo[2])

        print(f"INSERT INTO ced_modulo VALUES(DEFAULT, {mod}, {rank}, {created}, now(), NULL)")
        cursor2.execute(f"INSERT INTO ced_modulo VALUES(DEFAULT, {mod}, {rank}, {created}, now(), NULL)")

    # -------MIGRACION ced_ciclo-------
    cursor.execute("SELECT * FROM ced_ciclo")
    ciclos = cursor.fetchall()

    for ciclo in ciclos:
        ciclo_des = strFormat(ciclo[1])
        init = strFormat(ciclo[2])
        end = strFormat(ciclo[3])

        print(f"INSERT INTO ced_ciclo VALUES(DEFAULT, {ciclo_des}, {init}, {end}, now(), now(), NULL)")
        cursor2.execute(f"INSERT INTO ced_ciclo VALUES(DEFAULT, {ciclo_des}, {init}, {end}, now(), now(), NULL)")

    # -------MIGRACION ced_periodo------- PENDING: Match IDs -> ced_evaluacion | id 50+ -> id-1
    cursor.execute("SELECT * FROM ced_periodo")
    periodo = cursor.fetchall()

    for pe in periodo:
        period = pe[2]
        mes = strFormat(pe[3])
        init = strFormat(pe[4])
        end = strFormat(pe[5])
        ciclo = pe[1]

        print(f"INSERT INTO ced_periodo VALUES(DEFAULT, {period}, {mes}, {init}, {end}, {ciclo}, now(), now(), NULL)")
        cursor2.execute(f"INSERT INTO ced_periodo VALUES(DEFAULT, {period}, {mes}, {init}, {end}, {ciclo}, now(), now(), NULL)")

    # -------MIGRACION ced_per_ciclo------- PENDING: Match ced_ciclo's IDs -> ced_evaluacion | id 50+ -> id-1
    cursor.execute("SELECT * FROM ced_per_ciclo")
    loop = cursor.fetchall()

    cursor.execute(
        "SELECT c.id_residente, c.grado, c.ciclo ,r.matricula FROM ced_per_ciclo AS c INNER JOIN ced_residentes AS r ON c.id_residente = r.id_residente")
    compare = cursor.fetchall()

    cursor2.execute("SELECT * from ced_residentes")
    nres = cursor2.fetchall()

    for l in loop:
        old_res = l[2]
        rank = strFormat(l[-1])
        id_ciclo = l[1]

        for r in compare:  # fix residents IDs
            idr = r[0]
            if idr == old_res:
                mat = int(r[-1])
                for nr in nres:
                    mat2 = int(nr[1])
                    if mat2 == mat:
                        id_res = nr[0]

        print(f"INSERT INTO ced_per_ciclo VALUES(DEFAULT, {rank}, {id_ciclo}, {id_res}, now(), now(), NULL)")
        cursor2.execute(f"INSERT INTO ced_per_ciclo VALUES(DEFAULT, {rank}, {id_ciclo}, {id_res}, now(), now(), NULL)")

    # -------MIGRACION ced_evaluacion-------

    cursor.execute(
        "SELECT * FROM ced_evaluacion WHERE grado NOT LIKE '' AND p_titular IS NOT NULL")
    evaluacion = cursor.fetchall()

    # Query for fixing residents IDs
    cursor.execute(
        "SELECT e.id_empleados, r.matricula FROM ced_evaluacion AS e INNER JOIN ced_residentes AS r ON e.id_empleados = r.id_residente")
    compare = cursor.fetchall()

    cursor2.execute("SELECT * from ced_residentes")
    nres = cursor2.fetchall()

    # Query for fixing head teacher IDs
    cursor.execute("SELECT DISTINCT ev.p_titular, SUBSTR(em.matricula,5,4) AS matricula FROM ced_evaluacion AS ev INNER JOIN rch_empleados AS em ON ev.p_titular = em.id")
    titular = cursor.fetchall()

    cursor.execute("SELECT DISTINCT ev.p_adjunto, SUBSTR(em.matricula,5,4) AS matricula FROM ced_evaluacion AS ev INNER JOIN rch_empleados AS em ON ev.p_adjunto = em.id")
    adjunto = cursor.fetchall()

    cursor2.execute("SELECT * from ced_docentes")
    ndoc = cursor2.fetchall()

    id_eva = 1
    evv = 0
    titl = 0
    adjl = 0

    for eva in evaluacion:
        rank = strFormat(eva[2])
        act_1 = eva[5]
        act_2 = eva[6]
        act_3 = eva[7]
        act_4 = eva[8]
        act_5 = eva[9]
        act_6 = eva[10]
        act_7 = eva[11]
        act_8 = eva[12]
        act_9 = eva[13]
        act_10 = eva[14]
        act_11 = eva[15]
        act_12 = eva[16]
        act_13 = eva[17]
        act_14 = eva[18]
        act_15 = eva[19]
        act_16 = eva[20]
        total = eva[21]
        # 0 = false - 1 = true
        pendiente = 1 if (numberFormat(eva[24]) > 0) else 0
        rotacion = 0  # 0 = false - 1 = true
        faltas = numberFormat(eva[26])
        fec_ord = strFormat(eva[27])
        ex_ord = numberFormat(eva[28])
        fec_extra = strFormat(eva[29])
        ex_extra = numberFormat(eva[30])
        observaciones = strFormat(eva[31])
        enviado = numberFormat(eva[-2])
        visto = numberFormat(eva[25])
        id_clue = numberFormat(eva[-5])
        fec_creacion = strFormat(eva[-3])

        old_id_res = eva[1]
        for r in compare:  # fix residents IDs
            idr = r[0]
            if idr == old_id_res:
                mat = int(r[1])
                for nr in nres:
                    mat2 = nr[1]
                    if mat == mat2:
                        id_res = nr[0]

        id_per = eva[3]  # fix period IDs
        if id_per >= 50:
            id_per = id_per - 1

        id_mod = numberFormat(eva[4])

        # fix head teacher's IDs
        ptitular = int(eva[-9])
        padjunto = int(eva[-8])
        pinvitado = int(eva[-7])

        for ti in titular:
            if int(ti[0]) == ptitular:
                mtitular = int(ti[1])
                for nd in ndoc:
                    mtitular2 = nd[1]
                    if mtitular == mtitular2:
                        id_titular = nd[0]
                        print(f"INSERT INTO ced_per_docente VALUES(DEFAULT, {id_eva}, {id_titular}, {fec_creacion}, now(), NULL)")
                        cursor2.execute(f"INSERT INTO ced_per_docente VALUES(DEFAULT, {id_eva}, {id_titular}, {fec_creacion}, now(), NULL)")

        if adjunto != 0:
            for ad in adjunto:
                if int(ad[0]) == padjunto:
                    madjunto = int(ad[1])
                    for nd in ndoc:
                        madjunto2 = nd[1]
                        if madjunto == madjunto2:
                            id_adjunto = nd[0]
                            print(f"INSERT INTO ced_per_docente VALUES(DEFAULT, {id_eva}, {id_adjunto}, {fec_creacion}, now(), NULL)")
                            cursor2.execute(f"INSERT INTO ced_per_docente VALUES(DEFAULT, {id_eva}, {id_adjunto}, {fec_creacion}, now(), NULL)")

        if pinvitado == 1:
            print(f"INSERT INTO ced_per_docente VALUES(DEFAULT, {id_eva}, 43, {fec_creacion}, now(), NULL)")
            cursor2.execute(f"INSERT INTO ced_per_docente VALUES(DEFAULT, {id_eva}, 43, {fec_creacion}, now(), NULL)")

        print(f"INSERT INTO ced_evaluacion VALUES(DEFAULT, {rank}, {act_1}, {act_2}, {act_3}, {act_4}, {act_5}, {act_6}, {act_7}, {act_8}, {act_9}, {act_10}, {act_11}, {act_12}, {act_13}, {act_14}, {act_15}, {act_16}, {total}, {pendiente}, {rotacion}, {faltas}, {fec_ord}, {ex_ord}, {fec_extra}, {ex_extra}, {observaciones}, {enviado}, {visto}, {id_clue}, {id_res}, {id_per}, {id_mod}, {fec_creacion}, now(), NULL)")
        cursor2.execute(f"INSERT INTO ced_evaluacion VALUES(DEFAULT, {rank}, {act_1}, {act_2}, {act_3}, {act_4}, {act_5}, {act_6}, {act_7}, {act_8}, {act_9}, {act_10}, {act_11}, {act_12}, {act_13}, {act_14}, {act_15}, {act_16}, {total}, {pendiente}, {rotacion}, {faltas}, {fec_ord}, {ex_ord}, {fec_extra}, {ex_extra}, {observaciones}, {enviado}, {visto}, {id_clue}, {id_res}, {id_per}, {id_mod}, {fec_creacion}, now(), NULL)")
        id_eva += 1

    # -------FIN MIGRACIÓN - APLICAR CAMBIOS-------
    database2.commit()
