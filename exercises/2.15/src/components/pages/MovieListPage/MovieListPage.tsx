import { useOutletContext } from "react-router-dom";
import type { MovieContext } from "../../../types";
import MovieListView from "../../MovieListView/MovieListView";
import PageTitle from "../../PageTitle/PageTitle";


const MovieListPage = () => {

  // pour recupere la liste des films !! meme apres modification ou ajout !
  const { movies } : MovieContext = useOutletContext();

  return (
    <div>
           <PageTitle title="My favorite movies"/>

            <MovieListView movies={movies}/>

            <br/>
            <br/>

    </div>
  );
};

export default MovieListPage;