import express from 'express';
import {
  GetAllStores,
  CreateStore,
  UpdateStore,
  DeleteStore,
} from '../controllers/strores';

const router = express.Router();

router.get('/stores', GetAllStores);
router.post('/stores', CreateStore);
router.put('/stores/:storeid', UpdateStore);
router.delete('/stores/:storeid', DeleteStore);

export default router;