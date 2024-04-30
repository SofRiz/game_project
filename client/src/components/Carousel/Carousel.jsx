import "./carrusel.css"

const Carousel = ({ game }) => {
    if (!game) {
        return <p>Cargando...</p>
    }

    if (!game.imageUrls || game.imageUrls.length === 0) {
        return <p>No hay imagenes para este juego</p>
    }

    const imagesToDisplay = game.imageUrls.slice(1)

    return (
        <section className="carrusel">
            {imagesToDisplay.map((imageUrl, index) => (
                <img className="img__carrusel" key={index} src={imageUrl} alt={`Image ${index + 1}`} />
            ))}
        </section>
    )
}

export default Carousel
