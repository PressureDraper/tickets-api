import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { createCycle, getCycles } from "../controllers/cycles";

const router: Router = Router();

router.get('/', getCycles);

router.post('/', [
    check("ciclo", "El campo ciclo es obligatorio y debe ser válido").notEmpty().isLength({min: 9, max: 9}).matches('^2[0-9]{3}-2[0-9]{3}$'),
    validateFields
], createCycle);

export default router;