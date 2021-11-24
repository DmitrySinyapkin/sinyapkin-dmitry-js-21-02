import React from "react";
import './UserCard.css';
import { FormOutlined } from '@ant-design/icons';

const UserCard = (props) => {
    return (
        <div className="user__container">
            <figure><img src={props.picture} alt="Load Error" /></figure>
            <div className="user__data">
                <div className="user__info">
                    <h2>{props.title ? `${props.title} ${props.firstName} ${props.lastName}` : `${props.firstName} ${props.lastName}`}</h2>
                    <div className="info__line"><span className="info__title">Пол: </span><span>{props.gender}</span></div>
                    <div className="info__line"><span className="info__title">Дата рождения: </span><span>{props.dateOfBirth}</span></div>
                    <div className="info__line"><span className="info__title">Дата регистрации: </span><span>{props.registerDate}</span></div>
                    <div className="info__line"><span className="info__title">E-mail: </span><span>{props.email}</span></div>
                    <div className="info__line"><span className="info__title">Телефон: </span><span>{props.phone}</span></div>
                </div>
                <div className="user__id"><span className="info__title">ID: </span><span>{props.id}</span></div>
            </div>
            <div className={`user__edit ${(props.authId === props.id) && "user__edit_visible"}`}><FormOutlined /><span className="edit__text">Редактировать</span></div>
        </div>
    );
}

export default UserCard;
