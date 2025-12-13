import { useMatch, useOutletContext } from "react-router-dom";
import type { MovieContext } from "../../../types";
import MovieCard from "../../MovieCard/MovieCard";

const MoviePage = () => {
    const { movies } : MovieContext = useOutletContext();

    // on recupere l'id depuis l'url
    const match = useMatch("/movies/:id");

    if(!match){
        return <p>Movie not found !</p>;
    }

    const movieId = Number(match.params.id);

    if(isNaN(movieId)){
        return <p>Movie not found !</p>
    }

    let movieFound = null;
    for(let i = 0; i < movies.length; i++){
        if(movies[i].id === movieId){
            movieFound = movies[i];
            break;
        }
    }

    if(!movieFound){
        return <p>Movie not found !</p>;
    }

    return <MovieCard movie={movieFound} />
}

export default MoviePage;