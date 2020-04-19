import React from "react"
import styles from "./ProductCard.module.css"
import ProductRating from "../ProductRating/ProductRating"

const ProductCard = (props) => {

    return (
        <>
        <div className={styles.productCard}>
            <div className={styles.imgWrp}>
                <img className={styles.productImg} src={props.itemPhotos} alt=""/>
            </div>
            <span className={styles.productTitle}>{props.itemName}</span>
            <ProductRating rating={props.itemRating}/>
            {props.itemDiscount === 1
                ? <span className={styles.currentProductPrice}>{props.itemPrice}</span>
                : (
                    <>
                    <span className={styles.currentProductPrice}>{(props.itemPrice * props.itemDiscount).toFixed(2)}</span>
                    <div>
                        <span className={styles.oldProductPrice}>{props.itemPrice}</span>
                        <span className={styles.ProductDiscount}>{Math.round((1 - props.itemDiscount) * 100)}% off</span>
                    </div>
                    </>
                )
            }
        </div>
        </>
    )
}

export default ProductCard