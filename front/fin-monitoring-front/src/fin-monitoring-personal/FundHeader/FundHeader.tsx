import React from "react";
import styles from "../Fund/Fund.module.css";

export const FundHeader = () => {
    return <div className={`${styles.fund} ${styles.fund_header}`}>
        <div className={styles.options}>Fund name</div>
        <div className={styles.options}>Saved amount</div>
        <div className={styles.options}>Currency</div>
        <div className={styles.options}>Goal</div>
        <div className={styles.options}>%</div>
        <div className={styles.options}/>
    </div>
}
