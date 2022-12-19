import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function CollapsibleExample() {
	const navbar = {backgroundColor:'#FFC62A'}
  return (
    <Navbar style={navbar} collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand href="#home">El Primo James</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">¿Quienes somos?</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Miel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dulces
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jabon</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Shampoo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Pedidos</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;