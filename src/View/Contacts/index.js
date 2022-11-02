import React,{useState} from "react";
import ContactTables from "./table/indexTable";
import {Row, Col, Modal, Button} from 'react-bootstrap'
import './index.scss'
import { data } from "./data";
import ProfileCard from "./profileCard";

const Departments = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <Row>
            <Col>
                <ContactTables items={data} handleShow={handleShow}/>
            </Col>
        </Row>

        <Modal show={show} onHide={handleClose} className='customModal'>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <ProfileCard />
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default Departments