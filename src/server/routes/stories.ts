import { Router } from 'express';
import db from '../db'

const router = Router();

// GET /api/blogPosts
router.get('/storyPosts', async (req, res) => {
    try {
        const storyPosts = await db.stories.getStories();
        res.json(storyPosts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `This did not work!`, error });
    }
});

router.get('/:slug', async (req, res) => {
    try {
        const getStory = await db.stories.getStoryPost(req.params.slug);
        res.json(getStory);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `This did not work!`, error });
    }
});

export default router;