import produce from 'immer';

const initialState = {
    user: {},
    userLoading: false,
    postList: [],
    total: 0,
    postsLoading: false,
}

const showUserLoading = (draft) => {
    draft.userLoading = true;
    return draft;
}

const hideUserLoading = (draft) => {
    draft.userLoading = false;
    return draft;
}

const loadUserData = (draft, response) => {
    draft.user = response;
    return draft;
}

const showPostsLoading = (draft) => {
    draft.postsLoading = true;
    return draft;
}

const hidePostsLoading = (draft) => {
    draft.postsLoading = false;
    return draft;
}

const loadUserPosts = (draft, response) => {
    draft.postList = response.data;
    draft.total = response.total;
    return draft;
}


const userDataReducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case 'USER/SHOW_LOADING':
            return showUserLoading(draft);
        case 'USER/HIDE_LOADING':
            return hideUserLoading(draft);
        case 'USER/LOADING_USER_DATA':
            return loadUserData(draft, action.userData);
        case 'USER/SHOW_POSTS_LOADING':
            return showPostsLoading(draft);
        case 'USER/HIDE_POSTS_LOADING':
            return hidePostsLoading(draft);
        case 'USER/LOADING_USER_POST_LIST':
            return loadUserPosts(draft, action.postList);
        default:
            return state;
    }
});

export default userDataReducer;
