import React from "react"
import styles from "./BottomMenu.module.css"
import {NavLink} from "react-router-dom";

const BottomMenu = () => {
    return (
        <div className={styles.menuWrp}>
            <NavLink exact to="/" className={styles.homeBtn} activeClassName={styles.activeBtn}>Home</NavLink>
            <NavLink exact to="/search" className={styles.searchBtn} activeClassName={styles.activeBtn}>Search</NavLink>
            <NavLink to="/cart" className={styles.cartBtn} activeClassName={styles.activeBtn}>Cart</NavLink>
            <NavLink to="/offer" className={styles.offerBtn} activeClassName={styles.activeBtn}>Offer</NavLink>
            <NavLink to="/account" className={styles.accountBtn} activeClassName={styles.activeBtn}>Account</NavLink>
        </div>
    )
}

export default BottomMenu