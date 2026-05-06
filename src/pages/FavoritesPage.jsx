import MovieTab from "../components/MovieTab";
import 'bootstrap/dist/css/bootstrap.min.css';

function FavoritesPage({favorites, toggleFavorite}) {
    if (favorites.length===0) {
        return (
            <div className="no-favorites">
                <h1>Oh no! You haven't added favorite movies yet.</h1>
                <p>Add favorite movies by clicking the heart!</p>
            </div>
        )}

    return (
        <div className="favorites-container">
            <h2>Your Favorites</h2>
            <div className="movie-grid">
                {favorites.map(movie => (
                    <MovieTab key={movie.id} movie={movie} toggleFavorite={toggleFavorite} isFavorite={true}/>
                ))}
            </div>
        </div>
    )
}

export default FavoritesPage