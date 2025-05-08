import { Router } from 'express';
import { GetPizzas,AddNewPizza,UpdatePizza,DeletePizza } from '../controllers/pizza';

const router = Router();

router.get('/pizzas', GetPizzas);
router.post('/pizzas', AddNewPizza);
router.put('/pizzas/:pizzaid', UpdatePizza);
router.delete('/pizzas/:pizzaid', DeletePizza);


export default router;