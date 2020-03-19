const express = require("express")
const helpers = require("../helpers/recipesHelpers")

const recipesRouter = express.Router()

recipesRouter.get("/", (req, res) => {
    helpers.getRecipes()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json("error")
    })
})

recipesRouter.get("/:id/shoppinglist", (req, res) => {
    const {id} = req.params
    helpers.getShoppingList(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json("error")
    })
})

recipesRouter.get("/:id/instructions", (req, res) => {
    const {id} = req.params
    helpers.getInstructions(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json("error")
    })
})

module.exports = recipesRouter