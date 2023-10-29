import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gptSearch.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    /*{
      MainContainer
        - VideoBackground
        - VideoTitle
      Secondary Container
        - MovieList * n (rows)
          - Cards * n (collection of movies)
      
     }*/
    <>
      <Header />
      {/* Only Show me a GPTSearch Component when I click on it, add a toggle functionality */}
      { showGptSearch ? (<GptSearch />):(<><MainContainer/>
      <SecondaryContainer /></>)} 
    </>
  )
}

export default Browse;