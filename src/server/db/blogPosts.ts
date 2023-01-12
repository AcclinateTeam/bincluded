import { Query } from './index';

const getBlogPosts = async () => Query(
    `SELECT * FROM blogPosts WHERE userid = '1' ORDER by id DESC`
);

const getBlogs = async () => Query(
    `SELECT * FROM blogPosts WHERE userid = '1' ORDER by id DESC LIMIT 4`
);

const getPost = async (slug: any) => Query(
    `SELECT * FROM blogPosts WHERE slug = ?`, [slug]
);

const getFeatPosts = async () => Query(
    `SELECT * FROM blogPosts WHERE userid = '1' LIMIT 4`
);

export default {
    getBlogPosts,
    getFeatPosts,
    getBlogs,
    getPost
}