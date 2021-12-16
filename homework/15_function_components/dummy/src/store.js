import { createStore, combineReducers } from 'redux';
import userDataReducer from './reducers/userData';
import userListReducer from './reducers/userList';

const store = createStore(
    combineReducers(
        {
            users: userListReducer,
            userData: userDataReducer,
        },
    ),
);

export default store;
