import React, {ChangeEvent, FC, useState} from 'react'
import styles from './Add-item.module.css'
import {Button} from "../../common-components/customButton/button";

interface IProps {
    onChangeFundName: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeTargetAmount: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeCurrency: (e: ChangeEvent<HTMLSelectElement>) => void,
    onSubmitForm: () => void
    onCancelForm: () => void
}

export const AddItemFin: React.FC<IProps> = ({onChangeFundName, onChangeTargetAmount, onChangeCurrency, onSubmitForm, onCancelForm}) => {


    return <div className={styles.add_item}>
        <input placeholder={'Fund name'} type='text' onChange={onChangeFundName}/>
        <input placeholder={'Target amount'} type='number' onChange={onChangeTargetAmount}/>
        <div>
            <select name="currency" placeholder={'currency'} onChange={onChangeCurrency}>
                <option>USD</option>
                <option>EUR</option>
                <option>UA</option>
            </select>
        </div>
        <div className={styles.buttons}>
            <Button buttonClass={'general'} onClick={onSubmitForm}>Add</Button>
            <Button buttonClass={'red'} onClick={onCancelForm}>Cancel</Button>
        </div>
    </div>
}
