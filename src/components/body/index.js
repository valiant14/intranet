import React from 'react'
import './index.css'
import Features from './features/index'
import UpcomingEvents from './upcomingEvents/index'
import Documents from './documents/index'
import StaffAnnouncement from './staffAnnouncements/index'
import Weathers from './weather/index'
import { Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion"

const ContentView = () => {
  return (
    <>
        <motion.div 
                initial={{ y: "100%"}}
                animate={{ y: "0%"}}
                transition={{duration: 0.75, ease: "easeOut"}}
                exit={{opacity: 1}} className='container-lg'>
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
        </motion.div>
    </>
  )
}

export default ContentView