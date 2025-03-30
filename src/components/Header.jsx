import React from 'react'
import Logo from '../assets/Netflix_Logo_PMS.png'
import userIcon from '../assets/userIcon.jpeg'
import {signOut} from "firebase/auth"
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { Link, useLocation,useNavigate  } from 'react-router-dom';
import { SUPPORTED_LANGUAGES } from '../utils/languageConstants'
import { changeLanguage } from '../utils/configSlice'
import lang from '../utils/languageConstants'

function Header() {

    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const language = "en"
    const dispatch = useDispatch();
    const location = useLocation(); 
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

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
    console.log(e.target.value)
  }

  return (
    <div className='w-screen px-8 py-2 bg-gradient-to-b from-black absolute z-20 flex justify-between'>
      <Link to="/browse">
            {<img className='w-52' src={Logo}/>}
      </Link>
      
        {user && 
          <div className='flex p-2'>
            {location.pathname !== '/browse' && <select className='p-2 w-[90px] h-[38px] rounded-lg m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}  
            </select>}
          {location.pathname !== '/gpt' ?
              <Link to='/gpt'>
                <button className='p-2 bg-purple-600 text-center text-white font-semibold mr-2 mt-0.5 rounded-lg w-[90px] h-[45px] hover:bg-purple-700'>
                {lang[language].GPT}
                </button>
              </Link> 
              :
              <Link to='/browse'>
              <button className='p-2 bg-gray-600 text-center text-white font-semibold mr-2 mt-0.5 rounded-lg w-[100px] h-[45px] hover:bg-gray-700'>
              {lang[language].home}
              </button>
            </Link>
          }
          <button onClick={handleSignOut} className='bg-red-600 text-white mr-2 mt-0.5 w-[90px] h-[45px] rounded-lg font-semibold text-center hover:bg-red-700'>{lang[language].signOut}</button>
          <img
              className='w-12 h-12' 
              alt="usericon"
              src={userIcon}/>
        </div>}
        
    </div>
  )
}

export default Header