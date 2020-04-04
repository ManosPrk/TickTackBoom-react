import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function FormTemplate(props) {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>{props.formLabel} </Form.Label>
                <Form.Control
                    type={props.formControlType}
                    name={props.name}
                    placeholder={props.placeholder}
                    onBlur={props.handleBlur}
                />
                <Form.Text className="text-muted">
                    {props.mutedText}
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                {props.buttonText}
            </Button>
        </Form>
    );
}

FormTemplate.propTypes = {
    formLabel: PropTypes.string.isRequired,
    formControlType: PropTypes.string,
    mutedText: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default FormTemplate;