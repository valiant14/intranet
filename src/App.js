import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
//components
import Navbar from './components/header/navbar/index'
import Navigations from './components/header/navigation'
import Welcome from './components/welcome/index'
import ContentView from './components/body/index'
import Footer from './components/footer/index'
function App() {
  return (
    <div>
      <Row >
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <Navigations />
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
          <Welcome />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col className='mt-5'>
        <ContentView />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col className='mt-5'>
          <Footer/>
        </Col>
      </Row>


    </div>
      
  );
}

export default App;
