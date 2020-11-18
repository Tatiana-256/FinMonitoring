import React, {ChangeEvent, FC, useState} from 'react'
import styles from './add-item.module.css'
import {Button} from '../customButton/button'

interface IProps {
    name: string,
    onChangeInputName: (e: ChangeEvent<HTMLInputElement>) => void,
    addNewItem: () => void
}

export const AddItem: React.FC<IProps> = ({name, addNewItem, onChangeInputName}) => {

    /*_____________________ ADDING NEW ITEM ______________________*/

    const [newItem, setAddItem] = useState(false)
    const showAddingFundForm = () => setAddItem(prevState => !prevState)

    const addNewCategory = () => {
        showAddingFundForm()
        addNewItem()

    }

    return <>
        {newItem ? <div className={styles.add_item}>
                <input placeholder={`${name} name`} type='text' onChange={onChangeInputName}/>
                <div className={styles.buttons}>
                    <Button buttonClass={'general'} onClick={addNewCategory}>Add</Button>
                    <Button buttonClass={'red'} style={{marginLeft: "5%"}} onClick={() => {
                        showAddingFundForm()
                    }}>Cancel</Button>
                </div>
            </div> :
            <div className={styles.add_fund}>
                <div style={{padding: '0 30px', fontSize: "1.5rem"}}>Add new {name}</div>
                <div>
                    <div className={styles.plus} onClick={showAddingFundForm}>+</div>
                </div>
            </div>}
    </>

}
