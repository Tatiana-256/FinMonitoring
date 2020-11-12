import React, {ChangeEvent, FC, useState} from 'react'
import styles from './Add-item.module.css'
import {Button} from "../../common-components/customButton/button";

interface IProps {
    showAddingFundForm: () => void,
    addNewFund: (name: string, currency: string, goal: number) => void
}

export const AddItem: React.FC<IProps> = ({showAddingFundForm, addNewFund}) => {

    const [fundName, setFundName] = useState("")
    const [targetAmount, setTargetAmount] = useState<number>(0)
    const [fundCurrency, setFundCurrency] = useState("USD")


    const onChangeFundName = (e: ChangeEvent<HTMLInputElement>) => {
        setFundName(e.currentTarget.value)
    }
    const onChangeTargetAmount = (e: ChangeEvent<HTMLInputElement>) => {
        setTargetAmount(Number(e.currentTarget.value))
    }

    const onChangeCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
        setFundCurrency(e.currentTarget.value)
    }

    const onSubmitForm = () => {
        addNewFund(fundName, fundCurrency, targetAmount)
        showAddingFundForm()
        console.log(fundName, targetAmount, fundCurrency)
    }

    const onCancelForm = () => {
        showAddingFundForm()
        setTargetAmount(0)
        setFundName('')
        setFundCurrency('')
    }

    return <div className={styles.add_item}>
        <input placeholder={'Fund name'} type='text' onChange={onChangeFundName}/>
        <input placeholder={'Target amount'} type='number' onChange={onChangeTargetAmount}/>
        <div>
            {/*<div>choose your currency</div>*/}
            <select name="currency" placeholder={'currency'} onChange={onChangeCurrency}>
                <option>USD</option>
                <option>EUR</option>
                <option>UA</option>
            </select>
        </div>
        {/*<input placeholder={'description'}/>*/}
        <div className={styles.buttons}>
            <Button buttonClass={'general'} onClick={onSubmitForm}>Add</Button>
            <Button buttonClass={'red'} onClick={onCancelForm}>Cancel</Button>
        </div>
    </div>
}
