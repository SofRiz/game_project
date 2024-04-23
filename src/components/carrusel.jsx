import Ascensor1 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_1.png";
import Ascensor2 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_2.png";
import Ascensor3 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_3.png";
import Ascensor4 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_4.png";
import Ascensor5 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_5.png";
import "../carrusel.css";
const Carrusel = () => {
    return (
        <section className="carrusel">
            <img src={Ascensor1}></img>
            <img src={Ascensor2}></img>
            <img src={Ascensor3}></img>
            <img src={Ascensor4}></img>
            <img src={Ascensor5}></img>

        </section>
    )

}

export default Carrusel;