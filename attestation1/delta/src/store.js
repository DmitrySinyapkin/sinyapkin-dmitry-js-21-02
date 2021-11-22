import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authorizationReducer from './reducers/authorizationReducer';
import postListReducer from './reducers/postListReducer';

const store = createStore(
    combineReducers(
        {
            auth: authorizationReducer,
            posts: postListReducer,
        }
    ),
    applyMiddleware(thunk),
);

export default store;
