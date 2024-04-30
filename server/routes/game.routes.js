const router = require("express").Router()
const mongoose = require("mongoose")
const cloudinary = require("cloudinary")
const multer = require("multer")
const Game = require("../models/Game.model")

const storage = multer.memoryStorage()
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
    },
})

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

router.post("/", upload.array("imageFiles", 10), async (req, res) => {
    try {
        const imageFiles = req.files
        const newGameData = req.body

        const imageUrls = await uploadImages(imageFiles)
        newGameData.imageUrls = imageUrls
        const game = new Game(newGameData)
        await game.save()
        return res.status(200).json(game)
    } catch (error) {
        console.error(`Error creating game:${error}`)
        res.status(500).json(error)
    }
})

async function uploadImages(imageFiles) {
    const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64")
        let dataURI = `data:${image.mimetype};base64,${b64}`
        const res = await cloudinary.v2.uploader.upload(dataURI)
        return res.url
    })
    const imageUrls = await Promise.all(uploadPromises)
    return imageUrls
}

module.exports = router
