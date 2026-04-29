//2fdccf48a2b8cc0fbea58800b90ec76b
//api-key www.themoviedb.org/

const API_KEY = "2fdccf48a2b8cc0fbea58800b90ec76b"
const BASE_URL = "https://api.themoviedb.org/3"

export const searchPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async (search_text) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search_text)}`)
    const data = await response.json()
    return data.results
}