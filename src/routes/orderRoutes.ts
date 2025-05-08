import { Router } from 'express';
import { getAllOrders } from '../controllers/orders';

const router = Router();

router.get('/orders', getAllOrders);

export default router;