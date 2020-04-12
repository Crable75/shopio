import React from "react"
import ProductGrid from "../ProductGrid/ProductGrid";
import {Route} from "react-router-dom";
import ProductDetailContainer from "../ProductDetail/ProductDetailContainer";
import CartDetailContainer from "../CartDetail/CartDetailContainer";

const ContentArea = (props) => {
    return (
        <div>
            <Route path="/product/:productId?" render={() => <ProductDetailContainer/>}/>
            <Route exact path="/" render={() => <ProductGrid state={props.state}/>}/>
            <Route exact path="/cart/" render={() => <CartDetailContainer/>}/>
        </div>
    )
};

export default ContentArea