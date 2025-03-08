import React from 'react'
import netflixLogo from '../assets/Netflix_Logo_PMS.png'
import userIcon from '../assets/userIcon.jpeg'
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

function Header() {

    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch();


    const handleSignOut = () => {
      signOut(auth).then(() => {
        navigate("/");
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error")
      })
    } 

    
    useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if(user){
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}))
              navigate("/browse")
          }
          else{
              dispatch(removeUser())
              navigate("/")
          }
      })
      return () => unsubscribe()
  },[])

  return (
    <div className='w-screen px-8 py-2 bg-gradient-to-b from-black absolute z-20 flex justify-between'>
        <img 
        className=' w-52 '
        src={netflixLogo}/>
        {user && 
          <div className='flex p-2'>
            <img
              className='w-12 h-12' 
              alt="usericon"
              src={userIcon}/>
          <button onClick={handleSignOut} className='font-bold text-center bottom-7'>Sign Out</button>
        </div>}
        
    </div>
  )
}

export default Header