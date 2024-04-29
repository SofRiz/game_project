import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProgressBarAnimation from "../components/ProgressBar/ProgressBarAnimation"
import { Carrusel, JustifiedExample } from "../components/carrusel"
import gameService from "../services/game.service"
import Number from "../components/CountNumber/Count"


const Game = () => {
  const [game, setGame] = useState(null)
  const { game_id } = useParams()
  const [titleLoaded, setTitleLoaded] = useState(false);

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
      <div className="titleGames">
        <h1 className="line-1 anim-typewriter">{game.tituloHome}</h1>
      </div>
      <div className="double-column">
        <JustifiedExample />
        <Carrusel />
      </div>
      <div className="cont-anim">
        <ProgressBarAnimation />
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
        <div className="Button">
          <div className="btn"> <a href="">Comenzar</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Game
