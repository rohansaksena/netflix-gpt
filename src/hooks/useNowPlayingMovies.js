import { options } from '../utils/constants';
import { useEffect } from 'react';
import { addNowPlayingMovies, movieReducer } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';


export const useNowPlayingMovies = () => {

    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        const json = await data.json();

    dispatch(addNowPlayingMovies(json.results))
  };

  useEffect(()=> {
    getNowPlayingMovies()
  },[])
}

