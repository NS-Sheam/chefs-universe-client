import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import googleBtn from "../../../assets/GoogleSignUpDark.png"
import gitHubBtn from "../../../assets/gh-login-button.png"

const Login = () => {
    const { signIn, signInWithGoogle, githubSignIn } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.form?.pathname || "/"
    const handleLoginWithPassword = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(from, { replace: true })
                form.reset();

            })
            .catch(error => {
                setError(error);
            })

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => setError(error))
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => setError(error))
    }
    return (
        <Container className='mx-auto my-5'>
            <Row>
                <Col className='col-md-4 mx-auto'>
                    <h3>Please Login</h3>
                    <Form onSubmit={handleLoginWithPassword}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-start d-block'>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3 py-2" controlId="formBasicPassword">
                            <Form.Label className='text-start d-block'>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <button
                            type="submit"
                            className='fw-bold d-block w-100 py-2 band-bg border-0 text-white rounded-2'
                        // disabled={!accepted}
                        >
                            Login
                        </button>
                        <br />
                        <Form.Text className="fw-bold text-center d-block">
                            Don't have an account? <Link to="/register" className='band-color'>Register</Link>
                        </Form.Text>
                        <Form.Text className="text-danger">
                            {
                                error && error.message
                            }
                        </Form.Text>
                    </Form>
                    <Link onClick={handleGoogleSignIn}>
                        <img className='img-fluid w-50 d-block mx-auto my-2' src={googleBtn} alt="" />
                    </Link>
                    <Link onClick={handleGithubSignIn}>
                        <img className='img-fluid w-50 d-block mx-auto my-2' src={gitHubBtn} alt="" />
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;