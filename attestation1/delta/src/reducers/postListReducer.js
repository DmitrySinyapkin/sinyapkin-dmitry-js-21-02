import produce from 'immer';

const initialState = {
    postList: [],
    total: 0,
    loading: false,
}

const showLoading = (draft) => {
    draft.loading = true;
    return draft;
}

const hideLoading = (draft) => {
    draft.loading = false;
    return draft;
}

const loadPostListSuccess = (draft, response) => {
    draft.postList = response.data;
    draft.total = response.total;
    return draft;
}

const postListReducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case 'POST_LIST/SHOW_LOADING':
            return showLoading(draft);
        case 'POST_LIST/HIDE_LOADING':
            return hideLoading(draft);
        case 'POST_LIST/LOADING_POST_LIST_SUCCESS':
            return loadPostListSuccess(draft, action.postList);
        default:
            return state;
    }
});

export default postListReducer;
