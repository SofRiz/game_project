import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Home from "./pages/Home"
import Footer from "./components/footer/Footer"
import Carrusel from "./components/carrusel"

function App() {


    return (
        <>
            <div class="app">
                <NavigationBar />

                <main class="main">
                    <Home />
                    {/*<div class="double-column">
                        Colocar primer componente aqui
                        <p>lore ipsumlore ipsum lore ipsumlore ipsum</p>
                        <Carrusel />
                    </div>*/}
                </main>
                <Footer />
            </div>
        </>
    )


}

export default App
