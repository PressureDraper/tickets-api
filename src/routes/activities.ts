import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { createActivity, deleteActivity, getActivities, getActivity, updateActivity } from "../controllers/activities";
import { cleanFields } from "../middlewares/clean-emptyFields";

const router: Router = Router();

router.get('/', getActivities);
router.get('/:id', getActivity);

router.post('/', [
    check('descripcion', "El campo descripcion es obligatorio").notEmpty(),
    check('excelente', "El campo excelente es obligatorio").notEmpty(),
    check('excelente', "El campo excelente debe ser un valor numérico").isNumeric(),
    check('bueno', "El campo bueno es obligatorio").notEmpty(),
    check('bueno', "El campo bueno debe ser un valor numérico").isNumeric(),
    check('regular', "El campo regular es obligatorio").notEmpty(),
    check('regular', "El campo regular debe ser un valor numérico").isNumeric(),
    check('deficiente', "El campo deficiente es obligatorio").notEmpty(),
    check('deficiente', "El campo deficiente debe ser un valor numérico").isNumeric(),
    check('muy_deficiente', "El campo muy_deficiente es obligatorio").notEmpty(),
    check('muy_deficiente', "El campo muy_deficiente debe ser un valor numérico").isNumeric(),
    validateFields
], createActivity)

router.put('/:id', [
    cleanFields
], updateActivity);

router.delete('/:id', deleteActivity);

export default router;