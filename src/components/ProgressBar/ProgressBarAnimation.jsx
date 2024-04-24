import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProgressBarAnimation = () => {
  const [greenWidth, setGreenWidth] = useState(0);
  const [yellowWidth, setYellowWidth] = useState(0);
  const [redWidth, setRedWidth] = useState(0);

  useEffect(() => {
    const animateProgress = (targetWidth, setWidth) => {
      let currentWidth = 0;
      const duration = 2000; // Duración en milisegundos (2 segundos)
      const interval = setInterval(() => {
        currentWidth += (targetWidth / duration) * 10; // Incremento por cada 10 milisegundos
        setWidth(currentWidth);
        if (currentWidth >= targetWidth) {
          clearInterval(interval);
        }
      }, 10);
    };

    animateProgress(100, setGreenWidth); // Animar barra verde al 100%
    animateProgress(1, setYellowWidth); // Animar barra amarilla al 1%
    animateProgress(1, setRedWidth); // Animar barra roja al 1%
  }, []);

  return (
    <div className="container">
      <h2>Nivel de Dificultad</h2>
      <ProgressBar
        className="mb-3"
        now={greenWidth}
        variant="success"
        label={`${greenWidth.toFixed(0)}%`}
      />
      <ProgressBar
        className="mb-3"
        now={yellowWidth}
        variant="warning"
        label={`${yellowWidth.toFixed(0)}%`}
      />
      <ProgressBar
        className="mb-3"
        now={redWidth}
        variant="danger"
        label={`${redWidth.toFixed(0)}%`}
      />
    </div>
  );
};

export default ProgressBarAnimation;
