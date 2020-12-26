import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import FormInput from '../components/FormInput'

export const EditProfileModal = (props) => {
    const { 
        toggle, 
        message, 
        error, 
        onSubmit, 
        name, 
        email, 
        password, 
        confirmPassword,
        nameChange,
        emailChange,
        passwordChange,
        confirmPasswordChange
    } = props;
    return (
        <FormContainer>
                    <Row >
                        <Col md={10}>
                            <h1 className='edit-profile-title'>Edit Profile</h1>
                        </Col>
                        <Col md={1}>
                            <Button onClick={toggle}>X</Button>
                        </Col>
                    </Row>
                    {message && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    <Form 
                        onSubmit={onSubmit}
                        className='register-form'
                    >
                        <FormInput 
                            controlId='name'
                            labelText='Edit Name:'
                            type='text'
                            placeholder='Change Name'
                            value={name}
                            onChange={nameChange}
                        />
                        <FormInput 
                            controlId='email'
                            labelText='Edit Email:'
                            type='email'
                            placeholder='Change Email'
                            value={email}
                            onChange={emailChange}
                        />
                        <FormInput 
                            controlId='password'
                            labelText='Edit Password:'
                            type='password'
                            placeholder='Change Password'
                            value={password}
                            onChange={passwordChange}
                        />
                        <FormInput 
                            controlId='confirmPassword'
                            labelText='Confirm Password:'
                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={confirmPasswordChange}
                        />
                        <Button variant='success' type='submit' >Update Profile</Button>
                    </Form>
                </FormContainer>
    )
}
 export default EditProfileModal