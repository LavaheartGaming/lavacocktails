import { Link } from "react-router-dom";
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

function NavbarMenu() {
        return (
        <>
        <Navbar bg="light" expand="lg" sticky="top">
        <NavDropdown title="search by" id="basic-nav-dropdown">
        <Link to="/Cocktails">Cocktails</Link>
    <NavDropdown.Divider />
        <Link to="/Mocktails">Mocktails</Link>
                <NavDropdown.Divider />
                <Link to="/Liqueurs">Homemade liqueurs</Link>
                <NavDropdown.Divider />
                <Link to ="/Cart">Cart</Link>
                <NavDropdown.Divider/>
                <Link to="/Cocktails">Gin</Link>
                <NavDropdown.Divider />
                <Link to="/Mocktails">Vodka</Link>
                <NavDropdown.Divider />
                <Link to="/Liqueurs">Tequila</Link>
                <NavDropdown.Divider />
                <Link to ="/Cart">Rhum</Link>
                <NavDropdown.Divider />
                <Link to ="/Cart">Coffee</Link>
                <NavDropdown.Divider />
                <Link to ="/Cart">Rhum</Link>
              </NavDropdown>
        <Container>
          <Navbar.Brand>Lavacocktails</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Nav.Link to="#link">Link</Nav.Link>
              <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="search here" />
    </Form.Group>
    </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
      );
}
 
export default NavbarMenu;