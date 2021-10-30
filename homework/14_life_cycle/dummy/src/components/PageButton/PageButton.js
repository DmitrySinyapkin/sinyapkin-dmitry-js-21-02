import React from "react";
import './PageButton.css';

const initialState = {active: false}

export class PageButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {
        return (
            <button className={this.props.activeNumber === this.props.number && 'button_active'} onClick={this.props.onClick}>{this.props.number}</button>
        );
    }
}
