import { Query } from './index';

const getResources = async () => Query(
    `SELECT * FROM resources`
);

const getPartners = async () => Query(
    `SELECT * FROM featPartners`
);

const getPartner = async (slug: any) => Query(
    `SELECT * FROM featPartners WHERE slug = ?`, [slug]
);

export default {
    getResources,
    getPartners,
    getPartner
}