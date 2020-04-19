import React from "react"
import styles from "./BottomMenu.module.css"
import {NavLink} from "react-router-dom";

const BottomMenu = () => {
    return (
        <div className={styles.menuWrp}>
            <NavLink to="/" className={styles.homeBtn}>Home</NavLink>
            <NavLink to="/explore" className={styles.searchBtn}>Search</NavLink>
            <NavLink to="/cart" className={styles.cartBtn}>Cart</NavLink>
            <NavLink to="/offer" className={styles.offerBtn}>Offer</NavLink>
            <NavLink to="/account" className={styles.accountBtn}>Account</NavLink>
        </div>
    )
}

export default BottomMenu