import React from "react"
import {connect} from "react-redux"
import CartDetail from "./CartDetail"
import {decreaseProductCartAmountAC, deleteItemFromCartAC, increaseProductCartAmountAC} from "../../redux/CartReducer"

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.items,
        productItems: state.product.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseProductCartAmount: (productCartId) => {
            dispatch(increaseProductCartAmountAC(productCartId))
        },
        decreaseProductCartAmount: (productCartId) => {
            dispatch(decreaseProductCartAmountAC(productCartId))
        },
        deleteItemFromCart: (productCartId) => {
            dispatch(deleteItemFromCartAC(productCartId))
        },
    }
}

const CartDetailContainer = connect(mapStateToProps, mapDispatchToProps)(CartDetail)

export default CartDetailContainer