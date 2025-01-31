import React, { useRef } from "react";
import { API_OPT } from "../utils/constant";
// import model from "../utils/geminiAi";
import { generateContent } from "../utils/geminiAi";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
const GptMovieSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPT
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". Only give me 5 recommendation of movies separeted by commas. Here is an exmaple: Don, singham, dilwale, puspa, golmal";
    //console.log(searchText.current.value);
    const prompt = query;
    //console.log(prompt);
    const result = await generateContent(prompt);
    const newMovies = result.split(", ");
    //console.log(newMovies);
    const promiseArray = newMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: newMovies, movieResults: tmdbResults })
    );
  };
  //console.log(result.response.text());
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-slate-800 grid grid-cols-12 rounded-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-8 rounded-full"
          placeholder="What would you like to watch?"
        />
        <button
          className="col-span-4 py-2 px-4 m-2 bg-red-600 text-white rounded-full"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptMovieSearch;
