import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import React from 'react';
//components
import Home from './View/Home/index'
import Aboutus from './View/AboutUs/aboutUs';
import Layout from './View/Layout/index'
import Newevents from './View/New&Event/index'
import StaffEssentials from './View/StaffEssentials/index'
import Forms from './View/StaffEssentials/Form/index'
import Contacts from './View/Contacts/index'
import Departments from './View/Department/index'
import Feedbacks from './View/FeedBack/index'

import { signInAnonymously,onAuthStateChanged  } from "firebase/auth";
import { doc, onSnapshot, collection, query} from "firebase/firestore";
import auth from './firebase/firebase'
import {db} from './firebase/firebase'


function App() {
  const [user, setUser] = React.useState([])
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    if(user) {
      const getDataFromFirebase = []
      const q = query(collection(db, "TBL_Content"))
      const unsub = onSnapshot(q, (querySnapshot) => {
         querySnapshot.docs.map(doc => {
          getDataFromFirebase.push({...doc.data(), key: doc.id})
         });
         setData(getDataFromFirebase)
      });
      return () => unsub;
    }
  }, [user])

signInAnonymously(auth)
    .then(() => {
      console.log('Login As Anonymous')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
       // ...
 });

onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid)
      } else {
        // User is signed out
        // ...
      }
});

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
          <Route exact path='/home' element={< Home />}></Route>
          <Route exact path='/about' element={< Aboutus />}></Route>
          <Route exact path='/news&events' element={< Newevents />}></Route>
          <Route exact path='/staffEssentials' element={< StaffEssentials data={data}/>}></Route>
          <Route exact path='/contacts' element={< Contacts />}></Route>
          <Route exact path='/departments' element={< Departments />}></Route>
          <Route exact path='/sendyourfeedback' element={< Feedbacks />}></Route>
          <Route exact path='/staffEssentials/forms' element={< Forms />}></Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
