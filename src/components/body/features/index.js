import React from 'react'
import ceo from '../../../assets/images/ceo1.png'
import './index.scss'
const Features = () => {
  return (
    <>
        <div class="card border-dark mb-3">
            <div class="card-header">Features</div>
                 <div className="drop__card">
                    <div className="drop__data">
                        <img src={ceo} alt="" className="ceoImage"/>
                    <div>
                        <h1 className="titles">About CEO</h1>
                          <h1 className="contentTitles">Experienced Chief Executive Officer with 20 years of experience with a demonstrated history of working in
                          different industries mainly ICT. Skilled in leadership, building strategies, management, communications, and
                          business development.</h1>
                        <span className="drop__profession">Sep 26, 2022 2:00 PM</span>
                    </div>
                    </div>
                 </div>
        </div>
    </>
  )
}

export default Features