import React from 'react'
import { Form } from 'react-bootstrap';

const FormInput = (props) => {
    const { controlId, labelText, type, placeholder, value, onChange } = props
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{labelText}</Form.Label>
            <Form.Control 
                type={type}
                placeholder={placeholder}
                value={value}
                name={controlId}
                onChange={onChange}
            ></Form.Control>
        </Form.Group>
    )
}

export default FormInput
