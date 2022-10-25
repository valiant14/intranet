import React from "react";
import ceo from '../../../assets/images/ceo1.png'
import './index.scss'

const CeoAbout = () => {
    return (
        <>
        <div className="ceoContainer">
            <div>
                <img src={ceo} className="ceoImage"></img>
            </div>
            <div className="ceoTitle">
                <h1>About Ceo</h1>
                <p>
                Experienced Chief Executive Officer with 20 years of experience with a demonstrated history of working in
                    different industries mainly ICT. Skilled in leadership, building strategies, management, communications, and
                    business development.
                </p>
            </div>
        </div>
        
        </>
    )
}

export default CeoAbout