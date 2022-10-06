import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col, Card} from 'react-bootstrap'
import '../index.scss'
import React,{useState} from 'react';
// import { collection,addDoc } from "firebase/firestore";
// import {db} from '../../../firebase/firebase'

async function Forms({data}) {
    const [contextData, setContextData] = useState([])
    const [types, setTypes] = useState('');
    const [subjects, setSubjects] = useState('');
    const [contents, setContents] = useState('');


    const onsubmitHandler = (e) => {
        e.preventDefault();
        const inputData = 
            {
                Type: types,
                Subject: subjects,
                Content: contents
            }
            // const data = addDoc(collection(db, "TBL_Content"))
        }

  return (
    <React.Fragment>
    <hr></hr>
    <div className='container-menu'>
            <div className="menu">
                <ul>
                    {data.map((item,index) => {
                        return (
                            <li key={index}>
                                <a onClick={() => setContextData(item.Content)}>{item.Subject}</a>
                            </li>
                        );
                        })}
                </ul>
            </div>
    <div className='form-area'>
        <Card>
        <Form onSubmit={onsubmitHandler}>
            <Card.Header>Form</Card.Header>
            <Card.Body>
            
                <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                Type
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" value={types} onChange={e => setTypes(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}  className="mb-3">
                <Form.Label column sm={2}>
                Subject
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" value={subjects} onChange={e => setSubjects(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                Content
                </Form.Label>
                <Col sm={10}>
                <Form.Control as="textarea" row="5" value={contents} onChange={e => setContents(e.target.value)}/>
                </Col>
            </Form.Group>
        
            </Card.Body>
            <Card.Footer>
            <Row>
                <Col sm={12} className="mt-1 ">
                    <Button class="button-65 " role="button" type="submit">Submit</Button>
                </Col>
            </Row>
            </Card.Footer>
            </Form>
        </Card>
    </div>
    </div>
    </React.Fragment>
  );
}

export default Forms;