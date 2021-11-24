import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import authorizationReducer from './reducers/authorizationReducer';
import postListReducer from './reducers/postListReducer';
import userListReducer from './reducers/userListReducer';
import userDataReducer from './reducers/userDataReducer';
import registerUserReducer from './reducers/registerUserReducer';

const store = createStore(
    combineReducers(
        {
            auth: authorizationReducer,
            posts: postListReducer,
            users: userListReducer,
            userData: userDataReducer,
            newUser: registerUserReducer,
        }
    ),
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
