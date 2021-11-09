import React, { useContext } from "react";
import './Header.css';
import { ThemeContext } from "../../contexts/ThemeContext";
import { Menu } from 'antd';
import 'antd/dist/antd.css';

export const Header = (props) => {
    const themeContext = useContext(ThemeContext);
    return (
        <div className="header">
            <h1 className={`header__text ${themeContext.darkTheme && "header__text_dark"}`}>{props.name}</h1>
            <Menu mode="horizontal" onClick={props.onClick}>
                <Menu.Item key="users">Пользователи</Menu.Item>
                <Menu.Item key="reg">Регистрация</Menu.Item>
            </Menu>
        </div>
    );
};
