import React from "react";
import {Col, Row, Card} from 'react-bootstrap'
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from 'react-pro-sidebar';
import CardView from '../StaffEssentials/Card/index'

const StaffEssentials = () => {

    return (
        <Row>
            <Col sm={3}>
                <div style={{ display: 'flex', height: '100vh' }}>
                    <Sidebar className="mt-3">
                        <Menu>
                            <MenuItem> Documentation</MenuItem>
                            <MenuItem> Calendar</MenuItem>
                            <MenuItem> E-commerce</MenuItem>
                        </Menu>
                    </Sidebar>
            </div>
            </Col>
            <Col sm={9}>
                <CardView />
            </Col>
        </Row>
    )
}

export default StaffEssentials