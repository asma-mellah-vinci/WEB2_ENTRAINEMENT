import { useState } from "react";
import RandomDog from "../RandomDog/RandomDog";


const App = () => {
    const [refreshKey , setRefreshKey] = useState(0);

    // permet de refreshe la cle de la photo 
    const refreshDogs = () => {
        setRefreshKey(refreshKey + 1);
    };


    return (
        <div>
            <button onClick={refreshDogs}>Refresh dogs</button>

            <RandomDog key={refreshKey + "-1"}/>
            <RandomDog key={refreshKey + "-2"}/>
            <RandomDog key={refreshKey + "-3"}/>

        </div>
    );
};

export default App;