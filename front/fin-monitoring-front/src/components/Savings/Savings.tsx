import React, {useEffect, useState} from 'react'
import styles from './Savings.module.css'
import {Button} from "../../common-components/customButton/button";
import {fundsAPI, IFund} from "../../requests/api";
import {AddItem} from '../Add-Item/Add-item';
import {Fund} from "../Fund/Fund";

export const Savings = () => {

    const [newFund, setAddFund] = useState(false)
    const [funds, setFunds] = useState<Array<IFund>>([])

    const showAddingFundForm = () => setAddFund(prevState => !prevState)

    useEffect(() => {
        const funds = fundsAPI.getFunds()
            .then(data => {
                console.log(data)
                setFunds(data)
            })

        console.log(funds)

    }, [])

    return <div className={styles.add_item}>
        {newFund ?
            <AddItem showAddingFundForm={showAddingFundForm}/>
            :
            <div className={styles.add_fund}>
                <div style={{padding: '0 30px'}}>Add new fund</div>
                <div className={styles.plus} onClick={showAddingFundForm}>+</div>
            </div>
        }
        {funds.map(fund => <Fund fund={fund}/>)}

    </div>
}
