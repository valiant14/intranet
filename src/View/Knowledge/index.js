import React from "react";
import './index.scss'
import { Player } from 'video-react';
import S1 from '../../assets/video/BasicTrainingS1.mp4'
import { motion } from "framer-motion"
import {Col, Row, Card, InputGroup,Form, Button} from 'react-bootstrap'
import { Search,FileText, Youtube } from 'react-feather';
import { Link } from "react-router-dom";

const KnowledgeBase = () => {

    const dayOne = () => {
        return window.open('http://localhost:3000/knowledge/dayone')
    }

    const dayTwo = () => {
        return window.open('http://localhost:3000/knowledge/daytwo')
    }

    const dayThree = () => {
        return window.open('http://localhost:3000/knowledge/daythree')
    }

    return (
        <React.Fragment>
            <motion.div 
                initial={{ y: "100%"}}
                animate={{ y: "0%"}}
                transition={{duration: 0.75, ease: "easeOut"}}
                exit={{opacity: 1}}>
        <Row className="mb-5">
            <Col sm={2}>
                <Row>
                    <Col className="essential-container mt-5">
                        <h2 className="essentials-title">Knowledge<span className="essentials-title2">&nbsp;Base</span></h2>
                        <p className="essentials-parag">In here, We provide employees materials that are helpful to them to through their
                            daily routines at work.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="search-container">
                        <div className="card-avatar"></div>
                            <div className="card-square">
                                <h1 className="card-greetings">HELLO!</h1>
                                <Row>
                                    <Col className="card-search">
                                        <Form>
                                            <InputGroup className="mb-3">
                                                <Form.Control placeholder="Search a document"/>
                                            </InputGroup>
                                        </Form>
                                    </Col>
                                </Row>
                                <div className="search-logo"><span><Search/></span></div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Col>
            <Col>
                <div className="main-container">
                    <Row>
                        <Col>
                        <Link onClick={dayOne}>
                            <div className="main-card hoverM3">
                                <div><Youtube/></div>
                                <h1>Monday Training</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Link>
                        </Col>
                        <Col>
                        <Link onClick={dayTwo}>
                            <div className="main-card">
                                <div><Youtube/></div>
                                <h1>Monday Training</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Link>
                        </Col>
                        <Col>
                        <Link onClick={dayThree}>
                            <div className="main-card">
                                <div><Youtube/>
                                </div>
                                <h1>Monday Training</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Link>
                        </Col>

                    </Row>
                    {/* <Row className="mt-5">
                        <Col>
                        <a href={S1} download="Internet Sim policy">
                            <div className="main-card">
                                <div><FileText/></div>
                                <h1>Internet Sim Policy</h1>
                                <p>Check our rules or guidelines that we need to achieve & comply.</p>
                            </div>
                        </a> 
                        </Col>
                        <Col>
                            <div className="main-card">
                                <div><FileText/></div>
                                <h1>Policies & Procedures</h1>
                                <p>Check our rules or guidelines that we need to achieve & comply.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="main-card">
                                <div><FileText/></div>
                                <h1>Policies & Procedures</h1>
                                <p>Check our rules or guidelines that we need to achieve & comply.</p>
                            </div>
                        </Col>
                    </Row> */}
                    {/* <Row className="mt-5">
                        <Col>
                            <div className="main-card">
                                <div><FileText/></div>
                                <h1>Policies & Procedures</h1>
                                <p>Check our rules or guidelines that we need to achieve & comply.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="main-card-last">
                                <div><FileText/></div>
                                <h1>Policies & Procedures</h1>
                                <p>Check our rules or guidelines that we need to achieve & comply.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="box-roadmap">
                                <h1 className="box-titles">Employee Roadmap</h1>
                                    <div className="box-containers">
                                        <p>Recuitment</p>
                                        <span><Search/></span>
                                        <div><ArrowUpRight/></div>
                                    </div>
                                    <div className="box-containers2">
                                        <p>On-Boarding</p>
                                        <span><Users/></span>
                                        <div><ArrowUpRight/></div>
                                    </div>
                                    <div className="box-containers3">
                                        <p>Benefits</p>
                                        <span><BarChart2/></span>
                                        <div><ArrowUpRight/></div>
                                    </div>
                                    <div className="box-containers4">
                                        <p>Payroll</p>
                                        <span><DollarSign/></span>
                                        <div><ArrowUpRight/></div>
                                    </div>
                                    <div className="box-containers5">
                                        <p>Leave</p>
                                        <span><LogOut/></span>
                                        <div><ArrowUpRight/></div>
                                    </div>
                                    <div className="box-containers6">
                                        <p>Separation</p>
                                        <span><Flag/></span>
                                        <div><ArrowUpRight/></div>
                                    </div>
                            </div>
                        </Col>
                    </Row> */}
                </div>
            </Col>
        </Row>
        </motion.div>
    </React.Fragment>
        // <React.Fragment>

        //     <Button onClick={dayOne}>Click</Button>
        //     <Button onClick={dayTwo}>Click</Button>
        //     <Button onClick={dayThree}>Click</Button>
        // </React.Fragment>
    )
}

export default KnowledgeBase