import { useState } from "react";
import type { Movie } from "../../types";

interface MovieItemProps {
    movie : Movie;
}

const MovieItem = ({ movie } : MovieItemProps) => {
    const [isVisible , setIsVisible] = useState(false);

    return (
        <div>

        <li onClick={() => setIsVisible(!isVisible)}>
        <strong>{movie.title}</strong> - Realisateur : {movie.director}
        </li>
        {isVisible && <p>{movie.description}</p>}

        </div>
    );
};

export default MovieItem;