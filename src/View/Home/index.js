import { Row, Col } from 'react-bootstrap';
import React, {useState,useRef,useEffect} from 'react'
//components

import ContentView from '../../components/body/index'
import Welcome from '../../components/welcome/index'
import Footer from '../../components/footer/index'
import Chatbox from '../../components/chatbox/Avatar/chatbox'
import Avatar from '../../components/chatbox/Avatar/avatar'


function Home() {


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
      <Row>
        <Col>
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

export default Home;
