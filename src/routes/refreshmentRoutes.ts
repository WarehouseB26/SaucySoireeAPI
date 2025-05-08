import { Router } from 'express';
import {
  getAllRefreshments,
  addRefreshment,
  updateRefreshment,
  deleteRefreshment,
} from '../controllers/refreshments';

const router = Router();

router.get('/refreshments', getAllRefreshments);
router.post('/refreshments', addRefreshment);
router.put('/refreshments/:refreshmentid', updateRefreshment);
router.delete('/refreshments/:refreshmentid', deleteRefreshment);

export default router;