import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { createModule, deleteModule, getModules, getTotalModules, updateModule } from "../controllers/modules";
import { cleanFields } from "../middlewares/clean-emptyFields";

const router: Router = Router();

router.get('/', getModules);
router.get('/total/count', getTotalModules);

router.post('/', [
    check('modulo', 'El campo modulo es obligatorio').not().isEmpty(),
    check('grado', 'El campo grado es obligatorio').not().isEmpty(),
    validateFields
], createModule);

router.put('/:id', [
    cleanFields
], updateModule);

router.delete('/:id', deleteModule);

export default router;