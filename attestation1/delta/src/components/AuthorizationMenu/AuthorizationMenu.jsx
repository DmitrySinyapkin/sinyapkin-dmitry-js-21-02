import React from "react";
import './AuthorizationMenu.css';

const AuthorizationMenu = () => {
    return (
        <div className="auth-menu">
            <div className="auth-menu__first">Вход</div>
            <div className="auth-menu__second">Регистрация</div>
        </div>
    );
}

export default AuthorizationMenu;
