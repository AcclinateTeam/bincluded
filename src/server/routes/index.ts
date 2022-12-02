import { Router } from 'express';
import recipeRouter from './recipe';
import blogsRouter from './blogPosts';
import storiesRouter from './stories';
import resourcesRouter from './resources';


const router = Router();

router.use('/recipes', recipeRouter);
router.use('/blogPosts', blogsRouter);
router.use('/stories', storiesRouter);
router.use('/resources', resourcesRouter);


export default router;