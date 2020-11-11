import React from 'react'
import styles from './Fund.module.css'
import {IFund} from '../../redux/fund-reduser';
import {Button} from "../../common-components/customButton/button";


interface IPropsStore {
    fund: IFund,
    deleteFund: (id: string) => void
}

export const Fund: React.FC<IPropsStore> = ({fund, deleteFund}) => {
    return <div className={styles.fund}>
        <div className={styles.options}>{fund.fundName}</div>
        <div className={styles.options}>{fund.amount}</div>
        <div className={styles.options}>{fund.currency}</div>
        <div className={styles.options}>{fund.goal}</div>
        <div className={styles.options}>{Math.round((fund.amount / fund.goal) * 100)}%</div>
        <div
            className={styles.delete_button}
        >
            <Button buttonClass={'red'} onClick={() => deleteFund!(fund.id)}
            >Delete
            </Button>
        </div>
    </div>
}

// `${styles.description} ${styles.yellow}`

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

