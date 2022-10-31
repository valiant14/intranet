import React from "react";
import ContactTables from "./table/indexTable";
import {Row, Col} from 'react-bootstrap'
import './index.scss'
import { data } from "./data";

const Departments = () => {
    return (
    <>
        <Row>
            <Col>
                <ContactTables items={data}/>
            </Col>
        </Row>
        
    </>
    )
}

export default Departments