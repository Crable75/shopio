import React from "react";
import styles from "./Ship.module.scss"
import MainButton from "../MainButton/MainButton";
import {NavLink} from "react-router-dom";

const Ship = ({ userAddresses, selectedAddressId, selectAddressToShip }) => {

    const selectAddress = (addressId) => {
        selectAddressToShip(addressId)
    }

    const userAddressesList = userAddresses.map(item => {
        return (
            <div onClick={() => selectAddress(item.addressId)} key={item.addressId} className={selectedAddressId === item.addressId ? styles.addressWrpSelected : styles.addressWrp}>
                <span className={styles.addressTitle}>{item.addressName}</span>
                <span className={styles.addressTxt}>{item.addressLine}</span>
                <span className={styles.phone}>{item.phoneNumber}</span>
                <NavLink to={"/editaddress/" + item.addressId} className={styles.editLink}>
                    <button className={styles.addressEdit}>Edit</button>
                </NavLink>

            </div>
        )
    })
    return (
        <>
            {userAddressesList}
            <MainButton buttonText="Next" />
        </>
    )
}

export default Ship