import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import React from 'react';
import {Row, Col} from 'react-bootstrap'
//components
import Home from './View/Home/index'
import Aboutus from './View/AboutUs/aboutUs';
import Layout from './View/Layout/index'
import Newevents from './View/New&Event/index'
import StaffEssentials from './View/StaffEssentials/index2'
import Forms from './View/StaffEssentials/Form/index'
import Contacts from './View/Contacts/index'
import KnowledgeBase from './View/Knowledge/index';
import KnowledgeBase_s1 from './View/Knowledge/sessions/session1';
import KnowledgeBase_s2 from './View/Knowledge/sessions/session2';
import KnowledgeBase_s3 from './View/Knowledge/sessions/session3';
import Feedbacks from './View/FeedBack/index'
import Footer from './components/footer';
import { signInAnonymously,onAuthStateChanged  } from "firebase/auth";
import { doc, onSnapshot, collection, query} from "firebase/firestore";
import auth from './firebase/firebase'
import {db} from './firebase/firebase'


function App() {
  const [data, setData] = React.useState([])
  const [formData, setFormData] = React.useState([])

  React.useEffect(() => {
    signInAnonymously(auth)
    .then(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // const uid = user.uid;
          // setUser(uid)
          const getDataFromFirebase = []
          const q = query(collection(db, "TBL_Content"))
          const unsub = onSnapshot(q, (querySnapshot) => {
             querySnapshot.docs.map(doc => {
              getDataFromFirebase.push({...doc.data(), key: doc.id})
             });
             setData(getDataFromFirebase)
          });
          return () => unsub;
        } else {
          // User is signed out
          // ...
        }
    })
});
}, [])


  return (
    <BrowserRouter>
      <Row>
        <Col>
          <Row>
            <Layout />
          </Row>
          <Row className='mb-5'>
            <Col>
              <Routes>
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/about' element={< Aboutus />}></Route>
                  <Route exact path='/news&events' element={< Newevents />}></Route>
                  <Route exact path='/staffEssentials' element={< StaffEssentials data={data}/>}></Route>
                  <Route exact path='/contacts' element={< Contacts />}></Route>
                  <Route exact path='/knowledge' element={< KnowledgeBase />}></Route>
                  <Route exact path='/knowledge/dayone' element={< KnowledgeBase_s1 />}></Route>
                  <Route exact path='/knowledge/daytwo' element={< KnowledgeBase_s2 />}></Route>
                  <Route exact path='/knowledge/daythree' element={< KnowledgeBase_s3 />}></Route>
                  <Route exact path='/sendyourfeedback' element={< Feedbacks />}></Route>
                  <Route exact path='/staffEssentials/forms' element={< Forms data={data}/>}></Route>
              </Routes>
            </Col>
          </Row>
          <Row>
            <Col>
              <Footer/>
            </Col>
          </Row>

        </Col>
      </Row>
    </BrowserRouter>  
  );
}

export default App;
