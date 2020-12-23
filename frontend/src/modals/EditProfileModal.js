import React, { useState } from 'react';
import FormContainer from '../components/FormContainer'
import {  Form, Button } from 'react-bootstrap';



const EditProfileModal = () => {

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event)
    }

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <div className='edit-profile-modal'>
            <FormContainer>
                <h1 className='edit-profile-title'>Edit Profile</h1>
                <Form onSubmit={submitHandler} className='register-form'>
                <Form.Group controlIf='name'>
                    <Form.Label>Change Name:</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder={name}
                        value={email}
                        onChange={(event) => setName(event.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlIf='email'>
                    <Form.Label>Change Email:</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder={email}
                        value={email}
                        onChange={(event) => setName(event.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Change Password:</Form.Label>
                    <Form.Control 
                        type="password"
                        placeholder='Enter New Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    ></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>
                        Update Profile
                    </Button>
            </Form>
            </FormContainer>
        </div>
    )
}

export default EditProfileModal
