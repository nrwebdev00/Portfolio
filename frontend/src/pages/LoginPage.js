import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';

const LoginPage = ({ location, history }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin;
    const redirect = location.search ? location.search.spilt('=')[1] : '/'

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])
 
    const submitHandler = (event) =>{
        event.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1 className='login-title'>Please Login</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler} className='register-form'>
                <Form.Group controlIf='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type='email'
                        placeholder='Please Enter Email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        placeholder='Please Enter your Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    ></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>
                        Login
                    </Button>
            </Form>
            <Row className='py-3'>
                <Col className="help-text">
                    If New, <Link to={redirect ? `/register?redirect=${redirect}` : '/register' }>Please Click here to Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginPage;
