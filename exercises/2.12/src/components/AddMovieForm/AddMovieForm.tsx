import { useState, type SyntheticEvent } from "react";
import type { Movie } from "../../types";
import "./AddMovieForm.css";

interface AddMovieFormProps {
    onMovieAdded : (movie : Movie) => void;
}

const AddMovieForm = ({onMovieAdded} : AddMovieFormProps) => {
    const [title , setTitle] = useState(" ");
    const [imageUrl , setImageUrl]     = useState(" ");
    const [director , setDirector] = useState(" ");
    const [duration , setDuration] = useState(0);
    const [budget , setBudget] = useState(0);
    const [description , setDescription] = useState(" ");

    const handleSubmit = (e : SyntheticEvent) => {
        e.preventDefault();
        onMovieAdded({title , director , duration , imageUrl , budget, description});
        setTitle(" ");
        setImageUrl(" ");
        setDirector(" ");
        setDuration(0);
        setBudget(0);
        setDescription(" ");
    };


    return (
        <form onSubmit={handleSubmit} className="my-box">
            <div>
                <label>Titre :</label>
                <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required />
            </div>

            <div>
                <label>Réalisateur :</label>
                <input
                type="text"
                value={director}
                onChange={(e) => setDirector(e.target.value)} 
                required />
            </div>

            <div>
                <label>Durée :</label>
                <input 
                type="number"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                required
                />
            </div>

            <div>
                <label>URL de l'image :</label>
                <input 
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
                />
            </div>

            <div>
                <label>Description :</label>
                <input 
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
            </div>

            <div>
                <label>Budget :</label>
                <input 
                type="number"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                required
                />
            </div>
            <button type="submit">Ajouter</button>
        </form>
    );

}

export default AddMovieForm;