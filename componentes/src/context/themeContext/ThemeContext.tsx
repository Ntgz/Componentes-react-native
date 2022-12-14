import react,{ createContext,useReducer } from "react";
import { themeReducer, ThemeState, lightTheme } from "./themeReducer";

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}


export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({children}: any ) => {

    const [ theme, dispatch] = useReducer(themeReducer, lightTheme)

    const setDarkTheme = () => {
        dispatch({ type: 'dark_theme'})
        console.log('setDarkTheme');
        
    }
    const setLightTheme = () => {
        dispatch({ type: 'light_theme'})
        console.log('setLightTheme');
    }


    return (
        <ThemeContext.Provider value = {{
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}