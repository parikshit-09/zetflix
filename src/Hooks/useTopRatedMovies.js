import { useEffect } from "react";
import { API_OPT } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPT
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovie();
  }, []);
};
export default useTopRatedMovies;
