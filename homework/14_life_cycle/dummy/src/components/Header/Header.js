import React from "react";
import './Header.css';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}
