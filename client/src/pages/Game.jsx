import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Carousel from "../components/Carousel/Carousel"
import Number from "../components/CountNumber/Count"
import JustifiedExample from "../components/JustifiedExample/JustifiedExample"
import Typewriter from "../components/Typewriter"
import gameService from "../services/game.service"
import Slider from "../components/Slider/Slider"


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
        <Typewriter text={game.tituloHome} />
        <div className="double-column">
         <JustifiedExample game={game} />
          <Carousel game={game} />
        </div>
        <div className="RS">
          <Slider dificultad={game.dificultad} />
          <div className="count">
            <label className="contador">
              {" "}
              Duración:
              <span className="number">
                {" "}
                <Number n={10} />{" "}
              </span>
              Minutos
            </label>
          </div>
        </div>
        <div className="cont-anim">
          <Link className="Button" to={`/games`}>
            <div className="btn">
              {" "}
              <a href="">Comenzar</a>
            </div>
          </Link>
        </div>
      </main>
    );
}

export default Game
