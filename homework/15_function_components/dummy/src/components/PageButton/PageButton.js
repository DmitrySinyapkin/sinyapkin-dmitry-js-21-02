import React from "react";
import './PageButton.css';

export const PageButton = (props) => {
    return (
        <button className={props.activeNumber === props.number && 'button_active'} onClick={props.onClick}>{props.number}</button>
    );
};
