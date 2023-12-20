import { Router } from "express";
import { check } from "express-validator";
import { createSpecialty, deleteSpecialty, getSpecialties, getTotalSpecialties, updateSpecialty } from "../controllers/specialties";
import { validateFields } from "../middlewares/validate-fields";

const router : Router = Router();

router.get('/', getSpecialties);
router.get( '/total/count', getTotalSpecialties );

router.post('/', [
    check('nombre', 'El campo nombre es obligatorio').not().isEmpty(),
    check('codigo', 'El campo codigo es obligatorio').not().isEmpty(),
    check('grado_maximo', 'El campo grado maximo es obligatorio').not().isEmpty(),
    validateFields
], createSpecialty)

router.put('/:id', updateSpecialty);

router.delete('/:id', deleteSpecialty)

export default router;