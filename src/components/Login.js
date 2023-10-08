import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMesage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMesage(message);    
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="logo" />
            </div>
            <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={ name } type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700 rounded-lg' />}
                <input ref={ email } type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700 rounded-lg' />
                <input ref={ password } type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700 rounded-lg' />
                <p className='text-red-500 py-2'>{ errorMessage }</p>
                <button className='p-2 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{ isSignInForm? "New to Netflix? Sign Up Now": "Already registered? Sign In Now"}</p>
            </form>
        </div>
  )
}

export default Login;