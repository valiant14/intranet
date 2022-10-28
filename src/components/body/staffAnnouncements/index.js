import React from 'react'
import ceo from '../../../assets/images/ceo1.png'
import './index.scss'
import {Col, Row} from 'react-bootstrap'
const StaffAnnouncement = () => {
  return (
    <>
        <div class="card border-dark mb-3">
        <h5 class="card-header">Featured</h5>
             <div class="card-body">
                        <Row>
                          <Col sm={4}>
                            <img src={ceo} className="ceo_image mt-3"></img>
                          </Col>

                          <Col>
                            <h5 class="card-title mt-4">About Ceo</h5>
                            <p class="card-text mt-3">"Experienced Chief Executive Officer with 20 years of experience with a demonstrated history of working in
                            different industries mainly ICT. Skilled in leadership, building strategies, management, communications, and
                            business development".</p>
                            <h6 className='ceo_name'>Valiant Ocampo</h6>
                            <p className='ceo_title'>Chief Executive Officer</p>
                          </Col>
                        </Row>
                        
                        

                        {/* <a href="Gosomewhere" class="btn btn-primary">Learn More</a> */}
            </div>
        </div>
    </>
  )
}

export default StaffAnnouncement