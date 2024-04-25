import React, { useEffect, useState } from "react"
import ascensor from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_1.png"
import { dataGame } from "../utils/data"

import { Link } from "react-router-dom"
import gameService from "../services/game.service"

const Home = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetchGames()
    }, [])

    const fetchGames = async () => {
        try {
            const response = await gameService.getGames()
            setGames(response.data)
        } catch (error) {
            console.log("Error fetching games", error)
        }
    }
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            {games.map((game) => (
                <Link key={game._id} to={`${game._id}`}>
                    <h2>{game.titulo}</h2>
                    <p>{game.tituloHome}</p>
                    <p>Unit: {game.unidad}</p>
                    <p>Grade: {game.grado}</p>
                    <p>Subject: {game.asignatura}</p>
                    <p>Description: {game.descripcion}</p>
                </Link>
            ))}
        </div>
    )
}

export default Home
