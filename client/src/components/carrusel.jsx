import Ascensor1 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_1.png";
import Ascensor2 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_2.png";
import Ascensor3 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_3.png";
import Ascensor4 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_4.png";
import Ascensor5 from "../assets/Interfaces/Interfaz GAME/Minuaturas carrusel/Ascensor/Ascensor_5.png";
import "../components/carrusel/carrusel.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const JustifiedExample = () => {
    return (
      <div className="tabla__contenedor">
            <Tabs
            defaultActiveKey="Grado"
            className="tabla"
            justify
            >
            <Tab className="tabla__containerinfo" eventKey="Grado" title="Grado">
            <p className="tabla__info">Tab content for Home</p>
            </Tab>
            <Tab className="tabla__containerinfo" eventKey="Unidad" title="Unidad">
                <p className="tabla__info">Tab content for Profile</p>
            </Tab>
            <Tab className="tabla__containerinfo" eventKey="Asignatura" title="Asignatura">
                <p className="tabla__info">Tab content for Loooonger Tab</p>
            </Tab>
            <Tab className="tabla__containerinfo" eventKey="Descripcion" title="Descripcion">
                <p className="tabla__info">En un campo de prácticas sumido en el desorden y la confusion, 
                tienes que encontrar y colocar las partes de los EPIs utilizados en la extincion de incendios forestales.</p>
            </Tab>
        </Tabs>
      </div>
    );
  }

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

export {Carrusel, JustifiedExample} ;