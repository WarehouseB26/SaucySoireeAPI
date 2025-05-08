import { Router } from 'express';
import { getAllRefreshments } from '../controllers/refreshments';

const router = Router();

router.get('/refreshments', getAllRefreshments);

export default router;