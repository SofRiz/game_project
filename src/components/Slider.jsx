import Carousel from 'react-bootstrap/Carousel';
import Ascensor1 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_1.png";
import Ascensor2 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_2.png";
import Ascensor3 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_3.png";
import Ascensor4 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_4.png";
import Ascensor5 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_5.png";
import "../components/carrusel/Slider.css";




const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={null}>
                <img
                    src={Ascensor1}
                />

            </Carousel.Item>
            <Carousel.Item interval={null}>
                <img
                    src={Ascensor2}

                />

            </Carousel.Item>
            <Carousel.Item interval={null}>
                <img
                    src={Ascensor3}

                />

            </Carousel.Item>
            <Carousel.Item interval={null}>
                <img
                    src={Ascensor4}

                />

            </Carousel.Item>
            <Carousel.Item interval={null}>
                <img
                    src={Ascensor5}

                />

            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;