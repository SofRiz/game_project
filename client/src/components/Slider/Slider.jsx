import React, { useEffect, useState } from "react";
import "./Slider.css";

const Slider = ({ dificultad }) => {
  const [posicionSlider, setPosicionSlider] = useState(0);

  useEffect(() => {
       const calcularPosicion = () => {
      if (dificultad === "Dificil") {
        return 100; 
      } else if (dificultad === "Fácil") {
        return 0; 
      } else {
        return 50; 
      }
    };

    setPosicionSlider(calcularPosicion()); 
  }, [dificultad]);

  

  return (
     <div className="barra">
      <div className="control">
     <div className="control-desli" style={{ left: `${posicionSlider}%` }}></div>
       <div className="nivel dif">Difícil</div>
       <div className="nivel fac">Fácil</div>
       
      </div>
    </div>
  );
};

export default Slider;
