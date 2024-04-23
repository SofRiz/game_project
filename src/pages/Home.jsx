import React from "react"
import ascensor from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_1.png"
import { dataGame } from "../utils/data"

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            {dataGame.map((game) => (
                <div key={game.id}>
                    <h2>{game.titulo}</h2>
                    <p>{game.descripcion}</p>
                    <p>Unidad: {game.unidad}</p>
                    <p>Grado: {game.grado}</p>
                    <img src={require(game.imagenes[0])} alt="First Image" />
                </div>
            ))}
        </div>
    )
}

export default Home
