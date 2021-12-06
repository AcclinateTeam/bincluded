import { Query } from './index';

const getBlogPosts = async () => Query(
    `SELECT * FROM blogPosts WHERE userid = '1' LIMIT 3`
);

const getBlogs = async () => Query(
    `SELECT * FROM blogPosts`
);

const getPost = async (id: any) => Query(
    `SELECT * FROM blogPosts WHERE id = ?`, [id]
);

const getFeatPosts = async () => Query(
    `SELECT * FROM blogPosts WHERE userid = '2' LIMIT 4`
);

export default {
    getBlogPosts,
    getFeatPosts,
    getBlogs,
    getPost
}