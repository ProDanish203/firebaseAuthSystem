import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

export const Signup = () => {

  const { signup } = useAuth();

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [cpass, setCpass] = useState("")

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if(pass.length < 6){
      setError("Password must be 6 digit long!")
    }
    else if(pass !== cpass){
      setError("Passwords Do No Match")
    }
    
    try{
      setError("")
      setLoading(true)
      await signup(email, pass);
      navigate("/")
    }
    catch(e){
      console.log(e);
      setLoading(false);
      setError("Unable To create an account")
    }

  }

  return (
    <div className="form-container">
      {error && (
        <div className='bg-red-500 p-2 py-4 my-3 text-center text-lg text-white rounded-[5px]'>{error}</div>
      )}
      <form onSubmit={handleSignup} className='flex gap-5 bg-white flex-col items-center p-2 py-5 rounded-md border-2 border-purple-200'>

          <h3 className='text-2xl font-bold'>signup</h3>

          <div className='flex flex-col justify-center items-start w-[90%] gap-2'>
            <p className='text-gray-700'>Email Address</p>
            <input type="text" placeholder='Enter your Email' className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='flex flex-col justify-center items-start w-[90%] gap-2'>
            <p className='text-gray-700'>Password</p>
            <input type="password" placeholder='Enter Password' className='input' value={pass} onChange={(e) => setPass(e.target.value)} />
          </div>

          <div className='flex flex-col justify-center items-start w-[90%] gap-2'>
            <p className='text-gray-700'>Confirm Password</p>
            <input type="password" placeholder='Confirm Password' className='input' value={cpass} onChange={(e) => setCpass(e.target.value)} />
          </div>

          <div className='w-[90%]'>
            <button disabled={loading} className='bg-purple-500 mt-2 py-3 w-full text-white rounded-md cursor-pointer'>Signup</button>
          </div>

          <div className='w-[90%]'>
            <p>Already have an account? <Link to="/login" className="text-purple-500">Login</Link> Now!</p>
          </div>

      </form>
    </div>
  )
}
