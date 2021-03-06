import { Pagination } from "antd";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { useParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import './User.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { openEditor, closeEditor, updateUserData, loadUserData, loadUserPostList } from '../../actions/loadUserData';
import { openPost, closePost } from '../../actions/loadPostList';
import { authorizeUser, cancelUser } from '../../actions/authorization';
import UserCard from "../../components/UserCard/UserCard";
import PostPreview from "../../components/PostPreview/PostPreview";
import ModalWrapper from "../../wrappers/ModalWrapper/ModalWrapper";
import OpenPost from "../OpenPost/OpenPost";
import EditProfile from "../EditProfile/EditProfile";


const User = ({ darkTheme, user, userDataLoading, posts, total, userPostsLoading, authUser, authorizeUser, cancelUser, loadUserData, loadUserPostList, post, isOpen, openPost, closePost, editorOpened, openEditor, closeEditor, updateUserData  }) => {
    const [current, setCurrent] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const params = useParams();

    useEffect(() => {
        loadUserData(params.id);
        loadUserPostList(params.id, 0, 6);
    }, []);

    useLayoutEffect(() => {
        closePost();
}, [])

    const changePage = (page, limit) => {
        setCurrent(page);
        setPageSize(6);
        loadUserPostList(user.id, page - 1, 6);
    }

    const openModal = (post) => {
        openPost(post);
    }

    const closeModal = () => {
        closePost();
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
                                    title={user.title}
                                    firstName={user.firstName}
                                    lastName={user.lastName}
                                    gender={user.gender}
                                    dateOfBirth={user.dateOfBirth}
                                    registerDate={user.registerDate}
                                    email={user.email}
                                    phone={user.phone}
                                    id={user.id}
                                    authId={authUser.id}
                                    darkTheme={darkTheme}
                                    edit={openEditor}
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
                                            <div onClick={() => openModal(item)} key={index}>
                                                <PostPreview
                                                    id={item.owner.id}
                                                    avatar={item.owner.picture}
                                                    title={item.owner.title}
                                                    firstName={item.owner.firstName}
                                                    lastName={item.owner.lastName}
                                                    date={item.publishDate}
                                                    picture={item.image}
                                                    text={item.text}
                                                    hidden
                                                    darkTheme={darkTheme}
                                                /> 
                                            </div>
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
            <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
                {isOpen && <OpenPost
                                id={post.id}
                                avatar={post.owner.picture}
                                ownerId={post.owner.id}
                                title={post.owner.title}
                                firstName={post.owner.firstName}
                                lastName={post.owner.lastName}
                                publishDate={post.publishDate}
                                picture={post.image}
                                text={post.text}
                            />}
            </ModalWrapper>
            <ModalWrapper isOpen={editorOpened} closeModal={closeEditor}>
                {editorOpened && <EditProfile
                                    darkTheme={darkTheme}
                                    user={user}
                                    authUser={authUser}
                                    updateUserData={updateUserData}
                                    authorizeUser={authorizeUser}
                                    cancelUser={cancelUser}
                                    closeEditor={closeEditor}
                                />
                }
            </ModalWrapper>
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
        editorOpened: state.userData.editorOpened,
        authUser: state.auth.authUser,
        darkTheme: state.theme.darkTheme,
        post: state.posts.post,
        isOpen: state.posts.isOpen,
    }),
    (dispatch) => ({
        loadUserData: bindActionCreators(loadUserData, dispatch),
        loadUserPostList: bindActionCreators(loadUserPostList, dispatch),
        openPost: bindActionCreators(openPost, dispatch),
        closePost: bindActionCreators(closePost, dispatch),
        openEditor: bindActionCreators(openEditor, dispatch),
        closeEditor: bindActionCreators(closeEditor, dispatch),
        updateUserData: bindActionCreators(updateUserData, dispatch),
        authorizeUser: bindActionCreators(authorizeUser, dispatch),
        cancelUser: bindActionCreators(cancelUser, dispatch),
    }),
)(User);
