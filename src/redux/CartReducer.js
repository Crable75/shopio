import shortid from 'shortid';

const ADD_TO_CART = "ADD_TO_CART";
const INCREASE_PRODUCT_CART_AMOUNT = "INCREASE_PRODUCT_CART_AMOUNT";
const DECREASE_PRODUCT_CART_AMOUNT = "DECREASE_PRODUCT_CART_AMOUNT";

let initialState = {
    items: [
        {
            id: "JE5D7F3qM",
            productId: "79AyEif3L",
            productSize: "6.5",
            productColor: "pink",
            price: 227.57,
            productAmount: 1
        },
        {
            id: "acVJbpD9H",
            productId: "UCp2IHsNu8",
            productSize: "8",
            productColor: "red",
            price: 340.25,
            productAmount: 1
        },
        {
            id: "3WXiYDdSyN",
            productId: "Hjk84Hy",
            productSize: "7",
            productColor: "black",
            price: 474.53,
            productAmount: 1
        },
    ]
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART: {
            let productPresentIndex = state.items.findIndex(item =>
                item.productId === action.productId &&
                item.productSize === action.productSize &&
                item.productColor === action.productColor);
            if (productPresentIndex !== -1) {
                return {
                    ...state,
                    items: state.items.map((item, id) => {
                        if (id === productPresentIndex) {
                            return {...item, productAmount: item.productAmount + 1}
                        }
                        return item;
                    })
                }
            } else {
                return {
                    ...state,
                    items: [
                        ...state.items,
                        {
                            id: shortid.generate(),
                            productId: action.productId,
                            productSize: action.productSize,
                            productColor: action.productColor,
                            price: action.productPrice,
                            productAmount: 1
                        }
                    ]
                };
            }
        }

        case INCREASE_PRODUCT_CART_AMOUNT: {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.productCartId) {
                        return {...item, productAmount: item.productAmount + 1}
                }
                    return item;
                })
            }
        }

        case DECREASE_PRODUCT_CART_AMOUNT: {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.productCartId && item.productAmount > 1) {
                        return {...item, productAmount: item.productAmount - 1}
                    }
                    return item;
                })
            };
        }

        default:
            return state;
    }

};

export const addProductToCartAC = (productId, productSize, productColor, productPrice) => ({
    type: ADD_TO_CART,
    productId,
    productSize,
    productColor,
    productPrice
});

export const increaseProductCartAmountAC = (productCartId) => ({
    type: INCREASE_PRODUCT_CART_AMOUNT,
    productCartId
});

export const decreaseProductCartAmountAC = (productCartId) => ({
    type: DECREASE_PRODUCT_CART_AMOUNT,
    productCartId
});

export default CartReducer;