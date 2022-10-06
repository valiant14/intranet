import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap'
import '../index.scss'

function Forms() {
  return (
    <div className='form-area'>
    <Form>
        <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Type
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text"/>
        </Col>
      </Form.Group>
      <Form.Group as={Row}  className="mb-3">
        <Form.Label column sm={2}>
          Subject
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text"/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Content
        </Form.Label>
        <Col sm={10}>
          <Form.Control as="textarea" row="5" />
        </Col>
      </Form.Group>
      <Row>
        <Col sm={6} className="mt-4">
            <Button class="button-65 " role="button" type="submit">Submit</Button>
        </Col>
    </Row>
    </Form>


    </div>
  );
}

export default Forms;