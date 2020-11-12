import React from 'react';
import {Button} from "../../common-components/customButton/button";
import {inspect} from "util";
import styles from './addingSum.module.css'

interface IProps {
    setForm: () => void

}


export const AddingSum: React.FC<IProps> = ({setForm}) => {
    return <div className={styles.add_sum_container}>
        <div className={styles.add_sum}>
            <input placeholder={'Adding sum'} type='number'/>
            <div className={styles.history_info}>
                <div>sum</div>
                <div>date</div>
            </div>
            <SaveCancelButtons setForm={setForm}/>
        </div>
    </div>
}


interface ISaveCancelProps {
    setForm: () => void
}

export const SaveCancelButtons: React.FC<ISaveCancelProps> = ({setForm}) => {
    return <div className={styles.sum_buttons}>
        <Button buttonClass={'general'} onClick={setForm}>Save</Button>
        <Button buttonClass={'red'} onClick={setForm}>Cancel</Button>
    </div>
}
