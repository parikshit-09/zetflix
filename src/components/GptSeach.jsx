import React from "react";
import GptMovieSearch from "./GptMovieSearch";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSeach = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className=""
          src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQdHbjrX0uL1mH7uUW7VZ-p5GJOSNNRko_9A_12Mlv5wVYQIDy4nuupxLHxkDj9V0e1OLBs_s8ZlxFkyhPlK5XkrlTK0c7yP42LLinQdYhz8lqfgUcOH68JAbEcY45jG02gCI1NyKVf1lqxsQFmcNN5szbv8.jpg?r=aee"
          alt="login-bg"
        />
      </div>
      <GptMovieSearch />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSeach;
