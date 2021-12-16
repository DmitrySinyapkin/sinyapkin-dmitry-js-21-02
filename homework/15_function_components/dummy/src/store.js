import { createStore, combineReducers, applyMiddleware } from 'redux';
import userDataReducer from './reducers/userData';
import userListReducer from './reducers/userList';
import thunk from 'redux-thunk';
import addUserReducer from './reducers/addUser';

const store = createStore(
    combineReducers(
        {
            users: userListReducer,
            userData: userDataReducer,
            newUser: addUserReducer,
        },
    ),
    applyMiddleware(thunk),
);

export default store;
