import './App.css'
import MovieTab from "./components/MovieTab"
import HomePage from "./pages/HomePage"
import {Routes, Route} from "react-router-dom"
import FavoritesPage from "./pages/FavoritesPage"

function App() {


  return (
    <main className= "app">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
      </Routes>
    </main>
  );
}

export default App
