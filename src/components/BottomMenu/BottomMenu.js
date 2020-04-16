import React from "react"
import styles from "./BottomMenu.module.scss"
import {NavLink} from "react-router-dom";

const BottomMenu = () => {
    return (
        <div className={styles.menuWrp}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/offer">Offer</NavLink>
            <NavLink to="/account">Account</NavLink>
        </div>
    )
}

export default BottomMenu