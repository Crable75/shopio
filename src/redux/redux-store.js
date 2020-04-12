import { createStore, combineReducers } from 'redux';
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers ({
    product: ProductReducer,
    cart: CartReducer
});

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;