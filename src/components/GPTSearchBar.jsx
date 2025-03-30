import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import PerplexityOptions from '../hooks/usePerplexity';
import { options } from '../utils/constants';
import { addGptMovieResults } from '../utils/GPTSlice';

function GPTSearchBar() {

  const languageSelected = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch()
  
  const handleGPTSearchClick = async () => {
    if (!searchText.current.value) return; 
        const userQuery = searchText.current.value;

    try {
      const response = await fetch("https://api.perplexity.ai/chat/completions",PerplexityOptions(userQuery));
      const data = await response.json();
      const gptMovies = data.choices[0]?.message?.content.split(',') 
      const movieTMDBdata = gptMovies.map(movie => searchMovieTMDB(movie))
      const tmdbResults = await Promise.all(movieTMDBdata)
      dispatch(addGptMovieResults({gptMovies:gptMovies, movieResults: tmdbResults}))
    } catch (error) {
      console.error("Error fetching data from Perplexity:", error);
    }
  };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=true&language=en-US&page=1`, options)
    .then(res => res.json())
    .catch(err => console.error(err));
    return data
  }

  return (
    <div className="p-[5%] flex justify-center items-center ">
      <form className="w-1/2 bg-black p-4 grid grid-cols-12 gap-2 rounded-md shadow-lg" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={searchText}
          className="col-span-8 p-2 border border-gray-500 rounded-sm text-black"
          placeholder={lang[languageSelected].GPTSearchPlaceHolder}
        />
        <button className="col-span-4 px-4 py-2 font-semibold bg-red-600 text-white text-center rounded-sm hover:bg-red-700 transition"
        onClick={handleGPTSearchClick}>
        {lang[languageSelected].search}
        </button>
      </form>
    </div>
  );
}


export default GPTSearchBar