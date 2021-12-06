import { Router } from 'express';
import db from '../db'

const router = Router();

// GET /api/blogPosts
router.get('/blogComp', async (req, res) => {
    try {
        const blogPosts = await db.blogPosts.getBlogPosts();
        res.json(blogPosts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `This did not work!`, error });
    }
});

router.get('/blog', async (req, res) => {
    try {
        const getBlogs = await db.blogPosts.getBlogs();
        res.json(getBlogs);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `This did not work!`, error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const getPost = await db.blogPosts.getPost(req.params.id);
        res.json(getPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `This did not work!`, error });
    }
});

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