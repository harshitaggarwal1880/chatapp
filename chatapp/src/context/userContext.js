import React, { createContext, useContext, useReducer } from 'react'
import UserReducer from '../reducers/UserReducer';

const UserContext = createContext();

const UserProvider = (props)=>{
    
    const initialState = {
        name: "Hello",
        roll: 3434
    }

    const [state, dispatch] = useReducer(UserReducer,initialState)
    
    return(
        <UserContext.Provider value={{...state}}>
            {props.children}
        </UserContext.Provider> 
    )
}


const UserHook = ()=>{
    const usercontext =  useContext(UserContext);
    return usercontext;
}


export { UserHook, UserProvider};

