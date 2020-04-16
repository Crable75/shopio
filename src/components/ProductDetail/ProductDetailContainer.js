import {connect} from "react-redux"
import ProductDetail from "./ProductDetail"
import {addProductToCartAC} from "../../redux/CartReducer"

const mapStateToProps = (state) => {
    return {
        items: state.product.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: (productId, productSize, productColor, productPrice) => {
            dispatch(addProductToCartAC(productId, productSize, productColor, productPrice))
        }
    }
}

const ProductDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetail)

export default ProductDetailContainer