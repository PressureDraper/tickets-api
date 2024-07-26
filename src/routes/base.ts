import { Router } from "express";

const router: Router = Router();

router.get('/', (req, res) => {
    res.status(200).send('API Boletas')
});

export default router;