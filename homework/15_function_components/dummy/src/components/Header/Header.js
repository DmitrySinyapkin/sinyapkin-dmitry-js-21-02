import React, { useContext } from "react";
import './Header.css';
import { ThemeContext } from "../../contexts/ThemeContext";

export const Header = (props) => {
    const themeContext = useContext(ThemeContext);
    return (
        <div className="header">
            <h1 className={`header__text ${themeContext.darkTheme && "header__text_dark"}`}>{props.name}</h1>
        </div>
    );
};
