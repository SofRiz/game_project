import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

const JustifiedExample = ({ game }) => {
    if (!game) {
        return <p>Loading......</p>
    }
    return (
        <div className="tabla__contenedor">
            <Tabs defaultActiveKey="Grado" className="tabla" justify>
                <Tab
                    className="tabla__containerinfo"
                    eventKey="Grado"
                    title="Grado"
                >
                    <p className="tabla__info">{game.grado}</p>
                </Tab>
                <Tab
                    className="tabla__containerinfo"
                    eventKey="Unidad"
                    title="Unidad"
                >
                    <p className="tabla__info">{game.unidad}</p>
                </Tab>
                <Tab
                    className="tabla__containerinfo"
                    eventKey="Asignatura"
                    title="Asignatura"
                >
                    <p className="tabla__info">{game.asignatura}</p>
                </Tab>
                <Tab
                    className="tabla__containerinfo"
                    eventKey="Descripcion"
                    title="Descripción"
                >
                    <p className="tabla__info">{game.descripcion}</p>
                </Tab>
            </Tabs>
        </div>
    )
}

export default JustifiedExample
