import * as mysql from 'mysql';
import Recipes from './recipes';


require('dotenv').config();

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
  });

connection.connect(function(err) {
    if(err) throw err;
    console.log('Connected to Database!');
});

export const Query = (query: string, values?: Array<string | number>) =>{
    return new Promise<Array<any>>((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) return reject(err)
            return resolve(results)
        })
    })
}

export default {
    Recipes
}