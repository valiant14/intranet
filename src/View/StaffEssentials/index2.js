import React from "react";
import {Col, Row, Card, InputGroup,Form} from 'react-bootstrap'
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from 'react-pro-sidebar';
import CardView from '../StaffEssentials/Card/index'
import { Search,FileText } from 'react-feather';
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
                                    <div className="card-icons"><FileText/></div>
                                    <h1 className="card-titles">Policies & Procedures</h1>
                                    <p className="card-contents">Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="main-card">
                                    <div className="card-icons"><FileText/></div>
                                    <h1 className="card-titles">Policies & Procedures</h1>
                                    <p className="card-contents">Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="main-card">
                                    <div className="card-icons"><FileText/></div>
                                    <h1 className="card-titles">Policies & Procedures</h1>
                                    <p className="card-contents">Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col>
                                <div className="main-card">
                                    <div className="card-icons"><FileText/></div>
                                    <h1 className="card-titles">Policies & Procedures</h1>
                                    <p className="card-contents">Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="main-card">
                                    <div className="card-icons"><FileText/></div>
                                    <h1 className="card-titles">Policies & Procedures</h1>
                                    <p className="card-contents">Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="main-card">
                                    <div className="card-icons"><FileText/></div>
                                    <h1 className="card-titles">Policies & Procedures</h1>
                                    <p className="card-contents">Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col>
                                <div className="main-card">
                                    <div className="card-icons"><FileText/></div>
                                    <h1 className="card-titles">Policies & Procedures</h1>
                                    <p className="card-contents">Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="main-card">
                                    <div className="card-icons"><FileText/></div>
                                    <h1 className="card-titles">Policies & Procedures</h1>
                                    <p className="card-contents">Check our rules or guidelines that we need to achieve & comply.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="main-card">
                                    <div className="card-icons"><FileText/></div>
                                    <h1 className="card-titles">Policies & Procedures</h1>
                                    <p className="card-contents">Check our rules or guidelines that we need to achieve & comply.</p>
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