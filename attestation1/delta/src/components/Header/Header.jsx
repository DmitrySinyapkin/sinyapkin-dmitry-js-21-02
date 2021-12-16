import React from "react";
import './Header.css';
import Logo from "../Logo/Logo";
import TopMenu from "../Menu/TopMenu";
import AuthorizationMenu from "../AuthorizationMenu/AuthorizationMenu";

const Header = (props) => {
    return (
        <div className="header">
            <Logo darkTheme={props.darkTheme} />
            <TopMenu darkTheme={props.darkTheme} />
            <AuthorizationMenu />
        </div>
    );
}

export default Header;
