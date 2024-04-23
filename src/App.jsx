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
                        <p>lore lore macu macu</p>
                        <Carrusel />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App
