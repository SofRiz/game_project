import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Slider from "./components/Slider"
import Carrusel from "./components/carrusel"

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
                    {/* <div class="double-column">
                       
                        <p>lore ipsumlore ipsum lore ipsumlore ipsum</p>
                        <Slider />
                    </div> */}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App
