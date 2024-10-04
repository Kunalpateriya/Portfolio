import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <>
    <div className="Main-Nav">
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" id='Navbar'>
      <Container>
        <Navbar.Brand id='heading' href="#home">Junior-Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Contact" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">E-mail id:- Kunalpateriya83@gmail.com</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">WhatsApp No:- +91-7049933174
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" id='Dropdown-item'>
                <a href="https://www.facebook.com/kunal.pateriya?mibextid=ZbWKwL">Facebook id:-kunal.pateriya </a> <br />
                <a href="https://www.instagram.com/kunal_pateriya?igsh=Nnpwd25rZ2MyYnZu">Instagram id:-kunal_pateriya </a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Resume</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default NavBar