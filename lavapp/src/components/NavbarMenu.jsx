import { Link } from "react-router-dom";
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';

function NavbarMenu() {
        return (
        <>
        <Navbar bg="light" expand="lg">
        <Navbar sticky="top" />
        <Container>
          <Navbar.Brand>Lavacocktails</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="./App">Home</Nav.Link>
              <Nav.Link to="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <Link to="Cocktails">Cocktails</Link>
                <NavDropdown.Divider />
                <Link to="Mocktails">Mocktails</Link>
                <NavDropdown.Divider />
                <Link to="Liqueurs">Homemade liqueurs</Link>
                <NavDropdown.Divider />
                <Link to ="Cart">Cart</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
      );
}
 
export default NavbarMenu;