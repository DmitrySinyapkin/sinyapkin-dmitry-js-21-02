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
            <button className={this.state.active && 'button_active'}>{this.props.number}</button>
        );
    }
}