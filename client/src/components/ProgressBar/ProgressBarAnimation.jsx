import React, { useEffect, useState } from "react"
import ProgressBar from "react-bootstrap/ProgressBar"
import "./ProgressBarAnimation.css"

const ProgressBarAnimation = () => {
    const [greenWidth, setGreenWidth] = useState(0)
    const [yellowWidth, setYellowWidth] = useState(0)
    const [redWidth, setRedWidth] = useState(0)

    useEffect(() => {
        const animateProgress = (targetWidth, setWidth) => {
            let currentWidth = 0
            const duration = 2000
            const interval = setInterval(() => {
                currentWidth += (targetWidth / duration) * 10
                setWidth(currentWidth)
                if (currentWidth >= targetWidth) {
                    clearInterval(interval)
                }
            }, 10)
        }

        animateProgress(100, setGreenWidth)
        animateProgress(3, setYellowWidth)
        animateProgress(3, setRedWidth)
    }, [])

    return (
        <div className="container">
            <h2>Nivel de Dificultad</h2>
            <div className="progressBarWrapper">
                <ProgressBar
                    now={greenWidth}
                    variant="success"
                    
                  
                />
            </div>
            <div className="progressBarWrapper">
                <ProgressBar now={yellowWidth} variant="warning" />
            </div>
            <div className="progressBarWrapper">
                <ProgressBar now={redWidth} variant="danger" />
            </div>
        </div>
    )
}

export default ProgressBarAnimation
