import React, { useState } from 'react'
import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import Register from '../Components/Register';
import Otp from '../Components/Otp';
import Dashboard from '../Components/Dashboard';

function Index() {
  // const [mobileList, setMobileList] = useState([])
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Register/>} />
      <Route exact path="/otp" element={<Otp 
      // setMobileList={setMobileList} mobileList={mobileList}
      />} />
      <Route exact path="/dashboard" element={<Dashboard 
      // mobileList={mobileList}
      />} />

    </Routes>
  </BrowserRouter>
  )
}

export default Index