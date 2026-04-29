import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import '../styles/DropdownMenu.css'
//https://react-bootstrap.netlify.app/docs/components/dropdowns/

function DropdownMenu() {
  return (
    <DropdownButton className="dropdown-button" id="toggle-menu" title="Menu">
      <Dropdown.Item as={Link} to="/">
          Home
      </Dropdown.Item>
      <Dropdown.Item as={Link} to="/favorites">
          Favorites
      </Dropdown.Item>
    </DropdownButton>



    /*<Dropdown className="cinema-dropdown" autoClose={true}>
      <Dropdown.Toggle id="dropdown-menu" className="toggle-menu">
        <span>Menu</span>
      </Dropdown.Toggle>

      <Dropdown.Menu variant="custom" className="menu-items">
        <Dropdown.Item as={Link} to="/">
          Home
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/favorites">
          Favorites
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>*/
  );
}

export default DropdownMenu;