import React from 'react';
import './User.css';
import { ThemeContextConsumer } from '../../contexts/ThemeContext';

export class User extends React.Component {
    render() {
        return (
            <ThemeContextConsumer>
                        {
                            (context) => (
                                <div className={`user__container ${context.darkTheme && "user__container_dark"}`}>
                                    <figure className="user__photo">
                                        <img src={this.props.picture} alt="Load Error"/>
                                    </figure>
                                    <div className={`user__name ${context.darkTheme && "user__name_dark"}`}>
                                        <span>{this.props.title} {this.props.firstName} {this.props.lastName}</span>
                                    </div>
                                </div>
                            )  
                        }
            </ThemeContextConsumer>
        );
    }
}
