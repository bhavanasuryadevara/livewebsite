import React from 'react';
import Main from './Components/Main';
import Login from './Components/login';
import Signup from './Components/signup.jsx'; // Make sure to import Signup correctly

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VerifyEmail from './Components/Verifyemail.jsx';
import PhoneNumberForm from './Components/PhoneNumberForm.jsx';
import OtpForm from './Components/Otpverification.jsx';

import DesignCards1 from './Components/Card3.jsx';
//import LoginPage from './Components/Loginemail.jsx';
import Emailverification from './Components/Emailverification.jsx';
import KitchenDesigns from './Components/Mod.jsx';
import BannerComponent from './Components/Storelocater.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/DesignCards' element={<DesignCards1/>}/>
        <Route path='/KitchenDesigns' element={<KitchenDesigns/>}/>
        <Route path='/Store' element={<BannerComponent/>}/>
        <Route path='/Signup' element={<Signup/>}/> {/* Use Signup component here */}
       
        <Route path='/verifyEmail' element={<VerifyEmail/>}/> 
        <Route path='/PhoneNumberForm' element={<PhoneNumberForm/>}/>
        <Route path='/otpVerification' element={<OtpForm/>}/> 
        <Route path='/Emailverification' element={<Emailverification/>}/> 


        
      </Routes>
    </Router>
  );
}

export default App;
