import produce from 'immer';

const initialState = {
    newUserId: '',
    redirect: false,
}

const setNewUserId = (draft, newUserId) => {
    draft.newUserId = newUserId;
    draft.redirect = true;
    return draft;
}

const preventRedirect = (draft) => {
    draft.redirect = false;
    return draft;
}

const addUserReducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case 'REGFORM/ADD_USER':
            return setNewUserId(draft, action.userId);
        case 'REGFORM/PREVENT_REDIRECT':
            return preventRedirect(draft);  
        default:
            return state; 
    }
});

export default addUserReducer;
