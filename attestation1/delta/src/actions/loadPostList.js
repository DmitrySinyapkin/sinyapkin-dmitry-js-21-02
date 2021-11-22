import { getPostListApi } from "../api/dummyApi";

const showLoadingAction = () => ({
    type: 'POST_LIST/SHOW_LOADING',
});

const hideLoadingAction = () => ({
    type: 'POST_LIST/HIDE_LOADING',
});

const loadingPostListSuccessAction = (postList) => ({
    type: 'POST_LIST/LOADING_POST_LIST_SUCCESS',
    postList,
});

export const loadPostList = (page, limit) => (dispatch) => {
    dispatch(showLoadingAction());
    getPostListApi(page, limit)
        .then(response => dispatch(loadingPostListSuccessAction(response)))
        .finally(() => dispatch(hideLoadingAction()));
}
