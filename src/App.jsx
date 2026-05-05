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
