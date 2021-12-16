import React, { useState, useEffect } from "react";
import './RegForm.css';
import { ThemeChanger } from "../../components/ThemeChanger/ThemeChanger";
import { Form, Input, Select } from 'antd';
import { Navigate } from 'react-router-dom';
import { addUserAction } from "../../actions/addUser";
import addUserStore from "../../stores/addUser";

const { Option } = Select;

const RegForm = (props) => {
    const [firstName, setFistName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');

    const handleRegButtonClick = props.onClick; 

    useEffect(() => {
        setId('');
        addUserStore.on('change', () => setId(addUserStore.getUserId()));
    }, []);

    const handleRegButton = (firstName, lastName, email, title, gender, phone) => {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            title: title,
            gender: gender,
            phone: phone
        };

        addUserAction(user);
        handleRegButtonClick();
    }

    return (
        <div>
            <div className="reg-form">
                <Form>
                    <Form.Item
                        name="firstName"
                        label="First Name"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your First Name',
                            pattern: /[A-Z][a-z]+/g
                          },
                        ]}
                    >
                        <Input onChange={(event) => setFistName(event.target.value)} />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        label="Last Name"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Last Name',
                            pattern: /[A-Z][a-z]+/g
                          },
                        ]}
                    >
                        <Input onChange={(event) => setLastName(event.target.value)} />
                    </Form.Item>
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                            {
                                message: 'Please select title!',
                            },
                        ]}
                    >
                        <Select onChange={(value) => setTitle(value)} placeholder="select your title">
                            <Option value="mr">mr</Option>
                            <Option value="ms">ms</Option>
                            <Option value="mrs">mrs</Option>
                            <Option value="miss">miss</Option>
                            <Option value="dr">dr</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[
                            {
                                message: 'Please select gender!',
                            },
                        ]}
                    >
                        <Select onChange={(value) => setGender(value)} placeholder="select your gender">
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                          {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                          },
                          {
                            required: true,
                            message: 'Please input your E-mail!',
                          },
                        ]}
                    >
                        <Input onChange={(event) => setEmail(event.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[
                          {
                            pattern: /[0-9]+/g,
                            message: 'Please input your phone'
                          },
                        ]}
                    >
                        <Input onChange={(event) => setPhone(event.target.value)} />
                    </Form.Item>
                </Form>
            </div>
            <div className="footer"> 
                <button className="reg-button" onClick={() => handleRegButton(firstName, lastName, email, title, gender, phone)}>Отправить</button>
                <ThemeChanger/>
            </div>
            {id && <Navigate to={`/${id}`}/>}
        </div>
    );
}

export default RegForm;
