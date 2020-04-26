import { createStore, combineReducers } from 'redux'
import ProductReducer from "./ProductReducer"
import CartReducer from "./CartReducer"
import UserReducer from "./UserReducer";

const rootReducer = combineReducers ({
    product: ProductReducer,
    cart: CartReducer,
    user: UserReducer
})

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store