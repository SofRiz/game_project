import { useEffect, useState } from "react";

import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const [animCompleta, setAnimCompleta] = useState(false);

  useEffect(() => {
    const titGame = document.querySelector(".anim-typewriter");

    if (titGame) {
      titGame.addEventListener("animationend", manejoAnimCompleta);

      return () => {
        titGame.removeEventListener("animationend", manejoAnimCompleta);
      };
    }
  }, []);

  const manejoAnimCompleta = () => {
    setAnimCompleta(true);
  };

  const { number } = useSpring({
    from: { number: 0 },

    number: animCompleta ? n : 0,

    delay: 200,

    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export default Number;
