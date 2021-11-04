import React from "react";
import './BackButton.css';

export const BackButton = (props) => {
    return (
        <button onClick={props.onClick}>Назад</button>
    );
}