import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import '../styles/DropdownMenu.css'
//https://react-bootstrap.netlify.app/docs/components/dropdowns/
import { FaBars } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function DropdownMenu(props) {
  return (
    <DropdownButton {...props}
    className="dropdown-button" id="toggle-menu" title={<FaBars aria-hidden="true"/>} aria-label="Open menu">
      <Dropdown.Item as={Link} to="/" aria-label="Go to Home">
          Home
      </Dropdown.Item>
      <Dropdown.Item as={Link} to="/favorites" aria-label="Go to Favorites">
          Favorites
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownMenu;