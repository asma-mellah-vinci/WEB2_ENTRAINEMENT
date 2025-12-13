interface Movie {
    id : number;
    title : string;
    director : string;
    duration : number;
    imageUrl? : string;
    description? : string;
    budget? : number;
}

interface MovieContext {
    movies : Movie[];
    onMovieAdded : (newMovie : Movie) => void;
}

// cree un movie ( avec toute ces propriete ) sans l'id ! pour les 
// fonction ou ces a l'utilisateur de rentre un film
type NewMovie = Omit<Movie , "id">;

export type { Movie , MovieContext , NewMovie};