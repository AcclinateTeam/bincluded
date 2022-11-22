import { Router } from 'express';
import recipeRouter from './recipe';
import blogsRouter from './blogPosts';
import storiesRouter from './stories';


const router = Router();

router.use('/recipes', recipeRouter);
router.use('/blogPosts', blogsRouter);
router.use('/stories', storiesRouter);


export default router;