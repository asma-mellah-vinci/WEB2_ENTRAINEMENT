import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import type { Movie, MovieContext } from "../../types";
import { useEffect, useState } from "react";
import { addMovie, fetchMovies } from "../../utils/film-serive";


const App = () => {
    
    // on cree un useState pour changer la liste des films a chaque fois qu'on ajoute un film avec AddMovieForm 
    const [movies , setMovies] = useState<Movie[]>([]);
    const navigate  = useNavigate();

    const initMovies = async () => {
      try {
        const movies = await fetchMovies();
        setMovies(movies);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      initMovies();
    }, []);


    // permet d'ajoute le nouveau film 
    const onMovieAdded = async (newMovie : Movie) => {
        console.log("Movie to add : " , newMovie);

        try {
          const movieToBeAdded = await addMovie(newMovie);
          console.log("Movie added :" , movieToBeAdded);
          await initMovies();
          navigate("/movie-list");
        } catch (error) {
          console.error(error);
        }
    }; 

    const movieContext : MovieContext = {
        movies , 
        onMovieAdded,
    }

    return (
        <div>
            <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
               <h1>TOUS SUR LES FILMS</h1>

               <NavBar />
            </Header>

           <main>
            <Outlet context={movieContext} />
           </main>

            <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
                <p>© myMovies</p>
            </Footer>
        </div>
        
    );
};

export default App;