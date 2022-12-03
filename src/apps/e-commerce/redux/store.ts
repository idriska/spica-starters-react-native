import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { basketReducer } from './basket/basket-reducer';
import {userReducer} from './user/user-reducer';

const userStore = createStore(userReducer, applyMiddleware(thunk));
const basketStore = createStore(basketReducer, applyMiddleware(thunk));


export {userStore, basketStore};
