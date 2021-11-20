import React from "react";
import './Header.css';
import Logo from "../Logo/Logo";
import TopMenu from "../Menu/TopMenu";
import AuthorizationMenu from "../AuthorizationMenu/AuthorizationMenu";

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <TopMenu />
            <AuthorizationMenu />
        </div>
    );
}

export default Header;
