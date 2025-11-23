import { useState } from "react";
// tableau en js
const colors = ["red","green","blue","yellow","purple"];

const ColorBox = () => {
    const [color , setColor] = useState(0);


    return (
        <div className="color-box" style={{
            backgroundColor : colors[color],
            width : "200px",
        }}>
            <button  className="click" style={{
                backgroundColor : colors[(color + 1) % colors.length],
                width : "100px",
                alignItems : "center",
            }}
            
            onClick={() => setColor((prev) => (prev + 1) % colors.length)}>
                {colors[(color + 1) % colors.length]}
            </button>

            <p>{colors[color]}</p>
        </div>
    );
};

export default ColorBox;