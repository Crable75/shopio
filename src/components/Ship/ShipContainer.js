import React from "react"
import {connect} from "react-redux"
import Ship from "./Ship";
import {selectAddressToShipAC} from "../../redux/UserReducer";


const mapStateToProps = (state) => {
    return {
        userAddresses: state.user.userAddresses,
        selectedAddressId: state.user.selectedAddressId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        selectAddressToShip: (addressId) => {
            dispatch(selectAddressToShipAC(addressId))
        }
    }
}

const ShipContainer = connect(mapStateToProps, mapDispatchToProps)(Ship)

export default ShipContainer