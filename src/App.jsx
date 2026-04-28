import './App.css'
import MovieTab from "./components/MovieTab"
import HomePage from "./pages/HomePage"
import {Routes, Route} from "react-router-dom"
import FavoritesPage from "./pages/FavoritesPage"
import NavigationBar from "./components/NavigationBar"

function App() {


  return (
    <div>
      <NavigationBar />
    <main className= "app">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App
