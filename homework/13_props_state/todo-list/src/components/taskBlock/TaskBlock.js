import React from "react";
import './TaskBlock.css';

export class TaskBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {done: false};
        this.markDone = this.markDone.bind(this);
    }

    markDone() {
        this.setState({done: true});
    }

    render() {
        return (
            <div className="task-block">
                <div className="task-check">
                    <input type="checkbox" className={this.state.done && 'hidden'} onClick={this.markDone}/>
                </div>
                <div className={`task-text ${this.state.done && 'done'}`}>{this.props.text}</div>
                <div className="task-delete">
                    <div className="del-btn">X</div>
                </div>
            </div>
        );
    }
}