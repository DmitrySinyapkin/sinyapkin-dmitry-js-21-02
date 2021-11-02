import React, { useContext } from 'react';
import './User.css';
import { ThemeContext } from '../../contexts/ThemeContext';

export const User = (props) => {
    const themeContext = useContext(ThemeContext);
    return (
            <div className={`user__container ${themeContext.darkTheme && "user__container_dark"}`}>
                <figure className="user__photo">
                    <img src={props.picture} alt="Load Error"/>
                </figure>
                <div className={`user__name ${themeContext.darkTheme && "user__name_dark"}`}>
                    <span>{props.title} {props.firstName} {props.lastName}</span>
                </div>
            </div>
        );
    };

