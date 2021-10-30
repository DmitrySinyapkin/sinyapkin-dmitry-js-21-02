import React from 'react';
import './User.css';

export class User extends React.Component {
    render() {
        return (
            <div className="user__container">
                <figure className="user__photo">
                    <img src={this.props.img} alt={this.props.alt}/>
                </figure>
                <div className="user__name">
                    <span>{this.props.name}</span>
                </div>
            </div>
        );
    }
}