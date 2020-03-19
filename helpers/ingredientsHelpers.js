const db = require("../data/db-config")

module.exports = {
    getIngredients,
    getRecipesByIngredients
}

function getIngredients() {
    return db("ingredients")
}

function getRecipesByIngredients(ingredient_id) {
    return db("ingredients")
}