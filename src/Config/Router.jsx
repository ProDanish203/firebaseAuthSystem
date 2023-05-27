import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { Profile } from "../Pages/Profile";
import { useAuth } from '../Context/AuthProvider';
import { PrivateRoutes } from "./PrivateRoutes";

export const Router = () => {

  const { currentUser } = useAuth();

  return (
    <Routes>

        {/* <Route exact path='/' element={
          <PrivateRoutes user={currentUser}>
            <Home/>
          </PrivateRoutes>
        }/>

        <Route exact path='/profile' element={
          <PrivateRoutes user={currentUser}>
            <Profile/>
          </PrivateRoutes>
        }/> */}

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
