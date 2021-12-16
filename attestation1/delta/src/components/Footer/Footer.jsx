import React from "react";
import LanguageChanger from "../LanguageChanger/LanguageChanger";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <span className="footer__copyright">Delta world &#169; 2021</span>
            <div className="footer__changers">
                <LanguageChanger />
                <ThemeChanger />
            </div>
        </div>
    );
}

export default Footer;
