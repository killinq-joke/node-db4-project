const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const recipesRouter = require("./routers/recipesRouter")
const ingredientsRouter = require("./routers/ingredientsRouter")

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use("/api/recipes", recipesRouter)
app.use("/api/ingredients", ingredientsRouter)

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})