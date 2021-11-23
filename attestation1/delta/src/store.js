import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import authorizationReducer from './reducers/authorizationReducer';
import postListReducer from './reducers/postListReducer';
import userListReducer from './reducers/userListReducer';
import userDataReducer from './reducers/userDataReducer';

const store = createStore(
    combineReducers(
        {
            auth: authorizationReducer,
            posts: postListReducer,
            users: userListReducer,
            userData: userDataReducer,
        }
    ),
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
