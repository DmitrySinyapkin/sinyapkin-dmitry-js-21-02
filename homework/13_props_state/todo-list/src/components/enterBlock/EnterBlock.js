import React from "react";
import './EnterBlock.css';

export class EnterBlock extends React.Component {
    render() {
        return (
            <div className="enter-container">
                <p>Ввод текста задачи</p>
                <div className="line-container">
                    <input type="text" className="input" />
                    <button className="add-button">Добавить</button>
                </div>
            </div>
        );
    }
}
