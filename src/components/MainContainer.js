import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  // This above movie will have 20 movies and also in the VideoBackground Container
  // We just need a one movie out of 20 we will pick the first movie
  
  //Below is called as Early Return
  if (movies === null) return;

  const mainMovie = movies[3];
  console.log('This is a Main Movie', mainMovie);
  // This will give us an error why? -> Because at the first time before my store is being executed it was null.
  // That is why we get an error. Now to resolve this we need to do an early return.

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      {/* We will need two components in Here
        1. VideoBackground
        2. VideoTitle
        And also one more condition we need to add here and that is this:
        VideoTitle should overlap VideoBackground.- Achieve this via tailwind CSS
      */}
      <VideoTitle title={original_title} overview={ overview} />
      <VideoBackground movie_id={ id } /> 
    </div>
  )
}

export default MainContainer;