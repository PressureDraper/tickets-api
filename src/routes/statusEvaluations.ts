import { Router } from "express";
import { getResidentsPerStatusData, getStatusEvaluation } from "../controllers/evaluationStatus";

const router = Router();


router.get('/', getStatusEvaluation);
router.get('/residentStatus', getResidentsPerStatusData);

export default router;