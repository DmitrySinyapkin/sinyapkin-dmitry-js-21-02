import React from "react";
import './UserPreview.css';
import HelperWrapper from "../../wrappers/HelperWrapper/HelperWrapper";

const UserPreview = (props) => {
    return (
        <div className="user__container">
            <figure className="user__picture">
                <img src={props.picture} alt="Load Error" />
            </figure>
            <HelperWrapper text={props.id}>
                <div className="user__name">{props.title ? `${props.title} ${props.firstName} ${props.lastName}` : `${props.firstName} ${props.lastName}`}</div>
            </HelperWrapper>
        </div>
    );
}

export default UserPreview;
