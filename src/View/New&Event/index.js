import React from "react";
import news from '../../assets/news.png'
import {Col, Row} from 'react-bootstrap'
import './index.scss'
const Newevents = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="new-image">
                    <img src={news} />
                </Col>
            </Row>
        
        </React.Fragment>

    )
}

export default Newevents