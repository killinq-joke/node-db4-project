const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db
    .select("ingredient_name", "ingredient_qty")
    .from("recipes")
    .join("steps", "steps.recipe_id", "=", "recipes.id")
    .join("ingredients", "ingredients.id", "=", "steps.ingredient_id")
    .where("recipes.id", id);
}

// select ingredient_qty, ingredient_name
// from recipes as r
// join steps as s
//     on s.recipe_id = r.id
// join ingredients as i
//     on i.id = s.ingredient_id
// where r.id = 2

function getInstructions(recipe_id) {
  return db("recipes");
}
