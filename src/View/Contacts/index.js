import React from "react";
import contacts from '../../assets/contacts.png'
import {Col, Row} from 'react-bootstrap'
import './index.scss'

const Contacts = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="new-image">
                    <img src={contacts} />
                </Col>
            </Row>
        
        </React.Fragment>
    )
}

export default Contacts


