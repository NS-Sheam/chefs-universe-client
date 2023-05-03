import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import "./Feedback.css"

const Feedback = () => {
    return (
        <div className='feedback d-flex vh-100 align-items-center justify-content-center mb-4'>
            <div>
                <h2 className='text-black py-4 fw-bold text-center'>Give us your feedback about our chefs</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Row>
                            <Col lg={8} className='mx-auto'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Form.Control className='py-3' type="text" name='text' placeholder="Your Feedback" required />
                                    <button className='fw-bold text-white px-4 py-3 ms-2 border-0 rounded-2 band-bg'>Submit</button>
                                </div>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Feedback;