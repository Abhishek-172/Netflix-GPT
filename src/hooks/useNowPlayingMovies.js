import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useSelector } from 'react-redux';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
  
    /*Here we are checking if there is something present in nowPlayingMovies, if not then only
    make a API call else not. This is called a Memoization. This way we can save a reacalling of the API
    on Page loads.
    */
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
    const getNowPlayingMovies = async () => {
        // Make a API Call, we need to call this function inside useEffect we need to call it once.
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        // Converting the fetched data to a readable stream
        const json = await data.json();
        //Using Dispatch we have pushed that movie result to the store
        console.log('Movie Data', json.results);
        dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
      if (!nowPlayingMovies) {
        getNowPlayingMovies();        
      }    
    }, []);
}

export default useNowPlayingMovies;