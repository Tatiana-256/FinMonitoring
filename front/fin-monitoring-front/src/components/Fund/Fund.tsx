import React, {useState} from 'react'
import styles from './Fund.module.css'
import {IFund} from '../../redux/fund-reduser';
import {Button} from "../../common-components/customButton/button";
import {AddingSum} from "../addingSum/addingSum";


interface IPropsStore {
    fund: IFund,
    deleteFund: (id: string) => void
}

export const Fund: React.FC<IPropsStore> = ({fund, deleteFund}) => {

    const [addingSum, setAddingSum] = useState(false)

    const setForm = () => setAddingSum(prevState => !prevState)

    return <>
        {addingSum && <AddingSum setForm={setForm}/>}
        <div className={styles.fund}>
            <div className={styles.options}>{fund.fundName}</div>
            <div className={`${styles.options} ${styles.amount}`}>
                <div>
                    {fund.amount}
                </div>
                <div className={styles.add_amount} onClick={setForm}>+</div>
            </div>
            <div className={styles.options}>{fund.currency}</div>
            <div className={styles.options}>{fund.goal}</div>
            <div
                className={styles.options}>{fund.goal === 0 ? "Put goal amount" : `${Math.round((fund.amount / fund.goal) * 100)}%`}
            </div>
            <div
                className={styles.delete_button}
            >
                <Button buttonClass={'red'} onClick={() => deleteFund!(fund.id)}
                >Delete
                </Button>
            </div>
        </div>
    </>
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

