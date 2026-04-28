import MovieTab from "../components/MovieTab"
function HomePage () {
    //let's create dummy movies to use for testing, TODO: Remove dummy movies later
    const movies = [
        {title: "Where the wind blows", releasedate: "2027", url: "src/assets/G9tATCeXQAASkPj.jpg"},
        {title: "Moi123", releasedate: "1903", url: "src/assets/G9tATCeXQAASkPj.jpg"},
        {title: "EIVITSINYTKÄVIPAHASTI", releasedate: "1933"}
    ]

    return (
    <div className="home-page">
        <div className="movie-grid">
            {/*Let's use map function to map the movie objects */}
            {movies.map(movie => <MovieTab movie={movie}/>)}
        </div>
    </div>)
}
export default HomePage