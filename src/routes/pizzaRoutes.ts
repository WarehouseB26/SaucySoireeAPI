import { Router } from 'express';
import { GetPizzas } from '../controllers/pizza';

const router = Router();

router.get('/pizzas', GetPizzas);

export default router;