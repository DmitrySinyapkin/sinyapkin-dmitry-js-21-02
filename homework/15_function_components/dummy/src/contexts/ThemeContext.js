import React, { useState } from "react";

const ThemeContext = React.createContext({});

const ThemeContextProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = (value) => {
        setDarkTheme(value);
    };

    return (
            <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        );
    };

export { ThemeContextProvider, ThemeContext};
