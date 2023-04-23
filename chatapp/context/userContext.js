import React, { createContext, useContext } from 'react'


const UserContext = createContext(null);


export const user = ()=>{
    const userc = useContext(UserContext);
    return userc;
}

export const UserProvider = (props)=>{
    return(
        <UserContext.Provider value={null}>
            {props.children}
        </UserContext.Provider> 
    )
}

