import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies[0].poster_path);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies && movies.length > 0 ? ( // Check if movies is not null and has elements
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        ) : (
          <div>Loading movies...</div> // Or display an error message
        )}
      </div>
    </div>
  );
};

export default MovieList;
