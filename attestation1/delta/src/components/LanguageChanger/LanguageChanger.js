import React from "react";
import 'antd/dist/antd.css';
import { Select } from 'antd';
import i18next from 'i18next';

const { Option } = Select;

const LanguageChanger = () => {
    const handleLanguageChange = (value) => {
        i18next.changeLanguage(value);
    }

    return (
        <div className="language-changer">
            <Select defaultValue="ru" onChange={handleLanguageChange}>
                <Option value="ru">Ru</Option>
                <Option value="en">En</Option>
            </Select>
        </div>
    );
}

export default LanguageChanger;
