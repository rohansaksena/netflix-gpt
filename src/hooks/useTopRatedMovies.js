import { options } from '../utils/constants';
import { useEffect } from 'react';
import { addTopRatedMovies } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)
    const getTopRatedMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const json = await response.json();
            dispatch(addTopRatedMovies(json.results));
        } catch (error) {
            console.error('Failed to fetch now playing movies:', error);
        }
    };

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, [dispatch]); // Including dispatch as a dependency to follow best practices
};
