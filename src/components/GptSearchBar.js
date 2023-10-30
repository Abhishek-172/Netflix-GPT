import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config);
    const searchText = useRef(null);

    // Search Movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        )
        const json = await data.json();
        return json.results;
    };

    const handleSGPTSearchClick = async () => {
        const GPTQuery = "Act as a movie recommendation system and suggest some movies for the query " + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Dhol, Hungama";
        // Make an API call to GPT API and get the movie results
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: GPTQuery }],
            model: 'gpt-3.5-turbo',
        });
        // console.log(gptResults);
        if (!gptResults.choices) {
            // Handle the Error Gracefully
        }

        //The data you recieved
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        //It will have the array of movies in gptMovies Array
        console.log('Data Coming from GPT Search in Array', gptMovies);
        //For each movies lets get the data of the movie from TMDB API.
        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
        //The above will return the Promises to us, 5 Promises like below
        // [Promise1, Promise2, Promise3, Promise4, Promise5]

        const tmdbResults = await Promise.all(promiseArray);
        console.log('TMDB Results', tmdbResults);

        // Save the TMDB Movie result to Store
        //How to send a multiple data on single action in Redux
        dispatch(addGPTMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    }
    return (
        <div className='pt-[35%] md:pt-[10%] flex justify-center'>
            <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
                <input
                    ref={ searchText }
                    type="text"
                    className="p-4 m-4 col-span-8"
                    placeholder={ lang[langKey.lang].gptSearchPlaceholder}
                />    
                <button className="col-span-4 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
                onClick={handleSGPTSearchClick}>{lang[langKey.lang].search}</button>
            </form>    
        </div>
  )
}

export default GptSearchBar;