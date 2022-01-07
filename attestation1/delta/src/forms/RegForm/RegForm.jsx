import React, { useEffect, useState } from "react";
import './RegForm.css';
import { Form, Input, Radio, Button } from 'antd';
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../../actions/registerUser';
import { useTranslation } from "react-i18next";

const RegForm = ({ darkTheme, id, redirect, addNewUser, preventRedirect }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const { t } = useTranslation();

    const handleSubmit = () => {
        const user = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            dateOfBirth: dateOfBirth,
            email: email,
            phone: phone
        }

        addNewUser(user);
    }

    const handleFailedValidation = () => {
        alert(t('alerts.regForm'));
    }

    useEffect(() => {
        preventRedirect();
    }, [])

    return (
        <div className="reg-form__page">
            <div className={`reg-form__container ${darkTheme && 'reg-form_dark'}`}>
                <Form onFinish={handleSubmit} onFinishFailed={handleFailedValidation}>
                    <h2>{t('regForm.header')}</h2>
                    <Form.Item
                        name="firstName"
                        label={t('user.name')}
                        rules={[
                            {
                                required: true,
                                message: t('validation.latters'),
                                pattern: /^[a-zA-Zа-яА-яёЁ]+$/,
                            },
                        ]}
                    >
                        <Input placeholder={t('regForm.placeholders.name')} onChange={(event) => setFirstName(event.target.value)} />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        label={t('user.surname')}
                        rules={[
                            {
                                required: true,
                                message: t('validation.latters'),
                                pattern: /^[a-zA-Zа-яА-яёЁ]+$/,
                            },
                        ]}
                    >
                        <Input placeholder={t('regForm.placeholders.surname')} onChange={(event) => setLastName(event.target.value)} />
                    </Form.Item>
                    <Form.Item name="gender" label={t('user.gender')} rules={[
                            {
                                required: true,
                                message: t('validation.gender'),
                            },
                        ]}>
                        <Radio.Group onChange={(event) => setGender(event.target.value)}>
                            <Radio value="male">{t('user.male')}</Radio>
                            <Radio value="female">{t('user.female')}</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="dateOfBirth"
                        label={t('user.birthday')}
                        rules={[
                            {
                                message: t('validation.birthday'),
                                pattern: /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d/,
                            },
                        ]}
                    >
                        <Input placeholder={t('regForm.placeholders.birthday')} onChange={(event) => setDateOfBirth(event.target.value)} />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                            type: 'email',
                            message: t('validation.email'),
                            },
                            {
                            required: true,
                            message: t('validation.email'),
                            },
                        ]}
                    >
                        <Input placeholder="example@example.com" onChange={(event) => setEmail(event.target.value)} />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label={t('user.phone')}
                        rules={[
                            {
                                required: true,
                                message: t('validation.phone'),
                                pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                            },
                        ]}
                    >
                        <Input placeholder={t('regForm.placeholders.phone')} onChange={(event) => setPhone(event.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">{t('regForm.button')}</Button>
                    </Form.Item>
                </Form>
                <div className="reg-form__auth">{t('regForm.message')}<Link to={'/auth'}>{t('regForm.link')}</Link></div>
            </div>
            {redirect && <Navigate to={`/users/${id}`}/>}
        </div>
    );
}

export default connect(
    (state) => ({
        id: state.newUser.newUserId,
        redirect: state.newUser.redirect,
        darkTheme: state.theme.darkTheme,
    }),
    (dispatch) => bindActionCreators(actions, dispatch),
)(RegForm);
