import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import './PostList.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../../actions/loadPostList';
import PostPreview from "../../components/PostPreview/PostPreview";

const PostList = ({ darkTheme, posts, total, loading, loadPostList}) => {
    const [current, setCurrent] = useState(0);
    const [pageSize, setPageSize] = useState(6);

    useEffect(() => {
        loadPostList(0, 6);
    }, []);

    const changePage = (page, limit) => {
        setCurrent(page);
        setPageSize(limit);
        loadPostList(page -1, limit);
    }
    
    return (
        loading ? 
                    <div className="loader__container">
                        <Loader />
                    </div>
                :
                   <div className="posts__page">
                        <div className="posts__container">
                            {posts.map((item, index) =>
                                <PostPreview
                                    key={index}
                                    id={item.owner.id}
                                    avatar={item.owner.picture}
                                    title={item.owner.title}
                                    firstName={item.owner.firstName}
                                    lastName={item.owner.lastName}
                                    date={item.publishDate}
                                    picture={item.image}
                                    text={item.text}
                                    darkTheme={darkTheme}
                                /> 
                            )}
                        </div>
                        <div className="posts__footer">
                            <Pagination size="small"
                                        current={current}
                                        pageSize={pageSize}
                                        total={total}
                                        onChange={changePage}
                                        pageSizeOptions={[6, 12, 24, 48, 96]}
                            />
                        </div>
                   </div>
    );
}

export default connect(
    (state) => ({
        posts: state.posts.postList,
        total: state.posts.total,
        loading: state.posts.loading,
        darkTheme: state.theme.darkTheme,
    }),
    (dispatch) => bindActionCreators(actions, dispatch),
)(PostList);
