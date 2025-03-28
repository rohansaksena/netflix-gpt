import React, { useState } from 'react'
import Header from './Header'
import backgroundNetfliximg from '../assets/NetflixBackground.jpg'
import { checkValidData } from '../utils/validate';
import { useRef } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMesssage] = useState(null);

    const dispatch = useDispatch()
    const email = useRef(null)
    const password = useRef(null)
    const fname = useRef(null)

    const toggleSignUpForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {
        const emailValue = email.current ? email.current.value : '';
        const passwordValue = password.current ? password.current.value : '';
        const fnameValue = fname.current ? fname.current.value : '';
        const message = checkValidData(emailValue, passwordValue, isSignInForm, fnameValue);
        
        setErrorMesssage(message);
    
        if (!message) {
            if (!isSignInForm) {
                createUserWithEmailAndPassword(auth, emailValue, passwordValue)
                    .then((userCredential) => {
                        const user = userCredential.user
                        updateProfile(user,{
                            displayName: fnameValue
                        })
                        .then(() => {
                            const {uid, email, displayName} = auth.currentUser;
                            dispatch(addUser({
                                uid: uid, 
                                email: email, 
                                displayName: displayName
                            }))
                        })
                        .catch((error) =>{setErrorMesssage(error.message)})
                        
                    })
                    .catch((error) => {
                        setErrorMesssage(error.code + " " + error.message);
                    });
            } else {
                signInWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    setErrorMesssage(error.code + " " + error.message)
                })
            }
        }
    }

  return (
    <div>
        <div className='absolute'>
            <img src={backgroundNetfliximg}/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 absolute text-white bg-opacity-80 rounded-xl'>
        <h1 className=' md:font-bold text-3xl'>{isSignInForm ? "Sign In":"Sign Up"}</h1>
            
            {!isSignInForm && <input 
            type='text' 
            ref={fname}
            placeholder='Full Name' 
            className='p-4 my-4 w-full bg-black bg-opacity-50 border border-gray-500'/>}
            
            <input 
            type='text' 
            ref={email}
            placeholder='Email Address' 
            className='p-4 my-4 w-full bg-black bg-opacity-50 border border-gray-500'/>
            
            <input 
            type='password' 
            ref={password}
            placeholder='Password' 
            className='p-4 my-4 w-full bg-black bg-opacity-50 border border-gray-500'/>
            
            <p className='text-red-700 text-lg'>{errorMessage}</p>

            <button 
            className=' bg-red-700 p-4 my-6 w-full rounded-lg'
            onClick={() => handleButtonClick()}>
                {isSignInForm ? "Sign In":"Sign Up"}
            </button>
            
            <div className='flex items-center gap-2'>
            <label>{isSignInForm ? "New to Netflix?":"Already a Member?"}</label>
            <span>
                <p className='text-white cursor-pointer font-bold hover:underline' 
                    onClick={toggleSignUpForm}>
                    {isSignInForm ? "Sign up now":" Sign in now"}
                </p>
            </span>
            </div>
            
        </form>
    </div>
  )
}

export default Login