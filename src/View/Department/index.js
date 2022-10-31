import React from "react";
import ContactTables from "./table/indexTable";
import {Row, Col} from 'react-bootstrap'
import './index.scss'

const Departments = () => {
    return (
    <>
        <Row>
            <Col>
                <ContactTables />
            </Col>
        </Row>
        
    </>
    )
}

export default Departments