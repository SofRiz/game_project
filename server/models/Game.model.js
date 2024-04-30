const { Schema, model } = require("mongoose")
const { type } = require("os")

const gameSchema = new Schema(
    {
        titulo: {
            type: String,
            required: true,
        },
        tituloHome: {
            type: String,
            required: true,
        },
        unidad: {
            type: String,
            required: true,
        },
        grado: {
            type: String,
            required: true,
        },
        asignatura: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        dificultad: {
            type: String,
            required: true,
        },
        duracion: {
            type: Number,
            required: true,
        },
        imageUrls: [
            {
                type: String,
            },
        ],
    },
    {
        timestamps: true,
    }
)

const Game = model("Game", gameSchema)

module.exports = Game
