import React from "react"
import {connect} from "react-redux"
import Ship from "./Ship";


const mapStateToProps = (state) => {
    return {
        userAddresses: state.user.userAddresses,
        selectedAddressId: state.user.selectedAddressId
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//
//     }
// }

const ShipContainer = connect(mapStateToProps, {})(Ship)

export default ShipContainer