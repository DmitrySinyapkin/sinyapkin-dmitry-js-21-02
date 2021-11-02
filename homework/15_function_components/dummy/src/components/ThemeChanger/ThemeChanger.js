import React, { useContext } from "react";
import './ThemeChanger.css';
import { ThemeContext } from "../../contexts/ThemeContext";

export const ThemeChanger = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <div>
            <label className={themeContext.darkTheme && "label_dark"}>
                Темная тема  <input className="theme-changer" type="checkbox"
                checked={themeContext.darkTheme}
                onChange={(event) => themeContext.toggleTheme && themeContext.toggleTheme(event.target.checked)}/>
            </label>
        </div>
    );
};
