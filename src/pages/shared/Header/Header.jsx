import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaAccessibleIcon, FaUser } from "react-icons/fa";
import "./Header.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessQueen } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const { user, logOut, setLoading } = useContext(AuthContext);
    // console.log(user.displayName);
    const handleLogout = () => {
        console.log("hello");
        logOut()
            .then()
            .catch(error => console.log(error))
            setLoading(false);
    }

    return (
        <Navbar variant="dark" className='header vw-100' expand="lg">
            <Container>
                <Link to="/" className='text-white'><FontAwesomeIcon icon={faChessQueen} /> <small className='fw-bolder fst-italic'>chef's universe</small></Link>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className=''>
                        <Nav className="me-auto text-white d-flex">
                            <ActiveLink to="/">Home</ActiveLink>
                            <ActiveLink to="/blogs">Blog</ActiveLink>
                            <ActiveLink to="/about">About</ActiveLink>
                            <ActiveLink to="/contact">Contact</ActiveLink>
                        </Nav>
                        <Nav className="me-auto align-items-start align-items-md-center flex-grow-1">
                            <Link className=''>
                                {
                                    user?.photoURL ?
                                        <img title={user.displayName} src={user.photoURL} className='user-img rounded-circle' alt="" /> :
                                        <FaUser className='border border-2 border-white rounded-circle p-1 d-flex justify-content-center align-items-center me-lg-3 py-2 user-img' />
                                }
                            </Link>
                            {
                                user ?
                                    <Link onClick={handleLogout} className='px-2 py-2 my-2 my-lg-0 text-center'><span>Logout</span></Link> :
                                    <ActiveLink className='px-2 py-2 my-2 my-lg-0 text-center' to="/login">Login</ActiveLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;