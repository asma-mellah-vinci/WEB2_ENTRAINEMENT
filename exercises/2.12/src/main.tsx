import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import HomePage from "./components/pages/HomePage/HomePage";
import CinemaPage from "./components/pages/CinemaPage/CinemaPage";
import MovieListPage from "./components/pages/MovieListPage/MovieListPage";
import AddMoviePage from "./components/pages/AddMoviePage/AddMoviePage";
import MoviePage from "./components/pages/MoviePage/MoviePage";





const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "",
        element : <HomePage />,
      },
      {
        path : "cinemas",
        element : <CinemaPage />
      },
      {
        path : "movie-list",
        element : <MovieListPage />
      },
      {
        path : "add-movie",
        element : <AddMoviePage />
      },
      {
        path : "movies/:id",
        element : <MoviePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);


