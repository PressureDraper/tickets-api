import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { getActivities, getActivity } from "../controllers/activities";

const router: Router = Router();

router.get('/', getActivities);
router.get('/:id', getActivity);

export default router;