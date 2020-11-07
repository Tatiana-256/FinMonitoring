import React from 'react'
import styles from './Savings.module.css'
import {Button} from "../../common-components/customButton/button";

export const Savings = () => {
    return <div className={styles.add_item}>
        <input placeholder={'amount'} type='number'/>
        {/*<div>*/}
        {/*    <div>choose your currency</div>*/}
        {/*    <select name="currency" placeholder={'currency'}>*/}
        {/*        <option>USD</option>*/}
        {/*        <option>EUR</option>*/}
        {/*        <option>UA</option>*/}
        {/*    </select>*/}
        {/*</div>*/}
        {/*<input placeholder={'description'}/>*/}
        {/*<Button buttonClass={'general'}>Add</Button>*/}
    </div>
}
