import type { Movie } from "../../types";
import MovieItem from "../MovieItem";

interface CinemaProps {
  cinema_name     : string;
  movies          : Movie[];
}

const Cinema = (props : CinemaProps) => {
  return (
    <div>
      <h2>{props.cinema_name}</h2>
      <ul>
        {props.movies.map((movie) => (
           <MovieItem key={movie.title} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Cinema;