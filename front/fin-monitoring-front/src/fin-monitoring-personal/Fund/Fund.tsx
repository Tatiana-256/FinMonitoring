import React, {ChangeEvent, useState} from 'react'
import styles from './Fund.module.css'
import {IFund} from '../redux/fund-reduser';
import {Button} from "../../common-components/customButton/button";
import {AddingSum, SaveCancelButtons} from "../addingSum/addingSum";


interface IPropsStore {
    fund: IFund,
    deleteFund: (id: string) => void,
    editFund: (id: string, amount: number, fundNameStore: string, targetAmountStore: number) => void,
    onChangeFundName: (e: ChangeEvent<HTMLInputElement>) => void,
    onChangeGoal: (e: ChangeEvent<HTMLInputElement>) => void,
    onChangeCurrency: (e: ChangeEvent<HTMLSelectElement>) => void

}

export const Fund: React.FC<IPropsStore> = ({fund, deleteFund, onChangeFundName, onChangeCurrency, onChangeGoal, editFund}) => {

    const [addingSum, setAddingSum] = useState(false)
    const [edit, setEdit] = useState(false)

    const setForm = () => setAddingSum(prevState => !prevState)
    const setEditForm = () => setEdit(prevState => !prevState)


    const onSetForm = () => {
        editFund(fund.id, fund.amount, fund.fundName, fund.goal)
        setEditForm()
    }

    return <>
        {addingSum && <AddingSum setForm={setForm}/>}
        <div className={styles.fund}>
            {/*_____________________ FUND NAME ______________________*/}
            {edit ? <input defaultValue={fund.fundName} onChange={onChangeFundName} className={styles.options}/> :
                <div className={styles.options}>{fund.fundName}</div>}

            {/*_____________________ AMOUNT NAME ______________________*/}
            <div className={`${styles.options} ${styles.amount}`}>
                <div style={{padding: "0 15%"}}>
                    {fund.amount}
                </div>
                <div className={styles.add_amount} onClick={setForm}>+</div>
            </div>

            {/*_____________________ FUND CURRENCY ______________________*/}
            {edit ? <div className={styles.options}>
                    <select name="currency" placeholder={'currency'}
                            defaultValue={fund.currency}
                            onChange={onChangeCurrency}>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>UA</option>
                    </select>
                </div>
                :
                <div className={styles.options}>{fund.currency}</div>}

            {/*_____________________ FUND GOAL ______________________*/}
            {edit ? <input defaultValue={fund.goal} onChange={onChangeGoal} className={styles.options}/> :
                <div className={styles.options}>{fund.goal}</div>}

            <div
                className={styles.options}>{fund.goal === 0 ? "Put goal amount" : `${Math.round((fund.amount / fund.goal) * 100)}%`}
            </div>

            {/*_____________________ EDIT BUTTONS ______________________*/}
            <div className={styles.delete_button}>
                {edit ? <SaveCancelButtons setForm={setEditForm} onSetFormOk={onSetForm}/> :
                    <>
                        <Button buttonClass={'general'} onClick={setEditForm} style={{marginLeft: "1%"}}>
                            Edit
                        </Button>
                        <Button buttonClass={'red'} onClick={() => deleteFund!(fund.id)}>
                            Delete
                        </Button>
                    </>}
            </div>
        </div>
    </>
}


