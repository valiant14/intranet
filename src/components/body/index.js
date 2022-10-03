import React from 'react'
import './index.css'
import Features from './features/index'
import Upcoming_Events from './upcomingEvents/index'
import Documents from './documents/index'
import StaffAnnouncement from './staffAnnouncements/index'
import Weather from './weather/index'
import { Row, Col } from 'react-bootstrap';
const ContentView = () => {
  return (
    <>
        <div className='container-lg'>
            <Row>
                <Col>
                    <Features />
                </Col>
                <Col>
                    <Upcoming_Events />
                    <Documents />
                </Col>
                <Col>
                    <StaffAnnouncement />
                    <Weather />
                </Col>
            </Row>
        </div>
    </>
  )
}

export default ContentView