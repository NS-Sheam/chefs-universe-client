import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer text-white text-center py-5">
            <Container className="p-4">
                <Row>
                    <Col lg={6} md={12} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </Col>
                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Menu</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/" className="text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/blogs" className="text-white">Blogs</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-white">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white">Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Sub-menu</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/login" className="text-white">Login</Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-white">Register</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © {new Date().getFullYear()} chef's universe
            </div>
        </footer>
    );
};

export default Footer;