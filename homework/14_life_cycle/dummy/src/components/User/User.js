import React from 'react';
import './User.css';

export class User extends React.Component {
    render() {
        return (
            <div className="user__container">
                <figure className="user__photo">
                    <img src={this.props.picture} alt={this.props.alt}/>
                </figure>
                <div className="user__name">
                    <span>{this.props.title} {this.props.firstName} {this.props.lastName}</span>
                </div>
            </div>
        );
    }
}
