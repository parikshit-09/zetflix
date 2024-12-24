import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />;
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browser;
