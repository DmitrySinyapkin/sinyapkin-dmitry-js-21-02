import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import './UserData.css';

export const UserData = (props) => {
    const themeContext = useContext(ThemeContext);
    return (
        <div className={`user-data__container ${themeContext.darkTheme && "user-data__container_dark"}`}>
            <figure className="user-data__photo">
                <img src={props.picture} alt="Load Error"/>
            </figure>
            <div className={`user-data__data ${themeContext.darkTheme && "user-data__data_dark"}`}>
                <div>ID: {props.id}</div>
                <div>{props.title} {props.firstName} {props.lastName}</div>
                <div>Gender: {props.gender}   Date of birth: {props.dateOfBirth}</div>
                <div>Phone: {props.phone}   E-mail: {props.email}</div>
                <div>Address: {props.location.street}, {props.location.city}, {props.location.state}, {props.location.country}</div>
            </div>
        </div>
    );
} 