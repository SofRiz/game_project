import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Image1 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_2.png"
import Background from "../components/Background/Background"
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

    if (!games) {
        return <p>Cargando home</p>
    }

    return (
        <Container className="contenedor">
            <Background id="bgparticles" />
            {games.map((game) => (
                <Link key={game._id} to={`/${game._id}`}>
                    <Row className="fila1">
                        <Col className="columna1">
                            <div className="p-3">
                                {game.imageUrls &&
                                    game.imageUrls.length > 0 && (
                                        <img
                                            src={game.imageUrls[0]}
                                            className="img"
                                            alt={game.tituloHome}
                                        />
                                    )}
                            </div>
                            <div className="text">{game.tituloHome}</div>
                        </Col>
                    </Row>
                </Link>
            ))}
        </Container>
    )
}

export default Home
