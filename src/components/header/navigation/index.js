import React from "react";
import seder from '../../../assets/seder.png'
import { Row, Col } from 'react-bootstrap';

const Navigations = () => {
    return (
        <>
        <Row>
            <Col sm={2}>
            <div class="navbar-brand">
                <img src={seder} alt="" width="90" height="72"></img>
            </div>
            </Col>
            <Col sm={10}>
            <nav role="navigation" class="main-nav">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="home">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="aboutus">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="newevents">News & Events</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="staffEssentials">Staff Essentials</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="contacts">Contacts</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="departments">Departments</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="sendyourfeedback">Send Your Feedback</a>
                    </li>
                </ul>
                </nav>
            </Col>
        </Row>
    </>
    )
}

export default Navigations