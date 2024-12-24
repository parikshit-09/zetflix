import React from "react";
import { TMDB_IMG } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={TMDB_IMG + posterPath} />
    </div>
  );
};

export default MovieCard;
