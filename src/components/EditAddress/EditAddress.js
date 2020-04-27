import React, {useState} from "react";
import styles from "./EditAddress.module.scss"
import {withRouter} from "react-router-dom";
import MainButton from "../MainButton/MainButton";


const EditAddress = ({match, userAddresses, saveEditedAddress}) => {
    const addressId = match.params.addressId
    let editedAddress = {}
    userAddresses.map(item => {
        if (item.addressId === addressId) {
            editedAddress = item
        }
    })

    const [addressName, setAddressName] = useState(editedAddress.addressName)
    const [addressLine, setAddressLine] = useState(editedAddress.addressLine)
    const [phoneNumber, setPhoneNumber] = useState(editedAddress.phoneNumber)

    const editAddressLine = (e) => {
        setAddressLine(e.target.value)
    }

    const editAddressName = (e) => {
        setAddressName(e.target.value)
    }

    const editPhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }

    const onSaveAddress = () => {
        saveEditedAddress(addressId, addressName, addressLine, phoneNumber)
    }

    return (
        <>
            <input onChange={editAddressName} type="text" value={addressName} className={styles.editInput} />
            <input onChange={editAddressLine} type="text" value={addressLine} className={styles.editInput} />
            <input onChange={editPhoneNumber} type="text" value={phoneNumber} className={styles.editInput} />
            <img className={styles.deleteItem} src="/assets/images/icon-delete.svg" alt=""/>
            <MainButton onClickFunction={onSaveAddress} buttonText="Save" />
        </>
    )
}

export default withRouter(EditAddress)