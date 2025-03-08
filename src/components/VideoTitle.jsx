import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black'>
        <div>
            <h1 className='text-6xl text-white font-bold'>{title}</h1>
            <p className='py-6 text-lg text-white w-1/4'>{overview}</p>
        </div>
        <div >
        
            <button className='bg-white opacity-90 text-black p-4 px-8 mx-2 rounded-lg text-xl font-bold hover:bg-opacity-50'> Play</button>
            <button className='bg-gray-700 opacity-60 text-black p-4 px-7 rounded-lg text-xl font-bold hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle 
