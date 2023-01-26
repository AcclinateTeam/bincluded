import { Router } from 'express';
import db from '../db'

const router = Router();

// GET /api/blogPosts
router.get('/allres', async (req, res) => {
    try {
        const resources = await db.resources.getResources();
        res.setHeader('Cache-Control', 'max-age=604800, no-cache');
        res.json(resources);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `This did not work!`, error });
    }
});

router.get('/partners', async (req, res) => {
    try {
        const partners = await db.resources.getPartners();
        res.setHeader('Cache-Control', 'max-age=604800, no-cache');
        res.json(partners);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `This did not work!`, error });
    }
});

router.get('/partners/:slug', async (req, res) => {
    try {
        const partners = await db.resources.getPartner(req.params.slug);
        res.setHeader('Cache-Control', 'max-age=604800, no-cache');
        res.json(partners);
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