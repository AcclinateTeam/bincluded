import { Router } from 'express';
import db from '../db'

const router = Router();

// GET /api/events
router.get('/events', async (req, res) => {
    try {
        const recentEvents = await db.recentEvents.getRecentEvents();
        res.setHeader('Cache-Control', 'max-age=604800, no-cache');
        res.json(recentEvents);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `This did not work!`, error });
    }
});

// router.get('/blog', async (req, res) => {
//     try {
//         const getBlogs = await db.blogPosts.getBlogs();
//         res.setHeader('Cache-Control', 'max-age=604800, no-cache');
//         res.json(getBlogs);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: `This did not work!`, error });
//     }
// });

// router.get('/:slug', async (req, res) => {
//     try {
//         const getPost = await db.blogPosts.getPost(req.params.slug);
//         res.setHeader('Cache-Control', 'max-age=604800, no-cache');
//         res.json(getPost);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: `This did not work!`, error });
//     }
// });

// GET /api/featPosts
// router.get('/', async (req, res) => {
//     try {
//         const featPosts = await db.blogPosts.getFeatPosts();
//         res.json(featPosts);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: `This did not work!`, error });
//     }
// });

export default router;