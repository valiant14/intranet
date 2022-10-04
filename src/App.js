import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import React, {useState,useRef,useEffect} from 'react'
//components
import Navbar from './components/header/navbar/index'
import Navigations from './components/header/navigation'
import Welcome from './components/welcome/index'
import ContentView from './components/body/index'
import Footer from './components/footer/index'
import Chatbox from './components/chatbox/Avatar/chatbox'
import Avatar from './components/chatbox/Avatar/avatar'

function App() {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [visible, setVisible] = useState(false)

  function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setVisible(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

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
        <div ref={wrapperRef}>
          <Chatbox visible={visible}/>
          <Avatar style={{position: 'fixed',bottom: '24px',right: '24px'}} onClick={() =>setVisible(true)}/>
        </div>
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
