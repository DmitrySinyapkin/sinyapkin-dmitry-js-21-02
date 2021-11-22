import React from "react";
import './TopMenu.css';
import { Menu } from 'antd';
import { UserOutlined, PictureOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";

const TopMenu = () => {
    return (
        <div className="menu">
            <Menu style={{ fontSize: '16px'}} mode="horizontal">
                <Menu.Item key="users" icon={<UserOutlined />}>Пользователи</Menu.Item>
                <Menu.Item key="posts" icon={<PictureOutlined />}><Link to="/">Посты</Link></Menu.Item>
            </Menu>
        </div>
    );
}

export default TopMenu;
