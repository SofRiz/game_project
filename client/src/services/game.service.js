import axios from "axios"

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_URL}/api`,
})

// export const newGame = (gameData) => {
//     return axiosInstance.post("/", gameData)
// }

export const getGames = () => {
    return axiosInstance.get("/")
}

export const getOneGame = (place_id) => {
    return axiosInstance.get(`${place_id}`)
}

const gameService = {
    // newPlace,
    getGames,
    getOneGame,
}

export default gameService
