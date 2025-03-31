import { options } from '../utils/constants';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const json = await response.json();
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.error('Failed to fetch now playing movies:', error);
        }
    };

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, [dispatch]); 
};
