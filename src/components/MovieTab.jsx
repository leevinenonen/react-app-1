import { FaHeart, FaRegHeart } from "react-icons/fa";

function MovieTab({movie, toggleFavorite, isFavorite}) {
    function whenFavorited() {
        console.log("favorited")
    }
    return (
    <div className="movie-tab">
        <div className="movie-img-div"><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img></div>
        <button className={`fav-button ${isFavorite ? 'active' : ''}`}
        onClick={() => toggleFavorite(movie)}>
            {isFavorite ? <FaHeart color="red"/> : <FaRegHeart/>}
        </button>
        <div className="movie-information">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-release-date">{movie.release_date}</p>
        </div>
    </div>)
}

export default MovieTab