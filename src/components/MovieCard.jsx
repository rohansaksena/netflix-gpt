import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function MovieCard({posterPath}) {

  return (
    <div className='w-48 pr-4 hover:scale-125 ease-in-out duration-100'>
        <img 
        alt="movie card"
        src={`${IMG_CDN_URL}${posterPath}`}/>
    </div>
  )
}

export default MovieCard