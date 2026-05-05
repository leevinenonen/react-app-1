import {Link} from "react-router-dom"
import DropdownMenu from "./DropdownMenu"

function NavigationBar() {
    return (
    <nav className="navigation-bar">
        <DropdownMenu />
        <div className="app-name">
            {/*Force refresh when clicking home cinema to get today's picks */}
            <a href="/">HOME CINEMA</a>
        </div>
        <div className="favorites-button">
            <Link to="/favorites">❤︎</Link>
        </div>
    </nav>)
}

export default NavigationBar