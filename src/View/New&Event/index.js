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
            <Row className="eventContainer">
            <h1 className="eventsTitle">Events</h1>
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
                        <a href={events} download="Event"><h1 className="subTitle">SederGroup Awarding 2022</h1></a>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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