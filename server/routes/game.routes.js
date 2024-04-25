const router = require("express").Router()
const mongoose = require("mongoose")
const Game = require("../models/Game.model")

router.get("/", async (req, res) => {
    try {
        const gameList = await Game.find()
        return res.status(200).json(gameList)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/:game_id", async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.game_id)) {
        res.status(404).json({ message: "Invalid ID" })
        return
    }
    try {
        const gameId = await Game.findById(req.params.game_id)
        return res.status(200).json(gameId)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/", async (req, res) => {
    const newGameData = {
        ...req.body,
    }
    try {
        const newGame = await Game.create(newGameData)
        return res.status(200).json(newGame)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
