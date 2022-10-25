import React from "react";
import awarding1 from '../../assets/images/awarding1.jpg'
import awarding2 from '../../assets/images/awarding2.jpg'
import awarding3 from '../../assets/images/awarding3.jpg'
import awarding4 from '../../assets/images/awarding4.jpg'
import events from '../../assets/PDF/events/events.pdf'
import { Download } from 'react-feather';

import {Col, Row,Carousel, Button } from 'react-bootstrap'
import './index.scss'

const Newevents = () => {

    const downloads = () => {
        console.log('download')
    }
    return (
        <React.Fragment>
            <h1 className="eventsTitle">Events</h1>
            <Row className="eventContainer">
                <div className="cardContainer">
                    <Col  sm={4}>

                        {/* <img src={awarding1} /> */}
                        <div className="eventItems">
                            <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={awarding1}
                                />
                                <Carousel.Caption>
                                {/* <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={awarding2}
                                />
                                <Carousel.Caption>
                                {/* <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={awarding3}
                                />
                                <Carousel.Caption>
                                {/* <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={awarding4}
                                />
                                <Carousel.Caption>
                                {/* <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>
                        <a href={events} download="Event"><h1 className="subTitle">2022 Honoring Ceremony</h1></a>
                            <p>
                            &emsp;Our CEO, His Excellency Loai Alammar extend his thanks and appreciation to Mr. Abdulaziz al Moqbel, Mr. Saleh al Dhalan and Abdulrahman al Yahya thru the period of their work in Seder Group company. Ceremony held in Hilton Hotel last October 9, 2022 at 8:00pm.
                            </p>
                            <div className="cardFooter">
                                <a href={events} download="Event"><img src="https://www.iconpacks.net/icons/2/free-pdf-download-icon-2617-thumb.png" width="30px"></img><h1 className="downloadS">Download</h1></a>
                            </div>
                        </div>
                    </Col>
                </div>
            </Row>

        
        </React.Fragment>

    )
}

export default Newevents