import { Router } from 'express';
import { getAllDeserts,addDesert,updateDesert,deleteDesert } from '../controllers/deserts';

const router = Router();

router.get('/deserts', getAllDeserts);
router.post('/deserts', addDesert);
router.put('/deserts/:desertid', updateDesert);
router.delete('/deserts/:desertid', deleteDesert);

export default router;