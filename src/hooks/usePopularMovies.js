import { options } from '../utils/constants';
import { useEffect } from 'react';
import { addPopularMovies } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

export const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies)
    const getPopularMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const json = await response.json();
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.error('Failed to fetch now playing movies:', error);
        }
    };

    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, [dispatch]);
};
