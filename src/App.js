import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
//components
import Home from './View/Home/index'
import Aboutus from './View/AboutUs/aboutUs';
import Layout from './View/Layout/index'
import Newevents from './View/New&Event/index'
import StaffEssentials from './View/StaffEssentials/index'
import Contacts from './View/Contacts/index'
import Departments from './View/Department/index'
import Feedbacks from './View/FeedBack/index'

function App() {

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
          <Route exact path='/home' element={< Home />}></Route>
          <Route exact path='/about' element={< Aboutus />}></Route>
          <Route exact path='/news&events' element={< Newevents />}></Route>
          <Route exact path='/staffEssentials' element={< StaffEssentials />}></Route>
          <Route exact path='/contacts' element={< Contacts />}></Route>
          <Route exact path='/departments' element={< Departments />}></Route>
          <Route exact path='/sendyourfeedback' element={< Feedbacks />}></Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
