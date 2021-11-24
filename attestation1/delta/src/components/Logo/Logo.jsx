import React from "react";
import './Logo.css';
import { DingdingOutlined } from '@ant-design/icons';

const Logo = (props) => {
    return (
        <div className="logo__container">
            <DingdingOutlined style={{ fontSize: '25px' }} />
            <h1 className={props.darkTheme && 'h1_dark'}>Delta world</h1>
        </div>
    );
}

export default Logo;
