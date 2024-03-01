import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { createEvaluation, deleteEvaluation, getEvaluations, getInfoEvaluation, getTotalEvaluations, updateEvaluation } from "../controllers/evaluations";
import { cleanFields } from "../middlewares/clean-emptyFields";

const router = Router();

router.get('/', getEvaluations);
router.get('/total/count', getTotalEvaluations)
router.get('/total/infoEvaluation', getInfoEvaluation)

router.post('/', [
    check('grado_residente', "El campo grado es obligatorio"),
    check('id_residente', "El campo residente es obligatorio"),
    check('id_periodo', "El campo periodo es obligatorio"),
    check('id_modulo', "El campo modulo es obligatorio"),
    validateFields
], createEvaluation);

router.put('/:id', [
    cleanFields
], updateEvaluation)

router.delete('/:id', deleteEvaluation);

export default router;