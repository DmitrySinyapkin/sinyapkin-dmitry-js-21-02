import React from "react";
import './FishNameBlock.css'

export class FishNameBlock extends React.Component {
    render() {
        return (
            <div className="fish__block">
                <figure className="block__photo"><img src="" alt="" /></figure>
                <a href="" className="block__link">{this.props.name}</a>
                <div className="block__buy"><a href="" className="buy__link">Купить</a></div>
            </div>
        );
    }
}