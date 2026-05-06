import 'bootstrap/dist/css/bootstrap.min.css';
import MovieTab from "../components/MovieTab"
import {useState} from "react"
import { searchPopularMovies } from "../services/api"
import { searchMovies } from "../services/api"
import {useEffect} from "react"

function HomePage ({favorites, toggleFavorite}) {
    // Let's use useState to handle searching
    const [Searched, setSearched] = useState("")
    const [currentSearch, setCurrentSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const Search = async (e) => {
        e.preventDefault();
        if (!Searched.trim()) return
        if (loading) return

        setLoading(true)
        setCurrentSearch(Searched)

        try {
            const searchResults = await searchMovies(Searched)
            setMovies(searchResults)
        } catch (error) {
            alert("Failed to load movies: " + error)
            console.log(error)
            setError("Failed to load movies!")
        } finally {
            setLoading(false)
        }}

    {/* DUMMY MOVIES FOR TESTING
        const movies = [
        {id: 1, title: "Where the wind blows", releasedate: "2027", url: "src/assets/G9tATCeXQAASkPj.jpg"},
        {id: 2, title: "Moi123", releasedate: "1903", url: "src/assets/G9tATCeXQAASkPj.jpg"},
        {id: 3, title: "EIVITSINYTKÄVIPAHASTI", releasedate: "1933"}
    ]*/}

    //Let's use useEffect to prevent fetching movies everytime something changes
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await searchPopularMovies()
                setMovies(popularMovies)
            } catch (error) {
                alert("Failed to load movies: " + error)
                console.log(error)
                setError("Failed to load movies!")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    return (
    <div className="home-page">
        <form onSubmit={Search} className="search-box" id="movie-search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" id="movie-search-field" value={Searched} onChange={(e) => setSearched(e.target.value)}></input>
            <button type="submit" className="search-button">Search</button>
        </form>

        {/*Show results for only after pressing search button */}
        <h1 className="page-title">
        {currentSearch === "" ? "Today's picks" : `Results for "${currentSearch}"`}
        </h1>

        <div className="movie-grid">
            {/*Let's use map function to map the movie objects and pass favorite state */}
            {movies.map((movie) => (
            <MovieTab movie={movie} key={movie.id} toggleFavorite={toggleFavorite} isFavorite={favorites.some(m => m.id === movie.id)}/>
            ))}
        </div>
    </div>)
}
export default HomePage