import React from 'react';
import MovieList from './MovieList';
import {useSelector} from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return ( movies && (
    /*
      All the Below are components and in each components there are Horizontal Cards
      MovieList - Popular
        MovieCards*n
      MovieList - NowPlaying
        MovieCards*n
      MovieList - Trending
        MovieCards*n
      MovieList - Horror Movies
        MovieCards*n
  */
    <div className='bg-black'>
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />      
      </div>  
    </div>
    )
  )
}

export default SecondaryContainer;