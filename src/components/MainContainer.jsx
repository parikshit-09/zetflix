import React from "react";
import VideoBg from "./VideoBg";
import VideoTitle from "./videoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  //console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  //console.log(original_title);

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id} />
    </div>
  );
};
export default MainContainer;
