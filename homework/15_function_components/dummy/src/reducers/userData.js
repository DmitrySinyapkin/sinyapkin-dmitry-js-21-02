import produce from 'immer';

const initialState = {
    user: {},
}

const loadUserData = (draft, response) => {
    draft.user = response;
    return draft;
}

const userDataReducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case 'USER_PAGE/LOAD_USER_DATA':
            return loadUserData(draft, action.userData);
        default:
            return state; 
    }
});

export default userDataReducer;
