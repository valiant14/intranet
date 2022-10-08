import React from "react";
import { Card, Row, Col } from "react-bootstrap";


const CardView = () => {
    return (
        <React.Fragment>
            <div className="container-custom-essentials">
                <Row className="mb-3">
                    <Col sm={4}>
                        <Card className="card-custom">
                            <Card.Header> Policies & Procedure</Card.Header>
                            <Card.Body>
                                <p>Check our rules or guidelines that we need to achieve & comply.</p>
                            </Card.Body>
                            <Card.Footer>Read More...</Card.Footer>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className="card-custom">
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <h1>test</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className="card-custom">
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <h1>test</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={4}>
                        <Card className="card-custom">
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <h1>test</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className="card-custom">
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <h1>test</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className="card-custom">
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <h1>test</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={4}>
                        <Card className="card-custom">
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <h1>test</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className="card-custom">
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <h1>test</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className="card-custom">
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <h1>test</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </React.Fragment>
    )
}

export default CardView