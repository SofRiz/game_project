module.exports = (app) => {
    const gameRoutes = require("./game.routes")
    app.use("/api", gameRoutes)
}
