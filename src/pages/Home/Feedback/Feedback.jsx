import React from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import "./Feedback.css"

const Feedback = () => {
    return (
        <div className='pop-font feedback d-flex vh-100 align-items-center justify-content-center mb-4'>
            <Container>
                <h3 className='text-black py-4 fw-bold text-center'>Give your feedback</h3>
                <p className='text-center'>We greatly value your feedback! We believe that your thoughts and opinions are crucial in helping us improve our website and providing the best experience possible for our users. Whether you have suggestions for new recipes, feedback on existing ones, or just want to share your thoughts, we welcome and appreciate all feedback. Our team carefully considers every comment we receive and uses them to continuously improve our website. So please, don't hesitate to share your thoughts with us. Thank you for being a part of our community and helping us make our chef recipe website even better!</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Row>
                            <Col lg={8} className='mx-auto'>
                                <div 
                                data-aos="zoom-in"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000"
                                className='d-flex flex-column gap-3 flex-md-row px-4 justify-content-center align-items-center'>
                                    <Form.Control className='py-3' type="text" name='text' placeholder="Your Feedback" required />
                                    <button className='fw-bold text-white px-4 py-3 ms-2 border-0 rounded-2 band-bg'>Submit</button>
                                </div>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
};

export default Feedback;