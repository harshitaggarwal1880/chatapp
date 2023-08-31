import React from 'react'
import { UserHook } from '../context/userContext'

const Comp = () => {

    const {name,roll}= UserHook();
    
  return (
    <div>{name}</div>
  )
}

export default Comp