import React from "react";
import './EnterBlock.css';

export class EnterBlock extends React.Component {
    render() {
        return (
            <div className="enter-container">
                <p>Нужно сделать</p>
                <div className="line-container">
                    <input type="text" value={this.props.text} onChange={this.props.onChange} className="input" />
                    <button className="add-button" onClick={this.props.onClick}>Добавить</button>
                </div>
            </div>
        );
    }
}
