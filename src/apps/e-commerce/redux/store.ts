import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './user/user-reducer';

const userStore = createStore(userReducer, applyMiddleware(thunk));

export {userStore};
