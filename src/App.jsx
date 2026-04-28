import './App.css'
import MovieTab from "./components/MovieTab"

function App() {

  return (
    <>
      {/*let's create a dummy movie to use for testing, TODO: Remove dummy movie later */}
      <MovieTab movie={{title: "Where the wind blows", releasedate: "2027", url: "src/assets/G9tATCeXQAASkPj.jpg"}}/>
      <MovieTab movie={{title: "Where the wind blows", releasedate: "2027", url: "src/assets/G9tATCeXQAASkPj.jpg"}}/>
      <MovieTab movie={{title: "Where the wind blows", releasedate: "2027", url: "src/assets/G9tATCeXQAASkPj.jpg"}}/>
      <MovieTab movie={{title: "Where the wind blows", releasedate: "2027", url: "src/assets/G9tATCeXQAASkPj.jpg"}}/>
      <MovieTab movie={{title: "Where the wind blows", releasedate: "2027", url: "src/assets/G9tATCeXQAASkPj.jpg"}}/>
    </>
  );
}

export default App
