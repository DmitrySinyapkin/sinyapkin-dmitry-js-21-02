import React from "react";
import './TopMenu.css';
import { Menu } from 'antd';
import { UserOutlined, PictureOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const TopMenu = (props) => {
    const { t } = useTranslation();

    return (
        <div className="menu">
            <Menu style={{ fontSize: '16px'}} mode="horizontal" theme={props.darkTheme && 'dark'}>
                <Menu.Item key="users" icon={<UserOutlined />}><Link to="/users">{t('menu.users')}</Link></Menu.Item>
                <Menu.Item key="posts" icon={<PictureOutlined />}><Link to="/">{t('menu.posts')}</Link></Menu.Item>
            </Menu>
        </div>
    );
}

export default TopMenu;
