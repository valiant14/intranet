import React from 'react'
import './index.css'
import Features from './features/index'
import UpcomingEvents from './upcomingEvents/index'
import Documents from './documents/index'
import StaffAnnouncement from './staffAnnouncements/index'
import Weathers from './weather/index'
import { Row, Col } from 'react-bootstrap';

const ContentView = () => {
  return (
    <>
        <div className='container-lg'>
            <Row>
                <Col>
                    {/* <Features /> */}
                    <StaffAnnouncement />
                </Col>
                <Col>
                    <UpcomingEvents />
                    <Weathers />
                </Col>
                <Col>
                    <Documents />
                    
                </Col>
            </Row>
        </div>
    </>
  )
}

export default ContentView