import React from "react";
import './TaskBlock.css';

export class TaskBlock extends React.Component {
    render() {
        return (
            <div className="task-block">
                <div>{this.props.text}</div>
            </div>
        );
    }
}