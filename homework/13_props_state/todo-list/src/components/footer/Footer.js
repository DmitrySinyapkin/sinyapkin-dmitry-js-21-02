import React from "react";
import './Footer.css'

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <span>{this.props.copyright}</span>
            </div> 
        );     
    }
}
