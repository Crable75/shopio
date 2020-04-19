import React from "react"
import styles from "./CartDetail.module.css"



const CartDetail = ({cartItems, productItems, increaseProductCartAmount, decreaseProductCartAmount, deleteItemFromCart}) => {

    const increaseAmount = (productCartId) => {
        increaseProductCartAmount(productCartId)
    }

    const decreaseAmount = (productCartId) => {
        decreaseProductCartAmount(productCartId)
    }

    const deleteItem = (productCartId) => {
        deleteItemFromCart(productCartId)
    }

    let totalItemPrice = 0

    const productList = cartItems.map(item => {
        let img = productItems.find(findItem => findItem.id === item.productId)
        totalItemPrice += item.price * item.productAmount
        return (
            <div key={item.id} className={styles.itemWrp}>
                <div className={styles.productImgWrp}>
                    <img className={styles.productImg} src={img.photos.small} alt=""/>
                </div>
                <div className={styles.txtWrp}>
                    <div className={styles.titleWrp}>
                        <div className={styles.productTitle}>{productItems.find(item => item.productId = item.id).name}</div>
                        <img className={styles.deleteItem} onClick={() => {deleteItem(item.id)}} src="assets/images/icon-delete.svg" alt=""/>
                    </div>
                    <div className={styles.priceWrp}>
                        <span className={styles.productPrice}>${item.price}</span>
                        <div className={styles.counterWrp}>
                            <button onClick={() => {decreaseAmount(item.id)}} className={styles.cartItemCounterDec}>-</button>
                            <span className={styles.cartItemAmount}>{item.productAmount}</span>
                            <button onClick={() => {increaseAmount(item.id)}} className={styles.cartItemCounterInc}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    let shippingPrice = (totalItemPrice * 0.05).toFixed(2),
        importChargesPrice = (totalItemPrice * 0.07).toFixed(2),
        totalPrice = (+totalItemPrice + +shippingPrice + +importChargesPrice).toFixed(2)

    return (
        <>
            <div className={styles.itemListWrp}>
                <div>{productList}</div>
                <div className={styles.totalWrp}>
                    <div className={styles.totalItemWrp}>
                        <span className={styles.totalItemTitle}>Items ({cartItems.length}):</span>
                        <span className={styles.totalItem}>${totalItemPrice.toFixed(2)}</span>
                    </div>
                    <div className={styles.totalItemWrp}>
                        <span className={styles.totalItemTitle}>Shipping:</span>
                        <span className={styles.totalItem}>${shippingPrice}</span>
                    </div>
                    <div className={styles.totalItemWrp}>
                        <span className={styles.totalItemTitle}>Import charges:</span>
                        <span className={styles.totalItem}>${importChargesPrice}</span>
                    </div>
                    <span className={styles.totalDivider}> </span>
                    <div className={styles.totalItemWrp}>
                        <span className={styles.totalItemTitleBold}>Total price:</span>
                        <span className={styles.totalItemBold}>${totalPrice}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartDetail