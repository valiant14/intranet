import React from "react";
import {Col, Row, Card, InputGroup,Form} from 'react-bootstrap'
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from 'react-pro-sidebar';
import CardView from '../StaffEssentials/Card/index'
import { Search,FileText, ArrowUpRight, Users,BarChart2, DollarSign, LogOut,Flag } from 'react-feather';
const StaffEssentials = () => {

    return (
        // <Row>
        //     <Col sm={3}>
        //         <div style={{ display: 'flex', height: '100vh' }}>
        //             <Sidebar className="mt-3">
        //                 <Menu>
        //                     <MenuItem> Documentation</MenuItem>
        //                     <MenuItem> Calendar</MenuItem>
        //                     <MenuItem> E-commerce</MenuItem>
        //                 </Menu>
        //             </Sidebar>
        //     </div>
        //     </Col>
        //     <Col sm={9}>
        //         <CardView />
        //     </Col>
        // </Row>
        <React.Fragment>
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
                                <div className="main-card hoverM3">
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
                            <Col>
                                <div className="main-card">
                                    <div><FileText/></div>
                                    <h1>Policies & Procedures</h1>
                                    <p>Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
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
                            <Col>
                                <div className="main-card">
                                    <div><FileText/></div>
                                    <h1>Policies & Procedures</h1>
                                    <p>Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
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
                                        {/* <span className="box-containers1"><Search/></span>
                                        <span className="box-containers2"><Search/></span>
                                        <span className="box-containers3"><Search/></span>
                                        <span className="box-containers4"><Search/></span>
                                        <span className="box-containers5"><Search/></span> */}
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default StaffEssentials