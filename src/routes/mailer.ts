import { Router } from "express";
import { sendEvaluationEmails } from "../controllers/mailer";

const router = Router();


router.post('/', sendEvaluationEmails);

export default router;