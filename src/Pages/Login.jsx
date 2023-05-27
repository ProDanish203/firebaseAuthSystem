import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../Context/AuthProvider';

export const Login = () => {

  const { login } = useAuth();

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      setError("")
      setPass("")
      setEmail("");
      setLoading(true)
      await login(email, pass);
      navigate("/")
    }
    catch(e){
      console.log(e);
      setLoading(false);
      setError("Invalid Credentials")
    }

  }

  return (
    <>
    <div className="form-container">

      {error && (
        <div className='bg-red-500 p-2 py-4 my-3 text-center text-lg text-white rounded-[5px]'>{error}</div>
      )}

      <form onSubmit={handleLogin} className='flex gap-5 bg-white flex-col items-center p-2 py-5 rounded-md border-2 border-purple-200'>

          <h3 className='text-2xl font-bold'>Login</h3>

          <div className='flex flex-col justify-center items-start w-[90%] gap-2'>
            <p className='text-gray-700'>Email Address</p>
            <input type="text" placeholder='Enter your Email' className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='flex flex-col justify-center items-start w-[90%] gap-2'>
            <p className='text-gray-700'>Password</p>
            <input type="password" placeholder='Enter Password' className='input' value={pass} onChange={(e) => setPass(e.target.value)} />
          </div>

          <div className='w-[90%]'>
            <button className='bg-purple-500 mt-2 py-3 w-full text-white rounded-md cursor-pointer'>Login</button>
          </div>

          <div className='w-[90%]'>
            <p>don't have an account? <Link to="/signup" className="text-purple-500">Signup</Link> Now!</p>
          </div>

      </form>
    </div>
    </>
  )
}
