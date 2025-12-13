import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cinemas">Cinemas</Link>
        <Link to="movie-list">My favorite movies</Link>
        <Link to="add-movie">Add a Movie</Link>
    </nav>
)

export default NavBar