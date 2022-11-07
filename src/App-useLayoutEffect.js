import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import './App.css';

const wait = (duration) => {
    const t = Date.now();
    while(true) {
        if (Date.now() - t > duration) {
            return true
        }
    }
}
function App() {

    const [count, setCount] = useState(0)
    const button = useRef(null);

    const increment = useCallback(() => {
        setCount(c => c + 1)
    }, []);

    // Manipulation du DOM useLayoutEffect then useEffect
    useLayoutEffect(() => {
        if (count % 2 === 0) {
            button.current.style.color = "green";
        } else {
            button.current.style.color = "red";
        }
    })
    return <div>
       <button ref={button} onClick={increment}>Incrémenter {count}</button>
    </div>
}

export default App;
