import React from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import {Route} from "react-router-dom"
import ProductDetailContainer from "../ProductDetail/ProductDetailContainer"
import CartDetailContainer from "../CartDetail/CartDetailContainer"
import BottomMenu from "../BottomMenu/BottomMenu";
import styles from "./ContentArea.module.css"

const ContentArea = (props) => {
    return (
        <div className={styles.contentareaWrp}>
            <Route path="/product/:productId?" render={() => <ProductDetailContainer/>}/>
            <Route exact path="/" render={() => <ProductGrid state={props.state}/>}/>
            <Route exact path="/cart/" render={() => <CartDetailContainer/>}/>
            <BottomMenu/>
        </div>
    )
}

export default ContentArea