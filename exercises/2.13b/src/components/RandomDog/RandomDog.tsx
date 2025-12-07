import { useEffect, useState } from "react";

interface RandomDogProps {
    message : string;
    status  : string;
}

const RandomDog = () => {
    const [dog , setDog] = useState<RandomDogProps | undefined>(undefined);


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setDog({
                message : data.message,
                status : data.status
            })
        })
    } , []);

    if(!dog){
        <p>Loading...</p>
    }

    return (
        <div>
            <img src={dog?.message} alt="dog" width={250} />
            <p>{dog?.status}</p>
        </div>
    );
};

export default RandomDog;