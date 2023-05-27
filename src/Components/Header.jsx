import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from '../Context/AuthProvider';

export const Header = () => {

    const { currentUser } = useAuth();

  return (
    <>
    <header className='bg-purple-600 p-4 flex justify-between items-center gap-2'>
        <h2 className='text-2xl'>
            <Link to="/" className='text-white font-bold'>LOGO</Link>
        </h2>
        <nav>
            <ul className='text-white font-[500] text-xl flex items-center justify-between gap-5'>
                {
                    !currentUser ? (
                        <>
                <li>
                    <Link to="/login" className='cursor-pointer'>Login</Link>
                </li>
                <li>
                    <Link to="/signup" className='cursor-pointer'>Signup</Link>
                </li>
                </>
                    )
                :
                (
                <>
                    <li>
                        <Link to="/profile" className='cursor-pointer'>Profile</Link>
                    </li>
                </>
                )
                }
                
            </ul>
        </nav>
    </header> 
    </>
  )
}
