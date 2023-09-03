import {Router} from 'express';

const router = Router();

router.post('/addIngredient');

router.get('/getAllIngredients');

router.patch('/ingredient/:id');

router.delete('/ingredient/:id');

export default router;