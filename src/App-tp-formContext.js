import React, {useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState} from "react";
import './App.css';


const FormContext = React.createContext({});


const FormWithContext = ({defaultValue, onSubmit, children}) => {
    const [data, setData] = useState(defaultValue);

    const handleChange = useCallback((name, value) => {
        setData(d => ({...d, [name] : value}))
        // setData(d => Object.assign({}, d, {[name]: value}))
    });


    const value = useMemo(() => {
        return {...data, handleChange}
        // return Object.assign({}, data, {handleChange: handleChange})
    }, [data, handleChange]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onSubmit(value)
    }, [onSubmit, value]);

    return <FormContext.Provider value={value}>
        <form onSubmit={handleSubmit}>
            {children}
        </form>
        {JSON.stringify(value)}
    </FormContext.Provider>
};

const FormField = ({name, children}) => {
    const data = useContext(FormContext);
    const handleChange = useCallback((e) => {
        data.handleChange(e.target.name, e.target.value)
    }, [data.handleChange]);
    return <div>
        <label htmlFor={name}>{children}</label>
        <input className={"form-control"} type={"text"} name={name} id={name} value={data[name] || ''} onChange={handleChange}/>
    </div>
};

const PrimaryButton = ({children}) => {
    return <button className={"btn btn-primary"}>{children}</button>
}

function App() {

    const handleSubmit = useCallback((data)=> {
        console.log(data)
    }, []);

    return <div className={"container"}>
        <FormWithContext defaultValue={{
            name : "Doe",
            firstname : "John"
        }} onSubmit={handleSubmit}>
            <FormField name={"firstname"}>Prénom</FormField>
            <FormField name={"name"}>Nom</FormField>
            <PrimaryButton>Envoyer</PrimaryButton>
        </FormWithContext>
    </div>
}

export default App;
