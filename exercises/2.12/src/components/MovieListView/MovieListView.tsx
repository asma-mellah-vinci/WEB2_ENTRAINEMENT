import type { Movie } from "../../types";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListView.css";

interface MovieListViewProps {
    movies : Movie[];
}


const MovieListView = ({movies} : MovieListViewProps) => {

    return (
        <div className="movie-list-view">
            {movies.map((movie) => (
                <MovieCard key={movie.title} movie={movie}/>
            ))}
        </div>
    );
};

export default MovieListView;