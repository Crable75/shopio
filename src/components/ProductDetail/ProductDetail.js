import React, {useState} from "react";
import {NavLink, withRouter} from "react-router-dom";
import styles from "./ProductDetail.module.scss";
import ProductRating from "../ProductRating/ProductRating";

const ProductDetail = ({items, match, addProductToCart}) => {
    const [selectedSize, setSelectedSize] = useState(0);
    const [selectedColor, setSelectedColor] = useState("");

    const currentProductId = match.params.productId;

    let currentProduct = {};

    items.map(item => {
        if (item.id === currentProductId) {
            currentProduct = item;
        }
    });

    const onClickSize = (itemSize) => {
        setSelectedSize(itemSize);
        if (itemSize !== selectedSize) setSelectedColor("");
    };

    const onClickColor = (itemColor) => {
        setSelectedColor(itemColor);
    };

    const onAddToCart = (productId, selectedSize, selectedColor, productPrice) => {
        addProductToCart(productId, selectedSize, selectedColor, productPrice);
    };

    const productPrice = (currentProduct.discount * currentProduct.price).toFixed(2);

    let currentProductInfo = (
        <>
        <div className={styles.imgWrp}>
            <img className={styles.productImg} src={currentProduct.photos.big} alt=""/>
        </div>
        <div className={styles.txtWrp}>
            <span className={styles.productTitle}>{currentProduct.name}</span>
            <ProductRating rating={currentProduct.rating}/>
            <div className={styles.currentProductPriceWrp}>
                {currentProduct.discount === 1
                    ? <span className={styles.currentProductPrice}>{currentProduct.price}</span>
                    : <>
                        <span className={styles.currentProductPrice}>{productPrice}</span>
                        <div className={styles.oldPriceWrp}>
                            <span className={styles.oldProductPrice}>{currentProduct.price}</span>
                            <span className={styles.ProductDiscount}>{parseInt((1- currentProduct.discount) * 100)}% off</span>
                        </div>
                    </>
                }
            </div>
            <span className={styles.optionsTitle}>Select Size</span>
            <div className={styles.productSizeWrp}>
                {currentProduct.quantity.map((item, id) => (
                    <span onClick={() => onClickSize(item.size)}
                          className={item.size === selectedSize ? styles.productSizeSelected : styles.productSize}
                          key={id}>{item.size}
                    </span>
                ))}
            </div>
            {selectedSize
                ? <>
                <span className={styles.optionsTitle}>Select Color</span>
                <div className={styles.productColorWrp}>
                    {currentProduct.quantity.map(item => (
                        item.size === selectedSize
                            ? item.colors.map((color, id) => (
                                color.inStock !== 0
                                    ? <span onClick={() => onClickColor(color.colorName)}
                                            className={[
                                                styles.productColor,
                                                styles[color.colorName + "Color"],
                                                color.colorName === selectedColor ? styles["selectedColor"] : ""
                                            ].join(' ')}
                                            key={id}>
                                    </span>
                                    : null
                            ))
                            : null
                    ))
                    }
                </div>
                </>
                : null
            }
        </div>
        </>
    );

    return (
        <>
        {currentProductInfo}
        <button onClick={() => onAddToCart(currentProductId, selectedSize, selectedColor, productPrice)} className={styles.btnAddToCart}>Add To Cart</button>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart/">Cart</NavLink>
        </>
    )
};

export default withRouter(ProductDetail);