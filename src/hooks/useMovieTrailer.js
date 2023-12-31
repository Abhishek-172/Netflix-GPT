import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useSelector } from 'react-redux';

const useMovieTrailer = (movie_id) => {
    // Fetch Trailer Video and update the store with trailer video data
    const dispatch = useDispatch();

    // Check
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    // Make an API Call to get the Movie Trailer
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" +
            movie_id +
            "/videos",
            API_OPTIONS);
        
        const json = await data.json();
        console.log('JSON Data from getMovieVideos', json);
        const filterData = json.results.filter((video) => video.type === 'Trailer');
        //Handle All Cases, otherwise it will fail for diff cases;
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    // Call the above function in useEffect.
    useEffect(() => {
        if(!trailerVideo) getMovieVideos();
    }, []);
}

export default useMovieTrailer;