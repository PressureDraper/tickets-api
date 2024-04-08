import { Router } from "express";
import { getEmployee } from "../controllers/sicaEmployee";

const router = Router();

router.get('/', getEmployee);

export default router;