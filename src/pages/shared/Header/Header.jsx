import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaAccessibleIcon, FaUser } from "react-icons/fa";
import "./Header.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';

function Header() {
    const { user, logOut, loading } = useContext(AuthContext);
    if(loading){
        return <Spinner></Spinner>;
    }
    const handleLogout= () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    
    return (
        <Navbar variant="dark" className='header' expand="lg">
            <Container>
                <Link to="/" className='text-white'><small className='logo fw-bold'>chef's universe</small></Link>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className=''>
                        <Nav className="me-auto text-white d-flex">
                            <Link className='me-lg-3 py-2' to="/">Home</Link>
                            <Link className='me-lg-3 py-2' to="/blogs">Blog</Link>
                            <Link className='me-lg-3 py-2' to="/">About</Link>
                            <Link className='me-lg-3 py-2' to="/">Contact</Link>
                        </Nav>
                        <Nav className="me-auto align-items-center flex-grow-1">
                            <Link className='border border-2 border-white rounded-circle p-1 d-flex justify-content-center align-items-center me-lg-3 py-2'>
                                <FaUser title={user && user.displayName} />
                            </Link>
                            {
                                user ?
                                    <Link className='me-lg-3 py-2' onClick={handleLogout}>Logout</Link> :
                                    <Link className='me-lg-3 py-2' to="/login">Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;