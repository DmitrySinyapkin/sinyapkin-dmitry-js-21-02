import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authorizationReducer from './reducers/authorizationReducer';

const store = createStore(
    combineReducers(
        {
            auth: authorizationReducer,
        }
    ),
    applyMiddleware(thunk),
);

export default store;
