import { Router } from 'express';
import recipeRouter from './recipe';
import blogsRouter from './blogPosts';


const router = Router();

router.use('/recipes', recipeRouter);
router.use('/blogPosts', blogsRouter);


export default router;