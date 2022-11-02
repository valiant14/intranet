import React from "react";
import seder from '../../../assets/seder.png'
import { Row, Col } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"


const Navigations = () => {

    const location = useLocation();
    
    return (
        <>
        <Row>
            <Col sm={1}>
                
            </Col>
            <Col>
            <Row>
                <Col sm={1}>
                    <img src={seder} width="100" height="100" className='mt-3 mb-3'/>
                </Col>
                <Col>
                    <nav role="navigation" className="main-nav justify-content-end mt-3 mb-1">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/news&events">News & Events</Link>
                            </li>
                            <li>
                                <Link to="/staffEssentials" >Staff Essentials</Link>
                            </li>
                            <li>
                                <Link to="/contacts">Contacts</Link>
                            </li>
                            <li>
                                <Link to="/knowledge">Knowledge Base</Link>
                            </li>
                            <li>
                                <Link to="/sendyourfeedback">Suggestion</Link>
                            </li>
                        </ul>
                    </nav>
                </Col>
            </Row>
            <AnimatePresence initial={false}>
                <Outlet key={location.pathname}/> 
            </AnimatePresence>
            </Col>
        </Row>
    </>
    )
}

export default Navigations

