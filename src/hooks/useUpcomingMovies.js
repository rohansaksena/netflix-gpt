import { options } from '../utils/constants';
import { useEffect } from 'react';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcoming = useSelector(store => store.movies.upcomingMovies)
    const getUpcomingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const json = await response.json();
            dispatch(addUpcomingMovies(json.results));
        } catch (error) {
            console.error('Failed to fetch now playing movies:', error);
        }
    };

    useEffect(() => {
       !upcoming && getUpcomingMovies();
    }, [dispatch]); 
};
