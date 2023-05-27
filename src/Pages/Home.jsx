import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const { currentUser } = useAuth();
  console.log(currentUser?.email);

  const navigate = useNavigate();

  if(!currentUser){
    navigate("/login");
  }

  return (
    <div>Home</div>
  )
}
