import type { Movie } from "../../types";

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
            <li key={movie.title}>
                <strong>{movie.title}</strong> - Realisateur : {movie.director}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Cinema;