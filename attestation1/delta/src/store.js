import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authorizationReducer from './reducers/authorizationReducer';
import postListReducer from './reducers/postListReducer';
import userListReducer from './reducers/userListReducer';

const store = createStore(
    combineReducers(
        {
            auth: authorizationReducer,
            posts: postListReducer,
            users: userListReducer,
        }
    ),
    applyMiddleware(thunk),
);

export default store;
