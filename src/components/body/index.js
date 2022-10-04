import React from 'react'
import './index.css'
import Features from './features/index'
import UpcomingEvents from './upcomingEvents/index'
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
                    <UpcomingEvents />
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