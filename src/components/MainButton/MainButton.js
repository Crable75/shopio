import React from "react";
import styles from "./MainButton.module.scss";

const MainButton = ({onClickFunction, disableButton, buttonText}) => {
    return (
        <button onClick={onClickFunction}
                className={styles.mainButton}
                disabled={disableButton}>{buttonText}
        </button>
    )
}

export default MainButton