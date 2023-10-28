import { API_OPTIONS } from '../components/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        // Make a API Call, we need to call this function inside useEffect we need to call it once.
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        // Converting the fetched data to a readable stream
        const json = await data.json();
        //Using Dispatch we have pushed that movie result to the store
        console.log('Movie Data', json.results);
        dispatch(addPopularMovies(json.results));
    };
    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;