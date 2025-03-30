import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function GPTSuggestions() {

  const {gptMovies, movieResults} = useSelector(store => store.gpt)
  if(!movieResults) return null; 
  

  return (
    <div className='bg-black bg-opacity-40'>
      <h1 className="text-4xl font-bold px-3 text-white mt-4 ">
        Here are the best movie picks for:</h1>
        {gptMovies.map((eachMovie, index) => <MovieList key={eachMovie} title={`${index+1}. ${eachMovie}`} movies={movieResults[index].results}/>)}
      
    </div>
  )
}

export default GPTSuggestions