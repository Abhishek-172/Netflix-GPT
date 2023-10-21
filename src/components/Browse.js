import React, { useEffect } from 'react'
import Header from './Header';
import { API_OPTIONS } from './constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const Browse = () => {

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    // Make a API Call, we need to call this function inside useEffect we need to call it once.
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    // Converting the fetched data to a readable stream
    const json = await data.json();
    //Using Dispatch we have pushed that movie result to the store
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <Header/>
  )
}

export default Browse;