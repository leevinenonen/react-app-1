import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import './styles/NavigationBar.css'
import './styles/MovieTab.css'
import './styles/DropdownMenu.css'
import './styles/HomePage.css'
import MovieTab from "./components/MovieTab"
import HomePage from "./pages/HomePage"
import {Routes, Route} from "react-router-dom"
import FavoritesPage from "./pages/FavoritesPage"
import NavigationBar from "./components/NavigationBar"
import { useState } from "react"
import { preconnect } from 'react-dom'

function App() {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (movie) => {
    setFavorites(prev => {
      const isFav = prev.some(m => m.id === movie.id)
      if (isFav) {
        return prev.filter(m => m.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  return (
    <div>
      <NavigationBar/>
    <main className= "app">
      <Routes>
        <Route path="/" element={<HomePage toggleFavorite={toggleFavorite} favorites={favorites} />} />
        <Route path="/favorites" element={<FavoritesPage toggleFavorite={toggleFavorite} favorites={favorites} />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App
