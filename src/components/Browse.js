import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

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
      <MainContainer/>
      <SecondaryContainer />
    </>
  )
}

export default Browse;