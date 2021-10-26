import React from "react";
import './FishTypeBlock.css';

export class FishTypeBlock extends React.Component {
    render() {
        return (
            <div className="type__block">
                <a href="" className="block__link">{this.props.link}</a>
                <p className="block__text">{this.props.text}</p>
            </div>
        );
    }
}