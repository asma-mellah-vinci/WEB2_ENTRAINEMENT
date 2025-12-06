import { useOutletContext } from "react-router-dom";
import type { MovieContext } from "../../../types";
import MovieTitleList from "../../MovieTitleList.tsx/MovieTitleList";
import PageTitle from "../../PageTitle/PageTitle"

const HomePage = () => {

    const { movies } : MovieContext = useOutletContext();
    return (
        <div>
            <PageTitle title="MY MOVIES" />
            <p>WELCOME TO MY MOVIES</p>
            <p>A site where you can find info about cinemas , movies...</p>

            <MovieTitleList movies={movies} />
        </div>
    );
};

export default HomePage;