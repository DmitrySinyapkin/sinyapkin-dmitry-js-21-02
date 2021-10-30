import React from "react";
import './Header.css';
import { ThemeContextConsumer } from "../../contexts/ThemeContext";

export class Header extends React.Component {
    render() {
        return (
            <ThemeContextConsumer>
                {
                    (context) => (
                        <div className="header">
                            <h1 className={`header__text ${context.darkTheme && "header__text_dark"}`}>{this.props.name}</h1>
                        </div>
                    )  
                }
            </ThemeContextConsumer>
        );
    }
}
