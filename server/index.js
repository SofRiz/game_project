require("dotenv").config()
require("./db/mongodb")
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

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
