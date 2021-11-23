import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import './User.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../../actions/loadUserData';
import UserCard from "../../components/UserCard/UserCard";
import PostPreview from "../../components/PostPreview/PostPreview";

const User = ({ user, userDataLoading, posts, total, userPostsLoading, authUser, loadUserData, loadUserPostList }) => {
    const [current, setCurrent] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const params = useParams();

    useEffect(() => {
        loadUserData(params.id);
        loadUserPostList(params.id, 0, 3);
    }, []);

    const changePage = (page, limit) => {
        setCurrent(page);
        setPageSize(limit);
        loadUserPostList(user.id, page - 1, limit);
    }

    return (
        <div className="user-form">
            {userDataLoading ?
                                <div className="loader__container">
                                    <Loader />
                                </div>
                            :
                                <UserCard
                                    picture={user.picture}
                                    fullName={`${user.title} ${user.firstName} ${user.lastName}`}
                                    gender={user.gender}
                                    dateOfBirth={user.dateOfBirth}
                                    registerDate={user.registerDate}
                                    email={user.email}
                                    phone={user.phone}
                                    id={user.id}
                                    authId={authUser.id}
                                />
            }
            {userPostsLoading ?
                                <div className="loader__container">
                                    <Loader />
                                </div>
                            :
                                <div>
                                    <div className="user-posts__container">
                                        {posts.map((item, index) =>
                                                <PostPreview
                                                    key={index}
                                                    id={item.owner.id}
                                                    avatar={item.owner.picture}
                                                    fullName={`${item.owner.title} ${item.owner.firstName} ${item.owner.lastName}`}
                                                    date={item.publishDate}
                                                    picture={item.image}
                                                    text={item.text}
                                                    hidden
                                                /> 
                                         )}
                                    </div>
                                    <div className="posts__footer">
                                        <Pagination size="small"
                                                    current={current}
                                                    pageSize={pageSize}
                                                    total={total}
                                                    onChange={changePage}
                                        />
                                     </div>
                                </div>
            }
        </div>
    );
}

export default connect(
    (state) => ({
        user: state.userData.user,
        userDataLoading: state.userData.userLoading,
        posts: state.userData.postList,
        total: state.userData.total,
        userPostsLoading: state.userData.postsLoading,
        authUser: state.auth.authUser,
    }),
    (dispatch) => bindActionCreators(actions, dispatch),
)(User);
