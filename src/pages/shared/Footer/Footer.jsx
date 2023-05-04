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
                        <h5 className="text-uppercase">Thanks for visiting</h5>
                        <p>
                            Thank you for visiting our chef-s universe website! We hope you enjoyed browsing through our collection of delicious recipes and found inspiration for your next culinary adventure. Our team of passionate chefs and food enthusiasts is dedicated to providing you with high-quality, easy-to-follow recipes that will take your cooking skills to the next level. Don't forget to bookmark our website and follow us on social media for updates on new recipes and cooking tips. Happy cooking!
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
                        <h5 className="text-uppercase mb-0">Social media</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className="text-white">Facebook</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white">Twiteer</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white">LinkId</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white">Instagram</Link>
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