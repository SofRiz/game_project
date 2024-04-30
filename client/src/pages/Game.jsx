import React, { useEffect, useState } from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import { useParams } from "react-router-dom"
import Carousel from "../components/Carousel/Carousel"
import JustifiedExample from "../components/JustifiedExample/JustifiedExample"
import ProgressBarAnimation from "../components/ProgressBar/ProgressBarAnimation"
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
        return <p>Loading...</p>
    }

    return (
        <main className="main">
            <h1 className="line-1 anim-typewriter">{game.tituloHome}</h1>

            <div className="double-column">
                <JustifiedExample game={game} />
                <Carousel game={game} />
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
