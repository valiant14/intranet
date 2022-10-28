import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap';

import './index.scss'

const Feedbacks = () => {
    return (
        <div className="suggetion-container">
            <div className="form-containers">
            <h3 className="suggestion_title">Got a suggetion? Type it belows.</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Row>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" pattern="[a-z]*"/>
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" pattern="[a-z]*"/>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email"/>
                    <Form.Text className="text-muteds">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Suggetion</Form.Label>
                    <Form.Control as="textarea" rows={5}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </div>
    )
}

export default Feedbacks