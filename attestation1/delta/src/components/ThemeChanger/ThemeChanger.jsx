import { Switch } from "antd";
import React from "react";
import './ThemeChanger.css';

const ThemeChanger = () => {
    return (
        <div className="theme-changer">
            <div className="theme-changer__text">Темная тема</div>
            <Switch />
        </div>
    );
}

export default ThemeChanger;
