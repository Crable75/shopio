import React from "react"
import ProductCard from "../ProductCard/ProductCard"
import styles from "./ProductGrid.module.scss"
import {NavLink} from "react-router-dom"

const ProductGrid = (props) => {
    let productCardList = props.state.product.items.map(item => {
        return (
            <NavLink to={"/product/" + item.id} key={item.id} className={styles.productLink}>
                <ProductCard itemName={item.name}
                             itemPhotos={item.photos.big}
                             itemRating={item.rating}
                             itemPrice={item.price}
                             itemDiscount={item.discount}
                             itemId={item.id}
                />
            </NavLink>
        )
    })
    return (
        <div className={styles.productGrid}>
            {productCardList}
        </div>
    )
}

export default ProductGrid