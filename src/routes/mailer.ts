import { Router } from "express";
import { getStudentsToMail, sendEvaluationEmails } from "../controllers/mailer";

const router = Router();

router.get('/', getStudentsToMail);
router.post('/', sendEvaluationEmails);

export default router;