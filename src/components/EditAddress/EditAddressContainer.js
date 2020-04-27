import {connect} from "react-redux"
import EditAddress from "./EditAddress";
import {saveEditedAddressAC} from "../../redux/UserReducer";

const mapStateToProps = (state) => {
    return {
        userAddresses: state.user.userAddresses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveEditedAddress: (addressId, addressName, addressLine, phoneNumber) => {
            dispatch(saveEditedAddressAC(addressId, addressName, addressLine, phoneNumber))
        }
    }
}


const EditAddressContainer = connect(mapStateToProps, mapDispatchToProps)(EditAddress)

export default EditAddressContainer