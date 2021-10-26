import React from "react";
import './Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <span className="footer__text"><a href="" className="footer__link">Контакты</a></span>
                <span class="footer__text">&#169; 2021 ИП Рыбов О.А</span>
            </div>
        );
    }
}