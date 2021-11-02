import React from 'react';
import './User.css';
import { ThemeContextConsumer } from '../../contexts/ThemeContext';

export const User = (props) => {
    return (
        <ThemeContextConsumer>
            {
                (context) => (
                    <div className={`user__container ${context.darkTheme && "user__container_dark"}`}>
                        <figure className="user__photo">
                            <img src={props.picture} alt="Load Error"/>
                        </figure>
                        <div className={`user__name ${context.darkTheme && "user__name_dark"}`}>
                            <span>{props.title} {props.firstName} {props.lastName}</span>
                        </div>
                    </div>
                )  
            }
        </ThemeContextConsumer>
        );
    };

