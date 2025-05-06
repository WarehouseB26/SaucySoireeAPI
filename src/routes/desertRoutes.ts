import { Router } from 'express';
import { getAllDeserts } from '../controllers/deserts';

const router = Router();

router.get('/deserts', getAllDeserts);

export default router;