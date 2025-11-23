import { useState } from "react";

interface ClickCounterProps {
    title : string;
    message? : string;
    onMouseOverMessage? : string; // message a afficher quand on survole boutton
}

const ClickCounter = ({title , message , onMouseOverMessage} : ClickCounterProps) => {
    const [count , setCount] = useState(0);
    const [isHovered , setIsHovered] = useState(false);


    return (
        <div>
        <h3>{title}</h3>

        {isHovered && <p>{onMouseOverMessage}</p>}

        <button onClick={() => setCount((count) => count + 1)} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            > 
          count is {count}
        </button>

        {count >= 10 && <p>{message}</p>}

        </div>
    );
};

export default ClickCounter;