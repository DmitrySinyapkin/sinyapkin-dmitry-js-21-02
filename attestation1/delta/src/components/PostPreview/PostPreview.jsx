import React from "react";
import './PostPreview.css';
import { Avatar } from 'antd';
import HelperWrapper from "../../wrappers/HelperWrapper/HelperWrapper";
import { Link } from "react-router-dom";

const PostPreview = (props) => {
    return (
        <div className="post__container">
            <Avatar className="post__avatar" shape="circle" src={props.avatar} />
            <HelperWrapper text={props.id}>
                <div className="post__name"><Link to={`/users/${props.id}`}>{props.fullName}</Link></div>
            </HelperWrapper>
            <div className="post__date">{props.date.slice(0, 10)}</div>
            <figure className="post__picture">
                <img src={props.picture} alt="Load error" />
            </figure>
            <div className="post__text-preview">{props.text}</div>
        </div>
    );
}

export default PostPreview;
