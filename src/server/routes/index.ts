// DATABASE IMPORTS
import { Router } from 'express';
import recipeRouter from './recipe';
import blogsRouter from './blogPosts';
import storiesRouter from './stories';
import resourcesRouter from './resources';
import partnerRouter from './resources';
import recentEventsRouter from './recentEvents';

// ROUTER CONSTANT
const router = Router();

// DATABASE ROUTES
router.use('/recipes', recipeRouter);
router.use('/blogPosts', blogsRouter);
router.use('/stories', storiesRouter);
router.use('/resources', resourcesRouter);
router.use('/partners', partnerRouter);
router.use('/recentEvents', recentEventsRouter);

// DATABASE ROUTES EXPORT
export default router;