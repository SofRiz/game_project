import Background from "../components/Background/Background";
import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image1 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_2.png"
import Image2 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Embarque/Embarque_1.png"
import Image3 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/EPIS/EPIS_2.png"
import Image4 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Extinciขn/Extinciขn_3.png"
import Image5 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Hemorragia/Hemorragia_1.png"
import Image6 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Maniobras/Maniobras_3.png"

function Home() {
    return (
        <Container className="contenedor">
            <Background id="bgparticles" />
            <Row className="fila1">
                <Col className="columna1">
                    <div className="p-3"><img src={Image1} className="img" alt="Rescate en ascensor" /></div>
                    <div className="text">Rescate en ascensor</div>
                </Col>
                <Col className="columna1">
                    <div className="p-3"><img src={Image2} className="img" alt="Embarque en helicóptero" /></div>
                    <div className="text">Embarque en helicóptero</div>
                </Col>
                <Col className="columna1">
                    <div className="p-3"><img src={Image3} className="img" alt="Tipología y características de los EPIs" /></div>
                    <div className="text">Tipología y características de los EPIs</div>
                </Col>
            </Row>
            <Row className="fila2">
                <Col className="columna2">
                    <div className="p-3"><img src={Image4} className="img" alt="Maniobras de extinción" /></div>
                    <div className="text">Maniobras de extinción</div>
                </Col>
                <Col className="columna2">
                    <div className="p-3"><img src={Image5} className="img" alt="Protocolo ante una hemorragia" /></div>
                    <div className="text">Protocolo ante una hemorragia</div>
                </Col>
                <Col className="columna2">
                    <div className="p-3"><img src={Image6} className="img" alt="Señalización a helicoptero" /></div>
                    <div className="text">Señalización a helicoptero</div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
