import { useEffect } from "react";
import { API_OPT } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //const mainTrailerRedux = useSelector((store) => store.movie?.trailerVideo);

  const getMovieTrailer = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPT
    );
    const json = await movieData.json();
    //console.log(json);
    const trailer = await json.results.filter(
      (videoSet) => videoSet.type === "Trailer"
    );
    //console.log(trailer);
    const mainTrailer = trailer.length ? trailer[0] : json.results[0];
    //console.log(mainTrailer);
    dispatch(addTrailerVideo(mainTrailer));
    //console.log(mainTrailerRedux.key);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};
export default useMovieTrailer;
