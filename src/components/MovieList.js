import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  // console.log('Data Coming via Props', movies, title);
  // console.log('New Movie poster', movies[1]);
  return (
    <div className='px-6'>
      <h1 className='text-lg md:text-3xl py-2 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex'>
          {movies?.map(movie =>
            <MovieCard key={movie.id} posterPath={movie.poster_path}>
          </MovieCard>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieList;