require("dotenv").config()
require("./db/mongodb")

const express = require("express")
const app = express()

require("./config")(app)

require("./routes")(app)

require("./error-handling")(app)

const PORT = process.env.PORT || 5005

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})

module.exports = app
