import React from "react"
import styles from "./ProductRating.module.css"

const ProductRating = (props) => {
    const productRating = []

    for (let i = 1; i <= 5; i++) {
        if (i <= props.rating) {
            productRating.push('/assets/images/rating-star-yellow.svg')
        } else {
            productRating.push('/assets/images/rating-star-grey.svg')
        }
    }
    return (
        <div className={styles.ratingWrp}>
            {productRating.map((item, id) => (
                <img className={styles.ratingImg} src={item} key={id} alt=""/>
            ))}
        </div>
    )
}

export default ProductRating