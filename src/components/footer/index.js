import React from 'react'
import logo from '../../assets/seder.png'
import {Col, Row} from 'react-bootstrap'

const Footer = () => {
    return (
        <>
        <Row  className="footer-containers">
          <hr></hr>
          <Col sm={1}>
          </Col>
          <Col>
            <Row>
              <Col sm={1}>
                <img src={logo} width="100" height="100" className='mt-2'/>
              </Col>
              <Col>
                <p>
                    <span>Seder Group of Company</span>
                    <br></br>
                   <span >12345 Al Malqa District</span>
                     <br></br>
                    <span >Riyadh</span>,<span>Saudi Arabia</span> <span>98765</span>
                    <br></br>
                    <span >Phone:</span><span>&nbsp;460-6666</span>
                    <br></br>
                    <span >Copyrights: SEDER GROUP</span>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        </>
    )
}

export default Footer