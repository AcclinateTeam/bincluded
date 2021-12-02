import * as express from 'express';
import recipeRouter from './recipe'

const router = express.Router();

router.use('/recipes', recipeRouter)

export default router;