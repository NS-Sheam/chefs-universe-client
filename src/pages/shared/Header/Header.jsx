import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"

function Header() {
    return (
        <Navbar className='header' expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='text-white'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' to="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' to="#link">Blog</Nav.Link>
                            <Nav.Link className='text-white' to="#link">About</Nav.Link>
                            <Nav.Link className='text-white' to="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div>
                <Nav className="me-auto">
                            <Nav.Link className='text-white' to="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' to="#link">Link</Nav.Link>
                        </Nav>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;