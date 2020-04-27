import React from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import {Route} from "react-router-dom"
import ProductDetailContainer from "../ProductDetail/ProductDetailContainer"
import CartDetailContainer from "../CartDetail/CartDetailContainer"
import BottomMenu from "../BottomMenu/BottomMenu";
import styles from "./ContentArea.module.css"
import ShipContainer from "../Ship/ShipContainer";
import EditAddressContainer from "../EditAddress/EditAddressContainer";

const ContentArea = ({state}) => {
    return (
        <div className={styles.contentareaWrp}>
            <Route path="/product/:productId?" render={() => <ProductDetailContainer />} />
            <Route exact path="/" render={() => <ProductGrid state={state} />} />
            <Route exact path="/cart/" render={() => <CartDetailContainer />} />
            <Route exact path="/cart/ship" render={() => <ShipContainer />} />
            <Route path="/editaddress/:addressId" render={() => <EditAddressContainer />} />
            <BottomMenu/>
        </div>
    )
}

export default ContentArea