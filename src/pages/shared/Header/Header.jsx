import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaAccessibleIcon, FaUser } from "react-icons/fa";
import "./Header.css"

function Header() {
    return (
        <Navbar className='header' expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='text-white'><small className='logo fw-bold'>React-Bootstrap</small></Navbar.Brand>
                <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' to="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' to="#link">Blog</Nav.Link>
                            <Nav.Link className='text-white' to="#link">About</Nav.Link>
                            <Nav.Link className='text-white' to="#link">Contact</Nav.Link>
                        </Nav>
                        <Nav className="me-auto align-items-center flex-grow-1">
                            <Nav.Link className='text-white' to="#home">
                                <small className='border border-2 border-white rounded-circle p-1 d-flex justify-content-center align-items-center'>
                                    <FaUser />
                                </small>
                            </Nav.Link>
                            <Nav.Link className='text-white fw-bold' to="#link">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;