import type { Movie } from "../../types";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListView.css";

interface MovieListViewProps {
    movies : Movie[];
    onMovieDeleted : (movie : Movie) => void;
}


const MovieListView = ({movies , onMovieDeleted} : MovieListViewProps) => {

    return (
        <div className="movie-list-view">
            {movies.map((movie) => (
                <MovieCard key={movie.title} movie={movie} onMovieDeleted={onMovieDeleted}/>
            ))}
        </div>
    );
};

export default MovieListView;