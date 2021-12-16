import React, {useState} from "react";
import './EditProfile.css';
import { Upload, Button, Form, Input, Radio } from 'antd';
import { UPLOAD_API_KEY, UPLOAD_URL } from "../../constants/imgbbApi";
import { useTranslation } from "react-i18next";

const EditProfile = ({ darkTheme, user, authUser, authorizeUser, cancelUser, updateUserData, closeEditor}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [gender, setGender] = useState(user.gender);
    const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);
    const [picture, setPicture] = useState(user.picture);
    const [phone, setPhone] = useState(user.phone);
    const [upload, setUpload] = useState('');

    const { t } = useTranslation();
    
    const uploadProps = {
        action: UPLOAD_URL,
        data: {
            key: UPLOAD_API_KEY,
            image: upload,
        },
        beforeUpload: (file) => {
            return new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const img = reader.result.replace(/^.*,/, '');
                    setUpload(img);
                    resolve(true);
                }
            });
        },
        onChange: (info) => {
            if (info.file.status === 'done') {
                setPicture(info.file.response.data.display_url);
            } else if (info.file.status === 'error') {
                alert(t('alerts.loadPhoto'));
                console.log(info.event);
            }
        },
    }

    const handlePhotoDelete = () => {
        setPicture('');
    }

    const handleSubmit = () => {
        const id = authUser.id;
        const updatedUser = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            dateOfBirth: dateOfBirth,
            picture: picture,
            phone: phone
        }

        updateUserData(user.id, updatedUser);
        cancelUser();
        authorizeUser(id);
        closeEditor();
    }

    const handleFailedValidation = () => {
        alert(t('alerts.regForm'));
    }

    return (
        <div className={`edit ${darkTheme && 'edit_dark'}`}>
            <figure>
                <img src={picture} alt={t('user.noPhoto')} />
            </figure>
            <div className="edit__img-buttons">
                <Upload {...uploadProps}>
                    <Button>{t('user.changePhoto')}</Button>
                </Upload>
                <Button onClick={handlePhotoDelete}>{t('user.deletePhoto')}</Button>
            </div>
            <Form onFinish={handleSubmit} onFinishFailed={handleFailedValidation}>
                    <Form.Item
                        name="firstName"
                        label={t('user.name')}
                        rules={[
                            {
                                message: t('validation.latters'),
                                pattern: /^[a-zA-Zа-яА-яёЁ]+$/,
                            },
                        ]}
                    >
                        <Input defaultValue={user.firstName} onChange={(event) => setFirstName(event.target.value)} />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        label={t('user.surname')}
                        rules={[
                            {
                                message: t('validation.latters'),
                                pattern: /^[a-zA-Zа-яА-яёЁ]+$/,
                            },
                        ]}
                    >
                        <Input defaultValue={user.lastName} onChange={(event) => setLastName(event.target.value)} />
                    </Form.Item>
                    <Form.Item name="gender" label={t('user.gender')}>
                        <Radio.Group defaultValue={user.gender === 'male' ? 'male' : 'female'} onChange={(event) => setGender(event.target.value)}>
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
                                pattern: /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/,
                            },
                        ]}
                    >
                        <Input defaultValue={user.dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label={t('user.phone')}
                        rules={[
                            {
                                message: t('validation.phone'),
                                pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                            },
                        ]}
                    >
                        <Input defaultValue={user.phone} onChange={(event) => setPhone(event.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">{t('user.save')}</Button>
                    </Form.Item>
            </Form>
        </div>
    );
}

export default EditProfile;
