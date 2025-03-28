import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GPTSearchBar from './GPTSearchBar'
import backgroundNetfliximg from '../assets/NetflixBackground.jpg'


function GPTSearch() {

    const navigate = useNavigate()
    const user = useSelector((store) => store.user)

    useEffect(() => {
        if(!user){
            navigate('/',{ replace: true })
        }
    },[user,navigate])


  return (
    <div>
        <img src={backgroundNetfliximg} className='absolute -z-20'/>
        <GPTSearchBar/>
    </div>
  )
}

export default GPTSearch