import React, {useEffect, useState} from "react";
import './App.css';

const wait = (duration) => {
    const t = Date.now();
    while(true) {
        if (Date.now() - t > duration) {
            return true
        }
    }
}

const Button = React.memo(({onClick}) => {
    console.log('render')
    return <button onClick={onClick}>Mon button</button>
})
function App() {

    const [count, setCount] = React.useState(0);

    const handleClick = React.useCallback(() => {
        alert('bonjour ' + count)
    }, [count]);

    return (
        <div>
            <Button onClick={handleClick} />
            <button onClick={() => setCount(c => c +1)}>Incrémenter {count}</button>
        </div>
    );
}

export default App;
