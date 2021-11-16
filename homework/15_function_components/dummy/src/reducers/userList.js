import produce from 'immer';

const initialState = {
    users: [],
    total: 0,
};

const loadUserList = (draft, response) => {
    draft.users = response.data;
    draft.total = response.total; 
    return draft;
};

const userListReducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case 'USER_LIST/LOAD_USER_LIST':
            return loadUserList(draft, action.userList);
        default:
            return state; 
    }
});

export default userListReducer;
