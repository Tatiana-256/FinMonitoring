import React, {ChangeEvent, FC, useState} from 'react'
import styles from './add-item.module.css'
import {Button} from '../customButton/button'

interface IProps {
    name: string
    // onChangeFundName: (e: ChangeEvent<HTMLInputElement>) => void
    // onChangeTargetAmount: (e: ChangeEvent<HTMLInputElement>) => void
    // onChangeCurrency: (e: ChangeEvent<HTMLSelectElement>) => void,
    // onSubmitForm: () => void
    // onCancelForm: () => void
}

export const AddItem: React.FC<IProps> = ({name}) => {

    /*_____________________ ADDING NEW ITEM ______________________*/

    const [newItem, setAddItem] = useState(false)
    const showAddingFundForm = () => setAddItem(prevState => !prevState)


    return <>
        {newItem ? <div className={styles.add_item}>
                <input placeholder={`${name} name`} type='text' onChange={() => {
                }}/>
                <div className={styles.buttons}>
                    <Button buttonClass={'general'} onClick={() => {
                        "onSubmitForm"
                    }}>Add</Button>
                    <Button buttonClass={'red'} onClick={() => {
                        "onSubmitForm"
                    }}>Cancel</Button>
                </div>
            </div> :
            <div className={styles.add_fund}>
                <div style={{paddingLeft: '5vw'}}>
                    <div className={styles.plus} onClick={showAddingFundForm}>+
                    </div>
                </div>
                <div style={{padding: '0 30px'}}>Add new {name}</div>
            </div>}
    </>

}
