import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Home from "./pages/Home"
import Footer from "./components/footer/Footer"
import {Carrusel, JustifiedExample} from "./components/carrusel"

function App() {


    return (
        <>
            <div class="app">
                <NavigationBar />

                <main class="main">
                    <div class="double-column">
                        <JustifiedExample/>
                        <Carrusel />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )


}

export default App
