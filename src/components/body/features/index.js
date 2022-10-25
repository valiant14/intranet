import React from 'react'
import ceo from '../../../assets/images/ceo1.png'
import './index.scss'
const Features = () => {
  return (
    <>
        <div class="card">
            <div class="card-header">Features</div>
                 <div className="drop__cards">
                    <div className="drop__data">
                        <img src={ceo} alt="" className="drop__imgs"/>
                    <div>
                        <p className="drop__name">Experienced Chief Executive Officer with 20 years of experience with a demonstrated history of working in
                          different industries mainly ICT. Skilled in leadership, building strategies, management, communications, and
                          business development.</p>
                    </div>
                    </div>
                 </div>
        </div>
    </>
  )
}

export default Features