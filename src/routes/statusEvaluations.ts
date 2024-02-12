import { Router } from "express";
import { getStatusEvaluation } from "../controllers/evaluationStatus";

const router = Router();


router.get('/', getStatusEvaluation);

export default router;