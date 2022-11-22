import { Query } from './index';

const getStories = async () => Query(
    `SELECT * FROM stories`
);

const getStoryPost = async (slug: any) => Query(
    `SELECT * FROM stories WHERE slug = ?`, [slug]
);

export default {
    getStories,
    getStoryPost
}