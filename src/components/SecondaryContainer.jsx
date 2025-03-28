import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

function SecondaryContainer() {

  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black'>
      <div className='pl-12 -mt-72 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topratedMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer