import produce from 'immer';
import { addUser } from '../api/dummyApi';

const initialState = {
    newUserId: '',
}

const addUserData = (draft, newUser) => {
    addUser(newUser).then(response => draft.newUserId = response.id);
    return draft;
}

const addUserReducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case 'REGFORM/ADD_USER':
            return addUserData(draft, action.user);
        default:
            return state; 
    }
});

export default addUserReducer;
