import { Query } from './index';

const getResources = async () => Query(
    `SELECT * FROM resources`
);

export default {
    getResources
}