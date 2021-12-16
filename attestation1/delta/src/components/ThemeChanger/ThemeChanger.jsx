import { Switch } from "antd";
import React from "react";
import './ThemeChanger.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../../actions/changeTheme';
import { useTranslation } from "react-i18next";

const ThemeChanger = ({ changeTheme }) => {
    const { t } = useTranslation();

    const handleThemeChange= () => {
        changeTheme();
    }

    return (
        <div className="theme-changer">
            <div className="theme-changer__text">{t('darkTheme')}</div>
            <Switch onChange={handleThemeChange} />
        </div>
    );
}

export default connect(
    () => {},
    (dispatch) => bindActionCreators(actions, dispatch),
)(ThemeChanger);
