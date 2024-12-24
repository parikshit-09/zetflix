import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBg = ({ movieId }) => {
  const mainTrailerRedux = useSelector((store) => store.movie?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className=" w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          mainTrailerRedux?.key +
          "?si=mkQ9LWLGNKLPAEzb&autoplay=1&mute=1&controls=0"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}; //7l3hfD74X-4

export default VideoBg;
