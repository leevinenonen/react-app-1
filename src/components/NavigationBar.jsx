import {Link} from "react-router-dom"
import DropdownMenu from "./DropdownMenu"
import { FaHeart, FaRegHeart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
    return (
    <nav className="navigation-bar">
        <DropdownMenu aria-label="Open menu"/>
        <div className="app-name">
            {/*Force refresh when clicking home cinema to get "Today's picks" */}
            <a href="/" aria-label="Go to home and refresh page">HOME CINEMA</a>
        </div>
        <div className="favorites-button">
            <Link to="/favorites" aria-label="Go to favorites"><FaHeart aria-hidden="true"/></Link>
        </div>
    </nav>)
}

export default NavigationBar