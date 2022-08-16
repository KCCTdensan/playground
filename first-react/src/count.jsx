import React, {useState} from "react";
import "./app.css"



const Counter = () => {
    
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>現在の数字: {count}</p>
            <button onClick={() => setCount(count + 1)}> +1 </button>
            <button onClick={() => setCount(count - 1)}> - 1</button>
            <button onClick={() => setCount(0)}> 0 </button>
        </div>
    );
}

export default Counter