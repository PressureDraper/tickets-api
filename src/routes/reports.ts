import { Router } from "express";
import { getPdfReport } from "../controllers/reports";

const router: Router = Router();

router.get('/boletaMensual', getPdfReport);

export default router;