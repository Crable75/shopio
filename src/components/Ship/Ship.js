import React from "react";
import styles from "./Ship.module.scss"
import MainButton from "../MainButton/MainButton";

const Ship = ({ userAddresses, selectedAddressId }) => {

    const selectAddress = () => {

    }

    const userAddressesList = userAddresses.map(item => {
        return (
            <div onClick={selectAddress} key={item.addressId} className={selectedAddressId === item.addressId ? styles.addressWrpSelected : styles.addressWrp}>
                <span className={styles.addressTitle}>{item.addressName}</span>
                <span className={styles.addressTxt}>{item.addressLine}</span>
                <span className={styles.phone}>{item.phoneNumber}</span>
                <div className={styles.editWrp}>
                    <button className={styles.addressEdit}>Edit</button>
                    <img className={styles.deleteItem} src="/assets/images/icon-delete.svg" alt=""/>
                </div>
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