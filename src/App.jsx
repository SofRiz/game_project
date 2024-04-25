import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Home from "./pages/Home"
import Footer from "./components/footer/Footer"
import Carrusel from "./components/carrusel"
import {useSpring, animated} from "react-spring"
import ProgressBarAnimation from "./components/ProgressBar/ProgressBarAnimation"
import Number from "./components/CountNumber/Count"





function App() {


    return (
      <>
        <div class="app">
          <NavigationBar />
          <main class="main">
            {/* <Home />*/}
            <div class="double-column">
              <h1 class="line-1 anim-typewriter">
                Título Juego
              </h1>

              <Carrusel />
            </div>
            <label className="contador">
              {" "}
              Duración:
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
