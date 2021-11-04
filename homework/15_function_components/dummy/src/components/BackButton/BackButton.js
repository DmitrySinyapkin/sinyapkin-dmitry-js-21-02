import React from "react";
import './BackButton.css';

export const BackButton = (props) => {
    return (
        <button className="back-button" onClick={props.onClick}>Назад</button>
    );
}