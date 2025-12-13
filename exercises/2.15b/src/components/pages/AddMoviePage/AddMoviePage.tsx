
import { useOutletContext } from "react-router-dom";
import type { MovieContext } from "../../../types";
import AddMovieForm from "../../AddMovieForm/AddMovieForm";
import PageTitle from "../../PageTitle/PageTitle";




const AddMoviePage = () => {
    const { onMovieAdded } : MovieContext = useOutletContext();
    return (
        <div>
            <PageTitle title="ADD A MOVIE ;)" />
            <AddMovieForm onMovieAdded={onMovieAdded} />

            <br />
            <br />
            <br />
            <br />
        </div>
    )
}


export default AddMoviePage;