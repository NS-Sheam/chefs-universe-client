import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white text-center">
            <Container className="p-4">
                <Row>
                    <Col lg={6} md={12} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </Col>
                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="#!" className="text-white">Link 1</Link>
                            </li>
                            <li>
                                <Link to="#!" className="text-white">Link 2</Link>
                            </li>
                            <li>
                                <Link to="#!" className="text-white">Link 3</Link>
                            </li>
                            <li>
                                <Link to="#!" className="text-white">Link 4</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="#!" className="text-white">Link 1</Link>
                            </li>
                            <li>
                                <Link to="#!" className="text-white">Link 2</Link>
                            </li>
                            <li>
                                <Link to="#!" className="text-white">Link 3</Link>
                            </li>
                            <li>
                                <Link to="#!" className="text-white">Link 4</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © {new Date().getFullYear()} My Company
            </div>
        </footer>
    );
};

export default Footer;