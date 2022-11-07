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
      <br />
      <CompteurA />
    </div>
  );
}

export default App;
