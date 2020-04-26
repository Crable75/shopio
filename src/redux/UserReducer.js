const SELECT_ADDRESS_TO_SHIP = "SELECT_ADDRESS_TO_SHIP"

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
            return state
        }
        default:
            return state
    }

}

export const selectAddressToShipAC = (addressId) => ({
    type: SELECT_ADDRESS_TO_SHIP,
    addressId
})

export default UserReducer