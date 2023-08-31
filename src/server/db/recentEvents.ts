import { Query } from './index';

const getRecentEvents = async () => Query(
    `SELECT * FROM recent_events;`
);

const getRecentEventByEventId = async (event_id: any) => Query(
    `SELECT * FROM recent_events WHERE event_id = ?;`, [event_id] 
);

// const getBlogs = async () => Query(
//     `SELECT * FROM blogPosts WHERE userid = '1' ORDER by id DESC LIMIT 4`
// );

// const getPost = async (slug: any) => Query(
//     `SELECT * FROM blogPosts WHERE slug = ?`, [slug]
// );

// const getFeatPosts = async () => Query(
//     `SELECT * FROM blogPosts WHERE userid = '1' LIMIT 4`
// );

export default {
    getRecentEvents,
    getRecentEventByEventId
    // getFeatPosts,
    // getBlogs,
    // getPost
}