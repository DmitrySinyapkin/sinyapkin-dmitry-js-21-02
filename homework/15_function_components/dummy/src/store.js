import { createStore, combineReducers, applyMiddleware } from 'redux';
import userDataReducer from './reducers/userData';
import userListReducer from './reducers/userList';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers(
        {
            users: userListReducer,
            userData: userDataReducer,
        },
    ),
    applyMiddleware(thunk),
);

export default store;
