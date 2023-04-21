import React, { useEffect, useState } from 'react'
import Input from './Input'
import leftArrow from '../assests/leftarrow.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Otp({
  // setMobileList,mobileList
}) {
  const [OTP, setOTP] = useState("")
  const [counter, setCounter] = useState(15)
  useEffect(() => {
   const timer = counter > 0 && setInterval(()=> setCounter(counter-1),1000)
   return()=> clearInterval(timer)
  }, [counter])
  
  const navigate = useNavigate();
  const { state } = useLocation();
  const changeHandler = (e) =>{
    if((e.target.value).length === 4){
      if(e.target.value === "9999"){
        let mobileList = JSON.parse(sessionStorage.getItem("mobileList"));
        let list = mobileList === null? [] : mobileList
        console.log([state.register,...list]);
        sessionStorage.setItem("mobileList",JSON.stringify([state.register,...list]))
        // setMobileList([state.register,...mobileList])
        navigate("/dashboard");
      }
      else{
        toast.error("otp Invalid");
      }
    }
    else{
      setOTP(e.target.value)
    }
  }
  return (
    <div className='Container otp'>
    <img src={leftArrow} alt="image" className='left_arow' />
    <h1 className='Header'>Enter OTP</h1>
    <p>we have sent a one time password (otp) to ******{!state.register.match(/[a-zA-Z]/g)?state.register.slice(state.register.length - 4,state.register.length):state.register.slice(state.register.length - 12,state.register.length)}</p>
    <div className='otp_input'><Input value={OTP} onChange={changeHandler} name="otp" placeholder=" OTP" type="number"/></div>
   {counter === 0 ? <p>Resend OTP</p>: <p>resend OTP in 00:{counter}</p>}
    </div>
  )
}

export default Otp