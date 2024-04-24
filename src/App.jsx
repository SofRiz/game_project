import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Home from "./pages/Home"
import Footer from "./components/footer/Footer"
import Carrusel from "./components/carrusel"
import {useSpring, animated} from "react-spring"
import ProgressBarAnimation from "./components/ProgressBar/ProgressBarAnimation"


function Number ({ n }) {
    const { number } = useSpring({
from: { number: 0 },
number: n,
delay: 200,
config: { mass: 1, tension: 20, friction: 10 },
});

return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function App() {

   
    return (
      <>
        <div class="app">
          <NavigationBar />
            <main class="main">
            <div class="double-column">
              {/* Colocar primer componente aqui */}
              <p>lore ipsumlore ipsum lore ipsumlore ipsum</p>
              <Carrusel />
            </div>
            <label className="contador">
              <span className="number">
                {" "}
                <Number n={10} />{" "}
              </span>
              Minutos
            </label>
            <ProgressBarAnimation />
          </main>
          
          <Footer />
        </div>
      </>
    );
    
    
}

export default App
