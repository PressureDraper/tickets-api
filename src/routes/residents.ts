import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { createResidents, deleteResident, getResidents, updateResident } from "../controllers/residents";
import { cleanFields } from "../middlewares/clean-emptyFields";

const router: Router = Router();

router.get('/', getResidents);

router.post('/', [
    check('matricula', "El campo matricula es obligatorio").notEmpty(),
    check('paterno', "El campo paterno es obligatorio").notEmpty(),
    check('materno', "El campo materno es obligatorio").notEmpty(),
    check('nombre', "El campo nombre es obligatorio").notEmpty(),
    check('curp', "El campo curp es obligatorio").notEmpty(),
    check('status', "El campo status es obligatorio").notEmpty(),
    check('codigo', "El campo codigo es obligatorio").notEmpty(),
    validateFields
], createResidents);

router.put('/:id', [
    cleanFields
], updateResident);

router.delete('/:id', deleteResident);

export default router;