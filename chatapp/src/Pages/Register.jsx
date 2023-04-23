import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/logo.png';
import { ToastContainer , toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../Utils/APIRoutes";




const Register = () => {

  const navigate = useNavigate(); 

  const [values, setvalues] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    userconfpassword: "",
  })


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if(handleValidation()){

      const {username , useremail, userpassword} = values;

      const {data} = await axios.post(registerRoute, {
        username, useremail, userpassword
      })

      if(data.status===false){
        toast.error(data.msg, toastOptions);
      }
      if(data.status===true){
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/setavatar");
      }
    }
    
  };

  useEffect(() => {
    
    if(localStorage.getItem("chat-app-user")){
      navigate("/");
    }
  
  }, [])
  
  
  
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  }



  const handleValidation =()=>{
    const {username , useremail, userpassword, userconfpassword} = values;
    
    if(username.length<3){
      toast.error("Username should be grater than 3 Characters", toastOptions)
      return false;
    }
    else if(useremail===""){
      toast.error("Email is required", toastOptions)
      return false;
    }
    else if(userpassword.length<5){
      toast.error("Password should be equal or greator than 5 characters", toastOptions)
      return false;
    }
    else if(userpassword!==userconfpassword){
      toast.error("Password and Confirm Password should be same", toastOptions)
      return false;
    }
    else{
      return true;
    }
  }



  const handleChange = (event) => {
    setvalues({...values,[event.target.name]: event.target.value})
  };

  return (
    <>
      <FormContainer>
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div className="brand">
            {/* <img src={logo} alt="Logo" /> */}
            <h1 className="brand_name">Liffy</h1>
          </div>

          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <input
            type="email"
            name="useremail"
            id="useremail"
            placeholder="Email"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <input
            type="password"
            name="userpassword"
            id="userpassword"
            placeholder="Password"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <input
            type="password"
            name="userconfpassword"
            id="userconfpassword"
            placeholder="Confirm Password"
            onChange={(e) => {
              handleChange(e);
            }}
          />

            <button type="submit"> Submit </button>
            <span> already have an account ? <Link to={"/login"}> Login </Link></span> 

        </form>
      </FormContainer>
      <ToastContainer/>
    </>
  );
};

const FormContainer = styled.div`

  height: 100vh;
  width: 100vw;
  background-color: #07070c;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .brand{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img{
      height: 3rem;
    }
    h1{
      color: white;
      text-transform: uppercase;
    }
  }


  form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #0000076;
    padding: 3rem 5rem;
    border-radius: 2rem;

    input{
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus{
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    button{
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover{
        background-color: #4e3eff;
      }
    }

    span{
      color: white;
      text-transform: uppercase;
      text-align: center;
      a{
        color: #4e8eff;
        text-decoration: none;
        font-weight: bold;
      }
    }

  }

`;

export default Register;
