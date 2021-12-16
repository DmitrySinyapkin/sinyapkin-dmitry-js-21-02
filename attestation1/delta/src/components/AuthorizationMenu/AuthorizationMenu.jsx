import React from "react";
import './AuthorizationMenu.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../../actions/authorization';
import { Avatar } from 'antd';
import { useTranslation } from "react-i18next";

const AuthorizationMenu = ({ authUser, authorized, cancelUser }) => {
    const { t } = useTranslation();

    return ( authorized ? 
                            <div className="auth-menu">
                                <Link to={`/users/${authUser.id}`}>
                                    <div className="auth-menu__first user">
                                        <Avatar shape="circle" src={authUser.picture} />
                                        <div className="name">{authUser.firstName}</div>
                                    
                                    </div>
                                </Link>
                                <div className="auth-menu__second"><a href="" onClick={cancelUser}>{t('login.cancel')}</a></div>
                            </div>
                        :
                            <div className="auth-menu">
                                <div className="auth-menu__first"><Link to="/auth">{t('login.enter')}</Link></div>
                                <div className="auth-menu__second"><Link to="/reg">{t('login.reg')}</Link></div>
                            </div>
    );
}

export default connect(
    (state) => ({
        authUser: state.auth.authUser,
        authorized: state.auth.authorized,
    }),
    (dispatch) => bindActionCreators(actions, dispatch),
)(AuthorizationMenu);

