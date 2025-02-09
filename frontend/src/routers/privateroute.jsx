import React from 'react'
import { useAuth } from '../context/Authcontext'
import { Navigate } from 'react-router-dom';

const privateroute = ({children}) => {
    const {currentuser,loading}=useAuth(); 
    if(loading){
        return <h1>Loading...</h1>
    }
    if(currentuser){
        return children;
    }
    return <Navigate to="/login" replace/>
 
}

export default privateroute
