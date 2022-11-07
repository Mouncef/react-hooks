import React, {useCallback, useEffect, useLayoutEffect, useReducer, useRef, useState} from "react";
import './App.css';

const wait = (duration) => {
    const t = Date.now();
    while(true) {
        if (Date.now() - t > duration) {
            return true
        }
    }
}

const init = (initialValue) => {
    return {count: initialValue}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + (action.payload || 1)};
        case 'decrement' :
            if (state.count <=0) {
                return state;
            } else {
                return {count: state.count - 1};
            }
        case 'reset' :
            return init(0);
        default:
            throw new Error('Action '+ action.type +' est inconnue')
    }
};

function App() {

    const [count, dispatch] = useReducer(reducer, 0, init);

    return <div>
        Compteur: {JSON.stringify(count)}
        <button onClick={()=> dispatch({type: 'increment'})}>Incrémenter</button>
        <button onClick={()=> dispatch({type: 'increment', payload: 10})}>Incrémenter de 10</button>
        <button onClick={()=> dispatch({type: 'decrement'})}>Décrémenter</button>
        <button onClick={()=> dispatch({type: 'reset'})}>Réinitialiser</button>
        <Child/>
    </div>
}

const Child = () => {
    console.log('render')
    return <div>Hello</div>
}

export default App;
