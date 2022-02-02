import { createStore, applyMiddleware } from "redux";
import { foodReducer } from "./food-reducer";
import { basketReducer } from "./basket-reducer";
import thunk from "redux-thunk";

const foodStore = createStore(foodReducer, applyMiddleware(thunk));
const basketStore = createStore(basketReducer, applyMiddleware(thunk));

export { foodStore, basketStore };
