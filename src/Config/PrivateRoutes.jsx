import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = ({ user, children}) => {

    if(!user){
        return <Navigate to="/login" replace/>
    }
    else{
        return children
    }

}
