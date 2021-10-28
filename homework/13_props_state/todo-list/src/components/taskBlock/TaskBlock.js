import React from "react";
import './TaskBlock.css';

export class TaskBlock extends React.Component {
    render() {
        return (
            <div className="task-block">
                <div className="task-check">
                    <input type="checkbox" />
                </div>
                <div className="task-text">{this.props.text}</div>
                <div className="task-delete">
                    <div className="del-btn">X</div>
                </div>
            </div>
        );
    }
}