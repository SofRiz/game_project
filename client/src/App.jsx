import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"
import Game from "./pages/Game"
import Home from "./pages/Home"
import PlayGame from "./pages/PlayGame"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/:game_id" element={<Game />} />
                <Route path="/games" element={<PlayGame />} />
            </Route>
        </Routes>
    )
}

export default App
