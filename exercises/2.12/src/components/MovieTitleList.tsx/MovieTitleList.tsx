import { Link } from "react-router-dom";
import type { Movie } from "../../types";


interface MovieTitleListProps {
    movies : Movie[];
}

const MovieTitleList = ({movies} : MovieTitleListProps) => {
    return (
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
              
            ))}
        </div>
    );
};


export default MovieTitleList;