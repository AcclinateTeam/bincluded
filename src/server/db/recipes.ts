import { Query } from "./index";

const getRecipe = async () =>
  Query(`select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.meals, recipes.servings, recipes.imagelink, recipes._created, users.username from recipes
  join users on users.id=recipes.userid`);

  const getRandomRecipe = async () =>
  Query(`select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.meals, recipes.servings, recipes.imagelink, recipes._created, users.username from recipes
  join users on users.id=recipes.userid
  order by rand()
  limit 2`);

const oneRecipe = async (id: any) =>
  Query(
    `SELECT * FROM  recipes WHERE recipes.id = ?`, [id]
  )

const oneUser = async (id: any) => Query(`SELECT * FROM  users WHERE users.id = ?`, [id])

const oneIngredient = async (id: any) => Query(`SELECT * FROM  ingredients WHERE ingredients.recipeid = ?`, [id])

const oneComments = async (id: any) => Query(`SELECT * FROM  comments WHERE comments.recipeid = ?`, [id])




// const oneRecipe = async (id: any) =>
//   Query(
//     `select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink,  ingredients.name, ingredients.amount, users.username, comments.comment from recipes
//   join ingredients on recipes.id = ingredients.recipeid
//   join users on recipes.userid=users.id
//   join comments on recipes.id = comments.recipeid
//   where recipes.id = ?`,
//     [id]
//   );

const postUser = async (username: string | number) =>
  Query(`insert into users(username) values(?);`, [username]);

const postRecipe = async (
  imagelink: string | number,
  title: string | number,
  directions: string | number,
  description: string | number,
  meals: string | number,
  cooktime: string | number,
  servings: string | number,
  userid: string | number,
  username: string | number
) =>
  Query(
    `insert into recipes(imagelink, title, directions, description, cooktime, servings, userid) values(?,?,?,?,?,?,?);`,
    [imagelink, title, directions, description, meals, cooktime, servings, userid, username]
  );

const postIngredients = async (name: string | number, amount: string | number, recipeid: string | number) =>
  Query(`insert into ingredients(name, amount, recipeid) values(?,?,?);`, [
    name,
    amount,
    recipeid,
  ]);

const postComments = async (comment: string | number, recipeid: string | number) => Query(`insert into comments(comment, recipeid) values(?,?)`, [comment, recipeid]);

const searchRecipesByIngredient = async (ingname: string) => Query(`select recipes.*, ingredients.name,  users.username from recipes
join ingredients on recipes.id = ingredients.recipeid
join users on users.id=recipes.userid
where ingredients.name = ?`, [ingname])

const searchRecipesByUsername = async (username: string) => Query(`select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink, users.username from recipes

join users on users.id=recipes.userid
where users.username = ?`,[username])

const searchRecipesByTitle = async (title: string) => Query(`select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink, users.username 
from users
join recipes on users.id=recipes.userid
where recipes.title = ?`,[title])
export default {
  getRecipe,
  oneRecipe,
  oneUser,
  oneIngredient,
  oneComments,
  postUser,
  postRecipe,
  postIngredients,
  postComments,
  searchRecipesByIngredient,
  searchRecipesByUsername,
  searchRecipesByTitle,
  getRandomRecipe
};
