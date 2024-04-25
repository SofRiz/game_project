import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProgressBarAnimation from "../components/ProgressBar/ProgressBarAnimation"
import { Carrusel, JustifiedExample } from "../components/carrusel"
import gameService from "../services/game.service"

const Game = () => {
    const [game, setGame] = useState(null)
    const { game_id } = useParams()

    useEffect(() => {
        gameService
            .getOneGame(game_id)
            .then(({ data }) => setGame(data))
            .catch((error) => console.log(error))
    }, [game_id])

    if (!game) {
        return <p>Loading.....</p>
    }

    return (
        <main className="main">
            <h1 className="line-1 anim-typewriter">{game.tituloHome}</h1>
            <div className="double-column">
                <JustifiedExample />
                <Carrusel />
            </div>
            <label className="contador">
                {" "}
                Duración:
                <span className="number">
                    {" "}
                    <Number n={10} />{" "}
                </span>
                Minutos
            </label>
            <ProgressBarAnimation />
        </main>
    )
}

export default Game
