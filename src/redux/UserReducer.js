const SELECT_ADDRESS_TO_SHIP = "SELECT_ADDRESS_TO_SHIP"
const SAVE_EDITED_ADDRESS = "SAVE_EDITED_ADDRESS"

let initialState = {
    userInfo: {
        id: "usr1010",
        userName: "John Smith",
    },
    userAddresses: [
        {
            addressId: "adr1003",
            addressName: "Priscekila",
            addressLine: "3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States",
            phoneNumber: "+99 1234567890"
        },
        {
            addressId: "adr1004",
            addressName: "Ahmad Khaidir",
            addressLine: "23456 Nevada 52874 United States, Spring Hill Rd undefined Tallahassee",
            phoneNumber: "+94 0987654321"
        }
    ],
    selectedAddressId : "adr1003"
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ADDRESS_TO_SHIP: {
            return {
                ...state,
                selectedAddressId: action.addressId
            }
        }
        case SAVE_EDITED_ADDRESS: {
            const addressIndex = state.userAddresses.findIndex(item => item.addressId === action.addressId)

            // debugger
            // console.log(addressIndex)
            // console.log(action.addressName)
            // console.log(action.addressLine)
            // console.log(action.phoneNumber)
            return {
                ...state
            }
        }
        default:
            return state
    }

}

export const selectAddressToShipAC = (addressId) => ({
    type: SELECT_ADDRESS_TO_SHIP,
    addressId
})

export const saveEditedAddressAC = (addressId, addressName, addressLine, phoneNumber) => ({
    type: SAVE_EDITED_ADDRESS,
    addressId,
    addressName,
    addressLine,
    phoneNumber
})

export default UserReducer