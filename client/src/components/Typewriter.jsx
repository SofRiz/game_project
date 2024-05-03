import { useEffect, useState } from "react"

const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayText(text.substring(0, currentIndex))
            setCurrentIndex((prevIndex) => prevIndex + 1)
            if (currentIndex === text.length) {
                clearInterval(intervalId)
            }
        }, 150)
        return () => clearInterval(intervalId)
    }, [text, currentIndex])

    return (
        <div className="typewriter-container">
            <h1 className="typewriter-text">{displayText}</h1>
        </div>
    )
}

export default Typewriter
