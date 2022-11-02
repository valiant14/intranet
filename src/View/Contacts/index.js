import React,{useState} from "react";
import ContactTables from "./table/indexTable";
import {Row, Col, Modal, Button} from 'react-bootstrap'
import './index.scss'
import { data } from "./data";
import ProfileCard from "./profileCard";
import { motion } from "framer-motion"

const Departments = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <motion.div 
                initial={{ y: "100%"}}
                animate={{ y: "0%"}}
                transition={{duration: 0.75, ease: "easeOut"}}
                exit={{opacity: 1}}>
        <Row>
            <Col>
                <ContactTables items={data} handleShow={handleShow}/>
            </Col>
        </Row>

        </motion.div>

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