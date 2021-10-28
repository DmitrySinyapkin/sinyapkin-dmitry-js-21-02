import React from "react";
import './TaskBlock.css';

export class TaskBlock extends React.Component {
    render() {
        return (
            <div className="task-block">
                <div className="task-check">
                    <input type="checkbox" className={this.props.done && 'hidden'} onClick={this.props.markDone}/>
                </div>
                <div className={`task-text ${this.props.done && 'done'}`}>{this.props.text}</div>
                <div className="task-delete">
                    <div className="del-btn" onClick={this.props.onClick}>X</div>
                </div>
            </div>
        );
    }
}
