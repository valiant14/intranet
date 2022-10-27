import React from "react";
import ceo from '../../../assets/images/ceo1.png'
import {Col, Row} from 'react-bootstrap'
import './index.scss'

const CeoAbout = () => {
    return (
        <>
        <Row>
            <Col>
                <div className="AboutCeo">
                    <div className="ciclesDesign"></div>
                        <div className="imageContainer">
                            <img src={ceo} alt="" className="ceoImage"></img>
                        </div>


                    
                    <div className="AboutCeoText">
                        <h1>About Ceo</h1>
                    </div>
                    <div className="ceoText">
                    <p>Experienced Chief Executive Officer with 20 years of experience with a demonstrated history of working in
                    different industries mainly ICT. Skilled in leadership, building strategies, management, communications, and
                    business development.</p>
                    </div>
                </div>
            </Col>
        </Row>

        
        </>
    )
}

export default CeoAbout