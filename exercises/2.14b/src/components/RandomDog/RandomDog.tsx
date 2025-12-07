import { useEffect, useState } from "react";

interface RandomDogProps {
    message : string;
    status  : string;
}

const RandomDog = () => {
    const [dog , setDog] = useState<RandomDogProps | undefined>(undefined);

    const fetchDog = async () => {
    try{
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDog({
            message : data.message ?? "No dog found",
            status  : data.status  ?? "Error",
        });
    } catch(error){
        console.log("Error fetch Dog" , error);
    }};

    useEffect(() => {
        fetchDog();
        const interval = setInterval(fetchDog , 5000);
        return () => clearInterval(interval);
    } , []);

    if(!dog){
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src={dog?.message} alt="dog" width={250} />
            <p>{dog?.status}</p>
        </div>
    );
};

export default RandomDog;