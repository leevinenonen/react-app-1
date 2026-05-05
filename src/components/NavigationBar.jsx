import {Link} from "react-router-dom"
import DropdownMenu from "./DropdownMenu"

function NavigationBar() {
    return (
    <nav className="navigation-bar">
        <DropdownMenu />
        <div className="app-name">
            <Link to="/">HOME CINEMA</Link>
        </div>
        <div className="favorites-button">
            <Link to="/favorites">❤︎</Link>
        </div>
    </nav>)
}

export default NavigationBar