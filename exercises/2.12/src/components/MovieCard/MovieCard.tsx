import type { Movie } from "../../types";
import "./MovieCard.css";


// CELUI LA SERT POUR UNE SEUL CARD !! 

interface MovieCardProps {
    movie : Movie;
}
const MovieCard = ({movie} : MovieCardProps) => {

    return (
        <div className="movie-card">
            <div className="movie-card-body">

                <h3 className="movie-card-title">{movie.title}</h3>

                {movie.imageUrl && (
                    <img src={movie.imageUrl} className="movie-card-image" alt={movie.title} />
                )}

                <p className="card-text">
                    <strong>Réalisateur : </strong> {movie.director}
                </p>

                <p className="card-text">
                    <strong>Durée : </strong>{movie.duration} minutes
                </p>

                { movie.budget && (
                    <p className="card-text">
                        <strong>Budget : </strong>{movie.budget} millions de dollars</p>
                )}

                { movie.description && (
                    <p className="card-text">
                       <strong>Description : </strong> {movie.description}</p>
                )}

            </div>
        </div>
    );
};

export default MovieCard;

