import React from 'react'
import "../App.css"

const PlayGame = () => {
    return (
        <div className='pantallaJuego'>

            <iframe
                class="juego"
                scrolling="no"
                allowfullscreen=""
                frameborder=""
                height="700px"
                width="800px"
                src="https://html-classic.itch.zone/html/8561483/index.html"
            ></iframe>

        </div>
    )
}


export default PlayGame