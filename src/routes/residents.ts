import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { createResidents, getResidents } from "../controllers/residents";

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

export default router;