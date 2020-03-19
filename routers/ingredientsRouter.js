const express = require("express")
const helpers = require("../helpers/ingredientsHelpers")

const ingredientsRouter = express.Router()

ingredientsRouter.get("/", (req, res) => {
    helpers.getIngredients()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json("error")
    })
})

ingredientsRouter.get("/:id/recipes", (req, res) => {
    const {id} = req.params
    helpers.getRecipesByIngredients(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json("error")
    })
})

module.exports = ingredientsRouter