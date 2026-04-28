import Dropdown from 'react-bootstrap/Dropdown';
//https://react-bootstrap.netlify.app/docs/components/dropdowns/

function DropdownMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-menu">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Home</Dropdown.Item>
        <Dropdown.Item href="/favorites">Favorites</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;