import React from "react";
import './App.css';

const useIncrement = (initial, step) => {
    const [count, setCount] = React.useState(initial);
    const increment = () => {
        setCount(c => c + step);
    };
    return [count, increment]
};

const Compteur = () => {
    const [count, increment] = useIncrement(0, 2);

    React.useEffect(() => {
        const timer = window.setInterval(() => {
            increment()
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, []);

    React.useEffect(() => {
        document.title = 'Compteur ' + count
    }, [count]);
    
    return <button onClick={increment}>Nombre : {count}</button>
};
const CompteurA = () => {
    const [count, increment] = useIncrement(0, 2);
    return <a onClick={increment}>a : {count}</a>
};

function App() {
  return (
    <div>
      <Compteur />
    </div>
  );
}

export default App;
