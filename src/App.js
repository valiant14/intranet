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
      <Navbar />
      <Navigations />
      <Welcome />
      <Row>
        <Col className='mt-5'>
        <ContentView />
        </Col>
      </Row>
      <Footer/>


    </div>
      
  );
}

export default App;
