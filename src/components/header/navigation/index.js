import React from "react";
import seder from '../../../assets/seder.png'
import { Row, Col } from 'react-bootstrap';
import {Link } from "react-router-dom";
const Navigations = () => {

    return (
        <>
        <Row>

            <Col sm={4}>
            <div class="branding">
                <img src={seder} alt="" width="90" height="72"></img>
            </div>
            </Col>
            <Col sm={8}>
            <div className="container">
            <nav role="navigation" class="main-nav justify-content-end">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
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
                        <Link to="/departments">Departments</Link>
                    </li>
                    <li>
                        <Link to="/sendyourfeedback">Send your Feedback</Link>
                    </li>
                </ul>
                </nav>
                </div>
            </Col>

        </Row>
    </>
    )
}

export default Navigations