import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser, setLoading } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        createUser(email, password)
            .then(async (result) => {
                const createdUser = result.user;
                await updateProfile(createdUser, {
                    displayName: name,
                    photoURL: photo
                })
                console.log(createdUser);
                navigate("/login")
                form.reset();
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }
    return (
        <Container className='mx-auto'>
            <Row>
                <Col className='col-md-4 mx-auto my-5'>
                    <h3>Please Register</h3>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-start d-block'>Your Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter your name" required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-start d-block'>Photo URL</Form.Label>
                            <Form.Control type="text" name='photo' placeholder="Enter photo URL" required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-start d-block'>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3 py-2" controlId="formBasicPassword">
                            <Form.Label className='text-start d-block'>Enter password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                        </Form.Group>
                        <button
                            type="submit"
                            className='fw-bold d-block w-100 py-2 band-bg border-0 text-white rounded-2'
                        >
                            Register
                        </button>
                        <br />
                        <Form.Text className="fw-bold text-center d-block">
                            Already have an account? <Link to="/login" className='band-color'>Login</Link>
                        </Form.Text>
                        <Form.Text className="text-danger">
                            {
                                error && error
                            }
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;