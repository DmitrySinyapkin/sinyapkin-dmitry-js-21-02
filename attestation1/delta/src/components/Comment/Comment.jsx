import React from "react";
import './Comment.css';
import { Avatar } from 'antd';
import HelperWrapper from "../../wrappers/HelperWrapper/HelperWrapper";
import { Link } from "react-router-dom";

const Comment = (props) => {
    return (
        <div className={`comment ${props.darkTheme && 'comment_dark'}`}>
            <Avatar shape="circle" src={props.avatar} />
            <div className="comment__container">
                <div className="comment__header">
                    <HelperWrapper text={props.id}>
                        <div className="comment__owner"><Link to={`/users/${props.id}`}>{props.title ? `${props.title} ${props.firstName} ${props.lastName}` : `${props.firstName} ${props.lastName}`}</Link></div>
                    </HelperWrapper>
                    <div className="comment__date">{props.publishDate}</div>
                </div>
                <div className="comment__text">{props.text}</div>
            </div>
        </div>
    );
}

export default Comment;
