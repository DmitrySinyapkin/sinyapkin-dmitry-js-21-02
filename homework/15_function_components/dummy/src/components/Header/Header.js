import React, { useContext } from "react";
import './Header.css';
import { ThemeContext } from "../../contexts/ThemeContext";
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";

export const Header = (props) => {
    const themeContext = useContext(ThemeContext);
    return (
        <div className="header">
            <h1 className={`header__text ${themeContext.darkTheme && "header__text_dark"}`}>{props.name}</h1>
            <Menu mode="horizontal" onClick={props.onClick}>
                <Menu.Item key="users"><Link to="/">Пользователи</Link></Menu.Item>
                <Menu.Item key="reg"><Link to="/create">Регистрация</Link></Menu.Item>
            </Menu>
        </div>
    );
};
