import { useEffect, useState } from "react";

interface Joke {
  category : string;
  joke     : string;
}

const App = () => {
  const [joke , setJoke] = useState<Joke | undefined>(undefined);


    const fetchJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setJoke({
        joke : data.joke ?? "No Joke found",
        category : data.category ?? "Unknown"
      })
    })
  }

  useEffect(() => {
    fetchJoke();
    const interval = setInterval(fetchJoke , 10000);
    return () => clearInterval(interval);
  } , []);


  if(!joke){
    return <p>Loading...</p>
  }

  
  return (
    <div>
      <h1>Random Joke </h1>
      <h3>{joke?.category}</h3>
      <h3>{joke?.joke}</h3>
    </div>
  );
};

export default App;