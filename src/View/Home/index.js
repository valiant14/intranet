import { Row, Col } from 'react-bootstrap';
import React, {useState,useRef,useEffect} from 'react'
import './index.scss'
//components

import ContentView from '../../components/body/index'
import Welcome from '../../components/welcome/index'
import Footer from '../../components/footer/index'
import Chatbox from '../../components/chatbox/Avatar/chatbox'
import Avatar from '../../components/chatbox/Avatar/avatar'
import CeoAbout from '../../components/body/AboutCeo/Ceo'
import UpcomingEvents from '../../components/body/upcomingEvents/index'
import Events from '../../components/body/events';

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
      {/* <Row>
        <Col>
          <CeoAbout />
        </Col>
      </Row> */}
      <Row className='mt-5'>
        <Col sm={9}>
          <h1 className='upcomingEvent'>UPCOMING EVENTS</h1>
          <div className='eventContainers'>
            <Events/>
            <UpcomingEvents/>
          </div>
          </Col>
          <Col sm={3}>
          <h1 className='docTitles'>COMPANY POLICY</h1>
          <div className='DocumentContainer'>
            <div className='Documents'>
              <div className='DocumentsSub'></div>
              <div className='SubTitles'>
                <p>Human Resources</p>
              </div>
            </div>
            <div className='Documents'>
              <div className='DocumentsSub'></div>
                <div className='SubTitles'>
                  <p>IT Department</p>
                </div>
            </div>
          </div>
          <div className='DocumentContainer'>
            <div className='Documents'>
            <div className='DocumentsSub'></div>
              <div className='SubTitles'>
                <p>Car and Rentals</p>
              </div>
            </div>
            <div className='Documents'>
            <div className='DocumentsSub'></div>
              <div className='SubTitles'>
                <p>Internet SIM</p>
              </div>
            </div>
          </div>
        </Col>

        </Row>
        <Row className='mt-5'>
          <Col>
          <h1 className='news'>NEWS</h1>
          </Col>

        </Row>

        <div ref={wrapperRef}>
          <Chatbox visible={visible}/>
          <Avatar style={{position: 'fixed',bottom: '24px',right: '24px'}} onClick={() =>setVisible(true)}/>
        </div>
    </div>
      
  );
}

export default Home;
