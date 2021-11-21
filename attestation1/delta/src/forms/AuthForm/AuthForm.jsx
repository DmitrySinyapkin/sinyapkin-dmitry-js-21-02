import React, { useEffect, useState } from "react";
import './AuthForm.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../../actions/authorization';



const AuthForm = ({redirectId, authorized, authorizeUser}) => {
    const [id, setId] = useState('');

    const handleButtonClick = () => {
        authorizeUser(id);
    };

    useEffect(() => {
        setId('');
    }, []);

    return (
        <div className="auth-form__page">
            <div className="auth-form">
                <div className="auth-form__container">
                    <h2>Вход</h2>
                    <div className="auth-form__label">ID:</div>
                    <div><input className="auth-form__input" type="text" placeholder="Введите свой ID" onChange={(event) => setId(event.target.value)} /></div>
                    <div><button className="auth-form__button" onClick={handleButtonClick}>Войти</button></div>
                    <div className="auth-form__reg">Еще нет аккаунта? Зарегистрироваться</div>
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => ({
        redirectId: state.auth.authUser.id,
        authorized: state.auth.authorized,
    }),
    (dispatch) => bindActionCreators(actions, dispatch),
)(AuthForm);

