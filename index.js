const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(helmet())

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})