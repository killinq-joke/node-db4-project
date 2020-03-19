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
  return db("recipes")
    .select("ingredient_name")
    .sum({ingredient_qty: "ingredient_qty"})
    .join("steps", "steps.recipe_id", "=", "recipes.id")
    .join("ingredients", "ingredients.id", "=", "steps.ingredient_id")
    .where("recipes.id", id)
    .groupBy("ingredients.ingredient_name");
}

function getInstructions(id) {
  return db("steps")
  .select("step_number", "step_name")
  .join("recipes", "recipes.id", "=", "steps.recipe_id")
  .where("recipes.id", id)
  .orderBy("steps.step_number")
  ;
}
