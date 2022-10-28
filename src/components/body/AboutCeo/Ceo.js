import React from "react";
import ceo from '../../../assets/images/ceo1.png'
import {Col, Row} from 'react-bootstrap'
import './index.scss'

const CeoAbout = () => {
    return (
        <>
            <div className="ceo_container">
                <div className="ceo_wrapper">
                    <div className="ceo_testimonial">
                        <div className="ceo_div">
                            <h1>about ceo</h1>
                            <img src={ceo}></img>
                            <blockquote>
                                "Experienced Chief Executive Officer with 20 years of experience with a demonstrated history of working in
                                different industries mainly ICT. Skilled in leadership, building strategies, management, communications, and
                                business development".
                            </blockquote>
                            <h5>Valiant Ocampo</h5>
                            <p>Chief Executive Officer</p>
                        </div>
                    </div>
                </div>  
            </div>     
        </>
    )
}

export default CeoAbout