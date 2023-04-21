import React, { useState } from 'react'
import Input from './Input';
import whatsapp from '../assests/whatsapp_image.png'
import google from '../assests/Google_image.jpg'
import { Link, useNavigate } from 'react-router-dom';
import rightArrow from '../assests/rightArw.png'
import { toast } from 'react-toastify';
function Register() {
  const [register, setRegister] = useState("")
  const navigate = useNavigate();
  const changeHandler = (e) =>{
    // if((e.target.value).length <= 10){
      setRegister(e.target.value)
    // }
  }
  const emailValidator= (e) => {
    let valid;
    const email = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;
    if (e.match(email)) {
      valid = e;
    }
    return valid;
  };
  const onSubmitHandler = (e) =>{
    e.preventDefault()
    
          let alphabets = register.match(/[a-zA-Z]/g);
      let text = alphabets?.length > 0 ? emailValidator(register) : register;
      console.log(text);
    if(text){
      // axios.post("PostApi", {register,})
      //   .then((e) => {})
      //   .catch((error) => console.log(error));
      navigate("/otp",
      {
        state: {
          register
        }
      })
    }
    else{
      toast.error("Please enter valid Mobile/Email ID")
    }
    
  }
  return (
    <div className="wrapper">
      <div className="Container">
        <h1 className="Header">Get started</h1>
        <form onSubmit={(e)=>onSubmitHandler(e)}>
        <Input
          value={register}
          onChange={changeHandler}
          name="register"
          placeholder=" Mobile/Email"
          type="text"
        />
        <button type="submit" className="continue_btn">
          Continue &rarr;
          {/* <img src={rightArrow} alt="image" /> */}
        </button>
        <p>Or continue with</p>
        <div className="social_box">
          <div className="whats_App">
            <img src={whatsapp} alt="image" />
            &nbsp; WhatsApp
          </div>
          <div className="google">
            <img src={google} alt="image" />
            &nbsp; Google
          </div>
        </div>
        </form>
        <p>
          By continuing you agree to out{" "}
          <Link className="hyperLink" to="#">
            terms
          </Link>{" "}
          and{" "}
          <Link className="hyperLink" to="#">
            polices
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register