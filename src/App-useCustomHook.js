import React, {useEffect, useState} from "react";
import './App.css';

const useIncrement = (initial = 0, step = 1) => {
    const [count, setCount] = useState(initial);
    const increment = () => {
        setCount(c => c + step)
    };
    return [count, increment]
};
const useAutoIncrement = (initial = 0, step = 1) => {
    const [count, increment] = useIncrement(initial, step);
    useEffect(() => {
        const timer = window.setInterval(()=> {
            increment();
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count]);

    return count
};
const useToggle = (initialValue = true) => {
    const [compteurVisible, setCompteurVisible] = useState(initialValue);
    const toggleCompteur = () => {
        setCompteurVisible(c => !c);
    };
    return [compteurVisible, toggleCompteur]
};
const useFetch = (url) => {

    const [state, setState] = useState({
        items: [],
        loading: true
    })

    useEffect(() => {
        const promise = (async () => {
            const response = await fetch(url);
            const responseData = await response.json();
            if (response.ok) {
                setState({
                    items: responseData,
                    loading: false
                });
            } else {
                alert(JSON.stringify(responseData));
                setState(s => ({...s, loading: false}))
            }
        })();

        return () => {
            console.log(promise)

            // promise.resolve();
        }

    }, []);

    return [
        state.loading,
        state.items
    ]
}

const Compteur = () => {
    const count = useAutoIncrement(0, 10);
    const [manualCount, manualIncrement] = useIncrement(10);
    return <>
        <button>Auto Incrémenter {count}</button>
        <button onClick={manualIncrement}>Incrémenter {manualCount}</button>
    </>
};
const PostTable = () => {
    const [loading, items] = useFetch("https://jsonplaceholder.typicode.com/comments?_limit=10");
    if (loading) {
        return "Chargement ..."
    }
    return <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {
                items.map(p => <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.email}</td>
                    <td>{p.body}</td>
                </tr>)
            }
        </tbody>
    </table>
}
const TodoList = () => {
    const [loading, items] = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

    if (loading) {
        return "Chargement ..."
    }
    return <ul>
        {items.map(t => <li key={t.id}>{t.title}</li>)}
    </ul>
}


function App() {

    const [compteurVisible, toggleCompteur] = useToggle(true);
  return (
    <div>
        Afficher le compteur
        <input type={"checkbox"} onChange={toggleCompteur} checked={compteurVisible} />
        <br />
        {compteurVisible && <Compteur />}
        <TodoList/>
        <PostTable/>
    </div>
  );
}

export default App;
