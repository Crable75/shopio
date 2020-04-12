import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./CartDetail.module.scss"



const CartDetail = ({cartItems, productItems, increaseProductCartAmount, decreaseProductCartAmount}) => {

    const increaseAmount = (productCartId) => {
        increaseProductCartAmount(productCartId)
    };

    const decreaseAmount = (productCartId) => {
        decreaseProductCartAmount(productCartId)
    };

    const productList = cartItems.map(item => {
        let img = productItems.find(findItem => findItem.id === item.productId);
        return (
            <div key={item.id} className={styles.itemWrp}>
                <div className={styles.productImgWrp}>
                    <img className={styles.productImg} src={img.photos.small} alt=""/>
                </div>
                <div className={styles.txtWrp}>
                    <div className={styles.titleWrp}>
                        <div className={styles.productTitle}>{productItems.find(item => item.productId = item.id).name}</div>
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
    });

    return (
        <>
            <div className={styles.itemListWrp}>
                <div>{productList}</div>
            </div>
            <NavLink to="/">Home</NavLink>
        </>
    )
};

export default CartDetail;