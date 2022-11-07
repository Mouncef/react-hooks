import React, {useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState} from "react";
import './App.css';
import {render} from "react-dom";

const THEMES = {
    dark: {
        background: "#000",
        color: "#fff",
        border: "solid 1px #fff",
    },
    light: {
        background: "#fff",
        color: "#000",
        border: "solid 1px #000",
    },
}

const ThemeContext = React.createContext({
    theme: THEMES.dark,
    toggleTheme: () => {}
});

const SearchForm = () => {
    return <div>
        <input />
        <ThemedButton2>Rechercher</ThemedButton2>
    </div>
}

const Toolbar = () => {
    return <div>
        <SearchForm />
        <ThemedButton>M'inscrire</ThemedButton>
        <ThemedButtonClass>Me Connecter</ThemedButtonClass>
        <ThemedButton2Class>Alerte</ThemedButton2Class>
    </div>
}

const ThemedButton = ({children}) => {
    return <ThemeContext.Consumer>
        {value => {
            return <button style={value.theme}>{children}</button>
        }}
    </ThemeContext.Consumer>
}

const ThemedButton2 = ({children}) => {
    const {theme} = useContext(ThemeContext);
    return <button style={theme}>{children}</button>
}

class ThemedButtonClass extends React.Component {
    render() {
        const {children} = this.props;
        return <ThemeContext.Consumer>
            {value => {
                return <button style={value.theme}>{children}</button>
            }}
        </ThemeContext.Consumer>
    }
}

class ThemedButton2Class extends React.Component {
    render() {
        const {children} = this.props;
        const {theme} = this.context;
        return <button style={theme}>{children}</button>
    }
}

ThemedButton2Class.contextType = ThemeContext;

function App() {

    const [theme, setTheme] = useState('light');
    const toggleTheme = useCallback(() => {
        setTheme(t => t === 'light' ? 'dark' : 'light')
    }, []);

    const currentTheme = theme === 'light' ? THEMES.light : THEMES.dark;
    const value = useMemo(() => {
        return {
            theme : theme === 'light' ? THEMES.light : THEMES.dark,
            toggleTheme
        }
    }, [toggleTheme, theme])
    return <div>
        <ThemeContext.Provider value={value}>
            <Toolbar />
            <ThemeSwitcher />
        </ThemeContext.Provider>
        {/*<button onClick={toggleTheme}>Changer le theme</button>*/}
    </div>
}

const ThemeSwitcher = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return <button onClick={toggleTheme}>Changer le theme</button>
}

export default App;
