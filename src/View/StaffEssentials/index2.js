import React from "react";
import {Col, Row, Card, InputGroup,Form} from 'react-bootstrap'
import { motion } from "framer-motion"
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from 'react-pro-sidebar';
import CardView from '../StaffEssentials/Card/index'
import { Search,FileText, ArrowUpRight, Users,BarChart2, DollarSign, LogOut,Flag } from 'react-feather';
// import ExamplePDFViewer from '../StaffEssentials/pdf/index'
import Fleet from '../../assets/PDF/FLEET.pdf'
import IT from '../../assets/PDF/IT.pdf'
import SIM from '../../assets/PDF/SIM.pdf'
import HR from '../../assets/PDF/HR.pdf'

const StaffEssentials = () => {


        const onButtonClick = () => {
            fetch('../../assets/PDF/FLEET.pdf').then(response => {
                response.blob().then(blob => {
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'SamplePDF.pdf';
                    alink.click();
                })
            })
            return (
                <a href={Fleet}>Down</a>
            )
        }

        const hrPolicy = () => {
            window.open()
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
                            <h2 className="essentials-title">Staff<span className="essentials-title2">&nbsp;Essentials</span></h2>
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
                            <a href={HR} target="_blank">
                                <div className="main-card hoverM3">
                                    <div><FileText/></div>
                                    <h1>HR Policies</h1>
                                    <p>This regulation was drawn up,in implementation of thirteen work system,
                                       Issued by the Royal Decree No. (M/15) and dated 08/32/5231.</p>
                                </div>
                            </a>
                            </Col>
                            <Col>
                            <a href={IT} target="_blank">
                                <div className="main-card">
                                    <div><FileText/></div>
                                    <h1>Desktop and Laptop</h1>
                                    <p>Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </a>
                            </Col>
                            <Col>
                            <a href={Fleet} target="_blank">
                                <div className="main-card">
                                    <div><FileText/>
                                    </div>
                                    <h1>Car Rental Policy</h1>
                                    <p>Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </a>
                            </Col>

                        </Row>
                        <Row className="mt-5">
                            <Col>
                            <a href={SIM} target="_blank">
                                <div className="main-card">
                                    <div><FileText/></div>
                                    <h1>Internet Sim Policy</h1>
                                    <p>Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </a> 
                            </Col>
                            {/* <Col>
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
                            </Col> */}
                        </Row>
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
    )
}

export default StaffEssentials