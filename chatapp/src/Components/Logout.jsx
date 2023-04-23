import React from 'react'
import styled from 'styled-components'
import { BiPowerOff } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate();
    const handleClick = async ()=>{
        localStorage.clear();
        navigate("/login");
    }

  return (
    <LogoutCont onClick={handleClick}> 
        <BiPowerOff className='icon' />
    </LogoutCont>
  )
}

const LogoutCont = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: white;
    border: none;
    cursor: pointer;
    .icon{
        font-size: 1.3rem;
        
    }

`;

export default Logout