import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Feedback = () => {
    return (
        <div className='vh-100 d-flex align-items-center justify-content-center band-bg mb-4'>
            <div className="">
                <h2 className='text-white py-4 fw-bold text-center'>Give us your feedback about our chefs</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Row>
                            <Col lg={8} className='mx-auto'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Form.Control className='py-3' type="text" name='text' placeholder="Your Feedback" required />
                                    <button className='fw-bold white px-4 py-3 ms-2 border-0 rounded-2 band-color'>Submit</button>
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