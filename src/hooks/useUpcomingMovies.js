import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { useSelector } from 'react-redux';

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);
    const getUpcomingMovies = async () => {
        // Make a API Call, we need to call this function inside useEffect we need to call it once.
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        // Converting the fetched data to a readable stream
        const json = await data.json();
        //Using Dispatch we have pushed that movie result to the store
        console.log('Movie Data', json.results);
        dispatch(addUpcomingMovies(json.results));
    };
    useEffect(() => {
        if(!upcomingMovies) getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;