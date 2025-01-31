import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const GptMovieSuggestions = () => {
  const { gptNames, gptResults } = useSelector((store) => store.gpt);
  if (!gptNames) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-50 text-white">
      {gptNames.map((gptNames, index) => (
        <MovieList key={gptNames} title={gptNames} movies={gptResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
