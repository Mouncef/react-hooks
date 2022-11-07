import React, {useEffect, useState} from "react";
import './App.css';


function App() {

    const input = React.useRef(null);
    const compteur = React.useRef({count: 0});
    const handleClick = () => {
        console.log(input.current.value)
    }
    const handleClickCompteur = () => {
        compteur.current.count++;
        console.log(compteur)
    }
    return <div>
        <input type={"text"} ref={input}/>
        <button onClick={handleClick}>Récupérer la valeur</button>
        <button onClick={handleClickCompteur}>Incrémenter compteur</button>
    </div>
}

export default App;
