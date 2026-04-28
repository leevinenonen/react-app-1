function Movie({movie}) {
    function whenFavorited() {
        console.log("favorited")
    }
    return
    <div className="movie-tab">
        <div className="movie-img"><img src={movie.url} alt={movie.title}></img></div>
        <div className="movie-layer">
            <button className="fav-button" onClick={whenFavorited}>Fav</button>
        </div>
        <div className="movie-information">
            <h2>{movie.title}</h2>
            <p>{movie.releasedate}</p>
        </div>
    </div>
}

export default Movie