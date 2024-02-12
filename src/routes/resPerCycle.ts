import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { cleanFields } from "../middlewares/clean-emptyFields";
import { createResPerCycle, deleteResPerCycle, getResPerCycle, getTotalResPer, migrateResPerCycle, updateResPerCycle } from "../controllers/resPerCycle";

const router = Router();

router.get('/', getResPerCycle);
router.get('/total/count', getTotalResPer);

router.post('/', [
    check('grado_residente', "El campo grado residente es obligatorio").notEmpty(),
    check('id_ciclo', "El campo ciclo es obligatorio").notEmpty(),
    check('id_residente', "El campo residente es obligatorio").notEmpty(),
    validateFields
], createResPerCycle);

router.post('/:id', migrateResPerCycle);

router.put('/:id', [
    cleanFields
], updateResPerCycle)

router.delete('/:id', deleteResPerCycle);

export default router;