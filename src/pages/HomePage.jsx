import MovieTab from "../components/MovieTab"
import {useState} from "react"

function HomePage () {
    // Let's use useState to handle searching
    const [Searched, setSearched] = useState("")

    const Search = (e) => {
        e.preventDefault()
    }

    //let's create dummy movies to use for testing, TODO: Remove dummy movies later
    const movies = [
        {id: 1, title: "Where the wind blows", releasedate: "2027", url: "src/assets/G9tATCeXQAASkPj.jpg"},
        {id: 2, title: "Moi123", releasedate: "1903", url: "src/assets/G9tATCeXQAASkPj.jpg"},
        {id: 3, title: "EIVITSINYTKÄVIPAHASTI", releasedate: "1933"}
    ]

    return (
    <div className="home-page">
        <form onSubmit={Search} className="search-box">
            <input type="text" placeholder="Search for movies..." className="search-input" value={Searched} onChange={(e) => setSearched(e.target.value)}></input>
        </form>

        <div className="movie-grid">
            {/*Let's use map function to map the movie objects */}
            {movies.map((movie) => (
            <MovieTab movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>)
}
export default HomePage