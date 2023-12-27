import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { cleanFields } from "../middlewares/clean-emptyFields";
import { createTeacher, deleteTeacher, getTeachers, updateTeacher } from "../controllers/teacher";

const router: Router = Router();

router.get('/', getTeachers);

router.post('/', [
    check('matricula', "El campo matricula es obligatorio").notEmpty(),
    check('paterno', "El campo paterno es obligatorio").notEmpty(),
    check('materno', "El campo materno es obligatorio").notEmpty(),
    check('nombre', "El campo nombre es obligatorio").notEmpty(),
    check('tipo_profesor', "El campo tipo profesor es obligatorio").notEmpty(),
    check('status', "El campo status es obligatorio").notEmpty(),
    check('codigo', "El campo codigo es obligatorio").notEmpty(),
    validateFields
] ,createTeacher)

router.put('/:id', [
    cleanFields
], updateTeacher)

router.delete('/:id', deleteTeacher);

export default router;