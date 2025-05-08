import { Router } from 'express';
import {
  getAllOrders,
  addOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/orders';

const router = Router();

router.get('/orders', getAllOrders);
router.post('/orders', addOrder);
router.put('/orders/:orderid', updateOrder);
router.delete('/orders/:orderid', deleteOrder);

export default router;